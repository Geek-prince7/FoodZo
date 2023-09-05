const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/foodapp')
.then(()=>console.log('connected to db'))
.catch((error)=>console.log('error in connecting to db',error))
// autoIncrement.initialize(mongoose.connection);
module.exports=mongoose