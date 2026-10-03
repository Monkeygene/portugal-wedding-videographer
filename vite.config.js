import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",

  plugins: [tailwindcss()],

  build: {
    outDir: "dist",

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        blog: path.resolve(__dirname, "blog/index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        services: path.resolve(__dirname, "packages/index.html"),
        // Portfolio
        portfolio: path.resolve(__dirname, "portfolio/index.html"),
        islahenry: path.resolve(__dirname, "the-barn-at-upcote-wedding-video/index.html"),
      },
    },
  },
});
