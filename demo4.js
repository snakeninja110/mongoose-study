// 引入包
var mongoose = require('mongoose');
// 创建一个数据库连接，如果数据库不存在则创建
mongoose.connect('mongodb://localhost/testdb');

var db = mongoose.connection;

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String
})

catSchema.methods.findType = function (callback) {
  this.model('Cat').find({sex: this.sex}, callback);
}

var Cat = mongoose.model('Cat', catSchema);

// 查询name=Jerry，且类型和Jerry一样的数据
Cat.findOne({name: 'Jerry'}, function (err, result) {
  var fox = result;
  // 找到同样性别的数据
  fox.findType(function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  })
  
})
