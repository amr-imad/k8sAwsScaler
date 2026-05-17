import express from "express";
import { metricsMiddleware } from "./middleware/metricsMiddleware.js";
import { homeRoute } from "./routes/homeRoute.js";
import { metricsRoute } from "./routes/metricsRoute.js";

const app = express();

app.use(express.json());
app.use(metricsMiddleware);

app.get("/", homeRoute);
app.get("/metrics", metricsRoute);

export default app;