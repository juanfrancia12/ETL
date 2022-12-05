import factOrdenRouter from "./routes/fact_orden.routes";
import albumnRouter from "./routes/albumn.routes";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config";

const app = express();

// settings
app.set("PORT", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", factOrdenRouter);
app.use("/api", albumnRouter);

export default app;
