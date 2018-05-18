var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);


var authorization_server = require('./routes/authorization_server');
app.use('/authorization_server', authorization_server);
var authorization_client = require('./routes/authorization_client');
app.use('/authorization_client', authorization_client);


// 微信jdk接口
var api_wxJdk_config = require('./routes/api_wxJdk_config');
app.use('/api_wxJdk_config', api_wxJdk_config);
// 微信分享页面
var wx_share = require('./routes/wx_share');
app.use('/wx_share', wx_share);

// 微信jdk其他使用
var wx_other = require('./routes/wx_other');
app.use('/wx_other', wx_other);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;