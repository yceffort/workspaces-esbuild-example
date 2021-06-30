const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    platform: 'browser',
    sourcemap: true,
    target: 'es6',
    format: "cjs"
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1))
