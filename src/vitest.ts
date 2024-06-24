import swc from 'unplugin-swc';
import type { UserConfigFnPromise } from 'vitest/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import type { CoverageReporter } from 'vitest';

async function tryGetName() {
  try {
    const packageJsonFile = await fs.readFile(
      path.join(process.cwd(), 'package.json'),
      'utf8',
    );
    return JSON.parse(packageJsonFile)?.name;
  } catch {
    return undefined;
  }
}

export const vitestConfig: UserConfigFnPromise = async (_) => {
  return {
    test: {
      name: await tryGetName(),
      environment: 'node',
      globals: true,
      root: './',
      coverage: {
        enabled: true,
        all: true,
        reporter: ['text', 'html', 'json', 'lcovonly'] as CoverageReporter[],
        cleanOnRerun: false,
        exclude: [
          '**/index.ts',
          '**/*.{type,schema,token,module,config,dto}.ts',
        ],
        include: ['src/**/*.ts'],
      },
    },
    plugins: [
      swc.vite({
        module: { type: 'es6' },
      }),
    ],
  };
};
