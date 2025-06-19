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

db.books = require("./models/book.models")(sequelize, DataTypes)
db.users = require("./models/user.model")(sequelize,DataTypes)

//migrate code here
//force:true le data lai udaidinxa but    alter:true le column matra change garxa data change hudaina
//kei kei changes garda matra alter true garne 
sequelize.sync({ alter: false }).then(() => {
  console.log("Database synced successfully");
});



module.exports = db