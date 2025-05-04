/* @ts-check */

import {defineConfig} from 'vitest/config'

/**
 * @see https://vitest.dev/config/
 * @type {import('vitest/config').ViteUserConfig}
 */
const userConfig = {
  test: {
    coverage: {
      provider: 'v8',
      include: ['lib/**/*.?(c|m)[jt]s?(x)'],
      exclude: ['lib/**/*.d.ts'],
      reportsDirectory: 'reports/unit/coverage',
      reporter: ['text', 'json', 'html', 'lcov'],
      clean: true,
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    include: ['lib/**/*.{spec,test}.?(c|m)[jt]s?(x)'],
    testTimeout: 10_000,
  },
}

export default defineConfig(userConfig)
