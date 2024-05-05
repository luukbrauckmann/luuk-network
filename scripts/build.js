import "dotenv/config";
import { execSync } from "node:child_process";

const { CF_PAGES, CF_PAGES_BRANCH } = process.env;

async function notifyDatocms(status) {
  if (!CF_PAGES || CF_PAGES_BRANCH !== "main") {
    console.log("Not on Cloudflare Pages. Skipping notify DatoCMS");
    return;
  }

  try {
    await fetch("https://webhooks.datocms.com/BdMA6k4wIQ/deploy-results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
    console.log(`🔔 Notified DatoCMS of deploy status: ${status}`);
  } catch (error) {
    console.error("Failed to notify DatoCMS", error);
  }
}

async function build() {
  try {
    execSync("npm run astro build", { stdio: "inherit" });
    await notifyDatocms("success");
  } catch (error) {
    await notifyDatocms("error");
    console.error(error);
    process.exit(1);
  }
}

build();
