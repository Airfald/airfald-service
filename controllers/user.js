var userModel = require('../models/user')
let jwt = require('../middlewares/jwt')

function getUserInfo (req, res, next) {
  let jwtToken = req.headers.authorization;
  let data = jwt.decode(jwtToken);

  res.json({
    code: 0,
    message: '操作成功',
    data: data.payload
  });
}

async function login (req, res, next) {
  try {
    const { userName, password } = req.query;
    // 1. 查找用户中有的账号
    let user = await userModel.findOne({
      where: {
        userName: '欧贺福',
        password: 123456
      }
    })
    if (user) {
      let jwtToken = jwt.sign(user.dataValues);
      res.json({
        code: 0,
        message: '登录成功',
        data: {
          token: jwtToken
        }
      });
    } else {
      res.json({
        code: 0,
        message: '账号密码错误'
      });
    }
  } catch (error) {
    res.json(error);
  }
}

function getUserList (req, res, next) {
  try {
    userModel.findAll().then(users => {
      res.json({
        code: 0,
        message: '操作成功',
        list: users
      });
    });
  } catch {
    res.json({
      code: 0,
      message: error,
    });
  }
}

module.exports = {
  getUserList,
  login,
  getUserInfo
}
