# benjamincarlson.io

## Overview

My personal website has changed over the years - from a static HTML site to Wordpress to Jekyll to Gatsby to Django and finally to Next.js/React. This site has my writing, projects, gear, and much more.

## Running Locally

To run locally you must

1. Clone this repo
2. Create a .env file and enter your secret keys (if you skip this step the site will still work but some parts wont function correctly)
3. Open up your local host and explore!

```bash
git clone https://github.com/bjcarlson42/personal-website.git
cd benjamincarlson.io
yarn
yarn dev
```

Create a `.env` file.

```
YOUTUBE_KEY=

GITHUB_KEY=

BUTTONDOWN__KEY=

FIREBASE_CLIENT_EMAIL=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=

STRAVA_CLIENT_ID=
STRAVA_SECRET=
STRAVA_REFRESH_TOKEN=
```

Navigate to [http://localhost:3000](http://localhost:3000).

## Technologies 

- Framework: [Next.js](https://nextjs.org/)
- CSS Framework: [Chakra](https://chakra-ui.com/)
- Blog Syntax: [Prism.js](https://prismjs.com/)
- Blog: [MDX](https://mdxjs.com/)
- Deployment: [Vercel](https://vercel.com/)