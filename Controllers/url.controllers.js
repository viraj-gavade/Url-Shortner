const URL = require('../Models/models.url')
const { nanoid } = require('nanoid')

const getShortenedUrl = async (req,res)=>{
    const { url } = req.body
    if(!url){
       return  res.status(400).json({error:"Url Is Required!"})
    }
    const shortId = nanoid(8)
    const shortenedURL = await URL.create({
        shortId:shortId,
        redirectURL:url,
        visitHistory:[]
    })
    const checkURL = await URL.findById(shortenedURL._id)
    if(!checkURL){
        return res.status(501).json(
            {
                error:"Something went wrong while creating the short Id!"
            }
        )
    }
    return res.status(200).json({
        msg:"Short URL Generated Successfully!",
        checkURL
    })
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