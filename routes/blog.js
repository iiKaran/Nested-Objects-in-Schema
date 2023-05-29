const express = require("express");
const router = express.Router();
const {CreatePost} = require("../controllers/Create"); 
const{LikeOnPost} = require("../controllers/LikePost"); 
const {getPosts} = require("../controllers/getAllPost");
const{CommentOnPost} = require("../controllers/CommentPost")
router.post("/create",CreatePost);
router.post("/like",LikeOnPost);
router.post("/comment",CommentOnPost); 
router.get("/getblogs", getPosts)
module.exports = router ;
