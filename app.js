const express = require('express')
const {UrlRouter} = require('./Routes/url.router')

const app = express()
const port = 3000

app.use('/api/v1/url',UrlRouter)

app.get('/api/v1',(req,res)=>{
    res.send('hello')
})


app.listen(port,()=>{
    console.log('Server is Listening on port:-',port)
})