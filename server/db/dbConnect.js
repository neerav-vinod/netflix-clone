const mongoose = require('mongoose')

const dbConnect = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to db')
    }
    catch(err){
        console.log(err)
    }
}

module.exports= dbConnect;