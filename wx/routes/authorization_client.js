var express = require('express');
var router = express.Router();
var fetch = require("node-fetch")

// 微信的配置
let wx_config = {
    appid: "wx5fb15a98caceeccd",
    redirect_uri: "http://wx.chenyuanguang.cn/authorization_client",
    secret: "0a2c26ca7d3bcfc38d5dafcb9b7a9f3f"
}

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query.code)
    if (!req.query.code) {
        res.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx_config.appid}&redirect_uri=${wx_config.redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE&t=${new Date().getTime()}#wechat_redirect`)
    } else {
        res.render("authorization_client", { title: "authorization_client" })
    }

});

module.exports = router;