//we write code to connect to the database here
const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(process.env.CS)

sequelize.authenticate()
  .then(() => { 
    console.log("Connection sucessfully vayo!!")
  })
  .catch((err) => {       
    console.error("Database sanga connection garda error aayo:" + err)
  })
  
  const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db