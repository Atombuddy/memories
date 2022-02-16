import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/user.js"
import dotenv from "dotenv"

const app=express()
dotenv.config()


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/posts",postRoutes)
app.use("/user",userRoutes)

//const CONNECTION_URL="mongodb+srv://nazeer:ajul03591@cluster0.cs5bn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT =process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on ${PORT}`)))
.catch((error)=>console.log(error.message))

//mongoose.set("useFindAndModify",false)