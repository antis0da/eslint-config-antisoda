import type {Linter} from 'eslint'
import playwrightPlugin from 'eslint-plugin-playwright'
import globals from 'globals'

export function playwright(): Linter.Config[] {
  return [
    // Add Playwright globals
    {
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
    },

    // Playwright configuration
    {
      files: [
        '**/*.e2e.{js,mjs,ts}',
        '**/*.e2e.spec.{js,mjs,ts}',
        '**/*.e2e.test.{js,mjs,ts}',
        '**/*.spec.{js,mjs,ts}',
        '**/*.test.{js,mjs,ts}',
        '**/e2e/**',
        '**/e2e/**',
        '**/__tests__/**/e2e/**',
      ],
      plugins: {
        playwright: playwrightPlugin,
      },
      rules: {
        // Playwright rules
        'playwright/expect-expect': 'error',
        'playwright/max-nested-describe': ['error', {max: 3}],
        'playwright/missing-playwright-await': 'error',
        'playwright/no-conditional-expect': 'error',
        'playwright/no-conditional-in-test': 'error',
        'playwright/no-conditional-tests': 'error',
        'playwright/no-disabled-tests': 'warn',
        'playwright/no-duplicate-hooks': 'error',
        'playwright/no-focused-tests': 'error',
        'playwright/no-hooks': 'off',
        'playwright/no-identical-title': 'error',
        'playwright/no-nested-step': 'error',
        'playwright/no-restricted-matchers': 'off',
        'playwright/no-skipped-tests': 'warn',
        'playwright/no-standalone-expect': 'error',
        'playwright/no-test-return-statement': 'error',
        'playwright/no-useless-await': 'error',
        'playwright/no-wait-for-selector': 'error',
        'playwright/no-wait-for-timeout': 'error',
        'playwright/prefer-comparison-matcher': 'error',
        'playwright/prefer-hooks-in-order': 'error',
        'playwright/prefer-hooks-on-top': 'error',
        'playwright/prefer-lowercase-title': ['error', {ignore: ['describe']}],
        'playwright/prefer-strict-equal': 'error',
        'playwright/prefer-to-be': 'error',
        'playwright/prefer-to-contain': 'error',
        'playwright/prefer-to-have-length': 'error',
        'playwright/require-hook': 'error',
        'playwright/require-top-level-describe': 'error',
        'playwright/valid-describe-callback': 'error',
        'playwright/valid-expect': 'error',
        'playwright/valid-title': 'error',
      },
    },
  ]
}
