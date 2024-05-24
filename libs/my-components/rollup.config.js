import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import sourcemaps from 'rollup-plugin-sourcemaps';
import nodeResolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const config = [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: 'inline',
      },
    ],
    external: [
      'axios',
      'react',
      'react/jsx-runtime',
      'react-number-format',
      'collect.js',
      'formik',
      'yup',
      'lodash',
      '@date-io/date-fns',
      '@mui/material',
      '@mui/lab/AdapterDateFns',
      '@mui/lab/LocalizationProvider',
      '@mui/lab/DatePicker',
      '@mui/styles',
      '@mui/icons-material',
      '@mui/material/styles',
      '@mui/styles/makeStyles',
      '@mui/x-date-pickers-pro',
      '@mui/x-date-pickers-pro/AdapterDateFns',
      'react-i18next',
      'i18next',
      'i18next-browser-languagedetector',
      '@mui/icons-material/Delete',
      '@mui/icons-material/AddCircleOutlineTwoTone',
      'uuid',
    ],
    plugins: [
      sourcemaps(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        inlineSources: true,
        useTsconfigDeclarationDir: true,
      }),
      commonjs({
        extensions: ['.js', '.ts'],
      }),
      svgr({ exportType: 'named', jsxRuntime: 'automatic' }),
      url({
        include: './src/assets/icons/*.svg',
      }),
      json(),
      nodeResolve({
        dedupe: ['useTranslation', 'i18n', 'I18nextProvider', 'axios'],
      }),
      /* terser({
                compress: {
                    drop_debugger: false
                }
            }),*/
    ],
  },
  {
    input: './build/dts/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
];
export default config;
