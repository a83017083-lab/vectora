# VECTORA AI — Agency Website

A responsive multi-page agency website built with Next.js App Router, TypeScript, Tailwind CSS v4 and Framer Motion.

## Included

- Home, Services, Our Work, About and Contact pages
- Responsive desktop/mobile navigation
- Animated reveal transitions and custom CSS workflow illustrations
- Reusable service, project, CTA and footer components
- Contact form with server-side validation and honeypot field
- Optional email delivery through Resend
- SEO metadata and Open Graph defaults
- No paid UI kit or proprietary component dependency

> Portfolio honesty: the three portfolio entries are explicitly marked as illustrative concept demos. Replace them with approved client work and real outcomes before making client-result claims.

## 1. Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## 2. Configure contact form email

The contact form sends email using Resend. Create a Resend account, verify a sending domain, then set these environment variables in `.env.local` (and later in Vercel):

```env
RESEND_API_KEY=re_...
CONTACT_TO=you@yourdomain.com
CONTACT_FROM=VECTORA AI <hello@yourdomain.com>
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Use a sender domain verified in Resend. `CONTACT_TO` is the inbox that receives enquiries. The form intentionally returns a setup message if the email variables are missing; it does not pretend an enquiry was sent.

Update `lib/site.ts` with the correct public email and brand details. The WhatsApp number must be country code + number, digits only.

## 3. Build for production

```bash
npm run build
npm run start
```

## 4. Use with v0

1. Open https://v0.app.
2. Create a new project or open a project you want to use.
3. Use the `+` / import option to upload this ZIP, or push the extracted folder to GitHub and import that repository.
4. Ask v0 to inspect the existing code before changing it. Suggested first prompt:

   `Review this VECTORA AI Next.js codebase. Preserve the page structure, responsive behavior, accessible controls and contact API. Improve the visual polish without inventing client logos, testimonials, metrics or case studies. Run the production build and fix any errors.`

5. Preview all five routes, test the mobile menu and submit the contact form after setting environment variables.
6. Publish from v0 to Vercel.

## 5. Deploy directly to Vercel

1. Push the project to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository and keep the detected Next.js settings.
3. Add the environment variables above in Project Settings → Environment Variables.
4. Deploy. For later updates, push to the connected branch; Vercel will build a new deployment.
5. Add your custom domain in Project Settings → Domains and follow the DNS instructions from Vercel.

## 6. Before launch checklist

- [ ] Replace placeholder WhatsApp number and verify public email.
- [ ] Verify sender domain and set Resend environment variables.
- [ ] Replace concept demos with real approved portfolio work, or keep the disclosure.
- [ ] Add your real social profiles and business/legal details if needed.
- [ ] Test contact form on production and confirm the email arrives.
- [ ] Check all routes on a phone and desktop.
- [ ] Add a privacy policy appropriate to your actual data practices.

## Project structure

```text
app/
  api/contact/route.ts  # validated contact endpoint + Resend
  about/page.tsx
  contact/page.tsx
  services/page.tsx
  work/page.tsx
  page.tsx              # homepage
  layout.tsx
  globals.css
components/
  contact-form.tsx
  footer.tsx
  header.tsx
  motion.tsx
  section-heading.tsx
lib/site.ts             # brand, service and project content
```
