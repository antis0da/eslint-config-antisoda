import {ESLint} from 'eslint'
import {describe, expect, test} from 'vitest'
import {playwright} from '../main.ts'
import code from '../test/fixtures/playwright-preset.ts'

const eslint = new ESLint({
  baseConfig: [...playwright()],
})

describe('ESLint Playwright Configuration Tests', () => {
  test('should flag invalid Playwright syntax', async () => {
    const [results] = await eslint.lintText(code, {filePath: 'lib/test/fixtures/playwright-preset.ts'})
    const {errorCount, usedDeprecatedRules} = results

    expect(errorCount).toBeGreaterThan(0)
    expect(usedDeprecatedRules).toHaveLength(0)
  })
})
