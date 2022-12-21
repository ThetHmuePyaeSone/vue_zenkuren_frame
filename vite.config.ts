import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) =>({
  plugins: [vue(),pages()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/styles.scss";`,
      },
    },
  },
}))
