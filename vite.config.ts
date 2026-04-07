import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";

// PROJECT_ROOT for path resolution
const PROJECT_ROOT = import.meta.dirname;

export default defineConfig({
  // Removed Manus and Tailwind plugins to stop the build crashes
  plugins: [react()], 
  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },
  envDir: PROJECT_ROOT,
  root: path.resolve(PROJECT_ROOT, "client"),
  build: {
    outDir: path.resolve(PROJECT_ROOT, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
