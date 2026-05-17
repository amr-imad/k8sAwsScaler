import { httpRequestsTotal } from "../metrics/customMetrics.js";

export function metricsMiddleware(req, res, next) {
  res.on("finish", () => {
    httpRequestsTotal.labels(req.method, req.path, res.statusCode).inc();
  });
  next();
}