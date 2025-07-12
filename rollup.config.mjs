
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'esm' },
  ],
  plugins: [
    postcss({
      extract: 'dist/index.css',      
      plugins: [tailwindcss(), autoprefixer()],
    }),
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
  external: ['react', 'react-dom'],
}
