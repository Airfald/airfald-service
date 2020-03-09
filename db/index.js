const Sequelize = require('sequelize');
const sequelize = new Sequelize('airfald-service', 'root', '123456', {
  host: 'localhost',
  port: 3306,
  password: '123456',
  dialect : 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

module.exports = sequelize
