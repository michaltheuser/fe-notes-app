import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vsharp from 'vite-plugin-vsharp';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [react(), vsharp()]
});
