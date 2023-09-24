import { defineConfig } from 'tsup';
import { tsupConfig } from './src/tsup';
import { writeFile } from 'node:fs/promises';

export default defineConfig({
  ...tsupConfig,
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
  ],
});
