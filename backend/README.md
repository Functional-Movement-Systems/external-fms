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
| POST | `/create-assessment` | Creates a new gamification assessment. Body: `{ userInfo: { age, isFemale }, language? }` |
| POST | `/submit-group` | Submits group responses (or retests). Body: `{ assessmentId, groupId, questionResponses, language? }` |
| GET | `/state` | Gets current assessment state. Query: `?assessmentId=X&language=Y` |
| GET | `/questions` | Fetches question definitions for a group. Query: `?groupId=X&language=Y` |

All endpoints forward to the Symmio Partner API using the configured `API_KEY`.
