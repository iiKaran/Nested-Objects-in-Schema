
const Blog = require('../models/Blog');
exports.getPosts = async (req,res) => {
    try {
        const posts = await Blog.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}