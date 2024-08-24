import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();
app.get('/get',(req,res)=>{
    res.send('server starts')
})
const port = process.env.PORT 
app.listen(port,()=>{
    console.log('server starts',port);
})