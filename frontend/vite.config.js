import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {config} from 'dotenv';

// https://vite.dev/config/
config()
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env':process.env,
  }
})
