const express = require('express')
const app = express();
const env = require('dotenv');
const dbConnect = require('./db/dbConnect');
const userRoutes = require('./routes/userRoutes');
const videoRoutes = require('./routes/videoRoutes')
const cors = require('cors')

env.config();
app.use(express.json());
app.use(cors());

dbConnect();

app.use('/user', userRoutes);
app.use('',videoRoutes);

const port = process.env.PORT || 7000;
app.listen(port, (req,res)=>{
    console.log('listening on port ' + port)
})