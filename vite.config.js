import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' + HashRouter => works on Vercel, Netlify and GitHub Pages without extra config
export default defineConfig({
  plugins: [react()],
  base: './',
})
