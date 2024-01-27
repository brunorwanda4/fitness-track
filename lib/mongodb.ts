import mongoose from "mongoose";

let isConnected = false;

const connectMongoDB = async () => {
    mongoose.set("strictQuery" , true);

    if(!process.env.DATABASE_URL)
    return console.log("missing mongodb url ❤️");
    

    if(isConnected) {
        console.log("mongoDB connection is already 💚");
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL);

        isConnected = true;
        console.log("mongodb is connected 💚");
    } catch (error : any) {
        console.log("can not connect to mongodb ❤️" , error);
    }
}

export default connectMongoDB