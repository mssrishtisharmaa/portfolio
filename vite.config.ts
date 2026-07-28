import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// NOTE: Update `base` to match your GitHub repository name for GitHub Pages,
// e.g. if your repo is https://github.com/username/portfolio, base should be '/portfolio/'.
// If deploying to a user/organization page (username.github.io), set base to '/'.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
