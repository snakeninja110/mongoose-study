// 引入包
var mongoose = require('mongoose');
// 创建一个数据库连接，如果数据库不存在则创建
mongoose.connect('mongodb://localhost/testdb');

var studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String
});

studentSchema.methods.ageIncrease = function () {
  this.age++;
  this.save();
}

var Student = mongoose.model('Student', studentSchema);

var ming = new Student({
  name: '小明',
  age: 12,
  sex: '男'
});

// ming.save();

Student.findOne({name: '小明'}, function (err, student) {
  student.ageIncrease();
})

