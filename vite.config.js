import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/bodymaps/', // Ensure this matches the repo name
  publicDir: 'public' // Ensures that public files are included

});
