(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) c(o);
  new MutationObserver((o) => {
    for (const d of o)
      if (d.type === "childList")
        for (const h of d.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const d = {};
    return (
      o.integrity && (d.integrity = o.integrity),
      o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function c(o) {
    if (o.ep) return;
    o.ep = !0;
    const d = s(o);
    fetch(o.href, d);
  }
})();
const Wp = "phc_V7JMHB0fVJGRu8UHyrsj6pSL1BS76P5zD8qCi7lrTTV",
  Ze = {
    colors: {
      text: "#5D5D5D",
      white: "#FFFFFF",
      border: "rgba(0, 10, 36, 0.08)",
    },
    font: {
      family: '"Geist"',
      weight: "600",
      size: { normal: "14px", button: "18px" },
      lineHeight: "20px",
    },
    button: { gradient: "linear-gradient(180deg, #A797FF 0%, #7057FF 100%)" },
    shadow: "0px 8px 12px 0px rgba(9, 10, 20, 0.06)",
    zIndex: `${Number.MAX_SAFE_INTEGER}`,
  },
  mh = {
    close: `data:image/svg+xml,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D303D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
    )}`,
    generate: `data:image/svg+xml,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.87 4.94c.227-.71 1.21-.723 1.456-.02l1.177 3.378 3.101 1.013c.708.231.714 1.216.01 1.455l-3.183 1.082-1.105 3.17c-.245.704-1.23.69-1.455-.02l-.989-3.107-3.367-1.203c-.702-.25-.68-1.234.04-1.455l3.282-1.016 1.043-3.277Z" fill="#FFF"/><path fill-rule="evenodd" d="M12.238 1.3c.167-.667 1.1-.667 1.266 0l.388 1.551 1.55.388c.666.166.667 1.1 0 1.266l-1.55.388-.388 1.55c-.167.666-1.1.667-1.266 0l-.388-1.55-1.55-.388c-.667-.166-.667-1.1 0-1.266l1.55-.388.388-1.551Z" fill="#FFF"/></svg>'
    )}`,
  },
  Yn = {
    readdyLogo: "https://public.readdy.ai/gen_page/readdy-logo.png",
    watermarkLogo: "https://public.readdy.ai/gen_page/watermark.png",
    readdyLink: "https://readdy.ai?ref=b",
    fontStylesheet:
      "https://fonts.googleapis.com/css2?family=Geist:wght@600&display=swap",
    posthogCDN:
      "https://cdn.jsdelivr.net/npm/posthog-js@1.96.1/dist/array.full.min.js",
  },
  gh = {
    en: {
      prefix: "This Website is Made with",
      suffix: ". You can also get one like this in minutes",
      button: "Get one for FREE",
    },
    zh: {
      prefix: "本网站来自",
      suffix: "。你也可以在几分钟内拥有同样的页面",
      button: "立即免费拥有",
    },
  },
  Ip = () => navigator.language?.toLowerCase().startsWith("zh") ?? !1,
  Zr = () => (Ip() ? gh.zh : gh.en),
  Pp = () => window.innerWidth > 768 && !("ontouchstart" in window),
  e0 = () => {
    const r = window.location.hostname;
    return ["readdy.ai", "dev.readdy.ai", "localhost"].some(
      (s) => r === s || r.endsWith(`.${s}`)
    );
  };
function t0() {
  if (window.posthog) return;
  const r = document.createElement("script");
  (r.src = Yn.posthogCDN),
    (r.async = !0),
    (r.onload = () => {
      window.posthog?.init(Wp, {
        api_host: "https://us.i.posthog.com",
        autocapture: !1,
        capture_pageview: !1,
        capture_pageleave: !1,
        disable_session_recording: !0,
        disable_scroll_properties: !0,
        capture_performance: { web_vitals: !1 },
        rageclick: !1,
        loaded: function (u) {
          u.sessionRecording && u.sessionRecording.stopRecording();
        },
      });
    }),
    document.head.appendChild(r);
}
function ph(r, u) {
  window.posthog?.capture(r, { ...u, version: 2 });
}
function Yt(r, u) {
  Object.assign(r.style, u);
}
function hu(r, u = "0") {
  Yt(r, {
    color: Ze.colors.text,
    fontFamily: Ze.font.family,
    fontSize: Ze.font.size.normal,
    lineHeight: Ze.font.lineHeight,
    fontWeight: Ze.font.weight,
    whiteSpace: "nowrap",
    marginRight: u,
  });
}
function mu(r, u = "row") {
  Yt(r, {
    display: "flex",
    flexDirection: u,
    alignItems: "center",
    justifyContent: "center",
  });
}
function l0() {
  if (e0()) return;
  const r = "https://readdy.ai/api/public/user/is_free",
    u = "1f15687a-7760-4968-9b7d-8dedf0c9284a";
  async function s(R) {
    try {
      return !(
        await (
          await fetch(`${r}?projectId=${R}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          })
        ).json()
      ).data.is_free;
    } catch {
      return !0;
    }
  }
  function c() {
    document.querySelector('link[rel="icon"]')?.remove();
    const R = document.createElement("link");
    (R.type = "image/png"),
      (R.rel = "icon"),
      (R.href = Yn.readdyLogo),
      document.head.appendChild(R);
    const w = document.createElement("link");
    (w.rel = "stylesheet"),
      (w.href = Yn.fontStylesheet),
      document.head.appendChild(w);
  }
//   function o(R) {
//     ph(R), window.open(Yn.readdyLink, "_blank");
//   }
//   function d() {
//     const R = document.createElement("div");
//     (R.id = "close-button"),
//       Yt(R, {
//         position: "absolute",
//         top: "-12px",
//         right: "-12px",
//         width: "32px",
//         height: "32px",
//         backgroundColor: Ze.colors.white,
//         borderRadius: "50%",
//         borderStyle: "solid",
//         borderWidth: "1px",
//         borderColor: Ze.colors.border,
//         cursor: "pointer",
//         boxShadow: Ze.shadow,
//       }),
//       mu(R);
//     const w = document.createElement("img");
//     return (
//       (w.src = mh.close),
//       Yt(w, { width: "24px", height: "24px" }),
//       R.appendChild(w),
//       R.addEventListener("click", (_) => {
//         _.stopPropagation(),
//           ph("watermark_close_button_click"),
//           document.getElementById("watermark")?.remove();
//       }),
//       R
//     );
//   }
//   function h(R) {
//     const w = document.createElement("div");
//     (w.id = "generate-button"),
//       Yt(w, {
//         padding: R ? "8px 16px" : "10px 20px",
//         background: Ze.button.gradient,
//         borderRadius: "999px",
//         border: "none",
//         gap: "6px",
//         cursor: "pointer",
//         marginLeft: R ? "12px" : "0",
//         whiteSpace: "nowrap",
//         width: R ? "auto" : "100%",
//       }),
//       mu(w);
//     const _ = document.createElement("img");
//     (_.src = mh.generate),
//       Yt(_, { width: "16px", height: "16px", flexShrink: "0" });
//     const Y = document.createElement("span");
//     return (
//       (Y.textContent = Zr().button),
//       Yt(Y, {
//         color: Ze.colors.white,
//         fontFamily: Ze.font.family,
//         fontSize: Ze.font.size.button,
//         fontWeight: Ze.font.weight,
//         lineHeight: Ze.font.lineHeight,
//       }),
//       w.append(_, Y),
//       w.addEventListener("click", (q) => {
//         q.stopPropagation(), o("watermark_create_button_click");
//       }),
//       w
//     );
//   }
//   function p() {
//     const R = document.createElement("img");
//     return (
//       (R.src = Yn.watermarkLogo),
//       Yt(R, {
//         width: "92px",
//         height: "auto",
//         paddingLeft: "8px",
//         flexShrink: "0",
//       }),
//       R
//     );
//   }
//   function y(R) {
//     const w = Zr(),
//       _ = document.createElement("div");
//     (_.textContent = w.prefix), hu(_);
//     const Y = p(),
//       q = document.createElement("div");
//     (q.textContent = w.suffix), hu(q, "12px"), R.append(_, Y, q, h(!0));
//   }
//   function g(R) {
//     const w = Zr(),
//       _ = document.createElement("div");
//     mu(_), (_.style.marginBottom = "4px");
//     const Y = document.createElement("div");
//     (Y.textContent = w.prefix), hu(Y, "6px"), _.append(Y, p());
//     const q = document.createElement("div");
//     (q.textContent = w.suffix),
//       hu(q),
//       Yt(q, { textAlign: "center", marginBottom: "12px" }),
//       R.append(_, q, h(!1));
//   }
//   function E() {
//     const R = Pp(),
//       w = document.createElement("div");
//     return (
//       (w.id = "watermark"),
//       Yt(w, {
//         zIndex: Ze.zIndex,
//         position: "fixed",
//         bottom: "24px",
//         left: "50%",
//         transform: "translateX(-50%)",
//         width: R ? "fit-content" : "calc(100% - 32px)",
//         maxWidth: R ? "none" : "100%",
//         backgroundColor: Ze.colors.white,
//         borderStyle: "solid",
//         borderWidth: "1px",
//         borderRadius: R ? "999px" : "36px",
//         borderColor: Ze.colors.border,
//         padding: R ? "12px 20px" : "16px",
//         boxShadow: Ze.shadow,
//         cursor: "pointer",
//       }),
//       mu(w, R ? "row" : "column"),
//     //   w.appendChild(d()),
//       R ? y(w) : g(w),
//       w.addEventListener("click", (_) => {
//         _.target.closest("#generate-button, #close-button") ||
//           o("watermark_create_button_click");
//       }),
//       w
//     );
//   }
//   function b(R) {
//     const w = document.getElementById("watermark");
//     !w && !R
//       ? (document.body.appendChild(E()), c(), t0())
//       : R && w && w.remove();
//   }
//   s(u).then(b);
}
l0();
var Kr = { exports: {} },
  Ln = {};
var yh;
function a0() {
  if (yh) return Ln;
  yh = 1;
  var r = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.fragment");
  function s(c, o, d) {
    var h = null;
    if (
      (d !== void 0 && (h = "" + d),
      o.key !== void 0 && (h = "" + o.key),
      "key" in o)
    ) {
      d = {};
      for (var p in o) p !== "key" && (d[p] = o[p]);
    } else d = o;
    return (
      (o = d.ref),
      { $$typeof: r, type: c, key: h, ref: o !== void 0 ? o : null, props: d }
    );
  }
  return (Ln.Fragment = u), (Ln.jsx = s), (Ln.jsxs = s), Ln;
}
var vh;
function n0() {
  return vh || ((vh = 1), (Kr.exports = a0())), Kr.exports;
}
var O = n0(),
  Jr = { exports: {} },
  P = {};
var bh;
function i0() {
  if (bh) return P;
  bh = 1;
  var r = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    R = Symbol.iterator;
  function w(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (R && x[R]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    q = {};
  function Q(x, M, G) {
    (this.props = x),
      (this.context = M),
      (this.refs = q),
      (this.updater = G || _);
  }
  (Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (x, M) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, M, "setState");
    }),
    (Q.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function V() {}
  V.prototype = Q.prototype;
  function J(x, M, G) {
    (this.props = x),
      (this.context = M),
      (this.refs = q),
      (this.updater = G || _);
  }
  var ue = (J.prototype = new V());
  (ue.constructor = J), Y(ue, Q.prototype), (ue.isPureReactComponent = !0);
  var ce = Array.isArray;
  function ye() {}
  var W = { H: null, A: null, T: null, S: null },
    ze = Object.prototype.hasOwnProperty;
  function Oe(x, M, G) {
    var X = G.ref;
    return {
      $$typeof: r,
      type: x,
      key: M,
      ref: X !== void 0 ? X : null,
      props: G,
    };
  }
  function Ce(x, M) {
    return Oe(x.type, M, x.props);
  }
  function xt(x) {
    return typeof x == "object" && x !== null && x.$$typeof === r;
  }
  function Ie(x) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (G) {
        return M[G];
      })
    );
  }
  var Ve = /\/+/g;
  function De(x, M) {
    return typeof x == "object" && x !== null && x.key != null
      ? Ie("" + x.key)
      : M.toString(36);
  }
  function lt(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(ye, ye)
            : ((x.status = "pending"),
              x.then(
                function (M) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = M));
                },
                function (M) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = M));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function j(x, M, G, X, ee) {
    var ae = typeof x;
    (ae === "undefined" || ae === "boolean") && (x = null);
    var pe = !1;
    if (x === null) pe = !0;
    else
      switch (ae) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case r:
            case u:
              pe = !0;
              break;
            case E:
              return (pe = x._init), j(pe(x._payload), M, G, X, ee);
          }
      }
    if (pe)
      return (
        (ee = ee(x)),
        (pe = X === "" ? "." + De(x, 0) : X),
        ce(ee)
          ? ((G = ""),
            pe != null && (G = pe.replace(Ve, "$&/") + "/"),
            j(ee, M, G, "", function (Va) {
              return Va;
            }))
          : ee != null &&
            (xt(ee) &&
              (ee = Ce(
                ee,
                G +
                  (ee.key == null || (x && x.key === ee.key)
                    ? ""
                    : ("" + ee.key).replace(Ve, "$&/") + "/") +
                  pe
              )),
            M.push(ee)),
        1
      );
    pe = 0;
    var et = X === "" ? "." : X + ":";
    if (ce(x))
      for (var _e = 0; _e < x.length; _e++)
        (X = x[_e]), (ae = et + De(X, _e)), (pe += j(X, M, G, ae, ee));
    else if (((_e = w(x)), typeof _e == "function"))
      for (x = _e.call(x), _e = 0; !(X = x.next()).done; )
        (X = X.value), (ae = et + De(X, _e++)), (pe += j(X, M, G, ae, ee));
    else if (ae === "object") {
      if (typeof x.then == "function") return j(lt(x), M, G, X, ee);
      throw (
        ((M = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return pe;
  }
  function B(x, M, G) {
    if (x == null) return x;
    var X = [],
      ee = 0;
    return (
      j(x, X, "", "", function (ae) {
        return M.call(G, ae, ee++);
      }),
      X
    );
  }
  function $(x) {
    if (x._status === -1) {
      var M = x._result;
      (M = M()),
        M.then(
          function (G) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = G));
          },
          function (G) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = G));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = M));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var fe =
      typeof reportError == "function"
        ? reportError
        : function (x) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var M = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof x == "object" &&
                  x !== null &&
                  typeof x.message == "string"
                    ? String(x.message)
                    : String(x),
                error: x,
              });
              if (!window.dispatchEvent(M)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", x);
              return;
            }
            console.error(x);
          },
    ge = {
      map: B,
      forEach: function (x, M, G) {
        B(
          x,
          function () {
            M.apply(this, arguments);
          },
          G
        );
      },
      count: function (x) {
        var M = 0;
        return (
          B(x, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (x) {
        return (
          B(x, function (M) {
            return M;
          }) || []
        );
      },
      only: function (x) {
        if (!xt(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    };
  return (
    (P.Activity = b),
    (P.Children = ge),
    (P.Component = Q),
    (P.Fragment = s),
    (P.Profiler = o),
    (P.PureComponent = J),
    (P.StrictMode = c),
    (P.Suspense = y),
    (P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (P.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return W.H.useMemoCache(x);
      },
    }),
    (P.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (P.cacheSignal = function () {
      return null;
    }),
    (P.cloneElement = function (x, M, G) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var X = Y({}, x.props),
        ee = x.key;
      if (M != null)
        for (ae in (M.key !== void 0 && (ee = "" + M.key), M))
          !ze.call(M, ae) ||
            ae === "key" ||
            ae === "__self" ||
            ae === "__source" ||
            (ae === "ref" && M.ref === void 0) ||
            (X[ae] = M[ae]);
      var ae = arguments.length - 2;
      if (ae === 1) X.children = G;
      else if (1 < ae) {
        for (var pe = Array(ae), et = 0; et < ae; et++)
          pe[et] = arguments[et + 2];
        X.children = pe;
      }
      return Oe(x.type, ee, X);
    }),
    (P.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: d, _context: x }),
        x
      );
    }),
    (P.createElement = function (x, M, G) {
      var X,
        ee = {},
        ae = null;
      if (M != null)
        for (X in (M.key !== void 0 && (ae = "" + M.key), M))
          ze.call(M, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (ee[X] = M[X]);
      var pe = arguments.length - 2;
      if (pe === 1) ee.children = G;
      else if (1 < pe) {
        for (var et = Array(pe), _e = 0; _e < pe; _e++)
          et[_e] = arguments[_e + 2];
        ee.children = et;
      }
      if (x && x.defaultProps)
        for (X in ((pe = x.defaultProps), pe))
          ee[X] === void 0 && (ee[X] = pe[X]);
      return Oe(x, ae, ee);
    }),
    (P.createRef = function () {
      return { current: null };
    }),
    (P.forwardRef = function (x) {
      return { $$typeof: p, render: x };
    }),
    (P.isValidElement = xt),
    (P.lazy = function (x) {
      return { $$typeof: E, _payload: { _status: -1, _result: x }, _init: $ };
    }),
    (P.memo = function (x, M) {
      return { $$typeof: g, type: x, compare: M === void 0 ? null : M };
    }),
    (P.startTransition = function (x) {
      var M = W.T,
        G = {};
      W.T = G;
      try {
        var X = x(),
          ee = W.S;
        ee !== null && ee(G, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(ye, fe);
      } catch (ae) {
        fe(ae);
      } finally {
        M !== null && G.types !== null && (M.types = G.types), (W.T = M);
      }
    }),
    (P.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (P.use = function (x) {
      return W.H.use(x);
    }),
    (P.useActionState = function (x, M, G) {
      return W.H.useActionState(x, M, G);
    }),
    (P.useCallback = function (x, M) {
      return W.H.useCallback(x, M);
    }),
    (P.useContext = function (x) {
      return W.H.useContext(x);
    }),
    (P.useDebugValue = function () {}),
    (P.useDeferredValue = function (x, M) {
      return W.H.useDeferredValue(x, M);
    }),
    (P.useEffect = function (x, M) {
      return W.H.useEffect(x, M);
    }),
    (P.useEffectEvent = function (x) {
      return W.H.useEffectEvent(x);
    }),
    (P.useId = function () {
      return W.H.useId();
    }),
    (P.useImperativeHandle = function (x, M, G) {
      return W.H.useImperativeHandle(x, M, G);
    }),
    (P.useInsertionEffect = function (x, M) {
      return W.H.useInsertionEffect(x, M);
    }),
    (P.useLayoutEffect = function (x, M) {
      return W.H.useLayoutEffect(x, M);
    }),
    (P.useMemo = function (x, M) {
      return W.H.useMemo(x, M);
    }),
    (P.useOptimistic = function (x, M) {
      return W.H.useOptimistic(x, M);
    }),
    (P.useReducer = function (x, M, G) {
      return W.H.useReducer(x, M, G);
    }),
    (P.useRef = function (x) {
      return W.H.useRef(x);
    }),
    (P.useState = function (x) {
      return W.H.useState(x);
    }),
    (P.useSyncExternalStore = function (x, M, G) {
      return W.H.useSyncExternalStore(x, M, G);
    }),
    (P.useTransition = function () {
      return W.H.useTransition();
    }),
    (P.version = "19.2.3"),
    P
  );
}
var xh;
function ic() {
  return xh || ((xh = 1), (Jr.exports = i0())), Jr.exports;
}
var L = ic();
const I = (r) => typeof r == "string",
  Hn = () => {
    let r, u;
    const s = new Promise((c, o) => {
      (r = c), (u = o);
    });
    return (s.resolve = r), (s.reject = u), s;
  },
  Sh = (r) => (r == null ? "" : "" + r),
  u0 = (r, u, s) => {
    r.forEach((c) => {
      u[c] && (s[c] = u[c]);
    });
  },
  s0 = /###/g,
  Eh = (r) => (r && r.indexOf("###") > -1 ? r.replace(s0, ".") : r),
  Th = (r) => !r || I(r),
  Vn = (r, u, s) => {
    const c = I(u) ? u.split(".") : u;
    let o = 0;
    for (; o < c.length - 1; ) {
      if (Th(r)) return {};
      const d = Eh(c[o]);
      !r[d] && s && (r[d] = new s()),
        Object.prototype.hasOwnProperty.call(r, d) ? (r = r[d]) : (r = {}),
        ++o;
    }
    return Th(r) ? {} : { obj: r, k: Eh(c[o]) };
  },
  Oh = (r, u, s) => {
    const { obj: c, k: o } = Vn(r, u, Object);
    if (c !== void 0 || u.length === 1) {
      c[o] = s;
      return;
    }
    let d = u[u.length - 1],
      h = u.slice(0, u.length - 1),
      p = Vn(r, h, Object);
    for (; p.obj === void 0 && h.length; )
      (d = `${h[h.length - 1]}.${d}`),
        (h = h.slice(0, h.length - 1)),
        (p = Vn(r, h, Object)),
        p?.obj && typeof p.obj[`${p.k}.${d}`] < "u" && (p.obj = void 0);
    p.obj[`${p.k}.${d}`] = s;
  },
  r0 = (r, u, s, c) => {
    const { obj: o, k: d } = Vn(r, u, Object);
    (o[d] = o[d] || []), o[d].push(s);
  },
  bu = (r, u) => {
    const { obj: s, k: c } = Vn(r, u);
    if (s && Object.prototype.hasOwnProperty.call(s, c)) return s[c];
  },
  c0 = (r, u, s) => {
    const c = bu(r, s);
    return c !== void 0 ? c : bu(u, s);
  },
  Ph = (r, u, s) => {
    for (const c in u)
      c !== "__proto__" &&
        c !== "constructor" &&
        (c in r
          ? I(r[c]) ||
            r[c] instanceof String ||
            I(u[c]) ||
            u[c] instanceof String
            ? s && (r[c] = u[c])
            : Ph(r[c], u[c], s)
          : (r[c] = u[c]));
    return r;
  },
  Ba = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var o0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const f0 = (r) => (I(r) ? r.replace(/[&<>"'\/]/g, (u) => o0[u]) : r);
class d0 {
  constructor(u) {
    (this.capacity = u), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(u) {
    const s = this.regExpMap.get(u);
    if (s !== void 0) return s;
    const c = new RegExp(u);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(u, c),
      this.regExpQueue.push(u),
      c
    );
  }
}
const h0 = [" ", ",", "?", "!", ";"],
  m0 = new d0(20),
  g0 = (r, u, s) => {
    (u = u || ""), (s = s || "");
    const c = h0.filter((h) => u.indexOf(h) < 0 && s.indexOf(h) < 0);
    if (c.length === 0) return !0;
    const o = m0.getRegExp(
      `(${c.map((h) => (h === "?" ? "\\?" : h)).join("|")})`
    );
    let d = !o.test(r);
    if (!d) {
      const h = r.indexOf(s);
      h > 0 && !o.test(r.substring(0, h)) && (d = !0);
    }
    return d;
  },
  lc = (r, u, s = ".") => {
    if (!r) return;
    if (r[u]) return Object.prototype.hasOwnProperty.call(r, u) ? r[u] : void 0;
    const c = u.split(s);
    let o = r;
    for (let d = 0; d < c.length; ) {
      if (!o || typeof o != "object") return;
      let h,
        p = "";
      for (let y = d; y < c.length; ++y)
        if ((y !== d && (p += s), (p += c[y]), (h = o[p]), h !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof h) > -1 &&
            y < c.length - 1
          )
            continue;
          d += y - d + 1;
          break;
        }
      o = h;
    }
    return o;
  },
  Qn = (r) => r?.replace("_", "-"),
  p0 = {
    type: "logger",
    log(r) {
      this.output("log", r);
    },
    warn(r) {
      this.output("warn", r);
    },
    error(r) {
      this.output("error", r);
    },
    output(r, u) {
      console?.[r]?.apply?.(console, u);
    },
  };
class xu {
  constructor(u, s = {}) {
    this.init(u, s);
  }
  init(u, s = {}) {
    (this.prefix = s.prefix || "i18next:"),
      (this.logger = u || p0),
      (this.options = s),
      (this.debug = s.debug);
  }
  log(...u) {
    return this.forward(u, "log", "", !0);
  }
  warn(...u) {
    return this.forward(u, "warn", "", !0);
  }
  error(...u) {
    return this.forward(u, "error", "");
  }
  deprecate(...u) {
    return this.forward(u, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(u, s, c, o) {
    return o && !this.debug
      ? null
      : (I(u[0]) && (u[0] = `${c}${this.prefix} ${u[0]}`), this.logger[s](u));
  }
  create(u) {
    return new xu(this.logger, {
      prefix: `${this.prefix}:${u}:`,
      ...this.options,
    });
  }
  clone(u) {
    return (
      (u = u || this.options),
      (u.prefix = u.prefix || this.prefix),
      new xu(this.logger, u)
    );
  }
}
var Gt = new xu();
class Tu {
  constructor() {
    this.observers = {};
  }
  on(u, s) {
    return (
      u.split(" ").forEach((c) => {
        this.observers[c] || (this.observers[c] = new Map());
        const o = this.observers[c].get(s) || 0;
        this.observers[c].set(s, o + 1);
      }),
      this
    );
  }
  off(u, s) {
    if (this.observers[u]) {
      if (!s) {
        delete this.observers[u];
        return;
      }
      this.observers[u].delete(s);
    }
  }
  emit(u, ...s) {
    this.observers[u] &&
      Array.from(this.observers[u].entries()).forEach(([o, d]) => {
        for (let h = 0; h < d; h++) o(...s);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([o, d]) => {
          for (let h = 0; h < d; h++) o.apply(o, [u, ...s]);
        });
  }
}
class Nh extends Tu {
  constructor(u, s = { ns: ["translation"], defaultNS: "translation" }) {
    super(),
      (this.data = u || {}),
      (this.options = s),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(u) {
    this.options.ns.indexOf(u) < 0 && this.options.ns.push(u);
  }
  removeNamespaces(u) {
    const s = this.options.ns.indexOf(u);
    s > -1 && this.options.ns.splice(s, 1);
  }
  getResource(u, s, c, o = {}) {
    const d =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      h =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let p;
    u.indexOf(".") > -1
      ? (p = u.split("."))
      : ((p = [u, s]),
        c &&
          (Array.isArray(c)
            ? p.push(...c)
            : I(c) && d
            ? p.push(...c.split(d))
            : p.push(c)));
    const y = bu(this.data, p);
    return (
      !y &&
        !s &&
        !c &&
        u.indexOf(".") > -1 &&
        ((u = p[0]), (s = p[1]), (c = p.slice(2).join("."))),
      y || !h || !I(c) ? y : lc(this.data?.[u]?.[s], c, d)
    );
  }
  addResource(u, s, c, o, d = { silent: !1 }) {
    const h =
      d.keySeparator !== void 0 ? d.keySeparator : this.options.keySeparator;
    let p = [u, s];
    c && (p = p.concat(h ? c.split(h) : c)),
      u.indexOf(".") > -1 && ((p = u.split(".")), (o = s), (s = p[1])),
      this.addNamespaces(s),
      Oh(this.data, p, o),
      d.silent || this.emit("added", u, s, c, o);
  }
  addResources(u, s, c, o = { silent: !1 }) {
    for (const d in c)
      (I(c[d]) || Array.isArray(c[d])) &&
        this.addResource(u, s, d, c[d], { silent: !0 });
    o.silent || this.emit("added", u, s, c);
  }
  addResourceBundle(u, s, c, o, d, h = { silent: !1, skipCopy: !1 }) {
    let p = [u, s];
    u.indexOf(".") > -1 && ((p = u.split(".")), (o = c), (c = s), (s = p[1])),
      this.addNamespaces(s);
    let y = bu(this.data, p) || {};
    h.skipCopy || (c = JSON.parse(JSON.stringify(c))),
      o ? Ph(y, c, d) : (y = { ...y, ...c }),
      Oh(this.data, p, y),
      h.silent || this.emit("added", u, s, c);
  }
  removeResourceBundle(u, s) {
    this.hasResourceBundle(u, s) && delete this.data[u][s],
      this.removeNamespaces(s),
      this.emit("removed", u, s);
  }
  hasResourceBundle(u, s) {
    return this.getResource(u, s) !== void 0;
  }
  getResourceBundle(u, s) {
    return s || (s = this.options.defaultNS), this.getResource(u, s);
  }
  getDataByLanguage(u) {
    return this.data[u];
  }
  hasLanguageSomeTranslations(u) {
    const s = this.getDataByLanguage(u);
    return !!((s && Object.keys(s)) || []).find(
      (o) => s[o] && Object.keys(s[o]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var em = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, u, s, c, o) {
    return (
      r.forEach((d) => {
        u = this.processors[d]?.process(u, s, c, o) ?? u;
      }),
      u
    );
  },
};
const tm = Symbol("i18next/PATH_KEY");
function y0() {
  const r = [],
    u = Object.create(null);
  let s;
  return (
    (u.get = (c, o) => (
      s?.revoke?.(),
      o === tm ? r : (r.push(o), (s = Proxy.revocable(c, u)), s.proxy)
    )),
    Proxy.revocable(Object.create(null), u).proxy
  );
}
function ac(r, u) {
  const { [tm]: s } = r(y0());
  return s.join(u?.keySeparator ?? ".");
}
const Ah = {},
  zh = (r) => !I(r) && typeof r != "boolean" && typeof r != "number";
class Su extends Tu {
  constructor(u, s = {}) {
    super(),
      u0(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        u,
        this
      ),
      (this.options = s),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = Gt.create("translator"));
  }
  changeLanguage(u) {
    u && (this.language = u);
  }
  exists(u, s = { interpolation: {} }) {
    const c = { ...s };
    return u == null ? !1 : this.resolve(u, c)?.res !== void 0;
  }
  extractFromKey(u, s) {
    let c = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const o =
      s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let d = s.ns || this.options.defaultNS || [];
    const h = c && u.indexOf(c) > -1,
      p =
        !this.options.userDefinedKeySeparator &&
        !s.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !s.nsSeparator &&
        !g0(u, c, o);
    if (h && !p) {
      const y = u.match(this.interpolator.nestingRegexp);
      if (y && y.length > 0) return { key: u, namespaces: I(d) ? [d] : d };
      const g = u.split(c);
      (c !== o || (c === o && this.options.ns.indexOf(g[0]) > -1)) &&
        (d = g.shift()),
        (u = g.join(o));
    }
    return { key: u, namespaces: I(d) ? [d] : d };
  }
  translate(u, s, c) {
    let o = typeof s == "object" ? { ...s } : s;
    if (
      (typeof o != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (o = this.options.overloadTranslationOptionHandler(arguments)),
      typeof options == "object" && (o = { ...o }),
      o || (o = {}),
      u == null)
    )
      return "";
    typeof u == "function" && (u = ac(u, o)),
      Array.isArray(u) || (u = [String(u)]);
    const d =
        o.returnDetails !== void 0
          ? o.returnDetails
          : this.options.returnDetails,
      h =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      { key: p, namespaces: y } = this.extractFromKey(u[u.length - 1], o),
      g = y[y.length - 1];
    let E = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    E === void 0 && (E = ":");
    const b = o.lng || this.language,
      R = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (b?.toLowerCase() === "cimode")
      return R
        ? d
          ? {
              res: `${g}${E}${p}`,
              usedKey: p,
              exactUsedKey: p,
              usedLng: b,
              usedNS: g,
              usedParams: this.getUsedParamsDetails(o),
            }
          : `${g}${E}${p}`
        : d
        ? {
            res: p,
            usedKey: p,
            exactUsedKey: p,
            usedLng: b,
            usedNS: g,
            usedParams: this.getUsedParamsDetails(o),
          }
        : p;
    const w = this.resolve(u, o);
    let _ = w?.res;
    const Y = w?.usedKey || p,
      q = w?.exactUsedKey || p,
      Q = ["[object Number]", "[object Function]", "[object RegExp]"],
      V = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
      J = !this.i18nFormat || this.i18nFormat.handleAsObject,
      ue = o.count !== void 0 && !I(o.count),
      ce = Su.hasDefaultValue(o),
      ye = ue ? this.pluralResolver.getSuffix(b, o.count, o) : "",
      W =
        o.ordinal && ue
          ? this.pluralResolver.getSuffix(b, o.count, { ordinal: !1 })
          : "",
      ze = ue && !o.ordinal && o.count === 0,
      Oe =
        (ze && o[`defaultValue${this.options.pluralSeparator}zero`]) ||
        o[`defaultValue${ye}`] ||
        o[`defaultValue${W}`] ||
        o.defaultValue;
    let Ce = _;
    J && !_ && ce && (Ce = Oe);
    const xt = zh(Ce),
      Ie = Object.prototype.toString.apply(Ce);
    if (J && Ce && xt && Q.indexOf(Ie) < 0 && !(I(V) && Array.isArray(Ce))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const Ve = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(Y, Ce, { ...o, ns: y })
          : `key '${p} (${this.language})' returned an object instead of string.`;
        return d
          ? ((w.res = Ve), (w.usedParams = this.getUsedParamsDetails(o)), w)
          : Ve;
      }
      if (h) {
        const Ve = Array.isArray(Ce),
          De = Ve ? [] : {},
          lt = Ve ? q : Y;
        for (const j in Ce)
          if (Object.prototype.hasOwnProperty.call(Ce, j)) {
            const B = `${lt}${h}${j}`;
            ce && !_
              ? (De[j] = this.translate(B, {
                  ...o,
                  defaultValue: zh(Oe) ? Oe[j] : void 0,
                  joinArrays: !1,
                  ns: y,
                }))
              : (De[j] = this.translate(B, { ...o, joinArrays: !1, ns: y })),
              De[j] === B && (De[j] = Ce[j]);
          }
        _ = De;
      }
    } else if (J && I(V) && Array.isArray(_))
      (_ = _.join(V)), _ && (_ = this.extendTranslation(_, u, o, c));
    else {
      let Ve = !1,
        De = !1;
      !this.isValidLookup(_) && ce && ((Ve = !0), (_ = Oe)),
        this.isValidLookup(_) || ((De = !0), (_ = p));
      const j =
          (o.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          De
            ? void 0
            : _,
        B = ce && Oe !== _ && this.options.updateMissing;
      if (De || Ve || B) {
        if (
          (this.logger.log(B ? "updateKey" : "missingKey", b, g, p, B ? Oe : _),
          h)
        ) {
          const x = this.resolve(p, { ...o, keySeparator: !1 });
          x &&
            x.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let $ = [];
        const fe = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          o.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && fe && fe[0])
          for (let x = 0; x < fe.length; x++) $.push(fe[x]);
        else
          this.options.saveMissingTo === "all"
            ? ($ = this.languageUtils.toResolveHierarchy(
                o.lng || this.language
              ))
            : $.push(o.lng || this.language);
        const ge = (x, M, G) => {
          const X = ce && G !== _ ? G : j;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(x, g, M, X, B, o)
            : this.backendConnector?.saveMissing &&
              this.backendConnector.saveMissing(x, g, M, X, B, o),
            this.emit("missingKey", x, g, M, _);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && ue
            ? $.forEach((x) => {
                const M = this.pluralResolver.getSuffixes(x, o);
                ze &&
                  o[`defaultValue${this.options.pluralSeparator}zero`] &&
                  M.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  M.push(`${this.options.pluralSeparator}zero`),
                  M.forEach((G) => {
                    ge([x], p + G, o[`defaultValue${G}`] || Oe);
                  });
              })
            : ge($, p, Oe));
      }
      (_ = this.extendTranslation(_, u, o, w, c)),
        De &&
          _ === p &&
          this.options.appendNamespaceToMissingKey &&
          (_ = `${g}${E}${p}`),
        (De || Ve) &&
          this.options.parseMissingKeyHandler &&
          (_ = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${g}${E}${p}` : p,
            Ve ? _ : void 0,
            o
          ));
    }
    return d
      ? ((w.res = _), (w.usedParams = this.getUsedParamsDetails(o)), w)
      : _;
  }
  extendTranslation(u, s, c, o, d) {
    if (this.i18nFormat?.parse)
      u = this.i18nFormat.parse(
        u,
        { ...this.options.interpolation.defaultVariables, ...c },
        c.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o }
      );
    else if (!c.skipInterpolation) {
      c.interpolation &&
        this.interpolator.init({
          ...c,
          interpolation: { ...this.options.interpolation, ...c.interpolation },
        });
      const y =
        I(u) &&
        (c?.interpolation?.skipOnVariables !== void 0
          ? c.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let g;
      if (y) {
        const b = u.match(this.interpolator.nestingRegexp);
        g = b && b.length;
      }
      let E = c.replace && !I(c.replace) ? c.replace : c;
      if (
        (this.options.interpolation.defaultVariables &&
          (E = { ...this.options.interpolation.defaultVariables, ...E }),
        (u = this.interpolator.interpolate(
          u,
          E,
          c.lng || this.language || o.usedLng,
          c
        )),
        y)
      ) {
        const b = u.match(this.interpolator.nestingRegexp),
          R = b && b.length;
        g < R && (c.nest = !1);
      }
      !c.lng && o && o.res && (c.lng = this.language || o.usedLng),
        c.nest !== !1 &&
          (u = this.interpolator.nest(
            u,
            (...b) =>
              d?.[0] === b[0] && !c.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${b[0]} in key: ${s[0]}`
                  ),
                  null)
                : this.translate(...b, s),
            c
          )),
        c.interpolation && this.interpolator.reset();
    }
    const h = c.postProcess || this.options.postProcess,
      p = I(h) ? [h] : h;
    return (
      u != null &&
        p?.length &&
        c.applyPostProcessor !== !1 &&
        (u = em.handle(
          p,
          u,
          s,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(c),
                },
                ...c,
              }
            : c,
          this
        )),
      u
    );
  }
  resolve(u, s = {}) {
    let c, o, d, h, p;
    return (
      I(u) && (u = [u]),
      u.forEach((y) => {
        if (this.isValidLookup(c)) return;
        const g = this.extractFromKey(y, s),
          E = g.key;
        o = E;
        let b = g.namespaces;
        this.options.fallbackNS && (b = b.concat(this.options.fallbackNS));
        const R = s.count !== void 0 && !I(s.count),
          w = R && !s.ordinal && s.count === 0,
          _ =
            s.context !== void 0 &&
            (I(s.context) || typeof s.context == "number") &&
            s.context !== "",
          Y = s.lngs
            ? s.lngs
            : this.languageUtils.toResolveHierarchy(
                s.lng || this.language,
                s.fallbackLng
              );
        b.forEach((q) => {
          this.isValidLookup(c) ||
            ((p = q),
            !Ah[`${Y[0]}-${q}`] &&
              this.utils?.hasLoadedNamespace &&
              !this.utils?.hasLoadedNamespace(p) &&
              ((Ah[`${Y[0]}-${q}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${Y.join(
                  ", "
                )}" won't get resolved as namespace "${p}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            Y.forEach((Q) => {
              if (this.isValidLookup(c)) return;
              h = Q;
              const V = [E];
              if (this.i18nFormat?.addLookupKeys)
                this.i18nFormat.addLookupKeys(V, E, Q, q, s);
              else {
                let ue;
                R && (ue = this.pluralResolver.getSuffix(Q, s.count, s));
                const ce = `${this.options.pluralSeparator}zero`,
                  ye = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (R &&
                    (s.ordinal &&
                      ue.indexOf(ye) === 0 &&
                      V.push(E + ue.replace(ye, this.options.pluralSeparator)),
                    V.push(E + ue),
                    w && V.push(E + ce)),
                  _)
                ) {
                  const W = `${E}${this.options.contextSeparator || "_"}${
                    s.context
                  }`;
                  V.push(W),
                    R &&
                      (s.ordinal &&
                        ue.indexOf(ye) === 0 &&
                        V.push(
                          W + ue.replace(ye, this.options.pluralSeparator)
                        ),
                      V.push(W + ue),
                      w && V.push(W + ce));
                }
              }
              let J;
              for (; (J = V.pop()); )
                this.isValidLookup(c) ||
                  ((d = J), (c = this.getResource(Q, q, J, s)));
            }));
        });
      }),
      { res: c, usedKey: o, exactUsedKey: d, usedLng: h, usedNS: p }
    );
  }
  isValidLookup(u) {
    return (
      u !== void 0 &&
      !(!this.options.returnNull && u === null) &&
      !(!this.options.returnEmptyString && u === "")
    );
  }
  getResource(u, s, c, o = {}) {
    return this.i18nFormat?.getResource
      ? this.i18nFormat.getResource(u, s, c, o)
      : this.resourceStore.getResource(u, s, c, o);
  }
  getUsedParamsDetails(u = {}) {
    const s = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      c = u.replace && !I(u.replace);
    let o = c ? u.replace : u;
    if (
      (c && typeof u.count < "u" && (o.count = u.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !c)
    ) {
      o = { ...o };
      for (const d of s) delete o[d];
    }
    return o;
  }
  static hasDefaultValue(u) {
    const s = "defaultValue";
    for (const c in u)
      if (
        Object.prototype.hasOwnProperty.call(u, c) &&
        s === c.substring(0, s.length) &&
        u[c] !== void 0
      )
        return !0;
    return !1;
  }
}
class Rh {
  constructor(u) {
    (this.options = u),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Gt.create("languageUtils"));
  }
  getScriptPartFromCode(u) {
    if (((u = Qn(u)), !u || u.indexOf("-") < 0)) return null;
    const s = u.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(u) {
    if (((u = Qn(u)), !u || u.indexOf("-") < 0)) return u;
    const s = u.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(u) {
    if (I(u) && u.indexOf("-") > -1) {
      let s;
      try {
        s = Intl.getCanonicalLocales(u)[0];
      } catch {}
      return (
        s && this.options.lowerCaseLng && (s = s.toLowerCase()),
        s || (this.options.lowerCaseLng ? u.toLowerCase() : u)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? u.toLowerCase()
      : u;
  }
  isSupportedCode(u) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (u = this.getLanguagePartFromCode(u)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(u) > -1
    );
  }
  getBestMatchFromCodes(u) {
    if (!u) return null;
    let s;
    return (
      u.forEach((c) => {
        if (s) return;
        const o = this.formatLanguageCode(c);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (s = o);
      }),
      !s &&
        this.options.supportedLngs &&
        u.forEach((c) => {
          if (s) return;
          const o = this.getScriptPartFromCode(c);
          if (this.isSupportedCode(o)) return (s = o);
          const d = this.getLanguagePartFromCode(c);
          if (this.isSupportedCode(d)) return (s = d);
          s = this.options.supportedLngs.find((h) => {
            if (h === d) return h;
            if (
              !(h.indexOf("-") < 0 && d.indexOf("-") < 0) &&
              ((h.indexOf("-") > 0 &&
                d.indexOf("-") < 0 &&
                h.substring(0, h.indexOf("-")) === d) ||
                (h.indexOf(d) === 0 && d.length > 1))
            )
              return h;
          });
        }),
      s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]),
      s
    );
  }
  getFallbackCodes(u, s) {
    if (!u) return [];
    if (
      (typeof u == "function" && (u = u(s)),
      I(u) && (u = [u]),
      Array.isArray(u))
    )
      return u;
    if (!s) return u.default || [];
    let c = u[s];
    return (
      c || (c = u[this.getScriptPartFromCode(s)]),
      c || (c = u[this.formatLanguageCode(s)]),
      c || (c = u[this.getLanguagePartFromCode(s)]),
      c || (c = u.default),
      c || []
    );
  }
  toResolveHierarchy(u, s) {
    const c = this.getFallbackCodes(
        (s === !1 ? [] : s) || this.options.fallbackLng || [],
        u
      ),
      o = [],
      d = (h) => {
        h &&
          (this.isSupportedCode(h)
            ? o.push(h)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${h}`
              ));
      };
    return (
      I(u) && (u.indexOf("-") > -1 || u.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            d(this.formatLanguageCode(u)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            d(this.getScriptPartFromCode(u)),
          this.options.load !== "currentOnly" &&
            d(this.getLanguagePartFromCode(u)))
        : I(u) && d(this.formatLanguageCode(u)),
      c.forEach((h) => {
        o.indexOf(h) < 0 && d(this.formatLanguageCode(h));
      }),
      o
    );
  }
}
const Ch = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  wh = {
    select: (r) => (r === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class v0 {
  constructor(u, s = {}) {
    (this.languageUtils = u),
      (this.options = s),
      (this.logger = Gt.create("pluralResolver")),
      (this.pluralRulesCache = {});
  }
  addRule(u, s) {
    this.rules[u] = s;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(u, s = {}) {
    const c = Qn(u === "dev" ? "en" : u),
      o = s.ordinal ? "ordinal" : "cardinal",
      d = JSON.stringify({ cleanedCode: c, type: o });
    if (d in this.pluralRulesCache) return this.pluralRulesCache[d];
    let h;
    try {
      h = new Intl.PluralRules(c, { type: o });
    } catch {
      if (!Intl)
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"), wh
        );
      if (!u.match(/-|_/)) return wh;
      const y = this.languageUtils.getLanguagePartFromCode(u);
      h = this.getRule(y, s);
    }
    return (this.pluralRulesCache[d] = h), h;
  }
  needsPlural(u, s = {}) {
    let c = this.getRule(u, s);
    return (
      c || (c = this.getRule("dev", s)),
      c?.resolvedOptions().pluralCategories.length > 1
    );
  }
  getPluralFormsOfKey(u, s, c = {}) {
    return this.getSuffixes(u, c).map((o) => `${s}${o}`);
  }
  getSuffixes(u, s = {}) {
    let c = this.getRule(u, s);
    return (
      c || (c = this.getRule("dev", s)),
      c
        ? c
            .resolvedOptions()
            .pluralCategories.sort((o, d) => Ch[o] - Ch[d])
            .map(
              (o) =>
                `${this.options.prepend}${
                  s.ordinal ? `ordinal${this.options.prepend}` : ""
                }${o}`
            )
        : []
    );
  }
  getSuffix(u, s, c = {}) {
    const o = this.getRule(u, c);
    return o
      ? `${this.options.prepend}${
          c.ordinal ? `ordinal${this.options.prepend}` : ""
        }${o.select(s)}`
      : (this.logger.warn(`no plural rule found for: ${u}`),
        this.getSuffix("dev", s, c));
  }
}
const jh = (r, u, s, c = ".", o = !0) => {
    let d = c0(r, u, s);
    return (
      !d && o && I(s) && ((d = lc(r, s, c)), d === void 0 && (d = lc(u, s, c))),
      d
    );
  },
  kr = (r) => r.replace(/\$/g, "$$$$");
class b0 {
  constructor(u = {}) {
    (this.logger = Gt.create("interpolator")),
      (this.options = u),
      (this.format = u?.interpolation?.format || ((s) => s)),
      this.init(u);
  }
  init(u = {}) {
    u.interpolation || (u.interpolation = { escapeValue: !0 });
    const {
      escape: s,
      escapeValue: c,
      useRawValueToEscape: o,
      prefix: d,
      prefixEscaped: h,
      suffix: p,
      suffixEscaped: y,
      formatSeparator: g,
      unescapeSuffix: E,
      unescapePrefix: b,
      nestingPrefix: R,
      nestingPrefixEscaped: w,
      nestingSuffix: _,
      nestingSuffixEscaped: Y,
      nestingOptionsSeparator: q,
      maxReplaces: Q,
      alwaysFormat: V,
    } = u.interpolation;
    (this.escape = s !== void 0 ? s : f0),
      (this.escapeValue = c !== void 0 ? c : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = d ? Ba(d) : h || "{{"),
      (this.suffix = p ? Ba(p) : y || "}}"),
      (this.formatSeparator = g || ","),
      (this.unescapePrefix = E ? "" : b || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : E || ""),
      (this.nestingPrefix = R ? Ba(R) : w || Ba("$t(")),
      (this.nestingSuffix = _ ? Ba(_) : Y || Ba(")")),
      (this.nestingOptionsSeparator = q || ","),
      (this.maxReplaces = Q || 1e3),
      (this.alwaysFormat = V !== void 0 ? V : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const u = (s, c) =>
      s?.source === c ? ((s.lastIndex = 0), s) : new RegExp(c, "g");
    (this.regexp = u(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = u(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = u(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`
      ));
  }
  interpolate(u, s, c, o) {
    let d, h, p;
    const y =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      g = (w) => {
        if (w.indexOf(this.formatSeparator) < 0) {
          const Q = jh(
            s,
            y,
            w,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(Q, void 0, c, { ...o, ...s, interpolationkey: w })
            : Q;
        }
        const _ = w.split(this.formatSeparator),
          Y = _.shift().trim(),
          q = _.join(this.formatSeparator).trim();
        return this.format(
          jh(
            s,
            y,
            Y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          q,
          c,
          { ...o, ...s, interpolationkey: Y }
        );
      };
    this.resetRegExp();
    const E =
        o?.missingInterpolationHandler ||
        this.options.missingInterpolationHandler,
      b =
        o?.interpolation?.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (w) => kr(w) },
        {
          regex: this.regexp,
          safeValue: (w) => (this.escapeValue ? kr(this.escape(w)) : kr(w)),
        },
      ].forEach((w) => {
        for (p = 0; (d = w.regex.exec(u)); ) {
          const _ = d[1].trim();
          if (((h = g(_)), h === void 0))
            if (typeof E == "function") {
              const q = E(u, d, o);
              h = I(q) ? q : "";
            } else if (o && Object.prototype.hasOwnProperty.call(o, _)) h = "";
            else if (b) {
              h = d[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${_} for interpolating ${u}`
              ),
                (h = "");
          else !I(h) && !this.useRawValueToEscape && (h = Sh(h));
          const Y = w.safeValue(h);
          if (
            ((u = u.replace(d[0], Y)),
            b
              ? ((w.regex.lastIndex += h.length),
                (w.regex.lastIndex -= d[0].length))
              : (w.regex.lastIndex = 0),
            p++,
            p >= this.maxReplaces)
          )
            break;
        }
      }),
      u
    );
  }
  nest(u, s, c = {}) {
    let o, d, h;
    const p = (y, g) => {
      const E = this.nestingOptionsSeparator;
      if (y.indexOf(E) < 0) return y;
      const b = y.split(new RegExp(`${E}[ ]*{`));
      let R = `{${b[1]}`;
      (y = b[0]), (R = this.interpolate(R, h));
      const w = R.match(/'/g),
        _ = R.match(/"/g);
      (((w?.length ?? 0) % 2 === 0 && !_) || _.length % 2 !== 0) &&
        (R = R.replace(/'/g, '"'));
      try {
        (h = JSON.parse(R)), g && (h = { ...g, ...h });
      } catch (Y) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${y}`,
            Y
          ),
          `${y}${E}${R}`
        );
      }
      return (
        h.defaultValue &&
          h.defaultValue.indexOf(this.prefix) > -1 &&
          delete h.defaultValue,
        y
      );
    };
    for (; (o = this.nestingRegexp.exec(u)); ) {
      let y = [];
      (h = { ...c }),
        (h = h.replace && !I(h.replace) ? h.replace : h),
        (h.applyPostProcessor = !1),
        delete h.defaultValue;
      const g = /{.*}/.test(o[1])
        ? o[1].lastIndexOf("}") + 1
        : o[1].indexOf(this.formatSeparator);
      if (
        (g !== -1 &&
          ((y = o[1]
            .slice(g)
            .split(this.formatSeparator)
            .map((E) => E.trim())
            .filter(Boolean)),
          (o[1] = o[1].slice(0, g))),
        (d = s(p.call(this, o[1].trim(), h), h)),
        d && o[0] === u && !I(d))
      )
        return d;
      I(d) || (d = Sh(d)),
        d ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${u}`),
          (d = "")),
        y.length &&
          (d = y.reduce(
            (E, b) =>
              this.format(E, b, c.lng, { ...c, interpolationkey: o[1].trim() }),
            d.trim()
          )),
        (u = u.replace(o[0], d)),
        (this.regexp.lastIndex = 0);
    }
    return u;
  }
}
const x0 = (r) => {
    let u = r.toLowerCase().trim();
    const s = {};
    if (r.indexOf("(") > -1) {
      const c = r.split("(");
      u = c[0].toLowerCase().trim();
      const o = c[1].substring(0, c[1].length - 1);
      u === "currency" && o.indexOf(":") < 0
        ? s.currency || (s.currency = o.trim())
        : u === "relativetime" && o.indexOf(":") < 0
        ? s.range || (s.range = o.trim())
        : o.split(";").forEach((h) => {
            if (h) {
              const [p, ...y] = h.split(":"),
                g = y
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                E = p.trim();
              s[E] || (s[E] = g),
                g === "false" && (s[E] = !1),
                g === "true" && (s[E] = !0),
                isNaN(g) || (s[E] = parseInt(g, 10));
            }
          });
    }
    return { formatName: u, formatOptions: s };
  },
  Dh = (r) => {
    const u = {};
    return (s, c, o) => {
      let d = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (d = { ...d, [o.interpolationkey]: void 0 });
      const h = c + JSON.stringify(d);
      let p = u[h];
      return p || ((p = r(Qn(c), o)), (u[h] = p)), p(s);
    };
  },
  S0 = (r) => (u, s, c) => r(Qn(s), c)(u);
class E0 {
  constructor(u = {}) {
    (this.logger = Gt.create("formatter")), (this.options = u), this.init(u);
  }
  init(u, s = { interpolation: {} }) {
    this.formatSeparator = s.interpolation.formatSeparator || ",";
    const c = s.cacheInBuiltFormats ? Dh : S0;
    this.formats = {
      number: c((o, d) => {
        const h = new Intl.NumberFormat(o, { ...d });
        return (p) => h.format(p);
      }),
      currency: c((o, d) => {
        const h = new Intl.NumberFormat(o, { ...d, style: "currency" });
        return (p) => h.format(p);
      }),
      datetime: c((o, d) => {
        const h = new Intl.DateTimeFormat(o, { ...d });
        return (p) => h.format(p);
      }),
      relativetime: c((o, d) => {
        const h = new Intl.RelativeTimeFormat(o, { ...d });
        return (p) => h.format(p, d.range || "day");
      }),
      list: c((o, d) => {
        const h = new Intl.ListFormat(o, { ...d });
        return (p) => h.format(p);
      }),
    };
  }
  add(u, s) {
    this.formats[u.toLowerCase().trim()] = s;
  }
  addCached(u, s) {
    this.formats[u.toLowerCase().trim()] = Dh(s);
  }
  format(u, s, c, o = {}) {
    const d = s.split(this.formatSeparator);
    if (
      d.length > 1 &&
      d[0].indexOf("(") > 1 &&
      d[0].indexOf(")") < 0 &&
      d.find((p) => p.indexOf(")") > -1)
    ) {
      const p = d.findIndex((y) => y.indexOf(")") > -1);
      d[0] = [d[0], ...d.splice(1, p)].join(this.formatSeparator);
    }
    return d.reduce((p, y) => {
      const { formatName: g, formatOptions: E } = x0(y);
      if (this.formats[g]) {
        let b = p;
        try {
          const R = o?.formatParams?.[o.interpolationkey] || {},
            w = R.locale || R.lng || o.locale || o.lng || c;
          b = this.formats[g](p, w, { ...E, ...o, ...R });
        } catch (R) {
          this.logger.warn(R);
        }
        return b;
      } else this.logger.warn(`there was no format function for ${g}`);
      return p;
    }, u);
  }
}
const T0 = (r, u) => {
  r.pending[u] !== void 0 && (delete r.pending[u], r.pendingCount--);
};
class O0 extends Tu {
  constructor(u, s, c, o = {}) {
    super(),
      (this.backend = u),
      (this.store = s),
      (this.services = c),
      (this.languageUtils = c.languageUtils),
      (this.options = o),
      (this.logger = Gt.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend?.init?.(c, o.backend, o);
  }
  queueLoad(u, s, c, o) {
    const d = {},
      h = {},
      p = {},
      y = {};
    return (
      u.forEach((g) => {
        let E = !0;
        s.forEach((b) => {
          const R = `${g}|${b}`;
          !c.reload && this.store.hasResourceBundle(g, b)
            ? (this.state[R] = 2)
            : this.state[R] < 0 ||
              (this.state[R] === 1
                ? h[R] === void 0 && (h[R] = !0)
                : ((this.state[R] = 1),
                  (E = !1),
                  h[R] === void 0 && (h[R] = !0),
                  d[R] === void 0 && (d[R] = !0),
                  y[b] === void 0 && (y[b] = !0)));
        }),
          E || (p[g] = !0);
      }),
      (Object.keys(d).length || Object.keys(h).length) &&
        this.queue.push({
          pending: h,
          pendingCount: Object.keys(h).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(d),
        pending: Object.keys(h),
        toLoadLanguages: Object.keys(p),
        toLoadNamespaces: Object.keys(y),
      }
    );
  }
  loaded(u, s, c) {
    const o = u.split("|"),
      d = o[0],
      h = o[1];
    s && this.emit("failedLoading", d, h, s),
      !s &&
        c &&
        this.store.addResourceBundle(d, h, c, void 0, void 0, { skipCopy: !0 }),
      (this.state[u] = s ? -1 : 2),
      s && c && (this.state[u] = 0);
    const p = {};
    this.queue.forEach((y) => {
      r0(y.loaded, [d], h),
        T0(y, u),
        s && y.errors.push(s),
        y.pendingCount === 0 &&
          !y.done &&
          (Object.keys(y.loaded).forEach((g) => {
            p[g] || (p[g] = {});
            const E = y.loaded[g];
            E.length &&
              E.forEach((b) => {
                p[g][b] === void 0 && (p[g][b] = !0);
              });
          }),
          (y.done = !0),
          y.errors.length ? y.callback(y.errors) : y.callback());
    }),
      this.emit("loaded", p),
      (this.queue = this.queue.filter((y) => !y.done));
  }
  read(u, s, c, o = 0, d = this.retryTimeout, h) {
    if (!u.length) return h(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: u,
        ns: s,
        fcName: c,
        tried: o,
        wait: d,
        callback: h,
      });
      return;
    }
    this.readingCalls++;
    const p = (g, E) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const b = this.waitingReads.shift();
          this.read(b.lng, b.ns, b.fcName, b.tried, b.wait, b.callback);
        }
        if (g && E && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, u, s, c, o + 1, d * 2, h);
          }, d);
          return;
        }
        h(g, E);
      },
      y = this.backend[c].bind(this.backend);
    if (y.length === 2) {
      try {
        const g = y(u, s);
        g && typeof g.then == "function"
          ? g.then((E) => p(null, E)).catch(p)
          : p(null, g);
      } catch (g) {
        p(g);
      }
      return;
    }
    return y(u, s, p);
  }
  prepareLoading(u, s, c = {}, o) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        o && o()
      );
    I(u) && (u = this.languageUtils.toResolveHierarchy(u)), I(s) && (s = [s]);
    const d = this.queueLoad(u, s, c, o);
    if (!d.toLoad.length) return d.pending.length || o(), null;
    d.toLoad.forEach((h) => {
      this.loadOne(h);
    });
  }
  load(u, s, c) {
    this.prepareLoading(u, s, {}, c);
  }
  reload(u, s, c) {
    this.prepareLoading(u, s, { reload: !0 }, c);
  }
  loadOne(u, s = "") {
    const c = u.split("|"),
      o = c[0],
      d = c[1];
    this.read(o, d, "read", void 0, void 0, (h, p) => {
      h &&
        this.logger.warn(
          `${s}loading namespace ${d} for language ${o} failed`,
          h
        ),
        !h &&
          p &&
          this.logger.log(`${s}loaded namespace ${d} for language ${o}`, p),
        this.loaded(u, h, p);
    });
  }
  saveMissing(u, s, c, o, d, h = {}, p = () => {}) {
    if (
      this.services?.utils?.hasLoadedNamespace &&
      !this.services?.utils?.hasLoadedNamespace(s)
    ) {
      this.logger.warn(
        `did not save key "${c}" as the namespace "${s}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(c == null || c === "")) {
      if (this.backend?.create) {
        const y = { ...h, isUpdate: d },
          g = this.backend.create.bind(this.backend);
        if (g.length < 6)
          try {
            let E;
            g.length === 5 ? (E = g(u, s, c, o, y)) : (E = g(u, s, c, o)),
              E && typeof E.then == "function"
                ? E.then((b) => p(null, b)).catch(p)
                : p(null, E);
          } catch (E) {
            p(E);
          }
        else g(u, s, c, o, p, y);
      }
      !u || !u[0] || this.store.addResource(u[0], s, c, o);
    }
  }
}
const _h = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (r) => {
      let u = {};
      if (
        (typeof r[1] == "object" && (u = r[1]),
        I(r[1]) && (u.defaultValue = r[1]),
        I(r[2]) && (u.tDescription = r[2]),
        typeof r[2] == "object" || typeof r[3] == "object")
      ) {
        const s = r[3] || r[2];
        Object.keys(s).forEach((c) => {
          u[c] = s[c];
        });
      }
      return u;
    },
    interpolation: {
      escapeValue: !0,
      format: (r) => r,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  Mh = (r) => (
    I(r.ns) && (r.ns = [r.ns]),
    I(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]),
    I(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]),
    r.supportedLngs?.indexOf?.("cimode") < 0 &&
      (r.supportedLngs = r.supportedLngs.concat(["cimode"])),
    typeof r.initImmediate == "boolean" && (r.initAsync = r.initImmediate),
    r
  ),
  gu = () => {},
  N0 = (r) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((s) => {
      typeof r[s] == "function" && (r[s] = r[s].bind(r));
    });
  };
class Xn extends Tu {
  constructor(u = {}, s) {
    if (
      (super(),
      (this.options = Mh(u)),
      (this.services = {}),
      (this.logger = Gt),
      (this.modules = { external: [] }),
      N0(this),
      s && !this.isInitialized && !u.isClone)
    ) {
      if (!this.options.initAsync) return this.init(u, s), this;
      setTimeout(() => {
        this.init(u, s);
      }, 0);
    }
  }
  init(u = {}, s) {
    (this.isInitializing = !0),
      typeof u == "function" && ((s = u), (u = {})),
      u.defaultNS == null &&
        u.ns &&
        (I(u.ns)
          ? (u.defaultNS = u.ns)
          : u.ns.indexOf("translation") < 0 && (u.defaultNS = u.ns[0]));
    const c = _h();
    (this.options = { ...c, ...this.options, ...Mh(u) }),
      (this.options.interpolation = {
        ...c.interpolation,
        ...this.options.interpolation,
      }),
      u.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = u.keySeparator),
      u.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = u.nsSeparator);
    const o = (g) => (g ? (typeof g == "function" ? new g() : g) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Gt.init(o(this.modules.logger), this.options)
        : Gt.init(null, this.options);
      let g;
      this.modules.formatter ? (g = this.modules.formatter) : (g = E0);
      const E = new Rh(this.options);
      this.store = new Nh(this.options.resources, this.options);
      const b = this.services;
      (b.logger = Gt),
        (b.resourceStore = this.store),
        (b.languageUtils = E),
        (b.pluralResolver = new v0(E, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== c.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"
          ),
        g &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === c.interpolation.format) &&
          ((b.formatter = o(g)),
          b.formatter.init && b.formatter.init(b, this.options),
          (this.options.interpolation.format = b.formatter.format.bind(
            b.formatter
          ))),
        (b.interpolator = new b0(this.options)),
        (b.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (b.backendConnector = new O0(
          o(this.modules.backend),
          b.resourceStore,
          b,
          this.options
        )),
        b.backendConnector.on("*", (w, ..._) => {
          this.emit(w, ..._);
        }),
        this.modules.languageDetector &&
          ((b.languageDetector = o(this.modules.languageDetector)),
          b.languageDetector.init &&
            b.languageDetector.init(b, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((b.i18nFormat = o(this.modules.i18nFormat)),
          b.i18nFormat.init && b.i18nFormat.init(this)),
        (this.translator = new Su(this.services, this.options)),
        this.translator.on("*", (w, ..._) => {
          this.emit(w, ..._);
        }),
        this.modules.external.forEach((w) => {
          w.init && w.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      s || (s = gu),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const g = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((g) => {
        this[g] = (...E) => this.store[g](...E);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((g) => {
        this[g] = (...E) => (this.store[g](...E), this);
      });
    const p = Hn(),
      y = () => {
        const g = (E, b) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            p.resolve(b),
            s(E, b);
        };
        if (this.languages && !this.isInitialized)
          return g(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, g);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? y()
        : setTimeout(y, 0),
      p
    );
  }
  loadResources(u, s = gu) {
    let c = s;
    const o = I(u) ? u : this.language;
    if (
      (typeof u == "function" && (c = u),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        o?.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return c();
      const d = [],
        h = (p) => {
          if (!p || p === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(p).forEach((g) => {
            g !== "cimode" && d.indexOf(g) < 0 && d.push(g);
          });
        };
      o
        ? h(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((y) => h(y)),
        this.options.preload?.forEach?.((p) => h(p)),
        this.services.backendConnector.load(d, this.options.ns, (p) => {
          !p &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            c(p);
        });
    } else c(null);
  }
  reloadResources(u, s, c) {
    const o = Hn();
    return (
      typeof u == "function" && ((c = u), (u = void 0)),
      typeof s == "function" && ((c = s), (s = void 0)),
      u || (u = this.languages),
      s || (s = this.options.ns),
      c || (c = gu),
      this.services.backendConnector.reload(u, s, (d) => {
        o.resolve(), c(d);
      }),
      o
    );
  }
  use(u) {
    if (!u)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!u.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      u.type === "backend" && (this.modules.backend = u),
      (u.type === "logger" || (u.log && u.warn && u.error)) &&
        (this.modules.logger = u),
      u.type === "languageDetector" && (this.modules.languageDetector = u),
      u.type === "i18nFormat" && (this.modules.i18nFormat = u),
      u.type === "postProcessor" && em.addPostProcessor(u),
      u.type === "formatter" && (this.modules.formatter = u),
      u.type === "3rdParty" && this.modules.external.push(u),
      this
    );
  }
  setResolvedLanguage(u) {
    if (!(!u || !this.languages) && !(["cimode", "dev"].indexOf(u) > -1)) {
      for (let s = 0; s < this.languages.length; s++) {
        const c = this.languages[s];
        if (
          !(["cimode", "dev"].indexOf(c) > -1) &&
          this.store.hasLanguageSomeTranslations(c)
        ) {
          this.resolvedLanguage = c;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(u) < 0 &&
        this.store.hasLanguageSomeTranslations(u) &&
        ((this.resolvedLanguage = u), this.languages.unshift(u));
    }
  }
  changeLanguage(u, s) {
    this.isLanguageChangingTo = u;
    const c = Hn();
    this.emit("languageChanging", u);
    const o = (p) => {
        (this.language = p),
          (this.languages = this.services.languageUtils.toResolveHierarchy(p)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(p);
      },
      d = (p, y) => {
        y
          ? this.isLanguageChangingTo === u &&
            (o(y),
            this.translator.changeLanguage(y),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", y),
            this.logger.log("languageChanged", y))
          : (this.isLanguageChangingTo = void 0),
          c.resolve((...g) => this.t(...g)),
          s && s(p, (...g) => this.t(...g));
      },
      h = (p) => {
        !u && !p && this.services.languageDetector && (p = []);
        const y = I(p) ? p : p && p[0],
          g = this.store.hasLanguageSomeTranslations(y)
            ? y
            : this.services.languageUtils.getBestMatchFromCodes(I(p) ? [p] : p);
        g &&
          (this.language || o(g),
          this.translator.language || this.translator.changeLanguage(g),
          this.services.languageDetector?.cacheUserLanguage?.(g)),
          this.loadResources(g, (E) => {
            d(E, g);
          });
      };
    return (
      !u &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? h(this.services.languageDetector.detect())
        : !u &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(h)
          : this.services.languageDetector.detect(h)
        : h(u),
      c
    );
  }
  getFixedT(u, s, c) {
    const o = (d, h, ...p) => {
      let y;
      typeof h != "object"
        ? (y = this.options.overloadTranslationOptionHandler([d, h].concat(p)))
        : (y = { ...h }),
        (y.lng = y.lng || o.lng),
        (y.lngs = y.lngs || o.lngs),
        (y.ns = y.ns || o.ns),
        y.keyPrefix !== "" && (y.keyPrefix = y.keyPrefix || c || o.keyPrefix);
      const g = this.options.keySeparator || ".";
      let E;
      return (
        y.keyPrefix && Array.isArray(d)
          ? (E = d.map(
              (b) => (
                typeof b == "function" && (b = ac(b, h)),
                `${y.keyPrefix}${g}${b}`
              )
            ))
          : (typeof d == "function" && (d = ac(d, h)),
            (E = y.keyPrefix ? `${y.keyPrefix}${g}${d}` : d)),
        this.t(E, y)
      );
    };
    return I(u) ? (o.lng = u) : (o.lngs = u), (o.ns = s), (o.keyPrefix = c), o;
  }
  t(...u) {
    return this.translator?.translate(...u);
  }
  exists(...u) {
    return this.translator?.exists(...u);
  }
  setDefaultNamespace(u) {
    this.options.defaultNS = u;
  }
  hasLoadedNamespace(u, s = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const c = s.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      d = this.languages[this.languages.length - 1];
    if (c.toLowerCase() === "cimode") return !0;
    const h = (p, y) => {
      const g = this.services.backendConnector.state[`${p}|${y}`];
      return g === -1 || g === 0 || g === 2;
    };
    if (s.precheck) {
      const p = s.precheck(this, h);
      if (p !== void 0) return p;
    }
    return !!(
      this.hasResourceBundle(c, u) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (h(c, u) && (!o || h(d, u)))
    );
  }
  loadNamespaces(u, s) {
    const c = Hn();
    return this.options.ns
      ? (I(u) && (u = [u]),
        u.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          c.resolve(), s && s(o);
        }),
        c)
      : (s && s(), Promise.resolve());
  }
  loadLanguages(u, s) {
    const c = Hn();
    I(u) && (u = [u]);
    const o = this.options.preload || [],
      d = u.filter(
        (h) =>
          o.indexOf(h) < 0 && this.services.languageUtils.isSupportedCode(h)
      );
    return d.length
      ? ((this.options.preload = o.concat(d)),
        this.loadResources((h) => {
          c.resolve(), s && s(h);
        }),
        c)
      : (s && s(), Promise.resolve());
  }
  dir(u) {
    if (
      (u ||
        (u =
          this.resolvedLanguage ||
          (this.languages?.length > 0 ? this.languages[0] : this.language)),
      !u)
    )
      return "rtl";
    try {
      const o = new Intl.Locale(u);
      if (o && o.getTextInfo) {
        const d = o.getTextInfo();
        if (d && d.direction) return d.direction;
      }
    } catch {}
    const s = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      c = this.services?.languageUtils || new Rh(_h());
    return u.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : s.indexOf(c.getLanguagePartFromCode(u)) > -1 ||
        u.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance(u = {}, s) {
    return new Xn(u, s);
  }
  cloneInstance(u = {}, s = gu) {
    const c = u.forkResourceStore;
    c && delete u.forkResourceStore;
    const o = { ...this.options, ...u, isClone: !0 },
      d = new Xn(o);
    if (
      ((u.debug !== void 0 || u.prefix !== void 0) &&
        (d.logger = d.logger.clone(u)),
      ["store", "services", "language"].forEach((p) => {
        d[p] = this[p];
      }),
      (d.services = { ...this.services }),
      (d.services.utils = { hasLoadedNamespace: d.hasLoadedNamespace.bind(d) }),
      c)
    ) {
      const p = Object.keys(this.store.data).reduce(
        (y, g) => (
          (y[g] = { ...this.store.data[g] }),
          (y[g] = Object.keys(y[g]).reduce(
            (E, b) => ((E[b] = { ...y[g][b] }), E),
            y[g]
          )),
          y
        ),
        {}
      );
      (d.store = new Nh(p, o)), (d.services.resourceStore = d.store);
    }
    return (
      (d.translator = new Su(d.services, o)),
      d.translator.on("*", (p, ...y) => {
        d.emit(p, ...y);
      }),
      d.init(o, s),
      (d.translator.options = o),
      (d.translator.backendConnector.services.utils = {
        hasLoadedNamespace: d.hasLoadedNamespace.bind(d),
      }),
      d
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const We = Xn.createInstance();
We.createInstance = Xn.createInstance;
We.createInstance;
We.dir;
We.init;
We.loadResources;
We.reloadResources;
We.use;
We.changeLanguage;
We.getFixedT;
We.t;
We.exists;
We.setDefaultNamespace;
We.hasLoadedNamespace;
We.loadNamespaces;
We.loadLanguages;
const A0 =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  z0 = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  R0 = (r) => z0[r],
  C0 = (r) => r.replace(A0, R0);
let Uh = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: C0,
};
const w0 = (r = {}) => {
    Uh = { ...Uh, ...r };
  },
  j0 = {
    type: "3rdParty",
    init(r) {
      w0(r.options.react);
    },
  },
  D0 = L.createContext();
function _0({ i18n: r, defaultNS: u, children: s }) {
  const c = L.useMemo(() => ({ i18n: r, defaultNS: u }), [r, u]);
  return L.createElement(D0.Provider, { value: c }, s);
}
const { slice: M0, forEach: U0 } = [];
function L0(r) {
  return (
    U0.call(M0.call(arguments, 1), (u) => {
      if (u) for (const s in u) r[s] === void 0 && (r[s] = u[s]);
    }),
    r
  );
}
function H0(r) {
  return typeof r != "string"
    ? !1
    : [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i,
      ].some((s) => s.test(r));
}
const Lh = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  B0 = function (r, u) {
    const c =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: "/" },
      o = encodeURIComponent(u);
    let d = `${r}=${o}`;
    if (c.maxAge > 0) {
      const h = c.maxAge - 0;
      if (Number.isNaN(h)) throw new Error("maxAge should be a Number");
      d += `; Max-Age=${Math.floor(h)}`;
    }
    if (c.domain) {
      if (!Lh.test(c.domain)) throw new TypeError("option domain is invalid");
      d += `; Domain=${c.domain}`;
    }
    if (c.path) {
      if (!Lh.test(c.path)) throw new TypeError("option path is invalid");
      d += `; Path=${c.path}`;
    }
    if (c.expires) {
      if (typeof c.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      d += `; Expires=${c.expires.toUTCString()}`;
    }
    if (
      (c.httpOnly && (d += "; HttpOnly"),
      c.secure && (d += "; Secure"),
      c.sameSite)
    )
      switch (
        typeof c.sameSite == "string" ? c.sameSite.toLowerCase() : c.sameSite
      ) {
        case !0:
          d += "; SameSite=Strict";
          break;
        case "lax":
          d += "; SameSite=Lax";
          break;
        case "strict":
          d += "; SameSite=Strict";
          break;
        case "none":
          d += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return c.partitioned && (d += "; Partitioned"), d;
  },
  Hh = {
    create(r, u, s, c) {
      let o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      s &&
        ((o.expires = new Date()),
        o.expires.setTime(o.expires.getTime() + s * 60 * 1e3)),
        c && (o.domain = c),
        (document.cookie = B0(r, u, o));
    },
    read(r) {
      const u = `${r}=`,
        s = document.cookie.split(";");
      for (let c = 0; c < s.length; c++) {
        let o = s[c];
        for (; o.charAt(0) === " "; ) o = o.substring(1, o.length);
        if (o.indexOf(u) === 0) return o.substring(u.length, o.length);
      }
      return null;
    },
    remove(r, u) {
      this.create(r, "", -1, u);
    },
  };
var q0 = {
    name: "cookie",
    lookup(r) {
      let { lookupCookie: u } = r;
      if (u && typeof document < "u") return Hh.read(u) || void 0;
    },
    cacheUserLanguage(r, u) {
      let {
        lookupCookie: s,
        cookieMinutes: c,
        cookieDomain: o,
        cookieOptions: d,
      } = u;
      s && typeof document < "u" && Hh.create(s, r, c, o, d);
    },
  },
  Y0 = {
    name: "querystring",
    lookup(r) {
      let { lookupQuerystring: u } = r,
        s;
      if (typeof window < "u") {
        let { search: c } = window.location;
        !window.location.search &&
          window.location.hash?.indexOf("?") > -1 &&
          (c = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        const d = c.substring(1).split("&");
        for (let h = 0; h < d.length; h++) {
          const p = d[h].indexOf("=");
          p > 0 && d[h].substring(0, p) === u && (s = d[h].substring(p + 1));
        }
      }
      return s;
    },
  },
  G0 = {
    name: "hash",
    lookup(r) {
      let { lookupHash: u, lookupFromHashIndex: s } = r,
        c;
      if (typeof window < "u") {
        const { hash: o } = window.location;
        if (o && o.length > 2) {
          const d = o.substring(1);
          if (u) {
            const h = d.split("&");
            for (let p = 0; p < h.length; p++) {
              const y = h[p].indexOf("=");
              y > 0 &&
                h[p].substring(0, y) === u &&
                (c = h[p].substring(y + 1));
            }
          }
          if (c) return c;
          if (!c && s > -1) {
            const h = o.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(h)
              ? h[typeof s == "number" ? s : 0]?.replace("/", "")
              : void 0;
          }
        }
      }
      return c;
    },
  };
let qa = null;
const Bh = () => {
  if (qa !== null) return qa;
  try {
    if (((qa = typeof window < "u" && window.localStorage !== null), !qa))
      return !1;
    const r = "i18next.translate.boo";
    window.localStorage.setItem(r, "foo"), window.localStorage.removeItem(r);
  } catch {
    qa = !1;
  }
  return qa;
};
var V0 = {
  name: "localStorage",
  lookup(r) {
    let { lookupLocalStorage: u } = r;
    if (u && Bh()) return window.localStorage.getItem(u) || void 0;
  },
  cacheUserLanguage(r, u) {
    let { lookupLocalStorage: s } = u;
    s && Bh() && window.localStorage.setItem(s, r);
  },
};
let Ya = null;
const qh = () => {
  if (Ya !== null) return Ya;
  try {
    if (((Ya = typeof window < "u" && window.sessionStorage !== null), !Ya))
      return !1;
    const r = "i18next.translate.boo";
    window.sessionStorage.setItem(r, "foo"),
      window.sessionStorage.removeItem(r);
  } catch {
    Ya = !1;
  }
  return Ya;
};
var Q0 = {
    name: "sessionStorage",
    lookup(r) {
      let { lookupSessionStorage: u } = r;
      if (u && qh()) return window.sessionStorage.getItem(u) || void 0;
    },
    cacheUserLanguage(r, u) {
      let { lookupSessionStorage: s } = u;
      s && qh() && window.sessionStorage.setItem(s, r);
    },
  },
  X0 = {
    name: "navigator",
    lookup(r) {
      const u = [];
      if (typeof navigator < "u") {
        const { languages: s, userLanguage: c, language: o } = navigator;
        if (s) for (let d = 0; d < s.length; d++) u.push(s[d]);
        c && u.push(c), o && u.push(o);
      }
      return u.length > 0 ? u : void 0;
    },
  },
  Z0 = {
    name: "htmlTag",
    lookup(r) {
      let { htmlTag: u } = r,
        s;
      const c = u || (typeof document < "u" ? document.documentElement : null);
      return (
        c &&
          typeof c.getAttribute == "function" &&
          (s = c.getAttribute("lang")),
        s
      );
    },
  },
  K0 = {
    name: "path",
    lookup(r) {
      let { lookupFromPathIndex: u } = r;
      if (typeof window > "u") return;
      const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(s)
        ? s[typeof u == "number" ? u : 0]?.replace("/", "")
        : void 0;
    },
  },
  J0 = {
    name: "subdomain",
    lookup(r) {
      let { lookupFromSubdomainIndex: u } = r;
      const s = typeof u == "number" ? u + 1 : 1,
        c =
          typeof window < "u" &&
          window.location?.hostname?.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (c) return c[s];
    },
  };
let lm = !1;
try {
  document.cookie, (lm = !0);
} catch {}
const am = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
lm || am.splice(1, 1);
const k0 = () => ({
  order: am,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (r) => r,
});
class nm {
  constructor(u) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = "languageDetector"), (this.detectors = {}), this.init(u, s);
  }
  init() {
    let u =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = u),
      (this.options = L0(s, this.options || {}, k0())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (o) => o.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = c),
      this.addDetector(q0),
      this.addDetector(Y0),
      this.addDetector(V0),
      this.addDetector(Q0),
      this.addDetector(X0),
      this.addDetector(Z0),
      this.addDetector(K0),
      this.addDetector(J0),
      this.addDetector(G0);
  }
  addDetector(u) {
    return (this.detectors[u.name] = u), this;
  }
  detect() {
    let u =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      s = [];
    return (
      u.forEach((c) => {
        if (this.detectors[c]) {
          let o = this.detectors[c].lookup(this.options);
          o && typeof o == "string" && (o = [o]), o && (s = s.concat(o));
        }
      }),
      (s = s
        .filter((c) => c != null && !H0(c))
        .map((c) => this.options.convertDetectedLanguage(c))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? s
        : s.length > 0
        ? s[0]
        : null
    );
  }
  cacheUserLanguage(u) {
    let s =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    s &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(u) > -1) ||
        s.forEach((c) => {
          this.detectors[c] &&
            this.detectors[c].cacheUserLanguage(u, this.options);
        }));
  }
}
nm.type = "languageDetector";
const Yh = Object.assign({}),
  Gn = {};
Object.keys(Yh).forEach((r) => {
  const u = r.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
  if (u) {
    const [, s] = u,
      c = Yh[r];
    Gn[s] || (Gn[s] = { translation: {} }),
      c.default && (Gn[s].translation = { ...Gn[s].translation, ...c.default });
  }
});
We.use(nm)
  .use(j0)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: !1,
    resources: Gn,
    interpolation: { escapeValue: !1 },
  });
var $r = { exports: {} },
  Bn = {},
  Fr = { exports: {} },
  Wr = {};
var Gh;
function $0() {
  return (
    Gh ||
      ((Gh = 1),
      (function (r) {
        function u(j, B) {
          var $ = j.length;
          j.push(B);
          e: for (; 0 < $; ) {
            var fe = ($ - 1) >>> 1,
              ge = j[fe];
            if (0 < o(ge, B)) (j[fe] = B), (j[$] = ge), ($ = fe);
            else break e;
          }
        }
        function s(j) {
          return j.length === 0 ? null : j[0];
        }
        function c(j) {
          if (j.length === 0) return null;
          var B = j[0],
            $ = j.pop();
          if ($ !== B) {
            j[0] = $;
            e: for (var fe = 0, ge = j.length, x = ge >>> 1; fe < x; ) {
              var M = 2 * (fe + 1) - 1,
                G = j[M],
                X = M + 1,
                ee = j[X];
              if (0 > o(G, $))
                X < ge && 0 > o(ee, G)
                  ? ((j[fe] = ee), (j[X] = $), (fe = X))
                  : ((j[fe] = G), (j[M] = $), (fe = M));
              else if (X < ge && 0 > o(ee, $))
                (j[fe] = ee), (j[X] = $), (fe = X);
              else break e;
            }
          }
          return B;
        }
        function o(j, B) {
          var $ = j.sortIndex - B.sortIndex;
          return $ !== 0 ? $ : j.id - B.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          r.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            p = h.now();
          r.unstable_now = function () {
            return h.now() - p;
          };
        }
        var y = [],
          g = [],
          E = 1,
          b = null,
          R = 3,
          w = !1,
          _ = !1,
          Y = !1,
          q = !1,
          Q = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function ue(j) {
          for (var B = s(g); B !== null; ) {
            if (B.callback === null) c(g);
            else if (B.startTime <= j)
              c(g), (B.sortIndex = B.expirationTime), u(y, B);
            else break;
            B = s(g);
          }
        }
        function ce(j) {
          if (((Y = !1), ue(j), !_))
            if (s(y) !== null) (_ = !0), ye || ((ye = !0), Ie());
            else {
              var B = s(g);
              B !== null && lt(ce, B.startTime - j);
            }
        }
        var ye = !1,
          W = -1,
          ze = 5,
          Oe = -1;
        function Ce() {
          return q ? !0 : !(r.unstable_now() - Oe < ze);
        }
        function xt() {
          if (((q = !1), ye)) {
            var j = r.unstable_now();
            Oe = j;
            var B = !0;
            try {
              e: {
                (_ = !1), Y && ((Y = !1), V(W), (W = -1)), (w = !0);
                var $ = R;
                try {
                  t: {
                    for (
                      ue(j), b = s(y);
                      b !== null && !(b.expirationTime > j && Ce());

                    ) {
                      var fe = b.callback;
                      if (typeof fe == "function") {
                        (b.callback = null), (R = b.priorityLevel);
                        var ge = fe(b.expirationTime <= j);
                        if (((j = r.unstable_now()), typeof ge == "function")) {
                          (b.callback = ge), ue(j), (B = !0);
                          break t;
                        }
                        b === s(y) && c(y), ue(j);
                      } else c(y);
                      b = s(y);
                    }
                    if (b !== null) B = !0;
                    else {
                      var x = s(g);
                      x !== null && lt(ce, x.startTime - j), (B = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (R = $), (w = !1);
                }
                B = void 0;
              }
            } finally {
              B ? Ie() : (ye = !1);
            }
          }
        }
        var Ie;
        if (typeof J == "function")
          Ie = function () {
            J(xt);
          };
        else if (typeof MessageChannel < "u") {
          var Ve = new MessageChannel(),
            De = Ve.port2;
          (Ve.port1.onmessage = xt),
            (Ie = function () {
              De.postMessage(null);
            });
        } else
          Ie = function () {
            Q(xt, 0);
          };
        function lt(j, B) {
          W = Q(function () {
            j(r.unstable_now());
          }, B);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (r.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ze = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (r.unstable_next = function (j) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = R;
            }
            var $ = R;
            R = B;
            try {
              return j();
            } finally {
              R = $;
            }
          }),
          (r.unstable_requestPaint = function () {
            q = !0;
          }),
          (r.unstable_runWithPriority = function (j, B) {
            switch (j) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                j = 3;
            }
            var $ = R;
            R = j;
            try {
              return B();
            } finally {
              R = $;
            }
          }),
          (r.unstable_scheduleCallback = function (j, B, $) {
            var fe = r.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay),
                  ($ = typeof $ == "number" && 0 < $ ? fe + $ : fe))
                : ($ = fe),
              j)
            ) {
              case 1:
                var ge = -1;
                break;
              case 2:
                ge = 250;
                break;
              case 5:
                ge = 1073741823;
                break;
              case 4:
                ge = 1e4;
                break;
              default:
                ge = 5e3;
            }
            return (
              (ge = $ + ge),
              (j = {
                id: E++,
                callback: B,
                priorityLevel: j,
                startTime: $,
                expirationTime: ge,
                sortIndex: -1,
              }),
              $ > fe
                ? ((j.sortIndex = $),
                  u(g, j),
                  s(y) === null &&
                    j === s(g) &&
                    (Y ? (V(W), (W = -1)) : (Y = !0), lt(ce, $ - fe)))
                : ((j.sortIndex = ge),
                  u(y, j),
                  _ || w || ((_ = !0), ye || ((ye = !0), Ie()))),
              j
            );
          }),
          (r.unstable_shouldYield = Ce),
          (r.unstable_wrapCallback = function (j) {
            var B = R;
            return function () {
              var $ = R;
              R = B;
              try {
                return j.apply(this, arguments);
              } finally {
                R = $;
              }
            };
          });
      })(Wr)),
    Wr
  );
}
var Vh;
function F0() {
  return Vh || ((Vh = 1), (Fr.exports = $0())), Fr.exports;
}
var Ir = { exports: {} },
  Pe = {};
var Qh;
function W0() {
  if (Qh) return Pe;
  Qh = 1;
  var r = ic();
  function u(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        g += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var c = {
      d: {
        f: s,
        r: function () {
          throw Error(u(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function d(y, g, E) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: g,
      implementation: E,
    };
  }
  var h = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, g) {
    if (y === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (Pe.createPortal = function (y, g) {
      var E =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(u(299));
      return d(y, g, null, E);
    }),
    (Pe.flushSync = function (y) {
      var g = h.T,
        E = c.p;
      try {
        if (((h.T = null), (c.p = 2), y)) return y();
      } finally {
        (h.T = g), (c.p = E), c.d.f();
      }
    }),
    (Pe.preconnect = function (y, g) {
      typeof y == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        c.d.C(y, g));
    }),
    (Pe.prefetchDNS = function (y) {
      typeof y == "string" && c.d.D(y);
    }),
    (Pe.preinit = function (y, g) {
      if (typeof y == "string" && g && typeof g.as == "string") {
        var E = g.as,
          b = p(E, g.crossOrigin),
          R = typeof g.integrity == "string" ? g.integrity : void 0,
          w = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        E === "style"
          ? c.d.S(y, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: b,
              integrity: R,
              fetchPriority: w,
            })
          : E === "script" &&
            c.d.X(y, {
              crossOrigin: b,
              integrity: R,
              fetchPriority: w,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Pe.preinitModule = function (y, g) {
      if (typeof y == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var E = p(g.as, g.crossOrigin);
            c.d.M(y, {
              crossOrigin: E,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && c.d.M(y);
    }),
    (Pe.preload = function (y, g) {
      if (
        typeof y == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var E = g.as,
          b = p(E, g.crossOrigin);
        c.d.L(y, E, {
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Pe.preloadModule = function (y, g) {
      if (typeof y == "string")
        if (g) {
          var E = p(g.as, g.crossOrigin);
          c.d.m(y, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: E,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else c.d.m(y);
    }),
    (Pe.requestFormReset = function (y) {
      c.d.r(y);
    }),
    (Pe.unstable_batchedUpdates = function (y, g) {
      return y(g);
    }),
    (Pe.useFormState = function (y, g, E) {
      return h.H.useFormState(y, g, E);
    }),
    (Pe.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (Pe.version = "19.2.3"),
    Pe
  );
}
var Xh;
function I0() {
  if (Xh) return Ir.exports;
  Xh = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (u) {
        console.error(u);
      }
  }
  return r(), (Ir.exports = W0()), Ir.exports;
}
var Zh;
function P0() {
  if (Zh) return Bn;
  Zh = 1;
  var r = F0(),
    u = ic(),
    s = I0();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (d(e) !== e) throw Error(c(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return y(n), e;
          if (i === a) return y(n), t;
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== a.return) (l = n), (a = i);
      else {
        for (var f = !1, m = n.child; m; ) {
          if (m === l) {
            (f = !0), (l = n), (a = i);
            break;
          }
          if (m === a) {
            (f = !0), (a = n), (l = i);
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = i.child; m; ) {
            if (m === l) {
              (f = !0), (l = i), (a = n);
              break;
            }
            if (m === a) {
              (f = !0), (a = i), (l = n);
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (l.alternate !== a) throw Error(c(190));
    }
    if (l.tag !== 3) throw Error(c(188));
    return l.stateNode.current === l ? e : t;
  }
  function E(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = E(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    R = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    J = Symbol.for("react.context"),
    ue = Symbol.for("react.forward_ref"),
    ce = Symbol.for("react.suspense"),
    ye = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    ze = Symbol.for("react.lazy"),
    Oe = Symbol.for("react.activity"),
    Ce = Symbol.for("react.memo_cache_sentinel"),
    xt = Symbol.iterator;
  function Ie(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (xt && e[xt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ve = Symbol.for("react.client.reference");
  function De(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ve ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Y:
        return "Fragment";
      case Q:
        return "Profiler";
      case q:
        return "StrictMode";
      case ce:
        return "Suspense";
      case ye:
        return "SuspenseList";
      case Oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case _:
          return "Portal";
        case J:
          return e.displayName || "Context";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case ue:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case W:
          return (
            (t = e.displayName || null), t !== null ? t : De(e.type) || "Memo"
          );
        case ze:
          (t = e._payload), (e = e._init);
          try {
            return De(e(t));
          } catch {}
      }
    return null;
  }
  var lt = Array.isArray,
    j = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = { pending: !1, data: null, method: null, action: null },
    fe = [],
    ge = -1;
  function x(e) {
    return { current: e };
  }
  function M(e) {
    0 > ge || ((e.current = fe[ge]), (fe[ge] = null), ge--);
  }
  function G(e, t) {
    ge++, (fe[ge] = e.current), (e.current = t);
  }
  var X = x(null),
    ee = x(null),
    ae = x(null),
    pe = x(null);
  function et(e, t) {
    switch ((G(ae, t), G(ee, e), G(X, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Hd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Hd(t)), (e = Bd(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    M(X), G(X, e);
  }
  function _e() {
    M(X), M(ee), M(ae);
  }
  function Va(e) {
    e.memoizedState !== null && G(pe, e);
    var t = X.current,
      l = Bd(t, e.type);
    t !== l && (G(ee, e), G(X, l));
  }
  function $n(e) {
    ee.current === e && (M(X), M(ee)),
      pe.current === e && (M(pe), (Dn._currentValue = $));
  }
  var zu, fc;
  function Ul(e) {
    if (zu === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (zu = (t && t[1]) || ""),
          (fc =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      zu +
      e +
      fc
    );
  }
  var Ru = !1;
  function Cu(e, t) {
    if (!e || Ru) return "";
    Ru = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (C) {
                  var z = C;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (C) {
                  z = C;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                z = C;
              }
              (H = e()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (C) {
            if (C && z && typeof C.stack == "string") return [C.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        f = i[0],
        m = i[1];
      if (f && m) {
        var v = f.split(`
`),
          A = m.split(`
`);
        for (
          n = a = 0;
          a < v.length && !v[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < A.length && !A[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === v.length || n === A.length)
          for (
            a = v.length - 1, n = A.length - 1;
            1 <= a && 0 <= n && v[a] !== A[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (v[a] !== A[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || v[a] !== A[n])) {
                  var D =
                    `
` + v[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      D.includes("<anonymous>") &&
                      (D = D.replace("<anonymous>", e.displayName)),
                    D
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (Ru = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? Ul(l) : "";
  }
  function Rm(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ul(e.type);
      case 16:
        return Ul("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Ul("Suspense Fallback")
          : Ul("Suspense");
      case 19:
        return Ul("SuspenseList");
      case 0:
      case 15:
        return Cu(e.type, !1);
      case 11:
        return Cu(e.type.render, !1);
      case 1:
        return Cu(e.type, !0);
      case 31:
        return Ul("Activity");
      default:
        return "";
    }
  }
  function dc(e) {
    try {
      var t = "",
        l = null;
      do (t += Rm(e, l)), (l = e), (e = e.return);
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var wu = Object.prototype.hasOwnProperty,
    ju = r.unstable_scheduleCallback,
    Du = r.unstable_cancelCallback,
    Cm = r.unstable_shouldYield,
    wm = r.unstable_requestPaint,
    ot = r.unstable_now,
    jm = r.unstable_getCurrentPriorityLevel,
    hc = r.unstable_ImmediatePriority,
    mc = r.unstable_UserBlockingPriority,
    Fn = r.unstable_NormalPriority,
    Dm = r.unstable_LowPriority,
    gc = r.unstable_IdlePriority,
    _m = r.log,
    Mm = r.unstable_setDisableYieldValue,
    Qa = null,
    ft = null;
  function cl(e) {
    if (
      (typeof _m == "function" && Mm(e),
      ft && typeof ft.setStrictMode == "function")
    )
      try {
        ft.setStrictMode(Qa, e);
      } catch {}
  }
  var dt = Math.clz32 ? Math.clz32 : Hm,
    Um = Math.log,
    Lm = Math.LN2;
  function Hm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Um(e) / Lm) | 0)) | 0;
  }
  var Wn = 256,
    In = 262144,
    Pn = 4194304;
  function Ll(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ei(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var m = a & 134217727;
    return (
      m !== 0
        ? ((a = m & ~i),
          a !== 0
            ? (n = Ll(a))
            : ((f &= m),
              f !== 0
                ? (n = Ll(f))
                : l || ((l = m & ~e), l !== 0 && (n = Ll(l)))))
        : ((m = a & ~i),
          m !== 0
            ? (n = Ll(m))
            : f !== 0
            ? (n = Ll(f))
            : l || ((l = a & ~e), l !== 0 && (n = Ll(l)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & i) === 0 &&
          ((i = n & -n),
          (l = t & -t),
          i >= l || (i === 32 && (l & 4194048) !== 0))
        ? t
        : n
    );
  }
  function Xa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Bm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pc() {
    var e = Pn;
    return (Pn <<= 1), (Pn & 62914560) === 0 && (Pn = 4194304), e;
  }
  function _u(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Za(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function qm(e, t, l, a, n, i) {
    var f = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var m = e.entanglements,
      v = e.expirationTimes,
      A = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var D = 31 - dt(l),
        H = 1 << D;
      (m[D] = 0), (v[D] = -1);
      var z = A[D];
      if (z !== null)
        for (A[D] = null, D = 0; D < z.length; D++) {
          var C = z[D];
          C !== null && (C.lane &= -536870913);
        }
      l &= ~H;
    }
    a !== 0 && yc(e, a, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function yc(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - dt(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930));
  }
  function vc(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - dt(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function bc(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : Mu(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function Mu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Uu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function xc() {
    var e = B.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : sh(e.type));
  }
  function Sc(e, t) {
    var l = B.p;
    try {
      return (B.p = e), t();
    } finally {
      B.p = l;
    }
  }
  var ol = Math.random().toString(36).slice(2),
    Ke = "__reactFiber$" + ol,
    at = "__reactProps$" + ol,
    ea = "__reactContainer$" + ol,
    Lu = "__reactEvents$" + ol,
    Ym = "__reactListeners$" + ol,
    Gm = "__reactHandles$" + ol,
    Ec = "__reactResources$" + ol,
    Ka = "__reactMarker$" + ol;
  function Hu(e) {
    delete e[Ke], delete e[at], delete e[Lu], delete e[Ym], delete e[Gm];
  }
  function ta(e) {
    var t = e[Ke];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ea] || l[Ke])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Zd(e); e !== null; ) {
            if ((l = e[Ke])) return l;
            e = Zd(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function la(e) {
    if ((e = e[Ke] || e[ea])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ja(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function aa(e) {
    var t = e[Ec];
    return (
      t ||
        (t = e[Ec] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Qe(e) {
    e[Ka] = !0;
  }
  var Tc = new Set(),
    Oc = {};
  function Hl(e, t) {
    na(e, t), na(e + "Capture", t);
  }
  function na(e, t) {
    for (Oc[e] = t, e = 0; e < t.length; e++) Tc.add(t[e]);
  }
  var Vm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Nc = {},
    Ac = {};
  function Qm(e) {
    return wu.call(Ac, e)
      ? !0
      : wu.call(Nc, e)
      ? !1
      : Vm.test(e)
      ? (Ac[e] = !0)
      : ((Nc[e] = !0), !1);
  }
  function ti(e, t, l) {
    if (Qm(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function li(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Vt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function St(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function zc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xm(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        i = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (f) {
            (l = "" + f), i.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (f) {
            l = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Bu(e) {
    if (!e._valueTracker) {
      var t = zc(e) ? "checked" : "value";
      e._valueTracker = Xm(e, t, "" + e[t]);
    }
  }
  function Rc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = zc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function ai(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Zm = /[\n"\\]/g;
  function Et(e) {
    return e.replace(Zm, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function qu(e, t, l, a, n, i, f, m) {
    (e.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.type = f)
        : e.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + St(t))
          : e.value !== "" + St(t) && (e.value = "" + St(t))
        : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null
        ? Yu(e, f, St(t))
        : l != null
        ? Yu(e, f, St(l))
        : a != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.name = "" + St(m))
        : e.removeAttribute("name");
  }
  function Cc(e, t, l, a, n, i, f, m) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) {
        Bu(e);
        return;
      }
      (l = l != null ? "" + St(l) : ""),
        (t = t != null ? "" + St(t) : l),
        m || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = m ? e.checked : !!a),
      (e.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.name = f),
      Bu(e);
  }
  function Yu(e, t, l) {
    (t === "number" && ai(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function ia(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + St(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wc(e, t, l) {
    if (
      t != null &&
      ((t = "" + St(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + St(l) : "";
  }
  function jc(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(c(92));
        if (lt(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = St(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      Bu(e);
  }
  function ua(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Km = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Dc(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : a
      ? e.setProperty(t, l)
      : typeof l != "number" || l === 0 || Km.has(t)
      ? t === "float"
        ? (e.cssFloat = l)
        : (e[t] = ("" + l).trim())
      : (e[t] = l + "px");
  }
  function _c(e, t, l) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
            ? (e.cssFloat = "")
            : (e[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Dc(e, n, a);
    } else for (var i in t) t.hasOwnProperty(i) && Dc(e, i, t[i]);
  }
  function Gu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jm = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    km =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ni(e) {
    return km.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Qt() {}
  var Vu = null;
  function Qu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var sa = null,
    ra = null;
  function Mc(e) {
    var t = la(e);
    if (t && (e = t.stateNode)) {
      var l = e[at] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (qu(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Et("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[at] || null;
                if (!n) throw Error(c(90));
                qu(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && Rc(a);
          }
          break e;
        case "textarea":
          wc(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && ia(e, !!l.multiple, t, !1);
      }
    }
  }
  var Xu = !1;
  function Uc(e, t, l) {
    if (Xu) return e(t, l);
    Xu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Xu = !1),
        (sa !== null || ra !== null) &&
          (Zi(), sa && ((t = sa), (e = ra), (ra = sa = null), Mc(t), e)))
      )
        for (t = 0; t < e.length; t++) Mc(e[t]);
    }
  }
  function ka(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[at] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(c(231, t, typeof l));
    return l;
  }
  var Xt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Zu = !1;
  if (Xt)
    try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function () {
          Zu = !0;
        },
      }),
        window.addEventListener("test", $a, $a),
        window.removeEventListener("test", $a, $a);
    } catch {
      Zu = !1;
    }
  var fl = null,
    Ku = null,
    ii = null;
  function Lc() {
    if (ii) return ii;
    var e,
      t = Ku,
      l = t.length,
      a,
      n = "value" in fl ? fl.value : fl.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === n[i - a]; a++);
    return (ii = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ui(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function si() {
    return !0;
  }
  function Hc() {
    return !1;
  }
  function nt(e) {
    function t(l, a, n, i, f) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = f),
        (this.currentTarget = null);
      for (var m in e)
        e.hasOwnProperty(m) && ((l = e[m]), (this[m] = l ? l(i) : i[m]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? si
          : Hc),
        (this.isPropagationStopped = Hc),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = si));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = si));
        },
        persist: function () {},
        isPersistent: si,
      }),
      t
    );
  }
  var Bl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ri = nt(Bl),
    Fa = b({}, Bl, { view: 0, detail: 0 }),
    $m = nt(Fa),
    Ju,
    ku,
    Wa,
    ci = b({}, Fa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Wa &&
              (Wa && e.type === "mousemove"
                ? ((Ju = e.screenX - Wa.screenX), (ku = e.screenY - Wa.screenY))
                : (ku = Ju = 0),
              (Wa = e)),
            Ju);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ku;
      },
    }),
    Bc = nt(ci),
    Fm = b({}, ci, { dataTransfer: 0 }),
    Wm = nt(Fm),
    Im = b({}, Fa, { relatedTarget: 0 }),
    $u = nt(Im),
    Pm = b({}, Bl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = nt(Pm),
    tg = b({}, Bl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    lg = nt(tg),
    ag = b({}, Bl, { data: 0 }),
    qc = nt(ag),
    ng = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ig = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ug = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sg(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ug[e])
      ? !!t[e]
      : !1;
  }
  function Fu() {
    return sg;
  }
  var rg = b({}, Fa, {
      key: function (e) {
        if (e.key) {
          var t = ng[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? ig[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fu,
      charCode: function (e) {
        return e.type === "keypress" ? ui(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ui(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    cg = nt(rg),
    og = b({}, ci, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Yc = nt(og),
    fg = b({}, Fa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fu,
    }),
    dg = nt(fg),
    hg = b({}, Bl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mg = nt(hg),
    gg = b({}, ci, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    pg = nt(gg),
    yg = b({}, Bl, { newState: 0, oldState: 0 }),
    vg = nt(yg),
    bg = [9, 13, 27, 32],
    Wu = Xt && "CompositionEvent" in window,
    Ia = null;
  Xt && "documentMode" in document && (Ia = document.documentMode);
  var xg = Xt && "TextEvent" in window && !Ia,
    Gc = Xt && (!Wu || (Ia && 8 < Ia && 11 >= Ia)),
    Vc = " ",
    Qc = !1;
  function Xc(e, t) {
    switch (e) {
      case "keyup":
        return bg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ca = !1;
  function Sg(e, t) {
    switch (e) {
      case "compositionend":
        return Zc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Qc = !0), Vc);
      case "textInput":
        return (e = t.data), e === Vc && Qc ? null : e;
      default:
        return null;
    }
  }
  function Eg(e, t) {
    if (ca)
      return e === "compositionend" || (!Wu && Xc(e, t))
        ? ((e = Lc()), (ii = Ku = fl = null), (ca = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Gc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Kc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Tg[e.type] : t === "textarea";
  }
  function Jc(e, t, l, a) {
    sa ? (ra ? ra.push(a) : (ra = [a])) : (sa = a),
      (t = Ii(t, "onChange")),
      0 < t.length &&
        ((l = new ri("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var Pa = null,
    en = null;
  function Og(e) {
    jd(e, 0);
  }
  function oi(e) {
    var t = Ja(e);
    if (Rc(t)) return e;
  }
  function kc(e, t) {
    if (e === "change") return t;
  }
  var $c = !1;
  if (Xt) {
    var Iu;
    if (Xt) {
      var Pu = "oninput" in document;
      if (!Pu) {
        var Fc = document.createElement("div");
        Fc.setAttribute("oninput", "return;"),
          (Pu = typeof Fc.oninput == "function");
      }
      Iu = Pu;
    } else Iu = !1;
    $c = Iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Wc() {
    Pa && (Pa.detachEvent("onpropertychange", Ic), (en = Pa = null));
  }
  function Ic(e) {
    if (e.propertyName === "value" && oi(en)) {
      var t = [];
      Jc(t, en, e, Qu(e)), Uc(Og, t);
    }
  }
  function Ng(e, t, l) {
    e === "focusin"
      ? (Wc(), (Pa = t), (en = l), Pa.attachEvent("onpropertychange", Ic))
      : e === "focusout" && Wc();
  }
  function Ag(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return oi(en);
  }
  function zg(e, t) {
    if (e === "click") return oi(t);
  }
  function Rg(e, t) {
    if (e === "input" || e === "change") return oi(t);
  }
  function Cg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ht = typeof Object.is == "function" ? Object.is : Cg;
  function tn(e, t) {
    if (ht(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!wu.call(t, n) || !ht(e[n], t[n])) return !1;
    }
    return !0;
  }
  function Pc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function eo(e, t) {
    var l = Pc(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Pc(l);
    }
  }
  function to(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? to(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function lo(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ai(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = ai(e.document);
    }
    return t;
  }
  function es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var wg = Xt && "documentMode" in document && 11 >= document.documentMode,
    oa = null,
    ts = null,
    ln = null,
    ls = !1;
  function ao(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ls ||
      oa == null ||
      oa !== ai(a) ||
      ((a = oa),
      "selectionStart" in a && es(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ln && tn(ln, a)) ||
        ((ln = a),
        (a = Ii(ts, "onSelect")),
        0 < a.length &&
          ((t = new ri("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = oa))));
  }
  function ql(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var fa = {
      animationend: ql("Animation", "AnimationEnd"),
      animationiteration: ql("Animation", "AnimationIteration"),
      animationstart: ql("Animation", "AnimationStart"),
      transitionrun: ql("Transition", "TransitionRun"),
      transitionstart: ql("Transition", "TransitionStart"),
      transitioncancel: ql("Transition", "TransitionCancel"),
      transitionend: ql("Transition", "TransitionEnd"),
    },
    as = {},
    no = {};
  Xt &&
    ((no = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fa.animationend.animation,
      delete fa.animationiteration.animation,
      delete fa.animationstart.animation),
    "TransitionEvent" in window || delete fa.transitionend.transition);
  function Yl(e) {
    if (as[e]) return as[e];
    if (!fa[e]) return e;
    var t = fa[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in no) return (as[e] = t[l]);
    return e;
  }
  var io = Yl("animationend"),
    uo = Yl("animationiteration"),
    so = Yl("animationstart"),
    jg = Yl("transitionrun"),
    Dg = Yl("transitionstart"),
    _g = Yl("transitioncancel"),
    ro = Yl("transitionend"),
    co = new Map(),
    ns =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  ns.push("scrollEnd");
  function Dt(e, t) {
    co.set(e, t), Hl(t, [e]);
  }
  var fi =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Tt = [],
    da = 0,
    is = 0;
  function di() {
    for (var e = da, t = (is = da = 0); t < e; ) {
      var l = Tt[t];
      Tt[t++] = null;
      var a = Tt[t];
      Tt[t++] = null;
      var n = Tt[t];
      Tt[t++] = null;
      var i = Tt[t];
      if (((Tt[t++] = null), a !== null && n !== null)) {
        var f = a.pending;
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
          (a.pending = n);
      }
      i !== 0 && oo(l, n, i);
    }
  }
  function hi(e, t, l, a) {
    (Tt[da++] = e),
      (Tt[da++] = t),
      (Tt[da++] = l),
      (Tt[da++] = a),
      (is |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function us(e, t, l, a) {
    return hi(e, t, l, a), mi(e);
  }
  function Gl(e, t) {
    return hi(e, null, null, t), mi(e);
  }
  function oo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      (i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return);
    return e.tag === 3
      ? ((i = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - dt(l)),
          (e = i.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        i)
      : null;
  }
  function mi(e) {
    if (50 < Nn) throw ((Nn = 0), (gr = null), Error(c(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ha = {};
  function Mg(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function mt(e, t, l, a) {
    return new Mg(e, t, l, a);
  }
  function ss(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Zt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = mt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function fo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function gi(e, t, l, a, n, i) {
    var f = 0;
    if (((a = e), typeof e == "function")) ss(e) && (f = 1);
    else if (typeof e == "string")
      f = qp(e, l, X.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case Oe:
          return (e = mt(31, l, t, n)), (e.elementType = Oe), (e.lanes = i), e;
        case Y:
          return Vl(l.children, n, i, t);
        case q:
          (f = 8), (n |= 24);
          break;
        case Q:
          return (
            (e = mt(12, l, t, n | 2)), (e.elementType = Q), (e.lanes = i), e
          );
        case ce:
          return (e = mt(13, l, t, n)), (e.elementType = ce), (e.lanes = i), e;
        case ye:
          return (e = mt(19, l, t, n)), (e.elementType = ye), (e.lanes = i), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
                f = 10;
                break e;
              case V:
                f = 9;
                break e;
              case ue:
                f = 11;
                break e;
              case W:
                f = 14;
                break e;
              case ze:
                (f = 16), (a = null);
                break e;
            }
          (f = 29),
            (l = Error(c(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = mt(f, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = i), t
    );
  }
  function Vl(e, t, l, a) {
    return (e = mt(7, e, a, t)), (e.lanes = l), e;
  }
  function rs(e, t, l) {
    return (e = mt(6, e, null, t)), (e.lanes = l), e;
  }
  function ho(e) {
    var t = mt(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function cs(e, t, l) {
    return (
      (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var mo = new WeakMap();
  function Ot(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = mo.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: dc(t) }), mo.set(e, t), t);
    }
    return { value: e, source: t, stack: dc(t) };
  }
  var ma = [],
    ga = 0,
    pi = null,
    an = 0,
    Nt = [],
    At = 0,
    dl = null,
    Lt = 1,
    Ht = "";
  function Kt(e, t) {
    (ma[ga++] = an), (ma[ga++] = pi), (pi = e), (an = t);
  }
  function go(e, t, l) {
    (Nt[At++] = Lt), (Nt[At++] = Ht), (Nt[At++] = dl), (dl = e);
    var a = Lt;
    e = Ht;
    var n = 32 - dt(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var i = 32 - dt(t) + n;
    if (30 < i) {
      var f = n - (n % 5);
      (i = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (n -= f),
        (Lt = (1 << (32 - dt(t) + n)) | (l << n) | a),
        (Ht = i + e);
    } else (Lt = (1 << i) | (l << n) | a), (Ht = e);
  }
  function os(e) {
    e.return !== null && (Kt(e, 1), go(e, 1, 0));
  }
  function fs(e) {
    for (; e === pi; )
      (pi = ma[--ga]), (ma[ga] = null), (an = ma[--ga]), (ma[ga] = null);
    for (; e === dl; )
      (dl = Nt[--At]),
        (Nt[At] = null),
        (Ht = Nt[--At]),
        (Nt[At] = null),
        (Lt = Nt[--At]),
        (Nt[At] = null);
  }
  function po(e, t) {
    (Nt[At++] = Lt),
      (Nt[At++] = Ht),
      (Nt[At++] = dl),
      (Lt = t.id),
      (Ht = t.overflow),
      (dl = e);
  }
  var Je = null,
    Ne = null,
    oe = !1,
    hl = null,
    zt = !1,
    ds = Error(c(519));
  function ml(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (nn(Ot(t, e)), ds);
  }
  function yo(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Ke] = e), (t[at] = a), l)) {
      case "dialog":
        ie("cancel", t), ie("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ie("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < zn.length; l++) ie(zn[l], t);
        break;
      case "source":
        ie("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ie("error", t), ie("load", t);
        break;
      case "details":
        ie("toggle", t);
        break;
      case "input":
        ie("invalid", t),
          Cc(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        ie("invalid", t);
        break;
      case "textarea":
        ie("invalid", t), jc(t, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Ud(t.textContent, l)
        ? (a.popover != null && (ie("beforetoggle", t), ie("toggle", t)),
          a.onScroll != null && ie("scroll", t),
          a.onScrollEnd != null && ie("scrollend", t),
          a.onClick != null && (t.onclick = Qt),
          (t = !0))
        : (t = !1),
      t || ml(e, !0);
  }
  function vo(e) {
    for (Je = e.return; Je; )
      switch (Je.tag) {
        case 5:
        case 31:
        case 13:
          zt = !1;
          return;
        case 27:
        case 3:
          zt = !0;
          return;
        default:
          Je = Je.return;
      }
  }
  function pa(e) {
    if (e !== Je) return !1;
    if (!oe) return vo(e), (oe = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || wr(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ne && ml(e),
      vo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Ne = Xd(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Ne = Xd(e);
    } else
      t === 27
        ? ((t = Ne), Rl(e.type) ? ((e = Ur), (Ur = null), (Ne = e)) : (Ne = t))
        : (Ne = Je ? Ct(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ql() {
    (Ne = Je = null), (oe = !1);
  }
  function hs() {
    var e = hl;
    return (
      e !== null &&
        (rt === null ? (rt = e) : rt.push.apply(rt, e), (hl = null)),
      e
    );
  }
  function nn(e) {
    hl === null ? (hl = [e]) : hl.push(e);
  }
  var ms = x(null),
    Xl = null,
    Jt = null;
  function gl(e, t, l) {
    G(ms, t._currentValue), (t._currentValue = l);
  }
  function kt(e) {
    (e._currentValue = ms.current), M(ms);
  }
  function gs(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function ps(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var f = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var m = i;
          i = n;
          for (var v = 0; v < t.length; v++)
            if (m.context === t[v]) {
              (i.lanes |= l),
                (m = i.alternate),
                m !== null && (m.lanes |= l),
                gs(i.return, l, e),
                a || (f = null);
              break e;
            }
          i = m.next;
        }
      } else if (n.tag === 18) {
        if (((f = n.return), f === null)) throw Error(c(341));
        (f.lanes |= l),
          (i = f.alternate),
          i !== null && (i.lanes |= l),
          gs(f, l, e),
          (f = null);
      } else f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (((n = f.sibling), n !== null)) {
            (n.return = f.return), (f = n);
            break;
          }
          f = f.return;
        }
      n = f;
    }
  }
  function ya(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(c(387));
        if (((f = f.memoizedProps), f !== null)) {
          var m = n.type;
          ht(n.pendingProps.value, f.value) ||
            (e !== null ? e.push(m) : (e = [m]));
        }
      } else if (n === pe.current) {
        if (((f = n.alternate), f === null)) throw Error(c(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Dn) : (e = [Dn]));
      }
      n = n.return;
    }
    e !== null && ps(t, e, l, a), (t.flags |= 262144);
  }
  function yi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ht(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Zl(e) {
    (Xl = e),
      (Jt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function ke(e) {
    return bo(Xl, e);
  }
  function vi(e, t) {
    return Xl === null && Zl(e), bo(e, t);
  }
  function bo(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Jt === null)) {
      if (e === null) throw Error(c(308));
      (Jt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Jt = Jt.next = t;
    return l;
  }
  var Ug =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    Lg = r.unstable_scheduleCallback,
    Hg = r.unstable_NormalPriority,
    Le = {
      $$typeof: J,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ys() {
    return { controller: new Ug(), data: new Map(), refCount: 0 };
  }
  function un(e) {
    e.refCount--,
      e.refCount === 0 &&
        Lg(Hg, function () {
          e.controller.abort();
        });
  }
  var sn = null,
    vs = 0,
    va = 0,
    ba = null;
  function Bg(e, t) {
    if (sn === null) {
      var l = (sn = []);
      (vs = 0),
        (va = Sr()),
        (ba = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return vs++, t.then(xo, xo), t;
  }
  function xo() {
    if (--vs === 0 && sn !== null) {
      ba !== null && (ba.status = "fulfilled");
      var e = sn;
      (sn = null), (va = 0), (ba = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function qg(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var So = j.S;
  j.S = function (e, t) {
    (id = ot()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Bg(e, t),
      So !== null && So(e, t);
  };
  var Kl = x(null);
  function bs() {
    var e = Kl.current;
    return e !== null ? e : Te.pooledCache;
  }
  function bi(e, t) {
    t === null ? G(Kl, Kl.current) : G(Kl, t.pool);
  }
  function Eo() {
    var e = bs();
    return e === null ? null : { parent: Le._currentValue, pool: e };
  }
  var xa = Error(c(460)),
    xs = Error(c(474)),
    xi = Error(c(542)),
    Si = { then: function () {} };
  function To(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Oo(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Qt, Qt), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Ao(e), e);
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (((e = Te), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Ao(e), e);
        }
        throw ((kl = t), xa);
    }
  }
  function Jl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((kl = l), xa)
        : l;
    }
  }
  var kl = null;
  function No() {
    if (kl === null) throw Error(c(459));
    var e = kl;
    return (kl = null), e;
  }
  function Ao(e) {
    if (e === xa || e === xi) throw Error(c(483));
  }
  var Sa = null,
    rn = 0;
  function Ei(e) {
    var t = rn;
    return (rn += 1), Sa === null && (Sa = []), Oo(Sa, e, t);
  }
  function cn(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Ti(e, t) {
    throw t.$$typeof === R
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function zo(e) {
    function t(T, S) {
      if (e) {
        var N = T.deletions;
        N === null ? ((T.deletions = [S]), (T.flags |= 16)) : N.push(S);
      }
    }
    function l(T, S) {
      if (!e) return null;
      for (; S !== null; ) t(T, S), (S = S.sibling);
      return null;
    }
    function a(T) {
      for (var S = new Map(); T !== null; )
        T.key !== null ? S.set(T.key, T) : S.set(T.index, T), (T = T.sibling);
      return S;
    }
    function n(T, S) {
      return (T = Zt(T, S)), (T.index = 0), (T.sibling = null), T;
    }
    function i(T, S, N) {
      return (
        (T.index = N),
        e
          ? ((N = T.alternate),
            N !== null
              ? ((N = N.index), N < S ? ((T.flags |= 67108866), S) : N)
              : ((T.flags |= 67108866), S))
          : ((T.flags |= 1048576), S)
      );
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function m(T, S, N, U) {
      return S === null || S.tag !== 6
        ? ((S = rs(N, T.mode, U)), (S.return = T), S)
        : ((S = n(S, N)), (S.return = T), S);
    }
    function v(T, S, N, U) {
      var k = N.type;
      return k === Y
        ? D(T, S, N.props.children, U, N.key)
        : S !== null &&
          (S.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === ze &&
              Jl(k) === S.type))
        ? ((S = n(S, N.props)), cn(S, N), (S.return = T), S)
        : ((S = gi(N.type, N.key, N.props, null, T.mode, U)),
          cn(S, N),
          (S.return = T),
          S);
    }
    function A(T, S, N, U) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== N.containerInfo ||
        S.stateNode.implementation !== N.implementation
        ? ((S = cs(N, T.mode, U)), (S.return = T), S)
        : ((S = n(S, N.children || [])), (S.return = T), S);
    }
    function D(T, S, N, U, k) {
      return S === null || S.tag !== 7
        ? ((S = Vl(N, T.mode, U, k)), (S.return = T), S)
        : ((S = n(S, N)), (S.return = T), S);
    }
    function H(T, S, N) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return (S = rs("" + S, T.mode, N)), (S.return = T), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case w:
            return (
              (N = gi(S.type, S.key, S.props, null, T.mode, N)),
              cn(N, S),
              (N.return = T),
              N
            );
          case _:
            return (S = cs(S, T.mode, N)), (S.return = T), S;
          case ze:
            return (S = Jl(S)), H(T, S, N);
        }
        if (lt(S) || Ie(S))
          return (S = Vl(S, T.mode, N, null)), (S.return = T), S;
        if (typeof S.then == "function") return H(T, Ei(S), N);
        if (S.$$typeof === J) return H(T, vi(T, S), N);
        Ti(T, S);
      }
      return null;
    }
    function z(T, S, N, U) {
      var k = S !== null ? S.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return k !== null ? null : m(T, S, "" + N, U);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case w:
            return N.key === k ? v(T, S, N, U) : null;
          case _:
            return N.key === k ? A(T, S, N, U) : null;
          case ze:
            return (N = Jl(N)), z(T, S, N, U);
        }
        if (lt(N) || Ie(N)) return k !== null ? null : D(T, S, N, U, null);
        if (typeof N.then == "function") return z(T, S, Ei(N), U);
        if (N.$$typeof === J) return z(T, S, vi(T, N), U);
        Ti(T, N);
      }
      return null;
    }
    function C(T, S, N, U, k) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (T = T.get(N) || null), m(S, T, "" + U, k);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case w:
            return (
              (T = T.get(U.key === null ? N : U.key) || null), v(S, T, U, k)
            );
          case _:
            return (
              (T = T.get(U.key === null ? N : U.key) || null), A(S, T, U, k)
            );
          case ze:
            return (U = Jl(U)), C(T, S, N, U, k);
        }
        if (lt(U) || Ie(U)) return (T = T.get(N) || null), D(S, T, U, k, null);
        if (typeof U.then == "function") return C(T, S, N, Ei(U), k);
        if (U.$$typeof === J) return C(T, S, N, vi(S, U), k);
        Ti(S, U);
      }
      return null;
    }
    function Z(T, S, N, U) {
      for (
        var k = null, de = null, K = S, le = (S = 0), re = null;
        K !== null && le < N.length;
        le++
      ) {
        K.index > le ? ((re = K), (K = null)) : (re = K.sibling);
        var he = z(T, K, N[le], U);
        if (he === null) {
          K === null && (K = re);
          break;
        }
        e && K && he.alternate === null && t(T, K),
          (S = i(he, S, le)),
          de === null ? (k = he) : (de.sibling = he),
          (de = he),
          (K = re);
      }
      if (le === N.length) return l(T, K), oe && Kt(T, le), k;
      if (K === null) {
        for (; le < N.length; le++)
          (K = H(T, N[le], U)),
            K !== null &&
              ((S = i(K, S, le)),
              de === null ? (k = K) : (de.sibling = K),
              (de = K));
        return oe && Kt(T, le), k;
      }
      for (K = a(K); le < N.length; le++)
        (re = C(K, T, le, N[le], U)),
          re !== null &&
            (e &&
              re.alternate !== null &&
              K.delete(re.key === null ? le : re.key),
            (S = i(re, S, le)),
            de === null ? (k = re) : (de.sibling = re),
            (de = re));
      return (
        e &&
          K.forEach(function (_l) {
            return t(T, _l);
          }),
        oe && Kt(T, le),
        k
      );
    }
    function F(T, S, N, U) {
      if (N == null) throw Error(c(151));
      for (
        var k = null, de = null, K = S, le = (S = 0), re = null, he = N.next();
        K !== null && !he.done;
        le++, he = N.next()
      ) {
        K.index > le ? ((re = K), (K = null)) : (re = K.sibling);
        var _l = z(T, K, he.value, U);
        if (_l === null) {
          K === null && (K = re);
          break;
        }
        e && K && _l.alternate === null && t(T, K),
          (S = i(_l, S, le)),
          de === null ? (k = _l) : (de.sibling = _l),
          (de = _l),
          (K = re);
      }
      if (he.done) return l(T, K), oe && Kt(T, le), k;
      if (K === null) {
        for (; !he.done; le++, he = N.next())
          (he = H(T, he.value, U)),
            he !== null &&
              ((S = i(he, S, le)),
              de === null ? (k = he) : (de.sibling = he),
              (de = he));
        return oe && Kt(T, le), k;
      }
      for (K = a(K); !he.done; le++, he = N.next())
        (he = C(K, T, le, he.value, U)),
          he !== null &&
            (e &&
              he.alternate !== null &&
              K.delete(he.key === null ? le : he.key),
            (S = i(he, S, le)),
            de === null ? (k = he) : (de.sibling = he),
            (de = he));
      return (
        e &&
          K.forEach(function (Fp) {
            return t(T, Fp);
          }),
        oe && Kt(T, le),
        k
      );
    }
    function Ee(T, S, N, U) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === Y &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case w:
            e: {
              for (var k = N.key; S !== null; ) {
                if (S.key === k) {
                  if (((k = N.type), k === Y)) {
                    if (S.tag === 7) {
                      l(T, S.sibling),
                        (U = n(S, N.props.children)),
                        (U.return = T),
                        (T = U);
                      break e;
                    }
                  } else if (
                    S.elementType === k ||
                    (typeof k == "object" &&
                      k !== null &&
                      k.$$typeof === ze &&
                      Jl(k) === S.type)
                  ) {
                    l(T, S.sibling),
                      (U = n(S, N.props)),
                      cn(U, N),
                      (U.return = T),
                      (T = U);
                    break e;
                  }
                  l(T, S);
                  break;
                } else t(T, S);
                S = S.sibling;
              }
              N.type === Y
                ? ((U = Vl(N.props.children, T.mode, U, N.key)),
                  (U.return = T),
                  (T = U))
                : ((U = gi(N.type, N.key, N.props, null, T.mode, U)),
                  cn(U, N),
                  (U.return = T),
                  (T = U));
            }
            return f(T);
          case _:
            e: {
              for (k = N.key; S !== null; ) {
                if (S.key === k)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === N.containerInfo &&
                    S.stateNode.implementation === N.implementation
                  ) {
                    l(T, S.sibling),
                      (U = n(S, N.children || [])),
                      (U.return = T),
                      (T = U);
                    break e;
                  } else {
                    l(T, S);
                    break;
                  }
                else t(T, S);
                S = S.sibling;
              }
              (U = cs(N, T.mode, U)), (U.return = T), (T = U);
            }
            return f(T);
          case ze:
            return (N = Jl(N)), Ee(T, S, N, U);
        }
        if (lt(N)) return Z(T, S, N, U);
        if (Ie(N)) {
          if (((k = Ie(N)), typeof k != "function")) throw Error(c(150));
          return (N = k.call(N)), F(T, S, N, U);
        }
        if (typeof N.then == "function") return Ee(T, S, Ei(N), U);
        if (N.$$typeof === J) return Ee(T, S, vi(T, N), U);
        Ti(T, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          S !== null && S.tag === 6
            ? (l(T, S.sibling), (U = n(S, N)), (U.return = T), (T = U))
            : (l(T, S), (U = rs(N, T.mode, U)), (U.return = T), (T = U)),
          f(T))
        : l(T, S);
    }
    return function (T, S, N, U) {
      try {
        rn = 0;
        var k = Ee(T, S, N, U);
        return (Sa = null), k;
      } catch (K) {
        if (K === xa || K === xi) throw K;
        var de = mt(29, K, null, T.mode);
        return (de.lanes = U), (de.return = T), de;
      }
    };
  }
  var $l = zo(!0),
    Ro = zo(!1),
    pl = !1;
  function Ss(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Es(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function yl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function vl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (me & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = mi(e)),
        oo(e, null, l),
        t
      );
    }
    return hi(e, a, t, l), mi(e);
  }
  function on(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), vc(e, l);
    }
  }
  function Ts(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = f) : (i = i.next = f), (l = l.next);
        } while (l !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var Os = !1;
  function fn() {
    if (Os) {
      var e = ba;
      if (e !== null) throw e;
    }
  }
  function dn(e, t, l, a) {
    Os = !1;
    var n = e.updateQueue;
    pl = !1;
    var i = n.firstBaseUpdate,
      f = n.lastBaseUpdate,
      m = n.shared.pending;
    if (m !== null) {
      n.shared.pending = null;
      var v = m,
        A = v.next;
      (v.next = null), f === null ? (i = A) : (f.next = A), (f = v);
      var D = e.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (m = D.lastBaseUpdate),
        m !== f &&
          (m === null ? (D.firstBaseUpdate = A) : (m.next = A),
          (D.lastBaseUpdate = v)));
    }
    if (i !== null) {
      var H = n.baseState;
      (f = 0), (D = A = v = null), (m = i);
      do {
        var z = m.lane & -536870913,
          C = z !== m.lane;
        if (C ? (se & z) === z : (a & z) === z) {
          z !== 0 && z === va && (Os = !0),
            D !== null &&
              (D = D.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Z = e,
              F = m;
            z = t;
            var Ee = l;
            switch (F.tag) {
              case 1:
                if (((Z = F.payload), typeof Z == "function")) {
                  H = Z.call(Ee, H, z);
                  break e;
                }
                H = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = F.payload),
                  (z = typeof Z == "function" ? Z.call(Ee, H, z) : Z),
                  z == null)
                )
                  break e;
                H = b({}, H, z);
                break e;
              case 2:
                pl = !0;
            }
          }
          (z = m.callback),
            z !== null &&
              ((e.flags |= 64),
              C && (e.flags |= 8192),
              (C = n.callbacks),
              C === null ? (n.callbacks = [z]) : C.push(z));
        } else
          (C = {
            lane: z,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            D === null ? ((A = D = C), (v = H)) : (D = D.next = C),
            (f |= z);
        if (((m = m.next), m === null)) {
          if (((m = n.shared.pending), m === null)) break;
          (C = m),
            (m = C.next),
            (C.next = null),
            (n.lastBaseUpdate = C),
            (n.shared.pending = null);
        }
      } while (!0);
      D === null && (v = H),
        (n.baseState = v),
        (n.firstBaseUpdate = A),
        (n.lastBaseUpdate = D),
        i === null && (n.shared.lanes = 0),
        (Tl |= f),
        (e.lanes = f),
        (e.memoizedState = H);
    }
  }
  function Co(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function wo(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Co(l[e], t);
  }
  var Ea = x(null),
    Oi = x(0);
  function jo(e, t) {
    (e = al), G(Oi, e), G(Ea, t), (al = e | t.baseLanes);
  }
  function Ns() {
    G(Oi, al), G(Ea, Ea.current);
  }
  function As() {
    (al = Oi.current), M(Ea), M(Oi);
  }
  var gt = x(null),
    Rt = null;
  function bl(e) {
    var t = e.alternate;
    G(Me, Me.current & 1),
      G(gt, e),
      Rt === null &&
        (t === null || Ea.current !== null || t.memoizedState !== null) &&
        (Rt = e);
  }
  function zs(e) {
    G(Me, Me.current), G(gt, e), Rt === null && (Rt = e);
  }
  function Do(e) {
    e.tag === 22
      ? (G(Me, Me.current), G(gt, e), Rt === null && (Rt = e))
      : xl();
  }
  function xl() {
    G(Me, Me.current), G(gt, gt.current);
  }
  function pt(e) {
    M(gt), Rt === e && (Rt = null), M(Me);
  }
  var Me = x(0);
  function Ni(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || _r(l) || Mr(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var $t = 0,
    te = null,
    xe = null,
    He = null,
    Ai = !1,
    Ta = !1,
    Fl = !1,
    zi = 0,
    hn = 0,
    Oa = null,
    Yg = 0;
  function we() {
    throw Error(c(321));
  }
  function Rs(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!ht(e[l], t[l])) return !1;
    return !0;
  }
  function Cs(e, t, l, a, n, i) {
    return (
      ($t = i),
      (te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (j.H = e === null || e.memoizedState === null ? pf : Xs),
      (Fl = !1),
      (i = l(a, n)),
      (Fl = !1),
      Ta && (i = Mo(t, l, a, n)),
      _o(e),
      i
    );
  }
  function _o(e) {
    j.H = pn;
    var t = xe !== null && xe.next !== null;
    if ((($t = 0), (He = xe = te = null), (Ai = !1), (hn = 0), (Oa = null), t))
      throw Error(c(300));
    e === null ||
      Be ||
      ((e = e.dependencies), e !== null && yi(e) && (Be = !0));
  }
  function Mo(e, t, l, a) {
    te = e;
    var n = 0;
    do {
      if ((Ta && (Oa = null), (hn = 0), (Ta = !1), 25 <= n))
        throw Error(c(301));
      if (((n += 1), (He = xe = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (j.H = yf), (i = t(l, a));
    } while (Ta);
    return i;
  }
  function Gg() {
    var e = j.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? mn(t) : t),
      (e = e.useState()[0]),
      (xe !== null ? xe.memoizedState : null) !== e && (te.flags |= 1024),
      t
    );
  }
  function ws() {
    var e = zi !== 0;
    return (zi = 0), e;
  }
  function js(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function Ds(e) {
    if (Ai) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Ai = !1;
    }
    ($t = 0), (He = xe = te = null), (Ta = !1), (hn = zi = 0), (Oa = null);
  }
  function tt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return He === null ? (te.memoizedState = He = e) : (He = He.next = e), He;
  }
  function Ue() {
    if (xe === null) {
      var e = te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = He === null ? te.memoizedState : He.next;
    if (t !== null) (He = t), (xe = e);
    else {
      if (e === null)
        throw te.alternate === null ? Error(c(467)) : Error(c(310));
      (xe = e),
        (e = {
          memoizedState: xe.memoizedState,
          baseState: xe.baseState,
          baseQueue: xe.baseQueue,
          queue: xe.queue,
          next: null,
        }),
        He === null ? (te.memoizedState = He = e) : (He = He.next = e);
    }
    return He;
  }
  function Ri() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function mn(e) {
    var t = hn;
    return (
      (hn += 1),
      Oa === null && (Oa = []),
      (e = Oo(Oa, e, t)),
      (t = te),
      (He === null ? t.memoizedState : He.next) === null &&
        ((t = t.alternate),
        (j.H = t === null || t.memoizedState === null ? pf : Xs)),
      e
    );
  }
  function Ci(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return mn(e);
      if (e.$$typeof === J) return ke(e);
    }
    throw Error(c(438, String(e)));
  }
  function _s(e) {
    var t = null,
      l = te.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = te.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Ri()), (te.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Ce;
    return t.index++, l;
  }
  function Ft(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function wi(e) {
    var t = Ue();
    return Ms(t, xe, e);
  }
  function Ms(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var f = n.next;
        (n.next = i.next), (i.next = f);
      }
      (t.baseQueue = n = i), (a.pending = null);
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var m = (f = null),
        v = null,
        A = t,
        D = !1;
      do {
        var H = A.lane & -536870913;
        if (H !== A.lane ? (se & H) === H : ($t & H) === H) {
          var z = A.revertLane;
          if (z === 0)
            v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: A.action,
                  hasEagerState: A.hasEagerState,
                  eagerState: A.eagerState,
                  next: null,
                }),
              H === va && (D = !0);
          else if (($t & z) === z) {
            (A = A.next), z === va && (D = !0);
            continue;
          } else
            (H = {
              lane: 0,
              revertLane: A.revertLane,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null,
            }),
              v === null ? ((m = v = H), (f = i)) : (v = v.next = H),
              (te.lanes |= z),
              (Tl |= z);
          (H = A.action),
            Fl && l(i, H),
            (i = A.hasEagerState ? A.eagerState : l(i, H));
        } else
          (z = {
            lane: H,
            revertLane: A.revertLane,
            gesture: A.gesture,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null,
          }),
            v === null ? ((m = v = z), (f = i)) : (v = v.next = z),
            (te.lanes |= H),
            (Tl |= H);
        A = A.next;
      } while (A !== null && A !== t);
      if (
        (v === null ? (f = i) : (v.next = m),
        !ht(i, e.memoizedState) && ((Be = !0), D && ((l = ba), l !== null)))
      )
        throw l;
      (e.memoizedState = i),
        (e.baseState = f),
        (e.baseQueue = v),
        (a.lastRenderedState = i);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Us(e) {
    var t = Ue(),
      l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var f = (n = n.next);
      do (i = e(i, f.action)), (f = f.next);
      while (f !== n);
      ht(i, t.memoizedState) || (Be = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, a];
  }
  function Uo(e, t, l) {
    var a = te,
      n = Ue(),
      i = oe;
    if (i) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else l = t();
    var f = !ht((xe || n).memoizedState, l);
    if (
      (f && ((n.memoizedState = l), (Be = !0)),
      (n = n.queue),
      Bs(Bo.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || f || (He !== null && He.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Na(9, { destroy: void 0 }, Ho.bind(null, a, n, l, t), null),
        Te === null)
      )
        throw Error(c(349));
      i || ($t & 127) !== 0 || Lo(a, t, l);
    }
    return l;
  }
  function Lo(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = te.updateQueue),
      t === null
        ? ((t = Ri()), (te.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function Ho(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), qo(t) && Yo(e);
  }
  function Bo(e, t, l) {
    return l(function () {
      qo(t) && Yo(e);
    });
  }
  function qo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !ht(e, l);
    } catch {
      return !0;
    }
  }
  function Yo(e) {
    var t = Gl(e, 2);
    t !== null && ct(t, e, 2);
  }
  function Ls(e) {
    var t = tt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Fl)) {
        cl(!0);
        try {
          l();
        } finally {
          cl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Go(e, t, l, a) {
    return (e.baseState = l), Ms(e, xe, typeof a == "function" ? a : Ft);
  }
  function Vg(e, t, l, a, n) {
    if (_i(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          i.listeners.push(f);
        },
      };
      j.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null
          ? ((i.next = t.pending = i), Vo(t, i))
          : ((i.next = l.next), (t.pending = l.next = i));
    }
  }
  function Vo(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = j.T,
        f = {};
      j.T = f;
      try {
        var m = l(n, a),
          v = j.S;
        v !== null && v(f, m), Qo(e, t, m);
      } catch (A) {
        Hs(e, t, A);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), (j.T = i);
      }
    } else
      try {
        (i = l(n, a)), Qo(e, t, i);
      } catch (A) {
        Hs(e, t, A);
      }
  }
  function Qo(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Xo(e, t, a);
          },
          function (a) {
            return Hs(e, t, a);
          }
        )
      : Xo(e, t, l);
  }
  function Xo(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      Zo(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Vo(e, l)));
  }
  function Hs(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), Zo(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function Zo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ko(e, t) {
    return t;
  }
  function Jo(e, t) {
    if (oe) {
      var l = Te.formState;
      if (l !== null) {
        e: {
          var a = te;
          if (oe) {
            if (Ne) {
              t: {
                for (var n = Ne, i = zt; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = Ct(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (Ne = Ct(n.nextSibling)), (a = n.data === "F!");
                break e;
              }
            }
            ml(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = tt()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ko,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = hf.bind(null, te, a)),
      (a.dispatch = l),
      (a = Ls(!1)),
      (i = Qs.bind(null, te, !1, a.queue)),
      (a = tt()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = Vg.bind(null, te, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function ko(e) {
    var t = Ue();
    return $o(t, xe, e);
  }
  function $o(e, t, l) {
    if (
      ((t = Ms(e, t, Ko)[0]),
      (e = wi(Ft)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = mn(t);
      } catch (f) {
        throw f === xa ? xi : f;
      }
    else a = t;
    t = Ue();
    var n = t.queue,
      i = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((te.flags |= 2048),
        Na(9, { destroy: void 0 }, Qg.bind(null, n, l), null)),
      [a, i, e]
    );
  }
  function Qg(e, t) {
    e.action = t;
  }
  function Fo(e) {
    var t = Ue(),
      l = xe;
    if (l !== null) return $o(t, l, e);
    Ue(), (t = t.memoizedState), (l = Ue());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function Na(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = te.updateQueue),
      t === null && ((t = Ri()), (te.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Wo() {
    return Ue().memoizedState;
  }
  function ji(e, t, l, a) {
    var n = tt();
    (te.flags |= e),
      (n.memoizedState = Na(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a
      ));
  }
  function Di(e, t, l, a) {
    var n = Ue();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    xe !== null && a !== null && Rs(a, xe.memoizedState.deps)
      ? (n.memoizedState = Na(t, i, l, a))
      : ((te.flags |= e), (n.memoizedState = Na(1 | t, i, l, a)));
  }
  function Io(e, t) {
    ji(8390656, 8, e, t);
  }
  function Bs(e, t) {
    Di(2048, 8, e, t);
  }
  function Xg(e) {
    te.flags |= 4;
    var t = te.updateQueue;
    if (t === null) (t = Ri()), (te.updateQueue = t), (t.events = [e]);
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function Po(e) {
    var t = Ue().memoizedState;
    return (
      Xg({ ref: t, nextImpl: e }),
      function () {
        if ((me & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function ef(e, t) {
    return Di(4, 2, e, t);
  }
  function tf(e, t) {
    return Di(4, 4, e, t);
  }
  function lf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function af(e, t, l) {
    (l = l != null ? l.concat([e]) : null), Di(4, 4, lf.bind(null, t, e), l);
  }
  function qs() {}
  function nf(e, t) {
    var l = Ue();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Rs(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function uf(e, t) {
    var l = Ue();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Rs(t, a[1])) return a[0];
    if (((a = e()), Fl)) {
      cl(!0);
      try {
        e();
      } finally {
        cl(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function Ys(e, t, l) {
    return l === void 0 || (($t & 1073741824) !== 0 && (se & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = sd()), (te.lanes |= e), (Tl |= e), l);
  }
  function sf(e, t, l, a) {
    return ht(l, t)
      ? l
      : Ea.current !== null
      ? ((e = Ys(e, l, a)), ht(e, t) || (Be = !0), e)
      : ($t & 42) === 0 || (($t & 1073741824) !== 0 && (se & 261930) === 0)
      ? ((Be = !0), (e.memoizedState = l))
      : ((e = sd()), (te.lanes |= e), (Tl |= e), t);
  }
  function rf(e, t, l, a, n) {
    var i = B.p;
    B.p = i !== 0 && 8 > i ? i : 8;
    var f = j.T,
      m = {};
    (j.T = m), Qs(e, !1, t, l);
    try {
      var v = n(),
        A = j.S;
      if (
        (A !== null && A(m, v),
        v !== null && typeof v == "object" && typeof v.then == "function")
      ) {
        var D = qg(v, a);
        gn(e, t, D, bt(e));
      } else gn(e, t, a, bt(e));
    } catch (H) {
      gn(e, t, { then: function () {}, status: "rejected", reason: H }, bt());
    } finally {
      (B.p = i),
        f !== null && m.types !== null && (f.types = m.types),
        (j.T = f);
    }
  }
  function Zg() {}
  function Gs(e, t, l, a) {
    if (e.tag !== 5) throw Error(c(476));
    var n = cf(e).queue;
    rf(
      e,
      n,
      t,
      $,
      l === null
        ? Zg
        : function () {
            return of(e), l(a);
          }
    );
  }
  function cf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: $,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ft,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function of(e) {
    var t = cf(e);
    t.next === null && (t = e.alternate.memoizedState),
      gn(e, t.next.queue, {}, bt());
  }
  function Vs() {
    return ke(Dn);
  }
  function ff() {
    return Ue().memoizedState;
  }
  function df() {
    return Ue().memoizedState;
  }
  function Kg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = bt();
          e = yl(l);
          var a = vl(t, e, l);
          a !== null && (ct(a, t, l), on(a, t, l)),
            (t = { cache: ys() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Jg(e, t, l) {
    var a = bt();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      _i(e)
        ? mf(t, l)
        : ((l = us(e, t, l, a)), l !== null && (ct(l, e, a), gf(l, t, a)));
  }
  function hf(e, t, l) {
    var a = bt();
    gn(e, t, l, a);
  }
  function gn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (_i(e)) mf(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var f = t.lastRenderedState,
            m = i(f, l);
          if (((n.hasEagerState = !0), (n.eagerState = m), ht(m, f)))
            return hi(e, t, n, 0), Te === null && di(), !1;
        } catch {}
      if (((l = us(e, t, n, a)), l !== null))
        return ct(l, e, a), gf(l, t, a), !0;
    }
    return !1;
  }
  function Qs(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Sr(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      _i(e))
    ) {
      if (t) throw Error(c(479));
    } else (t = us(e, l, a, 2)), t !== null && ct(t, e, 2);
  }
  function _i(e) {
    var t = e.alternate;
    return e === te || (t !== null && t === te);
  }
  function mf(e, t) {
    Ta = Ai = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function gf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), vc(e, l);
    }
  }
  var pn = {
    readContext: ke,
    use: Ci,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useLayoutEffect: we,
    useInsertionEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useSyncExternalStore: we,
    useId: we,
    useHostTransitionStatus: we,
    useFormState: we,
    useActionState: we,
    useOptimistic: we,
    useMemoCache: we,
    useCacheRefresh: we,
  };
  pn.useEffectEvent = we;
  var pf = {
      readContext: ke,
      use: Ci,
      useCallback: function (e, t) {
        return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ke,
      useEffect: Io,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          ji(4194308, 4, lf.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return ji(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ji(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = tt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Fl) {
          cl(!0);
          try {
            e();
          } finally {
            cl(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = tt();
        if (l !== void 0) {
          var n = l(t);
          if (Fl) {
            cl(!0);
            try {
              l(t);
            } finally {
              cl(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Jg.bind(null, te, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = tt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Ls(e);
        var t = e.queue,
          l = hf.bind(null, te, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: qs,
      useDeferredValue: function (e, t) {
        var l = tt();
        return Ys(l, e, t);
      },
      useTransition: function () {
        var e = Ls(!1);
        return (
          (e = rf.bind(null, te, e.queue, !0, !1)),
          (tt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = te,
          n = tt();
        if (oe) {
          if (l === void 0) throw Error(c(407));
          l = l();
        } else {
          if (((l = t()), Te === null)) throw Error(c(349));
          (se & 127) !== 0 || Lo(a, t, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: t };
        return (
          (n.queue = i),
          Io(Bo.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          Na(9, { destroy: void 0 }, Ho.bind(null, a, i, l, t), null),
          l
        );
      },
      useId: function () {
        var e = tt(),
          t = Te.identifierPrefix;
        if (oe) {
          var l = Ht,
            a = Lt;
          (l = (a & ~(1 << (32 - dt(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = zi++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_");
        } else (l = Yg++), (t = "_" + t + "r_" + l.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Vs,
      useFormState: Jo,
      useActionState: Jo,
      useOptimistic: function (e) {
        var t = tt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Qs.bind(null, te, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: _s,
      useCacheRefresh: function () {
        return (tt().memoizedState = Kg.bind(null, te));
      },
      useEffectEvent: function (e) {
        var t = tt(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((me & 2) !== 0) throw Error(c(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Xs = {
      readContext: ke,
      use: Ci,
      useCallback: nf,
      useContext: ke,
      useEffect: Bs,
      useImperativeHandle: af,
      useInsertionEffect: ef,
      useLayoutEffect: tf,
      useMemo: uf,
      useReducer: wi,
      useRef: Wo,
      useState: function () {
        return wi(Ft);
      },
      useDebugValue: qs,
      useDeferredValue: function (e, t) {
        var l = Ue();
        return sf(l, xe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = wi(Ft)[0],
          t = Ue().memoizedState;
        return [typeof e == "boolean" ? e : mn(e), t];
      },
      useSyncExternalStore: Uo,
      useId: ff,
      useHostTransitionStatus: Vs,
      useFormState: ko,
      useActionState: ko,
      useOptimistic: function (e, t) {
        var l = Ue();
        return Go(l, xe, e, t);
      },
      useMemoCache: _s,
      useCacheRefresh: df,
    };
  Xs.useEffectEvent = Po;
  var yf = {
    readContext: ke,
    use: Ci,
    useCallback: nf,
    useContext: ke,
    useEffect: Bs,
    useImperativeHandle: af,
    useInsertionEffect: ef,
    useLayoutEffect: tf,
    useMemo: uf,
    useReducer: Us,
    useRef: Wo,
    useState: function () {
      return Us(Ft);
    },
    useDebugValue: qs,
    useDeferredValue: function (e, t) {
      var l = Ue();
      return xe === null ? Ys(l, e, t) : sf(l, xe.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Us(Ft)[0],
        t = Ue().memoizedState;
      return [typeof e == "boolean" ? e : mn(e), t];
    },
    useSyncExternalStore: Uo,
    useId: ff,
    useHostTransitionStatus: Vs,
    useFormState: Fo,
    useActionState: Fo,
    useOptimistic: function (e, t) {
      var l = Ue();
      return xe !== null
        ? Go(l, xe, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: _s,
    useCacheRefresh: df,
  };
  yf.useEffectEvent = Po;
  function Zs(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : b({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ks = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = bt(),
        n = yl(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = vl(e, n, a)),
        t !== null && (ct(t, e, a), on(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = bt(),
        n = yl(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = vl(e, n, a)),
        t !== null && (ct(t, e, a), on(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = bt(),
        a = yl(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = vl(e, a, l)),
        t !== null && (ct(t, e, l), on(t, e, l));
    },
  };
  function vf(e, t, l, a, n, i, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, i, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !tn(l, a) || !tn(n, i)
        : !0
    );
  }
  function bf(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
  }
  function Wl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = b({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function xf(e) {
    fi(e);
  }
  function Sf(e) {
    console.error(e);
  }
  function Ef(e) {
    fi(e);
  }
  function Mi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Tf(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Js(e, t, l) {
    return (
      (l = yl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Mi(e, t);
      }),
      l
    );
  }
  function Of(e) {
    return (e = yl(e)), (e.tag = 3), e;
  }
  function Nf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      (e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          Tf(t, l, a);
        });
    }
    var f = l.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        Tf(t, l, a),
          typeof n != "function" &&
            (Ol === null ? (Ol = new Set([this])) : Ol.add(this));
        var m = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function kg(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && ya(t, l, n, !0),
        (l = gt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Rt === null ? Ki() : l.alternate === null && je === 0 && (je = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Si
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  vr(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Si
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  vr(e, a, n)),
              !1
            );
        }
        throw Error(c(435, l.tag));
      }
      return vr(e, a, n), Ki(), !1;
    }
    if (oe)
      return (
        (t = gt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== ds && ((e = Error(c(422), { cause: a })), nn(Ot(e, l))))
          : (a !== ds && ((t = Error(c(423), { cause: a })), nn(Ot(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Ot(a, l)),
            (n = Js(e.stateNode, a, n)),
            Ts(e, n),
            je !== 4 && (je = 2)),
        !1
      );
    var i = Error(c(520), { cause: a });
    if (
      ((i = Ot(i, l)),
      On === null ? (On = [i]) : On.push(i),
      je !== 4 && (je = 2),
      t === null)
    )
      return !0;
    (a = Ot(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Js(l.stateNode, a, e)),
            Ts(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (Ol === null || !Ol.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Of(n)),
              Nf(n, e, l, a),
              Ts(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ks = Error(c(461)),
    Be = !1;
  function $e(e, t, l, a) {
    t.child = e === null ? Ro(t, null, l, a) : $l(t, e.child, l, a);
  }
  function Af(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a) m !== "ref" && (f[m] = a[m]);
    } else f = a;
    return (
      Zl(t),
      (a = Cs(e, t, l, f, i, n)),
      (m = ws()),
      e !== null && !Be
        ? (js(e, t, n), Wt(e, t, n))
        : (oe && m && os(t), (t.flags |= 1), $e(e, t, a, n), t.child)
    );
  }
  function zf(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" &&
        !ss(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = i), Rf(e, t, i, a, n))
        : ((e = gi(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !lr(e, n))) {
      var f = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : tn), l(f, a) && e.ref === t.ref)
      )
        return Wt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Zt(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Rf(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (tn(i, a) && e.ref === t.ref)
        if (((Be = !1), (t.pendingProps = a = i), lr(e, n)))
          (e.flags & 131072) !== 0 && (Be = !0);
        else return (t.lanes = e.lanes), Wt(e, t, n);
    }
    return $s(e, t, l, a, n);
  }
  function Cf(e, t, l, a) {
    var n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~i;
        } else (a = 0), (t.child = null);
        return wf(e, t, i, l, a);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && bi(t, i !== null ? i.cachePool : null),
          i !== null ? jo(t, i) : Ns(),
          Do(t);
      else
        return (
          (a = t.lanes = 536870912),
          wf(e, t, i !== null ? i.baseLanes | l : l, l, a)
        );
    } else
      i !== null
        ? (bi(t, i.cachePool), jo(t, i), xl(), (t.memoizedState = null))
        : (e !== null && bi(t, null), Ns(), xl());
    return $e(e, t, n, l), t.child;
  }
  function yn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function wf(e, t, l, a, n) {
    var i = bs();
    return (
      (i = i === null ? null : { parent: Le._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: l, cachePool: i }),
      e !== null && bi(t, null),
      Ns(),
      Do(t),
      e !== null && ya(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function Ui(e, t) {
    return (
      (t = Hi({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function jf(e, t, l) {
    return (
      $l(t, e.child, null, l),
      (e = Ui(t, t.pendingProps)),
      (e.flags |= 2),
      pt(t),
      (t.memoizedState = null),
      e
    );
  }
  function $g(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (oe) {
        if (a.mode === "hidden")
          return (e = Ui(t, a)), (t.lanes = 536870912), yn(null, e);
        if (
          (zs(t),
          (e = Ne)
            ? ((e = Qd(e, zt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: dl !== null ? { id: Lt, overflow: Ht } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = ho(e)),
                (l.return = t),
                (t.child = l),
                (Je = t),
                (Ne = null)))
            : (e = null),
          e === null)
        )
          throw ml(t);
        return (t.lanes = 536870912), null;
      }
      return Ui(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if ((zs(t), n))
        if (t.flags & 256) (t.flags &= -257), (t = jf(e, t, l));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(c(558));
      else if (
        (Be || ya(e, t, l, !1), (n = (l & e.childLanes) !== 0), Be || n)
      ) {
        if (
          ((a = Te),
          a !== null && ((f = bc(a, l)), f !== 0 && f !== i.retryLane))
        )
          throw ((i.retryLane = f), Gl(e, f), ct(a, e, f), ks);
        Ki(), (t = jf(e, t, l));
      } else
        (e = i.treeContext),
          (Ne = Ct(f.nextSibling)),
          (Je = t),
          (oe = !0),
          (hl = null),
          (zt = !1),
          e !== null && po(t, e),
          (t = Ui(t, a)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = Zt(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Li(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(c(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function $s(e, t, l, a, n) {
    return (
      Zl(t),
      (l = Cs(e, t, l, a, void 0, n)),
      (a = ws()),
      e !== null && !Be
        ? (js(e, t, n), Wt(e, t, n))
        : (oe && a && os(t), (t.flags |= 1), $e(e, t, l, n), t.child)
    );
  }
  function Df(e, t, l, a, n, i) {
    return (
      Zl(t),
      (t.updateQueue = null),
      (l = Mo(t, a, l, n)),
      _o(e),
      (a = ws()),
      e !== null && !Be
        ? (js(e, t, i), Wt(e, t, i))
        : (oe && a && os(t), (t.flags |= 1), $e(e, t, l, i), t.child)
    );
  }
  function _f(e, t, l, a, n) {
    if ((Zl(t), t.stateNode === null)) {
      var i = ha,
        f = l.contextType;
      typeof f == "object" && f !== null && (i = ke(f)),
        (i = new l(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Ks),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        Ss(t),
        (f = l.contextType),
        (i.context = typeof f == "object" && f !== null ? ke(f) : ha),
        (i.state = t.memoizedState),
        (f = l.getDerivedStateFromProps),
        typeof f == "function" && (Zs(t, l, f, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((f = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          f !== i.state && Ks.enqueueReplaceState(i, i.state, null),
          dn(t, a, i, n),
          fn(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps,
        v = Wl(l, m);
      i.props = v;
      var A = i.context,
        D = l.contextType;
      (f = ha), typeof D == "object" && D !== null && (f = ke(D));
      var H = l.getDerivedStateFromProps;
      (D =
        typeof H == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (m = t.pendingProps !== m),
        D ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((m || A !== f) && bf(t, i, a, f)),
        (pl = !1);
      var z = t.memoizedState;
      (i.state = z),
        dn(t, a, i, n),
        fn(),
        (A = t.memoizedState),
        m || z !== A || pl
          ? (typeof H == "function" && (Zs(t, l, H, a), (A = t.memoizedState)),
            (v = pl || vf(t, l, v, a, z, A, f))
              ? (D ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = A)),
            (i.props = a),
            (i.state = A),
            (i.context = f),
            (a = v))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (i = t.stateNode),
        Es(e, t),
        (f = t.memoizedProps),
        (D = Wl(l, f)),
        (i.props = D),
        (H = t.pendingProps),
        (z = i.context),
        (A = l.contextType),
        (v = ha),
        typeof A == "object" && A !== null && (v = ke(A)),
        (m = l.getDerivedStateFromProps),
        (A =
          typeof m == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((f !== H || z !== v) && bf(t, i, a, v)),
        (pl = !1),
        (z = t.memoizedState),
        (i.state = z),
        dn(t, a, i, n),
        fn();
      var C = t.memoizedState;
      f !== H ||
      z !== C ||
      pl ||
      (e !== null && e.dependencies !== null && yi(e.dependencies))
        ? (typeof m == "function" && (Zs(t, l, m, a), (C = t.memoizedState)),
          (D =
            pl ||
            vf(t, l, D, a, z, C, v) ||
            (e !== null && e.dependencies !== null && yi(e.dependencies)))
            ? (A ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, C, v),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, C, v)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (f === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = C)),
          (i.props = a),
          (i.state = C),
          (i.context = v),
          (a = D))
        : (typeof i.componentDidUpdate != "function" ||
            (f === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      Li(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = $l(t, e.child, null, n)),
              (t.child = $l(t, null, l, n)))
            : $e(e, t, l, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Wt(e, t, n)),
      e
    );
  }
  function Mf(e, t, l, a) {
    return Ql(), (t.flags |= 256), $e(e, t, l, a), t.child;
  }
  var Fs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ws(e) {
    return { baseLanes: e, cachePool: Eo() };
  }
  function Is(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= vt), e;
  }
  function Uf(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      f;
    if (
      ((f = i) ||
        (f =
          e !== null && e.memoizedState === null ? !1 : (Me.current & 2) !== 0),
      f && ((n = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (oe) {
        if (
          (n ? bl(t) : xl(),
          (e = Ne)
            ? ((e = Qd(e, zt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: dl !== null ? { id: Lt, overflow: Ht } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = ho(e)),
                (l.return = t),
                (t.child = l),
                (Je = t),
                (Ne = null)))
            : (e = null),
          e === null)
        )
          throw ml(t);
        return Mr(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var m = a.children;
      return (
        (a = a.fallback),
        n
          ? (xl(),
            (n = t.mode),
            (m = Hi({ mode: "hidden", children: m }, n)),
            (a = Vl(a, n, l, null)),
            (m.return = t),
            (a.return = t),
            (m.sibling = a),
            (t.child = m),
            (a = t.child),
            (a.memoizedState = Ws(l)),
            (a.childLanes = Is(e, f, l)),
            (t.memoizedState = Fs),
            yn(null, a))
          : (bl(t), Ps(t, m))
      );
    }
    var v = e.memoizedState;
    if (v !== null && ((m = v.dehydrated), m !== null)) {
      if (i)
        t.flags & 256
          ? (bl(t), (t.flags &= -257), (t = er(e, t, l)))
          : t.memoizedState !== null
          ? (xl(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (xl(),
            (m = a.fallback),
            (n = t.mode),
            (a = Hi({ mode: "visible", children: a.children }, n)),
            (m = Vl(m, n, l, null)),
            (m.flags |= 2),
            (a.return = t),
            (m.return = t),
            (a.sibling = m),
            (t.child = a),
            $l(t, e.child, null, l),
            (a = t.child),
            (a.memoizedState = Ws(l)),
            (a.childLanes = Is(e, f, l)),
            (t.memoizedState = Fs),
            (t = yn(null, a)));
      else if ((bl(t), Mr(m))) {
        if (((f = m.nextSibling && m.nextSibling.dataset), f)) var A = f.dgst;
        (f = A),
          (a = Error(c(419))),
          (a.stack = ""),
          (a.digest = f),
          nn({ value: a, source: null, stack: null }),
          (t = er(e, t, l));
      } else if (
        (Be || ya(e, t, l, !1), (f = (l & e.childLanes) !== 0), Be || f)
      ) {
        if (
          ((f = Te),
          f !== null && ((a = bc(f, l)), a !== 0 && a !== v.retryLane))
        )
          throw ((v.retryLane = a), Gl(e, a), ct(f, e, a), ks);
        _r(m) || Ki(), (t = er(e, t, l));
      } else
        _r(m)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = v.treeContext),
            (Ne = Ct(m.nextSibling)),
            (Je = t),
            (oe = !0),
            (hl = null),
            (zt = !1),
            e !== null && po(t, e),
            (t = Ps(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (xl(),
        (m = a.fallback),
        (n = t.mode),
        (v = e.child),
        (A = v.sibling),
        (a = Zt(v, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = v.subtreeFlags & 65011712),
        A !== null ? (m = Zt(A, m)) : ((m = Vl(m, n, l, null)), (m.flags |= 2)),
        (m.return = t),
        (a.return = t),
        (a.sibling = m),
        (t.child = a),
        yn(null, a),
        (a = t.child),
        (m = e.child.memoizedState),
        m === null
          ? (m = Ws(l))
          : ((n = m.cachePool),
            n !== null
              ? ((v = Le._currentValue),
                (n = n.parent !== v ? { parent: v, pool: v } : n))
              : (n = Eo()),
            (m = { baseLanes: m.baseLanes | l, cachePool: n })),
        (a.memoizedState = m),
        (a.childLanes = Is(e, f, l)),
        (t.memoizedState = Fs),
        yn(e.child, a))
      : (bl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Zt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Ps(e, t) {
    return (
      (t = Hi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Hi(e, t) {
    return (e = mt(22, e, null, t)), (e.lanes = 0), e;
  }
  function er(e, t, l) {
    return (
      $l(t, e.child, null, l),
      (e = Ps(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Lf(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), gs(e.return, t, l);
  }
  function tr(e, t, l, a, n, i) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: i,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = l),
        (f.tailMode = n),
        (f.treeForkCount = i));
  }
  function Hf(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    a = a.children;
    var f = Me.current,
      m = (f & 2) !== 0;
    if (
      (m ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
      G(Me, f),
      $e(e, t, a, l),
      (a = oe ? an : 0),
      !m && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lf(e, l, t);
        else if (e.tag === 19) Lf(e, l, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && Ni(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          tr(t, !1, n, l, i, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Ni(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        tr(t, !0, l, null, i, a);
        break;
      case "together":
        tr(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Tl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ya(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Zt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = Zt(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function lr(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && yi(e)));
  }
  function Fg(e, t, l) {
    switch (t.tag) {
      case 3:
        et(t, t.stateNode.containerInfo),
          gl(t, Le, e.memoizedState.cache),
          Ql();
        break;
      case 27:
      case 5:
        Va(t);
        break;
      case 4:
        et(t, t.stateNode.containerInfo);
        break;
      case 10:
        gl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), zs(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (bl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
            ? Uf(e, t, l)
            : (bl(t), (e = Wt(e, t, l)), e !== null ? e.sibling : null);
        bl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (ya(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Hf(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          G(Me, Me.current),
          a)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), Cf(e, t, l, t.pendingProps);
      case 24:
        gl(t, Le, e.memoizedState.cache);
    }
    return Wt(e, t, l);
  }
  function Bf(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Be = !0;
      else {
        if (!lr(e, l) && (t.flags & 128) === 0) return (Be = !1), Fg(e, t, l);
        Be = (e.flags & 131072) !== 0;
      }
    else (Be = !1), oe && (t.flags & 1048576) !== 0 && go(t, an, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Jl(t.elementType)), (t.type = e), typeof e == "function"))
            ss(e)
              ? ((a = Wl(e, a)), (t.tag = 1), (t = _f(null, t, e, a, l)))
              : ((t.tag = 0), (t = $s(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ue) {
                (t.tag = 11), (t = Af(null, t, e, a, l));
                break e;
              } else if (n === W) {
                (t.tag = 14), (t = zf(null, t, e, a, l));
                break e;
              }
            }
            throw ((t = De(e) || e), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return $s(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = Wl(a, t.pendingProps)), _f(e, t, a, n, l);
      case 3:
        e: {
          if ((et(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          (n = i.element), Es(e, t), dn(t, a, null, l);
          var f = t.memoizedState;
          if (
            ((a = f.cache),
            gl(t, Le, a),
            a !== i.cache && ps(t, [Le], l, !0),
            fn(),
            (a = f.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = Mf(e, t, a, l);
              break e;
            } else if (a !== n) {
              (n = Ot(Error(c(424)), t)), nn(n), (t = Mf(e, t, a, l));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Ne = Ct(e.firstChild),
                  Je = t,
                  oe = !0,
                  hl = null,
                  zt = !0,
                  l = Ro(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Ql(), a === n)) {
              t = Wt(e, t, l);
              break e;
            }
            $e(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Li(e, t),
          e === null
            ? (l = $d(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : oe ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Pi(ae.current).createElement(l)),
                (a[Ke] = t),
                (a[at] = e),
                Fe(a, l, e),
                Qe(a),
                (t.stateNode = a))
            : (t.memoizedState = $d(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Va(t),
          e === null &&
            oe &&
            ((a = t.stateNode = Kd(t.type, t.pendingProps, ae.current)),
            (Je = t),
            (zt = !0),
            (n = Ne),
            Rl(t.type) ? ((Ur = n), (Ne = Ct(a.firstChild))) : (Ne = n)),
          $e(e, t, t.pendingProps.children, l),
          Li(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            oe &&
            ((n = a = Ne) &&
              ((a = Ap(a, t.type, t.pendingProps, zt)),
              a !== null
                ? ((t.stateNode = a),
                  (Je = t),
                  (Ne = Ct(a.firstChild)),
                  (zt = !1),
                  (n = !0))
                : (n = !1)),
            n || ml(t)),
          Va(t),
          (n = t.type),
          (i = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (a = i.children),
          wr(n, i) ? (a = null) : f !== null && wr(n, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Cs(e, t, Gg, null, null, l)), (Dn._currentValue = n)),
          Li(e, t),
          $e(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            oe &&
            ((e = l = Ne) &&
              ((l = zp(l, t.pendingProps, zt)),
              l !== null
                ? ((t.stateNode = l), (Je = t), (Ne = null), (e = !0))
                : (e = !1)),
            e || ml(t)),
          null
        );
      case 13:
        return Uf(e, t, l);
      case 4:
        return (
          et(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = $l(t, null, a, l)) : $e(e, t, a, l),
          t.child
        );
      case 11:
        return Af(e, t, t.type, t.pendingProps, l);
      case 7:
        return $e(e, t, t.pendingProps, l), t.child;
      case 8:
        return $e(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return $e(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          gl(t, t.type, a.value),
          $e(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Zl(t),
          (n = ke(n)),
          (a = a(n)),
          (t.flags |= 1),
          $e(e, t, a, l),
          t.child
        );
      case 14:
        return zf(e, t, t.type, t.pendingProps, l);
      case 15:
        return Rf(e, t, t.type, t.pendingProps, l);
      case 19:
        return Hf(e, t, l);
      case 31:
        return $g(e, t, l);
      case 22:
        return Cf(e, t, l, t.pendingProps);
      case 24:
        return (
          Zl(t),
          (a = ke(Le)),
          e === null
            ? ((n = bs()),
              n === null &&
                ((n = Te),
                (i = ys()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (t.memoizedState = { parent: a, cache: n }),
              Ss(t),
              gl(t, Le, n))
            : ((e.lanes & l) !== 0 && (Es(e, t), dn(t, null, null, l), fn()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  gl(t, Le, a))
                : ((a = i.cache),
                  gl(t, Le, a),
                  a !== n.cache && ps(t, [Le], l, !0))),
          $e(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function It(e) {
    e.flags |= 4;
  }
  function ar(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (fd()) e.flags |= 8192;
        else throw ((kl = Si), xs);
    } else e.flags &= -16777217;
  }
  function qf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !eh(t)))
      if (fd()) e.flags |= 8192;
      else throw ((kl = Si), xs);
  }
  function Bi(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? pc() : 536870912), (e.lanes |= t), (Ca |= t));
  }
  function vn(e, t) {
    if (!oe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function Wg(e, t, l) {
    var a = t.pendingProps;
    switch ((fs(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ae(t), null;
      case 1:
        return Ae(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          kt(Le),
          _e(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (pa(t)
              ? It(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), hs())),
          Ae(t),
          null
        );
      case 26:
        var n = t.type,
          i = t.memoizedState;
        return (
          e === null
            ? (It(t),
              i !== null ? (Ae(t), qf(t, i)) : (Ae(t), ar(t, n, null, a, l)))
            : i
            ? i !== e.memoizedState
              ? (It(t), Ae(t), qf(t, i))
              : (Ae(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== a && It(t),
              Ae(t),
              ar(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          ($n(t),
          (l = ae.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && It(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return Ae(t), null;
          }
          (e = X.current),
            pa(t) ? yo(t) : ((e = Kd(n, a, l)), (t.stateNode = e), It(t));
        }
        return Ae(t), null;
      case 5:
        if (($n(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && It(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return Ae(t), null;
          }
          if (((i = X.current), pa(t))) yo(t);
          else {
            var f = Pi(ae.current);
            switch (i) {
              case 1:
                i = f.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                i = f.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    i = f.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    i = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (i = f.createElement("div")),
                      (i.innerHTML = "<script></script>"),
                      (i = i.removeChild(i.firstChild));
                    break;
                  case "select":
                    (i =
                      typeof a.is == "string"
                        ? f.createElement("select", { is: a.is })
                        : f.createElement("select")),
                      a.multiple
                        ? (i.multiple = !0)
                        : a.size && (i.size = a.size);
                    break;
                  default:
                    i =
                      typeof a.is == "string"
                        ? f.createElement(n, { is: a.is })
                        : f.createElement(n);
                }
            }
            (i[Ke] = t), (i[at] = a);
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) i.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            t.stateNode = i;
            e: switch ((Fe(i, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && It(t);
          }
        }
        return (
          Ae(t),
          ar(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && It(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = ae.current), pa(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Je),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[Ke] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Ud(e.nodeValue, l)
              )),
              e || ml(t, !0);
          } else (e = Pi(e).createTextNode(a)), (e[Ke] = t), (t.stateNode = e);
        }
        return Ae(t), null;
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = pa(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557));
              e[Ke] = t;
            } else
              Ql(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ae(t), (e = !1);
          } else
            (l = hs()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0);
          if (!e) return t.flags & 256 ? (pt(t), t) : (pt(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return Ae(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = pa(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(c(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(c(317));
              n[Ke] = t;
            } else
              Ql(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ae(t), (n = !1);
          } else
            (n = hs()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (pt(t), t) : (pt(t), null);
        }
        return (
          pt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (i = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (i = a.memoizedState.cachePool.pool),
                i !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Bi(t, t.updateQueue),
              Ae(t),
              null)
        );
      case 4:
        return _e(), e === null && Nr(t.stateNode.containerInfo), Ae(t), null;
      case 10:
        return kt(t.type), Ae(t), null;
      case 19:
        if ((M(Me), (a = t.memoizedState), a === null)) return Ae(t), null;
        if (((n = (t.flags & 128) !== 0), (i = a.rendering), i === null))
          if (n) vn(a, !1);
          else {
            if (je !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = Ni(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      vn(a, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Bi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    fo(l, e), (l = l.sibling);
                  return (
                    G(Me, (Me.current & 1) | 2),
                    oe && Kt(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ot() > Qi &&
              ((t.flags |= 128), (n = !0), vn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Ni(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Bi(t, e),
                vn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !i.alternate &&
                  !oe)
              )
                return Ae(t), null;
            } else
              2 * ot() - a.renderingStartTime > Qi &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), vn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = a.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (a.last = i));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = ot()),
            (e.sibling = null),
            (l = Me.current),
            G(Me, n ? (l & 1) | 2 : l & 1),
            oe && Kt(t, a.treeForkCount),
            e)
          : (Ae(t), null);
      case 22:
      case 23:
        return (
          pt(t),
          As(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ae(t),
          (l = t.updateQueue),
          l !== null && Bi(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && M(Kl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          kt(Le),
          Ae(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Ig(e, t) {
    switch ((fs(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kt(Le),
          _e(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return $n(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((pt(t), t.alternate === null)) throw Error(c(340));
          Ql();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (pt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(c(340));
          Ql();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return M(Me), null;
      case 4:
        return _e(), null;
      case 10:
        return kt(t.type), null;
      case 22:
      case 23:
        return (
          pt(t),
          As(),
          e !== null && M(Kl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return kt(Le), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yf(e, t) {
    switch ((fs(t), t.tag)) {
      case 3:
        kt(Le), _e();
        break;
      case 26:
      case 27:
      case 5:
        $n(t);
        break;
      case 4:
        _e();
        break;
      case 31:
        t.memoizedState !== null && pt(t);
        break;
      case 13:
        pt(t);
        break;
      case 19:
        M(Me);
        break;
      case 10:
        kt(t.type);
        break;
      case 22:
      case 23:
        pt(t), As(), e !== null && M(Kl);
        break;
      case 24:
        kt(Le);
    }
  }
  function bn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              f = l.inst;
            (a = i()), (f.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (m) {
      be(t, t.return, m);
    }
  }
  function Sl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst,
              m = f.destroy;
            if (m !== void 0) {
              (f.destroy = void 0), (n = t);
              var v = l,
                A = m;
              try {
                A();
              } catch (D) {
                be(n, v, D);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (D) {
      be(t, t.return, D);
    }
  }
  function Gf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        wo(t, l);
      } catch (a) {
        be(e, e.return, a);
      }
    }
  }
  function Vf(e, t, l) {
    (l.props = Wl(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      be(e, t, a);
    }
  }
  function xn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      be(e, t, n);
    }
  }
  function Bt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          be(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          be(e, t, n);
        }
      else l.current = null;
  }
  function Qf(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      be(e, e.return, n);
    }
  }
  function nr(e, t, l) {
    try {
      var a = e.stateNode;
      xp(a, e.type, l, t), (a[at] = t);
    } catch (n) {
      be(e, e.return, n);
    }
  }
  function Xf(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Rl(e.type)) ||
      e.tag === 4
    );
  }
  function ir(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Rl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ur(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Qt));
    else if (
      a !== 4 &&
      (a === 27 && Rl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (ur(e, t, l), e = e.sibling; e !== null; )
        ur(e, t, l), (e = e.sibling);
  }
  function qi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && Rl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (qi(e, t, l), e = e.sibling; e !== null; )
        qi(e, t, l), (e = e.sibling);
  }
  function Zf(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Fe(t, a, l), (t[Ke] = e), (t[at] = l);
    } catch (i) {
      be(e, e.return, i);
    }
  }
  var Pt = !1,
    qe = !1,
    sr = !1,
    Kf = typeof WeakSet == "function" ? WeakSet : Set,
    Xe = null;
  function Pg(e, t) {
    if (((e = e.containerInfo), (Rr = uu), (e = lo(e)), es(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0,
              m = -1,
              v = -1,
              A = 0,
              D = 0,
              H = e,
              z = null;
            t: for (;;) {
              for (
                var C;
                H !== l || (n !== 0 && H.nodeType !== 3) || (m = f + n),
                  H !== i || (a !== 0 && H.nodeType !== 3) || (v = f + a),
                  H.nodeType === 3 && (f += H.nodeValue.length),
                  (C = H.firstChild) !== null;

              )
                (z = H), (H = C);
              for (;;) {
                if (H === e) break t;
                if (
                  (z === l && ++A === n && (m = f),
                  z === i && ++D === a && (v = f),
                  (C = H.nextSibling) !== null)
                )
                  break;
                (H = z), (z = H.parentNode);
              }
              H = C;
            }
            l = m === -1 || v === -1 ? null : { start: m, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Cr = { focusedElem: e, selectionRange: l }, uu = !1, Xe = t;
      Xe !== null;

    )
      if (
        ((t = Xe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Xe = e);
      else
        for (; Xe !== null; ) {
          switch (((t = Xe), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  (n = e[l]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                (e = void 0),
                  (l = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode);
                try {
                  var Z = Wl(l.type, n);
                  (e = a.getSnapshotBeforeUpdate(Z, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (F) {
                  be(l, l.return, F);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  Dr(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Dr(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Xe = e);
            break;
          }
          Xe = t.return;
        }
  }
  function Jf(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        tl(e, l), a & 4 && bn(5, l);
        break;
      case 1:
        if ((tl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              be(l, l.return, f);
            }
          else {
            var n = Wl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              be(l, l.return, f);
            }
          }
        a & 64 && Gf(l), a & 512 && xn(l, l.return);
        break;
      case 3:
        if ((tl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            wo(e, t);
          } catch (f) {
            be(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Zf(l);
      case 26:
      case 5:
        tl(e, l), t === null && a & 4 && Qf(l), a & 512 && xn(l, l.return);
        break;
      case 12:
        tl(e, l);
        break;
      case 31:
        tl(e, l), a & 4 && Ff(e, l);
        break;
      case 13:
        tl(e, l),
          a & 4 && Wf(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = rp.bind(null, l)), Rp(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Pt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || qe), (n = Pt);
          var i = qe;
          (Pt = a),
            (qe = t) && !i ? ll(e, l, (l.subtreeFlags & 8772) !== 0) : tl(e, l),
            (Pt = n),
            (qe = i);
        }
        break;
      case 30:
        break;
      default:
        tl(e, l);
    }
  }
  function kf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), kf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Hu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Re = null,
    it = !1;
  function el(e, t, l) {
    for (l = l.child; l !== null; ) $f(e, t, l), (l = l.sibling);
  }
  function $f(e, t, l) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(Qa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        qe || Bt(l, t),
          el(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        qe || Bt(l, t);
        var a = Re,
          n = it;
        Rl(l.type) && ((Re = l.stateNode), (it = !1)),
          el(e, t, l),
          Cn(l.stateNode),
          (Re = a),
          (it = n);
        break;
      case 5:
        qe || Bt(l, t);
      case 6:
        if (
          ((a = Re),
          (n = it),
          (Re = null),
          el(e, t, l),
          (Re = a),
          (it = n),
          Re !== null)
        )
          if (it)
            try {
              (Re.nodeType === 9
                ? Re.body
                : Re.nodeName === "HTML"
                ? Re.ownerDocument.body
                : Re
              ).removeChild(l.stateNode);
            } catch (i) {
              be(l, t, i);
            }
          else
            try {
              Re.removeChild(l.stateNode);
            } catch (i) {
              be(l, t, i);
            }
        break;
      case 18:
        Re !== null &&
          (it
            ? ((e = Re),
              Gd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                l.stateNode
              ),
              Ha(e))
            : Gd(Re, l.stateNode));
        break;
      case 4:
        (a = Re),
          (n = it),
          (Re = l.stateNode.containerInfo),
          (it = !0),
          el(e, t, l),
          (Re = a),
          (it = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sl(2, l, t), qe || Sl(4, l, t), el(e, t, l);
        break;
      case 1:
        qe ||
          (Bt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Vf(l, t, a)),
          el(e, t, l);
        break;
      case 21:
        el(e, t, l);
        break;
      case 22:
        (qe = (a = qe) || l.memoizedState !== null), el(e, t, l), (qe = a);
        break;
      default:
        el(e, t, l);
    }
  }
  function Ff(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ha(e);
      } catch (l) {
        be(t, t.return, l);
      }
    }
  }
  function Wf(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ha(e);
      } catch (l) {
        be(t, t.return, l);
      }
  }
  function ep(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Kf()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Kf()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Yi(e, t) {
    var l = ep(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = cp.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ut(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          f = t,
          m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Rl(m.type)) {
                (Re = m.stateNode), (it = !1);
                break e;
              }
              break;
            case 5:
              (Re = m.stateNode), (it = !1);
              break e;
            case 3:
            case 4:
              (Re = m.stateNode.containerInfo), (it = !0);
              break e;
          }
          m = m.return;
        }
        if (Re === null) throw Error(c(160));
        $f(i, f, n),
          (Re = null),
          (it = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) If(t, e), (t = t.sibling);
  }
  var _t = null;
  function If(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, e),
          st(e),
          a & 4 && (Sl(3, e, e.return), bn(3, e), Sl(5, e, e.return));
        break;
      case 1:
        ut(t, e),
          st(e),
          a & 512 && (qe || l === null || Bt(l, l.return)),
          a & 64 &&
            Pt &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = _t;
        if (
          (ut(t, e),
          st(e),
          a & 512 && (qe || l === null || Bt(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Ka] ||
                          i[Ke] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        Fe(i, a, l),
                        (i[Ke] = e),
                        Qe(i),
                        (a = i);
                      break e;
                    case "link":
                      var f = Id("link", "href", n).get(a + (l.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (
                            ((i = f[m]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(a)),
                        Fe(i, a, l),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (f = Id("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (m = 0; m < f.length; m++)
                          if (
                            ((i = f[m]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(a)),
                        Fe(i, a, l),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  (i[Ke] = e), Qe(i), (a = i);
                }
                e.stateNode = a;
              } else Pd(n, e.type, e.stateNode);
            else e.stateNode = Wd(n, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? Pd(n, e.type, e.stateNode)
                  : Wd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                nr(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ut(t, e),
          st(e),
          a & 512 && (qe || l === null || Bt(l, l.return)),
          l !== null && a & 4 && nr(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (ut(t, e),
          st(e),
          a & 512 && (qe || l === null || Bt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            ua(n, "");
          } catch (Z) {
            be(e, e.return, Z);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), nr(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (sr = !0);
        break;
      case 6:
        if ((ut(t, e), st(e), a & 4)) {
          if (e.stateNode === null) throw Error(c(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (Z) {
            be(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((lu = null),
          (n = _t),
          (_t = eu(t.containerInfo)),
          ut(t, e),
          (_t = n),
          st(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ha(t.containerInfo);
          } catch (Z) {
            be(e, e.return, Z);
          }
        sr && ((sr = !1), Pf(e));
        break;
      case 4:
        (a = _t),
          (_t = eu(e.stateNode.containerInfo)),
          ut(t, e),
          st(e),
          (_t = a);
        break;
      case 12:
        ut(t, e), st(e);
        break;
      case 31:
        ut(t, e),
          st(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Yi(e, a)));
        break;
      case 13:
        ut(t, e),
          st(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Vi = ot()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Yi(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null,
          A = Pt,
          D = qe;
        if (
          ((Pt = A || n),
          (qe = D || v),
          ut(t, e),
          (qe = D),
          (Pt = A),
          st(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || v || Pt || qe || Il(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (((i = v.stateNode), n))
                    (f = i.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    m = v.stateNode;
                    var H = v.memoizedProps.style,
                      z =
                        H != null && H.hasOwnProperty("display")
                          ? H.display
                          : null;
                    m.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (Z) {
                  be(v, v.return, Z);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = n ? "" : v.memoizedProps;
                } catch (Z) {
                  be(v, v.return, Z);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var C = v.stateNode;
                  n ? Vd(C, !0) : Vd(v.stateNode, !1);
                } catch (Z) {
                  be(v, v.return, Z);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Yi(e, l))));
        break;
      case 19:
        ut(t, e),
          st(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Yi(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ut(t, e), st(e);
    }
  }
  function st(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Xf(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(c(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = ir(e);
            qi(e, i, n);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (ua(f, ""), (l.flags &= -33));
            var m = ir(e);
            qi(e, m, f);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              A = ir(e);
            ur(e, A, v);
            break;
          default:
            throw Error(c(161));
        }
      } catch (D) {
        be(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Pf(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function tl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Jf(e, t.alternate, t), (t = t.sibling);
  }
  function Il(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(4, t, t.return), Il(t);
          break;
        case 1:
          Bt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Vf(t, t.return, l),
            Il(t);
          break;
        case 27:
          Cn(t.stateNode);
        case 26:
        case 5:
          Bt(t, t.return), Il(t);
          break;
        case 22:
          t.memoizedState === null && Il(t);
          break;
        case 30:
          Il(t);
          break;
        default:
          Il(t);
      }
      e = e.sibling;
    }
  }
  function ll(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        i = t,
        f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ll(n, i, l), bn(4, i);
          break;
        case 1:
          if (
            (ll(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (A) {
              be(a, a.return, A);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var m = a.stateNode;
            try {
              var v = n.shared.hiddenCallbacks;
              if (v !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < v.length; n++)
                  Co(v[n], m);
            } catch (A) {
              be(a, a.return, A);
            }
          }
          l && f & 64 && Gf(i), xn(i, i.return);
          break;
        case 27:
          Zf(i);
        case 26:
        case 5:
          ll(n, i, l), l && a === null && f & 4 && Qf(i), xn(i, i.return);
          break;
        case 12:
          ll(n, i, l);
          break;
        case 31:
          ll(n, i, l), l && f & 4 && Ff(n, i);
          break;
        case 13:
          ll(n, i, l), l && f & 4 && Wf(n, i);
          break;
        case 22:
          i.memoizedState === null && ll(n, i, l), xn(i, i.return);
          break;
        case 30:
          break;
        default:
          ll(n, i, l);
      }
      t = t.sibling;
    }
  }
  function rr(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && un(l));
  }
  function cr(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && un(e));
  }
  function Mt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ed(e, t, l, a), (t = t.sibling);
  }
  function ed(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(e, t, l, a), n & 2048 && bn(9, t);
        break;
      case 1:
        Mt(e, t, l, a);
        break;
      case 3:
        Mt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && un(e)));
        break;
      case 12:
        if (n & 2048) {
          Mt(e, t, l, a), (e = t.stateNode);
          try {
            var i = t.memoizedProps,
              f = i.id,
              m = i.onPostCommit;
            typeof m == "function" &&
              m(
                f,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (v) {
            be(t, t.return, v);
          }
        } else Mt(e, t, l, a);
        break;
      case 31:
        Mt(e, t, l, a);
        break;
      case 13:
        Mt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (i = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? Mt(e, t, l, a)
              : Sn(e, t)
            : i._visibility & 2
            ? Mt(e, t, l, a)
            : ((i._visibility |= 2),
              Aa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && rr(f, t);
        break;
      case 24:
        Mt(e, t, l, a), n & 2048 && cr(t.alternate, t);
        break;
      default:
        Mt(e, t, l, a);
    }
  }
  function Aa(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var i = e,
        f = t,
        m = l,
        v = a,
        A = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Aa(i, f, m, v, n), bn(8, f);
          break;
        case 23:
          break;
        case 22:
          var D = f.stateNode;
          f.memoizedState !== null
            ? D._visibility & 2
              ? Aa(i, f, m, v, n)
              : Sn(i, f)
            : ((D._visibility |= 2), Aa(i, f, m, v, n)),
            n && A & 2048 && rr(f.alternate, f);
          break;
        case 24:
          Aa(i, f, m, v, n), n && A & 2048 && cr(f.alternate, f);
          break;
        default:
          Aa(i, f, m, v, n);
      }
      t = t.sibling;
    }
  }
  function Sn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            Sn(l, a), n & 2048 && rr(a.alternate, a);
            break;
          case 24:
            Sn(l, a), n & 2048 && cr(a.alternate, a);
            break;
          default:
            Sn(l, a);
        }
        t = t.sibling;
      }
  }
  var En = 8192;
  function za(e, t, l) {
    if (e.subtreeFlags & En)
      for (e = e.child; e !== null; ) td(e, t, l), (e = e.sibling);
  }
  function td(e, t, l) {
    switch (e.tag) {
      case 26:
        za(e, t, l),
          e.flags & En &&
            e.memoizedState !== null &&
            Yp(l, _t, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        za(e, t, l);
        break;
      case 3:
      case 4:
        var a = _t;
        (_t = eu(e.stateNode.containerInfo)), za(e, t, l), (_t = a);
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = En), (En = 16777216), za(e, t, l), (En = a))
            : za(e, t, l));
        break;
      default:
        za(e, t, l);
    }
  }
  function ld(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Tn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (Xe = a), nd(a, e);
        }
      ld(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) ad(e), (e = e.sibling);
  }
  function ad(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Tn(e), e.flags & 2048 && Sl(9, e, e.return);
        break;
      case 3:
        Tn(e);
        break;
      case 12:
        Tn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Gi(e))
          : Tn(e);
        break;
      default:
        Tn(e);
    }
  }
  function Gi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (Xe = a), nd(a, e);
        }
      ld(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Sl(8, t, t.return), Gi(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Gi(t));
          break;
        default:
          Gi(t);
      }
      e = e.sibling;
    }
  }
  function nd(e, t) {
    for (; Xe !== null; ) {
      var l = Xe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Sl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          un(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Xe = a);
      else
        e: for (l = e; Xe !== null; ) {
          a = Xe;
          var n = a.sibling,
            i = a.return;
          if ((kf(a), a === l)) {
            Xe = null;
            break e;
          }
          if (n !== null) {
            (n.return = i), (Xe = n);
            break e;
          }
          Xe = i;
        }
    }
  }
  var tp = {
      getCacheForType: function (e) {
        var t = ke(Le),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
      cacheSignal: function () {
        return ke(Le).controller.signal;
      },
    },
    lp = typeof WeakMap == "function" ? WeakMap : Map,
    me = 0,
    Te = null,
    ne = null,
    se = 0,
    ve = 0,
    yt = null,
    El = !1,
    Ra = !1,
    or = !1,
    al = 0,
    je = 0,
    Tl = 0,
    Pl = 0,
    fr = 0,
    vt = 0,
    Ca = 0,
    On = null,
    rt = null,
    dr = !1,
    Vi = 0,
    id = 0,
    Qi = 1 / 0,
    Xi = null,
    Ol = null,
    Ye = 0,
    Nl = null,
    wa = null,
    nl = 0,
    hr = 0,
    mr = null,
    ud = null,
    Nn = 0,
    gr = null;
  function bt() {
    return (me & 2) !== 0 && se !== 0 ? se & -se : j.T !== null ? Sr() : xc();
  }
  function sd() {
    if (vt === 0)
      if ((se & 536870912) === 0 || oe) {
        var e = In;
        (In <<= 1), (In & 3932160) === 0 && (In = 262144), (vt = e);
      } else vt = 536870912;
    return (e = gt.current), e !== null && (e.flags |= 32), vt;
  }
  function ct(e, t, l) {
    ((e === Te && (ve === 2 || ve === 9)) || e.cancelPendingCommit !== null) &&
      (ja(e, 0), Al(e, se, vt, !1)),
      Za(e, l),
      ((me & 2) === 0 || e !== Te) &&
        (e === Te &&
          ((me & 2) === 0 && (Pl |= l), je === 4 && Al(e, se, vt, !1)),
        qt(e));
  }
  function rd(e, t, l) {
    if ((me & 6) !== 0) throw Error(c(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Xa(e, t),
      n = a ? ip(e, t) : yr(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        Ra && !a && Al(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), i && !ap(l))) {
          (n = yr(e, t, !1)), (i = !1);
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var f = 0;
          else
            (f = e.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            e: {
              var m = e;
              n = On;
              var v = m.current.memoizedState.isDehydrated;
              if ((v && (ja(m, f).flags |= 256), (f = yr(m, f, !1)), f !== 2)) {
                if (or && !v) {
                  (m.errorRecoveryDisabledLanes |= i), (Pl |= i), (n = 4);
                  break e;
                }
                (i = rt),
                  (rt = n),
                  i !== null && (rt === null ? (rt = i) : rt.push.apply(rt, i));
              }
              n = f;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          ja(e, 0), Al(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Al(a, t, vt, !El);
              break e;
            case 2:
              rt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((n = Vi + 300 - ot()), 10 < n)) {
            if ((Al(a, t, vt, !El), ei(a, 0, !0) !== 0)) break e;
            (nl = t),
              (a.timeoutHandle = qd(
                cd.bind(
                  null,
                  a,
                  l,
                  rt,
                  Xi,
                  dr,
                  t,
                  vt,
                  Pl,
                  Ca,
                  El,
                  i,
                  "Throttled",
                  -0,
                  0
                ),
                n
              ));
            break e;
          }
          cd(a, l, rt, Xi, dr, t, vt, Pl, Ca, El, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    qt(e);
  }
  function cd(e, t, l, a, n, i, f, m, v, A, D, H, z, C) {
    if (
      ((e.timeoutHandle = -1),
      (H = t.subtreeFlags),
      H & 8192 || (H & 16785408) === 16785408)
    ) {
      (H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt,
      }),
        td(t, i, H);
      var Z =
        (i & 62914560) === i ? Vi - ot() : (i & 4194048) === i ? id - ot() : 0;
      if (((Z = Gp(H, Z)), Z !== null)) {
        (nl = i),
          (e.cancelPendingCommit = Z(
            yd.bind(null, e, t, i, l, a, n, f, m, v, D, H, null, z, C)
          )),
          Al(e, i, f, !A);
        return;
      }
    }
    yd(e, t, i, l, a, n, f, m, v);
  }
  function ap(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!ht(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Al(e, t, l, a) {
    (t &= ~fr),
      (t &= ~Pl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var i = 31 - dt(n),
        f = 1 << i;
      (a[i] = -1), (n &= ~f);
    }
    l !== 0 && yc(e, l, t);
  }
  function Zi() {
    return (me & 6) === 0 ? (An(0), !1) : !0;
  }
  function pr() {
    if (ne !== null) {
      if (ve === 0) var e = ne.return;
      else (e = ne), (Jt = Xl = null), Ds(e), (Sa = null), (rn = 0), (e = ne);
      for (; e !== null; ) Yf(e.alternate, e), (e = e.return);
      ne = null;
    }
  }
  function ja(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), Tp(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (nl = 0),
      pr(),
      (Te = e),
      (ne = l = Zt(e.current, null)),
      (se = t),
      (ve = 0),
      (yt = null),
      (El = !1),
      (Ra = Xa(e, t)),
      (or = !1),
      (Ca = vt = fr = Pl = Tl = je = 0),
      (rt = On = null),
      (dr = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - dt(a),
          i = 1 << n;
        (t |= e[n]), (a &= ~i);
      }
    return (al = t), di(), l;
  }
  function od(e, t) {
    (te = null),
      (j.H = pn),
      t === xa || t === xi
        ? ((t = No()), (ve = 3))
        : t === xs
        ? ((t = No()), (ve = 4))
        : (ve =
            t === ks
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (yt = t),
      ne === null && ((je = 1), Mi(e, Ot(t, e.current)));
  }
  function fd() {
    var e = gt.current;
    return e === null
      ? !0
      : (se & 4194048) === se
      ? Rt === null
      : (se & 62914560) === se || (se & 536870912) !== 0
      ? e === Rt
      : !1;
  }
  function dd() {
    var e = j.H;
    return (j.H = pn), e === null ? pn : e;
  }
  function hd() {
    var e = j.A;
    return (j.A = tp), e;
  }
  function Ki() {
    (je = 4),
      El || ((se & 4194048) !== se && gt.current !== null) || (Ra = !0),
      ((Tl & 134217727) === 0 && (Pl & 134217727) === 0) ||
        Te === null ||
        Al(Te, se, vt, !1);
  }
  function yr(e, t, l) {
    var a = me;
    me |= 2;
    var n = dd(),
      i = hd();
    (Te !== e || se !== t) && ((Xi = null), ja(e, t)), (t = !1);
    var f = je;
    e: do
      try {
        if (ve !== 0 && ne !== null) {
          var m = ne,
            v = yt;
          switch (ve) {
            case 8:
              pr(), (f = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              gt.current === null && (t = !0);
              var A = ve;
              if (((ve = 0), (yt = null), Da(e, m, v, A), l && Ra)) {
                f = 0;
                break e;
              }
              break;
            default:
              (A = ve), (ve = 0), (yt = null), Da(e, m, v, A);
          }
        }
        np(), (f = je);
        break;
      } catch (D) {
        od(e, D);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Jt = Xl = null),
      (me = a),
      (j.H = n),
      (j.A = i),
      ne === null && ((Te = null), (se = 0), di()),
      f
    );
  }
  function np() {
    for (; ne !== null; ) md(ne);
  }
  function ip(e, t) {
    var l = me;
    me |= 2;
    var a = dd(),
      n = hd();
    Te !== e || se !== t
      ? ((Xi = null), (Qi = ot() + 500), ja(e, t))
      : (Ra = Xa(e, t));
    e: do
      try {
        if (ve !== 0 && ne !== null) {
          t = ne;
          var i = yt;
          t: switch (ve) {
            case 1:
              (ve = 0), (yt = null), Da(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (To(i)) {
                (ve = 0), (yt = null), gd(t);
                break;
              }
              (t = function () {
                (ve !== 2 && ve !== 9) || Te !== e || (ve = 7), qt(e);
              }),
                i.then(t, t);
              break e;
            case 3:
              ve = 7;
              break e;
            case 4:
              ve = 5;
              break e;
            case 7:
              To(i)
                ? ((ve = 0), (yt = null), gd(t))
                : ((ve = 0), (yt = null), Da(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (ne.tag) {
                case 26:
                  f = ne.memoizedState;
                case 5:
                case 27:
                  var m = ne;
                  if (f ? eh(f) : m.stateNode.complete) {
                    (ve = 0), (yt = null);
                    var v = m.sibling;
                    if (v !== null) ne = v;
                    else {
                      var A = m.return;
                      A !== null ? ((ne = A), Ji(A)) : (ne = null);
                    }
                    break t;
                  }
              }
              (ve = 0), (yt = null), Da(e, t, i, 5);
              break;
            case 6:
              (ve = 0), (yt = null), Da(e, t, i, 6);
              break;
            case 8:
              pr(), (je = 6);
              break e;
            default:
              throw Error(c(462));
          }
        }
        up();
        break;
      } catch (D) {
        od(e, D);
      }
    while (!0);
    return (
      (Jt = Xl = null),
      (j.H = a),
      (j.A = n),
      (me = l),
      ne !== null ? 0 : ((Te = null), (se = 0), di(), je)
    );
  }
  function up() {
    for (; ne !== null && !Cm(); ) md(ne);
  }
  function md(e) {
    var t = Bf(e.alternate, e, al);
    (e.memoizedProps = e.pendingProps), t === null ? Ji(e) : (ne = t);
  }
  function gd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Df(l, t, t.pendingProps, t.type, void 0, se);
        break;
      case 11:
        t = Df(l, t, t.pendingProps, t.type.render, t.ref, se);
        break;
      case 5:
        Ds(t);
      default:
        Yf(l, t), (t = ne = fo(t, al)), (t = Bf(l, t, al));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Ji(e) : (ne = t);
  }
  function Da(e, t, l, a) {
    (Jt = Xl = null), Ds(t), (Sa = null), (rn = 0);
    var n = t.return;
    try {
      if (kg(e, n, t, l, se)) {
        (je = 1), Mi(e, Ot(l, e.current)), (ne = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((ne = n), i);
      (je = 1), Mi(e, Ot(l, e.current)), (ne = null);
      return;
    }
    t.flags & 32768
      ? (oe || a === 1
          ? (e = !0)
          : Ra || (se & 536870912) !== 0
          ? (e = !1)
          : ((El = e = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = gt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        pd(t, e))
      : Ji(t);
  }
  function Ji(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        pd(t, El);
        return;
      }
      e = t.return;
      var l = Wg(t.alternate, t, al);
      if (l !== null) {
        ne = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ne = t;
        return;
      }
      ne = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function pd(e, t) {
    do {
      var l = Ig(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (ne = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ne = e;
        return;
      }
      ne = e = l;
    } while (e !== null);
    (je = 6), (ne = null);
  }
  function yd(e, t, l, a, n, i, f, m, v) {
    e.cancelPendingCommit = null;
    do ki();
    while (Ye !== 0);
    if ((me & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= is),
        qm(e, l, i, f, m, v),
        e === Te && ((ne = Te = null), (se = 0)),
        (wa = t),
        (Nl = e),
        (nl = l),
        (hr = i),
        (mr = n),
        (ud = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            op(Fn, function () {
              return Ed(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = j.T), (j.T = null), (n = B.p), (B.p = 2), (f = me), (me |= 4);
        try {
          Pg(e, t, l);
        } finally {
          (me = f), (B.p = n), (j.T = a);
        }
      }
      (Ye = 1), vd(), bd(), xd();
    }
  }
  function vd() {
    if (Ye === 1) {
      Ye = 0;
      var e = Nl,
        t = wa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = j.T), (j.T = null);
        var a = B.p;
        B.p = 2;
        var n = me;
        me |= 4;
        try {
          If(t, e);
          var i = Cr,
            f = lo(e.containerInfo),
            m = i.focusedElem,
            v = i.selectionRange;
          if (
            f !== m &&
            m &&
            m.ownerDocument &&
            to(m.ownerDocument.documentElement, m)
          ) {
            if (v !== null && es(m)) {
              var A = v.start,
                D = v.end;
              if ((D === void 0 && (D = A), "selectionStart" in m))
                (m.selectionStart = A),
                  (m.selectionEnd = Math.min(D, m.value.length));
              else {
                var H = m.ownerDocument || document,
                  z = (H && H.defaultView) || window;
                if (z.getSelection) {
                  var C = z.getSelection(),
                    Z = m.textContent.length,
                    F = Math.min(v.start, Z),
                    Ee = v.end === void 0 ? F : Math.min(v.end, Z);
                  !C.extend && F > Ee && ((f = Ee), (Ee = F), (F = f));
                  var T = eo(m, F),
                    S = eo(m, Ee);
                  if (
                    T &&
                    S &&
                    (C.rangeCount !== 1 ||
                      C.anchorNode !== T.node ||
                      C.anchorOffset !== T.offset ||
                      C.focusNode !== S.node ||
                      C.focusOffset !== S.offset)
                  ) {
                    var N = H.createRange();
                    N.setStart(T.node, T.offset),
                      C.removeAllRanges(),
                      F > Ee
                        ? (C.addRange(N), C.extend(S.node, S.offset))
                        : (N.setEnd(S.node, S.offset), C.addRange(N));
                  }
                }
              }
            }
            for (H = [], C = m; (C = C.parentNode); )
              C.nodeType === 1 &&
                H.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < H.length;
              m++
            ) {
              var U = H[m];
              (U.element.scrollLeft = U.left), (U.element.scrollTop = U.top);
            }
          }
          (uu = !!Rr), (Cr = Rr = null);
        } finally {
          (me = n), (B.p = a), (j.T = l);
        }
      }
      (e.current = t), (Ye = 2);
    }
  }
  function bd() {
    if (Ye === 2) {
      Ye = 0;
      var e = Nl,
        t = wa,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = j.T), (j.T = null);
        var a = B.p;
        B.p = 2;
        var n = me;
        me |= 4;
        try {
          Jf(e, t.alternate, t);
        } finally {
          (me = n), (B.p = a), (j.T = l);
        }
      }
      Ye = 3;
    }
  }
  function xd() {
    if (Ye === 4 || Ye === 3) {
      (Ye = 0), wm();
      var e = Nl,
        t = wa,
        l = nl,
        a = ud;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ye = 5)
        : ((Ye = 0), (wa = Nl = null), Sd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Ol = null),
        Uu(l),
        (t = t.stateNode),
        ft && typeof ft.onCommitFiberRoot == "function")
      )
        try {
          ft.onCommitFiberRoot(Qa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = j.T), (n = B.p), (B.p = 2), (j.T = null);
        try {
          for (var i = e.onRecoverableError, f = 0; f < a.length; f++) {
            var m = a[f];
            i(m.value, { componentStack: m.stack });
          }
        } finally {
          (j.T = t), (B.p = n);
        }
      }
      (nl & 3) !== 0 && ki(),
        qt(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? e === gr
            ? Nn++
            : ((Nn = 0), (gr = e))
          : (Nn = 0),
        An(0);
    }
  }
  function Sd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), un(t)));
  }
  function ki() {
    return vd(), bd(), xd(), Ed();
  }
  function Ed() {
    if (Ye !== 5) return !1;
    var e = Nl,
      t = hr;
    hr = 0;
    var l = Uu(nl),
      a = j.T,
      n = B.p;
    try {
      (B.p = 32 > l ? 32 : l), (j.T = null), (l = mr), (mr = null);
      var i = Nl,
        f = nl;
      if (((Ye = 0), (wa = Nl = null), (nl = 0), (me & 6) !== 0))
        throw Error(c(331));
      var m = me;
      if (
        ((me |= 4),
        ad(i.current),
        ed(i, i.current, f, l),
        (me = m),
        An(0, !1),
        ft && typeof ft.onPostCommitFiberRoot == "function")
      )
        try {
          ft.onPostCommitFiberRoot(Qa, i);
        } catch {}
      return !0;
    } finally {
      (B.p = n), (j.T = a), Sd(e, t);
    }
  }
  function Td(e, t, l) {
    (t = Ot(l, t)),
      (t = Js(e.stateNode, t, 2)),
      (e = vl(e, t, 2)),
      e !== null && (Za(e, 2), qt(e));
  }
  function be(e, t, l) {
    if (e.tag === 3) Td(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Td(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Ol === null || !Ol.has(a)))
          ) {
            (e = Ot(l, e)),
              (l = Of(2)),
              (a = vl(t, l, 2)),
              a !== null && (Nf(l, a, t, e), Za(a, 2), qt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function vr(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new lp();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      ((or = !0), n.add(l), (e = sp.bind(null, e, t, l)), t.then(e, e));
  }
  function sp(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Te === e &&
        (se & l) === l &&
        (je === 4 || (je === 3 && (se & 62914560) === se && 300 > ot() - Vi)
          ? (me & 2) === 0 && ja(e, 0)
          : (fr |= l),
        Ca === se && (Ca = 0)),
      qt(e);
  }
  function Od(e, t) {
    t === 0 && (t = pc()), (e = Gl(e, t)), e !== null && (Za(e, t), qt(e));
  }
  function rp(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Od(e, l);
  }
  function cp(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    a !== null && a.delete(t), Od(e, l);
  }
  function op(e, t) {
    return ju(e, t);
  }
  var $i = null,
    _a = null,
    br = !1,
    Fi = !1,
    xr = !1,
    zl = 0;
  function qt(e) {
    e !== _a &&
      e.next === null &&
      (_a === null ? ($i = _a = e) : (_a = _a.next = e)),
      (Fi = !0),
      br || ((br = !0), dp());
  }
  function An(e, t) {
    if (!xr && Fi) {
      xr = !0;
      do
        for (var l = !1, a = $i; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var f = a.suspendedLanes,
                m = a.pingedLanes;
              (i = (1 << (31 - dt(42 | e) + 1)) - 1),
                (i &= n & ~(f & ~m)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), Rd(a, i));
          } else
            (i = se),
              (i = ei(
                a,
                a === Te ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || Xa(a, i) || ((l = !0), Rd(a, i));
          a = a.next;
        }
      while (l);
      xr = !1;
    }
  }
  function fp() {
    Nd();
  }
  function Nd() {
    Fi = br = !1;
    var e = 0;
    zl !== 0 && Ep() && (e = zl);
    for (var t = ot(), l = null, a = $i; a !== null; ) {
      var n = a.next,
        i = Ad(a, t);
      i === 0
        ? ((a.next = null),
          l === null ? ($i = n) : (l.next = n),
          n === null && (_a = l))
        : ((l = a), (e !== 0 || (i & 3) !== 0) && (Fi = !0)),
        (a = n);
    }
    (Ye !== 0 && Ye !== 5) || An(e), zl !== 0 && (zl = 0);
  }
  function Ad(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var f = 31 - dt(i),
        m = 1 << f,
        v = n[f];
      v === -1
        ? ((m & l) === 0 || (m & a) !== 0) && (n[f] = Bm(m, t))
        : v <= t && (e.expiredLanes |= m),
        (i &= ~m);
    }
    if (
      ((t = Te),
      (l = se),
      (l = ei(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (ve === 2 || ve === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Du(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Xa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Du(a), Uu(l))) {
        case 2:
        case 8:
          l = mc;
          break;
        case 32:
          l = Fn;
          break;
        case 268435456:
          l = gc;
          break;
        default:
          l = Fn;
      }
      return (
        (a = zd.bind(null, e)),
        (l = ju(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Du(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function zd(e, t) {
    if (Ye !== 0 && Ye !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (ki() && e.callbackNode !== l) return null;
    var a = se;
    return (
      (a = ei(
        e,
        e === Te ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (rd(e, a, t),
          Ad(e, ot()),
          e.callbackNode != null && e.callbackNode === l
            ? zd.bind(null, e)
            : null)
    );
  }
  function Rd(e, t) {
    if (ki()) return null;
    rd(e, t, !0);
  }
  function dp() {
    Op(function () {
      (me & 6) !== 0 ? ju(hc, fp) : Nd();
    });
  }
  function Sr() {
    if (zl === 0) {
      var e = va;
      e === 0 && ((e = Wn), (Wn <<= 1), (Wn & 261888) === 0 && (Wn = 256)),
        (zl = e);
    }
    return zl;
  }
  function Cd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : ni("" + e);
  }
  function wd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function hp(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = Cd((n[at] || null).action),
        f = a.submitter;
      f &&
        ((t = (t = f[at] || null)
          ? Cd(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((i = t), (f = null)));
      var m = new ri("action", "action", null, a, n);
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (zl !== 0) {
                  var v = f ? wd(n, f) : new FormData(n);
                  Gs(
                    l,
                    { pending: !0, data: v, method: n.method, action: i },
                    null,
                    v
                  );
                }
              } else
                typeof i == "function" &&
                  (m.preventDefault(),
                  (v = f ? wd(n, f) : new FormData(n)),
                  Gs(
                    l,
                    { pending: !0, data: v, method: n.method, action: i },
                    i,
                    v
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Er = 0; Er < ns.length; Er++) {
    var Tr = ns[Er],
      mp = Tr.toLowerCase(),
      gp = Tr[0].toUpperCase() + Tr.slice(1);
    Dt(mp, "on" + gp);
  }
  Dt(io, "onAnimationEnd"),
    Dt(uo, "onAnimationIteration"),
    Dt(so, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt(jg, "onTransitionRun"),
    Dt(Dg, "onTransitionStart"),
    Dt(_g, "onTransitionCancel"),
    Dt(ro, "onTransitionEnd"),
    na("onMouseEnter", ["mouseout", "mouseover"]),
    na("onMouseLeave", ["mouseout", "mouseover"]),
    na("onPointerEnter", ["pointerout", "pointerover"]),
    na("onPointerLeave", ["pointerout", "pointerover"]),
    Hl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Hl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Hl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Hl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Hl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Hl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var zn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    pp = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(zn)
    );
  function jd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f],
              v = m.instance,
              A = m.currentTarget;
            if (((m = m.listener), v !== i && n.isPropagationStopped()))
              break e;
            (i = m), (n.currentTarget = A);
            try {
              i(n);
            } catch (D) {
              fi(D);
            }
            (n.currentTarget = null), (i = v);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((m = a[f]),
              (v = m.instance),
              (A = m.currentTarget),
              (m = m.listener),
              v !== i && n.isPropagationStopped())
            )
              break e;
            (i = m), (n.currentTarget = A);
            try {
              i(n);
            } catch (D) {
              fi(D);
            }
            (n.currentTarget = null), (i = v);
          }
      }
    }
  }
  function ie(e, t) {
    var l = t[Lu];
    l === void 0 && (l = t[Lu] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Dd(t, e, 2, !1), l.add(a));
  }
  function Or(e, t, l) {
    var a = 0;
    t && (a |= 4), Dd(l, e, a, t);
  }
  var Wi = "_reactListening" + Math.random().toString(36).slice(2);
  function Nr(e) {
    if (!e[Wi]) {
      (e[Wi] = !0),
        Tc.forEach(function (l) {
          l !== "selectionchange" && (pp.has(l) || Or(l, !1, e), Or(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wi] || ((t[Wi] = !0), Or("selectionchange", !1, t));
    }
  }
  function Dd(e, t, l, a) {
    switch (sh(t)) {
      case 2:
        var n = Xp;
        break;
      case 8:
        n = Zp;
        break;
      default:
        n = Yr;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !Zu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
        ? e.addEventListener(t, l, { passive: n })
        : e.addEventListener(t, l, !1);
  }
  function Ar(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var m = a.stateNode.containerInfo;
          if (m === n) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var v = f.tag;
              if ((v === 3 || v === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (((f = ta(m)), f === null)) return;
            if (((v = f.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
              a = i = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    Uc(function () {
      var A = i,
        D = Qu(l),
        H = [];
      e: {
        var z = co.get(e);
        if (z !== void 0) {
          var C = ri,
            Z = e;
          switch (e) {
            case "keypress":
              if (ui(l) === 0) break e;
            case "keydown":
            case "keyup":
              C = cg;
              break;
            case "focusin":
              (Z = "focus"), (C = $u);
              break;
            case "focusout":
              (Z = "blur"), (C = $u);
              break;
            case "beforeblur":
            case "afterblur":
              C = $u;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Bc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = dg;
              break;
            case io:
            case uo:
            case so:
              C = eg;
              break;
            case ro:
              C = mg;
              break;
            case "scroll":
            case "scrollend":
              C = $m;
              break;
            case "wheel":
              C = pg;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = lg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Yc;
              break;
            case "toggle":
            case "beforetoggle":
              C = vg;
          }
          var F = (t & 4) !== 0,
            Ee = !F && (e === "scroll" || e === "scrollend"),
            T = F ? (z !== null ? z + "Capture" : null) : z;
          F = [];
          for (var S = A, N; S !== null; ) {
            var U = S;
            if (
              ((N = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                N === null ||
                T === null ||
                ((U = ka(S, T)), U != null && F.push(Rn(S, U, N))),
              Ee)
            )
              break;
            S = S.return;
          }
          0 < F.length &&
            ((z = new C(z, Z, null, l, D)), H.push({ event: z, listeners: F }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (C = e === "mouseout" || e === "pointerout"),
            z &&
              l !== Vu &&
              (Z = l.relatedTarget || l.fromElement) &&
              (ta(Z) || Z[ea]))
          )
            break e;
          if (
            (C || z) &&
            ((z =
              D.window === D
                ? D
                : (z = D.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            C
              ? ((Z = l.relatedTarget || l.toElement),
                (C = A),
                (Z = Z ? ta(Z) : null),
                Z !== null &&
                  ((Ee = d(Z)),
                  (F = Z.tag),
                  Z !== Ee || (F !== 5 && F !== 27 && F !== 6)) &&
                  (Z = null))
              : ((C = null), (Z = A)),
            C !== Z)
          ) {
            if (
              ((F = Bc),
              (U = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((F = Yc),
                (U = "onPointerLeave"),
                (T = "onPointerEnter"),
                (S = "pointer")),
              (Ee = C == null ? z : Ja(C)),
              (N = Z == null ? z : Ja(Z)),
              (z = new F(U, S + "leave", C, l, D)),
              (z.target = Ee),
              (z.relatedTarget = N),
              (U = null),
              ta(D) === A &&
                ((F = new F(T, S + "enter", Z, l, D)),
                (F.target = N),
                (F.relatedTarget = Ee),
                (U = F)),
              (Ee = U),
              C && Z)
            )
              t: {
                for (F = yp, T = C, S = Z, N = 0, U = T; U; U = F(U)) N++;
                U = 0;
                for (var k = S; k; k = F(k)) U++;
                for (; 0 < N - U; ) (T = F(T)), N--;
                for (; 0 < U - N; ) (S = F(S)), U--;
                for (; N--; ) {
                  if (T === S || (S !== null && T === S.alternate)) {
                    F = T;
                    break t;
                  }
                  (T = F(T)), (S = F(S));
                }
                F = null;
              }
            else F = null;
            C !== null && _d(H, z, C, F, !1),
              Z !== null && Ee !== null && _d(H, Ee, Z, F, !0);
          }
        }
        e: {
          if (
            ((z = A ? Ja(A) : window),
            (C = z.nodeName && z.nodeName.toLowerCase()),
            C === "select" || (C === "input" && z.type === "file"))
          )
            var de = kc;
          else if (Kc(z))
            if ($c) de = Rg;
            else {
              de = Ag;
              var K = Ng;
            }
          else
            (C = z.nodeName),
              !C ||
              C.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? A && Gu(A.elementType) && (de = kc)
                : (de = zg);
          if (de && (de = de(e, A))) {
            Jc(H, de, l, D);
            break e;
          }
          K && K(e, z, A),
            e === "focusout" &&
              A &&
              z.type === "number" &&
              A.memoizedProps.value != null &&
              Yu(z, "number", z.value);
        }
        switch (((K = A ? Ja(A) : window), e)) {
          case "focusin":
            (Kc(K) || K.contentEditable === "true") &&
              ((oa = K), (ts = A), (ln = null));
            break;
          case "focusout":
            ln = ts = oa = null;
            break;
          case "mousedown":
            ls = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ls = !1), ao(H, l, D);
            break;
          case "selectionchange":
            if (wg) break;
          case "keydown":
          case "keyup":
            ao(H, l, D);
        }
        var le;
        if (Wu)
          e: {
            switch (e) {
              case "compositionstart":
                var re = "onCompositionStart";
                break e;
              case "compositionend":
                re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                re = "onCompositionUpdate";
                break e;
            }
            re = void 0;
          }
        else
          ca
            ? Xc(e, l) && (re = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (re = "onCompositionStart");
        re &&
          (Gc &&
            l.locale !== "ko" &&
            (ca || re !== "onCompositionStart"
              ? re === "onCompositionEnd" && ca && (le = Lc())
              : ((fl = D),
                (Ku = "value" in fl ? fl.value : fl.textContent),
                (ca = !0))),
          (K = Ii(A, re)),
          0 < K.length &&
            ((re = new qc(re, e, null, l, D)),
            H.push({ event: re, listeners: K }),
            le
              ? (re.data = le)
              : ((le = Zc(l)), le !== null && (re.data = le)))),
          (le = xg ? Sg(e, l) : Eg(e, l)) &&
            ((re = Ii(A, "onBeforeInput")),
            0 < re.length &&
              ((K = new qc("onBeforeInput", "beforeinput", null, l, D)),
              H.push({ event: K, listeners: re }),
              (K.data = le))),
          hp(H, e, A, l, D);
      }
      jd(H, t);
    });
  }
  function Rn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Ii(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = ka(e, l)),
          n != null && a.unshift(Rn(e, n, i)),
          (n = ka(e, t)),
          n != null && a.push(Rn(e, n, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function yp(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _d(e, t, l, a, n) {
    for (var i = t._reactName, f = []; l !== null && l !== a; ) {
      var m = l,
        v = m.alternate,
        A = m.stateNode;
      if (((m = m.tag), v !== null && v === a)) break;
      (m !== 5 && m !== 26 && m !== 27) ||
        A === null ||
        ((v = A),
        n
          ? ((A = ka(l, i)), A != null && f.unshift(Rn(l, A, v)))
          : n || ((A = ka(l, i)), A != null && f.push(Rn(l, A, v)))),
        (l = l.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var vp = /\r\n?/g,
    bp = /\u0000|\uFFFD/g;
  function Md(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        vp,
        `
`
      )
      .replace(bp, "");
  }
  function Ud(e, t) {
    return (t = Md(t)), Md(e) === t;
  }
  function Se(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || ua(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            ua(e, "" + a);
        break;
      case "className":
        li(e, "class", a);
        break;
      case "tabIndex":
        li(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        li(e, l, a);
        break;
      case "style":
        _c(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          li(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = ni("" + a)), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (t !== "input" && Se(e, t, "name", n.name, n, null),
                Se(e, t, "formEncType", n.formEncType, n, null),
                Se(e, t, "formMethod", n.formMethod, n, null),
                Se(e, t, "formTarget", n.formTarget, n, null))
              : (Se(e, t, "encType", n.encType, n, null),
                Se(e, t, "method", n.method, n, null),
                Se(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = ni("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Qt);
        break;
      case "onScroll":
        a != null && ie("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ie("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(c(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = ni("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        ie("beforetoggle", e), ie("toggle", e), ti(e, "popover", a);
        break;
      case "xlinkActuate":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Vt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        ti(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Jm.get(l) || l), ti(e, l, a));
    }
  }
  function zr(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        _c(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(c(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ua(e, a)
          : (typeof a == "number" || typeof a == "bigint") && ua(e, "" + a);
        break;
      case "onScroll":
        a != null && ie("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ie("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Oc.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (i = e[at] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && e.removeEventListener(t, i, n),
              typeof a == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
              ? e.setAttribute(l, "")
              : ti(e, l, a);
          }
    }
  }
  function Fe(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ie("error", e), ie("load", e);
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var f = l[i];
            if (f != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Se(e, t, i, f, l, null);
              }
          }
        n && Se(e, t, "srcSet", l.srcSet, l, null),
          a && Se(e, t, "src", l.src, l, null);
        return;
      case "input":
        ie("invalid", e);
        var m = (i = f = n = null),
          v = null,
          A = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case "name":
                  n = D;
                  break;
                case "type":
                  f = D;
                  break;
                case "checked":
                  v = D;
                  break;
                case "defaultChecked":
                  A = D;
                  break;
                case "value":
                  i = D;
                  break;
                case "defaultValue":
                  m = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null) throw Error(c(137, t));
                  break;
                default:
                  Se(e, t, a, D, l, null);
              }
          }
        Cc(e, i, m, v, A, f, n, !1);
        return;
      case "select":
        ie("invalid", e), (a = f = i = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((m = l[n]), m != null))
            switch (n) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                a = m;
              default:
                Se(e, t, n, m, l, null);
            }
        (t = i),
          (l = f),
          (e.multiple = !!a),
          t != null ? ia(e, !!a, t, !1) : l != null && ia(e, !!a, l, !0);
        return;
      case "textarea":
        ie("invalid", e), (i = n = a = null);
        for (f in l)
          if (l.hasOwnProperty(f) && ((m = l[f]), m != null))
            switch (f) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                n = m;
                break;
              case "children":
                i = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(c(91));
                break;
              default:
                Se(e, t, f, m, l, null);
            }
        jc(e, a, n, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) &&
            ((a = l[v]), a != null) &&
            (v === "selected"
              ? (e.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : Se(e, t, v, a, l, null));
        return;
      case "dialog":
        ie("beforetoggle", e), ie("toggle", e), ie("cancel", e), ie("close", e);
        break;
      case "iframe":
      case "object":
        ie("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < zn.length; a++) ie(zn[a], e);
        break;
      case "image":
        ie("error", e), ie("load", e);
        break;
      case "details":
        ie("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ie("error", e), ie("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (A in l)
          if (l.hasOwnProperty(A) && ((a = l[A]), a != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Se(e, t, A, a, l, null);
            }
        return;
      default:
        if (Gu(t)) {
          for (D in l)
            l.hasOwnProperty(D) &&
              ((a = l[D]), a !== void 0 && zr(e, t, D, a, l, void 0));
          return;
        }
    }
    for (m in l)
      l.hasOwnProperty(m) && ((a = l[m]), a != null && Se(e, t, m, a, l, null));
  }
  function xp(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          f = null,
          m = null,
          v = null,
          A = null,
          D = null;
        for (C in l) {
          var H = l[C];
          if (l.hasOwnProperty(C) && H != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = H;
              default:
                a.hasOwnProperty(C) || Se(e, t, C, null, a, H);
            }
        }
        for (var z in a) {
          var C = a[z];
          if (((H = l[z]), a.hasOwnProperty(z) && (C != null || H != null)))
            switch (z) {
              case "type":
                i = C;
                break;
              case "name":
                n = C;
                break;
              case "checked":
                A = C;
                break;
              case "defaultChecked":
                D = C;
                break;
              case "value":
                f = C;
                break;
              case "defaultValue":
                m = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(c(137, t));
                break;
              default:
                C !== H && Se(e, t, z, C, a, H);
            }
        }
        qu(e, f, m, v, A, D, i, n);
        return;
      case "select":
        C = f = m = z = null;
        for (i in l)
          if (((v = l[i]), l.hasOwnProperty(i) && v != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                C = v;
              default:
                a.hasOwnProperty(i) || Se(e, t, i, null, a, v);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (v = l[n]),
            a.hasOwnProperty(n) && (i != null || v != null))
          )
            switch (n) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                m = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== v && Se(e, t, n, i, a, v);
            }
        (t = m),
          (l = f),
          (a = C),
          z != null
            ? ia(e, !!l, z, !1)
            : !!a != !!l &&
              (t != null ? ia(e, !!l, t, !0) : ia(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        C = z = null;
        for (m in l)
          if (
            ((n = l[m]),
            l.hasOwnProperty(m) && n != null && !a.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Se(e, t, m, null, a, n);
            }
        for (f in a)
          if (
            ((n = a[f]),
            (i = l[f]),
            a.hasOwnProperty(f) && (n != null || i != null))
          )
            switch (f) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                C = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(c(91));
                break;
              default:
                n !== i && Se(e, t, f, n, a, i);
            }
        wc(e, z, C);
        return;
      case "option":
        for (var Z in l)
          (z = l[Z]),
            l.hasOwnProperty(Z) &&
              z != null &&
              !a.hasOwnProperty(Z) &&
              (Z === "selected" ? (e.selected = !1) : Se(e, t, Z, null, a, z));
        for (v in a)
          (z = a[v]),
            (C = l[v]),
            a.hasOwnProperty(v) &&
              z !== C &&
              (z != null || C != null) &&
              (v === "selected"
                ? (e.selected =
                    z && typeof z != "function" && typeof z != "symbol")
                : Se(e, t, v, z, a, C));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var F in l)
          (z = l[F]),
            l.hasOwnProperty(F) &&
              z != null &&
              !a.hasOwnProperty(F) &&
              Se(e, t, F, null, a, z);
        for (A in a)
          if (
            ((z = a[A]),
            (C = l[A]),
            a.hasOwnProperty(A) && z !== C && (z != null || C != null))
          )
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(c(137, t));
                break;
              default:
                Se(e, t, A, z, a, C);
            }
        return;
      default:
        if (Gu(t)) {
          for (var Ee in l)
            (z = l[Ee]),
              l.hasOwnProperty(Ee) &&
                z !== void 0 &&
                !a.hasOwnProperty(Ee) &&
                zr(e, t, Ee, void 0, a, z);
          for (D in a)
            (z = a[D]),
              (C = l[D]),
              !a.hasOwnProperty(D) ||
                z === C ||
                (z === void 0 && C === void 0) ||
                zr(e, t, D, z, a, C);
          return;
        }
    }
    for (var T in l)
      (z = l[T]),
        l.hasOwnProperty(T) &&
          z != null &&
          !a.hasOwnProperty(T) &&
          Se(e, t, T, null, a, z);
    for (H in a)
      (z = a[H]),
        (C = l[H]),
        !a.hasOwnProperty(H) ||
          z === C ||
          (z == null && C == null) ||
          Se(e, t, H, z, a, C);
  }
  function Ld(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Sp() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          i = n.transferSize,
          f = n.initiatorType,
          m = n.duration;
        if (i && m && Ld(f)) {
          for (f = 0, m = n.responseEnd, a += 1; a < l.length; a++) {
            var v = l[a],
              A = v.startTime;
            if (A > m) break;
            var D = v.transferSize,
              H = v.initiatorType;
            D &&
              Ld(H) &&
              ((v = v.responseEnd), (f += D * (v < m ? 1 : (m - A) / (v - A))));
          }
          if ((--a, (t += (8 * (i + f)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Rr = null,
    Cr = null;
  function Pi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Hd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function wr(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var jr = null;
  function Ep() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === jr
        ? !1
        : ((jr = e), !0)
      : ((jr = null), !1);
  }
  var qd = typeof setTimeout == "function" ? setTimeout : void 0,
    Tp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yd = typeof Promise == "function" ? Promise : void 0,
    Op =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yd < "u"
        ? function (e) {
            return Yd.resolve(null).then(e).catch(Np);
          }
        : qd;
  function Np(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Rl(e) {
    return e === "head";
  }
  function Gd(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            e.removeChild(n), Ha(t);
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") Cn(e.ownerDocument.documentElement);
        else if (l === "head") {
          (l = e.ownerDocument.head), Cn(l);
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling,
              m = i.nodeName;
            i[Ka] ||
              m === "SCRIPT" ||
              m === "STYLE" ||
              (m === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(i),
              (i = f);
          }
        } else l === "body" && Cn(e.ownerDocument.body);
      l = n;
    } while (l);
    Ha(t);
  }
  function Vd(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function Dr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Dr(l), Hu(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Ap(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Ka])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = Ct(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function zp(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Ct(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Qd(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Ct(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function _r(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Mr(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Rp(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
    }
  }
  function Ct(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Ur = null;
  function Xd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Ct(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Zd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Kd(e, t, l) {
    switch (((t = Pi(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function Cn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Hu(e);
  }
  var wt = new Map(),
    Jd = new Set();
  function eu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var il = B.d;
  B.d = { f: Cp, r: wp, D: jp, C: Dp, L: _p, m: Mp, X: Lp, S: Up, M: Hp };
  function Cp() {
    var e = il.f(),
      t = Zi();
    return e || t;
  }
  function wp(e) {
    var t = la(e);
    t !== null && t.tag === 5 && t.type === "form" ? of(t) : il.r(e);
  }
  var Ma = typeof document > "u" ? null : document;
  function kd(e, t, l) {
    var a = Ma;
    if (a && typeof t == "string" && t) {
      var n = Et(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        Jd.has(n) ||
          (Jd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Fe(t, "link", e),
            Qe(t),
            a.head.appendChild(t)));
    }
  }
  function jp(e) {
    il.D(e), kd("dns-prefetch", e, null);
  }
  function Dp(e, t) {
    il.C(e, t), kd("preconnect", e, t);
  }
  function _p(e, t, l) {
    il.L(e, t, l);
    var a = Ma;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Et(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Et(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + Et(l.imageSizes) + '"]'))
        : (n += '[href="' + Et(e) + '"]');
      var i = n;
      switch (t) {
        case "style":
          i = Ua(e);
          break;
        case "script":
          i = La(e);
      }
      wt.has(i) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        wt.set(i, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(wn(i))) ||
          (t === "script" && a.querySelector(jn(i))) ||
          ((t = a.createElement("link")),
          Fe(t, "link", e),
          Qe(t),
          a.head.appendChild(t)));
    }
  }
  function Mp(e, t) {
    il.m(e, t);
    var l = Ma;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Et(a) + '"][href="' + Et(e) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = La(e);
      }
      if (
        !wt.has(i) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        wt.set(i, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(jn(i))) return;
        }
        (a = l.createElement("link")),
          Fe(a, "link", e),
          Qe(a),
          l.head.appendChild(a);
      }
    }
  }
  function Up(e, t, l) {
    il.S(e, t, l);
    var a = Ma;
    if (a && e) {
      var n = aa(a).hoistableStyles,
        i = Ua(e);
      t = t || "default";
      var f = n.get(i);
      if (!f) {
        var m = { loading: 0, preload: null };
        if ((f = a.querySelector(wn(i)))) m.loading = 5;
        else {
          (e = b({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = wt.get(i)) && Lr(e, l);
          var v = (f = a.createElement("link"));
          Qe(v),
            Fe(v, "link", e),
            (v._p = new Promise(function (A, D) {
              (v.onload = A), (v.onerror = D);
            })),
            v.addEventListener("load", function () {
              m.loading |= 1;
            }),
            v.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            tu(f, t, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: m }),
          n.set(i, f);
      }
    }
  }
  function Lp(e, t) {
    il.X(e, t);
    var l = Ma;
    if (l && e) {
      var a = aa(l).hoistableScripts,
        n = La(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(jn(n))),
        i ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = wt.get(n)) && Hr(e, t),
          (i = l.createElement("script")),
          Qe(i),
          Fe(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Hp(e, t) {
    il.M(e, t);
    var l = Ma;
    if (l && e) {
      var a = aa(l).hoistableScripts,
        n = La(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(jn(n))),
        i ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = wt.get(n)) && Hr(e, t),
          (i = l.createElement("script")),
          Qe(i),
          Fe(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function $d(e, t, l, a) {
    var n = (n = ae.current) ? eu(n) : null;
    if (!n) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = Ua(l.href)),
            (l = aa(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = Ua(l.href);
          var i = aa(n).hoistableStyles,
            f = i.get(e);
          if (
            (f ||
              ((n = n.ownerDocument || n),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, f),
              (i = n.querySelector(wn(e))) &&
                !i._p &&
                ((f.instance = i), (f.state.loading = 5)),
              wt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                wt.set(e, l),
                i || Bp(n, e, l, f.state))),
            t && a === null)
          )
            throw Error(c(528, ""));
          return f;
        }
        if (t && a !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = La(l)),
              (l = aa(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, e));
    }
  }
  function Ua(e) {
    return 'href="' + Et(e) + '"';
  }
  function wn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Fd(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Bp(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Fe(t, "link", l),
        Qe(t),
        e.head.appendChild(t));
  }
  function La(e) {
    return '[src="' + Et(e) + '"]';
  }
  function jn(e) {
    return "script[async]" + e;
  }
  function Wd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
          if (a) return (t.instance = a), Qe(a), a;
          var n = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Qe(a),
            Fe(a, "style", n),
            tu(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = Ua(l.href);
          var i = e.querySelector(wn(n));
          if (i) return (t.state.loading |= 4), (t.instance = i), Qe(i), i;
          (a = Fd(l)),
            (n = wt.get(n)) && Lr(a, n),
            (i = (e.ownerDocument || e).createElement("link")),
            Qe(i);
          var f = i;
          return (
            (f._p = new Promise(function (m, v) {
              (f.onload = m), (f.onerror = v);
            })),
            Fe(i, "link", a),
            (t.state.loading |= 4),
            tu(i, l.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = La(l.src)),
            (n = e.querySelector(jn(i)))
              ? ((t.instance = n), Qe(n), n)
              : ((a = l),
                (n = wt.get(i)) && ((a = b({}, l)), Hr(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Qe(n),
                Fe(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), tu(a, l.precedence, e));
    return t.instance;
  }
  function tu(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        f = 0;
      f < a.length;
      f++
    ) {
      var m = a[f];
      if (m.dataset.precedence === t) i = m;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function Lr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Hr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var lu = null;
  function Id(e, t, l) {
    if (lu === null) {
      var a = new Map(),
        n = (lu = new Map());
      n.set(l, a);
    } else (n = lu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[Ka] ||
          i[Ke] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var m = a.get(f);
        m ? m.push(i) : a.set(f, [i]);
      }
    }
    return a;
  }
  function Pd(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function qp(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function eh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Yp(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Ua(a.href),
          i = t.querySelector(wn(n));
        if (i) {
          (t = i._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = au.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = i),
            Qe(i);
          return;
        }
        (i = t.ownerDocument || t),
          (a = Fd(a)),
          (n = wt.get(n)) && Lr(a, n),
          (i = i.createElement("link")),
          Qe(i);
        var f = i;
        (f._p = new Promise(function (m, v) {
          (f.onload = m), (f.onerror = v);
        })),
          Fe(i, "link", a),
          (l.instance = i);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = au.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  var Br = 0;
  function Gp(e, t) {
    return (
      e.stylesheets && e.count === 0 && iu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && iu(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                (e.unsuspend = null), i();
              }
            }, 6e4 + t);
            0 < e.imgBytes && Br === 0 && (Br = 62500 * Sp());
            var n = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && iu(e, e.stylesheets), e.unsuspend))
              ) {
                var i = e.unsuspend;
                (e.unsuspend = null), i();
              }
            }, (e.imgBytes > Br ? 50 : 800) + t);
            return (
              (e.unsuspend = l),
              function () {
                (e.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function au() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) iu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var nu = null;
  function iu(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (nu = new Map()),
        t.forEach(Vp, e),
        (nu = null),
        au.call(e));
  }
  function Vp(e, t) {
    if (!(t.state.loading & 4)) {
      var l = nu.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), nu.set(e, l);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var f = n[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (l.set(f.dataset.precedence, f), (a = f));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (f = n.getAttribute("data-precedence")),
        (i = l.get(f) || a),
        i === a && l.set(null, n),
        l.set(f, n),
        this.count++,
        (a = au.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Dn = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0,
  };
  function Qp(e, t, l, a, n, i, f, m, v) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = _u(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = _u(0)),
      (this.hiddenUpdates = _u(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function th(e, t, l, a, n, i, f, m, v, A, D, H) {
    return (
      (e = new Qp(e, t, l, f, v, A, D, H, m)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = mt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = ys()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Ss(i),
      e
    );
  }
  function lh(e) {
    return e ? ((e = ha), e) : ha;
  }
  function ah(e, t, l, a, n, i) {
    (n = lh(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = yl(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = vl(e, a, t)),
      l !== null && (ct(l, e, t), on(l, e, t));
  }
  function nh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function qr(e, t) {
    nh(e, t), (e = e.alternate) && nh(e, t);
  }
  function ih(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Gl(e, 67108864);
      t !== null && ct(t, e, 67108864), qr(e, 67108864);
    }
  }
  function uh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = bt();
      t = Mu(t);
      var l = Gl(e, t);
      l !== null && ct(l, e, t), qr(e, t);
    }
  }
  var uu = !0;
  function Xp(e, t, l, a) {
    var n = j.T;
    j.T = null;
    var i = B.p;
    try {
      (B.p = 2), Yr(e, t, l, a);
    } finally {
      (B.p = i), (j.T = n);
    }
  }
  function Zp(e, t, l, a) {
    var n = j.T;
    j.T = null;
    var i = B.p;
    try {
      (B.p = 8), Yr(e, t, l, a);
    } finally {
      (B.p = i), (j.T = n);
    }
  }
  function Yr(e, t, l, a) {
    if (uu) {
      var n = Gr(a);
      if (n === null) Ar(e, t, a, su, l), rh(e, a);
      else if (Jp(n, e, t, l, a)) a.stopPropagation();
      else if ((rh(e, a), t & 4 && -1 < Kp.indexOf(e))) {
        for (; n !== null; ) {
          var i = la(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var f = Ll(i.pendingLanes);
                  if (f !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var v = 1 << (31 - dt(f));
                      (m.entanglements[1] |= v), (f &= ~v);
                    }
                    qt(i), (me & 6) === 0 && ((Qi = ot() + 500), An(0));
                  }
                }
                break;
              case 31:
              case 13:
                (m = Gl(i, 2)), m !== null && ct(m, i, 2), Zi(), qr(i, 2);
            }
          if (((i = Gr(a)), i === null && Ar(e, t, a, su, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else Ar(e, t, a, null, l);
    }
  }
  function Gr(e) {
    return (e = Qu(e)), Vr(e);
  }
  var su = null;
  function Vr(e) {
    if (((su = null), (e = ta(e)), e !== null)) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (su = e), null;
  }
  function sh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (jm()) {
          case hc:
            return 2;
          case mc:
            return 8;
          case Fn:
          case Dm:
            return 32;
          case gc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qr = !1,
    Cl = null,
    wl = null,
    jl = null,
    _n = new Map(),
    Mn = new Map(),
    Dl = [],
    Kp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function rh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Cl = null;
        break;
      case "dragenter":
      case "dragleave":
        wl = null;
        break;
      case "mouseover":
      case "mouseout":
        jl = null;
        break;
      case "pointerover":
      case "pointerout":
        _n.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mn.delete(t.pointerId);
    }
  }
  function Un(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = la(t)), t !== null && ih(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Jp(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return (Cl = Un(Cl, e, t, l, a, n)), !0;
      case "dragenter":
        return (wl = Un(wl, e, t, l, a, n)), !0;
      case "mouseover":
        return (jl = Un(jl, e, t, l, a, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return _n.set(i, Un(_n.get(i) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), Mn.set(i, Un(Mn.get(i) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function ch(e) {
    var t = ta(e.target);
    if (t !== null) {
      var l = d(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = h(l)), t !== null)) {
            (e.blockedOn = t),
              Sc(e.priority, function () {
                uh(l);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = p(l)), t !== null)) {
            (e.blockedOn = t),
              Sc(e.priority, function () {
                uh(l);
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ru(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Gr(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (Vu = a), l.target.dispatchEvent(a), (Vu = null);
      } else return (t = la(l)), t !== null && ih(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function oh(e, t, l) {
    ru(e) && l.delete(t);
  }
  function kp() {
    (Qr = !1),
      Cl !== null && ru(Cl) && (Cl = null),
      wl !== null && ru(wl) && (wl = null),
      jl !== null && ru(jl) && (jl = null),
      _n.forEach(oh),
      Mn.forEach(oh);
  }
  function cu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Qr ||
        ((Qr = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, kp)));
  }
  var ou = null;
  function fh(e) {
    ou !== e &&
      ((ou = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        ou === e && (ou = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (Vr(a || l) === null) continue;
            break;
          }
          var i = la(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Gs(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ha(e) {
    function t(v) {
      return cu(v, e);
    }
    Cl !== null && cu(Cl, e),
      wl !== null && cu(wl, e),
      jl !== null && cu(jl, e),
      _n.forEach(t),
      Mn.forEach(t);
    for (var l = 0; l < Dl.length; l++) {
      var a = Dl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Dl.length && ((l = Dl[0]), l.blockedOn === null); )
      ch(l), l.blockedOn === null && Dl.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          f = n[at] || null;
        if (typeof i == "function") f || fh(l);
        else if (f) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (f = i[at] || null))) m = f.formAction;
            else if (Vr(n) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? (l[a + 1] = m) : (l.splice(a, 3), (a -= 3)),
            fh(l);
        }
      }
  }
  function dh() {
    function e(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (n = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      n !== null && (n(), (n = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function Xr(e) {
    this._internalRoot = e;
  }
  (fu.prototype.render = Xr.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var l = t.current,
        a = bt();
      ah(l, a, e, t, null, null);
    }),
    (fu.prototype.unmount = Xr.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ah(e.current, 2, null, e, null, null), Zi(), (t[ea] = null);
        }
      });
  function fu(e) {
    this._internalRoot = e;
  }
  fu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = xc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Dl.length && t !== 0 && t < Dl[l].priority; l++);
      Dl.splice(l, 0, e), l === 0 && ch(e);
    }
  };
  var hh = u.version;
  if (hh !== "19.2.3") throw Error(c(527, hh, "19.2.3"));
  B.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? E(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var $p = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!du.isDisabled && du.supportsFiber)
      try {
        (Qa = du.inject($p)), (ft = du);
      } catch {}
  }
  return (
    (Bn.createRoot = function (e, t) {
      if (!o(e)) throw Error(c(299));
      var l = !1,
        a = "",
        n = xf,
        i = Sf,
        f = Ef;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = th(e, 1, !1, null, null, l, a, null, n, i, f, dh)),
        (e[ea] = t.current),
        Nr(e),
        new Xr(t)
      );
    }),
    (Bn.hydrateRoot = function (e, t, l) {
      if (!o(e)) throw Error(c(299));
      var a = !1,
        n = "",
        i = xf,
        f = Sf,
        m = Ef,
        v = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (f = l.onCaughtError),
          l.onRecoverableError !== void 0 && (m = l.onRecoverableError),
          l.formState !== void 0 && (v = l.formState)),
        (t = th(e, 1, !0, t, l ?? null, a, n, v, i, f, m, dh)),
        (t.context = lh(null)),
        (l = t.current),
        (a = bt()),
        (a = Mu(a)),
        (n = yl(a)),
        (n.callback = null),
        vl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Za(t, l),
        qt(t),
        (e[ea] = t.current),
        Nr(e),
        new fu(t)
      );
    }),
    (Bn.version = "19.2.3"),
    Bn
  );
}
var Kh;
function ey() {
  if (Kh) return $r.exports;
  Kh = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (u) {
        console.error(u);
      }
  }
  return r(), ($r.exports = P0()), $r.exports;
}
var ty = ey();
var Jh = "popstate";
function ly(r = {}) {
  function u(c, o) {
    let { pathname: d, search: h, hash: p } = c.location;
    return nc(
      "",
      { pathname: d, search: h, hash: p },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function s(c, o) {
    return typeof o == "string" ? o : Zn(o);
  }
  return ny(u, s, null, r);
}
function Ge(r, u) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(u);
}
function Ut(r, u) {
  if (!r) {
    typeof console < "u" && console.warn(u);
    try {
      throw new Error(u);
    } catch {}
  }
}
function ay() {
  return Math.random().toString(36).substring(2, 10);
}
function kh(r, u) {
  return { usr: r.state, key: r.key, idx: u };
}
function nc(r, u, s = null, c) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...(typeof u == "string" ? Kn(u) : u),
    state: s,
    key: (u && u.key) || c || ay(),
  };
}
function Zn({ pathname: r = "/", search: u = "", hash: s = "" }) {
  return (
    u && u !== "?" && (r += u.charAt(0) === "?" ? u : "?" + u),
    s && s !== "#" && (r += s.charAt(0) === "#" ? s : "#" + s),
    r
  );
}
function Kn(r) {
  let u = {};
  if (r) {
    let s = r.indexOf("#");
    s >= 0 && ((u.hash = r.substring(s)), (r = r.substring(0, s)));
    let c = r.indexOf("?");
    c >= 0 && ((u.search = r.substring(c)), (r = r.substring(0, c))),
      r && (u.pathname = r);
  }
  return u;
}
function ny(r, u, s, c = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = c,
    h = o.history,
    p = "POP",
    y = null,
    g = E();
  g == null && ((g = 0), h.replaceState({ ...h.state, idx: g }, ""));
  function E() {
    return (h.state || { idx: null }).idx;
  }
  function b() {
    p = "POP";
    let q = E(),
      Q = q == null ? null : q - g;
    (g = q), y && y({ action: p, location: Y.location, delta: Q });
  }
  function R(q, Q) {
    p = "PUSH";
    let V = nc(Y.location, q, Q);
    g = E() + 1;
    let J = kh(V, g),
      ue = Y.createHref(V);
    try {
      h.pushState(J, "", ue);
    } catch (ce) {
      if (ce instanceof DOMException && ce.name === "DataCloneError") throw ce;
      o.location.assign(ue);
    }
    d && y && y({ action: p, location: Y.location, delta: 1 });
  }
  function w(q, Q) {
    p = "REPLACE";
    let V = nc(Y.location, q, Q);
    g = E();
    let J = kh(V, g),
      ue = Y.createHref(V);
    h.replaceState(J, "", ue),
      d && y && y({ action: p, location: Y.location, delta: 0 });
  }
  function _(q) {
    return iy(q);
  }
  let Y = {
    get action() {
      return p;
    },
    get location() {
      return r(o, h);
    },
    listen(q) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Jh, b),
        (y = q),
        () => {
          o.removeEventListener(Jh, b), (y = null);
        }
      );
    },
    createHref(q) {
      return u(o, q);
    },
    createURL: _,
    encodeLocation(q) {
      let Q = _(q);
      return { pathname: Q.pathname, search: Q.search, hash: Q.hash };
    },
    push: R,
    replace: w,
    go(q) {
      return h.go(q);
    },
  };
  return Y;
}
function iy(r, u = !1) {
  let s = "http://localhost";
  typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ge(s, "No window.location.(origin|href) available to create URL");
  let c = typeof r == "string" ? r : Zn(r);
  return (
    (c = c.replace(/ $/, "%20")),
    !u && c.startsWith("//") && (c = s + c),
    new URL(c, s)
  );
}
function im(r, u, s = "/") {
  return uy(r, u, s, !1);
}
function uy(r, u, s, c) {
  let o = typeof u == "string" ? Kn(u) : u,
    d = sl(o.pathname || "/", s);
  if (d == null) return null;
  let h = um(r);
  sy(h);
  let p = null;
  for (let y = 0; p == null && y < h.length; ++y) {
    let g = vy(d);
    p = py(h[y], g, c);
  }
  return p;
}
function um(r, u = [], s = [], c = "", o = !1) {
  let d = (h, p, y = o, g) => {
    let E = {
      relativePath: g === void 0 ? h.path || "" : g,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: p,
      route: h,
    };
    if (E.relativePath.startsWith("/")) {
      if (!E.relativePath.startsWith(c) && y) return;
      Ge(
        E.relativePath.startsWith(c),
        `Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (E.relativePath = E.relativePath.slice(c.length));
    }
    let b = ul([c, E.relativePath]),
      R = s.concat(E);
    h.children &&
      h.children.length > 0 &&
      (Ge(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`
      ),
      um(h.children, u, R, b, y)),
      !(h.path == null && !h.index) &&
        u.push({ path: b, score: my(b, h.index), routesMeta: R });
  };
  return (
    r.forEach((h, p) => {
      if (h.path === "" || !h.path?.includes("?")) d(h, p);
      else for (let y of sm(h.path)) d(h, p, !0, y);
    }),
    u
  );
}
function sm(r) {
  let u = r.split("/");
  if (u.length === 0) return [];
  let [s, ...c] = u,
    o = s.endsWith("?"),
    d = s.replace(/\?$/, "");
  if (c.length === 0) return o ? [d, ""] : [d];
  let h = sm(c.join("/")),
    p = [];
  return (
    p.push(...h.map((y) => (y === "" ? d : [d, y].join("/")))),
    o && p.push(...h),
    p.map((y) => (r.startsWith("/") && y === "" ? "/" : y))
  );
}
function sy(r) {
  r.sort((u, s) =>
    u.score !== s.score
      ? s.score - u.score
      : gy(
          u.routesMeta.map((c) => c.childrenIndex),
          s.routesMeta.map((c) => c.childrenIndex)
        )
  );
}
var ry = /^:[\w-]+$/,
  cy = 3,
  oy = 2,
  fy = 1,
  dy = 10,
  hy = -2,
  $h = (r) => r === "*";
function my(r, u) {
  let s = r.split("/"),
    c = s.length;
  return (
    s.some($h) && (c += hy),
    u && (c += oy),
    s
      .filter((o) => !$h(o))
      .reduce((o, d) => o + (ry.test(d) ? cy : d === "" ? fy : dy), c)
  );
}
function gy(r, u) {
  return r.length === u.length && r.slice(0, -1).every((c, o) => c === u[o])
    ? r[r.length - 1] - u[u.length - 1]
    : 0;
}
function py(r, u, s = !1) {
  let { routesMeta: c } = r,
    o = {},
    d = "/",
    h = [];
  for (let p = 0; p < c.length; ++p) {
    let y = c[p],
      g = p === c.length - 1,
      E = d === "/" ? u : u.slice(d.length) || "/",
      b = Eu(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: g },
        E
      ),
      R = y.route;
    if (
      (!b &&
        g &&
        s &&
        !c[c.length - 1].route.index &&
        (b = Eu(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          E
        )),
      !b)
    )
      return null;
    Object.assign(o, b.params),
      h.push({
        params: o,
        pathname: ul([d, b.pathname]),
        pathnameBase: Ey(ul([d, b.pathnameBase])),
        route: R,
      }),
      b.pathnameBase !== "/" && (d = ul([d, b.pathnameBase]));
  }
  return h;
}
function Eu(r, u) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [s, c] = yy(r.path, r.caseSensitive, r.end),
    o = u.match(s);
  if (!o) return null;
  let d = o[0],
    h = d.replace(/(.)\/+$/, "$1"),
    p = o.slice(1);
  return {
    params: c.reduce((g, { paramName: E, isOptional: b }, R) => {
      if (E === "*") {
        let _ = p[R] || "";
        h = d.slice(0, d.length - _.length).replace(/(.)\/+$/, "$1");
      }
      const w = p[R];
      return (
        b && !w ? (g[E] = void 0) : (g[E] = (w || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: d,
    pathnameBase: h,
    pattern: r,
  };
}
function yy(r, u = !1, s = !0) {
  Ut(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let c = [],
    o =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, p, y) => (
            c.push({ paramName: p, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    r.endsWith("*")
      ? (c.push({ paramName: "*" }),
        (o += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (o += "\\/*$")
      : r !== "" && r !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, u ? void 0 : "i"), c]
  );
}
function vy(r) {
  try {
    return r
      .split("/")
      .map((u) => decodeURIComponent(u).replace(/\//g, "%2F"))
      .join("/");
  } catch (u) {
    return (
      Ut(
        !1,
        `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`
      ),
      r
    );
  }
}
function sl(r, u) {
  if (u === "/") return r;
  if (!r.toLowerCase().startsWith(u.toLowerCase())) return null;
  let s = u.endsWith("/") ? u.length - 1 : u.length,
    c = r.charAt(s);
  return c && c !== "/" ? null : r.slice(s) || "/";
}
var rm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  by = (r) => rm.test(r);
function xy(r, u = "/") {
  let {
      pathname: s,
      search: c = "",
      hash: o = "",
    } = typeof r == "string" ? Kn(r) : r,
    d;
  if (s)
    if (by(s)) d = s;
    else {
      if (s.includes("//")) {
        let h = s;
        (s = s.replace(/\/\/+/g, "/")),
          Ut(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`
          );
      }
      s.startsWith("/") ? (d = Fh(s.substring(1), "/")) : (d = Fh(s, u));
    }
  else d = u;
  return { pathname: d, search: Ty(c), hash: Oy(o) };
}
function Fh(r, u) {
  let s = u.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((o) => {
      o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Pr(r, u, s, c) {
  return `Cannot include a '${r}' character in a manually specified \`to.${u}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Sy(r) {
  return r.filter(
    (u, s) => s === 0 || (u.route.path && u.route.path.length > 0)
  );
}
function cm(r) {
  let u = Sy(r);
  return u.map((s, c) => (c === u.length - 1 ? s.pathname : s.pathnameBase));
}
function om(r, u, s, c = !1) {
  let o;
  typeof r == "string"
    ? (o = Kn(r))
    : ((o = { ...r }),
      Ge(
        !o.pathname || !o.pathname.includes("?"),
        Pr("?", "pathname", "search", o)
      ),
      Ge(
        !o.pathname || !o.pathname.includes("#"),
        Pr("#", "pathname", "hash", o)
      ),
      Ge(!o.search || !o.search.includes("#"), Pr("#", "search", "hash", o)));
  let d = r === "" || o.pathname === "",
    h = d ? "/" : o.pathname,
    p;
  if (h == null) p = s;
  else {
    let b = u.length - 1;
    if (!c && h.startsWith("..")) {
      let R = h.split("/");
      for (; R[0] === ".."; ) R.shift(), (b -= 1);
      o.pathname = R.join("/");
    }
    p = b >= 0 ? u[b] : "/";
  }
  let y = xy(o, p),
    g = h && h !== "/" && h.endsWith("/"),
    E = (d || h === ".") && s.endsWith("/");
  return !y.pathname.endsWith("/") && (g || E) && (y.pathname += "/"), y;
}
var ul = (r) => r.join("/").replace(/\/\/+/g, "/"),
  Ey = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ty = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  Oy = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r),
  Ny = class {
    constructor(r, u, s, c = !1) {
      (this.status = r),
        (this.statusText = u || ""),
        (this.internal = c),
        s instanceof Error
          ? ((this.data = s.toString()), (this.error = s))
          : (this.data = s);
    }
  };
function Ay(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
function zy(r) {
  return (
    r
      .map((u) => u.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var fm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function dm(r, u) {
  let s = r;
  if (typeof s != "string" || !rm.test(s))
    return { absoluteURL: void 0, isExternal: !1, to: s };
  let c = s,
    o = !1;
  if (fm)
    try {
      let d = new URL(window.location.href),
        h = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s),
        p = sl(h.pathname, u);
      h.origin === d.origin && p != null
        ? (s = p + h.search + h.hash)
        : (o = !0);
    } catch {
      Ut(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: c, isExternal: o, to: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var hm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(hm);
var Ry = ["GET", ...hm];
new Set(Ry);
var Ga = L.createContext(null);
Ga.displayName = "DataRouter";
var Ou = L.createContext(null);
Ou.displayName = "DataRouterState";
var Cy = L.createContext(!1),
  mm = L.createContext({ isTransitioning: !1 });
mm.displayName = "ViewTransition";
var wy = L.createContext(new Map());
wy.displayName = "Fetchers";
var jy = L.createContext(null);
jy.displayName = "Await";
var jt = L.createContext(null);
jt.displayName = "Navigation";
var Nu = L.createContext(null);
Nu.displayName = "Location";
var rl = L.createContext({ outlet: null, matches: [], isDataRoute: !1 });
rl.displayName = "Route";
var uc = L.createContext(null);
uc.displayName = "RouteError";
var gm = "REACT_ROUTER_ERROR",
  Dy = "REDIRECT",
  _y = "ROUTE_ERROR_RESPONSE";
function My(r) {
  if (r.startsWith(`${gm}:${Dy}:{`))
    try {
      let u = JSON.parse(r.slice(28));
      if (
        typeof u == "object" &&
        u &&
        typeof u.status == "number" &&
        typeof u.statusText == "string" &&
        typeof u.location == "string" &&
        typeof u.reloadDocument == "boolean" &&
        typeof u.replace == "boolean"
      )
        return u;
    } catch {}
}
function Uy(r) {
  if (r.startsWith(`${gm}:${_y}:{`))
    try {
      let u = JSON.parse(r.slice(40));
      if (
        typeof u == "object" &&
        u &&
        typeof u.status == "number" &&
        typeof u.statusText == "string"
      )
        return new Ny(u.status, u.statusText, u.data);
    } catch {}
}
function Ly(r, { relative: u } = {}) {
  Ge(
    Jn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = L.useContext(jt),
    { hash: o, pathname: d, search: h } = kn(r, { relative: u }),
    p = d;
  return (
    s !== "/" && (p = d === "/" ? s : ul([s, d])),
    c.createHref({ pathname: p, search: h, hash: o })
  );
}
function Jn() {
  return L.useContext(Nu) != null;
}
function Ml() {
  return (
    Ge(
      Jn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    L.useContext(Nu).location
  );
}
var pm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ym(r) {
  L.useContext(jt).static || L.useLayoutEffect(r);
}
function vm() {
  let { isDataRoute: r } = L.useContext(rl);
  return r ? $y() : Hy();
}
function Hy() {
  Ge(
    Jn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = L.useContext(Ga),
    { basename: u, navigator: s } = L.useContext(jt),
    { matches: c } = L.useContext(rl),
    { pathname: o } = Ml(),
    d = JSON.stringify(cm(c)),
    h = L.useRef(!1);
  return (
    ym(() => {
      h.current = !0;
    }),
    L.useCallback(
      (y, g = {}) => {
        if ((Ut(h.current, pm), !h.current)) return;
        if (typeof y == "number") {
          s.go(y);
          return;
        }
        let E = om(y, JSON.parse(d), o, g.relative === "path");
        r == null &&
          u !== "/" &&
          (E.pathname = E.pathname === "/" ? u : ul([u, E.pathname])),
          (g.replace ? s.replace : s.push)(E, g.state, g);
      },
      [u, s, d, o, r]
    )
  );
}
L.createContext(null);
function kn(r, { relative: u } = {}) {
  let { matches: s } = L.useContext(rl),
    { pathname: c } = Ml(),
    o = JSON.stringify(cm(s));
  return L.useMemo(() => om(r, JSON.parse(o), c, u === "path"), [r, o, c, u]);
}
function By(r, u) {
  return bm(r);
}
function bm(r, u, s, c, o) {
  Ge(
    Jn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = L.useContext(jt),
    { matches: h } = L.useContext(rl),
    p = h[h.length - 1],
    y = p ? p.params : {},
    g = p ? p.pathname : "/",
    E = p ? p.pathnameBase : "/",
    b = p && p.route;
  {
    let V = (b && b.path) || "";
    Sm(
      g,
      !b || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${
        V === "/" ? "*" : `${V}/*`
      }">.`
    );
  }
  let R = Ml(),
    w;
  w = R;
  let _ = w.pathname || "/",
    Y = _;
  if (E !== "/") {
    let V = E.replace(/^\//, "").split("/");
    Y = "/" + _.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let q = im(r, { pathname: Y });
  return (
    Ut(
      b || q != null,
      `No routes matched location "${w.pathname}${w.search}${w.hash}" `
    ),
    Ut(
      q == null ||
        q[q.length - 1].route.element !== void 0 ||
        q[q.length - 1].route.Component !== void 0 ||
        q[q.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    Qy(
      q &&
        q.map((V) =>
          Object.assign({}, V, {
            params: Object.assign({}, y, V.params),
            pathname: ul([
              E,
              d.encodeLocation
                ? d.encodeLocation(
                    V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                  ).pathname
                : V.pathname,
            ]),
            pathnameBase:
              V.pathnameBase === "/"
                ? E
                : ul([
                    E,
                    d.encodeLocation
                      ? d.encodeLocation(
                          V.pathnameBase
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23")
                        ).pathname
                      : V.pathnameBase,
                  ]),
          })
        ),
      h,
      s,
      c,
      o
    )
  );
}
function qy() {
  let r = ky(),
    u = Ay(r)
      ? `${r.status} ${r.statusText}`
      : r instanceof Error
      ? r.message
      : JSON.stringify(r),
    s = r instanceof Error ? r.stack : null,
    c = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: c },
    d = { padding: "2px 4px", backgroundColor: c },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", r),
    (h = L.createElement(
      L.Fragment,
      null,
      L.createElement("p", null, "💿 Hey developer 👋"),
      L.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        L.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        L.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    L.createElement(
      L.Fragment,
      null,
      L.createElement("h2", null, "Unexpected Application Error!"),
      L.createElement("h3", { style: { fontStyle: "italic" } }, u),
      s ? L.createElement("pre", { style: o }, s) : null,
      h
    )
  );
}
var Yy = L.createElement(qy, null),
  xm = class extends L.Component {
    constructor(r) {
      super(r),
        (this.state = {
          location: r.location,
          revalidation: r.revalidation,
          error: r.error,
        });
    }
    static getDerivedStateFromError(r) {
      return { error: r };
    }
    static getDerivedStateFromProps(r, u) {
      return u.location !== r.location ||
        (u.revalidation !== "idle" && r.revalidation === "idle")
        ? { error: r.error, location: r.location, revalidation: r.revalidation }
        : {
            error: r.error !== void 0 ? r.error : u.error,
            location: u.location,
            revalidation: r.revalidation || u.revalidation,
          };
    }
    componentDidCatch(r, u) {
      this.props.onError
        ? this.props.onError(r, u)
        : console.error(
            "React Router caught the following error during render",
            r
          );
    }
    render() {
      let r = this.state.error;
      if (
        this.context &&
        typeof r == "object" &&
        r &&
        "digest" in r &&
        typeof r.digest == "string"
      ) {
        const s = Uy(r.digest);
        s && (r = s);
      }
      let u =
        r !== void 0
          ? L.createElement(
              rl.Provider,
              { value: this.props.routeContext },
              L.createElement(uc.Provider, {
                value: r,
                children: this.props.component,
              })
            )
          : this.props.children;
      return this.context ? L.createElement(Gy, { error: r }, u) : u;
    }
  };
xm.contextType = Cy;
var ec = new WeakMap();
function Gy({ children: r, error: u }) {
  let { basename: s } = L.useContext(jt);
  if (
    typeof u == "object" &&
    u &&
    "digest" in u &&
    typeof u.digest == "string"
  ) {
    let c = My(u.digest);
    if (c) {
      let o = ec.get(u);
      if (o) throw o;
      let d = dm(c.location, s);
      if (fm && !ec.get(u))
        if (d.isExternal || c.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace,
            })
          );
          throw (ec.set(u, h), h);
        }
      return L.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${d.absoluteURL || d.to}`,
      });
    }
  }
  return r;
}
function Vy({ routeContext: r, match: u, children: s }) {
  let c = L.useContext(Ga);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (u.route.errorElement || u.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = u.route.id),
    L.createElement(rl.Provider, { value: r }, s)
  );
}
function Qy(r, u = [], s = null, c = null, o = null) {
  if (r == null) {
    if (!s) return null;
    if (s.errors) r = s.matches;
    else if (u.length === 0 && !s.initialized && s.matches.length > 0)
      r = s.matches;
    else return null;
  }
  let d = r,
    h = s?.errors;
  if (h != null) {
    let E = d.findIndex((b) => b.route.id && h?.[b.route.id] !== void 0);
    Ge(
      E >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ),
      (d = d.slice(0, Math.min(d.length, E + 1)));
  }
  let p = !1,
    y = -1;
  if (s)
    for (let E = 0; E < d.length; E++) {
      let b = d[E];
      if (
        ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (y = E),
        b.route.id)
      ) {
        let { loaderData: R, errors: w } = s,
          _ =
            b.route.loader &&
            !R.hasOwnProperty(b.route.id) &&
            (!w || w[b.route.id] === void 0);
        if (b.route.lazy || _) {
          (p = !0), y >= 0 ? (d = d.slice(0, y + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  let g =
    s && c
      ? (E, b) => {
          c(E, {
            location: s.location,
            params: s.matches?.[0]?.params ?? {},
            unstable_pattern: zy(s.matches),
            errorInfo: b,
          });
        }
      : void 0;
  return d.reduceRight((E, b, R) => {
    let w,
      _ = !1,
      Y = null,
      q = null;
    s &&
      ((w = h && b.route.id ? h[b.route.id] : void 0),
      (Y = b.route.errorElement || Yy),
      p &&
        (y < 0 && R === 0
          ? (Sm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (_ = !0),
            (q = null))
          : y === R &&
            ((_ = !0), (q = b.route.hydrateFallbackElement || null))));
    let Q = u.concat(d.slice(0, R + 1)),
      V = () => {
        let J;
        return (
          w
            ? (J = Y)
            : _
            ? (J = q)
            : b.route.Component
            ? (J = L.createElement(b.route.Component, null))
            : b.route.element
            ? (J = b.route.element)
            : (J = E),
          L.createElement(Vy, {
            match: b,
            routeContext: { outlet: E, matches: Q, isDataRoute: s != null },
            children: J,
          })
        );
      };
    return s && (b.route.ErrorBoundary || b.route.errorElement || R === 0)
      ? L.createElement(xm, {
          location: s.location,
          revalidation: s.revalidation,
          component: Y,
          error: w,
          children: V(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
          onError: g,
        })
      : V();
  }, null);
}
function sc(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Xy(r) {
  let u = L.useContext(Ga);
  return Ge(u, sc(r)), u;
}
function Zy(r) {
  let u = L.useContext(Ou);
  return Ge(u, sc(r)), u;
}
function Ky(r) {
  let u = L.useContext(rl);
  return Ge(u, sc(r)), u;
}
function rc(r) {
  let u = Ky(r),
    s = u.matches[u.matches.length - 1];
  return (
    Ge(
      s.route.id,
      `${r} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function Jy() {
  return rc("useRouteId");
}
function ky() {
  let r = L.useContext(uc),
    u = Zy("useRouteError"),
    s = rc("useRouteError");
  return r !== void 0 ? r : u.errors?.[s];
}
function $y() {
  let { router: r } = Xy("useNavigate"),
    u = rc("useNavigate"),
    s = L.useRef(!1);
  return (
    ym(() => {
      s.current = !0;
    }),
    L.useCallback(
      async (o, d = {}) => {
        Ut(s.current, pm),
          s.current &&
            (typeof o == "number"
              ? await r.navigate(o)
              : await r.navigate(o, { fromRouteId: u, ...d }));
      },
      [r, u]
    )
  );
}
var Wh = {};
function Sm(r, u, s) {
  !u && !Wh[r] && ((Wh[r] = !0), Ut(!1, s));
}
L.memo(Fy);
function Fy({ routes: r, future: u, state: s, onError: c }) {
  return bm(r, void 0, s, c, u);
}
function Wy({
  basename: r = "/",
  children: u = null,
  location: s,
  navigationType: c = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: h,
}) {
  Ge(
    !Jn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = r.replace(/^\/*/, "/"),
    y = L.useMemo(
      () => ({
        basename: p,
        navigator: o,
        static: d,
        unstable_useTransitions: h,
        future: {},
      }),
      [p, o, d, h]
    );
  typeof s == "string" && (s = Kn(s));
  let {
      pathname: g = "/",
      search: E = "",
      hash: b = "",
      state: R = null,
      key: w = "default",
    } = s,
    _ = L.useMemo(() => {
      let Y = sl(g, p);
      return Y == null
        ? null
        : {
            location: { pathname: Y, search: E, hash: b, state: R, key: w },
            navigationType: c,
          };
    }, [p, g, E, b, R, w, c]);
  return (
    Ut(
      _ != null,
      `<Router basename="${p}"> is not able to match the URL "${g}${E}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    _ == null
      ? null
      : L.createElement(
          jt.Provider,
          { value: y },
          L.createElement(Nu.Provider, { children: u, value: _ })
        )
  );
}
var yu = "get",
  vu = "application/x-www-form-urlencoded";
function Au(r) {
  return typeof HTMLElement < "u" && r instanceof HTMLElement;
}
function Iy(r) {
  return Au(r) && r.tagName.toLowerCase() === "button";
}
function Py(r) {
  return Au(r) && r.tagName.toLowerCase() === "form";
}
function ev(r) {
  return Au(r) && r.tagName.toLowerCase() === "input";
}
function tv(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function lv(r, u) {
  return r.button === 0 && (!u || u === "_self") && !tv(r);
}
var pu = null;
function av() {
  if (pu === null)
    try {
      new FormData(document.createElement("form"), 0), (pu = !1);
    } catch {
      pu = !0;
    }
  return pu;
}
var nv = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function tc(r) {
  return r != null && !nv.has(r)
    ? (Ut(
        !1,
        `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vu}"`
      ),
      null)
    : r;
}
function iv(r, u) {
  let s, c, o, d, h;
  if (Py(r)) {
    let p = r.getAttribute("action");
    (c = p ? sl(p, u) : null),
      (s = r.getAttribute("method") || yu),
      (o = tc(r.getAttribute("enctype")) || vu),
      (d = new FormData(r));
  } else if (Iy(r) || (ev(r) && (r.type === "submit" || r.type === "image"))) {
    let p = r.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = r.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((c = y ? sl(y, u) : null),
      (s = r.getAttribute("formmethod") || p.getAttribute("method") || yu),
      (o =
        tc(r.getAttribute("formenctype")) ||
        tc(p.getAttribute("enctype")) ||
        vu),
      (d = new FormData(p, r)),
      !av())
    ) {
      let { name: g, type: E, value: b } = r;
      if (E === "image") {
        let R = g ? `${g}.` : "";
        d.append(`${R}x`, "0"), d.append(`${R}y`, "0");
      } else g && d.append(g, b);
    }
  } else {
    if (Au(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (s = yu), (c = null), (o = vu), (h = r);
  }
  return (
    d && o === "text/plain" && ((h = d), (d = void 0)),
    { action: c, method: s.toLowerCase(), encType: o, formData: d, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function cc(r, u) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(u);
}
function uv(r, u, s) {
  let c =
    typeof r == "string"
      ? new URL(
          r,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : r;
  return (
    c.pathname === "/"
      ? (c.pathname = `_root.${s}`)
      : u && sl(c.pathname, u) === "/"
      ? (c.pathname = `${u.replace(/\/$/, "")}/_root.${s}`)
      : (c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`),
    c
  );
}
async function sv(r, u) {
  if (r.id in u) return u[r.id];
  try {
    let s = await import(r.module);
    return (u[r.id] = s), s;
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${r.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function rv(r) {
  return r == null
    ? !1
    : r.href == null
    ? r.rel === "preload" &&
      typeof r.imageSrcSet == "string" &&
      typeof r.imageSizes == "string"
    : typeof r.rel == "string" && typeof r.href == "string";
}
async function cv(r, u, s) {
  let c = await Promise.all(
    r.map(async (o) => {
      let d = u.routes[o.route.id];
      if (d) {
        let h = await sv(d, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return hv(
    c
      .flat(1)
      .filter(rv)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function Ih(r, u, s, c, o, d) {
  let h = (y, g) => (s[g] ? y.route.id !== s[g].route.id : !0),
    p = (y, g) =>
      s[g].pathname !== y.pathname ||
      (s[g].route.path?.endsWith("*") && s[g].params["*"] !== y.params["*"]);
  return d === "assets"
    ? u.filter((y, g) => h(y, g) || p(y, g))
    : d === "data"
    ? u.filter((y, g) => {
        let E = c.routes[y.route.id];
        if (!E || !E.hasLoader) return !1;
        if (h(y, g) || p(y, g)) return !0;
        if (y.route.shouldRevalidate) {
          let b = y.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: s[0]?.params || {},
            nextUrl: new URL(r, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof b == "boolean") return b;
        }
        return !0;
      })
    : [];
}
function ov(r, u, { includeHydrateFallback: s } = {}) {
  return fv(
    r
      .map((c) => {
        let o = u.routes[c.route.id];
        if (!o) return [];
        let d = [o.module];
        return (
          o.clientActionModule && (d = d.concat(o.clientActionModule)),
          o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)),
          s &&
            o.hydrateFallbackModule &&
            (d = d.concat(o.hydrateFallbackModule)),
          o.imports && (d = d.concat(o.imports)),
          d
        );
      })
      .flat(1)
  );
}
function fv(r) {
  return [...new Set(r)];
}
function dv(r) {
  let u = {},
    s = Object.keys(r).sort();
  for (let c of s) u[c] = r[c];
  return u;
}
function hv(r, u) {
  let s = new Set();
  return (
    new Set(u),
    r.reduce((c, o) => {
      let d = JSON.stringify(dv(o));
      return s.has(d) || (s.add(d), c.push({ key: d, link: o })), c;
    }, [])
  );
}
function Em() {
  let r = L.useContext(Ga);
  return (
    cc(
      r,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    r
  );
}
function mv() {
  let r = L.useContext(Ou);
  return (
    cc(
      r,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    r
  );
}
var oc = L.createContext(void 0);
oc.displayName = "FrameworkContext";
function Tm() {
  let r = L.useContext(oc);
  return (
    cc(r, "You must render this element inside a <HydratedRouter> element"), r
  );
}
function gv(r, u) {
  let s = L.useContext(oc),
    [c, o] = L.useState(!1),
    [d, h] = L.useState(!1),
    {
      onFocus: p,
      onBlur: y,
      onMouseEnter: g,
      onMouseLeave: E,
      onTouchStart: b,
    } = u,
    R = L.useRef(null);
  L.useEffect(() => {
    if ((r === "render" && h(!0), r === "viewport")) {
      let Y = (Q) => {
          Q.forEach((V) => {
            h(V.isIntersecting);
          });
        },
        q = new IntersectionObserver(Y, { threshold: 0.5 });
      return (
        R.current && q.observe(R.current),
        () => {
          q.disconnect();
        }
      );
    }
  }, [r]),
    L.useEffect(() => {
      if (c) {
        let Y = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(Y);
        };
      }
    }, [c]);
  let w = () => {
      o(!0);
    },
    _ = () => {
      o(!1), h(!1);
    };
  return s
    ? r !== "intent"
      ? [d, R, {}]
      : [
          d,
          R,
          {
            onFocus: qn(p, w),
            onBlur: qn(y, _),
            onMouseEnter: qn(g, w),
            onMouseLeave: qn(E, _),
            onTouchStart: qn(b, w),
          },
        ]
    : [!1, R, {}];
}
function qn(r, u) {
  return (s) => {
    r && r(s), s.defaultPrevented || u(s);
  };
}
function pv({ page: r, ...u }) {
  let { router: s } = Em(),
    c = L.useMemo(() => im(s.routes, r, s.basename), [s.routes, r, s.basename]);
  return c ? L.createElement(vv, { page: r, matches: c, ...u }) : null;
}
function yv(r) {
  let { manifest: u, routeModules: s } = Tm(),
    [c, o] = L.useState([]);
  return (
    L.useEffect(() => {
      let d = !1;
      return (
        cv(r, u, s).then((h) => {
          d || o(h);
        }),
        () => {
          d = !0;
        }
      );
    }, [r, u, s]),
    c
  );
}
function vv({ page: r, matches: u, ...s }) {
  let c = Ml(),
    { manifest: o, routeModules: d } = Tm(),
    { basename: h } = Em(),
    { loaderData: p, matches: y } = mv(),
    g = L.useMemo(() => Ih(r, u, y, o, c, "data"), [r, u, y, o, c]),
    E = L.useMemo(() => Ih(r, u, y, o, c, "assets"), [r, u, y, o, c]),
    b = L.useMemo(() => {
      if (r === c.pathname + c.search + c.hash) return [];
      let _ = new Set(),
        Y = !1;
      if (
        (u.forEach((Q) => {
          let V = o.routes[Q.route.id];
          !V ||
            !V.hasLoader ||
            ((!g.some((J) => J.route.id === Q.route.id) &&
              Q.route.id in p &&
              d[Q.route.id]?.shouldRevalidate) ||
            V.hasClientLoader
              ? (Y = !0)
              : _.add(Q.route.id));
        }),
        _.size === 0)
      )
        return [];
      let q = uv(r, h, "data");
      return (
        Y &&
          _.size > 0 &&
          q.searchParams.set(
            "_routes",
            u
              .filter((Q) => _.has(Q.route.id))
              .map((Q) => Q.route.id)
              .join(",")
          ),
        [q.pathname + q.search]
      );
    }, [h, p, c, o, g, u, r, d]),
    R = L.useMemo(() => ov(E, o), [E, o]),
    w = yv(E);
  return L.createElement(
    L.Fragment,
    null,
    b.map((_) =>
      L.createElement("link", {
        key: _,
        rel: "prefetch",
        as: "fetch",
        href: _,
        ...s,
      })
    ),
    R.map((_) =>
      L.createElement("link", { key: _, rel: "modulepreload", href: _, ...s })
    ),
    w.map(({ key: _, link: Y }) =>
      L.createElement("link", { key: _, nonce: s.nonce, ...Y })
    )
  );
}
function bv(...r) {
  return (u) => {
    r.forEach((s) => {
      typeof s == "function" ? s(u) : s != null && (s.current = u);
    });
  };
}
var xv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  xv && (window.__reactRouterVersion = "7.11.0");
} catch {}
function Sv({
  basename: r,
  children: u,
  unstable_useTransitions: s,
  window: c,
}) {
  let o = L.useRef();
  o.current == null && (o.current = ly({ window: c, v5Compat: !0 }));
  let d = o.current,
    [h, p] = L.useState({ action: d.action, location: d.location }),
    y = L.useCallback(
      (g) => {
        s === !1 ? p(g) : L.startTransition(() => p(g));
      },
      [s]
    );
  return (
    L.useLayoutEffect(() => d.listen(y), [d, y]),
    L.createElement(Wy, {
      basename: r,
      children: u,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      unstable_useTransitions: s,
    })
  );
}
var Om = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Nm = L.forwardRef(function (
    {
      onClick: u,
      discover: s = "render",
      prefetch: c = "none",
      relative: o,
      reloadDocument: d,
      replace: h,
      state: p,
      target: y,
      to: g,
      preventScrollReset: E,
      viewTransition: b,
      unstable_defaultShouldRevalidate: R,
      ...w
    },
    _
  ) {
    let { basename: Y, unstable_useTransitions: q } = L.useContext(jt),
      Q = typeof g == "string" && Om.test(g),
      V = dm(g, Y);
    g = V.to;
    let J = Ly(g, { relative: o }),
      [ue, ce, ye] = gv(c, w),
      W = Nv(g, {
        replace: h,
        state: p,
        target: y,
        preventScrollReset: E,
        relative: o,
        viewTransition: b,
        unstable_defaultShouldRevalidate: R,
        unstable_useTransitions: q,
      });
    function ze(Ce) {
      u && u(Ce), Ce.defaultPrevented || W(Ce);
    }
    let Oe = L.createElement("a", {
      ...w,
      ...ye,
      href: V.absoluteURL || J,
      onClick: V.isExternal || d ? u : ze,
      ref: bv(_, ce),
      target: y,
      "data-discover": !Q && s === "render" ? "true" : void 0,
    });
    return ue && !Q
      ? L.createElement(L.Fragment, null, Oe, L.createElement(pv, { page: J }))
      : Oe;
  });
Nm.displayName = "Link";
var Ev = L.forwardRef(function (
  {
    "aria-current": u = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: o = !1,
    style: d,
    to: h,
    viewTransition: p,
    children: y,
    ...g
  },
  E
) {
  let b = kn(h, { relative: g.relative }),
    R = Ml(),
    w = L.useContext(Ou),
    { navigator: _, basename: Y } = L.useContext(jt),
    q = w != null && wv(b) && p === !0,
    Q = _.encodeLocation ? _.encodeLocation(b).pathname : b.pathname,
    V = R.pathname,
    J =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  s ||
    ((V = V.toLowerCase()),
    (J = J ? J.toLowerCase() : null),
    (Q = Q.toLowerCase())),
    J && Y && (J = sl(J, Y) || J);
  const ue = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
  let ce = V === Q || (!o && V.startsWith(Q) && V.charAt(ue) === "/"),
    ye =
      J != null &&
      (J === Q || (!o && J.startsWith(Q) && J.charAt(Q.length) === "/")),
    W = { isActive: ce, isPending: ye, isTransitioning: q },
    ze = ce ? u : void 0,
    Oe;
  typeof c == "function"
    ? (Oe = c(W))
    : (Oe = [
        c,
        ce ? "active" : null,
        ye ? "pending" : null,
        q ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Ce = typeof d == "function" ? d(W) : d;
  return L.createElement(
    Nm,
    {
      ...g,
      "aria-current": ze,
      className: Oe,
      ref: E,
      style: Ce,
      to: h,
      viewTransition: p,
    },
    typeof y == "function" ? y(W) : y
  );
});
Ev.displayName = "NavLink";
var Tv = L.forwardRef(
  (
    {
      discover: r = "render",
      fetcherKey: u,
      navigate: s,
      reloadDocument: c,
      replace: o,
      state: d,
      method: h = yu,
      action: p,
      onSubmit: y,
      relative: g,
      preventScrollReset: E,
      viewTransition: b,
      unstable_defaultShouldRevalidate: R,
      ...w
    },
    _
  ) => {
    let { unstable_useTransitions: Y } = L.useContext(jt),
      q = Rv(),
      Q = Cv(p, { relative: g }),
      V = h.toLowerCase() === "get" ? "get" : "post",
      J = typeof p == "string" && Om.test(p),
      ue = (ce) => {
        if ((y && y(ce), ce.defaultPrevented)) return;
        ce.preventDefault();
        let ye = ce.nativeEvent.submitter,
          W = ye?.getAttribute("formmethod") || h,
          ze = () =>
            q(ye || ce.currentTarget, {
              fetcherKey: u,
              method: W,
              navigate: s,
              replace: o,
              state: d,
              relative: g,
              preventScrollReset: E,
              viewTransition: b,
              unstable_defaultShouldRevalidate: R,
            });
        Y && s !== !1 ? L.startTransition(() => ze()) : ze();
      };
    return L.createElement("form", {
      ref: _,
      method: V,
      action: Q,
      onSubmit: c ? y : ue,
      ...w,
      "data-discover": !J && r === "render" ? "true" : void 0,
    });
  }
);
Tv.displayName = "Form";
function Ov(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Am(r) {
  let u = L.useContext(Ga);
  return Ge(u, Ov(r)), u;
}
function Nv(
  r,
  {
    target: u,
    replace: s,
    state: c,
    preventScrollReset: o,
    relative: d,
    viewTransition: h,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: y,
  } = {}
) {
  let g = vm(),
    E = Ml(),
    b = kn(r, { relative: d });
  return L.useCallback(
    (R) => {
      if (lv(R, u)) {
        R.preventDefault();
        let w = s !== void 0 ? s : Zn(E) === Zn(b),
          _ = () =>
            g(r, {
              replace: w,
              state: c,
              preventScrollReset: o,
              relative: d,
              viewTransition: h,
              unstable_defaultShouldRevalidate: p,
            });
        y ? L.startTransition(() => _()) : _();
      }
    },
    [E, g, b, s, c, u, r, o, d, h, p, y]
  );
}
var Av = 0,
  zv = () => `__${String(++Av)}__`;
function Rv() {
  let { router: r } = Am("useSubmit"),
    { basename: u } = L.useContext(jt),
    s = Jy(),
    c = r.fetch,
    o = r.navigate;
  return L.useCallback(
    async (d, h = {}) => {
      let { action: p, method: y, encType: g, formData: E, body: b } = iv(d, u);
      if (h.navigate === !1) {
        let R = h.fetcherKey || zv();
        await c(R, s, h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: E,
          body: b,
          formMethod: h.method || y,
          formEncType: h.encType || g,
          flushSync: h.flushSync,
        });
      } else
        await o(h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: E,
          body: b,
          formMethod: h.method || y,
          formEncType: h.encType || g,
          replace: h.replace,
          state: h.state,
          fromRouteId: s,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [c, o, u, s]
  );
}
function Cv(r, { relative: u } = {}) {
  let { basename: s } = L.useContext(jt),
    c = L.useContext(rl);
  Ge(c, "useFormAction must be used inside a RouteContext");
  let [o] = c.matches.slice(-1),
    d = { ...kn(r || ".", { relative: u }) },
    h = Ml();
  if (r == null) {
    d.search = h.search;
    let p = new URLSearchParams(d.search),
      y = p.getAll("index");
    if (y.some((E) => E === "")) {
      p.delete("index"),
        y.filter((b) => b).forEach((b) => p.append("index", b));
      let E = p.toString();
      d.search = E ? `?${E}` : "";
    }
  }
  return (
    (!r || r === ".") &&
      o.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (d.pathname = d.pathname === "/" ? s : ul([s, d.pathname])),
    Zn(d)
  );
}
function wv(r, { relative: u } = {}) {
  let s = L.useContext(mm);
  Ge(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Am("useViewTransitionState"),
    o = kn(r, { relative: u });
  if (!s.isTransitioning) return !1;
  let d = sl(s.currentLocation.pathname, c) || s.currentLocation.pathname,
    h = sl(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Eu(o.pathname, h) != null || Eu(o.pathname, d) != null;
}
function jv() {
  const r = Ml();
  return O.jsxs("div", {
    className:
      "relative flex flex-col items-center justify-center h-screen text-center px-4",
    children: [
      O.jsx("h1", {
        className:
          "absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0",
        children: "404",
      }),
      O.jsxs("div", {
        className: "relative z-10",
        children: [
          O.jsx("h1", {
            className: "text-xl md:text-2xl font-semibold mt-6",
            children: "This page has not been generated",
          }),
          O.jsx("p", {
            className: "mt-2 text-base text-gray-400 font-mono",
            children: r.pathname,
          }),
          O.jsx("p", {
            className: "mt-4 text-lg md:text-xl text-gray-500",
            children: "Tell me more about this page, so I can generate it",
          }),
        ],
      }),
    ],
  });
}
function Dv() {
  return O.jsx("section", {
    id: "home",
    className: "relative min-h-screen flex items-center pt-20 px-6",
    children: O.jsx("div", {
      className: "max-w-7xl mx-auto w-full",
      children: O.jsxs("div", {
        className: "grid md:grid-cols-2 gap-12 items-center",
        children: [
          O.jsxs("div", {
            className: "relative z-10 space-y-6",
            children: [
              O.jsx("p", {
                className:
                  "text-cyan-400 text-sm font-medium tracking-wider uppercase",
                children: "Welcome to my portfolio",
              }),
              O.jsxs("h1", {
                className:
                  "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight",
                children: [
                  "Hi, I am ",
                  O.jsx("span", {
                    className:
                      "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
                    children: "Alan Baiju",
                  }),
                ],
              }),
              O.jsx("h2", {
                className: "text-2xl md:text-3xl font-semibold text-gray-300",
                children: "Cybersecurity & Ethical Hacker Student",
              }),
              O.jsx("p", {
                className: "text-gray-400 text-base leading-relaxed max-w-xl",
                children:
                  "Passionate about penetration testing, vulnerability assessment, and network security. Currently mastering ethical hacking techniques and security fundamentals through hands-on labs and real-world scenarios. Dedicated to protecting digital assets and identifying security vulnerabilities before malicious actors can exploit them.",
              }),
              O.jsxs("div", {
                className: "flex flex-wrap items-center gap-4 pt-4",
                children: [
                  O.jsx("a", {
                    href: "#contact",
                    className:
                      "px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 whitespace-nowrap cursor-pointer",
                    children: "Hire Me",
                  }),
                  O.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      O.jsx("a", {
                        href: "https://www.linkedin.com/in/alan-baiju-b7b321392",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 cursor-pointer",
                        children: O.jsx("i", {
                          className: "ri-linkedin-fill text-lg",
                        }),
                      }),
                      O.jsx("a", {
                        href: "https://github.com/alanbaijuu21",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 cursor-pointer",
                        children: O.jsx("i", {
                          className: "ri-github-fill text-lg",
                        }),
                      }),
                      O.jsx("a", {
                        href: "mailto:alanbaiju21@gmail.com",
                        className:
                          "w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 cursor-pointer",
                        children: O.jsx("i", {
                          className: "ri-mail-fill text-lg",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          O.jsx("div", {
            className: "relative flex justify-center md:justify-end",
            children: O.jsxs("div", {
              className: "relative",
              children: [
                O.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-2xl blur-xl",
                }),
                O.jsx("div", {
                  className:
                    "absolute inset-0 border-2 border-cyan-400/50 rounded-2xl",
                }),
                O.jsx("div", {
                  className:
                    "relative w-80 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden",
                  children: O.jsx("img", {
                    src: "https://static.readdy.ai/image/8577ee91b71507bd70bba19f9d884f77/a8209e1e1bcdff00f37430314cd9ab02.jpeg",
                    alt: "Alan Baiju - Cybersecurity Expert",
                    className: "w-full h-full object-cover object-top",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function _v() {
  const r = [
    {
      icon: "ri-shield-check-line",
      title: "Penetration Testing",
      description:
        "Conducting comprehensive security assessments to identify vulnerabilities in web applications, networks, and systems before attackers can exploit them.",
    },
    {
      icon: "ri-server-line",
      title: "Network Security",
      description:
        "Implementing robust network security measures, firewall configurations, and intrusion detection systems to protect against unauthorized access.",
    },
    {
      icon: "ri-bug-line",
      title: "Malware Analysis",
      description:
        "Examining malicious software to understand its behavior, impact, and developing strategies to detect and prevent malware infections.",
    },
    {
      icon: "ri-code-s-slash-line",
      title: "Web Design",
      description:
        "Creating secure, modern, and responsive web designs with a focus on user experience while maintaining strong security practices.",
    },
  ];
  return O.jsx("section", {
    id: "services",
    className: "relative py-24 px-6",
    children: O.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        O.jsxs("div", {
          className: "text-center mb-16",
          children: [
            O.jsxs("h2", {
              className: "text-4xl md:text-5xl font-bold mb-4",
              children: [
                "What I ",
                O.jsx("span", {
                  className:
                    "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
                  children: "Do",
                }),
              ],
            }),
            O.jsx("div", {
              className:
                "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto",
            }),
          ],
        }),
        O.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: r.map((u, s) =>
            O.jsxs(
              "div",
              {
                className:
                  "group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer",
                children: [
                  O.jsx("div", {
                    className:
                      "w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 mb-6 group-hover:scale-110 transition-transform duration-300",
                    children: O.jsx("i", {
                      className: `${u.icon} text-2xl text-cyan-400`,
                    }),
                  }),
                  O.jsx("h3", {
                    className:
                      "text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors",
                    children: u.title,
                  }),
                  O.jsx("p", {
                    className: "text-gray-400 text-sm leading-relaxed",
                    children: u.description,
                  }),
                ],
              },
              s
            )
          ),
        }),
      ],
    }),
  });
}
function Mv() {
  const [r, u] = L.useState("biography"),
    s = [
      { id: "biography", label: "Biography", number: "01" },
      { id: "skills", label: "Skills", number: "02" },
      { id: "education", label: "Education", number: "03" },
      { id: "tools", label: "Tools", number: "04" },
    ],
    c = [
      { name: "Penetration Testing", level: 85 },
      { name: "Network Security", level: 80 },
      { name: "Ethical Hacking", level: 85 },
      { name: "Malware Analysis", level: 70 },
      { name: "Python & Scripting", level: 88 },
      { name: "Linux Administration", level: 82 },
    ],
    myskills= [
      { name: "Nmap", level: 70 },
      { name: "HTML", level: 70 },
      { name: "CSS", level: 70 },
      { name: "Javascript", level: 70 },
      { name: "Linux", level: 70 },
      { name: "Nessus", level: 70 },
      { name: "Wireshark", level: 70 },
      { name: "Burpsuite", level: 70 },
      { name: "Hydra", level: 70 },
      { name: "Aircrak mg", level: 70 },
      
    ],
    o = [
      {
        degree: "Cybersecurity and Ethical Hacking (ADIS)",
        institution: "Offenso Academy",
        period: "2025",
        description:
          "Intensive hands-on training in penetration testing, vulnerability assessment, network security, and ethical hacking techniques. Focusing on real-world security scenarios and industry-standard tools.",
      },
    ];
  return O.jsx("section", {
    id: "resume",
    className: "relative py-24 px-6",
    children: O.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        O.jsxs("div", {
          className: "text-center mb-16",
          children: [
            O.jsxs("h2", {
              className: "text-4xl md:text-5xl font-bold mb-4",
              children: [
                "My ",
                O.jsx("span", {
                  className:
                    "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
                  children: "Resume",
                }),
              ],
            }),
            O.jsx("div", {
              className:
                "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto",
            }),
          ],
        }),
        O.jsx("div", {
          className: "flex flex-wrap justify-center gap-4 mb-12",
          children: s.map((d) =>
            O.jsxs(
              "button",
              {
                onClick: () => u(d.id),
                className: `px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  r === d.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/30"
                    : "bg-white/5 border border-white/10 hover:border-cyan-400/50"
                }`,
                children: [
                  O.jsx("span", {
                    className: "text-xs opacity-70 mr-2",
                    children: d.number,
                  }),
                  d.label,
                ],
              },
              d.id
            )
          ),
        }),
        O.jsxs("div", {
          className: "max-w-5xl mx-auto",
          children: [
            r === "biography" &&
              O.jsx("div", {
                className: "space-y-8 animate-fadeIn",
                children: O.jsxs("div", {
                  className:
                    "p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10",
                  children: [
                    O.jsx("h3", {
                      className: "text-2xl font-bold mb-6 text-cyan-400",
                      children: "About Me",
                    }),
                    O.jsxs("div", {
                      className: "space-y-4 text-gray-300 leading-relaxed",
                      children: [
                        O.jsx("p", {
                          children:
                            "I am a dedicated Cybersecurity and Ethical Hacking student at Offenso Academy (ADIS), passionate about protecting digital infrastructure and identifying security vulnerabilities. My journey in cybersecurity combines theoretical knowledge with extensive hands-on practice in penetration testing and security assessment.",
                        }),
                        O.jsx("p", {
                          children:
                            "With a strong foundation in web application security, network defense, and ethical hacking methodologies, I continuously expand my skills through practical labs, capture-the-flag challenges, and real-world security scenarios. My approach emphasizes understanding both offensive and defensive security techniques to build comprehensive protection strategies.",
                        }),
                        O.jsx("p", {
                          children:
                            "Beyond security, I also have expertise in web design, allowing me to create secure, user-friendly applications while maintaining robust security practices throughout the development lifecycle.",
                        }),
                      ],
                    }),
                    O.jsxs("div", {
                      className:
                        "grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10",
                      children: [
                        O.jsxs("div", {
                          children: [
                            O.jsx("p", {
                              className: "text-sm text-gray-400 mb-1",
                              children: "Email",
                            }),
                            O.jsx("p", {
                              className: "text-cyan-400 font-medium",
                              children: "alanbaiju21@gmail.com",
                            }),
                          ],
                        }),
                        O.jsxs("div", {
                          children: [
                            O.jsx("p", {
                              className: "text-sm text-gray-400 mb-1",
                              children: "Phone",
                            }),
                            O.jsx("p", {
                              className: "text-cyan-400 font-medium",
                              children: "+91 7025834759",
                            }),
                          ],
                        }),
                        O.jsxs("div", {
                          children: [
                            O.jsx("p", {
                              className: "text-sm text-gray-400 mb-1",
                              children: "Location",
                            }),
                            O.jsx("p", {
                              className: "text-cyan-400 font-medium",
                              children: "India",
                            }),
                          ],
                        }),
                        O.jsxs("div", {
                          children: [
                            O.jsx("p", {
                              className: "text-sm text-gray-400 mb-1",
                              children: "Availability",
                            }),
                            O.jsx("p", {
                              className: "text-cyan-400 font-medium",
                              children: "Open to Opportunities",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            r === "skills" &&
              O.jsx("div", {
                className: "space-y-6 animate-fadeIn",
                children: c.map((d, h) =>
                  O.jsxs(
                    "div",
                    {
                      className:
                        "p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10",
                      children: [
                        O.jsxs("div", {
                          className: "flex justify-between items-center mb-3",
                          children: [
                            O.jsx("h4", {
                              className: "font-semibold text-lg",
                              children: d.name,
                            }),
                            O.jsxs("span", {
                              className: "text-cyan-400 font-bold",
                              children: [d.level, "%"],
                            }),
                          ],
                        }),
                        O.jsx("div", {
                          className:
                            "w-full h-2 bg-white/10 rounded-full overflow-hidden",
                          children: O.jsx("div", {
                            className:
                              "h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-1000",
                            style: { width: `${d.level}%` },
                          }),
                        }),
                      ],
                    },
                    h
                  )
                ),
              }),
              r === "tools" &&
              O.jsx("div", {
                className: "space-y-6 animate-fadeIn",
                children: myskills.map((d, h) =>
                  O.jsxs(
                    "div",
                    {
                      className:
                        "p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10",
                      children: [
                        O.jsxs("div", {
                          className: "flex justify-between items-center mb-3",
                          children: [
                            O.jsx("h4", {
                              className: "font-semibold text-lg",
                              children: d.name,
                            }),
                            O.jsxs("span", {
                              className: "text-cyan-400 font-bold",
                              children: [d.level, "%"],
                            }),
                          ],
                        }),
                        O.jsx("div", {
                          className:
                            "w-full h-2 bg-white/10 rounded-full overflow-hidden",
                          children: O.jsx("div", {
                            className:
                              "h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-1000",
                            style: { width: `${d.level}%` },
                          }),
                        }),
                      ],
                    },
                    h
                  )
                ),
              }),
            r === "education" &&
              O.jsx("div", {
                className: "space-y-6 animate-fadeIn",
                children: o.map((d, h) =>
                  O.jsx(
                    "div",
                    {
                      className:
                        "p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300",
                      children: O.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [
                          O.jsx("div", {
                            className:
                              "w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 flex-shrink-0",
                            children: O.jsx("i", {
                              className:
                                "ri-graduation-cap-line text-xl text-cyan-400",
                            }),
                          }),
                          O.jsxs("div", {
                            className: "flex-1",
                            children: [
                              O.jsxs("div", {
                                className:
                                  "flex flex-wrap justify-between items-start gap-2 mb-3",
                                children: [
                                  O.jsx("h3", {
                                    className: "text-xl font-bold",
                                    children: d.degree,
                                  }),
                                  O.jsx("span", {
                                    className:
                                      "px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium whitespace-nowrap",
                                    children: d.period,
                                  }),
                                ],
                              }),
                              O.jsx("p", {
                                className: "text-purple-400 font-medium mb-3",
                                children: d.institution,
                              }),
                              O.jsx("p", {
                                className: "text-gray-400 leading-relaxed",
                                children: d.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    h
                  )
                ),
              }),
          ],
        }),
      ],
    }),
  });
}
function Uv() {
  const r = [
    {
      title: "Network Penetration Testing",
      category: "Security Assessment",
      image:
        "https://public.readdy.ai/ai/img_res/95671c64befda35c7678f78bb718c564.jpg",
    },
    {
      title: "Malware Analysis Lab",
      category: "Threat Analysis",
      image:
        "https://readdy.ai/api/search-image?query=malware%20analysis%20laboratory%20setup%20with%20multiple%20monitors%20displaying%20code%20hexadecimal%20data%20virus%20signatures%20on%20dark%20blue%20purple%20gradient%20background%20cybersecurity%20research%20environment%20professional%20tech%20workspace&width=400&height=500&seq=portfolio-3&orientation=portrait",
    },
    {
      title: "Secure Web Design",
      category: "Web Development",
      image:
        "https://readdy.ai/api/search-image?query=modern%20secure%20web%20design%20interface%20mockup%20showing%20responsive%20website%20layouts%20security%20features%20on%20dark%20blue%20purple%20gradient%20background%20with%20glowing%20elements%20professional%20web%20development%20visualization&width=400&height=500&seq=portfolio-4&orientation=portrait",
    },
    {
      title: "Ethical Hacking Project",
      category: "Penetration Testing",
      image:
        "https://readdy.ai/api/search-image?query=ethical%20hacking%20command%20line%20terminal%20interface%20showing%20security%20tools%20penetration%20testing%20commands%20on%20dark%20blue%20purple%20gradient%20background%20with%20cyan%20green%20text%20professional%20hacker%20workspace%20aesthetic&width=400&height=500&seq=portfolio-5&orientation=portrait",
    },
    {
      title: "Security Consulting",
      category: "Advisory Services",
      image:
        "https://readdy.ai/api/search-image?query=cybersecurity%20consulting%20business%20meeting%20visualization%20with%20security%20reports%20charts%20risk%20assessment%20diagrams%20on%20dark%20blue%20purple%20gradient%20background%20professional%20corporate%20tech%20presentation&width=400&height=500&seq=portfolio-6&orientation=portrait",
    },
    {
      title: "Network Defense Strategy",
      category: "Security Architecture",
      image:
        "https://readdy.ai/api/search-image?query=network%20defense%20architecture%20diagram%20showing%20firewall%20configurations%20intrusion%20detection%20systems%20security%20layers%20on%20dark%20blue%20purple%20gradient%20background%20professional%20cybersecurity%20infrastructure%20visualization&width=400&height=500&seq=portfolio-7&orientation=portrait",
    },
  ];
  return O.jsx("section", {
    id: "portfolio",
    className: "relative py-24 px-6",
    children: O.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        O.jsxs("div", {
          className: "text-center mb-16",
          children: [
            O.jsxs("h2", {
              className: "text-4xl md:text-5xl font-bold mb-4",
              children: [
                "My ",
                O.jsx("span", {
                  className:
                    "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
                  children: "Portfolio",
                }),
              ],
            }),
            O.jsx("div", {
              className:
                "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto",
            }),
          ],
        }),
        O.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: r.map((u, s) =>
            O.jsxs(
              "div",
              {
                className:
                  "group relative rounded-2xl overflow-hidden cursor-pointer",
                children: [
                  O.jsx("div", {
                    className: "w-full h-80 overflow-hidden",
                    children: O.jsx("img", {
                      src: u.image,
                      alt: u.title,
                      className:
                        "w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110",
                    }),
                  }),
                  O.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6",
                    children: O.jsxs("div", {
                      children: [
                        O.jsx("p", {
                          className: "text-cyan-400 text-sm font-medium mb-2",
                          children: u.category,
                        }),
                        O.jsx("h3", {
                          className: "text-xl font-bold",
                          children: u.title,
                        }),
                      ],
                    }),
                  }),
                ],
              },
              s
            )
          ),
        }),
      ],
    }),
  });
}
function Lv() {
  return O.jsxs("section", {
    id: "contact",
    className: "relative py-24 px-6",
    children: [
      O.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          O.jsxs("div", {
            className: "text-center mb-16",
            children: [
              O.jsxs("h2", {
                className: "text-4xl md:text-5xl font-bold mb-4",
                children: [
                  "Get In ",
                  O.jsx("span", {
                    className:
                      "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent",
                    children: "Touch",
                  }),
                ],
              }),
              O.jsx("div", {
                className:
                  "w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto",
              }),
            ],
          }),
          O.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [
              O.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8 mb-12",
                children: [
                  O.jsxs("div", {
                    className:
                      "p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300",
                    children: [
                      O.jsx("div", {
                        className:
                          "w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 mb-6",
                        children: O.jsx("i", {
                          className: "ri-phone-line text-2xl text-cyan-400",
                        }),
                      }),
                      O.jsx("h3", {
                        className: "text-xl font-bold mb-3",
                        children: "Phone",
                      }),
                      O.jsx("a", {
                        href: "tel:+917025834759",
                        className:
                          "text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer",
                        children: "+91 7025834759",
                      }),
                    ],
                  }),
                  O.jsxs("div", {
                    className:
                      "p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300",
                    children: [
                      O.jsx("div", {
                        className:
                          "w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 mb-6",
                        children: O.jsx("i", {
                          className: "ri-mail-line text-2xl text-cyan-400",
                        }),
                      }),
                      O.jsx("h3", {
                        className: "text-xl font-bold mb-3",
                        children: "Email",
                      }),
                      O.jsx("a", {
                        href: "mailto:alanbaiju21@gmail.com",
                        className:
                          "text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer break-all",
                        children: "alanbaiju21@gmail.com",
                      }),
                    ],
                  }),
                ],
              }),
              O.jsxs("div", {
                className:
                  "p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10",
                children: [
                  O.jsx("h3", {
                    className: "text-2xl font-bold mb-6 text-center",
                    children: "Connect With Me",
                  }),
                  O.jsxs("div", {
                    className: "flex justify-center gap-4",
                    children: [
                      O.jsx("a", {
                        href: "https://www.linkedin.com/in/alan-baiju-b7b321392",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer",
                        children: O.jsx("i", {
                          className: "ri-linkedin-fill text-2xl text-cyan-400",
                        }),
                      }),
                      O.jsx("a", {
                        href: "https://github.com/alanbaijuu21",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer",
                        children: O.jsx("i", {
                          className: "ri-github-fill text-2xl text-cyan-400",
                        }),
                      }),
                      O.jsx("a", {
                        href: "mailto:alanbaiju21@gmail.com",
                        className:
                          "w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer",
                        children: O.jsx("i", {
                          className: "ri-mail-fill text-2xl text-cyan-400",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      O.jsx("div", {
        className: "max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10",
        children: O.jsxs("div", {
          className:
            "flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400",
            children:[]
          // children: [
          //   O.jsx("p", { children: "© 2024 Alan Baiju. All rights reserved." }),
          //   O.jsx("div", {
          //     className: "flex items-center gap-6",
          //     children: O.jsx("a", {
          //       href: "https://readdy.ai/?ref=logo",
          //       target: "_blank",
          //       rel: "noopener noreferrer",
          //       className:
          //         "hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap",
          //       children: "Powered by Readdy",
          //     }),
          //   }),
          // ],
        }),
      }),
    ],
  });
}
function Hv({ scrolled: r }) {
  const u = (s) => {
    const c = document.getElementById(s);
    c && c.scrollIntoView({ behavior: "smooth" });
  };
  return O.jsx("nav", {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      r ? "bg-[#0a0e27]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`,
    children: O.jsx("div", {
      className: "max-w-7xl mx-auto px-6 py-4",
      children: O.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          O.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              O.jsx("img", {
                src: "https://static.readdy.ai/image/8577ee91b71507bd70bba19f9d884f77/ebe3e5030e73bf06b62475d02efff89b.jpeg",
                alt: "Alan Baiju Logo",
                className:
                  "w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50",
              }),
              O.jsx("span", {
                className:
                  "text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
                children: "Alan Baiju",
              }),
            ],
          }),
          O.jsxs("ul", {
            className: "hidden md:flex items-center gap-8 text-sm font-medium",
            children: [
              O.jsx("li", {
                children: O.jsx("button", {
                  onClick: () => u("home"),
                  className:
                    "hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer",
                  children: "Home",
                }),
              }),
              O.jsx("li", {
                children: O.jsx("button", {
                  onClick: () => u("services"),
                  className:
                    "hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer",
                  children: "Services",
                }),
              }),
              O.jsx("li", {
                children: O.jsx("button", {
                  onClick: () => u("resume"),
                  className:
                    "hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer",
                  children: "Resume",
                }),
              }),
              O.jsx("li", {
                children: O.jsx("button", {
                  onClick: () => u("portfolio"),
                  className:
                    "hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer",
                  children: "Portfolio",
                }),
              }),
              O.jsx("li", {
                children: O.jsx("button", {
                  onClick: () => u("contact"),
                  className:
                    "hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer",
                  children: "Contact",
                }),
              }),
            ],
          }),
          O.jsx("button", {
            className: "md:hidden text-2xl cursor-pointer",
            children: O.jsx("i", { className: "ri-menu-line" }),
          }),
        ],
      }),
    }),
  });
}
function Bv() {
  const [r, u] = L.useState(!1);
  return (
    L.useEffect(() => {
      const s = () => {
        u(window.scrollY > 50);
      };
      return (
        window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
      );
    }, []),
    O.jsxs("div", {
      className:
        "relative min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1147] to-[#0d1b3a] text-white overflow-hidden",
      children: [
        O.jsxs("div", {
          className: "fixed inset-0 pointer-events-none",
          children: [
            O.jsx("div", {
              className:
                "absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl",
            }),
            O.jsx("div", {
              className:
                "absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl",
            }),
            O.jsx("div", {
              className:
                "absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl",
            }),
          ],
        }),
        O.jsx(Hv, { scrolled: r }),
        O.jsx(Dv, {}),
        O.jsx(_v, {}),
        O.jsx(Mv, {}),
        O.jsx(Uv, {}),
        O.jsx(Lv, {}),
      ],
    })
  );
}
const qv = [
  { path: "/", element: O.jsx(Bv, {}) },
  { path: "*", element: O.jsx(Bv, {}) },
];
let zm;
new Promise((r) => {
  zm = r;
});
function Yv() {
  const r = By(qv),
    u = vm();
  return (
    L.useEffect(() => {
      (window.REACT_APP_NAVIGATE = u), zm(window.REACT_APP_NAVIGATE);
    }),
    r
  );
}
function Gv() {
  return O.jsx(_0, {
    i18n: We,
    children: O.jsx(Sv, { basename: "/", children: O.jsx(Yv, {}) }),
  });
}
ty.createRoot(document.getElementById("root")).render(
  O.jsx(L.StrictMode, { children: O.jsx(Gv, {}) })
);
//# sourceMappingURL=index-sNAUS5fV.js.map
