# Birthday Wishes Website 🎉

A simple personal birthday wishes website built with plain HTML, CSS, and JavaScript.

## Run locally

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open: `http://localhost:4173`

---

## How to publish this website

Since this project is static (`index.html`, `style.css`, `script.js`), you can deploy it easily with any static hosting provider.

### Option 1: GitHub Pages (recommended)

This repo now includes an automated workflow at `.github/workflows/deploy-pages.yml` that deploys to GitHub Pages on every push to `main`.

1. Push this repo to GitHub.
2. Open **Repo → Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).
5. After the workflow succeeds, open your site at `https://<username>.github.io/<repo-name>/`.

### Option 2: Netlify (drag-and-drop)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this project folder into the page.
3. Netlify instantly gives you a live URL.
4. (Optional) Connect GitHub repo for automatic updates on every push.

### Option 3: Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository.
3. Framework preset: **Other** (or no framework).
4. Deploy.
5. Vercel provides a production URL and optional custom domain setup.

---

## Before publishing (recommended)

- Replace the placeholder memory images in `index.html` with your real photos.
- Add a real `music.mp3` file in the project root if you want background music.
- Test once locally before deployment.

## Updating after publish

- If connected to GitHub (Netlify/Vercel/GitHub Pages), push changes and your site updates automatically.
- If using Netlify drag-and-drop, redeploy by dragging the updated folder again.

