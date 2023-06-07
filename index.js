import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js"

import userRouter from "./routes/userRoutes.js"



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});


app.use('/users', userRouter);




const startServer = async () => {
  try {

    connectDB(process.env.MONGODB_URL)

    app.listen(8080,()=>{console.log("Server started at 8080 ")})
  } catch (error) {
    console.log(error);
  }
};


startServer()