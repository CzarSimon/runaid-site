# Runaid Site

Public launch website for Runaid (`https://www.runaid.app`).

## Local development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Waitlist integration

Set in `.env.local`:

- `CONVERTKIT_API_KEY`
- `CONVERTKIT_FORM_ID`
- `NEXT_PUBLIC_SITE_URL`
- `CONTACT_EMAIL`

Runaid uses the Kit v4 API (`X-Kit-Api-Key` auth) to upsert a subscriber and add them to the selected form.
Without credentials, the waitlist endpoint returns success in local/dev mode so the form flow can still be tested.

## Scripts

- `pnpm dev`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm test:integration`
- `pnpm test:e2e`
- `pnpm build`
