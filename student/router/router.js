var Student = require('../models/Student');
var Courouse = require('../models/Courouse');

exports.showIndex = function(req, res, next) {
  Student.find({}, function(err, result) {
    res.render('index', {
      'students': result
    })
  })
}

// Courouse.create({cid: 1001, name: '语文'});
// Courouse.create({cid: 1002, name: '数学'});
// Courouse.create({cid: 1003, name: '英语'});

exports.showAdd = function(req, res, next) {
  res.render('add');
}

exports.doadd = function(req, res, next) {
  Student.create(req.query, function() {
    console.log('add success');
    // res.send('数据添加成功!');
    Courouse.create
    res.redirect('/');
  });
}

exports.edit = function(req, res, next) {
  var sid = parseInt(req.params['sid']);
  Student.findOne({'sid': sid}, function(err, result) {
    if (err) {
      res.send('查询出错');
      return;
    }
    res.render('edit', {
      'student': result
    })
  })
}

exports.doedit = function(req, res, next) {
  var sid = parseInt(req.query['sid']);
  Student.update({'sid': sid}, req.query, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/');
  })
}

exports.delete = function(req, res, next) {
  var sid = parseInt(req.params['sid']);
  Student.remove({'sid': sid}, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    res.send('删除成功!');
  })
}
