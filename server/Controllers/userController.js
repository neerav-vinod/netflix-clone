const express = require('express');
const user = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const env = require('dotenv');
const movie = require('../models/movie');


env.config();


const signUpController = async(req,res) => {
   const {name,password,email} = req.body;
   
    try{
    const existEmail = await user.findOne({email:email})

   if(existEmail){
    res.status(400).json({message:"email already exists"})
    return;
   }

   const existName = await user.findOne({name:name});

   if(existName){
    req.res(400).json({message:"username already exists"})
    return;
   }

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password,salt)

   const createdUser = await user.create({
    name:name,
    email:email,
    password: hashedPassword
    })

    res.status(200).json({createdUser})
   }catch(e){
    res.status(500).json({message:"internal server error"})
   }
}

const loginController = async (req, res) => {
    const { email, password } = req.body;
    
    const secret= process.env.JWT_SECERET
    try {
      const existEmail = await user.findOne({ email: email });
  
      if (!existEmail) {
        return res.status(400).json({ message: "Email not found" });
      }
  
      const passOk = bcrypt.compareSync(password, existEmail.password);
  
      if (passOk) {
        const token = jwt.sign({ userId: existEmail._id },secret );
        return res.status(200).json({ existEmail, token },);
      } else {
        return res.status(401).json({ message: "Incorrect password" });
      }
    } catch (error) {
      console.error("Login Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
 
  const handleFavourites = async (req,res) =>{
    const {userId,movieId} = req.body
    console.log(userId, movieId);

    try {
      const userExist = await user.findOne({_id:userId}) 

      if(!userExist){
        return res.status(404).json({message:"User not found"});
      }

      const existMOvie = await movie.findOne({_id:movieId})

      if(!existMOvie){
        return res.status(404).json({message:"Movie not found"});
      }

      const isAlreadyFavourite = userExist.favourites.includes(movieId);

      if(isAlreadyFavourite){
        userExist.favourites = userExist.favourites.filter(id => id.toString() !== movieId.toString());
        await userExist.save();
        return res.status(200).json({message:"Movie Deleted"})
      }

      userExist.favourites.push(movieId);

      await userExist.save();

      return res.status(200).json(userExist);

    } catch (error) {
      return res.status(500).json({message:"internal server error"});
    }
  
    
  }


 

module.exports = {
    handleFavourites,
    signUpController,
    loginController
}