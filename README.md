# External FMS

Reference implementations and examples for the Symmio Partner API — a public repository demonstrating how to integrate Symmio's musculoskeletal (MSK) assessment engine into your platform.

## Repo structure

```
external-fms/
├── backend/           # Express proxy server (Node.js)
├── frontend/          # Bootstrap-based assessment walkthrough (vanilla HTML/JS)
└── ...
```

Each directory is self-contained with its own documentation.

## Reference Implementation

The `backend/` + `frontend/` combo demonstrates the full integration pattern:

1. **Backend**: A thin Express proxy that stores your API key server-side and forwards requests to the Symmio Partner API. The API key is never exposed to the browser.
2. **Frontend**: A single-page HTML app that walks through a complete MSK Risk or MSK Health assessment, dynamically rendering each question based on its `answerFormat` and handling conditional display rules.

### Quick start

```bash
# Terminal 1 — Start the proxy server
cd backend
cp .env.example .env
# Edit .env — set your API_KEY and BASE_URL
npm install
npm start

# Terminal 2 — Start a static server for the frontend
# (serves frontend/ so fetch() works correctly)
npx serve frontend/
# Then open http://localhost:3001 in your browser
```

See each directory's README for detailed instructions.

## Related

- [Symmio Partner API Documentation](https://api.symmio.com/v1/)
- [Developer Guide](https://api.symmio.com/v1/external/developer.html)
