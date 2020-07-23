# benjamincarlson.io

My portfolio has changed over the years - from a static HTML site to Wordpress to Jekyll to Gatsby to Django and finally to Next.js/React. This site has my writing, latest work, programming tutorials, and much more.

## Overview

- `pages/tutorials/blog/content/*` - Static pre-rendered blog posts
- `pages/api/*` - API routes
- `/hello` - My own "linktree"
- `pages/*` - static pages

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
BUTTONDOWN__KEY=
```

## Built Using 

- Next.js
- Bootstrap
- Vercel