const dbConfig = require('../config/dbConfig.js');
const { Sequelize ,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
   // operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    }
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database...');
  })
  .catch(err => {
    console.log("Error: " + err);
  });
  const db = {}; // Create an empty object named 'db'

  db.Sequelize = Sequelize; // Assign the Sequelize constructor to db.Sequelize
  db.sequelize = sequelize; // Assign the Sequelize instance to db.sequelize
  db.products=require('./productModel.js')(sequelize,DataTypes)
  db.reviews=require('./reviewModel.js')(sequelize,DataTypes)
 db.sequelize.sync({force:false})
 .then(()=>{
    console.log('yes re-sync done');
 })
  module.exports = db; // Export the 'db' object, so it can be used elsewhere in the application
  