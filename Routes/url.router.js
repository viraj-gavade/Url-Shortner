const express = require('express')
const modelsUrl = require('../Models/models.url')
const { getShortenedUrl, getUrlAnalytics } = require('../Controllers/url.controllers')
const urlRouter = express.Router()

/**
 * Router for creating shortened URLs
 * Handles POST request to generate a new short URL
 */
urlRouter.route('/').post(getShortenedUrl)

/**
 * Router for retrieving URL analytics
 * Handles GET request to fetch visit statistics for a specific short URL
 * @param {string} shortId - Unique identifier for the shortened URL
 */
urlRouter.route('/analytics/:shortId').get(getUrlAnalytics)

/**
 * Health Check Router
 * Provides an endpoint to verify the service is running
 */
const HealthCheckRouter = express.Router()

/**
 * Endpoint to check service availability
 * Returns a 200 status with a success message
 */
HealthCheckRouter.route('/').get((req, res) => {
    res.status(200).json({ msg: 'HealthCheck router working Successfully!' })
})

// Export routers for use in the main application
module.exports = { HealthCheckRouter, urlRouter }