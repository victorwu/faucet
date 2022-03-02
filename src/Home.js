// State
import * as defaults from './settings/state';

// Dependencies
import React, { useState, useRef } from 'react';
import {
  Link
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  recipientAddressClear, 
  recipientAddressUpdate, 
  statusUpdate } from './features/faucet/faucetSlice';
import { store } from './app/store';

// Components
import {
  Card,
  Container,
  Divider,
  Icon,
  // Grid,
  // Menu,
  Segment,
  Visibility
} from 'semantic-ui-react';

import FabricComponent from './types/component';

import FabricBridge from '@fabric/http';
// import FabricDebugger from '@fabric/http';

import FaucetDripForm from './components/FaucetDripForm';
// import FabricIdentityManager from '@fabric/http';
// import PortalMenu from './components/PortalMenu';

export default function Home (props) {
    const address = useSelector((state) => state.recipient);
    const dispatch = useDispatch();
    const settings = Object.assign({
      debug: false,
      host: 'localhost',
      port: 7222,
      secure: false,
      status: 'PAUSED'
    }, defaults, props);

    const state = store.getState();

    const bridge = useRef(null);
    const button = React.createRef();
    const field = React.createRef();
    const form = useRef(null);
    const modal = React.createRef();

  const onSubmit = (e) => {
    dispatch(statusUpdate('LOADING'));

    // TODO: replace with form disable and loading class with a state enum variable

    const message = {
      type: 'Call',
      data: {
        method: 'DripRequest',
        params: [ address ]
      }
    };

    if (settings.debug) console.log('Message to send over bridge:', message);
    console.log(`submitting address ${address}`)
    setTimeout(function () {
      if (address != '') {
        dispatch(statusUpdate('REQUESTING'));
      }

      // Make a call through FabricBridge ref to execute tx 
      // bridge.current.send(message).then((result) => {
      //   if (settings.debug) console.log('Message sent over bridge, result:', result);
      dispatch(statusUpdate('LOADED'));
      dispatch(recipientAddressUpdate(''));
      // });
    }, 1000);
  }

  const _handleBridgeChange = (event) => {
    console.log('bridge change:', event);
  };

  const _handleMastheadBottomPassed = (e, { calculations }) => {
    console.log('vis change:', e, calculations);
    this.setState({ calculations });
  };

  const _handleRemoteReady = async () => {
    console.log('Remote ready!');
  };

  return (
    <>
      <fabric-faucet-home >
        <Visibility onBottomPassed={_handleMastheadBottomPassed.bind(this)}>
          <Segment className='ui inverted vertical masthead center aligned segment'>
            <Container className='ui text container'>
              <h1 className='ui inverted header'><Icon name='tint' /> bitfaucet</h1>
              <h2>The official <code>@fabric/playnet</code> faucet.</h2>
              <Container className='left aligned' style={{ marginTop: '5em' }}>
                <Card fluid>
                  <Card.Content>
                    <FaucetDripForm field={field} onSubmit={onSubmit.bind(this)} />
                  </Card.Content>
                </Card>
                <Card fluid style={(state.debug) ? {} : { display: 'none' }}>
                  <Card.Content>
                    <FabricBridge ref={bridge} remoteReady={_handleRemoteReady.bind(this)} secure={state.secure} host={state.host} port={state.port} debug={state.debug} state={state} />
                  </Card.Content>
                </Card>
              </Container>
            </Container>
          </Segment>
        </Visibility>
      </fabric-faucet-home>
    </>
  );
}

