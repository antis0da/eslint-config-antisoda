import type {Linter} from 'eslint'
import jestPlugin from 'eslint-plugin-jest'
import globals from 'globals'

export function jest(): Linter.Config[] {
  return [
    {
      languageOptions: {
        globals: {
          ...globals.jest,
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
        jest: jestPlugin,
      },
      rules: {
        // Jest rules
        'jest/consistent-test-it': ['error', {fn: 'test', withinDescribe: 'test'}],
        'jest/expect-expect': 'error',
        'jest/max-nested-describe': ['error', {max: 3}],
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'warn',
        'jest/no-conditional-expect': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-large-snapshots': ['warn', {maxSize: 50}],
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': ['error', {ignore: ['describe']}],
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-hook': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-title': 'error',
      },
    },
  ]
}
