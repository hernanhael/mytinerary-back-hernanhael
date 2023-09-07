import express from "express"
import cityRouter from "./cities.js"
import itineraryRouter from "./itineraries.js"

const router = express.Router();

router.use("/cities", cityRouter);
router.use("/itineraries", itineraryRouter);

export default router;
