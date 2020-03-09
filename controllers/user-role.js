var studentInfoModel = require('../models/user')

function login (req, res, next) {
  console.log(req.query)
  studentInfoModel.findAll({
    where: {'name': '欧贺福'},
    attributes: ['id', 'name']
  }).then(student => {
    res.json({
      errCode: 0,
      errMsg: '操作成功',
      list: student
    });
    console.log('login');
  });
}

function adminLogin (req, res, next) {
  studentInfoModel.findAll({
    where: {'name': '欧贺福'},
    attributes: ['id', 'name']
  }).then(student => {
    // res.json({
    //   errCode: 0,
    //   errMsg: '操作成功',
    //   list: student
    // });
    next()
    console.log('adminLogin');
  });
}

module.exports = {
  login,
  adminLogin
}
