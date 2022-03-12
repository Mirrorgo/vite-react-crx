import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      base: resolve(__dirname, "./src_global/components/base"),
      basic: resolve(__dirname, "./src_global/components/basic"),
    },
  },
  plugins: [
    react(),
    copy({
      targets: [
        { src: "manifest.json", dest: "dist" },
        { src: "src/assets", dest: "dist" },
      ],
      hook: "writeBundle",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "/src_crx/src_popup/index.html"),
        options: resolve(__dirname, "/src_crx/src_options/index.html"),
        "src_crx/service_worker": "/src_crx/service_worker.ts",
        "src_crx/content_script": "/src_crx/content_script.ts",
        "src_crx/src_content_script/main":
          "/src_crx/src_content_script/main.tsx",
      },
      output: {
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
        entryFileNames: "[name].js",
        dir: "dist",
      },
    },
  },
});
