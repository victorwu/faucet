/**
 * # Sample Rollup for Fabric
 */
import * as react from 'react';
 
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import css from 'rollup-plugin-import-css';
// import url from '@rollup/plugin-url';
import nodeGlobals from 'rollup-plugin-node-globals';
import nodePolyfills from 'rollup-plugin-polyfill-node';
// import json from '@rollup/plugin-json';

function handleWarning (warning, warn) {
  const { code, importer } = warning;
  if (code === 'CIRCULAR_DEPENDENCY' && importer.includes('fomantic-ui-react')) return;
  warn(warning);
}

const builds = [
  {
    input: 'scripts/index.js',
    output: [
      {
        file: 'assets/index.js',
        format: 'iife',
        name: 'BitFaucet',
        globals: {
          '@fabric/core/types/actor': 'Actor',
          '@fabric/http': 'FabricComponent',
          // 'buffer': 'buffer',
          // 'crypto': 'crypto',
          'lodash.merge': 'merge',
          'fomantic-ui-react': 'fomanticUIReact',
          'react': 'React',
          'react-dom': 'reactDom',
          'react-dom/client': 'client',
          'react-redux': 'reactRedux',
        }
      }
    ],
    external: [
      '@fabric/core/types/environment',
      '@fabric/http',
      'lodash.merge',
      'react',
      'react-dom',
      'react-redux',
      /@babel\/runtime/,
      'react-dom/client',
      'fomantic-ui-react',
      'lodash.merge'
    ],
    onwarn(warning, warn) {
        if (warning.code === 'THIS_IS_UNDEFINED') return;
        warn(warning);
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        preventAssignment: true
      }),
      css(),
      // json(),
      // url(),
      nodeGlobals(),
      nodePolyfills(),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        preferBuiltins: true,
        browser: true,
        // resolveOnly: [
        //   /^(?!react$)/,
        //   /^(?!react-dom$)/,
        //   /^(?!prop-types)/,
        // ],
      }),
      commonjs({
        include: /node_modules/,
        // transformMixedEsModules: true,
      }),
      babel({
        plugins: ['transform-class-properties'],
        include: ['node_modules/react-router-dom/**'],
        presets: ['@babel/env', '@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
    ],
    onwarn: handleWarning,
    context: 'null',
    moduleContext: 'null',
  }
];

export default builds;
