var express = require('express');
var router = express.Router();
// 使用node-fetch请求微信后台接口
var fetch = require("node-fetch")

// 微信的配置
let wx_config = {
        appid: "wx5fb15a98caceeccd",
        redirect_uri: "http://wx.chenyuanguang.cn/authorization_server",
        secret: "0a2c26ca7d3bcfc38d5dafcb9b7a9f3f"
    }
    // 编译出合格的推广（授权连接）
let getCode = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx_config.appid}&redirect_uri=${wx_config.redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE&t=${new Date().getTime()}#wechat_redirect`

console.log(getCode)


// 通过code换取token

let getToken = (code) => {
        return new Promise((resolve, reject) => {
            fetch(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${wx_config.appid}&secret=${wx_config.secret}&code=${code}&grant_type=authorization_code`, {
                method: "get"
            }).then((data) => {
                data.json().then((data) => {
                    console.log(data)
                        // 验证code是否正确的换取token，如果code失效，则重定向重新换取code地址

                    if (data.errcode) {
                        reject(data)
                    } else {
                        resolve(data)
                    }

                })

            }).catch((err) => {
                reject(err)
            })
        })
    }
    // 通过token获取用户的信息

let getUserInfo = (tokenObj) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.weixin.qq.com/sns/userinfo?access_token=${tokenObj.access_token}&openid=${tokenObj.openid}&lang=zh_CN`, {
            method: "get"
        }).then((data) => {
            data.json().then((data) => {
                // console.log(data)
                resolve(data)
            })

        }).catch((err) => {
            reject(err)
        })
    })
}

// 做用户信息的缓存
let userInfo = {

}

/* GET home page. */
router.get('/', function(req, res, next) {
    let { code } = req.query
    // 检测用户是否登录，且缓存用户列表中是否存在
    if (req.cookies.userId && userInfo[req.cookies.userId]) {

        res.render("authorization_server", { title: "authorization_server", data: userInfo[req.cookies.userId] })
        // 如果code存在，则发起用户信息的请求
    } else if (code) {
        async function getDataAll(param) {
            let tokenObj = await getToken(code)
            let userInfo = await getUserInfo(tokenObj)
            return userInfo
        }
        getDataAll().then((data) => {
            userInfo = {
                [data.openid]: data
            }
            res.cookie('userId', data.openid, { expires: new Date(Date.now() + 86400000), httpOnly: true });
            res.render("authorization_server", { title: "authorization_server", data })
        }).catch(() => {
            // 如果在请求用户信息的过程中，存在错误，则重新进入授权页面
            res.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx_config.appid}&redirect_uri=${wx_config.redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE&t=${new Date().getTime()}#wechat_redirect`)
        })

    // 重定向
    } else {
        res.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx_config.appid}&redirect_uri=${wx_config.redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE&t=${new Date().getTime()}#wechat_redirect`)
    }

});

module.exports = router;