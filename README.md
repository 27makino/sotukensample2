# sotukenSample

## Deploy Notes (Render)

- Start command for the backend that serves front & API: `node node/node.js` (Render)
- Environment variables: set `GEMINI_API_KEY` in Render dashboard **(do not store `.env` in the repo)**
- Port: The backend uses `process.env.PORT || 3001` so Render can assign a dynamic port.
- To serve the frontend on the same domain, the backend serves static files from the repo root.

## Security

- Do **not** commit secrets into the repo. If a key is accidentally committed, rotate it immediately and clean repo history.
- Add `.env` to `.gitignore` and store secrets in Render's Environment variables or GitHub Secrets for Actions.

## Quick Local Run

1. Install dependencies:
```
npm install
```
2. Start backend locally and visit the frontend:
```
node node/node.js
```

For frontend-only development, you can serve `index.html` with `npx serve -l 5500`.

### Local development with mock mode (no Gemini API required)

If you hit quota limits or want to develop without a Gemini API key, enable mock mode locally.
1. Create a local `.env` (never commit it), or set env variable in PowerShell:
```powershell
$env:MOCK_MODE = 'true'
node node/node.js
```
2. Alternatively, set `MOCK_MODE=true` in your `.env` file (but do not commit it).
3. In mock mode the server will produce deterministic fallback responses and you can test the front-end without quota issues.

### If you want to use the Gemini API locally

1. Ensure you have a valid key (with quota/billing) and set it in the `.env` file as:
```
GEMINI_API_KEY=<YOUR_NEW_KEY>
```
2. Start the server:
```
node node/node.js
```
3. If you still get quota errors, check your Google Cloud project billing and quota settings: https://ai.google.dev/gemini-api/docs/rate-limits

