const express=require('express')
const mongoose=require('./config/mongoose')
const port=8000
const cors=require('cors')
const parser=require('body-parser')
const app=express()
const session=require('express-session')
const passport=require('passport')
const passportJWT=require('./config/passport_jwt')

// app.use(express.urlencoded())
app.use(cors({origin:'*'}))
app.use(parser.json())
// app.use(session({
//     name:'foodzo',
//     secret:'foodzo12',
//     saveUninitialized:false,
//     resave:false
// }))
app.use(passport.initialize())
// app.use(passport.session())
app.use('/api',require('./routes/index'))

app.listen(port,(error)=>{
    if(error) console.log(`error occured ${error}`)
    console.log('server is up on port ',port);
})