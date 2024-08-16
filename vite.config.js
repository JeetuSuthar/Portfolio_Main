import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    // Add this alias if necessary
    'react-icons': 'node_modules/react-icons',
    base : "/Portfolio_Main/",
  },
})
