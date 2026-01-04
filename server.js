import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import portfolioRoutes from "./routes/portfolio.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);

app.listen(5000, () =>
  console.log("🚀 Server running on port 5000")
);
