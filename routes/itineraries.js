import express from "express"
import create from "../controllers/itineraries/create.js"

const router = express.Router();

router.post("/", create);

export default router;

