# benjamincarlson.io

My portfolio has changed over the years - from a static HTML site to Wordpress to Jekyll to Gatsby and finally to Next.js/React. This site has my writing, latest work, programming tutorials, and much more. Feel free to submit a pull request with your implementation to any of the issues or project boards.

## Overview

- `pages/tutorials/blog/content/*` - Static pre-rendered blog posts
- `pages/api/gear` - Gear API route for [/gear](https://benjamincarlson.io/gear)
- `pages/index` - Index page with YouTube data
- `pages/blog` - Blog with data from Medium
- `links` - My own "linktree"
- `pages/*` - All other static pages

## Running Locally

```cmd
git clone https://github.com/bjcarlson42/personal-website.git
cd personal-website
yarn
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000).

Create a `.env` file.

```
YOUTUBE_KEY=
GITHUB_KEY=
```

## Built Using 

- Next.js
- Vercel