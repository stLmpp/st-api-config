import { defineConfig } from 'tsup';
import { tsupConfig } from './src/tsup.js';
import fsp from 'node:fs/promises';

export default defineConfig({
  ...tsupConfig,
  entry: {
    index: './src/index.ts',
  },
  experimentalDts: {
    entry: {
      index: './src/index.ts',
    },
  },
  format: 'esm',
  tsconfig: 'tsconfig.json',
  plugins: [
    ...(tsupConfig.plugins ?? []),
    {
      name: 'tsconfig',
      buildEnd: async () => {
        const { default: tsconfig } = await import('./src/tsconfig.js');
        await fsp.writeFile(
          './dist/tsconfig.json',
          JSON.stringify(tsconfig, null, 2),
        );
      },
    },
  ],
});
