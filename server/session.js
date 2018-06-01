var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
 
var app = express();
 
app.use(cookieParser());
app.use(session({
    secret: '12345',
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));
 
/** 
 * 
 * session 是把ID 当COOKIES当在浏览器
 * 然后可以根据这个ID 找到相对应的数据
 * store 是可以自定义的数据
 * 
 * 为什么要引用session
 * 解决了什么问题
 * 解决这个问题又产生了什么新的问题
 * 如何更加合理的解决这个问题
 * 如果把信息全部放在cookies，信息过大，cookies有限制
 * 安全问题
 * 经验不足 不知道还有其它原因 要使用session
 * session 的解决方案是什么
 * 1、cookies 保存session_id
 * 2、通过session_id 得到查询信息
 * 
 * 产生的问题
 * session的数据存在那里 内存 还是数据库
 * express-session 他是保存在内存里面的
 * 只要重启node服务，这些数据就没有了，
 * 
 * 更新问题
 * 
 * 删除问题
 * 
 * 创建问题
 * 
 * https://segmentfault.com/q/1010000010862121
 * 
 * uuid的使用
*/
 

app.get('/awesome', function(req, res){
     
    console.log(req.cookies)
    console.log(req.sessionID)
    if(req.session.lastPage) {
        console.log('Last page was: ' + req.session.lastPage + ".");   
    }   
    req.session.lastPage = '/awesome'; //每一次访问时，session对象的lastPage会自动的保存或更新内存中的session中去。
    res.send("You're Awesome. And the session expired time is: " + req.session.cookie.maxAge);
});
 
app.get('/radical', function(req, res){
    console.log(req.cookies)
    console.log(req.sessionID)
    if (req.session.lastPage) {
        console.log('Last page was: ' + req.session.lastPage + ".");   
    }
    req.session.lastPage = '/radical'; 
    res.send('What a radical visit! And the session expired time is: ' + req.session.cookie.maxAge);
});
 
app.get('/tubular', function(req, res){
    console.log(req.cookies)
    console.log(req.sessionID)
    if (req.session.lastPage){
        console.log("Last page was: " + req.session.lastPage + ".");   
    }
 
    req.session.lastPage = '/tubular';
    res.send('Are you a suffer? And the session expired time is: ' + req.session.cookie.maxAge);
});
 
 
app.listen(5000);