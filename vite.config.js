import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base 用相对路径，这样不管仓库叫什么名字、部署到哪个子路径，资源都能正常加载
export default defineConfig({
  plugins: [react()],
  base: './',
})