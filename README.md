This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Admin panel

`/admin` is a password-protected panel for editing homepage copy, case-study content, and images without touching code. Content and uploaded images are stored in Vercel Blob (the filesystem isn't writable at runtime on Vercel), so it needs three environment variables before it works — see `.env.local.example`:

1. Copy `.env.local.example` to `.env.local`.
2. In the Vercel dashboard, open this project → **Storage** → **Create Database** → **Blob**, then link it to the project. This populates `BLOB_READ_WRITE_TOKEN` (pull it locally with `vercel env pull .env.local`, or copy it from the dashboard).
3. Set `ADMIN_PASSWORD` to whatever you want your login password to be.
4. Generate `SESSION_SECRET` with `openssl rand -base64 32`.
5. Add the same three variables in Vercel → Project Settings → Environment Variables for production.

Then visit `/admin`, log in, and edit. Saves go live immediately (no redeploy needed) — until the first save, the site falls back to the content baked into the code, so nothing breaks before you've configured storage.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
