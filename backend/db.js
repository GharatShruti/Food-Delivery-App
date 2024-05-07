const mongoose = require('mongoose');
const mongoURI = '';

const mongoDB = async() => {
    await mongoose.connect(mongoURI,{useNewURIParser:true},async(err,result)=>{
        if(err){
            console.log("---",err);
        }
        else{
            console.log('Connected');
            const fetched_data = await mongoose.connection.db.collection("")
        }
    });
        
};

module.exports = mongoDB;
