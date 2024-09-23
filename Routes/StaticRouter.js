const express = require('express')
const URL = require('../Models/models.url')
const StaticRouter = express.Router()

StaticRouter.get('/',async (req,res)=>{
    const allurls = await URL.find({})
    // res.status(200).json({urls:allurls})
    res.render('home',{
        urls:allurls
    })
})


module.exports=StaticRouter