import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: 'JAM JYKE',
      short_name: 'JAM',
      description: 'career starts here',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/impact.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/impact.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    registerType: 'autoUpdate',
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-stylesheets'
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  })]




  
})