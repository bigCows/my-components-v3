import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports:['vue'],
      dts: 'src/components/auto-import/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components(
      { 
        dirs: 'src/components',
        extensions:['vue'],
        dts: 'src/components/auto-import/auto-import-components.d.ts',
        resolvers: [ElementPlusResolver()] 
      }
    ),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
