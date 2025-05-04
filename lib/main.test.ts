import type {Linter} from 'eslint'
import {ESLint} from 'eslint'
import {describe, expect, test} from 'vitest'
import {combine, recommended} from './main.ts'

describe('combine', () => {
  test('should combine multiple configurations', () => {
    const config1: Linter.Config[] = [{rules: {rule1: 'error'}}]
    const config2: Linter.Config[] = [{rules: {rule2: 'warn'}}]

    const result = combine(config1, config2)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({rules: {rule1: 'error'}})
    expect(result[1]).toEqual({rules: {rule2: 'warn'}})
  })

  test('should flatten nested configurations', () => {
    const config1: Linter.Config[] = [{rules: {rule1: 'error'}}]
    const config2: Linter.Config[] = [{rules: {rule2: 'warn'}}, {rules: {rule3: 'off'}}]

    const result = combine(config1, config2)

    expect(result).toHaveLength(3)
    expect(result[0]).toEqual({rules: {rule1: 'error'}})
    expect(result[1]).toEqual({rules: {rule2: 'warn'}})
    expect(result[2]).toEqual({rules: {rule3: 'off'}})
  })

  test('should handle empty configurations', () => {
    const config1: Linter.Config[] = [{rules: {rule1: 'error'}}]
    const config2: Linter.Config[] = []

    const result = combine(config1, config2)

    expect(result).toHaveLength(1)
    expect(result[0]).toEqual({rules: {rule1: 'error'}})
  })
})

const eslint = new ESLint({
  baseConfig: [...recommended(), {rules: {semi: 'off'}}],
})

describe('ESLint Configuration Tests', () => {
  test('should flag invalid syntax', async () => {
    const code = 'const foo = bar;'
    const [results] = await eslint.lintText(code)
    const {errorCount, messages} = results

    expect(errorCount).toBeGreaterThan(0)
    expect(messages).toEqual(expect.arrayContaining([expect.objectContaining({ruleId: 'no-undef'})]))
  })
})
