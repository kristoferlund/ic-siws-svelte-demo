import { defineConfig } from "vite";
import dotenv from "dotenv";
import environment from "vite-plugin-environment";
import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

export default defineConfig({
  // Base directory of the frontend application
  root: "packages/frontend",
  build: {
    // Clean the output directory before each build
    emptyOutDir: true,
  },
  resolve: {
    // Alias '@' to the frontend source directory
    alias: {
      "@": path.resolve(__dirname, "./packages/frontend"),
    },
  },
  // Ensure compatibility by defining global variable
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    // Proxy API requests to local IC replica
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  define: {
    process: { env: {} },
  },
  plugins: [
    svelte(),
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
  ],
});
