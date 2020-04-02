const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/previate');
const { STATUS_CODE } = require('../config/status-code');

function sign(payload) {
    return jwt.sign(payload, '111', {
        expiresIn: 24 * 60 * 60 * 1000
    });
}

// mustAdmin 是否必须是管理员才能访问
function verify(req, res, next) {
  // 取得客户端发过来的 token
  // let jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlck5hbWUiOiLmrKfotLrnpo8iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImVtYWlsIjpudWxsLCJ0ZWxwaG9uZSI6bnVsbCwiZ2VuZGVyIjpudWxsLCJzdGF0dXMiOiIiLCJpYXQiOjE1ODU4MTQwODYsImV4cCI6MTY3MjIxNDA4Nn0.lPm6VK-3P5ZnRoiD89TTVIyT2h4BAV3hH61qa-zrAcY";
  let jwtToken = req.headers.authorization;

    console.log('jwtToken', jwtToken)
    if (jwtToken) {
        jwt.verify(jwtToken, '111', (err, payload) => {
            //1. token 验证失败
            //2. 验证成功但是 token 过期了
            if (err) {
              if (err.name === 'TokenExpiredError') {
                res.json({
                  code: 10010,
                  err: err,
                  jwtToken: jwtToken,
                  message: 'token已经过期',
                });
              } else {
                res.json({
                  code: 10010,
                  err: err,
                  jwtToken: jwtToken,
                  message: 'token验证失败',
                });
              }
            } else {
              next()
            }
        })
    } else {
      res.json({
        code: 10010,
        message: '请提供 token'
      });
    }
};

function decode (token) {
  // get the decoded payload and header
  let decoded = jwt.decode(token, {complete: true});
  return decoded
}


module.exports = {
  sign,
  verify,
  decode
};
