import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config()

const MONGO_URL =process.env.MONGO_URL as string

export async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL)
        console.log(`connected `)
    } 
    catch(error){
        console.error(`error... could not connect`)
        process.exit(1)
    }
}