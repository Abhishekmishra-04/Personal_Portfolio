# 🚀 Abhishek Kumar Mishra – AI-Powered Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Website-orange?style=for-the-badge&logo=netlify)](https://abhishekkumarmishraportfolio.netlify.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

> **A modern, lightning-fast developer portfolio website with an interactive AI Digital Twin, an AI Skill Matcher, featured project architecture breakdowns, and a working contact form with 1-click shareable link.**

---

## 🫏 1. "Explain Like I'm a Donkey" (30-Second Summary)

**What is this website?**  
Imagine taking a standard, boring paper resume and turning it into an interactive website that never sleeps. That is what this project is!

- 👤 **Who is it for?** Built for **Abhishek Kumar Mishra**, a Full Stack Software Engineer.
- 🤖 **What makes it special?** It has an **AI Assistant** right on the homepage that answers questions from recruiters (like *"Why should we hire Abhishek?"* or *"Explain his Job Portal project"*).
- 🎯 **What can recruiters do?** They can paste their job description to get an instant match score, review verified projects, download his resume, or send a message directly using the **Contact Form**.
- 📬 **How do people contact him?** Anyone can type their message into the contact form and send it, or copy the direct form link with one click to share with hiring managers!

---

## 🌟 2. Key Features

| Feature | What It Does | Why It Matters |
| :--- | :--- | :--- |
| 🤖 **AI Recruiter Assistant** | Chatbot trained on Abhishek's portfolio data. | Recruiters get instant answers without reading long paragraphs. |
| 🎯 **AI Skill Matcher** | Paste any Job Description (JD) to see compatibility %. | Shows how Abhishek's skills match the company's job requirements. |
| 📝 **Smart Summary Generator** | 1-click summaries tailored for Recruiters, Tech Leads, or CTOs. | Delivers the exact info each type of hiring manager wants to see. |
| 📬 **Working Contact Form** | Full validation (Name, Email, Subject, Message) + API backend. | Anyone can message Abhishek directly with zero hassle. |
| 🔗 **1-Click Shareable Form Link** | Copies direct `/#contact` URL to clipboard. | Send the contact link directly to HR, clients, or team members! |
| 🏗️ **Project Architecture Modals** | Click "Ask AI to Explain Architecture" on any project. | Demonstrates deep system design and database engineering knowledge. |
| 🌓 **Dark / Light Theme Toggle** | 1-click toggle between sleek dark mode and modern clean light mode. | Perfect readability under any ambient lighting condition. |
| 📱 **100% Responsive Design** | Mobile-first layout with smooth micro-animations. | Looks stunning on iPhones, Androids, tablets, and 4K desktop screens. |

---

