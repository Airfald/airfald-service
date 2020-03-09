const Sequelize = require('sequelize');
const db = require('../db');

const user = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: true,
  // },
  // telphone: {
  //   type: Sequelize.STRING,
  //   allowNull: true,
  // },
  // sex: {
  //   type: Sequelize.STRING,
  //   allowNull: true,
  // },
  // age: {
  //   type: Sequelize.INTEGER,
  //   allowNull: true
  // },
  // department: {
  //   type: Sequelize.STRING,
  //   allowNull: true,
  // },
  // class: {
  //   type: Sequelize.STRING,
  //   allowNull: true,
  // }
}, {
  freezeTableName: true,      // 默认为false, 会自动改变表名称从而报错不存在改表
  timestamps: false           // 默认为true自动生成createdAt, updatedAt字段
});

module.exports = user;
