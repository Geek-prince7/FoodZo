const express=require('express')
const mongoose=require('./config/mongoose')
const port=8000
const cors=require('cors')
const parser=require('body-parser')
const app=express()

// app.use(express.urlencoded())
app.use(cors({origin:'*'}))
app.use(parser.json())
app.use('/api',require('./routes/index'))

app.listen(port,(error)=>{
    if(error) console.log(`error occured ${error}`)
    console.log('server is up on port ',port);
})