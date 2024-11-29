require('dotenv').config() // Load environment variables

const URL = require('./Models/models.url') // Import URL model
const path = require('path')
const express = require('express')
const { urlRouter, HealthCheckRouter } = require('./Routes/url.router') // Import routers

const ConnectDB = require('./DataBase/connect') // Import database connection function
const StaticRouter = require('./Routes/StaticRouter')

const app = express() // Create Express application

// Configure view engine and views directory
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

// Define server port
const port = process.env.PORT || 8000

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// API routes
app.use('/api/v1/url', urlRouter) // URL shortener API endpoints

// Server-side rendering route
app.get('/', StaticRouter)

/**
 * Redirect route for shortened URLs
 * Updates visit history and redirects to original URL
 * 
 * @route GET /api/v1/:shortId
 * @param {string} shortId - Unique identifier for the shortened URL
 */
app.get('/api/v1/:shortId', async (req, res) => {
    const { shortId } = req.params
    
    // Find and update the URL entry with visit timestamp
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        },
        { new: true }
    )

    // Handle case where no URL is found
    if (!entry) {
        return res.status(404).send('URL not found')
    }

    // Redirect to the original URL
    return res.redirect(entry.redirectURL)
})

// Health check route
app.use('/api/v1/healthcheck', HealthCheckRouter)

/**
 * Establishes database connection and starts the server
 */
const connectdb = async () => {
    try {
        // Connect to the database
        await ConnectDB()
        
        // Start the server
        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}`)
        })
    } catch (error) {
        console.error('Server initialization failed:', error)
        process.exit(1)
    }
}

// Initialize database connection and start server
connectdb()