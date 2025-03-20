
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Simple base path for standard web hosting
  base: '/',
  build: {
    // Add source maps for better debugging
    sourcemap: true,
    // Use ES module format which has better browser support
    target: 'esnext',
    // Output files with correct extensions for standard web hosting
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
}));
