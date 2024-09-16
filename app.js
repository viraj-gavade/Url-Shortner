require('dotenv').config()
const express = require('express')
const {urlRouter,HealthCheckRouter} = require('./Routes/url.router')
const ConnectDB = require('./DataBase/connect')
const app = express()
const port = process.env.PORT || 8000

app.use('/api/v1/url',urlRouter)
app.use('/api/v1/healthcheck',HealthCheckRouter)

app.get('/api/v1',(req,res)=>{
    res.send('hello')
})

//Connection to the mongoDB DataBase
app.listen(port,(()=>{
    console.log('Server is Listening on port:-',port)

}))

const connectdb = async()=>{
    try {
        await ConnectDB().
        then(()=>{
            console.log('Server is Listening on port:-',port)
        })
    } catch (error) {
        console.log('Something Went Wrong!!',error)
        process.exit(1)
    }
}


connectdb()
