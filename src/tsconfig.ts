export default {
  compilerOptions: {
    module: 'NodeNext',
    declaration: true,
    removeComments: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    allowSyntheticDefaultImports: true,
    target: 'ES2022',
    sourceMap: true,
    outDir: './dist',
    incremental: true,
    skipLibCheck: true,
    strict: true,
    esModuleInterop: true,
    types: ['vitest/globals'],
  },
  exclude: ['*.js'],
};
