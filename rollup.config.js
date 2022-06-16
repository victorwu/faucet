/**
 * # Sample Rollup for Fabric
 */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import css from 'rollup-plugin-import-css';
// import json from '@rollup/plugin-json';
// import url from '@rollup/plugin-url';

function handleWarning (warning, warn) {
  const { code, importer } = warning;
  if (code === 'CIRCULAR_DEPENDENCY' && importer.includes('semantic-ui-react')) return;
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
          'buffer': 'buffer',
          'crypto': 'crypto',
          'lodash.merge': 'merge',
          'react-dom/client': 'client',
        }
      }
    ],
    external: [
      '@fabric/core/types/actor',
      '@fabric/core/types/environment',
      '@fabric/http',
      'lodash.merge',
      'react-dom/client',
    ],
    onwarn(warning, warn) {
        if (warning.code === 'THIS_IS_UNDEFINED') return;
        warn(warning);
    },
    plugins: [
      resolve({
        extensions: ['.js'],
        preferBuiltins: true
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      css(),
      // json(),
      // url(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        presets: ['@babel/preset-react']
      })
    ],
    onwarn: handleWarning
  }
];

export default builds;
