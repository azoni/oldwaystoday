# 🌿 Old Ways Today

A React-based web app that helps families find non-toxic, traditional, and safe alternatives to modern household products — powered by GPT.

---

## 🚀 Features

- GPT-powered chat assistant (via OpenAI API)  
- Beautiful, responsive UI with traditional, family-friendly aesthetic  
- Clean routing between chat and blog pages  
- Netlify Functions used as a secure proxy for OpenAI calls  

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/oldwaystoday.git
cd oldwaystoday
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Netlify CLI (if not already)

```bash
npm install -g netlify-cli
```

> This is required to run serverless functions locally.

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project with:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

> **Do not commit this file.** This key powers the GPT assistant behind the scenes.

---

## 💻 Running the Project Locally

Use Netlify’s dev environment to run both the React app and Netlify Functions:

```bash
netlify dev
```

This will:
- Start your frontend at `http://localhost:8888`  
- Auto-handle the `/functions/proxy-gpt` API route  
- Load your `.env` values properly  

> ⚠️ Do **not** use `npm start` — it won’t support the serverless functions.

---

## 📂 Project Structure

```
/
├── src/              # React components and pages  
│   ├── components/   # Header, reusable UI  
│   ├── pages/        # Home (chat) and Blog pages  
│   └── services/     # openai.js for GPT calls  
├── netlify/functions/
│   └── proxy-gpt.js  # Secure OpenAI proxy function  
├── public/  
├── .env              # Your secret keys (not committed)  
└── netlify.toml      # Netlify dev settings
```

---

## 📝 Available Scripts

- `netlify dev` – Run app and functions locally (recommended for dev)  
- `npm install` – Install all frontend dependencies

---

## ✅ Deployment

This app is configured for Netlify. You can deploy it with:

```bash
netlify deploy --prod
```

---

## 👥 Contributing

If you're joining the project:
- Make sure you have an OpenAI API key  
- Use `netlify dev` for testing locally  
- Ask Charlton or Jane before changing styling or GPT prompt logic 😊

---

## 📫 Questions?

Reach out to Charlton/Jane or submit an issue.
