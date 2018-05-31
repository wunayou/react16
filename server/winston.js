var express = require('express')
var morgan = require('morgan')
var winston = require('winston')
var app = express()
winston.transports.DailyRotateFile = require('winston-daily-rotate-file');
app.use(morgan('combined'))
winston.add(winston.transports.File, { filename: 'somefile.log' })
var statisLogger = new (winston.Logger)({
    exitOnError: false,
    transports: [
        new (winston.transports.File)({ filename: 'somefile.log' }),
        new (winston.transports.DailyRotateFile)({
            filename: 'h5_statis',
            dirname: './var/logs/',
        }),
       
    ]
});

app.use(function (req, res, next) {
    var page = req.originalUrl;
    var userId = '';
    if (res.locals.userId) {
        userId = res.locals.userId;
    }
    var ip = req.get("X-Real-IP") || req.get("X-Forwarded-For") || req.ip;
    var route = ""
    statisLogger.info({
        'route': route,
        'userId': userId,
        source: res.locals.cs,
        ip: ip,
        page: page
    });
    next();
});
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(3003)

// var logger = new (winston.Logger)({
//     transports: [
//        new (winston.transports.Console)(),
//        new (winston.transports.File)({ filename: '2012-07-09.log' })
//    ]
// });

// logger.log('info', 'Test Log Message', { anything: 'This is metadata' });