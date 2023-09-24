import { defineConfig } from 'tsup';
import { tsupConfig } from './src/tsup';
import { rename, writeFile, rm } from 'node:fs/promises';

export default defineConfig({
  ...tsupConfig,
  entry: {
    index: './src/index.ts',
    '.eslintrc': './src/eslint.ts',
  },
  dts: {
    entry: {
      index: './src/index.ts',
    },
  },
  format: 'cjs',
  tsconfig: 'tsconfig.json',
  plugins: [
    ...(tsupConfig.plugins ?? []),
    {
      name: 'tsconfig',
      buildEnd: async () => {
        const { default: tsconfig } = await import('./src/tsconfig');
        await writeFile(
          './dist/tsconfig.json',
          JSON.stringify(tsconfig, null, 2),
        );
      },
    },
    {
      name: 'eslint',
      buildEnd: async () => {
        await Promise.all([
          rename('./dist/.eslintrc.js', '.eslintrc.js'),
          rm('./dist/.eslintrc.js.map', {
            force: true,
            recursive: true,
          }),
        ]);
      },
    },
  ],
});
