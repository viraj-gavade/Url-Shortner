const URL = require('../Models/models.url')
const shortid  = require('shortid')

/**
 * Controller to generate a shortened URL for a given original URL
 * 
 * @param {Object} req - Express request object containing the original URL in the body
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with created short URL or error
 */
const getShortenedUrl = async (req, res) => {
    // Extract URL from request body
    const { url } = req.body
    
    // Validate that URL is provided
    if (!url) {
        return res.status(400).json({ error: "Url Is Required!" })
    }
    
    // Generate a unique short ID
    const shortId = shortid(8)
    
    // Create a new URL document in the database
    const shortenedURL = await URL.create({
        shortId: shortId,
        redirectURL: url,
        visitHistory: []
    })
    
    // Verify the URL was successfully created
    const checkURL = await URL.findById(shortenedURL._id)
    if (!checkURL) {
        return res.status(501).json({
            error: "Something went wrong while creating the short Id!"
        })
    }
    
    // Render the home page with the created URL
    return res.render('home', {
        url: checkURL
    })
}

/**
 * Controller to retrieve analytics for a specific shortened URL
 * 
 * @param {Object} req - Express request object containing the shortId in params
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with URL analytics or error
 */
const getUrlAnalytics = async (req, res) => {
    // Extract shortId from request parameters
    const { shortId } = req.params
    
    // Find the URL document by shortId
    const url = await URL.findOne({ shortId })
    
    // Handle case where URL is not found
    if (!url) {
        return res.status(400).json({
            msg: `There is no such Id:-${shortId}`
        })
    }
  
    // Return URL analytics
    return res.status(200).json({
        totalClicks: url.visitHistory.length,
        analytics: url.visitHistory 
    })
}

// Export controllers for use in routes
module.exports = {
    getShortenedUrl,
    getUrlAnalytics
}