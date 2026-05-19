import { renderHTML } from "../utils/renderHTML.js";
import os from "os";

function getRandomTheme() {
  const hue = Math.floor(Math.random() * 360);

  // keep saturation high + lightness varied for “odd” look
  const color1 = `hsl(${hue}, 90%, 55%)`;
  const color2 = `hsl(${(hue + 120) % 360}, 85%, 20%)`;

  return `radial-gradient(circle at top, ${color1}, ${color2})`;
}
export function homeRoute(req, res) {
  const data = {
    service: "Express API",
    mode: process.env.NODE_ENV || "development",
    hostname: os.hostname(),
    uptime: Math.floor(process.uptime()),
    metricsPath: "/metrics",
    theme: getRandomTheme(),
  };

  res.send(renderHTML("src/views/index.html", data));
}
