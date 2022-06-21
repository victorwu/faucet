/**
 * Copyright: 2019, Fabric Labs
 */

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { store } from '../stores/redux';

// Styles
import '../styles/index.css';

// Components
import BitFaucet from '../components/BitFaucet';

// Settings
const settings = {}; // TODO: canonicalize settings / state

// Main Process Definition
async function main (input = {}) {
  ReactDOM.render(
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
