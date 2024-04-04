import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@Header': '/src/Components/Header',
      '@Layouths': '/src/Layouths',
      '@Pages': '/src/pages',
      '@Css': '/src/css',
      '@Components': '/src/Components',
      '@Public': '/public',
      '@Assets': '/public/assets',
      '@Js': '/public/assets/js',
    },
  },
});

