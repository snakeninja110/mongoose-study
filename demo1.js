// 引入包
var mongoose = require('mongoose');
// 创建一个数据库连接，如果数据库不存在则创建
mongoose.connect('mongodb://localhost/testdb');

// 通过model创建一个模型
// 实体类
var Cat = mongoose.model('Cat', {name: String, age: Number, sex: String});
// 当Cat里面有不存在的属性时，不会插入数据库

// var tom = new Cat({name: "Tom", age: 20, sex: "公猫"})

// 当Cat里面有不存在的属性时，不会插入数据库
var tom = new Cat({name: "Jerry", age: 5, sex: "母"}) // weight不会被插入

// 当实体属性与Cat里面的类型不匹配的时候，数据不会插入
// var tom = new Cat({name: "小白", age: 'tts', sex: "母猫"}) // 此条不会插入数据库

// MongoDB连接时需要自己写查询或操作语句

tom.save(function (err) { // 这里会执行insert
  if (err) {
    console.log(err);
    return;
  }
  console.log('save success');
});

