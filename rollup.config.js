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

import handleRollupWarning from './functions/handleRollupWarning';

export default {
  input: 'scripts/index.js',
  output: {
    file: 'assets/index.js',
    format: 'iife',
    name: 'faucet',
    globals: {
      'react': 'React',
      'react-redux': 'reactRedux',
      'react-router-dom': 'reactRouterDom',
      'react/jsx-runtime': 'jsxRuntime',
      '@reduxjs/toolkit': 'toolkit',
      'react-dom/client': 'client',
      'semantic-ui-react': 'semanticUIReact',
      'bitcoinjs-lib': 'bitcoin'
    }
  },
  external: [
    'react',
    'react-redux',
    'react/jsx-runtime',
    'react-router-dom',
    'react-dom/client',
    '@reduxjs/toolkit',
    'semantic-ui-react',
    'bitcoinjs-lib'
  ],
  plugins: [
    css(),
    json(),
    url(),
    nodeGlobals(),
    nodePolyfills(),
    // resolve({
    //   extensions: ['.js', '.jsx']
    // }),
    babel({ 
      presets: [
        // '@babel/env', 
        '@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: ['node_modules/**','**/node_modules/**']
    }),
    commonjs({
      include: 'node_modules/**',
      transformMixedEsModules: true
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
  onwarn: handleRollupWarning,
  context: 'null',
  moduleContext: 'null'
}
