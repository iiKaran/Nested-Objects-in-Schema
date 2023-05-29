const mongoose = require("mongoose"); 
const LikeSchema =new mongoose.Schema({
      profile:{
       type:String, 
      }  
})
module.exports= mongoose.model("Like",LikeSchema);