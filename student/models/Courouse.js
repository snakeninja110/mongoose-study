var mongoose = require('mongoose');

var courouseSchema = new mongoose.Schema({
  cid: Number,
  name: String,
  students: [Number]
});

courouseSchema.static.addStudent = function(cidArr, sid, callback) {
  for (let i = 0; i < cidArr.length; i++) {
    Courouse.update({'cid': cidArr[i]}, {$push: {'student': sid}}, function() {
      console.log('添加课程成功');
    })
  }
};

var Courouse = mongoose.model('Courouse', courouseSchema);

module.exports = Courouse;