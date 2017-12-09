var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dongnao');

var db = mongoose.connection;

db.once('open', function() {
  console.log("数据库成功连接...");
})
