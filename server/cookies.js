/**
 * 本来想把sessions 与 cookies 一起  最后还是算了 
 *  
 * cookies的特点 
 * 1、 他是header的一个属性 所以它可以通过 res.header.cookie获取
 * 2、 它是浏览器存储，针对域名存储的一个数据，所以浏览可以读取 通过  document.cookie读写 设置时间过期 就读取不到了
 * 3、 如果浏览器可以通过JS修改，不放心 所以cookie 有一个httponly 只有服务器才能修改
 * response.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);  这是原生设置COOKIES的方法  cookies 里面还有过期时间 还有域名区域的限制 
 * 不记得怎么设置了，反正是用express 要设置 就看源码吧 
 * 
 * express 设置cookies的方法是 res.cookies={}
 * 
 * cookie-parser  这种中间件 的作用就是读取cookie  然后把cookie 放在res上面
 * 像 KOA jwt的中间件一样的 就是读取token 然后把token 放在ctx.token里面 
 * 但是如果重写的COOKIE这个属性了 那么这个中间件就没有作用了
 * 还有加密 这种方式也没有静下心来学习了
 */