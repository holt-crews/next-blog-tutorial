This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Vercel Notes

Vercel is a serverless platform for static and hybrid applications built to integrate with your headless content, commerce, or database.

Follows a "develop, preview, ship" model for deployment.

Hobby mode is free.

### Features

- pages that use static generation and assets are automatically served from the vercel edge network
- pages that use server-side rendering and api routes are automaically created as isolated serverless functions
- you can assign a custom domain
- you can [set environment variables](https://vercel.com/docs/concepts/deployments/configure-a-build#environment-variables?utm_source=next-site&utm_medium=learnpages&utm_campaign=next-website)
- https is enabled by default, ssl certificates are renewed by default

### Preview

- non-`main` branches are deployed in preview mode and you can check what they look like by going to the page displayed by the vercel bot in the PR

This is the full develop, preview, ship (DPS) model. Write code and check it locally, push to branch that gets deployed to preview mode, merge to main to push to production

## Other hosting

You can deploy to any provider that supports node.js. Just use the `build` and `start` scripts.
