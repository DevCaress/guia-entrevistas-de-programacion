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
      themes: {
        light: "github-light",
        dark: "github-dark"
      },
      defaultColor: false,
      wrap: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
