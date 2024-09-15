const express = require('express')
const modelsUrl = require('../Models/models.url')

const urlRouter = express.Router()

urlRouter.route('/').post(getShortenedUrl)

urlRouter.route('/:Id').get(redirectUrl) 

urlRouter.route('/analytics/:Id').get(getUrlAnalytics) 

module.exports = {urlRouter}