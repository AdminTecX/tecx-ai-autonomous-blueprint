import fs from "node:fs";
import path from "node:path";

const dirs = [
  "storefront",
  "mcp-servers",
  ".github/workflows"
];

dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`[TecX AI Bootstrap] Created directory: ${dir}`);
  }
});

// Ensure .gitignore protects .env and node_modules
const gitignoreContent = "node_modules/\n.env\ndist/\n.DS_Store\n";
fs.writeFileSync(".gitignore", gitignoreContent);

console.log("[TecX AI Bootstrap] Workspace verified. Ready for AI Coder execution.");
