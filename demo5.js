// 引入包
var mongoose = require('mongoose');
// 创建一个数据库连接，如果数据库不存在则创建
mongoose.connect('mongodb://localhost/testdb');

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  comments: [{
    body: String,
    date: Date
  }]
});

catSchema.methods.comment = function (obj, callback) {
  this.comments.push(obj);
  this.save();
}

var Cat = mongoose.model("Cat", catSchema);


// name + findOne 肯定只会操作一条数据，因为第二条以后的数据就没法评论了
// 查询如果只有一条而且需要精准到位，必须查询具有唯一性的字段
Cat.findOne({name: "Larry"}, function (err, cat) {
  if (err || !cat) {
    console.log('操作出现问题');
    return;
  }
  cat.comment({body: "第二个评论", date: new Date()});
})