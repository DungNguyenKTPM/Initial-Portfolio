import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; 
import path from 'path';
import { fileURLToPath} from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, "src/styles"),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icon': path.resolve(__dirname, 'src/assets/Icon'),
      '@hooks': path.resolve(__dirname, "src/hooks"),
    },
  },
})
