var express = require('express');
var router = express.Router();
var fetch = require("node-fetch")
var jsSHA = require('jssha');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("wx_share", { title: "微信分享" })
});

module.exports = router;