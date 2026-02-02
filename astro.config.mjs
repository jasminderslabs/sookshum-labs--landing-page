// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import appHostingAdapter from "@apphosting/astro-adapter";
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  integrations: [icon()],

  adapter: node({
    mode: "standalone",
    experimentalDisableStreaming: true,
  }),
});
