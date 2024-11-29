const mongoose = require('mongoose')

/**
 * Mongoose schema for URL shortener 
 * Defines the structure for storing shortened URLs and their visit history
 */
const urlSchema = new mongoose.Schema({
    // Unique short identifier for the URL
    shortId: {
        type: String,
        required: [true, 'Short ID must be provided!'],
        unique: true
    },
    // Original full URL to be redirected
    redirectURL: {
        type: String,
        required: [true, 'Redirect URL must be provided!'],
    },
    // Array to track visit history with timestamps
    visitHistory: [
        {
            timestamp: {
                type: Number
            }
        }
    ]
}, { 
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true 
})

// Create and export the Url model based on the schema
module.exports = mongoose.model('Url', urlSchema)