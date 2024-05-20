var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// /Users/vincent/react-blinker/example/node_modules/@dobuki/react-blinker/dist/index.js
var require_dist = __commonJS((exports, module) => {
  /*! For license information please see index.js.LICENSE.txt */
  (function(e, t) {
    typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.imageReactLibrary = t() : e.imageReactLibrary = t();
  })(exports, () => (() => {
    var e = { 287: (e2, t2) => {
      var r2 = Symbol.for("react.element"), n2 = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), d = Symbol.iterator, h = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } }, y = Object.assign, m = {};
      function v(e3, t3, r3) {
        this.props = e3, this.context = t3, this.refs = m, this.updater = r3 || h;
      }
      function g() {
      }
      function b(e3, t3, r3) {
        this.props = e3, this.context = t3, this.refs = m, this.updater = r3 || h;
      }
      v.prototype.isReactComponent = {}, v.prototype.setState = function(e3, t3) {
        if (typeof e3 != "object" && typeof e3 != "function" && e3 != null)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e3, t3, "setState");
      }, v.prototype.forceUpdate = function(e3) {
        this.updater.enqueueForceUpdate(this, e3, "forceUpdate");
      }, g.prototype = v.prototype;
      var S = b.prototype = new g;
      S.constructor = b, y(S, v.prototype), S.isPureReactComponent = true;
      var w = Array.isArray, _ = Object.prototype.hasOwnProperty, C = { current: null }, x = { key: true, ref: true, __self: true, __source: true };
      function E(e3, t3, n3) {
        var o2, s2 = {}, a2 = null, i2 = null;
        if (t3 != null)
          for (o2 in t3.ref !== undefined && (i2 = t3.ref), t3.key !== undefined && (a2 = "" + t3.key), t3)
            _.call(t3, o2) && !x.hasOwnProperty(o2) && (s2[o2] = t3[o2]);
        var c2 = arguments.length - 2;
        if (c2 === 1)
          s2.children = n3;
        else if (1 < c2) {
          for (var u2 = Array(c2), l2 = 0;l2 < c2; l2++)
            u2[l2] = arguments[l2 + 2];
          s2.children = u2;
        }
        if (e3 && e3.defaultProps)
          for (o2 in c2 = e3.defaultProps)
            s2[o2] === undefined && (s2[o2] = c2[o2]);
        return { $$typeof: r2, type: e3, key: a2, ref: i2, props: s2, _owner: C.current };
      }
      function I(e3) {
        return typeof e3 == "object" && e3 !== null && e3.$$typeof === r2;
      }
      var P = /\/+/g;
      function $(e3, t3) {
        return typeof e3 == "object" && e3 !== null && e3.key != null ? function(e4) {
          var t4 = { "=": "=0", ":": "=2" };
          return "$" + e4.replace(/[=:]/g, function(e5) {
            return t4[e5];
          });
        }("" + e3.key) : t3.toString(36);
      }
      function R(e3, t3, o2, s2, a2) {
        var i2 = typeof e3;
        i2 !== "undefined" && i2 !== "boolean" || (e3 = null);
        var c2 = false;
        if (e3 === null)
          c2 = true;
        else
          switch (i2) {
            case "string":
            case "number":
              c2 = true;
              break;
            case "object":
              switch (e3.$$typeof) {
                case r2:
                case n2:
                  c2 = true;
              }
          }
        if (c2)
          return a2 = a2(c2 = e3), e3 = s2 === "" ? "." + $(c2, 0) : s2, w(a2) ? (o2 = "", e3 != null && (o2 = e3.replace(P, "$&/") + "/"), R(a2, t3, o2, "", function(e4) {
            return e4;
          })) : a2 != null && (I(a2) && (a2 = function(e4, t4) {
            return { $$typeof: r2, type: e4.type, key: t4, ref: e4.ref, props: e4.props, _owner: e4._owner };
          }(a2, o2 + (!a2.key || c2 && c2.key === a2.key ? "" : ("" + a2.key).replace(P, "$&/") + "/") + e3)), t3.push(a2)), 1;
        if (c2 = 0, s2 = s2 === "" ? "." : s2 + ":", w(e3))
          for (var u2 = 0;u2 < e3.length; u2++) {
            var l2 = s2 + $(i2 = e3[u2], u2);
            c2 += R(i2, t3, o2, l2, a2);
          }
        else if (l2 = function(e4) {
          return e4 === null || typeof e4 != "object" ? null : typeof (e4 = d && e4[d] || e4["@@iterator"]) == "function" ? e4 : null;
        }(e3), typeof l2 == "function")
          for (e3 = l2.call(e3), u2 = 0;!(i2 = e3.next()).done; )
            c2 += R(i2 = i2.value, t3, o2, l2 = s2 + $(i2, u2++), a2);
        else if (i2 === "object")
          throw t3 = String(e3), Error("Objects are not valid as a React child (found: " + (t3 === "[object Object]" ? "object with keys {" + Object.keys(e3).join(", ") + "}" : t3) + "). If you meant to render a collection of children, use an array instead.");
        return c2;
      }
      function k(e3, t3, r3) {
        if (e3 == null)
          return e3;
        var n3 = [], o2 = 0;
        return R(e3, n3, "", "", function(e4) {
          return t3.call(r3, e4, o2++);
        }), n3;
      }
      function O(e3) {
        if (e3._status === -1) {
          var t3 = e3._result;
          (t3 = t3()).then(function(t4) {
            e3._status !== 0 && e3._status !== -1 || (e3._status = 1, e3._result = t4);
          }, function(t4) {
            e3._status !== 0 && e3._status !== -1 || (e3._status = 2, e3._result = t4);
          }), e3._status === -1 && (e3._status = 0, e3._result = t3);
        }
        if (e3._status === 1)
          return e3._result.default;
        throw e3._result;
      }
      var j = { current: null }, A = { transition: null }, N = { ReactCurrentDispatcher: j, ReactCurrentBatchConfig: A, ReactCurrentOwner: C };
      function T() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      t2.Children = { map: k, forEach: function(e3, t3, r3) {
        k(e3, function() {
          t3.apply(this, arguments);
        }, r3);
      }, count: function(e3) {
        var t3 = 0;
        return k(e3, function() {
          t3++;
        }), t3;
      }, toArray: function(e3) {
        return k(e3, function(e4) {
          return e4;
        }) || [];
      }, only: function(e3) {
        if (!I(e3))
          throw Error("React.Children.only expected to receive a single React element child.");
        return e3;
      } }, t2.Component = v, t2.Fragment = o, t2.Profiler = a, t2.PureComponent = b, t2.StrictMode = s, t2.Suspense = l, t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, t2.act = T, t2.cloneElement = function(e3, t3, n3) {
        if (e3 == null)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e3 + ".");
        var o2 = y({}, e3.props), s2 = e3.key, a2 = e3.ref, i2 = e3._owner;
        if (t3 != null) {
          if (t3.ref !== undefined && (a2 = t3.ref, i2 = C.current), t3.key !== undefined && (s2 = "" + t3.key), e3.type && e3.type.defaultProps)
            var c2 = e3.type.defaultProps;
          for (u2 in t3)
            _.call(t3, u2) && !x.hasOwnProperty(u2) && (o2[u2] = t3[u2] === undefined && c2 !== undefined ? c2[u2] : t3[u2]);
        }
        var u2 = arguments.length - 2;
        if (u2 === 1)
          o2.children = n3;
        else if (1 < u2) {
          c2 = Array(u2);
          for (var l2 = 0;l2 < u2; l2++)
            c2[l2] = arguments[l2 + 2];
          o2.children = c2;
        }
        return { $$typeof: r2, type: e3.type, key: s2, ref: a2, props: o2, _owner: i2 };
      }, t2.createContext = function(e3) {
        return (e3 = { $$typeof: c, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: i, _context: e3 }, e3.Consumer = e3;
      }, t2.createElement = E, t2.createFactory = function(e3) {
        var t3 = E.bind(null, e3);
        return t3.type = e3, t3;
      }, t2.createRef = function() {
        return { current: null };
      }, t2.forwardRef = function(e3) {
        return { $$typeof: u, render: e3 };
      }, t2.isValidElement = I, t2.lazy = function(e3) {
        return { $$typeof: p, _payload: { _status: -1, _result: e3 }, _init: O };
      }, t2.memo = function(e3, t3) {
        return { $$typeof: f, type: e3, compare: t3 === undefined ? null : t3 };
      }, t2.startTransition = function(e3) {
        var t3 = A.transition;
        A.transition = {};
        try {
          e3();
        } finally {
          A.transition = t3;
        }
      }, t2.unstable_act = T, t2.useCallback = function(e3, t3) {
        return j.current.useCallback(e3, t3);
      }, t2.useContext = function(e3) {
        return j.current.useContext(e3);
      }, t2.useDebugValue = function() {
      }, t2.useDeferredValue = function(e3) {
        return j.current.useDeferredValue(e3);
      }, t2.useEffect = function(e3, t3) {
        return j.current.useEffect(e3, t3);
      }, t2.useId = function() {
        return j.current.useId();
      }, t2.useImperativeHandle = function(e3, t3, r3) {
        return j.current.useImperativeHandle(e3, t3, r3);
      }, t2.useInsertionEffect = function(e3, t3) {
        return j.current.useInsertionEffect(e3, t3);
      }, t2.useLayoutEffect = function(e3, t3) {
        return j.current.useLayoutEffect(e3, t3);
      }, t2.useMemo = function(e3, t3) {
        return j.current.useMemo(e3, t3);
      }, t2.useReducer = function(e3, t3, r3) {
        return j.current.useReducer(e3, t3, r3);
      }, t2.useRef = function(e3) {
        return j.current.useRef(e3);
      }, t2.useState = function(e3) {
        return j.current.useState(e3);
      }, t2.useSyncExternalStore = function(e3, t3, r3) {
        return j.current.useSyncExternalStore(e3, t3, r3);
      }, t2.useTransition = function() {
        return j.current.useTransition();
      }, t2.version = "18.3.1";
    }, 540: (e2, t2, r2) => {
      e2.exports = r2(287);
    }, 833: (e2) => {
      e2.exports = function(e3, t2, r2, n2) {
        var o = r2 ? r2.call(n2, e3, t2) : undefined;
        if (o !== undefined)
          return !!o;
        if (e3 === t2)
          return true;
        if (typeof e3 != "object" || !e3 || typeof t2 != "object" || !t2)
          return false;
        var s = Object.keys(e3), a = Object.keys(t2);
        if (s.length !== a.length)
          return false;
        for (var i = Object.prototype.hasOwnProperty.bind(t2), c = 0;c < s.length; c++) {
          var u = s[c];
          if (!i(u))
            return false;
          var l = e3[u], f = t2[u];
          if ((o = r2 ? r2.call(n2, l, f, u) : undefined) === false || o === undefined && l !== f)
            return false;
        }
        return true;
      };
    } }, t = {};
    function r(n2) {
      var o = t[n2];
      if (o !== undefined)
        return o.exports;
      var s = t[n2] = { exports: {} };
      return e[n2](s, s.exports, r), s.exports;
    }
    r.n = (e2) => {
      var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
      return r.d(t2, { a: t2 }), t2;
    }, r.d = (e2, t2) => {
      for (var n2 in t2)
        r.o(t2, n2) && !r.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
    }, r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r.r = (e2) => {
      typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    }, r.nc = undefined;
    var n = {};
    return (() => {
      r.r(n), r.d(n, { Blink: () => qt, BlinkUnderline: () => Ut });
      var e2 = function() {
        return e2 = Object.assign || function(e3) {
          for (var t3, r2 = 1, n2 = arguments.length;r2 < n2; r2++)
            for (var o2 in t3 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
          return e3;
        }, e2.apply(this, arguments);
      };
      function t2(e3, t3, r2) {
        if (r2 || arguments.length === 2)
          for (var n2, o2 = 0, s2 = t3.length;o2 < s2; o2++)
            !n2 && o2 in t3 || (n2 || (n2 = Array.prototype.slice.call(t3, 0, o2)), n2[o2] = t3[o2]);
        return e3.concat(n2 || Array.prototype.slice.call(t3));
      }
      typeof SuppressedError == "function" && SuppressedError;
      var o = r(540), s = r(833), a = r.n(s), i = "-ms-", c = "-moz-", u = "-webkit-", l = "comm", f = "rule", p = "decl", d = "@import", h = "@keyframes", y = "@layer", m = Math.abs, v = String.fromCharCode, g = Object.assign;
      function b(e3) {
        return e3.trim();
      }
      function S(e3, t3) {
        return (e3 = t3.exec(e3)) ? e3[0] : e3;
      }
      function w(e3, t3, r2) {
        return e3.replace(t3, r2);
      }
      function _(e3, t3, r2) {
        return e3.indexOf(t3, r2);
      }
      function C(e3, t3) {
        return 0 | e3.charCodeAt(t3);
      }
      function x(e3, t3, r2) {
        return e3.slice(t3, r2);
      }
      function E(e3) {
        return e3.length;
      }
      function I(e3) {
        return e3.length;
      }
      function P(e3, t3) {
        return t3.push(e3), e3;
      }
      function $(e3, t3) {
        return e3.filter(function(e4) {
          return !S(e4, t3);
        });
      }
      var R = 1, k = 1, O = 0, j = 0, A = 0, N = "";
      function T(e3, t3, r2, n2, o2, s2, a2, i2) {
        return { value: e3, root: t3, parent: r2, type: n2, props: o2, children: s2, line: R, column: k, length: a2, return: "", siblings: i2 };
      }
      function D(e3, t3) {
        return g(T("", null, null, "", null, null, 0, e3.siblings), e3, { length: -e3.length }, t3);
      }
      function F(e3) {
        for (;e3.root; )
          e3 = D(e3.root, { children: [e3] });
        P(e3, e3.siblings);
      }
      function M() {
        return A = j > 0 ? C(N, --j) : 0, k--, A === 10 && (k = 1, R--), A;
      }
      function z() {
        return A = j < O ? C(N, j++) : 0, k++, A === 10 && (k = 1, R++), A;
      }
      function L() {
        return C(N, j);
      }
      function B() {
        return j;
      }
      function G(e3, t3) {
        return x(N, e3, t3);
      }
      function W(e3) {
        switch (e3) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Y(e3) {
        return b(G(j - 1, V(e3 === 91 ? e3 + 2 : e3 === 40 ? e3 + 1 : e3)));
      }
      function q(e3) {
        for (;(A = L()) && A < 33; )
          z();
        return W(e3) > 2 || W(A) > 3 ? "" : " ";
      }
      function U(e3, t3) {
        for (;--t3 && z() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
          ;
        return G(e3, B() + (t3 < 6 && L() == 32 && z() == 32));
      }
      function V(e3) {
        for (;z(); )
          switch (A) {
            case e3:
              return j;
            case 34:
            case 39:
              e3 !== 34 && e3 !== 39 && V(A);
              break;
            case 40:
              e3 === 41 && V(e3);
              break;
            case 92:
              z();
          }
        return j;
      }
      function H(e3, t3) {
        for (;z() && e3 + A !== 57 && (e3 + A !== 84 || L() !== 47); )
          ;
        return "/*" + G(t3, j - 1) + "*" + v(e3 === 47 ? e3 : z());
      }
      function Z(e3) {
        for (;!W(L()); )
          z();
        return G(e3, j);
      }
      function J(e3, t3) {
        for (var r2 = "", n2 = 0;n2 < e3.length; n2++)
          r2 += t3(e3[n2], n2, e3, t3) || "";
        return r2;
      }
      function K(e3, t3, r2, n2) {
        switch (e3.type) {
          case y:
            if (e3.children.length)
              break;
          case d:
          case p:
            return e3.return = e3.return || e3.value;
          case l:
            return "";
          case h:
            return e3.return = e3.value + "{" + J(e3.children, n2) + "}";
          case f:
            if (!E(e3.value = e3.props.join(",")))
              return "";
        }
        return E(r2 = J(e3.children, n2)) ? e3.return = e3.value + "{" + r2 + "}" : "";
      }
      function Q(e3, t3, r2) {
        switch (function(e4, t4) {
          return 45 ^ C(e4, 0) ? (((t4 << 2 ^ C(e4, 0)) << 2 ^ C(e4, 1)) << 2 ^ C(e4, 2)) << 2 ^ C(e4, 3) : 0;
        }(e3, t3)) {
          case 5103:
            return u + "print-" + e3 + e3;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return u + e3 + e3;
          case 4789:
            return c + e3 + e3;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return u + e3 + c + e3 + i + e3 + e3;
          case 5936:
            switch (C(e3, t3 + 11)) {
              case 114:
                return u + e3 + i + w(e3, /[svh]\w+-[tblr]{2}/, "tb") + e3;
              case 108:
                return u + e3 + i + w(e3, /[svh]\w+-[tblr]{2}/, "tb-rl") + e3;
              case 45:
                return u + e3 + i + w(e3, /[svh]\w+-[tblr]{2}/, "lr") + e3;
            }
          case 6828:
          case 4268:
          case 2903:
            return u + e3 + i + e3 + e3;
          case 6165:
            return u + e3 + i + "flex-" + e3 + e3;
          case 5187:
            return u + e3 + w(e3, /(\w+).+(:[^]+)/, u + "box-$1$2" + i + "flex-$1$2") + e3;
          case 5443:
            return u + e3 + i + "flex-item-" + w(e3, /flex-|-self/g, "") + (S(e3, /flex-|baseline/) ? "" : i + "grid-row-" + w(e3, /flex-|-self/g, "")) + e3;
          case 4675:
            return u + e3 + i + "flex-line-pack" + w(e3, /align-content|flex-|-self/g, "") + e3;
          case 5548:
            return u + e3 + i + w(e3, "shrink", "negative") + e3;
          case 5292:
            return u + e3 + i + w(e3, "basis", "preferred-size") + e3;
          case 6060:
            return u + "box-" + w(e3, "-grow", "") + u + e3 + i + w(e3, "grow", "positive") + e3;
          case 4554:
            return u + w(e3, /([^-])(transform)/g, "$1" + u + "$2") + e3;
          case 6187:
            return w(w(w(e3, /(zoom-|grab)/, u + "$1"), /(image-set)/, u + "$1"), e3, "") + e3;
          case 5495:
          case 3959:
            return w(e3, /(image-set\([^]*)/, u + "$1$`$1");
          case 4968:
            return w(w(e3, /(.+:)(flex-)?(.*)/, u + "box-pack:$3" + i + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + u + e3 + e3;
          case 4200:
            if (!S(e3, /flex-|baseline/))
              return i + "grid-column-align" + x(e3, t3) + e3;
            break;
          case 2592:
          case 3360:
            return i + w(e3, "template-", "") + e3;
          case 4384:
          case 3616:
            return r2 && r2.some(function(e4, r3) {
              return t3 = r3, S(e4.props, /grid-\w+-end/);
            }) ? ~_(e3 + (r2 = r2[t3].value), "span", 0) ? e3 : i + w(e3, "-start", "") + e3 + i + "grid-row-span:" + (~_(r2, "span", 0) ? S(r2, /\d+/) : +S(r2, /\d+/) - +S(e3, /\d+/)) + ";" : i + w(e3, "-start", "") + e3;
          case 4896:
          case 4128:
            return r2 && r2.some(function(e4) {
              return S(e4.props, /grid-\w+-start/);
            }) ? e3 : i + w(w(e3, "-end", "-span"), "span ", "") + e3;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return w(e3, /(.+)-inline(.+)/, u + "$1$2") + e3;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (E(e3) - 1 - t3 > 6)
              switch (C(e3, t3 + 1)) {
                case 109:
                  if (C(e3, t3 + 4) !== 45)
                    break;
                case 102:
                  return w(e3, /(.+:)(.+)-([^]+)/, "$1" + u + "$2-$3$1" + c + (C(e3, t3 + 3) == 108 ? "$3" : "$2-$3")) + e3;
                case 115:
                  return ~_(e3, "stretch", 0) ? Q(w(e3, "stretch", "fill-available"), t3, r2) + e3 : e3;
              }
            break;
          case 5152:
          case 5920:
            return w(e3, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(t4, r3, n2, o2, s2, a2, c2) {
              return i + r3 + ":" + n2 + c2 + (o2 ? i + r3 + "-span:" + (s2 ? a2 : +a2 - +n2) + c2 : "") + e3;
            });
          case 4949:
            if (C(e3, t3 + 6) === 121)
              return w(e3, ":", ":" + u) + e3;
            break;
          case 6444:
            switch (C(e3, C(e3, 14) === 45 ? 18 : 11)) {
              case 120:
                return w(e3, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + u + (C(e3, 14) === 45 ? "inline-" : "") + "box$3$1" + u + "$2$3$1" + i + "$2box$3") + e3;
              case 100:
                return w(e3, ":", ":" + i) + e3;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return w(e3, "scroll-", "scroll-snap-") + e3;
        }
        return e3;
      }
      function X(e3, t3, r2, n2) {
        if (e3.length > -1 && !e3.return)
          switch (e3.type) {
            case p:
              return void (e3.return = Q(e3.value, e3.length, r2));
            case h:
              return J([D(e3, { value: w(e3.value, "@", "@" + u) })], n2);
            case f:
              if (e3.length)
                return function(e4, t4) {
                  return e4.map(t4).join("");
                }(r2 = e3.props, function(t4) {
                  switch (S(t4, n2 = /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                      F(D(e3, { props: [w(t4, /:(read-\w+)/, ":" + c + "$1")] })), F(D(e3, { props: [t4] })), g(e3, { props: $(r2, n2) });
                      break;
                    case "::placeholder":
                      F(D(e3, { props: [w(t4, /:(plac\w+)/, ":" + u + "input-$1")] })), F(D(e3, { props: [w(t4, /:(plac\w+)/, ":" + c + "$1")] })), F(D(e3, { props: [w(t4, /:(plac\w+)/, i + "input-$1")] })), F(D(e3, { props: [t4] })), g(e3, { props: $(r2, n2) });
                  }
                  return "";
                });
          }
      }
      function ee(e3) {
        return function(e4) {
          return N = "", e4;
        }(te("", null, null, null, [""], e3 = function(e4) {
          return R = k = 1, O = E(N = e4), j = 0, [];
        }(e3), 0, [0], e3));
      }
      function te(e3, t3, r2, n2, o2, s2, a2, i2, c2) {
        for (var u2 = 0, l2 = 0, f2 = a2, p2 = 0, d2 = 0, h2 = 0, y2 = 1, g2 = 1, b2 = 1, S2 = 0, x2 = "", I2 = o2, $2 = s2, R2 = n2, k2 = x2;g2; )
          switch (h2 = S2, S2 = z()) {
            case 40:
              if (h2 != 108 && C(k2, f2 - 1) == 58) {
                _(k2 += w(Y(S2), "&", "&\f"), "&\f", m(u2 ? i2[u2 - 1] : 0)) != -1 && (b2 = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              k2 += Y(S2);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              k2 += q(h2);
              break;
            case 92:
              k2 += U(B() - 1, 7);
              continue;
            case 47:
              switch (L()) {
                case 42:
                case 47:
                  P(ne(H(z(), B()), t3, r2, c2), c2);
                  break;
                default:
                  k2 += "/";
              }
              break;
            case 123 * y2:
              i2[u2++] = E(k2) * b2;
            case 125 * y2:
            case 59:
            case 0:
              switch (S2) {
                case 0:
                case 125:
                  g2 = 0;
                case 59 + l2:
                  b2 == -1 && (k2 = w(k2, /\f/g, "")), d2 > 0 && E(k2) - f2 && P(d2 > 32 ? oe(k2 + ";", n2, r2, f2 - 1, c2) : oe(w(k2, " ", "") + ";", n2, r2, f2 - 2, c2), c2);
                  break;
                case 59:
                  k2 += ";";
                default:
                  if (P(R2 = re(k2, t3, r2, u2, l2, o2, i2, x2, I2 = [], $2 = [], f2, s2), s2), S2 === 123)
                    if (l2 === 0)
                      te(k2, t3, R2, R2, I2, s2, f2, i2, $2);
                    else
                      switch (p2 === 99 && C(k2, 3) === 110 ? 100 : p2) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          te(e3, R2, R2, n2 && P(re(e3, R2, R2, 0, 0, o2, i2, x2, o2, I2 = [], f2, $2), $2), o2, $2, f2, i2, n2 ? I2 : $2);
                          break;
                        default:
                          te(k2, R2, R2, R2, [""], $2, 0, i2, $2);
                      }
              }
              u2 = l2 = d2 = 0, y2 = b2 = 1, x2 = k2 = "", f2 = a2;
              break;
            case 58:
              f2 = 1 + E(k2), d2 = h2;
            default:
              if (y2 < 1) {
                if (S2 == 123)
                  --y2;
                else if (S2 == 125 && y2++ == 0 && M() == 125)
                  continue;
              }
              switch (k2 += v(S2), S2 * y2) {
                case 38:
                  b2 = l2 > 0 ? 1 : (k2 += "\f", -1);
                  break;
                case 44:
                  i2[u2++] = (E(k2) - 1) * b2, b2 = 1;
                  break;
                case 64:
                  L() === 45 && (k2 += Y(z())), p2 = L(), l2 = f2 = E(x2 = k2 += Z(B())), S2++;
                  break;
                case 45:
                  h2 === 45 && E(k2) == 2 && (y2 = 0);
              }
          }
        return s2;
      }
      function re(e3, t3, r2, n2, o2, s2, a2, i2, c2, u2, l2, p2) {
        for (var d2 = o2 - 1, h2 = o2 === 0 ? s2 : [""], y2 = I(h2), v2 = 0, g2 = 0, S2 = 0;v2 < n2; ++v2)
          for (var _2 = 0, C2 = x(e3, d2 + 1, d2 = m(g2 = a2[v2])), E2 = e3;_2 < y2; ++_2)
            (E2 = b(g2 > 0 ? h2[_2] + " " + C2 : w(C2, /&\f/g, h2[_2]))) && (c2[S2++] = E2);
        return T(e3, t3, r2, o2 === 0 ? f : i2, c2, u2, l2, p2);
      }
      function ne(e3, t3, r2, n2) {
        return T(e3, t3, r2, l, v(A), x(e3, 2, -2), 0, n2);
      }
      function oe(e3, t3, r2, n2, o2) {
        return T(e3, t3, r2, p, x(e3, 0, n2), x(e3, n2 + 1, -1), n2, o2);
      }
      var se = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, ae = typeof process != "undefined" && process.env !== undefined && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ie = "active", ce = "data-styled-version", ue = "6.1.11", le = "/*!sc*/\n", fe = typeof window != "undefined" && "HTMLElement" in window, pe = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env !== undefined && process.env.REACT_APP_SC_DISABLE_SPEEDY !== undefined && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env !== undefined && process.env.SC_DISABLE_SPEEDY !== undefined && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), de = (new Set, Object.freeze([])), he = Object.freeze({});
      var ye = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), me = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ve = /(^-|-$)/g;
      function ge(e3) {
        return e3.replace(me, "-").replace(ve, "");
      }
      var be = /(a)(d)/gi, Se = 52, we = function(e3) {
        return String.fromCharCode(e3 + (e3 > 25 ? 39 : 97));
      };
      function _e(e3) {
        var t3, r2 = "";
        for (t3 = Math.abs(e3);t3 > Se; t3 = t3 / Se | 0)
          r2 = we(t3 % Se) + r2;
        return (we(t3 % Se) + r2).replace(be, "$1-$2");
      }
      var Ce, xe = 5381, Ee = function(e3, t3) {
        for (var r2 = t3.length;r2; )
          e3 = 33 * e3 ^ t3.charCodeAt(--r2);
        return e3;
      }, Ie = function(e3) {
        return Ee(xe, e3);
      };
      function Pe(e3) {
        return _e(Ie(e3) >>> 0);
      }
      function $e(e3) {
        return typeof e3 == "string" && true;
      }
      var Re = typeof Symbol == "function" && Symbol.for, ke = Re ? Symbol.for("react.memo") : 60115, Oe = Re ? Symbol.for("react.forward_ref") : 60112, je = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, Ae = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, Ne = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, Te = ((Ce = {})[Oe] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, Ce[ke] = Ne, Ce);
      function De(e3) {
        return (("type" in (t3 = e3)) && t3.type.$$typeof) === ke ? Ne : ("$$typeof" in e3) ? Te[e3.$$typeof] : je;
        var t3;
      }
      var { defineProperty: Fe, getOwnPropertyNames: Me, getOwnPropertySymbols: ze, getOwnPropertyDescriptor: Le, getPrototypeOf: Be, prototype: Ge } = Object;
      function We(e3, t3, r2) {
        if (typeof t3 != "string") {
          if (Ge) {
            var n2 = Be(t3);
            n2 && n2 !== Ge && We(e3, n2, r2);
          }
          var o2 = Me(t3);
          ze && (o2 = o2.concat(ze(t3)));
          for (var s2 = De(e3), a2 = De(t3), i2 = 0;i2 < o2.length; ++i2) {
            var c2 = o2[i2];
            if (!((c2 in Ae) || r2 && r2[c2] || a2 && (c2 in a2) || s2 && (c2 in s2))) {
              var u2 = Le(t3, c2);
              try {
                Fe(e3, c2, u2);
              } catch (e4) {
              }
            }
          }
        }
        return e3;
      }
      function Ye(e3) {
        return typeof e3 == "function";
      }
      function qe(e3) {
        return typeof e3 == "object" && "styledComponentId" in e3;
      }
      function Ue(e3, t3) {
        return e3 && t3 ? "".concat(e3, " ").concat(t3) : e3 || t3 || "";
      }
      function Ve(e3, t3) {
        if (e3.length === 0)
          return "";
        for (var r2 = e3[0], n2 = 1;n2 < e3.length; n2++)
          r2 += t3 ? t3 + e3[n2] : e3[n2];
        return r2;
      }
      function He(e3) {
        return e3 !== null && typeof e3 == "object" && e3.constructor.name === Object.name && !(("props" in e3) && e3.$$typeof);
      }
      function Ze(e3, t3, r2) {
        if (r2 === undefined && (r2 = false), !r2 && !He(e3) && !Array.isArray(e3))
          return t3;
        if (Array.isArray(t3))
          for (var n2 = 0;n2 < t3.length; n2++)
            e3[n2] = Ze(e3[n2], t3[n2]);
        else if (He(t3))
          for (var n2 in t3)
            e3[n2] = Ze(e3[n2], t3[n2]);
        return e3;
      }
      function Je(e3, t3) {
        Object.defineProperty(e3, "toString", { value: t3 });
      }
      function Ke(e3) {
        for (var t3 = [], r2 = 1;r2 < arguments.length; r2++)
          t3[r2 - 1] = arguments[r2];
        return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e3, " for more information.").concat(t3.length > 0 ? " Args: ".concat(t3.join(", ")) : ""));
      }
      var Qe = function() {
        function e3(e4) {
          this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e4;
        }
        return e3.prototype.indexOfGroup = function(e4) {
          for (var t3 = 0, r2 = 0;r2 < e4; r2++)
            t3 += this.groupSizes[r2];
          return t3;
        }, e3.prototype.insertRules = function(e4, t3) {
          if (e4 >= this.groupSizes.length) {
            for (var r2 = this.groupSizes, n2 = r2.length, o2 = n2;e4 >= o2; )
              if ((o2 <<= 1) < 0)
                throw Ke(16, "".concat(e4));
            this.groupSizes = new Uint32Array(o2), this.groupSizes.set(r2), this.length = o2;
            for (var s2 = n2;s2 < o2; s2++)
              this.groupSizes[s2] = 0;
          }
          for (var a2 = this.indexOfGroup(e4 + 1), i2 = (s2 = 0, t3.length);s2 < i2; s2++)
            this.tag.insertRule(a2, t3[s2]) && (this.groupSizes[e4]++, a2++);
        }, e3.prototype.clearGroup = function(e4) {
          if (e4 < this.length) {
            var t3 = this.groupSizes[e4], r2 = this.indexOfGroup(e4), n2 = r2 + t3;
            this.groupSizes[e4] = 0;
            for (var o2 = r2;o2 < n2; o2++)
              this.tag.deleteRule(r2);
          }
        }, e3.prototype.getGroup = function(e4) {
          var t3 = "";
          if (e4 >= this.length || this.groupSizes[e4] === 0)
            return t3;
          for (var r2 = this.groupSizes[e4], n2 = this.indexOfGroup(e4), o2 = n2 + r2, s2 = n2;s2 < o2; s2++)
            t3 += "".concat(this.tag.getRule(s2)).concat(le);
          return t3;
        }, e3;
      }(), Xe = new Map, et = new Map, tt = 1, rt = function(e3) {
        if (Xe.has(e3))
          return Xe.get(e3);
        for (;et.has(tt); )
          tt++;
        var t3 = tt++;
        return Xe.set(e3, t3), et.set(t3, e3), t3;
      }, nt = function(e3, t3) {
        tt = t3 + 1, Xe.set(e3, t3), et.set(t3, e3);
      }, ot = "style[".concat(ae, "][").concat(ce, '="').concat(ue, '"]'), st = new RegExp("^".concat(ae, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), at = function(e3, t3, r2) {
        for (var n2, o2 = r2.split(","), s2 = 0, a2 = o2.length;s2 < a2; s2++)
          (n2 = o2[s2]) && e3.registerName(t3, n2);
      }, it = function(e3, t3) {
        for (var r2, n2 = ((r2 = t3.textContent) !== null && r2 !== undefined ? r2 : "").split(le), o2 = [], s2 = 0, a2 = n2.length;s2 < a2; s2++) {
          var i2 = n2[s2].trim();
          if (i2) {
            var c2 = i2.match(st);
            if (c2) {
              var u2 = 0 | parseInt(c2[1], 10), l2 = c2[2];
              u2 !== 0 && (nt(l2, u2), at(e3, l2, c2[3]), e3.getTag().insertRules(u2, o2)), o2.length = 0;
            } else
              o2.push(i2);
          }
        }
      };
      function ct() {
        return r.nc;
      }
      var ut = function(e3) {
        var t3 = document.head, r2 = e3 || t3, n2 = document.createElement("style"), o2 = function(e4) {
          var t4 = Array.from(e4.querySelectorAll("style[".concat(ae, "]")));
          return t4[t4.length - 1];
        }(r2), s2 = o2 !== undefined ? o2.nextSibling : null;
        n2.setAttribute(ae, ie), n2.setAttribute(ce, ue);
        var a2 = ct();
        return a2 && n2.setAttribute("nonce", a2), r2.insertBefore(n2, s2), n2;
      }, lt = function() {
        function e3(e4) {
          this.element = ut(e4), this.element.appendChild(document.createTextNode("")), this.sheet = function(e5) {
            if (e5.sheet)
              return e5.sheet;
            for (var t3 = document.styleSheets, r2 = 0, n2 = t3.length;r2 < n2; r2++) {
              var o2 = t3[r2];
              if (o2.ownerNode === e5)
                return o2;
            }
            throw Ke(17);
          }(this.element), this.length = 0;
        }
        return e3.prototype.insertRule = function(e4, t3) {
          try {
            return this.sheet.insertRule(t3, e4), this.length++, true;
          } catch (e5) {
            return false;
          }
        }, e3.prototype.deleteRule = function(e4) {
          this.sheet.deleteRule(e4), this.length--;
        }, e3.prototype.getRule = function(e4) {
          var t3 = this.sheet.cssRules[e4];
          return t3 && t3.cssText ? t3.cssText : "";
        }, e3;
      }(), ft = function() {
        function e3(e4) {
          this.element = ut(e4), this.nodes = this.element.childNodes, this.length = 0;
        }
        return e3.prototype.insertRule = function(e4, t3) {
          if (e4 <= this.length && e4 >= 0) {
            var r2 = document.createTextNode(t3);
            return this.element.insertBefore(r2, this.nodes[e4] || null), this.length++, true;
          }
          return false;
        }, e3.prototype.deleteRule = function(e4) {
          this.element.removeChild(this.nodes[e4]), this.length--;
        }, e3.prototype.getRule = function(e4) {
          return e4 < this.length ? this.nodes[e4].textContent : "";
        }, e3;
      }(), pt = function() {
        function e3(e4) {
          this.rules = [], this.length = 0;
        }
        return e3.prototype.insertRule = function(e4, t3) {
          return e4 <= this.length && (this.rules.splice(e4, 0, t3), this.length++, true);
        }, e3.prototype.deleteRule = function(e4) {
          this.rules.splice(e4, 1), this.length--;
        }, e3.prototype.getRule = function(e4) {
          return e4 < this.length ? this.rules[e4] : "";
        }, e3;
      }(), dt = fe, ht = { isServer: !fe, useCSSOMInjection: !pe }, yt = function() {
        function t3(t4, r2, n2) {
          t4 === undefined && (t4 = he), r2 === undefined && (r2 = {});
          var o2 = this;
          this.options = e2(e2({}, ht), t4), this.gs = r2, this.names = new Map(n2), this.server = !!t4.isServer, !this.server && fe && dt && (dt = false, function(e3) {
            for (var t5 = document.querySelectorAll(ot), r3 = 0, n3 = t5.length;r3 < n3; r3++) {
              var o3 = t5[r3];
              o3 && o3.getAttribute(ae) !== ie && (it(e3, o3), o3.parentNode && o3.parentNode.removeChild(o3));
            }
          }(this)), Je(this, function() {
            return function(e3) {
              for (var t5 = e3.getTag(), r3 = t5.length, n3 = "", o3 = function(r4) {
                var o4 = function(e4) {
                  return et.get(e4);
                }(r4);
                if (o4 === undefined)
                  return "continue";
                var s3 = e3.names.get(o4), a2 = t5.getGroup(r4);
                if (s3 === undefined || a2.length === 0)
                  return "continue";
                var i2 = "".concat(ae, ".g").concat(r4, '[id="').concat(o4, '"]'), c2 = "";
                s3 !== undefined && s3.forEach(function(e4) {
                  e4.length > 0 && (c2 += "".concat(e4, ","));
                }), n3 += "".concat(a2).concat(i2, '{content:"').concat(c2, '"}').concat(le);
              }, s2 = 0;s2 < r3; s2++)
                o3(s2);
              return n3;
            }(o2);
          });
        }
        return t3.registerId = function(e3) {
          return rt(e3);
        }, t3.prototype.reconstructWithOptions = function(r2, n2) {
          return n2 === undefined && (n2 = true), new t3(e2(e2({}, this.options), r2), this.gs, n2 && this.names || undefined);
        }, t3.prototype.allocateGSInstance = function(e3) {
          return this.gs[e3] = (this.gs[e3] || 0) + 1;
        }, t3.prototype.getTag = function() {
          return this.tag || (this.tag = (e3 = function(e4) {
            var { useCSSOMInjection: t4, target: r2 } = e4;
            return e4.isServer ? new pt(r2) : t4 ? new lt(r2) : new ft(r2);
          }(this.options), new Qe(e3)));
          var e3;
        }, t3.prototype.hasNameForId = function(e3, t4) {
          return this.names.has(e3) && this.names.get(e3).has(t4);
        }, t3.prototype.registerName = function(e3, t4) {
          if (rt(e3), this.names.has(e3))
            this.names.get(e3).add(t4);
          else {
            var r2 = new Set;
            r2.add(t4), this.names.set(e3, r2);
          }
        }, t3.prototype.insertRules = function(e3, t4, r2) {
          this.registerName(e3, t4), this.getTag().insertRules(rt(e3), r2);
        }, t3.prototype.clearNames = function(e3) {
          this.names.has(e3) && this.names.get(e3).clear();
        }, t3.prototype.clearRules = function(e3) {
          this.getTag().clearGroup(rt(e3)), this.clearNames(e3);
        }, t3.prototype.clearTag = function() {
          this.tag = undefined;
        }, t3;
      }(), mt = /&/g, vt = /^\s*\/\/.*$/gm;
      function gt(e3, t3) {
        return e3.map(function(e4) {
          return e4.type === "rule" && (e4.value = "".concat(t3, " ").concat(e4.value), e4.value = e4.value.replaceAll(",", ",".concat(t3, " ")), e4.props = e4.props.map(function(e5) {
            return "".concat(t3, " ").concat(e5);
          })), Array.isArray(e4.children) && e4.type !== "@keyframes" && (e4.children = gt(e4.children, t3)), e4;
        });
      }
      function bt(e3) {
        var t3, r2, n2, o2 = e3 === undefined ? he : e3, s2 = o2.options, a2 = s2 === undefined ? he : s2, i2 = o2.plugins, c2 = i2 === undefined ? de : i2, u2 = function(e4, n3, o3) {
          return o3.startsWith(r2) && o3.endsWith(r2) && o3.replaceAll(r2, "").length > 0 ? ".".concat(t3) : e4;
        }, l2 = c2.slice();
        l2.push(function(e4) {
          e4.type === f && e4.value.includes("&") && (e4.props[0] = e4.props[0].replace(mt, r2).replace(n2, u2));
        }), a2.prefix && l2.push(X), l2.push(K);
        var p2 = function(e4, o3, s3, i3) {
          o3 === undefined && (o3 = ""), s3 === undefined && (s3 = ""), i3 === undefined && (i3 = "&"), t3 = i3, r2 = o3, n2 = new RegExp("\\".concat(r2, "\\b"), "g");
          var c3 = e4.replace(vt, ""), u3 = ee(s3 || o3 ? "".concat(s3, " ").concat(o3, " { ").concat(c3, " }") : c3);
          a2.namespace && (u3 = gt(u3, a2.namespace));
          var f2, p3, d2, h2 = [];
          return J(u3, (f2 = l2.concat((d2 = function(e5) {
            return h2.push(e5);
          }, function(e5) {
            e5.root || (e5 = e5.return) && d2(e5);
          })), p3 = I(f2), function(e5, t4, r3, n3) {
            for (var o4 = "", s4 = 0;s4 < p3; s4++)
              o4 += f2[s4](e5, t4, r3, n3) || "";
            return o4;
          })), h2;
        };
        return p2.hash = c2.length ? c2.reduce(function(e4, t4) {
          return t4.name || Ke(15), Ee(e4, t4.name);
        }, xe).toString() : "", p2;
      }
      var St = new yt, wt = bt(), _t = o.createContext({ shouldForwardProp: undefined, styleSheet: St, stylis: wt }), Ct = (_t.Consumer, o.createContext(undefined));
      function xt() {
        return (0, o.useContext)(_t);
      }
      function Et(e3) {
        var t3 = (0, o.useState)(e3.stylisPlugins), r2 = t3[0], n2 = t3[1], s2 = xt().styleSheet, i2 = (0, o.useMemo)(function() {
          var t4 = s2;
          return e3.sheet ? t4 = e3.sheet : e3.target && (t4 = t4.reconstructWithOptions({ target: e3.target }, false)), e3.disableCSSOMInjection && (t4 = t4.reconstructWithOptions({ useCSSOMInjection: false })), t4;
        }, [e3.disableCSSOMInjection, e3.sheet, e3.target, s2]), c2 = (0, o.useMemo)(function() {
          return bt({ options: { namespace: e3.namespace, prefix: e3.enableVendorPrefixes }, plugins: r2 });
        }, [e3.enableVendorPrefixes, e3.namespace, r2]);
        (0, o.useEffect)(function() {
          a()(r2, e3.stylisPlugins) || n2(e3.stylisPlugins);
        }, [e3.stylisPlugins]);
        var u2 = (0, o.useMemo)(function() {
          return { shouldForwardProp: e3.shouldForwardProp, styleSheet: i2, stylis: c2 };
        }, [e3.shouldForwardProp, i2, c2]);
        return o.createElement(_t.Provider, { value: u2 }, o.createElement(Ct.Provider, { value: c2 }, e3.children));
      }
      var It = function() {
        function e3(e4, t3) {
          var r2 = this;
          this.inject = function(e5, t4) {
            t4 === undefined && (t4 = wt);
            var n2 = r2.name + t4.hash;
            e5.hasNameForId(r2.id, n2) || e5.insertRules(r2.id, n2, t4(r2.rules, n2, "@keyframes"));
          }, this.name = e4, this.id = "sc-keyframes-".concat(e4), this.rules = t3, Je(this, function() {
            throw Ke(12, String(r2.name));
          });
        }
        return e3.prototype.getName = function(e4) {
          return e4 === undefined && (e4 = wt), this.name + e4.hash;
        }, e3;
      }(), Pt = function(e3) {
        return e3 >= "A" && e3 <= "Z";
      };
      function $t(e3) {
        for (var t3 = "", r2 = 0;r2 < e3.length; r2++) {
          var n2 = e3[r2];
          if (r2 === 1 && n2 === "-" && e3[0] === "-")
            return e3;
          Pt(n2) ? t3 += "-" + n2.toLowerCase() : t3 += n2;
        }
        return t3.startsWith("ms-") ? "-" + t3 : t3;
      }
      var Rt = function(e3) {
        return e3 == null || e3 === false || e3 === "";
      }, kt = function(e3) {
        var r2, n2, o2 = [];
        for (var s2 in e3) {
          var a2 = e3[s2];
          e3.hasOwnProperty(s2) && !Rt(a2) && (Array.isArray(a2) && a2.isCss || Ye(a2) ? o2.push("".concat($t(s2), ":"), a2, ";") : He(a2) ? o2.push.apply(o2, t2(t2(["".concat(s2, " {")], kt(a2), false), ["}"], false)) : o2.push("".concat($t(s2), ": ").concat((r2 = s2, (n2 = a2) == null || typeof n2 == "boolean" || n2 === "" ? "" : typeof n2 != "number" || n2 === 0 || (r2 in se) || r2.startsWith("--") ? String(n2).trim() : "".concat(n2, "px")), ";")));
        }
        return o2;
      };
      function Ot(e3, t3, r2, n2) {
        return Rt(e3) ? [] : qe(e3) ? [".".concat(e3.styledComponentId)] : Ye(e3) ? !Ye(o2 = e3) || o2.prototype && o2.prototype.isReactComponent || !t3 ? [e3] : Ot(e3(t3), t3, r2, n2) : e3 instanceof It ? r2 ? (e3.inject(r2, n2), [e3.getName(n2)]) : [e3] : He(e3) ? kt(e3) : Array.isArray(e3) ? Array.prototype.concat.apply(de, e3.map(function(e4) {
          return Ot(e4, t3, r2, n2);
        })) : [e3.toString()];
        var o2;
      }
      function jt(e3) {
        for (var t3 = 0;t3 < e3.length; t3 += 1) {
          var r2 = e3[t3];
          if (Ye(r2) && !qe(r2))
            return false;
        }
        return true;
      }
      var At = Ie(ue), Nt = function() {
        function e3(e4, t3, r2) {
          this.rules = e4, this.staticRulesId = "", this.isStatic = (r2 === undefined || r2.isStatic) && jt(e4), this.componentId = t3, this.baseHash = Ee(At, t3), this.baseStyle = r2, yt.registerId(t3);
        }
        return e3.prototype.generateAndInjectStyles = function(e4, t3, r2) {
          var n2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e4, t3, r2) : "";
          if (this.isStatic && !r2.hash)
            if (this.staticRulesId && t3.hasNameForId(this.componentId, this.staticRulesId))
              n2 = Ue(n2, this.staticRulesId);
            else {
              var o2 = Ve(Ot(this.rules, e4, t3, r2)), s2 = _e(Ee(this.baseHash, o2) >>> 0);
              if (!t3.hasNameForId(this.componentId, s2)) {
                var a2 = r2(o2, ".".concat(s2), undefined, this.componentId);
                t3.insertRules(this.componentId, s2, a2);
              }
              n2 = Ue(n2, s2), this.staticRulesId = s2;
            }
          else {
            for (var i2 = Ee(this.baseHash, r2.hash), c2 = "", u2 = 0;u2 < this.rules.length; u2++) {
              var l2 = this.rules[u2];
              if (typeof l2 == "string")
                c2 += l2;
              else if (l2) {
                var f2 = Ve(Ot(l2, e4, t3, r2));
                i2 = Ee(i2, f2 + u2), c2 += f2;
              }
            }
            if (c2) {
              var p2 = _e(i2 >>> 0);
              t3.hasNameForId(this.componentId, p2) || t3.insertRules(this.componentId, p2, r2(c2, ".".concat(p2), undefined, this.componentId)), n2 = Ue(n2, p2);
            }
          }
          return n2;
        }, e3;
      }(), Tt = o.createContext(undefined);
      Tt.Consumer;
      var Dt = {};
      function Ft(t3, r2, n2) {
        var s2 = qe(t3), a2 = t3, i2 = !$e(t3), c2 = r2.attrs, u2 = c2 === undefined ? de : c2, l2 = r2.componentId, f2 = l2 === undefined ? function(e3, t4) {
          var r3 = typeof e3 != "string" ? "sc" : ge(e3);
          Dt[r3] = (Dt[r3] || 0) + 1;
          var n3 = "".concat(r3, "-").concat(Pe(ue + r3 + Dt[r3]));
          return t4 ? "".concat(t4, "-").concat(n3) : n3;
        }(r2.displayName, r2.parentComponentId) : l2, p2 = r2.displayName, d2 = p2 === undefined ? function(e3) {
          return $e(e3) ? "styled.".concat(e3) : "Styled(".concat(function(e4) {
            return e4.displayName || e4.name || "Component";
          }(e3), ")");
        }(t3) : p2, h2 = r2.displayName && r2.componentId ? "".concat(ge(r2.displayName), "-").concat(r2.componentId) : r2.componentId || f2, y2 = s2 && a2.attrs ? a2.attrs.concat(u2).filter(Boolean) : u2, m2 = r2.shouldForwardProp;
        if (s2 && a2.shouldForwardProp) {
          var v2 = a2.shouldForwardProp;
          if (r2.shouldForwardProp) {
            var g2 = r2.shouldForwardProp;
            m2 = function(e3, t4) {
              return v2(e3, t4) && g2(e3, t4);
            };
          } else
            m2 = v2;
        }
        var b2 = new Nt(n2, h2, s2 ? a2.componentStyle : undefined);
        function S2(t4, r3) {
          return function(t5, r4, n3) {
            var { attrs: s3, componentStyle: a3, defaultProps: i3, foldedComponentIds: c3, styledComponentId: u3, target: l3 } = t5, f3 = o.useContext(Tt), p3 = xt(), d3 = t5.shouldForwardProp || p3.shouldForwardProp, h3 = function(e3, t6, r5) {
              return r5 === undefined && (r5 = he), e3.theme !== r5.theme && e3.theme || t6 || r5.theme;
            }(r4, f3, i3) || he, y3 = function(t6, r5, n4) {
              for (var o2, s4 = e2(e2({}, r5), { className: undefined, theme: n4 }), a4 = 0;a4 < t6.length; a4 += 1) {
                var i4 = Ye(o2 = t6[a4]) ? o2(s4) : o2;
                for (var c4 in i4)
                  s4[c4] = c4 === "className" ? Ue(s4[c4], i4[c4]) : c4 === "style" ? e2(e2({}, s4[c4]), i4[c4]) : i4[c4];
              }
              return r5.className && (s4.className = Ue(s4.className, r5.className)), s4;
            }(s3, r4, h3), m3 = y3.as || l3, v3 = {};
            for (var g3 in y3)
              y3[g3] === undefined || g3[0] === "$" || g3 === "as" || g3 === "theme" && y3.theme === h3 || (g3 === "forwardedAs" ? v3.as = y3.forwardedAs : d3 && !d3(g3, m3) || (v3[g3] = y3[g3]));
            var b3 = function(e3, t6) {
              var r5 = xt();
              return e3.generateAndInjectStyles(t6, r5.styleSheet, r5.stylis);
            }(a3, y3), S3 = Ue(c3, u3);
            return b3 && (S3 += " " + b3), y3.className && (S3 += " " + y3.className), v3[$e(m3) && !ye.has(m3) ? "class" : "className"] = S3, v3.ref = n3, (0, o.createElement)(m3, v3);
          }(w2, t4, r3);
        }
        S2.displayName = d2;
        var w2 = o.forwardRef(S2);
        return w2.attrs = y2, w2.componentStyle = b2, w2.displayName = d2, w2.shouldForwardProp = m2, w2.foldedComponentIds = s2 ? Ue(a2.foldedComponentIds, a2.styledComponentId) : "", w2.styledComponentId = h2, w2.target = s2 ? a2.target : t3, Object.defineProperty(w2, "defaultProps", { get: function() {
          return this._foldedDefaultProps;
        }, set: function(e3) {
          this._foldedDefaultProps = s2 ? function(e4) {
            for (var t4 = [], r3 = 1;r3 < arguments.length; r3++)
              t4[r3 - 1] = arguments[r3];
            for (var n3 = 0, o2 = t4;n3 < o2.length; n3++)
              Ze(e4, o2[n3], true);
            return e4;
          }({}, a2.defaultProps, e3) : e3;
        } }), Je(w2, function() {
          return ".".concat(w2.styledComponentId);
        }), i2 && We(w2, t3, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), w2;
      }
      function Mt(e3, t3) {
        for (var r2 = [e3[0]], n2 = 0, o2 = t3.length;n2 < o2; n2 += 1)
          r2.push(t3[n2], e3[n2 + 1]);
        return r2;
      }
      new Set;
      var zt = function(e3) {
        return Object.assign(e3, { isCss: true });
      };
      function Lt(e3) {
        for (var r2 = [], n2 = 1;n2 < arguments.length; n2++)
          r2[n2 - 1] = arguments[n2];
        if (Ye(e3) || He(e3))
          return zt(Ot(Mt(de, t2([e3], r2, true))));
        var o2 = e3;
        return r2.length === 0 && o2.length === 1 && typeof o2[0] == "string" ? Ot(o2) : zt(Ot(Mt(o2, r2)));
      }
      function Bt(r2, n2, o2) {
        if (o2 === undefined && (o2 = he), !n2)
          throw Ke(1, n2);
        var s2 = function(e3) {
          for (var s3 = [], a2 = 1;a2 < arguments.length; a2++)
            s3[a2 - 1] = arguments[a2];
          return r2(n2, o2, Lt.apply(undefined, t2([e3], s3, false)));
        };
        return s2.attrs = function(t3) {
          return Bt(r2, n2, e2(e2({}, o2), { attrs: Array.prototype.concat(o2.attrs, t3).filter(Boolean) }));
        }, s2.withConfig = function(t3) {
          return Bt(r2, n2, e2(e2({}, o2), t3));
        }, s2;
      }
      var Gt = function(e3) {
        return Bt(Ft, e3);
      }, Wt = Gt;
      ye.forEach(function(e3) {
        Wt[e3] = Gt(e3);
      }), function() {
        function e3(e4, t3) {
          this.rules = e4, this.componentId = t3, this.isStatic = jt(e4), yt.registerId(this.componentId + 1);
        }
        e3.prototype.createStyles = function(e4, t3, r2, n2) {
          var o2 = n2(Ve(Ot(this.rules, t3, r2, n2)), ""), s2 = this.componentId + e4;
          r2.insertRules(s2, s2, o2);
        }, e3.prototype.removeStyles = function(e4, t3) {
          t3.clearRules(this.componentId + e4);
        }, e3.prototype.renderStyles = function(e4, t3, r2, n2) {
          e4 > 2 && yt.registerId(this.componentId + e4), this.removeStyles(e4, r2), this.createStyles(e4, t3, r2, n2);
        };
      }(), function() {
        function t3() {
          var t4 = this;
          this._emitSheetCSS = function() {
            var e3 = t4.instance.toString(), r2 = ct(), n2 = Ve([r2 && 'nonce="'.concat(r2, '"'), "".concat(ae, '="true"'), "".concat(ce, '="').concat(ue, '"')].filter(Boolean), " ");
            return "<style ".concat(n2, ">").concat(e3, "</style>");
          }, this.getStyleTags = function() {
            if (t4.sealed)
              throw Ke(2);
            return t4._emitSheetCSS();
          }, this.getStyleElement = function() {
            var r2;
            if (t4.sealed)
              throw Ke(2);
            var n2 = ((r2 = {})[ae] = "", r2[ce] = ue, r2.dangerouslySetInnerHTML = { __html: t4.instance.toString() }, r2), s2 = ct();
            return s2 && (n2.nonce = s2), [o.createElement("style", e2({}, n2, { key: "sc-0-0" }))];
          }, this.seal = function() {
            t4.sealed = true;
          }, this.instance = new yt({ isServer: true }), this.sealed = false;
        }
        t3.prototype.collectStyles = function(e3) {
          if (this.sealed)
            throw Ke(2);
          return o.createElement(Et, { sheet: this.instance }, e3);
        }, t3.prototype.interleaveWithNodeStream = function(e3) {
          throw Ke(3);
        };
      }(), "__sc-".concat(ae, "__");
      const Yt = function(e3) {
        for (var r2 = [], n2 = 1;n2 < arguments.length; n2++)
          r2[n2 - 1] = arguments[n2];
        var o2 = Ve(Lt.apply(undefined, t2([e3], r2, false))), s2 = Pe(o2);
        return new It(s2, o2);
      }`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`, qt = Wt.span`
  animation: ${() => Lt`
    ${Yt} .5s infinite alternate;
  `};
  text-decoration: underline;
`;
      function Ut() {
        return o.createElement(qt, null, "\xA0\xA0");
      }
    })(), n;
  })());
});

// src/index.tsx
var react_blinker = __toESM(require_dist(), 1);
var export_BlinkUnderline = react_blinker.BlinkUnderline;

export {
  export_BlinkUnderline as BlinkUnderline
};
