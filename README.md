# 🚀 DevFinder SSR

A web application built with **Next.js + TypeScript + Tailwind CSS**, focused on consuming the **GitHub API** using modern rendering strategies like **SSR** (Server-Side Rendering) and **ISR** (Incremental Static Regeneration).

This project serves as the visual and technical foundation for future portfolio sprints.

---

## 📚 Technologies Used

| Layer        | Technology                                               | Purpose                                           |
| ------------ | -------------------------------------------------------- | ------------------------------------------------- |
| Framework    | [Next.js](https://nextjs.org)                            | SSR/ISR rendering, routing, and project structure |
| Styling      | [Tailwind CSS](https://tailwindcss.com)                  | Utility-first CSS with dark mode support          |
| Typing       | [TypeScript](https://www.typescriptlang.org/)            | Static typing and code safety                     |
| Linting      | [ESLint + Prettier](https://eslint.org)                  | Code formatting and linting automation            |
| Git Hooks    | [Husky + lint-staged](https://typicode.github.io/husky/) | Prevent bad commits using pre-commit hooks        |
| External API | [GitHub REST API v3](https://docs.github.com/en/rest)    | User, repo, and follower data retrieval           |

---

## 📂 Project Structure

```

📁 /src
┣ 📁 components → Reusable UI components (e.g. ThemeToggle, UserCard)
┣ 📁 context → Global providers (e.g. ThemeContext)
┣ 📁 lib → API utilities and logic
┣ 📁 pages
┃ ┣ 📄 index.tsx → GitHub user search (SSR)
┃ ┗ 📁 user
┃ ┗ 📄 \[username].tsx → GitHub profile page (ISR)
┣ 📁 styles → Global styles (globals.css)
┣ 📄 types.d.ts → Custom TypeScript types
┗ 📄 README.md → Project documentation

```

---

## 🧱 Features

- 🔎 GitHub user search with **SSR** using `getServerSideProps`
- 👤 GitHub profile page with **ISR** using `getStaticProps` + `getStaticPaths`
- 🌙 Dark mode support using `Context API` + Tailwind
- ⚙️ GitHub avatar support via `remotePatterns` in `next.config.ts`
- 🚫 Custom 404 page with fallback handling
- ✅ Husky + lint-staged setup for pre-commit validation

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ghiberti85/devfinder-ssr.git
cd devfinder-ssr
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🔍 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Starts the development server        |
| `npm run lint`    | Lints all files using ESLint         |
| `npm run build`   | Builds the app for production        |
| `npm run prepare` | Installs Husky and sets up Git hooks |

---

## 🔐 Environment Variables (Optional)

To avoid GitHub API rate limits, create a `.env.local` file and add:

```env
GITHUB_TOKEN=your_personal_token_here
```

---

## 👨‍💻 Author

Made with 💻 by [Fernando Ghiberti](https://github.com/ghiberti85)
Senior Software Engineer · Fullstack Developer · Front-End Specialist

---

## 📄 License

This project is licensed under the MIT License.
