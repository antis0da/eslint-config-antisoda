import type {Options} from 'tsup'
import {defineConfig} from 'tsup'

export default defineConfig(_options => {
  return {
    platform: 'node',
    entry: ['lib/main.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    clean: true,
    minify: false,
    target: 'es2022',
    outDir: 'dist',
    treeshake: true,
  } satisfies Options
})
