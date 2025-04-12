# 🌏 Hello World Interview Reviewer

A community-powered platform where developers can share and read honest interview experiences with tech companies — starting with the Australian IT scene.

---

## 🚀 Project Overview

This app allows users to:

- 🌟 Share their interview experiences anonymously or with their name  
- 🔍 Browse reviews by position or company  
- 🧾 Get a sense of what to expect before applying or attending an interview  
- 🧑‍💻 Sign up or use the platform as a guest  

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Redux Toolkit  
- **State Management**: Redux  
- **Authentication & DB**: Firebase (Auth + Firestore)  
- **Routing**: React Router  
- **Deployment**: *(TBD — Netlify, Vercel, Firebase Hosting, etc.)*

---

## 📁 Project Structure

```
hello-world-interview-reviewer/
│
├── src/
│   ├── assets/              # Images, icons, illustrations
│   ├── components/          # Reusable React components
│   ├── pages/               # Pages like Home, Reviews, About
│   ├── layouts/             # Layout wrappers (e.g. Header + Footer)
│   ├── store/               # Redux logic and slices
│   ├── hooks/               # Custom hooks
│   ├── utils/               # Utility functions
│   ├── services/            # Firebase/API interaction
│   ├── types/               # TypeScript types/interfaces
│   ├── App.tsx              # Root app component
│   └── main.tsx             # Entry point (ReactDOM.createRoot)
│
├── public/ (optional)       # For static assets like favicon (if needed)
├── index.html               # Vite HTML template (contains root div + metadata)
├── tailwind.config.ts       # Tailwind CSS config (TypeScript format)
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
├── .env                     # Firebase credentials and env vars
└── package.json
```

> Note: Tailwind uses `tailwind.config.ts` when using TypeScript-based tools like Vite. If you're not using TypeScript for configs, rename it to `tailwind.config.js`.

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hello-world-interview-reviewer.git
cd hello-world-interview-reviewer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file and add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

### 4. Start the development server

```bash
npm run dev
```

---

## ✨ Future Features

- 👍 Like/dislike or 🚩 report a review  
- 🔎 Search & filters by role, company, difficulty  
- 🛡️ Admin dashboard for moderation  
- 🌍 Support for other industries beyond tech  

---

## 🙌 Contributing

This project is built to grow and evolve.  
Pull requests, feature suggestions, and feedback are always welcome!

---

**Made with ❤️ in Australia**
