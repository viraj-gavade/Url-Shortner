const express = require('express')
const modelsUrl = require('../Models/models.url')
const {getShortenedUrl,getUrlAnalytics,redirectUrl} = require('../Controllers/url.controllers')
const urlRouter = express.Router()

urlRouter.route('/').post(getShortenedUrl)

urlRouter.route('/:Id').get(redirectUrl) 

urlRouter.route('/analytics/:Id').get(getUrlAnalytics) 



const HealthCheckRouter = express.Router()

HealthCheckRouter.route('/').get((req,res)=>{
    res.status(200).json({msg:'HealthCheck router working Successfully!'})
}) 



module.exports = {HealthCheckRouter,urlRouter}
