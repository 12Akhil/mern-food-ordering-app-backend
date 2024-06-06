import express,{Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoutes from "./routes/MyUserRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("Connected to Mongo"));

const app=express();

app.use(cors());

app.use(express.json());


app.get("/health",async(req:Request,res:Response)=>{
        res.send({message:"Health Ok."})
});

// /api/my/user
app.use("/api/my/user",myUserRoutes);

app.listen(7000,()=>{
    console.log("Server started at 7000");
});

