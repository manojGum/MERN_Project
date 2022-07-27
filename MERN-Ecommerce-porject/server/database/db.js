import mongoose from "mongoose";

export const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-4mfvdcu-shard-00-00.mcob4mm.mongodb.net:27017,ac-4mfvdcu-shard-00-01.mcob4mm.mongodb.net:27017,ac-4mfvdcu-shard-00-02.mcob4mm.mongodb.net:27017/?ssl=true&replicaSet=atlas-wo0amy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,
            useNewUrlParser: true
        
        });
        console.log("Database connected successfully")

    }catch(error){
        console.log(`error while connecting with the database` , error.message );
    }
}
export default Connection;