import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://caress.dev",
  devToolbar: {
    enabled: false
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      themes: {
        light: "github-light",
        dark: "github-dark"
      },
      wrap: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
