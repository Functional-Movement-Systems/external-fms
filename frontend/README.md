# External FMS — Frontend

A single-page gamification assessment app built with vanilla HTML, JavaScript, and Bootstrap 5 (CDN). No build step required.

## How to run

The frontend needs to be served over HTTP so `fetch()` calls to the backend proxy work correctly.

```bash
npx serve frontend/
# Opens on http://localhost:3001
```

## What it does

1. Enter age, biological sex, and language — click "Create Assessment"
2. **Milestone tiles** show progress toward Movement Score, Lifestyle Score, MSK Risk, and MSK Health tiers — percentages when reached
3. **Group grid** shows all 17 assessment groups as clickable tiles — percentages when completed
4. **Conditional tiles** (SLEEP_PSQI, etc.) appear only when triggered
5. Click any group tile → question modal loads with the correct input types (radio, checkbox, number, time, pain scale, video)
6. Submit answers → all milestones, group tiles, and score display update immediately
7. **Score section** shows Overall %, Risk Factor, Movement %, Lifestyle %, Focus Areas
8. **Retest** any group by clicking its tile again

## Architecture

```
Browser (client.html)  →  Backend proxy (localhost:3000)  →  Symmio Partner API
```

The API key stays in the backend — the browser never sees it.
