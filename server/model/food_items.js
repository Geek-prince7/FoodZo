const mongoose=require('mongoose')

const optionsSchema=new mongoose.Schema({
    half:{
        type:String,
        
    },
    full:{
        type:String
    }
})

const itemSchema=new mongoose.Schema({
    CategoryName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'food_category'
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    options:[
        optionsSchema
    ],
    description:{
        type:String,
        required:true
    }
})

const items=mongoose.model('food_items',itemSchema)
module.exports=items