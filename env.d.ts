/// <reference types="vite/client" />

interface importMetaEnv {
    readonly VITE_TITLE: string,
    readonly VITE_ADDRESS: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}