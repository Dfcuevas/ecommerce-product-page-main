import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Para poder usar alias, debo realizar algunas configuraciones en este archivo:
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
