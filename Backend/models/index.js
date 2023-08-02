const config = require("../config/db.config.js");
const mongoose = require('mongoose'); 

mongoose.connect("mongodb+srv://"+config.USER+":"+config.PASSWORD+"@ashwin.nzxr2wg.mongodb.net/users?retryWrites=true&w=majority", {                
  useNewUrlParser: true, 
  useUnifiedTopology: true })
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));



const db = {}
db.user = require("../models/user.model.js")();
module.exports = db;
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   config.DB,
//   config.USER,
//   config.PASSWORD,
//   {
//     host: config.HOST,
//     dialect: config.dialect,
//     pool: {
//       max: config.pool.max,
//       min: config.pool.min,
//       acquire: config.pool.acquire,
//       idle: config.pool.idle
//     }
//   }
// );
