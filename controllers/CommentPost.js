const   Comment = require("../models/Comment"); 
const Blog = require("../models/Blog");
exports.CommentOnPost = async (req, res)=>{

    try{
           const {post , user, subject}= req.body ; 
           const response = await Comment.create({post , user, subject}); 
           const updatedPost = await Blog.findByIdAndUpdate(post , {$push:{comments:response._id}}, {new:true})
           .populate().exec();
           updatedPost.populate(); 
           res.status(200).json({
            message:"comment posted",
            response:updatedPost
         })
    }
    catch(err){
        console.log("miss like")
        console.log(err); 
        res.status(500).json({
            message:"Error Whicle commenting"
         })
    }
}