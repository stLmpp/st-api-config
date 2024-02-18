import { rimraf } from 'rimraf';
import { Options } from 'tsup';

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
        await rimraf('dist');
      },
    },
  ],
};
