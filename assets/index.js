(function (React, client, reactRedux, merge, Actor, fomanticUiReact, FabricComponent) {
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
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge);
  var merge__namespace = /*#__PURE__*/_interopNamespace(merge);
  var Actor__namespace = /*#__PURE__*/_interopNamespace(Actor);
  var Actor__default = /*#__PURE__*/_interopDefaultLegacy(Actor);
  var FabricComponent__default = /*#__PURE__*/_interopDefaultLegacy(FabricComponent);

  function n(n) {
    for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];

    {
      var i = Y[n],
          o = i ? "function" == typeof i ? i.apply(null, t) : i : "unknown error nr: " + n;
      throw Error("[Immer] " + o);
    }
  }

  function r(n) {
    return !!n && !!n[Q];
  }

  function t(n) {
    return !!n && (function (n) {
      if (!n || "object" != typeof n) return !1;
      var r = Object.getPrototypeOf(n);
      if (null === r) return !0;
      var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
    }(n) || Array.isArray(n) || !!n[L] || !!n.constructor[L] || s(n) || v$2(n));
  }

  function i(n, r, t) {
    void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function (e) {
      t && "symbol" == typeof e || r(e, n[e], n);
    }) : n.forEach(function (t, e) {
      return r(e, t, n);
    });
  }

  function o(n) {
    var r = n[Q];
    return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v$2(n) ? 3 : 0;
  }

  function u(n, r) {
    return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
  }

  function a(n, r) {
    return 2 === o(n) ? n.get(r) : n[r];
  }

  function f(n, r, t) {
    var e = o(n);
    2 === e ? n.set(r, t) : 3 === e ? (n.delete(r), n.add(t)) : n[r] = t;
  }

  function c(n, r) {
    return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
  }

  function s(n) {
    return X && n instanceof Map;
  }

  function v$2(n) {
    return q && n instanceof Set;
  }

  function p(n) {
    return n.o || n.t;
  }

  function l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var r = rn(n);
    delete r[Q];

    for (var t = nn(r), e = 0; e < t.length; e++) {
      var i = t[e],
          o = r[i];
      !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
        configurable: !0,
        writable: !0,
        enumerable: o.enumerable,
        value: n[i]
      });
    }

    return Object.create(Object.getPrototypeOf(n), r);
  }

  function d(n, e) {
    return void 0 === e && (e = !1), y(n) || r(n) || !t(n) ? n : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function (n, r) {
      return d(r, !0);
    }, !0), n);
  }

  function h() {
    n(2);
  }

  function y(n) {
    return null == n || "object" != typeof n || Object.isFrozen(n);
  }

  function b(r) {
    var t = tn[r];
    return t || n(18, r), t;
  }

  function m(n, r) {
    tn[n] || (tn[n] = r);
  }

  function _() {
    return U || n(0), U;
  }

  function j(n, r) {
    r && (b("Patches"), n.u = [], n.s = [], n.v = r);
  }

  function O(n) {
    g(n), n.p.forEach(S), n.p = null;
  }

  function g(n) {
    n === U && (U = n.l);
  }

  function w(n) {
    return U = {
      p: [],
      l: U,
      h: n,
      m: !0,
      _: 0
    };
  }

  function S(n) {
    var r = n[Q];
    0 === r.i || 1 === r.i ? r.j() : r.O = !0;
  }

  function P(r, e) {
    e._ = e.p.length;
    var i = e.p[0],
        o = void 0 !== r && r !== i;
    return e.h.g || b("ES5").S(e, r, o), o ? (i[Q].P && (O(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), O(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
  }

  function M(n, r, t) {
    if (y(r)) return r;
    var e = r[Q];
    if (!e) return i(r, function (i, o) {
      return A(n, e, r, i, o, t);
    }, !0), r;
    if (e.A !== n) return r;
    if (!e.P) return x(n, e.t, !0), e.t;

    if (!e.I) {
      e.I = !0, e.A._--;
      var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
      i(3 === e.i ? new Set(o) : o, function (r, i) {
        return A(n, e, o, r, i, t);
      }), x(n, o, !1), t && n.u && b("Patches").R(e, t, n.u, n.s);
    }

    return e.o;
  }

  function A(e, i, o, a, c, s) {
    if (c === o && n(5), r(c)) {
      var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
      if (f(o, a, v), !r(v)) return;
      e.m = !1;
    }

    if (t(c) && !y(c)) {
      if (!e.h.F && e._ < 1) return;
      M(e, c), i && i.A.l || x(e, c);
    }
  }

  function x(n, r, t) {
    void 0 === t && (t = !1), n.h.F && n.m && d(r, t);
  }

  function z(n, r) {
    var t = n[Q];
    return (t ? p(t) : n)[r];
  }

  function I(n, r) {
    if (r in n) for (var t = Object.getPrototypeOf(n); t;) {
      var e = Object.getOwnPropertyDescriptor(t, r);
      if (e) return e;
      t = Object.getPrototypeOf(t);
    }
  }

  function k(n) {
    n.P || (n.P = !0, n.l && k(n.l));
  }

  function E(n) {
    n.o || (n.o = l(n.t));
  }

  function R(n, r, t) {
    var e = s(r) ? b("MapSet").N(r, t) : v$2(r) ? b("MapSet").T(r, t) : n.g ? function (n, r) {
      var t = Array.isArray(n),
          e = {
        i: t ? 1 : 0,
        A: r ? r.A : _(),
        P: !1,
        I: !1,
        D: {},
        l: r,
        t: n,
        k: null,
        o: null,
        j: null,
        C: !1
      },
          i = e,
          o = en;
      t && (i = [e], o = on$2);
      var u = Proxy.revocable(i, o),
          a = u.revoke,
          f = u.proxy;
      return e.k = f, e.j = a, f;
    }(r, t) : b("ES5").J(r, t);
    return (t ? t.A : _()).p.push(e), e;
  }

  function D(e) {
    return r(e) || n(22, e), function n(r) {
      if (!t(r)) return r;
      var e,
          u = r[Q],
          c = o(r);

      if (u) {
        if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
        u.I = !0, e = F(r, c), u.I = !1;
      } else e = F(r, c);

      return i(e, function (r, t) {
        u && a(u.t, r) === t || f(e, r, n(t));
      }), 3 === c ? new Set(e) : e;
    }(e);
  }

  function F(n, r) {
    switch (r) {
      case 2:
        return new Map(n);

      case 3:
        return Array.from(n);
    }

    return l(n);
  }

  function N() {
    function t(n, r) {
      var t = s[n];
      return t ? t.enumerable = r : s[n] = t = {
        configurable: !0,
        enumerable: r,
        get: function () {
          var r = this[Q];
          return f(r), en.get(r, n);
        },
        set: function (r) {
          var t = this[Q];
          f(t), en.set(t, n, r);
        }
      }, t;
    }

    function e(n) {
      for (var r = n.length - 1; r >= 0; r--) {
        var t = n[r][Q];
        if (!t.P) switch (t.i) {
          case 5:
            a(t) && k(t);
            break;

          case 4:
            o(t) && k(t);
        }
      }
    }

    function o(n) {
      for (var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--) {
        var o = e[i];

        if (o !== Q) {
          var a = r[o];
          if (void 0 === a && !u(r, o)) return !0;
          var f = t[o],
              s = f && f[Q];
          if (s ? s.t !== a : !c(f, a)) return !0;
        }
      }

      var v = !!r[Q];
      return e.length !== nn(r).length + (v ? 0 : 1);
    }

    function a(n) {
      var r = n.k;
      if (r.length !== n.t.length) return !0;
      var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
      if (t && !t.get) return !0;

      for (var e = 0; e < r.length; e++) if (!r.hasOwnProperty(e)) return !0;

      return !1;
    }

    function f(r) {
      r.O && n(3, JSON.stringify(p(r)));
    }

    var s = {};
    m("ES5", {
      J: function (n, r) {
        var e = Array.isArray(n),
            i = function (n, r) {
          if (n) {
            for (var e = Array(r.length), i = 0; i < r.length; i++) Object.defineProperty(e, "" + i, t(i, !0));

            return e;
          }

          var o = rn(r);
          delete o[Q];

          for (var u = nn(o), a = 0; a < u.length; a++) {
            var f = u[a];
            o[f] = t(f, n || !!o[f].enumerable);
          }

          return Object.create(Object.getPrototypeOf(r), o);
        }(e, n),
            o = {
          i: e ? 5 : 4,
          A: r ? r.A : _(),
          P: !1,
          I: !1,
          D: {},
          l: r,
          t: n,
          k: i,
          o: null,
          O: !1,
          C: !1
        };

        return Object.defineProperty(i, Q, {
          value: o,
          writable: !0
        }), i;
      },
      S: function (n, t, o) {
        o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
          if (r && "object" == typeof r) {
            var t = r[Q];

            if (t) {
              var e = t.t,
                  o = t.k,
                  f = t.D,
                  c = t.i;
              if (4 === c) i(o, function (r) {
                r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
              }), i(e, function (n) {
                void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
              });else if (5 === c) {
                if (a(t) && (k(t), f.length = !0), o.length < e.length) for (var s = o.length; s < e.length; s++) f[s] = !1;else for (var v = e.length; v < o.length; v++) f[v] = !0;

                for (var p = Math.min(o.length, e.length), l = 0; l < p; l++) o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
              }
            }
          }
        }(n.p[0]), e(n.p));
      },
      K: function (n) {
        return 4 === n.i ? o(n) : a(n);
      }
    });
  }

  var G,
      U,
      W$6 = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
      X = "undefined" != typeof Map,
      q = "undefined" != typeof Set,
      B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
      H = W$6 ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G),
      L = W$6 ? Symbol.for("immer-draftable") : "__$immer_draftable",
      Q = W$6 ? Symbol.for("immer-state") : "__$immer_state",
      Y = {
    0: "Illegal state",
    1: "Immer drafts cannot have computed properties",
    2: "This object has been frozen and should not be mutated",
    3: function (n) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
    },
    4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    5: "Immer forbids circular references",
    6: "The first or second argument to `produce` must be a function",
    7: "The third argument to `produce` must be a function or undefined",
    8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
    10: "The given draft is already finalized",
    11: "Object.defineProperty() cannot be used on an Immer draft",
    12: "Object.setPrototypeOf() cannot be used on an Immer draft",
    13: "Immer only supports deleting array indices",
    14: "Immer only supports setting array indices and the 'length' property",
    15: function (n) {
      return "Cannot apply patch, path doesn't resolve: " + n;
    },
    16: 'Sets cannot have "replace" patches.',
    17: function (n) {
      return "Unsupported patch operation: " + n;
    },
    18: function (n) {
      return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
    },
    20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
    21: function (n) {
      return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
    },
    22: function (n) {
      return "'current' expects a draft, got: " + n;
    },
    23: function (n) {
      return "'original' expects a draft, got: " + n;
    },
    24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  },
      Z = "" + Object.prototype.constructor,
      nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
  } : Object.getOwnPropertyNames,
      rn = Object.getOwnPropertyDescriptors || function (n) {
    var r = {};
    return nn(n).forEach(function (t) {
      r[t] = Object.getOwnPropertyDescriptor(n, t);
    }), r;
  },
      tn = {},
      en = {
    get: function (n, r) {
      if (r === Q) return n;
      var e = p(n);
      if (!u(e, r)) return function (n, r, t) {
        var e,
            i = I(r, t);
        return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
      }(n, e, r);
      var i = e[r];
      return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = R(n.A.h, i, n)) : i;
    },
    has: function (n, r) {
      return r in p(n);
    },
    ownKeys: function (n) {
      return Reflect.ownKeys(p(n));
    },
    set: function (n, r, t) {
      var e = I(p(n), r);
      if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;

      if (!n.P) {
        var i = z(p(n), r),
            o = null == i ? void 0 : i[Q];
        if (o && o.t === t) return n.o[r] = t, n.D[r] = !1, !0;
        if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
        E(n), k(n);
      }

      return n.o[r] === t && "number" != typeof t && (void 0 !== t || r in n.o) || (n.o[r] = t, n.D[r] = !0, !0);
    },
    deleteProperty: function (n, r) {
      return void 0 !== z(n.t, r) || r in n.t ? (n.D[r] = !1, E(n), k(n)) : delete n.D[r], n.o && delete n.o[r], !0;
    },
    getOwnPropertyDescriptor: function (n, r) {
      var t = p(n),
          e = Reflect.getOwnPropertyDescriptor(t, r);
      return e ? {
        writable: !0,
        configurable: 1 !== n.i || "length" !== r,
        enumerable: e.enumerable,
        value: t[r]
      } : e;
    },
    defineProperty: function () {
      n(11);
    },
    getPrototypeOf: function (n) {
      return Object.getPrototypeOf(n.t);
    },
    setPrototypeOf: function () {
      n(12);
    }
  },
      on$2 = {};

  i(en, function (n, r) {
    on$2[n] = function () {
      return arguments[0] = arguments[0][0], r.apply(this, arguments);
    };
  }), on$2.deleteProperty = function (r, t) {
    return isNaN(parseInt(t)) && n(13), on$2.set.call(this, r, t, void 0);
  }, on$2.set = function (r, t, e) {
    return "length" !== t && isNaN(parseInt(t)) && n(14), en.set.call(this, r[0], t, e, r[0]);
  };

  var un = function () {
    function e(r) {
      var e = this;
      this.g = B, this.F = !0, this.produce = function (r, i, o) {
        if ("function" == typeof r && "function" != typeof i) {
          var u = i;
          i = r;
          var a = e;
          return function (n) {
            var r = this;
            void 0 === n && (n = u);

            for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) e[o - 1] = arguments[o];

            return a.produce(n, function (n) {
              var t;
              return (t = i).call.apply(t, [r, n].concat(e));
            });
          };
        }

        var f;

        if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
          var c = w(e),
              s = R(e, r, void 0),
              v = !0;

          try {
            f = i(s), v = !1;
          } finally {
            v ? O(c) : g(c);
          }

          return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (n) {
            return j(c, o), P(n, c);
          }, function (n) {
            throw O(c), n;
          }) : (j(c, o), P(f, c));
        }

        if (!r || "object" != typeof r) {
          if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.F && d(f, !0), o) {
            var p = [],
                l = [];
            b("Patches").M(r, f, p, l), o(p, l);
          }

          return f;
        }

        n(21, r);
      }, this.produceWithPatches = function (n, r) {
        if ("function" == typeof n) return function (r) {
          for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];

          return e.produceWithPatches(r, function (r) {
            return n.apply(void 0, [r].concat(i));
          });
        };
        var t,
            i,
            o = e.produce(n, r, function (n, r) {
          t = n, i = r;
        });
        return "undefined" != typeof Promise && o instanceof Promise ? o.then(function (n) {
          return [n, t, i];
        }) : [o, t, i];
      }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
    }

    var i = e.prototype;
    return i.createDraft = function (e) {
      t(e) || n(8), r(e) && (e = D(e));
      var i = w(this),
          o = R(this, e, void 0);
      return o[Q].C = !0, g(i), o;
    }, i.finishDraft = function (r, t) {
      var e = r && r[Q];
      (e && e.C || n(9), e.I && n(10));
      var i = e.A;
      return j(i, t), P(void 0, i);
    }, i.setAutoFreeze = function (n) {
      this.F = n;
    }, i.setUseProxies = function (r) {
      r && !B && n(20), this.g = r;
    }, i.applyPatches = function (n, t) {
      var e;

      for (e = t.length - 1; e >= 0; e--) {
        var i = t[e];

        if (0 === i.path.length && "replace" === i.op) {
          n = i.value;
          break;
        }
      }

      e > -1 && (t = t.slice(e + 1));
      var o = b("Patches").$;
      return r(n) ? o(n, t) : this.produce(n, function (n) {
        return o(n, t);
      });
    }, e;
  }(),
      an = new un(),
      fn = an.produce;
      an.produceWithPatches.bind(an);
      an.setAutoFreeze.bind(an);
      an.setUseProxies.bind(an);
      an.applyPatches.bind(an);
      an.createDraft.bind(an);
      an.finishDraft.bind(an);

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  var $$observable = function () {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
  }();
  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */


  var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
  };

  var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
  };
  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */

  function isPlainObject$1(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(obj) === proto;
  } // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of


  function miniKindOf(val) {
    if (val === void 0) return 'undefined';
    if (val === null) return 'null';
    var type = typeof val;

    switch (type) {
      case 'boolean':
      case 'string':
      case 'number':
      case 'symbol':
      case 'function':
        {
          return type;
        }
    }

    if (Array.isArray(val)) return 'array';
    if (isDate$1(val)) return 'date';
    if (isError$1(val)) return 'error';
    var constructorName = ctorName(val);

    switch (constructorName) {
      case 'Symbol':
      case 'Promise':
      case 'WeakMap':
      case 'WeakSet':
      case 'Map':
      case 'Set':
        return constructorName;
    } // other


    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
  }

  function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
  }

  function isError$1(val) {
    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
  }

  function isDate$1(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
  }

  function kindOf(val) {
    var typeOfVal = typeof val;

    {
      typeOfVal = miniKindOf(val);
    }

    return typeOfVal;
  }
  /**
   * @deprecated
   *
   * **We recommend using the `configureStore` method
   * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
   *
   * Redux Toolkit is our recommended approach for writing Redux logic today,
   * including store setup, reducers, data fetching, and more.
   *
   * **For more details, please read this Redux docs page:**
   * **https://redux.js.org/introduction/why-rtk-is-redux-today**
   *
   * `configureStore` from Redux Toolkit is an improved version of `createStore` that
   * simplifies setup and helps avoid common bugs.
   *
   * You should not be using the `redux` core package by itself today, except for learning purposes.
   * The `createStore` method from the core `redux` package will not be removed, but we encourage
   * all users to migrate to using Redux Toolkit for all Redux code.
   *
   * If you want to use `createStore` without this visual deprecation warning, use
   * the `legacy_createStore` import instead:
   *
   * `import { legacy_createStore as createStore} from 'redux'`
   *
   */


  function createStore(reducer, preloadedState, enhancer) {
    var _ref2;

    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
      throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
    }

    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
      enhancer = preloadedState;
      preloadedState = undefined;
    }

    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
      }

      return enhancer(createStore)(reducer, preloadedState);
    }

    if (typeof reducer !== 'function') {
      throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    }

    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
     * This makes a shallow copy of currentListeners so we can use
     * nextListeners as a temporary list while dispatching.
     *
     * This prevents any bugs around consumers calling
     * subscribe/unsubscribe in the middle of a dispatch.
     */

    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */


    function getState() {
      if (isDispatching) {
        throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
      }

      return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */


    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
      }

      if (isDispatching) {
        throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        if (isDispatching) {
          throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
        }

        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
        currentListeners = null;
      };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */


    function dispatch(action) {
      if (!isPlainObject$1(action)) {
        throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
      }

      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
      }

      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }

      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }

      var listeners = currentListeners = nextListeners;

      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }

      return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */


    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
      }

      currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
      // Any reducers that existed in both the new and old rootReducer
      // will receive the previous state. This effectively populates
      // the new state tree with any relevant data from the old one.

      dispatch({
        type: ActionTypes.REPLACE
      });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */


    function observable() {
      var _ref;

      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe: function subscribe(observer) {
          if (typeof observer !== 'object' || observer === null) {
            throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
          }

          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }

          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe: unsubscribe
          };
        }
      }, _ref[$$observable] = function () {
        return this;
      }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.


    dispatch({
      type: ActionTypes.INIT
    });
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
  }
  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */

  function warning$2(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */


    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty

  }

  function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

    if (reducerKeys.length === 0) {
      return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }

    if (!isPlainObject$1(inputState)) {
      return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
    }

    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
      return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function (key) {
      unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE) return;

    if (unexpectedKeys.length > 0) {
      return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
    }
  }

  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
      var reducer = reducers[key];
      var initialState = reducer(undefined, {
        type: ActionTypes.INIT
      });

      if (typeof initialState === 'undefined') {
        throw new Error("The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
      }

      if (typeof reducer(undefined, {
        type: ActionTypes.PROBE_UNKNOWN_ACTION()
      }) === 'undefined') {
        throw new Error("The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
      }
    });
  }
  /**
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */


  function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};

    for (var i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i];

      {
        if (typeof reducers[key] === 'undefined') {
          warning$2("No reducer provided for key \"" + key + "\"");
        }
      }

      if (typeof reducers[key] === 'function') {
        finalReducers[key] = reducers[key];
      }
    }

    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    // keys multiple times.

    var unexpectedKeyCache;

    {
      unexpectedKeyCache = {};
    }

    var shapeAssertionError;

    try {
      assertReducerShape(finalReducers);
    } catch (e) {
      shapeAssertionError = e;
    }

    return function combination(state, action) {
      if (state === void 0) {
        state = {};
      }

      if (shapeAssertionError) {
        throw shapeAssertionError;
      }

      {
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

        if (warningMessage) {
          warning$2(warningMessage);
        }
      }

      var hasChanged = false;
      var nextState = {};

      for (var _i = 0; _i < finalReducerKeys.length; _i++) {
        var _key = finalReducerKeys[_i];
        var reducer = finalReducers[_key];
        var previousStateForKey = state[_key];
        var nextStateForKey = reducer(previousStateForKey, action);

        if (typeof nextStateForKey === 'undefined') {
          var actionType = action && action.type;
          throw new Error("When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
        }

        nextState[_key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }

      hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
      return hasChanged ? nextState : state;
    };
  }
  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */


  function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  }
  /**
   * Creates a store enhancer that applies middleware to the dispatch method
   * of the Redux store. This is handy for a variety of tasks, such as expressing
   * asynchronous actions in a concise manner, or logging every action payload.
   *
   * See `redux-thunk` package as an example of the Redux middleware.
   *
   * Because middleware is potentially asynchronous, this should be the first
   * store enhancer in the composition chain.
   *
   * Note that each middleware will be given the `dispatch` and `getState` functions
   * as named arguments.
   *
   * @param {...Function} middlewares The middleware chain to be applied.
   * @returns {Function} A store enhancer applying the middleware.
   */


  function applyMiddleware() {
    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }

    return function (createStore) {
      return function () {
        var store = createStore.apply(void 0, arguments);

        var _dispatch = function dispatch() {
          throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
        };

        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch() {
            return _dispatch.apply(void 0, arguments);
          }
        };
        var chain = middlewares.map(function (middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = compose.apply(void 0, chain)(store.dispatch);
        return _objectSpread2(_objectSpread2({}, store), {}, {
          dispatch: _dispatch
        });
      };
    };
  }
  /*
   * This is a dummy function to check if the function name has been altered by minification.
   * If the function has been minified and NODE_ENV !== 'production', warn the user.
   */


  function isCrushed() {}

  if (typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
    warning$2('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
  }

  /** A function that accepts a potential "extra argument" value to be injected later,
   * and returns an instance of the thunk middleware that uses that value
   */
  function createThunkMiddleware(extraArgument) {
    // Standard Redux middleware definition pattern:
    // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
    var middleware = function middleware(_ref) {
      var dispatch = _ref.dispatch,
          getState = _ref.getState;
      return function (next) {
        return function (action) {
          // The thunk middleware looks for any functions that were passed to `store.dispatch`.
          // If this "action" is really a function, call it and return the result.
          if (typeof action === 'function') {
            // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
            return action(dispatch, getState, extraArgument);
          } // Otherwise, pass the action down the middleware chain as usual


          return next(action);
        };
      };
    };

    return middleware;
  }

  var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
  // with whatever "extra arg" they want to inject into their thunks

  thunk.withExtraArgument = createThunkMiddleware;

  var __extends = null && null.__extends || function () {
    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    };

    return function (d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  null && null.__generator || function (thisArg, body) {
    var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  };

  var __spreadArray = null && null.__spreadArray || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

    return to;
  };

  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;

  var __defNormalProp = function (obj, key, value) {
    return key in obj ? __defProp(obj, key, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: value
    }) : obj[key] = value;
  };

  var __spreadValues = function (a, b) {
    for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);

    if (__getOwnPropSymbols) for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
  };
  var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return compose;
    return compose.apply(null, arguments);
  };

  function isPlainObject(value) {
    if (typeof value !== "object" || value === null) return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null) return true;
    var baseProto = proto;

    while (Object.getPrototypeOf(baseProto) !== null) {
      baseProto = Object.getPrototypeOf(baseProto);
    }

    return proto === baseProto;
  } // src/getDefaultMiddleware.ts

  function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
      measureTime: function (fn) {
        var started = Date.now();

        try {
          return fn();
        } finally {
          var finished = Date.now();
          elapsed += finished - started;
        }
      },
      warnIfExceeded: function () {
        if (elapsed > maxDelay) {
          console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
        }
      }
    };
  }

  var MiddlewareArray =
  /** @class */
  function (_super) {
    __extends(MiddlewareArray, _super);

    function MiddlewareArray() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var _this = _super.apply(this, args) || this;

      Object.setPrototypeOf(_this, MiddlewareArray.prototype);
      return _this;
    }

    Object.defineProperty(MiddlewareArray, Symbol.species, {
      get: function () {
        return MiddlewareArray;
      },
      enumerable: false,
      configurable: true
    });

    MiddlewareArray.prototype.concat = function () {
      var arr = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }

      return _super.prototype.concat.apply(this, arr);
    };

    MiddlewareArray.prototype.prepend = function () {
      var arr = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }

      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
      }

      return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
    };

    return MiddlewareArray;
  }(Array); // src/immutableStateInvariantMiddleware.ts
  var prefix = "Invariant failed";

  function invariant$1(condition, message) {
    if (condition) {
      return;
    }

    throw new Error(prefix + ": " + (message || ""));
  }

  function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
  }

  function getSerialize(serializer, decycler) {
    var stack = [],
        keys = [];
    if (!decycler) decycler = function (_, value) {
      if (stack[0] === value) return "[Circular ~]";
      return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
    };
    return function (key, value) {
      if (stack.length > 0) {
        var thisPos = stack.indexOf(this);
        ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
        ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
        if (~stack.indexOf(value)) value = decycler.call(this, key, value);
      } else stack.push(value);

      return serializer == null ? value : serializer.call(this, key, value);
    };
  }

  function isImmutableDefault(value) {
    return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
  }

  function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
      detectMutations: function () {
        return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
      }
    };
  }

  function trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) {
      ignorePaths = [];
    }

    if (path === void 0) {
      path = "";
    }

    var tracked = {
      value: obj
    };

    if (!isImmutable(obj)) {
      tracked.children = {};

      for (var key in obj) {
        var childPath = path ? path + "." + key : key;

        if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
          continue;
        }

        tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
      }
    }

    return tracked;
  }

  function detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
    if (ignorePaths === void 0) {
      ignorePaths = [];
    }

    if (sameParentRef === void 0) {
      sameParentRef = false;
    }

    if (path === void 0) {
      path = "";
    }

    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;

    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
      return {
        wasMutated: true,
        path: path
      };
    }

    if (isImmutable(prevObj) || isImmutable(obj)) {
      return {
        wasMutated: false
      };
    }

    var keysToDetect = {};

    for (var key in trackedProperty.children) {
      keysToDetect[key] = true;
    }

    for (var key in obj) {
      keysToDetect[key] = true;
    }

    for (var key in keysToDetect) {
      var childPath = path ? path + "." + key : key;

      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }

      var result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);

      if (result.wasMutated) {
        return result;
      }
    }

    return {
      wasMutated: false
    };
  }

  function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) {
      options = {};
    }

    var _c = options.isImmutable,
        isImmutable = _c === void 0 ? isImmutableDefault : _c,
        ignoredPaths = options.ignoredPaths,
        _d = options.warnAfter,
        warnAfter = _d === void 0 ? 32 : _d,
        ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function (_c) {
      var getState = _c.getState;
      var state = getState();
      var tracker = track(state);
      var result;
      return function (next) {
        return function (action) {
          var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
          measureUtils.measureTime(function () {
            state = getState();
            result = tracker.detectMutations();
            tracker = track(state);
            invariant$1(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
          });
          var dispatchedAction = next(action);
          measureUtils.measureTime(function () {
            state = getState();
            result = tracker.detectMutations();
            tracker = track(state);
            result.wasMutated && invariant$1(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
          });
          measureUtils.warnIfExceeded();
          return dispatchedAction;
        };
      };
    };
  } // src/serializableStateInvariantMiddleware.ts


  function isPlain(val) {
    var type = typeof val;
    return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
  }

  function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
    if (path === void 0) {
      path = "";
    }

    if (isSerializable === void 0) {
      isSerializable = isPlain;
    }

    if (ignoredPaths === void 0) {
      ignoredPaths = [];
    }

    var foundNestedSerializable;

    if (!isSerializable(value)) {
      return {
        keyPath: path || "<root>",
        value: value
      };
    }

    if (typeof value !== "object" || value === null) {
      return false;
    }

    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;

    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
      var _c = entries_1[_i],
          key = _c[0],
          nestedValue = _c[1];
      var nestedPath = path ? path + "." + key : key;

      if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
        continue;
      }

      if (!isSerializable(nestedValue)) {
        return {
          keyPath: nestedPath,
          value: nestedValue
        };
      }

      if (typeof nestedValue === "object") {
        foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);

        if (foundNestedSerializable) {
          return foundNestedSerializable;
        }
      }
    }

    return false;
  }

  function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) {
      options = {};
    }

    var _c = options.isSerializable,
        isSerializable = _c === void 0 ? isPlain : _c,
        getEntries = options.getEntries,
        _d = options.ignoredActions,
        ignoredActions = _d === void 0 ? [] : _d,
        _e = options.ignoredActionPaths,
        ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e,
        _f = options.ignoredPaths,
        ignoredPaths = _f === void 0 ? [] : _f,
        _g = options.warnAfter,
        warnAfter = _g === void 0 ? 32 : _g,
        _h = options.ignoreState,
        ignoreState = _h === void 0 ? false : _h,
        _j = options.ignoreActions,
        ignoreActions = _j === void 0 ? false : _j;
    return function (storeAPI) {
      return function (next) {
        return function (action) {
          var result = next(action);
          var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");

          if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
            measureUtils.measureTime(function () {
              var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);

              if (foundActionNonSerializableValue) {
                var keyPath = foundActionNonSerializableValue.keyPath,
                    value = foundActionNonSerializableValue.value;
                console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
              }
            });
          }

          if (!ignoreState) {
            measureUtils.measureTime(function () {
              var state = storeAPI.getState();
              var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);

              if (foundStateNonSerializableValue) {
                var keyPath = foundStateNonSerializableValue.keyPath,
                    value = foundStateNonSerializableValue.value;
                console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
              }
            });
            measureUtils.warnIfExceeded();
          }

          return result;
        };
      };
    };
  } // src/getDefaultMiddleware.ts


  function isBoolean$1(x) {
    return typeof x === "boolean";
  }

  function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
      return getDefaultMiddleware(options);
    };
  }

  function getDefaultMiddleware(options) {
    if (options === void 0) {
      options = {};
    }

    var _c = options.thunk,
        thunk$1 = _c === void 0 ? true : _c,
        _d = options.immutableCheck,
        immutableCheck = _d === void 0 ? true : _d,
        _e = options.serializableCheck,
        serializableCheck = _e === void 0 ? true : _e;
    var middlewareArray = new MiddlewareArray();

    if (thunk$1) {
      if (isBoolean$1(thunk$1)) {
        middlewareArray.push(thunk);
      } else {
        middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
      }
    }

    {
      if (immutableCheck) {
        var immutableOptions = {};

        if (!isBoolean$1(immutableCheck)) {
          immutableOptions = immutableCheck;
        }

        middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
      }

      if (serializableCheck) {
        var serializableOptions = {};

        if (!isBoolean$1(serializableCheck)) {
          serializableOptions = serializableCheck;
        }

        middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
      }
    }

    return middlewareArray;
  } // src/configureStore.ts


  var IS_PRODUCTION = "development" === "production";

  function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

    var _c = options || {},
        _d = _c.reducer,
        reducer = _d === void 0 ? void 0 : _d,
        _e = _c.middleware,
        middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e,
        _f = _c.devTools,
        devTools = _f === void 0 ? true : _f,
        _g = _c.preloadedState,
        preloadedState = _g === void 0 ? void 0 : _g,
        _h = _c.enhancers,
        enhancers = _h === void 0 ? void 0 : _h;

    var rootReducer;

    if (typeof reducer === "function") {
      rootReducer = reducer;
    } else if (isPlainObject(reducer)) {
      rootReducer = combineReducers(reducer);
    } else {
      throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }

    var finalMiddleware = middleware;

    if (typeof finalMiddleware === "function") {
      finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);

      if (!Array.isArray(finalMiddleware)) {
        throw new Error("when using a middleware builder function, an array of middleware must be returned");
      }
    }

    if (finalMiddleware.some(function (item) {
      return typeof item !== "function";
    })) {
      throw new Error("each middleware provided to configureStore must be a function");
    }

    var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = compose;

    if (devTools) {
      finalCompose = composeWithDevTools(__spreadValues({
        trace: !IS_PRODUCTION
      }, typeof devTools === "object" && devTools));
    }

    var storeEnhancers = [middlewareEnhancer];

    if (Array.isArray(enhancers)) {
      storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
    } else if (typeof enhancers === "function") {
      storeEnhancers = enhancers(storeEnhancers);
    }

    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return createStore(rootReducer, preloadedState, composedEnhancer);
  } // src/createAction.ts


  function createAction(type, prepareAction) {
    function actionCreator() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (prepareAction) {
        var prepared = prepareAction.apply(void 0, args);

        if (!prepared) {
          throw new Error("prepareAction did not return an object");
        }

        return __spreadValues(__spreadValues({
          type: type,
          payload: prepared.payload
        }, "meta" in prepared && {
          meta: prepared.meta
        }), "error" in prepared && {
          error: prepared.error
        });
      }

      return {
        type: type,
        payload: args[0]
      };
    }

    actionCreator.toString = function () {
      return "" + type;
    };

    actionCreator.type = type;

    actionCreator.match = function (action) {
      return action.type === type;
    };

    return actionCreator;
  }

  function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
      addCase: function (typeOrActionCreator, reducer) {
        {
          if (actionMatchers.length > 0) {
            throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
          }

          if (defaultCaseReducer) {
            throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
          }
        }

        var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;

        if (type in actionsMap) {
          throw new Error("addCase cannot be called with two reducers for the same action type");
        }

        actionsMap[type] = reducer;
        return builder;
      },
      addMatcher: function (matcher, reducer) {
        {
          if (defaultCaseReducer) {
            throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
          }
        }

        actionMatchers.push({
          matcher: matcher,
          reducer: reducer
        });
        return builder;
      },
      addDefaultCase: function (reducer) {
        {
          if (defaultCaseReducer) {
            throw new Error("`builder.addDefaultCase` can only be called once");
          }
        }

        defaultCaseReducer = reducer;
        return builder;
      }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
  } // src/createReducer.ts


  function isStateFunction(x) {
    return typeof x === "function";
  }

  function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) {
      actionMatchers = [];
    }

    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
        actionsMap = _c[0],
        finalActionMatchers = _c[1],
        finalDefaultCaseReducer = _c[2];

    var getInitialState;

    if (isStateFunction(initialState)) {
      getInitialState = function () {
        return fn(initialState(), function () {});
      };
    } else {
      var frozenInitialState_1 = fn(initialState, function () {});

      getInitialState = function () {
        return frozenInitialState_1;
      };
    }

    function reducer(state, action) {
      if (state === void 0) {
        state = getInitialState();
      }

      var caseReducers = __spreadArray([actionsMap[action.type]], finalActionMatchers.filter(function (_c) {
        var matcher = _c.matcher;
        return matcher(action);
      }).map(function (_c) {
        var reducer2 = _c.reducer;
        return reducer2;
      }));

      if (caseReducers.filter(function (cr) {
        return !!cr;
      }).length === 0) {
        caseReducers = [finalDefaultCaseReducer];
      }

      return caseReducers.reduce(function (previousState, caseReducer) {
        if (caseReducer) {
          if (r(previousState)) {
            var draft = previousState;
            var result = caseReducer(draft, action);

            if (typeof result === "undefined") {
              return previousState;
            }

            return result;
          } else if (!t(previousState)) {
            var result = caseReducer(previousState, action);

            if (typeof result === "undefined") {
              if (previousState === null) {
                return previousState;
              }

              throw Error("A case reducer on a non-draftable value must not return undefined");
            }

            return result;
          } else {
            return fn(previousState, function (draft) {
              return caseReducer(draft, action);
            });
          }
        }

        return previousState;
      }, state);
    }

    reducer.getInitialState = getInitialState;
    return reducer;
  } // src/createSlice.ts


  function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
  }

  function createSlice(options) {
    var name = options.name;

    if (!name) {
      throw new Error("`name` is a required option for createSlice");
    }

    var initialState = typeof options.initialState == "function" ? options.initialState : fn(options.initialState, function () {});
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
      var maybeReducerWithPrepare = reducers[reducerName];
      var type = getType2(name, reducerName);
      var caseReducer;
      var prepareCallback;

      if ("reducer" in maybeReducerWithPrepare) {
        caseReducer = maybeReducerWithPrepare.reducer;
        prepareCallback = maybeReducerWithPrepare.prepare;
      } else {
        caseReducer = maybeReducerWithPrepare;
      }

      sliceCaseReducersByName[reducerName] = caseReducer;
      sliceCaseReducersByType[type] = caseReducer;
      actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });

    function buildReducer() {
      var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
          _d = _c[0],
          extraReducers = _d === void 0 ? {} : _d,
          _e = _c[1],
          actionMatchers = _e === void 0 ? [] : _e,
          _f = _c[2],
          defaultCaseReducer = _f === void 0 ? void 0 : _f;

      var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);

      return createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
    }

    var _reducer;

    return {
      name: name,
      reducer: function (state, action) {
        if (!_reducer) _reducer = buildReducer();
        return _reducer(state, action);
      },
      actions: actionCreators,
      caseReducers: sliceCaseReducersByName,
      getInitialState: function () {
        if (!_reducer) _reducer = buildReducer();
        return _reducer.getInitialState();
      }
    };
  } // src/entities/entity_state.ts
  var alm = "listenerMiddleware";

  createAction(alm + "/add");
  createAction(alm + "/removeAll");
  createAction(alm + "/remove");


  N();

  const playnet = require('@fabric/core/settings/playnet');

  module.exports = {
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
    __proto__: null
  });

  const faucetSlice = createSlice({
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

  const store = configureStore({
    reducer: faucetReducer
  });

  function _extends$1() {
    _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    return _extends$1.apply(this, arguments);
  }

  /**
   * Actions represent the type of change to a location value.
   *
   * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
   */

  var Action;

  (function (Action) {
    /**
     * A POP indicates a change to an arbitrary index in the history stack, such
     * as a back or forward navigation. It does not describe the direction of the
     * navigation, only that the current index changed.
     *
     * Note: This is the default action for newly created history objects.
     */
    Action["Pop"] = "POP";
    /**
     * A PUSH indicates a new entry being added to the history stack, such as when
     * a link is clicked and a new page loads. When this happens, all subsequent
     * entries in the stack are lost.
     */

    Action["Push"] = "PUSH";
    /**
     * A REPLACE indicates the entry at the current index in the history stack
     * being replaced by a new one.
     */

    Action["Replace"] = "REPLACE";
  })(Action || (Action = {}));

  var readOnly = function (obj) {
    return Object.freeze(obj);
  } ;

  function warning$1(cond, message) {
    if (!cond) {
      // eslint-disable-next-line no-console
      if (typeof console !== 'undefined') console.warn(message);

      try {
        // Welcome to debugging history!
        //
        // This error is thrown as a convenience so you can more easily
        // find the source for a warning that appears in the console by
        // enabling "pause on exceptions" in your JavaScript debugger.
        throw new Error(message); // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }

  var BeforeUnloadEventType = 'beforeunload';
  var PopStateEventType = 'popstate';
  /**
   * Browser history stores the location in regular URLs. This is the standard for
   * most web apps, but it requires some configuration on the server to ensure you
   * serve the same app at multiple URLs.
   *
   * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
   */

  function createBrowserHistory(options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$window = _options.window,
        window = _options$window === void 0 ? document.defaultView : _options$window;
    var globalHistory = window.history;

    function getIndexAndLocation() {
      var _window$location = window.location,
          pathname = _window$location.pathname,
          search = _window$location.search,
          hash = _window$location.hash;
      var state = globalHistory.state || {};
      return [state.idx, readOnly({
        pathname: pathname,
        search: search,
        hash: hash,
        state: state.usr || null,
        key: state.key || 'default'
      })];
    }

    var blockedPopTx = null;

    function handlePop() {
      if (blockedPopTx) {
        blockers.call(blockedPopTx);
        blockedPopTx = null;
      } else {
        var nextAction = Action.Pop;

        var _getIndexAndLocation = getIndexAndLocation(),
            nextIndex = _getIndexAndLocation[0],
            nextLocation = _getIndexAndLocation[1];

        if (blockers.length) {
          if (nextIndex != null) {
            var delta = index - nextIndex;

            if (delta) {
              // Revert the POP
              blockedPopTx = {
                action: nextAction,
                location: nextLocation,
                retry: function retry() {
                  go(delta * -1);
                }
              };
              go(delta);
            }
          } else {
            // Trying to POP to a location with no index. We did not create
            // this location, so we can't effectively block the navigation.
            warning$1(false, // TODO: Write up a doc that explains our blocking strategy in
            // detail and link to it here so people can understand better what
            // is going on and how to avoid it.
            "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") ;
          }
        } else {
          applyTx(nextAction);
        }
      }
    }

    window.addEventListener(PopStateEventType, handlePop);
    var action = Action.Pop;

    var _getIndexAndLocation2 = getIndexAndLocation(),
        index = _getIndexAndLocation2[0],
        location = _getIndexAndLocation2[1];

    var listeners = createEvents();
    var blockers = createEvents();

    if (index == null) {
      index = 0;
      globalHistory.replaceState(_extends$1({}, globalHistory.state, {
        idx: index
      }), '');
    }

    function createHref(to) {
      return typeof to === 'string' ? to : createPath(to);
    } // state defaults to `null` because `window.history.state` does


    function getNextLocation(to, state) {
      if (state === void 0) {
        state = null;
      }

      return readOnly(_extends$1({
        pathname: location.pathname,
        hash: '',
        search: ''
      }, typeof to === 'string' ? parsePath(to) : to, {
        state: state,
        key: createKey()
      }));
    }

    function getHistoryStateAndUrl(nextLocation, index) {
      return [{
        usr: nextLocation.state,
        key: nextLocation.key,
        idx: index
      }, createHref(nextLocation)];
    }

    function allowTx(action, location, retry) {
      return !blockers.length || (blockers.call({
        action: action,
        location: location,
        retry: retry
      }), false);
    }

    function applyTx(nextAction) {
      action = nextAction;

      var _getIndexAndLocation3 = getIndexAndLocation();

      index = _getIndexAndLocation3[0];
      location = _getIndexAndLocation3[1];
      listeners.call({
        action: action,
        location: location
      });
    }

    function push(to, state) {
      var nextAction = Action.Push;
      var nextLocation = getNextLocation(to, state);

      function retry() {
        push(to, state);
      }

      if (allowTx(nextAction, nextLocation, retry)) {
        var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),
            historyState = _getHistoryStateAndUr[0],
            url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
        // try...catch because iOS limits us to 100 pushState calls :/


        try {
          globalHistory.pushState(historyState, '', url);
        } catch (error) {
          // They are going to lose state here, but there is no real
          // way to warn them about it since the page will refresh...
          window.location.assign(url);
        }

        applyTx(nextAction);
      }
    }

    function replace(to, state) {
      var nextAction = Action.Replace;
      var nextLocation = getNextLocation(to, state);

      function retry() {
        replace(to, state);
      }

      if (allowTx(nextAction, nextLocation, retry)) {
        var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),
            historyState = _getHistoryStateAndUr2[0],
            url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading


        globalHistory.replaceState(historyState, '', url);
        applyTx(nextAction);
      }
    }

    function go(delta) {
      globalHistory.go(delta);
    }

    var history = {
      get action() {
        return action;
      },

      get location() {
        return location;
      },

      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      back: function back() {
        go(-1);
      },
      forward: function forward() {
        go(1);
      },
      listen: function listen(listener) {
        return listeners.push(listener);
      },
      block: function block(blocker) {
        var unblock = blockers.push(blocker);

        if (blockers.length === 1) {
          window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }

        return function () {
          unblock(); // Remove the beforeunload listener so the document may
          // still be salvageable in the pagehide event.
          // See https://html.spec.whatwg.org/#unloading-documents

          if (!blockers.length) {
            window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
          }
        };
      }
    };
    return history;
  }

  function promptBeforeUnload(event) {
    // Cancel the event.
    event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.

    event.returnValue = '';
  }

  function createEvents() {
    var handlers = [];
    return {
      get length() {
        return handlers.length;
      },

      push: function push(fn) {
        handlers.push(fn);
        return function () {
          handlers = handlers.filter(function (handler) {
            return handler !== fn;
          });
        };
      },
      call: function call(arg) {
        handlers.forEach(function (fn) {
          return fn && fn(arg);
        });
      }
    };
  }

  function createKey() {
    return Math.random().toString(36).substr(2, 8);
  }
  /**
   * Creates a string URL path from the given pathname, search, and hash components.
   *
   * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
   */


  function createPath(_ref) {
    var _ref$pathname = _ref.pathname,
        pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
        _ref$search = _ref.search,
        search = _ref$search === void 0 ? '' : _ref$search,
        _ref$hash = _ref.hash,
        hash = _ref$hash === void 0 ? '' : _ref$hash;
    if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
    if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
    return pathname;
  }
  /**
   * Parses a string URL path into its separate pathname, search, and hash components.
   *
   * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
   */


  function parsePath(path) {
    var parsedPath = {};

    if (path) {
      var hashIndex = path.indexOf('#');

      if (hashIndex >= 0) {
        parsedPath.hash = path.substr(hashIndex);
        path = path.substr(0, hashIndex);
      }

      var searchIndex = path.indexOf('?');

      if (searchIndex >= 0) {
        parsedPath.search = path.substr(searchIndex);
        path = path.substr(0, searchIndex);
      }

      if (path) {
        parsedPath.pathname = path;
      }
    }

    return parsedPath;
  }

  /**
   * React Router v6.3.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
  const NavigationContext = /*#__PURE__*/React.createContext(null);

  {
    NavigationContext.displayName = "Navigation";
  }

  const LocationContext = /*#__PURE__*/React.createContext(null);

  {
    LocationContext.displayName = "Location";
  }

  const RouteContext = /*#__PURE__*/React.createContext({
    outlet: null,
    matches: []
  });

  {
    RouteContext.displayName = "Route";
  }

  function invariant(cond, message) {
    if (!cond) throw new Error(message);
  }

  function warning(cond, message) {
    if (!cond) {
      // eslint-disable-next-line no-console
      if (typeof console !== "undefined") console.warn(message);

      try {
        // Welcome to debugging React Router!
        //
        // This error is thrown as a convenience so you can more easily
        // find the source for a warning that appears in the console by
        // enabling "pause on exceptions" in your JavaScript debugger.
        throw new Error(message); // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }

  const alreadyWarned = {};

  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message) ;
    }
  }
  /**
   * A RouteMatch contains info about how a route matched a URL.
   */

  /**
   * Matches the given routes to a location and returns the match data.
   *
   * @see https://reactrouter.com/docs/en/v6/api#matchroutes
   */


  function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) {
      basename = "/";
    }

    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);

    if (pathname == null) {
      return null;
    }

    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;

    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(branches[i], pathname);
    }

    return matches;
  }

  function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) {
      branches = [];
    }

    if (parentsMeta === void 0) {
      parentsMeta = [];
    }

    if (parentPath === void 0) {
      parentPath = "";
    }

    routes.forEach((route, index) => {
      let meta = {
        relativePath: route.path || "",
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };

      if (meta.relativePath.startsWith("/")) {
        !meta.relativePath.startsWith(parentPath) ? invariant(false, "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.")  : void 0;
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }

      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
      // route tree depth-first and child routes appear before their parents in
      // the "flattened" version.

      if (route.children && route.children.length > 0) {
        !(route.index !== true) ? invariant(false, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."))  : void 0;
        flattenRoutes(route.children, branches, routesMeta, path);
      } // Routes without a path shouldn't ever match by themselves unless they are
      // index routes, so don't add them to the list of possible branches.


      if (route.path == null && !route.index) {
        return;
      }

      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    });
    return branches;
  }

  function rankRouteBranches(branches) {
    branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
    : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
  }

  const paramRe = /^:\w+$/;
  const dynamicSegmentValue = 3;
  const indexRouteValue = 2;
  const emptySegmentValue = 1;
  const staticSegmentValue = 10;
  const splatPenalty = -2;

  const isSplat = s => s === "*";

  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;

    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }

    if (index) {
      initialScore += indexRouteValue;
    }

    return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
  }

  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
  }

  function matchRouteBranch(branch, pathname) {
    let {
      routesMeta
    } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];

    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      }, remainingPathname);
      if (!match) return null;
      Object.assign(matchedParams, match.params);
      let route = meta.route;
      matches.push({
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
        route
      });

      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }

    return matches;
  }
  /**
   * A PathPattern is used to match on some portion of a URL pathname.
   */

  /**
   * Performs pattern matching on a URL pathname and returns information about
   * the match.
   *
   * @see https://reactrouter.com/docs/en/v6/api#matchpath
   */


  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
      };
    }

    let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = paramNames.reduce((memo, paramName, index) => {
      // We need to compute the pathnameBase here using the raw splat value
      // instead of using params["*"] later because it will be decoded then
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }

      memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
      return memo;
    }, {});
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }

  function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) {
      caseSensitive = false;
    }

    if (end === void 0) {
      end = true;
    }

    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\".")) ;
    let paramNames = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/:(\w+)/g, (_, paramName) => {
      paramNames.push(paramName);
      return "([^\\/]+)";
    });

    if (path.endsWith("*")) {
      paramNames.push("*");
      regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
      : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else {
      regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
      : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
      // parent routes to matching only their own words and nothing more, e.g. parent
      // route "/home" should not match "/home2".
      // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
      // but do not consume the character in the matched path so they can match against
      // nested paths.
      "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
    }

    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [matcher, paramNames];
  }

  function safelyDecodeURIComponent(value, paramName) {
    try {
      return decodeURIComponent(value);
    } catch (error) {
      warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ").")) ;
      return value;
    }
  }
  /**
   * Returns a resolved path object relative to the given pathname.
   *
   * @see https://reactrouter.com/docs/en/v6/api#resolvepath
   */


  function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) {
      fromPathname = "/";
    }

    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }

  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach(segment => {
      if (segment === "..") {
        // Keep the root "" segment so the pathname starts at /
        if (segments.length > 1) segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }

  function resolveTo(toArg, routePathnames, locationPathname) {
    let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
    let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.

    let from;

    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;

      if (toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
        // URL segment".  This is a key difference from how <a href> works and a
        // major reason we call this a "to" value instead of a "href".

        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }

        to.pathname = toSegments.join("/");
      } // If there are more ".." segments than parent routes, resolve relative to
      // the root / URL.


      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }

    let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

    if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
      path.pathname += "/";
    }

    return path;
  }

  function getToPathname(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
  }

  function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;

    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }

    let nextChar = pathname.charAt(basename.length);

    if (nextChar && nextChar !== "/") {
      // pathname does not start with basename/
      return null;
    }

    return pathname.slice(basename.length) || "/";
  }

  const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");

  const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

  const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

  const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  /**
   * Returns the full href for the given "to" value. This is useful for building
   * custom links that are also accessible and preserve right-click behavior.
   *
   * @see https://reactrouter.com/docs/en/v6/api#usehref
   */


  function useHref(to) {
    !useInRouterContext() ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component.")  : void 0;
    let {
      basename,
      navigator
    } = React.useContext(NavigationContext);
    let {
      hash,
      pathname,
      search
    } = useResolvedPath(to);
    let joinedPathname = pathname;

    if (basename !== "/") {
      let toPathname = getToPathname(to);
      let endsWithSlash = toPathname != null && toPathname.endsWith("/");
      joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
    }

    return navigator.createHref({
      pathname: joinedPathname,
      search,
      hash
    });
  }
  /**
   * Returns true if this component is a descendant of a <Router>.
   *
   * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
   */


  function useInRouterContext() {
    return React.useContext(LocationContext) != null;
  }
  /**
   * Returns the current location object, which represents the current URL in web
   * browsers.
   *
   * Note: If you're using this it may mean you're doing some of your own
   * "routing" in your app, and we'd like to know what your use case is. We may
   * be able to provide something higher-level to better suit your needs.
   *
   * @see https://reactrouter.com/docs/en/v6/api#uselocation
   */


  function useLocation() {
    !useInRouterContext() ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component.")  : void 0;
    return React.useContext(LocationContext).location;
  }
  /**
   * The interface for the navigate() function returned from useNavigate().
   */

  /**
   * Returns an imperative method for changing the location. Used by <Link>s, but
   * may also be used by other elements to change the location.
   *
   * @see https://reactrouter.com/docs/en/v6/api#usenavigate
   */


  function useNavigate() {
    !useInRouterContext() ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component.")  : void 0;
    let {
      basename,
      navigator
    } = React.useContext(NavigationContext);
    let {
      matches
    } = React.useContext(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
    let activeRef = React.useRef(false);
    React.useEffect(() => {
      activeRef.current = true;
    });
    let navigate = React.useCallback(function (to, options) {
      if (options === void 0) {
        options = {};
      }

      warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") ;
      if (!activeRef.current) return;

      if (typeof to === "number") {
        navigator.go(to);
        return;
      }

      let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

      if (basename !== "/") {
        path.pathname = joinPaths([basename, path.pathname]);
      }

      (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
    }, [basename, navigator, routePathnamesJson, locationPathname]);
    return navigate;
  }
  /**
   * Resolves the pathname of the given `to` value against the current location.
   *
   * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
   */


  function useResolvedPath(to) {
    let {
      matches
    } = React.useContext(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
    return React.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
  }
  /**
   * Returns the element of the route that matched the current location, prepared
   * with the correct context to render the remainder of the route tree. Route
   * elements in the tree must render an <Outlet> to render their child route's
   * element.
   *
   * @see https://reactrouter.com/docs/en/v6/api#useroutes
   */


  function useRoutes(routes, locationArg) {
    !useInRouterContext() ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component.")  : void 0;
    let {
      matches: parentMatches
    } = React.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;

    {
      // You won't get a warning about 2 different <Routes> under a <Route>
      // without a trailing *, but this is a best-effort warning anyway since we
      // cannot even give the warning unless they land at the parent route.
      //
      // Example:
      //
      // <Routes>
      //   {/* This route path MUST end with /* because otherwise
      //       it will never match /blog/post/123 */}
      //   <Route path="blog" element={<Blog />} />
      //   <Route path="blog/feed" element={<BlogFeed />} />
      // </Routes>
      //
      // function Blog() {
      //   return (
      //     <Routes>
      //       <Route path="post/:id" element={<Post />} />
      //     </Routes>
      //   );
      // }
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
    }

    let locationFromContext = useLocation();
    let location;

    if (locationArg) {
      var _parsedLocationArg$pa;

      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop."))  : void 0;
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }

    let pathname = location.pathname || "/";
    let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    let matches = matchRoutes(routes, {
      pathname: remainingPathname
    });

    {
      warning(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") ;
      warning(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.") ;
    }

    return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
      params: Object.assign({}, parentParams, match.params),
      pathname: joinPaths([parentPathnameBase, match.pathname]),
      pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
    })), parentMatches);
  }

  function _renderMatches(matches, parentMatches) {
    if (parentMatches === void 0) {
      parentMatches = [];
    }

    if (matches == null) return null;
    return matches.reduceRight((outlet, match, index) => {
      return /*#__PURE__*/React.createElement(RouteContext.Provider, {
        children: match.route.element !== undefined ? match.route.element : outlet,
        value: {
          outlet,
          matches: parentMatches.concat(matches.slice(0, index + 1))
        }
      });
    }, null);
  }
  /**
   * Declares an element that should be rendered at a certain URL path.
   *
   * @see https://reactrouter.com/docs/en/v6/api#route
   */


  function Route(_props) {
    invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") ;
  }
  /**
   * Provides location context for the rest of the app.
   *
   * Note: You usually won't render a <Router> directly. Instead, you'll render a
   * router that is more specific to your environment such as a <BrowserRouter>
   * in web browsers or a <StaticRouter> for server rendering.
   *
   * @see https://reactrouter.com/docs/en/v6/api#router
   */


  function Router(_ref3) {
    let {
      basename: basenameProp = "/",
      children = null,
      location: locationProp,
      navigationType = Action.Pop,
      navigator,
      static: staticProp = false
    } = _ref3;
    !!useInRouterContext() ? invariant(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.")  : void 0;
    let basename = normalizePathname(basenameProp);
    let navigationContext = React.useMemo(() => ({
      basename,
      navigator,
      static: staticProp
    }), [basename, navigator, staticProp]);

    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }

    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default"
    } = locationProp;
    let location = React.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);

      if (trailingPathname == null) {
        return null;
      }

      return {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      };
    }, [basename, pathname, search, hash, state, key]);
    warning(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") ;

    if (location == null) {
      return null;
    }

    return /*#__PURE__*/React.createElement(NavigationContext.Provider, {
      value: navigationContext
    }, /*#__PURE__*/React.createElement(LocationContext.Provider, {
      children: children,
      value: {
        location,
        navigationType
      }
    }));
  }
  /**
   * A container for a nested tree of <Route> elements that renders the branch
   * that best matches the current location.
   *
   * @see https://reactrouter.com/docs/en/v6/api#routes
   */


  function Routes(_ref4) {
    let {
      children,
      location
    } = _ref4;
    return useRoutes(createRoutesFromChildren(children), location);
  } ///////////////////////////////////////////////////////////////////////////////
  // UTILS
  ///////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a route config from a React "children" object, which is usually
   * either a `<Route>` element or an array of them. Used internally by
   * `<Routes>` to create a route config from its children.
   *
   * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
   */


  function createRoutesFromChildren(children) {
    let routes = [];
    React.Children.forEach(children, element => {
      if (! /*#__PURE__*/React.isValidElement(element)) {
        // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
      }

      if (element.type === React.Fragment) {
        // Transparently support React.Fragment and its children.
        routes.push.apply(routes, createRoutesFromChildren(element.props.children));
        return;
      }

      !(element.type === Route) ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>")  : void 0;
      let route = {
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        index: element.props.index,
        path: element.props.path
      };

      if (element.props.children) {
        route.children = createRoutesFromChildren(element.props.children);
      }

      routes.push(route);
    });
    return routes;
  }

  /**
   * React Router DOM v6.3.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
        _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
  // COMPONENTS
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * A `<Router>` for use in web browsers. Provides the cleanest URLs.
   */


  function BrowserRouter(_ref) {
    let {
      basename,
      children,
      window
    } = _ref;
    let historyRef = React.useRef();

    if (historyRef.current == null) {
      historyRef.current = createBrowserHistory({
        window
      });
    }

    let history = historyRef.current;
    let [state, setState] = React.useState({
      action: history.action,
      location: history.location
    });
    React.useLayoutEffect(() => history.listen(setState), [history]);
    return /*#__PURE__*/React.createElement(Router, {
      basename: basename,
      children: children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    });
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  /**
   * The public API for rendering a history-aware <a>.
   */


  const Link = /*#__PURE__*/React.forwardRef(function LinkWithRef(_ref4, ref) {
    let {
      onClick,
      reloadDocument,
      replace = false,
      state,
      target,
      to
    } = _ref4,
        rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

    let href = useHref(to);
    let internalOnClick = useLinkClickHandler(to, {
      replace,
      state,
      target
    });

    function handleClick(event) {
      if (onClick) onClick(event);

      if (!event.defaultPrevented && !reloadDocument) {
        internalOnClick(event);
      }
    }

    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      React.createElement("a", _extends({}, rest, {
        href: href,
        onClick: handleClick,
        ref: ref,
        target: target
      }))
    );
  });

  {
    Link.displayName = "Link";
  }
  /**
   * A <Link> wrapper that knows if it's "active" or not.
   */


  const NavLink = /*#__PURE__*/React.forwardRef(function NavLinkWithRef(_ref5, ref) {
    let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      children
    } = _ref5,
        rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

    let location = useLocation();
    let path = useResolvedPath(to);
    let locationPathname = location.pathname;
    let toPathname = path.pathname;

    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      toPathname = toPathname.toLowerCase();
    }

    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;

    if (typeof classNameProp === "function") {
      className = classNameProp({
        isActive
      });
    } else {
      // If the className prop is not a function, we use a default `active`
      // class for <NavLink />s that are active. In v5 `active` was the default
      // value for `activeClassName`, but we are removing that API and can still
      // use the old default behavior for a cleaner upgrade path and keep the
      // simple styling rules working as they currently do.
      className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
    }

    let style = typeof styleProp === "function" ? styleProp({
      isActive
    }) : styleProp;
    return /*#__PURE__*/React.createElement(Link, _extends({}, rest, {
      "aria-current": ariaCurrent,
      className: className,
      ref: ref,
      style: style,
      to: to
    }), typeof children === "function" ? children({
      isActive
    }) : children);
  });

  {
    NavLink.displayName = "NavLink";
  } ////////////////////////////////////////////////////////////////////////////////
  // HOOKS
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * Handles the click behavior for router `<Link>` components. This is useful if
   * you need to create custom `<Link>` components with the same click behavior we
   * use in our exported `<Link>`.
   */


  function useLinkClickHandler(to, _temp) {
    let {
      target,
      replace: replaceProp,
      state
    } = _temp === void 0 ? {} : _temp;
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to);
    return React.useCallback(event => {
      if (event.button === 0 && ( // Ignore everything but left clicks
      !target || target === "_self") && // Let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // Ignore clicks with modifier keys
      ) {
        event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
        // a push, so do the same here.

        let replace = !!replaceProp || createPath(location) === createPath(path);
        navigate(to, {
          replace,
          state
        });
      }
    }, [location, navigate, path, replaceProp, state, target, to]);
  }

  function getAugmentedNamespace(n) {
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function () {
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var inherits$d;
  if (typeof Object.create === 'function'){
    inherits$d = function inherits(ctor, superCtor) {
      // implementation from standard node.js 'util' module
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits$d = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  var inherits$e = inherits$d;

  var _polyfillNode_inherits = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': inherits$e
  });

  var require$$0$8 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_inherits);

  var safeBuffer = {exports: {}};

  var global$2 = (typeof global !== "undefined" ? global :
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window : {});

  var lookup$1 = [];
  var revLookup$1 = [];
  var Arr$1 = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var inited$1 = false;
  function init$1 () {
    inited$1 = true;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup$1[i] = code[i];
      revLookup$1[code.charCodeAt(i)] = i;
    }

    revLookup$1['-'.charCodeAt(0)] = 62;
    revLookup$1['_'.charCodeAt(0)] = 63;
  }

  function toByteArray$1 (b64) {
    if (!inited$1) {
      init$1();
    }
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;

    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

    // base64 is 4/3 + up to two characters of the original data
    arr = new Arr$1(len * 3 / 4 - placeHolders);

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? len - 4 : len;

    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (revLookup$1[b64.charCodeAt(i)] << 18) | (revLookup$1[b64.charCodeAt(i + 1)] << 12) | (revLookup$1[b64.charCodeAt(i + 2)] << 6) | revLookup$1[b64.charCodeAt(i + 3)];
      arr[L++] = (tmp >> 16) & 0xFF;
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = (revLookup$1[b64.charCodeAt(i)] << 2) | (revLookup$1[b64.charCodeAt(i + 1)] >> 4);
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = (revLookup$1[b64.charCodeAt(i)] << 10) | (revLookup$1[b64.charCodeAt(i + 1)] << 4) | (revLookup$1[b64.charCodeAt(i + 2)] >> 2);
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr
  }

  function tripletToBase64$1 (num) {
    return lookup$1[num >> 18 & 0x3F] + lookup$1[num >> 12 & 0x3F] + lookup$1[num >> 6 & 0x3F] + lookup$1[num & 0x3F]
  }

  function encodeChunk$1 (uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
      output.push(tripletToBase64$1(tmp));
    }
    return output.join('')
  }

  function fromByteArray$1 (uint8) {
    if (!inited$1) {
      init$1();
    }
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk$1(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup$1[tmp >> 2];
      output += lookup$1[(tmp << 4) & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
      output += lookup$1[tmp >> 10];
      output += lookup$1[(tmp >> 4) & 0x3F];
      output += lookup$1[(tmp << 2) & 0x3F];
      output += '=';
    }

    parts.push(output);

    return parts.join('')
  }

  function read$1 (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity)
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
  }

  function write$1 (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  }

  var toString$1 = {}.toString;

  var isArray$2 = Array.isArray || function (arr) {
    return toString$1.call(arr) == '[object Array]';
  };

  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */

  var INSPECT_MAX_BYTES$1 = 50;

  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.

   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */
  Buffer$g.TYPED_ARRAY_SUPPORT = global$2.TYPED_ARRAY_SUPPORT !== undefined
    ? global$2.TYPED_ARRAY_SUPPORT
    : true;

  /*
   * Export kMaxLength after typed array support is determined.
   */
  var _kMaxLength = kMaxLength$1();

  function kMaxLength$1 () {
    return Buffer$g.TYPED_ARRAY_SUPPORT
      ? 0x7fffffff
      : 0x3fffffff
  }

  function createBuffer$1 (that, length) {
    if (kMaxLength$1() < length) {
      throw new RangeError('Invalid typed array length')
    }
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = new Uint8Array(length);
      that.__proto__ = Buffer$g.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      if (that === null) {
        that = new Buffer$g(length);
      }
      that.length = length;
    }

    return that
  }

  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */

  function Buffer$g (arg, encodingOrOffset, length) {
    if (!Buffer$g.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$g)) {
      return new Buffer$g(arg, encodingOrOffset, length)
    }

    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error(
          'If encoding is specified then the first argument must be a string'
        )
      }
      return allocUnsafe$1(this, arg)
    }
    return from$2(this, arg, encodingOrOffset, length)
  }

  Buffer$g.poolSize = 8192; // not used by this implementation

  // TODO: Legacy, not needed anymore. Remove in next major version.
  Buffer$g._augment = function (arr) {
    arr.__proto__ = Buffer$g.prototype;
    return arr
  };

  function from$2 (that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number')
    }

    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer$1(that, value, encodingOrOffset, length)
    }

    if (typeof value === 'string') {
      return fromString$1(that, value, encodingOrOffset)
    }

    return fromObject$1(that, value)
  }

  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/
  Buffer$g.from = function (value, encodingOrOffset, length) {
    return from$2(null, value, encodingOrOffset, length)
  };

  if (Buffer$g.TYPED_ARRAY_SUPPORT) {
    Buffer$g.prototype.__proto__ = Uint8Array.prototype;
    Buffer$g.__proto__ = Uint8Array;
  }

  function assertSize$1 (size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number')
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative')
    }
  }

  function alloc$1 (that, size, fill, encoding) {
    assertSize$1(size);
    if (size <= 0) {
      return createBuffer$1(that, size)
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string'
        ? createBuffer$1(that, size).fill(fill, encoding)
        : createBuffer$1(that, size).fill(fill)
    }
    return createBuffer$1(that, size)
  }

  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/
  Buffer$g.alloc = function (size, fill, encoding) {
    return alloc$1(null, size, fill, encoding)
  };

  function allocUnsafe$1 (that, size) {
    assertSize$1(size);
    that = createBuffer$1(that, size < 0 ? 0 : checked$1(size) | 0);
    if (!Buffer$g.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }
    return that
  }

  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */
  Buffer$g.allocUnsafe = function (size) {
    return allocUnsafe$1(null, size)
  };
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */
  Buffer$g.allocUnsafeSlow = function (size) {
    return allocUnsafe$1(null, size)
  };

  function fromString$1 (that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }

    if (!Buffer$g.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding')
    }

    var length = byteLength$1(string, encoding) | 0;
    that = createBuffer$1(that, length);

    var actual = that.write(string, encoding);

    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      that = that.slice(0, actual);
    }

    return that
  }

  function fromArrayLike$1 (that, array) {
    var length = array.length < 0 ? 0 : checked$1(array.length) | 0;
    that = createBuffer$1(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that
  }

  function fromArrayBuffer$1 (that, array, byteOffset, length) {
    array.byteLength; // this throws if `array` is not a valid ArrayBuffer

    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds')
    }

    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds')
    }

    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array);
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }

    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = array;
      that.__proto__ = Buffer$g.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromArrayLike$1(that, array);
    }
    return that
  }

  function fromObject$1 (that, obj) {
    if (internalIsBuffer$1(obj)) {
      var len = checked$1(obj.length) | 0;
      that = createBuffer$1(that, len);

      if (that.length === 0) {
        return that
      }

      obj.copy(that, 0, 0, len);
      return that
    }

    if (obj) {
      if ((typeof ArrayBuffer !== 'undefined' &&
          obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan$1(obj.length)) {
          return createBuffer$1(that, 0)
        }
        return fromArrayLike$1(that, obj)
      }

      if (obj.type === 'Buffer' && isArray$2(obj.data)) {
        return fromArrayLike$1(that, obj.data)
      }
    }

    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
  }

  function checked$1 (length) {
    // Note: cannot use `length < kMaxLength()` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength$1()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                           'size: 0x' + kMaxLength$1().toString(16) + ' bytes')
    }
    return length | 0
  }

  function SlowBuffer (length) {
    if (+length != length) { // eslint-disable-line eqeqeq
      length = 0;
    }
    return Buffer$g.alloc(+length)
  }
  Buffer$g.isBuffer = isBuffer$2;
  function internalIsBuffer$1 (b) {
    return !!(b != null && b._isBuffer)
  }

  Buffer$g.compare = function compare (a, b) {
    if (!internalIsBuffer$1(a) || !internalIsBuffer$1(b)) {
      throw new TypeError('Arguments must be Buffers')
    }

    if (a === b) return 0

    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break
      }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
  };

  Buffer$g.isEncoding = function isEncoding (encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true
      default:
        return false
    }
  };

  Buffer$g.concat = function concat (list, length) {
    if (!isArray$2(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }

    if (list.length === 0) {
      return Buffer$g.alloc(0)
    }

    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer$g.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if (!internalIsBuffer$1(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer
  };

  function byteLength$1 (string, encoding) {
    if (internalIsBuffer$1(string)) {
      return string.length
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength
    }
    if (typeof string !== 'string') {
      string = '' + string;
    }

    var len = string.length;
    if (len === 0) return 0

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes$1(string).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2
        case 'hex':
          return len >>> 1
        case 'base64':
          return base64ToBytes$1(string).length
        default:
          if (loweredCase) return utf8ToBytes$1(string).length // assume utf8
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer$g.byteLength = byteLength$1;

  function slowToString$1 (encoding, start, end) {
    var loweredCase = false;

    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.

    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return ''
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return ''
    }

    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
      return ''
    }

    if (!encoding) encoding = 'utf8';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice$1(this, start, end)

        case 'utf8':
        case 'utf-8':
          return utf8Slice$1(this, start, end)

        case 'ascii':
          return asciiSlice$1(this, start, end)

        case 'latin1':
        case 'binary':
          return latin1Slice$1(this, start, end)

        case 'base64':
          return base64Slice$1(this, start, end)

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice$1(this, start, end)

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
  // Buffer instances.
  Buffer$g.prototype._isBuffer = true;

  function swap$1 (b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }

  Buffer$g.prototype.swap16 = function swap16 () {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (var i = 0; i < len; i += 2) {
      swap$1(this, i, i + 1);
    }
    return this
  };

  Buffer$g.prototype.swap32 = function swap32 () {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (var i = 0; i < len; i += 4) {
      swap$1(this, i, i + 3);
      swap$1(this, i + 1, i + 2);
    }
    return this
  };

  Buffer$g.prototype.swap64 = function swap64 () {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (var i = 0; i < len; i += 8) {
      swap$1(this, i, i + 7);
      swap$1(this, i + 1, i + 6);
      swap$1(this, i + 2, i + 5);
      swap$1(this, i + 3, i + 4);
    }
    return this
  };

  Buffer$g.prototype.toString = function toString () {
    var length = this.length | 0;
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice$1(this, 0, length)
    return slowToString$1.apply(this, arguments)
  };

  Buffer$g.prototype.equals = function equals (b) {
    if (!internalIsBuffer$1(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer$g.compare(this, b) === 0
  };

  Buffer$g.prototype.inspect = function inspect () {
    var str = '';
    var max = INSPECT_MAX_BYTES$1;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>'
  };

  Buffer$g.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
    if (!internalIsBuffer$1(target)) {
      throw new TypeError('Argument must be a Buffer')
    }

    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index')
    }

    if (thisStart >= thisEnd && start >= end) {
      return 0
    }
    if (thisStart >= thisEnd) {
      return -1
    }
    if (start >= end) {
      return 1
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;

    if (this === target) return 0

    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);

    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break
      }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
  };

  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function bidirectionalIndexOf$1 (buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1

    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;  // Coerce to Number.
    if (isNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : (buffer.length - 1);
    }

    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir) return -1
      else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;
      else return -1
    }

    // Normalize val
    if (typeof val === 'string') {
      val = Buffer$g.from(val, encoding);
    }

    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (internalIsBuffer$1(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1
      }
      return arrayIndexOf$1(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
      val = val & 0xFF; // Search for a byte value [0-255]
      if (Buffer$g.TYPED_ARRAY_SUPPORT &&
          typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
        }
      }
      return arrayIndexOf$1(buffer, [ val ], byteOffset, encoding, dir)
    }

    throw new TypeError('val must be string, number or Buffer')
  }

  function arrayIndexOf$1 (arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }

    function read (buf, i) {
      if (indexSize === 1) {
        return buf[i]
      } else {
        return buf.readUInt16BE(i * indexSize)
      }
    }

    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break
          }
        }
        if (found) return i
      }
    }

    return -1
  }

  Buffer$g.prototype.includes = function includes (val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
  };

  Buffer$g.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf$1(this, val, byteOffset, encoding, true)
  };

  Buffer$g.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf$1(this, val, byteOffset, encoding, false)
  };

  function hexWrite$1 (buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) return i
      buf[offset + i] = parsed;
    }
    return i
  }

  function utf8Write$1 (buf, string, offset, length) {
    return blitBuffer$1(utf8ToBytes$1(string, buf.length - offset), buf, offset, length)
  }

  function asciiWrite$1 (buf, string, offset, length) {
    return blitBuffer$1(asciiToBytes$1(string), buf, offset, length)
  }

  function latin1Write$1 (buf, string, offset, length) {
    return asciiWrite$1(buf, string, offset, length)
  }

  function base64Write$1 (buf, string, offset, length) {
    return blitBuffer$1(base64ToBytes$1(string), buf, offset, length)
  }

  function ucs2Write$1 (buf, string, offset, length) {
    return blitBuffer$1(utf16leToBytes$1(string, buf.length - offset), buf, offset, length)
  }

  Buffer$g.prototype.write = function write (string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds')
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite$1(this, string, offset, length)

        case 'utf8':
        case 'utf-8':
          return utf8Write$1(this, string, offset, length)

        case 'ascii':
          return asciiWrite$1(this, string, offset, length)

        case 'latin1':
        case 'binary':
          return latin1Write$1(this, string, offset, length)

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write$1(this, string, offset, length)

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write$1(this, string, offset, length)

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer$g.prototype.toJSON = function toJSON () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  };

  function base64Slice$1 (buf, start, end) {
    if (start === 0 && end === buf.length) {
      return fromByteArray$1(buf)
    } else {
      return fromByteArray$1(buf.slice(start, end))
    }
  }

  function utf8Slice$1 (buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4
        : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
        : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray$1(res)
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH$1 = 0x1000;

  function decodeCodePointsArray$1 (codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH$1) {
      return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH$1)
      );
    }
    return res
  }

  function asciiSlice$1 (buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret
  }

  function latin1Slice$1 (buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret
  }

  function hexSlice$1 (buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; ++i) {
      out += toHex$1(buf[i]);
    }
    return out
  }

  function utf16leSlice$1 (buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res
  }

  Buffer$g.prototype.slice = function slice (start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;

    var newBuf;
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer$g.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer$g(sliceLen, undefined);
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }

    return newBuf
  };

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset$1 (offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  }

  Buffer$g.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset$1(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val
  };

  Buffer$g.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset$1(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val
  };

  Buffer$g.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 1, this.length);
    return this[offset]
  };

  Buffer$g.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8)
  };

  Buffer$g.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1]
  };

  Buffer$g.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 4, this.length);

    return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
  };

  Buffer$g.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 4, this.length);

    return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
  };

  Buffer$g.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset$1(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val
  };

  Buffer$g.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset$1(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val
  };

  Buffer$g.prototype.readInt8 = function readInt8 (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
  };

  Buffer$g.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  };

  Buffer$g.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  };

  Buffer$g.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 4, this.length);

    return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
  };

  Buffer$g.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 4, this.length);

    return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
  };

  Buffer$g.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 4, this.length);
    return read$1(this, offset, true, 23, 4)
  };

  Buffer$g.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 4, this.length);
    return read$1(this, offset, false, 23, 4)
  };

  Buffer$g.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 8, this.length);
    return read$1(this, offset, true, 52, 8)
  };

  Buffer$g.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
    if (!noAssert) checkOffset$1(offset, 8, this.length);
    return read$1(this, offset, false, 52, 8)
  };

  function checkInt$1 (buf, value, offset, ext, max, min) {
    if (!internalIsBuffer$1(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
  }

  Buffer$g.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt$1(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }

    return offset + byteLength
  };

  Buffer$g.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt$1(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }

    return offset + byteLength
  };

  Buffer$g.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 1, 0xff, 0);
    if (!Buffer$g.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1
  };

  function objectWriteUInt16$1 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
        (littleEndian ? i : 1 - i) * 8;
    }
  }

  Buffer$g.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 2, 0xffff, 0);
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16$1(this, value, offset, true);
    }
    return offset + 2
  };

  Buffer$g.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 2, 0xffff, 0);
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16$1(this, value, offset, false);
    }
    return offset + 2
  };

  function objectWriteUInt32$1 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }

  Buffer$g.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32$1(this, value, offset, true);
    }
    return offset + 4
  };

  Buffer$g.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32$1(this, value, offset, false);
    }
    return offset + 4
  };

  Buffer$g.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt$1(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }

    return offset + byteLength
  };

  Buffer$g.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt$1(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }

    return offset + byteLength
  };

  Buffer$g.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer$g.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1
  };

  Buffer$g.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16$1(this, value, offset, true);
    }
    return offset + 2
  };

  Buffer$g.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16$1(this, value, offset, false);
    }
    return offset + 2
  };

  Buffer$g.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32$1(this, value, offset, true);
    }
    return offset + 4
  };

  Buffer$g.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt$1(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer$g.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32$1(this, value, offset, false);
    }
    return offset + 4
  };

  function checkIEEE754$1 (buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
  }

  function writeFloat$1 (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754$1(buf, value, offset, 4);
    }
    write$1(buf, value, offset, littleEndian, 23, 4);
    return offset + 4
  }

  Buffer$g.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
    return writeFloat$1(this, value, offset, true, noAssert)
  };

  Buffer$g.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
    return writeFloat$1(this, value, offset, false, noAssert)
  };

  function writeDouble$1 (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754$1(buf, value, offset, 8);
    }
    write$1(buf, value, offset, littleEndian, 52, 8);
    return offset + 8
  }

  Buffer$g.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
    return writeDouble$1(this, value, offset, true, noAssert)
  };

  Buffer$g.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
    return writeDouble$1(this, value, offset, false, noAssert)
  };

  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer$g.prototype.copy = function copy (target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer$g.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, start + len),
        targetStart
      );
    }

    return len
  };

  // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])
  Buffer$g.prototype.fill = function fill (val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (code < 256) {
          val = code;
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string')
      }
      if (typeof encoding === 'string' && !Buffer$g.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index')
    }

    if (end <= start) {
      return this
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;

    if (!val) val = 0;

    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = internalIsBuffer$1(val)
        ? val
        : utf8ToBytes$1(new Buffer$g(val, encoding).toString());
      var len = bytes.length;
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this
  };

  // HELPER FUNCTIONS
  // ================

  var INVALID_BASE64_RE$1 = /[^+\/0-9A-Za-z-_]/g;

  function base64clean$1 (str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim$1(str).replace(INVALID_BASE64_RE$1, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return ''
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str
  }

  function stringtrim$1 (str) {
    if (str.trim) return str.trim()
    return str.replace(/^\s+|\s+$/g, '')
  }

  function toHex$1 (n) {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
  }

  function utf8ToBytes$1 (string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue
          }

          // valid lead
          leadSurrogate = codePoint;

          continue
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        );
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        );
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        );
      } else {
        throw new Error('Invalid code point')
      }
    }

    return bytes
  }

  function asciiToBytes$1 (str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray
  }

  function utf16leToBytes$1 (str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break

      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray
  }


  function base64ToBytes$1 (str) {
    return toByteArray$1(base64clean$1(str))
  }

  function blitBuffer$1 (src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length)) break
      dst[i + offset] = src[i];
    }
    return i
  }

  function isnan$1 (val) {
    return val !== val // eslint-disable-line no-self-compare
  }


  // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  function isBuffer$2(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer$1(obj) || isSlowBuffer$1(obj))
  }

  function isFastBuffer$1 (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer$1 (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer$1(obj.slice(0, 0))
  }

  var _polyfillNode_buffer = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Buffer: Buffer$g,
    INSPECT_MAX_BYTES: INSPECT_MAX_BYTES$1,
    SlowBuffer: SlowBuffer,
    isBuffer: isBuffer$2,
    kMaxLength: _kMaxLength
  });

  var require$$0$7 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_buffer);

  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

  (function (module, exports) {
    /* eslint-disable node/no-deprecated-api */
    var buffer = require$$0$7;
    var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }

    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      // Copy properties from require('buffer')
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }

    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length);
    }

    SafeBuffer.prototype = Object.create(Buffer.prototype); // Copy static methods from Buffer

    copyProps(Buffer, SafeBuffer);

    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
      }

      return Buffer(arg, encodingOrOffset, length);
    };

    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }

      var buf = Buffer(size);

      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }

      return buf;
    };

    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }

      return Buffer(size);
    };

    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
      }

      return buffer.SlowBuffer(size);
    };
  })(safeBuffer, safeBuffer.exports);

  var readableBrowser = {exports: {}};

  var domain;

  // This constructor is used to store event handlers. Instantiating this is
  // faster than explicitly calling `Object.create(null)` to get a "clean" empty
  // object (tested with v8 v4.9).
  function EventHandlers() {}
  EventHandlers.prototype = Object.create(null);

  function EventEmitter() {
    EventEmitter.init.call(this);
  }

  // nodejs oddity
  // require('events') === require('events').EventEmitter
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.usingDomains = false;

  EventEmitter.prototype.domain = undefined;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  EventEmitter.init = function() {
    this.domain = null;
    if (EventEmitter.usingDomains) {
      // if there is an active domain, then attach to it.
      if (domain.active ) ;
    }

    if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
      this._events = new EventHandlers();
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || isNaN(n))
      throw new TypeError('"n" argument must be a positive number');
    this._maxListeners = n;
    return this;
  };

  function $getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $getMaxListeners(this);
  };

  // These standalone emit* functions are used to optimize calling of event
  // handlers for fast cases because emit() itself often has a variable number of
  // arguments and can be deoptimized because of that. These functions always have
  // the same number of arguments and thus do not get deoptimized, so the code
  // inside them can execute faster.
  function emitNone(handler, isFn, self) {
    if (isFn)
      handler.call(self);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self);
    }
  }
  function emitOne(handler, isFn, self, arg1) {
    if (isFn)
      handler.call(self, arg1);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1);
    }
  }
  function emitTwo(handler, isFn, self, arg1, arg2) {
    if (isFn)
      handler.call(self, arg1, arg2);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2);
    }
  }
  function emitThree(handler, isFn, self, arg1, arg2, arg3) {
    if (isFn)
      handler.call(self, arg1, arg2, arg3);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2, arg3);
    }
  }

  function emitMany(handler, isFn, self, args) {
    if (isFn)
      handler.apply(self, args);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].apply(self, args);
    }
  }

  EventEmitter.prototype.emit = function emit(type) {
    var er, handler, len, args, i, events, domain;
    var doError = (type === 'error');

    events = this._events;
    if (events)
      doError = (doError && events.error == null);
    else if (!doError)
      return false;

    domain = this.domain;

    // If there is no 'error' event listener then throw.
    if (doError) {
      er = arguments[1];
      if (domain) {
        if (!er)
          er = new Error('Uncaught, unspecified "error" event');
        er.domainEmitter = this;
        er.domain = domain;
        er.domainThrown = false;
        domain.emit('error', er);
      } else if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
      return false;
    }

    handler = events[type];

    if (!handler)
      return false;

    var isFn = typeof handler === 'function';
    len = arguments.length;
    switch (len) {
      // fast cases
      case 1:
        emitNone(handler, isFn, this);
        break;
      case 2:
        emitOne(handler, isFn, this, arguments[1]);
        break;
      case 3:
        emitTwo(handler, isFn, this, arguments[1], arguments[2]);
        break;
      case 4:
        emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
        break;
      // slower
      default:
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        emitMany(handler, isFn, this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');

    events = target._events;
    if (!events) {
      events = target._events = new EventHandlers();
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener) {
        target.emit('newListener', type,
                    listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (!existing) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [listener, existing] :
                                            [existing, listener];
      } else {
        // If we've already got an array, just append.
        if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
      }

      // Check for listener leak
      if (!existing.warned) {
        m = $getMaxListeners(target);
        if (m && m > 0 && existing.length > m) {
          existing.warned = true;
          var w = new Error('Possible EventEmitter memory leak detected. ' +
                              existing.length + ' ' + type + ' listeners added. ' +
                              'Use emitter.setMaxListeners() to increase limit');
          w.name = 'MaxListenersExceededWarning';
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          emitWarning(w);
        }
      }
    }

    return target;
  }
  function emitWarning(e) {
    typeof console.warn === 'function' ? console.warn(e) : console.log(e);
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function _onceWrap(target, type, listener) {
    var fired = false;
    function g() {
      target.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(target, arguments);
      }
    }
    g.listener = listener;
    return g;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');

        events = this._events;
        if (!events)
          return this;

        list = events[type];
        if (!list)
          return this;

        if (list === listener || (list.listener && list.listener === listener)) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length; i-- > 0;) {
            if (list[i] === listener ||
                (list[i].listener && list[i].listener === listener)) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (list.length === 1) {
            list[0] = undefined;
            if (--this._eventsCount === 0) {
              this._events = new EventHandlers();
              return this;
            } else {
              delete events[type];
            }
          } else {
            spliceOne(list, position);
          }

          if (events.removeListener)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };
      
  // Alias for removeListener added in NodeJS 10.0
  // https://nodejs.org/api/events.html#events_emitter_off_eventname_listener
  EventEmitter.prototype.off = function(type, listener){
      return this.removeListener(type, listener);
  };

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events;

        events = this._events;
        if (!events)
          return this;

        // not listening for removeListener, no need to emit
        if (!events.removeListener) {
          if (arguments.length === 0) {
            this._events = new EventHandlers();
            this._eventsCount = 0;
          } else if (events[type]) {
            if (--this._eventsCount === 0)
              this._events = new EventHandlers();
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          for (var i = 0, key; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = new EventHandlers();
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          do {
            this.removeListener(type, listeners[listeners.length - 1]);
          } while (listeners[0]);
        }

        return this;
      };

  EventEmitter.prototype.listeners = function listeners(type) {
    var evlistener;
    var ret;
    var events = this._events;

    if (!events)
      ret = [];
    else {
      evlistener = events[type];
      if (!evlistener)
        ret = [];
      else if (typeof evlistener === 'function')
        ret = [evlistener.listener || evlistener];
      else
        ret = unwrapListeners(evlistener);
    }

    return ret;
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount$1.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount$1;
  function listenerCount$1(type) {
    var events = this._events;

    if (events) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };

  // About 1.5x faster than the two-arg version of Array#splice().
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
      list[i] = list[k];
    list.pop();
  }

  function arrayClone(arr, i) {
    var copy = new Array(i);
    while (i--)
      copy[i] = arr[i];
    return copy;
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  var _polyfillNode_events = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': EventEmitter,
    EventEmitter: EventEmitter
  });

  var require$$0$6 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_events);

  var streamBrowser = require$$0$6.EventEmitter;

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout$1() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout$1 () {
      throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout$1 = defaultSetTimout$1;
  var cachedClearTimeout$1 = defaultClearTimeout$1;
  if (typeof global$2.setTimeout === 'function') {
      cachedSetTimeout$1 = setTimeout;
  }
  if (typeof global$2.clearTimeout === 'function') {
      cachedClearTimeout$1 = clearTimeout;
  }

  function runTimeout$1(fun) {
      if (cachedSetTimeout$1 === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout$1 === defaultSetTimout$1 || !cachedSetTimeout$1) && setTimeout) {
          cachedSetTimeout$1 = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout$1(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout$1.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout$1.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout$1(marker) {
      if (cachedClearTimeout$1 === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout$1 === defaultClearTimeout$1 || !cachedClearTimeout$1) && clearTimeout) {
          cachedClearTimeout$1 = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout$1(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout$1.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout$1.call(this, marker);
          }
      }



  }
  var queue$1 = [];
  var draining$1 = false;
  var currentQueue$1;
  var queueIndex$1 = -1;

  function cleanUpNextTick$1() {
      if (!draining$1 || !currentQueue$1) {
          return;
      }
      draining$1 = false;
      if (currentQueue$1.length) {
          queue$1 = currentQueue$1.concat(queue$1);
      } else {
          queueIndex$1 = -1;
      }
      if (queue$1.length) {
          drainQueue$1();
      }
  }

  function drainQueue$1() {
      if (draining$1) {
          return;
      }
      var timeout = runTimeout$1(cleanUpNextTick$1);
      draining$1 = true;

      var len = queue$1.length;
      while(len) {
          currentQueue$1 = queue$1;
          queue$1 = [];
          while (++queueIndex$1 < len) {
              if (currentQueue$1) {
                  currentQueue$1[queueIndex$1].run();
              }
          }
          queueIndex$1 = -1;
          len = queue$1.length;
      }
      currentQueue$1 = null;
      draining$1 = false;
      runClearTimeout$1(timeout);
  }
  function nextTick$1(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue$1.push(new Item$1(fun, args));
      if (queue$1.length === 1 && !draining$1) {
          runTimeout$1(drainQueue$1);
      }
  }
  // v8 likes predictible objects
  function Item$1(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item$1.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  var title$1 = 'browser';
  var platform$1 = 'browser';
  var browser$3 = true;
  var env$1 = {};
  var argv$1 = [];
  var version$1 = ''; // empty string to avoid regexp issues
  var versions$1 = {};
  var release$1 = {};
  var config$2 = {};

  function noop$3() {}

  var on$1 = noop$3;
  var addListener$1 = noop$3;
  var once$3 = noop$3;
  var off$1 = noop$3;
  var removeListener$1 = noop$3;
  var removeAllListeners$1 = noop$3;
  var emit$1 = noop$3;

  function binding$1(name) {
      throw new Error('process.binding is not supported');
  }

  function cwd$1 () { return '/' }
  function chdir$1 (dir) {
      throw new Error('process.chdir is not supported');
  }function umask$1() { return 0; }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance$1 = global$2.performance || {};
  var performanceNow$1 =
    performance$1.now        ||
    performance$1.mozNow     ||
    performance$1.msNow      ||
    performance$1.oNow       ||
    performance$1.webkitNow  ||
    function(){ return (new Date()).getTime() };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime$1(previousTimestamp){
    var clocktime = performanceNow$1.call(performance$1)*1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime%1)*1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds<0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds,nanoseconds]
  }

  var startTime$1 = new Date();
  function uptime$1() {
    var currentTime = new Date();
    var dif = currentTime - startTime$1;
    return dif / 1000;
  }

  var browser$1$1 = {
    nextTick: nextTick$1,
    title: title$1,
    browser: browser$3,
    env: env$1,
    argv: argv$1,
    version: version$1,
    versions: versions$1,
    on: on$1,
    addListener: addListener$1,
    once: once$3,
    off: off$1,
    removeListener: removeListener$1,
    removeAllListeners: removeAllListeners$1,
    emit: emit$1,
    binding: binding$1,
    cwd: cwd$1,
    chdir: chdir$1,
    umask: umask$1,
    hrtime: hrtime$1,
    platform: platform$1,
    release: release$1,
    config: config$2,
    uptime: uptime$1
  };

  var inherits$b;
  if (typeof Object.create === 'function'){
    inherits$b = function inherits(ctor, superCtor) {
      // implementation from standard node.js 'util' module
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits$b = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  var inherits$c = inherits$b;

  var formatRegExp = /%[sdj%]/g;
  function format(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(' ');
    }

    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === '%%') return '%';
      if (i >= len) return x;
      switch (x) {
        case '%s': return String(args[i++]);
        case '%d': return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect(x);
      }
    }
    return str;
  }

  // Mark that a method should not be used.
  // Returns a modified function which warns once by default.
  // If --no-deprecation is set, then it is a no-op.
  function deprecate$1(fn, msg) {
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global$2.process)) {
      return function() {
        return deprecate$1(fn, msg).apply(this, arguments);
      };
    }

    if (browser$1$1.noDeprecation === true) {
      return fn;
    }

    var warned = false;
    function deprecated() {
      if (!warned) {
        if (browser$1$1.throwDeprecation) {
          throw new Error(msg);
        } else if (browser$1$1.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }

    return deprecated;
  }

  var debugs = {};
  var debugEnviron;
  function debuglog(set) {
    if (isUndefined(debugEnviron))
      debugEnviron = browser$1$1.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = 0;
        debugs[set] = function() {
          var msg = format.apply(null, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function() {};
      }
    }
    return debugs[set];
  }

  /**
   * Echos the value of a value. Trys to print the value out
   * in the best way possible given the different types.
   *
   * @param {Object} obj The object to print out.
   * @param {Object} opts Optional options object that alters the output.
   */
  /* legacy: obj, showHidden, depth, colors*/
  function inspect(obj, opts) {
    // default options
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      // legacy...
      ctx.showHidden = opts;
    } else if (opts) {
      // got an "options" object
      _extend(ctx, opts);
    }
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }

  // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
  inspect.colors = {
    'bold' : [1, 22],
    'italic' : [3, 23],
    'underline' : [4, 24],
    'inverse' : [7, 27],
    'white' : [37, 39],
    'grey' : [90, 39],
    'black' : [30, 39],
    'blue' : [34, 39],
    'cyan' : [36, 39],
    'green' : [32, 39],
    'magenta' : [35, 39],
    'red' : [31, 39],
    'yellow' : [33, 39]
  };

  // Don't use 'blue' not visible on cmd.exe
  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
  };


  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];

    if (style) {
      return '\u001b[' + inspect.colors[style][0] + 'm' + str +
             '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }


  function stylizeNoColor(str, styleType) {
    return str;
  }


  function arrayToHash(array) {
    var hash = {};

    array.forEach(function(val, idx) {
      hash[val] = true;
    });

    return hash;
  }


  function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect &&
        value &&
        isFunction(value.inspect) &&
        // Filter out the util module, it's inspect function is special
        value.inspect !== inspect &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }

    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }

    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);

    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }

    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value)
        && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    }

    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError(value)) {
        return formatError(value);
      }
    }

    var base = '', array = false, braces = ['{', '}'];

    // Make Array say that they are Array
    if (isArray$1(value)) {
      array = true;
      braces = ['[', ']'];
    }

    // Make functions say that they are functions
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }

    // Make RegExps say that they are RegExps
    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }

    // Make dates with properties first say the date
    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }

    // Make error with message first say the error
    if (isError(value)) {
      base = ' ' + formatError(value);
    }

    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }

    ctx.seen.push(value);

    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }

    ctx.seen.pop();

    return reduceToSingleString(output, base, braces);
  }


  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber(value))
      return ctx.stylize('' + value, 'number');
    if (isBoolean(value))
      return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value))
      return ctx.stylize('null', 'null');
  }


  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }


  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            key, true));
      }
    });
    return output;
  }


  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function(line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function(line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'")
                   .replace(/\\"/g, '"')
                   .replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }

    return name + ': ' + str;
  }


  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);

    if (length > 60) {
      return braces[0] +
             (base === '' ? '' : base + '\n ') +
             ' ' +
             output.join(',\n  ') +
             ' ' +
             braces[1];
    }

    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }


  // NOTE: These type checking functions intentionally don't use `instanceof`
  // because it is fragile and can be easily faked with `Object.create()`.
  function isArray$1(ar) {
    return Array.isArray(ar);
  }

  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }

  function isNull(arg) {
    return arg === null;
  }

  function isNullOrUndefined(arg) {
    return arg == null;
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isString(arg) {
    return typeof arg === 'string';
  }

  function isSymbol(arg) {
    return typeof arg === 'symbol';
  }

  function isUndefined(arg) {
    return arg === void 0;
  }

  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }

  function isError(e) {
    return isObject(e) &&
        (objectToString(e) === '[object Error]' || e instanceof Error);
  }

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isPrimitive(arg) {
    return arg === null ||
           typeof arg === 'boolean' ||
           typeof arg === 'number' ||
           typeof arg === 'string' ||
           typeof arg === 'symbol' ||  // ES6 symbol
           typeof arg === 'undefined';
  }

  function isBuffer$1(maybeBuf) {
    return Buffer$g.isBuffer(maybeBuf);
  }

  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }


  function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }


  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'];

  // 26 Feb 16:19:34
  function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()),
                pad(d.getMinutes()),
                pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
  }


  // log is just a thin wrapper to console.log that prepends a timestamp
  function log() {
    console.log('%s - %s', timestamp(), format.apply(null, arguments));
  }

  function _extend(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;

    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var _polyfillNode_util = {
    inherits: inherits$c,
    _extend: _extend,
    log: log,
    isBuffer: isBuffer$1,
    isPrimitive: isPrimitive,
    isFunction: isFunction,
    isError: isError,
    isDate: isDate,
    isObject: isObject,
    isRegExp: isRegExp,
    isUndefined: isUndefined,
    isSymbol: isSymbol,
    isString: isString,
    isNumber: isNumber,
    isNullOrUndefined: isNullOrUndefined,
    isNull: isNull,
    isBoolean: isBoolean,
    isArray: isArray$1,
    inspect: inspect,
    deprecate: deprecate$1,
    format: format,
    debuglog: debuglog
  };

  var _polyfillNode_util$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    format: format,
    deprecate: deprecate$1,
    debuglog: debuglog,
    inspect: inspect,
    isArray: isArray$1,
    isBoolean: isBoolean,
    isNull: isNull,
    isNullOrUndefined: isNullOrUndefined,
    isNumber: isNumber,
    isString: isString,
    isSymbol: isSymbol,
    isUndefined: isUndefined,
    isRegExp: isRegExp,
    isObject: isObject,
    isDate: isDate,
    isError: isError,
    isFunction: isFunction,
    isPrimitive: isPrimitive,
    isBuffer: isBuffer$1,
    log: log,
    inherits: inherits$c,
    _extend: _extend,
    'default': _polyfillNode_util
  });

  var require$$3$3 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_util$1);

  var buffer_list;
  var hasRequiredBuffer_list;

  function requireBuffer_list() {
    if (hasRequiredBuffer_list) return buffer_list;
    hasRequiredBuffer_list = 1;

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    var _require = require$$0$7,
        Buffer = _require.Buffer;
    var _require2 = require$$3$3,
        inspect = _require2.inspect;
    var custom = inspect && inspect.custom || 'inspect';

    function copyBuffer(src, target, offset) {
      Buffer.prototype.copy.call(src, target, offset);
    }

    buffer_list = /*#__PURE__*/function () {
      function BufferList() {
        _classCallCheck(this, BufferList);

        this.head = null;
        this.tail = null;
        this.length = 0;
      }

      _createClass(BufferList, [{
        key: "push",
        value: function push(v) {
          var entry = {
            data: v,
            next: null
          };
          if (this.length > 0) this.tail.next = entry;else this.head = entry;
          this.tail = entry;
          ++this.length;
        }
      }, {
        key: "unshift",
        value: function unshift(v) {
          var entry = {
            data: v,
            next: this.head
          };
          if (this.length === 0) this.tail = entry;
          this.head = entry;
          ++this.length;
        }
      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0) return;
          var ret = this.head.data;
          if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
          --this.length;
          return ret;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.head = this.tail = null;
          this.length = 0;
        }
      }, {
        key: "join",
        value: function join(s) {
          if (this.length === 0) return '';
          var p = this.head;
          var ret = '' + p.data;

          while (p = p.next) {
            ret += s + p.data;
          }

          return ret;
        }
      }, {
        key: "concat",
        value: function concat(n) {
          if (this.length === 0) return Buffer.alloc(0);
          var ret = Buffer.allocUnsafe(n >>> 0);
          var p = this.head;
          var i = 0;

          while (p) {
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
          }

          return ret;
        } // Consumes a specified amount of bytes or characters from the buffered data.

      }, {
        key: "consume",
        value: function consume(n, hasStrings) {
          var ret;

          if (n < this.head.data.length) {
            // `slice` is the same for buffers and strings.
            ret = this.head.data.slice(0, n);
            this.head.data = this.head.data.slice(n);
          } else if (n === this.head.data.length) {
            // First chunk is a perfect match.
            ret = this.shift();
          } else {
            // Result spans more than one buffer.
            ret = hasStrings ? this._getString(n) : this._getBuffer(n);
          }

          return ret;
        }
      }, {
        key: "first",
        value: function first() {
          return this.head.data;
        } // Consumes a specified amount of characters from the buffered data.

      }, {
        key: "_getString",
        value: function _getString(n) {
          var p = this.head;
          var c = 1;
          var ret = p.data;
          n -= ret.length;

          while (p = p.next) {
            var str = p.data;
            var nb = n > str.length ? str.length : n;
            if (nb === str.length) ret += str;else ret += str.slice(0, n);
            n -= nb;

            if (n === 0) {
              if (nb === str.length) {
                ++c;
                if (p.next) this.head = p.next;else this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = str.slice(nb);
              }

              break;
            }

            ++c;
          }

          this.length -= c;
          return ret;
        } // Consumes a specified amount of bytes from the buffered data.

      }, {
        key: "_getBuffer",
        value: function _getBuffer(n) {
          var ret = Buffer.allocUnsafe(n);
          var p = this.head;
          var c = 1;
          p.data.copy(ret);
          n -= p.data.length;

          while (p = p.next) {
            var buf = p.data;
            var nb = n > buf.length ? buf.length : n;
            buf.copy(ret, ret.length - n, 0, nb);
            n -= nb;

            if (n === 0) {
              if (nb === buf.length) {
                ++c;
                if (p.next) this.head = p.next;else this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = buf.slice(nb);
              }

              break;
            }

            ++c;
          }

          this.length -= c;
          return ret;
        } // Make sure the linked list only shows the minimal necessary information.

      }, {
        key: custom,
        value: function value(_, options) {
          return inspect(this, _objectSpread({}, options, {
            // Only inspect one level.
            depth: 0,
            // It should not recurse.
            customInspect: false
          }));
        }
      }]);

      return BufferList;
    }();

    return buffer_list;
  }

  var global$1 = typeof global$2 !== "undefined" ? global$2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }

  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }

  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;

  if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
  }

  if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    } // if setTimeout wasn't available but was latter defined


    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }

  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    } // if clearTimeout wasn't available but was latter defined


    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }

  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }

    draining = false;

    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }

    if (queue.length) {
      drainQueue();
    }
  }

  function drainQueue() {
    if (draining) {
      return;
    }

    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;

    while (len) {
      currentQueue = queue;
      queue = [];

      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }

      queueIndex = -1;
      len = queue.length;
    }

    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }

  function nextTick(fun) {
    var args = new Array(arguments.length - 1);

    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }

    queue.push(new Item(fun, args));

    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  } // v8 likes predictible objects

  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }

  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  var title = 'browser';
  var platform = 'browser';
  var browser$2 = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues

  var versions = {};
  var release = {};
  var config$1 = {};

  function noop$2() {}

  var on = noop$2;
  var addListener = noop$2;
  var once$2 = noop$2;
  var off = noop$2;
  var removeListener = noop$2;
  var removeAllListeners = noop$2;
  var emit = noop$2;
  function binding(name) {
    throw new Error('process.binding is not supported');
  }
  function cwd() {
    return '/';
  }
  function chdir(dir) {
    throw new Error('process.chdir is not supported');
  }
  function umask() {
    return 0;
  } // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

  var performance = global$1.performance || {};

  var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    return new Date().getTime();
  }; // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime


  function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);

    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];

      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }

    return [seconds, nanoseconds];
  }
  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }
  var process = {
    nextTick: nextTick,
    title: title,
    browser: browser$2,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once$2,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config$1,
    uptime: uptime
  };

  function destroy(err, cb) {
    var _this = this;

    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;

    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          nextTick(emitErrorNT, this, err);
        }
      }

      return this;
    } // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks


    if (this._readableState) {
      this._readableState.destroyed = true;
    } // if this is a duplex stream mark the writable part as destroyed as well


    if (this._writableState) {
      this._writableState.destroyed = true;
    }

    this._destroy(err || null, function (err) {
      if (!cb && err) {
        if (!_this._writableState) {
          nextTick(emitErrorAndCloseNT, _this, err);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          nextTick(emitErrorAndCloseNT, _this, err);
        } else {
          nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        nextTick(emitCloseNT, _this);
        cb(err);
      } else {
        nextTick(emitCloseNT, _this);
      }
    });

    return this;
  }

  function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
  }

  function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit('close');
  }

  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }

    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }

  function emitErrorNT(self, err) {
    self.emit('error', err);
  }

  function errorOrDestroy$2(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
  }

  module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy$2
  };

  var destroy$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$5$3 = /*@__PURE__*/getAugmentedNamespace(destroy$1);

  var errorsBrowser = {};

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var codes = {};

  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }

    function getMessage(arg1, arg2, arg3) {
      if (typeof message === 'string') {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }

    var NodeError = /*#__PURE__*/function (_Base) {
      _inheritsLoose(NodeError, _Base);

      function NodeError(arg1, arg2, arg3) {
        return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
      }

      return NodeError;
    }(Base);

    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
  } // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      var len = expected.length;
      expected = expected.map(function (i) {
        return String(i);
      });

      if (len > 2) {
        return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
      } else if (len === 2) {
        return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
      } else {
        return "of ".concat(thing, " ").concat(expected[0]);
      }
    } else {
      return "of ".concat(thing, " ").concat(String(expected));
    }
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


  function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


  function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) {
      this_len = str.length;
    }

    return str.substring(this_len - search.length, this_len) === search;
  } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


  function includes(str, search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }

  createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
  }, TypeError);
  createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    var determiner;

    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
      determiner = 'must not be';
      expected = expected.replace(/^not /, '');
    } else {
      determiner = 'must be';
    }

    var msg;

    if (endsWith(name, ' argument')) {
      // For cases like 'first argument'
      msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    } else {
      var type = includes(name, '.') ? 'property' : 'argument';
      msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    }

    msg += ". Received type ".concat(typeof actual);
    return msg;
  }, TypeError);
  createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
  createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
    return 'The ' + name + ' method is not implemented';
  });
  createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
  createErrorType('ERR_STREAM_DESTROYED', function (name) {
    return 'Cannot call ' + name + ' after a stream was destroyed';
  });
  createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
  createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
  createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
  createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
  createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
    return 'Unknown encoding: ' + arg;
  }, TypeError);
  createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
  errorsBrowser.codes = codes;

  var ERR_INVALID_OPT_VALUE = errorsBrowser.codes.ERR_INVALID_OPT_VALUE;

  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }

  function getHighWaterMark$2(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name = isDuplex ? duplexKey : 'highWaterMark';
        throw new ERR_INVALID_OPT_VALUE(name, hwm);
      }

      return Math.floor(hwm);
    } // Default value


    return state.objectMode ? 16 : 16 * 1024;
  }

  var state = {
    getHighWaterMark: getHighWaterMark$2
  };

  /**
   * Module exports.
   */

  module.exports = deprecate;
  /**
   * Mark that a method should not be used.
   * Returns a modified function which warns once by default.
   *
   * If `localStorage.noDeprecation = true` is set, then it is a no-op.
   *
   * If `localStorage.throwDeprecation = true` is set, then deprecated functions
   * will throw an Error when invoked.
   *
   * If `localStorage.traceDeprecation = true` is set, then deprecated functions
   * will invoke `console.trace()` instead of `console.error()`.
   *
   * @param {Function} fn - the function to deprecate
   * @param {String} msg - the string to print to the console when `fn` is invoked
   * @returns {Function} a new "deprecated" version of `fn`
   * @api public
   */

  function deprecate(fn, msg) {
    if (config('noDeprecation')) {
      return fn;
    }

    var warned = false;

    function deprecated() {
      if (!warned) {
        if (config('throwDeprecation')) {
          throw new Error(msg);
        } else if (config('traceDeprecation')) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }

        warned = true;
      }

      return fn.apply(this, arguments);
    }

    return deprecated;
  }
  /**
   * Checks `localStorage` for boolean values for the given `name`.
   *
   * @param {String} name
   * @returns {Boolean}
   * @api private
   */


  function config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
      if (!global$1.localStorage) return false;
    } catch (_) {
      return false;
    }

    var val = global$1.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === 'true';
  }

  var browser$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(browser$1);

  module.exports = Writable$2;
  // there will be only 2 of these for each stream


  function CorkedRequest$1(state) {
    var _this = this;

    this.next = null;
    this.entry = null;

    this.finish = function () {
      onCorkedFinish(_this, state);
    };
  }
  /* </replacement> */

  /*<replacement>*/


  var Duplex$4;
  /*</replacement>*/

  Writable$2.WritableState = WritableState$1;
  /*<replacement>*/

  var internalUtil = {
    deprecate: require$$0$5
  };
  /*</replacement>*/

  /*<replacement>*/

  var Stream$2 = streamBrowser;
  /*</replacement>*/

  var Buffer$f = require$$0$7.Buffer;

  var OurUint8Array$1 = global$1.Uint8Array || function () {};

  function _uint8ArrayToBuffer$1(chunk) {
    return Buffer$f.from(chunk);
  }

  function _isUint8Array$1(obj) {
    return Buffer$f.isBuffer(obj) || obj instanceof OurUint8Array$1;
  }

  var destroyImpl$1 = require$$5$3;
  var _require$1 = state,
      getHighWaterMark$1 = _require$1.getHighWaterMark;
  var _require$codes$3 = errorsBrowser.codes,
      ERR_INVALID_ARG_TYPE$1 = _require$codes$3.ERR_INVALID_ARG_TYPE,
      ERR_METHOD_NOT_IMPLEMENTED$2 = _require$codes$3.ERR_METHOD_NOT_IMPLEMENTED,
      ERR_MULTIPLE_CALLBACK$1 = _require$codes$3.ERR_MULTIPLE_CALLBACK,
      ERR_STREAM_CANNOT_PIPE = _require$codes$3.ERR_STREAM_CANNOT_PIPE,
      ERR_STREAM_DESTROYED$1 = _require$codes$3.ERR_STREAM_DESTROYED,
      ERR_STREAM_NULL_VALUES = _require$codes$3.ERR_STREAM_NULL_VALUES,
      ERR_STREAM_WRITE_AFTER_END = _require$codes$3.ERR_STREAM_WRITE_AFTER_END,
      ERR_UNKNOWN_ENCODING = _require$codes$3.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy$1 = destroyImpl$1.errorOrDestroy;
  require$$0$8(Writable$2, Stream$2);

  function nop$1() {}

  function WritableState$1(options, stream, isDuplex) {
    Duplex$4 = Duplex$4 || require$$2$5;
    options = options || {}; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex$4; // object stream flag to indicate whether or not this stream
    // contains buffers or objects.

    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()

    this.highWaterMark = getHighWaterMark$1(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

    this.finalCalled = false; // drain event flag.

    this.needDrain = false; // at the start of calling end()

    this.ending = false; // when end() has been called, and returned

    this.ended = false; // when 'finish' is emitted

    this.finished = false; // has it been destroyed

    this.destroyed = false; // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.

    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.

    this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.

    this.length = 0; // a flag to see when we're in the middle of a write.

    this.writing = false; // when true all writes will be buffered until .uncork() call

    this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.

    this.sync = true; // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.

    this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

    this.onwrite = function (er) {
      onwrite$1(stream, er);
    }; // the callback that the user supplies to write(chunk,encoding,cb)


    this.writecb = null; // the amount that is being written when _write is called.

    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted

    this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams

    this.prefinished = false; // True if the error was already emitted and should not be thrown again

    this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

    this.autoDestroy = !!options.autoDestroy; // count buffered requests

    this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two

    this.corkedRequestsFree = new CorkedRequest$1(this);
  }

  WritableState$1.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];

    while (current) {
      out.push(current);
      current = current.next;
    }

    return out;
  };

  (function () {
    try {
      Object.defineProperty(WritableState$1.prototype, 'buffer', {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
      });
    } catch (_) {}
  })(); // Test _writableState for inheritance to account for Duplex streams,
  // whose prototype chain only points to Readable.


  var realHasInstance;

  if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable$2, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object)) return true;
        if (this !== Writable$2) return false;
        return object && object._writableState instanceof WritableState$1;
      }
    });
  } else {
    realHasInstance = function realHasInstance(object) {
      return object instanceof this;
    };
  }

  function Writable$2(options) {
    Duplex$4 = Duplex$4 || require$$2$5; // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5

    var isDuplex = this instanceof Duplex$4;
    if (!isDuplex && !realHasInstance.call(Writable$2, this)) return new Writable$2(options);
    this._writableState = new WritableState$1(options, this, isDuplex); // legacy.

    this.writable = true;

    if (options) {
      if (typeof options.write === 'function') this._write = options.write;
      if (typeof options.writev === 'function') this._writev = options.writev;
      if (typeof options.destroy === 'function') this._destroy = options.destroy;
      if (typeof options.final === 'function') this._final = options.final;
    }

    Stream$2.call(this);
  } // Otherwise people can pipe Writable streams, which is just wrong.


  Writable$2.prototype.pipe = function () {
    errorOrDestroy$1(this, new ERR_STREAM_CANNOT_PIPE());
  };

  function writeAfterEnd$1(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

    errorOrDestroy$1(stream, er);
    nextTick(cb, er);
  } // Checks that a user-supplied chunk is valid, especially for the particular
  // mode the stream is in. Currently this means that `null` is never accepted
  // and undefined/non-string values are only allowed in object mode.


  function validChunk$1(stream, state, chunk, cb) {
    var er;

    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== 'string' && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE$1('chunk', ['string', 'Buffer'], chunk);
    }

    if (er) {
      errorOrDestroy$1(stream, er);
      nextTick(cb, er);
      return false;
    }

    return true;
  }

  Writable$2.prototype.write = function (chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;

    var isBuf = !state.objectMode && _isUint8Array$1(chunk);

    if (isBuf && !Buffer$f.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer$1(chunk);
    }

    if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== 'function') cb = nop$1;
    if (state.ending) writeAfterEnd$1(this, cb);else if (isBuf || validChunk$1(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer$1(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
  };

  Writable$2.prototype.cork = function () {
    this._writableState.corked++;
  };

  Writable$2.prototype.uncork = function () {
    var state = this._writableState;

    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer$1(this, state);
    }
  };

  Writable$2.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };

  Object.defineProperty(Writable$2.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });

  function decodeChunk$1(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
      chunk = Buffer$f.from(chunk, encoding);
    }

    return chunk;
  }

  Object.defineProperty(Writable$2.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  }); // if we're already writing something, then just put this
  // in the queue, and wait our turn.  Otherwise, call _write
  // If we return false, then we need a drain event, so set that flag.

  function writeOrBuffer$1(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk$1(state, chunk, encoding);

      if (chunk !== newChunk) {
        isBuf = true;
        encoding = 'buffer';
        chunk = newChunk;
      }
    }

    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

    if (!ret) state.needDrain = true;

    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = {
        chunk: chunk,
        encoding: encoding,
        isBuf: isBuf,
        callback: cb,
        next: null
      };

      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }

      state.bufferedRequestCount += 1;
    } else {
      doWrite$1(stream, state, false, len, chunk, encoding, cb);
    }

    return ret;
  }

  function doWrite$1(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED$1('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }

  function onwriteError$1(stream, state, sync, er, cb) {
    --state.pendingcb;

    if (sync) {
      // defer the callback if we are being called synchronously
      // to avoid piling up things on the stack
      nextTick(cb, er); // this can emit finish, and it will always happen
      // after error

      nextTick(finishMaybe$1, stream, state);
      stream._writableState.errorEmitted = true;
      errorOrDestroy$1(stream, er);
    } else {
      // the caller expect this to happen before if
      // it is async
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy$1(stream, er); // this can emit finish, but finish must
      // always follow error

      finishMaybe$1(stream, state);
    }
  }

  function onwriteStateUpdate$1(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }

  function onwrite$1(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK$1();
    onwriteStateUpdate$1(state);
    if (er) onwriteError$1(stream, state, sync, er, cb);else {
      // Check if we're actually ready to finish, but don't emit yet
      var finished = needFinish$1(state) || stream.destroyed;

      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer$1(stream, state);
      }

      if (sync) {
        nextTick(afterWrite$1, stream, state, finished, cb);
      } else {
        afterWrite$1(stream, state, finished, cb);
      }
    }
  }

  function afterWrite$1(stream, state, finished, cb) {
    if (!finished) onwriteDrain$1(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe$1(stream, state);
  } // Must force callback to be called on nextTick, so that we don't
  // emit 'drain' before the write() consumer gets the 'false' return
  // value, and has a chance to attach a 'drain' listener.


  function onwriteDrain$1(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit('drain');
    }
  } // if there's something in the buffer waiting, then process it


  function clearBuffer$1(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;

    if (stream._writev && entry && entry.next) {
      // Fast case, write everything using _writev()
      var l = state.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;

      while (entry) {
        buffer[count] = entry;
        if (!entry.isBuf) allBuffers = false;
        entry = entry.next;
        count += 1;
      }

      buffer.allBuffers = allBuffers;
      doWrite$1(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
      // as the hot path ends with doWrite

      state.pendingcb++;
      state.lastBufferedRequest = null;

      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest$1(state);
      }

      state.bufferedRequestCount = 0;
    } else {
      // Slow case, write chunks one-by-one
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite$1(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
        // it means that we need to wait until it does.
        // also, that means that the chunk and cb are currently
        // being processed, so move the buffer counter past them.

        if (state.writing) {
          break;
        }
      }

      if (entry === null) state.lastBufferedRequest = null;
    }

    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }

  Writable$2.prototype._write = function (chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED$2('_write()'));
  };

  Writable$2.prototype._writev = null;

  Writable$2.prototype.end = function (chunk, encoding, cb) {
    var state = this._writableState;

    if (typeof chunk === 'function') {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

    if (state.corked) {
      state.corked = 1;
      this.uncork();
    } // ignore unnecessary end() calls.


    if (!state.ending) endWritable$1(this, state, cb);
    return this;
  };

  Object.defineProperty(Writable$2.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });

  function needFinish$1(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }

  function callFinal(stream, state) {
    stream._final(function (err) {
      state.pendingcb--;

      if (err) {
        errorOrDestroy$1(stream, err);
      }

      state.prefinished = true;
      stream.emit('prefinish');
      finishMaybe$1(stream, state);
    });
  }

  function prefinish$2(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
      if (typeof stream._final === 'function' && !state.destroyed) {
        state.pendingcb++;
        state.finalCalled = true;
        nextTick(callFinal, stream, state);
      } else {
        state.prefinished = true;
        stream.emit('prefinish');
      }
    }
  }

  function finishMaybe$1(stream, state) {
    var need = needFinish$1(state);

    if (need) {
      prefinish$2(stream, state);

      if (state.pendingcb === 0) {
        state.finished = true;
        stream.emit('finish');

        if (state.autoDestroy) {
          // In case of duplex streams we need a way to detect
          // if the readable side is ready for autoDestroy as well
          var rState = stream._readableState;

          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }

    return need;
  }

  function endWritable$1(stream, state, cb) {
    state.ending = true;
    finishMaybe$1(stream, state);

    if (cb) {
      if (state.finished) nextTick(cb);else stream.once('finish', cb);
    }

    state.ended = true;
    stream.writable = false;
  }

  function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;

    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    } // reuse the free corkReq.


    state.corkedRequestsFree.next = corkReq;
  }

  Object.defineProperty(Writable$2.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._writableState === undefined) {
        return false;
      }

      return this._writableState.destroyed;
    },
    set: function set(value) {
      // we ignore the value if the stream
      // has not been initialized yet
      if (!this._writableState) {
        return;
      } // backward compatibility, the user is explicitly
      // managing destroyed


      this._writableState.destroyed = value;
    }
  });
  Writable$2.prototype.destroy = destroyImpl$1.destroy;
  Writable$2.prototype._undestroy = destroyImpl$1.undestroy;

  Writable$2.prototype._destroy = function (err, cb) {
    cb(err);
  };

  var _stream_writable = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$6 = /*@__PURE__*/getAugmentedNamespace(_stream_writable);

  /*<replacement>*/


  var objectKeys = Object.keys || function (obj) {
    var keys = [];

    for (var key in obj) {
      keys.push(key);
    }

    return keys;
  };
  /*</replacement>*/


  module.exports = Duplex$3;
  var Readable$2 = require$$0$4;
  var Writable$1 = require$$1$6;
  require$$0$8(Duplex$3, Readable$2);
  {
    // Allow the keys array to be GC'ed.
    var keys$1 = objectKeys(Writable$1.prototype);

    for (var v$1 = 0; v$1 < keys$1.length; v$1++) {
      var method$1 = keys$1[v$1];
      if (!Duplex$3.prototype[method$1]) Duplex$3.prototype[method$1] = Writable$1.prototype[method$1];
    }
  }

  function Duplex$3(options) {
    if (!(this instanceof Duplex$3)) return new Duplex$3(options);
    Readable$2.call(this, options);
    Writable$1.call(this, options);
    this.allowHalfOpen = true;

    if (options) {
      if (options.readable === false) this.readable = false;
      if (options.writable === false) this.writable = false;

      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once('end', onend$1);
      }
    }
  }

  Object.defineProperty(Duplex$3.prototype, 'writableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex$3.prototype, 'writableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex$3.prototype, 'writableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  }); // the no-half-open enforcer

  function onend$1() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return; // no more data can be written.
    // But allow more writes to happen in this tick.

    nextTick(onEndNT$1, this);
  }

  function onEndNT$1(self) {
    self.end();
  }

  Object.defineProperty(Duplex$3.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === undefined || this._writableState === undefined) {
        return false;
      }

      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      // we ignore the value if the stream
      // has not been initialized yet
      if (this._readableState === undefined || this._writableState === undefined) {
        return;
      } // backward compatibility, the user is explicitly
      // managing destroyed


      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });

  var _stream_duplex = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$5 = /*@__PURE__*/getAugmentedNamespace(_stream_duplex);

  // Copyright Joyent, Inc. and other Node contributors.
  var isBufferEncoding = Buffer$g.isEncoding
    || function(encoding) {
         switch (encoding && encoding.toLowerCase()) {
           case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
           default: return false;
         }
       };


  function assertEncoding(encoding) {
    if (encoding && !isBufferEncoding(encoding)) {
      throw new Error('Unknown encoding: ' + encoding);
    }
  }

  // StringDecoder provides an interface for efficiently splitting a series of
  // buffers into a series of JS strings without breaking apart multi-byte
  // characters. CESU-8 is handled as part of the UTF-8 encoding.
  //
  // @TODO Handling all encodings inside a single object makes it very difficult
  // to reason about this code, so it should be split up in the future.
  // @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
  // points as used by CESU-8.
  function StringDecoder$2(encoding) {
    this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
    assertEncoding(encoding);
    switch (this.encoding) {
      case 'utf8':
        // CESU-8 represents each of Surrogate Pair by 3-bytes
        this.surrogateSize = 3;
        break;
      case 'ucs2':
      case 'utf16le':
        // UTF-16 represents each of Surrogate Pair by 2-bytes
        this.surrogateSize = 2;
        this.detectIncompleteChar = utf16DetectIncompleteChar;
        break;
      case 'base64':
        // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
        this.surrogateSize = 3;
        this.detectIncompleteChar = base64DetectIncompleteChar;
        break;
      default:
        this.write = passThroughWrite;
        return;
    }

    // Enough space to store all bytes of a single character. UTF-8 needs 4
    // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
    this.charBuffer = new Buffer$g(6);
    // Number of bytes received for the current incomplete multi-byte character.
    this.charReceived = 0;
    // Number of bytes expected for the current incomplete multi-byte character.
    this.charLength = 0;
  }

  // write decodes the given buffer and returns it as JS string that is
  // guaranteed to not contain any partial multi-byte characters. Any partial
  // character found at the end of the buffer is buffered up, and will be
  // returned when calling write again with the remaining bytes.
  //
  // Note: Converting a Buffer containing an orphan surrogate to a String
  // currently works, but converting a String to a Buffer (via `new Buffer`, or
  // Buffer#write) will replace incomplete surrogates with the unicode
  // replacement character. See https://codereview.chromium.org/121173009/ .
  StringDecoder$2.prototype.write = function(buffer) {
    var charStr = '';
    // if our last write ended with an incomplete multibyte character
    while (this.charLength) {
      // determine how many remaining bytes this buffer has to offer for this char
      var available = (buffer.length >= this.charLength - this.charReceived) ?
          this.charLength - this.charReceived :
          buffer.length;

      // add the new bytes to the char buffer
      buffer.copy(this.charBuffer, this.charReceived, 0, available);
      this.charReceived += available;

      if (this.charReceived < this.charLength) {
        // still not enough chars in this buffer? wait for more ...
        return '';
      }

      // remove bytes belonging to the current character from the buffer
      buffer = buffer.slice(available, buffer.length);

      // get the character that was split
      charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

      // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
      var charCode = charStr.charCodeAt(charStr.length - 1);
      if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        this.charLength += this.surrogateSize;
        charStr = '';
        continue;
      }
      this.charReceived = this.charLength = 0;

      // if there are no more bytes in this buffer, just emit our char
      if (buffer.length === 0) {
        return charStr;
      }
      break;
    }

    // determine and set charLength / charReceived
    this.detectIncompleteChar(buffer);

    var end = buffer.length;
    if (this.charLength) {
      // buffer the incomplete character bytes we got
      buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
      end -= this.charReceived;
    }

    charStr += buffer.toString(this.encoding, 0, end);

    var end = charStr.length - 1;
    var charCode = charStr.charCodeAt(end);
    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      var size = this.surrogateSize;
      this.charLength += size;
      this.charReceived += size;
      this.charBuffer.copy(this.charBuffer, size, 0, size);
      buffer.copy(this.charBuffer, 0, 0, size);
      return charStr.substring(0, end);
    }

    // or just emit the charStr
    return charStr;
  };

  // detectIncompleteChar determines if there is an incomplete UTF-8 character at
  // the end of the given buffer. If so, it sets this.charLength to the byte
  // length that character, and sets this.charReceived to the number of bytes
  // that are available for this character.
  StringDecoder$2.prototype.detectIncompleteChar = function(buffer) {
    // determine how many bytes we have to check at the end of this buffer
    var i = (buffer.length >= 3) ? 3 : buffer.length;

    // Figure out if one of the last i bytes of our buffer announces an
    // incomplete char.
    for (; i > 0; i--) {
      var c = buffer[buffer.length - i];

      // See http://en.wikipedia.org/wiki/UTF-8#Description

      // 110XXXXX
      if (i == 1 && c >> 5 == 0x06) {
        this.charLength = 2;
        break;
      }

      // 1110XXXX
      if (i <= 2 && c >> 4 == 0x0E) {
        this.charLength = 3;
        break;
      }

      // 11110XXX
      if (i <= 3 && c >> 3 == 0x1E) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = i;
  };

  StringDecoder$2.prototype.end = function(buffer) {
    var res = '';
    if (buffer && buffer.length)
      res = this.write(buffer);

    if (this.charReceived) {
      var cr = this.charReceived;
      var buf = this.charBuffer;
      var enc = this.encoding;
      res += buf.slice(0, cr).toString(enc);
    }

    return res;
  };

  function passThroughWrite(buffer) {
    return buffer.toString(this.encoding);
  }

  function utf16DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 2;
    this.charLength = this.charReceived ? 2 : 0;
  }

  function base64DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 3;
    this.charLength = this.charReceived ? 3 : 0;
  }

  var _polyfillNode_string_decoder = /*#__PURE__*/Object.freeze({
    __proto__: null,
    StringDecoder: StringDecoder$2
  });

  var require$$2$4 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_string_decoder);

  var ERR_STREAM_PREMATURE_CLOSE = errorsBrowser.codes.ERR_STREAM_PREMATURE_CLOSE;

  function once$1(callback) {
    var called = false;
    return function () {
      if (called) return;
      called = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      callback.apply(this, args);
    };
  }

  function noop$1() {}

  function isRequest$1(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
  }

  function eos$1(stream, opts, callback) {
    if (typeof opts === 'function') return eos$1(stream, null, opts);
    if (!opts) opts = {};
    callback = once$1(callback || noop$1);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;

    var onlegacyfinish = function onlegacyfinish() {
      if (!stream.writable) onfinish();
    };

    var writableEnded = stream._writableState && stream._writableState.finished;

    var onfinish = function onfinish() {
      writable = false;
      writableEnded = true;
      if (!readable) callback.call(stream);
    };

    var readableEnded = stream._readableState && stream._readableState.endEmitted;

    var onend = function onend() {
      readable = false;
      readableEnded = true;
      if (!writable) callback.call(stream);
    };

    var onerror = function onerror(err) {
      callback.call(stream, err);
    };

    var onclose = function onclose() {
      var err;

      if (readable && !readableEnded) {
        if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }

      if (writable && !writableEnded) {
        if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
    };

    var onrequest = function onrequest() {
      stream.req.on('finish', onfinish);
    };

    if (isRequest$1(stream)) {
      stream.on('complete', onfinish);
      stream.on('abort', onclose);
      if (stream.req) onrequest();else stream.on('request', onrequest);
    } else if (writable && !stream._writableState) {
      // legacy streams
      stream.on('end', onlegacyfinish);
      stream.on('close', onlegacyfinish);
    }

    stream.on('end', onend);
    stream.on('finish', onfinish);
    if (opts.error !== false) stream.on('error', onerror);
    stream.on('close', onclose);
    return function () {
      stream.removeListener('complete', onfinish);
      stream.removeListener('abort', onclose);
      stream.removeListener('request', onrequest);
      if (stream.req) stream.req.removeListener('finish', onfinish);
      stream.removeListener('end', onlegacyfinish);
      stream.removeListener('close', onlegacyfinish);
      stream.removeListener('finish', onfinish);
      stream.removeListener('end', onend);
      stream.removeListener('error', onerror);
      stream.removeListener('close', onclose);
    };
  }

  var endOfStream = eos$1;

  var _Object$setPrototypeO;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var finished = endOfStream;
  var kLastResolve = Symbol('lastResolve');
  var kLastReject = Symbol('lastReject');
  var kError = Symbol('error');
  var kEnded = Symbol('ended');
  var kLastPromise = Symbol('lastPromise');
  var kHandlePromise = Symbol('handlePromise');
  var kStream = Symbol('stream');

  function createIterResult(value, done) {
    return {
      value: value,
      done: done
    };
  }

  function readAndResolve(iter) {
    var resolve = iter[kLastResolve];

    if (resolve !== null) {
      var data = iter[kStream].read(); // we defer if data is null
      // we can be expecting either 'end' or
      // 'error'

      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult(data, false));
      }
    }
  }

  function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    nextTick(readAndResolve, iter);
  }

  function wrapForNext(lastPromise, iter) {
    return function (resolve, reject) {
      lastPromise.then(function () {
        if (iter[kEnded]) {
          resolve(createIterResult(undefined, true));
          return;
        }

        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }

  var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },

    next: function next() {
      var _this = this; // if we have detected an error in the meanwhile
      // reject straight away


      var error = this[kError];

      if (error !== null) {
        return Promise.reject(error);
      }

      if (this[kEnded]) {
        return Promise.resolve(createIterResult(undefined, true));
      }

      if (this[kStream].destroyed) {
        // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function (resolve, reject) {
          nextTick(function () {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve(createIterResult(undefined, true));
            }
          });
        });
      } // if we have multiple next() calls
      // we will wait for the previous Promise to finish
      // this logic is optimized to support for await loops,
      // where next() is only called once at a time


      var lastPromise = this[kLastPromise];
      var promise;

      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        // fast path needed to support multiple this.push()
        // without triggering the next() queue
        var data = this[kStream].read();

        if (data !== null) {
          return Promise.resolve(createIterResult(data, false));
        }

        promise = new Promise(this[kHandlePromise]);
      }

      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this; // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to


    return new Promise(function (resolve, reject) {
      _this2[kStream].destroy(null, function (err) {
        if (err) {
          reject(err);
          return;
        }

        resolve(createIterResult(undefined, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);

  var createReadableStreamAsyncIterator$1 = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;

    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data = iterator[kStream].read();

        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(data, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function (err) {
      if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
        var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
        // returned by next() and store the error

        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }

        iterator[kError] = err;
        return;
      }

      var resolve = iterator[kLastResolve];

      if (resolve !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(undefined, true));
      }

      iterator[kEnded] = true;
    });
    stream.on('readable', onReadable.bind(null, iterator));
    return iterator;
  };

  module.exports = createReadableStreamAsyncIterator$1;

  var async_iterator = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$11$1 = /*@__PURE__*/getAugmentedNamespace(async_iterator);

  var fromBrowser;
  var hasRequiredFromBrowser;

  function requireFromBrowser() {
    if (hasRequiredFromBrowser) return fromBrowser;
    hasRequiredFromBrowser = 1;

    fromBrowser = function () {
      throw new Error('Readable.from is not available in the browser');
    };

    return fromBrowser;
  }

  module.exports = Readable$1;
  /*<replacement>*/

  var Duplex$2;
  /*</replacement>*/

  Readable$1.ReadableState = ReadableState$1;
  /*<replacement>*/

  require$$0$6.EventEmitter;

  var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
  };
  /*</replacement>*/

  /*<replacement>*/


  var Stream$1 = streamBrowser;
  /*</replacement>*/

  var Buffer$e = require$$0$7.Buffer;

  var OurUint8Array = global$1.Uint8Array || function () {};

  function _uint8ArrayToBuffer(chunk) {
    return Buffer$e.from(chunk);
  }

  function _isUint8Array(obj) {
    return Buffer$e.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  /*<replacement>*/


  var debugUtil = require$$3$3;
  var debug$1;

  if (debugUtil && debugUtil.debuglog) {
    debug$1 = debugUtil.debuglog('stream');
  } else {
    debug$1 = function debug() {};
  }
  /*</replacement>*/


  var BufferList$1 = requireBuffer_list();
  var destroyImpl = require$$5$3;
  var _require = state,
      getHighWaterMark = _require.getHighWaterMark;
  var _require$codes$2 = errorsBrowser.codes,
      ERR_INVALID_ARG_TYPE = _require$codes$2.ERR_INVALID_ARG_TYPE,
      ERR_STREAM_PUSH_AFTER_EOF = _require$codes$2.ERR_STREAM_PUSH_AFTER_EOF,
      ERR_METHOD_NOT_IMPLEMENTED$1 = _require$codes$2.ERR_METHOD_NOT_IMPLEMENTED,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes$2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.

  var StringDecoder$1;
  var createReadableStreamAsyncIterator;
  var from$1;
  require$$0$8(Readable$1, Stream$1);
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

  function prependListener$1(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.

    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }

  function ReadableState$1(options, stream, isDuplex) {
    Duplex$2 = Duplex$2 || require$$2$5;
    options = options || {}; // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.

    if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex$2; // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away

    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"

    this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()

    this.buffer = new BufferList$1();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.

    this.sync = true; // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.

    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true; // Should close be emitted on destroy. Defaults to true.

    this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

    this.autoDestroy = !!options.autoDestroy; // has it been destroyed

    this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.

    this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

    this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;

    if (options.encoding) {
      if (!StringDecoder$1) StringDecoder$1 = require$$2$4.StringDecoder;
      this.decoder = new StringDecoder$1(options.encoding);
      this.encoding = options.encoding;
    }
  }

  function Readable$1(options) {
    Duplex$2 = Duplex$2 || require$$2$5;
    if (!(this instanceof Readable$1)) return new Readable$1(options); // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5

    var isDuplex = this instanceof Duplex$2;
    this._readableState = new ReadableState$1(options, this, isDuplex); // legacy

    this.readable = true;

    if (options) {
      if (typeof options.read === 'function') this._read = options.read;
      if (typeof options.destroy === 'function') this._destroy = options.destroy;
    }

    Stream$1.call(this);
  }

  Object.defineProperty(Readable$1.prototype, 'destroyed', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === undefined) {
        return false;
      }

      return this._readableState.destroyed;
    },
    set: function set(value) {
      // we ignore the value if the stream
      // has not been initialized yet
      if (!this._readableState) {
        return;
      } // backward compatibility, the user is explicitly
      // managing destroyed


      this._readableState.destroyed = value;
    }
  });
  Readable$1.prototype.destroy = destroyImpl.destroy;
  Readable$1.prototype._undestroy = destroyImpl.undestroy;

  Readable$1.prototype._destroy = function (err, cb) {
    cb(err);
  }; // Manually shove something into the read() buffer.
  // This returns true if the highWaterMark has not been hit yet,
  // similar to how Writable.write() returns true if you should
  // write() some more.


  Readable$1.prototype.push = function (chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;

    if (!state.objectMode) {
      if (typeof chunk === 'string') {
        encoding = encoding || state.defaultEncoding;

        if (encoding !== state.encoding) {
          chunk = Buffer$e.from(chunk, encoding);
          encoding = '';
        }

        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }

    return readableAddChunk$1(this, chunk, encoding, false, skipChunkCheck);
  }; // Unshift should *always* be something directly out of read()


  Readable$1.prototype.unshift = function (chunk) {
    return readableAddChunk$1(this, chunk, null, true, false);
  };

  function readableAddChunk$1(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug$1('readableAddChunk', chunk);
    var state = stream._readableState;

    if (chunk === null) {
      state.reading = false;
      onEofChunk$1(stream, state);
    } else {
      var er;
      if (!skipChunkCheck) er = chunkInvalid$1(state, chunk);

      if (er) {
        errorOrDestroy(stream, er);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer$e.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }

        if (addToFront) {
          if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
        } else if (state.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed) {
          return false;
        } else {
          state.reading = false;

          if (state.decoder && !encoding) {
            chunk = state.decoder.write(chunk);
            if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore$1(stream, state);
          } else {
            addChunk(stream, state, chunk, false);
          }
        }
      } else if (!addToFront) {
        state.reading = false;
        maybeReadMore$1(stream, state);
      }
    } // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.


    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
  }

  function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
      state.awaitDrain = 0;
      stream.emit('data', chunk);
    } else {
      // update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
      if (state.needReadable) emitReadable$1(stream);
    }

    maybeReadMore$1(stream, state);
  }

  function chunkInvalid$1(state, chunk) {
    var er;

    if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
    }

    return er;
  }

  Readable$1.prototype.isPaused = function () {
    return this._readableState.flowing === false;
  }; // backwards compatibility.


  Readable$1.prototype.setEncoding = function (enc) {
    if (!StringDecoder$1) StringDecoder$1 = require$$2$4.StringDecoder;
    var decoder = new StringDecoder$1(enc);
    this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

    this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

    var p = this._readableState.buffer.head;
    var content = '';

    while (p !== null) {
      content += decoder.write(p.data);
      p = p.next;
    }

    this._readableState.buffer.clear();

    if (content !== '') this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  }; // Don't raise the hwm > 1GB


  var MAX_HWM$1 = 0x40000000;

  function computeNewHighWaterMark$1(n) {
    if (n >= MAX_HWM$1) {
      // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
      n = MAX_HWM$1;
    } else {
      // Get the next highest power of 2 to prevent increasing hwm excessively in
      // tiny amounts
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }

    return n;
  } // This function is designed to be inlinable, so please take care when making
  // changes to the function body.


  function howMuchToRead$1(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;

    if (n !== n) {
      // Only flow one buffer at a time
      if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
    } // If we're asking for more than the current hwm, then raise the hwm.


    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark$1(n);
    if (n <= state.length) return n; // Don't have enough

    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }

    return state.length;
  } // you can override either this method, or the async _read(n) below.


  Readable$1.prototype.read = function (n) {
    debug$1('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.

    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug$1('read: emitReadable', state.length, state.ended);
      if (state.length === 0 && state.ended) endReadable$1(this);else emitReadable$1(this);
      return null;
    }

    n = howMuchToRead$1(n, state); // if we've ended, and we're now clear, then finish it up.

    if (n === 0 && state.ended) {
      if (state.length === 0) endReadable$1(this);
      return null;
    } // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.


    var doRead = state.needReadable;
    debug$1('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug$1('length less than watermark', doRead);
    } // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.


    if (state.ended || state.reading) {
      doRead = false;
      debug$1('reading or ended', doRead);
    } else if (doRead) {
      debug$1('do read');
      state.reading = true;
      state.sync = true; // if the length is currently zero, then we *need* a readable event.

      if (state.length === 0) state.needReadable = true; // call internal read method

      this._read(state.highWaterMark);

      state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
      // and we need to re-evaluate how much data we can return to the user.

      if (!state.reading) n = howMuchToRead$1(nOrig, state);
    }

    var ret;
    if (n > 0) ret = fromList$1(n, state);else ret = null;

    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n = 0;
    } else {
      state.length -= n;
      state.awaitDrain = 0;
    }

    if (state.length === 0) {
      // If we have nothing in the buffer, then we want to know
      // as soon as we *do* get something into the buffer.
      if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

      if (nOrig !== n && state.ended) endReadable$1(this);
    }

    if (ret !== null) this.emit('data', ret);
    return ret;
  };

  function onEofChunk$1(stream, state) {
    debug$1('onEofChunk');
    if (state.ended) return;

    if (state.decoder) {
      var chunk = state.decoder.end();

      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }

    state.ended = true;

    if (state.sync) {
      // if we are sync, wait until next tick to emit the data.
      // Otherwise we risk emitting data in the flow()
      // the readable code triggers during a read() call
      emitReadable$1(stream);
    } else {
      // emit 'readable' now to make sure it gets picked up.
      state.needReadable = false;

      if (!state.emittedReadable) {
        state.emittedReadable = true;
        emitReadable_$1(stream);
      }
    }
  } // Don't emit readable right away in sync mode, because this can trigger
  // another read() call => stack overflow.  This way, it might trigger
  // a nextTick recursion warning, but that's not so bad.


  function emitReadable$1(stream) {
    var state = stream._readableState;
    debug$1('emitReadable', state.needReadable, state.emittedReadable);
    state.needReadable = false;

    if (!state.emittedReadable) {
      debug$1('emitReadable', state.flowing);
      state.emittedReadable = true;
      nextTick(emitReadable_$1, stream);
    }
  }

  function emitReadable_$1(stream) {
    var state = stream._readableState;
    debug$1('emitReadable_', state.destroyed, state.length, state.ended);

    if (!state.destroyed && (state.length || state.ended)) {
      stream.emit('readable');
      state.emittedReadable = false;
    } // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.


    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow$1(stream);
  } // at this point, the user has presumably seen the 'readable' event,
  // and called read() to consume some data.  that may have triggered
  // in turn another _read(n) call, in which case reading = true if
  // it's in progress.
  // However, if we're not ended, or reading, and the length < hwm,
  // then go ahead and try to read some more preemptively.


  function maybeReadMore$1(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      nextTick(maybeReadMore_$1, stream, state);
    }
  }

  function maybeReadMore_$1(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
      var len = state.length;
      debug$1('maybeReadMore read 0');
      stream.read(0);
      if (len === state.length) // didn't get any data, stop spinning.
        break;
    }

    state.readingMore = false;
  } // abstract method.  to be overridden in specific implementation classes.
  // call cb(er, data) where data is <= n in length.
  // for virtual (non-string, non-buffer) streams, "length" is somewhat
  // arbitrary, and perhaps not very meaningful.


  Readable$1.prototype._read = function (n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED$1('_read()'));
  };

  Readable$1.prototype.pipe = function (dest, pipeOpts) {
    var src = this;
    var state = this._readableState;

    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;

      case 1:
        state.pipes = [state.pipes, dest];
        break;

      default:
        state.pipes.push(dest);
        break;
    }

    state.pipesCount += 1;
    debug$1('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);
    dest.on('unpipe', onunpipe);

    function onunpipe(readable, unpipeInfo) {
      debug$1('onunpipe');

      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }

    function onend() {
      debug$1('onend');
      dest.end();
    } // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.


    var ondrain = pipeOnDrain$1(src);
    dest.on('drain', ondrain);
    var cleanedUp = false;

    function cleanup() {
      debug$1('cleanup'); // cleanup event handlers once the pipe is broken

      dest.removeListener('close', onclose);
      dest.removeListener('finish', onfinish);
      dest.removeListener('drain', ondrain);
      dest.removeListener('error', onerror);
      dest.removeListener('unpipe', onunpipe);
      src.removeListener('end', onend);
      src.removeListener('end', unpipe);
      src.removeListener('data', ondata);
      cleanedUp = true; // if the reader is waiting for a drain event from this
      // specific writer, then it would cause it to never start
      // flowing again.
      // So, if this is awaiting a drain, then we just call it now.
      // If we don't know, then assume that we are waiting for one.

      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }

    src.on('data', ondata);

    function ondata(chunk) {
      debug$1('ondata');
      var ret = dest.write(chunk);
      debug$1('dest.write', ret);

      if (ret === false) {
        // If the user unpiped during `dest.write()`, it is possible
        // to get stuck in a permanently paused state if that write
        // also returned false.
        // => Check whether `dest` is still a piping destination.
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf$1(state.pipes, dest) !== -1) && !cleanedUp) {
          debug$1('false write response, pause', state.awaitDrain);
          state.awaitDrain++;
        }

        src.pause();
      }
    } // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.


    function onerror(er) {
      debug$1('onerror', er);
      unpipe();
      dest.removeListener('error', onerror);
      if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
    } // Make sure our error handler is attached before userland ones.


    prependListener$1(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

    function onclose() {
      dest.removeListener('finish', onfinish);
      unpipe();
    }

    dest.once('close', onclose);

    function onfinish() {
      debug$1('onfinish');
      dest.removeListener('close', onclose);
      unpipe();
    }

    dest.once('finish', onfinish);

    function unpipe() {
      debug$1('unpipe');
      src.unpipe(dest);
    } // tell the dest that it's being piped to


    dest.emit('pipe', src); // start the flow if it hasn't been started already.

    if (!state.flowing) {
      debug$1('pipe resume');
      src.resume();
    }

    return dest;
  };

  function pipeOnDrain$1(src) {
    return function pipeOnDrainFunctionResult() {
      var state = src._readableState;
      debug$1('pipeOnDrain', state.awaitDrain);
      if (state.awaitDrain) state.awaitDrain--;

      if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
        state.flowing = true;
        flow$1(src);
      }
    };
  }

  Readable$1.prototype.unpipe = function (dest) {
    var state = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    }; // if we're not piping anywhere, then do nothing.

    if (state.pipesCount === 0) return this; // just one destination.  most common case.

    if (state.pipesCount === 1) {
      // passed in one, but it's not the right one.
      if (dest && dest !== state.pipes) return this;
      if (!dest) dest = state.pipes; // got a match.

      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest) dest.emit('unpipe', this, unpipeInfo);
      return this;
    } // slow case. multiple pipe destinations.


    if (!dest) {
      // remove all.
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;

      for (var i = 0; i < len; i++) {
        dests[i].emit('unpipe', this, {
          hasUnpiped: false
        });
      }

      return this;
    } // try to find the right one.


    var index = indexOf$1(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit('unpipe', this, unpipeInfo);
    return this;
  }; // set up data events if they are asked for
  // Ensure readable listeners eventually get something


  Readable$1.prototype.on = function (ev, fn) {
    var res = Stream$1.prototype.on.call(this, ev, fn);
    var state = this._readableState;

    if (ev === 'data') {
      // update readableListening so that resume() may be a no-op
      // a few lines down. This is needed to support once('readable').
      state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

      if (state.flowing !== false) this.resume();
    } else if (ev === 'readable') {
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.flowing = false;
        state.emittedReadable = false;
        debug$1('on readable', state.length, state.reading);

        if (state.length) {
          emitReadable$1(this);
        } else if (!state.reading) {
          nextTick(nReadingNextTick$1, this);
        }
      }
    }

    return res;
  };

  Readable$1.prototype.addListener = Readable$1.prototype.on;

  Readable$1.prototype.removeListener = function (ev, fn) {
    var res = Stream$1.prototype.removeListener.call(this, ev, fn);

    if (ev === 'readable') {
      // We need to check if there is someone still listening to
      // readable and reset the state. However this needs to happen
      // after readable has been emitted but before I/O (nextTick) to
      // support once('readable', fn) cycles. This means that calling
      // resume within the same tick will have no
      // effect.
      nextTick(updateReadableListening, this);
    }

    return res;
  };

  Readable$1.prototype.removeAllListeners = function (ev) {
    var res = Stream$1.prototype.removeAllListeners.apply(this, arguments);

    if (ev === 'readable' || ev === undefined) {
      // We need to check if there is someone still listening to
      // readable and reset the state. However this needs to happen
      // after readable has been emitted but before I/O (nextTick) to
      // support once('readable', fn) cycles. This means that calling
      // resume within the same tick will have no
      // effect.
      nextTick(updateReadableListening, this);
    }

    return res;
  };

  function updateReadableListening(self) {
    var state = self._readableState;
    state.readableListening = self.listenerCount('readable') > 0;

    if (state.resumeScheduled && !state.paused) {
      // flowing needs to be set to true now, otherwise
      // the upcoming resume will not flow.
      state.flowing = true; // crude way to check if we should resume
    } else if (self.listenerCount('data') > 0) {
      self.resume();
    }
  }

  function nReadingNextTick$1(self) {
    debug$1('readable nexttick read 0');
    self.read(0);
  } // pause() and resume() are remnants of the legacy readable stream API
  // If the user uses them, then switch into old mode.


  Readable$1.prototype.resume = function () {
    var state = this._readableState;

    if (!state.flowing) {
      debug$1('resume'); // we flow only if there is no one listening
      // for readable, but we still have to call
      // resume()

      state.flowing = !state.readableListening;
      resume$1(this, state);
    }

    state.paused = false;
    return this;
  };

  function resume$1(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      nextTick(resume_$1, stream, state);
    }
  }

  function resume_$1(stream, state) {
    debug$1('resume', state.reading);

    if (!state.reading) {
      stream.read(0);
    }

    state.resumeScheduled = false;
    stream.emit('resume');
    flow$1(stream);
    if (state.flowing && !state.reading) stream.read(0);
  }

  Readable$1.prototype.pause = function () {
    debug$1('call pause flowing=%j', this._readableState.flowing);

    if (this._readableState.flowing !== false) {
      debug$1('pause');
      this._readableState.flowing = false;
      this.emit('pause');
    }

    this._readableState.paused = true;
    return this;
  };

  function flow$1(stream) {
    var state = stream._readableState;
    debug$1('flow', state.flowing);

    while (state.flowing && stream.read() !== null) {
    }
  } // wrap an old-style stream as the async data source.
  // This is *not* part of the readable stream interface.
  // It is an ugly unfortunate mess of history.


  Readable$1.prototype.wrap = function (stream) {
    var _this = this;

    var state = this._readableState;
    var paused = false;
    stream.on('end', function () {
      debug$1('wrapped end');

      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) _this.push(chunk);
      }

      _this.push(null);
    });
    stream.on('data', function (chunk) {
      debug$1('wrapped data');
      if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

      if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

      var ret = _this.push(chunk);

      if (!ret) {
        paused = true;
        stream.pause();
      }
    }); // proxy all the other methods.
    // important when wrapping filters and duplexes.

    for (var i in stream) {
      if (this[i] === undefined && typeof stream[i] === 'function') {
        this[i] = function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    } // proxy certain important events.


    for (var n = 0; n < kProxyEvents.length; n++) {
      stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    } // when we try to consume some more bytes, simply unpause the
    // underlying stream.


    this._read = function (n) {
      debug$1('wrapped _read', n);

      if (paused) {
        paused = false;
        stream.resume();
      }
    };

    return this;
  };

  if (typeof Symbol === 'function') {
    Readable$1.prototype[Symbol.asyncIterator] = function () {
      if (createReadableStreamAsyncIterator === undefined) {
        createReadableStreamAsyncIterator = require$$11$1;
      }

      return createReadableStreamAsyncIterator(this);
    };
  }

  Object.defineProperty(Readable$1.prototype, 'readableHighWaterMark', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable$1.prototype, 'readableBuffer', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable$1.prototype, 'readableFlowing', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.flowing;
    },
    set: function set(state) {
      if (this._readableState) {
        this._readableState.flowing = state;
      }
    }
  }); // exposed for testing purposes only.

  Readable$1._fromList = fromList$1;
  Object.defineProperty(Readable$1.prototype, 'readableLength', {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.length;
    }
  }); // Pluck off n bytes from an array of buffers.
  // Length is the combined lengths of all the buffers in the list.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.

  function fromList$1(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
      // read it all, truncate the list
      if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      // read part of list
      ret = state.buffer.consume(n, state.decoder);
    }
    return ret;
  }

  function endReadable$1(stream) {
    var state = stream._readableState;
    debug$1('endReadable', state.endEmitted);

    if (!state.endEmitted) {
      state.ended = true;
      nextTick(endReadableNT$1, state, stream);
    }
  }

  function endReadableNT$1(state, stream) {
    debug$1('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit('end');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the writable side is ready for autoDestroy as well
        var wState = stream._writableState;

        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }

  if (typeof Symbol === 'function') {
    Readable$1.from = function (iterable, opts) {
      if (from$1 === undefined) {
        from$1 = requireFromBrowser();
      }

      return from$1(Readable$1, iterable, opts);
    };
  }

  function indexOf$1(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) return i;
    }

    return -1;
  }

  var _stream_readable = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(_stream_readable);

  var _stream_transform = Transform$4;
  var _require$codes$1 = errorsBrowser.codes,
      ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED,
      ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK,
      ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
  var Duplex$1 = require$$2$5;
  require$$0$8(Transform$4, Duplex$1);

  function afterTransform$1(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;

    if (cb === null) {
      return this.emit('error', new ERR_MULTIPLE_CALLBACK());
    }

    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) // single equals check for both `null` and `undefined`
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;

    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  }

  function Transform$4(options) {
    if (!(this instanceof Transform$4)) return new Transform$4(options);
    Duplex$1.call(this, options);
    this._transformState = {
      afterTransform: afterTransform$1.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }; // start out asking for a readable event once data is transformed.

    this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.

    this._readableState.sync = false;

    if (options) {
      if (typeof options.transform === 'function') this._transform = options.transform;
      if (typeof options.flush === 'function') this._flush = options.flush;
    } // When the writable side finishes, then flush out anything remaining.


    this.on('prefinish', prefinish$1);
  }

  function prefinish$1() {
    var _this = this;

    if (typeof this._flush === 'function' && !this._readableState.destroyed) {
      this._flush(function (er, data) {
        done$1(_this, er, data);
      });
    } else {
      done$1(this, null, null);
    }
  }

  Transform$4.prototype.push = function (chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex$1.prototype.push.call(this, chunk, encoding);
  }; // This is the part where you do stuff!
  // override this function in implementation classes.
  // 'chunk' is an input chunk.
  //
  // Call `push(newChunk)` to pass along transformed output
  // to the readable side.  You may call 'push' zero or more times.
  //
  // Call `cb(err)` when you are done with this chunk.  If you pass
  // an error, then that'll put the hurt on the whole operation.  If you
  // never call cb(), then you'll never get another chunk.


  Transform$4.prototype._transform = function (chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
  };

  Transform$4.prototype._write = function (chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;

    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
  }; // Doesn't matter what the args are here.
  // _transform does all the work.
  // That we got here means that the readable side wants more data.


  Transform$4.prototype._read = function (n) {
    var ts = this._transformState;

    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;

      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      // mark that we need a transform, so that any data that comes in
      // will get processed, now that we've asked for it.
      ts.needTransform = true;
    }
  };

  Transform$4.prototype._destroy = function (err, cb) {
    Duplex$1.prototype._destroy.call(this, err, function (err2) {
      cb(err2);
    });
  };

  function done$1(stream, er, data) {
    if (er) return stream.emit('error', er);
    if (data != null) // single equals check for both `null` and `undefined`
      stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided

    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
  }

  var _stream_passthrough = PassThrough$1;
  var Transform$3 = _stream_transform;
  require$$0$8(PassThrough$1, Transform$3);

  function PassThrough$1(options) {
    if (!(this instanceof PassThrough$1)) return new PassThrough$1(options);
    Transform$3.call(this, options);
  }

  PassThrough$1.prototype._transform = function (chunk, encoding, cb) {
    cb(null, chunk);
  };

  var eos;

  function once(callback) {
    var called = false;
    return function () {
      if (called) return;
      called = true;
      callback.apply(void 0, arguments);
    };
  }

  var _require$codes = errorsBrowser.codes,
      ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
      ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

  function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
  }

  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === 'function';
  }

  function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on('close', function () {
      closed = true;
    });
    if (eos === undefined) eos = endOfStream;
    eos(stream, {
      readable: reading,
      writable: writing
    }, function (err) {
      if (err) return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function (err) {
      if (closed) return;
      if (destroyed) return;
      destroyed = true; // request.destroy just do .end - .abort is what we want

      if (isRequest(stream)) return stream.abort();
      if (typeof stream.destroy === 'function') return stream.destroy();
      callback(err || new ERR_STREAM_DESTROYED('pipe'));
    };
  }

  function call(fn) {
    fn();
  }

  function pipe(from, to) {
    return from.pipe(to);
  }

  function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== 'function') return noop;
    return streams.pop();
  }

  function pipeline() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
      streams[_key] = arguments[_key];
    }

    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];

    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS('streams');
    }

    var error;
    var destroys = streams.map(function (stream, i) {
      var reading = i < streams.length - 1;
      var writing = i > 0;
      return destroyer(stream, reading, writing, function (err) {
        if (!error) error = err;
        if (err) destroys.forEach(call);
        if (reading) return;
        destroys.forEach(call);
        callback(error);
      });
    });
    return streams.reduce(pipe);
  }

  var pipeline_1 = pipeline;

  (function (module, exports) {
    exports = module.exports = require$$0$4;
    exports.Stream = exports;
    exports.Readable = exports;
    exports.Writable = require$$1$6;
    exports.Duplex = require$$2$5;
    exports.Transform = _stream_transform;
    exports.PassThrough = _stream_passthrough;
    exports.finished = endOfStream;
    exports.pipeline = pipeline_1;
  })(readableBrowser, readableBrowser.exports);

  var Buffer$d = safeBuffer.exports.Buffer;
  var Transform$2 = readableBrowser.exports.Transform;
  var inherits$a = require$$0$8;

  function throwIfNotStringOrBuffer(val, prefix) {
    if (!Buffer$d.isBuffer(val) && typeof val !== 'string') {
      throw new TypeError(prefix + ' must be a string or a buffer');
    }
  }

  function HashBase$2(blockSize) {
    Transform$2.call(this);
    this._block = Buffer$d.allocUnsafe(blockSize);
    this._blockSize = blockSize;
    this._blockOffset = 0;
    this._length = [0, 0, 0, 0];
    this._finalized = false;
  }

  inherits$a(HashBase$2, Transform$2);

  HashBase$2.prototype._transform = function (chunk, encoding, callback) {
    var error = null;

    try {
      this.update(chunk, encoding);
    } catch (err) {
      error = err;
    }

    callback(error);
  };

  HashBase$2.prototype._flush = function (callback) {
    var error = null;

    try {
      this.push(this.digest());
    } catch (err) {
      error = err;
    }

    callback(error);
  };

  HashBase$2.prototype.update = function (data, encoding) {
    throwIfNotStringOrBuffer(data, 'Data');
    if (this._finalized) throw new Error('Digest already called');
    if (!Buffer$d.isBuffer(data)) data = Buffer$d.from(data, encoding); // consume data

    var block = this._block;
    var offset = 0;

    while (this._blockOffset + data.length - offset >= this._blockSize) {
      for (var i = this._blockOffset; i < this._blockSize;) block[i++] = data[offset++];

      this._update();

      this._blockOffset = 0;
    }

    while (offset < data.length) block[this._blockOffset++] = data[offset++]; // update length


    for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
      this._length[j] += carry;
      carry = this._length[j] / 0x0100000000 | 0;
      if (carry > 0) this._length[j] -= 0x0100000000 * carry;
    }

    return this;
  };

  HashBase$2.prototype._update = function () {
    throw new Error('_update is not implemented');
  };

  HashBase$2.prototype.digest = function (encoding) {
    if (this._finalized) throw new Error('Digest already called');
    this._finalized = true;

    var digest = this._digest();

    if (encoding !== undefined) digest = digest.toString(encoding); // reset state

    this._block.fill(0);

    this._blockOffset = 0;

    for (var i = 0; i < 4; ++i) this._length[i] = 0;

    return digest;
  };

  HashBase$2.prototype._digest = function () {
    throw new Error('_digest is not implemented');
  };

  var hashBase = HashBase$2;

  var inherits$9 = require$$0$8;
  var HashBase$1 = hashBase;
  var Buffer$c = safeBuffer.exports.Buffer;
  var ARRAY16$1 = new Array(16);

  function MD5$1() {
    HashBase$1.call(this, 64); // state

    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
  }

  inherits$9(MD5$1, HashBase$1);

  MD5$1.prototype._update = function () {
    var M = ARRAY16$1;

    for (var i = 0; i < 16; ++i) M[i] = this._block.readInt32LE(i * 4);

    var a = this._a;
    var b = this._b;
    var c = this._c;
    var d = this._d;
    a = fnF(a, b, c, d, M[0], 0xd76aa478, 7);
    d = fnF(d, a, b, c, M[1], 0xe8c7b756, 12);
    c = fnF(c, d, a, b, M[2], 0x242070db, 17);
    b = fnF(b, c, d, a, M[3], 0xc1bdceee, 22);
    a = fnF(a, b, c, d, M[4], 0xf57c0faf, 7);
    d = fnF(d, a, b, c, M[5], 0x4787c62a, 12);
    c = fnF(c, d, a, b, M[6], 0xa8304613, 17);
    b = fnF(b, c, d, a, M[7], 0xfd469501, 22);
    a = fnF(a, b, c, d, M[8], 0x698098d8, 7);
    d = fnF(d, a, b, c, M[9], 0x8b44f7af, 12);
    c = fnF(c, d, a, b, M[10], 0xffff5bb1, 17);
    b = fnF(b, c, d, a, M[11], 0x895cd7be, 22);
    a = fnF(a, b, c, d, M[12], 0x6b901122, 7);
    d = fnF(d, a, b, c, M[13], 0xfd987193, 12);
    c = fnF(c, d, a, b, M[14], 0xa679438e, 17);
    b = fnF(b, c, d, a, M[15], 0x49b40821, 22);
    a = fnG(a, b, c, d, M[1], 0xf61e2562, 5);
    d = fnG(d, a, b, c, M[6], 0xc040b340, 9);
    c = fnG(c, d, a, b, M[11], 0x265e5a51, 14);
    b = fnG(b, c, d, a, M[0], 0xe9b6c7aa, 20);
    a = fnG(a, b, c, d, M[5], 0xd62f105d, 5);
    d = fnG(d, a, b, c, M[10], 0x02441453, 9);
    c = fnG(c, d, a, b, M[15], 0xd8a1e681, 14);
    b = fnG(b, c, d, a, M[4], 0xe7d3fbc8, 20);
    a = fnG(a, b, c, d, M[9], 0x21e1cde6, 5);
    d = fnG(d, a, b, c, M[14], 0xc33707d6, 9);
    c = fnG(c, d, a, b, M[3], 0xf4d50d87, 14);
    b = fnG(b, c, d, a, M[8], 0x455a14ed, 20);
    a = fnG(a, b, c, d, M[13], 0xa9e3e905, 5);
    d = fnG(d, a, b, c, M[2], 0xfcefa3f8, 9);
    c = fnG(c, d, a, b, M[7], 0x676f02d9, 14);
    b = fnG(b, c, d, a, M[12], 0x8d2a4c8a, 20);
    a = fnH(a, b, c, d, M[5], 0xfffa3942, 4);
    d = fnH(d, a, b, c, M[8], 0x8771f681, 11);
    c = fnH(c, d, a, b, M[11], 0x6d9d6122, 16);
    b = fnH(b, c, d, a, M[14], 0xfde5380c, 23);
    a = fnH(a, b, c, d, M[1], 0xa4beea44, 4);
    d = fnH(d, a, b, c, M[4], 0x4bdecfa9, 11);
    c = fnH(c, d, a, b, M[7], 0xf6bb4b60, 16);
    b = fnH(b, c, d, a, M[10], 0xbebfbc70, 23);
    a = fnH(a, b, c, d, M[13], 0x289b7ec6, 4);
    d = fnH(d, a, b, c, M[0], 0xeaa127fa, 11);
    c = fnH(c, d, a, b, M[3], 0xd4ef3085, 16);
    b = fnH(b, c, d, a, M[6], 0x04881d05, 23);
    a = fnH(a, b, c, d, M[9], 0xd9d4d039, 4);
    d = fnH(d, a, b, c, M[12], 0xe6db99e5, 11);
    c = fnH(c, d, a, b, M[15], 0x1fa27cf8, 16);
    b = fnH(b, c, d, a, M[2], 0xc4ac5665, 23);
    a = fnI(a, b, c, d, M[0], 0xf4292244, 6);
    d = fnI(d, a, b, c, M[7], 0x432aff97, 10);
    c = fnI(c, d, a, b, M[14], 0xab9423a7, 15);
    b = fnI(b, c, d, a, M[5], 0xfc93a039, 21);
    a = fnI(a, b, c, d, M[12], 0x655b59c3, 6);
    d = fnI(d, a, b, c, M[3], 0x8f0ccc92, 10);
    c = fnI(c, d, a, b, M[10], 0xffeff47d, 15);
    b = fnI(b, c, d, a, M[1], 0x85845dd1, 21);
    a = fnI(a, b, c, d, M[8], 0x6fa87e4f, 6);
    d = fnI(d, a, b, c, M[15], 0xfe2ce6e0, 10);
    c = fnI(c, d, a, b, M[6], 0xa3014314, 15);
    b = fnI(b, c, d, a, M[13], 0x4e0811a1, 21);
    a = fnI(a, b, c, d, M[4], 0xf7537e82, 6);
    d = fnI(d, a, b, c, M[11], 0xbd3af235, 10);
    c = fnI(c, d, a, b, M[2], 0x2ad7d2bb, 15);
    b = fnI(b, c, d, a, M[9], 0xeb86d391, 21);
    this._a = this._a + a | 0;
    this._b = this._b + b | 0;
    this._c = this._c + c | 0;
    this._d = this._d + d | 0;
  };

  MD5$1.prototype._digest = function () {
    // create padding and handle blocks
    this._block[this._blockOffset++] = 0x80;

    if (this._blockOffset > 56) {
      this._block.fill(0, this._blockOffset, 64);

      this._update();

      this._blockOffset = 0;
    }

    this._block.fill(0, this._blockOffset, 56);

    this._block.writeUInt32LE(this._length[0], 56);

    this._block.writeUInt32LE(this._length[1], 60);

    this._update(); // produce result


    var buffer = Buffer$c.allocUnsafe(16);
    buffer.writeInt32LE(this._a, 0);
    buffer.writeInt32LE(this._b, 4);
    buffer.writeInt32LE(this._c, 8);
    buffer.writeInt32LE(this._d, 12);
    return buffer;
  };

  function rotl$1(x, n) {
    return x << n | x >>> 32 - n;
  }

  function fnF(a, b, c, d, m, k, s) {
    return rotl$1(a + (b & c | ~b & d) + m + k | 0, s) + b | 0;
  }

  function fnG(a, b, c, d, m, k, s) {
    return rotl$1(a + (b & d | c & ~d) + m + k | 0, s) + b | 0;
  }

  function fnH(a, b, c, d, m, k, s) {
    return rotl$1(a + (b ^ c ^ d) + m + k | 0, s) + b | 0;
  }

  function fnI(a, b, c, d, m, k, s) {
    return rotl$1(a + (c ^ (b | ~d)) + m + k | 0, s) + b | 0;
  }

  var md5_js = MD5$1;

  var Buffer$b = require$$0$7.Buffer;
  var inherits$8 = require$$0$8;
  var HashBase = hashBase;
  var ARRAY16 = new Array(16);
  var zl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
  var zr = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
  var sl = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
  var sr = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
  var hl = [0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e];
  var hr = [0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000];

  function RIPEMD160$1() {
    HashBase.call(this, 64); // state

    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._e = 0xc3d2e1f0;
  }

  inherits$8(RIPEMD160$1, HashBase);

  RIPEMD160$1.prototype._update = function () {
    var words = ARRAY16;

    for (var j = 0; j < 16; ++j) words[j] = this._block.readInt32LE(j * 4);

    var al = this._a | 0;
    var bl = this._b | 0;
    var cl = this._c | 0;
    var dl = this._d | 0;
    var el = this._e | 0;
    var ar = this._a | 0;
    var br = this._b | 0;
    var cr = this._c | 0;
    var dr = this._d | 0;
    var er = this._e | 0; // computation

    for (var i = 0; i < 80; i += 1) {
      var tl;
      var tr;

      if (i < 16) {
        tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i]);
        tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i]);
      } else if (i < 32) {
        tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i]);
        tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i]);
      } else if (i < 48) {
        tl = fn3(al, bl, cl, dl, el, words[zl[i]], hl[2], sl[i]);
        tr = fn3(ar, br, cr, dr, er, words[zr[i]], hr[2], sr[i]);
      } else if (i < 64) {
        tl = fn4(al, bl, cl, dl, el, words[zl[i]], hl[3], sl[i]);
        tr = fn2(ar, br, cr, dr, er, words[zr[i]], hr[3], sr[i]);
      } else {
        // if (i<80) {
        tl = fn5(al, bl, cl, dl, el, words[zl[i]], hl[4], sl[i]);
        tr = fn1(ar, br, cr, dr, er, words[zr[i]], hr[4], sr[i]);
      }

      al = el;
      el = dl;
      dl = rotl(cl, 10);
      cl = bl;
      bl = tl;
      ar = er;
      er = dr;
      dr = rotl(cr, 10);
      cr = br;
      br = tr;
    } // update state


    var t = this._b + cl + dr | 0;
    this._b = this._c + dl + er | 0;
    this._c = this._d + el + ar | 0;
    this._d = this._e + al + br | 0;
    this._e = this._a + bl + cr | 0;
    this._a = t;
  };

  RIPEMD160$1.prototype._digest = function () {
    // create padding and handle blocks
    this._block[this._blockOffset++] = 0x80;

    if (this._blockOffset > 56) {
      this._block.fill(0, this._blockOffset, 64);

      this._update();

      this._blockOffset = 0;
    }

    this._block.fill(0, this._blockOffset, 56);

    this._block.writeUInt32LE(this._length[0], 56);

    this._block.writeUInt32LE(this._length[1], 60);

    this._update(); // produce result


    var buffer = Buffer$b.alloc ? Buffer$b.alloc(20) : new Buffer$b(20);
    buffer.writeInt32LE(this._a, 0);
    buffer.writeInt32LE(this._b, 4);
    buffer.writeInt32LE(this._c, 8);
    buffer.writeInt32LE(this._d, 12);
    buffer.writeInt32LE(this._e, 16);
    return buffer;
  };

  function rotl(x, n) {
    return x << n | x >>> 32 - n;
  }

  function fn1(a, b, c, d, e, m, k, s) {
    return rotl(a + (b ^ c ^ d) + m + k | 0, s) + e | 0;
  }

  function fn2(a, b, c, d, e, m, k, s) {
    return rotl(a + (b & c | ~b & d) + m + k | 0, s) + e | 0;
  }

  function fn3(a, b, c, d, e, m, k, s) {
    return rotl(a + ((b | ~c) ^ d) + m + k | 0, s) + e | 0;
  }

  function fn4(a, b, c, d, e, m, k, s) {
    return rotl(a + (b & d | c & ~d) + m + k | 0, s) + e | 0;
  }

  function fn5(a, b, c, d, e, m, k, s) {
    return rotl(a + (b ^ (c | ~d)) + m + k | 0, s) + e | 0;
  }

  var ripemd160$1 = RIPEMD160$1;

  var sha_js = {exports: {}};

  var Buffer$a = safeBuffer.exports.Buffer; // prototype class for hash functions

  function Hash$7(blockSize, finalSize) {
    this._block = Buffer$a.alloc(blockSize);
    this._finalSize = finalSize;
    this._blockSize = blockSize;
    this._len = 0;
  }

  Hash$7.prototype.update = function (data, enc) {
    if (typeof data === 'string') {
      enc = enc || 'utf8';
      data = Buffer$a.from(data, enc);
    }

    var block = this._block;
    var blockSize = this._blockSize;
    var length = data.length;
    var accum = this._len;

    for (var offset = 0; offset < length;) {
      var assigned = accum % blockSize;
      var remainder = Math.min(length - offset, blockSize - assigned);

      for (var i = 0; i < remainder; i++) {
        block[assigned + i] = data[offset + i];
      }

      accum += remainder;
      offset += remainder;

      if (accum % blockSize === 0) {
        this._update(block);
      }
    }

    this._len += length;
    return this;
  };

  Hash$7.prototype.digest = function (enc) {
    var rem = this._len % this._blockSize;
    this._block[rem] = 0x80; // zero (rem + 1) trailing bits, where (rem + 1) is the smallest
    // non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize

    this._block.fill(0, rem + 1);

    if (rem >= this._finalSize) {
      this._update(this._block);

      this._block.fill(0);
    }

    var bits = this._len * 8; // uint32

    if (bits <= 0xffffffff) {
      this._block.writeUInt32BE(bits, this._blockSize - 4); // uint64

    } else {
      var lowBits = (bits & 0xffffffff) >>> 0;
      var highBits = (bits - lowBits) / 0x100000000;

      this._block.writeUInt32BE(highBits, this._blockSize - 8);

      this._block.writeUInt32BE(lowBits, this._blockSize - 4);
    }

    this._update(this._block);

    var hash = this._hash();

    return enc ? hash.toString(enc) : hash;
  };

  Hash$7.prototype._update = function () {
    throw new Error('_update must be implemented by subclass');
  };

  var hash = Hash$7;

  /*
   * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
   * in FIPS PUB 180-1
   * This source code is derived from sha1.js of the same repository.
   * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
   * operation was added.
   */
  var inherits$7 = require$$0$8;
  var Hash$6 = hash;
  var Buffer$9 = safeBuffer.exports.Buffer;
  var K$3 = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];
  var W$5 = new Array(80);

  function Sha() {
    this.init();
    this._w = W$5;
    Hash$6.call(this, 64, 56);
  }

  inherits$7(Sha, Hash$6);

  Sha.prototype.init = function () {
    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._e = 0xc3d2e1f0;
    return this;
  };

  function rotl5$1(num) {
    return num << 5 | num >>> 27;
  }

  function rotl30$1(num) {
    return num << 30 | num >>> 2;
  }

  function ft$1(s, b, c, d) {
    if (s === 0) return b & c | ~b & d;
    if (s === 2) return b & c | b & d | c & d;
    return b ^ c ^ d;
  }

  Sha.prototype._update = function (M) {
    var W = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;

    for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);

    for (; i < 80; ++i) W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];

    for (var j = 0; j < 80; ++j) {
      var s = ~~(j / 20);
      var t = rotl5$1(a) + ft$1(s, b, c, d) + e + W[j] + K$3[s] | 0;
      e = d;
      d = c;
      c = rotl30$1(b);
      b = a;
      a = t;
    }

    this._a = a + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
  };

  Sha.prototype._hash = function () {
    var H = Buffer$9.allocUnsafe(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
  };

  var sha$1 = Sha;

  /*
   * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
   * in FIPS PUB 180-1
   * Version 2.1a Copyright Paul Johnston 2000 - 2002.
   * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
   * Distributed under the BSD License
   * See http://pajhome.org.uk/crypt/md5 for details.
   */
  var inherits$6 = require$$0$8;
  var Hash$5 = hash;
  var Buffer$8 = safeBuffer.exports.Buffer;
  var K$2 = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];
  var W$4 = new Array(80);

  function Sha1() {
    this.init();
    this._w = W$4;
    Hash$5.call(this, 64, 56);
  }

  inherits$6(Sha1, Hash$5);

  Sha1.prototype.init = function () {
    this._a = 0x67452301;
    this._b = 0xefcdab89;
    this._c = 0x98badcfe;
    this._d = 0x10325476;
    this._e = 0xc3d2e1f0;
    return this;
  };

  function rotl1(num) {
    return num << 1 | num >>> 31;
  }

  function rotl5(num) {
    return num << 5 | num >>> 27;
  }

  function rotl30(num) {
    return num << 30 | num >>> 2;
  }

  function ft(s, b, c, d) {
    if (s === 0) return b & c | ~b & d;
    if (s === 2) return b & c | b & d | c & d;
    return b ^ c ^ d;
  }

  Sha1.prototype._update = function (M) {
    var W = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;

    for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);

    for (; i < 80; ++i) W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);

    for (var j = 0; j < 80; ++j) {
      var s = ~~(j / 20);
      var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K$2[s] | 0;
      e = d;
      d = c;
      c = rotl30(b);
      b = a;
      a = t;
    }

    this._a = a + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
  };

  Sha1.prototype._hash = function () {
    var H = Buffer$8.allocUnsafe(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
  };

  var sha1$1 = Sha1;

  /**
   * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
   * in FIPS 180-2
   * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
   * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
   *
   */
  var inherits$5 = require$$0$8;
  var Hash$4 = hash;
  var Buffer$7 = safeBuffer.exports.Buffer;
  var K$1 = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
  var W$3 = new Array(64);

  function Sha256$1() {
    this.init();
    this._w = W$3; // new Array(64)

    Hash$4.call(this, 64, 56);
  }

  inherits$5(Sha256$1, Hash$4);

  Sha256$1.prototype.init = function () {
    this._a = 0x6a09e667;
    this._b = 0xbb67ae85;
    this._c = 0x3c6ef372;
    this._d = 0xa54ff53a;
    this._e = 0x510e527f;
    this._f = 0x9b05688c;
    this._g = 0x1f83d9ab;
    this._h = 0x5be0cd19;
    return this;
  };

  function ch(x, y, z) {
    return z ^ x & (y ^ z);
  }

  function maj$1(x, y, z) {
    return x & y | z & (x | y);
  }

  function sigma0$1(x) {
    return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
  }

  function sigma1$1(x) {
    return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
  }

  function gamma0(x) {
    return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
  }

  function gamma1(x) {
    return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
  }

  Sha256$1.prototype._update = function (M) {
    var W = this._w;
    var a = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    var f = this._f | 0;
    var g = this._g | 0;
    var h = this._h | 0;

    for (var i = 0; i < 16; ++i) W[i] = M.readInt32BE(i * 4);

    for (; i < 64; ++i) W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;

    for (var j = 0; j < 64; ++j) {
      var T1 = h + sigma1$1(e) + ch(e, f, g) + K$1[j] + W[j] | 0;
      var T2 = sigma0$1(a) + maj$1(a, b, c) | 0;
      h = g;
      g = f;
      f = e;
      e = d + T1 | 0;
      d = c;
      c = b;
      b = a;
      a = T1 + T2 | 0;
    }

    this._a = a + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
    this._f = f + this._f | 0;
    this._g = g + this._g | 0;
    this._h = h + this._h | 0;
  };

  Sha256$1.prototype._hash = function () {
    var H = Buffer$7.allocUnsafe(32);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    H.writeInt32BE(this._h, 28);
    return H;
  };

  var sha256$1 = Sha256$1;

  /**
   * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
   * in FIPS 180-2
   * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
   * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
   *
   */
  var inherits$4 = require$$0$8;
  var Sha256 = sha256$1;
  var Hash$3 = hash;
  var Buffer$6 = safeBuffer.exports.Buffer;
  var W$2 = new Array(64);

  function Sha224() {
    this.init();
    this._w = W$2; // new Array(64)

    Hash$3.call(this, 64, 56);
  }

  inherits$4(Sha224, Sha256);

  Sha224.prototype.init = function () {
    this._a = 0xc1059ed8;
    this._b = 0x367cd507;
    this._c = 0x3070dd17;
    this._d = 0xf70e5939;
    this._e = 0xffc00b31;
    this._f = 0x68581511;
    this._g = 0x64f98fa7;
    this._h = 0xbefa4fa4;
    return this;
  };

  Sha224.prototype._hash = function () {
    var H = Buffer$6.allocUnsafe(28);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    return H;
  };

  var sha224 = Sha224;

  var inherits$3 = require$$0$8;
  var Hash$2 = hash;
  var Buffer$5 = safeBuffer.exports.Buffer;
  var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
  var W$1 = new Array(160);

  function Sha512() {
    this.init();
    this._w = W$1;
    Hash$2.call(this, 128, 112);
  }

  inherits$3(Sha512, Hash$2);

  Sha512.prototype.init = function () {
    this._ah = 0x6a09e667;
    this._bh = 0xbb67ae85;
    this._ch = 0x3c6ef372;
    this._dh = 0xa54ff53a;
    this._eh = 0x510e527f;
    this._fh = 0x9b05688c;
    this._gh = 0x1f83d9ab;
    this._hh = 0x5be0cd19;
    this._al = 0xf3bcc908;
    this._bl = 0x84caa73b;
    this._cl = 0xfe94f82b;
    this._dl = 0x5f1d36f1;
    this._el = 0xade682d1;
    this._fl = 0x2b3e6c1f;
    this._gl = 0xfb41bd6b;
    this._hl = 0x137e2179;
    return this;
  };

  function Ch(x, y, z) {
    return z ^ x & (y ^ z);
  }

  function maj(x, y, z) {
    return x & y | z & (x | y);
  }

  function sigma0(x, xl) {
    return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
  }

  function sigma1(x, xl) {
    return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
  }

  function Gamma0(x, xl) {
    return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
  }

  function Gamma0l(x, xl) {
    return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
  }

  function Gamma1(x, xl) {
    return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
  }

  function Gamma1l(x, xl) {
    return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
  }

  function getCarry(a, b) {
    return a >>> 0 < b >>> 0 ? 1 : 0;
  }

  Sha512.prototype._update = function (M) {
    var W = this._w;
    var ah = this._ah | 0;
    var bh = this._bh | 0;
    var ch = this._ch | 0;
    var dh = this._dh | 0;
    var eh = this._eh | 0;
    var fh = this._fh | 0;
    var gh = this._gh | 0;
    var hh = this._hh | 0;
    var al = this._al | 0;
    var bl = this._bl | 0;
    var cl = this._cl | 0;
    var dl = this._dl | 0;
    var el = this._el | 0;
    var fl = this._fl | 0;
    var gl = this._gl | 0;
    var hl = this._hl | 0;

    for (var i = 0; i < 32; i += 2) {
      W[i] = M.readInt32BE(i * 4);
      W[i + 1] = M.readInt32BE(i * 4 + 4);
    }

    for (; i < 160; i += 2) {
      var xh = W[i - 15 * 2];
      var xl = W[i - 15 * 2 + 1];
      var gamma0 = Gamma0(xh, xl);
      var gamma0l = Gamma0l(xl, xh);
      xh = W[i - 2 * 2];
      xl = W[i - 2 * 2 + 1];
      var gamma1 = Gamma1(xh, xl);
      var gamma1l = Gamma1l(xl, xh); // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]

      var Wi7h = W[i - 7 * 2];
      var Wi7l = W[i - 7 * 2 + 1];
      var Wi16h = W[i - 16 * 2];
      var Wi16l = W[i - 16 * 2 + 1];
      var Wil = gamma0l + Wi7l | 0;
      var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
      Wil = Wil + gamma1l | 0;
      Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
      Wil = Wil + Wi16l | 0;
      Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
      W[i] = Wih;
      W[i + 1] = Wil;
    }

    for (var j = 0; j < 160; j += 2) {
      Wih = W[j];
      Wil = W[j + 1];
      var majh = maj(ah, bh, ch);
      var majl = maj(al, bl, cl);
      var sigma0h = sigma0(ah, al);
      var sigma0l = sigma0(al, ah);
      var sigma1h = sigma1(eh, el);
      var sigma1l = sigma1(el, eh); // t1 = h + sigma1 + ch + K[j] + W[j]

      var Kih = K[j];
      var Kil = K[j + 1];
      var chh = Ch(eh, fh, gh);
      var chl = Ch(el, fl, gl);
      var t1l = hl + sigma1l | 0;
      var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
      t1l = t1l + chl | 0;
      t1h = t1h + chh + getCarry(t1l, chl) | 0;
      t1l = t1l + Kil | 0;
      t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
      t1l = t1l + Wil | 0;
      t1h = t1h + Wih + getCarry(t1l, Wil) | 0; // t2 = sigma0 + maj

      var t2l = sigma0l + majl | 0;
      var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = dl + t1l | 0;
      eh = dh + t1h + getCarry(el, dl) | 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = t1l + t2l | 0;
      ah = t1h + t2h + getCarry(al, t1l) | 0;
    }

    this._al = this._al + al | 0;
    this._bl = this._bl + bl | 0;
    this._cl = this._cl + cl | 0;
    this._dl = this._dl + dl | 0;
    this._el = this._el + el | 0;
    this._fl = this._fl + fl | 0;
    this._gl = this._gl + gl | 0;
    this._hl = this._hl + hl | 0;
    this._ah = this._ah + ah + getCarry(this._al, al) | 0;
    this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
    this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
    this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
    this._eh = this._eh + eh + getCarry(this._el, el) | 0;
    this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
    this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
    this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
  };

  Sha512.prototype._hash = function () {
    var H = Buffer$5.allocUnsafe(64);

    function writeInt64BE(h, l, offset) {
      H.writeInt32BE(h, offset);
      H.writeInt32BE(l, offset + 4);
    }

    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    writeInt64BE(this._gh, this._gl, 48);
    writeInt64BE(this._hh, this._hl, 56);
    return H;
  };

  var sha512 = Sha512;

  var inherits$2 = require$$0$8;
  var SHA512 = sha512;
  var Hash$1 = hash;
  var Buffer$4 = safeBuffer.exports.Buffer;
  var W = new Array(160);

  function Sha384() {
    this.init();
    this._w = W;
    Hash$1.call(this, 128, 112);
  }

  inherits$2(Sha384, SHA512);

  Sha384.prototype.init = function () {
    this._ah = 0xcbbb9d5d;
    this._bh = 0x629a292a;
    this._ch = 0x9159015a;
    this._dh = 0x152fecd8;
    this._eh = 0x67332667;
    this._fh = 0x8eb44a87;
    this._gh = 0xdb0c2e0d;
    this._hh = 0x47b5481d;
    this._al = 0xc1059ed8;
    this._bl = 0x367cd507;
    this._cl = 0x3070dd17;
    this._dl = 0xf70e5939;
    this._el = 0xffc00b31;
    this._fl = 0x68581511;
    this._gl = 0x64f98fa7;
    this._hl = 0xbefa4fa4;
    return this;
  };

  Sha384.prototype._hash = function () {
    var H = Buffer$4.allocUnsafe(48);

    function writeInt64BE(h, l, offset) {
      H.writeInt32BE(h, offset);
      H.writeInt32BE(l, offset + 4);
    }

    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    return H;
  };

  var sha384 = Sha384;

  var exports$1 = sha_js.exports = function SHA(algorithm) {
    algorithm = algorithm.toLowerCase();
    var Algorithm = exports$1[algorithm];
    if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)');
    return new Algorithm();
  };

  exports$1.sha = sha$1;
  exports$1.sha1 = sha1$1;
  exports$1.sha224 = sha224;
  exports$1.sha256 = sha256$1;
  exports$1.sha384 = sha384;
  exports$1.sha512 = sha512;

  function BufferList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function (v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function (v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function () {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function () {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function (s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function (n) {
    if (this.length === 0) return Buffer$g.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer$g.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      p.data.copy(ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  Readable.ReadableState = ReadableState;

  var debug = debuglog('stream');
  inherits$c(Readable, EventEmitter);

  function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') {
      return emitter.prependListener(event, fn);
    } else {
      // This is a hack to make sure that our error handler is attached before any
      // userland ones.  NEVER DO THIS. This is here only because this code needs
      // to continue to work with older versions of Node.js that do not include
      // the prependListener() method. The goal is to eventually remove this hack.
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
  }
  function listenerCount (emitter, type) {
    return emitter.listeners(type).length;
  }
  function ReadableState(options, stream) {

    options = options || {};

    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;

    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

    // cast to ints.
    this.highWaterMark = ~ ~this.highWaterMark;

    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;

    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;

    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;

    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';

    // when piping, we only care about 'readable' events that happen
    // after read()ing all the bytes and not getting any pushback.
    this.ranOut = false;

    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;

    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;

    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      this.decoder = new StringDecoder$2(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {

    if (!(this instanceof Readable)) return new Readable(options);

    this._readableState = new ReadableState(options, this);

    // legacy
    this.readable = true;

    if (options && typeof options.read === 'function') this._read = options.read;

    EventEmitter.call(this);
  }

  // Manually shove something into the read() buffer.
  // This returns true if the highWaterMark has not been hit yet,
  // similar to how Writable.write() returns true if you should
  // write() some more.
  Readable.prototype.push = function (chunk, encoding) {
    var state = this._readableState;

    if (!state.objectMode && typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer$g.from(chunk, encoding);
        encoding = '';
      }
    }

    return readableAddChunk(this, state, chunk, encoding, false);
  };

  // Unshift should *always* be something directly out of read()
  Readable.prototype.unshift = function (chunk) {
    var state = this._readableState;
    return readableAddChunk(this, state, chunk, '', true);
  };

  Readable.prototype.isPaused = function () {
    return this._readableState.flowing === false;
  };

  function readableAddChunk(stream, state, chunk, encoding, addToFront) {
    var er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (state.ended && !addToFront) {
        var e = new Error('stream.push() after EOF');
        stream.emit('error', e);
      } else if (state.endEmitted && addToFront) {
        var _e = new Error('stream.unshift() after end event');
        stream.emit('error', _e);
      } else {
        var skipAdd;
        if (state.decoder && !addToFront && !encoding) {
          chunk = state.decoder.write(chunk);
          skipAdd = !state.objectMode && chunk.length === 0;
        }

        if (!addToFront) state.reading = false;

        // Don't add to the buffer if we've decoded to an empty string chunk and
        // we're not in object mode
        if (!skipAdd) {
          // if we want the data now, just emit it.
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            // update the buffer info.
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

            if (state.needReadable) emitReadable(stream);
          }
        }

        maybeReadMore(stream, state);
      }
    } else if (!addToFront) {
      state.reading = false;
    }

    return needMoreData(state);
  }

  // if it's past the high water mark, we can push in some more.
  // Also, if we have no data yet, we can stand some
  // more bytes.  This is to work around cases where hwm=0,
  // such as the repl.  Also, if the push() triggered a
  // readable event, and the user called read(largeNumber) such that
  // needReadable was set, then we ought to push more, so that another
  // 'readable' event will be triggered.
  function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
  }

  // backwards compatibility.
  Readable.prototype.setEncoding = function (enc) {
    this._readableState.decoder = new StringDecoder$2(enc);
    this._readableState.encoding = enc;
    return this;
  };

  // Don't raise the hwm > 8MB
  var MAX_HWM = 0x800000;
  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      // Get the next highest power of 2 to prevent increasing hwm excessively in
      // tiny amounts
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }

  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
      // Only flow one buffer at a time
      if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }

  // you can override either this method, or the async _read(n) below.
  Readable.prototype.read = function (n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;

    if (n !== 0) state.emittedReadable = false;

    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
      debug('read: emitReadable', state.length, state.ended);
      if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
      return null;
    }

    n = howMuchToRead(n, state);

    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
      if (state.length === 0) endReadable(this);
      return null;
    }

    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.

    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead);

    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug('length less than watermark', doRead);
    }

    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
      doRead = false;
      debug('reading or ended', doRead);
    } else if (doRead) {
      debug('do read');
      state.reading = true;
      state.sync = true;
      // if the length is currently zero, then we *need* a readable event.
      if (state.length === 0) state.needReadable = true;
      // call internal read method
      this._read(state.highWaterMark);
      state.sync = false;
      // If _read pushed data synchronously, then `reading` will be false,
      // and we need to re-evaluate how much data we can return to the user.
      if (!state.reading) n = howMuchToRead(nOrig, state);
    }

    var ret;
    if (n > 0) ret = fromList(n, state);else ret = null;

    if (ret === null) {
      state.needReadable = true;
      n = 0;
    } else {
      state.length -= n;
    }

    if (state.length === 0) {
      // If we have nothing in the buffer, then we want to know
      // as soon as we *do* get something into the buffer.
      if (!state.ended) state.needReadable = true;

      // If we tried to read() past the EOF, then emit end on the next tick.
      if (nOrig !== n && state.ended) endReadable(this);
    }

    if (ret !== null) this.emit('data', ret);

    return ret;
  };

  function chunkInvalid(state, chunk) {
    var er = null;
    if (!Buffer$g.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    return er;
  }

  function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;

    // emit 'readable' now to make sure it gets picked up.
    emitReadable(stream);
  }

  // Don't emit readable right away in sync mode, because this can trigger
  // another read() call => stack overflow.  This way, it might trigger
  // a nextTick recursion warning, but that's not so bad.
  function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug('emitReadable', state.flowing);
      state.emittedReadable = true;
      if (state.sync) nextTick$1(emitReadable_, stream);else emitReadable_(stream);
    }
  }

  function emitReadable_(stream) {
    debug('emit readable');
    stream.emit('readable');
    flow(stream);
  }

  // at this point, the user has presumably seen the 'readable' event,
  // and called read() to consume some data.  that may have triggered
  // in turn another _read(n) call, in which case reading = true if
  // it's in progress.
  // However, if we're not ended, or reading, and the length < hwm,
  // then go ahead and try to read some more preemptively.
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      nextTick$1(maybeReadMore_, stream, state);
    }
  }

  function maybeReadMore_(stream, state) {
    var len = state.length;
    while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
      debug('maybeReadMore read 0');
      stream.read(0);
      if (len === state.length)
        // didn't get any data, stop spinning.
        break;else len = state.length;
    }
    state.readingMore = false;
  }

  // abstract method.  to be overridden in specific implementation classes.
  // call cb(er, data) where data is <= n in length.
  // for virtual (non-string, non-buffer) streams, "length" is somewhat
  // arbitrary, and perhaps not very meaningful.
  Readable.prototype._read = function (n) {
    this.emit('error', new Error('not implemented'));
  };

  Readable.prototype.pipe = function (dest, pipeOpts) {
    var src = this;
    var state = this._readableState;

    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

    var doEnd = (!pipeOpts || pipeOpts.end !== false);

    var endFn = doEnd ? onend : cleanup;
    if (state.endEmitted) nextTick$1(endFn);else src.once('end', endFn);

    dest.on('unpipe', onunpipe);
    function onunpipe(readable) {
      debug('onunpipe');
      if (readable === src) {
        cleanup();
      }
    }

    function onend() {
      debug('onend');
      dest.end();
    }

    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);

    var cleanedUp = false;
    function cleanup() {
      debug('cleanup');
      // cleanup event handlers once the pipe is broken
      dest.removeListener('close', onclose);
      dest.removeListener('finish', onfinish);
      dest.removeListener('drain', ondrain);
      dest.removeListener('error', onerror);
      dest.removeListener('unpipe', onunpipe);
      src.removeListener('end', onend);
      src.removeListener('end', cleanup);
      src.removeListener('data', ondata);

      cleanedUp = true;

      // if the reader is waiting for a drain event from this
      // specific writer, then it would cause it to never start
      // flowing again.
      // So, if this is awaiting a drain, then we just call it now.
      // If we don't know, then assume that we are waiting for one.
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }

    // If the user pushes more data while we're writing to dest then we'll end up
    // in ondata again. However, we only want to increase awaitDrain once because
    // dest will only emit one 'drain' event for the multiple writes.
    // => Introduce a guard on increasing awaitDrain.
    var increasedAwaitDrain = false;
    src.on('data', ondata);
    function ondata(chunk) {
      debug('ondata');
      increasedAwaitDrain = false;
      var ret = dest.write(chunk);
      if (false === ret && !increasedAwaitDrain) {
        // If the user unpiped during `dest.write()`, it is possible
        // to get stuck in a permanently paused state if that write
        // also returned false.
        // => Check whether `dest` is still a piping destination.
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug('false write response, pause', src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          increasedAwaitDrain = true;
        }
        src.pause();
      }
    }

    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
      debug('onerror', er);
      unpipe();
      dest.removeListener('error', onerror);
      if (listenerCount(dest, 'error') === 0) dest.emit('error', er);
    }

    // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror);

    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
      dest.removeListener('finish', onfinish);
      unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
      debug('onfinish');
      dest.removeListener('close', onclose);
      unpipe();
    }
    dest.once('finish', onfinish);

    function unpipe() {
      debug('unpipe');
      src.unpipe(dest);
    }

    // tell the dest that it's being piped to
    dest.emit('pipe', src);

    // start the flow if it hasn't been started already.
    if (!state.flowing) {
      debug('pipe resume');
      src.resume();
    }

    return dest;
  };

  function pipeOnDrain(src) {
    return function () {
      var state = src._readableState;
      debug('pipeOnDrain', state.awaitDrain);
      if (state.awaitDrain) state.awaitDrain--;
      if (state.awaitDrain === 0 && src.listeners('data').length) {
        state.flowing = true;
        flow(src);
      }
    };
  }

  Readable.prototype.unpipe = function (dest) {
    var state = this._readableState;

    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;

    // just one destination.  most common case.
    if (state.pipesCount === 1) {
      // passed in one, but it's not the right one.
      if (dest && dest !== state.pipes) return this;

      if (!dest) dest = state.pipes;

      // got a match.
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest) dest.emit('unpipe', this);
      return this;
    }

    // slow case. multiple pipe destinations.

    if (!dest) {
      // remove all.
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;

      for (var _i = 0; _i < len; _i++) {
        dests[_i].emit('unpipe', this);
      }return this;
    }

    // try to find the right one.
    var i = indexOf(state.pipes, dest);
    if (i === -1) return this;

    state.pipes.splice(i, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];

    dest.emit('unpipe', this);

    return this;
  };

  // set up data events if they are asked for
  // Ensure readable listeners eventually get something
  Readable.prototype.on = function (ev, fn) {
    var res = EventEmitter.prototype.on.call(this, ev, fn);

    if (ev === 'data') {
      // Start flowing on next tick if stream isn't explicitly paused
      if (this._readableState.flowing !== false) this.resume();
    } else if (ev === 'readable') {
      var state = this._readableState;
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.emittedReadable = false;
        if (!state.reading) {
          nextTick$1(nReadingNextTick, this);
        } else if (state.length) {
          emitReadable(this);
        }
      }
    }

    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;

  function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
  }

  // pause() and resume() are remnants of the legacy readable stream API
  // If the user uses them, then switch into old mode.
  Readable.prototype.resume = function () {
    var state = this._readableState;
    if (!state.flowing) {
      debug('resume');
      state.flowing = true;
      resume(this, state);
    }
    return this;
  };

  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      nextTick$1(resume_, stream, state);
    }
  }

  function resume_(stream, state) {
    if (!state.reading) {
      debug('resume read 0');
      stream.read(0);
    }

    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
  }

  Readable.prototype.pause = function () {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (false !== this._readableState.flowing) {
      debug('pause');
      this._readableState.flowing = false;
      this.emit('pause');
    }
    return this;
  };

  function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while (state.flowing && stream.read() !== null) {}
  }

  // wrap an old-style stream as the async data source.
  // This is *not* part of the readable stream interface.
  // It is an ugly unfortunate mess of history.
  Readable.prototype.wrap = function (stream) {
    var state = this._readableState;
    var paused = false;

    var self = this;
    stream.on('end', function () {
      debug('wrapped end');
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) self.push(chunk);
      }

      self.push(null);
    });

    stream.on('data', function (chunk) {
      debug('wrapped data');
      if (state.decoder) chunk = state.decoder.write(chunk);

      // don't skip over falsy values in objectMode
      if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

      var ret = self.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });

    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for (var i in stream) {
      if (this[i] === undefined && typeof stream[i] === 'function') {
        this[i] = function (method) {
          return function () {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    }

    // proxy certain important events.
    var events = ['error', 'close', 'destroy', 'pause', 'resume'];
    forEach(events, function (ev) {
      stream.on(ev, self.emit.bind(self, ev));
    });

    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    self._read = function (n) {
      debug('wrapped _read', n);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };

    return self;
  };

  // exposed for testing purposes only.
  Readable._fromList = fromList;

  // Pluck off n bytes from an array of buffers.
  // Length is the combined lengths of all the buffers in the list.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;

    var ret;
    if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
      // read it all, truncate the list
      if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      // read part of list
      ret = fromListPartial(n, state.buffer, state.decoder);
    }

    return ret;
  }

  // Extracts only enough buffered data to satisfy the amount requested.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
      // slice is the same for buffers and strings
      ret = list.head.data.slice(0, n);
      list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
      // first chunk is a perfect match
      ret = list.shift();
    } else {
      // result spans more than one buffer
      ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
  }

  // Copies a specified amount of characters from the list of buffered data
  // chunks.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while (p = p.next) {
      var str = p.data;
      var nb = n > str.length ? str.length : n;
      if (nb === str.length) ret += str;else ret += str.slice(0, n);
      n -= nb;
      if (n === 0) {
        if (nb === str.length) {
          ++c;
          if (p.next) list.head = p.next;else list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = str.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }

  // Copies a specified amount of bytes from the list of buffered data chunks.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function copyFromBuffer(n, list) {
    var ret = Buffer$g.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while (p = p.next) {
      var buf = p.data;
      var nb = n > buf.length ? buf.length : n;
      buf.copy(ret, ret.length - n, 0, nb);
      n -= nb;
      if (n === 0) {
        if (nb === buf.length) {
          ++c;
          if (p.next) list.head = p.next;else list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = buf.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }

  function endReadable(stream) {
    var state = stream._readableState;

    // If we get here before consuming all the bytes, then that is a
    // bug in node.  Should never happen.
    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

    if (!state.endEmitted) {
      state.ended = true;
      nextTick$1(endReadableNT, state, stream);
    }
  }

  function endReadableNT(state, stream) {
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit('end');
    }
  }

  function forEach(xs, f) {
    for (var i = 0, l = xs.length; i < l; i++) {
      f(xs[i], i);
    }
  }

  function indexOf(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) return i;
    }
    return -1;
  }

  // A bit simpler than readable streams.
  Writable.WritableState = WritableState;
  inherits$c(Writable, EventEmitter);

  function nop() {}

  function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
  }

  function WritableState(options, stream) {
    Object.defineProperty(this, 'buffer', {
      get: deprecate$1(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
    options = options || {};

    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;

    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

    // cast to ints.
    this.highWaterMark = ~ ~this.highWaterMark;

    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;

    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;

    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';

    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;

    // a flag to see when we're in the middle of a write.
    this.writing = false;

    // when true all writes will be buffered until .uncork() call
    this.corked = 0;

    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;

    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;

    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function (er) {
      onwrite(stream, er);
    };

    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;

    // the amount that is being written when _write is called.
    this.writelen = 0;

    this.bufferedRequest = null;
    this.lastBufferedRequest = null;

    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;

    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;

    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;

    // count buffered requests
    this.bufferedRequestCount = 0;

    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
  }

  WritableState.prototype.getBuffer = function writableStateGetBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  function Writable(options) {

    // Writable ctor is applied to Duplexes, though they're not
    // instanceof Writable, they're instanceof Readable.
    if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

    this._writableState = new WritableState(options, this);

    // legacy.
    this.writable = true;

    if (options) {
      if (typeof options.write === 'function') this._write = options.write;

      if (typeof options.writev === 'function') this._writev = options.writev;
    }

    EventEmitter.call(this);
  }

  // Otherwise people can pipe Writable streams, which is just wrong.
  Writable.prototype.pipe = function () {
    this.emit('error', new Error('Cannot pipe, not readable'));
  };

  function writeAfterEnd(stream, cb) {
    var er = new Error('write after end');
    // TODO: defer error events consistently everywhere, not just the cb
    stream.emit('error', er);
    nextTick$1(cb, er);
  }

  // If we get something that is not a buffer, string, null, or undefined,
  // and we're not in objectMode, then that's an error.
  // Otherwise stream chunks are all considered to be of length=1, and the
  // watermarks determine how many objects to keep in the buffer, rather than
  // how many bytes or characters.
  function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    // Always throw error if a null is written
    // if we are not in object mode then throw
    // if it is not a buffer, string, or undefined.
    if (chunk === null) {
      er = new TypeError('May not write null values to stream');
    } else if (!Buffer$g.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    if (er) {
      stream.emit('error', er);
      nextTick$1(cb, er);
      valid = false;
    }
    return valid;
  }

  Writable.prototype.write = function (chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;

    if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (Buffer$g.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

    if (typeof cb !== 'function') cb = nop;

    if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, chunk, encoding, cb);
    }

    return ret;
  };

  Writable.prototype.cork = function () {
    var state = this._writableState;

    state.corked++;
  };

  Writable.prototype.uncork = function () {
    var state = this._writableState;

    if (state.corked) {
      state.corked--;

      if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
  };

  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };

  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
      chunk = Buffer$g.from(chunk, encoding);
    }
    return chunk;
  }

  // if we're already writing something, then just put this
  // in the queue, and wait our turn.  Otherwise, call _write
  // If we return false, then we need a drain event, so set that flag.
  function writeOrBuffer(stream, state, chunk, encoding, cb) {
    chunk = decodeChunk(state, chunk, encoding);

    if (Buffer$g.isBuffer(chunk)) encoding = 'buffer';
    var len = state.objectMode ? 1 : chunk.length;

    state.length += len;

    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;

    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }

    return ret;
  }

  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }

  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) nextTick$1(cb, er);else cb(er);

    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  }

  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }

  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;

    onwriteStateUpdate(state);

    if (er) onwriteError(stream, state, sync, er, cb);else {
      // Check if we're actually ready to finish, but don't emit yet
      var finished = needFinish(state);

      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }

      if (sync) {
        /*<replacement>*/
          nextTick$1(afterWrite, stream, state, finished, cb);
        /*</replacement>*/
      } else {
          afterWrite(stream, state, finished, cb);
        }
    }
  }

  function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }

  // Must force callback to be called on nextTick, so that we don't
  // emit 'drain' before the write() consumer gets the 'false' return
  // value, and has a chance to attach a 'drain' listener.
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit('drain');
    }
  }

  // if there's something in the buffer waiting, then process it
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;

    if (stream._writev && entry && entry.next) {
      // Fast case, write everything using _writev()
      var l = state.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;

      var count = 0;
      while (entry) {
        buffer[count] = entry;
        entry = entry.next;
        count += 1;
      }

      doWrite(stream, state, true, state.length, buffer, '', holder.finish);

      // doWrite is almost always async, defer these to save a bit of time
      // as the hot path ends with doWrite
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
    } else {
      // Slow case, write chunks one-by-one
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;

        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        // if we didn't call the onwrite immediately, then
        // it means that we need to wait until it does.
        // also, that means that the chunk and cb are currently
        // being processed, so move the buffer counter past them.
        if (state.writing) {
          break;
        }
      }

      if (entry === null) state.lastBufferedRequest = null;
    }

    state.bufferedRequestCount = 0;
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }

  Writable.prototype._write = function (chunk, encoding, cb) {
    cb(new Error('not implemented'));
  };

  Writable.prototype._writev = null;

  Writable.prototype.end = function (chunk, encoding, cb) {
    var state = this._writableState;

    if (typeof chunk === 'function') {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

    // .end() fully uncorks
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }

    // ignore unnecessary end() calls.
    if (!state.ending && !state.finished) endWritable(this, state, cb);
  };

  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }

  function prefinish(stream, state) {
    if (!state.prefinished) {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }

  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      if (state.pendingcb === 0) {
        prefinish(stream, state);
        state.finished = true;
        stream.emit('finish');
      } else {
        prefinish(stream, state);
      }
    }
    return need;
  }

  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished) nextTick$1(cb);else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
  }

  // It seems a linked list but it is not
  // there will be only 2 of these for each stream
  function CorkedRequest(state) {
    var _this = this;

    this.next = null;
    this.entry = null;

    this.finish = function (err) {
      var entry = _this.entry;
      _this.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = _this;
      } else {
        state.corkedRequestsFree = _this;
      }
    };
  }

  inherits$c(Duplex, Readable);

  var keys = Object.keys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
  function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);

    Readable.call(this, options);
    Writable.call(this, options);

    if (options && options.readable === false) this.readable = false;

    if (options && options.writable === false) this.writable = false;

    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

    this.once('end', onend);
  }

  // the no-half-open enforcer
  function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;

    // no more data can be written.
    // But allow more writes to happen in this tick.
    nextTick$1(onEndNT, this);
  }

  function onEndNT(self) {
    self.end();
  }

  // a transform stream is a readable/writable stream where you do
  inherits$c(Transform$1, Duplex);

  function TransformState(stream) {
    this.afterTransform = function (er, data) {
      return afterTransform(stream, er, data);
    };

    this.needTransform = false;
    this.transforming = false;
    this.writecb = null;
    this.writechunk = null;
    this.writeencoding = null;
  }

  function afterTransform(stream, er, data) {
    var ts = stream._transformState;
    ts.transforming = false;

    var cb = ts.writecb;

    if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

    ts.writechunk = null;
    ts.writecb = null;

    if (data !== null && data !== undefined) stream.push(data);

    cb(er);

    var rs = stream._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      stream._read(rs.highWaterMark);
    }
  }
  function Transform$1(options) {
    if (!(this instanceof Transform$1)) return new Transform$1(options);

    Duplex.call(this, options);

    this._transformState = new TransformState(this);

    // when the writable side finishes, then flush out anything remaining.
    var stream = this;

    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;

    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;

    if (options) {
      if (typeof options.transform === 'function') this._transform = options.transform;

      if (typeof options.flush === 'function') this._flush = options.flush;
    }

    this.once('prefinish', function () {
      if (typeof this._flush === 'function') this._flush(function (er) {
        done(stream, er);
      });else done(stream);
    });
  }

  Transform$1.prototype.push = function (chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };

  // This is the part where you do stuff!
  // override this function in implementation classes.
  // 'chunk' is an input chunk.
  //
  // Call `push(newChunk)` to pass along transformed output
  // to the readable side.  You may call 'push' zero or more times.
  //
  // Call `cb(err)` when you are done with this chunk.  If you pass
  // an error, then that'll put the hurt on the whole operation.  If you
  // never call cb(), then you'll never get another chunk.
  Transform$1.prototype._transform = function (chunk, encoding, cb) {
    throw new Error('Not implemented');
  };

  Transform$1.prototype._write = function (chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
  };

  // Doesn't matter what the args are here.
  // _transform does all the work.
  // That we got here means that the readable side wants more data.
  Transform$1.prototype._read = function (n) {
    var ts = this._transformState;

    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      // mark that we need a transform, so that any data that comes in
      // will get processed, now that we've asked for it.
      ts.needTransform = true;
    }
  };

  function done(stream, er) {
    if (er) return stream.emit('error', er);

    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    var ws = stream._writableState;
    var ts = stream._transformState;

    if (ws.length) throw new Error('Calling transform done when ws.length != 0');

    if (ts.transforming) throw new Error('Calling transform done when still transforming');

    return stream.push(null);
  }

  inherits$c(PassThrough, Transform$1);
  function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);

    Transform$1.call(this, options);
  }

  PassThrough.prototype._transform = function (chunk, encoding, cb) {
    cb(null, chunk);
  };

  inherits$c(Stream, EventEmitter);
  Stream.Readable = Readable;
  Stream.Writable = Writable;
  Stream.Duplex = Duplex;
  Stream.Transform = Transform$1;
  Stream.PassThrough = PassThrough;

  // Backwards-compat with node 0.4.x
  Stream.Stream = Stream;

  // old-style streams.  Note that the pipe method (the only relevant
  // part of this class) is overridden in the Readable class.

  function Stream() {
    EventEmitter.call(this);
  }

  Stream.prototype.pipe = function(dest, options) {
    var source = this;

    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }

    source.on('data', ondata);

    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }

    dest.on('drain', ondrain);

    // If the 'end' option is not supplied, dest.end() will be called when
    // source gets the 'end' or 'close' events.  Only dest.end() once.
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }

    var didOnEnd = false;
    function onend() {
      if (didOnEnd) return;
      didOnEnd = true;

      dest.end();
    }


    function onclose() {
      if (didOnEnd) return;
      didOnEnd = true;

      if (typeof dest.destroy === 'function') dest.destroy();
    }

    // don't leave dangling pipes when there are errors.
    function onerror(er) {
      cleanup();
      if (EventEmitter.listenerCount(this, 'error') === 0) {
        throw er; // Unhandled stream error in pipe.
      }
    }

    source.on('error', onerror);
    dest.on('error', onerror);

    // remove all the event listeners that were added.
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);

      source.removeListener('end', onend);
      source.removeListener('close', onclose);

      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);

      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);

      dest.removeListener('close', cleanup);
    }

    source.on('end', cleanup);
    source.on('close', cleanup);

    dest.on('close', cleanup);

    dest.emit('pipe', source);

    // Allow for unix-like usage: A.pipe(B).pipe(C)
    return dest;
  };

  var _polyfillNode_stream = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Stream,
    Readable: Readable,
    Writable: Writable,
    Duplex: Duplex,
    Transform: Transform$1,
    PassThrough: PassThrough,
    Stream: Stream
  });

  var require$$1$5 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_stream);

  var Buffer$3 = safeBuffer.exports.Buffer;
  var Transform = require$$1$5.Transform;
  var StringDecoder = require$$2$4.StringDecoder;
  var inherits$1 = require$$0$8;

  function CipherBase(hashMode) {
    Transform.call(this);
    this.hashMode = typeof hashMode === 'string';

    if (this.hashMode) {
      this[hashMode] = this._finalOrDigest;
    } else {
      this.final = this._finalOrDigest;
    }

    if (this._final) {
      this.__final = this._final;
      this._final = null;
    }

    this._decoder = null;
    this._encoding = null;
  }

  inherits$1(CipherBase, Transform);

  CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
    if (typeof data === 'string') {
      data = Buffer$3.from(data, inputEnc);
    }

    var outData = this._update(data);

    if (this.hashMode) return this;

    if (outputEnc) {
      outData = this._toString(outData, outputEnc);
    }

    return outData;
  };

  CipherBase.prototype.setAutoPadding = function () {};

  CipherBase.prototype.getAuthTag = function () {
    throw new Error('trying to get auth tag in unsupported state');
  };

  CipherBase.prototype.setAuthTag = function () {
    throw new Error('trying to set auth tag in unsupported state');
  };

  CipherBase.prototype.setAAD = function () {
    throw new Error('trying to set aad in unsupported state');
  };

  CipherBase.prototype._transform = function (data, _, next) {
    var err;

    try {
      if (this.hashMode) {
        this._update(data);
      } else {
        this.push(this._update(data));
      }
    } catch (e) {
      err = e;
    } finally {
      next(err);
    }
  };

  CipherBase.prototype._flush = function (done) {
    var err;

    try {
      this.push(this.__final());
    } catch (e) {
      err = e;
    }

    done(err);
  };

  CipherBase.prototype._finalOrDigest = function (outputEnc) {
    var outData = this.__final() || Buffer$3.alloc(0);

    if (outputEnc) {
      outData = this._toString(outData, outputEnc, true);
    }

    return outData;
  };

  CipherBase.prototype._toString = function (value, enc, fin) {
    if (!this._decoder) {
      this._decoder = new StringDecoder(enc);
      this._encoding = enc;
    }

    if (this._encoding !== enc) throw new Error('can\'t switch encodings');

    var out = this._decoder.write(value);

    if (fin) {
      out += this._decoder.end();
    }

    return out;
  };

  var cipherBase = CipherBase;

  var inherits = require$$0$8;
  var MD5 = md5_js;
  var RIPEMD160 = ripemd160$1;
  var sha = sha_js.exports;
  var Base = cipherBase;

  function Hash(hash) {
    Base.call(this, 'digest');
    this._hash = hash;
  }

  inherits(Hash, Base);

  Hash.prototype._update = function (data) {
    this._hash.update(data);
  };

  Hash.prototype._final = function () {
    return this._hash.digest();
  };

  var browser = function createHash(alg) {
    alg = alg.toLowerCase();
    if (alg === 'md5') return new MD5();
    if (alg === 'rmd160' || alg === 'ripemd160') return new RIPEMD160();
    return new Hash(sha(alg));
  };

  var src$1 = {};

  var networks$1 = {};

  Object.defineProperty(networks$1, '__esModule', {
    value: true
  });
  networks$1.testnet = networks$1.regtest = networks$1.bitcoin = void 0;
  networks$1.bitcoin = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  };
  networks$1.regtest = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bcrt',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  };
  networks$1.testnet = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
  };

  var payments$2 = {};

  var embed = {};

  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var inited = false;

  function init() {
    inited = true;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
  }

  function toByteArray(b64) {
    if (!inited) {
      init();
    }

    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;

    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    } // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice


    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0; // base64 is 4/3 + up to two characters of the original data

    arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

    l = placeHolders > 0 ? len - 4 : len;
    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = tmp >> 16 & 0xFF;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[L++] = tmp >> 8 & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr;
  }

  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }

  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];

    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
      output.push(tripletToBase64(tmp));
    }

    return output.join('');
  }

  function fromByteArray(uint8) {
    if (!inited) {
      init();
    }

    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3
    // go through the array every three bytes, we'll deal with trailing stuff later

    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    } // pad the end with zeros, but make sure to not forget the extra bytes


    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[tmp << 4 & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      output += lookup[tmp >> 10];
      output += lookup[tmp >> 4 & 0x3F];
      output += lookup[tmp << 2 & 0x3F];
      output += '=';
    }

    parts.push(output);
    return parts.join('');
  }

  function read(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;

    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;

    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }

    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  }
  function write(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);

      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }

      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }

      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;

    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  }

  var toString = {}.toString;
  var isArray = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  var INSPECT_MAX_BYTES = 50;
  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.

   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */

  Buffer$2.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined ? global$1.TYPED_ARRAY_SUPPORT : true;
  /*
   * Export kMaxLength after typed array support is determined.
   */

  kMaxLength();

  function kMaxLength() {
    return Buffer$2.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }

  function createBuffer(that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length');
    }

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = new Uint8Array(length);
      that.__proto__ = Buffer$2.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      if (that === null) {
        that = new Buffer$2(length);
      }

      that.length = length;
    }

    return that;
  }
  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */


  function Buffer$2(arg, encodingOrOffset, length) {
    if (!Buffer$2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$2)) {
      return new Buffer$2(arg, encodingOrOffset, length);
    } // Common case.


    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error('If encoding is specified then the first argument must be a string');
      }

      return allocUnsafe(this, arg);
    }

    return from(this, arg, encodingOrOffset, length);
  }
  Buffer$2.poolSize = 8192; // not used by this implementation
  // TODO: Legacy, not needed anymore. Remove in next major version.

  Buffer$2._augment = function (arr) {
    arr.__proto__ = Buffer$2.prototype;
    return arr;
  };

  function from(that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number');
    }

    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length);
    }

    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset);
    }

    return fromObject(that, value);
  }
  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/


  Buffer$2.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length);
  };

  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
    Buffer$2.prototype.__proto__ = Uint8Array.prototype;
    Buffer$2.__proto__ = Uint8Array;

    if (typeof Symbol !== 'undefined' && Symbol.species && Buffer$2[Symbol.species] === Buffer$2) ;
  }

  function assertSize(size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative');
    }
  }

  function alloc(that, size, fill, encoding) {
    assertSize(size);

    if (size <= 0) {
      return createBuffer(that, size);
    }

    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
    }

    return createBuffer(that, size);
  }
  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/


  Buffer$2.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding);
  };

  function allocUnsafe(that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

    if (!Buffer$2.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }

    return that;
  }
  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */


  Buffer$2.allocUnsafe = function (size) {
    return allocUnsafe(null, size);
  };
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */


  Buffer$2.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size);
  };

  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }

    if (!Buffer$2.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding');
    }

    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);
    var actual = that.write(string, encoding);

    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      that = that.slice(0, actual);
    }

    return that;
  }

  function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);

    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }

    return that;
  }

  function fromArrayBuffer(that, array, byteOffset, length) {
    array.byteLength; // this throws if `array` is not a valid ArrayBuffer

    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds');
    }

    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds');
    }

    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array);
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = array;
      that.__proto__ = Buffer$2.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromArrayLike(that, array);
    }

    return that;
  }

  function fromObject(that, obj) {
    if (internalIsBuffer(obj)) {
      var len = checked(obj.length) | 0;
      that = createBuffer(that, len);

      if (that.length === 0) {
        return that;
      }

      obj.copy(that, 0, 0, len);
      return that;
    }

    if (obj) {
      if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0);
        }

        return fromArrayLike(that, obj);
      }

      if (obj.type === 'Buffer' && isArray(obj.data)) {
        return fromArrayLike(that, obj.data);
      }
    }

    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
  }

  function checked(length) {
    // Note: cannot use `length < kMaxLength()` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }

    return length | 0;
  }
  Buffer$2.isBuffer = isBuffer;

  function internalIsBuffer(b) {
    return !!(b != null && b._isBuffer);
  }

  Buffer$2.compare = function compare(a, b) {
    if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }

    if (a === b) return 0;
    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };

  Buffer$2.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;

      default:
        return false;
    }
  };

  Buffer$2.concat = function concat(list, length) {
    if (!isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    if (list.length === 0) {
      return Buffer$2.alloc(0);
    }

    var i;

    if (length === undefined) {
      length = 0;

      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer$2.allocUnsafe(length);
    var pos = 0;

    for (i = 0; i < list.length; ++i) {
      var buf = list[i];

      if (!internalIsBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      buf.copy(buffer, pos);
      pos += buf.length;
    }

    return buffer;
  };

  function byteLength(string, encoding) {
    if (internalIsBuffer(string)) {
      return string.length;
    }

    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength;
    }

    if (typeof string !== 'string') {
      string = '' + string;
    }

    var len = string.length;
    if (len === 0) return 0; // Use a for loop to avoid recursion

    var loweredCase = false;

    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len;

        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length;

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;

        case 'hex':
          return len >>> 1;

        case 'base64':
          return base64ToBytes(string).length;

        default:
          if (loweredCase) return utf8ToBytes(string).length; // assume utf8

          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }

  Buffer$2.byteLength = byteLength;

  function slowToString(encoding, start, end) {
    var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

    if (start === undefined || start < 0) {
      start = 0;
    } // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.


    if (start > this.length) {
      return '';
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return '';
    } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
      return '';
    }

    if (!encoding) encoding = 'utf8';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);

        case 'ascii':
          return asciiSlice(this, start, end);

        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end);

        case 'base64':
          return base64Slice(this, start, end);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  } // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
  // Buffer instances.


  Buffer$2.prototype._isBuffer = true;

  function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }

  Buffer$2.prototype.swap16 = function swap16() {
    var len = this.length;

    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits');
    }

    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }

    return this;
  };

  Buffer$2.prototype.swap32 = function swap32() {
    var len = this.length;

    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits');
    }

    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }

    return this;
  };

  Buffer$2.prototype.swap64 = function swap64() {
    var len = this.length;

    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits');
    }

    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }

    return this;
  };

  Buffer$2.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };

  Buffer$2.prototype.equals = function equals(b) {
    if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer$2.compare(this, b) === 0;
  };

  Buffer$2.prototype.inspect = function inspect() {
    var str = '';
    var max = INSPECT_MAX_BYTES;

    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }

    return '<Buffer ' + str + '>';
  };

  Buffer$2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (!internalIsBuffer(target)) {
      throw new TypeError('Argument must be a Buffer');
    }

    if (start === undefined) {
      start = 0;
    }

    if (end === undefined) {
      end = target ? target.length : 0;
    }

    if (thisStart === undefined) {
      thisStart = 0;
    }

    if (thisEnd === undefined) {
      thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index');
    }

    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }

    if (thisStart >= thisEnd) {
      return -1;
    }

    if (start >= end) {
      return 1;
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf


  function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1; // Normalize byteOffset

    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }

    byteOffset = +byteOffset; // Coerce to Number.

    if (isNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : buffer.length - 1;
    } // Normalize byteOffset: negative offsets start from the end of the buffer


    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

    if (byteOffset >= buffer.length) {
      if (dir) return -1;else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;else return -1;
    } // Normalize val


    if (typeof val === 'string') {
      val = Buffer$2.from(val, encoding);
    } // Finally, search either indexOf (if dir is true) or lastIndexOf


    if (internalIsBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1;
      }

      return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
      val = val & 0xFF; // Search for a byte value [0-255]

      if (Buffer$2.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
      }

      return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }

    throw new TypeError('val must be string, number or Buffer');
  }

  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();

      if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }

        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }

    function read(buf, i) {
      if (indexSize === 1) {
        return buf[i];
      } else {
        return buf.readUInt16BE(i * indexSize);
      }
    }

    var i;

    if (dir) {
      var foundIndex = -1;

      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

      for (i = byteOffset; i >= 0; i--) {
        var found = true;

        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }

        if (found) return i;
      }
    }

    return -1;
  }

  Buffer$2.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };

  Buffer$2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };

  Buffer$2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };

  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;

    if (!length) {
      length = remaining;
    } else {
      length = Number(length);

      if (length > remaining) {
        length = remaining;
      }
    } // must be an even number of digits


    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

    if (length > strLen / 2) {
      length = strLen / 2;
    }

    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) return i;
      buf[offset + i] = parsed;
    }

    return i;
  }

  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }

  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }

  function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }

  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }

  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }

  Buffer$2.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0; // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0; // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;

      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      } // legacy write(string, encoding, offset, length) - remove in v0.13

    } else {
      throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds');
    }

    if (!encoding) encoding = 'utf8';
    var loweredCase = false;

    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);

        case 'ascii':
          return asciiWrite(this, string, offset, length);

        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length);

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer$2.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };

  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return fromByteArray(buf);
    } else {
      return fromByteArray(buf.slice(start, end));
    }
  }

  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;

    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }

            break;

          case 2:
            secondByte = buf[i + 1];

            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }

            break;

          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];

            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }

            break;

          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];

            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }

        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res);
  } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety


  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;

    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    } // Decode in chunks to avoid "call stack size exceeded".


    var res = '';
    var i = 0;

    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }

    return res;
  }

  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }

    return ret;
  }

  function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }

    return ret;
  }

  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';

    for (var i = start; i < end; ++i) {
      out += toHex(buf[i]);
    }

    return out;
  }

  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';

    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }

    return res;
  }

  Buffer$2.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;
    var newBuf;

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer$2.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer$2(sliceLen, undefined);

      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }

    return newBuf;
  };
  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */


  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }

  Buffer$2.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;

    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val;
  };

  Buffer$2.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;

    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;

    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val;
  };

  Buffer$2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };

  Buffer$2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };

  Buffer$2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };

  Buffer$2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };

  Buffer$2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };

  Buffer$2.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;

    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };

  Buffer$2.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];

    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }

    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
  };

  Buffer$2.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  };

  Buffer$2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer$2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer$2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };

  Buffer$2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };

  Buffer$2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, true, 23, 4);
  };

  Buffer$2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, false, 23, 4);
  };

  Buffer$2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, true, 52, 8);
  };

  Buffer$2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, false, 52, 8);
  };

  function checkInt(buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
  }

  Buffer$2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;

    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;

    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer$2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;

    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;

    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer$2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer$2.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = value & 0xff;
    return offset + 1;
  };

  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;

    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }

  Buffer$2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }

    return offset + 2;
  };

  Buffer$2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }

    return offset + 2;
  };

  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;

    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
    }
  }

  Buffer$2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }

    return offset + 4;
  };

  Buffer$2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }

    return offset + 4;
  };

  Buffer$2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;

    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;

    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }

      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer$2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;

    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;

    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }

      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer$2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer$2.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  };

  Buffer$2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }

    return offset + 2;
  };

  Buffer$2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }

    return offset + 2;
  };

  Buffer$2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }

    return offset + 4;
  };

  Buffer$2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;

    if (Buffer$2.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }

    return offset + 4;
  };

  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
  }

  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }

    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }

  Buffer$2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };

  Buffer$2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };

  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }

    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }

  Buffer$2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };

  Buffer$2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


  Buffer$2.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }

    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

    if (end > this.length) end = this.length;

    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer$2.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }

    return len;
  }; // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])


  Buffer$2.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }

      if (val.length === 1) {
        var code = val.charCodeAt(0);

        if (code < 256) {
          val = code;
        }
      }

      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string');
      }

      if (typeof encoding === 'string' && !Buffer$2.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding);
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    } // Invalid ranges are not set to a default, so can range check early.


    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index');
    }

    if (end <= start) {
      return this;
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;

    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = internalIsBuffer(val) ? val : utf8ToBytes(new Buffer$2(val, encoding).toString());
      var len = bytes.length;

      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this;
  }; // HELPER FUNCTIONS
  // ================


  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

  function base64clean(str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

    if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

    while (str.length % 4 !== 0) {
      str = str + '=';
    }

    return str;
  }

  function stringtrim(str) {
    if (str.trim) return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }

  function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
  }

  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i); // is surrogate component

      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } // valid lead


          leadSurrogate = codePoint;
          continue;
        } // 2 leads in a row


        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        } // valid surrogate pair


        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null; // encode utf8

      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }

    return bytes;
  }

  function asciiToBytes(str) {
    var byteArray = [];

    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }

    return byteArray;
  }

  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];

    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray;
  }

  function base64ToBytes(str) {
    return toByteArray(base64clean(str));
  }

  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }

    return i;
  }

  function isnan(val) {
    return val !== val; // eslint-disable-line no-self-compare
  } // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually


  function isBuffer(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj));
  }

  function isFastBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
  } // For Node v0.10 support. Remove this eventually.


  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0));
  }

  // Format: 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
  // NOTE: SIGHASH byte ignored AND restricted, truncate before use


  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.encode = exports.decode = exports.check = void 0;

  function check$d(buffer) {
    if (buffer.length < 8) return false;
    if (buffer.length > 72) return false;
    if (buffer[0] !== 0x30) return false;
    if (buffer[1] !== buffer.length - 2) return false;
    if (buffer[2] !== 0x02) return false;
    const lenR = buffer[3];
    if (lenR === 0) return false;
    if (5 + lenR >= buffer.length) return false;
    if (buffer[4 + lenR] !== 0x02) return false;
    const lenS = buffer[5 + lenR];
    if (lenS === 0) return false;
    if (6 + lenR + lenS !== buffer.length) return false;
    if (buffer[4] & 0x80) return false;
    if (lenR > 1 && buffer[4] === 0x00 && !(buffer[5] & 0x80)) return false;
    if (buffer[lenR + 6] & 0x80) return false;
    if (lenS > 1 && buffer[lenR + 6] === 0x00 && !(buffer[lenR + 7] & 0x80)) return false;
    return true;
  }

  exports.check = check$d;

  function decode$i(buffer) {
    if (buffer.length < 8) throw new Error('DER sequence length is too short');
    if (buffer.length > 72) throw new Error('DER sequence length is too long');
    if (buffer[0] !== 0x30) throw new Error('Expected DER sequence');
    if (buffer[1] !== buffer.length - 2) throw new Error('DER sequence length is invalid');
    if (buffer[2] !== 0x02) throw new Error('Expected DER integer');
    const lenR = buffer[3];
    if (lenR === 0) throw new Error('R length is zero');
    if (5 + lenR >= buffer.length) throw new Error('R length is too long');
    if (buffer[4 + lenR] !== 0x02) throw new Error('Expected DER integer (2)');
    const lenS = buffer[5 + lenR];
    if (lenS === 0) throw new Error('S length is zero');
    if (6 + lenR + lenS !== buffer.length) throw new Error('S length is invalid');
    if (buffer[4] & 0x80) throw new Error('R value is negative');
    if (lenR > 1 && buffer[4] === 0x00 && !(buffer[5] & 0x80)) throw new Error('R value excessively padded');
    if (buffer[lenR + 6] & 0x80) throw new Error('S value is negative');
    if (lenS > 1 && buffer[lenR + 6] === 0x00 && !(buffer[lenR + 7] & 0x80)) throw new Error('S value excessively padded'); // non-BIP66 - extract R, S values

    return {
      r: buffer.slice(4, 4 + lenR),
      s: buffer.slice(6 + lenR)
    };
  }

  exports.decode = decode$i;
  /*
   * Expects r and s to be positive DER integers.
   *
   * The DER format uses the most significant bit as a sign bit (& 0x80).
   * If the significant bit is set AND the integer is positive, a 0x00 is prepended.
   *
   * Examples:
   *
   *      0 =>     0x00
   *      1 =>     0x01
   *     -1 =>     0xff
   *    127 =>     0x7f
   *   -127 =>     0x81
   *    128 =>   0x0080
   *   -128 =>     0x80
   *    255 =>   0x00ff
   *   -255 =>   0xff01
   *  16300 =>   0x3fac
   * -16300 =>   0xc054
   *  62300 => 0x00f35c
   * -62300 => 0xff0ca4
   */

  function encode$j(r, s) {
    const lenR = r.length;
    const lenS = s.length;
    if (lenR === 0) throw new Error('R length is zero');
    if (lenS === 0) throw new Error('S length is zero');
    if (lenR > 33) throw new Error('R length is too long');
    if (lenS > 33) throw new Error('S length is too long');
    if (r[0] & 0x80) throw new Error('R value is negative');
    if (s[0] & 0x80) throw new Error('S value is negative');
    if (lenR > 1 && r[0] === 0x00 && !(r[1] & 0x80)) throw new Error('R value excessively padded');
    if (lenS > 1 && s[0] === 0x00 && !(s[1] & 0x80)) throw new Error('S value excessively padded');
    const signature = Buffer$2.allocUnsafe(6 + lenR + lenS); // 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]

    signature[0] = 0x30;
    signature[1] = signature.length - 2;
    signature[2] = 0x02;
    signature[3] = r.length;
    r.copy(signature, 4);
    signature[4 + lenR] = 0x02;
    signature[5 + lenR] = s.length;
    s.copy(signature, 6 + lenR);
    return signature;
  }

  exports.encode = encode$j;

  var bip66$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(bip66$2);

  var ops = {};

  Object.defineProperty(ops, '__esModule', {
    value: true
  });
  ops.REVERSE_OPS = ops.OPS = void 0;
  const OPS$7 = {
    OP_FALSE: 0,
    OP_0: 0,
    OP_PUSHDATA1: 76,
    OP_PUSHDATA2: 77,
    OP_PUSHDATA4: 78,
    OP_1NEGATE: 79,
    OP_RESERVED: 80,
    OP_TRUE: 81,
    OP_1: 81,
    OP_2: 82,
    OP_3: 83,
    OP_4: 84,
    OP_5: 85,
    OP_6: 86,
    OP_7: 87,
    OP_8: 88,
    OP_9: 89,
    OP_10: 90,
    OP_11: 91,
    OP_12: 92,
    OP_13: 93,
    OP_14: 94,
    OP_15: 95,
    OP_16: 96,
    OP_NOP: 97,
    OP_VER: 98,
    OP_IF: 99,
    OP_NOTIF: 100,
    OP_VERIF: 101,
    OP_VERNOTIF: 102,
    OP_ELSE: 103,
    OP_ENDIF: 104,
    OP_VERIFY: 105,
    OP_RETURN: 106,
    OP_TOALTSTACK: 107,
    OP_FROMALTSTACK: 108,
    OP_2DROP: 109,
    OP_2DUP: 110,
    OP_3DUP: 111,
    OP_2OVER: 112,
    OP_2ROT: 113,
    OP_2SWAP: 114,
    OP_IFDUP: 115,
    OP_DEPTH: 116,
    OP_DROP: 117,
    OP_DUP: 118,
    OP_NIP: 119,
    OP_OVER: 120,
    OP_PICK: 121,
    OP_ROLL: 122,
    OP_ROT: 123,
    OP_SWAP: 124,
    OP_TUCK: 125,
    OP_CAT: 126,
    OP_SUBSTR: 127,
    OP_LEFT: 128,
    OP_RIGHT: 129,
    OP_SIZE: 130,
    OP_INVERT: 131,
    OP_AND: 132,
    OP_OR: 133,
    OP_XOR: 134,
    OP_EQUAL: 135,
    OP_EQUALVERIFY: 136,
    OP_RESERVED1: 137,
    OP_RESERVED2: 138,
    OP_1ADD: 139,
    OP_1SUB: 140,
    OP_2MUL: 141,
    OP_2DIV: 142,
    OP_NEGATE: 143,
    OP_ABS: 144,
    OP_NOT: 145,
    OP_0NOTEQUAL: 146,
    OP_ADD: 147,
    OP_SUB: 148,
    OP_MUL: 149,
    OP_DIV: 150,
    OP_MOD: 151,
    OP_LSHIFT: 152,
    OP_RSHIFT: 153,
    OP_BOOLAND: 154,
    OP_BOOLOR: 155,
    OP_NUMEQUAL: 156,
    OP_NUMEQUALVERIFY: 157,
    OP_NUMNOTEQUAL: 158,
    OP_LESSTHAN: 159,
    OP_GREATERTHAN: 160,
    OP_LESSTHANOREQUAL: 161,
    OP_GREATERTHANOREQUAL: 162,
    OP_MIN: 163,
    OP_MAX: 164,
    OP_WITHIN: 165,
    OP_RIPEMD160: 166,
    OP_SHA1: 167,
    OP_SHA256: 168,
    OP_HASH160: 169,
    OP_HASH256: 170,
    OP_CODESEPARATOR: 171,
    OP_CHECKSIG: 172,
    OP_CHECKSIGVERIFY: 173,
    OP_CHECKMULTISIG: 174,
    OP_CHECKMULTISIGVERIFY: 175,
    OP_NOP1: 176,
    OP_NOP2: 177,
    OP_CHECKLOCKTIMEVERIFY: 177,
    OP_NOP3: 178,
    OP_CHECKSEQUENCEVERIFY: 178,
    OP_NOP4: 179,
    OP_NOP5: 180,
    OP_NOP6: 181,
    OP_NOP7: 182,
    OP_NOP8: 183,
    OP_NOP9: 184,
    OP_NOP10: 185,
    OP_PUBKEYHASH: 253,
    OP_PUBKEY: 254,
    OP_INVALIDOPCODE: 255
  };
  ops.OPS = OPS$7;
  const REVERSE_OPS = {};
  ops.REVERSE_OPS = REVERSE_OPS;

  for (const op of Object.keys(OPS$7)) {
    const code = OPS$7[op];
    REVERSE_OPS[code] = op;
  }

  var push_data = {};

  Object.defineProperty(push_data, '__esModule', {
    value: true
  });
  push_data.decode = push_data.encode = push_data.encodingLength = void 0;
  const ops_1$1 = ops;

  function encodingLength$2(i) {
    return i < ops_1$1.OPS.OP_PUSHDATA1 ? 1 : i <= 0xff ? 2 : i <= 0xffff ? 3 : 5;
  }

  push_data.encodingLength = encodingLength$2;

  function encode$i(buffer, num, offset) {
    const size = encodingLength$2(num); // ~6 bit

    if (size === 1) {
      buffer.writeUInt8(num, offset); // 8 bit
    } else if (size === 2) {
      buffer.writeUInt8(ops_1$1.OPS.OP_PUSHDATA1, offset);
      buffer.writeUInt8(num, offset + 1); // 16 bit
    } else if (size === 3) {
      buffer.writeUInt8(ops_1$1.OPS.OP_PUSHDATA2, offset);
      buffer.writeUInt16LE(num, offset + 1); // 32 bit
    } else {
      buffer.writeUInt8(ops_1$1.OPS.OP_PUSHDATA4, offset);
      buffer.writeUInt32LE(num, offset + 1);
    }

    return size;
  }

  push_data.encode = encode$i;

  function decode$h(buffer, offset) {
    const opcode = buffer.readUInt8(offset);
    let num;
    let size; // ~6 bit

    if (opcode < ops_1$1.OPS.OP_PUSHDATA1) {
      num = opcode;
      size = 1; // 8 bit
    } else if (opcode === ops_1$1.OPS.OP_PUSHDATA1) {
      if (offset + 2 > buffer.length) return null;
      num = buffer.readUInt8(offset + 1);
      size = 2; // 16 bit
    } else if (opcode === ops_1$1.OPS.OP_PUSHDATA2) {
      if (offset + 3 > buffer.length) return null;
      num = buffer.readUInt16LE(offset + 1);
      size = 3; // 32 bit
    } else {
      if (offset + 5 > buffer.length) return null;
      if (opcode !== ops_1$1.OPS.OP_PUSHDATA4) throw new Error('Unexpected opcode');
      num = buffer.readUInt32LE(offset + 1);
      size = 5;
    }

    return {
      opcode,
      number: num,
      size
    };
  }

  push_data.decode = decode$h;

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.encode = exports.decode = void 0;

  function decode$g(buffer, maxLength, minimal) {
    maxLength = maxLength || 4;
    minimal = minimal === undefined ? true : minimal;
    const length = buffer.length;
    if (length === 0) return 0;
    if (length > maxLength) throw new TypeError('Script number overflow');

    if (minimal) {
      if ((buffer[length - 1] & 0x7f) === 0) {
        if (length <= 1 || (buffer[length - 2] & 0x80) === 0) throw new Error('Non-minimally encoded script number');
      }
    } // 40-bit


    if (length === 5) {
      const a = buffer.readUInt32LE(0);
      const b = buffer.readUInt8(4);
      if (b & 0x80) return -((b & ~0x80) * 0x100000000 + a);
      return b * 0x100000000 + a;
    } // 32-bit / 24-bit / 16-bit / 8-bit


    let result = 0;

    for (let i = 0; i < length; ++i) {
      result |= buffer[i] << 8 * i;
    }

    if (buffer[length - 1] & 0x80) return -(result & ~(0x80 << 8 * (length - 1)));
    return result;
  }

  exports.decode = decode$g;

  function scriptNumSize(i) {
    return i > 0x7fffffff ? 5 : i > 0x7fffff ? 4 : i > 0x7fff ? 3 : i > 0x7f ? 2 : i > 0x00 ? 1 : 0;
  }

  function encode$h(_number) {
    let value = Math.abs(_number);
    const size = scriptNumSize(value);
    const buffer = Buffer$2.allocUnsafe(size);
    const negative = _number < 0;

    for (let i = 0; i < size; ++i) {
      buffer.writeUInt8(value & 0xff, i);
      value >>= 8;
    }

    if (buffer[size - 1] & 0x80) {
      buffer.writeUInt8(negative ? 0x80 : 0x00, size - 1);
    } else if (negative) {
      buffer[size - 1] |= 0x80;
    }

    return buffer;
  }

  exports.encode = encode$h;

  var script_number = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$2 = /*@__PURE__*/getAugmentedNamespace(script_number);

  var types$8 = {};

  var types$7 = {
    Array: function (value) {
      return value !== null && value !== undefined && value.constructor === Array;
    },
    Boolean: function (value) {
      return typeof value === 'boolean';
    },
    Function: function (value) {
      return typeof value === 'function';
    },
    Nil: function (value) {
      return value === undefined || value === null;
    },
    Number: function (value) {
      return typeof value === 'number';
    },
    Object: function (value) {
      return typeof value === 'object';
    },
    String: function (value) {
      return typeof value === 'string';
    },
    '': function () {
      return true;
    }
  }; // TODO: deprecate

  types$7.Null = types$7.Nil;

  for (var typeName$2 in types$7) {
    types$7[typeName$2].toJSON = function (t) {
      return t;
    }.bind(null, typeName$2);
  }

  var native$1 = types$7;

  var native = native$1;

  function getTypeName(fn) {
    return fn.name || fn.toString().match(/function (.*?)\s*\(/)[1];
  }

  function getValueTypeName$1(value) {
    return native.Nil(value) ? '' : getTypeName(value.constructor);
  }

  function getValue(value) {
    if (native.Function(value)) return '';
    if (native.String(value)) return JSON.stringify(value);
    if (value && native.Object(value)) return '';
    return value;
  }

  function captureStackTrace(e, t) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(e, t);
    }
  }

  function tfJSON$1(type) {
    if (native.Function(type)) return type.toJSON ? type.toJSON() : getTypeName(type);
    if (native.Array(type)) return 'Array';
    if (type && native.Object(type)) return 'Object';
    return type !== undefined ? type : '';
  }

  function tfErrorString(type, value, valueTypeName) {
    var valueJson = getValue(value);
    return 'Expected ' + tfJSON$1(type) + ', got' + (valueTypeName !== '' ? ' ' + valueTypeName : '') + (valueJson !== '' ? ' ' + valueJson : '');
  }

  function TfTypeError$1(type, value, valueTypeName) {
    valueTypeName = valueTypeName || getValueTypeName$1(value);
    this.message = tfErrorString(type, value, valueTypeName);
    captureStackTrace(this, TfTypeError$1);
    this.__type = type;
    this.__value = value;
    this.__valueTypeName = valueTypeName;
  }

  TfTypeError$1.prototype = Object.create(Error.prototype);
  TfTypeError$1.prototype.constructor = TfTypeError$1;

  function tfPropertyErrorString(type, label, name, value, valueTypeName) {
    var description = '" of type ';
    if (label === 'key') description = '" with key type ';
    return tfErrorString('property "' + tfJSON$1(name) + description + tfJSON$1(type), value, valueTypeName);
  }

  function TfPropertyTypeError$1(type, property, label, value, valueTypeName) {
    if (type) {
      valueTypeName = valueTypeName || getValueTypeName$1(value);
      this.message = tfPropertyErrorString(type, label, property, value, valueTypeName);
    } else {
      this.message = 'Unexpected property "' + property + '"';
    }

    captureStackTrace(this, TfTypeError$1);
    this.__label = label;
    this.__property = property;
    this.__type = type;
    this.__value = value;
    this.__valueTypeName = valueTypeName;
  }

  TfPropertyTypeError$1.prototype = Object.create(Error.prototype);
  TfPropertyTypeError$1.prototype.constructor = TfTypeError$1;

  function tfCustomError(expected, actual) {
    return new TfTypeError$1(expected, {}, actual);
  }

  function tfSubError$1(e, property, label) {
    // sub child?
    if (e instanceof TfPropertyTypeError$1) {
      property = property + '.' + e.__property;
      e = new TfPropertyTypeError$1(e.__type, property, e.__label, e.__value, e.__valueTypeName); // child?
    } else if (e instanceof TfTypeError$1) {
      e = new TfPropertyTypeError$1(e.__type, property, label, e.__value, e.__valueTypeName);
    }

    captureStackTrace(e);
    return e;
  }

  var errors = {
    TfTypeError: TfTypeError$1,
    TfPropertyTypeError: TfPropertyTypeError$1,
    tfCustomError: tfCustomError,
    tfSubError: tfSubError$1,
    tfJSON: tfJSON$1,
    getValueTypeName: getValueTypeName$1
  };

  var NATIVE$1 = native$1;
  var ERRORS$1 = errors;

  function _Buffer$1(value) {
    return isBuffer(value);
  }

  function Hex(value) {
    return typeof value === 'string' && /^([0-9a-f]{2})+$/i.test(value);
  }

  function _LengthN(type, length) {
    var name = type.toJSON();

    function Length(value) {
      if (!type(value)) return false;
      if (value.length === length) return true;
      throw ERRORS$1.tfCustomError(name + '(Length: ' + length + ')', name + '(Length: ' + value.length + ')');
    }

    Length.toJSON = function () {
      return name;
    };

    return Length;
  }

  var _ArrayN = _LengthN.bind(null, NATIVE$1.Array);

  var _BufferN = _LengthN.bind(null, _Buffer$1);

  var _HexN = _LengthN.bind(null, Hex);

  var _StringN = _LengthN.bind(null, NATIVE$1.String);

  function Range(a, b, f) {
    f = f || NATIVE$1.Number;

    function _range(value, strict) {
      return f(value, strict) && value > a && value < b;
    }

    _range.toJSON = function () {
      return `${f.toJSON()} between [${a}, ${b}]`;
    };

    return _range;
  }

  var INT53_MAX = Math.pow(2, 53) - 1;

  function Finite(value) {
    return typeof value === 'number' && isFinite(value);
  }

  function Int8(value) {
    return value << 24 >> 24 === value;
  }

  function Int16(value) {
    return value << 16 >> 16 === value;
  }

  function Int32(value) {
    return (value | 0) === value;
  }

  function Int53(value) {
    return typeof value === 'number' && value >= -INT53_MAX && value <= INT53_MAX && Math.floor(value) === value;
  }

  function UInt8(value) {
    return (value & 0xff) === value;
  }

  function UInt16(value) {
    return (value & 0xffff) === value;
  }

  function UInt32(value) {
    return value >>> 0 === value;
  }

  function UInt53(value) {
    return typeof value === 'number' && value >= 0 && value <= INT53_MAX && Math.floor(value) === value;
  }

  var types$6 = {
    ArrayN: _ArrayN,
    Buffer: _Buffer$1,
    BufferN: _BufferN,
    Finite: Finite,
    Hex: Hex,
    HexN: _HexN,
    Int8: Int8,
    Int16: Int16,
    Int32: Int32,
    Int53: Int53,
    Range: Range,
    StringN: _StringN,
    UInt8: UInt8,
    UInt16: UInt16,
    UInt32: UInt32,
    UInt53: UInt53
  };

  for (var typeName$1 in types$6) {
    types$6[typeName$1].toJSON = function (t) {
      return t;
    }.bind(null, typeName$1);
  }

  module.exports = types$6;

  var extra = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$3 = /*@__PURE__*/getAugmentedNamespace(extra);

  var ERRORS = errors;
  var NATIVE = native$1; // short-hand

  var tfJSON = ERRORS.tfJSON;
  var TfTypeError = ERRORS.TfTypeError;
  var TfPropertyTypeError = ERRORS.TfPropertyTypeError;
  var tfSubError = ERRORS.tfSubError;
  var getValueTypeName = ERRORS.getValueTypeName;
  var TYPES = {
    arrayOf: function arrayOf(type, options) {
      type = compile$1(type);
      options = options || {};

      function _arrayOf(array, strict) {
        if (!NATIVE.Array(array)) return false;
        if (NATIVE.Nil(array)) return false;
        if (options.minLength !== undefined && array.length < options.minLength) return false;
        if (options.maxLength !== undefined && array.length > options.maxLength) return false;
        if (options.length !== undefined && array.length !== options.length) return false;
        return array.every(function (value, i) {
          try {
            return typeforce$6(type, value, strict);
          } catch (e) {
            throw tfSubError(e, i);
          }
        });
      }

      _arrayOf.toJSON = function () {
        var str = '[' + tfJSON(type) + ']';

        if (options.length !== undefined) {
          str += '{' + options.length + '}';
        } else if (options.minLength !== undefined || options.maxLength !== undefined) {
          str += '{' + (options.minLength === undefined ? 0 : options.minLength) + ',' + (options.maxLength === undefined ? Infinity : options.maxLength) + '}';
        }

        return str;
      };

      return _arrayOf;
    },
    maybe: function maybe(type) {
      type = compile$1(type);

      function _maybe(value, strict) {
        return NATIVE.Nil(value) || type(value, strict, maybe);
      }

      _maybe.toJSON = function () {
        return '?' + tfJSON(type);
      };

      return _maybe;
    },
    map: function map(propertyType, propertyKeyType) {
      propertyType = compile$1(propertyType);
      if (propertyKeyType) propertyKeyType = compile$1(propertyKeyType);

      function _map(value, strict) {
        if (!NATIVE.Object(value)) return false;
        if (NATIVE.Nil(value)) return false;

        for (var propertyName in value) {
          try {
            if (propertyKeyType) {
              typeforce$6(propertyKeyType, propertyName, strict);
            }
          } catch (e) {
            throw tfSubError(e, propertyName, 'key');
          }

          try {
            var propertyValue = value[propertyName];
            typeforce$6(propertyType, propertyValue, strict);
          } catch (e) {
            throw tfSubError(e, propertyName);
          }
        }

        return true;
      }

      if (propertyKeyType) {
        _map.toJSON = function () {
          return '{' + tfJSON(propertyKeyType) + ': ' + tfJSON(propertyType) + '}';
        };
      } else {
        _map.toJSON = function () {
          return '{' + tfJSON(propertyType) + '}';
        };
      }

      return _map;
    },
    object: function object(uncompiled) {
      var type = {};

      for (var typePropertyName in uncompiled) {
        type[typePropertyName] = compile$1(uncompiled[typePropertyName]);
      }

      function _object(value, strict) {
        if (!NATIVE.Object(value)) return false;
        if (NATIVE.Nil(value)) return false;
        var propertyName;

        try {
          for (propertyName in type) {
            var propertyType = type[propertyName];
            var propertyValue = value[propertyName];
            typeforce$6(propertyType, propertyValue, strict);
          }
        } catch (e) {
          throw tfSubError(e, propertyName);
        }

        if (strict) {
          for (propertyName in value) {
            if (type[propertyName]) continue;
            throw new TfPropertyTypeError(undefined, propertyName);
          }
        }

        return true;
      }

      _object.toJSON = function () {
        return tfJSON(type);
      };

      return _object;
    },
    anyOf: function anyOf() {
      var types = [].slice.call(arguments).map(compile$1);

      function _anyOf(value, strict) {
        return types.some(function (type) {
          try {
            return typeforce$6(type, value, strict);
          } catch (e) {
            return false;
          }
        });
      }

      _anyOf.toJSON = function () {
        return types.map(tfJSON).join('|');
      };

      return _anyOf;
    },
    allOf: function allOf() {
      var types = [].slice.call(arguments).map(compile$1);

      function _allOf(value, strict) {
        return types.every(function (type) {
          try {
            return typeforce$6(type, value, strict);
          } catch (e) {
            return false;
          }
        });
      }

      _allOf.toJSON = function () {
        return types.map(tfJSON).join(' & ');
      };

      return _allOf;
    },
    quacksLike: function quacksLike(type) {
      function _quacksLike(value) {
        return type === getValueTypeName(value);
      }

      _quacksLike.toJSON = function () {
        return type;
      };

      return _quacksLike;
    },
    tuple: function tuple() {
      var types = [].slice.call(arguments).map(compile$1);

      function _tuple(values, strict) {
        if (NATIVE.Nil(values)) return false;
        if (NATIVE.Nil(values.length)) return false;
        if (strict && values.length !== types.length) return false;
        return types.every(function (type, i) {
          try {
            return typeforce$6(type, values[i], strict);
          } catch (e) {
            throw tfSubError(e, i);
          }
        });
      }

      _tuple.toJSON = function () {
        return '(' + types.map(tfJSON).join(', ') + ')';
      };

      return _tuple;
    },
    value: function value(expected) {
      function _value(actual) {
        return actual === expected;
      }

      _value.toJSON = function () {
        return expected;
      };

      return _value;
    }
  }; // TODO: deprecate

  TYPES.oneOf = TYPES.anyOf;

  function compile$1(type) {
    if (NATIVE.String(type)) {
      if (type[0] === '?') return TYPES.maybe(type.slice(1));
      return NATIVE[type] || TYPES.quacksLike(type);
    } else if (type && NATIVE.Object(type)) {
      if (NATIVE.Array(type)) {
        if (type.length !== 1) throw new TypeError('Expected compile() parameter of type Array of length 1');
        return TYPES.arrayOf(type[0]);
      }

      return TYPES.object(type);
    } else if (NATIVE.Function(type)) {
      return type;
    }

    return TYPES.value(type);
  }

  function typeforce$6(type, value, strict, surrogate) {
    if (NATIVE.Function(type)) {
      if (type(value, strict)) return true;
      throw new TfTypeError(surrogate || type, value);
    } // JIT


    return typeforce$6(compile$1(type), value, strict);
  } // assign types to typeforce function


  for (var typeName in NATIVE) {
    typeforce$6[typeName] = NATIVE[typeName];
  }

  for (typeName in TYPES) {
    typeforce$6[typeName] = TYPES[typeName];
  }

  var EXTRA = require$$2$3;

  for (typeName in EXTRA) {
    typeforce$6[typeName] = EXTRA[typeName];
  }

  typeforce$6.compile = compile$1;
  typeforce$6.TfTypeError = TfTypeError;
  typeforce$6.TfPropertyTypeError = TfPropertyTypeError;
  var typeforce_1 = typeforce$6;

  (function (exports) {

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.oneOf = exports.Null = exports.BufferN = exports.Function = exports.UInt32 = exports.UInt8 = exports.tuple = exports.maybe = exports.Hex = exports.Buffer = exports.String = exports.Boolean = exports.Array = exports.Number = exports.Hash256bit = exports.Hash160bit = exports.Buffer256bit = exports.Network = exports.ECPoint = exports.Satoshi = exports.Signer = exports.BIP32Path = exports.UInt31 = exports.isPoint = exports.typeforce = void 0;
    const buffer_1 = require$$0$7;
    exports.typeforce = typeforce_1;
    const ZERO32 = buffer_1.Buffer.alloc(32, 0);
    const EC_P = buffer_1.Buffer.from('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f', 'hex');

    function isPoint(p) {
      if (!buffer_1.Buffer.isBuffer(p)) return false;
      if (p.length < 33) return false;
      const t = p[0];
      const x = p.slice(1, 33);
      if (x.compare(ZERO32) === 0) return false;
      if (x.compare(EC_P) >= 0) return false;

      if ((t === 0x02 || t === 0x03) && p.length === 33) {
        return true;
      }

      const y = p.slice(33);
      if (y.compare(ZERO32) === 0) return false;
      if (y.compare(EC_P) >= 0) return false;
      if (t === 0x04 && p.length === 65) return true;
      return false;
    }

    exports.isPoint = isPoint;
    const UINT31_MAX = Math.pow(2, 31) - 1;

    function UInt31(value) {
      return exports.typeforce.UInt32(value) && value <= UINT31_MAX;
    }

    exports.UInt31 = UInt31;

    function BIP32Path(value) {
      return exports.typeforce.String(value) && !!value.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
    }

    exports.BIP32Path = BIP32Path;

    BIP32Path.toJSON = () => {
      return 'BIP32 derivation path';
    };

    function Signer(obj) {
      return (exports.typeforce.Buffer(obj.publicKey) || typeof obj.getPublicKey === 'function') && typeof obj.sign === 'function';
    }

    exports.Signer = Signer;
    const SATOSHI_MAX = 21 * 1e14;

    function Satoshi(value) {
      return exports.typeforce.UInt53(value) && value <= SATOSHI_MAX;
    }

    exports.Satoshi = Satoshi; // external dependent types

    exports.ECPoint = exports.typeforce.quacksLike('Point'); // exposed, external API

    exports.Network = exports.typeforce.compile({
      messagePrefix: exports.typeforce.oneOf(exports.typeforce.Buffer, exports.typeforce.String),
      bip32: {
        public: exports.typeforce.UInt32,
        private: exports.typeforce.UInt32
      },
      pubKeyHash: exports.typeforce.UInt8,
      scriptHash: exports.typeforce.UInt8,
      wif: exports.typeforce.UInt8
    });
    exports.Buffer256bit = exports.typeforce.BufferN(32);
    exports.Hash160bit = exports.typeforce.BufferN(20);
    exports.Hash256bit = exports.typeforce.BufferN(32);
    exports.Number = exports.typeforce.Number; // tslint:disable-line variable-name

    exports.Array = exports.typeforce.Array;
    exports.Boolean = exports.typeforce.Boolean; // tslint:disable-line variable-name

    exports.String = exports.typeforce.String; // tslint:disable-line variable-name

    exports.Buffer = exports.typeforce.Buffer;
    exports.Hex = exports.typeforce.Hex;
    exports.maybe = exports.typeforce.maybe;
    exports.tuple = exports.typeforce.tuple;
    exports.UInt8 = exports.typeforce.UInt8;
    exports.UInt32 = exports.typeforce.UInt32;
    exports.Function = exports.typeforce.Function;
    exports.BufferN = exports.typeforce.BufferN;
    exports.Null = exports.typeforce.Null;
    exports.oneOf = exports.typeforce.oneOf;
  })(types$8);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.encode = exports.decode = void 0;
  const bip66$1 = require$$0$3;
  const types$5 = types$8;
  const {
    typeforce: typeforce$5
  } = types$5;
  const ZERO$1 = Buffer$2.alloc(1, 0);

  function toDER(x) {
    let i = 0;

    while (x[i] === 0) ++i;

    if (i === x.length) return ZERO$1;
    x = x.slice(i);
    if (x[0] & 0x80) return Buffer$2.concat([ZERO$1, x], 1 + x.length);
    return x;
  }

  function fromDER(x) {
    if (x[0] === 0x00) x = x.slice(1);
    const buffer = Buffer$2.alloc(32, 0);
    const bstart = Math.max(0, 32 - x.length);
    x.copy(buffer, bstart);
    return buffer;
  } // BIP62: 1 byte hashType flag (only 0x01, 0x02, 0x03, 0x81, 0x82 and 0x83 are allowed)


  function decode$f(buffer) {
    const hashType = buffer.readUInt8(buffer.length - 1);
    const hashTypeMod = hashType & ~0x80;
    if (hashTypeMod <= 0 || hashTypeMod >= 4) throw new Error('Invalid hashType ' + hashType);
    const decoded = bip66$1.decode(buffer.slice(0, -1));
    const r = fromDER(decoded.r);
    const s = fromDER(decoded.s);
    const signature = Buffer$2.concat([r, s], 64);
    return {
      signature,
      hashType
    };
  }

  exports.decode = decode$f;

  function encode$g(signature, hashType) {
    typeforce$5({
      signature: types$5.BufferN(64),
      hashType: types$5.UInt8
    }, {
      signature,
      hashType
    });
    const hashTypeMod = hashType & ~0x80;
    if (hashTypeMod <= 0 || hashTypeMod >= 4) throw new Error('Invalid hashType ' + hashType);
    const hashTypeBuffer = Buffer$2.allocUnsafe(1);
    hashTypeBuffer.writeUInt8(hashType, 0);
    const r = toDER(signature.slice(0, 32));
    const s = toDER(signature.slice(32, 64));
    return Buffer$2.concat([bip66$1.encode(r, s), hashTypeBuffer]);
  }

  exports.encode = encode$g;

  var script_signature = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$4$4 = /*@__PURE__*/getAugmentedNamespace(script_signature);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.signature = exports.number = exports.isCanonicalScriptSignature = exports.isDefinedHashType = exports.isCanonicalPubKey = exports.toStack = exports.fromASM = exports.toASM = exports.decompile = exports.compile = exports.isPushOnly = exports.OPS = void 0;
  const bip66 = require$$0$3;
  const ops_1 = ops;
  Object.defineProperty(exports, 'OPS', {
    enumerable: true,
    get: function () {
      return ops_1.OPS;
    }
  });
  const pushdata = push_data;
  const scriptNumber = require$$3$2;
  const scriptSignature = require$$4$4;
  const types$4 = types$8;
  const {
    typeforce: typeforce$4
  } = types$4;
  const OP_INT_BASE$1 = ops_1.OPS.OP_RESERVED; // OP_1 - 1

  function isOPInt(value) {
    return types$4.Number(value) && (value === ops_1.OPS.OP_0 || value >= ops_1.OPS.OP_1 && value <= ops_1.OPS.OP_16 || value === ops_1.OPS.OP_1NEGATE);
  }

  function isPushOnlyChunk(value) {
    return types$4.Buffer(value) || isOPInt(value);
  }

  function isPushOnly(value) {
    return types$4.Array(value) && value.every(isPushOnlyChunk);
  }

  exports.isPushOnly = isPushOnly;

  function asMinimalOP(buffer) {
    if (buffer.length === 0) return ops_1.OPS.OP_0;
    if (buffer.length !== 1) return;
    if (buffer[0] >= 1 && buffer[0] <= 16) return OP_INT_BASE$1 + buffer[0];
    if (buffer[0] === 0x81) return ops_1.OPS.OP_1NEGATE;
  }

  function chunksIsBuffer(buf) {
    return isBuffer(buf);
  }

  function chunksIsArray(buf) {
    return types$4.Array(buf);
  }

  function singleChunkIsBuffer(buf) {
    return isBuffer(buf);
  }

  function compile(chunks) {
    // TODO: remove me
    if (chunksIsBuffer(chunks)) return chunks;
    typeforce$4(types$4.Array, chunks);
    const bufferSize = chunks.reduce((accum, chunk) => {
      // data chunk
      if (singleChunkIsBuffer(chunk)) {
        // adhere to BIP62.3, minimal push policy
        if (chunk.length === 1 && asMinimalOP(chunk) !== undefined) {
          return accum + 1;
        }

        return accum + pushdata.encodingLength(chunk.length) + chunk.length;
      } // opcode


      return accum + 1;
    }, 0.0);
    const buffer = Buffer$2.allocUnsafe(bufferSize);
    let offset = 0;
    chunks.forEach(chunk => {
      // data chunk
      if (singleChunkIsBuffer(chunk)) {
        // adhere to BIP62.3, minimal push policy
        const opcode = asMinimalOP(chunk);

        if (opcode !== undefined) {
          buffer.writeUInt8(opcode, offset);
          offset += 1;
          return;
        }

        offset += pushdata.encode(buffer, chunk.length, offset);
        chunk.copy(buffer, offset);
        offset += chunk.length; // opcode
      } else {
        buffer.writeUInt8(chunk, offset);
        offset += 1;
      }
    });
    if (offset !== buffer.length) throw new Error('Could not decode chunks');
    return buffer;
  }

  exports.compile = compile;

  function decompile(buffer) {
    // TODO: remove me
    if (chunksIsArray(buffer)) return buffer;
    typeforce$4(types$4.Buffer, buffer);
    const chunks = [];
    let i = 0;

    while (i < buffer.length) {
      const opcode = buffer[i]; // data chunk

      if (opcode > ops_1.OPS.OP_0 && opcode <= ops_1.OPS.OP_PUSHDATA4) {
        const d = pushdata.decode(buffer, i); // did reading a pushDataInt fail?

        if (d === null) return null;
        i += d.size; // attempt to read too much data?

        if (i + d.number > buffer.length) return null;
        const data = buffer.slice(i, i + d.number);
        i += d.number; // decompile minimally

        const op = asMinimalOP(data);

        if (op !== undefined) {
          chunks.push(op);
        } else {
          chunks.push(data);
        } // opcode

      } else {
        chunks.push(opcode);
        i += 1;
      }
    }

    return chunks;
  }

  exports.decompile = decompile;

  function toASM(chunks) {
    if (chunksIsBuffer(chunks)) {
      chunks = decompile(chunks);
    }

    return chunks.map(chunk => {
      // data?
      if (singleChunkIsBuffer(chunk)) {
        const op = asMinimalOP(chunk);
        if (op === undefined) return chunk.toString('hex');
        chunk = op;
      } // opcode!


      return ops_1.REVERSE_OPS[chunk];
    }).join(' ');
  }

  exports.toASM = toASM;

  function fromASM(asm) {
    typeforce$4(types$4.String, asm);
    return compile(asm.split(' ').map(chunkStr => {
      // opcode?
      if (ops_1.OPS[chunkStr] !== undefined) return ops_1.OPS[chunkStr];
      typeforce$4(types$4.Hex, chunkStr); // data!

      return Buffer$2.from(chunkStr, 'hex');
    }));
  }

  exports.fromASM = fromASM;

  function toStack(chunks) {
    chunks = decompile(chunks);
    typeforce$4(isPushOnly, chunks);
    return chunks.map(op => {
      if (singleChunkIsBuffer(op)) return op;
      if (op === ops_1.OPS.OP_0) return Buffer$2.allocUnsafe(0);
      return scriptNumber.encode(op - OP_INT_BASE$1);
    });
  }

  exports.toStack = toStack;

  function isCanonicalPubKey(buffer) {
    return types$4.isPoint(buffer);
  }

  exports.isCanonicalPubKey = isCanonicalPubKey;

  function isDefinedHashType(hashType) {
    const hashTypeMod = hashType & ~0x80; // return hashTypeMod > SIGHASH_ALL && hashTypeMod < SIGHASH_SINGLE

    return hashTypeMod > 0x00 && hashTypeMod < 0x04;
  }

  exports.isDefinedHashType = isDefinedHashType;

  function isCanonicalScriptSignature(buffer) {
    if (!isBuffer(buffer)) return false;
    if (!isDefinedHashType(buffer[buffer.length - 1])) return false;
    return bip66.check(buffer.slice(0, -1));
  }

  exports.isCanonicalScriptSignature = isCanonicalScriptSignature; // tslint:disable-next-line variable-name

  exports.number = scriptNumber;
  exports.signature = scriptSignature;

  var script = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$4$3 = /*@__PURE__*/getAugmentedNamespace(script);

  var lazy$7 = {};

  Object.defineProperty(lazy$7, '__esModule', {
    value: true
  });
  lazy$7.value = lazy$7.prop = void 0;

  function prop(object, name, f) {
    Object.defineProperty(object, name, {
      configurable: true,
      enumerable: true,

      get() {
        const _value = f.call(this);

        this[name] = _value;
        return _value;
      },

      set(_value) {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: true,
          value: _value,
          writable: true
        });
      }

    });
  }

  lazy$7.prop = prop;

  function value(f) {
    let _value;

    return () => {
      if (_value !== undefined) return _value;
      _value = f();
      return _value;
    };
  }

  lazy$7.value = value;

  Object.defineProperty(embed, '__esModule', {
    value: true
  });
  embed.p2data = void 0;
  const networks_1$7 = networks$1;
  const bscript$9 = require$$4$3;
  const types_1$6 = types$8;
  const lazy$6 = lazy$7;
  const OPS$6 = bscript$9.OPS;

  function stacksEqual$3(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  } // output: OP_RETURN ...


  function p2data(a, opts) {
    if (!a.data && !a.output) throw new TypeError('Not enough data');
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$6.typeforce)({
      network: types_1$6.typeforce.maybe(types_1$6.typeforce.Object),
      output: types_1$6.typeforce.maybe(types_1$6.typeforce.Buffer),
      data: types_1$6.typeforce.maybe(types_1$6.typeforce.arrayOf(types_1$6.typeforce.Buffer))
    }, a);
    const network = a.network || networks_1$7.bitcoin;
    const o = {
      name: 'embed',
      network
    };
    lazy$6.prop(o, 'output', () => {
      if (!a.data) return;
      return bscript$9.compile([OPS$6.OP_RETURN].concat(a.data));
    });
    lazy$6.prop(o, 'data', () => {
      if (!a.output) return;
      return bscript$9.decompile(a.output).slice(1);
    }); // extended validation

    if (opts.validate) {
      if (a.output) {
        const chunks = bscript$9.decompile(a.output);
        if (chunks[0] !== OPS$6.OP_RETURN) throw new TypeError('Output is invalid');
        if (!chunks.slice(1).every(types_1$6.typeforce.Buffer)) throw new TypeError('Output is invalid');
        if (a.data && !stacksEqual$3(a.data, o.data)) throw new TypeError('Data mismatch');
      }
    }

    return Object.assign(o, a);
  }

  embed.p2data = p2data;

  var p2ms$1 = {};

  Object.defineProperty(p2ms$1, '__esModule', {
    value: true
  });
  p2ms$1.p2ms = void 0;
  const networks_1$6 = networks$1;
  const bscript$8 = require$$4$3;
  const types_1$5 = types$8;
  const lazy$5 = lazy$7;
  const OPS$5 = bscript$8.OPS;
  const OP_INT_BASE = OPS$5.OP_RESERVED; // OP_1 - 1

  function stacksEqual$2(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  } // input: OP_0 [signatures ...]
  // output: m [pubKeys ...] n OP_CHECKMULTISIG


  function p2ms(a, opts) {
    if (!a.input && !a.output && !(a.pubkeys && a.m !== undefined) && !a.signatures) throw new TypeError('Not enough data');
    opts = Object.assign({
      validate: true
    }, opts || {});

    function isAcceptableSignature(x) {
      return bscript$8.isCanonicalScriptSignature(x) || (opts.allowIncomplete && x === OPS$5.OP_0) !== undefined;
    }

    (0, types_1$5.typeforce)({
      network: types_1$5.typeforce.maybe(types_1$5.typeforce.Object),
      m: types_1$5.typeforce.maybe(types_1$5.typeforce.Number),
      n: types_1$5.typeforce.maybe(types_1$5.typeforce.Number),
      output: types_1$5.typeforce.maybe(types_1$5.typeforce.Buffer),
      pubkeys: types_1$5.typeforce.maybe(types_1$5.typeforce.arrayOf(types_1$5.isPoint)),
      signatures: types_1$5.typeforce.maybe(types_1$5.typeforce.arrayOf(isAcceptableSignature)),
      input: types_1$5.typeforce.maybe(types_1$5.typeforce.Buffer)
    }, a);
    const network = a.network || networks_1$6.bitcoin;
    const o = {
      network
    };
    let chunks = [];
    let decoded = false;

    function decode(output) {
      if (decoded) return;
      decoded = true;
      chunks = bscript$8.decompile(output);
      o.m = chunks[0] - OP_INT_BASE;
      o.n = chunks[chunks.length - 2] - OP_INT_BASE;
      o.pubkeys = chunks.slice(1, -2);
    }

    lazy$5.prop(o, 'output', () => {
      if (!a.m) return;
      if (!o.n) return;
      if (!a.pubkeys) return;
      return bscript$8.compile([].concat(OP_INT_BASE + a.m, a.pubkeys, OP_INT_BASE + o.n, OPS$5.OP_CHECKMULTISIG));
    });
    lazy$5.prop(o, 'm', () => {
      if (!o.output) return;
      decode(o.output);
      return o.m;
    });
    lazy$5.prop(o, 'n', () => {
      if (!o.pubkeys) return;
      return o.pubkeys.length;
    });
    lazy$5.prop(o, 'pubkeys', () => {
      if (!a.output) return;
      decode(a.output);
      return o.pubkeys;
    });
    lazy$5.prop(o, 'signatures', () => {
      if (!a.input) return;
      return bscript$8.decompile(a.input).slice(1);
    });
    lazy$5.prop(o, 'input', () => {
      if (!a.signatures) return;
      return bscript$8.compile([OPS$5.OP_0].concat(a.signatures));
    });
    lazy$5.prop(o, 'witness', () => {
      if (!o.input) return;
      return [];
    });
    lazy$5.prop(o, 'name', () => {
      if (!o.m || !o.n) return;
      return `p2ms(${o.m} of ${o.n})`;
    }); // extended validation

    if (opts.validate) {
      if (a.output) {
        decode(a.output);
        if (!types_1$5.typeforce.Number(chunks[0])) throw new TypeError('Output is invalid');
        if (!types_1$5.typeforce.Number(chunks[chunks.length - 2])) throw new TypeError('Output is invalid');
        if (chunks[chunks.length - 1] !== OPS$5.OP_CHECKMULTISIG) throw new TypeError('Output is invalid');
        if (o.m <= 0 || o.n > 16 || o.m > o.n || o.n !== chunks.length - 3) throw new TypeError('Output is invalid');
        if (!o.pubkeys.every(x => (0, types_1$5.isPoint)(x))) throw new TypeError('Output is invalid');
        if (a.m !== undefined && a.m !== o.m) throw new TypeError('m mismatch');
        if (a.n !== undefined && a.n !== o.n) throw new TypeError('n mismatch');
        if (a.pubkeys && !stacksEqual$2(a.pubkeys, o.pubkeys)) throw new TypeError('Pubkeys mismatch');
      }

      if (a.pubkeys) {
        if (a.n !== undefined && a.n !== a.pubkeys.length) throw new TypeError('Pubkey count mismatch');
        o.n = a.pubkeys.length;
        if (o.n < o.m) throw new TypeError('Pubkey count cannot be less than m');
      }

      if (a.signatures) {
        if (a.signatures.length < o.m) throw new TypeError('Not enough signatures provided');
        if (a.signatures.length > o.m) throw new TypeError('Too many signatures provided');
      }

      if (a.input) {
        if (a.input[0] !== OPS$5.OP_0) throw new TypeError('Input is invalid');
        if (o.signatures.length === 0 || !o.signatures.every(isAcceptableSignature)) throw new TypeError('Input has invalid signature(s)');
        if (a.signatures && !stacksEqual$2(a.signatures, o.signatures)) throw new TypeError('Signature mismatch');
        if (a.m !== undefined && a.m !== a.signatures.length) throw new TypeError('Signature count mismatch');
      }
    }

    return Object.assign(o, a);
  }

  p2ms$1.p2ms = p2ms;

  var p2pk$1 = {};

  Object.defineProperty(p2pk$1, '__esModule', {
    value: true
  });
  p2pk$1.p2pk = void 0;
  const networks_1$5 = networks$1;
  const bscript$7 = require$$4$3;
  const types_1$4 = types$8;
  const lazy$4 = lazy$7;
  const OPS$4 = bscript$7.OPS; // input: {signature}
  // output: {pubKey} OP_CHECKSIG

  function p2pk(a, opts) {
    if (!a.input && !a.output && !a.pubkey && !a.input && !a.signature) throw new TypeError('Not enough data');
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$4.typeforce)({
      network: types_1$4.typeforce.maybe(types_1$4.typeforce.Object),
      output: types_1$4.typeforce.maybe(types_1$4.typeforce.Buffer),
      pubkey: types_1$4.typeforce.maybe(types_1$4.isPoint),
      signature: types_1$4.typeforce.maybe(bscript$7.isCanonicalScriptSignature),
      input: types_1$4.typeforce.maybe(types_1$4.typeforce.Buffer)
    }, a);

    const _chunks = lazy$4.value(() => {
      return bscript$7.decompile(a.input);
    });

    const network = a.network || networks_1$5.bitcoin;
    const o = {
      name: 'p2pk',
      network
    };
    lazy$4.prop(o, 'output', () => {
      if (!a.pubkey) return;
      return bscript$7.compile([a.pubkey, OPS$4.OP_CHECKSIG]);
    });
    lazy$4.prop(o, 'pubkey', () => {
      if (!a.output) return;
      return a.output.slice(1, -1);
    });
    lazy$4.prop(o, 'signature', () => {
      if (!a.input) return;
      return _chunks()[0];
    });
    lazy$4.prop(o, 'input', () => {
      if (!a.signature) return;
      return bscript$7.compile([a.signature]);
    });
    lazy$4.prop(o, 'witness', () => {
      if (!o.input) return;
      return [];
    }); // extended validation

    if (opts.validate) {
      if (a.output) {
        if (a.output[a.output.length - 1] !== OPS$4.OP_CHECKSIG) throw new TypeError('Output is invalid');
        if (!(0, types_1$4.isPoint)(o.pubkey)) throw new TypeError('Output pubkey is invalid');
        if (a.pubkey && !a.pubkey.equals(o.pubkey)) throw new TypeError('Pubkey mismatch');
      }

      if (a.signature) {
        if (a.input && !a.input.equals(o.input)) throw new TypeError('Signature mismatch');
      }

      if (a.input) {
        if (_chunks().length !== 1) throw new TypeError('Input is invalid');
        if (!bscript$7.isCanonicalScriptSignature(o.signature)) throw new TypeError('Input has invalid signature');
      }
    }

    return Object.assign(o, a);
  }

  p2pk$1.p2pk = p2pk;

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.taggedHash = exports.hash256 = exports.hash160 = exports.sha256 = exports.sha1 = exports.ripemd160 = void 0;
  const createHash$1 = browser;

  function ripemd160(buffer) {
    try {
      return createHash$1('rmd160').update(buffer).digest();
    } catch (err) {
      return createHash$1('ripemd160').update(buffer).digest();
    }
  }

  exports.ripemd160 = ripemd160;

  function sha1(buffer) {
    return createHash$1('sha1').update(buffer).digest();
  }

  exports.sha1 = sha1;

  function sha256(buffer) {
    return createHash$1('sha256').update(buffer).digest();
  }

  exports.sha256 = sha256;

  function hash160(buffer) {
    return ripemd160(sha256(buffer));
  }

  exports.hash160 = hash160;

  function hash256(buffer) {
    return sha256(sha256(buffer));
  }

  exports.hash256 = hash256;
  const TAGS = ['BIP0340/challenge', 'BIP0340/aux', 'BIP0340/nonce', 'TapLeaf', 'TapBranch', 'TapSighash', 'TapTweak', 'KeyAgg list', 'KeyAgg coefficient'];
  /** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */

  const TAGGED_HASH_PREFIXES = Object.fromEntries(TAGS.map(tag => {
    const tagHash = sha256(Buffer$2.from(tag));
    return [tag, Buffer$2.concat([tagHash, tagHash])];
  }));

  function taggedHash(prefix, data) {
    return sha256(Buffer$2.concat([TAGGED_HASH_PREFIXES[prefix], data]));
  }

  exports.taggedHash = taggedHash;

  var crypto = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$4 = /*@__PURE__*/getAugmentedNamespace(crypto);

  // Copyright (c) 2018 base-x contributors
  // Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
  // Distributed under the MIT software license, see the accompanying
  // file LICENSE or http://www.opensource.org/licenses/mit-license.php.
  // @ts-ignore


  var _Buffer = safeBuffer.exports.Buffer;

  function base$1(ALPHABET) {
    if (ALPHABET.length >= 255) {
      throw new TypeError('Alphabet too long');
    }

    var BASE_MAP = new Uint8Array(256);

    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }

    for (var i = 0; i < ALPHABET.length; i++) {
      var x = ALPHABET.charAt(i);
      var xc = x.charCodeAt(0);

      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + ' is ambiguous');
      }

      BASE_MAP[xc] = i;
    }

    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256); // log(BASE) / log(256), rounded up

    var iFACTOR = Math.log(256) / Math.log(BASE); // log(256) / log(BASE), rounded up

    function encode(source) {
      if (Array.isArray(source) || source instanceof Uint8Array) {
        source = _Buffer.from(source);
      }

      if (!_Buffer.isBuffer(source)) {
        throw new TypeError('Expected Buffer');
      }

      if (source.length === 0) {
        return '';
      } // Skip & count leading zeroes.


      var zeroes = 0;
      var length = 0;
      var pbegin = 0;
      var pend = source.length;

      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      } // Allocate enough space in big-endian base58 representation.


      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size); // Process the bytes.

      while (pbegin !== pend) {
        var carry = source[pbegin]; // Apply "b58 = b58 * 256 + ch".

        var i = 0;

        for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }

        if (carry !== 0) {
          throw new Error('Non-zero carry');
        }

        length = i;
        pbegin++;
      } // Skip leading zeroes in base58 result.


      var it2 = size - length;

      while (it2 !== size && b58[it2] === 0) {
        it2++;
      } // Translate the result into a string.


      var str = LEADER.repeat(zeroes);

      for (; it2 < size; ++it2) {
        str += ALPHABET.charAt(b58[it2]);
      }

      return str;
    }

    function decodeUnsafe(source) {
      if (typeof source !== 'string') {
        throw new TypeError('Expected String');
      }

      if (source.length === 0) {
        return _Buffer.alloc(0);
      }

      var psz = 0; // Skip and count leading '1's.

      var zeroes = 0;
      var length = 0;

      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      } // Allocate enough space in big-endian base256 representation.


      var size = (source.length - psz) * FACTOR + 1 >>> 0; // log(58) / log(256), rounded up.

      var b256 = new Uint8Array(size); // Process the characters.

      while (source[psz]) {
        // Decode character
        var carry = BASE_MAP[source.charCodeAt(psz)]; // Invalid character

        if (carry === 255) {
          return;
        }

        var i = 0;

        for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }

        if (carry !== 0) {
          throw new Error('Non-zero carry');
        }

        length = i;
        psz++;
      } // Skip leading zeroes in b256.


      var it4 = size - length;

      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }

      var vch = _Buffer.allocUnsafe(zeroes + (size - it4));

      vch.fill(0x00, 0, zeroes);
      var j = zeroes;

      while (it4 !== size) {
        vch[j++] = b256[it4++];
      }

      return vch;
    }

    function decode(string) {
      var buffer = decodeUnsafe(string);

      if (buffer) {
        return buffer;
      }

      throw new Error('Non-base' + BASE + ' character');
    }

    return {
      encode: encode,
      decodeUnsafe: decodeUnsafe,
      decode: decode
    };
  }

  var src = base$1;

  var basex = src;
  var ALPHABET$1 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  var bs58 = basex(ALPHABET$1);

  var base58 = bs58;
  var Buffer$1 = safeBuffer.exports.Buffer;

  var base = function (checksumFn) {
    // Encode a buffer as a base58-check encoded string
    function encode(payload) {
      var checksum = checksumFn(payload);
      return base58.encode(Buffer$1.concat([payload, checksum], payload.length + 4));
    }

    function decodeRaw(buffer) {
      var payload = buffer.slice(0, -4);
      var checksum = buffer.slice(-4);
      var newChecksum = checksumFn(payload);
      if (checksum[0] ^ newChecksum[0] | checksum[1] ^ newChecksum[1] | checksum[2] ^ newChecksum[2] | checksum[3] ^ newChecksum[3]) return;
      return payload;
    } // Decode a base58-check encoded string to a buffer, no result if checksum is wrong


    function decodeUnsafe(string) {
      var buffer = base58.decodeUnsafe(string);
      if (!buffer) return;
      return decodeRaw(buffer);
    }

    function decode(string) {
      var buffer = base58.decode(string);
      var payload = decodeRaw(buffer);
      if (!payload) throw new Error('Invalid checksum');
      return payload;
    }

    return {
      encode: encode,
      decode: decode,
      decodeUnsafe: decodeUnsafe
    };
  };

  var createHash = browser;
  var bs58checkBase = base; // SHA256(SHA256(buffer))

  function sha256x2(buffer) {
    var tmp = createHash('sha256').update(buffer).digest();
    return createHash('sha256').update(tmp).digest();
  }

  var bs58check$3 = bs58checkBase(sha256x2);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.p2pkh = void 0;
  const bcrypto$5 = require$$1$4;
  const networks_1$4 = networks$1;
  const bscript$6 = require$$4$3;
  const types_1$3 = types$8;
  const lazy$3 = lazy$7;
  const bs58check$2 = bs58check$3;
  const OPS$3 = bscript$6.OPS; // input: {signature} {pubkey}
  // output: OP_DUP OP_HASH160 {hash160(pubkey)} OP_EQUALVERIFY OP_CHECKSIG

  function p2pkh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.pubkey && !a.input) throw new TypeError('Not enough data');
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$3.typeforce)({
      network: types_1$3.typeforce.maybe(types_1$3.typeforce.Object),
      address: types_1$3.typeforce.maybe(types_1$3.typeforce.String),
      hash: types_1$3.typeforce.maybe(types_1$3.typeforce.BufferN(20)),
      output: types_1$3.typeforce.maybe(types_1$3.typeforce.BufferN(25)),
      pubkey: types_1$3.typeforce.maybe(types_1$3.isPoint),
      signature: types_1$3.typeforce.maybe(bscript$6.isCanonicalScriptSignature),
      input: types_1$3.typeforce.maybe(types_1$3.typeforce.Buffer)
    }, a);

    const _address = lazy$3.value(() => {
      const payload = bs58check$2.decode(a.address);
      const version = payload.readUInt8(0);
      const hash = payload.slice(1);
      return {
        version,
        hash
      };
    });

    const _chunks = lazy$3.value(() => {
      return bscript$6.decompile(a.input);
    });

    const network = a.network || networks_1$4.bitcoin;
    const o = {
      name: 'p2pkh',
      network
    };
    lazy$3.prop(o, 'address', () => {
      if (!o.hash) return;
      const payload = Buffer$2.allocUnsafe(21);
      payload.writeUInt8(network.pubKeyHash, 0);
      o.hash.copy(payload, 1);
      return bs58check$2.encode(payload);
    });
    lazy$3.prop(o, 'hash', () => {
      if (a.output) return a.output.slice(3, 23);
      if (a.address) return _address().hash;
      if (a.pubkey || o.pubkey) return bcrypto$5.hash160(a.pubkey || o.pubkey);
    });
    lazy$3.prop(o, 'output', () => {
      if (!o.hash) return;
      return bscript$6.compile([OPS$3.OP_DUP, OPS$3.OP_HASH160, o.hash, OPS$3.OP_EQUALVERIFY, OPS$3.OP_CHECKSIG]);
    });
    lazy$3.prop(o, 'pubkey', () => {
      if (!a.input) return;
      return _chunks()[1];
    });
    lazy$3.prop(o, 'signature', () => {
      if (!a.input) return;
      return _chunks()[0];
    });
    lazy$3.prop(o, 'input', () => {
      if (!a.pubkey) return;
      if (!a.signature) return;
      return bscript$6.compile([a.signature, a.pubkey]);
    });
    lazy$3.prop(o, 'witness', () => {
      if (!o.input) return;
      return [];
    }); // extended validation

    if (opts.validate) {
      let hash = Buffer$2.from([]);

      if (a.address) {
        if (_address().version !== network.pubKeyHash) throw new TypeError('Invalid version or Network mismatch');
        if (_address().hash.length !== 20) throw new TypeError('Invalid address');
        hash = _address().hash;
      }

      if (a.hash) {
        if (hash.length > 0 && !hash.equals(a.hash)) throw new TypeError('Hash mismatch');else hash = a.hash;
      }

      if (a.output) {
        if (a.output.length !== 25 || a.output[0] !== OPS$3.OP_DUP || a.output[1] !== OPS$3.OP_HASH160 || a.output[2] !== 0x14 || a.output[23] !== OPS$3.OP_EQUALVERIFY || a.output[24] !== OPS$3.OP_CHECKSIG) throw new TypeError('Output is invalid');
        const hash2 = a.output.slice(3, 23);
        if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError('Hash mismatch');else hash = hash2;
      }

      if (a.pubkey) {
        const pkh = bcrypto$5.hash160(a.pubkey);
        if (hash.length > 0 && !hash.equals(pkh)) throw new TypeError('Hash mismatch');else hash = pkh;
      }

      if (a.input) {
        const chunks = _chunks();

        if (chunks.length !== 2) throw new TypeError('Input is invalid');
        if (!bscript$6.isCanonicalScriptSignature(chunks[0])) throw new TypeError('Input has invalid signature');
        if (!(0, types_1$3.isPoint)(chunks[1])) throw new TypeError('Input has invalid pubkey');
        if (a.signature && !a.signature.equals(chunks[0])) throw new TypeError('Signature mismatch');
        if (a.pubkey && !a.pubkey.equals(chunks[1])) throw new TypeError('Pubkey mismatch');
        const pkh = bcrypto$5.hash160(chunks[1]);
        if (hash.length > 0 && !hash.equals(pkh)) throw new TypeError('Hash mismatch');
      }
    }

    return Object.assign(o, a);
  }

  exports.p2pkh = p2pkh;

  var p2pkh$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3$1 = /*@__PURE__*/getAugmentedNamespace(p2pkh$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.p2sh = void 0;
  const bcrypto$4 = require$$1$4;
  const networks_1$3 = networks$1;
  const bscript$5 = require$$4$3;
  const types_1$2 = types$8;
  const lazy$2 = lazy$7;
  const bs58check$1 = bs58check$3;
  const OPS$2 = bscript$5.OPS;

  function stacksEqual$1(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  } // input: [redeemScriptSig ...] {redeemScript}
  // witness: <?>
  // output: OP_HASH160 {hash160(redeemScript)} OP_EQUAL


  function p2sh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.redeem && !a.input) throw new TypeError('Not enough data');
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$2.typeforce)({
      network: types_1$2.typeforce.maybe(types_1$2.typeforce.Object),
      address: types_1$2.typeforce.maybe(types_1$2.typeforce.String),
      hash: types_1$2.typeforce.maybe(types_1$2.typeforce.BufferN(20)),
      output: types_1$2.typeforce.maybe(types_1$2.typeforce.BufferN(23)),
      redeem: types_1$2.typeforce.maybe({
        network: types_1$2.typeforce.maybe(types_1$2.typeforce.Object),
        output: types_1$2.typeforce.maybe(types_1$2.typeforce.Buffer),
        input: types_1$2.typeforce.maybe(types_1$2.typeforce.Buffer),
        witness: types_1$2.typeforce.maybe(types_1$2.typeforce.arrayOf(types_1$2.typeforce.Buffer))
      }),
      input: types_1$2.typeforce.maybe(types_1$2.typeforce.Buffer),
      witness: types_1$2.typeforce.maybe(types_1$2.typeforce.arrayOf(types_1$2.typeforce.Buffer))
    }, a);
    let network = a.network;

    if (!network) {
      network = a.redeem && a.redeem.network || networks_1$3.bitcoin;
    }

    const o = {
      network
    };

    const _address = lazy$2.value(() => {
      const payload = bs58check$1.decode(a.address);
      const version = payload.readUInt8(0);
      const hash = payload.slice(1);
      return {
        version,
        hash
      };
    });

    const _chunks = lazy$2.value(() => {
      return bscript$5.decompile(a.input);
    });

    const _redeem = lazy$2.value(() => {
      const chunks = _chunks();

      return {
        network,
        output: chunks[chunks.length - 1],
        input: bscript$5.compile(chunks.slice(0, -1)),
        witness: a.witness || []
      };
    }); // output dependents


    lazy$2.prop(o, 'address', () => {
      if (!o.hash) return;
      const payload = Buffer$2.allocUnsafe(21);
      payload.writeUInt8(o.network.scriptHash, 0);
      o.hash.copy(payload, 1);
      return bs58check$1.encode(payload);
    });
    lazy$2.prop(o, 'hash', () => {
      // in order of least effort
      if (a.output) return a.output.slice(2, 22);
      if (a.address) return _address().hash;
      if (o.redeem && o.redeem.output) return bcrypto$4.hash160(o.redeem.output);
    });
    lazy$2.prop(o, 'output', () => {
      if (!o.hash) return;
      return bscript$5.compile([OPS$2.OP_HASH160, o.hash, OPS$2.OP_EQUAL]);
    }); // input dependents

    lazy$2.prop(o, 'redeem', () => {
      if (!a.input) return;
      return _redeem();
    });
    lazy$2.prop(o, 'input', () => {
      if (!a.redeem || !a.redeem.input || !a.redeem.output) return;
      return bscript$5.compile([].concat(bscript$5.decompile(a.redeem.input), a.redeem.output));
    });
    lazy$2.prop(o, 'witness', () => {
      if (o.redeem && o.redeem.witness) return o.redeem.witness;
      if (o.input) return [];
    });
    lazy$2.prop(o, 'name', () => {
      const nameParts = ['p2sh'];
      if (o.redeem !== undefined && o.redeem.name !== undefined) nameParts.push(o.redeem.name);
      return nameParts.join('-');
    });

    if (opts.validate) {
      let hash = Buffer$2.from([]);

      if (a.address) {
        if (_address().version !== network.scriptHash) throw new TypeError('Invalid version or Network mismatch');
        if (_address().hash.length !== 20) throw new TypeError('Invalid address');
        hash = _address().hash;
      }

      if (a.hash) {
        if (hash.length > 0 && !hash.equals(a.hash)) throw new TypeError('Hash mismatch');else hash = a.hash;
      }

      if (a.output) {
        if (a.output.length !== 23 || a.output[0] !== OPS$2.OP_HASH160 || a.output[1] !== 0x14 || a.output[22] !== OPS$2.OP_EQUAL) throw new TypeError('Output is invalid');
        const hash2 = a.output.slice(2, 22);
        if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError('Hash mismatch');else hash = hash2;
      } // inlined to prevent 'no-inner-declarations' failing


      const checkRedeem = redeem => {
        // is the redeem output empty/invalid?
        if (redeem.output) {
          const decompile = bscript$5.decompile(redeem.output);
          if (!decompile || decompile.length < 1) throw new TypeError('Redeem.output too short'); // match hash against other sources

          const hash2 = bcrypto$4.hash160(redeem.output);
          if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError('Hash mismatch');else hash = hash2;
        }

        if (redeem.input) {
          const hasInput = redeem.input.length > 0;
          const hasWitness = redeem.witness && redeem.witness.length > 0;
          if (!hasInput && !hasWitness) throw new TypeError('Empty input');
          if (hasInput && hasWitness) throw new TypeError('Input and witness provided');

          if (hasInput) {
            const richunks = bscript$5.decompile(redeem.input);
            if (!bscript$5.isPushOnly(richunks)) throw new TypeError('Non push-only scriptSig');
          }
        }
      };

      if (a.input) {
        const chunks = _chunks();

        if (!chunks || chunks.length < 1) throw new TypeError('Input too short');
        if (!isBuffer(_redeem().output)) throw new TypeError('Input is invalid');
        checkRedeem(_redeem());
      }

      if (a.redeem) {
        if (a.redeem.network && a.redeem.network !== network) throw new TypeError('Network mismatch');

        if (a.input) {
          const redeem = _redeem();

          if (a.redeem.output && !a.redeem.output.equals(redeem.output)) throw new TypeError('Redeem.output mismatch');
          if (a.redeem.input && !a.redeem.input.equals(redeem.input)) throw new TypeError('Redeem.input mismatch');
        }

        checkRedeem(a.redeem);
      }

      if (a.witness) {
        if (a.redeem && a.redeem.witness && !stacksEqual$1(a.redeem.witness, a.witness)) throw new TypeError('Witness and redeem.witness mismatch');
      }
    }

    return Object.assign(o, a);
  }

  exports.p2sh = p2sh;

  var p2sh$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$4$2 = /*@__PURE__*/getAugmentedNamespace(p2sh$1);

  var dist = {};

  Object.defineProperty(dist, "__esModule", {
    value: true
  });
  dist.bech32m = dist.bech32 = void 0;
  const ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
  const ALPHABET_MAP = {};

  for (let z = 0; z < ALPHABET.length; z++) {
    const x = ALPHABET.charAt(z);
    ALPHABET_MAP[x] = z;
  }

  function polymodStep(pre) {
    const b = pre >> 25;
    return (pre & 0x1ffffff) << 5 ^ -(b >> 0 & 1) & 0x3b6a57b2 ^ -(b >> 1 & 1) & 0x26508e6d ^ -(b >> 2 & 1) & 0x1ea119fa ^ -(b >> 3 & 1) & 0x3d4233dd ^ -(b >> 4 & 1) & 0x2a1462b3;
  }

  function prefixChk(prefix) {
    let chk = 1;

    for (let i = 0; i < prefix.length; ++i) {
      const c = prefix.charCodeAt(i);
      if (c < 33 || c > 126) return 'Invalid prefix (' + prefix + ')';
      chk = polymodStep(chk) ^ c >> 5;
    }

    chk = polymodStep(chk);

    for (let i = 0; i < prefix.length; ++i) {
      const v = prefix.charCodeAt(i);
      chk = polymodStep(chk) ^ v & 0x1f;
    }

    return chk;
  }

  function convert$2(data, inBits, outBits, pad) {
    let value = 0;
    let bits = 0;
    const maxV = (1 << outBits) - 1;
    const result = [];

    for (let i = 0; i < data.length; ++i) {
      value = value << inBits | data[i];
      bits += inBits;

      while (bits >= outBits) {
        bits -= outBits;
        result.push(value >> bits & maxV);
      }
    }

    if (pad) {
      if (bits > 0) {
        result.push(value << outBits - bits & maxV);
      }
    } else {
      if (bits >= inBits) return 'Excess padding';
      if (value << outBits - bits & maxV) return 'Non-zero padding';
    }

    return result;
  }

  function toWords(bytes) {
    return convert$2(bytes, 8, 5, true);
  }

  function fromWordsUnsafe(words) {
    const res = convert$2(words, 5, 8, false);
    if (Array.isArray(res)) return res;
  }

  function fromWords(words) {
    const res = convert$2(words, 5, 8, false);
    if (Array.isArray(res)) return res;
    throw new Error(res);
  }

  function getLibraryFromEncoding(encoding) {
    let ENCODING_CONST;

    if (encoding === 'bech32') {
      ENCODING_CONST = 1;
    } else {
      ENCODING_CONST = 0x2bc830a3;
    }

    function encode(prefix, words, LIMIT) {
      LIMIT = LIMIT || 90;
      if (prefix.length + 7 + words.length > LIMIT) throw new TypeError('Exceeds length limit');
      prefix = prefix.toLowerCase(); // determine chk mod

      let chk = prefixChk(prefix);
      if (typeof chk === 'string') throw new Error(chk);
      let result = prefix + '1';

      for (let i = 0; i < words.length; ++i) {
        const x = words[i];
        if (x >> 5 !== 0) throw new Error('Non 5-bit word');
        chk = polymodStep(chk) ^ x;
        result += ALPHABET.charAt(x);
      }

      for (let i = 0; i < 6; ++i) {
        chk = polymodStep(chk);
      }

      chk ^= ENCODING_CONST;

      for (let i = 0; i < 6; ++i) {
        const v = chk >> (5 - i) * 5 & 0x1f;
        result += ALPHABET.charAt(v);
      }

      return result;
    }

    function __decode(str, LIMIT) {
      LIMIT = LIMIT || 90;
      if (str.length < 8) return str + ' too short';
      if (str.length > LIMIT) return 'Exceeds length limit'; // don't allow mixed case

      const lowered = str.toLowerCase();
      const uppered = str.toUpperCase();
      if (str !== lowered && str !== uppered) return 'Mixed-case string ' + str;
      str = lowered;
      const split = str.lastIndexOf('1');
      if (split === -1) return 'No separator character for ' + str;
      if (split === 0) return 'Missing prefix for ' + str;
      const prefix = str.slice(0, split);
      const wordChars = str.slice(split + 1);
      if (wordChars.length < 6) return 'Data too short';
      let chk = prefixChk(prefix);
      if (typeof chk === 'string') return chk;
      const words = [];

      for (let i = 0; i < wordChars.length; ++i) {
        const c = wordChars.charAt(i);
        const v = ALPHABET_MAP[c];
        if (v === undefined) return 'Unknown character ' + c;
        chk = polymodStep(chk) ^ v; // not in the checksum?

        if (i + 6 >= wordChars.length) continue;
        words.push(v);
      }

      if (chk !== ENCODING_CONST) return 'Invalid checksum for ' + str;
      return {
        prefix,
        words
      };
    }

    function decodeUnsafe(str, LIMIT) {
      const res = __decode(str, LIMIT);

      if (typeof res === 'object') return res;
    }

    function decode(str, LIMIT) {
      const res = __decode(str, LIMIT);

      if (typeof res === 'object') return res;
      throw new Error(res);
    }

    return {
      decodeUnsafe,
      decode,
      encode,
      toWords,
      fromWordsUnsafe,
      fromWords
    };
  }

  dist.bech32 = getLibraryFromEncoding('bech32');
  dist.bech32m = getLibraryFromEncoding('bech32m');

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.p2wpkh = void 0;
  const bcrypto$3 = require$$1$4;
  const networks_1$2 = networks$1;
  const bscript$4 = require$$4$3;
  const types_1$1 = types$8;
  const lazy$1 = lazy$7;
  const bech32_1$2 = dist;
  const OPS$1 = bscript$4.OPS;
  const EMPTY_BUFFER$2 = Buffer$2.alloc(0); // witness: {signature} {pubKey}
  // input: <>
  // output: OP_0 {pubKeyHash}

  function p2wpkh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.pubkey && !a.witness) throw new TypeError('Not enough data');
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$1.typeforce)({
      address: types_1$1.typeforce.maybe(types_1$1.typeforce.String),
      hash: types_1$1.typeforce.maybe(types_1$1.typeforce.BufferN(20)),
      input: types_1$1.typeforce.maybe(types_1$1.typeforce.BufferN(0)),
      network: types_1$1.typeforce.maybe(types_1$1.typeforce.Object),
      output: types_1$1.typeforce.maybe(types_1$1.typeforce.BufferN(22)),
      pubkey: types_1$1.typeforce.maybe(types_1$1.isPoint),
      signature: types_1$1.typeforce.maybe(bscript$4.isCanonicalScriptSignature),
      witness: types_1$1.typeforce.maybe(types_1$1.typeforce.arrayOf(types_1$1.typeforce.Buffer))
    }, a);

    const _address = lazy$1.value(() => {
      const result = bech32_1$2.bech32.decode(a.address);
      const version = result.words.shift();
      const data = bech32_1$2.bech32.fromWords(result.words);
      return {
        version,
        prefix: result.prefix,
        data: Buffer$2.from(data)
      };
    });

    const network = a.network || networks_1$2.bitcoin;
    const o = {
      name: 'p2wpkh',
      network
    };
    lazy$1.prop(o, 'address', () => {
      if (!o.hash) return;
      const words = bech32_1$2.bech32.toWords(o.hash);
      words.unshift(0x00);
      return bech32_1$2.bech32.encode(network.bech32, words);
    });
    lazy$1.prop(o, 'hash', () => {
      if (a.output) return a.output.slice(2, 22);
      if (a.address) return _address().data;
      if (a.pubkey || o.pubkey) return bcrypto$3.hash160(a.pubkey || o.pubkey);
    });
    lazy$1.prop(o, 'output', () => {
      if (!o.hash) return;
      return bscript$4.compile([OPS$1.OP_0, o.hash]);
    });
    lazy$1.prop(o, 'pubkey', () => {
      if (a.pubkey) return a.pubkey;
      if (!a.witness) return;
      return a.witness[1];
    });
    lazy$1.prop(o, 'signature', () => {
      if (!a.witness) return;
      return a.witness[0];
    });
    lazy$1.prop(o, 'input', () => {
      if (!o.witness) return;
      return EMPTY_BUFFER$2;
    });
    lazy$1.prop(o, 'witness', () => {
      if (!a.pubkey) return;
      if (!a.signature) return;
      return [a.signature, a.pubkey];
    }); // extended validation

    if (opts.validate) {
      let hash = Buffer$2.from([]);

      if (a.address) {
        if (network && network.bech32 !== _address().prefix) throw new TypeError('Invalid prefix or Network mismatch');
        if (_address().version !== 0x00) throw new TypeError('Invalid address version');
        if (_address().data.length !== 20) throw new TypeError('Invalid address data');
        hash = _address().data;
      }

      if (a.hash) {
        if (hash.length > 0 && !hash.equals(a.hash)) throw new TypeError('Hash mismatch');else hash = a.hash;
      }

      if (a.output) {
        if (a.output.length !== 22 || a.output[0] !== OPS$1.OP_0 || a.output[1] !== 0x14) throw new TypeError('Output is invalid');
        if (hash.length > 0 && !hash.equals(a.output.slice(2))) throw new TypeError('Hash mismatch');else hash = a.output.slice(2);
      }

      if (a.pubkey) {
        const pkh = bcrypto$3.hash160(a.pubkey);
        if (hash.length > 0 && !hash.equals(pkh)) throw new TypeError('Hash mismatch');else hash = pkh;
        if (!(0, types_1$1.isPoint)(a.pubkey) || a.pubkey.length !== 33) throw new TypeError('Invalid pubkey for p2wpkh');
      }

      if (a.witness) {
        if (a.witness.length !== 2) throw new TypeError('Witness is invalid');
        if (!bscript$4.isCanonicalScriptSignature(a.witness[0])) throw new TypeError('Witness has invalid signature');
        if (!(0, types_1$1.isPoint)(a.witness[1]) || a.witness[1].length !== 33) throw new TypeError('Witness has invalid pubkey');
        if (a.signature && !a.signature.equals(a.witness[0])) throw new TypeError('Signature mismatch');
        if (a.pubkey && !a.pubkey.equals(a.witness[1])) throw new TypeError('Pubkey mismatch');
        const pkh = bcrypto$3.hash160(a.witness[1]);
        if (hash.length > 0 && !hash.equals(pkh)) throw new TypeError('Hash mismatch');
      }
    }

    return Object.assign(o, a);
  }

  exports.p2wpkh = p2wpkh;

  var p2wpkh$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$5$2 = /*@__PURE__*/getAugmentedNamespace(p2wpkh$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.p2wsh = void 0;
  const bcrypto$2 = require$$1$4;
  const networks_1$1 = networks$1;
  const bscript$3 = require$$4$3;
  const types_1 = types$8;
  const lazy = lazy$7;
  const bech32_1$1 = dist;
  const OPS = bscript$3.OPS;
  const EMPTY_BUFFER$1 = Buffer$2.alloc(0);

  function stacksEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => {
      return x.equals(b[i]);
    });
  }

  function chunkHasUncompressedPubkey(chunk) {
    if (isBuffer(chunk) && chunk.length === 65 && chunk[0] === 0x04 && (0, types_1.isPoint)(chunk)) {
      return true;
    } else {
      return false;
    }
  } // input: <>
  // witness: [redeemScriptSig ...] {redeemScript}
  // output: OP_0 {sha256(redeemScript)}


  function p2wsh(a, opts) {
    if (!a.address && !a.hash && !a.output && !a.redeem && !a.witness) throw new TypeError('Not enough data');
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1.typeforce)({
      network: types_1.typeforce.maybe(types_1.typeforce.Object),
      address: types_1.typeforce.maybe(types_1.typeforce.String),
      hash: types_1.typeforce.maybe(types_1.typeforce.BufferN(32)),
      output: types_1.typeforce.maybe(types_1.typeforce.BufferN(34)),
      redeem: types_1.typeforce.maybe({
        input: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        network: types_1.typeforce.maybe(types_1.typeforce.Object),
        output: types_1.typeforce.maybe(types_1.typeforce.Buffer),
        witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
      }),
      input: types_1.typeforce.maybe(types_1.typeforce.BufferN(0)),
      witness: types_1.typeforce.maybe(types_1.typeforce.arrayOf(types_1.typeforce.Buffer))
    }, a);

    const _address = lazy.value(() => {
      const result = bech32_1$1.bech32.decode(a.address);
      const version = result.words.shift();
      const data = bech32_1$1.bech32.fromWords(result.words);
      return {
        version,
        prefix: result.prefix,
        data: Buffer$2.from(data)
      };
    });

    const _rchunks = lazy.value(() => {
      return bscript$3.decompile(a.redeem.input);
    });

    let network = a.network;

    if (!network) {
      network = a.redeem && a.redeem.network || networks_1$1.bitcoin;
    }

    const o = {
      network
    };
    lazy.prop(o, 'address', () => {
      if (!o.hash) return;
      const words = bech32_1$1.bech32.toWords(o.hash);
      words.unshift(0x00);
      return bech32_1$1.bech32.encode(network.bech32, words);
    });
    lazy.prop(o, 'hash', () => {
      if (a.output) return a.output.slice(2);
      if (a.address) return _address().data;
      if (o.redeem && o.redeem.output) return bcrypto$2.sha256(o.redeem.output);
    });
    lazy.prop(o, 'output', () => {
      if (!o.hash) return;
      return bscript$3.compile([OPS.OP_0, o.hash]);
    });
    lazy.prop(o, 'redeem', () => {
      if (!a.witness) return;
      return {
        output: a.witness[a.witness.length - 1],
        input: EMPTY_BUFFER$1,
        witness: a.witness.slice(0, -1)
      };
    });
    lazy.prop(o, 'input', () => {
      if (!o.witness) return;
      return EMPTY_BUFFER$1;
    });
    lazy.prop(o, 'witness', () => {
      // transform redeem input to witness stack?
      if (a.redeem && a.redeem.input && a.redeem.input.length > 0 && a.redeem.output && a.redeem.output.length > 0) {
        const stack = bscript$3.toStack(_rchunks()); // assign, and blank the existing input

        o.redeem = Object.assign({
          witness: stack
        }, a.redeem);
        o.redeem.input = EMPTY_BUFFER$1;
        return [].concat(stack, a.redeem.output);
      }

      if (!a.redeem) return;
      if (!a.redeem.output) return;
      if (!a.redeem.witness) return;
      return [].concat(a.redeem.witness, a.redeem.output);
    });
    lazy.prop(o, 'name', () => {
      const nameParts = ['p2wsh'];
      if (o.redeem !== undefined && o.redeem.name !== undefined) nameParts.push(o.redeem.name);
      return nameParts.join('-');
    }); // extended validation

    if (opts.validate) {
      let hash = Buffer$2.from([]);

      if (a.address) {
        if (_address().prefix !== network.bech32) throw new TypeError('Invalid prefix or Network mismatch');
        if (_address().version !== 0x00) throw new TypeError('Invalid address version');
        if (_address().data.length !== 32) throw new TypeError('Invalid address data');
        hash = _address().data;
      }

      if (a.hash) {
        if (hash.length > 0 && !hash.equals(a.hash)) throw new TypeError('Hash mismatch');else hash = a.hash;
      }

      if (a.output) {
        if (a.output.length !== 34 || a.output[0] !== OPS.OP_0 || a.output[1] !== 0x20) throw new TypeError('Output is invalid');
        const hash2 = a.output.slice(2);
        if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError('Hash mismatch');else hash = hash2;
      }

      if (a.redeem) {
        if (a.redeem.network && a.redeem.network !== network) throw new TypeError('Network mismatch'); // is there two redeem sources?

        if (a.redeem.input && a.redeem.input.length > 0 && a.redeem.witness && a.redeem.witness.length > 0) throw new TypeError('Ambiguous witness source'); // is the redeem output non-empty?

        if (a.redeem.output) {
          if (bscript$3.decompile(a.redeem.output).length === 0) throw new TypeError('Redeem.output is invalid'); // match hash against other sources

          const hash2 = bcrypto$2.sha256(a.redeem.output);
          if (hash.length > 0 && !hash.equals(hash2)) throw new TypeError('Hash mismatch');else hash = hash2;
        }

        if (a.redeem.input && !bscript$3.isPushOnly(_rchunks())) throw new TypeError('Non push-only scriptSig');
        if (a.witness && a.redeem.witness && !stacksEqual(a.witness, a.redeem.witness)) throw new TypeError('Witness and redeem.witness mismatch');

        if (a.redeem.input && _rchunks().some(chunkHasUncompressedPubkey) || a.redeem.output && (bscript$3.decompile(a.redeem.output) || []).some(chunkHasUncompressedPubkey)) {
          throw new TypeError('redeem.input or redeem.output contains uncompressed pubkey');
        }
      }

      if (a.witness && a.witness.length > 0) {
        const wScript = a.witness[a.witness.length - 1];
        if (a.redeem && a.redeem.output && !a.redeem.output.equals(wScript)) throw new TypeError('Witness and redeem.output mismatch');
        if (a.witness.some(chunkHasUncompressedPubkey) || (bscript$3.decompile(wScript) || []).some(chunkHasUncompressedPubkey)) throw new TypeError('Witness contains uncompressed pubkey');
      }
    }

    return Object.assign(o, a);
  }

  exports.p2wsh = p2wsh;

  var p2wsh$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$6$2 = /*@__PURE__*/getAugmentedNamespace(p2wsh$1);

  (function (exports) {

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.p2wsh = exports.p2wpkh = exports.p2sh = exports.p2pkh = exports.p2pk = exports.p2ms = exports.embed = void 0;
    const embed_1 = embed;
    Object.defineProperty(exports, 'embed', {
      enumerable: true,
      get: function () {
        return embed_1.p2data;
      }
    });
    const p2ms_1 = p2ms$1;
    Object.defineProperty(exports, 'p2ms', {
      enumerable: true,
      get: function () {
        return p2ms_1.p2ms;
      }
    });
    const p2pk_1 = p2pk$1;
    Object.defineProperty(exports, 'p2pk', {
      enumerable: true,
      get: function () {
        return p2pk_1.p2pk;
      }
    });
    const p2pkh_1 = require$$3$1;
    Object.defineProperty(exports, 'p2pkh', {
      enumerable: true,
      get: function () {
        return p2pkh_1.p2pkh;
      }
    });
    const p2sh_1 = require$$4$2;
    Object.defineProperty(exports, 'p2sh', {
      enumerable: true,
      get: function () {
        return p2sh_1.p2sh;
      }
    });
    const p2wpkh_1 = require$$5$2;
    Object.defineProperty(exports, 'p2wpkh', {
      enumerable: true,
      get: function () {
        return p2wpkh_1.p2wpkh;
      }
    });
    const p2wsh_1 = require$$6$2;
    Object.defineProperty(exports, 'p2wsh', {
      enumerable: true,
      get: function () {
        return p2wsh_1.p2wsh;
      }
    }); // TODO
    // witness commitment
  })(payments$2);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.toOutputScript = exports.fromOutputScript = exports.toBech32 = exports.toBase58Check = exports.fromBech32 = exports.fromBase58Check = void 0;
  const networks = networks$1;
  const payments$1 = payments$2;
  const bscript$2 = require$$4$3;
  const types$3 = types$8;
  const bech32_1 = dist;
  const bs58check = bs58check$3;
  const {
    typeforce: typeforce$3
  } = types$3;
  const FUTURE_SEGWIT_MAX_SIZE = 40;
  const FUTURE_SEGWIT_MIN_SIZE = 2;
  const FUTURE_SEGWIT_MAX_VERSION = 16;
  const FUTURE_SEGWIT_MIN_VERSION = 1;
  const FUTURE_SEGWIT_VERSION_DIFF = 0x50;
  const FUTURE_SEGWIT_VERSION_WARNING = 'WARNING: Sending to a future segwit version address can lead to loss of funds. ' + 'End users MUST be warned carefully in the GUI and asked if they wish to proceed ' + 'with caution. Wallets should verify the segwit version from the output of fromBech32, ' + 'then decide when it is safe to use which version of segwit.';

  function _toFutureSegwitAddress(output, network) {
    const data = output.slice(2);
    if (data.length < FUTURE_SEGWIT_MIN_SIZE || data.length > FUTURE_SEGWIT_MAX_SIZE) throw new TypeError('Invalid program length for segwit address');
    const version = output[0] - FUTURE_SEGWIT_VERSION_DIFF;
    if (version < FUTURE_SEGWIT_MIN_VERSION || version > FUTURE_SEGWIT_MAX_VERSION) throw new TypeError('Invalid version for segwit address');
    if (output[1] !== data.length) throw new TypeError('Invalid script for segwit address');
    console.warn(FUTURE_SEGWIT_VERSION_WARNING);
    return toBech32(data, version, network.bech32);
  }

  function fromBase58Check(address) {
    const payload = bs58check.decode(address); // TODO: 4.0.0, move to "toOutputScript"

    if (payload.length < 21) throw new TypeError(address + ' is too short');
    if (payload.length > 21) throw new TypeError(address + ' is too long');
    const version = payload.readUInt8(0);
    const hash = payload.slice(1);
    return {
      version,
      hash
    };
  }

  exports.fromBase58Check = fromBase58Check;

  function fromBech32(address) {
    let result;
    let version;

    try {
      result = bech32_1.bech32.decode(address);
    } catch (e) {}

    if (result) {
      version = result.words[0];
      if (version !== 0) throw new TypeError(address + ' uses wrong encoding');
    } else {
      result = bech32_1.bech32m.decode(address);
      version = result.words[0];
      if (version === 0) throw new TypeError(address + ' uses wrong encoding');
    }

    const data = bech32_1.bech32.fromWords(result.words.slice(1));
    return {
      version,
      prefix: result.prefix,
      data: Buffer$2.from(data)
    };
  }

  exports.fromBech32 = fromBech32;

  function toBase58Check(hash, version) {
    typeforce$3(types$3.tuple(types$3.Hash160bit, types$3.UInt8), arguments);
    const payload = Buffer$2.allocUnsafe(21);
    payload.writeUInt8(version, 0);
    hash.copy(payload, 1);
    return bs58check.encode(payload);
  }

  exports.toBase58Check = toBase58Check;

  function toBech32(data, version, prefix) {
    const words = bech32_1.bech32.toWords(data);
    words.unshift(version);
    return version === 0 ? bech32_1.bech32.encode(prefix, words) : bech32_1.bech32m.encode(prefix, words);
  }

  exports.toBech32 = toBech32;

  function fromOutputScript(output, network) {
    // TODO: Network
    network = network || networks.bitcoin;

    try {
      return payments$1.p2pkh({
        output,
        network
      }).address;
    } catch (e) {}

    try {
      return payments$1.p2sh({
        output,
        network
      }).address;
    } catch (e) {}

    try {
      return payments$1.p2wpkh({
        output,
        network
      }).address;
    } catch (e) {}

    try {
      return payments$1.p2wsh({
        output,
        network
      }).address;
    } catch (e) {}

    try {
      return _toFutureSegwitAddress(output, network);
    } catch (e) {}

    throw new Error(bscript$2.toASM(output) + ' has no matching Address');
  }

  exports.fromOutputScript = fromOutputScript;

  function toOutputScript(address, network) {
    network = network || networks.bitcoin;
    let decodeBase58;
    let decodeBech32;

    try {
      decodeBase58 = fromBase58Check(address);
    } catch (e) {}

    if (decodeBase58) {
      if (decodeBase58.version === network.pubKeyHash) return payments$1.p2pkh({
        hash: decodeBase58.hash
      }).output;
      if (decodeBase58.version === network.scriptHash) return payments$1.p2sh({
        hash: decodeBase58.hash
      }).output;
    } else {
      try {
        decodeBech32 = fromBech32(address);
      } catch (e) {}

      if (decodeBech32) {
        if (decodeBech32.prefix !== network.bech32) throw new Error(address + ' has an invalid prefix');

        if (decodeBech32.version === 0) {
          if (decodeBech32.data.length === 20) return payments$1.p2wpkh({
            hash: decodeBech32.data
          }).output;
          if (decodeBech32.data.length === 32) return payments$1.p2wsh({
            hash: decodeBech32.data
          }).output;
        } else if (decodeBech32.version >= FUTURE_SEGWIT_MIN_VERSION && decodeBech32.version <= FUTURE_SEGWIT_MAX_VERSION && decodeBech32.data.length >= FUTURE_SEGWIT_MIN_SIZE && decodeBech32.data.length <= FUTURE_SEGWIT_MAX_SIZE) {
          console.warn(FUTURE_SEGWIT_VERSION_WARNING);
          return bscript$2.compile([decodeBech32.version + FUTURE_SEGWIT_VERSION_DIFF, decodeBech32.data]);
        }
      }
    }

    throw new Error(address + ' has no matching Script');
  }

  exports.toOutputScript = toOutputScript;

  var address = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(address);

  var Buffer = safeBuffer.exports.Buffer; // Number.MAX_SAFE_INTEGER

  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  function checkUInt53$1(n) {
    if (n < 0 || n > MAX_SAFE_INTEGER$1 || n % 1 !== 0) throw new RangeError('value out of range');
  }

  function encode$f(number, buffer, offset) {
    checkUInt53$1(number);
    if (!buffer) buffer = Buffer.allocUnsafe(encodingLength$1(number));
    if (!Buffer.isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance');
    if (!offset) offset = 0; // 8 bit

    if (number < 0xfd) {
      buffer.writeUInt8(number, offset);
      encode$f.bytes = 1; // 16 bit
    } else if (number <= 0xffff) {
      buffer.writeUInt8(0xfd, offset);
      buffer.writeUInt16LE(number, offset + 1);
      encode$f.bytes = 3; // 32 bit
    } else if (number <= 0xffffffff) {
      buffer.writeUInt8(0xfe, offset);
      buffer.writeUInt32LE(number, offset + 1);
      encode$f.bytes = 5; // 64 bit
    } else {
      buffer.writeUInt8(0xff, offset);
      buffer.writeUInt32LE(number >>> 0, offset + 1);
      buffer.writeUInt32LE(number / 0x100000000 | 0, offset + 5);
      encode$f.bytes = 9;
    }

    return buffer;
  }

  function decode$e(buffer, offset) {
    if (!Buffer.isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance');
    if (!offset) offset = 0;
    var first = buffer.readUInt8(offset); // 8 bit

    if (first < 0xfd) {
      decode$e.bytes = 1;
      return first; // 16 bit
    } else if (first === 0xfd) {
      decode$e.bytes = 3;
      return buffer.readUInt16LE(offset + 1); // 32 bit
    } else if (first === 0xfe) {
      decode$e.bytes = 5;
      return buffer.readUInt32LE(offset + 1); // 64 bit
    } else {
      decode$e.bytes = 9;
      var lo = buffer.readUInt32LE(offset + 1);
      var hi = buffer.readUInt32LE(offset + 5);
      var number = hi * 0x0100000000 + lo;
      checkUInt53$1(number);
      return number;
    }
  }

  function encodingLength$1(number) {
    checkUInt53$1(number);
    return number < 0xfd ? 1 : number <= 0xffff ? 3 : number <= 0xffffffff ? 5 : 9;
  }

  var varuintBitcoin = {
    encode: encode$f,
    decode: decode$e,
    encodingLength: encodingLength$1
  };

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.BufferReader = exports.BufferWriter = exports.cloneBuffer = exports.reverseBuffer = exports.writeUInt64LE = exports.readUInt64LE = exports.varuint = void 0;
  const types$2 = types$8;
  const {
    typeforce: typeforce$2
  } = types$2;
  const varuint$6 = varuintBitcoin;
  exports.varuint = varuint$6; // https://github.com/feross/buffer/blob/master/index.js#L1127

  function verifuint$1(value, max) {
    if (typeof value !== 'number') throw new Error('cannot write a non-number as a number');
    if (value < 0) throw new Error('specified a negative value for writing an unsigned value');
    if (value > max) throw new Error('RangeError: value out of range');
    if (Math.floor(value) !== value) throw new Error('value has a fractional component');
  }

  function readUInt64LE$1(buffer, offset) {
    const a = buffer.readUInt32LE(offset);
    let b = buffer.readUInt32LE(offset + 4);
    b *= 0x100000000;
    verifuint$1(b + a, 0x001fffffffffffff);
    return b + a;
  }

  exports.readUInt64LE = readUInt64LE$1;

  function writeUInt64LE$1(buffer, value, offset) {
    verifuint$1(value, 0x001fffffffffffff);
    buffer.writeInt32LE(value & -1, offset);
    buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
    return offset + 8;
  }

  exports.writeUInt64LE = writeUInt64LE$1;

  function reverseBuffer$1(buffer) {
    if (buffer.length < 1) return buffer;
    let j = buffer.length - 1;
    let tmp = 0;

    for (let i = 0; i < buffer.length / 2; i++) {
      tmp = buffer[i];
      buffer[i] = buffer[j];
      buffer[j] = tmp;
      j--;
    }

    return buffer;
  }

  exports.reverseBuffer = reverseBuffer$1;

  function cloneBuffer(buffer) {
    const clone = Buffer$2.allocUnsafe(buffer.length);
    buffer.copy(clone);
    return clone;
  }

  exports.cloneBuffer = cloneBuffer;
  /**
   * Helper class for serialization of bitcoin data types into a pre-allocated buffer.
   */

  class BufferWriter {
    constructor(buffer, offset = 0) {
      this.buffer = buffer;
      this.offset = offset;
      typeforce$2(types$2.tuple(types$2.Buffer, types$2.UInt32), [buffer, offset]);
    }

    static withCapacity(size) {
      return new BufferWriter(Buffer$2.alloc(size));
    }

    writeUInt8(i) {
      this.offset = this.buffer.writeUInt8(i, this.offset);
    }

    writeInt32(i) {
      this.offset = this.buffer.writeInt32LE(i, this.offset);
    }

    writeUInt32(i) {
      this.offset = this.buffer.writeUInt32LE(i, this.offset);
    }

    writeUInt64(i) {
      this.offset = writeUInt64LE$1(this.buffer, i, this.offset);
    }

    writeVarInt(i) {
      varuint$6.encode(i, this.buffer, this.offset);
      this.offset += varuint$6.encode.bytes;
    }

    writeSlice(slice) {
      if (this.buffer.length < this.offset + slice.length) {
        throw new Error('Cannot write slice out of bounds');
      }

      this.offset += slice.copy(this.buffer, this.offset);
    }

    writeVarSlice(slice) {
      this.writeVarInt(slice.length);
      this.writeSlice(slice);
    }

    writeVector(vector) {
      this.writeVarInt(vector.length);
      vector.forEach(buf => this.writeVarSlice(buf));
    }

    end() {
      if (this.buffer.length === this.offset) {
        return this.buffer;
      }

      throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
    }

  }

  exports.BufferWriter = BufferWriter;
  /**
   * Helper class for reading of bitcoin data types from a buffer.
   */

  class BufferReader {
    constructor(buffer, offset = 0) {
      this.buffer = buffer;
      this.offset = offset;
      typeforce$2(types$2.tuple(types$2.Buffer, types$2.UInt32), [buffer, offset]);
    }

    readUInt8() {
      const result = this.buffer.readUInt8(this.offset);
      this.offset++;
      return result;
    }

    readInt32() {
      const result = this.buffer.readInt32LE(this.offset);
      this.offset += 4;
      return result;
    }

    readUInt32() {
      const result = this.buffer.readUInt32LE(this.offset);
      this.offset += 4;
      return result;
    }

    readUInt64() {
      const result = readUInt64LE$1(this.buffer, this.offset);
      this.offset += 8;
      return result;
    }

    readVarInt() {
      const vi = varuint$6.decode(this.buffer, this.offset);
      this.offset += varuint$6.decode.bytes;
      return vi;
    }

    readSlice(n) {
      if (this.buffer.length < this.offset + n) {
        throw new Error('Cannot read slice out of bounds');
      }

      const result = this.buffer.slice(this.offset, this.offset + n);
      this.offset += n;
      return result;
    }

    readVarSlice() {
      return this.readSlice(this.readVarInt());
    }

    readVector() {
      const count = this.readVarInt();
      const vector = [];

      for (let i = 0; i < count; i++) vector.push(this.readVarSlice());

      return vector;
    }

  }

  exports.BufferReader = BufferReader;

  var bufferutils = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$4$1 = /*@__PURE__*/getAugmentedNamespace(bufferutils);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.fastMerkleRoot = void 0;

  function fastMerkleRoot(values, digestFn) {
    if (!Array.isArray(values)) throw TypeError('Expected values Array');
    if (typeof digestFn !== 'function') throw TypeError('Expected digest Function');
    let length = values.length;
    const results = values.concat();

    while (length > 1) {
      let j = 0;

      for (let i = 0; i < length; i += 2, ++j) {
        const left = results[i];
        const right = i + 1 === length ? left : results[i + 1];
        const data = Buffer$2.concat([left, right]);
        results[j] = digestFn(data);
      }

      length = j;
    }

    return results[0];
  }

  exports.fastMerkleRoot = fastMerkleRoot;

  var merkle = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$2 = /*@__PURE__*/getAugmentedNamespace(merkle);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.Transaction = void 0;
  const bufferutils_1$2 = require$$4$1;
  const bcrypto$1 = require$$1$4;
  const bscript$1 = require$$4$3;
  const script_1 = require$$4$3;
  const types$1 = types$8;
  const {
    typeforce: typeforce$1
  } = types$1;

  function varSliceSize(someScript) {
    const length = someScript.length;
    return bufferutils_1$2.varuint.encodingLength(length) + length;
  }

  function vectorSize(someVector) {
    const length = someVector.length;
    return bufferutils_1$2.varuint.encodingLength(length) + someVector.reduce((sum, witness) => {
      return sum + varSliceSize(witness);
    }, 0);
  }

  const EMPTY_BUFFER = Buffer$2.allocUnsafe(0);
  const EMPTY_WITNESS = [];
  const ZERO = Buffer$2.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex');
  const ONE = Buffer$2.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex');
  const VALUE_UINT64_MAX = Buffer$2.from('ffffffffffffffff', 'hex');
  const BLANK_OUTPUT = {
    script: EMPTY_BUFFER,
    valueBuffer: VALUE_UINT64_MAX
  };

  function isOutput(out) {
    return out.value !== undefined;
  }

  class Transaction {
    constructor() {
      this.version = 1;
      this.locktime = 0;
      this.ins = [];
      this.outs = [];
    }

    static fromBuffer(buffer, _NO_STRICT) {
      const bufferReader = new bufferutils_1$2.BufferReader(buffer);
      const tx = new Transaction();
      tx.version = bufferReader.readInt32();
      const marker = bufferReader.readUInt8();
      const flag = bufferReader.readUInt8();
      let hasWitnesses = false;

      if (marker === Transaction.ADVANCED_TRANSACTION_MARKER && flag === Transaction.ADVANCED_TRANSACTION_FLAG) {
        hasWitnesses = true;
      } else {
        bufferReader.offset -= 2;
      }

      const vinLen = bufferReader.readVarInt();

      for (let i = 0; i < vinLen; ++i) {
        tx.ins.push({
          hash: bufferReader.readSlice(32),
          index: bufferReader.readUInt32(),
          script: bufferReader.readVarSlice(),
          sequence: bufferReader.readUInt32(),
          witness: EMPTY_WITNESS
        });
      }

      const voutLen = bufferReader.readVarInt();

      for (let i = 0; i < voutLen; ++i) {
        tx.outs.push({
          value: bufferReader.readUInt64(),
          script: bufferReader.readVarSlice()
        });
      }

      if (hasWitnesses) {
        for (let i = 0; i < vinLen; ++i) {
          tx.ins[i].witness = bufferReader.readVector();
        } // was this pointless?


        if (!tx.hasWitnesses()) throw new Error('Transaction has superfluous witness data');
      }

      tx.locktime = bufferReader.readUInt32();
      if (_NO_STRICT) return tx;
      if (bufferReader.offset !== buffer.length) throw new Error('Transaction has unexpected data');
      return tx;
    }

    static fromHex(hex) {
      return Transaction.fromBuffer(Buffer$2.from(hex, 'hex'), false);
    }

    static isCoinbaseHash(buffer) {
      typeforce$1(types$1.Hash256bit, buffer);

      for (let i = 0; i < 32; ++i) {
        if (buffer[i] !== 0) return false;
      }

      return true;
    }

    isCoinbase() {
      return this.ins.length === 1 && Transaction.isCoinbaseHash(this.ins[0].hash);
    }

    addInput(hash, index, sequence, scriptSig) {
      typeforce$1(types$1.tuple(types$1.Hash256bit, types$1.UInt32, types$1.maybe(types$1.UInt32), types$1.maybe(types$1.Buffer)), arguments);

      if (types$1.Null(sequence)) {
        sequence = Transaction.DEFAULT_SEQUENCE;
      } // Add the input and return the input's index


      return this.ins.push({
        hash,
        index,
        script: scriptSig || EMPTY_BUFFER,
        sequence: sequence,
        witness: EMPTY_WITNESS
      }) - 1;
    }

    addOutput(scriptPubKey, value) {
      typeforce$1(types$1.tuple(types$1.Buffer, types$1.Satoshi), arguments); // Add the output and return the output's index

      return this.outs.push({
        script: scriptPubKey,
        value
      }) - 1;
    }

    hasWitnesses() {
      return this.ins.some(x => {
        return x.witness.length !== 0;
      });
    }

    weight() {
      const base = this.byteLength(false);
      const total = this.byteLength(true);
      return base * 3 + total;
    }

    virtualSize() {
      return Math.ceil(this.weight() / 4);
    }

    byteLength(_ALLOW_WITNESS = true) {
      const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();

      return (hasWitnesses ? 10 : 8) + bufferutils_1$2.varuint.encodingLength(this.ins.length) + bufferutils_1$2.varuint.encodingLength(this.outs.length) + this.ins.reduce((sum, input) => {
        return sum + 40 + varSliceSize(input.script);
      }, 0) + this.outs.reduce((sum, output) => {
        return sum + 8 + varSliceSize(output.script);
      }, 0) + (hasWitnesses ? this.ins.reduce((sum, input) => {
        return sum + vectorSize(input.witness);
      }, 0) : 0);
    }

    clone() {
      const newTx = new Transaction();
      newTx.version = this.version;
      newTx.locktime = this.locktime;
      newTx.ins = this.ins.map(txIn => {
        return {
          hash: txIn.hash,
          index: txIn.index,
          script: txIn.script,
          sequence: txIn.sequence,
          witness: txIn.witness
        };
      });
      newTx.outs = this.outs.map(txOut => {
        return {
          script: txOut.script,
          value: txOut.value
        };
      });
      return newTx;
    }
    /**
     * Hash transaction for signing a specific input.
     *
     * Bitcoin uses a different hash for each signed transaction input.
     * This method copies the transaction, makes the necessary changes based on the
     * hashType, and then hashes the result.
     * This hash can then be used to sign the provided transaction input.
     */


    hashForSignature(inIndex, prevOutScript, hashType) {
      typeforce$1(types$1.tuple(types$1.UInt32, types$1.Buffer,
      /* types.UInt8 */
      types$1.Number), arguments); // https://github.com/bitcoin/bitcoin/blob/master/src/test/sighash_tests.cpp#L29

      if (inIndex >= this.ins.length) return ONE; // ignore OP_CODESEPARATOR

      const ourScript = bscript$1.compile(bscript$1.decompile(prevOutScript).filter(x => {
        return x !== script_1.OPS.OP_CODESEPARATOR;
      }));
      const txTmp = this.clone(); // SIGHASH_NONE: ignore all outputs? (wildcard payee)

      if ((hashType & 0x1f) === Transaction.SIGHASH_NONE) {
        txTmp.outs = []; // ignore sequence numbers (except at inIndex)

        txTmp.ins.forEach((input, i) => {
          if (i === inIndex) return;
          input.sequence = 0;
        }); // SIGHASH_SINGLE: ignore all outputs, except at the same index?
      } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE) {
        // https://github.com/bitcoin/bitcoin/blob/master/src/test/sighash_tests.cpp#L60
        if (inIndex >= this.outs.length) return ONE; // truncate outputs after

        txTmp.outs.length = inIndex + 1; // "blank" outputs before

        for (let i = 0; i < inIndex; i++) {
          txTmp.outs[i] = BLANK_OUTPUT;
        } // ignore sequence numbers (except at inIndex)


        txTmp.ins.forEach((input, y) => {
          if (y === inIndex) return;
          input.sequence = 0;
        });
      } // SIGHASH_ANYONECANPAY: ignore inputs entirely?


      if (hashType & Transaction.SIGHASH_ANYONECANPAY) {
        txTmp.ins = [txTmp.ins[inIndex]];
        txTmp.ins[0].script = ourScript; // SIGHASH_ALL: only ignore input scripts
      } else {
        // "blank" others input scripts
        txTmp.ins.forEach(input => {
          input.script = EMPTY_BUFFER;
        });
        txTmp.ins[inIndex].script = ourScript;
      } // serialize and hash


      const buffer = Buffer$2.allocUnsafe(txTmp.byteLength(false) + 4);
      buffer.writeInt32LE(hashType, buffer.length - 4);

      txTmp.__toBuffer(buffer, 0, false);

      return bcrypto$1.hash256(buffer);
    }

    hashForWitnessV1(inIndex, prevOutScripts, values, hashType, leafHash, annex) {
      // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#common-signature-message
      typeforce$1(types$1.tuple(types$1.UInt32, typeforce$1.arrayOf(types$1.Buffer), typeforce$1.arrayOf(types$1.Satoshi), types$1.UInt32), arguments);

      if (values.length !== this.ins.length || prevOutScripts.length !== this.ins.length) {
        throw new Error('Must supply prevout script and value for all inputs');
      }

      const outputType = hashType === Transaction.SIGHASH_DEFAULT ? Transaction.SIGHASH_ALL : hashType & Transaction.SIGHASH_OUTPUT_MASK;
      const inputType = hashType & Transaction.SIGHASH_INPUT_MASK;
      const isAnyoneCanPay = inputType === Transaction.SIGHASH_ANYONECANPAY;
      const isNone = outputType === Transaction.SIGHASH_NONE;
      const isSingle = outputType === Transaction.SIGHASH_SINGLE;
      let hashPrevouts = EMPTY_BUFFER;
      let hashAmounts = EMPTY_BUFFER;
      let hashScriptPubKeys = EMPTY_BUFFER;
      let hashSequences = EMPTY_BUFFER;
      let hashOutputs = EMPTY_BUFFER;

      if (!isAnyoneCanPay) {
        let bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(36 * this.ins.length);
        this.ins.forEach(txIn => {
          bufferWriter.writeSlice(txIn.hash);
          bufferWriter.writeUInt32(txIn.index);
        });
        hashPrevouts = bcrypto$1.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(8 * this.ins.length);
        values.forEach(value => bufferWriter.writeUInt64(value));
        hashAmounts = bcrypto$1.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(prevOutScripts.map(varSliceSize).reduce((a, b) => a + b));
        prevOutScripts.forEach(prevOutScript => bufferWriter.writeVarSlice(prevOutScript));
        hashScriptPubKeys = bcrypto$1.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(4 * this.ins.length);
        this.ins.forEach(txIn => bufferWriter.writeUInt32(txIn.sequence));
        hashSequences = bcrypto$1.sha256(bufferWriter.end());
      }

      if (!(isNone || isSingle)) {
        const txOutsSize = this.outs.map(output => 8 + varSliceSize(output.script)).reduce((a, b) => a + b);
        const bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(txOutsSize);
        this.outs.forEach(out => {
          bufferWriter.writeUInt64(out.value);
          bufferWriter.writeVarSlice(out.script);
        });
        hashOutputs = bcrypto$1.sha256(bufferWriter.end());
      } else if (isSingle && inIndex < this.outs.length) {
        const output = this.outs[inIndex];
        const bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(8 + varSliceSize(output.script));
        bufferWriter.writeUInt64(output.value);
        bufferWriter.writeVarSlice(output.script);
        hashOutputs = bcrypto$1.sha256(bufferWriter.end());
      }

      const spendType = (leafHash ? 2 : 0) + (annex ? 1 : 0); // Length calculation from:
      // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#cite_note-14
      // With extension from:
      // https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki#signature-validation

      const sigMsgSize = 174 - (isAnyoneCanPay ? 49 : 0) - (isNone ? 32 : 0) + (annex ? 32 : 0) + (leafHash ? 37 : 0);
      const sigMsgWriter = bufferutils_1$2.BufferWriter.withCapacity(sigMsgSize);
      sigMsgWriter.writeUInt8(hashType); // Transaction

      sigMsgWriter.writeInt32(this.version);
      sigMsgWriter.writeUInt32(this.locktime);
      sigMsgWriter.writeSlice(hashPrevouts);
      sigMsgWriter.writeSlice(hashAmounts);
      sigMsgWriter.writeSlice(hashScriptPubKeys);
      sigMsgWriter.writeSlice(hashSequences);

      if (!(isNone || isSingle)) {
        sigMsgWriter.writeSlice(hashOutputs);
      } // Input


      sigMsgWriter.writeUInt8(spendType);

      if (isAnyoneCanPay) {
        const input = this.ins[inIndex];
        sigMsgWriter.writeSlice(input.hash);
        sigMsgWriter.writeUInt32(input.index);
        sigMsgWriter.writeUInt64(values[inIndex]);
        sigMsgWriter.writeVarSlice(prevOutScripts[inIndex]);
        sigMsgWriter.writeUInt32(input.sequence);
      } else {
        sigMsgWriter.writeUInt32(inIndex);
      }

      if (annex) {
        const bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(varSliceSize(annex));
        bufferWriter.writeVarSlice(annex);
        sigMsgWriter.writeSlice(bcrypto$1.sha256(bufferWriter.end()));
      } // Output


      if (isSingle) {
        sigMsgWriter.writeSlice(hashOutputs);
      } // BIP342 extension


      if (leafHash) {
        sigMsgWriter.writeSlice(leafHash);
        sigMsgWriter.writeUInt8(0);
        sigMsgWriter.writeUInt32(0xffffffff);
      } // Extra zero byte because:
      // https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki#cite_note-19


      return bcrypto$1.taggedHash('TapSighash', Buffer$2.concat([Buffer$2.of(0x00), sigMsgWriter.end()]));
    }

    hashForWitnessV0(inIndex, prevOutScript, value, hashType) {
      typeforce$1(types$1.tuple(types$1.UInt32, types$1.Buffer, types$1.Satoshi, types$1.UInt32), arguments);
      let tbuffer = Buffer$2.from([]);
      let bufferWriter;
      let hashOutputs = ZERO;
      let hashPrevouts = ZERO;
      let hashSequence = ZERO;

      if (!(hashType & Transaction.SIGHASH_ANYONECANPAY)) {
        tbuffer = Buffer$2.allocUnsafe(36 * this.ins.length);
        bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
        this.ins.forEach(txIn => {
          bufferWriter.writeSlice(txIn.hash);
          bufferWriter.writeUInt32(txIn.index);
        });
        hashPrevouts = bcrypto$1.hash256(tbuffer);
      }

      if (!(hashType & Transaction.SIGHASH_ANYONECANPAY) && (hashType & 0x1f) !== Transaction.SIGHASH_SINGLE && (hashType & 0x1f) !== Transaction.SIGHASH_NONE) {
        tbuffer = Buffer$2.allocUnsafe(4 * this.ins.length);
        bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
        this.ins.forEach(txIn => {
          bufferWriter.writeUInt32(txIn.sequence);
        });
        hashSequence = bcrypto$1.hash256(tbuffer);
      }

      if ((hashType & 0x1f) !== Transaction.SIGHASH_SINGLE && (hashType & 0x1f) !== Transaction.SIGHASH_NONE) {
        const txOutsSize = this.outs.reduce((sum, output) => {
          return sum + 8 + varSliceSize(output.script);
        }, 0);
        tbuffer = Buffer$2.allocUnsafe(txOutsSize);
        bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
        this.outs.forEach(out => {
          bufferWriter.writeUInt64(out.value);
          bufferWriter.writeVarSlice(out.script);
        });
        hashOutputs = bcrypto$1.hash256(tbuffer);
      } else if ((hashType & 0x1f) === Transaction.SIGHASH_SINGLE && inIndex < this.outs.length) {
        const output = this.outs[inIndex];
        tbuffer = Buffer$2.allocUnsafe(8 + varSliceSize(output.script));
        bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
        bufferWriter.writeUInt64(output.value);
        bufferWriter.writeVarSlice(output.script);
        hashOutputs = bcrypto$1.hash256(tbuffer);
      }

      tbuffer = Buffer$2.allocUnsafe(156 + varSliceSize(prevOutScript));
      bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
      const input = this.ins[inIndex];
      bufferWriter.writeInt32(this.version);
      bufferWriter.writeSlice(hashPrevouts);
      bufferWriter.writeSlice(hashSequence);
      bufferWriter.writeSlice(input.hash);
      bufferWriter.writeUInt32(input.index);
      bufferWriter.writeVarSlice(prevOutScript);
      bufferWriter.writeUInt64(value);
      bufferWriter.writeUInt32(input.sequence);
      bufferWriter.writeSlice(hashOutputs);
      bufferWriter.writeUInt32(this.locktime);
      bufferWriter.writeUInt32(hashType);
      return bcrypto$1.hash256(tbuffer);
    }

    getHash(forWitness) {
      // wtxid for coinbase is always 32 bytes of 0x00
      if (forWitness && this.isCoinbase()) return Buffer$2.alloc(32, 0);
      return bcrypto$1.hash256(this.__toBuffer(undefined, undefined, forWitness));
    }

    getId() {
      // transaction hash's are displayed in reverse order
      return (0, bufferutils_1$2.reverseBuffer)(this.getHash(false)).toString('hex');
    }

    toBuffer(buffer, initialOffset) {
      return this.__toBuffer(buffer, initialOffset, true);
    }

    toHex() {
      return this.toBuffer(undefined, undefined).toString('hex');
    }

    setInputScript(index, scriptSig) {
      typeforce$1(types$1.tuple(types$1.Number, types$1.Buffer), arguments);
      this.ins[index].script = scriptSig;
    }

    setWitness(index, witness) {
      typeforce$1(types$1.tuple(types$1.Number, [types$1.Buffer]), arguments);
      this.ins[index].witness = witness;
    }

    __toBuffer(buffer, initialOffset, _ALLOW_WITNESS = false) {
      if (!buffer) buffer = Buffer$2.allocUnsafe(this.byteLength(_ALLOW_WITNESS));
      const bufferWriter = new bufferutils_1$2.BufferWriter(buffer, initialOffset || 0);
      bufferWriter.writeInt32(this.version);

      const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();

      if (hasWitnesses) {
        bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER);
        bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG);
      }

      bufferWriter.writeVarInt(this.ins.length);
      this.ins.forEach(txIn => {
        bufferWriter.writeSlice(txIn.hash);
        bufferWriter.writeUInt32(txIn.index);
        bufferWriter.writeVarSlice(txIn.script);
        bufferWriter.writeUInt32(txIn.sequence);
      });
      bufferWriter.writeVarInt(this.outs.length);
      this.outs.forEach(txOut => {
        if (isOutput(txOut)) {
          bufferWriter.writeUInt64(txOut.value);
        } else {
          bufferWriter.writeSlice(txOut.valueBuffer);
        }

        bufferWriter.writeVarSlice(txOut.script);
      });

      if (hasWitnesses) {
        this.ins.forEach(input => {
          bufferWriter.writeVector(input.witness);
        });
      }

      bufferWriter.writeUInt32(this.locktime); // avoid slicing unless necessary

      if (initialOffset !== undefined) return buffer.slice(initialOffset, bufferWriter.offset);
      return buffer;
    }

  }

  exports.Transaction = Transaction;
  Transaction.DEFAULT_SEQUENCE = 0xffffffff;
  Transaction.SIGHASH_DEFAULT = 0x00;
  Transaction.SIGHASH_ALL = 0x01;
  Transaction.SIGHASH_NONE = 0x02;
  Transaction.SIGHASH_SINGLE = 0x03;
  Transaction.SIGHASH_ANYONECANPAY = 0x80;
  Transaction.SIGHASH_OUTPUT_MASK = 0x03;
  Transaction.SIGHASH_INPUT_MASK = 0x80;
  Transaction.ADVANCED_TRANSACTION_MARKER = 0x00;
  Transaction.ADVANCED_TRANSACTION_FLAG = 0x01;

  var transaction = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$8$1 = /*@__PURE__*/getAugmentedNamespace(transaction);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.Block = void 0;
  const bufferutils_1$1 = require$$4$1;
  const bcrypto = require$$1$4;
  const merkle_1 = require$$2$2;
  const transaction_1$1 = require$$8$1;
  const types = types$8;
  const {
    typeforce
  } = types;
  const errorMerkleNoTxes = new TypeError('Cannot compute merkle root for zero transactions');
  const errorWitnessNotSegwit = new TypeError('Cannot compute witness commit for non-segwit block');

  class Block {
    constructor() {
      this.version = 1;
      this.prevHash = undefined;
      this.merkleRoot = undefined;
      this.timestamp = 0;
      this.witnessCommit = undefined;
      this.bits = 0;
      this.nonce = 0;
      this.transactions = undefined;
    }

    static fromBuffer(buffer) {
      if (buffer.length < 80) throw new Error('Buffer too small (< 80 bytes)');
      const bufferReader = new bufferutils_1$1.BufferReader(buffer);
      const block = new Block();
      block.version = bufferReader.readInt32();
      block.prevHash = bufferReader.readSlice(32);
      block.merkleRoot = bufferReader.readSlice(32);
      block.timestamp = bufferReader.readUInt32();
      block.bits = bufferReader.readUInt32();
      block.nonce = bufferReader.readUInt32();
      if (buffer.length === 80) return block;

      const readTransaction = () => {
        const tx = transaction_1$1.Transaction.fromBuffer(bufferReader.buffer.slice(bufferReader.offset), true);
        bufferReader.offset += tx.byteLength();
        return tx;
      };

      const nTransactions = bufferReader.readVarInt();
      block.transactions = [];

      for (let i = 0; i < nTransactions; ++i) {
        const tx = readTransaction();
        block.transactions.push(tx);
      }

      const witnessCommit = block.getWitnessCommit(); // This Block contains a witness commit

      if (witnessCommit) block.witnessCommit = witnessCommit;
      return block;
    }

    static fromHex(hex) {
      return Block.fromBuffer(Buffer$2.from(hex, 'hex'));
    }

    static calculateTarget(bits) {
      const exponent = ((bits & 0xff000000) >> 24) - 3;
      const mantissa = bits & 0x007fffff;
      const target = Buffer$2.alloc(32, 0);
      target.writeUIntBE(mantissa, 29 - exponent, 3);
      return target;
    }

    static calculateMerkleRoot(transactions, forWitness) {
      typeforce([{
        getHash: types.Function
      }], transactions);
      if (transactions.length === 0) throw errorMerkleNoTxes;
      if (forWitness && !txesHaveWitnessCommit(transactions)) throw errorWitnessNotSegwit;
      const hashes = transactions.map(transaction => transaction.getHash(forWitness));
      const rootHash = (0, merkle_1.fastMerkleRoot)(hashes, bcrypto.hash256);
      return forWitness ? bcrypto.hash256(Buffer$2.concat([rootHash, transactions[0].ins[0].witness[0]])) : rootHash;
    }

    getWitnessCommit() {
      if (!txesHaveWitnessCommit(this.transactions)) return null; // The merkle root for the witness data is in an OP_RETURN output.
      // There is no rule for the index of the output, so use filter to find it.
      // The root is prepended with 0xaa21a9ed so check for 0x6a24aa21a9ed
      // If multiple commits are found, the output with highest index is assumed.

      const witnessCommits = this.transactions[0].outs.filter(out => out.script.slice(0, 6).equals(Buffer$2.from('6a24aa21a9ed', 'hex'))).map(out => out.script.slice(6, 38));
      if (witnessCommits.length === 0) return null; // Use the commit with the highest output (should only be one though)

      const result = witnessCommits[witnessCommits.length - 1];
      if (!(result instanceof Buffer$2 && result.length === 32)) return null;
      return result;
    }

    hasWitnessCommit() {
      if (this.witnessCommit instanceof Buffer$2 && this.witnessCommit.length === 32) return true;
      if (this.getWitnessCommit() !== null) return true;
      return false;
    }

    hasWitness() {
      return anyTxHasWitness(this.transactions);
    }

    weight() {
      const base = this.byteLength(false, false);
      const total = this.byteLength(false, true);
      return base * 3 + total;
    }

    byteLength(headersOnly, allowWitness = true) {
      if (headersOnly || !this.transactions) return 80;
      return 80 + bufferutils_1$1.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((a, x) => a + x.byteLength(allowWitness), 0);
    }

    getHash() {
      return bcrypto.hash256(this.toBuffer(true));
    }

    getId() {
      return (0, bufferutils_1$1.reverseBuffer)(this.getHash()).toString('hex');
    }

    getUTCDate() {
      const date = new Date(0); // epoch

      date.setUTCSeconds(this.timestamp);
      return date;
    } // TODO: buffer, offset compatibility


    toBuffer(headersOnly) {
      const buffer = Buffer$2.allocUnsafe(this.byteLength(headersOnly));
      const bufferWriter = new bufferutils_1$1.BufferWriter(buffer);
      bufferWriter.writeInt32(this.version);
      bufferWriter.writeSlice(this.prevHash);
      bufferWriter.writeSlice(this.merkleRoot);
      bufferWriter.writeUInt32(this.timestamp);
      bufferWriter.writeUInt32(this.bits);
      bufferWriter.writeUInt32(this.nonce);
      if (headersOnly || !this.transactions) return buffer;
      bufferutils_1$1.varuint.encode(this.transactions.length, buffer, bufferWriter.offset);
      bufferWriter.offset += bufferutils_1$1.varuint.encode.bytes;
      this.transactions.forEach(tx => {
        const txSize = tx.byteLength(); // TODO: extract from toBuffer?

        tx.toBuffer(buffer, bufferWriter.offset);
        bufferWriter.offset += txSize;
      });
      return buffer;
    }

    toHex(headersOnly) {
      return this.toBuffer(headersOnly).toString('hex');
    }

    checkTxRoots() {
      // If the Block has segwit transactions but no witness commit,
      // there's no way it can be valid, so fail the check.
      const hasWitnessCommit = this.hasWitnessCommit();
      if (!hasWitnessCommit && this.hasWitness()) return false;
      return this.__checkMerkleRoot() && (hasWitnessCommit ? this.__checkWitnessCommit() : true);
    }

    checkProofOfWork() {
      const hash = (0, bufferutils_1$1.reverseBuffer)(this.getHash());
      const target = Block.calculateTarget(this.bits);
      return hash.compare(target) <= 0;
    }

    __checkMerkleRoot() {
      if (!this.transactions) throw errorMerkleNoTxes;
      const actualMerkleRoot = Block.calculateMerkleRoot(this.transactions);
      return this.merkleRoot.compare(actualMerkleRoot) === 0;
    }

    __checkWitnessCommit() {
      if (!this.transactions) throw errorMerkleNoTxes;
      if (!this.hasWitnessCommit()) throw errorWitnessNotSegwit;
      const actualWitnessCommit = Block.calculateMerkleRoot(this.transactions, true);
      return this.witnessCommit.compare(actualWitnessCommit) === 0;
    }

  }

  exports.Block = Block;

  function txesHaveWitnessCommit(transactions) {
    return transactions instanceof Array && transactions[0] && transactions[0].ins && transactions[0].ins instanceof Array && transactions[0].ins[0] && transactions[0].ins[0].witness && transactions[0].ins[0].witness instanceof Array && transactions[0].ins[0].witness.length > 0;
  }

  function anyTxHasWitness(transactions) {
    return transactions instanceof Array && transactions.some(tx => typeof tx === 'object' && tx.ins instanceof Array && tx.ins.some(input => typeof input === 'object' && input.witness instanceof Array && input.witness.length > 0));
  }

  var block = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$5$1 = /*@__PURE__*/getAugmentedNamespace(block);

  var combiner = {};

  var parser = {};

  var converter$1 = {};

  var typeFields = {};

  (function (exports) {

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    (function (GlobalTypes) {
      GlobalTypes[GlobalTypes['UNSIGNED_TX'] = 0] = 'UNSIGNED_TX';
      GlobalTypes[GlobalTypes['GLOBAL_XPUB'] = 1] = 'GLOBAL_XPUB';
    })(exports.GlobalTypes || (exports.GlobalTypes = {}));

    exports.GLOBAL_TYPE_NAMES = ['unsignedTx', 'globalXpub'];

    (function (InputTypes) {
      InputTypes[InputTypes['NON_WITNESS_UTXO'] = 0] = 'NON_WITNESS_UTXO';
      InputTypes[InputTypes['WITNESS_UTXO'] = 1] = 'WITNESS_UTXO';
      InputTypes[InputTypes['PARTIAL_SIG'] = 2] = 'PARTIAL_SIG';
      InputTypes[InputTypes['SIGHASH_TYPE'] = 3] = 'SIGHASH_TYPE';
      InputTypes[InputTypes['REDEEM_SCRIPT'] = 4] = 'REDEEM_SCRIPT';
      InputTypes[InputTypes['WITNESS_SCRIPT'] = 5] = 'WITNESS_SCRIPT';
      InputTypes[InputTypes['BIP32_DERIVATION'] = 6] = 'BIP32_DERIVATION';
      InputTypes[InputTypes['FINAL_SCRIPTSIG'] = 7] = 'FINAL_SCRIPTSIG';
      InputTypes[InputTypes['FINAL_SCRIPTWITNESS'] = 8] = 'FINAL_SCRIPTWITNESS';
      InputTypes[InputTypes['POR_COMMITMENT'] = 9] = 'POR_COMMITMENT';
      InputTypes[InputTypes['TAP_KEY_SIG'] = 19] = 'TAP_KEY_SIG';
      InputTypes[InputTypes['TAP_SCRIPT_SIG'] = 20] = 'TAP_SCRIPT_SIG';
      InputTypes[InputTypes['TAP_LEAF_SCRIPT'] = 21] = 'TAP_LEAF_SCRIPT';
      InputTypes[InputTypes['TAP_BIP32_DERIVATION'] = 22] = 'TAP_BIP32_DERIVATION';
      InputTypes[InputTypes['TAP_INTERNAL_KEY'] = 23] = 'TAP_INTERNAL_KEY';
      InputTypes[InputTypes['TAP_MERKLE_ROOT'] = 24] = 'TAP_MERKLE_ROOT';
    })(exports.InputTypes || (exports.InputTypes = {}));

    exports.INPUT_TYPE_NAMES = ['nonWitnessUtxo', 'witnessUtxo', 'partialSig', 'sighashType', 'redeemScript', 'witnessScript', 'bip32Derivation', 'finalScriptSig', 'finalScriptWitness', 'porCommitment', 'tapKeySig', 'tapScriptSig', 'tapLeafScript', 'tapBip32Derivation', 'tapInternalKey', 'tapMerkleRoot'];

    (function (OutputTypes) {
      OutputTypes[OutputTypes['REDEEM_SCRIPT'] = 0] = 'REDEEM_SCRIPT';
      OutputTypes[OutputTypes['WITNESS_SCRIPT'] = 1] = 'WITNESS_SCRIPT';
      OutputTypes[OutputTypes['BIP32_DERIVATION'] = 2] = 'BIP32_DERIVATION';
      OutputTypes[OutputTypes['TAP_INTERNAL_KEY'] = 5] = 'TAP_INTERNAL_KEY';
      OutputTypes[OutputTypes['TAP_TREE'] = 6] = 'TAP_TREE';
      OutputTypes[OutputTypes['TAP_BIP32_DERIVATION'] = 7] = 'TAP_BIP32_DERIVATION';
    })(exports.OutputTypes || (exports.OutputTypes = {}));

    exports.OUTPUT_TYPE_NAMES = ['redeemScript', 'witnessScript', 'bip32Derivation', 'tapInternalKey', 'tapTree', 'tapBip32Derivation'];
  })(typeFields);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$g = typeFields;

  const range$2 = n => [...Array(n).keys()];

  function decode$d(keyVal) {
    if (keyVal.key[0] !== typeFields_1$g.GlobalTypes.GLOBAL_XPUB) {
      throw new Error('Decode Error: could not decode globalXpub with key 0x' + keyVal.key.toString('hex'));
    }

    if (keyVal.key.length !== 79 || ![2, 3].includes(keyVal.key[46])) {
      throw new Error('Decode Error: globalXpub has invalid extended pubkey in key 0x' + keyVal.key.toString('hex'));
    }

    if (keyVal.value.length / 4 % 1 !== 0) {
      throw new Error('Decode Error: Global GLOBAL_XPUB value length should be multiple of 4');
    }

    const extendedPubkey = keyVal.key.slice(1);
    const data = {
      masterFingerprint: keyVal.value.slice(0, 4),
      extendedPubkey,
      path: 'm'
    };

    for (const i of range$2(keyVal.value.length / 4 - 1)) {
      const val = keyVal.value.readUInt32LE(i * 4 + 4);
      const isHard = !!(val & 0x80000000);
      const idx = val & 0x7fffffff;
      data.path += '/' + idx.toString(10) + (isHard ? "'" : '');
    }

    return data;
  }

  exports.decode = decode$d;

  function encode$e(data) {
    const head = Buffer$2.from([typeFields_1$g.GlobalTypes.GLOBAL_XPUB]);
    const key = Buffer$2.concat([head, data.extendedPubkey]);
    const splitPath = data.path.split('/');
    const value = Buffer$2.allocUnsafe(splitPath.length * 4);
    data.masterFingerprint.copy(value, 0);
    let offset = 4;
    splitPath.slice(1).forEach(level => {
      const isHard = level.slice(-1) === "'";
      let num = 0x7fffffff & parseInt(isHard ? level.slice(0, -1) : level, 10);
      if (isHard) num += 0x80000000;
      value.writeUInt32LE(num, offset);
      offset += 4;
    });
    return {
      key,
      value
    };
  }

  exports.encode = encode$e;
  exports.expected = '{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }';

  function check$c(data) {
    const epk = data.extendedPubkey;
    const mfp = data.masterFingerprint;
    const p = data.path;
    return isBuffer(epk) && epk.length === 78 && [2, 3].indexOf(epk[45]) > -1 && isBuffer(mfp) && mfp.length === 4 && typeof p === 'string' && !!p.match(/^m(\/\d+'?)*$/);
  }

  exports.check = check$c;

  function canAddToArray$3(array, item, dupeSet) {
    const dupeString = item.extendedPubkey.toString('hex');
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter(v => v.extendedPubkey.equals(item.extendedPubkey)).length === 0;
  }

  exports.canAddToArray = canAddToArray$3;

  var globalXpub$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$3 = /*@__PURE__*/getAugmentedNamespace(globalXpub$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$f = typeFields;

  function encode$d(data) {
    return {
      key: Buffer$2.from([typeFields_1$f.GlobalTypes.UNSIGNED_TX]),
      value: data.toBuffer()
    };
  }

  exports.encode = encode$d;

  var unsignedTx$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(unsignedTx$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$e = typeFields;

  function decode$c(keyVal) {
    if (keyVal.key[0] !== typeFields_1$e.InputTypes.FINAL_SCRIPTSIG) {
      throw new Error('Decode Error: could not decode finalScriptSig with key 0x' + keyVal.key.toString('hex'));
    }

    return keyVal.value;
  }

  exports.decode = decode$c;

  function encode$c(data) {
    const key = Buffer$2.from([typeFields_1$e.InputTypes.FINAL_SCRIPTSIG]);
    return {
      key,
      value: data
    };
  }

  exports.encode = encode$c;
  exports.expected = 'Buffer';

  function check$b(data) {
    return isBuffer(data);
  }

  exports.check = check$b;

  function canAdd$8(currentData, newData) {
    return !!currentData && !!newData && currentData.finalScriptSig === undefined;
  }

  exports.canAdd = canAdd$8;

  var finalScriptSig$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$3 = /*@__PURE__*/getAugmentedNamespace(finalScriptSig$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$d = typeFields;

  function decode$b(keyVal) {
    if (keyVal.key[0] !== typeFields_1$d.InputTypes.FINAL_SCRIPTWITNESS) {
      throw new Error('Decode Error: could not decode finalScriptWitness with key 0x' + keyVal.key.toString('hex'));
    }

    return keyVal.value;
  }

  exports.decode = decode$b;

  function encode$b(data) {
    const key = Buffer$2.from([typeFields_1$d.InputTypes.FINAL_SCRIPTWITNESS]);
    return {
      key,
      value: data
    };
  }

  exports.encode = encode$b;
  exports.expected = 'Buffer';

  function check$a(data) {
    return isBuffer(data);
  }

  exports.check = check$a;

  function canAdd$7(currentData, newData) {
    return !!currentData && !!newData && currentData.finalScriptWitness === undefined;
  }

  exports.canAdd = canAdd$7;

  var finalScriptWitness$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$4 = /*@__PURE__*/getAugmentedNamespace(finalScriptWitness$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$c = typeFields;

  function decode$a(keyVal) {
    if (keyVal.key[0] !== typeFields_1$c.InputTypes.NON_WITNESS_UTXO) {
      throw new Error('Decode Error: could not decode nonWitnessUtxo with key 0x' + keyVal.key.toString('hex'));
    }

    return keyVal.value;
  }

  exports.decode = decode$a;

  function encode$a(data) {
    return {
      key: Buffer$2.from([typeFields_1$c.InputTypes.NON_WITNESS_UTXO]),
      value: data
    };
  }

  exports.encode = encode$a;
  exports.expected = 'Buffer';

  function check$9(data) {
    return isBuffer(data);
  }

  exports.check = check$9;

  function canAdd$6(currentData, newData) {
    return !!currentData && !!newData && currentData.nonWitnessUtxo === undefined;
  }

  exports.canAdd = canAdd$6;

  var nonWitnessUtxo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$5 = /*@__PURE__*/getAugmentedNamespace(nonWitnessUtxo$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$b = typeFields;

  function decode$9(keyVal) {
    if (keyVal.key[0] !== typeFields_1$b.InputTypes.PARTIAL_SIG) {
      throw new Error('Decode Error: could not decode partialSig with key 0x' + keyVal.key.toString('hex'));
    }

    if (!(keyVal.key.length === 34 || keyVal.key.length === 66) || ![2, 3, 4].includes(keyVal.key[1])) {
      throw new Error('Decode Error: partialSig has invalid pubkey in key 0x' + keyVal.key.toString('hex'));
    }

    const pubkey = keyVal.key.slice(1);
    return {
      pubkey,
      signature: keyVal.value
    };
  }

  exports.decode = decode$9;

  function encode$9(pSig) {
    const head = Buffer$2.from([typeFields_1$b.InputTypes.PARTIAL_SIG]);
    return {
      key: Buffer$2.concat([head, pSig.pubkey]),
      value: pSig.signature
    };
  }

  exports.encode = encode$9;
  exports.expected = '{ pubkey: Buffer; signature: Buffer; }';

  function check$8(data) {
    return isBuffer(data.pubkey) && isBuffer(data.signature) && [33, 65].includes(data.pubkey.length) && [2, 3, 4].includes(data.pubkey[0]) && isDerSigWithSighash(data.signature);
  }

  exports.check = check$8;

  function isDerSigWithSighash(buf) {
    if (!isBuffer(buf) || buf.length < 9) return false;
    if (buf[0] !== 0x30) return false;
    if (buf.length !== buf[1] + 3) return false;
    if (buf[2] !== 0x02) return false;
    const rLen = buf[3];
    if (rLen > 33 || rLen < 1) return false;
    if (buf[3 + rLen + 1] !== 0x02) return false;
    const sLen = buf[3 + rLen + 2];
    if (sLen > 33 || sLen < 1) return false;
    if (buf.length !== 3 + rLen + 2 + sLen + 2) return false;
    return true;
  }

  function canAddToArray$2(array, item, dupeSet) {
    const dupeString = item.pubkey.toString('hex');
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter(v => v.pubkey.equals(item.pubkey)).length === 0;
  }

  exports.canAddToArray = canAddToArray$2;

  var partialSig$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$6$1 = /*@__PURE__*/getAugmentedNamespace(partialSig$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$a = typeFields;

  function decode$8(keyVal) {
    if (keyVal.key[0] !== typeFields_1$a.InputTypes.POR_COMMITMENT) {
      throw new Error('Decode Error: could not decode porCommitment with key 0x' + keyVal.key.toString('hex'));
    }

    return keyVal.value.toString('utf8');
  }

  exports.decode = decode$8;

  function encode$8(data) {
    const key = Buffer$2.from([typeFields_1$a.InputTypes.POR_COMMITMENT]);
    return {
      key,
      value: Buffer$2.from(data, 'utf8')
    };
  }

  exports.encode = encode$8;
  exports.expected = 'string';

  function check$7(data) {
    return typeof data === 'string';
  }

  exports.check = check$7;

  function canAdd$5(currentData, newData) {
    return !!currentData && !!newData && currentData.porCommitment === undefined;
  }

  exports.canAdd = canAdd$5;

  var porCommitment$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$7 = /*@__PURE__*/getAugmentedNamespace(porCommitment$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$9 = typeFields;

  function decode$7(keyVal) {
    if (keyVal.key[0] !== typeFields_1$9.InputTypes.SIGHASH_TYPE) {
      throw new Error('Decode Error: could not decode sighashType with key 0x' + keyVal.key.toString('hex'));
    }

    return keyVal.value.readUInt32LE(0);
  }

  exports.decode = decode$7;

  function encode$7(data) {
    const key = Buffer$2.from([typeFields_1$9.InputTypes.SIGHASH_TYPE]);
    const value = Buffer$2.allocUnsafe(4);
    value.writeUInt32LE(data, 0);
    return {
      key,
      value
    };
  }

  exports.encode = encode$7;
  exports.expected = 'number';

  function check$6(data) {
    return typeof data === 'number';
  }

  exports.check = check$6;

  function canAdd$4(currentData, newData) {
    return !!currentData && !!newData && currentData.sighashType === undefined;
  }

  exports.canAdd = canAdd$4;

  var sighashType$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$8 = /*@__PURE__*/getAugmentedNamespace(sighashType$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$8 = typeFields;

  function decode$6(keyVal) {
    if (keyVal.key[0] !== typeFields_1$8.InputTypes.TAP_KEY_SIG || keyVal.key.length !== 1) {
      throw new Error('Decode Error: could not decode tapKeySig with key 0x' + keyVal.key.toString('hex'));
    }

    if (!check$5(keyVal.value)) {
      throw new Error('Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature');
    }

    return keyVal.value;
  }

  exports.decode = decode$6;

  function encode$6(value) {
    const key = Buffer$2.from([typeFields_1$8.InputTypes.TAP_KEY_SIG]);
    return {
      key,
      value
    };
  }

  exports.encode = encode$6;
  exports.expected = 'Buffer';

  function check$5(data) {
    return isBuffer(data) && (data.length === 64 || data.length === 65);
  }

  exports.check = check$5;

  function canAdd$3(currentData, newData) {
    return !!currentData && !!newData && currentData.tapKeySig === undefined;
  }

  exports.canAdd = canAdd$3;

  var tapKeySig$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$9 = /*@__PURE__*/getAugmentedNamespace(tapKeySig$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$7 = typeFields;

  function decode$5(keyVal) {
    if (keyVal.key[0] !== typeFields_1$7.InputTypes.TAP_LEAF_SCRIPT) {
      throw new Error('Decode Error: could not decode tapLeafScript with key 0x' + keyVal.key.toString('hex'));
    }

    if ((keyVal.key.length - 2) % 32 !== 0) {
      throw new Error('Decode Error: tapLeafScript has invalid control block in key 0x' + keyVal.key.toString('hex'));
    }

    const leafVersion = keyVal.value[keyVal.value.length - 1];

    if ((keyVal.key[1] & 0xfe) !== leafVersion) {
      throw new Error('Decode Error: tapLeafScript bad leaf version in key 0x' + keyVal.key.toString('hex'));
    }

    const script = keyVal.value.slice(0, -1);
    const controlBlock = keyVal.key.slice(1);
    return {
      controlBlock,
      script,
      leafVersion
    };
  }

  exports.decode = decode$5;

  function encode$5(tScript) {
    const head = Buffer$2.from([typeFields_1$7.InputTypes.TAP_LEAF_SCRIPT]);
    const verBuf = Buffer$2.from([tScript.leafVersion]);
    return {
      key: Buffer$2.concat([head, tScript.controlBlock]),
      value: Buffer$2.concat([tScript.script, verBuf])
    };
  }

  exports.encode = encode$5;
  exports.expected = '{ controlBlock: Buffer; leafVersion: number, script: Buffer; }';

  function check$4(data) {
    return isBuffer(data.controlBlock) && (data.controlBlock.length - 1) % 32 === 0 && (data.controlBlock[0] & 0xfe) === data.leafVersion && isBuffer(data.script);
  }

  exports.check = check$4;

  function canAddToArray$1(array, item, dupeSet) {
    const dupeString = item.controlBlock.toString('hex');
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter(v => v.controlBlock.equals(item.controlBlock)).length === 0;
  }

  exports.canAddToArray = canAddToArray$1;

  var tapLeafScript$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$10 = /*@__PURE__*/getAugmentedNamespace(tapLeafScript$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$6 = typeFields;

  function decode$4(keyVal) {
    if (keyVal.key[0] !== typeFields_1$6.InputTypes.TAP_MERKLE_ROOT || keyVal.key.length !== 1) {
      throw new Error('Decode Error: could not decode tapMerkleRoot with key 0x' + keyVal.key.toString('hex'));
    }

    if (!check$3(keyVal.value)) {
      throw new Error('Decode Error: tapMerkleRoot not a 32-byte hash');
    }

    return keyVal.value;
  }

  exports.decode = decode$4;

  function encode$4(value) {
    const key = Buffer$2.from([typeFields_1$6.InputTypes.TAP_MERKLE_ROOT]);
    return {
      key,
      value
    };
  }

  exports.encode = encode$4;
  exports.expected = 'Buffer';

  function check$3(data) {
    return isBuffer(data) && data.length === 32;
  }

  exports.check = check$3;

  function canAdd$2(currentData, newData) {
    return !!currentData && !!newData && currentData.tapMerkleRoot === undefined;
  }

  exports.canAdd = canAdd$2;

  var tapMerkleRoot$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$11 = /*@__PURE__*/getAugmentedNamespace(tapMerkleRoot$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$5 = typeFields;

  function decode$3(keyVal) {
    if (keyVal.key[0] !== typeFields_1$5.InputTypes.TAP_SCRIPT_SIG) {
      throw new Error('Decode Error: could not decode tapScriptSig with key 0x' + keyVal.key.toString('hex'));
    }

    if (keyVal.key.length !== 65) {
      throw new Error('Decode Error: tapScriptSig has invalid key 0x' + keyVal.key.toString('hex'));
    }

    if (keyVal.value.length !== 64 && keyVal.value.length !== 65) {
      throw new Error('Decode Error: tapScriptSig has invalid signature in key 0x' + keyVal.key.toString('hex'));
    }

    const pubkey = keyVal.key.slice(1, 33);
    const leafHash = keyVal.key.slice(33);
    return {
      pubkey,
      leafHash,
      signature: keyVal.value
    };
  }

  exports.decode = decode$3;

  function encode$3(tSig) {
    const head = Buffer$2.from([typeFields_1$5.InputTypes.TAP_SCRIPT_SIG]);
    return {
      key: Buffer$2.concat([head, tSig.pubkey, tSig.leafHash]),
      value: tSig.signature
    };
  }

  exports.encode = encode$3;
  exports.expected = '{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }';

  function check$2(data) {
    return isBuffer(data.pubkey) && isBuffer(data.leafHash) && isBuffer(data.signature) && data.pubkey.length === 32 && data.leafHash.length === 32 && (data.signature.length === 64 || data.signature.length === 65);
  }

  exports.check = check$2;

  function canAddToArray(array, item, dupeSet) {
    const dupeString = item.pubkey.toString('hex') + item.leafHash.toString('hex');
    if (dupeSet.has(dupeString)) return false;
    dupeSet.add(dupeString);
    return array.filter(v => v.pubkey.equals(item.pubkey) && v.leafHash.equals(item.leafHash)).length === 0;
  }

  exports.canAddToArray = canAddToArray;

  var tapScriptSig$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$12 = /*@__PURE__*/getAugmentedNamespace(tapScriptSig$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  }); // Number.MAX_SAFE_INTEGER

  const MAX_SAFE_INTEGER = 9007199254740991;

  function checkUInt53(n) {
    if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0) throw new RangeError('value out of range');
  }

  function encode$2(_number, buffer, offset) {
    checkUInt53(_number);
    if (!buffer) buffer = Buffer$2.allocUnsafe(encodingLength(_number));
    if (!isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance');
    if (!offset) offset = 0; // 8 bit

    if (_number < 0xfd) {
      buffer.writeUInt8(_number, offset);
      Object.assign(encode$2, {
        bytes: 1
      }); // 16 bit
    } else if (_number <= 0xffff) {
      buffer.writeUInt8(0xfd, offset);
      buffer.writeUInt16LE(_number, offset + 1);
      Object.assign(encode$2, {
        bytes: 3
      }); // 32 bit
    } else if (_number <= 0xffffffff) {
      buffer.writeUInt8(0xfe, offset);
      buffer.writeUInt32LE(_number, offset + 1);
      Object.assign(encode$2, {
        bytes: 5
      }); // 64 bit
    } else {
      buffer.writeUInt8(0xff, offset);
      buffer.writeUInt32LE(_number >>> 0, offset + 1);
      buffer.writeUInt32LE(_number / 0x100000000 | 0, offset + 5);
      Object.assign(encode$2, {
        bytes: 9
      });
    }

    return buffer;
  }

  exports.encode = encode$2;

  function decode$2(buffer, offset) {
    if (!isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance');
    if (!offset) offset = 0;
    const first = buffer.readUInt8(offset); // 8 bit

    if (first < 0xfd) {
      Object.assign(decode$2, {
        bytes: 1
      });
      return first; // 16 bit
    } else if (first === 0xfd) {
      Object.assign(decode$2, {
        bytes: 3
      });
      return buffer.readUInt16LE(offset + 1); // 32 bit
    } else if (first === 0xfe) {
      Object.assign(decode$2, {
        bytes: 5
      });
      return buffer.readUInt32LE(offset + 1); // 64 bit
    } else {
      Object.assign(decode$2, {
        bytes: 9
      });
      const lo = buffer.readUInt32LE(offset + 1);
      const hi = buffer.readUInt32LE(offset + 5);

      const _number = hi * 0x0100000000 + lo;

      checkUInt53(_number);
      return _number;
    }
  }

  exports.decode = decode$2;

  function encodingLength(_number) {
    checkUInt53(_number);
    return _number < 0xfd ? 1 : _number <= 0xffff ? 3 : _number <= 0xffffffff ? 5 : 9;
  }

  exports.encodingLength = encodingLength;

  var varint = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$2 = /*@__PURE__*/getAugmentedNamespace(varint);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const varuint$5 = require$$1$2;

  exports.range = n => [...Array(n).keys()];

  function reverseBuffer(buffer) {
    if (buffer.length < 1) return buffer;
    let j = buffer.length - 1;
    let tmp = 0;

    for (let i = 0; i < buffer.length / 2; i++) {
      tmp = buffer[i];
      buffer[i] = buffer[j];
      buffer[j] = tmp;
      j--;
    }

    return buffer;
  }

  exports.reverseBuffer = reverseBuffer;

  function keyValsToBuffer(keyVals) {
    const buffers = keyVals.map(keyValToBuffer);
    buffers.push(Buffer$2.from([0]));
    return Buffer$2.concat(buffers);
  }

  exports.keyValsToBuffer = keyValsToBuffer;

  function keyValToBuffer(keyVal) {
    const keyLen = keyVal.key.length;
    const valLen = keyVal.value.length;
    const keyVarIntLen = varuint$5.encodingLength(keyLen);
    const valVarIntLen = varuint$5.encodingLength(valLen);
    const buffer = Buffer$2.allocUnsafe(keyVarIntLen + keyLen + valVarIntLen + valLen);
    varuint$5.encode(keyLen, buffer, 0);
    keyVal.key.copy(buffer, keyVarIntLen);
    varuint$5.encode(valLen, buffer, keyVarIntLen + keyLen);
    keyVal.value.copy(buffer, keyVarIntLen + keyLen + valVarIntLen);
    return buffer;
  }

  exports.keyValToBuffer = keyValToBuffer; // https://github.com/feross/buffer/blob/master/index.js#L1127

  function verifuint(value, max) {
    if (typeof value !== 'number') throw new Error('cannot write a non-number as a number');
    if (value < 0) throw new Error('specified a negative value for writing an unsigned value');
    if (value > max) throw new Error('RangeError: value out of range');
    if (Math.floor(value) !== value) throw new Error('value has a fractional component');
  }

  function readUInt64LE(buffer, offset) {
    const a = buffer.readUInt32LE(offset);
    let b = buffer.readUInt32LE(offset + 4);
    b *= 0x100000000;
    verifuint(b + a, 0x001fffffffffffff);
    return b + a;
  }

  exports.readUInt64LE = readUInt64LE;

  function writeUInt64LE(buffer, value, offset) {
    verifuint(value, 0x001fffffffffffff);
    buffer.writeInt32LE(value & -1, offset);
    buffer.writeUInt32LE(Math.floor(value / 0x100000000), offset + 4);
    return offset + 8;
  }

  exports.writeUInt64LE = writeUInt64LE;

  var tools = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(tools);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$4 = typeFields;
  const tools_1$2 = require$$1$1;
  const varuint$4 = require$$1$2;

  function decode$1(keyVal) {
    if (keyVal.key[0] !== typeFields_1$4.InputTypes.WITNESS_UTXO) {
      throw new Error('Decode Error: could not decode witnessUtxo with key 0x' + keyVal.key.toString('hex'));
    }

    const value = tools_1$2.readUInt64LE(keyVal.value, 0);
    let _offset = 8;
    const scriptLen = varuint$4.decode(keyVal.value, _offset);
    _offset += varuint$4.encodingLength(scriptLen);
    const script = keyVal.value.slice(_offset);

    if (script.length !== scriptLen) {
      throw new Error('Decode Error: WITNESS_UTXO script is not proper length');
    }

    return {
      script,
      value
    };
  }

  exports.decode = decode$1;

  function encode$1(data) {
    const {
      script,
      value
    } = data;
    const varintLen = varuint$4.encodingLength(script.length);
    const result = Buffer$2.allocUnsafe(8 + varintLen + script.length);
    tools_1$2.writeUInt64LE(result, value, 0);
    varuint$4.encode(script.length, result, 8);
    script.copy(result, 8 + varintLen);
    return {
      key: Buffer$2.from([typeFields_1$4.InputTypes.WITNESS_UTXO]),
      value: result
    };
  }

  exports.encode = encode$1;
  exports.expected = '{ script: Buffer; value: number; }';

  function check$1(data) {
    return isBuffer(data.script) && typeof data.value === 'number';
  }

  exports.check = check$1;

  function canAdd$1(currentData, newData) {
    return !!currentData && !!newData && currentData.witnessUtxo === undefined;
  }

  exports.canAdd = canAdd$1;

  var witnessUtxo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$13 = /*@__PURE__*/getAugmentedNamespace(witnessUtxo$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const typeFields_1$3 = typeFields;
  const varuint$3 = require$$1$2;

  function decode(keyVal) {
    if (keyVal.key[0] !== typeFields_1$3.OutputTypes.TAP_TREE || keyVal.key.length !== 1) {
      throw new Error('Decode Error: could not decode tapTree with key 0x' + keyVal.key.toString('hex'));
    }

    let _offset = 0;
    const data = [];

    while (_offset < keyVal.value.length) {
      const depth = keyVal.value[_offset++];
      const leafVersion = keyVal.value[_offset++];
      const scriptLen = varuint$3.decode(keyVal.value, _offset);
      _offset += varuint$3.encodingLength(scriptLen);
      data.push({
        depth,
        leafVersion,
        script: keyVal.value.slice(_offset, _offset + scriptLen)
      });
      _offset += scriptLen;
    }

    return {
      leaves: data
    };
  }

  exports.decode = decode;

  function encode(tree) {
    const key = Buffer$2.from([typeFields_1$3.OutputTypes.TAP_TREE]);
    const bufs = [].concat(...tree.leaves.map(tapLeaf => [Buffer$2.of(tapLeaf.depth, tapLeaf.leafVersion), varuint$3.encode(tapLeaf.script.length), tapLeaf.script]));
    return {
      key,
      value: Buffer$2.concat(bufs)
    };
  }

  exports.encode = encode;
  exports.expected = '{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }';

  function check(data) {
    return Array.isArray(data.leaves) && data.leaves.every(tapLeaf => tapLeaf.depth >= 0 && tapLeaf.depth <= 128 && (tapLeaf.leafVersion & 0xfe) === tapLeaf.leafVersion && isBuffer(tapLeaf.script));
  }

  exports.check = check;

  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.tapTree === undefined;
  }

  exports.canAdd = canAdd;

  var tapTree$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$14 = /*@__PURE__*/getAugmentedNamespace(tapTree$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  const range$1 = n => [...Array(n).keys()];

  const isValidDERKey = pubkey => pubkey.length === 33 && [2, 3].includes(pubkey[0]) || pubkey.length === 65 && 4 === pubkey[0];

  function makeConverter$4(TYPE_BYTE, isValidPubkey = isValidDERKey) {
    function decode(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error('Decode Error: could not decode bip32Derivation with key 0x' + keyVal.key.toString('hex'));
      }

      const pubkey = keyVal.key.slice(1);

      if (!isValidPubkey(pubkey)) {
        throw new Error('Decode Error: bip32Derivation has invalid pubkey in key 0x' + keyVal.key.toString('hex'));
      }

      if (keyVal.value.length / 4 % 1 !== 0) {
        throw new Error('Decode Error: Input BIP32_DERIVATION value length should be multiple of 4');
      }

      const data = {
        masterFingerprint: keyVal.value.slice(0, 4),
        pubkey,
        path: 'm'
      };

      for (const i of range$1(keyVal.value.length / 4 - 1)) {
        const val = keyVal.value.readUInt32LE(i * 4 + 4);
        const isHard = !!(val & 0x80000000);
        const idx = val & 0x7fffffff;
        data.path += '/' + idx.toString(10) + (isHard ? "'" : '');
      }

      return data;
    }

    function encode(data) {
      const head = Buffer$2.from([TYPE_BYTE]);
      const key = Buffer$2.concat([head, data.pubkey]);
      const splitPath = data.path.split('/');
      const value = Buffer$2.allocUnsafe(splitPath.length * 4);
      data.masterFingerprint.copy(value, 0);
      let offset = 4;
      splitPath.slice(1).forEach(level => {
        const isHard = level.slice(-1) === "'";
        let num = 0x7fffffff & parseInt(isHard ? level.slice(0, -1) : level, 10);
        if (isHard) num += 0x80000000;
        value.writeUInt32LE(num, offset);
        offset += 4;
      });
      return {
        key,
        value
      };
    }

    const expected = '{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }';

    function check(data) {
      return isBuffer(data.pubkey) && isBuffer(data.masterFingerprint) && typeof data.path === 'string' && isValidPubkey(data.pubkey) && data.masterFingerprint.length === 4;
    }

    function canAddToArray(array, item, dupeSet) {
      const dupeString = item.pubkey.toString('hex');
      if (dupeSet.has(dupeString)) return false;
      dupeSet.add(dupeString);
      return array.filter(v => v.pubkey.equals(item.pubkey)).length === 0;
    }

    return {
      decode,
      encode,
      check,
      expected,
      canAddToArray
    };
  }

  exports.makeConverter = makeConverter$4;

  var bip32Derivation$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$15 = /*@__PURE__*/getAugmentedNamespace(bip32Derivation$2);

  var checkPubkey$1 = {};

  Object.defineProperty(checkPubkey$1, '__esModule', {
    value: true
  });

  function makeChecker(pubkeyTypes) {
    return checkPubkey;

    function checkPubkey(keyVal) {
      let pubkey;

      if (pubkeyTypes.includes(keyVal.key[0])) {
        pubkey = keyVal.key.slice(1);

        if (!(pubkey.length === 33 || pubkey.length === 65) || ![2, 3, 4].includes(pubkey[0])) {
          throw new Error('Format Error: invalid pubkey in key 0x' + keyVal.key.toString('hex'));
        }
      }

      return pubkey;
    }
  }

  checkPubkey$1.makeChecker = makeChecker;

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function makeConverter$3(TYPE_BYTE) {
    function decode(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error('Decode Error: could not decode redeemScript with key 0x' + keyVal.key.toString('hex'));
      }

      return keyVal.value;
    }

    function encode(data) {
      const key = Buffer$2.from([TYPE_BYTE]);
      return {
        key,
        value: data
      };
    }

    const expected = 'Buffer';

    function check(data) {
      return isBuffer(data);
    }

    function canAdd(currentData, newData) {
      return !!currentData && !!newData && currentData.redeemScript === undefined;
    }

    return {
      decode,
      encode,
      check,
      expected,
      canAdd
    };
  }

  exports.makeConverter = makeConverter$3;

  var redeemScript$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$17 = /*@__PURE__*/getAugmentedNamespace(redeemScript$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const varuint$2 = require$$1$2;
  const bip32Derivation$1 = require$$15;

  const isValidBIP340Key = pubkey => pubkey.length === 32;

  function makeConverter$2(TYPE_BYTE) {
    const parent = bip32Derivation$1.makeConverter(TYPE_BYTE, isValidBIP340Key);

    function decode(keyVal) {
      const nHashes = varuint$2.decode(keyVal.value);
      const nHashesLen = varuint$2.encodingLength(nHashes);
      const base = parent.decode({
        key: keyVal.key,
        value: keyVal.value.slice(nHashesLen + nHashes * 32)
      });
      const leafHashes = new Array(nHashes);

      for (let i = 0, _offset = nHashesLen; i < nHashes; i++, _offset += 32) {
        leafHashes[i] = keyVal.value.slice(_offset, _offset + 32);
      }

      return Object.assign({}, base, {
        leafHashes
      });
    }

    function encode(data) {
      const base = parent.encode(data);
      const nHashesLen = varuint$2.encodingLength(data.leafHashes.length);
      const nHashesBuf = Buffer$2.allocUnsafe(nHashesLen);
      varuint$2.encode(data.leafHashes.length, nHashesBuf);
      const value = Buffer$2.concat([nHashesBuf, ...data.leafHashes, base.value]);
      return Object.assign({}, base, {
        value
      });
    }

    const expected = '{ ' + 'masterFingerprint: Buffer; ' + 'pubkey: Buffer; ' + 'path: string; ' + 'leafHashes: Buffer[]; ' + '}';

    function check(data) {
      return Array.isArray(data.leafHashes) && data.leafHashes.every(leafHash => isBuffer(leafHash) && leafHash.length === 32) && parent.check(data);
    }

    return {
      decode,
      encode,
      check,
      expected,
      canAddToArray: parent.canAddToArray
    };
  }

  exports.makeConverter = makeConverter$2;

  var tapBip32Derivation$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$18 = /*@__PURE__*/getAugmentedNamespace(tapBip32Derivation$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function makeConverter$1(TYPE_BYTE) {
    function decode(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE || keyVal.key.length !== 1) {
        throw new Error('Decode Error: could not decode tapInternalKey with key 0x' + keyVal.key.toString('hex'));
      }

      if (keyVal.value.length !== 32) {
        throw new Error('Decode Error: tapInternalKey not a 32-byte x-only pubkey');
      }

      return keyVal.value;
    }

    function encode(value) {
      const key = Buffer$2.from([TYPE_BYTE]);
      return {
        key,
        value
      };
    }

    const expected = 'Buffer';

    function check(data) {
      return isBuffer(data) && data.length === 32;
    }

    function canAdd(currentData, newData) {
      return !!currentData && !!newData && currentData.tapInternalKey === undefined;
    }

    return {
      decode,
      encode,
      check,
      expected,
      canAdd
    };
  }

  exports.makeConverter = makeConverter$1;

  var tapInternalKey$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$19 = /*@__PURE__*/getAugmentedNamespace(tapInternalKey$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function makeConverter(TYPE_BYTE) {
    function decode(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error('Decode Error: could not decode witnessScript with key 0x' + keyVal.key.toString('hex'));
      }

      return keyVal.value;
    }

    function encode(data) {
      const key = Buffer$2.from([TYPE_BYTE]);
      return {
        key,
        value: data
      };
    }

    const expected = 'Buffer';

    function check(data) {
      return isBuffer(data);
    }

    function canAdd(currentData, newData) {
      return !!currentData && !!newData && currentData.witnessScript === undefined;
    }

    return {
      decode,
      encode,
      check,
      expected,
      canAdd
    };
  }

  exports.makeConverter = makeConverter;

  var witnessScript$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$20 = /*@__PURE__*/getAugmentedNamespace(witnessScript$1);

  Object.defineProperty(converter$1, '__esModule', {
    value: true
  });
  const typeFields_1$2 = typeFields;
  const globalXpub = require$$1$3;
  const unsignedTx = require$$2$1;
  const finalScriptSig = require$$3;
  const finalScriptWitness = require$$4;
  const nonWitnessUtxo = require$$5;
  const partialSig = require$$6$1;
  const porCommitment = require$$7;
  const sighashType = require$$8;
  const tapKeySig = require$$9;
  const tapLeafScript = require$$10;
  const tapMerkleRoot = require$$11;
  const tapScriptSig = require$$12;
  const witnessUtxo = require$$13;
  const tapTree = require$$14;
  const bip32Derivation = require$$15;
  const checkPubkey = checkPubkey$1;
  const redeemScript = require$$17;
  const tapBip32Derivation = require$$18;
  const tapInternalKey = require$$19;
  const witnessScript = require$$20;
  const globals = {
    unsignedTx,
    globalXpub,
    // pass an Array of key bytes that require pubkey beside the key
    checkPubkey: checkPubkey.makeChecker([])
  };
  converter$1.globals = globals;
  const inputs = {
    nonWitnessUtxo,
    partialSig,
    sighashType,
    finalScriptSig,
    finalScriptWitness,
    porCommitment,
    witnessUtxo,
    bip32Derivation: bip32Derivation.makeConverter(typeFields_1$2.InputTypes.BIP32_DERIVATION),
    redeemScript: redeemScript.makeConverter(typeFields_1$2.InputTypes.REDEEM_SCRIPT),
    witnessScript: witnessScript.makeConverter(typeFields_1$2.InputTypes.WITNESS_SCRIPT),
    checkPubkey: checkPubkey.makeChecker([typeFields_1$2.InputTypes.PARTIAL_SIG, typeFields_1$2.InputTypes.BIP32_DERIVATION]),
    tapKeySig,
    tapScriptSig,
    tapLeafScript,
    tapBip32Derivation: tapBip32Derivation.makeConverter(typeFields_1$2.InputTypes.TAP_BIP32_DERIVATION),
    tapInternalKey: tapInternalKey.makeConverter(typeFields_1$2.InputTypes.TAP_INTERNAL_KEY),
    tapMerkleRoot
  };
  converter$1.inputs = inputs;
  const outputs = {
    bip32Derivation: bip32Derivation.makeConverter(typeFields_1$2.OutputTypes.BIP32_DERIVATION),
    redeemScript: redeemScript.makeConverter(typeFields_1$2.OutputTypes.REDEEM_SCRIPT),
    witnessScript: witnessScript.makeConverter(typeFields_1$2.OutputTypes.WITNESS_SCRIPT),
    checkPubkey: checkPubkey.makeChecker([typeFields_1$2.OutputTypes.BIP32_DERIVATION]),
    tapBip32Derivation: tapBip32Derivation.makeConverter(typeFields_1$2.OutputTypes.TAP_BIP32_DERIVATION),
    tapTree,
    tapInternalKey: tapInternalKey.makeConverter(typeFields_1$2.OutputTypes.TAP_INTERNAL_KEY)
  };
  converter$1.outputs = outputs;

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const convert$1 = converter$1;
  const tools_1$1 = require$$1$1;
  const varuint$1 = require$$1$2;
  const typeFields_1$1 = typeFields;

  function psbtFromBuffer(buffer, txGetter) {
    let offset = 0;

    function varSlice() {
      const keyLen = varuint$1.decode(buffer, offset);
      offset += varuint$1.encodingLength(keyLen);
      const key = buffer.slice(offset, offset + keyLen);
      offset += keyLen;
      return key;
    }

    function readUInt32BE() {
      const num = buffer.readUInt32BE(offset);
      offset += 4;
      return num;
    }

    function readUInt8() {
      const num = buffer.readUInt8(offset);
      offset += 1;
      return num;
    }

    function getKeyValue() {
      const key = varSlice();
      const value = varSlice();
      return {
        key,
        value
      };
    }

    function checkEndOfKeyValPairs() {
      if (offset >= buffer.length) {
        throw new Error('Format Error: Unexpected End of PSBT');
      }

      const isEnd = buffer.readUInt8(offset) === 0;

      if (isEnd) {
        offset++;
      }

      return isEnd;
    }

    if (readUInt32BE() !== 0x70736274) {
      throw new Error('Format Error: Invalid Magic Number');
    }

    if (readUInt8() !== 0xff) {
      throw new Error('Format Error: Magic Number must be followed by 0xff separator');
    }

    const globalMapKeyVals = [];
    const globalKeyIndex = {};

    while (!checkEndOfKeyValPairs()) {
      const keyVal = getKeyValue();
      const hexKey = keyVal.key.toString('hex');

      if (globalKeyIndex[hexKey]) {
        throw new Error('Format Error: Keys must be unique for global keymap: key ' + hexKey);
      }

      globalKeyIndex[hexKey] = 1;
      globalMapKeyVals.push(keyVal);
    }

    const unsignedTxMaps = globalMapKeyVals.filter(keyVal => keyVal.key[0] === typeFields_1$1.GlobalTypes.UNSIGNED_TX);

    if (unsignedTxMaps.length !== 1) {
      throw new Error('Format Error: Only one UNSIGNED_TX allowed');
    }

    const unsignedTx = txGetter(unsignedTxMaps[0].value); // Get input and output counts to loop the respective fields

    const {
      inputCount,
      outputCount
    } = unsignedTx.getInputOutputCounts();
    const inputKeyVals = [];
    const outputKeyVals = []; // Get input fields

    for (const index of tools_1$1.range(inputCount)) {
      const inputKeyIndex = {};
      const input = [];

      while (!checkEndOfKeyValPairs()) {
        const keyVal = getKeyValue();
        const hexKey = keyVal.key.toString('hex');

        if (inputKeyIndex[hexKey]) {
          throw new Error('Format Error: Keys must be unique for each input: ' + 'input index ' + index + ' key ' + hexKey);
        }

        inputKeyIndex[hexKey] = 1;
        input.push(keyVal);
      }

      inputKeyVals.push(input);
    }

    for (const index of tools_1$1.range(outputCount)) {
      const outputKeyIndex = {};
      const output = [];

      while (!checkEndOfKeyValPairs()) {
        const keyVal = getKeyValue();
        const hexKey = keyVal.key.toString('hex');

        if (outputKeyIndex[hexKey]) {
          throw new Error('Format Error: Keys must be unique for each output: ' + 'output index ' + index + ' key ' + hexKey);
        }

        outputKeyIndex[hexKey] = 1;
        output.push(keyVal);
      }

      outputKeyVals.push(output);
    }

    return psbtFromKeyVals(unsignedTx, {
      globalMapKeyVals,
      inputKeyVals,
      outputKeyVals
    });
  }

  exports.psbtFromBuffer = psbtFromBuffer;

  function checkKeyBuffer(type, keyBuf, keyNum) {
    if (!keyBuf.equals(Buffer$2.from([keyNum]))) {
      throw new Error(`Format Error: Invalid ${type} key: ${keyBuf.toString('hex')}`);
    }
  }

  exports.checkKeyBuffer = checkKeyBuffer;

  function psbtFromKeyVals(unsignedTx, {
    globalMapKeyVals,
    inputKeyVals,
    outputKeyVals
  }) {
    // That was easy :-)
    const globalMap = {
      unsignedTx
    };
    let txCount = 0;

    for (const keyVal of globalMapKeyVals) {
      // If a globalMap item needs pubkey, uncomment
      // const pubkey = convert.globals.checkPubkey(keyVal);
      switch (keyVal.key[0]) {
        case typeFields_1$1.GlobalTypes.UNSIGNED_TX:
          checkKeyBuffer('global', keyVal.key, typeFields_1$1.GlobalTypes.UNSIGNED_TX);

          if (txCount > 0) {
            throw new Error('Format Error: GlobalMap has multiple UNSIGNED_TX');
          }

          txCount++;
          break;

        case typeFields_1$1.GlobalTypes.GLOBAL_XPUB:
          if (globalMap.globalXpub === undefined) {
            globalMap.globalXpub = [];
          }

          globalMap.globalXpub.push(convert$1.globals.globalXpub.decode(keyVal));
          break;

        default:
          // This will allow inclusion during serialization.
          if (!globalMap.unknownKeyVals) globalMap.unknownKeyVals = [];
          globalMap.unknownKeyVals.push(keyVal);
      }
    } // Get input and output counts to loop the respective fields


    const inputCount = inputKeyVals.length;
    const outputCount = outputKeyVals.length;
    const inputs = [];
    const outputs = []; // Get input fields

    for (const index of tools_1$1.range(inputCount)) {
      const input = {};

      for (const keyVal of inputKeyVals[index]) {
        convert$1.inputs.checkPubkey(keyVal);

        switch (keyVal.key[0]) {
          case typeFields_1$1.InputTypes.NON_WITNESS_UTXO:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.NON_WITNESS_UTXO);

            if (input.nonWitnessUtxo !== undefined) {
              throw new Error('Format Error: Input has multiple NON_WITNESS_UTXO');
            }

            input.nonWitnessUtxo = convert$1.inputs.nonWitnessUtxo.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.WITNESS_UTXO:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.WITNESS_UTXO);

            if (input.witnessUtxo !== undefined) {
              throw new Error('Format Error: Input has multiple WITNESS_UTXO');
            }

            input.witnessUtxo = convert$1.inputs.witnessUtxo.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.PARTIAL_SIG:
            if (input.partialSig === undefined) {
              input.partialSig = [];
            }

            input.partialSig.push(convert$1.inputs.partialSig.decode(keyVal));
            break;

          case typeFields_1$1.InputTypes.SIGHASH_TYPE:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.SIGHASH_TYPE);

            if (input.sighashType !== undefined) {
              throw new Error('Format Error: Input has multiple SIGHASH_TYPE');
            }

            input.sighashType = convert$1.inputs.sighashType.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.REDEEM_SCRIPT:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.REDEEM_SCRIPT);

            if (input.redeemScript !== undefined) {
              throw new Error('Format Error: Input has multiple REDEEM_SCRIPT');
            }

            input.redeemScript = convert$1.inputs.redeemScript.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.WITNESS_SCRIPT:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.WITNESS_SCRIPT);

            if (input.witnessScript !== undefined) {
              throw new Error('Format Error: Input has multiple WITNESS_SCRIPT');
            }

            input.witnessScript = convert$1.inputs.witnessScript.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.BIP32_DERIVATION:
            if (input.bip32Derivation === undefined) {
              input.bip32Derivation = [];
            }

            input.bip32Derivation.push(convert$1.inputs.bip32Derivation.decode(keyVal));
            break;

          case typeFields_1$1.InputTypes.FINAL_SCRIPTSIG:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.FINAL_SCRIPTSIG);
            input.finalScriptSig = convert$1.inputs.finalScriptSig.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.FINAL_SCRIPTWITNESS:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.FINAL_SCRIPTWITNESS);
            input.finalScriptWitness = convert$1.inputs.finalScriptWitness.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.POR_COMMITMENT:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.POR_COMMITMENT);
            input.porCommitment = convert$1.inputs.porCommitment.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.TAP_KEY_SIG:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.TAP_KEY_SIG);
            input.tapKeySig = convert$1.inputs.tapKeySig.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.TAP_SCRIPT_SIG:
            if (input.tapScriptSig === undefined) {
              input.tapScriptSig = [];
            }

            input.tapScriptSig.push(convert$1.inputs.tapScriptSig.decode(keyVal));
            break;

          case typeFields_1$1.InputTypes.TAP_LEAF_SCRIPT:
            if (input.tapLeafScript === undefined) {
              input.tapLeafScript = [];
            }

            input.tapLeafScript.push(convert$1.inputs.tapLeafScript.decode(keyVal));
            break;

          case typeFields_1$1.InputTypes.TAP_BIP32_DERIVATION:
            if (input.tapBip32Derivation === undefined) {
              input.tapBip32Derivation = [];
            }

            input.tapBip32Derivation.push(convert$1.inputs.tapBip32Derivation.decode(keyVal));
            break;

          case typeFields_1$1.InputTypes.TAP_INTERNAL_KEY:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.TAP_INTERNAL_KEY);
            input.tapInternalKey = convert$1.inputs.tapInternalKey.decode(keyVal);
            break;

          case typeFields_1$1.InputTypes.TAP_MERKLE_ROOT:
            checkKeyBuffer('input', keyVal.key, typeFields_1$1.InputTypes.TAP_MERKLE_ROOT);
            input.tapMerkleRoot = convert$1.inputs.tapMerkleRoot.decode(keyVal);
            break;

          default:
            // This will allow inclusion during serialization.
            if (!input.unknownKeyVals) input.unknownKeyVals = [];
            input.unknownKeyVals.push(keyVal);
        }
      }

      inputs.push(input);
    }

    for (const index of tools_1$1.range(outputCount)) {
      const output = {};

      for (const keyVal of outputKeyVals[index]) {
        convert$1.outputs.checkPubkey(keyVal);

        switch (keyVal.key[0]) {
          case typeFields_1$1.OutputTypes.REDEEM_SCRIPT:
            checkKeyBuffer('output', keyVal.key, typeFields_1$1.OutputTypes.REDEEM_SCRIPT);

            if (output.redeemScript !== undefined) {
              throw new Error('Format Error: Output has multiple REDEEM_SCRIPT');
            }

            output.redeemScript = convert$1.outputs.redeemScript.decode(keyVal);
            break;

          case typeFields_1$1.OutputTypes.WITNESS_SCRIPT:
            checkKeyBuffer('output', keyVal.key, typeFields_1$1.OutputTypes.WITNESS_SCRIPT);

            if (output.witnessScript !== undefined) {
              throw new Error('Format Error: Output has multiple WITNESS_SCRIPT');
            }

            output.witnessScript = convert$1.outputs.witnessScript.decode(keyVal);
            break;

          case typeFields_1$1.OutputTypes.BIP32_DERIVATION:
            if (output.bip32Derivation === undefined) {
              output.bip32Derivation = [];
            }

            output.bip32Derivation.push(convert$1.outputs.bip32Derivation.decode(keyVal));
            break;

          case typeFields_1$1.OutputTypes.TAP_INTERNAL_KEY:
            checkKeyBuffer('output', keyVal.key, typeFields_1$1.OutputTypes.TAP_INTERNAL_KEY);
            output.tapInternalKey = convert$1.outputs.tapInternalKey.decode(keyVal);
            break;

          case typeFields_1$1.OutputTypes.TAP_TREE:
            checkKeyBuffer('output', keyVal.key, typeFields_1$1.OutputTypes.TAP_TREE);
            output.tapTree = convert$1.outputs.tapTree.decode(keyVal);
            break;

          case typeFields_1$1.OutputTypes.TAP_BIP32_DERIVATION:
            if (output.tapBip32Derivation === undefined) {
              output.tapBip32Derivation = [];
            }

            output.tapBip32Derivation.push(convert$1.outputs.tapBip32Derivation.decode(keyVal));
            break;

          default:
            if (!output.unknownKeyVals) output.unknownKeyVals = [];
            output.unknownKeyVals.push(keyVal);
        }
      }

      outputs.push(output);
    }

    return {
      globalMap,
      inputs,
      outputs
    };
  }

  exports.psbtFromKeyVals = psbtFromKeyVals;

  var fromBuffer = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(fromBuffer);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const convert = converter$1;
  const tools_1 = require$$1$1;

  function psbtToBuffer({
    globalMap,
    inputs,
    outputs
  }) {
    const {
      globalKeyVals,
      inputKeyVals,
      outputKeyVals
    } = psbtToKeyVals({
      globalMap,
      inputs,
      outputs
    });
    const globalBuffer = tools_1.keyValsToBuffer(globalKeyVals);

    const keyValsOrEmptyToBuffer = keyVals => keyVals.length === 0 ? [Buffer$2.from([0])] : keyVals.map(tools_1.keyValsToBuffer);

    const inputBuffers = keyValsOrEmptyToBuffer(inputKeyVals);
    const outputBuffers = keyValsOrEmptyToBuffer(outputKeyVals);
    const header = Buffer$2.allocUnsafe(5);
    header.writeUIntBE(0x70736274ff, 0, 5);
    return Buffer$2.concat([header, globalBuffer].concat(inputBuffers, outputBuffers));
  }

  exports.psbtToBuffer = psbtToBuffer;

  const sortKeyVals = (a, b) => {
    return a.key.compare(b.key);
  };

  function keyValsFromMap(keyValMap, converterFactory) {
    const keyHexSet = new Set();
    const keyVals = Object.entries(keyValMap).reduce((result, [key, value]) => {
      if (key === 'unknownKeyVals') return result; // We are checking for undefined anyways. So ignore TS error
      // @ts-ignore

      const converter = converterFactory[key];
      if (converter === undefined) return result;
      const encodedKeyVals = (Array.isArray(value) ? value : [value]).map(converter.encode);
      const keyHexes = encodedKeyVals.map(kv => kv.key.toString('hex'));
      keyHexes.forEach(hex => {
        if (keyHexSet.has(hex)) throw new Error('Serialize Error: Duplicate key: ' + hex);
        keyHexSet.add(hex);
      });
      return result.concat(encodedKeyVals);
    }, []); // Get other keyVals that have not yet been gotten

    const otherKeyVals = keyValMap.unknownKeyVals ? keyValMap.unknownKeyVals.filter(keyVal => {
      return !keyHexSet.has(keyVal.key.toString('hex'));
    }) : [];
    return keyVals.concat(otherKeyVals).sort(sortKeyVals);
  }

  function psbtToKeyVals({
    globalMap,
    inputs,
    outputs
  }) {
    // First parse the global keyVals
    // Get any extra keyvals to pass along
    return {
      globalKeyVals: keyValsFromMap(globalMap, convert.globals),
      inputKeyVals: inputs.map(i => keyValsFromMap(i, convert.inputs)),
      outputKeyVals: outputs.map(o => keyValsFromMap(o, convert.outputs))
    };
  }

  exports.psbtToKeyVals = psbtToKeyVals;

  var toBuffer = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1 = /*@__PURE__*/getAugmentedNamespace(toBuffer);

  (function (exports) {

    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    __export(require$$0$1);

    __export(require$$1);
  })(parser);

  Object.defineProperty(combiner, '__esModule', {
    value: true
  });
  const parser_1$1 = parser;

  function combine(psbts) {
    const self = psbts[0];
    const selfKeyVals = parser_1$1.psbtToKeyVals(self);
    const others = psbts.slice(1);
    if (others.length === 0) throw new Error('Combine: Nothing to combine');
    const selfTx = getTx(self);

    if (selfTx === undefined) {
      throw new Error('Combine: Self missing transaction');
    }

    const selfGlobalSet = getKeySet(selfKeyVals.globalKeyVals);
    const selfInputSets = selfKeyVals.inputKeyVals.map(getKeySet);
    const selfOutputSets = selfKeyVals.outputKeyVals.map(getKeySet);

    for (const other of others) {
      const otherTx = getTx(other);

      if (otherTx === undefined || !otherTx.toBuffer().equals(selfTx.toBuffer())) {
        throw new Error('Combine: One of the Psbts does not have the same transaction.');
      }

      const otherKeyVals = parser_1$1.psbtToKeyVals(other);
      const otherGlobalSet = getKeySet(otherKeyVals.globalKeyVals);
      otherGlobalSet.forEach(keyPusher(selfGlobalSet, selfKeyVals.globalKeyVals, otherKeyVals.globalKeyVals));
      const otherInputSets = otherKeyVals.inputKeyVals.map(getKeySet);
      otherInputSets.forEach((inputSet, idx) => inputSet.forEach(keyPusher(selfInputSets[idx], selfKeyVals.inputKeyVals[idx], otherKeyVals.inputKeyVals[idx])));
      const otherOutputSets = otherKeyVals.outputKeyVals.map(getKeySet);
      otherOutputSets.forEach((outputSet, idx) => outputSet.forEach(keyPusher(selfOutputSets[idx], selfKeyVals.outputKeyVals[idx], otherKeyVals.outputKeyVals[idx])));
    }

    return parser_1$1.psbtFromKeyVals(selfTx, {
      globalMapKeyVals: selfKeyVals.globalKeyVals,
      inputKeyVals: selfKeyVals.inputKeyVals,
      outputKeyVals: selfKeyVals.outputKeyVals
    });
  }

  combiner.combine = combine;

  function keyPusher(selfSet, selfKeyVals, otherKeyVals) {
    return key => {
      if (selfSet.has(key)) return;
      const newKv = otherKeyVals.filter(kv => kv.key.toString('hex') === key)[0];
      selfKeyVals.push(newKv);
      selfSet.add(key);
    };
  }

  function getTx(psbt) {
    return psbt.globalMap.unsignedTx;
  }

  function getKeySet(keyVals) {
    const set = new Set();
    keyVals.forEach(keyVal => {
      const hex = keyVal.key.toString('hex');
      if (set.has(hex)) throw new Error('Combine: KeyValue Map keys should be unique');
      set.add(hex);
    });
    return set;
  }

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const converter = converter$1;

  function checkForInput(inputs, inputIndex) {
    const input = inputs[inputIndex];
    if (input === undefined) throw new Error(`No input #${inputIndex}`);
    return input;
  }

  exports.checkForInput = checkForInput;

  function checkForOutput(outputs, outputIndex) {
    const output = outputs[outputIndex];
    if (output === undefined) throw new Error(`No output #${outputIndex}`);
    return output;
  }

  exports.checkForOutput = checkForOutput;

  function checkHasKey(checkKeyVal, keyVals, enumLength) {
    if (checkKeyVal.key[0] < enumLength) {
      throw new Error(`Use the method for your specific key instead of addUnknownKeyVal*`);
    }

    if (keyVals && keyVals.filter(kv => kv.key.equals(checkKeyVal.key)).length !== 0) {
      throw new Error(`Duplicate Key: ${checkKeyVal.key.toString('hex')}`);
    }
  }

  exports.checkHasKey = checkHasKey;

  function getEnumLength(myenum) {
    let count = 0;
    Object.keys(myenum).forEach(val => {
      if (Number(isNaN(Number(val)))) {
        count++;
      }
    });
    return count;
  }

  exports.getEnumLength = getEnumLength;

  function inputCheckUncleanFinalized(inputIndex, input) {
    let result = false;

    if (input.nonWitnessUtxo || input.witnessUtxo) {
      const needScriptSig = !!input.redeemScript;
      const needWitnessScript = !!input.witnessScript;
      const scriptSigOK = !needScriptSig || !!input.finalScriptSig;
      const witnessScriptOK = !needWitnessScript || !!input.finalScriptWitness;
      const hasOneFinal = !!input.finalScriptSig || !!input.finalScriptWitness;
      result = scriptSigOK && witnessScriptOK && hasOneFinal;
    }

    if (result === false) {
      throw new Error(`Input #${inputIndex} has too much or too little data to clean`);
    }
  }

  exports.inputCheckUncleanFinalized = inputCheckUncleanFinalized;

  function throwForUpdateMaker(typeName, name, expected, data) {
    throw new Error(`Data for ${typeName} key ${name} is incorrect: Expected ` + `${expected} and got ${JSON.stringify(data)}`);
  }

  function updateMaker(typeName) {
    return (updateData, mainData) => {
      for (const name of Object.keys(updateData)) {
        // @ts-ignore
        const data = updateData[name]; // @ts-ignore

        const {
          canAdd,
          canAddToArray,
          check,
          expected
        } = // @ts-ignore
        converter[typeName + 's'][name] || {};
        const isArray = !!canAddToArray; // If unknown data. ignore and do not add

        if (check) {
          if (isArray) {
            if (!Array.isArray(data) || // @ts-ignore
            mainData[name] && !Array.isArray(mainData[name])) {
              throw new Error(`Key type ${name} must be an array`);
            }

            if (!data.every(check)) {
              throwForUpdateMaker(typeName, name, expected, data);
            } // @ts-ignore


            const arr = mainData[name] || [];
            const dupeCheckSet = new Set();

            if (!data.every(v => canAddToArray(arr, v, dupeCheckSet))) {
              throw new Error('Can not add duplicate data to array');
            } // @ts-ignore


            mainData[name] = arr.concat(data);
          } else {
            if (!check(data)) {
              throwForUpdateMaker(typeName, name, expected, data);
            }

            if (!canAdd(mainData, data)) {
              throw new Error(`Can not add duplicate data to ${typeName}`);
            } // @ts-ignore


            mainData[name] = data;
          }
        }
      }
    };
  }

  exports.updateGlobal = updateMaker('global');
  exports.updateInput = updateMaker('input');
  exports.updateOutput = updateMaker('output');

  function addInputAttributes(inputs, data) {
    const index = inputs.length - 1;
    const input = checkForInput(inputs, index);
    exports.updateInput(data, input);
  }

  exports.addInputAttributes = addInputAttributes;

  function addOutputAttributes(outputs, data) {
    const index = outputs.length - 1;
    const output = checkForOutput(outputs, index);
    exports.updateOutput(data, output);
  }

  exports.addOutputAttributes = addOutputAttributes;

  function defaultVersionSetter(version, txBuf) {
    if (!isBuffer(txBuf) || txBuf.length < 4) {
      throw new Error('Set Version: Invalid Transaction');
    }

    txBuf.writeUInt32LE(version, 0);
    return txBuf;
  }

  exports.defaultVersionSetter = defaultVersionSetter;

  function defaultLocktimeSetter(locktime, txBuf) {
    if (!isBuffer(txBuf) || txBuf.length < 4) {
      throw new Error('Set Locktime: Invalid Transaction');
    }

    txBuf.writeUInt32LE(locktime, txBuf.length - 4);
    return txBuf;
  }

  exports.defaultLocktimeSetter = defaultLocktimeSetter;

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$2 = /*@__PURE__*/getAugmentedNamespace(utils);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  const combiner_1 = combiner;
  const parser_1 = parser;
  const typeFields_1 = typeFields;
  const utils_1$1 = require$$2;

  class Psbt$1 {
    constructor(tx) {
      this.inputs = [];
      this.outputs = [];
      this.globalMap = {
        unsignedTx: tx
      };
    }

    static fromBase64(data, txFromBuffer) {
      const buffer = Buffer$2.from(data, 'base64');
      return this.fromBuffer(buffer, txFromBuffer);
    }

    static fromHex(data, txFromBuffer) {
      const buffer = Buffer$2.from(data, 'hex');
      return this.fromBuffer(buffer, txFromBuffer);
    }

    static fromBuffer(buffer, txFromBuffer) {
      const results = parser_1.psbtFromBuffer(buffer, txFromBuffer);
      const psbt = new this(results.globalMap.unsignedTx);
      Object.assign(psbt, results);
      return psbt;
    }

    toBase64() {
      const buffer = this.toBuffer();
      return buffer.toString('base64');
    }

    toHex() {
      const buffer = this.toBuffer();
      return buffer.toString('hex');
    }

    toBuffer() {
      return parser_1.psbtToBuffer(this);
    }

    updateGlobal(updateData) {
      utils_1$1.updateGlobal(updateData, this.globalMap);
      return this;
    }

    updateInput(inputIndex, updateData) {
      const input = utils_1$1.checkForInput(this.inputs, inputIndex);
      utils_1$1.updateInput(updateData, input);
      return this;
    }

    updateOutput(outputIndex, updateData) {
      const output = utils_1$1.checkForOutput(this.outputs, outputIndex);
      utils_1$1.updateOutput(updateData, output);
      return this;
    }

    addUnknownKeyValToGlobal(keyVal) {
      utils_1$1.checkHasKey(keyVal, this.globalMap.unknownKeyVals, utils_1$1.getEnumLength(typeFields_1.GlobalTypes));
      if (!this.globalMap.unknownKeyVals) this.globalMap.unknownKeyVals = [];
      this.globalMap.unknownKeyVals.push(keyVal);
      return this;
    }

    addUnknownKeyValToInput(inputIndex, keyVal) {
      const input = utils_1$1.checkForInput(this.inputs, inputIndex);
      utils_1$1.checkHasKey(keyVal, input.unknownKeyVals, utils_1$1.getEnumLength(typeFields_1.InputTypes));
      if (!input.unknownKeyVals) input.unknownKeyVals = [];
      input.unknownKeyVals.push(keyVal);
      return this;
    }

    addUnknownKeyValToOutput(outputIndex, keyVal) {
      const output = utils_1$1.checkForOutput(this.outputs, outputIndex);
      utils_1$1.checkHasKey(keyVal, output.unknownKeyVals, utils_1$1.getEnumLength(typeFields_1.OutputTypes));
      if (!output.unknownKeyVals) output.unknownKeyVals = [];
      output.unknownKeyVals.push(keyVal);
      return this;
    }

    addInput(inputData) {
      this.globalMap.unsignedTx.addInput(inputData);
      this.inputs.push({
        unknownKeyVals: []
      });
      const addKeyVals = inputData.unknownKeyVals || [];
      const inputIndex = this.inputs.length - 1;

      if (!Array.isArray(addKeyVals)) {
        throw new Error('unknownKeyVals must be an Array');
      }

      addKeyVals.forEach(keyVal => this.addUnknownKeyValToInput(inputIndex, keyVal));
      utils_1$1.addInputAttributes(this.inputs, inputData);
      return this;
    }

    addOutput(outputData) {
      this.globalMap.unsignedTx.addOutput(outputData);
      this.outputs.push({
        unknownKeyVals: []
      });
      const addKeyVals = outputData.unknownKeyVals || [];
      const outputIndex = this.outputs.length - 1;

      if (!Array.isArray(addKeyVals)) {
        throw new Error('unknownKeyVals must be an Array');
      }

      addKeyVals.forEach(keyVal => this.addUnknownKeyValToInput(outputIndex, keyVal));
      utils_1$1.addOutputAttributes(this.outputs, outputData);
      return this;
    }

    clearFinalizedInput(inputIndex) {
      const input = utils_1$1.checkForInput(this.inputs, inputIndex);
      utils_1$1.inputCheckUncleanFinalized(inputIndex, input);

      for (const key of Object.keys(input)) {
        if (!['witnessUtxo', 'nonWitnessUtxo', 'finalScriptSig', 'finalScriptWitness', 'unknownKeyVals'].includes(key)) {
          // @ts-ignore
          delete input[key];
        }
      }

      return this;
    }

    combine(...those) {
      // Combine this with those.
      // Return self for chaining.
      const result = combiner_1.combine([this].concat(those));
      Object.assign(this, result);
      return this;
    }

    getTransaction() {
      return this.globalMap.unsignedTx.toBuffer();
    }

  }

  exports.Psbt = Psbt$1;

  var psbt$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(psbt$1);

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.Psbt = void 0;
  const bip174_1 = require$$0;
  const varuint = require$$1$2;
  const utils_1 = require$$2;
  const address_1 = require$$0$2;
  const bufferutils_1 = require$$4$1;
  const crypto_1 = require$$1$4;
  const networks_1 = networks$1;
  const payments = payments$2;
  const bscript = require$$4$3;
  const transaction_1 = require$$8$1;
  /**
   * These are the default arguments for a Psbt instance.
   */

  const DEFAULT_OPTS = {
    /**
     * A bitcoinjs Network object. This is only used if you pass an `address`
     * parameter to addOutput. Otherwise it is not needed and can be left default.
     */
    network: networks_1.bitcoin,

    /**
     * When extractTransaction is called, the fee rate is checked.
     * THIS IS NOT TO BE RELIED ON.
     * It is only here as a last ditch effort to prevent sending a 500 BTC fee etc.
     */
    maximumFeeRate: 5000 // satoshi per byte

  };
  /**
   * Psbt class can parse and generate a PSBT binary based off of the BIP174.
   * There are 6 roles that this class fulfills. (Explained in BIP174)
   *
   * Creator: This can be done with `new Psbt()`
   * Updater: This can be done with `psbt.addInput(input)`, `psbt.addInputs(inputs)`,
   *   `psbt.addOutput(output)`, `psbt.addOutputs(outputs)` when you are looking to
   *   add new inputs and outputs to the PSBT, and `psbt.updateGlobal(itemObject)`,
   *   `psbt.updateInput(itemObject)`, `psbt.updateOutput(itemObject)`
   *   addInput requires hash: Buffer | string; and index: number; as attributes
   *   and can also include any attributes that are used in updateInput method.
   *   addOutput requires script: Buffer; and value: number; and likewise can include
   *   data for updateOutput.
   *   For a list of what attributes should be what types. Check the bip174 library.
   *   Also, check the integration tests for some examples of usage.
   * Signer: There are a few methods. signAllInputs and signAllInputsAsync, which will search all input
   *   information for your pubkey or pubkeyhash, and only sign inputs where it finds
   *   your info. Or you can explicitly sign a specific input with signInput and
   *   signInputAsync. For the async methods you can create a SignerAsync object
   *   and use something like a hardware wallet to sign with. (You must implement this)
   * Combiner: psbts can be combined easily with `psbt.combine(psbt2, psbt3, psbt4 ...)`
   *   the psbt calling combine will always have precedence when a conflict occurs.
   *   Combine checks if the internal bitcoin transaction is the same, so be sure that
   *   all sequences, version, locktime, etc. are the same before combining.
   * Input Finalizer: This role is fairly important. Not only does it need to construct
   *   the input scriptSigs and witnesses, but it SHOULD verify the signatures etc.
   *   Before running `psbt.finalizeAllInputs()` please run `psbt.validateSignaturesOfAllInputs()`
   *   Running any finalize method will delete any data in the input(s) that are no longer
   *   needed due to the finalized scripts containing the information.
   * Transaction Extractor: This role will perform some checks before returning a
   *   Transaction object. Such as fee rate not being larger than maximumFeeRate etc.
   */

  class Psbt {
    constructor(opts = {}, data = new bip174_1.Psbt(new PsbtTransaction())) {
      this.data = data; // set defaults

      this.opts = Object.assign({}, DEFAULT_OPTS, opts);
      this.__CACHE = {
        __NON_WITNESS_UTXO_TX_CACHE: [],
        __NON_WITNESS_UTXO_BUF_CACHE: [],
        __TX_IN_CACHE: {},
        __TX: this.data.globalMap.unsignedTx.tx,
        // Psbt's predecesor (TransactionBuilder - now removed) behavior
        // was to not confirm input values  before signing.
        // Even though we highly encourage people to get
        // the full parent transaction to verify values, the ability to
        // sign non-segwit inputs without the full transaction was often
        // requested. So the only way to activate is to use @ts-ignore.
        // We will disable exporting the Psbt when unsafe sign is active.
        // because it is not BIP174 compliant.
        __UNSAFE_SIGN_NONSEGWIT: false
      };
      if (this.data.inputs.length === 0) this.setVersion(2); // Make data hidden when enumerating

      const dpew = (obj, attr, enumerable, writable) => Object.defineProperty(obj, attr, {
        enumerable,
        writable
      });

      dpew(this, '__CACHE', false, true);
      dpew(this, 'opts', false, true);
    }

    static fromBase64(data, opts = {}) {
      const buffer = Buffer$2.from(data, 'base64');
      return this.fromBuffer(buffer, opts);
    }

    static fromHex(data, opts = {}) {
      const buffer = Buffer$2.from(data, 'hex');
      return this.fromBuffer(buffer, opts);
    }

    static fromBuffer(buffer, opts = {}) {
      const psbtBase = bip174_1.Psbt.fromBuffer(buffer, transactionFromBuffer);
      const psbt = new Psbt(opts, psbtBase);
      checkTxForDupeIns(psbt.__CACHE.__TX, psbt.__CACHE);
      return psbt;
    }

    get inputCount() {
      return this.data.inputs.length;
    }

    get version() {
      return this.__CACHE.__TX.version;
    }

    set version(version) {
      this.setVersion(version);
    }

    get locktime() {
      return this.__CACHE.__TX.locktime;
    }

    set locktime(locktime) {
      this.setLocktime(locktime);
    }

    get txInputs() {
      return this.__CACHE.__TX.ins.map(input => ({
        hash: (0, bufferutils_1.cloneBuffer)(input.hash),
        index: input.index,
        sequence: input.sequence
      }));
    }

    get txOutputs() {
      return this.__CACHE.__TX.outs.map(output => {
        let address;

        try {
          address = (0, address_1.fromOutputScript)(output.script, this.opts.network);
        } catch (_) {}

        return {
          script: (0, bufferutils_1.cloneBuffer)(output.script),
          value: output.value,
          address
        };
      });
    }

    combine(...those) {
      this.data.combine(...those.map(o => o.data));
      return this;
    }

    clone() {
      // TODO: more efficient cloning
      const res = Psbt.fromBuffer(this.data.toBuffer());
      res.opts = JSON.parse(JSON.stringify(this.opts));
      return res;
    }

    setMaximumFeeRate(satoshiPerByte) {
      check32Bit(satoshiPerByte); // 42.9 BTC per byte IS excessive... so throw

      this.opts.maximumFeeRate = satoshiPerByte;
    }

    setVersion(version) {
      check32Bit(version);
      checkInputsForPartialSig(this.data.inputs, 'setVersion');
      const c = this.__CACHE;
      c.__TX.version = version;
      c.__EXTRACTED_TX = undefined;
      return this;
    }

    setLocktime(locktime) {
      check32Bit(locktime);
      checkInputsForPartialSig(this.data.inputs, 'setLocktime');
      const c = this.__CACHE;
      c.__TX.locktime = locktime;
      c.__EXTRACTED_TX = undefined;
      return this;
    }

    setInputSequence(inputIndex, sequence) {
      check32Bit(sequence);
      checkInputsForPartialSig(this.data.inputs, 'setInputSequence');
      const c = this.__CACHE;

      if (c.__TX.ins.length <= inputIndex) {
        throw new Error('Input index too high');
      }

      c.__TX.ins[inputIndex].sequence = sequence;
      c.__EXTRACTED_TX = undefined;
      return this;
    }

    addInputs(inputDatas) {
      inputDatas.forEach(inputData => this.addInput(inputData));
      return this;
    }

    addInput(inputData) {
      if (arguments.length > 1 || !inputData || inputData.hash === undefined || inputData.index === undefined) {
        throw new Error(`Invalid arguments for Psbt.addInput. ` + `Requires single object with at least [hash] and [index]`);
      }

      checkInputsForPartialSig(this.data.inputs, 'addInput');
      if (inputData.witnessScript) checkInvalidP2WSH(inputData.witnessScript);
      const c = this.__CACHE;
      this.data.addInput(inputData);
      const txIn = c.__TX.ins[c.__TX.ins.length - 1];
      checkTxInputCache(c, txIn);
      const inputIndex = this.data.inputs.length - 1;
      const input = this.data.inputs[inputIndex];

      if (input.nonWitnessUtxo) {
        addNonWitnessTxCache(this.__CACHE, input, inputIndex);
      }

      c.__FEE = undefined;
      c.__FEE_RATE = undefined;
      c.__EXTRACTED_TX = undefined;
      return this;
    }

    addOutputs(outputDatas) {
      outputDatas.forEach(outputData => this.addOutput(outputData));
      return this;
    }

    addOutput(outputData) {
      if (arguments.length > 1 || !outputData || outputData.value === undefined || outputData.address === undefined && outputData.script === undefined) {
        throw new Error(`Invalid arguments for Psbt.addOutput. ` + `Requires single object with at least [script or address] and [value]`);
      }

      checkInputsForPartialSig(this.data.inputs, 'addOutput');
      const {
        address
      } = outputData;

      if (typeof address === 'string') {
        const {
          network
        } = this.opts;
        const script = (0, address_1.toOutputScript)(address, network);
        outputData = Object.assign(outputData, {
          script
        });
      }

      const c = this.__CACHE;
      this.data.addOutput(outputData);
      c.__FEE = undefined;
      c.__FEE_RATE = undefined;
      c.__EXTRACTED_TX = undefined;
      return this;
    }

    extractTransaction(disableFeeCheck) {
      if (!this.data.inputs.every(isFinalized)) throw new Error('Not finalized');
      const c = this.__CACHE;

      if (!disableFeeCheck) {
        checkFees(this, c, this.opts);
      }

      if (c.__EXTRACTED_TX) return c.__EXTRACTED_TX;

      const tx = c.__TX.clone();

      inputFinalizeGetAmts(this.data.inputs, tx, c, true);
      return tx;
    }

    getFeeRate() {
      return getTxCacheValue('__FEE_RATE', 'fee rate', this.data.inputs, this.__CACHE);
    }

    getFee() {
      return getTxCacheValue('__FEE', 'fee', this.data.inputs, this.__CACHE);
    }

    finalizeAllInputs() {
      (0, utils_1.checkForInput)(this.data.inputs, 0); // making sure we have at least one

      range(this.data.inputs.length).forEach(idx => this.finalizeInput(idx));
      return this;
    }

    finalizeInput(inputIndex, finalScriptsFunc = getFinalScripts) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      const {
        script,
        isP2SH,
        isP2WSH,
        isSegwit
      } = getScriptFromInput(inputIndex, input, this.__CACHE);
      if (!script) throw new Error(`No script found for input #${inputIndex}`);
      checkPartialSigSighashes(input);
      const {
        finalScriptSig,
        finalScriptWitness
      } = finalScriptsFunc(inputIndex, input, script, isSegwit, isP2SH, isP2WSH);
      if (finalScriptSig) this.data.updateInput(inputIndex, {
        finalScriptSig
      });
      if (finalScriptWitness) this.data.updateInput(inputIndex, {
        finalScriptWitness
      });
      if (!finalScriptSig && !finalScriptWitness) throw new Error(`Unknown error finalizing input #${inputIndex}`);
      this.data.clearFinalizedInput(inputIndex);
      return this;
    }

    getInputType(inputIndex) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      const script = getScriptFromUtxo(inputIndex, input, this.__CACHE);
      const result = getMeaningfulScript(script, inputIndex, 'input', input.redeemScript || redeemFromFinalScriptSig(input.finalScriptSig), input.witnessScript || redeemFromFinalWitnessScript(input.finalScriptWitness));
      const type = result.type === 'raw' ? '' : result.type + '-';
      const mainType = classifyScript(result.meaningfulScript);
      return type + mainType;
    }

    inputHasPubkey(inputIndex, pubkey) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      return pubkeyInInput(pubkey, input, inputIndex, this.__CACHE);
    }

    inputHasHDKey(inputIndex, root) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      const derivationIsMine = bip32DerivationIsMine(root);
      return !!input.bip32Derivation && input.bip32Derivation.some(derivationIsMine);
    }

    outputHasPubkey(outputIndex, pubkey) {
      const output = (0, utils_1.checkForOutput)(this.data.outputs, outputIndex);
      return pubkeyInOutput(pubkey, output, outputIndex, this.__CACHE);
    }

    outputHasHDKey(outputIndex, root) {
      const output = (0, utils_1.checkForOutput)(this.data.outputs, outputIndex);
      const derivationIsMine = bip32DerivationIsMine(root);
      return !!output.bip32Derivation && output.bip32Derivation.some(derivationIsMine);
    }

    validateSignaturesOfAllInputs(validator) {
      (0, utils_1.checkForInput)(this.data.inputs, 0); // making sure we have at least one

      const results = range(this.data.inputs.length).map(idx => this.validateSignaturesOfInput(idx, validator));
      return results.reduce((final, res) => res === true && final, true);
    }

    validateSignaturesOfInput(inputIndex, validator, pubkey) {
      const input = this.data.inputs[inputIndex];
      const partialSig = (input || {}).partialSig;
      if (!input || !partialSig || partialSig.length < 1) throw new Error('No signatures to validate');
      if (typeof validator !== 'function') throw new Error('Need validator function to validate signatures');
      const mySigs = pubkey ? partialSig.filter(sig => sig.pubkey.equals(pubkey)) : partialSig;
      if (mySigs.length < 1) throw new Error('No signatures for this pubkey');
      const results = [];
      let hashCache;
      let scriptCache;
      let sighashCache;

      for (const pSig of mySigs) {
        const sig = bscript.signature.decode(pSig.signature);
        const {
          hash,
          script
        } = sighashCache !== sig.hashType ? getHashForSig(inputIndex, Object.assign({}, input, {
          sighashType: sig.hashType
        }), this.__CACHE, true) : {
          hash: hashCache,
          script: scriptCache
        };
        sighashCache = sig.hashType;
        hashCache = hash;
        scriptCache = script;
        checkScriptForPubkey(pSig.pubkey, script, 'verify');
        results.push(validator(pSig.pubkey, hash, sig.signature));
      }

      return results.every(res => res === true);
    }

    signAllInputsHD(hdKeyPair, sighashTypes = [transaction_1.Transaction.SIGHASH_ALL]) {
      if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
        throw new Error('Need HDSigner to sign input');
      }

      const results = [];

      for (const i of range(this.data.inputs.length)) {
        try {
          this.signInputHD(i, hdKeyPair, sighashTypes);
          results.push(true);
        } catch (err) {
          results.push(false);
        }
      }

      if (results.every(v => v === false)) {
        throw new Error('No inputs were signed');
      }

      return this;
    }

    signAllInputsHDAsync(hdKeyPair, sighashTypes = [transaction_1.Transaction.SIGHASH_ALL]) {
      return new Promise((resolve, reject) => {
        if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
          return reject(new Error('Need HDSigner to sign input'));
        }

        const results = [];
        const promises = [];

        for (const i of range(this.data.inputs.length)) {
          promises.push(this.signInputHDAsync(i, hdKeyPair, sighashTypes).then(() => {
            results.push(true);
          }, () => {
            results.push(false);
          }));
        }

        return Promise.all(promises).then(() => {
          if (results.every(v => v === false)) {
            return reject(new Error('No inputs were signed'));
          }

          resolve();
        });
      });
    }

    signInputHD(inputIndex, hdKeyPair, sighashTypes = [transaction_1.Transaction.SIGHASH_ALL]) {
      if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
        throw new Error('Need HDSigner to sign input');
      }

      const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
      signers.forEach(signer => this.signInput(inputIndex, signer, sighashTypes));
      return this;
    }

    signInputHDAsync(inputIndex, hdKeyPair, sighashTypes = [transaction_1.Transaction.SIGHASH_ALL]) {
      return new Promise((resolve, reject) => {
        if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
          return reject(new Error('Need HDSigner to sign input'));
        }

        const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
        const promises = signers.map(signer => this.signInputAsync(inputIndex, signer, sighashTypes));
        return Promise.all(promises).then(() => {
          resolve();
        }).catch(reject);
      });
    }

    signAllInputs(keyPair, sighashTypes = [transaction_1.Transaction.SIGHASH_ALL]) {
      if (!keyPair || !keyPair.publicKey) throw new Error('Need Signer to sign input'); // TODO: Add a pubkey/pubkeyhash cache to each input
      // as input information is added, then eventually
      // optimize this method.

      const results = [];

      for (const i of range(this.data.inputs.length)) {
        try {
          this.signInput(i, keyPair, sighashTypes);
          results.push(true);
        } catch (err) {
          results.push(false);
        }
      }

      if (results.every(v => v === false)) {
        throw new Error('No inputs were signed');
      }

      return this;
    }

    signAllInputsAsync(keyPair, sighashTypes = [transaction_1.Transaction.SIGHASH_ALL]) {
      return new Promise((resolve, reject) => {
        if (!keyPair || !keyPair.publicKey) return reject(new Error('Need Signer to sign input')); // TODO: Add a pubkey/pubkeyhash cache to each input
        // as input information is added, then eventually
        // optimize this method.

        const results = [];
        const promises = [];

        for (const [i] of this.data.inputs.entries()) {
          promises.push(this.signInputAsync(i, keyPair, sighashTypes).then(() => {
            results.push(true);
          }, () => {
            results.push(false);
          }));
        }

        return Promise.all(promises).then(() => {
          if (results.every(v => v === false)) {
            return reject(new Error('No inputs were signed'));
          }

          resolve();
        });
      });
    }

    signInput(inputIndex, keyPair, sighashTypes = [transaction_1.Transaction.SIGHASH_ALL]) {
      if (!keyPair || !keyPair.publicKey) throw new Error('Need Signer to sign input');
      const {
        hash,
        sighashType
      } = getHashAndSighashType(this.data.inputs, inputIndex, keyPair.publicKey, this.__CACHE, sighashTypes);
      const partialSig = [{
        pubkey: keyPair.publicKey,
        signature: bscript.signature.encode(keyPair.sign(hash), sighashType)
      }];
      this.data.updateInput(inputIndex, {
        partialSig
      });
      return this;
    }

    signInputAsync(inputIndex, keyPair, sighashTypes = [transaction_1.Transaction.SIGHASH_ALL]) {
      return Promise.resolve().then(() => {
        if (!keyPair || !keyPair.publicKey) throw new Error('Need Signer to sign input');
        const {
          hash,
          sighashType
        } = getHashAndSighashType(this.data.inputs, inputIndex, keyPair.publicKey, this.__CACHE, sighashTypes);
        return Promise.resolve(keyPair.sign(hash)).then(signature => {
          const partialSig = [{
            pubkey: keyPair.publicKey,
            signature: bscript.signature.encode(signature, sighashType)
          }];
          this.data.updateInput(inputIndex, {
            partialSig
          });
        });
      });
    }

    toBuffer() {
      checkCache(this.__CACHE);
      return this.data.toBuffer();
    }

    toHex() {
      checkCache(this.__CACHE);
      return this.data.toHex();
    }

    toBase64() {
      checkCache(this.__CACHE);
      return this.data.toBase64();
    }

    updateGlobal(updateData) {
      this.data.updateGlobal(updateData);
      return this;
    }

    updateInput(inputIndex, updateData) {
      if (updateData.witnessScript) checkInvalidP2WSH(updateData.witnessScript);
      this.data.updateInput(inputIndex, updateData);

      if (updateData.nonWitnessUtxo) {
        addNonWitnessTxCache(this.__CACHE, this.data.inputs[inputIndex], inputIndex);
      }

      return this;
    }

    updateOutput(outputIndex, updateData) {
      this.data.updateOutput(outputIndex, updateData);
      return this;
    }

    addUnknownKeyValToGlobal(keyVal) {
      this.data.addUnknownKeyValToGlobal(keyVal);
      return this;
    }

    addUnknownKeyValToInput(inputIndex, keyVal) {
      this.data.addUnknownKeyValToInput(inputIndex, keyVal);
      return this;
    }

    addUnknownKeyValToOutput(outputIndex, keyVal) {
      this.data.addUnknownKeyValToOutput(outputIndex, keyVal);
      return this;
    }

    clearFinalizedInput(inputIndex) {
      this.data.clearFinalizedInput(inputIndex);
      return this;
    }

  }

  exports.Psbt = Psbt;
  /**
   * This function is needed to pass to the bip174 base class's fromBuffer.
   * It takes the "transaction buffer" portion of the psbt buffer and returns a
   * Transaction (From the bip174 library) interface.
   */

  const transactionFromBuffer = buffer => new PsbtTransaction(buffer);
  /**
   * This class implements the Transaction interface from bip174 library.
   * It contains a bitcoinjs-lib Transaction object.
   */


  class PsbtTransaction {
    constructor(buffer = Buffer$2.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
      this.tx = transaction_1.Transaction.fromBuffer(buffer);
      checkTxEmpty(this.tx);
      Object.defineProperty(this, 'tx', {
        enumerable: false,
        writable: true
      });
    }

    getInputOutputCounts() {
      return {
        inputCount: this.tx.ins.length,
        outputCount: this.tx.outs.length
      };
    }

    addInput(input) {
      if (input.hash === undefined || input.index === undefined || !isBuffer(input.hash) && typeof input.hash !== 'string' || typeof input.index !== 'number') {
        throw new Error('Error adding input.');
      }

      const hash = typeof input.hash === 'string' ? (0, bufferutils_1.reverseBuffer)(Buffer$2.from(input.hash, 'hex')) : input.hash;
      this.tx.addInput(hash, input.index, input.sequence);
    }

    addOutput(output) {
      if (output.script === undefined || output.value === undefined || !isBuffer(output.script) || typeof output.value !== 'number') {
        throw new Error('Error adding output.');
      }

      this.tx.addOutput(output.script, output.value);
    }

    toBuffer() {
      return this.tx.toBuffer();
    }

  }

  function canFinalize(input, script, scriptType) {
    switch (scriptType) {
      case 'pubkey':
      case 'pubkeyhash':
      case 'witnesspubkeyhash':
        return hasSigs(1, input.partialSig);

      case 'multisig':
        const p2ms = payments.p2ms({
          output: script
        });
        return hasSigs(p2ms.m, input.partialSig, p2ms.pubkeys);

      default:
        return false;
    }
  }

  function checkCache(cache) {
    if (cache.__UNSAFE_SIGN_NONSEGWIT !== false) {
      throw new Error('Not BIP174 compliant, can not export');
    }
  }

  function hasSigs(neededSigs, partialSig, pubkeys) {
    if (!partialSig) return false;
    let sigs;

    if (pubkeys) {
      sigs = pubkeys.map(pkey => {
        const pubkey = compressPubkey(pkey);
        return partialSig.find(pSig => pSig.pubkey.equals(pubkey));
      }).filter(v => !!v);
    } else {
      sigs = partialSig;
    }

    if (sigs.length > neededSigs) throw new Error('Too many signatures');
    return sigs.length === neededSigs;
  }

  function isFinalized(input) {
    return !!input.finalScriptSig || !!input.finalScriptWitness;
  }

  function isPaymentFactory(payment) {
    return script => {
      try {
        payment({
          output: script
        });
        return true;
      } catch (err) {
        return false;
      }
    };
  }

  const isP2MS = isPaymentFactory(payments.p2ms);
  const isP2PK = isPaymentFactory(payments.p2pk);
  const isP2PKH = isPaymentFactory(payments.p2pkh);
  const isP2WPKH = isPaymentFactory(payments.p2wpkh);
  const isP2WSHScript = isPaymentFactory(payments.p2wsh);
  const isP2SHScript = isPaymentFactory(payments.p2sh);

  function bip32DerivationIsMine(root) {
    return d => {
      if (!d.masterFingerprint.equals(root.fingerprint)) return false;
      if (!root.derivePath(d.path).publicKey.equals(d.pubkey)) return false;
      return true;
    };
  }

  function check32Bit(num) {
    if (typeof num !== 'number' || num !== Math.floor(num) || num > 0xffffffff || num < 0) {
      throw new Error('Invalid 32 bit integer');
    }
  }

  function checkFees(psbt, cache, opts) {
    const feeRate = cache.__FEE_RATE || psbt.getFeeRate();

    const vsize = cache.__EXTRACTED_TX.virtualSize();

    const satoshis = feeRate * vsize;

    if (feeRate >= opts.maximumFeeRate) {
      throw new Error(`Warning: You are paying around ${(satoshis / 1e8).toFixed(8)} in ` + `fees, which is ${feeRate} satoshi per byte for a transaction ` + `with a VSize of ${vsize} bytes (segwit counted as 0.25 byte per ` + `byte). Use setMaximumFeeRate method to raise your threshold, or ` + `pass true to the first arg of extractTransaction.`);
    }
  }

  function checkInputsForPartialSig(inputs, action) {
    inputs.forEach(input => {
      let throws = false;
      let pSigs = [];

      if ((input.partialSig || []).length === 0) {
        if (!input.finalScriptSig && !input.finalScriptWitness) return;
        pSigs = getPsigsFromInputFinalScripts(input);
      } else {
        pSigs = input.partialSig;
      }

      pSigs.forEach(pSig => {
        const {
          hashType
        } = bscript.signature.decode(pSig.signature);
        const whitelist = [];
        const isAnyoneCanPay = hashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY;
        if (isAnyoneCanPay) whitelist.push('addInput');
        const hashMod = hashType & 0x1f;

        switch (hashMod) {
          case transaction_1.Transaction.SIGHASH_ALL:
            break;

          case transaction_1.Transaction.SIGHASH_SINGLE:
          case transaction_1.Transaction.SIGHASH_NONE:
            whitelist.push('addOutput');
            whitelist.push('setInputSequence');
            break;
        }

        if (whitelist.indexOf(action) === -1) {
          throws = true;
        }
      });

      if (throws) {
        throw new Error('Can not modify transaction, signatures exist.');
      }
    });
  }

  function checkPartialSigSighashes(input) {
    if (!input.sighashType || !input.partialSig) return;
    const {
      partialSig,
      sighashType
    } = input;
    partialSig.forEach(pSig => {
      const {
        hashType
      } = bscript.signature.decode(pSig.signature);

      if (sighashType !== hashType) {
        throw new Error('Signature sighash does not match input sighash type');
      }
    });
  }

  function checkScriptForPubkey(pubkey, script, action) {
    if (!pubkeyInScript(pubkey, script)) {
      throw new Error(`Can not ${action} for this input with the key ${pubkey.toString('hex')}`);
    }
  }

  function checkTxEmpty(tx) {
    const isEmpty = tx.ins.every(input => input.script && input.script.length === 0 && input.witness && input.witness.length === 0);

    if (!isEmpty) {
      throw new Error('Format Error: Transaction ScriptSigs are not empty');
    }
  }

  function checkTxForDupeIns(tx, cache) {
    tx.ins.forEach(input => {
      checkTxInputCache(cache, input);
    });
  }

  function checkTxInputCache(cache, input) {
    const key = (0, bufferutils_1.reverseBuffer)(Buffer$2.from(input.hash)).toString('hex') + ':' + input.index;
    if (cache.__TX_IN_CACHE[key]) throw new Error('Duplicate input detected.');
    cache.__TX_IN_CACHE[key] = 1;
  }

  function scriptCheckerFactory(payment, paymentScriptName) {
    return (inputIndex, scriptPubKey, redeemScript, ioType) => {
      const redeemScriptOutput = payment({
        redeem: {
          output: redeemScript
        }
      }).output;

      if (!scriptPubKey.equals(redeemScriptOutput)) {
        throw new Error(`${paymentScriptName} for ${ioType} #${inputIndex} doesn't match the scriptPubKey in the prevout`);
      }
    };
  }

  const checkRedeemScript = scriptCheckerFactory(payments.p2sh, 'Redeem script');
  const checkWitnessScript = scriptCheckerFactory(payments.p2wsh, 'Witness script');

  function getTxCacheValue(key, name, inputs, c) {
    if (!inputs.every(isFinalized)) throw new Error(`PSBT must be finalized to calculate ${name}`);
    if (key === '__FEE_RATE' && c.__FEE_RATE) return c.__FEE_RATE;
    if (key === '__FEE' && c.__FEE) return c.__FEE;
    let tx;
    let mustFinalize = true;

    if (c.__EXTRACTED_TX) {
      tx = c.__EXTRACTED_TX;
      mustFinalize = false;
    } else {
      tx = c.__TX.clone();
    }

    inputFinalizeGetAmts(inputs, tx, c, mustFinalize);
    if (key === '__FEE_RATE') return c.__FEE_RATE;else if (key === '__FEE') return c.__FEE;
  }

  function getFinalScripts(inputIndex, input, script, isSegwit, isP2SH, isP2WSH) {
    const scriptType = classifyScript(script);
    if (!canFinalize(input, script, scriptType)) throw new Error(`Can not finalize input #${inputIndex}`);
    return prepareFinalScripts(script, scriptType, input.partialSig, isSegwit, isP2SH, isP2WSH);
  }

  function prepareFinalScripts(script, scriptType, partialSig, isSegwit, isP2SH, isP2WSH) {
    let finalScriptSig;
    let finalScriptWitness; // Wow, the payments API is very handy

    const payment = getPayment(script, scriptType, partialSig);
    const p2wsh = !isP2WSH ? null : payments.p2wsh({
      redeem: payment
    });
    const p2sh = !isP2SH ? null : payments.p2sh({
      redeem: p2wsh || payment
    });

    if (isSegwit) {
      if (p2wsh) {
        finalScriptWitness = witnessStackToScriptWitness(p2wsh.witness);
      } else {
        finalScriptWitness = witnessStackToScriptWitness(payment.witness);
      }

      if (p2sh) {
        finalScriptSig = p2sh.input;
      }
    } else {
      if (p2sh) {
        finalScriptSig = p2sh.input;
      } else {
        finalScriptSig = payment.input;
      }
    }

    return {
      finalScriptSig,
      finalScriptWitness
    };
  }

  function getHashAndSighashType(inputs, inputIndex, pubkey, cache, sighashTypes) {
    const input = (0, utils_1.checkForInput)(inputs, inputIndex);
    const {
      hash,
      sighashType,
      script
    } = getHashForSig(inputIndex, input, cache, false, sighashTypes);
    checkScriptForPubkey(pubkey, script, 'sign');
    return {
      hash,
      sighashType
    };
  }

  function getHashForSig(inputIndex, input, cache, forValidate, sighashTypes) {
    const unsignedTx = cache.__TX;
    const sighashType = input.sighashType || transaction_1.Transaction.SIGHASH_ALL;

    if (sighashTypes && sighashTypes.indexOf(sighashType) < 0) {
      const str = sighashTypeToString(sighashType);
      throw new Error(`Sighash type is not allowed. Retry the sign method passing the ` + `sighashTypes array of whitelisted types. Sighash type: ${str}`);
    }

    let hash;
    let prevout;

    if (input.nonWitnessUtxo) {
      const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
      const prevoutHash = unsignedTx.ins[inputIndex].hash;
      const utxoHash = nonWitnessUtxoTx.getHash(); // If a non-witness UTXO is provided, its hash must match the hash specified in the prevout

      if (!prevoutHash.equals(utxoHash)) {
        throw new Error(`Non-witness UTXO hash for input #${inputIndex} doesn't match the hash specified in the prevout`);
      }

      const prevoutIndex = unsignedTx.ins[inputIndex].index;
      prevout = nonWitnessUtxoTx.outs[prevoutIndex];
    } else if (input.witnessUtxo) {
      prevout = input.witnessUtxo;
    } else {
      throw new Error('Need a Utxo input item for signing');
    }

    const {
      meaningfulScript,
      type
    } = getMeaningfulScript(prevout.script, inputIndex, 'input', input.redeemScript, input.witnessScript);

    if (['p2sh-p2wsh', 'p2wsh'].indexOf(type) >= 0) {
      hash = unsignedTx.hashForWitnessV0(inputIndex, meaningfulScript, prevout.value, sighashType);
    } else if (isP2WPKH(meaningfulScript)) {
      // P2WPKH uses the P2PKH template for prevoutScript when signing
      const signingScript = payments.p2pkh({
        hash: meaningfulScript.slice(2)
      }).output;
      hash = unsignedTx.hashForWitnessV0(inputIndex, signingScript, prevout.value, sighashType);
    } else {
      // non-segwit
      if (input.nonWitnessUtxo === undefined && cache.__UNSAFE_SIGN_NONSEGWIT === false) throw new Error(`Input #${inputIndex} has witnessUtxo but non-segwit script: ` + `${meaningfulScript.toString('hex')}`);
      if (!forValidate && cache.__UNSAFE_SIGN_NONSEGWIT !== false) console.warn('Warning: Signing non-segwit inputs without the full parent transaction ' + 'means there is a chance that a miner could feed you incorrect information ' + "to trick you into paying large fees. This behavior is the same as Psbt's predecesor " + '(TransactionBuilder - now removed) when signing non-segwit scripts. You are not ' + 'able to export this Psbt with toBuffer|toBase64|toHex since it is not ' + 'BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n' + '*********************');
      hash = unsignedTx.hashForSignature(inputIndex, meaningfulScript, sighashType);
    }

    return {
      script: meaningfulScript,
      sighashType,
      hash
    };
  }

  function getPayment(script, scriptType, partialSig) {
    let payment;

    switch (scriptType) {
      case 'multisig':
        const sigs = getSortedSigs(script, partialSig);
        payment = payments.p2ms({
          output: script,
          signatures: sigs
        });
        break;

      case 'pubkey':
        payment = payments.p2pk({
          output: script,
          signature: partialSig[0].signature
        });
        break;

      case 'pubkeyhash':
        payment = payments.p2pkh({
          output: script,
          pubkey: partialSig[0].pubkey,
          signature: partialSig[0].signature
        });
        break;

      case 'witnesspubkeyhash':
        payment = payments.p2wpkh({
          output: script,
          pubkey: partialSig[0].pubkey,
          signature: partialSig[0].signature
        });
        break;
    }

    return payment;
  }

  function getPsigsFromInputFinalScripts(input) {
    const scriptItems = !input.finalScriptSig ? [] : bscript.decompile(input.finalScriptSig) || [];
    const witnessItems = !input.finalScriptWitness ? [] : bscript.decompile(input.finalScriptWitness) || [];
    return scriptItems.concat(witnessItems).filter(item => {
      return isBuffer(item) && bscript.isCanonicalScriptSignature(item);
    }).map(sig => ({
      signature: sig
    }));
  }

  function getScriptFromInput(inputIndex, input, cache) {
    const unsignedTx = cache.__TX;
    const res = {
      script: null,
      isSegwit: false,
      isP2SH: false,
      isP2WSH: false
    };
    res.isP2SH = !!input.redeemScript;
    res.isP2WSH = !!input.witnessScript;

    if (input.witnessScript) {
      res.script = input.witnessScript;
    } else if (input.redeemScript) {
      res.script = input.redeemScript;
    } else {
      if (input.nonWitnessUtxo) {
        const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
        const prevoutIndex = unsignedTx.ins[inputIndex].index;
        res.script = nonWitnessUtxoTx.outs[prevoutIndex].script;
      } else if (input.witnessUtxo) {
        res.script = input.witnessUtxo.script;
      }
    }

    if (input.witnessScript || isP2WPKH(res.script)) {
      res.isSegwit = true;
    }

    return res;
  }

  function getSignersFromHD(inputIndex, inputs, hdKeyPair) {
    const input = (0, utils_1.checkForInput)(inputs, inputIndex);

    if (!input.bip32Derivation || input.bip32Derivation.length === 0) {
      throw new Error('Need bip32Derivation to sign with HD');
    }

    const myDerivations = input.bip32Derivation.map(bipDv => {
      if (bipDv.masterFingerprint.equals(hdKeyPair.fingerprint)) {
        return bipDv;
      } else {
        return;
      }
    }).filter(v => !!v);

    if (myDerivations.length === 0) {
      throw new Error('Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint');
    }

    const signers = myDerivations.map(bipDv => {
      const node = hdKeyPair.derivePath(bipDv.path);

      if (!bipDv.pubkey.equals(node.publicKey)) {
        throw new Error('pubkey did not match bip32Derivation');
      }

      return node;
    });
    return signers;
  }

  function getSortedSigs(script, partialSig) {
    const p2ms = payments.p2ms({
      output: script
    }); // for each pubkey in order of p2ms script

    return p2ms.pubkeys.map(pk => {
      // filter partialSig array by pubkey being equal
      return (partialSig.filter(ps => {
        return ps.pubkey.equals(pk);
      })[0] || {}).signature; // Any pubkey without a match will return undefined
      // this last filter removes all the undefined items in the array.
    }).filter(v => !!v);
  }

  function scriptWitnessToWitnessStack(buffer) {
    let offset = 0;

    function readSlice(n) {
      offset += n;
      return buffer.slice(offset - n, offset);
    }

    function readVarInt() {
      const vi = varuint.decode(buffer, offset);
      offset += varuint.decode.bytes;
      return vi;
    }

    function readVarSlice() {
      return readSlice(readVarInt());
    }

    function readVector() {
      const count = readVarInt();
      const vector = [];

      for (let i = 0; i < count; i++) vector.push(readVarSlice());

      return vector;
    }

    return readVector();
  }

  function sighashTypeToString(sighashType) {
    let text = sighashType & transaction_1.Transaction.SIGHASH_ANYONECANPAY ? 'SIGHASH_ANYONECANPAY | ' : '';
    const sigMod = sighashType & 0x1f;

    switch (sigMod) {
      case transaction_1.Transaction.SIGHASH_ALL:
        text += 'SIGHASH_ALL';
        break;

      case transaction_1.Transaction.SIGHASH_SINGLE:
        text += 'SIGHASH_SINGLE';
        break;

      case transaction_1.Transaction.SIGHASH_NONE:
        text += 'SIGHASH_NONE';
        break;
    }

    return text;
  }

  function witnessStackToScriptWitness(witness) {
    let buffer = Buffer$2.allocUnsafe(0);

    function writeSlice(slice) {
      buffer = Buffer$2.concat([buffer, Buffer$2.from(slice)]);
    }

    function writeVarInt(i) {
      const currentLen = buffer.length;
      const varintLen = varuint.encodingLength(i);
      buffer = Buffer$2.concat([buffer, Buffer$2.allocUnsafe(varintLen)]);
      varuint.encode(i, buffer, currentLen);
    }

    function writeVarSlice(slice) {
      writeVarInt(slice.length);
      writeSlice(slice);
    }

    function writeVector(vector) {
      writeVarInt(vector.length);
      vector.forEach(writeVarSlice);
    }

    writeVector(witness);
    return buffer;
  }

  function addNonWitnessTxCache(cache, input, inputIndex) {
    cache.__NON_WITNESS_UTXO_BUF_CACHE[inputIndex] = input.nonWitnessUtxo;
    const tx = transaction_1.Transaction.fromBuffer(input.nonWitnessUtxo);
    cache.__NON_WITNESS_UTXO_TX_CACHE[inputIndex] = tx;
    const self = cache;
    const selfIndex = inputIndex;
    delete input.nonWitnessUtxo;
    Object.defineProperty(input, 'nonWitnessUtxo', {
      enumerable: true,

      get() {
        const buf = self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex];
        const txCache = self.__NON_WITNESS_UTXO_TX_CACHE[selfIndex];

        if (buf !== undefined) {
          return buf;
        } else {
          const newBuf = txCache.toBuffer();
          self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = newBuf;
          return newBuf;
        }
      },

      set(data) {
        self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = data;
      }

    });
  }

  function inputFinalizeGetAmts(inputs, tx, cache, mustFinalize) {
    let inputAmount = 0;
    inputs.forEach((input, idx) => {
      if (mustFinalize && input.finalScriptSig) tx.ins[idx].script = input.finalScriptSig;

      if (mustFinalize && input.finalScriptWitness) {
        tx.ins[idx].witness = scriptWitnessToWitnessStack(input.finalScriptWitness);
      }

      if (input.witnessUtxo) {
        inputAmount += input.witnessUtxo.value;
      } else if (input.nonWitnessUtxo) {
        const nwTx = nonWitnessUtxoTxFromCache(cache, input, idx);
        const vout = tx.ins[idx].index;
        const out = nwTx.outs[vout];
        inputAmount += out.value;
      }
    });
    const outputAmount = tx.outs.reduce((total, o) => total + o.value, 0);
    const fee = inputAmount - outputAmount;

    if (fee < 0) {
      throw new Error('Outputs are spending more than Inputs');
    }

    const bytes = tx.virtualSize();
    cache.__FEE = fee;
    cache.__EXTRACTED_TX = tx;
    cache.__FEE_RATE = Math.floor(fee / bytes);
  }

  function nonWitnessUtxoTxFromCache(cache, input, inputIndex) {
    const c = cache.__NON_WITNESS_UTXO_TX_CACHE;

    if (!c[inputIndex]) {
      addNonWitnessTxCache(cache, input, inputIndex);
    }

    return c[inputIndex];
  }

  function getScriptFromUtxo(inputIndex, input, cache) {
    if (input.witnessUtxo !== undefined) {
      return input.witnessUtxo.script;
    } else if (input.nonWitnessUtxo !== undefined) {
      const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
      return nonWitnessUtxoTx.outs[cache.__TX.ins[inputIndex].index].script;
    } else {
      throw new Error("Can't find pubkey in input without Utxo data");
    }
  }

  function pubkeyInInput(pubkey, input, inputIndex, cache) {
    const script = getScriptFromUtxo(inputIndex, input, cache);
    const {
      meaningfulScript
    } = getMeaningfulScript(script, inputIndex, 'input', input.redeemScript, input.witnessScript);
    return pubkeyInScript(pubkey, meaningfulScript);
  }

  function pubkeyInOutput(pubkey, output, outputIndex, cache) {
    const script = cache.__TX.outs[outputIndex].script;
    const {
      meaningfulScript
    } = getMeaningfulScript(script, outputIndex, 'output', output.redeemScript, output.witnessScript);
    return pubkeyInScript(pubkey, meaningfulScript);
  }

  function redeemFromFinalScriptSig(finalScript) {
    if (!finalScript) return;
    const decomp = bscript.decompile(finalScript);
    if (!decomp) return;
    const lastItem = decomp[decomp.length - 1];
    if (!isBuffer(lastItem) || isPubkeyLike(lastItem) || isSigLike(lastItem)) return;
    const sDecomp = bscript.decompile(lastItem);
    if (!sDecomp) return;
    return lastItem;
  }

  function redeemFromFinalWitnessScript(finalScript) {
    if (!finalScript) return;
    const decomp = scriptWitnessToWitnessStack(finalScript);
    const lastItem = decomp[decomp.length - 1];
    if (isPubkeyLike(lastItem)) return;
    const sDecomp = bscript.decompile(lastItem);
    if (!sDecomp) return;
    return lastItem;
  }

  function compressPubkey(pubkey) {
    if (pubkey.length === 65) {
      const parity = pubkey[64] & 1;
      const newKey = pubkey.slice(0, 33);
      newKey[0] = 2 | parity;
      return newKey;
    }

    return pubkey.slice();
  }

  function isPubkeyLike(buf) {
    return buf.length === 33 && bscript.isCanonicalPubKey(buf);
  }

  function isSigLike(buf) {
    return bscript.isCanonicalScriptSignature(buf);
  }

  function getMeaningfulScript(script, index, ioType, redeemScript, witnessScript) {
    const isP2SH = isP2SHScript(script);
    const isP2SHP2WSH = isP2SH && redeemScript && isP2WSHScript(redeemScript);
    const isP2WSH = isP2WSHScript(script);
    if (isP2SH && redeemScript === undefined) throw new Error('scriptPubkey is P2SH but redeemScript missing');
    if ((isP2WSH || isP2SHP2WSH) && witnessScript === undefined) throw new Error('scriptPubkey or redeemScript is P2WSH but witnessScript missing');
    let meaningfulScript;

    if (isP2SHP2WSH) {
      meaningfulScript = witnessScript;
      checkRedeemScript(index, script, redeemScript, ioType);
      checkWitnessScript(index, redeemScript, witnessScript, ioType);
      checkInvalidP2WSH(meaningfulScript);
    } else if (isP2WSH) {
      meaningfulScript = witnessScript;
      checkWitnessScript(index, script, witnessScript, ioType);
      checkInvalidP2WSH(meaningfulScript);
    } else if (isP2SH) {
      meaningfulScript = redeemScript;
      checkRedeemScript(index, script, redeemScript, ioType);
    } else {
      meaningfulScript = script;
    }

    return {
      meaningfulScript,
      type: isP2SHP2WSH ? 'p2sh-p2wsh' : isP2SH ? 'p2sh' : isP2WSH ? 'p2wsh' : 'raw'
    };
  }

  function checkInvalidP2WSH(script) {
    if (isP2WPKH(script) || isP2SHScript(script)) {
      throw new Error('P2WPKH or P2SH can not be contained within P2WSH');
    }
  }

  function pubkeyInScript(pubkey, script) {
    const pubkeyHash = (0, crypto_1.hash160)(pubkey);
    const decompiled = bscript.decompile(script);
    if (decompiled === null) throw new Error('Unknown script error');
    return decompiled.some(element => {
      if (typeof element === 'number') return false;
      return element.equals(pubkey) || element.equals(pubkeyHash);
    });
  }

  function classifyScript(script) {
    if (isP2WPKH(script)) return 'witnesspubkeyhash';
    if (isP2PKH(script)) return 'pubkeyhash';
    if (isP2MS(script)) return 'multisig';
    if (isP2PK(script)) return 'pubkey';
    return 'nonstandard';
  }

  function range(n) {
    return [...Array(n).keys()];
  }

  var psbt = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$6 = /*@__PURE__*/getAugmentedNamespace(psbt);

  (function (exports) {

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.Transaction = exports.opcodes = exports.Psbt = exports.Block = exports.script = exports.payments = exports.networks = exports.crypto = exports.address = void 0;
    const address = require$$0$2;
    exports.address = address;
    const crypto = require$$1$4;
    exports.crypto = crypto;
    const networks = networks$1;
    exports.networks = networks;
    const payments = payments$2;
    exports.payments = payments;
    const script = require$$4$3;
    exports.script = script;
    var block_1 = require$$5$1;
    Object.defineProperty(exports, 'Block', {
      enumerable: true,
      get: function () {
        return block_1.Block;
      }
    });
    var psbt_1 = require$$6;
    Object.defineProperty(exports, 'Psbt', {
      enumerable: true,
      get: function () {
        return psbt_1.Psbt;
      }
    });
    var ops_1 = ops;
    Object.defineProperty(exports, 'opcodes', {
      enumerable: true,
      get: function () {
        return ops_1.OPS;
      }
    });
    var transaction_1 = require$$8$1;
    Object.defineProperty(exports, 'Transaction', {
      enumerable: true,
      get: function () {
        return transaction_1.Transaction;
      }
    });
  })(src$1);

  // React
  // import * as Signer from '@fabric/core/types/signer';

  class FaucetDripForm extends FabricComponent__default["default"] {
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

      this.state = merge__default["default"]({
        address: null,
        content: {
          requests: []
        },
        requests: {},
        secret: Actor__namespace.randomBytes(32),
        // solution hash (revealed on trade)
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
        'mainnet': src$1.networks.mainnet,
        'regtest': src$1.networks.regtest,
        'testnet': src$1.networks.testnet
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
      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(fomanticUiReact.Form, {
        ref: this.props.form,
        loading: this.props.state.status === 'LOADING',
        disabled: this.props.state.status === 'LOADING',
        onSubmit: this.props.onSubmit.bind(this)
      }, /*#__PURE__*/React__namespace.createElement(fomanticUiReact.Form.Field, null, /*#__PURE__*/React__namespace.createElement("label", null, "Request a deposit to\u2026"), /*#__PURE__*/React__namespace.createElement("div", {
        className: "ui input"
      }, /*#__PURE__*/React__namespace.createElement(fomanticUiReact.Input, {
        ref: this.props.field,
        action: true,
        type: "text",
        placeholder: "Enter a Bitcoin address here",
        value: this.props.state.recipient || '',
        onChange: this.handleChange.bind(this)
      }), /*#__PURE__*/React__namespace.createElement(fomanticUiReact.Button, {
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
      })), /*#__PURE__*/React__namespace.createElement(FabricComponent__default["default"], null))));
    }

    start() {
      console.log('[FAUCET:DRIPS]', 'Starting component...');
      super.start();
      this.sync();
      return this;
    }

    sync() {
      const preimage = browser('sha256').update(this.state.secret).digest('hex');
      this.setState({
        preimage: preimage
      });
      return this;
    }

    validateAddress(address) {
      try {
        src$1.address.toOutputScript(address, this.networks[this.settings.network]);
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

  // State

  const mapStateToProps = require('../functions/mapStateToProps'); // Components
  // import PortalMenu from './components/PortalMenu';

  class Faucet extends React.Component {
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
      this.bridge = /*#__PURE__*/React__default["default"].createRef();
      this.button = /*#__PURE__*/React__default["default"].createRef();
      this.field = /*#__PURE__*/React__default["default"].createRef();
      this.form = /*#__PURE__*/React__default["default"].createRef();
      this.modal = /*#__PURE__*/React__default["default"].createRef();
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
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("fabric-faucet-home", {
        ref: this.ref
      }, /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Visibility, {
        onBottomPassed: this._handleMastheadBottomPassed.bind(this)
      }, /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Segment, {
        className: "ui inverted vertical masthead center aligned segment"
      }, /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Container, {
        className: "ui text container"
      }, /*#__PURE__*/React__default["default"].createElement("h1", {
        className: "ui inverted header"
      }, /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Icon, {
        name: "tint"
      }), " bitfaucet"), /*#__PURE__*/React__default["default"].createElement("h2", null, "The official ", /*#__PURE__*/React__default["default"].createElement("code", null, "@fabric/playnet"), " faucet."), /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Container, {
        className: "left aligned",
        style: {
          marginTop: '5em'
        }
      }, /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Card, {
        fluid: true
      }, /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Card.Content, null, /*#__PURE__*/React__default["default"].createElement(FaucetDripForm$1, {
        ref: this.form,
        button: this.button,
        field: this.field,
        onSubmit: this.onSubmit.bind(this)
      }))), /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Card, {
        fluid: true,
        style: this.state.debug ? {} : {
          display: 'none'
        }
      }, /*#__PURE__*/React__default["default"].createElement(fomanticUiReact.Card.Content, null))))))));
    }

    _handleBridgeChange(event) {
      console.log('bridge change:', event);
    }

    _handleMastheadBottomPassed(e, {
      calculations
    }) {
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

  reactRedux.connect(mapStateToProps, {
    recipientAddressClear,
    recipientAddressUpdate,
    statusUpdate
  }, null, {
    forwardRef: true
  })(Faucet);

  // Dependencies
  /**
   * The Portal web application.
   */

  class App extends React__namespace.Component {
    constructor(settings) {
      super(settings);
      const state = store.getState();
      this.settings = merge__namespace.merge({}, state, settings); // this.fabric = new Fabric();

      this.state = merge__namespace.merge({
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
      new Actor__default["default"](this.state);
      return this;
    }

    render() {
      return /*#__PURE__*/React__namespace.createElement("react-application", {
        id: "root"
      }, /*#__PURE__*/React__namespace.createElement(BrowserRouter, null, /*#__PURE__*/React__namespace.createElement("div", {
        className: "pusher"
      }, /*#__PURE__*/React__namespace.createElement(Routes, null, /*#__PURE__*/React__namespace.createElement(Route, {
        path: "/",
        exact: true,
        element: /*#__PURE__*/React__namespace.createElement(Home, {
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

  const settings = {}; // TODO: canonicalize settings / state
  // Main Process Definition

  async function main(input = {}) {
    const container = document.getElementById('root');
    const root = client.createRoot(container);
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

})(React, client, reactRedux, merge, Actor, fomanticUIReact, FabricComponent);
