const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected')
    }catch(err){
        console.log(err.message)
    }
} 

module.exports = connectDB
// const mongoose = require('mongoose')