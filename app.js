const express = require('express')
const urlRouter = require('./Routes/url.router')

const app = express()
const port = 3000

app.use('/api/v1/url',urlRouter)

app.get('/api/v1',(req,res)=>{
    res.send('hello')
})


app.listen(port,()=>{
    console.log('Server is Listening on port:-',port)
})