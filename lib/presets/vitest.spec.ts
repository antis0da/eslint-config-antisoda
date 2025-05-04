import {ESLint} from 'eslint'
import {describe, expect, test} from 'vitest'
import {vitest} from '../main.ts'
import code from '../test/fixtures/vitest-preset.ts'

const eslint = new ESLint({
  baseConfig: [...vitest()],
})

describe('ESLint Vitest Configuration Tests', () => {
  test('should flag invalid Vitest syntax', async () => {
    const [results] = await eslint.lintText(code, {filePath: 'lib/test/fixtures/vitest-preset.ts'})
    const {errorCount, usedDeprecatedRules} = results

    expect(errorCount).toBeGreaterThan(0)
    expect(usedDeprecatedRules).toHaveLength(0)
  })
})
