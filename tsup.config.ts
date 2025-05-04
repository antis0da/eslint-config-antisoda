import type {Options} from 'tsup'
import {defineConfig} from 'tsup'

export default defineConfig(_options => {
  return {
    platform: 'node',
    entry: ['lib/main.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    outDir: 'dist',
    treeshake: true,
  } satisfies Options
})
