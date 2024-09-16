const express = require('express')
const modelsUrl = require('../Models/models.url')
const {getShortenedUrl,getUrlAnalytics} = require('../Controllers/url.controllers')
const urlRouter = express.Router()


//Routes to get the shortned url.
urlRouter.route('/').post(getShortenedUrl) 


//Routes to get the analytics of the url.
urlRouter.route('/analytics/:shortId').get(getUrlAnalytics) 


//A healthcheck router to check the routes.
const HealthCheckRouter = express.Router()


//Routers to check the connection.
HealthCheckRouter.route('/').get((req,res)=>{
    res.status(200).json({msg:'HealthCheck router working Successfully!'})
}) 


//Exporting the routers.
module.exports = {HealthCheckRouter,urlRouter}
