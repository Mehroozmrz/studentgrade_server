const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const mongoConnect = async()=>{
    try{
        const URI = process.env.MONGO_URI;
        await mongoose.connect(URI);
        console.log('Mongo Connected Successfully')
    }
    catch(err){
        console.log(err);
    }
}


module.exports=mongoConnect;