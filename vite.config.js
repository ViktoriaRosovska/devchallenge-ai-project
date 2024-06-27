import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svgr from "@svgr/rollup";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  include: ["src/**/*.jsx", "node_modules/**/*.jsx", "src/**/*.js", "node_modules/**/*.js"],
  plugins: [[react()], [svgr()]],
  server: {
    proxy: {
      "/api": {
        // target: "https://",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
    },
  },
  extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],

  base: "/devchallenge-ai-project",
});
