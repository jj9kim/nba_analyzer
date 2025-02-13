import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB }from '../config/db'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started successfully on port: ${PORT}`);
});
