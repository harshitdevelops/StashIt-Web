import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
    globals: true,
  },
});
