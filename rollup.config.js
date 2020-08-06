// Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import commonjs from '@rollup/plugin-commonjs';
// compiler
import babel from '@rollup/plugin-babel';
// locates third party modules in node_modules
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
// typescript
import typescript from '@rollup/plugin-typescript';
import path from 'path';

/* resolve options */
const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: 'src/index.ts',
  // external modules that exclude from the bundle file
  external: ['react', 'react-dom', 'highlight.js'],
  plugins: [
    resolve({ extensions }), // locate modules
    commonjs(), // Convert CommonJS to ES
    typescript({
      tsconfig: false,
      allowSyntheticDefaultImports: true,
      module: 'es6',
      jsx: 'React',
    }), // Convert TS to JS
    // babel({
    //   configFile: path.resolve(__dirname, 'babel.config.js'),
    //   extensions,
    //   babelHelpers: 'bundled', // 'runtime' for building libraries with @babel/plugin-transform-runtime and @babel/runtime, 'bundled' for building application code
    // }),
  ],
  output: [
    // CommonJS (Node) and ES module (for bundlers) build
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
};
