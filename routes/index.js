
var test = require("../apis/test");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.test = function(req, res){
  test.getUserList(req, res);
};
