const express = require("express"); 
const app = express(); 


require("dotenv").config(); 
const blogRoutes = require("./routes/blog");
app.use(express.json()); 
app.use("/admin/vi",blogRoutes); 
// every route of the blog routes is mapped with an controller

const dbConnect = require("./config/database"); 
dbConnect(); 
app.listen(process.env.PORT,()=>{
    console.log("runnning succesfully");
})
app.get("/",(req,res)=>{
    res.send("hello karan how are  you"); 
})