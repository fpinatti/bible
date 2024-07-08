import { defineConfig } from 'vite'
/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        './runtimeConfig': './runtimeConfig.browser'
    }
  },
  define: {
      _global: ({})
  }
})
