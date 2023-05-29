const mongoose = require("mongoose"); 

const BlogSchema =new mongoose.Schema({
       user:{
        type:String, 
        required: true
       }, 
       content:{
        type:String, 
        required: true
       }, 
       likes:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"Like"
       }], 
       comments:[{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"Comment"
       }]
})
module.exports= mongoose.model("Blog",BlogSchema);