# External FMS — Frontend

A single-page assessment walkthrough built with vanilla HTML, JavaScript, and Bootstrap 5 (CDN). No build step required.

## How to run

The frontend needs to be served over HTTP so `fetch()` calls to the backend proxy work correctly. Opening `client.html` directly from the file system (`file://`) may not work in all browsers.

### Option 1: Using `serve` (recommended)

```bash
npx serve frontend/
# Opens on http://localhost:3001
```

### Option 2: Using Python

```bash
# Python 3
python -m http.server 3001 --directory frontend/

# Python 2
python -m SimpleHTTPServer 3001
```

### Option 3: Any static server

Any HTTP server pointed at the `frontend/` directory works. Then open the URL in your browser.

## What it does

1. Select assessment type (Risk / Health), user info, and language
2. Click "Create Assessment" — the first group's questions render as dynamic form inputs
3. Answer questions — inputs match the `answerFormat` (radio buttons for OPTIONS, checkboxes for MULTIPLE_CHOICE, number for INTEGER, etc.)
4. Click "Submit Group" — the next group loads, or the final score is shown
5. Conditional questions (`showWhen` / `skipWhen`) hide and show automatically as you answer

## Architecture

```
Browser (client.html)  →  Backend proxy (localhost:3000)  →  Symmio Partner API
```

The API key stays in the backend — the browser never sees it.
