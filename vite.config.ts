import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 在script标签中使用name

// https://vitejs.dev/config/
export default defineConfig({
  base:'/my-components-v3/',
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      imports:['vue','pinia','vue-router'],
      dts: 'src/types/auto-import/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components(
      { 
        dirs: 'src/components',
        extensions:['vue'],
        dts: 'src/types/auto-import/auto-import-components.d.ts',
        resolvers: [ElementPlusResolver()] 
      }
    ),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    
  }
})
