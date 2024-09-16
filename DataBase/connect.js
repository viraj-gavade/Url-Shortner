require('dotenv').config()
const mongoose = require('mongoose')
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
    console.log(error)
}
}


module.exports=ConnectDB