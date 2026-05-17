import client from "prom-client";
import { register } from "./index.js";

export const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests",
  labelNames: ["method", "route", "status"],
});

register.registerMetric(httpRequestsTotal);