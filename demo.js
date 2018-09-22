function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false
  
    let proto = obj
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto)
    }
  
    return Object.getPrototypeOf(obj) === proto
  }

  var a = [1,2,3]

  var b = function(){
      return 3
  }
  var c = {}

  console.log(isPlainObject(a),"a")
  console.log(isPlainObject(b),"b")
  console.log(isPlainObject(c),"cß")
console.log(3)