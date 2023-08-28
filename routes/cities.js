import express from "express"
import create from "../controllers/cities/create.js"
import read from "../controllers/cities/read.js"

const router = express.Router();

router.post("/", create);
router.get("/", read);

export default router;