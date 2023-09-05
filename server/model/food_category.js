const mongoose=require('mongoose')
const categorySchema=new mongoose.Schema({
    CategoryName:{
        type:String,
        required:true
    }
    
})

const categoryCollection=mongoose.model('food_category',categorySchema)
module.exports=categoryCollection