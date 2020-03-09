const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/previate');
const { STATUS_CODE } = require('../config/status-code');

function sign(payload) {
    return jwt.sign(payload, SECRET_KEY, {
        expiresIn: 24 * 60 * 60 * 1000
    });
}

// mustAdmin 是否必须是管理员才能访问
function verify(req, res, next) {
    // 取得客户端发过来的 token
    let jwtToken = req.headers.authorization;
    if (jwtToken) {
        jwt.verify(jwtToken, SECRET_KEY, (err, payload) => {
            //1. token 验证失败
            //2. 验证成功但是 token 过期了
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    // res.status(401).error('token已经过期');
                    res.json({
                      code: 10010,
                      message: STATUS_CODE[10010],
                    });
                } else {
                    res.status(401).error('token是无效的');
                    res.json({
                      code: 10011,
                      message: STATUS_CODE[10011],
                    });
                }
            }
        })
    } else {
        res.status(401).error('请提供jwtToken');
    }
};

module.exports = {
    sign,
    verify
};
