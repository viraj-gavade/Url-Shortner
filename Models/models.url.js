const mongoose = require('mongoose')
const { type } = require('os')


//Creating a url schema 
const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:[true,'Short ID must be provided!'],
        unique:true
    },
    redirectURL:{
        type:String,
        required:[true,'Redirect url  must be provided!'],
    },
    visitHistory:[
        {
            timestamp:{
                type:Number
            }
        }
    ]
},{timestamps:true})

//Exporting the url schema.
module.exports=mongoose.model('Url',urlSchema)