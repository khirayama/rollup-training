import commonjs from 'rollup-plugin-commonjs';
import env from 'rollup-plugin-env';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    babel({
      "exclude": "node_modules/**",
    }),
    // env({
    //   NODE_ENV: process.env.NODE_ENV,
    // }),
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
