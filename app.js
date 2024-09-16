require('dotenv').config()
const URL = require('./Models/models.url')
const express = require('express')
const {urlRouter,HealthCheckRouter} = require('./Routes/url.router')
const ConnectDB = require('./DataBase/connect')
const app = express()
const port = process.env.PORT || 8000
app.use(express.json())
app.use('/api/v1/url',urlRouter)


app.get('/:shortId', async (req,res)=>{
    const { shortId } = req.params
    console.log(shortId)
    const entry  = await URL.findOneAndUpdate({
        shortId
    },
{
    $push:{
        visitHistory:{
            timestamp:Date.now()
        }
    }
},{new:true})
return res.redirect(entry.redirectURL)
})

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
