# 💕 Valentine's Scrapbook Website

A beautiful Valentine's Day scrapbook website with a black & white theme, red handwritten text, and a fun entrance page.

## ✨ Features

- 💘 **Entrance page** — "Will you be my Valentine?" with funny escalating sad responses when clicking No
- 📸 **Scrapbook main page** — Black & white photos, torn paper effects, handwritten red text
- 🎉 **Confetti celebration** when they click Yes
- 📱 **Mobile responsive** — works on all devices

---

## 🚀 DEPLOY TO GITHUB PAGES (Step-by-Step)

### Step 1: Install Prerequisites

Download and install these (if you don't have them):
- **Node.js** → https://nodejs.org (click "LTS" version)
- **Git** → https://git-scm.com/downloads

### Step 2: Download This Project

Download the zip file and extract it, OR clone the repo.

### Step 3: Open Terminal

Open **Terminal** (Mac) or **Command Prompt** (Windows) and navigate to the project folder:

```bash
cd path/to/valentine-scrapbook
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Add Your Own Photos (Optional)

1. Put your photos in the `src/images/` folder
2. Open `src/App.tsx` in any text editor
3. Find these lines near the top (around line 20):

```js
import headerImg from "./images/header.svg";
import photo1Img from "./images/photo1.svg";
import photo2Img from "./images/photo2.svg";
```

4. Change them to your photo filenames:

```js
import headerImg from "./images/our-photo.jpg";
import photo1Img from "./images/kiss.jpg";
import photo2Img from "./images/hug.jpg";
```

5. You can also change the text:

```js
const SUBTITLE_TEXT = "2 years together";
const PHOTO1_CAPTION = "quiet moments";
const PHOTO2_CAPTION = "always together";
```

### Step 6: Test Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser to preview.

### Step 7: Build the Project

```bash
npm run build
```

This creates a `dist/` folder with one single `index.html` file.

### Step 8: Create GitHub Repository

1. Go to https://github.com/new
2. Name it `valentine` (or anything you like)
3. Set to **Public**
4. Do NOT check any boxes (no README, no .gitignore)
5. Click **Create repository**

### Step 9: Push to GitHub

Run these commands one by one:

```bash
git init
git add .
git commit -m "Valentine's scrapbook 💕"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/valentine.git
git push -u origin main
```

⚠️ Replace `YOUR_USERNAME` with your actual GitHub username!

### Step 10: Deploy to GitHub Pages

```bash
npm install -D gh-pages
npx gh-pages -d dist
```

### Step 11: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** (top tab)
3. Click **Pages** (left sidebar)
4. Under **"Build and deployment"**:
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`** / **`/ (root)`**
5. Click **Save**

### Step 12: Wait & Visit! 🎉

Wait 1-2 minutes, then visit:

```
https://YOUR_USERNAME.github.io/valentine/
```

---

## 🔄 How to Update After Making Changes

After you edit any files:

```bash
npm run build
npx gh-pages -d dist
```

Wait 1-2 minutes and refresh your site.

---

## 📁 Project Structure

```
valentine-scrapbook/
├── src/
│   ├── images/          ← 🖼️ PUT YOUR PHOTOS HERE
│   │   ├── header.svg   ← Replace with your header.jpg
│   │   ├── photo1.svg   ← Replace with your photo1.jpg
│   │   └── photo2.svg   ← Replace with your photo2.jpg
│   ├── App.tsx          ← 📝 Main page (edit images & text here)
│   ├── EntrancePage.tsx ← 💘 "Will you be my Valentine?" page
│   ├── index.css        ← 🎨 Styles & animations
│   └── main.tsx         ← Entry point
├── index.html           ← HTML template
├── package.json         ← Dependencies
└── README.md            ← This file!
```

---

## 💡 Alternative: No GitHub (Just Send the File!)

Since this project builds into a **single HTML file**, you can just send it directly:

1. Run `npm run build`
2. Go to the `dist/` folder
3. Send `index.html` via WhatsApp, Telegram, or Email
4. They open it in any browser — works offline!

---

Made with ❤️ for your Valentine
