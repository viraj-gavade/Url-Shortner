const express = require('express')
const urlRouter = require('./Routes/url.router')
const ConnectDB = require('./DataBase/connect')
const app = express()
const port = 3000

app.use('/api/v1/url',urlRouter)

app.get('/api/v1',(req,res)=>{
    res.send('hello')
})

//Connection to the mongoDB DataBase


const connectdb = async()=>{
    try {
        await ConnectDB(process.env.MONGO_URI).
        then(()=>{
            console.log('Server is Listening on port:-',port)
        })
    } catch (error) {
        console.log('Something Went Wrong!!',error)
        process.exit(1)
    }
}


connectdb()
