import express from "express"; 
import create from "../controllers/cities/create.js"

const router = express.Router();

router.post("/", create);

export default router;