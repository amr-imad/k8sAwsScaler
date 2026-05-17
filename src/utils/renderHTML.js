import { readFileSync } from "fs";
import { resolve } from "path";

export function renderHTML(filePath, data) {
  let html = readFileSync(resolve(filePath), "utf-8");

  Object.entries(data).forEach(([key, value]) => {
    html = html.replaceAll(`{{${key}}}`, value);
  });

  return html;
}

export default renderHTML;
