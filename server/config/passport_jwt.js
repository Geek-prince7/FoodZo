const passport=require('passport')
const strategy=require('passport-jwt').Strategy
const extract=require('passport-jwt').ExtractJwt
const User=require('../model/User')

const opts={
    jwtFromRequest:extract.fromAuthHeaderAsBearerToken(),
    secretOrKey:'foodzo11'
    
}

passport.use(new strategy(opts,async (payload,done)=>{
    try {
        let user=await User.findById(payload)
        if(user){
            return done(null,user);
        }
        return done(null,false)
        
    } catch (error) {
        return done(error,false)
        
    }
    

}))
module.exports=passport