import express from "express";
import morgan from "morgan";
import connectDB from "./db/connectdb.js";
import { join } from "path";
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// middlware

// static Files
app.use(express.static(join(process.cwd(), "public")));

// logger
app.use(morgan("tiny"));

// listen
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
