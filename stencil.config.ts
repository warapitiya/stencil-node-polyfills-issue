import { Config } from '@stencil/core';
import nodePolyfill from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'stencil-node-polyfills-issue',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    nodePolyfill()
  ]
};
