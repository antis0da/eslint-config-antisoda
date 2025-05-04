import js from '@eslint/js'
import type {Linter} from 'eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export function javascript(): Linter.Config[] {
  return [
    js.configs.recommended,
    {
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.node,
          ...globals.browser,
        },
      },
    },
    {
      files: ['**/*.{js,mjs,cjs,jsx,mjsx}'],
      rules: {
        'no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
    eslintPluginPrettierRecommended,
  ]
}
