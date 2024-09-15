const URL = require('../Models/models.url')


const getShortenedUrl = (req,res)=>{
    res.send('Get the shortened Url')
}

const redirectUrl = (req,res)=>{
    res.send('Redirect the Url')
}


const getUrlAnalytics = (req,res)=>{
    res.send('Get the Url Analytics')
}



module.exports={
    redirectUrl,
    getShortenedUrl,
    getUrlAnalytics

}