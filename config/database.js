const mongoose = require("mongoose"); 
// instance of the mongoose 

require("dotenv").config(); 
// for getting url

const dbConnect = ()=>{

  mongoose.connect(process.env.DATABASE_URL , {
    useNewUrlParser:true, 
    useUnifiedTopology:true,
  }).then(()=>{
    console.log("connected to db ")
  })
  .catch((err)=>{
    console.log(err); 
  })
}

module.exports= dbConnect; 