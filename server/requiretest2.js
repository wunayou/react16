exports.a= a =[]
exports.b= ()=>{
    a.push(1)
}
require("./requiretest1.js")
console.log(a)
