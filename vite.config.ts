import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    dyadComponentTagger(),
    react({
      // Explicitly configure SWC to use the automatic JSX runtime
      // This ensures JSX syntax is correctly transformed.
      jsxRuntime: 'automatic',
      // Further ensure SWC processes JSX correctly by explicitly setting parser and transform options.
      swc: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true // Enable TSX parsing
          },
          transform: {
            react: {
              runtime: 'automatic', // Use automatic JSX runtime
            }
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));