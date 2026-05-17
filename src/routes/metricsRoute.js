import { register } from "../metrics/index.js";

export async function metricsRoute(req, res) {
  res.setHeader("Content-Type", register.contentType);
  res.send(await register.metrics());
}