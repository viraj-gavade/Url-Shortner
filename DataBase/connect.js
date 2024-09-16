require('dotenv').config()//Loading the secrete strings


const mongoose = require('mongoose')

//Mongodb Connection Fucntions which connects to the database
const ConnectDB = async (url)=>{
try {
     const connect = await  mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    console.log(`\n Connected to Database!!, Connection Host:${connect.connection.host} `);
} catch (error) {
    console.log(error) //Logging the error if we ecounter it.
}
}


//Exporting the connection fucntion
module.exports=ConnectDB