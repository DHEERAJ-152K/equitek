import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        charset: false, // Ensures Vite processes all CSS
      },
    },
  },
  resolve: {
    alias: {
      'react-slick': 'react-slick', // Ensure correct resolution for react-slick
    },
  },
});