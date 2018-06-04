var mongoose = require("mongoose");
//change the URI with the mongo server address
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hackaton', {
  // useMongoClient: true
}).then(function(succ){
  // console.log("database connected, look: ", succ)
}).catch((err)=>{
    console.log(`error caught while connecting to db ${err}`)
})

module.exports = {
  user: require('./user.js'),
  info: require('./info.js'),

}
