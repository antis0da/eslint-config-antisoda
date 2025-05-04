import {ESLint} from 'eslint'
import {describe, expect, test} from 'vitest'
import {jest} from '../main.ts'
import code from '../test/fixtures/jest-preset.ts'

const eslint = new ESLint({
  baseConfig: [...jest()],
})

describe('ESLint Jest Configuration Tests', () => {
  test('should flag invalid Jest syntax', async () => {
    const [results] = await eslint.lintText(code, {filePath: 'lib/test/fixtures/jest-preset.ts'})
    const {errorCount, usedDeprecatedRules} = results

    expect(errorCount).toBeGreaterThan(0)
    expect(usedDeprecatedRules).toHaveLength(0)
  })
})
