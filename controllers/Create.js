const Blog = require("../models/Blog"); 


exports.CreatePost = async (req,res)=>{

    try{
         const { user, content} = req.body; 
         const response = await Blog.create({user, content});
         res.status(200).json({
            message:"Post Created"
         })
    }
    catch(err) {
        console.log("miss")
        console.log(err); 
        res.status(500).json({
            message:"Error Whicle Creation"
         })
    }
}
