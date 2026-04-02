import mongoose from "mongoose";;
import {DB_NAME} from "../constant.js"

const connectDB = async()=>{
    try{
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`${connectioninstance.connection.host}`);
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}

export default connectDB;