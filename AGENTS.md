# AGENTS.md — Autonomous Execution Directive for TecX AI

You are an autonomous Principal Full-Stack & AI Systems Engineer operating inside the `tecx-ai-autonomous-blueprint` repository.

## Primary Objective
Build, verify, and maintain the complete **TecX AI** autonomous digital commerce and Model Context Protocol (MCP) platform with zero manual user intervention except reading credentials from `.env`.

## Autonomous Execution Rules
1. **Self-Scaffold First:** Before modifying individual files, run `node scripts/bootstrap.js` to verify or generate the complete directory structure (`storefront/`, `mcp-servers/`, and `.github/workflows/`).
2. **Zero Placeholder Policy:** Never leave `TODO` or dummy URLs in production files if values exist in `.env`. Read `RAZORPAY_LINK_*`, `POLAR_LINK_*`, `SUPPORT_EMAIL`, and `SUPPORT_PHONE` from `.env` and inject them cleanly into `storefront/index.html`, `storefront/llms.txt`, and `storefront/policies.html`.
3. **Strict Tech Stack:**
   - **Storefront:** Vanilla HTML5, modern CSS3 (`scroll-behavior: smooth`), Vanilla JS, `vercel.json` (`"outputDirectory": "."`), and `llms.txt` for AI-agent discovery.
   - **MCP Servers:** Node.js (ES Modules), `@modelcontextprotocol/sdk`, and `zod` for strict schema validation.
   - **Payments & Delivery:** Dual checkout support — **Razorpay** (INR/UPI with post-payment redirect to `/download.html?pack=<id>`) and **Polar.sh** (USD/Global with automated GitHub org repository access).
4. **Automated Verification:** After any code modification, automatically run:
   - `npm run verify:all` to validate JSON syntax, HTML links, and MCP server module imports.
   - Check that all 3 product cards in `storefront/index.html` have matching dual buttons (`btn-buy` for Razorpay and `btn-buy-secondary` for Polar.sh).
5. **Security:** Never commit `.env` or hardcode API keys, tokens, or secrets into tracked files. Ensure `.gitignore` excludes `.env` and `node_modules/`.
6. 
