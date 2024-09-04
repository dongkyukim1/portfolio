import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/portfolio/', // GitHub 리포지토리 이름에 맞춰 base 설정 유지
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'public/resume/resume.pdf'),
      },
    },
  },
  publicDir: 'public', // public 디렉토리 명시적 지정
})