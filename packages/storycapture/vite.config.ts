import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    tsconfigPathsPlugin(),
  ],
  test: {
    globals: true,
    environment: 'node',
    isolate: true,
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
  },
});
