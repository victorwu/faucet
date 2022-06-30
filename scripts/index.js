/**
 * Copyright: 2019, Fabric Labs
 */

// React
import * as React from 'react';
import {createRoot} from 'react-dom/client';
window.React = React;

// Redux
import { Provider } from 'react-redux';
import { store } from '../stores/redux';

// Styles
import '../styles/index.css';

// Components
import BitFaucet from '../components/BitFaucet.jsx';

// Settings
const settings = {}; // TODO: canonicalize settings / state

const root = createRoot(container); // createRoot(container!) if TypeScript

// Main Process Definition
async function main (input = {}) {
  root.render(
    <Provider store={store}>
      <BitFaucet state={input} />
    </Provider>,
    document.getElementById('root')
  );

  return {
    react: { root }
  };
}

// Run Main Process
main(settings).catch((exception) => {
  console.error('[PORTAL:FEED] Main Process Exception:', exception);
}).then((output) => {
  console.log('[PORTAL:FEED] Main Process Output:', output);
});
