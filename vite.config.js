import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `@import './src/assets/styles/_variables.scss';`,
  //       },
  //     },
  //   },
});
