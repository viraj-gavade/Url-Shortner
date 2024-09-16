const URL = require('../Models/models.url')
const shortid  = require('shortid')

const getShortenedUrl = async (req,res)=>{
    const { url } = req.body
    if(!url){
       return  res.status(400).json({error:"Url Is Required!"})
    }
    const shortId = shortid(8)
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

const getUrlAnalytics = async(req,res)=>{
    const { shortId } = req.params
    console.log(shortId)
    const url = await URL.findOne({shortId})
    if(!url){
        return res.status(400).json(
            {
                msg:`There is no such Id:-${Id}`
            }
        )
    }
  return  res.status(200).json(
        {
           totalClicks:url.visitHistory.length,
           analytics:url.visitHistory 
        }
    )
}


module.exports={
    getShortenedUrl,
    getUrlAnalytics

}