import type { Options } from 'tsup';
import fs from 'node:fs/promises';

export const tsupConfig: Options = {
  entry: ['src/index.ts'],
  sourcemap: true,
  minify: false,
  dts: true,
  format: 'esm',
  platform: 'node',
  tsconfig: 'tsconfig.build.json',
  plugins: [
    {
      name: 'clean',
      buildStart: async () => {
        await fs.rm('dist');
      },
    },
  ],
};
