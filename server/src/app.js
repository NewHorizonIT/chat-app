import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./router/index.js";

const app = express();

// Load env var
dotenv.config();

// Using middleware
app.use(morgan("dev"));

// Declare routes
app.use("/api/v1", router);

export default app;
