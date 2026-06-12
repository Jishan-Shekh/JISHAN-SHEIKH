import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        name: "Jishan Portfolio",
        short_name: "Jishan",
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",
        theme_color: "#d10000",
        icons: [
          {
            src: "/jishans.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});