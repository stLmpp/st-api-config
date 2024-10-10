import type { Options } from 'tsup';
import fsp from 'node:fs/promises';

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
        await fsp.rm('dist', { force: true, recursive: true });
      },
    },
  ],
};
