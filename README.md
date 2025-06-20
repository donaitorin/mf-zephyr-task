# mf-zephyr-task 🚀

Micro-frontend demo built with **React 19**, **Module Federation 2 (enhanced)**, **Rspack**, **Tailwind CSS 4**, and deployed to **Zephyr Cloud**.

---

## 📁 Project structure

```
├─ apps/
│ ├─ header-app/ # remote 1
│ ├─ content-app/ # remote 2
│ └─ shell-app/ # host – stitches everything together
├─ rspack.base.ts # shared Rspack config factory
├─ tailwind.config.js # design-system tokens
└─ postcss.config.mjs
```

Each workspace owns its `package.json`, `mfConfig`, and a **tiny** `rspack.config.ts`.  
All loaders, optimizers, Zephyr, and Tailwind setup live in **`rspack.base.ts`**.

---

## 🖥 Local development

```bash
# install once at the monorepo root
npm install

# run every app in its own terminal
npm run dev -w apps/header-app     # http://localhost:8082
npm run dev -w apps/content-app    # http://localhost:8081
npm run dev -w apps/shell-app      # http://localhost:8080

```

## 🖥 Deployment

```bash
# install once at the monorepo root
npm install

# build every app
npm run build -w apps/header-app
npm run build -w apps/content-app
npm run build -w apps/shell-app

```
