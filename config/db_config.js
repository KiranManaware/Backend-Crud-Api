const { mongoose } = require("mongoose")

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log("DB CONNECTION SUCCESSFUL : ",conn.connection.host);
    } catch (error) {
        console.log("DB CONNECTION FAILD : ",error.message);
    }
}
module.exports=connectDB;