require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL || "http://localhost:6001/v1/external";
const PORT = process.env.PORT || 3000;

if (!API_KEY) {
    console.error("API_KEY is required. Set it in .env or as an environment variable.");
    process.exit(1);
}

function buildHeaders(language) {
    const h = {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
    };
    if (language) h["Accept-Language"] = language;
    return h;
}

async function proxy(method, path, body, language) {
    const url = `${BASE_URL}${path}`;
    console.log(`[PROXY] ${method} ${url}`);
    if (body !== undefined) console.log(`[PROXY] Request body:`, JSON.stringify(body).slice(0, 500));
    const res = await fetch(url, {
        method,
        headers: buildHeaders(language),
        body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    console.log(`[PROXY] Response ${res.status}:`, JSON.stringify(data).slice(0, 500));
    return { status: res.status, data };
}

// Create a new assessment (gamification — no type needed)
app.post("/create-assessment", async (req, res) => {
    const { userInfo, language } = req.body;
    const result = await proxy("POST", "/assessments", { userInfo }, language);
    res.status(result.status).json(result.data);
});

// Fetch question definitions for a specific group
app.get("/questions", async (req, res) => {
    const { groupId, language } = req.query;
    const encoded = encodeURIComponent(groupId);
    const result = await proxy("GET", `/questions?groupId=${encoded}`, undefined, language);
    res.status(result.status).json(result.data);
});

// Submit group responses (or retest — same endpoint)
app.post("/submit-group", async (req, res) => {
    const { assessmentId, groupId, questionResponses, language } = req.body;
    const result = await proxy(
        "POST",
        `/assessments/${assessmentId}/groups/${groupId}`,
        { questionResponses },
        language,
    );
    res.status(result.status).json(result.data);
});

// Get current assessment state
app.get("/state", async (req, res) => {
    const { assessmentId, language } = req.query;
    const result = await proxy("GET", `/assessments/${assessmentId}`, undefined, language);
    res.status(result.status).json(result.data);
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
    console.log(`Proxying to ${BASE_URL}`);
});
