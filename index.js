const express = require('express')
const app = express()
const port = 3030
const mongoose = require('./config/database')
const router = require('./config/router')
const cors  = require('cors')

app.use(express.json())
app.use(cors())



app.get('/',(req,res) =>{
    res.json({
        note : 'Welcome to note taking app'
    })
})

app.use('/',router)

app.listen(port , (req,res) =>{
    console.log('Connected to port : ' , port)
})


