# tecx-ai-autonomous-blueprint



How to Use This With Any AI Coder (Zero Manual Coding)

1.  Open the repo in Cursor, Claude Code, OpenAI Codex, or GitHub Copilot Workspace, rename .env.example to .env with your links, and type this single prompt:
```
"Read AGENTS.md and ARCHITECTURE.md. Build out all files in storefront/ and mcp-servers/, inject all values from .env, and run npm run verify:all."
```
2. The AI agent will automatically generate, wire, and test the entire project for you.

```
tecx-ai-autonomous-blueprint/
├── AGENTS.md                  # Universal AI Agent Master Instructions (Codex, Claude Code, Jules)
├── .cursorrules               # Automatic execution rules for Cursor AI IDE
├── ARCHITECTURE.md            # Complete system blueprint, schemas & payment flows
├── .env.example               # Single configuration file for Razorpay, Polar, WhatsApp & Sheets
├── package.json               # Root workspace & automation scripts
├── scripts/
│   └── bootstrap.js           # Self-building script that generates all sub-projects & verifies builds
├── storefront/                # Auto-generated & maintained Vercel storefront (TecX AI)
└── mcp-servers/               # Auto-generated & maintained MCP connectors (Commerce, Guard, GST)

```

# TecX AI — Autonomous Blueprint & Agent-Ready Master Repository

> **AI-Agent-Ready Monorepo** for **TecX AI** (`https://vercel.app`) — an automated storefront and Model Context Protocol (MCP) connector platform built for zero-intervention builds, packaging, and deployment.

---

## 🤖 For AI Coding Agents (Cursor, Claude Code, OpenAI Codex, Windsurf)

If you are an AI agent operating inside this repository, execute the following sequence automatically:
1. Read **`AGENTS.md`**, **`.cursorrules`**, and **`ARCHITECTURE.md`** before making changes.
2. Run `npm run bootstrap` to verify or scaffold `storefront/`, `mcp-servers/`, and `.github/workflows/`.
3. Run `npm run sync` to inject live payment links, download URLs, and contact details from `.env` into all storefront files.
4. Run `npm run verify:all` to validate all modules and configurations prior to committing.

---

## 📁 Repository Structure

```text
tecx-ai-autonomous-blueprint/
├── AGENTS.md                        # Master instructions for autonomous AI coding agents
├── .cursorrules                     # Auto-pilot rules for Cursor IDE
├── ARCHITECTURE.md                  # Complete system architecture & payment/delivery spec
├── .env.example                     # Configuration template (Razorpay, Polar.sh, Drive, Support)
├── package.json                     # Workspace scripts (bootstrap, sync, verify:all)
├── scripts/
│   ├── bootstrap.js                 # Scaffolds directory tree and enforces .gitignore security
│   └── sync-env.js                  # Auto-injects .env variables across HTML, TXT, and JS files
├── storefront/                      # Public Vercel website (index.html, download.html, policies.html, llms.txt)
├── mcp-servers/                     # Production MCP servers (Commerce+WhatsApp, Supervisor Guard, GST Sheets)
└── .github/workflows/
    └── deploy-and-package.yml       # CI/CD pipeline: packages MCP ZIP releases & deploys to Vercel
```

---

## ⚡ Quick Start (Human Setup — 3 Minutes)

### 1. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your live payment and download links:
```bash
cp .env.example .env
```

### 2. Run Automation Commands
```bash
# 1. Install dependencies
npm install

# 2. Scaffold folders and verify workspace security
npm run bootstrap

# 3. Sync all Razorpay, Polar.sh, and Google Drive links from .env into storefront/
npm run sync

# 4. Run automated build and syntax verification
npm run verify:all
```

### 3. Enable Automated GitHub CI/CD Deployment
Add these three repository secrets individually under **Settings → Secrets and variables → Actions**:
* `VERCEL_TOKEN` — Your Vercel Personal Access Token
* `VERCEL_ORG_ID` — Your Vercel Account or Team ID
* `VERCEL_PROJECT_ID` — Your `tecx-ai-storefront` Project ID

Once saved, every `git push` to `main` automatically:
1. Packages all MCP connectors into a versioned GitHub Release ZIP (`tecx-ai-mcp-bundle-latest.zip`).
2. Deploys the updated `storefront/` live to Vercel production.

---

## 💳 Payment & Fulfillment Architecture
* **India (INR / UPI):** Customers pay via **Razorpay Payment Pages** and are automatically redirected to `/download.html?pack=<commerce|supervisor|gst>`.
* **Global (USD / Cards):** Customers pay via **Polar.sh** and automatically receive private GitHub repository access (`TecX-AI-Org/pro-mcp-connectors`).
* **AI Agent Discovery:** `/llms.txt` exposes structured product metadata and direct checkout links for AI crawlers and shopping agents.
* 
