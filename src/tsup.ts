import type { Options } from 'tsup';
import fsp from 'node:fs/promises';
import fs from 'node:fs';
import timers from 'node:timers/promises';

async function fixDtsFile(filePath: string): Promise<void> {
  const file = await fsp.readFile(filePath, 'utf-8');
  await fsp.writeFile(filePath, file.replaceAll(`';`, `.js';`));
}

export const tsupConfig: Options = {
  entry: ['src/index.ts'],
  sourcemap: true,
  minify: false,
  dts: false,
  experimentalDts: true,
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
    {
      name: 'dts-fix',
      buildEnd: () => {
        (async () => {
          while (!fs.existsSync('dist/index.d.ts')) {
            await timers.setTimeout(500);
          }
          await fsp.cp('.tsup/declaration/src', 'dist/src', {
            recursive: true,
          });
          await Promise.all([
            fixDtsFile('dist/index.d.ts'),
            fixDtsFile('dist/_tsup-dts-rollup.d.ts'),
          ]);
        })();
      },
    },
  ],
};
