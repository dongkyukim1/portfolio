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
  base: '/', // 커스텀 도메인을 사용하므로 루트로 설정
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'public/resume/resume.pdf'),
      },
    },
    outDir: 'dist', // 빌드 출력 디렉토리 명시적 지정
  },
  publicDir: 'public', // public 디렉토리 명시적 지정
})