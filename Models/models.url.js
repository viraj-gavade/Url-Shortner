const mongoose = require('mongoose')
const { type } = require('os')

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


module.exports=mongoose.model('Url',urlSchema)