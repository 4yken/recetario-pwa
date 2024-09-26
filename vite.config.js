import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest:{
        display: 'standalone',
        display_override:['window-controls-overlay'],
        lang:'es-ES',
        name: 'Recetario PWA',
        short_name: 'Recetario',
        description: 'PWA Recetario',
        theme_color: '#ffffff',
        background_color:'#ffffff',
        icons: [
          {
            src: 'Receta-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose:'any',
          },
          {
            src: 'Receta-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose:'maskable',
          }
        ]
      }
    })
  ],
})
