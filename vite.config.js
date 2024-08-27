import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: normalizePath("intermediatefetch/kelompoks.json"), // 1️
          dest: "data", // 2️
        },
      ],
    }),
  ],
  worker: {
    format: "es",
  },
});