## 🛠️ 3. Tech Stack Explained Simply

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack) – Super fast server-side rendering and API routes.
- **Library:** [React 19](https://react.dev/) – Component-driven user interface.
- **Language:** [TypeScript](https://www.typescriptlang.org/) – Prevents bugs by making code strictly typed.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) – Sleek, modern utility-first CSS styling.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) – Smooth page transitions and button hover effects.
- **Icons:** [Lucide React](https://lucide.dev/) – Crisp, lightweight SVG vector icons.
- **AI Engine:** [OpenAI API](https://openai.com/) – Powers the chat assistant and architecture explainer (with built-in smart mock mode for demo testing).

---

## 📂 4. Project Folder & File Guide

Here is where everything lives in this project:

```text
Personal_Portfolio-main/
├── public/                     # Static files (images, resume, icons)
│   ├── profile.jpeg            # Abhishek's profile photo
│   └── resume.pdf              # Downloadable resume PDF
│
├── src/
│   ├── app/                    # Next.js App Router (Pages & APIs)
│   │   ├── api/
│   │   │   ├── ai/
│   │   │   │   └── route.ts    # Backend route for AI chatbot & skill matcher
│   │   │   └── contact/
│   │   │       └── route.ts    # Backend route for Contact Form submissions
│   │   ├── globals.css         # Global CSS styles & Tailwind v4 theme
│   │   ├── layout.tsx          # Root layout (fonts, navbar wrapper, metadata)
│   │   └── page.tsx            # Main homepage stitching all sections together
│   │
│   ├── components/             # Reusable UI components
│   │   ├── ai/
│   │   │   ├── AiAssistant.tsx # Interactive AI chat component
│   │   │   ├── SkillMatcher.tsx# Job description analyzer
│   │   │   └── SummaryGenerator.tsx # Tailored summary generator
│   │   ├── ui/
│   │   │   └── Section.tsx     # Standard section wrapper with consistent padding
│   │   ├── Certifications.tsx  # Certifications & licenses display
│   │   ├── CodingProfiles.tsx  # LeetCode, CodeChef, HackerEarth badges
│   │   ├── Contact.tsx         # Working Contact Form & Share Link button
│   │   ├── Education.tsx       # Degree & academic background cards
│   │   ├── Experience.tsx      # Internship & work history timeline
│   │   ├── Footer.tsx          # Copyright notice & social links
│   │   ├── Hero.tsx            # Headline, quick intro, resume & contact CTAs
│   │   ├── Navbar.tsx          # Sticky navigation bar with quick jump links
│   │   ├── Projects.tsx        # Project showcase with AI architecture explainer
│   │   ├── TechStack.tsx       # Frontend, Backend, DevOps skill categories
│   │   └── WhyHireMe.tsx       # Core value propositions
│   │
│   ├── data/
│   │   └── portfolio.ts        # ⭐ SINGLE SOURCE OF TRUTH (All profile data here!)
│   │
│   └── lib/
│       └── utils.ts            # Helper function for merging CSS classnames (cn)
│
├── package.json                # Project dependencies and run scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # You are reading this!
```

---

## ⚡ 5. How to Run the Project Locally (Step-by-Step)

Follow these simple steps to run this website on your own laptop:

### Prerequisites
Make sure you have installed on your computer:
- **Node.js** (version 18 or newer). Download free at [nodejs.org](https://nodejs.org/).
- **Git** (optional, for cloning). Download at [git-scm.com](https://git-scm.com/).

---

### Step 1: Open Your Terminal or PowerShell
- On **Windows**: Press `Win + R`, type `powershell`, and press Enter.
- On **Mac**: Press `Cmd + Space`, type `terminal`, and press Enter.

### Step 2: Navigate to the Project Folder
```bash
cd "path/to/Personal_Portfolio-main"
```
*(Make sure you are inside the directory containing `package.json`)*.

### Step 3: Install the Dependencies
Run this command once:
```bash
npm install
```
*(This downloads all needed libraries into a folder called `node_modules`)*.

### Step 4: Start the Local Development Server
Run:
```bash
npm run dev
```

### Step 5: Open in Your Browser
Open Chrome, Edge, Safari, or Brave and visit:
👉 **[http://localhost:3000](http://localhost:3000)**

You will see the full live website running locally! Any changes you make to the code will update automatically in real-time.

---

## 📬 6. Contact Form & Direct Link Guide

### How the Contact Form Works:
The contact form is located at the bottom of the page (`#contact`).

1. **User Enters Details:**
   - **Name:** Visitor's full name (e.g. *"Jane Doe"*)
   - **Email:** Valid email address (e.g. *"jane@company.com"*)
   - **Subject:** Reason for contact (e.g. *"Full Stack Engineer Role"*)
   - **Message:** Details of the opportunity or inquiry
2. **User Clicks "Send Message":**
   - The form sends a POST request to `/api/contact`.
   - The server validates all inputs.
   - The server securely logs the message:
     ```text
     ==========================================
     📨 NEW CONTACT FORM SUBMISSION RECEIVED
     From:    Jane Doe <jane@company.com>
     Subject: Full Stack Engineer Role
     Date:    2026-10-18T16:24:00.000Z
     Message Content:
     Hi Abhishek, we'd love to schedule an interview!
     ==========================================
     ```
   - The user sees an instant green success confirmation!

### How to Share the Contact Form Link:
- Click the **"Copy Direct Form Link"** button inside the Contact section.
- It automatically copies the direct link to your clipboard:
  ```text
  https://abhishekkumarmishraportfolio.netlify.app/#contact
  ```
- Send this link to anyone on WhatsApp, LinkedIn, Slack, or Email, and when they click it, their browser will jump **directly to the contact form**!

### Optional: Forward Form Submissions Directly to Your Email Inbox
If you want form submissions to arrive directly in your Gmail automatically:
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a form and copy your Form ID (e.g. `xpzgvbar`).
3. Create a `.env.local` file in your project root:
   ```env
   FORMSPREE_KEY=your_formspree_id_here
   ```
4. Now, every submission sent from the contact form will automatically arrive straight to your email inbox!

---

## 🤖 7. AI Assistant & OpenAI Configuration

The portfolio has a built-in AI assistant that answers questions about Abhishek's skills, projects, and background.

### Out-of-the-Box (Demo / Mock Mode)
- **Zero setup required!**
- If no API key is provided, the application runs in smart mock mode with pre-programmed, intelligent responses so recruiters can always test the AI functionality without needing an API key.

### Using Real OpenAI (Live Production AI)
To connect real GPT intelligence:
1. Create a file named `.env.local` in the project root folder.
2. Add your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-your-openai-api-key-here
   ```
3. Restart the dev server (`npm run dev`).
4. The assistant will now use real-time GPT-3.5/GPT-4 to stream custom AI answers!

---

## 🎨 8. How to Customize This Portfolio for Yourself (In 5 Minutes)

Want to adapt this portfolio with your own information? You only need to touch **one file**!

### 1. Update Profile Information
Open [`src/data/portfolio.ts`](./src/data/portfolio.ts) and edit:
- `personal.name` – Your name
- `personal.role` – Your job title
- `personal.email` – Your email address
- `personal.phone` – Your phone number
- `personal.linkedin` – Your LinkedIn URL
- `personal.github` – Your GitHub URL
- `projects` – Replace with your projects (title, tech, description, links)
- `experience` – Replace with your work history
- `education` – Replace with your college and school details
- `certifications` – Replace with your certificates

### 2. Update Photo & Resume
- Place your photo in `public/profile.jpeg` (keep the same filename or update the path in `Hero.tsx`).
- Place your resume in `public/resume.pdf`.

That's it! Your entire portfolio is customized.

---

## 🚢 9. How to Deploy to the Web (Free)

### Deploying on Vercel (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "My awesome portfolio"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your repository.
4. If you have an OpenAI key or Formspree key, add them in the **Environment Variables** section.
5. Click **"Deploy"**. In less than 60 seconds, your site is live worldwide with a free HTTPS domain!

### Deploying on Netlify
1. Go to [netlify.com](https://www.netlify.com/).
2. Click **"Import from Git"**.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Click **"Deploy site"**.

---

## ❓ 10. Frequently Asked Questions (FAQ)

### Q: Why wasn't the contact form working before?
> **Answer:** Previously, there was no actual contact form in the code—only an HTML `mailto:` link. On many computers and mobile devices without a configured email client (like Microsoft Outlook), clicking `mailto:` does nothing. Now, a full form with input fields (Name, Email, Subject, Message), client validation, Next.js server route (`/api/contact`), and a 1-click shareable link button has been built and tested!

### Q: How do I test the contact form locally?
> **Answer:** Run `npm run dev`, go to `http://localhost:3000/#contact`, fill out the form, and hit **"Send Message"**. You will see the green success message in your browser, and the full message details will print directly to your terminal console.

### Q: What if a recruiter prefers to use their own email app?
> **Answer:** Right beside the "Send Message" button, there is a **"Send via Email App"** button that opens Gmail, Outlook, or Apple Mail with the subject and message already pre-filled.

### Q: How do I share just the contact form link with someone?
> **Answer:** Click the **"Copy Direct Form Link"** button on the contact section, or simply copy `https://abhishekkumarmishraportfolio.netlify.app/#contact`.

---

## 📞 11. Contact Abhishek Kumar Mishra

- 📧 **Email:** [abhishekkumarmishra82077@gmail.com](mailto:abhishekkumarmishra82077@gmail.com)
- 📱 **Phone / WhatsApp:** [+91 8207768304](https://wa.me/918207768304)
- 💼 **LinkedIn:** [linkedin.com/in/abhishekmishra82077](https://www.linkedin.com/in/abhishekmishra82077/)
- 🐙 **GitHub:** [github.com/Abhishekmishra-04](https://github.com/Abhishekmishra-04)
- 🌐 **Live Portfolio:** [abhishekkumarmishraportfolio.netlify.app](https://abhishekkumarmishraportfolio.netlify.app/)
- 📍 **Location:** Uttar Pradesh, India (Open to Remote & Relocation)

---

*Made with ❤️ by Abhishek Kumar Mishra. Star this repository on GitHub if you found it helpful!*
