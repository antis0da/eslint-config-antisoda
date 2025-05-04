import {ESLint} from 'eslint'
import {describe, expect, test} from 'vitest'
import {react} from '../main.ts'
import code from '../test/fixtures/react-preset.tsx'

const eslint = new ESLint({
  baseConfig: [...react()],
})

describe('ESLint React Configuration Tests', () => {
  test('should flag invalid React syntax', async () => {
    const [results] = await eslint.lintText(code, {filePath: 'lib/test/fixtures/react-preset.tsx'})
    const {errorCount, usedDeprecatedRules} = results

    expect(errorCount).toBeGreaterThan(0)
    expect(usedDeprecatedRules).toHaveLength(0)
  })
})
