const express=require('express')
const Category=require('../model/food_category')
const Item=require('../model/food_items')
const User=require('../model/User')
const router=express.Router()
const {body, validationResult}=require('express-validator')
const jwt=require('jsonwebtoken')
const passport=require('passport')



router.get('/',(req,resp)=>{
    resp.status(200).json({msg:'hi'})
})

router.post('/category/add',passport.authenticate('jwt',{session:false}),async(req,resp)=>{
    try{
        let category=await Category.create(req.query);
        return resp.status(200).json({
            status:1000,
            data:category
        })

    }
    catch(e){
        console.log(e)
        return resp.status(500).json({
            status:1001,
            // data:e
        })


    }
})


router.post('/items/add',async(req,resp)=>{
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


router.post('/user/create',body('email','incorrect email').isEmail(),body('password','password min length 5').isLength({min:5}),async(req,resp)=>{
    const error=validationResult(req)
    if(!error.isEmpty()){
        return resp.status(401).json({
            code:1001,
            message:'validation error',
            error:error.array()
        })
    }
    try {
        let user=await User.create(req.body)
        return resp.status(200).json({
            code:1000,
            message:'success',
            data:user
        })
        
    } catch (error) {
        return resp.status(500).json({
            code:1001,
            message:'failed',
            // data:user
        })
        
    }
})

router.post('/user/login',async(req,resp)=>{
    try {
        let user=await User.findOne({email:req.body.email})
        if(!user || user.password!==req.body.password){
            return resp.status(403).json({
                code:1001,
                message:"invalid username/password"
            })
        }
        return resp.status(200).json({
            code:1000,
            message:'success | keep your token',
            data:{
                token:jwt.sign(user.toJSON(),'foodzo11',{expiresIn:1000*60*60,subject:user.id})
            }
        })
        
        
    } catch (error) {
        console.log(error)
        return resp.status(500).json({
            code:1001,
            message:"internal server error"
        })
        
    }

})


module.exports=router