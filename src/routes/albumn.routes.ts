import express from "express";
import { getAlbumns } from "../controllers/albumns.controller";

const router = express.Router();

router.get("/albumns", getAlbumns);

export default router;
