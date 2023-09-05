const express=require('express')
const mongoose=require('./config/mongoose')
const port=8000
const Category=require('./model/food_category')
const Item=require('./model/food_items')
const parser=require('body-parser')
const app=express()

// app.use(express.urlencoded())
app.use(parser.json())

app.get('/',(req,resp)=>{
    resp.status(200).json({msg:'hi'})
})

app.post('/category/add',async(req,resp)=>{
    try{
        let category=await Category.create(req.query);
        return resp.status(200).json({
            status:1000,
            data:category
        })

    }
    catch(e){
        return resp.status(500).json({
            status:1001,
            // data:e
        })


    }
})


app.post('/items/add',async(req,resp)=>{
    try {
        console.log(req.body)
        let item=await Item.create(req.body)
        return resp.status(200).json({
            status:1000,
            data:item
        })
        
    } catch (error) {
        console.log(error)
        return resp.status(500).json({
            status:1001,
            // data:category
        })
        
    }
})

app.listen(port,(error)=>{
    if(error) console.log(`error occured ${error}`)
    console.log('server is up on port ',port);
})