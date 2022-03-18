import express from "express";
import morgan from "morgan";
import connectDB from "./db/connectdb.js";
import { join } from "path";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// middlware

app.use(express.urlencoded({extended:false}))


// static Files
app.use('/student',express.static(join(process.cwd(), "public")));
app.use('/student/edit',express.static(join(process.cwd(), "public")));

// Template Engine
app.set('view engine','ejs');

// Routes
app.use("/student", web);

// logger
app.use(morgan("tiny"));

// listen
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
