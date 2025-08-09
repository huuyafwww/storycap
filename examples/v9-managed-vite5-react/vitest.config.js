import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

console.log('Loaded vitest config');
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupFile.js',
  },
});
