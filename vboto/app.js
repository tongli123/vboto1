var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var api = require('./routes/api');
var accountadd = require('./routes/accountadd');
var accountupdate = require('./routes/accountupdate');
var leavemessage = require('./routes/leavemessage');
var pic = require('./routes/pic');
var article = require('./routes/article');
var menu = require('./routes/menu');

var  menu1 = require('./routes/menu1')

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vboto');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('连接成功了')
});


// app.use(session({
//     secret: 'test secret',
//     cokkie: { maxAge: 60 * 1000 * 300 } //过期时间 ms
// }))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', api);
app.use('/accountadd', accountadd);
app.use('/accountupdate',accountupdate);
app.use('/leavemessage',leavemessage);
app.use('/pic',pic);
app.use('/article',article);
app.use('/menu',menu);

app.use('/menu1',menu1)

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
