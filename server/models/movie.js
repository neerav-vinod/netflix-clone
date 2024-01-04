const mongoose = require('mongoose');

const movieModel = new mongoose.Schema({
    title: {type: String},
    description:{type: String},
    videoUrl:{type: String},
    thumbnailUrl:{type: String},
    genre: {type: String},
    duration: {type: String},
})

const movie = new mongoose.model('Movie', movieModel)

module.exports = movie;