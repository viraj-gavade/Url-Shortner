const mongoose = require('mongoose')

const ConnectDB =(url)=>{
try {
     return mongoose.connect(url,{
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
} catch (error) {
    console.log(error)
}
}


module.exports=ConnectDB