const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/foodexpress';

const mongoDB = async() => {
    await mongoose.connect(mongoURI,{useNewURIParser:true},async(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Connected to MongoDB');
        }
    });
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
};

module.exports = mongoDB;
