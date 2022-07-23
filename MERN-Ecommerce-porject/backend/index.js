
const express=require("express")
// const mongoose =require("mongoose")
require("./db/config")
const User=require("./db/User");
const app=express();
// install cors it is used to cors error resolve it is used to when i send data through fornt end to backend then it is occurs 
const cors=require("cors")
// const connectDB=async()=>{
//     mongoose.connect(`mongodb://localhost:27017/web15`);
//     const productSchema=new mongoose.Schema({});
//     const product=mongoose.model('movies',productSchema);
//     const data=await product.find();
//     console.log(data)
// }
// connectDB()
app.use(express.json())
// cors erro resolve
app.use(cors());
// end cors error resolve
app.post("/signup", async (req,resp)=>{
    let user=new User (req.body);
    let result= await user.save();
    resp.send(result)
})

app.listen(5000)