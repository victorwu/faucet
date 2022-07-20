(function (React, client, reactRedux, toolkit, reactRouterDom, semanticUiReact, bitcoin) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespace(React);
  var bitcoin__default = /*#__PURE__*/_interopDefaultLegacy(bitcoin);

  const playnet = {
    key: {
      seed: null
    }
  };
  var state = {
    host: 'faucet.playnet.portaldefi.com',
    port: 443,
    secure: true,
    seed: null,
    status: 'PAUSED',
    identity: {
      seed: playnet.key.seed
    },
    nodes: ['localhost:9977']
  };

  var defaults = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': state
  });

  const faucetSlice = toolkit.createSlice({
    name: 'faucet',
    initialState: defaults,
    reducers: {
      recipientAddressClear: state => {
        state.recipient = '';
      },
      recipientAddressUpdate: (state, action) => {
        const address = action.payload; // console.log(`recipientAddressUpdate action.payload ${address}`)

        state.recipient = address;
      },
      seedAdded: (state, action) => {
        const seed = action.payload;
        state.seed = seed;
      },
      statusUpdate: (state, action) => {
        const status = action.payload;
        state.status = status;
      },
      setState: (state, action) => {
        Object.assign(state, action.payload);
      }
    }
  });
  const {
    recipientAddressClear,
    recipientAddressUpdate,
    statusUpdate,
    setState
  } = faucetSlice.actions;
  var faucetReducer = faucetSlice.reducer;

  const store = toolkit.configureStore({
    reducer: faucetReducer
  });

  function merge(target, source) {
    for (const [key, val] of Object.entries(source)) {
      if (val !== null && typeof val === 'object') {
        if (target[key] === undefined) {
          target[key] = new val.__proto__.constructor();
        }

        merge(val, target[key]);
      } else {
        target[key] = val;
      }
    }

    return target;
  }

  // React
  // import FabricKeyPair from './FabricKeyPair';
  // Fabric Types
  // import * as Actor from '@fabric/core/types/actor';
  // import * as Key from '@fabric/core/types/key';
  // import * as Signer from '@fabric/core/types/signer';
  // React Hack

  window.React = React__namespace;

  class FaucetDripForm extends React__namespace.Component {
    constructor(props) {
      super(props);
      this.settings = Object.assign({
        network: 'regtest'
      }, props.state);
      /* this.wallet = new Wallet({
        network: this.settings.network
      }); */
      // this.key = new Key(this.settings);
      // this._key = new bcoin.hd.key();
      // TODO: prepare Fabric
      // i.e., use _state here, then import from getter and apply properties
      // _from_ @react

      this.state = merge({
        address: null,
        content: {
          requests: []
        },
        requests: {},
        secret: Buffer.alloc(32),
        // Actor.randomBytes(32), // solution hash (revealed on trade)
        status: 'LOADING'
      }, props.state);
      this.inputAddress = props.state.recipient; // TODO: evaluate removing ZMQ
      // this.bitcoin = new Bitcoin(this.settings);

      return this;
    }

    componentDidMount() {
      // set status to loaded
      this.props.statusUpdate("LOADED");
    }

    get networks() {
      return {
        'mainnet': bitcoin__default["default"].networks.mainnet,
        'regtest': bitcoin__default["default"].networks.regtest,
        'testnet': bitcoin__default["default"].networks.testnet
      };
    }

    _handleAddressChange(e) {
      this.setState({
        address: e.target.value
      });
      const isValid = this.validateAddress(e.target.value);

      if (!isValid) {
        this.setState({
          status: 'ERROR',
          errors: ['Invalid Bitcoin address.']
        });
      }
    }

    _handleSecretChange(e) {
      this.setState({
        secret: e.target.value
      });
    }

    _handleSubmitButtonClick(e) {
      console.log('submit button click:', e);
    }

    _handleChange(e) {// const fields = { ...this.state.fields, [e.target.name]: e.target.value };
      // TODO: merge old state
      // this.setState({ fields: fields });
    }

    handleChange(e) {
      // setInputAddress(e.target.value);
      // setTimeout(function () {
      // TODO: add debounce
      // if(inputAddress) { // TODO: add validateAddress
      this.props.recipientAddressUpdate(e.target.value); // } else this.props.recipientAddressUpdate('');
      // }, 1000);
    }

    render() {
      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Form, {
        ref: this.props.form,
        loading: this.props.state.status === 'LOADING',
        disabled: this.props.state.status === 'LOADING',
        onSubmit: this.props.onSubmit.bind(this)
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Form.Field, null, /*#__PURE__*/React__namespace.createElement("label", null, "Request a deposit to\u2026"), /*#__PURE__*/React__namespace.createElement("div", {
        className: "ui input"
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Input, {
        ref: this.props.field,
        action: true,
        type: "text",
        placeholder: "Enter a Bitcoin address here",
        value: this.props.state.recipient || '',
        onChange: this.handleChange.bind(this)
      }), /*#__PURE__*/React__namespace.createElement(semanticUiReact.Button, {
        ref: this.props.button,
        attached: true,
        type: "submit",
        loading: this.props.state.status === 'LOADING',
        disabled: this.props.state.status === 'REQUESTING' || this.props.state.status === 'PAUSED' || this.props.state.status === 'ERROR',
        color: "green",
        content: "Request",
        icon: "right chevron",
        labelPosition: "right",
        onClick: this.props.onSubmit.bind(this)
      })))));
    }

    start() {
      console.log('[FAUCET:DRIPS]', 'Starting component...');
      super.start();
      this.sync();
      return this;
    }

    sync() {
      // var hash = createHash('sha256');
      // const preimage = hash.update(this.state.secret).digest('hex');
      // this.setState({ preimage: preimage });
      return this;
    }

    validateAddress(address) {
      try {
        bitcoin__default["default"].address.toOutputScript(address, this.networks[this.settings.network]);
        return true;
      } catch (e) {
        return false;
      }
    }

  } // TODO: discuss with @victorwu


  const mapStateToProps$1 = state => ({
    state: state,
    recipient: state.recipient
  });

  var FaucetDripForm$1 = reactRedux.connect(mapStateToProps$1, {
    recipientAddressClear,
    recipientAddressUpdate,
    setState,
    statusUpdate
  }, null, {
    forwardRef: true
  })(FaucetDripForm);

  // Dependencies
  // import PortalMenu from './components/PortalMenu';
  // React Hack

  window.React = React__namespace;

  class Faucet extends React__namespace.Component {
    constructor(props) {
      super(props);
      this.settings = Object.assign({
        debug: false,
        host: 'localhost',
        port: 7222,
        secure: false,
        status: 'PAUSED'
      }, defaults, props.state); // TODO: prepare Fabric
      // i.e., use _state here, then import from getter and apply properties
      // _from_ @react

      this.state = Object.assign({}, this.settings);
      this.bridge = /*#__PURE__*/React__namespace.createRef();
      this.button = /*#__PURE__*/React__namespace.createRef();
      this.field = /*#__PURE__*/React__namespace.createRef();
      this.form = /*#__PURE__*/React__namespace.createRef();
      this.modal = /*#__PURE__*/React__namespace.createRef();
      return;
    }

    onSubmit(e) {
      const self = this;
      this.props.statusUpdate('LOADING'); // this.form.current.setState({ status: 'LOADING' });
      // this.button.current.setState({ status: 'REQUESTING'});

      const address = this.props.state.recipient;
      const message = {
        type: 'Call',
        data: {
          method: 'DripRequest',
          params: [address]
        }
      };

      if (this.settings.debug) {
        console.log('Message to send over bridge:', message);
        console.log(`submitting address ${address}`);
      }

      setTimeout(function () {
        if (address != '') {
          self.props.statusUpdate('REQUESTING');
        }

        self.bridge.current.send(message).then(result => {
          if (self.settings.debug) console.log('Message sent over bridge, result:', result);
          self.field.current.value = '';
          self.props.recipientAddressClear(); // self.field.current.setState({ address: '' });

          self.props.statusUpdate("LOADED"); // self.form.current.setState({ status: 'LOADED' });
          // self.button.current.setState({ status: 'LOADED '});
        });
      }, 1000);
    }

    render() {
      return /*#__PURE__*/React__namespace.createElement("div", null, /*#__PURE__*/React__namespace.createElement("fabric-faucet-home", {
        ref: this.ref
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Visibility, {
        onBottomPassed: this._handleMastheadBottomPassed.bind(this)
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Segment, {
        className: "ui inverted vertical masthead center aligned segment"
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Container, {
        className: "ui text container"
      }, /*#__PURE__*/React__namespace.createElement("h1", {
        className: "ui inverted header"
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Icon, {
        name: "tint"
      }), " bitfaucet"), /*#__PURE__*/React__namespace.createElement("h2", null, "The official ", /*#__PURE__*/React__namespace.createElement("code", null, "@fabric/playnet"), " faucet."), /*#__PURE__*/React__namespace.createElement(semanticUiReact.Container, {
        className: "left aligned",
        style: {
          marginTop: '5em'
        }
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Card, {
        fluid: true
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Card.Content, null, /*#__PURE__*/React__namespace.createElement(FaucetDripForm$1, {
        ref: this.form,
        button: this.button,
        field: this.field,
        onSubmit: this.onSubmit.bind(this)
      }))), /*#__PURE__*/React__namespace.createElement(semanticUiReact.Card, {
        fluid: true,
        style: this.state.debug ? {} : {
          display: 'none'
        }
      }, /*#__PURE__*/React__namespace.createElement(semanticUiReact.Card.Content, null))))))));
    }

    _handleBridgeChange(event) {
      console.log('bridge change:', event);
    }

    _handleMastheadBottomPassed(e, _ref) {
      let {
        calculations
      } = _ref;
      console.log('vis change:', e, calculations);
      this.setState({
        calculations
      });
    }

    async _handleRemoteReady() {
      console.log('Remote ready!');
      this.form.current.setState({
        status: 'READY'
      });
    }

  }

  const mapStateToProps = state => ({
    state: state
  });

  var Faucet$1 = reactRedux.connect(mapStateToProps, {
    recipientAddressClear,
    recipientAddressUpdate,
    statusUpdate
  }, null, {
    forwardRef: true
  })(Faucet);

  // Dependencies

  window.React = React__namespace;
  /**
   * The Portal web application.
   */

  class App extends React__namespace.Component {
    constructor(settings) {
      super(settings);
      const state = store.getState();
      this.settings = Object.assign({}, state, settings); // this.fabric = new Fabric();

      this.state = Object.assign({
        actor: null,
        host: 'localhost',
        integrity: null,
        snapshots: []
      }, state, settings);
      return this;
    }

    _handleBridgeChange(event) {
      console.log('bridge change:', event);
    }

    componentDidMount() {
      // const proof = new Actor(this.state);
      return this;
    }

    render() {
      return /*#__PURE__*/React__namespace.createElement("react-application", {
        id: "root"
      }, /*#__PURE__*/React__namespace.createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__namespace.createElement("div", {
        className: "pusher"
      }, /*#__PURE__*/React__namespace.createElement(reactRouterDom.Routes, null, /*#__PURE__*/React__namespace.createElement(reactRouterDom.Route, {
        path: "/",
        exact: true,
        element: /*#__PURE__*/React__namespace.createElement(Faucet$1, {
          state: this.state,
          balances: this.state.balances,
          keys: this.state.keys,
          host: this.state.host
        })
      })))));
    }

  }

  /**
   * Copyright: 2019, Fabric Labs
   */

  window.React = React__namespace; // Settings

  const settings = {}; // TODO: canonicalize settings / state

  const container = document.getElementById('root');
  const root = client.createRoot(container); // createRoot(container!) if TypeScript
  // Main Process Definition

  async function main() {
    let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    root.render( /*#__PURE__*/React__namespace.createElement(reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/React__namespace.createElement(App, {
      state: input
    })));
    return {
      react: {
        root
      }
    };
  } // Run Main Process


  main(settings).catch(exception => {
    console.error('[PORTAL:FEED] Main Process Exception:', exception);
  }).then(output => {
    console.log('[PORTAL:FEED] Main Process Output:', output);
  });

})(React, client, reactRedux, toolkit, reactRouterDom, semanticUIReact, bitcoin);
