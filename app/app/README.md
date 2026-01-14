# Cyberpunk Terminal — GitHub-ready package

This repo is a minimal, stable Next.js App Router project prepared to deploy on Vercel.
It provides a guaranteed root (`app/page.tsx`) so the site does not return 404 on `/`.

## How to deploy (quick)
1. Commit all files to `main` in GitHub.
2. On Vercel: Import Project → Select this GitHub repo.
3. Let Vercel auto-detect Next.js (do not override build settings).
4. Add environment variables (only if you plan to enable Supabase features later):
   - NEXT_PUBLIC_SUPABASE_URL = `https://bgqpczuymnygnxzjlfme.supabase.co`
   - NEXT_PUBLIC_SUPABASE_ANON_KEY = `sb_publishable_5jZbQmhVenTxDF-nAj_8zQ_KveWJjTu`
5. Deploy.

## Notes
- This package intentionally includes a simple `app/page.tsx` that always renders.
- If you already have `app/page.tsx` in your original project, you may replace this one with your full terminal page later.
- For interactive features (comments, uploads, translation) you must configure Supabase and set keys in Vercel.
