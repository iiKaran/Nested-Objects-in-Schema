const Like = require("../models/Like"); 
const Blog = require("../models/Blog");
exports.LikeOnPost = async (req, res)=>{

    try{
           const {post , user}= req.body ; 
           const response = await Like.create({post , user}); 
           const updatedPost = await Blog.findByIdAndUpdate(post , {$push:{likes:response._id}}, {new:true});
           updatedPost.populate(); 
           res.status(200).json({
            message:"Post liked",
            response:updatedPost
         })
    }
    catch(err){
        console.log("miss like")
        console.log(err); 
        res.status(500).json({
            message:"Error Whicle liking"
         })
    }
}