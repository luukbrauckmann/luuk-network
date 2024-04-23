import { buildClient } from "@datocms/cma-client-node";
import { writeFile } from "node:fs/promises";
import dotenv from "dotenv";

dotenv.config();

const client = buildClient({
  apiToken: process.env.DATOCMS_READONLY_API_TOKEN,
  environment: "main",
});
const site = await client.site.find();

await writeFile("./src/lib/site.json", JSON.stringify(site, null, 2));
