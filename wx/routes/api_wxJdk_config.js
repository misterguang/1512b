var express = require('express');
var router = express.Router();
var fetch = require("node-fetch")
var jsSHA = require('jssha');
// 微信的配置
let wx_config = {
    appid: "wx5fb15a98caceeccd",
    redirect_uri: "http://wx.chenyuanguang.cn/authorization_server",
    secret: "0a2c26ca7d3bcfc38d5dafcb9b7a9f3f"
}

// 获取token
let getToken = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wx_config.appid}&secret=${wx_config.secret}`, {
            method: "get"
        }).then((data) => {
            data.json().then((data) => {

                console.log(data)
                resolve(data)


            })

        }).catch((err) => {
            console.log(1111)
            console.log(err)
            reject(err)
        })
    })
}

// 根据token获取ticket
let getTicket = (token) => {
        return new Promise((resolve, reject) => {
            fetch(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${token}&type=jsapi`, {
                method: "get"
            }).then((data) => {
                data.json().then((data) => {
                    console.log(data)
                    resolve(data)
                })

            }).catch((err) => {
                reject(err)
            })
        })
    }
    //创建noncestr
var createNonceStr = function() {
    return Math.random().toString(36).substr(2, 15);
};
//创建timestamp
var createTimeStamp = function() {
    return parseInt(new Date().getTime() / 1000) + '';
};

// 生成签名
let resData = (ticket, url, noncestr, timestamp) => {
    // 拼接字符串
    let creatSignature = () => {
        let str = `jsapi_ticket=${ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`
        var SHA1 = new jsSHA("SHA-1", "TEXT");
        SHA1.update(str);
        Signature = SHA1.getHash("HEX")
        console.log(Signature)
        return Signature
    }

    console.log({
        appid: wx_config.appid,
        jsapi_ticket: ticket,
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: creatSignature(), // 必填，签名
    })
    return {
        appid: wx_config.appid,
        jsapi_ticket: ticket,
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: creatSignature(), // 必填，签名
    }
}


router.post("/", function(req, res, next) {
    async function getTicketAll(param) {
        let token = await getToken()
        let ticket = await getTicket(token.access_token)
        return resData(ticket.ticket, req.body.url, createNonceStr(), createTimeStamp())
    }
    getTicketAll().then((data) => {
        console.log(data)
        res.send({
            code: "20001",
            data
        })
    }).catch((err) => {
        res.send({
            code: "20002",
            data: err
        })
    })
})
module.exports = router;