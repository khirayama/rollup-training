import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace'
import typescript from 'rollup-plugin-typescript';
// import env from 'rollup-plugin-env';

export default {
  input: 'src/main.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    // env({
    //   NODE_ENV: process.env.NODE_ENV,
    // }),
    typescript({
      typescript: require('typescript'),
    }),
    commonjs(),
    globals(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    resolve({
      jsnext: true,
      main: true,
    }),
  ]
};
