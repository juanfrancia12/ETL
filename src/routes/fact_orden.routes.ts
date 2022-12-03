import express from "express";
import { getFactOrden } from "../controllers/fact_orden.controller";

const router = express.Router();

router.get("/factorden", getFactOrden);

export default router;
