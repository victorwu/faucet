/**
 * # Sample Rollup for Fabric
 */
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-import-css';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import replace from '@rollup/plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
// import semanticUIReact from 'semantic-ui-react';
import typescript from 'rollup-plugin-typescript2';

import handleRollupWarning from './functions/handleRollupWarning';

const plugins = [
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  css(),
  json(),
  url(),
  nodeGlobals(),
  nodePolyfills(),
  resolve({
    extensions: ['.jsx']
  typescript({target: "es6"}),
  commonjs({
    include: 'node_modules/**',
    transformMixedEsModules: true
  }),
  babel({ 
    presets: [
      // '@babel/env', 
      '@babel/preset-react'],
    babelHelpers: 'runtime',
    // exclude: ['**/node_modules/**']
  })
];


export default [
  {
    input: 'scripts/index.js',
    output: {
      file: 'assets/index.js',
      format: 'iife',
      name: 'Faucet'
    },
    plugins,
    onwarn: handleRollupWarning,
    context: 'null',
    moduleContext: 'null'
  }
];
