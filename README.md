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
