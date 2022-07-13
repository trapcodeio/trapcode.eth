import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteEjsPlugin } from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    ViteEjsPlugin({
      title: "TrapCode.eth"
    })
  ]
});
