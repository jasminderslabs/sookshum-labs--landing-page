// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 4321,
    host: true,
    allowedHosts: [
      "https://modern-bats-drum.loca.lt/",
      "forty-onions-play.loca.lt",
      "deep-files-join.loca.lt",
    ],
  },
  output: "server",
  adapter: vercel(),
  integrations: [react()],
});
