var userModel = require('../models/user')
let jwt = require('../middlewares/jwt')

function getUserList (req, res, next) {
  userModel.findAll().then(users => {
    res.json({
      errCode: 0,
      errMsg: '操作成功',
      list: users
    });
  });
}

async function login (req, res, next) {
  try {
    const { userName, password } = req.query;
    // 1. 查找用户中有的账号
    let user = await userModel.findOne({
      where: {
        userName,
        password
      }
    })

    if (user) {
      let jwtToken = jwt.sign({ id: user.id, username: user.username });
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
    res.error(error);
  }
}

module.exports = {
  getUserList,
  login
}
