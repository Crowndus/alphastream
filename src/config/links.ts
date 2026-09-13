// Central place for every outbound link on the landing page.
// Values come from Vite env vars when set, but each has a working fallback so a
// missing environment variable can never produce an "undefined" link.
const env = import.meta.env as Record<string, string | undefined>;

export const DERIV_SIGNUP =
    env.VITE_DERIV_SIGNUP || 'https://t.deriv.link?t=3WMT9P3QCUM7';
export const DERIV_LOGIN = env.VITE_DERIV_LOGIN || 'https://home.deriv.com/dashboard/login';
export const TRADER_URL = env.VITE_TRADER_URL || 'https://alphastream-acvc.vercel.app';
export const BOT_URL = env.VITE_BOT_URL || 'https://alphastream-bot.vercel.app';
