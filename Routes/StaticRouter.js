const express = require('express')
const URL = require('../Models/models.url')
const StaticRouter = express.Router()

/**
 * Route handler for the home page
 * Retrieves all stored URLs and renders them on the home page
 * 
 * @route GET /
 * @returns {Object} Renders the home view with all stored URLs
 */
StaticRouter.get('/', async (req, res) => {
    // Fetch all URL documents from the database
    const allurls = await URL.find({})
    
    // Render the home page with the list of URLs
    res.render('home', {
        urls: allurls
    })
})

// Export the static router for use in the main application
module.exports = StaticRouter