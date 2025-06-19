// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'your-repo-name' with the actual repo name
export default defineConfig({
  plugins: [react()],
  base: "/rv-portfolio/",
});
