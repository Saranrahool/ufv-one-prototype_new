import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ufv-one-prototype_new/', // must exactly match your repo name
})
