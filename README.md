## Abhishek Kumar Mishra – AI‑Powered Portfolio (Next.js)

Modern, production‑ready developer portfolio built with Next.js 16, React 19 and TypeScript.  
This portfolio is designed specifically for recruiters and hiring managers: it is fast, structured, and includes AI tools that help you quickly understand my experience and skills.

---

## 1. Project Overview

- **Name:** Abhishek Kumar Mishra  
- **Role:** Full Stack Developer | Software Engineer  
- **Location:** Uttar Pradesh, India (Open to Remote & Relocation)  
- **Live Demo:** (add your final deployed URL here)  
- **Tech Focus:** High‑performance, production‑ready web apps with clean architecture.

This portfolio showcases:

- A clear **summary** of my experience and value.
- Real **projects** with outcomes and tech stacks.
- **Experience** timeline with real responsibilities and impact.
- **Coding profiles** (LeetCode, CodeChef, etc.).
- An **AI Recruiter Assistant** that can answer questions about my profile.

---

## 2. Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion  
- **Styling & UI:** Tailwind CSS, custom components, responsive design  
- **AI & APIs:** OpenAI (via `openai` + `ai` packages), custom Next.js API routes  
- **Tooling:** ESLint, TypeScript, PostCSS  
- **Deployment:** Optimized for Vercel or similar Node‑based platforms

All portfolio content (summary, projects, experience, certifications, etc.) is centralized in a single data file for easy maintenance:

- [`src/data/portfolio.ts`](./src/data/portfolio.ts)

---

## 3. Folder Structure (High‑Level)

- `src/app` – Next.js App Router pages and layout  
  - `page.tsx` – Main landing page that stitches all sections together  
  - `api/ai/route.ts` – Server route powering the AI assistant
- `src/components` – Reusable UI components and sections  
  - `Hero.tsx` – Intro, summary, and resume CTA  
  - `AiSection.tsx` – AI‑powered portfolio section  
  - `Projects.tsx` – Featured projects with modals and details  
  - `Experience.tsx`, `TechStack.tsx`, `WhyHireMe.tsx`, `Contact.tsx`, etc.
- `src/data/portfolio.ts` – Single source of truth for all portfolio content  
- `public/` – Static assets like `profile.jpeg`, `resume.pdf`, icons, etc.

If you want to quickly customize this portfolio for yourself, most changes can be done by editing `src/data/portfolio.ts` and updating images in `public/`.

---

## 4. How to Run the Project Locally

### Step 1: Clone the repository

```bash
git clone <your-repo-url>
cd my-portfolio
```

> If this project is inside another folder, make sure you `cd` into the `my-portfolio` directory where `package.json` is located.

### Step 2: Install dependencies

Using npm (recommended):

```bash
npm install
```

You can also use `yarn`, `pnpm`, or `bun` if you prefer, but make sure to use only one package manager to avoid lockfile conflicts.

### Step 3: Run the development server

```bash
npm run dev
```

Then open your browser at:

- http://localhost:3000

The site supports hot reload: any changes you make in `src/` will automatically refresh the page.

### Step 4: Build and run production build (optional)

To simulate how the site will run in production:

```bash
npm run build
npm start
```

This will:

- Compile an optimized production build.
- Start the Next.js server on the default port (usually 3000).

---

## 5. AI Assistant & Environment Variables

The portfolio includes an **AI Recruiter Assistant** powered by OpenAI.  
You can find the API route here:

- [`src/app/api/ai/route.ts`](./src/app/api/ai/route.ts)

### Using your own OpenAI API key

For a real production setup, create a `.env.local` file in the project root:

```bash
OPENAI_API_KEY=your_real_openai_api_key_here
```

Then restart the dev server.

> Note: The code includes a safe fallback so the portfolio still works as a demo even if the key is missing, but for real AI responses you should provide your own API key.

---

## 6. Key Sections for Recruiters

- **Hero:** Quick snapshot of who I am, what I do, and where I am located, with easy access to my resume.
- **AI Recruiter Assistant:** Ask questions like:
  - “Why should we hire Abhishek?”
  - “Explain the Job Portal architecture.”
  - “What is his tech stack?”
- **Projects:** Real projects with tech stack, features, and outcomes.
- **Experience:** Internship and work experience with impact‑oriented bullet points.
- **Why Hire Me:** Clear reasons that summarize how I work and what I bring to a team.
- **Coding Profiles:** Links to LeetCode, CodeChef, HackerEarth, StackOverflow, etc.

Each section is designed to answer common recruiter questions in under a minute.

---

## 7. Scripts

Available npm scripts:

- `npm run dev` – Start development server  
- `npm run build` – Create optimized production build  
- `npm start` – Run the built app in production mode  
- `npm run lint` – Run ESLint over the project

---

## 8. How to Customize This Portfolio for Yourself

If you’re a recruiter or developer who wants to reuse this structure:

1. **Update core data**
   - Edit [`src/data/portfolio.ts`](./src/data/portfolio.ts)  
   - Replace name, summary, projects, experience, certifications, and links.
2. **Change images & resume**
   - Replace `public/profile.jpeg` with your own photo.  
   - Replace `public/resume.pdf` with your latest resume.
3. **Adjust theme or colors (optional)**
   - Update Tailwind utility classes in components under `src/components/`.
4. **Connect your own AI key (optional)**
   - Add your `OPENAI_API_KEY` in `.env.local`.

This gives you a modern, AI‑enabled portfolio with minimal setup.

---

## 9. Contact

- **Email:** abhishekkumarmishra82077@gmail.com  
- **LinkedIn:** https://www.linkedin.com/in/abhishekmishra82077/  
- **GitHub:** https://github.com/Abhishekmishra-04

If you’re a recruiter or hiring manager and would like to know how I can help your team, feel free to reach out or use the AI assistant on the live site to explore my background interactively.
