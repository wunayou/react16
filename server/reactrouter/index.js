exports.index = function(req, res) {
    res.render('index',{foo: {bar: 'baz'}});
  };

//   exports.index = function(req, res) {
//     res.render('index', {title: 'Express', foo: {bar: 'baz'}});
//   };