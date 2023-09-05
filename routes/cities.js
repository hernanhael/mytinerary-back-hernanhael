import express from "express"
import create from "../controllers/cities/create.js"
import readOne from "../controllers/cities/readOne.js"
import read from "../controllers/cities/read.js"
import update from "../controllers/cities/update.js"
import destroy from "../controllers/cities/destroy.js"

const router = express.Router();

router.post("/", create);
router.get("/:id", readOne);
router.get("/", read);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;