const express = require('express');
const movie = require('../models/movie');
const protect = require('../middlewares/auth');
const user = require('../models/user');
const router = express.Router();

router.get('/videos',protect, async (req,res)=>{
    try{
        const fetchedVideos = await movie.find()
        res.status(200).json(fetchedVideos)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/favourites',async (req,res)=>{
        const {userId} = req.body;
    
        const userDetails = await user.findOne({_id:userId}).populate('favourites')

        if(userDetails){ 
          res.status(200).json(userDetails)
        }else{
            res.status(404).json({message:'user not found'})
        }
   
})

router.post('/watch/:id',async (req,res)=>{
    const videoId = req.params.id;
    try{
        const video = await movie.findOne({_id:videoId})
        return res.status(200).json(video)
    }
    catch(err){
        return res.status(404).json({message:"Video Not Found"})
    }
})

module.exports = router