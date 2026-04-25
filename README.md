# Rachel Branscombe Portfolio

A modular Swiss modernist portfolio for a graphic designer. The site is static, accessible, responsive, and does not need a build step.

## Edit Content

Most updates happen in `content/site-data.js`:

- Replace project titles, descriptions, categories, years, and links.
- Add image paths from `content/images/`.
- Add video embeds with `embedUrl`.
- Add article or external links in each project `links` array.
- Update CV entries, competencies, contact links, and email details.
- Replace `content/cv/rachel-branscombe-cv.txt` with a PDF CV and update `cv.downloadHref`.

Images live in `content/images/`. CV files can live in `content/cv/`.

## Preview Locally

Open `index.html` directly, or run a small static server from this folder:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.
