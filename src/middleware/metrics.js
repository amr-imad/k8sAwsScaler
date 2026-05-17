import client from "prom-client";

const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests",
  labelNames: ["method", "route", "status"],
});
register.registerMetric(httpRequestsTotal);

export function metricsMiddleware(req, res, next) {
  res.on("finish", () => {
    httpRequestsTotal.labels(req.method, req.path, res.statusCode).inc();
  });
  next();
}

export function metricsEndpoint() {
  return async (req, res) => {
    res.setHeader("Content-Type", register.contentType);
    res.send(await register.metrics());
  };
}

export { register };