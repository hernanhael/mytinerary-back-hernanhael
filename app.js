import "dotenv/config.js"
import "./config/database.js"
import express from "express"
import createError from "http-errors"
import cors from "cors"

import indexRouter from './routes/index.js'

import { __dirname } from "./utils.js"

var app = express();

app.use(cors());
app.use(express.json());

app.use("/api", indexRouter);

export default app;