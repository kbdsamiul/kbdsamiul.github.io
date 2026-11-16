# Samiul Alam, personal website

A static site with no build step. It runs on GitHub Pages as it is.

## Put it online

1. Create a new public repository on GitHub named `YOUR-USERNAME.github.io`.
2. Upload every file and folder from this package, keeping the folder structure. On the repository page choose **Add file**, then **Upload files**.
3. Open **Settings**, then **Pages**. Under **Build and deployment** choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After about a minute the site is live at `https://YOUR-USERNAME.github.io`.

## Edit the content

All text is in `data/content.js`. Open the file on GitHub, press the pencil icon, change the text between the quotes and commit. The site updates in about a minute.

- **Add a publication.** Copy one block inside `publications`, paste it and change the fields. `type` is `article`, `review`, `chapter` or `review-pending`. The counts and filters update on their own.
- **Species names.** Wrap them like `<i>Oryza sativa</i>`.
- **Change the photo.** Replace `assets/img/portrait.webp` with a new cut-out image that has a transparent background, or change the `portrait` path.
- **Add your CV.** Upload the PDF to `assets/cv/` and set `cv: "assets/cv/your-file.pdf"`. The Download CV button appears once this is set. Check the PDF for private details before publishing it.
- **Add photographs.** Upload images to `assets/img/` and list them in `gallery`. The section appears once the list has items.
- **Add ORCID or other links.** Add a line to `contact.links`.

## Change the look

Colours and fonts are at the top of `css/style.css` in the `:root` block. Animations are in `js/main.js` and respect the reduced-motion setting of the visitor.

## Custom domain

In **Settings**, then **Pages**, enter your domain under **Custom domain** and add the DNS records GitHub shows.

## Files

```
index.html          page structure
css/style.css       design
js/main.js          rendering and animation
data/content.js     all content
assets/img/         images
assets/cv/          CV PDF (optional)
```

Design reference for motion and layout: "Personal Portfolio Website, Animations" by Dymas Alfin on Dribbble.
