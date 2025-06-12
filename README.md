Claro, Fernando! Com base nas funcionalidades que você concluiu hoje (dark mode funcional, responsividade, extração de componentes reutilizáveis, página 404 customizada, glassmorphism no card de usuário), aqui está a versão **atualizada e mais completa** do seu `README.md`:

---

```md
# 🚀 DevFinder SSR

A modern and responsive GitHub user search app built with **Next.js + TypeScript + Tailwind CSS**.  
This project demonstrates real-world usage of **SSR** (Server-Side Rendering), **ISR** (Incremental Static Regeneration), and **API integration**, serving as a reusable base for future portfolio projects.

---

## 📚 Technologies Used

| Layer        | Technology                                               | Purpose                                           |
| ------------ | -------------------------------------------------------- | ------------------------------------------------- |
| Framework    | [Next.js](https://nextjs.org)                            | SSR/ISR rendering, routing, and project structure |
| Styling      | [Tailwind CSS](https://tailwindcss.com)                  | Utility-first CSS with dark mode and glass UI     |
| Typing       | [TypeScript](https://www.typescriptlang.org/)            | Static typing and type safety                     |
| Linting      | [ESLint + Prettier](https://eslint.org)                  | Code linting and formatting automation            |
| Git Hooks    | [Husky + lint-staged](https://typicode.github.io/husky/) | Pre-commit checks for clean code                  |
| External API | [GitHub REST API v3](https://docs.github.com/en/rest)    | Real-time GitHub user, repo, and follower data    |

---

## 📁 Project Structure
```

📁 /src
┣ 📁 components → ThemeToggle, SearchForm, UserCard
┣ 📁 context → ThemeContext (dark mode)
┣ 📁 lib → API integration (future use)
┣ 📁 pages
┃ ┣ 📄 index.tsx → SSR-based GitHub user search
┃ ┣ 📄 404.tsx → Custom fallback page
┃ ┗ 📁 user
┃ ┗ 📄 \[username].tsx → ISR-based user profile page
┣ 📁 styles → Global Tailwind styles
┣ 📄 types.d.ts → Custom TypeScript definitions

````

---

## 🧱 Features

- 🔎 **GitHub User Search** using `getServerSideProps` (SSR)
- 👤 **User Profile Page** with `getStaticProps` + `getStaticPaths` (ISR)
- 🌙 **Dark Mode** with `Context API`, localStorage persistence and Tailwind
- 💎 **Glassmorphism UI** on user cards for modern visual design
- 📱 **Responsive Layout** optimized for mobile and desktop
- 🚫 **Custom 404 Page** with fallback messaging
- ✅ **Husky + lint-staged** setup for pre-commit linting
- 📦 Clean project structure for easy reuse and scalability

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ghiberti85/devfinder-ssr.git
cd devfinder-ssr
````

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

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Starts the development server |
| `npm run lint`    | Lints and formats all code    |
| `npm run build`   | Builds the app for production |
| `npm run prepare` | Installs Git hooks (Husky)    |

---

## 🔐 Environment Variables (Optional)

To avoid hitting GitHub API rate limits, you can set a personal token in a `.env.local` file:

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

```

---
```
