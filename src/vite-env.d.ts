/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DERIV_SIGNUP: string
  readonly VITE_DERIV_LOGIN: string
  readonly VITE_TRADER_URL: string
  readonly VITE_BOT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
