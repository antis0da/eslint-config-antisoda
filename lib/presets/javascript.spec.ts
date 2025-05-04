import {ESLint} from 'eslint'
import {describe, expect, test} from 'vitest'
import {javascript} from '../main.js'
import code from '../test/fixtures/javascript-preset.ts'

const eslint = new ESLint({
  baseConfig: [...javascript()],
})

describe('ESLint JavaScript Configuration Tests', () => {
  test('should flag invalid JavaScript syntax', async () => {
    const [results] = await eslint.lintText(code, {filePath: 'lib/test/fixtures/javascript-preset.js'})
    const {errorCount, usedDeprecatedRules} = results

    expect(errorCount).toBeGreaterThan(0)
    expect(usedDeprecatedRules).toHaveLength(0)
  })
})
