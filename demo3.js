// 引入包
var mongoose = require('mongoose');
// 创建一个数据库连接，如果数据库不存在则创建
mongoose.connect('mongodb://localhost/testdb');

var db = mongoose.connection;

db.once('open', function () {
  console.log("数据库成功连接...");
});

/**
 * Schema: 本身不具备操作能力
 * Model: 由Schema发布生成的模型，具有抽象属性和行为的数据库操作能力
 * Entity: 由model创建的实体，他的操作也会影响到数据库
 */

// 博客集合的对象
var blogSchema = new mongoose.Schema({
  title: String,
  author: String
})

// 增加一个方法
blogSchema.methods.showInfo = function () {
  console.log(this.title);
}

// 通过model创建一个模型
// 当我们拥有了model，也就相当于给mongoose一把操作数据库的钥匙，然后可以使用model来增删改查
var Blog = mongoose.model("Blog", blogSchema);

var blog = new Blog({
  title: '我的博客',
  author: 'Steven'
})

// blog.save();
blog.showInfo();
