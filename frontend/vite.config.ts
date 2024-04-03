import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
   rollupOptions: {
     input: {
         main: 'index.html',
         cart: 'pages/cart.html',
         login: 'pages/login.html'
      },
      output: {
         dir: './dist'
      },
   },
 },
});


