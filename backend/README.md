# External FMS — Backend Proxy

A thin Express proxy that securely forwards requests to the Symmio Partner API. Your API key is stored server-side and never exposed to the browser.

## Setup

```bash
cp .env.example .env
# Edit .env — set your API_KEY and BASE_URL
npm install
npm start
```

The server starts on `http://localhost:3000` by default.

## Endpoints

| Method | Path | Description |
|---|---|---|
| POST | `/create-assessment` | Creates a new assessment. Body: `{ type: "risk"|"health", userInfo: { age, isFemale } }` |
| POST | `/submit-group` | Submits a group. Body: `{ assessmentId, groupId, questionResponses }` |
| GET | `/state?assessmentId=...` | Gets the current assessment state. |

All three endpoints forward to the Symmio Partner API using the configured `API_KEY`.
