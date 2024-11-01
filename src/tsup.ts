import type { Options } from 'tsup';

export const tsupConfig: Options = {
  entry: ['src/index.ts'],
  sourcemap: true,
  minify: false,
  dts: true,
  format: 'esm',
  platform: 'node',
  tsconfig: 'tsconfig.build.json',
  clean: true,
  banner: () => ({
    js: `// Built on ${new Date().toISOString()}`,
  }),
  removeNodeProtocol: false,
};
