require('dotenv').config() //Loading the secrete string

const URL = require('./Models/models.url')//Importing the url model.
const path = require('path')
const express = require('express')
const {urlRouter,HealthCheckRouter} = require('./Routes/url.router') //Importing the routers.

const ConnectDB = require('./DataBase/connect')//Importing the connection fucntion.

const app = express()//Creating an express app.
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

const port = process.env.PORT || 8000 //Defing the system port.

app.use(express.json())
app.use('/api/v1/url',urlRouter) //Setting up the rest api.

//Server side rendering
app.get('/test',async (req,res)=>{
    const allUrls = await URL.find({})
    res.render('home',{
        urls:allUrls
    })
    // res.end("<h1>This is response</h1>")
})
//Functionality to redirect the user to the orignal url with the help of shortned url and update the analytics of the short url

app.get('/url/:shortId', async (req,res)=>{
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

app.use('/api/v1/healthcheck',HealthCheckRouter) //The healthcheck router.

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
