import mongoose from "mongoose"
const Connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to database successfully")
    } catch (error) {
        console.log("Error while connecting to database")
    }
}

export default Connection