import {ESLint} from 'eslint'
import {describe, expect, test} from 'vitest'
import {typescript} from '../main.ts'
import code from '../test/fixtures/typescript-preset.ts'

const eslint = new ESLint({
  baseConfig: [...typescript()],
})

describe('ESLint Typescript Configuration Tests', () => {
  test('should flag invalid typescript syntax', async () => {
    const [results] = await eslint.lintText(code, {filePath: 'lib/test/fixtures/typescript-preset.ts'})
    const {errorCount, usedDeprecatedRules} = results

    expect(errorCount).toBeGreaterThan(0)
    expect(usedDeprecatedRules).toHaveLength(0)
  })
})
