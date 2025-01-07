import mongoose from "mongoose";

 export const connectDb = async () => {
    try {
        const connectionString = "mongodb+srv://sewrashi321:RG8kBPHGPCvjServ@cluster0.y6h26.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(connectionString);
        console.log("Connected to the Database");
    } catch (error) {
        console.log(error)
        console.log("Error connecting to the Database");
    }
};