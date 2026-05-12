# Insights Publishing Guide

## Login

GSVIEC uses Pages CMS for writing and editing Insights.

1. Open https://app.pagescms.org/
2. Sign in with the GitHub account that has access to the `mrhap/gsviec-website` repository.
3. Choose the `gsviec-website` repository.
4. Open the `Insights` collection.

If the repository does not appear, make sure the GitHub account has permission to the repo and that Pages CMS has been granted repository access.

## Create a Post

1. Click **New Entry** in the `Insights` collection.
2. Fill these fields:
   - `Title`: public article title.
   - `Slug`: URL-safe slug, for example `validator-slashing-risk`.
   - `SEO Description`: 140-160 character search summary.
   - `GEO Summary`: direct answer-style summary for AI/search snippets.
   - `Date` and `Updated`.
   - `Category`: choose the closest topic.
   - `Tags`: add 2-5 relevant tags.
   - `Body`: write the article.
3. Keep `Published` enabled.
4. Save or publish the entry.

Pages CMS will commit a Markdown file into `src/posts/`. GitHub Actions then rebuilds and redeploys the website.

## Recommended Article Structure

Use this structure for SEO/GEO:

1. Short answer.
2. When it matters.
3. Technical approach.
4. Enterprise or validator outcome.
5. FAQ.
6. Internal links to related services.

## Troubleshooting

- If the article does not appear, open GitHub Actions and check whether the latest deployment completed.
- If an image does not load on the GitHub Pages preview URL, prefer using the custom domain `gsviec.com` after DNS is connected.
- If Pages CMS cannot write, check GitHub repository permissions.
