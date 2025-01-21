import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    cssCodeSplit: false,
    // [commet start]
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    // [commet end]
  },
  preview: {
    cors: true,
  },
  define: {
    "process.env": {},
  },
});
