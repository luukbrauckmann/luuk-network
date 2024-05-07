import "dotenv/config";
const { DATOCMS_READONLY_API_TOKEN } = process.env;

import { buildClient } from "@datocms/cma-client-node";
import { writeFile } from "node:fs/promises";

const client = buildClient({
  apiToken: DATOCMS_READONLY_API_TOKEN,
  environment: "main",
});
const site = await client.site.find();

await writeFile("./src/lib/data/site.json", JSON.stringify(site, null, 2));
