# TecX AI — Autonomous System Architecture & Workflow Blueprint

## 1. System Overview
TecX AI is an automated digital infrastructure storefront selling plug-and-play Model Context Protocol (MCP) connectors to businesses and AI developers.

## 2. End-to-End Automated Revenue & Fulfillment Loop
1. **Discovery (Human + AI):**
   - Humans discover the storefront via SEO, Dev.to tutorials, Peerlist, and `tecx-open-starter-mcp`.
   - Autonomous AI agents discover products via `/llms.txt` and MCP registries.
2. **Dual-Currency Checkout:**
   - **India (INR / UPI):** Buyer clicks `Pay via Razorpay (UPI / INR)` -> Pays on Razorpay Payment Page -> Auto-redirects to `/download.html?pack=<commerce|supervisor|gst>`.
   - **Global (USD / Cards):** Buyer clicks `Pay via Polar.sh (Global / USD)` -> Pays on Polar -> Automatically receives private GitHub repository invite (`TecX-AI-Org/pro-mcp-connectors`).
3. **Continuous Packaging (CI/CD):**
   - Pushing code to `main` triggers `.github/workflows/auto-release.yml`, which tests dependencies, zips all MCP servers + setup manuals, and publishes a versioned GitHub Release automatically.

## 3. Product Catalog & Identifiers

| Pack ID | Product Name | INR Price | USD Price | Entry File |
| :--- | :--- | :--- | :--- | :--- |
| `commerce` | Commerce + WhatsApp MCP Server | ₹2,499 | $29 | `mcp-servers/commerce-whatsapp-mcp.js` |
| `supervisor` | AI Supervisor & Token Guard MCP | ₹3,999 | $49 | `mcp-servers/supervisor-guard-mcp.js` |
| `gst` | GST Invoice & Sheets Extractor MCP | ₹1,999 | $24 | `mcp-servers/gst-sheets-mcp.js` |
