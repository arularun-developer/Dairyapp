import mongoose from "mongoose"

export function databaseConnection(){
    const params={
        useNewUrlParser:true,useUnifiedTopology:true,
    }
    try {
        mongoose.connect(process.env.MongoDBUrl,params);
        console.log(" Your Application MongoDb Database Connection Successful");
    } catch (error) {
        console.log("Error in DB Connection");
        
    }

}