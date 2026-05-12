# GSVIEC Website

Enterprise technology website for GSVIEC: DevOps, Bare Metal Automation, Cloud/Hybrid Cloud, and Blockchain Infrastructure.

## Local setup

Install Node.js 22+, then run:

```powershell
npm install
npm run dev
```

Build static HTML:

```powershell
npm run build
```

The generated site is written to `_site/`.

## Production checklist

Before publishing:

1. Replace `src/assets/logo.svg` with the official GSVIEC logo if available.
2. Replace `src/_data/site.json` values:
   - `phone`
   - `email`
   - `address`
   - `formEndpoint`
3. Confirm whether public metrics such as `99.99%`, `50+`, `10k+`, and `24/7` can be used.
4. Update `.pages.yml` if the content workflow needs more fields.

## GitHub repository

Create a new repository named `gsviec-website`, then push:

```powershell
git init
git add .
git commit -m "Build GSVIEC enterprise website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gsviec-website.git
git push -u origin main
```

## GitHub Pages

1. Open the repository on GitHub.
2. Go to `Settings > Pages`.
3. Set source to `GitHub Actions`.
4. Push to `main`; the workflow in `.github/workflows/deploy.yml` will build and publish the site.
5. In `Settings > Pages`, set custom domain to `gsviec.com`.
6. Enable `Enforce HTTPS` after DNS validation completes.

## DNS for gsviec.com

At the domain DNS provider, create these records:

```text
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   YOUR_USERNAME.github.io
```

DNS propagation can take several hours.

## Pages CMS

This repo includes `.pages.yml` for Pages CMS. After the repo is on GitHub:

1. Open https://app.pagescms.org/
2. Connect GitHub.
3. Select `gsviec-website`.
4. Create or edit posts in the `Insights` collection.
5. Publishing a post commits Markdown to `src/posts/`, then GitHub Actions rebuilds the site.

## SEO/GEO

The site includes:

- `sitemap.xml`
- `robots.txt`
- canonical URLs
- Open Graph and Twitter Card tags
- JSON-LD for Organization, WebSite, Service, FAQPage, CollectionPage, and Article
- article structure with summary, FAQ, author, publish date, and update date

After launch, connect:

- Google Search Console
- Bing Webmaster Tools
- Formspree for consultation form handling
