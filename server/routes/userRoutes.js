const express = require('express');
const { signUpController, loginController, addVideo, addFavourites, delFavourites, handleFavourites } = require('../Controllers/userController');
const route = express.Router();

route.post('/signup', signUpController);
route.post('/login', loginController);
route.post('/handlefav',handleFavourites);
module.exports = route