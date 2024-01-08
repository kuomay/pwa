import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      ...{
        manifest: {
          name: "PWA 学习",
          description: "我的第一个 PWA 项目",
          theme_color: "#00bd7e",
          icons: [
            {
              src: "/下載.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/App_icon512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/App_icon60.png",
              sizes: "60x60",
              type: "image/png",
            },
          ],
        },
        shortcuts: [
          {
            name: "Open About",
            short_name: "About",
            description: "Open the about page",
            url: "/about",
            icons: [{ src: "/下載.png", sizes: "144x144" }],
          },
          {
            name: "Report issue",
            short_name: "Report",
            description: "Open the issue report page",
            url: "/report",
            icons: [{ src: "/下載.png", sizes: "144x144" }],
          },
        ],
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        },
      },
    }),
    
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
