import vitestPlugin from '@vitest/eslint-plugin'
import type {Linter} from 'eslint'
import globals from 'globals'

export function vitest(): Linter.Config[] {
  return [
    {
      languageOptions: {
        globals: {
          ...globals.vitest,
        },
      },
    },
    {
      files: [
        '**/*.spec.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}',
        '**/*.test.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}',
        '**/test/**',
        '**/tests/**',
        '**/__tests__/**',
      ],
      plugins: {
        vitest: vitestPlugin,
      },
      rules: {
        ...vitestPlugin.configs.recommended.rules,
        'vitest/consistent-test-filename': ['warn', {pattern: '.*\\.spec\\.[tj]sx?$'}],
        'vitest/consistent-test-it': ['error', {fn: 'test', withinDescribe: 'test'}],
        'vitest/expect-expect': 'error',
        'vitest/max-nested-describe': ['error', {max: 3}],
        'vitest/no-alias-methods': 'error',
        'vitest/no-commented-out-tests': 'warn',
        'vitest/no-conditional-expect': 'error',
        'vitest/no-conditional-in-test': 'error',
        'vitest/no-conditional-tests': 'error',
        'vitest/no-disabled-tests': 'warn',
        'vitest/no-duplicate-hooks': 'error',
        'vitest/no-focused-tests': 'error',
        'vitest/no-hooks': 'off',
        'vitest/no-identical-title': 'error',
        'vitest/no-interpolation-in-snapshots': 'error',
        'vitest/no-large-snapshots': ['warn', {maxSize: 50}],
        'vitest/no-mocks-import': 'error',
        'vitest/no-restricted-matchers': 'off',
        'vitest/no-restricted-vi-methods': 'off',
        'vitest/no-standalone-expect': 'error',
        'vitest/no-test-prefixes': 'error',
        'vitest/no-test-return-statement': 'error',
        'vitest/prefer-called-with': 'error',
        'vitest/prefer-comparison-matcher': 'error',
        'vitest/prefer-each': 'error',
        'vitest/prefer-expect-assertions': 'off',
        'vitest/prefer-expect-resolves': 'error',
        'vitest/prefer-hooks-in-order': 'error',
        'vitest/prefer-hooks-on-top': 'error',
        'vitest/prefer-lowercase-title': ['error', {ignore: ['describe']}],
        'vitest/prefer-mock-promise-shorthand': 'error',
        'vitest/prefer-spy-on': 'error',
        'vitest/prefer-strict-equal': 'error',
        'vitest/prefer-to-be': 'error',
        'vitest/prefer-to-contain': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/prefer-todo': 'error',
        'vitest/require-hook': 'error',
        'vitest/require-to-throw-message': 'error',
        'vitest/require-top-level-describe': 'error',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-expect': 'error',
        'vitest/valid-title': 'error',
      },
    },
  ]
}
