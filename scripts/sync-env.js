import fs from "node:fs";

// 1. Parse .env file without external dependencies
if (!fs.existsSync(".env")) {
  console.error("[TecX AI Sync] Error: .env file not found. Copy .env.example to .env first.");
  process.exit(1);
}

const envLines = fs.readFileSync(".env", "utf8").split("\n");
const env = {};

for (const line of envLines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eqIndex = trimmed.indexOf("=");
  if (eqIndex > -1) {
    const key = trimmed.slice(0, eqIndex).trim();
    const val = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, "");
    env[key] = val;
  }
}

// 2. Define exact replacements across all storefront files
const replacements = [
  { search: /https:\/\/tecx-ai-storefront\.vercel\.app/g, replace: env.STOREFRONT_URL },
  { search: /YOUR_SUPPORT_EMAIL@gmail\.com/g, replace: env.SUPPORT_EMAIL },
  { search: /\+91-YOUR_PHONE_NUMBER/g, replace: env.SUPPORT_PHONE },

  // Razorpay Links
  { search: /YOUR_RAZORPAY_LINK_COMMERCE/g, replace: env.RAZORPAY_LINK_COMMERCE },
  { search: /YOUR_RAZORPAY_LINK_SUPERVISOR/g, replace: env.RAZORPAY_LINK_SUPERVISOR },
  { search: /YOUR_RAZORPAY_LINK_GST/g, replace: env.RAZORPAY_LINK_GST },

  // Polar.sh Links
  { search: /YOUR_POLAR_LINK_COMMERCE/g, replace: env.POLAR_LINK_COMMERCE },
  { search: /YOUR_POLAR_LINK_SUPERVISOR/g, replace: env.POLAR_LINK_SUPERVISOR },
  { search: /YOUR_POLAR_LINK_GST/g, replace: env.POLAR_LINK_GST },

  // Google Drive Download ZIP Links
  { search: /https:\/\/drive\.google\.com\/file\/d\/YOUR_COMMERCE_ZIP_ID\/view/g, replace: env.DRIVE_ZIP_COMMERCE },
  { search: /https:\/\/drive\.google\.com\/file\/d\/YOUR_SUPERVISOR_ZIP_ID\/view/g, replace: env.DRIVE_ZIP_SUPERVISOR },
  { search: /https:\/\/drive\.google\.com\/file\/d\/YOUR_GST_ZIP_ID\/view/g, replace: env.DRIVE_ZIP_GST }
];

const targetFiles = [
  "storefront/index.html",
  "storefront/download.html",
  "storefront/llms.txt",
  "storefront/policies.html"
];

// 3. Apply updates automatically
for (const filePath of targetFiles) {
  if (!fs.existsSync(filePath)) {
    console.warn(`[TecX AI Sync] Skipping missing file: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");
  for (const rule of replacements) {
    if (rule.replace) {
      content = content.replace(rule.search, rule.replace);
    }
  }
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`[TecX AI Sync] Updated: ${filePath}`);
}

console.log("[TecX AI Sync] All payment links, download URLs, and contact details synced!");
