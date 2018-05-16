var express = require('express');
var router = express.Router();
var fetch = require("node-fetch")
var jsSHA = require('jssha');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("wx_other", { title: "微信jdk其他使用" })
});

module.exports = router;