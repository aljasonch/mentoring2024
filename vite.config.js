import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [react()],
  worker: {
    format: "es",
  },
});
