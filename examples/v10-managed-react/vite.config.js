import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'storycapture', 
        replacement: resolve(__dirname, 'node_modules', 'storycapture', 'lib')
      }
    ]
  },
})
