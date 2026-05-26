# Conecta All Nations — Developer & Deployment Handbook

Welcome to the **Conecta All Nations** web application repository. This handbook has been organized to clarify the project's architecture, assist future developers with seamless maintenance or expansion, and outline the setup required for deploying to Vercel via GitHub.

---

## 🛠️ Tech Stack & Design Architecture

The application is built using a modern, lightweight, high-performance web structure:

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) for solid type safety and robust component structures.
- **Build System:** [Vite](https://vite.dev/) — extremely fast startup speeds and instant hot-reloading configurations.
- **Styling System:** [Tailwind CSS v4](https://tailwindcss.com/) — color definitions mapped inside the modern `oklch` color space, supporting high-contrast accessible layouts.
- **Icons System:** [Lucide React](https://lucide.dev/) — clean, consistent vector layout assets.
- **Routing:** [React Router Dom](https://reactrouter.com/) for SPA transitions.
- **Localization:** Custom high-efficiency Context API delivering instant transitions between English and Spanish.

---

## 📂 Code Directory Blueprint

To make it easy to find files and expand features, the folder architecture is organized as follows:

```text
├── package.json               # Package declarations, dependencies, and build scripts.
├── vite.config.ts             # Vite configuration importing plugins and managing root aliases (@/*).
├── tsconfig.json              # TypeScript compilation specifications.
├── index.html                 # Main markup page entry point.
├── metadata.json              # Application description, permissions, and major capability flags.
├── src/
│   ├── main.tsx               # App startup node defining client query providers and route layouts.
│   ├── styles.css             # Design system definitions (OKLCH gradients, glass nav rules, custom card shadows).
│   ├── assets/                # Visual media assets (illustrations, background photos, logos).
│   ├── hooks/                 # Custom reusable hooks (e.g., use-mobile.tsx for screen width queries).
│   ├── lib/
│   │   ├── i18n.tsx           # Bilingual English/Spanish dictionary context and useLang hook.
│   │   ├── theme.tsx          # Light / Dark visual theme context (switches 'dark' class on <html>).
│   │   └── utils.ts           # Helper utilities for combining tailwind utility strings (cn).
│   ├── pages/                 # Full screen layout structures served by routes:
│   │   ├── Index.tsx          # Conecta central landing experience.
│   │   ├── NotFound.tsx       # Standard 404 falling back screen.
│   │   ├── PrivacyPolicy.tsx  # GDPR & Malta compliant bilingual Privacy policy page.
│   │   └── CookiePolicy.tsx   # ePrivacy bilingual cookie description document.
│   └── components/
│       ├── ui/                # Standalone reusable design components (Buttons, inputs, accordions).
│       └── site/              # Section components grouped to yield the landing layout:
│           ├── Navbar.tsx     # Fixed header supporting smooth viewport scroll selectors, theme & language.
│           ├── Hero.tsx       # Primary welcome presentation linking explore actions.
│           ├── About.tsx      # Core organization summary with statistics.
│           ├── Services.tsx   # Detailed list of the five mobility service pathways.
│           ├── WhyMalta.tsx   # Regional features (English, cost of living, job expansion).
│           ├── HowItWorks.tsx # Simple 3-step action roadmap.
│           ├── Testimonials.tsx # Dynamic layout carousel.
│           ├── FAQ.tsx        # High fidelity smooth accordion panel of common questions.
│           ├── Blog.tsx       # Multi-column card guides (currently holding soon placeholders).
│           ├── Careers.tsx    # Recruitment engagement text.
│           ├── Contact.tsx    # Input form backed by full Zod schemas and validation controls.
│           ├── Footer.tsx     # Standard bottom info layout linking policies.
│           ├── WhatsAppFab.tsx # Floating quick contact handle (Bottom - Right).
│           └── CookieBanner.tsx # Dynamic bottom overlay offering Accept/Decline.
```

---

## 🌐 Dynamic Localization & Themes

### Multi-language i18n Dictionary

All primary app labels reside inside `/src/lib/i18n.tsx`.
To add new phrases or update existing copy:

1. Locate the `translations` object inside `i18n.tsx`.
2. Add a key-value pair under the `en` (English) block.
3. Add the exact same key with the corresponding translated phrase under the `es` (Spanish) block.
4. Import the custom hook `const { t } = useLang();` inside your components, then render it by calling `{t("your.new.key")}`.

### Custom Light & Dark Themes

The visual design changes cleanly by appending a `.dark` class to the master HTML node.
Primary colors, text values, border ranges, and gradients are mapped under custom properties in `/src/styles.css`. To alter values globally, modify the variables under the `:root` and `.dark` layers inside `/src/styles.css`.

---

## 🧑‍💻 Local Run Guide

To run or test this project on your local environment:

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Launch Development Server:**

   ```bash
   npm run dev
   ```

   _Your server will boot at `http://localhost:3000` or a fallback port indicated inside terminal._

3. **Format Code Styles (Recommended before committing):**

   ```bash
   # Run prettier to align code with default style guidelines
   npm run format
   ```

4. **Compile Production Build:**
   ```bash
   npm run build
   ```

---

## 🚀 GitHub & Vercel Deployment Guide

Deploying this app to Vercel is extremely simple and takes less than 3 minutes.

### Step 1: Push Existing Code to GitHub

1. Open your terminal in the root directory.
2. Initialize a local git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit with bilingual legal papers"
   ```
3. Create a repository on your personal [GitHub](https://github.com) account.
4. Set the origin and push the main branch:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Set Up & Deploy on Vercel

1. Log into your [Vercel](https://vercel.com) Dashboard.
2. Click **Add New** and choose **Project**.
3. Import your newly pushed repository from your connected GitHub account.
4. Inside Vercel's **Configure Project** tab:
   - **Framework Preset:** Vercel will auto-detect **Vite** (leave this as default).
   - **Root Directory:** Keep this as `./` (Root).
   - **Build and Output Settings:** Leave this empty (Vercel will automatically trigger `npm run build` and route static builds to the `dist` folder).
5. Press **Deploy**.

Vercel will build, provision, and deploy your live application. Every subsequent change you push to your GitHub repository's `main` branch will automatically trigger a new deployment production preview.
