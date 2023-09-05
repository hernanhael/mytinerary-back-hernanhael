import "dotenv/config.js"
import "./config/database.js"
import express from "express"
import cors from "cors"
import indexRouter from "./routes/index.js"
import notFoundHandler from "./middlewares/notFoundHandler.js"
import errorHandler from "./middlewares/errorHandler.js"

var app = express();

app.use(cors());
app.use(express.json());

app.use("/api", indexRouter);

app.use(notFoundHandler);
app.use(errorHandler);

let port = process.env.PORT;
app.listen(port, () => { 
    console.log(`Server running on port: ${port}`)});

export default app;
