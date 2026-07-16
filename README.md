# External FMS

Reference implementations and examples for the Symmio Partner API — a public repository demonstrating how to integrate Symmio's musculoskeletal (MSK) assessment engine into your platform.

## Repo structure

```
external-fms/
├── backend/           # Express proxy server (Node.js)
├── frontend/          # Gamification assessment app (vanilla HTML/JS + Bootstrap)
└── ...
```

Each directory is self-contained with its own documentation.

## Reference Implementation

The `backend/` + `frontend/` combo demonstrates the full gamification integration pattern:

1. **Backend**: A thin Express proxy that stores your API key server-side and forwards requests to the Symmio Partner API. The API key is never exposed to the browser.
2. **Frontend**: A single-page HTML app that displays milestone progress tiles, a grid of group tiles for all 17 assessment groups, and a question modal. Groups can be submitted in any order. The score progressively enriches as each group is completed.

### Quick start

```bash
# Terminal 1 — Start the proxy server
cd backend
cp .env.example .env
# Edit .env — set your API_KEY and BASE_URL
npm install
npm start

# Terminal 2 — Start a static server for the frontend
npx serve frontend/
# Then open http://localhost:3001 in your browser
```

See each directory's README for detailed instructions.

## Related

- [Symmio Partner API Documentation](https://symmio-api-docs-dev.web.app/v1/)
- [Developer Guide](https://symmio-api-docs-dev.web.app/v1/external/developer.html)
