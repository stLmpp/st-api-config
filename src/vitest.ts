import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const vitestConfig = defineConfig(async (_) => {
  const packageJsonFile = await readFile(
    join(process.cwd(), 'package.json'),
    'utf8',
  );
  const name = JSON.parse(packageJsonFile)?.name;
  return {
    test: {
      name,
      environment: 'node',
      globals: true,
      root: './',
      coverage: {
        enabled: true,
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70,
        all: true,
        reporter: ['text', 'html', 'json', 'lcovonly'],
        cleanOnRerun: false,
        exclude: [
          'vitest.setup.ts',
          '.eslintrc.cjs',
          '**/index.ts',
          '**/*.{type,schema,token,module,config}.ts',
          '**/*.d.ts',
        ],
      },
    },
    plugins: [
      swc.vite({
        module: { type: 'es6' },
      }),
    ],
  };
});
