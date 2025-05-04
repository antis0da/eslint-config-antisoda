# @antisoda/eslint-config

Extendable ESLint flat-config for TypeScript projects.

## Features

- 🆎 TypeScript support
- ⚛️ React support
- 🧪 Testing support (Jest, Vitest, Playwright)
- 📦 Import/export rules
- 🔧 Flat-config format (ESLint v9+)
- 🎯 Recommended presets for common use cases
- 🔌 Extendable and customizable

## Installation

```bash
# Using npm
npm install --save-dev @antisoda/eslint-config eslint typescript

# Using yarn
yarn add --dev @antisoda/eslint-config eslint typescript

# Using pnpm
pnpm add --save-dev @antisoda/eslint-config eslint typescript
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
// eslint.config.js
import {typescript, react, jest, vitest, recommendedReact} from '@antisoda/eslint-config'

export default [
  // Option 1: Use individual presets
  ...typescript(),
  ...react(),

  // Option 2: Use a recommended preset
  // ...recommendedReact(),

  // Add your custom rules
  {
    rules: {
      // Your custom rules here
      'no-console': 'warn',
    },
  },
]
```

## Available presets

### Individual presets

- `typescript()`: TypeScript rules
- `react()`: React, JSX and hooks rules
- `jest()`: Jest testing rules
- `vitest()`: Vitest testing rules
- `playwright()`: Playwright E2E testing rules

### Recommended presets

- `recommended()`: TypeScript
- `recommendedReact()`: TypeScript + React
- `recommendedJest()`: TypeScript + Jest
- `recommendedVitest()`: TypeScript + Vitest
- `recommendedPlaywright()`: TypeScript + Playwright
- `all()`: All presets but Jest combined

## Helper functions

- `combine(...configs)`: Combine configurations

## License

MIT
