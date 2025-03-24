const express=require("express");
const connectDB = require("./config/db_config");
const cors=require('cors')
const app=express();
//  Use CORS Middleware
app.use(cors());
require("dotenv").config();

const PORT=process.env.PORT;

// body perser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// DB connection
connectDB()

app.get("/",(req,res)=>{
    res.send("WELCOME TO THE CRUD API");
})

app.use("/api/todo",require("./routes/todoRoutes"))

app.listen(PORT,()=>{
    console.log(`Server is running or port : ${PORT}`)
})