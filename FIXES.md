# Alphastream fixes (login / sign-up loading forever)

## What was wrong
1. Both the trading app and the bot app only treated themselves as "live" when the
   address was the final custom domain (trader.alphastream.com / bot.alphastream.com).
   On the Vercel test addresses they fell back to Deriv's internal *staging* servers,
   which never answer from the public internet — so the page loaded forever.
2. The Deriv OAuth client id was read only from an environment variable that was not
   set on Vercel. The trading app *threw* an error inside the sign-up redirect, which
   left a blank, endlessly spinning page; the bot app silently did nothing.
3. The landing page links came only from environment variables, so a missing variable
   produced "undefined" links.

## What changed
- trader `brand.config.json`: added `auth.oauth_client_id = 34lQiQuNGUul6eMXKWo0E`
  and `brand_hostname.production_aliases = [alphastream-acvc.vercel.app]`.
- trader `packages/shared/src/utils/brand/brand.ts`: production detection now covers
  aliases and any public host; `getOAuthClientId()` falls back to brand config and
  logs instead of throwing; `getOAuthRedirectUri()` falls back to the current origin.
- trader `packages/core/src/App/app.jsx`: `?signup=1` redirect failures are caught.
- bot `brand.config.json`: added `auth` block (client id 34lQnx9EGfoO2spCtg6GH,
  affiliate token 9Y55MN6NZWX5) and the Vercel production host.
- bot `config.ts` + `oauth-token-exchange.service.ts`: same production detection and
  client-id fallback behaviour.
- landing: new `src/config/links.ts` with built-in fallback URLs for every button.

## Still to do on your side (no code can do this)
Register each app at developers.deriv.com and set the redirect URL to exactly:
- trading app: https://alphastream-acvc.vercel.app
- bot app:     https://alphastream-bot.vercel.app
If the redirect URL does not match exactly, Deriv rejects the return trip.
