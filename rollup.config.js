/**
 * # Sample Rollup for Fabric
 */
import * as react from 'react'

import babel from '@rollup/plugin-babel'
import css from 'rollup-plugin-import-css'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import replace from '@rollup/plugin-replace'

import handleRollupWarning from './functions/handleRollupWarning'

export default {
  input: 'scripts/index.js',
  output: {
    file: 'assets/index.js',
    format: 'iife',
    globals: {
      'fomantic-ui-react': 'fomanticUIReact'
    }
  },
  external: ['fomantic-ui-react'],
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': `"${process.env.NODE_ENV || 'development'}"`
      }
    }),
    babel({ babelHelpers: 'runtime' }),
    css(),
    resolve({ preferBuiltins: false }),
    commonjs(),
    nodePolyfills()
  ],
  onwarn: handleRollupWarning,
  context: 'null',
  moduleContext: 'null'
}
