import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();

// debug
console.log("ENV:", process.env.MONGODB_URI);

// connect DB
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("❌ DB Error:", error);
  });