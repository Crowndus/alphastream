/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DERIV_SIGNUP: string
  readonly VITE_DERIV_LOGIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
