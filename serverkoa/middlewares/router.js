const Router = require('koa-router')
const glob = require('glob')
const {resolve} = require('path')

module.exports=(app)=>{
    let router={}
    glob.sync(resolve(__dirname, '../routes/*.js')).forEach((item)=>router=require(item))
    app.use(router.routes())
    app.use(router.allowedMethods())
}