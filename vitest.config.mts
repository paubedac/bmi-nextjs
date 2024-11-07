import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  test: {
    coverage: {
      exclude: [
        "next.config.mjs",
        "tailwind.config.ts",
        "postcss.config.mjs",
        // other files which dont require unit testing
        ...coverageConfigDefaults.exclude,
      ],
      reporter: ['text', 'json', 'html'],
      provider: 'v8'
    },
    environment: 'jsdom'
  },
});
