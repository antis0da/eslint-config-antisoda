import type {Linter} from 'eslint'
import {javascript} from './presets/javascript.ts'
import {jest} from './presets/jest.ts'
import {playwright} from './presets/playwright.ts'
import {react} from './presets/react.ts'
import {typescript} from './presets/typescript.ts'
import {vitest} from './presets/vitest.ts'

// Export all presets
export {javascript, jest, playwright, react, typescript, vitest}

// Helper function to combine multiple configurations
export function combine(...configs: Linter.Config[][]): Linter.Config[] {
  return configs.flat()
}

// Export a recommended configuration that combines TypeScript and imports
export function recommended(): Linter.Config[] {
  return combine(javascript(), typescript())
}

// Export a recommended configuration for React projects
export function recommendedReact(): Linter.Config[] {
  return combine(javascript(), typescript(), react())
}

// Export a recommended configuration for testing with Jest
export function recommendedJest(): Linter.Config[] {
  return combine(javascript(), typescript(), jest())
}

// Export a recommended configuration for testing with Vitest
export function recommendedVitest(): Linter.Config[] {
  return combine(javascript(), typescript(), vitest())
}

// Export a recommended configuration for testing with Playwright
export function recommendedPlaywright(): Linter.Config[] {
  return combine(javascript(), typescript(), playwright())
}

// Export a complete configuration with all presets
export function all(): Linter.Config[] {
  return combine(javascript(), typescript(), react(), vitest(), playwright())
}
