import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./middleware/userRoutes.js";
// import { connect } from "mongoose";
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.get("/", (req, res) => res.send("Server is ready"));
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server is running on port ${port}`));

