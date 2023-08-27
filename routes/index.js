import express from "express"
import cityRouter from "./cities.js"

const router = express.Router();

router.use("/cities", cityRouter);

export default router;
