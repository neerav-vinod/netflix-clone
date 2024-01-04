const mongoose = require('mongoose');
const movie = require('./movie')

const userModel = new mongoose.Schema({
    name:{
        type: String,
    },
    image:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type:String,
    },
    favourites:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:movie
        }
    ]

});

const user = new mongoose.model('User', userModel);

module.exports = user