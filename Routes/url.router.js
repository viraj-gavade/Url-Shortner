const express = require('express')
const modelsUrl = require('../Models/models.url')
const {getShortenedUrl,getUrlAnalytics,redirectUrl} = require('../Controllers/url.controllers')
const urlRouter = express.Router()

urlRouter.route('/').post(getShortenedUrl)

urlRouter.route('/:Id').get(redirectUrl) 

urlRouter.route('/analytics/:Id').get(getUrlAnalytics) 

module.exports = urlRouter