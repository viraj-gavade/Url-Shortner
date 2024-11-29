require('dotenv').config() // Load environment variables from .env file

const mongoose = require('mongoose')

/**
 * Establishes a connection to the MongoDB database
 * 
 * @param {string} url - Optional URL parameter (currently unused, using MONGO_URI from environment)
 * @returns {Promise} A promise that resolves when the database connection is established
 */
const ConnectDB = async (url) => {
    try {
        // Attempt to connect to the MongoDB database using the connection string from environment variables
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Note: useCreateIndex and useFindAndModify are deprecated in newer mongoose versions
        })
        
        // Log successful connection with host details
        console.log(`Connected to Database. Host: ${connect.connection.host}`)
    } catch (error) {
        // Log any connection errors and potentially rethrow or handle more gracefully
        console.error('Database Connection Error:', error.message)
        
        // Optionally, you might want to exit the process on a critical database connection failure
        process.exit(1)
    }
}

// Export the database connection function
module.exports = ConnectDB