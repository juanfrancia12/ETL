import express from "express";
import { getProductJSON } from "../controllers/fproduct-test.controller";

const router = express.Router();

router.get("/", getProductJSON);

export default router;
