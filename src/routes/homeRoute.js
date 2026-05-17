import { renderHTML } from "../utils/renderHTML.js";
import os from "os";

export function homeRoute(req, res) {
  const data = {
    service: "Express API",
    mode: process.env.NODE_ENV || "development",
    hostname: os.hostname(),
    uptime: Math.floor(process.uptime()),
    metricsPath: "/metrics",
  };

  res.send(renderHTML("src/views/index.html", data));
}
