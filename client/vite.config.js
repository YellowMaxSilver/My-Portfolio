import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT, // Adiciona a porta do ambiente de produção
  },
  preview: {
    port: process.env.PORT || 5173 // Garante que a porta de preview use a variável de ambiente
  }
});