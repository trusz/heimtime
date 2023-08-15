var F0 = Object.defineProperty;
var B0 = (n, i, r) => i in n ? F0(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r;
var ke = (n, i, r) => (B0(n, typeof i != "symbol" ? i + "" : i, r), r);
function Me() {
}
const W0 = (n) => n;
function N0(n, i) {
  for (const r in i)
    n[r] = i[r];
  return (
    /** @type {T & S} */
    n
  );
}
function tc(n) {
  return n();
}
function Vf() {
  return /* @__PURE__ */ Object.create(null);
}
function It(n) {
  n.forEach(tc);
}
function he(n) {
  return typeof n == "function";
}
function Ze(n, i) {
  return n != n ? i == i : n !== i || n && typeof n == "object" || typeof n == "function";
}
function H0(n) {
  return Object.keys(n).length === 0;
}
function Ls(n, ...i) {
  if (n == null) {
    for (const u of i)
      u(void 0);
    return Me;
  }
  const r = n.subscribe(...i);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function yo(n) {
  let i;
  return Ls(n, (r) => i = r)(), i;
}
function k(n, i, r) {
  n.$$.on_destroy.push(Ls(i, r));
}
function Di(n, i, r, u) {
  if (n) {
    const o = nc(n, i, r, u);
    return n[0](o);
  }
}
function nc(n, i, r, u) {
  return n[1] && u ? N0(r.ctx.slice(), n[1](u(i))) : r.ctx;
}
function Ei(n, i, r, u) {
  if (n[2] && u) {
    const o = n[2](u(r));
    if (i.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const a = [], l = Math.max(i.dirty.length, o.length);
      for (let c = 0; c < l; c += 1)
        a[c] = i.dirty[c] | o[c];
      return a;
    }
    return i.dirty | o;
  }
  return i.dirty;
}
function ki(n, i, r, u, o, a) {
  if (o) {
    const l = nc(i, r, u, a);
    n.p(l, o);
  }
}
function Ai(n) {
  if (n.ctx.length > 32) {
    const i = [], r = n.ctx.length / 32;
    for (let u = 0; u < r; u++)
      i[u] = -1;
    return i;
  }
  return -1;
}
function We(n, i, r) {
  return n.set(r), i;
}
function bo(n) {
  return n && he(n.destroy) ? n.destroy : Me;
}
const rc = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function le(n, i) {
  n.appendChild(i);
}
function ue(n, i, r) {
  n.insertBefore(i, r || null);
}
function ie(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function vn(n, i) {
  for (let r = 0; r < n.length; r += 1)
    n[r] && n[r].d(i);
}
function se(n) {
  return document.createElement(n);
}
function kn(n) {
  return document.createTextNode(n);
}
function Ne() {
  return kn(" ");
}
function Ft() {
  return kn("");
}
function ye(n, i, r, u) {
  return n.addEventListener(i, r, u), () => n.removeEventListener(i, r, u);
}
function jf(n) {
  return function(i) {
    return i.preventDefault(), n.call(this, i);
  };
}
function z(n, i, r) {
  r == null ? n.removeAttribute(i) : n.getAttribute(i) !== r && n.setAttribute(i, r);
}
function G0(n) {
  return Array.from(n.childNodes);
}
function kr(n, i) {
  i = "" + i, n.data !== i && (n.data = /** @type {string} */
  i);
}
function Ss(n, i) {
  n.value = i ?? "";
}
function Ds(n, i, r, u) {
  r == null ? n.style.removeProperty(i) : n.style.setProperty(i, r, u ? "important" : "");
}
function $f(n, i, r) {
  n.classList.toggle(i, !!r);
}
function z0(n, i, { bubbles: r = !1, cancelable: u = !1 } = {}) {
  return new CustomEvent(n, { detail: i, bubbles: r, cancelable: u });
}
function or(n, i) {
  return new n(i);
}
let Ii;
function Ti(n) {
  Ii = n;
}
function Ar() {
  if (!Ii)
    throw new Error("Function called outside component initialization");
  return Ii;
}
function x0(n) {
  Ar().$$.before_update.push(n);
}
function ic(n) {
  Ar().$$.on_mount.push(n);
}
function Y0(n) {
  Ar().$$.after_update.push(n);
}
function Co() {
  const n = Ar();
  return (i, r, { cancelable: u = !1 } = {}) => {
    const o = n.$$.callbacks[i];
    if (o) {
      const a = z0(
        /** @type {string} */
        i,
        r,
        { cancelable: u }
      );
      return o.slice().forEach((l) => {
        l.call(n, a);
      }), !a.defaultPrevented;
    }
    return !0;
  };
}
function Os(n, i) {
  return Ar().$$.context.set(n, i), i;
}
function wt(n) {
  return Ar().$$.context.get(n);
}
function sc(n, i) {
  const r = n.$$.callbacks[i.type];
  r && r.slice().forEach((u) => u.call(this, i));
}
const jr = [], en = [];
let $r = [];
const ea = [], uc = /* @__PURE__ */ Promise.resolve();
let ho = !1;
function oc() {
  ho || (ho = !0, uc.then(fc));
}
function lc() {
  return oc(), uc;
}
function _o(n) {
  $r.push(n);
}
const no = /* @__PURE__ */ new Set();
let Qr = 0;
function fc() {
  if (Qr !== 0)
    return;
  const n = Ii;
  do {
    try {
      for (; Qr < jr.length; ) {
        const i = jr[Qr];
        Qr++, Ti(i), q0(i.$$);
      }
    } catch (i) {
      throw jr.length = 0, Qr = 0, i;
    }
    for (Ti(null), jr.length = 0, Qr = 0; en.length; )
      en.pop()();
    for (let i = 0; i < $r.length; i += 1) {
      const r = $r[i];
      no.has(r) || (no.add(r), r());
    }
    $r.length = 0;
  } while (jr.length);
  for (; ea.length; )
    ea.pop()();
  ho = !1, no.clear(), Ti(n);
}
function q0(n) {
  if (n.fragment !== null) {
    n.update(), It(n.before_update);
    const i = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, i), n.after_update.forEach(_o);
  }
}
function K0(n) {
  const i = [], r = [];
  $r.forEach((u) => n.indexOf(u) === -1 ? i.push(u) : r.push(u)), r.forEach((u) => u()), $r = i;
}
const bs = /* @__PURE__ */ new Set();
let Sr;
function ft() {
  Sr = {
    r: 0,
    c: [],
    p: Sr
    // parent group
  };
}
function at() {
  Sr.r || It(Sr.c), Sr = Sr.p;
}
function x(n, i) {
  n && n.i && (bs.delete(n), n.i(i));
}
function j(n, i, r, u) {
  if (n && n.o) {
    if (bs.has(n))
      return;
    bs.add(n), Sr.c.push(() => {
      bs.delete(n), u && (r && n.d(1), u());
    }), n.o(i);
  } else
    u && u();
}
function Ge(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function go(n, i) {
  j(n, 1, 1, () => {
    i.delete(n.key);
  });
}
function po(n, i, r, u, o, a, l, c, _, g, v, C) {
  let w = n.length, T = a.length, E = w;
  const F = {};
  for (; E--; )
    F[n[E].key] = E;
  const R = [], A = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), B = [];
  for (E = T; E--; ) {
    const D = C(o, a, E), Y = r(D);
    let q = l.get(Y);
    q ? u && B.push(() => q.p(D, i)) : (q = g(Y, D), q.c()), A.set(Y, R[E] = q), Y in F && L.set(Y, Math.abs(E - F[Y]));
  }
  const W = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
  function O(D) {
    x(D, 1), D.m(c, v), l.set(D.key, D), v = D.first, T--;
  }
  for (; w && T; ) {
    const D = R[T - 1], Y = n[w - 1], q = D.key, X = Y.key;
    D === Y ? (v = D.first, w--, T--) : A.has(X) ? !l.has(q) || W.has(q) ? O(D) : N.has(X) ? w-- : L.get(q) > L.get(X) ? (N.add(q), O(D)) : (W.add(X), w--) : (_(Y, l), w--);
  }
  for (; w--; ) {
    const D = n[w];
    A.has(D.key) || _(D, l);
  }
  for (; T; )
    O(R[T - 1]);
  return It(B), R;
}
function Oe(n) {
  n && n.c();
}
function Re(n, i, r) {
  const { fragment: u, after_update: o } = n.$$;
  u && u.m(i, r), _o(() => {
    const a = n.$$.on_mount.map(tc).filter(he);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : It(a), n.$$.on_mount = [];
  }), o.forEach(_o);
}
function Ae(n, i) {
  const r = n.$$;
  r.fragment !== null && (K0(r.after_update), It(r.on_destroy), r.fragment && r.fragment.d(i), r.on_destroy = r.fragment = null, r.ctx = []);
}
function X0(n, i) {
  n.$$.dirty[0] === -1 && (jr.push(n), oc(), n.$$.dirty.fill(0)), n.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function rt(n, i, r, u, o, a, l, c = [-1]) {
  const _ = Ii;
  Ti(n);
  const g = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Me,
    not_equal: o,
    bound: Vf(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(i.context || (_ ? _.$$.context : [])),
    // everything else
    callbacks: Vf(),
    dirty: c,
    skip_bound: !1,
    root: i.target || _.$$.root
  };
  l && l(g.root);
  let v = !1;
  if (g.ctx = r ? r(n, i.props || {}, (C, w, ...T) => {
    const E = T.length ? T[0] : w;
    return g.ctx && o(g.ctx[C], g.ctx[C] = E) && (!g.skip_bound && g.bound[C] && g.bound[C](E), v && X0(n, C)), w;
  }) : [], g.update(), v = !0, It(g.before_update), g.fragment = u ? u(g.ctx) : !1, i.target) {
    if (i.hydrate) {
      const C = G0(i.target);
      g.fragment && g.fragment.l(C), C.forEach(ie);
    } else
      g.fragment && g.fragment.c();
    i.intro && x(n.$$.fragment), Re(n, i.target, i.anchor), fc();
  }
  Ti(_);
}
class it {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ke(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ke(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ae(this, 1), this.$destroy = Me;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(i, r) {
    if (!he(r))
      return Me;
    const u = this.$$.callbacks[i] || (this.$$.callbacks[i] = []);
    return u.push(r), () => {
      const o = u.indexOf(r);
      o !== -1 && u.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(i) {
    this.$$set && !H0(i) && (this.$$.skip_bound = !0, this.$$set(i), this.$$.skip_bound = !1);
  }
}
const Z0 = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Z0);
class To {
  constructor(i) {
    ke(this, "id", -1);
    ke(this, "first_name", "");
    ke(this, "last_name", "");
    const r = {
      ...this,
      ...i
    };
    return Object.setPrototypeOf(r, To.prototype), r;
  }
}
class J0 {
  constructor(i, r) {
    ke(this, "api_url");
    this.http = i, this.base_url = r, this.api_url = "employees";
  }
  async fetch_employee(i) {
    const r = this.url_employee(i), u = await this.http.get(r);
    return Q0(u.body);
  }
  url_employee(i) {
    const r = [this.api_url, i].join("/");
    return new URL(r, this.base_url).toString();
  }
}
function Q0(n) {
  return new To({
    id: n.id,
    first_name: n.firstName,
    last_name: n.lastName
  });
}
const Vr = [];
function ac(n, i) {
  return {
    subscribe: vt(n, i).subscribe
  };
}
function vt(n, i = Me) {
  let r;
  const u = /* @__PURE__ */ new Set();
  function o(c) {
    if (Ze(n, c) && (n = c, r)) {
      const _ = !Vr.length;
      for (const g of u)
        g[1](), Vr.push(g, n);
      if (_) {
        for (let g = 0; g < Vr.length; g += 2)
          Vr[g][0](Vr[g + 1]);
        Vr.length = 0;
      }
    }
  }
  function a(c) {
    o(c(n));
  }
  function l(c, _ = Me) {
    const g = [c, _];
    return u.add(g), u.size === 1 && (r = i(o, a) || Me), c(n), () => {
      u.delete(g), u.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: a, subscribe: l };
}
function Yt(n, i, r) {
  const u = !Array.isArray(n), o = u ? [n] : n;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = i.length < 2;
  return ac(r, (l, c) => {
    let _ = !1;
    const g = [];
    let v = 0, C = Me;
    const w = () => {
      if (v)
        return;
      C();
      const E = i(u ? g[0] : g, l, c);
      a ? l(E) : C = he(E) ? E : Me;
    }, T = o.map(
      (E, F) => Ls(
        E,
        (R) => {
          g[F] = R, v &= ~(1 << F), _ && w();
        },
        () => {
          v |= 1 << F;
        }
      )
    );
    return _ = !0, w(), function() {
      It(T), C(), _ = !1;
    };
  });
}
class V0 {
  constructor() {
    ke(this, "_store", vt(/* @__PURE__ */ new Map()));
    ke(this, "store", Yt(this._store, (i) => i));
  }
  set_projects(i, r) {
    this._store.update((u) => u.set(i, r));
  }
  create_project(i, r) {
    this._store.update((u) => {
      const o = u.get(i) ?? [];
      return u.set(i, [...o, r]);
    });
  }
}
const cc = {};
function j0() {
  Os(cc, new V0());
}
function hc() {
  const n = wt(cc);
  return n || console.warn({ level: "warn", msg: "project context has not been initalized" }), n;
}
function $0(n, i, r = []) {
  return {
    id: n,
    name: i,
    tasks: r
  };
}
function em(n, i) {
  return {
    id: n,
    name: i
  };
}
const Es = Intl.DateTimeFormat("de-DE", { timeStyle: "short" }).format;
Intl.DateTimeFormat("de-DE", { dateStyle: "short" }).format;
function Gn(n) {
  const i = n.getFullYear(), r = String(n.getMonth() + 1).padStart(2, "0"), u = String(n.getDate()).padStart(2, "0");
  return `${i}-${r}-${u}`;
}
function ta(n, i) {
  const r = new Date(n);
  return r.setDate(r.getDate() + i), r;
}
function tm(n, i = 1) {
  const r = n.getDay(), u = new Date(n), o = r >= i ? r - i : 6 - r;
  return u.setDate(n.getDate() - o), u.setHours(0, 0, 0, 0), u;
}
function nm(n, i) {
  return Math.floor((i.getTime() - n.getTime()) / 1e3 / 60);
}
function rm(n) {
  const i = Math.floor(n / 60), r = n % 60;
  return `${i}h ${r}min`;
}
class ro {
  constructor(i, r, u) {
    ke(this, "api_url");
    this.http = i, this.base_url = r, this.employee_id = u, this.api_url = `employees/${u}/projects`;
  }
  async fetch_projects(i) {
    const r = this.url_projects(i), u = await this.http.get(r);
    return im(u.body);
  }
  url_projects(i) {
    const r = new URL(this.api_url, this.base_url);
    return r.searchParams.set("date", Gn(i)), r.toString();
  }
}
function im(n) {
  const i = [];
  for (const r of n.projects) {
    const u = {
      id: r.id,
      name: r.name,
      tasks: []
    };
    for (const o of r.tasks) {
      const a = {
        id: o.id,
        name: o.name
      };
      u.tasks.push(a);
    }
    u.tasks.sort((o, a) => o.id > a.id ? 1 : o.id < a.id ? -1 : 0), i.push(u);
  }
  return i;
}
var Ci = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ks = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ks.exports;
(function(n, i) {
  (function() {
    var r, u = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", _ = "__lodash_hash_undefined__", g = 500, v = "__lodash_placeholder__", C = 1, w = 2, T = 4, E = 1, F = 2, R = 1, A = 2, L = 4, B = 8, W = 16, N = 32, O = 64, D = 128, Y = 256, q = 512, X = 30, K = "...", $ = 800, de = 16, He = 1, me = 2, De = 3, ze = 1 / 0, Q = 9007199254740991, oe = 17976931348623157e292, te = 0 / 0, Le = 4294967295, bt = Le - 1, Je = Le >>> 1, Ke = [
      ["ary", D],
      ["bind", R],
      ["bindKey", A],
      ["curry", B],
      ["curryRight", W],
      ["flip", q],
      ["partial", N],
      ["partialRight", O],
      ["rearg", Y]
    ], ct = "[object Arguments]", ht = "[object Array]", _t = "[object AsyncFunction]", $e = "[object Boolean]", V = "[object Date]", Ie = "[object DOMException]", Qe = "[object Error]", et = "[object Function]", Bt = "[object GeneratorFunction]", dt = "[object Map]", ne = "[object Number]", Rt = "[object Null]", gt = "[object Object]", lr = "[object Promise]", Ir = "[object Proxy]", wn = "[object RegExp]", J = "[object Set]", Wt = "[object String]", Lt = "[object Symbol]", Rr = "[object Undefined]", st = "[object WeakMap]", cn = "[object WeakSet]", Te = "[object ArrayBuffer]", qt = "[object DataView]", Kt = "[object Float32Array]", fr = "[object Float64Array]", St = "[object Int8Array]", yn = "[object Int16Array]", ar = "[object Int32Array]", cr = "[object Uint8Array]", tn = "[object Uint8ClampedArray]", Ve = "[object Uint16Array]", bn = "[object Uint32Array]", Cn = /\b__p \+= '';/g, ri = /\b(__p \+=) '' \+/g, Lr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, An = /&(?:amp|lt|gt|quot|#39);/g, hn = /[&<>"']/g, ii = RegExp(An.source), Tn = RegExp(hn.source), Or = /<%-([\s\S]+?)%>/g, Pr = /<%([\s\S]+?)%>/g, Mr = /<%=([\s\S]+?)%>/g, Xn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hr = /^\w*$/, Ms = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, si = /[\\^$.*+?()[\]{}|]/g, Li = RegExp(si.source), In = /^\s+/, Us = /\s/, Fs = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Bs = /\{\n\/\* \[wrapped with (.+)\] \*/, Ws = /,? & /, Oi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ns = /[()=,{}\[\]\/\s]/, Hs = /\\(\\)?/g, Pi = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ui = /\w*$/, Gs = /^[-+]0x[0-9a-f]+$/i, zs = /^0b[01]+$/i, _r = /^\[object .+?Constructor\]$/, xs = /^0o[0-7]+$/i, Zn = /^(?:0|[1-9]\d*)$/, Jn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Rn = /($^)/, Ys = /['\n\r\u2028\u2029\\]/g, Ur = "\\ud800-\\udfff", qs = "\\u0300-\\u036f", ko = "\\ufe20-\\ufe2f", H = "\\u20d0-\\u20ff", _e = qs + ko + H, ut = "\\u2700-\\u27bf", Ot = "a-z\\xdf-\\xf6\\xf8-\\xff", dr = "\\xac\\xb1\\xd7\\xf7", Pc = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Mc = "\\u2000-\\u206f", Uc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ao = "A-Z\\xc0-\\xd6\\xd8-\\xde", Io = "\\ufe0e\\ufe0f", Ro = dr + Pc + Mc + Uc, Ks = "['’]", Fc = "[" + Ur + "]", Lo = "[" + Ro + "]", Mi = "[" + _e + "]", Oo = "\\d+", Bc = "[" + ut + "]", Po = "[" + Ot + "]", Mo = "[^" + Ur + Ro + Oo + ut + Ot + Ao + "]", Xs = "\\ud83c[\\udffb-\\udfff]", Wc = "(?:" + Mi + "|" + Xs + ")", Uo = "[^" + Ur + "]", Zs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Js = "[\\ud800-\\udbff][\\udc00-\\udfff]", Fr = "[" + Ao + "]", Fo = "\\u200d", Bo = "(?:" + Po + "|" + Mo + ")", Nc = "(?:" + Fr + "|" + Mo + ")", Wo = "(?:" + Ks + "(?:d|ll|m|re|s|t|ve))?", No = "(?:" + Ks + "(?:D|LL|M|RE|S|T|VE))?", Ho = Wc + "?", Go = "[" + Io + "]?", Hc = "(?:" + Fo + "(?:" + [Uo, Zs, Js].join("|") + ")" + Go + Ho + ")*", Gc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", zc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", zo = Go + Ho + Hc, xc = "(?:" + [Bc, Zs, Js].join("|") + ")" + zo, Yc = "(?:" + [Uo + Mi + "?", Mi, Zs, Js, Fc].join("|") + ")", qc = RegExp(Ks, "g"), Kc = RegExp(Mi, "g"), Qs = RegExp(Xs + "(?=" + Xs + ")|" + Yc + zo, "g"), Xc = RegExp([
      Fr + "?" + Po + "+" + Wo + "(?=" + [Lo, Fr, "$"].join("|") + ")",
      Nc + "+" + No + "(?=" + [Lo, Fr + Bo, "$"].join("|") + ")",
      Fr + "?" + Bo + "+" + Wo,
      Fr + "+" + No,
      zc,
      Gc,
      Oo,
      xc
    ].join("|"), "g"), Zc = RegExp("[" + Fo + Ur + _e + Io + "]"), Jc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Qc = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Vc = -1, qe = {};
    qe[Kt] = qe[fr] = qe[St] = qe[yn] = qe[ar] = qe[cr] = qe[tn] = qe[Ve] = qe[bn] = !0, qe[ct] = qe[ht] = qe[Te] = qe[$e] = qe[qt] = qe[V] = qe[Qe] = qe[et] = qe[dt] = qe[ne] = qe[gt] = qe[wn] = qe[J] = qe[Wt] = qe[st] = !1;
    var Ye = {};
    Ye[ct] = Ye[ht] = Ye[Te] = Ye[qt] = Ye[$e] = Ye[V] = Ye[Kt] = Ye[fr] = Ye[St] = Ye[yn] = Ye[ar] = Ye[dt] = Ye[ne] = Ye[gt] = Ye[wn] = Ye[J] = Ye[Wt] = Ye[Lt] = Ye[cr] = Ye[tn] = Ye[Ve] = Ye[bn] = !0, Ye[Qe] = Ye[et] = Ye[st] = !1;
    var jc = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, $c = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, eh = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, th = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, nh = parseFloat, rh = parseInt, xo = typeof Ci == "object" && Ci && Ci.Object === Object && Ci, ih = typeof self == "object" && self && self.Object === Object && self, Ct = xo || ih || Function("return this")(), Vs = i && !i.nodeType && i, gr = Vs && !0 && n && !n.nodeType && n, Yo = gr && gr.exports === Vs, js = Yo && xo.process, nn = function() {
      try {
        var b = gr && gr.require && gr.require("util").types;
        return b || js && js.binding && js.binding("util");
      } catch {
      }
    }(), qo = nn && nn.isArrayBuffer, Ko = nn && nn.isDate, Xo = nn && nn.isMap, Zo = nn && nn.isRegExp, Jo = nn && nn.isSet, Qo = nn && nn.isTypedArray;
    function Xt(b, P, I) {
      switch (I.length) {
        case 0:
          return b.call(P);
        case 1:
          return b.call(P, I[0]);
        case 2:
          return b.call(P, I[0], I[1]);
        case 3:
          return b.call(P, I[0], I[1], I[2]);
      }
      return b.apply(P, I);
    }
    function sh(b, P, I, ee) {
      for (var ge = -1, Pe = b == null ? 0 : b.length; ++ge < Pe; ) {
        var pt = b[ge];
        P(ee, pt, I(pt), b);
      }
      return ee;
    }
    function rn(b, P) {
      for (var I = -1, ee = b == null ? 0 : b.length; ++I < ee && P(b[I], I, b) !== !1; )
        ;
      return b;
    }
    function uh(b, P) {
      for (var I = b == null ? 0 : b.length; I-- && P(b[I], I, b) !== !1; )
        ;
      return b;
    }
    function Vo(b, P) {
      for (var I = -1, ee = b == null ? 0 : b.length; ++I < ee; )
        if (!P(b[I], I, b))
          return !1;
      return !0;
    }
    function Qn(b, P) {
      for (var I = -1, ee = b == null ? 0 : b.length, ge = 0, Pe = []; ++I < ee; ) {
        var pt = b[I];
        P(pt, I, b) && (Pe[ge++] = pt);
      }
      return Pe;
    }
    function Ui(b, P) {
      var I = b == null ? 0 : b.length;
      return !!I && Br(b, P, 0) > -1;
    }
    function $s(b, P, I) {
      for (var ee = -1, ge = b == null ? 0 : b.length; ++ee < ge; )
        if (I(P, b[ee]))
          return !0;
      return !1;
    }
    function Xe(b, P) {
      for (var I = -1, ee = b == null ? 0 : b.length, ge = Array(ee); ++I < ee; )
        ge[I] = P(b[I], I, b);
      return ge;
    }
    function Vn(b, P) {
      for (var I = -1, ee = P.length, ge = b.length; ++I < ee; )
        b[ge + I] = P[I];
      return b;
    }
    function eu(b, P, I, ee) {
      var ge = -1, Pe = b == null ? 0 : b.length;
      for (ee && Pe && (I = b[++ge]); ++ge < Pe; )
        I = P(I, b[ge], ge, b);
      return I;
    }
    function oh(b, P, I, ee) {
      var ge = b == null ? 0 : b.length;
      for (ee && ge && (I = b[--ge]); ge--; )
        I = P(I, b[ge], ge, b);
      return I;
    }
    function tu(b, P) {
      for (var I = -1, ee = b == null ? 0 : b.length; ++I < ee; )
        if (P(b[I], I, b))
          return !0;
      return !1;
    }
    var lh = nu("length");
    function fh(b) {
      return b.split("");
    }
    function ah(b) {
      return b.match(Oi) || [];
    }
    function jo(b, P, I) {
      var ee;
      return I(b, function(ge, Pe, pt) {
        if (P(ge, Pe, pt))
          return ee = Pe, !1;
      }), ee;
    }
    function Fi(b, P, I, ee) {
      for (var ge = b.length, Pe = I + (ee ? 1 : -1); ee ? Pe-- : ++Pe < ge; )
        if (P(b[Pe], Pe, b))
          return Pe;
      return -1;
    }
    function Br(b, P, I) {
      return P === P ? Ch(b, P, I) : Fi(b, $o, I);
    }
    function ch(b, P, I, ee) {
      for (var ge = I - 1, Pe = b.length; ++ge < Pe; )
        if (ee(b[ge], P))
          return ge;
      return -1;
    }
    function $o(b) {
      return b !== b;
    }
    function el(b, P) {
      var I = b == null ? 0 : b.length;
      return I ? iu(b, P) / I : te;
    }
    function nu(b) {
      return function(P) {
        return P == null ? r : P[b];
      };
    }
    function ru(b) {
      return function(P) {
        return b == null ? r : b[P];
      };
    }
    function tl(b, P, I, ee, ge) {
      return ge(b, function(Pe, pt, xe) {
        I = ee ? (ee = !1, Pe) : P(I, Pe, pt, xe);
      }), I;
    }
    function hh(b, P) {
      var I = b.length;
      for (b.sort(P); I--; )
        b[I] = b[I].value;
      return b;
    }
    function iu(b, P) {
      for (var I, ee = -1, ge = b.length; ++ee < ge; ) {
        var Pe = P(b[ee]);
        Pe !== r && (I = I === r ? Pe : I + Pe);
      }
      return I;
    }
    function su(b, P) {
      for (var I = -1, ee = Array(b); ++I < b; )
        ee[I] = P(I);
      return ee;
    }
    function _h(b, P) {
      return Xe(P, function(I) {
        return [I, b[I]];
      });
    }
    function nl(b) {
      return b && b.slice(0, ul(b) + 1).replace(In, "");
    }
    function Zt(b) {
      return function(P) {
        return b(P);
      };
    }
    function uu(b, P) {
      return Xe(P, function(I) {
        return b[I];
      });
    }
    function oi(b, P) {
      return b.has(P);
    }
    function rl(b, P) {
      for (var I = -1, ee = b.length; ++I < ee && Br(P, b[I], 0) > -1; )
        ;
      return I;
    }
    function il(b, P) {
      for (var I = b.length; I-- && Br(P, b[I], 0) > -1; )
        ;
      return I;
    }
    function dh(b, P) {
      for (var I = b.length, ee = 0; I--; )
        b[I] === P && ++ee;
      return ee;
    }
    var gh = ru(jc), ph = ru($c);
    function mh(b) {
      return "\\" + th[b];
    }
    function vh(b, P) {
      return b == null ? r : b[P];
    }
    function Wr(b) {
      return Zc.test(b);
    }
    function wh(b) {
      return Jc.test(b);
    }
    function yh(b) {
      for (var P, I = []; !(P = b.next()).done; )
        I.push(P.value);
      return I;
    }
    function ou(b) {
      var P = -1, I = Array(b.size);
      return b.forEach(function(ee, ge) {
        I[++P] = [ge, ee];
      }), I;
    }
    function sl(b, P) {
      return function(I) {
        return b(P(I));
      };
    }
    function jn(b, P) {
      for (var I = -1, ee = b.length, ge = 0, Pe = []; ++I < ee; ) {
        var pt = b[I];
        (pt === P || pt === v) && (b[I] = v, Pe[ge++] = I);
      }
      return Pe;
    }
    function Bi(b) {
      var P = -1, I = Array(b.size);
      return b.forEach(function(ee) {
        I[++P] = ee;
      }), I;
    }
    function bh(b) {
      var P = -1, I = Array(b.size);
      return b.forEach(function(ee) {
        I[++P] = [ee, ee];
      }), I;
    }
    function Ch(b, P, I) {
      for (var ee = I - 1, ge = b.length; ++ee < ge; )
        if (b[ee] === P)
          return ee;
      return -1;
    }
    function Th(b, P, I) {
      for (var ee = I + 1; ee--; )
        if (b[ee] === P)
          return ee;
      return ee;
    }
    function Nr(b) {
      return Wr(b) ? Dh(b) : lh(b);
    }
    function _n(b) {
      return Wr(b) ? Eh(b) : fh(b);
    }
    function ul(b) {
      for (var P = b.length; P-- && Us.test(b.charAt(P)); )
        ;
      return P;
    }
    var Sh = ru(eh);
    function Dh(b) {
      for (var P = Qs.lastIndex = 0; Qs.test(b); )
        ++P;
      return P;
    }
    function Eh(b) {
      return b.match(Qs) || [];
    }
    function kh(b) {
      return b.match(Xc) || [];
    }
    var Ah = function b(P) {
      P = P == null ? Ct : Hr.defaults(Ct.Object(), P, Hr.pick(Ct, Qc));
      var I = P.Array, ee = P.Date, ge = P.Error, Pe = P.Function, pt = P.Math, xe = P.Object, lu = P.RegExp, Ih = P.String, sn = P.TypeError, Wi = I.prototype, Rh = Pe.prototype, Gr = xe.prototype, Ni = P["__core-js_shared__"], Hi = Rh.toString, Be = Gr.hasOwnProperty, Lh = 0, ol = function() {
        var e = /[^.]+$/.exec(Ni && Ni.keys && Ni.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Gi = Gr.toString, Oh = Hi.call(xe), Ph = Ct._, Mh = lu(
        "^" + Hi.call(Be).replace(si, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), zi = Yo ? P.Buffer : r, $n = P.Symbol, xi = P.Uint8Array, ll = zi ? zi.allocUnsafe : r, Yi = sl(xe.getPrototypeOf, xe), fl = xe.create, al = Gr.propertyIsEnumerable, qi = Wi.splice, cl = $n ? $n.isConcatSpreadable : r, li = $n ? $n.iterator : r, pr = $n ? $n.toStringTag : r, Ki = function() {
        try {
          var e = br(xe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Uh = P.clearTimeout !== Ct.clearTimeout && P.clearTimeout, Fh = ee && ee.now !== Ct.Date.now && ee.now, Bh = P.setTimeout !== Ct.setTimeout && P.setTimeout, Xi = pt.ceil, Zi = pt.floor, fu = xe.getOwnPropertySymbols, Wh = zi ? zi.isBuffer : r, hl = P.isFinite, Nh = Wi.join, Hh = sl(xe.keys, xe), mt = pt.max, Dt = pt.min, Gh = ee.now, zh = P.parseInt, _l = pt.random, xh = Wi.reverse, au = br(P, "DataView"), fi = br(P, "Map"), cu = br(P, "Promise"), zr = br(P, "Set"), ai = br(P, "WeakMap"), ci = br(xe, "create"), Ji = ai && new ai(), xr = {}, Yh = Cr(au), qh = Cr(fi), Kh = Cr(cu), Xh = Cr(zr), Zh = Cr(ai), Qi = $n ? $n.prototype : r, hi = Qi ? Qi.valueOf : r, dl = Qi ? Qi.toString : r;
      function d(e) {
        if (tt(e) && !pe(e) && !(e instanceof Se)) {
          if (e instanceof un)
            return e;
          if (Be.call(e, "__wrapped__"))
            return pf(e);
        }
        return new un(e);
      }
      var Yr = function() {
        function e() {
        }
        return function(t) {
          if (!je(t))
            return {};
          if (fl)
            return fl(t);
          e.prototype = t;
          var s = new e();
          return e.prototype = r, s;
        };
      }();
      function Vi() {
      }
      function un(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      d.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Or,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Pr,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Mr,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: d
        }
      }, d.prototype = Vi.prototype, d.prototype.constructor = d, un.prototype = Yr(Vi.prototype), un.prototype.constructor = un;
      function Se(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Le, this.__views__ = [];
      }
      function Jh() {
        var e = new Se(this.__wrapped__);
        return e.__actions__ = Nt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Nt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Nt(this.__views__), e;
      }
      function Qh() {
        if (this.__filtered__) {
          var e = new Se(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Vh() {
        var e = this.__wrapped__.value(), t = this.__dir__, s = pe(e), f = t < 0, h = s ? e.length : 0, p = fd(0, h, this.__views__), m = p.start, y = p.end, S = y - m, M = f ? y : m - 1, U = this.__iteratees__, G = U.length, Z = 0, re = Dt(S, this.__takeCount__);
        if (!s || !f && h == S && re == S)
          return Wl(e, this.__actions__);
        var ae = [];
        e:
          for (; S-- && Z < re; ) {
            M += t;
            for (var we = -1, ce = e[M]; ++we < G; ) {
              var Ce = U[we], Ee = Ce.iteratee, Vt = Ce.type, Ut = Ee(ce);
              if (Vt == me)
                ce = Ut;
              else if (!Ut) {
                if (Vt == He)
                  continue e;
                break e;
              }
            }
            ae[Z++] = ce;
          }
        return ae;
      }
      Se.prototype = Yr(Vi.prototype), Se.prototype.constructor = Se;
      function mr(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var f = e[t];
          this.set(f[0], f[1]);
        }
      }
      function jh() {
        this.__data__ = ci ? ci(null) : {}, this.size = 0;
      }
      function $h(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function e_(e) {
        var t = this.__data__;
        if (ci) {
          var s = t[e];
          return s === _ ? r : s;
        }
        return Be.call(t, e) ? t[e] : r;
      }
      function t_(e) {
        var t = this.__data__;
        return ci ? t[e] !== r : Be.call(t, e);
      }
      function n_(e, t) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = ci && t === r ? _ : t, this;
      }
      mr.prototype.clear = jh, mr.prototype.delete = $h, mr.prototype.get = e_, mr.prototype.has = t_, mr.prototype.set = n_;
      function Ln(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var f = e[t];
          this.set(f[0], f[1]);
        }
      }
      function r_() {
        this.__data__ = [], this.size = 0;
      }
      function i_(e) {
        var t = this.__data__, s = ji(t, e);
        if (s < 0)
          return !1;
        var f = t.length - 1;
        return s == f ? t.pop() : qi.call(t, s, 1), --this.size, !0;
      }
      function s_(e) {
        var t = this.__data__, s = ji(t, e);
        return s < 0 ? r : t[s][1];
      }
      function u_(e) {
        return ji(this.__data__, e) > -1;
      }
      function o_(e, t) {
        var s = this.__data__, f = ji(s, e);
        return f < 0 ? (++this.size, s.push([e, t])) : s[f][1] = t, this;
      }
      Ln.prototype.clear = r_, Ln.prototype.delete = i_, Ln.prototype.get = s_, Ln.prototype.has = u_, Ln.prototype.set = o_;
      function On(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var f = e[t];
          this.set(f[0], f[1]);
        }
      }
      function l_() {
        this.size = 0, this.__data__ = {
          hash: new mr(),
          map: new (fi || Ln)(),
          string: new mr()
        };
      }
      function f_(e) {
        var t = as(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function a_(e) {
        return as(this, e).get(e);
      }
      function c_(e) {
        return as(this, e).has(e);
      }
      function h_(e, t) {
        var s = as(this, e), f = s.size;
        return s.set(e, t), this.size += s.size == f ? 0 : 1, this;
      }
      On.prototype.clear = l_, On.prototype.delete = f_, On.prototype.get = a_, On.prototype.has = c_, On.prototype.set = h_;
      function vr(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.__data__ = new On(); ++t < s; )
          this.add(e[t]);
      }
      function __(e) {
        return this.__data__.set(e, _), this;
      }
      function d_(e) {
        return this.__data__.has(e);
      }
      vr.prototype.add = vr.prototype.push = __, vr.prototype.has = d_;
      function dn(e) {
        var t = this.__data__ = new Ln(e);
        this.size = t.size;
      }
      function g_() {
        this.__data__ = new Ln(), this.size = 0;
      }
      function p_(e) {
        var t = this.__data__, s = t.delete(e);
        return this.size = t.size, s;
      }
      function m_(e) {
        return this.__data__.get(e);
      }
      function v_(e) {
        return this.__data__.has(e);
      }
      function w_(e, t) {
        var s = this.__data__;
        if (s instanceof Ln) {
          var f = s.__data__;
          if (!fi || f.length < o - 1)
            return f.push([e, t]), this.size = ++s.size, this;
          s = this.__data__ = new On(f);
        }
        return s.set(e, t), this.size = s.size, this;
      }
      dn.prototype.clear = g_, dn.prototype.delete = p_, dn.prototype.get = m_, dn.prototype.has = v_, dn.prototype.set = w_;
      function gl(e, t) {
        var s = pe(e), f = !s && Tr(e), h = !s && !f && ir(e), p = !s && !f && !h && Zr(e), m = s || f || h || p, y = m ? su(e.length, Ih) : [], S = y.length;
        for (var M in e)
          (t || Be.call(e, M)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
          (M == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (M == "offset" || M == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          p && (M == "buffer" || M == "byteLength" || M == "byteOffset") || // Skip index properties.
          Fn(M, S))) && y.push(M);
        return y;
      }
      function pl(e) {
        var t = e.length;
        return t ? e[Cu(0, t - 1)] : r;
      }
      function y_(e, t) {
        return cs(Nt(e), wr(t, 0, e.length));
      }
      function b_(e) {
        return cs(Nt(e));
      }
      function hu(e, t, s) {
        (s !== r && !gn(e[t], s) || s === r && !(t in e)) && Pn(e, t, s);
      }
      function _i(e, t, s) {
        var f = e[t];
        (!(Be.call(e, t) && gn(f, s)) || s === r && !(t in e)) && Pn(e, t, s);
      }
      function ji(e, t) {
        for (var s = e.length; s--; )
          if (gn(e[s][0], t))
            return s;
        return -1;
      }
      function C_(e, t, s, f) {
        return er(e, function(h, p, m) {
          t(f, h, s(h), m);
        }), f;
      }
      function ml(e, t) {
        return e && Dn(t, yt(t), e);
      }
      function T_(e, t) {
        return e && Dn(t, Gt(t), e);
      }
      function Pn(e, t, s) {
        t == "__proto__" && Ki ? Ki(e, t, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : e[t] = s;
      }
      function _u(e, t) {
        for (var s = -1, f = t.length, h = I(f), p = e == null; ++s < f; )
          h[s] = p ? r : Xu(e, t[s]);
        return h;
      }
      function wr(e, t, s) {
        return e === e && (s !== r && (e = e <= s ? e : s), t !== r && (e = e >= t ? e : t)), e;
      }
      function on(e, t, s, f, h, p) {
        var m, y = t & C, S = t & w, M = t & T;
        if (s && (m = h ? s(e, f, h, p) : s(e)), m !== r)
          return m;
        if (!je(e))
          return e;
        var U = pe(e);
        if (U) {
          if (m = cd(e), !y)
            return Nt(e, m);
        } else {
          var G = Et(e), Z = G == et || G == Bt;
          if (ir(e))
            return Gl(e, y);
          if (G == gt || G == ct || Z && !h) {
            if (m = S || Z ? {} : of(e), !y)
              return S ? ed(e, T_(m, e)) : $_(e, ml(m, e));
          } else {
            if (!Ye[G])
              return h ? e : {};
            m = hd(e, G, y);
          }
        }
        p || (p = new dn());
        var re = p.get(e);
        if (re)
          return re;
        p.set(e, m), Ff(e) ? e.forEach(function(ce) {
          m.add(on(ce, t, s, ce, e, p));
        }) : Mf(e) && e.forEach(function(ce, Ce) {
          m.set(Ce, on(ce, t, s, Ce, e, p));
        });
        var ae = M ? S ? Pu : Ou : S ? Gt : yt, we = U ? r : ae(e);
        return rn(we || e, function(ce, Ce) {
          we && (Ce = ce, ce = e[Ce]), _i(m, Ce, on(ce, t, s, Ce, e, p));
        }), m;
      }
      function S_(e) {
        var t = yt(e);
        return function(s) {
          return vl(s, e, t);
        };
      }
      function vl(e, t, s) {
        var f = s.length;
        if (e == null)
          return !f;
        for (e = xe(e); f--; ) {
          var h = s[f], p = t[h], m = e[h];
          if (m === r && !(h in e) || !p(m))
            return !1;
        }
        return !0;
      }
      function wl(e, t, s) {
        if (typeof e != "function")
          throw new sn(l);
        return yi(function() {
          e.apply(r, s);
        }, t);
      }
      function di(e, t, s, f) {
        var h = -1, p = Ui, m = !0, y = e.length, S = [], M = t.length;
        if (!y)
          return S;
        s && (t = Xe(t, Zt(s))), f ? (p = $s, m = !1) : t.length >= o && (p = oi, m = !1, t = new vr(t));
        e:
          for (; ++h < y; ) {
            var U = e[h], G = s == null ? U : s(U);
            if (U = f || U !== 0 ? U : 0, m && G === G) {
              for (var Z = M; Z--; )
                if (t[Z] === G)
                  continue e;
              S.push(U);
            } else
              p(t, G, f) || S.push(U);
          }
        return S;
      }
      var er = Kl(Sn), yl = Kl(gu, !0);
      function D_(e, t) {
        var s = !0;
        return er(e, function(f, h, p) {
          return s = !!t(f, h, p), s;
        }), s;
      }
      function $i(e, t, s) {
        for (var f = -1, h = e.length; ++f < h; ) {
          var p = e[f], m = t(p);
          if (m != null && (y === r ? m === m && !Qt(m) : s(m, y)))
            var y = m, S = p;
        }
        return S;
      }
      function E_(e, t, s, f) {
        var h = e.length;
        for (s = ve(s), s < 0 && (s = -s > h ? 0 : h + s), f = f === r || f > h ? h : ve(f), f < 0 && (f += h), f = s > f ? 0 : Wf(f); s < f; )
          e[s++] = t;
        return e;
      }
      function bl(e, t) {
        var s = [];
        return er(e, function(f, h, p) {
          t(f, h, p) && s.push(f);
        }), s;
      }
      function Tt(e, t, s, f, h) {
        var p = -1, m = e.length;
        for (s || (s = dd), h || (h = []); ++p < m; ) {
          var y = e[p];
          t > 0 && s(y) ? t > 1 ? Tt(y, t - 1, s, f, h) : Vn(h, y) : f || (h[h.length] = y);
        }
        return h;
      }
      var du = Xl(), Cl = Xl(!0);
      function Sn(e, t) {
        return e && du(e, t, yt);
      }
      function gu(e, t) {
        return e && Cl(e, t, yt);
      }
      function es(e, t) {
        return Qn(t, function(s) {
          return Bn(e[s]);
        });
      }
      function yr(e, t) {
        t = nr(t, e);
        for (var s = 0, f = t.length; e != null && s < f; )
          e = e[En(t[s++])];
        return s && s == f ? e : r;
      }
      function Tl(e, t, s) {
        var f = t(e);
        return pe(e) ? f : Vn(f, s(e));
      }
      function Pt(e) {
        return e == null ? e === r ? Rr : Rt : pr && pr in xe(e) ? ld(e) : bd(e);
      }
      function pu(e, t) {
        return e > t;
      }
      function k_(e, t) {
        return e != null && Be.call(e, t);
      }
      function A_(e, t) {
        return e != null && t in xe(e);
      }
      function I_(e, t, s) {
        return e >= Dt(t, s) && e < mt(t, s);
      }
      function mu(e, t, s) {
        for (var f = s ? $s : Ui, h = e[0].length, p = e.length, m = p, y = I(p), S = 1 / 0, M = []; m--; ) {
          var U = e[m];
          m && t && (U = Xe(U, Zt(t))), S = Dt(U.length, S), y[m] = !s && (t || h >= 120 && U.length >= 120) ? new vr(m && U) : r;
        }
        U = e[0];
        var G = -1, Z = y[0];
        e:
          for (; ++G < h && M.length < S; ) {
            var re = U[G], ae = t ? t(re) : re;
            if (re = s || re !== 0 ? re : 0, !(Z ? oi(Z, ae) : f(M, ae, s))) {
              for (m = p; --m; ) {
                var we = y[m];
                if (!(we ? oi(we, ae) : f(e[m], ae, s)))
                  continue e;
              }
              Z && Z.push(ae), M.push(re);
            }
          }
        return M;
      }
      function R_(e, t, s, f) {
        return Sn(e, function(h, p, m) {
          t(f, s(h), p, m);
        }), f;
      }
      function gi(e, t, s) {
        t = nr(t, e), e = cf(e, t);
        var f = e == null ? e : e[En(fn(t))];
        return f == null ? r : Xt(f, e, s);
      }
      function Sl(e) {
        return tt(e) && Pt(e) == ct;
      }
      function L_(e) {
        return tt(e) && Pt(e) == Te;
      }
      function O_(e) {
        return tt(e) && Pt(e) == V;
      }
      function pi(e, t, s, f, h) {
        return e === t ? !0 : e == null || t == null || !tt(e) && !tt(t) ? e !== e && t !== t : P_(e, t, s, f, pi, h);
      }
      function P_(e, t, s, f, h, p) {
        var m = pe(e), y = pe(t), S = m ? ht : Et(e), M = y ? ht : Et(t);
        S = S == ct ? gt : S, M = M == ct ? gt : M;
        var U = S == gt, G = M == gt, Z = S == M;
        if (Z && ir(e)) {
          if (!ir(t))
            return !1;
          m = !0, U = !1;
        }
        if (Z && !U)
          return p || (p = new dn()), m || Zr(e) ? rf(e, t, s, f, h, p) : ud(e, t, S, s, f, h, p);
        if (!(s & E)) {
          var re = U && Be.call(e, "__wrapped__"), ae = G && Be.call(t, "__wrapped__");
          if (re || ae) {
            var we = re ? e.value() : e, ce = ae ? t.value() : t;
            return p || (p = new dn()), h(we, ce, s, f, p);
          }
        }
        return Z ? (p || (p = new dn()), od(e, t, s, f, h, p)) : !1;
      }
      function M_(e) {
        return tt(e) && Et(e) == dt;
      }
      function vu(e, t, s, f) {
        var h = s.length, p = h, m = !f;
        if (e == null)
          return !p;
        for (e = xe(e); h--; ) {
          var y = s[h];
          if (m && y[2] ? y[1] !== e[y[0]] : !(y[0] in e))
            return !1;
        }
        for (; ++h < p; ) {
          y = s[h];
          var S = y[0], M = e[S], U = y[1];
          if (m && y[2]) {
            if (M === r && !(S in e))
              return !1;
          } else {
            var G = new dn();
            if (f)
              var Z = f(M, U, S, e, t, G);
            if (!(Z === r ? pi(U, M, E | F, f, G) : Z))
              return !1;
          }
        }
        return !0;
      }
      function Dl(e) {
        if (!je(e) || pd(e))
          return !1;
        var t = Bn(e) ? Mh : _r;
        return t.test(Cr(e));
      }
      function U_(e) {
        return tt(e) && Pt(e) == wn;
      }
      function F_(e) {
        return tt(e) && Et(e) == J;
      }
      function B_(e) {
        return tt(e) && ms(e.length) && !!qe[Pt(e)];
      }
      function El(e) {
        return typeof e == "function" ? e : e == null ? zt : typeof e == "object" ? pe(e) ? Il(e[0], e[1]) : Al(e) : Jf(e);
      }
      function wu(e) {
        if (!wi(e))
          return Hh(e);
        var t = [];
        for (var s in xe(e))
          Be.call(e, s) && s != "constructor" && t.push(s);
        return t;
      }
      function W_(e) {
        if (!je(e))
          return yd(e);
        var t = wi(e), s = [];
        for (var f in e)
          f == "constructor" && (t || !Be.call(e, f)) || s.push(f);
        return s;
      }
      function yu(e, t) {
        return e < t;
      }
      function kl(e, t) {
        var s = -1, f = Ht(e) ? I(e.length) : [];
        return er(e, function(h, p, m) {
          f[++s] = t(h, p, m);
        }), f;
      }
      function Al(e) {
        var t = Uu(e);
        return t.length == 1 && t[0][2] ? ff(t[0][0], t[0][1]) : function(s) {
          return s === e || vu(s, e, t);
        };
      }
      function Il(e, t) {
        return Bu(e) && lf(t) ? ff(En(e), t) : function(s) {
          var f = Xu(s, e);
          return f === r && f === t ? Zu(s, e) : pi(t, f, E | F);
        };
      }
      function ts(e, t, s, f, h) {
        e !== t && du(t, function(p, m) {
          if (h || (h = new dn()), je(p))
            N_(e, t, m, s, ts, f, h);
          else {
            var y = f ? f(Nu(e, m), p, m + "", e, t, h) : r;
            y === r && (y = p), hu(e, m, y);
          }
        }, Gt);
      }
      function N_(e, t, s, f, h, p, m) {
        var y = Nu(e, s), S = Nu(t, s), M = m.get(S);
        if (M) {
          hu(e, s, M);
          return;
        }
        var U = p ? p(y, S, s + "", e, t, m) : r, G = U === r;
        if (G) {
          var Z = pe(S), re = !Z && ir(S), ae = !Z && !re && Zr(S);
          U = S, Z || re || ae ? pe(y) ? U = y : ot(y) ? U = Nt(y) : re ? (G = !1, U = Gl(S, !0)) : ae ? (G = !1, U = zl(S, !0)) : U = [] : bi(S) || Tr(S) ? (U = y, Tr(y) ? U = Nf(y) : (!je(y) || Bn(y)) && (U = of(S))) : G = !1;
        }
        G && (m.set(S, U), h(U, S, f, p, m), m.delete(S)), hu(e, s, U);
      }
      function Rl(e, t) {
        var s = e.length;
        if (s)
          return t += t < 0 ? s : 0, Fn(t, s) ? e[t] : r;
      }
      function Ll(e, t, s) {
        t.length ? t = Xe(t, function(p) {
          return pe(p) ? function(m) {
            return yr(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : t = [zt];
        var f = -1;
        t = Xe(t, Zt(fe()));
        var h = kl(e, function(p, m, y) {
          var S = Xe(t, function(M) {
            return M(p);
          });
          return { criteria: S, index: ++f, value: p };
        });
        return hh(h, function(p, m) {
          return j_(p, m, s);
        });
      }
      function H_(e, t) {
        return Ol(e, t, function(s, f) {
          return Zu(e, f);
        });
      }
      function Ol(e, t, s) {
        for (var f = -1, h = t.length, p = {}; ++f < h; ) {
          var m = t[f], y = yr(e, m);
          s(y, m) && mi(p, nr(m, e), y);
        }
        return p;
      }
      function G_(e) {
        return function(t) {
          return yr(t, e);
        };
      }
      function bu(e, t, s, f) {
        var h = f ? ch : Br, p = -1, m = t.length, y = e;
        for (e === t && (t = Nt(t)), s && (y = Xe(e, Zt(s))); ++p < m; )
          for (var S = 0, M = t[p], U = s ? s(M) : M; (S = h(y, U, S, f)) > -1; )
            y !== e && qi.call(y, S, 1), qi.call(e, S, 1);
        return e;
      }
      function Pl(e, t) {
        for (var s = e ? t.length : 0, f = s - 1; s--; ) {
          var h = t[s];
          if (s == f || h !== p) {
            var p = h;
            Fn(h) ? qi.call(e, h, 1) : Du(e, h);
          }
        }
        return e;
      }
      function Cu(e, t) {
        return e + Zi(_l() * (t - e + 1));
      }
      function z_(e, t, s, f) {
        for (var h = -1, p = mt(Xi((t - e) / (s || 1)), 0), m = I(p); p--; )
          m[f ? p : ++h] = e, e += s;
        return m;
      }
      function Tu(e, t) {
        var s = "";
        if (!e || t < 1 || t > Q)
          return s;
        do
          t % 2 && (s += e), t = Zi(t / 2), t && (e += e);
        while (t);
        return s;
      }
      function be(e, t) {
        return Hu(af(e, t, zt), e + "");
      }
      function x_(e) {
        return pl(Jr(e));
      }
      function Y_(e, t) {
        var s = Jr(e);
        return cs(s, wr(t, 0, s.length));
      }
      function mi(e, t, s, f) {
        if (!je(e))
          return e;
        t = nr(t, e);
        for (var h = -1, p = t.length, m = p - 1, y = e; y != null && ++h < p; ) {
          var S = En(t[h]), M = s;
          if (S === "__proto__" || S === "constructor" || S === "prototype")
            return e;
          if (h != m) {
            var U = y[S];
            M = f ? f(U, S, y) : r, M === r && (M = je(U) ? U : Fn(t[h + 1]) ? [] : {});
          }
          _i(y, S, M), y = y[S];
        }
        return e;
      }
      var Ml = Ji ? function(e, t) {
        return Ji.set(e, t), e;
      } : zt, q_ = Ki ? function(e, t) {
        return Ki(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Qu(t),
          writable: !0
        });
      } : zt;
      function K_(e) {
        return cs(Jr(e));
      }
      function ln(e, t, s) {
        var f = -1, h = e.length;
        t < 0 && (t = -t > h ? 0 : h + t), s = s > h ? h : s, s < 0 && (s += h), h = t > s ? 0 : s - t >>> 0, t >>>= 0;
        for (var p = I(h); ++f < h; )
          p[f] = e[f + t];
        return p;
      }
      function X_(e, t) {
        var s;
        return er(e, function(f, h, p) {
          return s = t(f, h, p), !s;
        }), !!s;
      }
      function ns(e, t, s) {
        var f = 0, h = e == null ? f : e.length;
        if (typeof t == "number" && t === t && h <= Je) {
          for (; f < h; ) {
            var p = f + h >>> 1, m = e[p];
            m !== null && !Qt(m) && (s ? m <= t : m < t) ? f = p + 1 : h = p;
          }
          return h;
        }
        return Su(e, t, zt, s);
      }
      function Su(e, t, s, f) {
        var h = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        t = s(t);
        for (var m = t !== t, y = t === null, S = Qt(t), M = t === r; h < p; ) {
          var U = Zi((h + p) / 2), G = s(e[U]), Z = G !== r, re = G === null, ae = G === G, we = Qt(G);
          if (m)
            var ce = f || ae;
          else
            M ? ce = ae && (f || Z) : y ? ce = ae && Z && (f || !re) : S ? ce = ae && Z && !re && (f || !we) : re || we ? ce = !1 : ce = f ? G <= t : G < t;
          ce ? h = U + 1 : p = U;
        }
        return Dt(p, bt);
      }
      function Ul(e, t) {
        for (var s = -1, f = e.length, h = 0, p = []; ++s < f; ) {
          var m = e[s], y = t ? t(m) : m;
          if (!s || !gn(y, S)) {
            var S = y;
            p[h++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function Fl(e) {
        return typeof e == "number" ? e : Qt(e) ? te : +e;
      }
      function Jt(e) {
        if (typeof e == "string")
          return e;
        if (pe(e))
          return Xe(e, Jt) + "";
        if (Qt(e))
          return dl ? dl.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -ze ? "-0" : t;
      }
      function tr(e, t, s) {
        var f = -1, h = Ui, p = e.length, m = !0, y = [], S = y;
        if (s)
          m = !1, h = $s;
        else if (p >= o) {
          var M = t ? null : id(e);
          if (M)
            return Bi(M);
          m = !1, h = oi, S = new vr();
        } else
          S = t ? [] : y;
        e:
          for (; ++f < p; ) {
            var U = e[f], G = t ? t(U) : U;
            if (U = s || U !== 0 ? U : 0, m && G === G) {
              for (var Z = S.length; Z--; )
                if (S[Z] === G)
                  continue e;
              t && S.push(G), y.push(U);
            } else
              h(S, G, s) || (S !== y && S.push(G), y.push(U));
          }
        return y;
      }
      function Du(e, t) {
        return t = nr(t, e), e = cf(e, t), e == null || delete e[En(fn(t))];
      }
      function Bl(e, t, s, f) {
        return mi(e, t, s(yr(e, t)), f);
      }
      function rs(e, t, s, f) {
        for (var h = e.length, p = f ? h : -1; (f ? p-- : ++p < h) && t(e[p], p, e); )
          ;
        return s ? ln(e, f ? 0 : p, f ? p + 1 : h) : ln(e, f ? p + 1 : 0, f ? h : p);
      }
      function Wl(e, t) {
        var s = e;
        return s instanceof Se && (s = s.value()), eu(t, function(f, h) {
          return h.func.apply(h.thisArg, Vn([f], h.args));
        }, s);
      }
      function Eu(e, t, s) {
        var f = e.length;
        if (f < 2)
          return f ? tr(e[0]) : [];
        for (var h = -1, p = I(f); ++h < f; )
          for (var m = e[h], y = -1; ++y < f; )
            y != h && (p[h] = di(p[h] || m, e[y], t, s));
        return tr(Tt(p, 1), t, s);
      }
      function Nl(e, t, s) {
        for (var f = -1, h = e.length, p = t.length, m = {}; ++f < h; ) {
          var y = f < p ? t[f] : r;
          s(m, e[f], y);
        }
        return m;
      }
      function ku(e) {
        return ot(e) ? e : [];
      }
      function Au(e) {
        return typeof e == "function" ? e : zt;
      }
      function nr(e, t) {
        return pe(e) ? e : Bu(e, t) ? [e] : gf(Fe(e));
      }
      var Z_ = be;
      function rr(e, t, s) {
        var f = e.length;
        return s = s === r ? f : s, !t && s >= f ? e : ln(e, t, s);
      }
      var Hl = Uh || function(e) {
        return Ct.clearTimeout(e);
      };
      function Gl(e, t) {
        if (t)
          return e.slice();
        var s = e.length, f = ll ? ll(s) : new e.constructor(s);
        return e.copy(f), f;
      }
      function Iu(e) {
        var t = new e.constructor(e.byteLength);
        return new xi(t).set(new xi(e)), t;
      }
      function J_(e, t) {
        var s = t ? Iu(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.byteLength);
      }
      function Q_(e) {
        var t = new e.constructor(e.source, ui.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function V_(e) {
        return hi ? xe(hi.call(e)) : {};
      }
      function zl(e, t) {
        var s = t ? Iu(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.length);
      }
      function xl(e, t) {
        if (e !== t) {
          var s = e !== r, f = e === null, h = e === e, p = Qt(e), m = t !== r, y = t === null, S = t === t, M = Qt(t);
          if (!y && !M && !p && e > t || p && m && S && !y && !M || f && m && S || !s && S || !h)
            return 1;
          if (!f && !p && !M && e < t || M && s && h && !f && !p || y && s && h || !m && h || !S)
            return -1;
        }
        return 0;
      }
      function j_(e, t, s) {
        for (var f = -1, h = e.criteria, p = t.criteria, m = h.length, y = s.length; ++f < m; ) {
          var S = xl(h[f], p[f]);
          if (S) {
            if (f >= y)
              return S;
            var M = s[f];
            return S * (M == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Yl(e, t, s, f) {
        for (var h = -1, p = e.length, m = s.length, y = -1, S = t.length, M = mt(p - m, 0), U = I(S + M), G = !f; ++y < S; )
          U[y] = t[y];
        for (; ++h < m; )
          (G || h < p) && (U[s[h]] = e[h]);
        for (; M--; )
          U[y++] = e[h++];
        return U;
      }
      function ql(e, t, s, f) {
        for (var h = -1, p = e.length, m = -1, y = s.length, S = -1, M = t.length, U = mt(p - y, 0), G = I(U + M), Z = !f; ++h < U; )
          G[h] = e[h];
        for (var re = h; ++S < M; )
          G[re + S] = t[S];
        for (; ++m < y; )
          (Z || h < p) && (G[re + s[m]] = e[h++]);
        return G;
      }
      function Nt(e, t) {
        var s = -1, f = e.length;
        for (t || (t = I(f)); ++s < f; )
          t[s] = e[s];
        return t;
      }
      function Dn(e, t, s, f) {
        var h = !s;
        s || (s = {});
        for (var p = -1, m = t.length; ++p < m; ) {
          var y = t[p], S = f ? f(s[y], e[y], y, s, e) : r;
          S === r && (S = e[y]), h ? Pn(s, y, S) : _i(s, y, S);
        }
        return s;
      }
      function $_(e, t) {
        return Dn(e, Fu(e), t);
      }
      function ed(e, t) {
        return Dn(e, sf(e), t);
      }
      function is(e, t) {
        return function(s, f) {
          var h = pe(s) ? sh : C_, p = t ? t() : {};
          return h(s, e, fe(f, 2), p);
        };
      }
      function qr(e) {
        return be(function(t, s) {
          var f = -1, h = s.length, p = h > 1 ? s[h - 1] : r, m = h > 2 ? s[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (h--, p) : r, m && Mt(s[0], s[1], m) && (p = h < 3 ? r : p, h = 1), t = xe(t); ++f < h; ) {
            var y = s[f];
            y && e(t, y, f, p);
          }
          return t;
        });
      }
      function Kl(e, t) {
        return function(s, f) {
          if (s == null)
            return s;
          if (!Ht(s))
            return e(s, f);
          for (var h = s.length, p = t ? h : -1, m = xe(s); (t ? p-- : ++p < h) && f(m[p], p, m) !== !1; )
            ;
          return s;
        };
      }
      function Xl(e) {
        return function(t, s, f) {
          for (var h = -1, p = xe(t), m = f(t), y = m.length; y--; ) {
            var S = m[e ? y : ++h];
            if (s(p[S], S, p) === !1)
              break;
          }
          return t;
        };
      }
      function td(e, t, s) {
        var f = t & R, h = vi(e);
        function p() {
          var m = this && this !== Ct && this instanceof p ? h : e;
          return m.apply(f ? s : this, arguments);
        }
        return p;
      }
      function Zl(e) {
        return function(t) {
          t = Fe(t);
          var s = Wr(t) ? _n(t) : r, f = s ? s[0] : t.charAt(0), h = s ? rr(s, 1).join("") : t.slice(1);
          return f[e]() + h;
        };
      }
      function Kr(e) {
        return function(t) {
          return eu(Xf(Kf(t).replace(qc, "")), e, "");
        };
      }
      function vi(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var s = Yr(e.prototype), f = e.apply(s, t);
          return je(f) ? f : s;
        };
      }
      function nd(e, t, s) {
        var f = vi(e);
        function h() {
          for (var p = arguments.length, m = I(p), y = p, S = Xr(h); y--; )
            m[y] = arguments[y];
          var M = p < 3 && m[0] !== S && m[p - 1] !== S ? [] : jn(m, S);
          if (p -= M.length, p < s)
            return $l(
              e,
              t,
              ss,
              h.placeholder,
              r,
              m,
              M,
              r,
              r,
              s - p
            );
          var U = this && this !== Ct && this instanceof h ? f : e;
          return Xt(U, this, m);
        }
        return h;
      }
      function Jl(e) {
        return function(t, s, f) {
          var h = xe(t);
          if (!Ht(t)) {
            var p = fe(s, 3);
            t = yt(t), s = function(y) {
              return p(h[y], y, h);
            };
          }
          var m = e(t, s, f);
          return m > -1 ? h[p ? t[m] : m] : r;
        };
      }
      function Ql(e) {
        return Un(function(t) {
          var s = t.length, f = s, h = un.prototype.thru;
          for (e && t.reverse(); f--; ) {
            var p = t[f];
            if (typeof p != "function")
              throw new sn(l);
            if (h && !m && fs(p) == "wrapper")
              var m = new un([], !0);
          }
          for (f = m ? f : s; ++f < s; ) {
            p = t[f];
            var y = fs(p), S = y == "wrapper" ? Mu(p) : r;
            S && Wu(S[0]) && S[1] == (D | B | N | Y) && !S[4].length && S[9] == 1 ? m = m[fs(S[0])].apply(m, S[3]) : m = p.length == 1 && Wu(p) ? m[y]() : m.thru(p);
          }
          return function() {
            var M = arguments, U = M[0];
            if (m && M.length == 1 && pe(U))
              return m.plant(U).value();
            for (var G = 0, Z = s ? t[G].apply(this, M) : U; ++G < s; )
              Z = t[G].call(this, Z);
            return Z;
          };
        });
      }
      function ss(e, t, s, f, h, p, m, y, S, M) {
        var U = t & D, G = t & R, Z = t & A, re = t & (B | W), ae = t & q, we = Z ? r : vi(e);
        function ce() {
          for (var Ce = arguments.length, Ee = I(Ce), Vt = Ce; Vt--; )
            Ee[Vt] = arguments[Vt];
          if (re)
            var Ut = Xr(ce), jt = dh(Ee, Ut);
          if (f && (Ee = Yl(Ee, f, h, re)), p && (Ee = ql(Ee, p, m, re)), Ce -= jt, re && Ce < M) {
            var lt = jn(Ee, Ut);
            return $l(
              e,
              t,
              ss,
              ce.placeholder,
              s,
              Ee,
              lt,
              y,
              S,
              M - Ce
            );
          }
          var pn = G ? s : this, Nn = Z ? pn[e] : e;
          return Ce = Ee.length, y ? Ee = Cd(Ee, y) : ae && Ce > 1 && Ee.reverse(), U && S < Ce && (Ee.length = S), this && this !== Ct && this instanceof ce && (Nn = we || vi(Nn)), Nn.apply(pn, Ee);
        }
        return ce;
      }
      function Vl(e, t) {
        return function(s, f) {
          return R_(s, e, t(f), {});
        };
      }
      function us(e, t) {
        return function(s, f) {
          var h;
          if (s === r && f === r)
            return t;
          if (s !== r && (h = s), f !== r) {
            if (h === r)
              return f;
            typeof s == "string" || typeof f == "string" ? (s = Jt(s), f = Jt(f)) : (s = Fl(s), f = Fl(f)), h = e(s, f);
          }
          return h;
        };
      }
      function Ru(e) {
        return Un(function(t) {
          return t = Xe(t, Zt(fe())), be(function(s) {
            var f = this;
            return e(t, function(h) {
              return Xt(h, f, s);
            });
          });
        });
      }
      function os(e, t) {
        t = t === r ? " " : Jt(t);
        var s = t.length;
        if (s < 2)
          return s ? Tu(t, e) : t;
        var f = Tu(t, Xi(e / Nr(t)));
        return Wr(t) ? rr(_n(f), 0, e).join("") : f.slice(0, e);
      }
      function rd(e, t, s, f) {
        var h = t & R, p = vi(e);
        function m() {
          for (var y = -1, S = arguments.length, M = -1, U = f.length, G = I(U + S), Z = this && this !== Ct && this instanceof m ? p : e; ++M < U; )
            G[M] = f[M];
          for (; S--; )
            G[M++] = arguments[++y];
          return Xt(Z, h ? s : this, G);
        }
        return m;
      }
      function jl(e) {
        return function(t, s, f) {
          return f && typeof f != "number" && Mt(t, s, f) && (s = f = r), t = Wn(t), s === r ? (s = t, t = 0) : s = Wn(s), f = f === r ? t < s ? 1 : -1 : Wn(f), z_(t, s, f, e);
        };
      }
      function ls(e) {
        return function(t, s) {
          return typeof t == "string" && typeof s == "string" || (t = an(t), s = an(s)), e(t, s);
        };
      }
      function $l(e, t, s, f, h, p, m, y, S, M) {
        var U = t & B, G = U ? m : r, Z = U ? r : m, re = U ? p : r, ae = U ? r : p;
        t |= U ? N : O, t &= ~(U ? O : N), t & L || (t &= ~(R | A));
        var we = [
          e,
          t,
          h,
          re,
          G,
          ae,
          Z,
          y,
          S,
          M
        ], ce = s.apply(r, we);
        return Wu(e) && hf(ce, we), ce.placeholder = f, _f(ce, e, t);
      }
      function Lu(e) {
        var t = pt[e];
        return function(s, f) {
          if (s = an(s), f = f == null ? 0 : Dt(ve(f), 292), f && hl(s)) {
            var h = (Fe(s) + "e").split("e"), p = t(h[0] + "e" + (+h[1] + f));
            return h = (Fe(p) + "e").split("e"), +(h[0] + "e" + (+h[1] - f));
          }
          return t(s);
        };
      }
      var id = zr && 1 / Bi(new zr([, -0]))[1] == ze ? function(e) {
        return new zr(e);
      } : $u;
      function ef(e) {
        return function(t) {
          var s = Et(t);
          return s == dt ? ou(t) : s == J ? bh(t) : _h(t, e(t));
        };
      }
      function Mn(e, t, s, f, h, p, m, y) {
        var S = t & A;
        if (!S && typeof e != "function")
          throw new sn(l);
        var M = f ? f.length : 0;
        if (M || (t &= ~(N | O), f = h = r), m = m === r ? m : mt(ve(m), 0), y = y === r ? y : ve(y), M -= h ? h.length : 0, t & O) {
          var U = f, G = h;
          f = h = r;
        }
        var Z = S ? r : Mu(e), re = [
          e,
          t,
          s,
          f,
          h,
          U,
          G,
          p,
          m,
          y
        ];
        if (Z && wd(re, Z), e = re[0], t = re[1], s = re[2], f = re[3], h = re[4], y = re[9] = re[9] === r ? S ? 0 : e.length : mt(re[9] - M, 0), !y && t & (B | W) && (t &= ~(B | W)), !t || t == R)
          var ae = td(e, t, s);
        else
          t == B || t == W ? ae = nd(e, t, y) : (t == N || t == (R | N)) && !h.length ? ae = rd(e, t, s, f) : ae = ss.apply(r, re);
        var we = Z ? Ml : hf;
        return _f(we(ae, re), e, t);
      }
      function tf(e, t, s, f) {
        return e === r || gn(e, Gr[s]) && !Be.call(f, s) ? t : e;
      }
      function nf(e, t, s, f, h, p) {
        return je(e) && je(t) && (p.set(t, e), ts(e, t, r, nf, p), p.delete(t)), e;
      }
      function sd(e) {
        return bi(e) ? r : e;
      }
      function rf(e, t, s, f, h, p) {
        var m = s & E, y = e.length, S = t.length;
        if (y != S && !(m && S > y))
          return !1;
        var M = p.get(e), U = p.get(t);
        if (M && U)
          return M == t && U == e;
        var G = -1, Z = !0, re = s & F ? new vr() : r;
        for (p.set(e, t), p.set(t, e); ++G < y; ) {
          var ae = e[G], we = t[G];
          if (f)
            var ce = m ? f(we, ae, G, t, e, p) : f(ae, we, G, e, t, p);
          if (ce !== r) {
            if (ce)
              continue;
            Z = !1;
            break;
          }
          if (re) {
            if (!tu(t, function(Ce, Ee) {
              if (!oi(re, Ee) && (ae === Ce || h(ae, Ce, s, f, p)))
                return re.push(Ee);
            })) {
              Z = !1;
              break;
            }
          } else if (!(ae === we || h(ae, we, s, f, p))) {
            Z = !1;
            break;
          }
        }
        return p.delete(e), p.delete(t), Z;
      }
      function ud(e, t, s, f, h, p, m) {
        switch (s) {
          case qt:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Te:
            return !(e.byteLength != t.byteLength || !p(new xi(e), new xi(t)));
          case $e:
          case V:
          case ne:
            return gn(+e, +t);
          case Qe:
            return e.name == t.name && e.message == t.message;
          case wn:
          case Wt:
            return e == t + "";
          case dt:
            var y = ou;
          case J:
            var S = f & E;
            if (y || (y = Bi), e.size != t.size && !S)
              return !1;
            var M = m.get(e);
            if (M)
              return M == t;
            f |= F, m.set(e, t);
            var U = rf(y(e), y(t), f, h, p, m);
            return m.delete(e), U;
          case Lt:
            if (hi)
              return hi.call(e) == hi.call(t);
        }
        return !1;
      }
      function od(e, t, s, f, h, p) {
        var m = s & E, y = Ou(e), S = y.length, M = Ou(t), U = M.length;
        if (S != U && !m)
          return !1;
        for (var G = S; G--; ) {
          var Z = y[G];
          if (!(m ? Z in t : Be.call(t, Z)))
            return !1;
        }
        var re = p.get(e), ae = p.get(t);
        if (re && ae)
          return re == t && ae == e;
        var we = !0;
        p.set(e, t), p.set(t, e);
        for (var ce = m; ++G < S; ) {
          Z = y[G];
          var Ce = e[Z], Ee = t[Z];
          if (f)
            var Vt = m ? f(Ee, Ce, Z, t, e, p) : f(Ce, Ee, Z, e, t, p);
          if (!(Vt === r ? Ce === Ee || h(Ce, Ee, s, f, p) : Vt)) {
            we = !1;
            break;
          }
          ce || (ce = Z == "constructor");
        }
        if (we && !ce) {
          var Ut = e.constructor, jt = t.constructor;
          Ut != jt && "constructor" in e && "constructor" in t && !(typeof Ut == "function" && Ut instanceof Ut && typeof jt == "function" && jt instanceof jt) && (we = !1);
        }
        return p.delete(e), p.delete(t), we;
      }
      function Un(e) {
        return Hu(af(e, r, wf), e + "");
      }
      function Ou(e) {
        return Tl(e, yt, Fu);
      }
      function Pu(e) {
        return Tl(e, Gt, sf);
      }
      var Mu = Ji ? function(e) {
        return Ji.get(e);
      } : $u;
      function fs(e) {
        for (var t = e.name + "", s = xr[t], f = Be.call(xr, t) ? s.length : 0; f--; ) {
          var h = s[f], p = h.func;
          if (p == null || p == e)
            return h.name;
        }
        return t;
      }
      function Xr(e) {
        var t = Be.call(d, "placeholder") ? d : e;
        return t.placeholder;
      }
      function fe() {
        var e = d.iteratee || Vu;
        return e = e === Vu ? El : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function as(e, t) {
        var s = e.__data__;
        return gd(t) ? s[typeof t == "string" ? "string" : "hash"] : s.map;
      }
      function Uu(e) {
        for (var t = yt(e), s = t.length; s--; ) {
          var f = t[s], h = e[f];
          t[s] = [f, h, lf(h)];
        }
        return t;
      }
      function br(e, t) {
        var s = vh(e, t);
        return Dl(s) ? s : r;
      }
      function ld(e) {
        var t = Be.call(e, pr), s = e[pr];
        try {
          e[pr] = r;
          var f = !0;
        } catch {
        }
        var h = Gi.call(e);
        return f && (t ? e[pr] = s : delete e[pr]), h;
      }
      var Fu = fu ? function(e) {
        return e == null ? [] : (e = xe(e), Qn(fu(e), function(t) {
          return al.call(e, t);
        }));
      } : eo, sf = fu ? function(e) {
        for (var t = []; e; )
          Vn(t, Fu(e)), e = Yi(e);
        return t;
      } : eo, Et = Pt;
      (au && Et(new au(new ArrayBuffer(1))) != qt || fi && Et(new fi()) != dt || cu && Et(cu.resolve()) != lr || zr && Et(new zr()) != J || ai && Et(new ai()) != st) && (Et = function(e) {
        var t = Pt(e), s = t == gt ? e.constructor : r, f = s ? Cr(s) : "";
        if (f)
          switch (f) {
            case Yh:
              return qt;
            case qh:
              return dt;
            case Kh:
              return lr;
            case Xh:
              return J;
            case Zh:
              return st;
          }
        return t;
      });
      function fd(e, t, s) {
        for (var f = -1, h = s.length; ++f < h; ) {
          var p = s[f], m = p.size;
          switch (p.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              t -= m;
              break;
            case "take":
              t = Dt(t, e + m);
              break;
            case "takeRight":
              e = mt(e, t - m);
              break;
          }
        }
        return { start: e, end: t };
      }
      function ad(e) {
        var t = e.match(Bs);
        return t ? t[1].split(Ws) : [];
      }
      function uf(e, t, s) {
        t = nr(t, e);
        for (var f = -1, h = t.length, p = !1; ++f < h; ) {
          var m = En(t[f]);
          if (!(p = e != null && s(e, m)))
            break;
          e = e[m];
        }
        return p || ++f != h ? p : (h = e == null ? 0 : e.length, !!h && ms(h) && Fn(m, h) && (pe(e) || Tr(e)));
      }
      function cd(e) {
        var t = e.length, s = new e.constructor(t);
        return t && typeof e[0] == "string" && Be.call(e, "index") && (s.index = e.index, s.input = e.input), s;
      }
      function of(e) {
        return typeof e.constructor == "function" && !wi(e) ? Yr(Yi(e)) : {};
      }
      function hd(e, t, s) {
        var f = e.constructor;
        switch (t) {
          case Te:
            return Iu(e);
          case $e:
          case V:
            return new f(+e);
          case qt:
            return J_(e, s);
          case Kt:
          case fr:
          case St:
          case yn:
          case ar:
          case cr:
          case tn:
          case Ve:
          case bn:
            return zl(e, s);
          case dt:
            return new f();
          case ne:
          case Wt:
            return new f(e);
          case wn:
            return Q_(e);
          case J:
            return new f();
          case Lt:
            return V_(e);
        }
      }
      function _d(e, t) {
        var s = t.length;
        if (!s)
          return e;
        var f = s - 1;
        return t[f] = (s > 1 ? "& " : "") + t[f], t = t.join(s > 2 ? ", " : " "), e.replace(Fs, `{
/* [wrapped with ` + t + `] */
`);
      }
      function dd(e) {
        return pe(e) || Tr(e) || !!(cl && e && e[cl]);
      }
      function Fn(e, t) {
        var s = typeof e;
        return t = t ?? Q, !!t && (s == "number" || s != "symbol" && Zn.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Mt(e, t, s) {
        if (!je(s))
          return !1;
        var f = typeof t;
        return (f == "number" ? Ht(s) && Fn(t, s.length) : f == "string" && t in s) ? gn(s[t], e) : !1;
      }
      function Bu(e, t) {
        if (pe(e))
          return !1;
        var s = typeof e;
        return s == "number" || s == "symbol" || s == "boolean" || e == null || Qt(e) ? !0 : hr.test(e) || !Xn.test(e) || t != null && e in xe(t);
      }
      function gd(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Wu(e) {
        var t = fs(e), s = d[t];
        if (typeof s != "function" || !(t in Se.prototype))
          return !1;
        if (e === s)
          return !0;
        var f = Mu(s);
        return !!f && e === f[0];
      }
      function pd(e) {
        return !!ol && ol in e;
      }
      var md = Ni ? Bn : to;
      function wi(e) {
        var t = e && e.constructor, s = typeof t == "function" && t.prototype || Gr;
        return e === s;
      }
      function lf(e) {
        return e === e && !je(e);
      }
      function ff(e, t) {
        return function(s) {
          return s == null ? !1 : s[e] === t && (t !== r || e in xe(s));
        };
      }
      function vd(e) {
        var t = gs(e, function(f) {
          return s.size === g && s.clear(), f;
        }), s = t.cache;
        return t;
      }
      function wd(e, t) {
        var s = e[1], f = t[1], h = s | f, p = h < (R | A | D), m = f == D && s == B || f == D && s == Y && e[7].length <= t[8] || f == (D | Y) && t[7].length <= t[8] && s == B;
        if (!(p || m))
          return e;
        f & R && (e[2] = t[2], h |= s & R ? 0 : L);
        var y = t[3];
        if (y) {
          var S = e[3];
          e[3] = S ? Yl(S, y, t[4]) : y, e[4] = S ? jn(e[3], v) : t[4];
        }
        return y = t[5], y && (S = e[5], e[5] = S ? ql(S, y, t[6]) : y, e[6] = S ? jn(e[5], v) : t[6]), y = t[7], y && (e[7] = y), f & D && (e[8] = e[8] == null ? t[8] : Dt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = h, e;
      }
      function yd(e) {
        var t = [];
        if (e != null)
          for (var s in xe(e))
            t.push(s);
        return t;
      }
      function bd(e) {
        return Gi.call(e);
      }
      function af(e, t, s) {
        return t = mt(t === r ? e.length - 1 : t, 0), function() {
          for (var f = arguments, h = -1, p = mt(f.length - t, 0), m = I(p); ++h < p; )
            m[h] = f[t + h];
          h = -1;
          for (var y = I(t + 1); ++h < t; )
            y[h] = f[h];
          return y[t] = s(m), Xt(e, this, y);
        };
      }
      function cf(e, t) {
        return t.length < 2 ? e : yr(e, ln(t, 0, -1));
      }
      function Cd(e, t) {
        for (var s = e.length, f = Dt(t.length, s), h = Nt(e); f--; ) {
          var p = t[f];
          e[f] = Fn(p, s) ? h[p] : r;
        }
        return e;
      }
      function Nu(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var hf = df(Ml), yi = Bh || function(e, t) {
        return Ct.setTimeout(e, t);
      }, Hu = df(q_);
      function _f(e, t, s) {
        var f = t + "";
        return Hu(e, _d(f, Td(ad(f), s)));
      }
      function df(e) {
        var t = 0, s = 0;
        return function() {
          var f = Gh(), h = de - (f - s);
          if (s = f, h > 0) {
            if (++t >= $)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function cs(e, t) {
        var s = -1, f = e.length, h = f - 1;
        for (t = t === r ? f : t; ++s < t; ) {
          var p = Cu(s, h), m = e[p];
          e[p] = e[s], e[s] = m;
        }
        return e.length = t, e;
      }
      var gf = vd(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ms, function(s, f, h, p) {
          t.push(h ? p.replace(Hs, "$1") : f || s);
        }), t;
      });
      function En(e) {
        if (typeof e == "string" || Qt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -ze ? "-0" : t;
      }
      function Cr(e) {
        if (e != null) {
          try {
            return Hi.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Td(e, t) {
        return rn(Ke, function(s) {
          var f = "_." + s[0];
          t & s[1] && !Ui(e, f) && e.push(f);
        }), e.sort();
      }
      function pf(e) {
        if (e instanceof Se)
          return e.clone();
        var t = new un(e.__wrapped__, e.__chain__);
        return t.__actions__ = Nt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Sd(e, t, s) {
        (s ? Mt(e, t, s) : t === r) ? t = 1 : t = mt(ve(t), 0);
        var f = e == null ? 0 : e.length;
        if (!f || t < 1)
          return [];
        for (var h = 0, p = 0, m = I(Xi(f / t)); h < f; )
          m[p++] = ln(e, h, h += t);
        return m;
      }
      function Dd(e) {
        for (var t = -1, s = e == null ? 0 : e.length, f = 0, h = []; ++t < s; ) {
          var p = e[t];
          p && (h[f++] = p);
        }
        return h;
      }
      function Ed() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = I(e - 1), s = arguments[0], f = e; f--; )
          t[f - 1] = arguments[f];
        return Vn(pe(s) ? Nt(s) : [s], Tt(t, 1));
      }
      var kd = be(function(e, t) {
        return ot(e) ? di(e, Tt(t, 1, ot, !0)) : [];
      }), Ad = be(function(e, t) {
        var s = fn(t);
        return ot(s) && (s = r), ot(e) ? di(e, Tt(t, 1, ot, !0), fe(s, 2)) : [];
      }), Id = be(function(e, t) {
        var s = fn(t);
        return ot(s) && (s = r), ot(e) ? di(e, Tt(t, 1, ot, !0), r, s) : [];
      });
      function Rd(e, t, s) {
        var f = e == null ? 0 : e.length;
        return f ? (t = s || t === r ? 1 : ve(t), ln(e, t < 0 ? 0 : t, f)) : [];
      }
      function Ld(e, t, s) {
        var f = e == null ? 0 : e.length;
        return f ? (t = s || t === r ? 1 : ve(t), t = f - t, ln(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Od(e, t) {
        return e && e.length ? rs(e, fe(t, 3), !0, !0) : [];
      }
      function Pd(e, t) {
        return e && e.length ? rs(e, fe(t, 3), !0) : [];
      }
      function Md(e, t, s, f) {
        var h = e == null ? 0 : e.length;
        return h ? (s && typeof s != "number" && Mt(e, t, s) && (s = 0, f = h), E_(e, t, s, f)) : [];
      }
      function mf(e, t, s) {
        var f = e == null ? 0 : e.length;
        if (!f)
          return -1;
        var h = s == null ? 0 : ve(s);
        return h < 0 && (h = mt(f + h, 0)), Fi(e, fe(t, 3), h);
      }
      function vf(e, t, s) {
        var f = e == null ? 0 : e.length;
        if (!f)
          return -1;
        var h = f - 1;
        return s !== r && (h = ve(s), h = s < 0 ? mt(f + h, 0) : Dt(h, f - 1)), Fi(e, fe(t, 3), h, !0);
      }
      function wf(e) {
        var t = e == null ? 0 : e.length;
        return t ? Tt(e, 1) : [];
      }
      function Ud(e) {
        var t = e == null ? 0 : e.length;
        return t ? Tt(e, ze) : [];
      }
      function Fd(e, t) {
        var s = e == null ? 0 : e.length;
        return s ? (t = t === r ? 1 : ve(t), Tt(e, t)) : [];
      }
      function Bd(e) {
        for (var t = -1, s = e == null ? 0 : e.length, f = {}; ++t < s; ) {
          var h = e[t];
          f[h[0]] = h[1];
        }
        return f;
      }
      function yf(e) {
        return e && e.length ? e[0] : r;
      }
      function Wd(e, t, s) {
        var f = e == null ? 0 : e.length;
        if (!f)
          return -1;
        var h = s == null ? 0 : ve(s);
        return h < 0 && (h = mt(f + h, 0)), Br(e, t, h);
      }
      function Nd(e) {
        var t = e == null ? 0 : e.length;
        return t ? ln(e, 0, -1) : [];
      }
      var Hd = be(function(e) {
        var t = Xe(e, ku);
        return t.length && t[0] === e[0] ? mu(t) : [];
      }), Gd = be(function(e) {
        var t = fn(e), s = Xe(e, ku);
        return t === fn(s) ? t = r : s.pop(), s.length && s[0] === e[0] ? mu(s, fe(t, 2)) : [];
      }), zd = be(function(e) {
        var t = fn(e), s = Xe(e, ku);
        return t = typeof t == "function" ? t : r, t && s.pop(), s.length && s[0] === e[0] ? mu(s, r, t) : [];
      });
      function xd(e, t) {
        return e == null ? "" : Nh.call(e, t);
      }
      function fn(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function Yd(e, t, s) {
        var f = e == null ? 0 : e.length;
        if (!f)
          return -1;
        var h = f;
        return s !== r && (h = ve(s), h = h < 0 ? mt(f + h, 0) : Dt(h, f - 1)), t === t ? Th(e, t, h) : Fi(e, $o, h, !0);
      }
      function qd(e, t) {
        return e && e.length ? Rl(e, ve(t)) : r;
      }
      var Kd = be(bf);
      function bf(e, t) {
        return e && e.length && t && t.length ? bu(e, t) : e;
      }
      function Xd(e, t, s) {
        return e && e.length && t && t.length ? bu(e, t, fe(s, 2)) : e;
      }
      function Zd(e, t, s) {
        return e && e.length && t && t.length ? bu(e, t, r, s) : e;
      }
      var Jd = Un(function(e, t) {
        var s = e == null ? 0 : e.length, f = _u(e, t);
        return Pl(e, Xe(t, function(h) {
          return Fn(h, s) ? +h : h;
        }).sort(xl)), f;
      });
      function Qd(e, t) {
        var s = [];
        if (!(e && e.length))
          return s;
        var f = -1, h = [], p = e.length;
        for (t = fe(t, 3); ++f < p; ) {
          var m = e[f];
          t(m, f, e) && (s.push(m), h.push(f));
        }
        return Pl(e, h), s;
      }
      function Gu(e) {
        return e == null ? e : xh.call(e);
      }
      function Vd(e, t, s) {
        var f = e == null ? 0 : e.length;
        return f ? (s && typeof s != "number" && Mt(e, t, s) ? (t = 0, s = f) : (t = t == null ? 0 : ve(t), s = s === r ? f : ve(s)), ln(e, t, s)) : [];
      }
      function jd(e, t) {
        return ns(e, t);
      }
      function $d(e, t, s) {
        return Su(e, t, fe(s, 2));
      }
      function eg(e, t) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var f = ns(e, t);
          if (f < s && gn(e[f], t))
            return f;
        }
        return -1;
      }
      function tg(e, t) {
        return ns(e, t, !0);
      }
      function ng(e, t, s) {
        return Su(e, t, fe(s, 2), !0);
      }
      function rg(e, t) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var f = ns(e, t, !0) - 1;
          if (gn(e[f], t))
            return f;
        }
        return -1;
      }
      function ig(e) {
        return e && e.length ? Ul(e) : [];
      }
      function sg(e, t) {
        return e && e.length ? Ul(e, fe(t, 2)) : [];
      }
      function ug(e) {
        var t = e == null ? 0 : e.length;
        return t ? ln(e, 1, t) : [];
      }
      function og(e, t, s) {
        return e && e.length ? (t = s || t === r ? 1 : ve(t), ln(e, 0, t < 0 ? 0 : t)) : [];
      }
      function lg(e, t, s) {
        var f = e == null ? 0 : e.length;
        return f ? (t = s || t === r ? 1 : ve(t), t = f - t, ln(e, t < 0 ? 0 : t, f)) : [];
      }
      function fg(e, t) {
        return e && e.length ? rs(e, fe(t, 3), !1, !0) : [];
      }
      function ag(e, t) {
        return e && e.length ? rs(e, fe(t, 3)) : [];
      }
      var cg = be(function(e) {
        return tr(Tt(e, 1, ot, !0));
      }), hg = be(function(e) {
        var t = fn(e);
        return ot(t) && (t = r), tr(Tt(e, 1, ot, !0), fe(t, 2));
      }), _g = be(function(e) {
        var t = fn(e);
        return t = typeof t == "function" ? t : r, tr(Tt(e, 1, ot, !0), r, t);
      });
      function dg(e) {
        return e && e.length ? tr(e) : [];
      }
      function gg(e, t) {
        return e && e.length ? tr(e, fe(t, 2)) : [];
      }
      function pg(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? tr(e, r, t) : [];
      }
      function zu(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = Qn(e, function(s) {
          if (ot(s))
            return t = mt(s.length, t), !0;
        }), su(t, function(s) {
          return Xe(e, nu(s));
        });
      }
      function Cf(e, t) {
        if (!(e && e.length))
          return [];
        var s = zu(e);
        return t == null ? s : Xe(s, function(f) {
          return Xt(t, r, f);
        });
      }
      var mg = be(function(e, t) {
        return ot(e) ? di(e, t) : [];
      }), vg = be(function(e) {
        return Eu(Qn(e, ot));
      }), wg = be(function(e) {
        var t = fn(e);
        return ot(t) && (t = r), Eu(Qn(e, ot), fe(t, 2));
      }), yg = be(function(e) {
        var t = fn(e);
        return t = typeof t == "function" ? t : r, Eu(Qn(e, ot), r, t);
      }), bg = be(zu);
      function Cg(e, t) {
        return Nl(e || [], t || [], _i);
      }
      function Tg(e, t) {
        return Nl(e || [], t || [], mi);
      }
      var Sg = be(function(e) {
        var t = e.length, s = t > 1 ? e[t - 1] : r;
        return s = typeof s == "function" ? (e.pop(), s) : r, Cf(e, s);
      });
      function Tf(e) {
        var t = d(e);
        return t.__chain__ = !0, t;
      }
      function Dg(e, t) {
        return t(e), e;
      }
      function hs(e, t) {
        return t(e);
      }
      var Eg = Un(function(e) {
        var t = e.length, s = t ? e[0] : 0, f = this.__wrapped__, h = function(p) {
          return _u(p, e);
        };
        return t > 1 || this.__actions__.length || !(f instanceof Se) || !Fn(s) ? this.thru(h) : (f = f.slice(s, +s + (t ? 1 : 0)), f.__actions__.push({
          func: hs,
          args: [h],
          thisArg: r
        }), new un(f, this.__chain__).thru(function(p) {
          return t && !p.length && p.push(r), p;
        }));
      });
      function kg() {
        return Tf(this);
      }
      function Ag() {
        return new un(this.value(), this.__chain__);
      }
      function Ig() {
        this.__values__ === r && (this.__values__ = Bf(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Rg() {
        return this;
      }
      function Lg(e) {
        for (var t, s = this; s instanceof Vi; ) {
          var f = pf(s);
          f.__index__ = 0, f.__values__ = r, t ? h.__wrapped__ = f : t = f;
          var h = f;
          s = s.__wrapped__;
        }
        return h.__wrapped__ = e, t;
      }
      function Og() {
        var e = this.__wrapped__;
        if (e instanceof Se) {
          var t = e;
          return this.__actions__.length && (t = new Se(this)), t = t.reverse(), t.__actions__.push({
            func: hs,
            args: [Gu],
            thisArg: r
          }), new un(t, this.__chain__);
        }
        return this.thru(Gu);
      }
      function Pg() {
        return Wl(this.__wrapped__, this.__actions__);
      }
      var Mg = is(function(e, t, s) {
        Be.call(e, s) ? ++e[s] : Pn(e, s, 1);
      });
      function Ug(e, t, s) {
        var f = pe(e) ? Vo : D_;
        return s && Mt(e, t, s) && (t = r), f(e, fe(t, 3));
      }
      function Fg(e, t) {
        var s = pe(e) ? Qn : bl;
        return s(e, fe(t, 3));
      }
      var Bg = Jl(mf), Wg = Jl(vf);
      function Ng(e, t) {
        return Tt(_s(e, t), 1);
      }
      function Hg(e, t) {
        return Tt(_s(e, t), ze);
      }
      function Gg(e, t, s) {
        return s = s === r ? 1 : ve(s), Tt(_s(e, t), s);
      }
      function Sf(e, t) {
        var s = pe(e) ? rn : er;
        return s(e, fe(t, 3));
      }
      function Df(e, t) {
        var s = pe(e) ? uh : yl;
        return s(e, fe(t, 3));
      }
      var zg = is(function(e, t, s) {
        Be.call(e, s) ? e[s].push(t) : Pn(e, s, [t]);
      });
      function xg(e, t, s, f) {
        e = Ht(e) ? e : Jr(e), s = s && !f ? ve(s) : 0;
        var h = e.length;
        return s < 0 && (s = mt(h + s, 0)), vs(e) ? s <= h && e.indexOf(t, s) > -1 : !!h && Br(e, t, s) > -1;
      }
      var Yg = be(function(e, t, s) {
        var f = -1, h = typeof t == "function", p = Ht(e) ? I(e.length) : [];
        return er(e, function(m) {
          p[++f] = h ? Xt(t, m, s) : gi(m, t, s);
        }), p;
      }), qg = is(function(e, t, s) {
        Pn(e, s, t);
      });
      function _s(e, t) {
        var s = pe(e) ? Xe : kl;
        return s(e, fe(t, 3));
      }
      function Kg(e, t, s, f) {
        return e == null ? [] : (pe(t) || (t = t == null ? [] : [t]), s = f ? r : s, pe(s) || (s = s == null ? [] : [s]), Ll(e, t, s));
      }
      var Xg = is(function(e, t, s) {
        e[s ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Zg(e, t, s) {
        var f = pe(e) ? eu : tl, h = arguments.length < 3;
        return f(e, fe(t, 4), s, h, er);
      }
      function Jg(e, t, s) {
        var f = pe(e) ? oh : tl, h = arguments.length < 3;
        return f(e, fe(t, 4), s, h, yl);
      }
      function Qg(e, t) {
        var s = pe(e) ? Qn : bl;
        return s(e, ps(fe(t, 3)));
      }
      function Vg(e) {
        var t = pe(e) ? pl : x_;
        return t(e);
      }
      function jg(e, t, s) {
        (s ? Mt(e, t, s) : t === r) ? t = 1 : t = ve(t);
        var f = pe(e) ? y_ : Y_;
        return f(e, t);
      }
      function $g(e) {
        var t = pe(e) ? b_ : K_;
        return t(e);
      }
      function ep(e) {
        if (e == null)
          return 0;
        if (Ht(e))
          return vs(e) ? Nr(e) : e.length;
        var t = Et(e);
        return t == dt || t == J ? e.size : wu(e).length;
      }
      function tp(e, t, s) {
        var f = pe(e) ? tu : X_;
        return s && Mt(e, t, s) && (t = r), f(e, fe(t, 3));
      }
      var np = be(function(e, t) {
        if (e == null)
          return [];
        var s = t.length;
        return s > 1 && Mt(e, t[0], t[1]) ? t = [] : s > 2 && Mt(t[0], t[1], t[2]) && (t = [t[0]]), Ll(e, Tt(t, 1), []);
      }), ds = Fh || function() {
        return Ct.Date.now();
      };
      function rp(e, t) {
        if (typeof t != "function")
          throw new sn(l);
        return e = ve(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Ef(e, t, s) {
        return t = s ? r : t, t = e && t == null ? e.length : t, Mn(e, D, r, r, r, r, t);
      }
      function kf(e, t) {
        var s;
        if (typeof t != "function")
          throw new sn(l);
        return e = ve(e), function() {
          return --e > 0 && (s = t.apply(this, arguments)), e <= 1 && (t = r), s;
        };
      }
      var xu = be(function(e, t, s) {
        var f = R;
        if (s.length) {
          var h = jn(s, Xr(xu));
          f |= N;
        }
        return Mn(e, f, t, s, h);
      }), Af = be(function(e, t, s) {
        var f = R | A;
        if (s.length) {
          var h = jn(s, Xr(Af));
          f |= N;
        }
        return Mn(t, f, e, s, h);
      });
      function If(e, t, s) {
        t = s ? r : t;
        var f = Mn(e, B, r, r, r, r, r, t);
        return f.placeholder = If.placeholder, f;
      }
      function Rf(e, t, s) {
        t = s ? r : t;
        var f = Mn(e, W, r, r, r, r, r, t);
        return f.placeholder = Rf.placeholder, f;
      }
      function Lf(e, t, s) {
        var f, h, p, m, y, S, M = 0, U = !1, G = !1, Z = !0;
        if (typeof e != "function")
          throw new sn(l);
        t = an(t) || 0, je(s) && (U = !!s.leading, G = "maxWait" in s, p = G ? mt(an(s.maxWait) || 0, t) : p, Z = "trailing" in s ? !!s.trailing : Z);
        function re(lt) {
          var pn = f, Nn = h;
          return f = h = r, M = lt, m = e.apply(Nn, pn), m;
        }
        function ae(lt) {
          return M = lt, y = yi(Ce, t), U ? re(lt) : m;
        }
        function we(lt) {
          var pn = lt - S, Nn = lt - M, Qf = t - pn;
          return G ? Dt(Qf, p - Nn) : Qf;
        }
        function ce(lt) {
          var pn = lt - S, Nn = lt - M;
          return S === r || pn >= t || pn < 0 || G && Nn >= p;
        }
        function Ce() {
          var lt = ds();
          if (ce(lt))
            return Ee(lt);
          y = yi(Ce, we(lt));
        }
        function Ee(lt) {
          return y = r, Z && f ? re(lt) : (f = h = r, m);
        }
        function Vt() {
          y !== r && Hl(y), M = 0, f = S = h = y = r;
        }
        function Ut() {
          return y === r ? m : Ee(ds());
        }
        function jt() {
          var lt = ds(), pn = ce(lt);
          if (f = arguments, h = this, S = lt, pn) {
            if (y === r)
              return ae(S);
            if (G)
              return Hl(y), y = yi(Ce, t), re(S);
          }
          return y === r && (y = yi(Ce, t)), m;
        }
        return jt.cancel = Vt, jt.flush = Ut, jt;
      }
      var ip = be(function(e, t) {
        return wl(e, 1, t);
      }), sp = be(function(e, t, s) {
        return wl(e, an(t) || 0, s);
      });
      function up(e) {
        return Mn(e, q);
      }
      function gs(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new sn(l);
        var s = function() {
          var f = arguments, h = t ? t.apply(this, f) : f[0], p = s.cache;
          if (p.has(h))
            return p.get(h);
          var m = e.apply(this, f);
          return s.cache = p.set(h, m) || p, m;
        };
        return s.cache = new (gs.Cache || On)(), s;
      }
      gs.Cache = On;
      function ps(e) {
        if (typeof e != "function")
          throw new sn(l);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function op(e) {
        return kf(2, e);
      }
      var lp = Z_(function(e, t) {
        t = t.length == 1 && pe(t[0]) ? Xe(t[0], Zt(fe())) : Xe(Tt(t, 1), Zt(fe()));
        var s = t.length;
        return be(function(f) {
          for (var h = -1, p = Dt(f.length, s); ++h < p; )
            f[h] = t[h].call(this, f[h]);
          return Xt(e, this, f);
        });
      }), Yu = be(function(e, t) {
        var s = jn(t, Xr(Yu));
        return Mn(e, N, r, t, s);
      }), Of = be(function(e, t) {
        var s = jn(t, Xr(Of));
        return Mn(e, O, r, t, s);
      }), fp = Un(function(e, t) {
        return Mn(e, Y, r, r, r, t);
      });
      function ap(e, t) {
        if (typeof e != "function")
          throw new sn(l);
        return t = t === r ? t : ve(t), be(e, t);
      }
      function cp(e, t) {
        if (typeof e != "function")
          throw new sn(l);
        return t = t == null ? 0 : mt(ve(t), 0), be(function(s) {
          var f = s[t], h = rr(s, 0, t);
          return f && Vn(h, f), Xt(e, this, h);
        });
      }
      function hp(e, t, s) {
        var f = !0, h = !0;
        if (typeof e != "function")
          throw new sn(l);
        return je(s) && (f = "leading" in s ? !!s.leading : f, h = "trailing" in s ? !!s.trailing : h), Lf(e, t, {
          leading: f,
          maxWait: t,
          trailing: h
        });
      }
      function _p(e) {
        return Ef(e, 1);
      }
      function dp(e, t) {
        return Yu(Au(t), e);
      }
      function gp() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return pe(e) ? e : [e];
      }
      function pp(e) {
        return on(e, T);
      }
      function mp(e, t) {
        return t = typeof t == "function" ? t : r, on(e, T, t);
      }
      function vp(e) {
        return on(e, C | T);
      }
      function wp(e, t) {
        return t = typeof t == "function" ? t : r, on(e, C | T, t);
      }
      function yp(e, t) {
        return t == null || vl(e, t, yt(t));
      }
      function gn(e, t) {
        return e === t || e !== e && t !== t;
      }
      var bp = ls(pu), Cp = ls(function(e, t) {
        return e >= t;
      }), Tr = Sl(function() {
        return arguments;
      }()) ? Sl : function(e) {
        return tt(e) && Be.call(e, "callee") && !al.call(e, "callee");
      }, pe = I.isArray, Tp = qo ? Zt(qo) : L_;
      function Ht(e) {
        return e != null && ms(e.length) && !Bn(e);
      }
      function ot(e) {
        return tt(e) && Ht(e);
      }
      function Sp(e) {
        return e === !0 || e === !1 || tt(e) && Pt(e) == $e;
      }
      var ir = Wh || to, Dp = Ko ? Zt(Ko) : O_;
      function Ep(e) {
        return tt(e) && e.nodeType === 1 && !bi(e);
      }
      function kp(e) {
        if (e == null)
          return !0;
        if (Ht(e) && (pe(e) || typeof e == "string" || typeof e.splice == "function" || ir(e) || Zr(e) || Tr(e)))
          return !e.length;
        var t = Et(e);
        if (t == dt || t == J)
          return !e.size;
        if (wi(e))
          return !wu(e).length;
        for (var s in e)
          if (Be.call(e, s))
            return !1;
        return !0;
      }
      function Ap(e, t) {
        return pi(e, t);
      }
      function Ip(e, t, s) {
        s = typeof s == "function" ? s : r;
        var f = s ? s(e, t) : r;
        return f === r ? pi(e, t, r, s) : !!f;
      }
      function qu(e) {
        if (!tt(e))
          return !1;
        var t = Pt(e);
        return t == Qe || t == Ie || typeof e.message == "string" && typeof e.name == "string" && !bi(e);
      }
      function Rp(e) {
        return typeof e == "number" && hl(e);
      }
      function Bn(e) {
        if (!je(e))
          return !1;
        var t = Pt(e);
        return t == et || t == Bt || t == _t || t == Ir;
      }
      function Pf(e) {
        return typeof e == "number" && e == ve(e);
      }
      function ms(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Q;
      }
      function je(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function tt(e) {
        return e != null && typeof e == "object";
      }
      var Mf = Xo ? Zt(Xo) : M_;
      function Lp(e, t) {
        return e === t || vu(e, t, Uu(t));
      }
      function Op(e, t, s) {
        return s = typeof s == "function" ? s : r, vu(e, t, Uu(t), s);
      }
      function Pp(e) {
        return Uf(e) && e != +e;
      }
      function Mp(e) {
        if (md(e))
          throw new ge(a);
        return Dl(e);
      }
      function Up(e) {
        return e === null;
      }
      function Fp(e) {
        return e == null;
      }
      function Uf(e) {
        return typeof e == "number" || tt(e) && Pt(e) == ne;
      }
      function bi(e) {
        if (!tt(e) || Pt(e) != gt)
          return !1;
        var t = Yi(e);
        if (t === null)
          return !0;
        var s = Be.call(t, "constructor") && t.constructor;
        return typeof s == "function" && s instanceof s && Hi.call(s) == Oh;
      }
      var Ku = Zo ? Zt(Zo) : U_;
      function Bp(e) {
        return Pf(e) && e >= -Q && e <= Q;
      }
      var Ff = Jo ? Zt(Jo) : F_;
      function vs(e) {
        return typeof e == "string" || !pe(e) && tt(e) && Pt(e) == Wt;
      }
      function Qt(e) {
        return typeof e == "symbol" || tt(e) && Pt(e) == Lt;
      }
      var Zr = Qo ? Zt(Qo) : B_;
      function Wp(e) {
        return e === r;
      }
      function Np(e) {
        return tt(e) && Et(e) == st;
      }
      function Hp(e) {
        return tt(e) && Pt(e) == cn;
      }
      var Gp = ls(yu), zp = ls(function(e, t) {
        return e <= t;
      });
      function Bf(e) {
        if (!e)
          return [];
        if (Ht(e))
          return vs(e) ? _n(e) : Nt(e);
        if (li && e[li])
          return yh(e[li]());
        var t = Et(e), s = t == dt ? ou : t == J ? Bi : Jr;
        return s(e);
      }
      function Wn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = an(e), e === ze || e === -ze) {
          var t = e < 0 ? -1 : 1;
          return t * oe;
        }
        return e === e ? e : 0;
      }
      function ve(e) {
        var t = Wn(e), s = t % 1;
        return t === t ? s ? t - s : t : 0;
      }
      function Wf(e) {
        return e ? wr(ve(e), 0, Le) : 0;
      }
      function an(e) {
        if (typeof e == "number")
          return e;
        if (Qt(e))
          return te;
        if (je(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = je(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = nl(e);
        var s = zs.test(e);
        return s || xs.test(e) ? rh(e.slice(2), s ? 2 : 8) : Gs.test(e) ? te : +e;
      }
      function Nf(e) {
        return Dn(e, Gt(e));
      }
      function xp(e) {
        return e ? wr(ve(e), -Q, Q) : e === 0 ? e : 0;
      }
      function Fe(e) {
        return e == null ? "" : Jt(e);
      }
      var Yp = qr(function(e, t) {
        if (wi(t) || Ht(t)) {
          Dn(t, yt(t), e);
          return;
        }
        for (var s in t)
          Be.call(t, s) && _i(e, s, t[s]);
      }), Hf = qr(function(e, t) {
        Dn(t, Gt(t), e);
      }), ws = qr(function(e, t, s, f) {
        Dn(t, Gt(t), e, f);
      }), qp = qr(function(e, t, s, f) {
        Dn(t, yt(t), e, f);
      }), Kp = Un(_u);
      function Xp(e, t) {
        var s = Yr(e);
        return t == null ? s : ml(s, t);
      }
      var Zp = be(function(e, t) {
        e = xe(e);
        var s = -1, f = t.length, h = f > 2 ? t[2] : r;
        for (h && Mt(t[0], t[1], h) && (f = 1); ++s < f; )
          for (var p = t[s], m = Gt(p), y = -1, S = m.length; ++y < S; ) {
            var M = m[y], U = e[M];
            (U === r || gn(U, Gr[M]) && !Be.call(e, M)) && (e[M] = p[M]);
          }
        return e;
      }), Jp = be(function(e) {
        return e.push(r, nf), Xt(Gf, r, e);
      });
      function Qp(e, t) {
        return jo(e, fe(t, 3), Sn);
      }
      function Vp(e, t) {
        return jo(e, fe(t, 3), gu);
      }
      function jp(e, t) {
        return e == null ? e : du(e, fe(t, 3), Gt);
      }
      function $p(e, t) {
        return e == null ? e : Cl(e, fe(t, 3), Gt);
      }
      function e1(e, t) {
        return e && Sn(e, fe(t, 3));
      }
      function t1(e, t) {
        return e && gu(e, fe(t, 3));
      }
      function n1(e) {
        return e == null ? [] : es(e, yt(e));
      }
      function r1(e) {
        return e == null ? [] : es(e, Gt(e));
      }
      function Xu(e, t, s) {
        var f = e == null ? r : yr(e, t);
        return f === r ? s : f;
      }
      function i1(e, t) {
        return e != null && uf(e, t, k_);
      }
      function Zu(e, t) {
        return e != null && uf(e, t, A_);
      }
      var s1 = Vl(function(e, t, s) {
        t != null && typeof t.toString != "function" && (t = Gi.call(t)), e[t] = s;
      }, Qu(zt)), u1 = Vl(function(e, t, s) {
        t != null && typeof t.toString != "function" && (t = Gi.call(t)), Be.call(e, t) ? e[t].push(s) : e[t] = [s];
      }, fe), o1 = be(gi);
      function yt(e) {
        return Ht(e) ? gl(e) : wu(e);
      }
      function Gt(e) {
        return Ht(e) ? gl(e, !0) : W_(e);
      }
      function l1(e, t) {
        var s = {};
        return t = fe(t, 3), Sn(e, function(f, h, p) {
          Pn(s, t(f, h, p), f);
        }), s;
      }
      function f1(e, t) {
        var s = {};
        return t = fe(t, 3), Sn(e, function(f, h, p) {
          Pn(s, h, t(f, h, p));
        }), s;
      }
      var a1 = qr(function(e, t, s) {
        ts(e, t, s);
      }), Gf = qr(function(e, t, s, f) {
        ts(e, t, s, f);
      }), c1 = Un(function(e, t) {
        var s = {};
        if (e == null)
          return s;
        var f = !1;
        t = Xe(t, function(p) {
          return p = nr(p, e), f || (f = p.length > 1), p;
        }), Dn(e, Pu(e), s), f && (s = on(s, C | w | T, sd));
        for (var h = t.length; h--; )
          Du(s, t[h]);
        return s;
      });
      function h1(e, t) {
        return zf(e, ps(fe(t)));
      }
      var _1 = Un(function(e, t) {
        return e == null ? {} : H_(e, t);
      });
      function zf(e, t) {
        if (e == null)
          return {};
        var s = Xe(Pu(e), function(f) {
          return [f];
        });
        return t = fe(t), Ol(e, s, function(f, h) {
          return t(f, h[0]);
        });
      }
      function d1(e, t, s) {
        t = nr(t, e);
        var f = -1, h = t.length;
        for (h || (h = 1, e = r); ++f < h; ) {
          var p = e == null ? r : e[En(t[f])];
          p === r && (f = h, p = s), e = Bn(p) ? p.call(e) : p;
        }
        return e;
      }
      function g1(e, t, s) {
        return e == null ? e : mi(e, t, s);
      }
      function p1(e, t, s, f) {
        return f = typeof f == "function" ? f : r, e == null ? e : mi(e, t, s, f);
      }
      var xf = ef(yt), Yf = ef(Gt);
      function m1(e, t, s) {
        var f = pe(e), h = f || ir(e) || Zr(e);
        if (t = fe(t, 4), s == null) {
          var p = e && e.constructor;
          h ? s = f ? new p() : [] : je(e) ? s = Bn(p) ? Yr(Yi(e)) : {} : s = {};
        }
        return (h ? rn : Sn)(e, function(m, y, S) {
          return t(s, m, y, S);
        }), s;
      }
      function v1(e, t) {
        return e == null ? !0 : Du(e, t);
      }
      function w1(e, t, s) {
        return e == null ? e : Bl(e, t, Au(s));
      }
      function y1(e, t, s, f) {
        return f = typeof f == "function" ? f : r, e == null ? e : Bl(e, t, Au(s), f);
      }
      function Jr(e) {
        return e == null ? [] : uu(e, yt(e));
      }
      function b1(e) {
        return e == null ? [] : uu(e, Gt(e));
      }
      function C1(e, t, s) {
        return s === r && (s = t, t = r), s !== r && (s = an(s), s = s === s ? s : 0), t !== r && (t = an(t), t = t === t ? t : 0), wr(an(e), t, s);
      }
      function T1(e, t, s) {
        return t = Wn(t), s === r ? (s = t, t = 0) : s = Wn(s), e = an(e), I_(e, t, s);
      }
      function S1(e, t, s) {
        if (s && typeof s != "boolean" && Mt(e, t, s) && (t = s = r), s === r && (typeof t == "boolean" ? (s = t, t = r) : typeof e == "boolean" && (s = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Wn(e), t === r ? (t = e, e = 0) : t = Wn(t)), e > t) {
          var f = e;
          e = t, t = f;
        }
        if (s || e % 1 || t % 1) {
          var h = _l();
          return Dt(e + h * (t - e + nh("1e-" + ((h + "").length - 1))), t);
        }
        return Cu(e, t);
      }
      var D1 = Kr(function(e, t, s) {
        return t = t.toLowerCase(), e + (s ? qf(t) : t);
      });
      function qf(e) {
        return Ju(Fe(e).toLowerCase());
      }
      function Kf(e) {
        return e = Fe(e), e && e.replace(Jn, gh).replace(Kc, "");
      }
      function E1(e, t, s) {
        e = Fe(e), t = Jt(t);
        var f = e.length;
        s = s === r ? f : wr(ve(s), 0, f);
        var h = s;
        return s -= t.length, s >= 0 && e.slice(s, h) == t;
      }
      function k1(e) {
        return e = Fe(e), e && Tn.test(e) ? e.replace(hn, ph) : e;
      }
      function A1(e) {
        return e = Fe(e), e && Li.test(e) ? e.replace(si, "\\$&") : e;
      }
      var I1 = Kr(function(e, t, s) {
        return e + (s ? "-" : "") + t.toLowerCase();
      }), R1 = Kr(function(e, t, s) {
        return e + (s ? " " : "") + t.toLowerCase();
      }), L1 = Zl("toLowerCase");
      function O1(e, t, s) {
        e = Fe(e), t = ve(t);
        var f = t ? Nr(e) : 0;
        if (!t || f >= t)
          return e;
        var h = (t - f) / 2;
        return os(Zi(h), s) + e + os(Xi(h), s);
      }
      function P1(e, t, s) {
        e = Fe(e), t = ve(t);
        var f = t ? Nr(e) : 0;
        return t && f < t ? e + os(t - f, s) : e;
      }
      function M1(e, t, s) {
        e = Fe(e), t = ve(t);
        var f = t ? Nr(e) : 0;
        return t && f < t ? os(t - f, s) + e : e;
      }
      function U1(e, t, s) {
        return s || t == null ? t = 0 : t && (t = +t), zh(Fe(e).replace(In, ""), t || 0);
      }
      function F1(e, t, s) {
        return (s ? Mt(e, t, s) : t === r) ? t = 1 : t = ve(t), Tu(Fe(e), t);
      }
      function B1() {
        var e = arguments, t = Fe(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var W1 = Kr(function(e, t, s) {
        return e + (s ? "_" : "") + t.toLowerCase();
      });
      function N1(e, t, s) {
        return s && typeof s != "number" && Mt(e, t, s) && (t = s = r), s = s === r ? Le : s >>> 0, s ? (e = Fe(e), e && (typeof t == "string" || t != null && !Ku(t)) && (t = Jt(t), !t && Wr(e)) ? rr(_n(e), 0, s) : e.split(t, s)) : [];
      }
      var H1 = Kr(function(e, t, s) {
        return e + (s ? " " : "") + Ju(t);
      });
      function G1(e, t, s) {
        return e = Fe(e), s = s == null ? 0 : wr(ve(s), 0, e.length), t = Jt(t), e.slice(s, s + t.length) == t;
      }
      function z1(e, t, s) {
        var f = d.templateSettings;
        s && Mt(e, t, s) && (t = r), e = Fe(e), t = ws({}, t, f, tf);
        var h = ws({}, t.imports, f.imports, tf), p = yt(h), m = uu(h, p), y, S, M = 0, U = t.interpolate || Rn, G = "__p += '", Z = lu(
          (t.escape || Rn).source + "|" + U.source + "|" + (U === Mr ? Pi : Rn).source + "|" + (t.evaluate || Rn).source + "|$",
          "g"
        ), re = "//# sourceURL=" + (Be.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Vc + "]") + `
`;
        e.replace(Z, function(ce, Ce, Ee, Vt, Ut, jt) {
          return Ee || (Ee = Vt), G += e.slice(M, jt).replace(Ys, mh), Ce && (y = !0, G += `' +
__e(` + Ce + `) +
'`), Ut && (S = !0, G += `';
` + Ut + `;
__p += '`), Ee && (G += `' +
((__t = (` + Ee + `)) == null ? '' : __t) +
'`), M = jt + ce.length, ce;
        }), G += `';
`;
        var ae = Be.call(t, "variable") && t.variable;
        if (!ae)
          G = `with (obj) {
` + G + `
}
`;
        else if (Ns.test(ae))
          throw new ge(c);
        G = (S ? G.replace(Cn, "") : G).replace(ri, "$1").replace(Lr, "$1;"), G = "function(" + (ae || "obj") + `) {
` + (ae ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (y ? ", __e = _.escape" : "") + (S ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + G + `return __p
}`;
        var we = Zf(function() {
          return Pe(p, re + "return " + G).apply(r, m);
        });
        if (we.source = G, qu(we))
          throw we;
        return we;
      }
      function x1(e) {
        return Fe(e).toLowerCase();
      }
      function Y1(e) {
        return Fe(e).toUpperCase();
      }
      function q1(e, t, s) {
        if (e = Fe(e), e && (s || t === r))
          return nl(e);
        if (!e || !(t = Jt(t)))
          return e;
        var f = _n(e), h = _n(t), p = rl(f, h), m = il(f, h) + 1;
        return rr(f, p, m).join("");
      }
      function K1(e, t, s) {
        if (e = Fe(e), e && (s || t === r))
          return e.slice(0, ul(e) + 1);
        if (!e || !(t = Jt(t)))
          return e;
        var f = _n(e), h = il(f, _n(t)) + 1;
        return rr(f, 0, h).join("");
      }
      function X1(e, t, s) {
        if (e = Fe(e), e && (s || t === r))
          return e.replace(In, "");
        if (!e || !(t = Jt(t)))
          return e;
        var f = _n(e), h = rl(f, _n(t));
        return rr(f, h).join("");
      }
      function Z1(e, t) {
        var s = X, f = K;
        if (je(t)) {
          var h = "separator" in t ? t.separator : h;
          s = "length" in t ? ve(t.length) : s, f = "omission" in t ? Jt(t.omission) : f;
        }
        e = Fe(e);
        var p = e.length;
        if (Wr(e)) {
          var m = _n(e);
          p = m.length;
        }
        if (s >= p)
          return e;
        var y = s - Nr(f);
        if (y < 1)
          return f;
        var S = m ? rr(m, 0, y).join("") : e.slice(0, y);
        if (h === r)
          return S + f;
        if (m && (y += S.length - y), Ku(h)) {
          if (e.slice(y).search(h)) {
            var M, U = S;
            for (h.global || (h = lu(h.source, Fe(ui.exec(h)) + "g")), h.lastIndex = 0; M = h.exec(U); )
              var G = M.index;
            S = S.slice(0, G === r ? y : G);
          }
        } else if (e.indexOf(Jt(h), y) != y) {
          var Z = S.lastIndexOf(h);
          Z > -1 && (S = S.slice(0, Z));
        }
        return S + f;
      }
      function J1(e) {
        return e = Fe(e), e && ii.test(e) ? e.replace(An, Sh) : e;
      }
      var Q1 = Kr(function(e, t, s) {
        return e + (s ? " " : "") + t.toUpperCase();
      }), Ju = Zl("toUpperCase");
      function Xf(e, t, s) {
        return e = Fe(e), t = s ? r : t, t === r ? wh(e) ? kh(e) : ah(e) : e.match(t) || [];
      }
      var Zf = be(function(e, t) {
        try {
          return Xt(e, r, t);
        } catch (s) {
          return qu(s) ? s : new ge(s);
        }
      }), V1 = Un(function(e, t) {
        return rn(t, function(s) {
          s = En(s), Pn(e, s, xu(e[s], e));
        }), e;
      });
      function j1(e) {
        var t = e == null ? 0 : e.length, s = fe();
        return e = t ? Xe(e, function(f) {
          if (typeof f[1] != "function")
            throw new sn(l);
          return [s(f[0]), f[1]];
        }) : [], be(function(f) {
          for (var h = -1; ++h < t; ) {
            var p = e[h];
            if (Xt(p[0], this, f))
              return Xt(p[1], this, f);
          }
        });
      }
      function $1(e) {
        return S_(on(e, C));
      }
      function Qu(e) {
        return function() {
          return e;
        };
      }
      function e0(e, t) {
        return e == null || e !== e ? t : e;
      }
      var t0 = Ql(), n0 = Ql(!0);
      function zt(e) {
        return e;
      }
      function Vu(e) {
        return El(typeof e == "function" ? e : on(e, C));
      }
      function r0(e) {
        return Al(on(e, C));
      }
      function i0(e, t) {
        return Il(e, on(t, C));
      }
      var s0 = be(function(e, t) {
        return function(s) {
          return gi(s, e, t);
        };
      }), u0 = be(function(e, t) {
        return function(s) {
          return gi(e, s, t);
        };
      });
      function ju(e, t, s) {
        var f = yt(t), h = es(t, f);
        s == null && !(je(t) && (h.length || !f.length)) && (s = t, t = e, e = this, h = es(t, yt(t)));
        var p = !(je(s) && "chain" in s) || !!s.chain, m = Bn(e);
        return rn(h, function(y) {
          var S = t[y];
          e[y] = S, m && (e.prototype[y] = function() {
            var M = this.__chain__;
            if (p || M) {
              var U = e(this.__wrapped__), G = U.__actions__ = Nt(this.__actions__);
              return G.push({ func: S, args: arguments, thisArg: e }), U.__chain__ = M, U;
            }
            return S.apply(e, Vn([this.value()], arguments));
          });
        }), e;
      }
      function o0() {
        return Ct._ === this && (Ct._ = Ph), this;
      }
      function $u() {
      }
      function l0(e) {
        return e = ve(e), be(function(t) {
          return Rl(t, e);
        });
      }
      var f0 = Ru(Xe), a0 = Ru(Vo), c0 = Ru(tu);
      function Jf(e) {
        return Bu(e) ? nu(En(e)) : G_(e);
      }
      function h0(e) {
        return function(t) {
          return e == null ? r : yr(e, t);
        };
      }
      var _0 = jl(), d0 = jl(!0);
      function eo() {
        return [];
      }
      function to() {
        return !1;
      }
      function g0() {
        return {};
      }
      function p0() {
        return "";
      }
      function m0() {
        return !0;
      }
      function v0(e, t) {
        if (e = ve(e), e < 1 || e > Q)
          return [];
        var s = Le, f = Dt(e, Le);
        t = fe(t), e -= Le;
        for (var h = su(f, t); ++s < e; )
          t(s);
        return h;
      }
      function w0(e) {
        return pe(e) ? Xe(e, En) : Qt(e) ? [e] : Nt(gf(Fe(e)));
      }
      function y0(e) {
        var t = ++Lh;
        return Fe(e) + t;
      }
      var b0 = us(function(e, t) {
        return e + t;
      }, 0), C0 = Lu("ceil"), T0 = us(function(e, t) {
        return e / t;
      }, 1), S0 = Lu("floor");
      function D0(e) {
        return e && e.length ? $i(e, zt, pu) : r;
      }
      function E0(e, t) {
        return e && e.length ? $i(e, fe(t, 2), pu) : r;
      }
      function k0(e) {
        return el(e, zt);
      }
      function A0(e, t) {
        return el(e, fe(t, 2));
      }
      function I0(e) {
        return e && e.length ? $i(e, zt, yu) : r;
      }
      function R0(e, t) {
        return e && e.length ? $i(e, fe(t, 2), yu) : r;
      }
      var L0 = us(function(e, t) {
        return e * t;
      }, 1), O0 = Lu("round"), P0 = us(function(e, t) {
        return e - t;
      }, 0);
      function M0(e) {
        return e && e.length ? iu(e, zt) : 0;
      }
      function U0(e, t) {
        return e && e.length ? iu(e, fe(t, 2)) : 0;
      }
      return d.after = rp, d.ary = Ef, d.assign = Yp, d.assignIn = Hf, d.assignInWith = ws, d.assignWith = qp, d.at = Kp, d.before = kf, d.bind = xu, d.bindAll = V1, d.bindKey = Af, d.castArray = gp, d.chain = Tf, d.chunk = Sd, d.compact = Dd, d.concat = Ed, d.cond = j1, d.conforms = $1, d.constant = Qu, d.countBy = Mg, d.create = Xp, d.curry = If, d.curryRight = Rf, d.debounce = Lf, d.defaults = Zp, d.defaultsDeep = Jp, d.defer = ip, d.delay = sp, d.difference = kd, d.differenceBy = Ad, d.differenceWith = Id, d.drop = Rd, d.dropRight = Ld, d.dropRightWhile = Od, d.dropWhile = Pd, d.fill = Md, d.filter = Fg, d.flatMap = Ng, d.flatMapDeep = Hg, d.flatMapDepth = Gg, d.flatten = wf, d.flattenDeep = Ud, d.flattenDepth = Fd, d.flip = up, d.flow = t0, d.flowRight = n0, d.fromPairs = Bd, d.functions = n1, d.functionsIn = r1, d.groupBy = zg, d.initial = Nd, d.intersection = Hd, d.intersectionBy = Gd, d.intersectionWith = zd, d.invert = s1, d.invertBy = u1, d.invokeMap = Yg, d.iteratee = Vu, d.keyBy = qg, d.keys = yt, d.keysIn = Gt, d.map = _s, d.mapKeys = l1, d.mapValues = f1, d.matches = r0, d.matchesProperty = i0, d.memoize = gs, d.merge = a1, d.mergeWith = Gf, d.method = s0, d.methodOf = u0, d.mixin = ju, d.negate = ps, d.nthArg = l0, d.omit = c1, d.omitBy = h1, d.once = op, d.orderBy = Kg, d.over = f0, d.overArgs = lp, d.overEvery = a0, d.overSome = c0, d.partial = Yu, d.partialRight = Of, d.partition = Xg, d.pick = _1, d.pickBy = zf, d.property = Jf, d.propertyOf = h0, d.pull = Kd, d.pullAll = bf, d.pullAllBy = Xd, d.pullAllWith = Zd, d.pullAt = Jd, d.range = _0, d.rangeRight = d0, d.rearg = fp, d.reject = Qg, d.remove = Qd, d.rest = ap, d.reverse = Gu, d.sampleSize = jg, d.set = g1, d.setWith = p1, d.shuffle = $g, d.slice = Vd, d.sortBy = np, d.sortedUniq = ig, d.sortedUniqBy = sg, d.split = N1, d.spread = cp, d.tail = ug, d.take = og, d.takeRight = lg, d.takeRightWhile = fg, d.takeWhile = ag, d.tap = Dg, d.throttle = hp, d.thru = hs, d.toArray = Bf, d.toPairs = xf, d.toPairsIn = Yf, d.toPath = w0, d.toPlainObject = Nf, d.transform = m1, d.unary = _p, d.union = cg, d.unionBy = hg, d.unionWith = _g, d.uniq = dg, d.uniqBy = gg, d.uniqWith = pg, d.unset = v1, d.unzip = zu, d.unzipWith = Cf, d.update = w1, d.updateWith = y1, d.values = Jr, d.valuesIn = b1, d.without = mg, d.words = Xf, d.wrap = dp, d.xor = vg, d.xorBy = wg, d.xorWith = yg, d.zip = bg, d.zipObject = Cg, d.zipObjectDeep = Tg, d.zipWith = Sg, d.entries = xf, d.entriesIn = Yf, d.extend = Hf, d.extendWith = ws, ju(d, d), d.add = b0, d.attempt = Zf, d.camelCase = D1, d.capitalize = qf, d.ceil = C0, d.clamp = C1, d.clone = pp, d.cloneDeep = vp, d.cloneDeepWith = wp, d.cloneWith = mp, d.conformsTo = yp, d.deburr = Kf, d.defaultTo = e0, d.divide = T0, d.endsWith = E1, d.eq = gn, d.escape = k1, d.escapeRegExp = A1, d.every = Ug, d.find = Bg, d.findIndex = mf, d.findKey = Qp, d.findLast = Wg, d.findLastIndex = vf, d.findLastKey = Vp, d.floor = S0, d.forEach = Sf, d.forEachRight = Df, d.forIn = jp, d.forInRight = $p, d.forOwn = e1, d.forOwnRight = t1, d.get = Xu, d.gt = bp, d.gte = Cp, d.has = i1, d.hasIn = Zu, d.head = yf, d.identity = zt, d.includes = xg, d.indexOf = Wd, d.inRange = T1, d.invoke = o1, d.isArguments = Tr, d.isArray = pe, d.isArrayBuffer = Tp, d.isArrayLike = Ht, d.isArrayLikeObject = ot, d.isBoolean = Sp, d.isBuffer = ir, d.isDate = Dp, d.isElement = Ep, d.isEmpty = kp, d.isEqual = Ap, d.isEqualWith = Ip, d.isError = qu, d.isFinite = Rp, d.isFunction = Bn, d.isInteger = Pf, d.isLength = ms, d.isMap = Mf, d.isMatch = Lp, d.isMatchWith = Op, d.isNaN = Pp, d.isNative = Mp, d.isNil = Fp, d.isNull = Up, d.isNumber = Uf, d.isObject = je, d.isObjectLike = tt, d.isPlainObject = bi, d.isRegExp = Ku, d.isSafeInteger = Bp, d.isSet = Ff, d.isString = vs, d.isSymbol = Qt, d.isTypedArray = Zr, d.isUndefined = Wp, d.isWeakMap = Np, d.isWeakSet = Hp, d.join = xd, d.kebabCase = I1, d.last = fn, d.lastIndexOf = Yd, d.lowerCase = R1, d.lowerFirst = L1, d.lt = Gp, d.lte = zp, d.max = D0, d.maxBy = E0, d.mean = k0, d.meanBy = A0, d.min = I0, d.minBy = R0, d.stubArray = eo, d.stubFalse = to, d.stubObject = g0, d.stubString = p0, d.stubTrue = m0, d.multiply = L0, d.nth = qd, d.noConflict = o0, d.noop = $u, d.now = ds, d.pad = O1, d.padEnd = P1, d.padStart = M1, d.parseInt = U1, d.random = S1, d.reduce = Zg, d.reduceRight = Jg, d.repeat = F1, d.replace = B1, d.result = d1, d.round = O0, d.runInContext = b, d.sample = Vg, d.size = ep, d.snakeCase = W1, d.some = tp, d.sortedIndex = jd, d.sortedIndexBy = $d, d.sortedIndexOf = eg, d.sortedLastIndex = tg, d.sortedLastIndexBy = ng, d.sortedLastIndexOf = rg, d.startCase = H1, d.startsWith = G1, d.subtract = P0, d.sum = M0, d.sumBy = U0, d.template = z1, d.times = v0, d.toFinite = Wn, d.toInteger = ve, d.toLength = Wf, d.toLower = x1, d.toNumber = an, d.toSafeInteger = xp, d.toString = Fe, d.toUpper = Y1, d.trim = q1, d.trimEnd = K1, d.trimStart = X1, d.truncate = Z1, d.unescape = J1, d.uniqueId = y0, d.upperCase = Q1, d.upperFirst = Ju, d.each = Sf, d.eachRight = Df, d.first = yf, ju(d, function() {
        var e = {};
        return Sn(d, function(t, s) {
          Be.call(d.prototype, s) || (e[s] = t);
        }), e;
      }(), { chain: !1 }), d.VERSION = u, rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        d[e].placeholder = d;
      }), rn(["drop", "take"], function(e, t) {
        Se.prototype[e] = function(s) {
          s = s === r ? 1 : mt(ve(s), 0);
          var f = this.__filtered__ && !t ? new Se(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = Dt(s, f.__takeCount__) : f.__views__.push({
            size: Dt(s, Le),
            type: e + (f.__dir__ < 0 ? "Right" : "")
          }), f;
        }, Se.prototype[e + "Right"] = function(s) {
          return this.reverse()[e](s).reverse();
        };
      }), rn(["filter", "map", "takeWhile"], function(e, t) {
        var s = t + 1, f = s == He || s == De;
        Se.prototype[e] = function(h) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: fe(h, 3),
            type: s
          }), p.__filtered__ = p.__filtered__ || f, p;
        };
      }), rn(["head", "last"], function(e, t) {
        var s = "take" + (t ? "Right" : "");
        Se.prototype[e] = function() {
          return this[s](1).value()[0];
        };
      }), rn(["initial", "tail"], function(e, t) {
        var s = "drop" + (t ? "" : "Right");
        Se.prototype[e] = function() {
          return this.__filtered__ ? new Se(this) : this[s](1);
        };
      }), Se.prototype.compact = function() {
        return this.filter(zt);
      }, Se.prototype.find = function(e) {
        return this.filter(e).head();
      }, Se.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Se.prototype.invokeMap = be(function(e, t) {
        return typeof e == "function" ? new Se(this) : this.map(function(s) {
          return gi(s, e, t);
        });
      }), Se.prototype.reject = function(e) {
        return this.filter(ps(fe(e)));
      }, Se.prototype.slice = function(e, t) {
        e = ve(e);
        var s = this;
        return s.__filtered__ && (e > 0 || t < 0) ? new Se(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), t !== r && (t = ve(t), s = t < 0 ? s.dropRight(-t) : s.take(t - e)), s);
      }, Se.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Se.prototype.toArray = function() {
        return this.take(Le);
      }, Sn(Se.prototype, function(e, t) {
        var s = /^(?:filter|find|map|reject)|While$/.test(t), f = /^(?:head|last)$/.test(t), h = d[f ? "take" + (t == "last" ? "Right" : "") : t], p = f || /^find/.test(t);
        h && (d.prototype[t] = function() {
          var m = this.__wrapped__, y = f ? [1] : arguments, S = m instanceof Se, M = y[0], U = S || pe(m), G = function(Ce) {
            var Ee = h.apply(d, Vn([Ce], y));
            return f && Z ? Ee[0] : Ee;
          };
          U && s && typeof M == "function" && M.length != 1 && (S = U = !1);
          var Z = this.__chain__, re = !!this.__actions__.length, ae = p && !Z, we = S && !re;
          if (!p && U) {
            m = we ? m : new Se(this);
            var ce = e.apply(m, y);
            return ce.__actions__.push({ func: hs, args: [G], thisArg: r }), new un(ce, Z);
          }
          return ae && we ? e.apply(this, y) : (ce = this.thru(G), ae ? f ? ce.value()[0] : ce.value() : ce);
        });
      }), rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Wi[e], s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(e);
        d.prototype[e] = function() {
          var h = arguments;
          if (f && !this.__chain__) {
            var p = this.value();
            return t.apply(pe(p) ? p : [], h);
          }
          return this[s](function(m) {
            return t.apply(pe(m) ? m : [], h);
          });
        };
      }), Sn(Se.prototype, function(e, t) {
        var s = d[t];
        if (s) {
          var f = s.name + "";
          Be.call(xr, f) || (xr[f] = []), xr[f].push({ name: t, func: s });
        }
      }), xr[ss(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Se.prototype.clone = Jh, Se.prototype.reverse = Qh, Se.prototype.value = Vh, d.prototype.at = Eg, d.prototype.chain = kg, d.prototype.commit = Ag, d.prototype.next = Ig, d.prototype.plant = Lg, d.prototype.reverse = Og, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = Pg, d.prototype.first = d.prototype.head, li && (d.prototype[li] = Rg), d;
    }, Hr = Ah();
    gr ? ((gr.exports = Hr)._ = Hr, Vs._ = Hr) : Ct._ = Hr;
  }).call(Ci);
})(ks, ks.exports);
ks.exports;
class ei {
  constructor(i) {
    ke(this, "id", -1 * (Math.random() * 1e4 | 0));
    ke(this, "start", /* @__PURE__ */ new Date());
    ke(this, "end", /* @__PURE__ */ new Date());
    ke(this, "state", "In_Progress");
    ke(this, "project");
    ke(this, "task");
    ke(this, "description");
    ke(this, "is_selected", !1);
    const r = {
      ...structuredClone(this),
      ...i
    };
    return Object.setPrototypeOf(r, ei.prototype), r;
  }
  static Is_Same_Range(i, r) {
    return i.start.getTime() === r.start.getTime() && i.end.getTime() === r.end.getTime();
  }
}
var kt = /* @__PURE__ */ ((n) => (n.In_Progress = "In_Progress", n.Error = "Error", n.ToSave = "ToSave", n.Saving = "Saving", n.Stable = "Stable", n.ToDelete = "ToSDelete", n.Deleting = "Deleting", n))(kt || {}), _c = /* @__PURE__ */ ((n) => (n.Creation_Progression = "Creation_Progression", n.Form_Changes = "Form_Changes", n.Form_Finished = "Form_Finished", n.Form_Or_Time_Changes = "Form_Or_Time_Changes", n.Save_Success = "Save_Success", n.Save_Error = "Save_Error", n.Delete = "Delete", n.Start_Saving = "Start_Saving", n.Start_Deleting = "Start_Deleting", n))(_c || {});
const sm = {
  In_Progress: {
    Creation_Progression: "In_Progress",
    Form_Changes: "In_Progress",
    Form_Finished: "ToSave",
    Delete: "ToSDelete"
    /* ToDelete */
  },
  ToSave: {
    Start_Saving: "Saving",
    Save_Error: "Error"
    /* Error */
  },
  ToSDelete: {
    Start_Deleting: "Deleting",
    Save_Error: "Error"
    /* Error */
  },
  Stable: {
    Form_Finished: "ToSave",
    Delete: "ToSDelete",
    Form_Or_Time_Changes: "In_Progress"
    /* In_Progress */
  },
  Error: {
    Form_Or_Time_Changes: "In_Progress",
    Form_Finished: "ToSave"
    /* ToSave */
  },
  Deleting: {
    Save_Success: "Stable",
    Save_Error: "Error"
    /* Error */
  },
  Saving: {
    Save_Success: "Stable",
    Save_Error: "Error"
    /* Error */
  }
};
function um(n, i) {
  const r = { ...n }, o = sm[n.state][i];
  return o ? (r.state = o, r) : n;
}
class io {
  constructor(i, r, u) {
    ke(this, "api_url");
    this.http = i, this.base_url = r, this.employee_id = u, this.api_url = `employees/${u}/trackedtimes`;
  }
  //
  // Fetching
  //
  async fetch_time_entries(i, r) {
    const u = this.url_tracked_times(i, r), o = await this.http.get(u);
    return lm(o.body);
  }
  url_tracked_times(i, r) {
    const u = new URL(this.api_url, this.base_url);
    return u.searchParams.set("start", Gn(i)), u.searchParams.set("end", Gn(r)), u.toString();
  }
  //
  // Saving / Creating
  //
  async save_time_entry(i) {
    const r = this.url_post_tracked_times(), u = fm(i, this.employee_id);
    await this.http.post(r, u);
  }
  url_post_tracked_times() {
    return new URL("trackedtimes", this.base_url).toString();
  }
  //
  // Updating
  //
  async update_time_entry(i) {
    const r = this.url_update_tracked_times(i.id), u = am(i);
    await this.http.put(r, u);
  }
  url_update_tracked_times(i) {
    const r = ["trackedtimes", i].join("/");
    return new URL(r, this.base_url).toString();
  }
  //
  // Deleting
  //
  async delete_time_entry(i) {
    const r = this.url_delete_tracked_times(i.id);
    await this.http.delete(r);
  }
  url_delete_tracked_times(i) {
    const r = ["trackedtimes", i].join("/");
    return new URL(r, this.base_url).toString();
  }
}
const om = {
  WORKING_HOURS: "WORKING_HOURS",
  PUBLIC_HOLIDAY: "PUBLIC_HOLIDAY",
  FLEXIDAY: "FLEXIDAY"
};
function lm(n) {
  const i = [];
  for (const r of n.trackedTimesDate)
    for (const u of r.trackedTimes) {
      if (u.type !== om.WORKING_HOURS)
        continue;
      const o = new ei({
        id: u.id,
        start: /* @__PURE__ */ new Date(`${u.date} ${u.start}`),
        end: /* @__PURE__ */ new Date(`${u.date} ${u.end}`),
        state: kt.Stable,
        project: $0(u.project.id, u.project.name),
        task: em(u.task.id, u.task.name),
        description: u.note
      });
      i.push(o);
    }
  return i;
}
function fm(n, i) {
  if (n.task === void 0)
    throw new Error("time_entry_to_post_tracked_times: time entry must have a task");
  return {
    date: Gn(n.start),
    employee: { id: i },
    trackedTimes: [{
      start: Es(n.start),
      end: Es(n.end),
      note: n.description ?? "",
      task: { id: n.task.id }
    }]
  };
}
function am(n) {
  var i;
  if (n.task === void 0)
    throw new Error("time_entry_to_put_tracked_times: time entry must have a task");
  return {
    date: Gn(n.start),
    trackedTimes: [{
      start: Es(n.start),
      end: Es(n.end),
      note: n.description ?? "",
      task: { id: (i = n.task) == null ? void 0 : i.id }
    }]
  };
}
class cm {
  constructor(i) {
    this.jwt = i;
  }
  async get(i) {
    return await this.fetch("GET", i);
  }
  async delete(i) {
    return await this.fetch("DELETE", i);
  }
  async post(i, r) {
    return await this.fetch("POST", i, r);
  }
  async put(i, r) {
    return await this.fetch("PUT", i, r);
  }
  Auth_Header() {
    return `Bearer ${this.jwt}`;
  }
  async fetch(i, r, u) {
    let o;
    u !== void 0 && (o = JSON.stringify(u));
    const a = await fetch(r, {
      method: i,
      headers: {
        Authorization: this.Auth_Header(),
        Accept: "application/json",
        "content-type": "application/json;charset=UTF-8"
      },
      body: o
    });
    if (a.status >= 400)
      throw new Error(`fetch failed at url='${r}'`);
    const l = await a.text();
    let c = {};
    if (l !== "")
      try {
        c = JSON.parse(l);
      } catch (g) {
        console.warn({ level: "error", msg: "fetch: could not parse response to json", method: i, url: r, err: g, body_text: l });
      }
    return {
      ...a,
      body: c
    };
  }
}
class hm {
  constructor(i = "", r = "") {
    ke(this, "http");
    ke(this, "project_api");
    ke(this, "time_entry_api");
    ke(this, "employee_api");
    ke(this, "employee_id", -1);
    ke(this, "fetch_projects", async (i = /* @__PURE__ */ new Date()) => await this.project_api.fetch_projects(i));
    ke(this, "fetch_time_entires", async (i, r) => await this.time_entry_api.fetch_time_entries(i, r));
    ke(this, "save_time_entry", async (i) => {
      await this.time_entry_api.save_time_entry(i);
    });
    ke(this, "update_time_entry", async (i) => {
      await this.time_entry_api.update_time_entry(i);
    });
    ke(this, "delete_time_entry", async (i) => {
      await this.time_entry_api.delete_time_entry(i);
    });
    ke(this, "fetch_employee", async (i) => await this.employee_api.fetch_employee(i));
    if (this.jwt = i, this.base_url = r, i !== "") {
      const u = na(i);
      this.employee_id = u.employeeId;
    }
    this.http = new cm(i), this.employee_api = new J0(this.http, r), this.project_api = new ro(this.http, r, this.employee_id), this.time_entry_api = new io(this.http, r, this.employee_id);
  }
  set_base_url(i) {
    this.base_url = i, this.project_api.base_url = i, this.employee_api.base_url = i, this.time_entry_api.base_url = i;
  }
  clear_jwt() {
    this.jwt = "", this.http.jwt = "";
  }
  jwt_set(i) {
    this.jwt = i, this.http.jwt = this.jwt;
    const r = na(i);
    this.employee_id = r.employeeId, this.project_api = new ro(this.http, this.base_url, this.employee_id), this.time_entry_api = new io(this.http, this.base_url, this.employee_id);
  }
  employee_id_set(i) {
    this.employee_id = i, this.project_api = new ro(this.http, this.base_url, this.employee_id), this.time_entry_api = new io(this.http, this.base_url, this.employee_id);
  }
  jwt_get() {
    return this.jwt;
  }
}
function na(n) {
  if (!n || n === "")
    throw new Error("now token to parse");
  const r = n.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), u = decodeURIComponent(window.atob(r).split("").map(function(o) {
    return "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
  return JSON.parse(u);
}
const dc = {};
function _m() {
  Os(dc, new hm());
}
function dm() {
  return wt(dc);
}
const Rs = class Rs {
  jwt_get() {
    const i = this.get_JWT_from_local_storage();
    return i || "";
  }
  get_JWT_from_local_storage() {
    return localStorage.getItem(Rs.jwt_storage_key);
  }
};
ke(Rs, "jwt_storage_key", "authToken");
let mo = Rs;
function gm(n) {
  return gc(n, "day");
}
function pm(n) {
  return gc(n, "week");
}
function gc(n, i) {
  return {
    ...n,
    next: "Next " + i,
    prev: "Previous " + i
  };
}
function zn(...n) {
  return Object.assign(...n);
}
function pc(n) {
  return Math.floor(n);
}
function Dr(...n) {
  return Math.min(...n);
}
function ur(...n) {
  return Math.max(...n);
}
function mm(n) {
  return typeof n == "object" && n !== null;
}
function vm() {
  return Symbol("ec");
}
function So(n, i) {
  let r = {
    update(u) {
      for (; n.firstChild; )
        n.removeChild(n.lastChild);
      if (!mm(u))
        n.innerText = u;
      else if (u.domNodes)
        for (let o of u.domNodes)
          n.appendChild(o);
      else
        u.html && (n.innerHTML = u.html);
    }
  };
  return r.update(i), r;
}
const vo = 86400;
function qn(n = void 0) {
  return n !== void 0 ? n instanceof Date ? ia(n) : bm(n) : ia(/* @__PURE__ */ new Date());
}
function mn(n) {
  if (typeof n == "number")
    n = { seconds: n };
  else if (typeof n == "string") {
    let r = 0, u = 2;
    for (let o of n.split(":", 3))
      r += parseInt(o, 10) * Math.pow(60, u--);
    n = { seconds: r };
  } else
    n instanceof Date && (n = { hours: n.getUTCHours(), minutes: n.getUTCMinutes(), seconds: n.getUTCSeconds() });
  let i = n.weeks || n.week || 0;
  return {
    years: n.years || n.year || 0,
    months: n.months || n.month || 0,
    days: i * 7 + (n.days || n.day || 0),
    seconds: (n.hours || n.hour || 0) * 60 * 60 + (n.minutes || n.minute || 0) * 60 + (n.seconds || n.second || 0),
    inWeeks: !!i
  };
}
function Ue(n) {
  return new Date(n.getTime());
}
function nt(n, i, r = 1) {
  n.setUTCFullYear(n.getUTCFullYear() + r * i.years);
  let u = n.getUTCMonth() + r * i.months;
  for (n.setUTCMonth(u), u %= 12, u < 0 && (u += 12); n.getUTCMonth() !== u; )
    Ri(n);
  return n.setUTCDate(n.getUTCDate() + r * i.days), n.setUTCSeconds(n.getUTCSeconds() + r * i.seconds), n;
}
function mc(n, i, r = 1) {
  return nt(n, i, -r);
}
function ti(n, i = 1) {
  return n.setUTCDate(n.getUTCDate() + i), n;
}
function Ri(n, i = 1) {
  return ti(n, -i);
}
function xn(n) {
  return n.setUTCHours(0, 0, 0, 0), n;
}
function At(n) {
  return new Date(
    n.getUTCFullYear(),
    n.getUTCMonth(),
    n.getUTCDate(),
    n.getUTCHours(),
    n.getUTCMinutes(),
    n.getUTCSeconds()
  );
}
function Er(n) {
  return n.toISOString().substring(0, 19);
}
function wm(n, i, r) {
  if (n.getFullYear() !== i.getFullYear())
    return r.format(n) + " - " + r.format(i);
  let u = [];
  if (n.getMonth() !== i.getMonth() && u.push("month"), n.getDate() !== i.getDate() && u.push("day"), !u.length)
    return r.format(n);
  let o = r.resolvedOptions(), a = {};
  for (let w of u)
    a[w] = o[w];
  let l = new Intl.DateTimeFormat(o.locale, a), c = r.format(n), _ = r.format(i), g = l.format(n), v = l.format(i), C = Cm(c, g, _, v);
  return C ? C.head + g + " - " + v + C.tail : c + " - " + _;
}
function Yn(n, ...i) {
  return i.every((r) => n.getTime() === r.getTime());
}
function ym(n, i) {
  let r = i - n.getUTCDay();
  return n.setUTCDate(n.getUTCDate() + (r >= 0 ? r : r + 7)), n;
}
function vc(n, i) {
  let r = i - n.getUTCDay();
  return n.setUTCDate(n.getUTCDate() + (r <= 0 ? r : r - 7)), n;
}
function ra(n) {
  return typeof n == "string" && n.length <= 10;
}
function ia(n) {
  return new Date(Date.UTC(
    n.getFullYear(),
    n.getMonth(),
    n.getDate(),
    n.getHours(),
    n.getMinutes(),
    n.getSeconds()
  ));
}
function bm(n) {
  const i = n.match(/\d+/g);
  return new Date(Date.UTC(
    Number(i[0]),
    Number(i[1]) - 1,
    Number(i[2]),
    Number(i[3] || 0),
    Number(i[4] || 0),
    Number(i[5] || 0)
  ));
}
function Cm(n, i, r, u) {
  let o = 0;
  for (; o < n.length; ) {
    let a;
    if ([o, a] = sa(n, i, o), !a)
      break;
    let l = 0;
    for (; l < r.length; ) {
      let c;
      if ([l, c] = sa(r, u, l), !c)
        break;
      if (a.head === c.head && a.tail === c.tail)
        return a;
    }
  }
  return null;
}
function sa(n, i, r) {
  let u = n.indexOf(i, r);
  if (u >= 0) {
    let o = u + i.length;
    return [o, {
      head: n.substr(0, u),
      tail: n.substr(o)
    }];
  }
  return [-1, null];
}
function wc(n, i, r) {
  r.update((u) => u.set(i, n));
}
function Tm(n) {
  It(n), n.clear();
}
function so(n, i, r, u) {
  let o = document.createElement(n);
  return o.className = i, r ? o.innerHTML = r : u && (o.innerText = u), o;
}
function Sm(n) {
  return n.scrollHeight > n.clientHeight;
}
function ni(n) {
  return n.getBoundingClientRect();
}
function ua(n, i) {
  for (; i--; )
    n = n.parentElement;
  return n;
}
function Dm(n) {
  return ni(n).height;
}
let Do = vm();
function yc(n, i) {
  n[Do] = i;
}
function Em(n) {
  return !!(n != null && n[Do]);
}
function Cs(n) {
  return n[Do];
}
function Si(n, i, r = document) {
  for (let u of r.elementsFromPoint(n, i)) {
    if (Em(u))
      return u;
    if (u.shadowRoot) {
      let o = Si(n, i, u.shadowRoot);
      if (o)
        return o;
    }
  }
  return null;
}
function km(n, i, r, u) {
  return {
    type: n,
    title: i,
    currentStart: r.start,
    currentEnd: r.end,
    activeStart: u.start,
    activeEnd: u.end,
    calendar: void 0
  };
}
function xt(n) {
  return n = zn({}, n), n.currentStart = At(n.currentStart), n.currentEnd = At(n.currentEnd), n.activeStart = At(n.activeStart), n.activeEnd = At(n.activeEnd), n;
}
let Am = 1;
function bc(n) {
  return n.map((i) => ({
    id: "id" in i ? String(i.id) : `{generated-${Am++}}`,
    resourceIds: Array.isArray(i.resourceIds) ? i.resourceIds.map(String) : "resourceId" in i ? [String(i.resourceId)] : [],
    allDay: i.allDay ?? (ra(i.start) && ra(i.end)),
    start: qn(i.start),
    end: qn(i.end),
    title: i.title || "",
    titleHTML: i.titleHTML || "",
    editable: i.editable,
    startEditable: i.startEditable,
    durationEditable: i.durationEditable,
    display: i.display || "auto",
    extendedProps: i.extendedProps || {},
    backgroundColor: i.backgroundColor || i.color,
    textColor: i.textColor
  }));
}
function Im(n) {
  return n.map((i) => ({
    events: i.events,
    url: i.url && i.url.trimEnd("&") || "",
    method: i.method && i.method.toUpperCase() || "GET",
    extraParams: i.extraParams || {}
  }));
}
function As(n, i, r) {
  return {
    start: n.start > i ? n.start : i,
    end: n.end < r ? n.end : r,
    event: n
  };
}
function Cc(n) {
  n.sort((i, r) => i.start - r.start || r.event.allDay - i.event.allDay);
}
function oa(n, i) {
  let r = {};
  if (n.length) {
    Cc(n);
    let u;
    for (let o of n) {
      let a = [], l = xn(Ue(o.start));
      for (; o.end > l; ) {
        if (!i.includes(l.getUTCDay()) && (a.push(Ue(l)), a.length > 1)) {
          let c = l.getTime();
          r[c] ? r[c].chunks.push(o) : r[c] = {
            sorted: !1,
            chunks: [o]
          };
        }
        ti(l);
      }
      a.length ? (o.date = a[0], o.days = a.length, o.dates = a, o.start < a[0] && (o.start = a[0]), xn(Ue(o.end)) > a[a.length - 1] && (o.end = a[a.length - 1])) : (o.date = xn(Ue(o.start)), o.days = 1, o.dates = [o.date]), u && Yn(u.date, o.date) && (o.prev = u), u = o;
    }
  }
  return r;
}
function Rm(n, i, r) {
  var a, l;
  n.top = 0, n.prev && (n.top = n.prev.bottom + 1), n.bottom = n.top + r;
  let u = 1, o = n.date.getTime();
  if ((a = i[o]) != null && a.sorted || (l = i[o]) != null && l.chunks.every((c) => "top" in c)) {
    i[o].sorted || (i[o].chunks.sort((c, _) => c.top - _.top), i[o].sorted = !0);
    for (let c of i[o].chunks)
      if (n.top < c.bottom && n.bottom > c.top) {
        let _ = c.bottom - n.top + 1;
        u += _, n.top += _, n.bottom += _;
      }
  }
  return u;
}
function Tc(n, i, r, u, o, a) {
  let l = o.format(n.start), c;
  if (i && n.event.display !== "pointer" && (l += ` - ${o.format(n.end)}`), r)
    c = he(r) ? r({
      event: $t(n.event),
      timeText: l,
      view: xt(a)
    }) : r;
  else
    switch (n.event.display) {
      case "background":
        c = "";
        break;
      case "pointer":
        c = {
          domNodes: [so("div", u.eventTime, null, l)]
        };
        break;
      default:
        c = {
          domNodes: [
            ...n.event.allDay ? [] : [so("div", u.eventTime, null, l)],
            so("div", u.eventTitle, n.event.titleHTML, n.event.title)
          ]
        };
    }
  return [l, c];
}
function Sc(n, i, r) {
  return n ? (he(n) && (n = n({
    event: $t(i),
    view: xt(r)
  })), Array.isArray(n) ? n : [n]) : [];
}
function $t(n) {
  return Dc(n, At);
}
function la(n) {
  return Dc(n, Ue);
}
function Dc(n, i) {
  return n = zn({}, n), n.start = i(n.start), n.end = i(n.end), n;
}
function Is(n, i, r, u, o) {
  return (n.start < r && n.end > i || !o && Yn(n.start, n.end, i)) && (u === void 0 || n.resourceIds.includes(u.id));
}
function Kn(n) {
  return Ec(n) || kc(n) || Lm(n);
}
function Hn(n) {
  return n === "background";
}
function Ec(n) {
  return n === "preview";
}
function kc(n) {
  return n === "ghost";
}
function Lm(n) {
  return n === "pointer";
}
function Om(n, i, r) {
  return {
    ...vt(i ? i(n) : n, r),
    parse: i
  };
}
function Ac(n, i, r) {
  let u = r, o = !1, a = i.length < 2, c = Yt(n, (_, g) => (o = !0, a ? (u = i(_, g), g(u)) : i(_, (v) => {
    u = v, g(v);
  }), () => {
    o = !1;
  }), u);
  return {
    ...c,
    get: () => o ? u : yo(c)
  };
}
function uo(n, i) {
  return Yt([n, i], ([r, u]) => {
    let o = he(u) ? { format: u } : new Intl.DateTimeFormat(r, u);
    return {
      format: (a) => o.format(At(a))
    };
  });
}
function Pm(n, i) {
  return Yt([n, i], ([r, u]) => {
    if (he(u))
      return { format: (a, l) => u(At(a), At(l)) };
    let o = new Intl.DateTimeFormat(r, u);
    return {
      format: (a, l) => wm(At(a), At(l), o)
    };
  });
}
function Mm(n) {
  var r;
  let i = {
    allDayContent: void 0,
    allDaySlot: !0,
    buttonText: {
      today: "today"
    },
    date: /* @__PURE__ */ new Date(),
    datesSet: void 0,
    dayHeaderFormat: {
      weekday: "short",
      month: "numeric",
      day: "numeric"
    },
    displayEventEnd: !0,
    duration: { weeks: 1 },
    events: [],
    eventBackgroundColor: void 0,
    eventTextColor: void 0,
    eventClassNames: void 0,
    eventClick: void 0,
    eventColor: void 0,
    eventContent: void 0,
    eventDidMount: void 0,
    eventMouseEnter: void 0,
    eventMouseLeave: void 0,
    eventSources: [],
    eventTimeFormat: {
      hour: "numeric",
      minute: "2-digit"
    },
    firstDay: 0,
    flexibleSlotTimeLimits: !1,
    // ec option
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    height: "auto",
    hiddenDays: [],
    highlightedDates: [],
    // ec option
    lazyFetching: !0,
    loading: void 0,
    locale: void 0,
    nowIndicator: !1,
    selectable: !1,
    scrollTime: "06:00:00",
    slotDuration: "00:30:00",
    slotEventOverlap: !0,
    slotHeight: 24,
    // ec option
    slotLabelFormat: {
      hour: "numeric",
      minute: "2-digit"
    },
    slotMaxTime: "24:00:00",
    slotMinTime: "00:00:00",
    theme: {
      allDay: "ec-all-day",
      active: "ec-active",
      bgEvent: "ec-bg-event",
      bgEvents: "ec-bg-events",
      body: "ec-body",
      button: "ec-button",
      buttonGroup: "ec-button-group",
      calendar: "ec",
      compact: "ec-compact",
      content: "ec-content",
      day: "ec-day",
      dayHead: "ec-day-head",
      days: "ec-days",
      event: "ec-event",
      eventBody: "ec-event-body",
      eventTime: "ec-event-time",
      eventTitle: "ec-event-title",
      events: "ec-events",
      extra: "ec-extra",
      handle: "ec-handle",
      header: "ec-header",
      hiddenScroll: "ec-hidden-scroll",
      highlight: "ec-highlight",
      icon: "ec-icon",
      line: "ec-line",
      lines: "ec-lines",
      nowIndicator: "ec-now-indicator",
      otherMonth: "ec-other-month",
      sidebar: "ec-sidebar",
      sidebarTitle: "ec-sidebar-title",
      today: "ec-today",
      time: "ec-time",
      title: "ec-title",
      toolbar: "ec-toolbar",
      week: "ec-week",
      withScroll: "ec-with-scroll"
    },
    titleFormat: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    view: void 0,
    viewDidMount: void 0,
    views: {}
  };
  for (let u of n)
    (r = u.createOptions) == null || r.call(u, i);
  return i;
}
function Um(n, i) {
  var u;
  let r = {
    buttonText: (o) => he(o) ? o(n.buttonText) : o,
    date: (o) => xn(qn(o)),
    duration: mn,
    events: bc,
    eventSources: Im,
    hiddenDays: (o) => [...new Set(o)],
    highlightedDates: (o) => o.map(qn),
    scrollTime: mn,
    slotDuration: mn,
    slotMaxTime: mn,
    slotMinTime: mn,
    theme: (o) => he(o) ? o(n.theme) : o
  };
  for (let o of i)
    (u = o.createParsers) == null || u.call(o, r, n);
  return r;
}
let oo;
function Fm(n) {
  let i = [];
  if (oo)
    for (let r of Object.keys(n))
      n[r] !== oo[r] && i.push([r, n[r]]);
  return oo = zn({}, n), i;
}
function Bm(n) {
  return Yt(n.view, (i) => i == null ? void 0 : i.startsWith("dayGrid"));
}
function Wm(n) {
  return Yt(
    [n._currentRange, n.firstDay, n.slotMaxTime, n._monthMode],
    ([i, r, u, o]) => {
      let a = Ue(i.start), l = Ue(i.end);
      if (o)
        vc(a, r), ym(l, r);
      else if (u.days || u.seconds > vo) {
        nt(Ri(l), u);
        let c = Ri(Ue(l));
        c < a && (a = c);
      }
      return { start: a, end: l };
    }
  );
}
function Nm(n) {
  return Yt(
    [n.date, n.duration, n.firstDay, n._monthMode],
    ([i, r, u, o]) => {
      let a = Ue(i), l;
      return o ? a.setUTCDate(1) : r.inWeeks && vc(a, u), l = nt(Ue(a), r), { start: a, end: l };
    }
  );
}
function Hm(n) {
  return Ac([n._activeRange, n.hiddenDays], ([i, r]) => {
    let u = [], o = xn(Ue(i.start)), a = xn(Ue(i.end));
    for (; o < a; )
      r.includes(o.getUTCDay()) || u.push(Ue(o)), ti(o);
    return !u.length && r.length && r.length < 7 && (n.date.update((l) => {
      for (; r.includes(l.getUTCDay()); )
        ti(l);
      return l;
    }), u = n._viewDates.get()), u;
  });
}
function Gm(n) {
  return Yt(
    [n.date, n._activeRange, n._titleIntlRange, n._monthMode],
    ([i, r, u, o]) => o ? u.format(i, i) : u.format(r.start, Ri(Ue(r.end)))
  );
}
function zm(n) {
  return Ac([n.view, n._viewTitle, n._currentRange, n._activeRange], (i) => km(...i));
}
function xm(n) {
  let i = vt([]), r, u = 0, o = {};
  return Yt(
    [n.events, n.eventSources, n._activeRange, n._fetchedRange, n.lazyFetching, n.loading],
    (a, l) => wc(() => {
      let [c, _, g, v, C, w] = a;
      if (!_.length) {
        l(c);
        return;
      }
      if (!v.start || v.start > g.start || v.end < g.end || !C) {
        r && r.abort(), r = new AbortController(), he(w) && !u && w(!0);
        let T = () => {
          --u === 0 && he(w) && w(!1);
        }, E = [], F = (B) => T(), R = (B) => {
          E = E.concat(bc(B)), l(E), T();
        }, A = Er(g.start), L = Er(g.end);
        for (let B of _) {
          if (he(B.events)) {
            let W = B.events({
              start: At(g.start),
              end: At(g.end),
              startStr: A,
              endStr: L
            }, R, F);
            W !== void 0 && Promise.resolve(W).then(R, F);
          } else {
            let W = he(B.extraParams) ? B.extraParams() : zn({}, B.extraParams);
            W.start = A, W.end = L, W = new URLSearchParams(W);
            let N = B.url, O = {}, D;
            ["GET", "HEAD"].includes(B.method) ? N += (N.includes("?") ? "&" : "?") + W : (O["content-type"] = "application/x-www-form-urlencoded;charset=UTF-8", D = String(W)), fetch(N, { method: B.method, headers: O, body: D, signal: r.signal, credentials: "same-origin" }).then((Y) => Y.json()).then(R).catch(F);
          }
          ++u;
        }
        v.start = g.start, v.end = g.end;
      }
    }, o, n._queue),
    []
  ).subscribe(i.set), i;
}
function Ym() {
  return ac(qn(), (n) => {
    let i = setInterval(() => {
      n(qn());
    }, 1e3);
    return () => clearInterval(i);
  });
}
function qm(n) {
  return Yt(n._now, (i) => xn(Ue(i)));
}
class Km {
  constructor(i, r) {
    var c, _;
    i = i || [];
    let u = Mm(i), o = Um(u, i);
    for (let [g, v] of Object.entries(u))
      this[g] = Om(v, o[g]);
    this._queue = vt(/* @__PURE__ */ new Map()), this._auxiliary = vt([]), this._monthMode = Bm(this), this._currentRange = Nm(this), this._activeRange = Wm(this), this._fetchedRange = vt({ start: void 0, end: void 0 }), this._events = xm(this), this._now = Ym(), this._today = qm(this), this._intlEventTime = uo(this.locale, this.eventTimeFormat), this._intlSlotLabel = uo(this.locale, this.slotLabelFormat), this._intlDayHeader = uo(this.locale, this.dayHeaderFormat), this._titleIntlRange = Pm(this.locale, this.titleFormat), this._bodyEl = vt(void 0), this._scrollable = vt(!1), this._viewTitle = Gm(this), this._viewDates = Hm(this), this._view = zm(this), this._viewClass = vt(void 0), this._viewComponent = vt(void 0), this._resBgColor = vt(Me), this._resTxtColor = vt(Me), this._interaction = vt({}), this._iEvents = vt([null, null]), this._iClasses = vt(W0), this._iClass = vt(void 0);
    for (let g of i)
      (c = g.createStores) == null || c.call(g, this);
    r.view && this.view.set(r.view);
    let a = zn({}, u, r);
    fa(a, this);
    let l = /* @__PURE__ */ new Set([...Object.keys(u.views), ...Object.keys(r.views || {})]);
    for (let g of l) {
      let v = zn({}, u.views[g] ?? {}, ((_ = r.views) == null ? void 0 : _[g]) ?? {});
      fa(v, this);
      let C = zn({}, a, v);
      this.view.subscribe((w) => {
        w === g && (this._viewComponent.set(C.component), he(C.viewDidMount) && lc().then(() => C.viewDidMount(this._view.get())));
      });
      for (let w of Object.keys(C))
        if (this.hasOwnProperty(w) && w[0] !== "_") {
          let { set: T, _set: E, ...F } = this[w];
          E || (E = T), this[w] = {
            // Set value in all views
            set: (R) => {
              C[w] = R, T(R);
            },
            _set: E,
            ...F
          }, this.view.subscribe((R) => {
            R === g && E(C[w]);
          });
        }
    }
  }
}
function fa(n, i) {
  for (let r of Object.keys(n))
    i.hasOwnProperty(r) && r[0] !== "_" && i[r].parse && (n[r] = i[r].parse(n[r]));
}
function aa(n, i, r) {
  const u = n.slice();
  return u[23] = i[r], u;
}
function Xm(n) {
  let i, r = (
    /*$buttonText*/
    n[5][
      /*button*/
      n[23]
    ] + ""
  ), u, o, a, l;
  function c() {
    return (
      /*click_handler_1*/
      n[20](
        /*button*/
        n[23]
      )
    );
  }
  return {
    c() {
      i = se("button"), u = kn(r), z(i, "class", o = /*$theme*/
      n[3].button + /*$view*/
      (n[6] === /*button*/
      n[23] ? " " + /*$theme*/
      n[3].active : "") + " ec-" + /*button*/
      n[23]);
    },
    m(_, g) {
      ue(_, i, g), le(i, u), a || (l = ye(i, "click", c), a = !0);
    },
    p(_, g) {
      n = _, g & /*$buttonText, buttons*/
      33 && r !== (r = /*$buttonText*/
      n[5][
        /*button*/
        n[23]
      ] + "") && kr(u, r), g & /*$theme, $view, buttons*/
      73 && o !== (o = /*$theme*/
      n[3].button + /*$view*/
      (n[6] === /*button*/
      n[23] ? " " + /*$theme*/
      n[3].active : "") + " ec-" + /*button*/
      n[23]) && z(i, "class", o);
    },
    d(_) {
      _ && ie(i), a = !1, l();
    }
  };
}
function Zm(n) {
  let i, r = (
    /*$buttonText*/
    n[5][
      /*button*/
      n[23]
    ] + ""
  ), u, o, a, l;
  return {
    c() {
      i = se("button"), u = kn(r), z(i, "class", o = /*$theme*/
      n[3].button + " ec-" + /*button*/
      n[23]), i.disabled = /*isToday*/
      n[1];
    },
    m(c, _) {
      ue(c, i, _), le(i, u), a || (l = ye(
        i,
        "click",
        /*click_handler*/
        n[19]
      ), a = !0);
    },
    p(c, _) {
      _ & /*$buttonText, buttons*/
      33 && r !== (r = /*$buttonText*/
      c[5][
        /*button*/
        c[23]
      ] + "") && kr(u, r), _ & /*$theme, buttons*/
      9 && o !== (o = /*$theme*/
      c[3].button + " ec-" + /*button*/
      c[23]) && z(i, "class", o), _ & /*isToday*/
      2 && (i.disabled = /*isToday*/
      c[1]);
    },
    d(c) {
      c && ie(i), a = !1, l();
    }
  };
}
function Jm(n) {
  let i, r, u, o, a, l, c;
  return {
    c() {
      i = se("button"), r = se("i"), z(r, "class", u = /*$theme*/
      n[3].icon + " ec-" + /*button*/
      n[23]), z(i, "class", o = /*$theme*/
      n[3].button + " ec-" + /*button*/
      n[23]), z(i, "aria-label", a = /*$buttonText*/
      n[5].next);
    },
    m(_, g) {
      ue(_, i, g), le(i, r), l || (c = ye(
        i,
        "click",
        /*next*/
        n[17]
      ), l = !0);
    },
    p(_, g) {
      g & /*$theme, buttons*/
      9 && u !== (u = /*$theme*/
      _[3].icon + " ec-" + /*button*/
      _[23]) && z(r, "class", u), g & /*$theme, buttons*/
      9 && o !== (o = /*$theme*/
      _[3].button + " ec-" + /*button*/
      _[23]) && z(i, "class", o), g & /*$buttonText*/
      32 && a !== (a = /*$buttonText*/
      _[5].next) && z(i, "aria-label", a);
    },
    d(_) {
      _ && ie(i), l = !1, c();
    }
  };
}
function Qm(n) {
  let i, r, u, o, a, l, c;
  return {
    c() {
      i = se("button"), r = se("i"), z(r, "class", u = /*$theme*/
      n[3].icon + " ec-" + /*button*/
      n[23]), z(i, "class", o = /*$theme*/
      n[3].button + " ec-" + /*button*/
      n[23]), z(i, "aria-label", a = /*$buttonText*/
      n[5].prev);
    },
    m(_, g) {
      ue(_, i, g), le(i, r), l || (c = ye(
        i,
        "click",
        /*prev*/
        n[16]
      ), l = !0);
    },
    p(_, g) {
      g & /*$theme, buttons*/
      9 && u !== (u = /*$theme*/
      _[3].icon + " ec-" + /*button*/
      _[23]) && z(r, "class", u), g & /*$theme, buttons*/
      9 && o !== (o = /*$theme*/
      _[3].button + " ec-" + /*button*/
      _[23]) && z(i, "class", o), g & /*$buttonText*/
      32 && a !== (a = /*$buttonText*/
      _[5].prev) && z(i, "aria-label", a);
    },
    d(_) {
      _ && ie(i), l = !1, c();
    }
  };
}
function Vm(n) {
  let i, r, u;
  return {
    c() {
      i = se("h2"), r = kn(
        /*$_viewTitle*/
        n[4]
      ), z(i, "class", u = /*$theme*/
      n[3].title);
    },
    m(o, a) {
      ue(o, i, a), le(i, r);
    },
    p(o, a) {
      a & /*$_viewTitle*/
      16 && kr(
        r,
        /*$_viewTitle*/
        o[4]
      ), a & /*$theme*/
      8 && u !== (u = /*$theme*/
      o[3].title) && z(i, "class", u);
    },
    d(o) {
      o && ie(i);
    }
  };
}
function ca(n) {
  let i;
  function r(a, l) {
    if (
      /*button*/
      a[23] == "title"
    )
      return Vm;
    if (
      /*button*/
      a[23] == "prev"
    )
      return Qm;
    if (
      /*button*/
      a[23] == "next"
    )
      return Jm;
    if (
      /*button*/
      a[23] == "today"
    )
      return Zm;
    if (
      /*button*/
      a[23] != ""
    )
      return Xm;
  }
  let u = r(n), o = u && u(n);
  return {
    c() {
      o && o.c(), i = Ft();
    },
    m(a, l) {
      o && o.m(a, l), ue(a, i, l);
    },
    p(a, l) {
      u === (u = r(a)) && o ? o.p(a, l) : (o && o.d(1), o = u && u(a), o && (o.c(), o.m(i.parentNode, i)));
    },
    d(a) {
      a && ie(i), o && o.d(a);
    }
  };
}
function jm(n) {
  let i, r = Ge(
    /*buttons*/
    n[0]
  ), u = [];
  for (let o = 0; o < r.length; o += 1)
    u[o] = ca(aa(n, r, o));
  return {
    c() {
      for (let o = 0; o < u.length; o += 1)
        u[o].c();
      i = Ft();
    },
    m(o, a) {
      for (let l = 0; l < u.length; l += 1)
        u[l] && u[l].m(o, a);
      ue(o, i, a);
    },
    p(o, [a]) {
      if (a & /*$theme, $_viewTitle, buttons, $buttonText, prev, next, isToday, $date, today, $view*/
      229503) {
        r = Ge(
          /*buttons*/
          o[0]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = aa(o, r, l);
          u[l] ? u[l].p(c, a) : (u[l] = ca(c), u[l].c(), u[l].m(i.parentNode, i));
        }
        for (; l < u.length; l += 1)
          u[l].d(1);
        u.length = r.length;
      }
    },
    i: Me,
    o: Me,
    d(o) {
      o && ie(i), vn(u, o);
    }
  };
}
function $m(n, i, r) {
  let u, o, a, l, c, _, g, v, { buttons: C } = i, { _currentRange: w, _viewTitle: T, buttonText: E, date: F, duration: R, hiddenDays: A, theme: L, view: B } = wt("state");
  k(n, w, (X) => r(18, l = X)), k(n, T, (X) => r(4, _ = X)), k(n, E, (X) => r(5, g = X)), k(n, F, (X) => r(2, o = X)), k(n, R, (X) => r(21, u = X)), k(n, A, (X) => r(22, a = X)), k(n, L, (X) => r(3, c = X)), k(n, B, (X) => r(6, v = X));
  let W = xn(qn()), N;
  function O() {
    let X = mc(o, u);
    if (a.length && a.length < 7)
      for (; a.includes(X.getUTCDay()); )
        Ri(X);
    We(F, o = X, o);
  }
  function D() {
    We(F, o = nt(o, u), o);
  }
  const Y = () => We(F, o = Ue(W), o), q = (X) => We(B, v = X, v);
  return n.$$set = (X) => {
    "buttons" in X && r(0, C = X.buttons);
  }, n.$$.update = () => {
    n.$$.dirty & /*$_currentRange*/
    262144 && r(1, N = W >= l.start && W < l.end || null);
  }, [
    C,
    N,
    o,
    c,
    _,
    g,
    v,
    w,
    T,
    E,
    F,
    R,
    A,
    L,
    B,
    W,
    O,
    D,
    l,
    Y,
    q
  ];
}
class Ic extends it {
  constructor(i) {
    super(), rt(this, i, $m, jm, Ze, { buttons: 0 });
  }
}
function ha(n, i, r) {
  const u = n.slice();
  return u[5] = i[r], u;
}
function _a(n, i, r) {
  const u = n.slice();
  return u[8] = i[r], u;
}
function ev(n) {
  let i, r;
  return i = new Ic({ props: { buttons: (
    /*buttons*/
    n[8]
  ) } }), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    p(u, o) {
      const a = {};
      o & /*sections*/
      1 && (a.buttons = /*buttons*/
      u[8]), i.$set(a);
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function tv(n) {
  let i, r, u, o;
  return r = new Ic({ props: { buttons: (
    /*buttons*/
    n[8]
  ) } }), {
    c() {
      i = se("div"), Oe(r.$$.fragment), z(i, "class", u = /*$theme*/
      n[1].buttonGroup);
    },
    m(a, l) {
      ue(a, i, l), Re(r, i, null), o = !0;
    },
    p(a, l) {
      const c = {};
      l & /*sections*/
      1 && (c.buttons = /*buttons*/
      a[8]), r.$set(c), (!o || l & /*$theme*/
      2 && u !== (u = /*$theme*/
      a[1].buttonGroup)) && z(i, "class", u);
    },
    i(a) {
      o || (x(r.$$.fragment, a), o = !0);
    },
    o(a) {
      j(r.$$.fragment, a), o = !1;
    },
    d(a) {
      a && ie(i), Ae(r);
    }
  };
}
function da(n) {
  let i, r, u, o;
  const a = [tv, ev], l = [];
  function c(_, g) {
    return (
      /*buttons*/
      _[8].length > 1 ? 0 : 1
    );
  }
  return i = c(n), r = l[i] = a[i](n), {
    c() {
      r.c(), u = Ft();
    },
    m(_, g) {
      l[i].m(_, g), ue(_, u, g), o = !0;
    },
    p(_, g) {
      let v = i;
      i = c(_), i === v ? l[i].p(_, g) : (ft(), j(l[v], 1, 1, () => {
        l[v] = null;
      }), at(), r = l[i], r ? r.p(_, g) : (r = l[i] = a[i](_), r.c()), x(r, 1), r.m(u.parentNode, u));
    },
    i(_) {
      o || (x(r), o = !0);
    },
    o(_) {
      j(r), o = !1;
    },
    d(_) {
      _ && ie(u), l[i].d(_);
    }
  };
}
function ga(n) {
  let i, r, u, o = Ge(
    /*sections*/
    n[0][
      /*key*/
      n[5]
    ]
  ), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = da(_a(n, o, c));
  const l = (c) => j(a[c], 1, 1, () => {
    a[c] = null;
  });
  return {
    c() {
      i = se("div");
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      r = Ne();
    },
    m(c, _) {
      ue(c, i, _);
      for (let g = 0; g < a.length; g += 1)
        a[g] && a[g].m(i, null);
      le(i, r), u = !0;
    },
    p(c, _) {
      if (_ & /*$theme, sections, Object*/
      3) {
        o = Ge(
          /*sections*/
          c[0][
            /*key*/
            c[5]
          ]
        );
        let g;
        for (g = 0; g < o.length; g += 1) {
          const v = _a(c, o, g);
          a[g] ? (a[g].p(v, _), x(a[g], 1)) : (a[g] = da(v), a[g].c(), x(a[g], 1), a[g].m(i, r));
        }
        for (ft(), g = o.length; g < a.length; g += 1)
          l(g);
        at();
      }
    },
    i(c) {
      if (!u) {
        for (let _ = 0; _ < o.length; _ += 1)
          x(a[_]);
        u = !0;
      }
    },
    o(c) {
      a = a.filter(Boolean);
      for (let _ = 0; _ < a.length; _ += 1)
        j(a[_]);
      u = !1;
    },
    d(c) {
      c && ie(i), vn(a, c);
    }
  };
}
function nv(n) {
  let i, r, u, o = Ge(Object.keys(
    /*sections*/
    n[0]
  )), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = ga(ha(n, o, c));
  const l = (c) => j(a[c], 1, 1, () => {
    a[c] = null;
  });
  return {
    c() {
      i = se("div");
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      z(i, "class", r = /*$theme*/
      n[1].toolbar);
    },
    m(c, _) {
      ue(c, i, _);
      for (let g = 0; g < a.length; g += 1)
        a[g] && a[g].m(i, null);
      u = !0;
    },
    p(c, [_]) {
      if (_ & /*sections, Object, $theme*/
      3) {
        o = Ge(Object.keys(
          /*sections*/
          c[0]
        ));
        let g;
        for (g = 0; g < o.length; g += 1) {
          const v = ha(c, o, g);
          a[g] ? (a[g].p(v, _), x(a[g], 1)) : (a[g] = ga(v), a[g].c(), x(a[g], 1), a[g].m(i, null));
        }
        for (ft(), g = o.length; g < a.length; g += 1)
          l(g);
        at();
      }
      (!u || _ & /*$theme*/
      2 && r !== (r = /*$theme*/
      c[1].toolbar)) && z(i, "class", r);
    },
    i(c) {
      if (!u) {
        for (let _ = 0; _ < o.length; _ += 1)
          x(a[_]);
        u = !0;
      }
    },
    o(c) {
      a = a.filter(Boolean);
      for (let _ = 0; _ < a.length; _ += 1)
        j(a[_]);
      u = !1;
    },
    d(c) {
      c && ie(i), vn(a, c);
    }
  };
}
function rv(n, i, r) {
  let u, o, { headerToolbar: a, theme: l } = wt("state");
  k(n, a, (_) => r(4, u = _)), k(n, l, (_) => r(1, o = _));
  let c = { start: [], center: [], end: [] };
  return n.$$.update = () => {
    if (n.$$.dirty & /*sections, $headerToolbar*/
    17)
      for (let _ of Object.keys(c))
        r(0, c[_] = u[_].split(" ").map((g) => g.split(",")), c);
  }, [c, o, a, l, u];
}
class iv extends it {
  constructor(i) {
    super(), rt(this, i, rv, nv, Ze, {});
  }
}
function pa(n, i, r) {
  const u = n.slice();
  return u[11] = i[r], u;
}
function ma(n) {
  let i, r, u;
  var o = (
    /*component*/
    n[11]
  );
  function a(l, c) {
    return {};
  }
  return o && (i = or(o, a())), {
    c() {
      i && Oe(i.$$.fragment), r = Ft();
    },
    m(l, c) {
      i && Re(i, l, c), ue(l, r, c), u = !0;
    },
    p(l, c) {
      if (c & /*$_auxiliary*/
      1 && o !== (o = /*component*/
      l[11])) {
        if (i) {
          ft();
          const _ = i;
          j(_.$$.fragment, 1, 0, () => {
            Ae(_, 1);
          }), at();
        }
        o ? (i = or(o, a()), Oe(i.$$.fragment), x(i.$$.fragment, 1), Re(i, r.parentNode, r)) : i = null;
      }
    },
    i(l) {
      u || (i && x(i.$$.fragment, l), u = !0);
    },
    o(l) {
      i && j(i.$$.fragment, l), u = !1;
    },
    d(l) {
      l && ie(r), i && Ae(i, l);
    }
  };
}
function sv(n) {
  let i, r, u = Ge(
    /*$_auxiliary*/
    n[0]
  ), o = [];
  for (let l = 0; l < u.length; l += 1)
    o[l] = ma(pa(n, u, l));
  const a = (l) => j(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      i = Ft();
    },
    m(l, c) {
      for (let _ = 0; _ < o.length; _ += 1)
        o[_] && o[_].m(l, c);
      ue(l, i, c), r = !0;
    },
    p(l, [c]) {
      if (c & /*$_auxiliary*/
      1) {
        u = Ge(
          /*$_auxiliary*/
          l[0]
        );
        let _;
        for (_ = 0; _ < u.length; _ += 1) {
          const g = pa(l, u, _);
          o[_] ? (o[_].p(g, c), x(o[_], 1)) : (o[_] = ma(g), o[_].c(), x(o[_], 1), o[_].m(i.parentNode, i));
        }
        for (ft(), _ = u.length; _ < o.length; _ += 1)
          a(_);
        at();
      }
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < u.length; c += 1)
          x(o[c]);
        r = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        j(o[c]);
      r = !1;
    },
    d(l) {
      l && ie(i), vn(o, l);
    }
  };
}
function uv(n, i, r) {
  let u, o, a, l, { datesSet: c, _auxiliary: _, _activeRange: g, _queue: v, _view: C } = wt("state");
  k(n, c, (E) => r(7, o = E)), k(n, _, (E) => r(0, l = E)), k(n, g, (E) => r(5, a = E)), k(n, C, (E) => r(6, u = E));
  let w = {};
  function T(E) {
    he(o) && wc(
      () => o({
        start: At(E.start),
        end: At(E.end),
        startStr: Er(E.start),
        endStr: Er(E.end),
        view: xt(u)
      }),
      w,
      v
    );
  }
  return n.$$.update = () => {
    n.$$.dirty & /*$_activeRange*/
    32 && T(a);
  }, [l, c, _, g, C, a];
}
let ov = class extends it {
  constructor(i) {
    super(), rt(this, i, uv, sv, Ze, {});
  }
};
function lv(n) {
  let i, r, u, o, a, l, c, _, g, v;
  r = new iv({});
  var C = (
    /*$_viewComponent*/
    n[5]
  );
  function w(T, E) {
    return {};
  }
  return C && (o = or(C, w())), c = new ov({}), {
    c() {
      i = se("div"), Oe(r.$$.fragment), u = Ne(), o && Oe(o.$$.fragment), l = Ne(), Oe(c.$$.fragment), z(i, "class", a = /*$theme*/
      n[1].calendar + /*$_viewClass*/
      (n[2] ? " " + /*$theme*/
      n[1][
        /*$_viewClass*/
        n[2]
      ] : "") + /*$_scrollable*/
      (n[0] ? " " + /*$theme*/
      n[1].withScroll : "") + /*$_iClass*/
      (n[3] ? " " + /*$theme*/
      n[1][
        /*$_iClass*/
        n[3]
      ] : "")), Ds(
        i,
        "height",
        /*$height*/
        n[4]
      );
    },
    m(T, E) {
      ue(T, i, E), Re(r, i, null), le(i, u), o && Re(o, i, null), ue(T, l, E), Re(c, T, E), _ = !0, g || (v = ye(
        window,
        "resize",
        /*recheckScrollable*/
        n[18]
      ), g = !0);
    },
    p(T, E) {
      if (E[0] & /*$_viewComponent*/
      32 && C !== (C = /*$_viewComponent*/
      T[5])) {
        if (o) {
          ft();
          const F = o;
          j(F.$$.fragment, 1, 0, () => {
            Ae(F, 1);
          }), at();
        }
        C ? (o = or(C, w()), Oe(o.$$.fragment), x(o.$$.fragment, 1), Re(o, i, null)) : o = null;
      }
      (!_ || E[0] & /*$theme, $_viewClass, $_scrollable, $_iClass*/
      15 && a !== (a = /*$theme*/
      T[1].calendar + /*$_viewClass*/
      (T[2] ? " " + /*$theme*/
      T[1][
        /*$_viewClass*/
        T[2]
      ] : "") + /*$_scrollable*/
      (T[0] ? " " + /*$theme*/
      T[1].withScroll : "") + /*$_iClass*/
      (T[3] ? " " + /*$theme*/
      T[1][
        /*$_iClass*/
        T[3]
      ] : ""))) && z(i, "class", a), (!_ || E[0] & /*$height*/
      16) && Ds(
        i,
        "height",
        /*$height*/
        T[4]
      );
    },
    i(T) {
      _ || (x(r.$$.fragment, T), o && x(o.$$.fragment, T), x(c.$$.fragment, T), _ = !0);
    },
    o(T) {
      j(r.$$.fragment, T), o && j(o.$$.fragment, T), j(c.$$.fragment, T), _ = !1;
    },
    d(T) {
      T && (ie(i), ie(l)), Ae(r), o && Ae(o), Ae(c, T), g = !1, v();
    }
  };
}
function fv(n, i, r) {
  let u, o, a, l, c, _, g, v, C, w, T, E, { plugins: F = [] } = i, { options: R = {} } = i, A = Ar(), L = new Km(F, R);
  Os("state", L);
  let { _viewComponent: B, _viewClass: W, _bodyEl: N, _interaction: O, _iClass: D, _events: Y, _queue: q, _scrollable: X, events: K, eventSources: $, height: de, theme: He } = L;
  k(n, B, (V) => r(5, E = V)), k(n, W, (V) => r(2, C = V)), k(n, N, (V) => r(33, u = V)), k(n, O, (V) => r(38, g = V)), k(n, D, (V) => r(3, w = V)), k(n, Y, (V) => r(35, l = V)), k(n, q, (V) => r(34, a = V)), k(n, X, (V) => r(0, o = V)), k(n, K, (V) => r(36, c = V)), k(n, $, (V) => r(37, _ = V)), k(n, de, (V) => r(4, T = V)), k(n, He, (V) => r(1, v = V));
  function me(V, Ie) {
    return L.hasOwnProperty(V) && (L[V].parse && (Ie = L[V].parse(Ie)), L[V].set(Ie)), this;
  }
  function De(V) {
    let Ie = L.hasOwnProperty(V) ? yo(L[V]) : void 0;
    return Ie instanceof Date ? At(Ie) : Ie;
  }
  function ze() {
    return L._fetchedRange.set({ start: void 0, end: void 0 }), this;
  }
  function Q() {
    return l.map($t);
  }
  function oe(V) {
    for (let Ie of l)
      if (Ie.id == V)
        return $t(Ie);
    return null;
  }
  function te(V) {
    return _t((Ie) => Ie.concat(L.events.parse([V]))), this;
  }
  function Le(V) {
    return _t((Ie) => {
      for (let Qe of Ie)
        if (Qe.id == V.id) {
          zn(Qe, L.events.parse([V])[0]);
          break;
        }
      return Ie;
    }), this;
  }
  function bt(V) {
    return _t((Ie) => Ie.filter((Qe) => Qe.id != V)), this;
  }
  function Je() {
    return xt(L._view.get());
  }
  function Ke() {
    return g.action && g.action.unselect(), this;
  }
  function ct(V, Ie) {
    let Qe = Si(V, Ie);
    return Qe ? Cs(Qe)(Ie) : null;
  }
  function ht() {
    Ae(A, !0);
  }
  function _t(V) {
    We(Y, l = V(l), l), _.length || We(K, c = l, c);
  }
  x0(() => {
    Tm(a), setTimeout($e);
  });
  function $e() {
    u && We(X, o = Sm(u), o);
  }
  return n.$$set = (V) => {
    "plugins" in V && r(19, F = V.plugins), "options" in V && r(20, R = V.options);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*options*/
    1048576)
      for (let [V, Ie] of Fm(R))
        me(V, Ie);
  }, [
    o,
    v,
    C,
    w,
    T,
    E,
    B,
    W,
    N,
    O,
    D,
    Y,
    q,
    X,
    K,
    $,
    de,
    He,
    $e,
    F,
    R,
    me,
    De,
    ze,
    Q,
    oe,
    te,
    Le,
    bt,
    Je,
    Ke,
    ct,
    ht
  ];
}
class av extends it {
  constructor(i) {
    super(), rt(
      this,
      i,
      fv,
      lv,
      Ze,
      {
        plugins: 19,
        options: 20,
        setOption: 21,
        getOption: 22,
        refetchEvents: 23,
        getEvents: 24,
        getEventById: 25,
        addEvent: 26,
        updateEvent: 27,
        removeEventById: 28,
        getView: 29,
        unselect: 30,
        dateFromPoint: 31,
        destroy: 32
      },
      null,
      [-1, -1]
    );
  }
  get setOption() {
    return this.$$.ctx[21];
  }
  get getOption() {
    return this.$$.ctx[22];
  }
  get refetchEvents() {
    return this.$$.ctx[23];
  }
  get getEvents() {
    return this.$$.ctx[24];
  }
  get getEventById() {
    return this.$$.ctx[25];
  }
  get addEvent() {
    return this.$$.ctx[26];
  }
  get updateEvent() {
    return this.$$.ctx[27];
  }
  get removeEventById() {
    return this.$$.ctx[28];
  }
  get getView() {
    return this.$$.ctx[29];
  }
  get unselect() {
    return this.$$.ctx[30];
  }
  get dateFromPoint() {
    return this.$$.ctx[31];
  }
  get destroy() {
    return this.$$.ctx[32];
  }
}
function cv(n) {
  return Yt(
    [n._slotTimeLimits, n._intlSlotLabel, n.slotDuration],
    ([i, r, u]) => {
      let o = u.seconds >= 3600, a = [], l = qn("2020-01-01"), c = Ue(l), _ = 1;
      for (nt(l, i.min), nt(c, i.max); l < c; )
        a.push(a.length && (_ || o) ? r.format(l) : ""), nt(l, u), _ = 1 - _;
      return a;
    }
  );
}
function hv(n) {
  return Yt(
    [n._events, n._viewDates, n.flexibleSlotTimeLimits, n.slotMinTime, n.slotMaxTime],
    ([i, r, u, o, a]) => {
      let l = mn(o), c = mn(a);
      if (u) {
        let _ = mn(Dr(l.seconds, ur(0, c.seconds - vo))), g = mn(ur(c.seconds, _.seconds + vo)), v = he(u == null ? void 0 : u.eventFilter) ? u.eventFilter : (C) => !Hn(C.display);
        e:
          for (let C of r) {
            let w = nt(Ue(C), l), T = nt(Ue(C), c), E = nt(Ue(C), _), F = nt(Ue(C), g);
            for (let R of i)
              if (!R.allDay && v(R) && R.start < F && R.end > E) {
                if (R.start < w) {
                  let A = ur((R.start - C) / 1e3, _.seconds);
                  A < l.seconds && (l.seconds = A);
                }
                if (R.end > T) {
                  let A = Dr((R.end - C) / 1e3, g.seconds);
                  A > c.seconds && (c.seconds = A);
                }
                if (l.seconds === _.seconds && c.seconds === g.seconds)
                  break e;
              }
          }
      }
      return { min: l, max: c };
    }
  );
}
function _v(n) {
  if (!n.length)
    return;
  Cc(n);
  let i = {
    columns: [],
    end: n[0].end
  };
  for (let r of n) {
    let u = 0;
    if (r.start < i.end) {
      for (; u < i.columns.length && !(i.columns[u][i.columns[u].length - 1].end <= r.start); ++u)
        ;
      r.end > i.end && (i.end = r.end);
    } else
      i = {
        columns: [],
        end: r.end
      };
    i.columns.length < u + 1 && i.columns.push([]), i.columns[u].push(r), r.group = i, r.column = u;
  }
}
function dv(n) {
  let i = "all-day", r;
  return n ? (r = he(n) ? n({ text: i }) : n, typeof r == "string" && (r = { html: r })) : r = {
    html: i
  }, r;
}
const gv = (n) => ({}), va = (n) => ({});
function wa(n, i, r) {
  const u = n.slice();
  return u[9] = i[r], u;
}
function ya(n) {
  let i, r = (
    /*time*/
    n[9] + ""
  ), u, o;
  return {
    c() {
      i = se("div"), u = kn(r), z(i, "class", o = /*$theme*/
      n[1].time);
    },
    m(a, l) {
      ue(a, i, l), le(i, u);
    },
    p(a, l) {
      l & /*$_times*/
      4 && r !== (r = /*time*/
      a[9] + "") && kr(u, r), l & /*$theme*/
      2 && o !== (o = /*$theme*/
      a[1].time) && z(i, "class", o);
    },
    d(a) {
      a && ie(i);
    }
  };
}
function pv(n) {
  let i, r, u, o, a, l, c, _, g, v, C, w, T, E, F, R = Ge(
    /*$_times*/
    n[2]
  ), A = [];
  for (let O = 0; O < R.length; O += 1)
    A[O] = ya(wa(n, R, O));
  const L = (
    /*#slots*/
    n[8].lines
  ), B = Di(
    L,
    n,
    /*$$scope*/
    n[7],
    va
  ), W = (
    /*#slots*/
    n[8].default
  ), N = Di(
    W,
    n,
    /*$$scope*/
    n[7],
    null
  );
  return {
    c() {
      i = se("div"), r = se("div"), a = Ne();
      for (let O = 0; O < A.length; O += 1)
        A[O].c();
      c = Ne(), _ = se("div"), g = se("div"), B && B.c(), C = Ne(), N && N.c(), z(r, "class", u = /*$theme*/
      n[1].sidebarTitle), z(i, "class", l = /*$theme*/
      n[1].sidebar), z(g, "class", v = /*$theme*/
      n[1].lines), z(_, "class", w = /*$theme*/
      n[1].days);
    },
    m(O, D) {
      ue(O, i, D), le(i, r), le(i, a);
      for (let Y = 0; Y < A.length; Y += 1)
        A[Y] && A[Y].m(i, null);
      ue(O, c, D), ue(O, _, D), le(_, g), B && B.m(g, null), le(_, C), N && N.m(_, null), T = !0, E || (F = bo(o = So.call(
        null,
        r,
        /*allDayText*/
        n[0]
      )), E = !0);
    },
    p(O, [D]) {
      if ((!T || D & /*$theme*/
      2 && u !== (u = /*$theme*/
      O[1].sidebarTitle)) && z(r, "class", u), o && he(o.update) && D & /*allDayText*/
      1 && o.update.call(
        null,
        /*allDayText*/
        O[0]
      ), D & /*$theme, $_times*/
      6) {
        R = Ge(
          /*$_times*/
          O[2]
        );
        let Y;
        for (Y = 0; Y < R.length; Y += 1) {
          const q = wa(O, R, Y);
          A[Y] ? A[Y].p(q, D) : (A[Y] = ya(q), A[Y].c(), A[Y].m(i, null));
        }
        for (; Y < A.length; Y += 1)
          A[Y].d(1);
        A.length = R.length;
      }
      (!T || D & /*$theme*/
      2 && l !== (l = /*$theme*/
      O[1].sidebar)) && z(i, "class", l), B && B.p && (!T || D & /*$$scope*/
      128) && ki(
        B,
        L,
        O,
        /*$$scope*/
        O[7],
        T ? Ei(
          L,
          /*$$scope*/
          O[7],
          D,
          gv
        ) : Ai(
          /*$$scope*/
          O[7]
        ),
        va
      ), (!T || D & /*$theme*/
      2 && v !== (v = /*$theme*/
      O[1].lines)) && z(g, "class", v), N && N.p && (!T || D & /*$$scope*/
      128) && ki(
        N,
        W,
        O,
        /*$$scope*/
        O[7],
        T ? Ei(
          W,
          /*$$scope*/
          O[7],
          D,
          null
        ) : Ai(
          /*$$scope*/
          O[7]
        ),
        null
      ), (!T || D & /*$theme*/
      2 && w !== (w = /*$theme*/
      O[1].days)) && z(_, "class", w);
    },
    i(O) {
      T || (x(B, O), x(N, O), T = !0);
    },
    o(O) {
      j(B, O), j(N, O), T = !1;
    },
    d(O) {
      O && (ie(i), ie(c), ie(_)), vn(A, O), B && B.d(O), N && N.d(O), E = !1, F();
    }
  };
}
function mv(n, i, r) {
  let u, o, a, { $$slots: l = {}, $$scope: c } = i, { allDayContent: _, theme: g, _times: v } = wt("state");
  k(n, _, (w) => r(6, u = w)), k(n, g, (w) => r(1, o = w)), k(n, v, (w) => r(2, a = w));
  let C;
  return n.$$set = (w) => {
    "$$scope" in w && r(7, c = w.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*$allDayContent*/
    64 && r(0, C = dv(u));
  }, [
    C,
    o,
    a,
    _,
    g,
    v,
    u,
    c,
    l
  ];
}
class Eo extends it {
  constructor(i) {
    super(), rt(this, i, mv, pv, Ze, {});
  }
}
function ba(n, i, r) {
  const u = n.slice();
  return u[24] = i[r], u;
}
function vv(n) {
  let i;
  const r = (
    /*#slots*/
    n[16].default
  ), u = Di(
    r,
    n,
    /*$$scope*/
    n[18],
    null
  );
  return {
    c() {
      u && u.c();
    },
    m(o, a) {
      u && u.m(o, a), i = !0;
    },
    p(o, a) {
      u && u.p && (!i || a & /*$$scope*/
      262144) && ki(
        u,
        r,
        o,
        /*$$scope*/
        o[18],
        i ? Ei(
          r,
          /*$$scope*/
          o[18],
          a,
          null
        ) : Ai(
          /*$$scope*/
          o[18]
        ),
        null
      );
    },
    i(o) {
      i || (x(u, o), i = !0);
    },
    o(o) {
      j(u, o), i = !1;
    },
    d(o) {
      u && u.d(o);
    }
  };
}
function Ca(n) {
  let i, r;
  return {
    c() {
      i = se("div"), z(i, "class", r = /*$theme*/
      n[3].line);
    },
    m(u, o) {
      ue(u, i, o);
    },
    p(u, o) {
      o & /*$theme*/
      8 && r !== (r = /*$theme*/
      u[3].line) && z(i, "class", r);
    },
    d(u) {
      u && ie(i);
    }
  };
}
function wv(n) {
  let i, r = Ge(
    /*lines*/
    n[2]
  ), u = [];
  for (let o = 0; o < r.length; o += 1)
    u[o] = Ca(ba(n, r, o));
  return {
    c() {
      for (let o = 0; o < u.length; o += 1)
        u[o].c();
      i = Ft();
    },
    m(o, a) {
      for (let l = 0; l < u.length; l += 1)
        u[l] && u[l].m(o, a);
      ue(o, i, a);
    },
    p(o, a) {
      if (a & /*$theme, lines*/
      12) {
        r = Ge(
          /*lines*/
          o[2]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = ba(o, r, l);
          u[l] ? u[l].p(c, a) : (u[l] = Ca(c), u[l].c(), u[l].m(i.parentNode, i));
        }
        for (; l < u.length; l += 1)
          u[l].d(1);
        u.length = r.length;
      }
    },
    d(o) {
      o && ie(i), vn(u, o);
    }
  };
}
function yv(n) {
  let i, r, u, o, a, l;
  return u = new Eo({
    props: {
      $$slots: {
        lines: [wv],
        default: [vv]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      i = se("div"), r = se("div"), Oe(u.$$.fragment), z(r, "class", o = /*$theme*/
      n[3].content), z(i, "class", a = /*$theme*/
      n[3].body + /*compact*/
      (n[1] ? " " + /*$theme*/
      n[3].compact : ""));
    },
    m(c, _) {
      ue(c, i, _), le(i, r), Re(u, r, null), n[17](i), l = !0;
    },
    p(c, [_]) {
      const g = {};
      _ & /*$$scope, lines, $theme*/
      262156 && (g.$$scope = { dirty: _, ctx: c }), u.$set(g), (!l || _ & /*$theme*/
      8 && o !== (o = /*$theme*/
      c[3].content)) && z(r, "class", o), (!l || _ & /*$theme, compact*/
      10 && a !== (a = /*$theme*/
      c[3].body + /*compact*/
      (c[1] ? " " + /*$theme*/
      c[3].compact : ""))) && z(i, "class", a);
    },
    i(c) {
      l || (x(u.$$.fragment, c), l = !0);
    },
    o(c) {
      j(u.$$.fragment, c), l = !1;
    },
    d(c) {
      c && ie(i), Ae(u), n[17](null);
    }
  };
}
function bv(n, i, r) {
  let u, o, a, l, c, _, g, v, { $$slots: C = {}, $$scope: w } = i, { _bodyEl: T, _viewDates: E, _slotTimeLimits: F, _times: R, scrollTime: A, slotDuration: L, slotHeight: B, theme: W } = wt("state");
  k(n, T, (K) => r(22, g = K)), k(n, E, (K) => r(13, l = K)), k(n, F, (K) => r(14, c = K)), k(n, R, (K) => r(15, _ = K)), k(n, A, (K) => r(21, a = K)), k(n, L, (K) => r(12, o = K)), k(n, B, (K) => r(20, u = K)), k(n, W, (K) => r(3, v = K));
  let N, O, D = [], Y;
  function q() {
    r(0, N.scrollTop = ((a.seconds - Y) / o.seconds - 0.5) * u, N);
  }
  function X(K) {
    en[K ? "unshift" : "push"](() => {
      N = K, r(0, N);
    });
  }
  return n.$$set = (K) => {
    "$$scope" in K && r(18, w = K.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*el*/
    1 && We(T, g = N, g), n.$$.dirty & /*$slotDuration, $_times, $_slotTimeLimits*/
    53248 && (r(1, O = o.seconds >= 3600), r(2, D.length = _.length, D), Y = c.min.seconds), n.$$.dirty & /*el, $_viewDates*/
    8193 && N && l && q();
  }, [
    N,
    O,
    D,
    v,
    T,
    E,
    F,
    R,
    A,
    L,
    B,
    W,
    o,
    l,
    c,
    _,
    C,
    X,
    w
  ];
}
class Cv extends it {
  constructor(i) {
    super(), rt(this, i, bv, yv, Ze, {});
  }
}
function Tv(n) {
  let i, r, u, o, a, l, c, _, g;
  var v = (
    /*$_interaction*/
    n[10].resizer
  );
  function C(w, T) {
    return { props: { event: (
      /*event*/
      w[0]
    ) } };
  }
  return v && (l = or(v, C(n)), l.$on("pointerdown", function() {
    he(
      /*createDragHandler*/
      n[33](
        /*$_interaction*/
        n[10],
        !0
      )
    ) && n[33](
      /*$_interaction*/
      n[10],
      !0
    ).apply(this, arguments);
  })), {
    c() {
      i = se("div"), r = se("div"), a = Ne(), l && Oe(l.$$.fragment), z(r, "class", u = /*$theme*/
      n[2].eventBody), z(
        i,
        "class",
        /*classes*/
        n[4]
      ), z(
        i,
        "style",
        /*style*/
        n[5]
      );
    },
    m(w, T) {
      ue(w, i, T), le(i, r), le(i, a), l && Re(l, i, null), n[51](i), c = !0, _ || (g = [
        bo(o = So.call(
          null,
          r,
          /*content*/
          n[6]
        )),
        ye(i, "click", function() {
          he(!Hn(
            /*display*/
            n[1]
          ) && /*createHandler*/
          n[32](
            /*$eventClick*/
            n[7],
            /*display*/
            n[1]
          )) && (!Hn(
            /*display*/
            n[1]
          ) && /*createHandler*/
          n[32](
            /*$eventClick*/
            n[7],
            /*display*/
            n[1]
          )).apply(this, arguments);
        }),
        ye(i, "mouseenter", function() {
          he(
            /*createHandler*/
            n[32](
              /*$eventMouseEnter*/
              n[8],
              /*display*/
              n[1]
            )
          ) && n[32](
            /*$eventMouseEnter*/
            n[8],
            /*display*/
            n[1]
          ).apply(this, arguments);
        }),
        ye(i, "mouseleave", function() {
          he(
            /*createHandler*/
            n[32](
              /*$eventMouseLeave*/
              n[9],
              /*display*/
              n[1]
            )
          ) && n[32](
            /*$eventMouseLeave*/
            n[9],
            /*display*/
            n[1]
          ).apply(this, arguments);
        }),
        ye(i, "pointerdown", function() {
          he(!Hn(
            /*display*/
            n[1]
          ) && !Kn(
            /*display*/
            n[1]
          ) && /*createDragHandler*/
          n[33](
            /*$_interaction*/
            n[10]
          )) && (!Hn(
            /*display*/
            n[1]
          ) && !Kn(
            /*display*/
            n[1]
          ) && /*createDragHandler*/
          n[33](
            /*$_interaction*/
            n[10]
          )).apply(this, arguments);
        })
      ], _ = !0);
    },
    p(w, T) {
      if (n = w, (!c || T[0] & /*$theme*/
      4 && u !== (u = /*$theme*/
      n[2].eventBody)) && z(r, "class", u), o && he(o.update) && T[0] & /*content*/
      64 && o.update.call(
        null,
        /*content*/
        n[6]
      ), T[0] & /*$_interaction*/
      1024 && v !== (v = /*$_interaction*/
      n[10].resizer)) {
        if (l) {
          ft();
          const E = l;
          j(E.$$.fragment, 1, 0, () => {
            Ae(E, 1);
          }), at();
        }
        v ? (l = or(v, C(n)), l.$on("pointerdown", function() {
          he(
            /*createDragHandler*/
            n[33](
              /*$_interaction*/
              n[10],
              !0
            )
          ) && n[33](
            /*$_interaction*/
            n[10],
            !0
          ).apply(this, arguments);
        }), Oe(l.$$.fragment), x(l.$$.fragment, 1), Re(l, i, null)) : l = null;
      } else if (v) {
        const E = {};
        T[0] & /*event*/
        1 && (E.event = /*event*/
        n[0]), l.$set(E);
      }
      (!c || T[0] & /*classes*/
      16) && z(
        i,
        "class",
        /*classes*/
        n[4]
      ), (!c || T[0] & /*style*/
      32) && z(
        i,
        "style",
        /*style*/
        n[5]
      );
    },
    i(w) {
      c || (l && x(l.$$.fragment, w), c = !0);
    },
    o(w) {
      l && j(l.$$.fragment, w), c = !1;
    },
    d(w) {
      w && ie(i), l && Ae(l), n[51](null), _ = !1, It(g);
    }
  };
}
function Sv(n, i, r) {
  let u, o, a, l, c, _, g, v, C, w, T, E, F, R, A, L, B, W, N, O, D, { date: Y } = i, { chunk: q } = i, { displayEventEnd: X, eventBackgroundColor: K, eventTextColor: $, eventColor: de, eventContent: He, eventClick: me, eventDidMount: De, eventClassNames: ze, eventMouseEnter: Q, eventMouseLeave: oe, slotEventOverlap: te, slotDuration: Le, slotHeight: bt, theme: Je, _view: Ke, _intlEventTime: ct, _interaction: ht, _iClasses: _t, _resBgColor: $e, _resTxtColor: V, _slotTimeLimits: Ie } = wt("state");
  k(n, X, (J) => r(39, _ = J)), k(n, K, (J) => r(46, F = J)), k(n, $, (J) => r(43, w = J)), k(n, de, (J) => r(45, E = J)), k(n, He, (J) => r(38, c = J)), k(n, me, (J) => r(7, W = J)), k(n, De, (J) => r(53, o = J)), k(n, ze, (J) => r(40, g = J)), k(n, Q, (J) => r(8, N = J)), k(n, oe, (J) => r(9, O = J)), k(n, te, (J) => r(42, C = J)), k(n, Le, (J) => r(50, B = J)), k(n, bt, (J) => r(48, A = J)), k(n, Je, (J) => r(2, l = J)), k(n, Ke, (J) => r(36, u = J)), k(n, ct, (J) => r(37, a = J)), k(n, ht, (J) => r(10, D = J)), k(n, _t, (J) => r(41, v = J)), k(n, $e, (J) => r(47, R = J)), k(n, V, (J) => r(44, T = J)), k(n, Ie, (J) => r(49, L = J));
  let Qe, et, Bt, dt, ne, Rt, gt;
  ic(() => {
    he(o) && o({
      event: $t(et),
      timeText: gt,
      el: Qe,
      view: xt(u)
    });
  });
  function lr(J, Wt) {
    return !Kn(Wt) && he(J) ? (Lt) => J({
      event: $t(et),
      el: Qe,
      jsEvent: Lt,
      view: xt(u)
    }) : void 0;
  }
  function Ir(J, Wt) {
    return J.action ? (Lt) => J.action.drag(et, Lt, Wt) : void 0;
  }
  function wn(J) {
    en[J ? "unshift" : "push"](() => {
      Qe = J, r(3, Qe);
    });
  }
  return n.$$set = (J) => {
    "date" in J && r(34, Y = J.date), "chunk" in J && r(35, q = J.chunk);
  }, n.$$.update = () => {
    if (n.$$.dirty[1] & /*chunk*/
    16 && r(0, et = q.event), n.$$.dirty[0] & /*event, style, display, $theme*/
    39 | n.$$.dirty[1] & /*$slotDuration, $_slotTimeLimits, chunk, date, $slotHeight, $_resBgColor, $eventBackgroundColor, $eventColor, $_resTxtColor, $eventTextColor, $slotEventOverlap, $_iClasses, $eventClassNames, $_view*/
    1048120) {
      r(1, Bt = et.display);
      let J = B.seconds / 60, Wt = L.min.seconds / 60, Lt = (q.start - Y) / 1e3 / 60, Rr = (q.end - Y) / 1e3 / 60, st = (Lt - Wt) / J * A, cn = (Rr - Lt) / J * A, Te = (L.max.seconds / 60 - Lt) / J * A, qt = et.backgroundColor || R(et) || F || E, Kt = et.textColor || T(et) || w;
      r(5, ne = `top:${st}px;min-height:${cn}px;height:${cn}px;max-height:${Te}px;`), qt && r(5, ne += `background-color:${qt};`), Kt && r(5, ne += `color:${Kt};`), (!Hn(Bt) && !Kn(Bt) || kc(Bt)) && r(5, ne += `z-index:${q.column + 1};left:${100 / q.group.columns.length * q.column}%;width:${100 / q.group.columns.length * (C ? 0.5 * (1 + q.group.columns.length - q.column) : 1)}%;`), r(4, dt = [
        Hn(Bt) ? l.bgEvent : l.event,
        ...v([], et),
        ...Sc(g, et, u)
      ].join(" "));
    }
    n.$$.dirty[0] & /*$theme*/
    4 | n.$$.dirty[1] & /*chunk, $displayEventEnd, $eventContent, $_intlEventTime, $_view*/
    496 && r(6, [gt, Rt] = Tc(q, _, c, l, a, u), Rt);
  }, [
    et,
    Bt,
    l,
    Qe,
    dt,
    ne,
    Rt,
    W,
    N,
    O,
    D,
    X,
    K,
    $,
    de,
    He,
    me,
    De,
    ze,
    Q,
    oe,
    te,
    Le,
    bt,
    Je,
    Ke,
    ct,
    ht,
    _t,
    $e,
    V,
    Ie,
    lr,
    Ir,
    Y,
    q,
    u,
    a,
    c,
    _,
    g,
    v,
    C,
    w,
    T,
    E,
    F,
    R,
    A,
    L,
    B,
    wn
  ];
}
let Ps = class extends it {
  constructor(i) {
    super(), rt(this, i, Sv, Tv, Ze, { date: 34, chunk: 35 }, null, [-1, -1]);
  }
};
function Dv(n) {
  let i, r;
  return {
    c() {
      i = se("div"), z(i, "class", r = /*$theme*/
      n[1].nowIndicator), Ds(
        i,
        "top",
        /*top*/
        n[0] + "px"
      );
    },
    m(u, o) {
      ue(u, i, o);
    },
    p(u, [o]) {
      o & /*$theme*/
      2 && r !== (r = /*$theme*/
      u[1].nowIndicator) && z(i, "class", r), o & /*top*/
      1 && Ds(
        i,
        "top",
        /*top*/
        u[0] + "px"
      );
    },
    i: Me,
    o: Me,
    d(u) {
      u && ie(i);
    }
  };
}
function Ev(n, i, r) {
  let u, o, a, l, c, _, { slotDuration: g, slotHeight: v, theme: C, _now: w, _today: T, _slotTimeLimits: E } = wt("state");
  k(n, g, (A) => r(11, a = A)), k(n, v, (A) => r(9, u = A)), k(n, C, (A) => r(1, _ = A)), k(n, w, (A) => r(13, c = A)), k(n, T, (A) => r(12, l = A)), k(n, E, (A) => r(10, o = A));
  let F, R = 0;
  return n.$$.update = () => {
    if (n.$$.dirty & /*$_now, $_today*/
    12288 && r(8, F = (c - l) / 1e3 / 60), n.$$.dirty & /*$slotDuration, $_slotTimeLimits, start, $slotHeight*/
    3840) {
      let A = a.seconds / 60, L = o.min.seconds / 60;
      r(0, R = (F - L) / A * u);
    }
  }, [
    R,
    _,
    g,
    v,
    C,
    w,
    T,
    E,
    F,
    u,
    o,
    a,
    l,
    c
  ];
}
class kv extends it {
  constructor(i) {
    super(), rt(this, i, Ev, Dv, Ze, {});
  }
}
function Ta(n, i, r) {
  const u = n.slice();
  return u[33] = i[r], u;
}
function Sa(n, i, r) {
  const u = n.slice();
  return u[33] = i[r], u;
}
function Da(n, i) {
  let r, u, o;
  return u = new Ps({
    props: {
      date: (
        /*date*/
        i[0]
      ),
      chunk: (
        /*chunk*/
        i[33]
      )
    }
  }), {
    key: n,
    first: null,
    c() {
      r = Ft(), Oe(u.$$.fragment), this.first = r;
    },
    m(a, l) {
      ue(a, r, l), Re(u, a, l), o = !0;
    },
    p(a, l) {
      i = a;
      const c = {};
      l[0] & /*date*/
      1 && (c.date = /*date*/
      i[0]), l[0] & /*bgChunks*/
      8 && (c.chunk = /*chunk*/
      i[33]), u.$set(c);
    },
    i(a) {
      o || (x(u.$$.fragment, a), o = !0);
    },
    o(a) {
      j(u.$$.fragment, a), o = !1;
    },
    d(a) {
      a && ie(r), Ae(u, a);
    }
  };
}
function Ea(n) {
  let i, r;
  return i = new Ps({
    props: {
      date: (
        /*date*/
        n[0]
      ),
      chunk: (
        /*iChunks*/
        n[4][1]
      )
    }
  }), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    p(u, o) {
      const a = {};
      o[0] & /*date*/
      1 && (a.date = /*date*/
      u[0]), o[0] & /*iChunks*/
      16 && (a.chunk = /*iChunks*/
      u[4][1]), i.$set(a);
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function ka(n, i) {
  let r, u, o;
  return u = new Ps({
    props: {
      date: (
        /*date*/
        i[0]
      ),
      chunk: (
        /*chunk*/
        i[33]
      )
    }
  }), {
    key: n,
    first: null,
    c() {
      r = Ft(), Oe(u.$$.fragment), this.first = r;
    },
    m(a, l) {
      ue(a, r, l), Re(u, a, l), o = !0;
    },
    p(a, l) {
      i = a;
      const c = {};
      l[0] & /*date*/
      1 && (c.date = /*date*/
      i[0]), l[0] & /*chunks*/
      4 && (c.chunk = /*chunk*/
      i[33]), u.$set(c);
    },
    i(a) {
      o || (x(u.$$.fragment, a), o = !0);
    },
    o(a) {
      j(u.$$.fragment, a), o = !1;
    },
    d(a) {
      a && ie(r), Ae(u, a);
    }
  };
}
function Aa(n) {
  let i, r;
  return i = new Ps({
    props: {
      date: (
        /*date*/
        n[0]
      ),
      chunk: (
        /*iChunks*/
        n[4][0]
      )
    }
  }), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    p(u, o) {
      const a = {};
      o[0] & /*date*/
      1 && (a.date = /*date*/
      u[0]), o[0] & /*iChunks*/
      16 && (a.chunk = /*iChunks*/
      u[4][0]), i.$set(a);
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function Ia(n) {
  let i, r;
  return i = new kv({}), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function Av(n) {
  let i, r, u = [], o = /* @__PURE__ */ new Map(), a, l, c, _, g = [], v = /* @__PURE__ */ new Map(), C, w, T, E, F, R, A, L, B, W = Ge(
    /*bgChunks*/
    n[3]
  );
  const N = (K) => (
    /*chunk*/
    K[33].event
  );
  for (let K = 0; K < W.length; K += 1) {
    let $ = Sa(n, W, K), de = N($);
    o.set(de, u[K] = Da(de, $));
  }
  let O = (
    /*iChunks*/
    n[4][1] && Ea(n)
  ), D = Ge(
    /*chunks*/
    n[2]
  );
  const Y = (K) => (
    /*chunk*/
    K[33].event
  );
  for (let K = 0; K < D.length; K += 1) {
    let $ = Ta(n, D, K), de = Y($);
    v.set(de, g[K] = ka(de, $));
  }
  let q = (
    /*iChunks*/
    n[4][0] && !/*iChunks*/
    n[4][0].event.allDay && Aa(n)
  ), X = (
    /*$nowIndicator*/
    n[9] && /*isToday*/
    n[5] && Ia()
  );
  return {
    c() {
      i = se("div"), r = se("div");
      for (let K = 0; K < u.length; K += 1)
        u[K].c();
      l = Ne(), c = se("div"), O && O.c(), _ = Ne();
      for (let K = 0; K < g.length; K += 1)
        g[K].c();
      C = Ne(), q && q.c(), T = Ne(), E = se("div"), X && X.c(), z(r, "class", a = /*$theme*/
      n[7].bgEvents), z(c, "class", w = /*$theme*/
      n[7].events), z(E, "class", F = /*$theme*/
      n[7].extra), z(i, "class", R = /*$theme*/
      n[7].day + /*isToday*/
      (n[5] ? " " + /*$theme*/
      n[7].today : "") + /*highlight*/
      (n[6] ? " " + /*$theme*/
      n[7].highlight : ""));
    },
    m(K, $) {
      ue(K, i, $), le(i, r);
      for (let de = 0; de < u.length; de += 1)
        u[de] && u[de].m(r, null);
      le(i, l), le(i, c), O && O.m(c, null), le(c, _);
      for (let de = 0; de < g.length; de += 1)
        g[de] && g[de].m(c, null);
      le(c, C), q && q.m(c, null), le(i, T), le(i, E), X && X.m(E, null), n[29](i), A = !0, L || (B = [
        ye(i, "pointerenter", function() {
          he(
            /*createPointerEnterHandler*/
            n[20](
              /*$_interaction*/
              n[8]
            )
          ) && n[20](
            /*$_interaction*/
            n[8]
          ).apply(this, arguments);
        }),
        ye(i, "pointerleave", function() {
          var de, He;
          he(
            /*$_interaction*/
            (de = n[8].pointer) == null ? void 0 : de.leave
          ) && ((He = n[8].pointer) == null || He.leave.apply(this, arguments));
        }),
        ye(i, "pointerdown", function() {
          var de, He;
          he(
            /*$_interaction*/
            (de = n[8].action) == null ? void 0 : de.select
          ) && ((He = n[8].action) == null || He.select.apply(this, arguments));
        })
      ], L = !0);
    },
    p(K, $) {
      n = K, $[0] & /*date, bgChunks*/
      9 && (W = Ge(
        /*bgChunks*/
        n[3]
      ), ft(), u = po(u, $, N, 1, n, W, o, r, go, Da, null, Sa), at()), (!A || $[0] & /*$theme*/
      128 && a !== (a = /*$theme*/
      n[7].bgEvents)) && z(r, "class", a), /*iChunks*/
      n[4][1] ? O ? (O.p(n, $), $[0] & /*iChunks*/
      16 && x(O, 1)) : (O = Ea(n), O.c(), x(O, 1), O.m(c, _)) : O && (ft(), j(O, 1, 1, () => {
        O = null;
      }), at()), $[0] & /*date, chunks*/
      5 && (D = Ge(
        /*chunks*/
        n[2]
      ), ft(), g = po(g, $, Y, 1, n, D, v, c, go, ka, C, Ta), at()), /*iChunks*/
      n[4][0] && !/*iChunks*/
      n[4][0].event.allDay ? q ? (q.p(n, $), $[0] & /*iChunks*/
      16 && x(q, 1)) : (q = Aa(n), q.c(), x(q, 1), q.m(c, null)) : q && (ft(), j(q, 1, 1, () => {
        q = null;
      }), at()), (!A || $[0] & /*$theme*/
      128 && w !== (w = /*$theme*/
      n[7].events)) && z(c, "class", w), /*$nowIndicator*/
      n[9] && /*isToday*/
      n[5] ? X ? $[0] & /*$nowIndicator, isToday*/
      544 && x(X, 1) : (X = Ia(), X.c(), x(X, 1), X.m(E, null)) : X && (ft(), j(X, 1, 1, () => {
        X = null;
      }), at()), (!A || $[0] & /*$theme*/
      128 && F !== (F = /*$theme*/
      n[7].extra)) && z(E, "class", F), (!A || $[0] & /*$theme, isToday, highlight*/
      224 && R !== (R = /*$theme*/
      n[7].day + /*isToday*/
      (n[5] ? " " + /*$theme*/
      n[7].today : "") + /*highlight*/
      (n[6] ? " " + /*$theme*/
      n[7].highlight : ""))) && z(i, "class", R);
    },
    i(K) {
      if (!A) {
        for (let $ = 0; $ < W.length; $ += 1)
          x(u[$]);
        x(O);
        for (let $ = 0; $ < D.length; $ += 1)
          x(g[$]);
        x(q), x(X), A = !0;
      }
    },
    o(K) {
      for (let $ = 0; $ < u.length; $ += 1)
        j(u[$]);
      j(O);
      for (let $ = 0; $ < g.length; $ += 1)
        j(g[$]);
      j(q), j(X), A = !1;
    },
    d(K) {
      K && ie(i);
      for (let $ = 0; $ < u.length; $ += 1)
        u[$].d();
      O && O.d();
      for (let $ = 0; $ < g.length; $ += 1)
        g[$].d();
      q && q.d(), X && X.d(), n[29](null), L = !1, It(B);
    }
  };
}
function Iv(n, i, r) {
  let u, o, a, l, c, _, g, v, C, w, { date: T } = i, { resource: E = void 0 } = i, { _events: F, _iEvents: R, highlightedDates: A, nowIndicator: L, slotDuration: B, slotHeight: W, theme: N, _interaction: O, _today: D, _slotTimeLimits: Y } = wt("state");
  k(n, F, (te) => r(28, g = te)), k(n, R, (te) => r(27, _ = te)), k(n, A, (te) => r(25, l = te)), k(n, L, (te) => r(9, w = te)), k(n, B, (te) => r(31, o = te)), k(n, W, (te) => r(30, u = te)), k(n, N, (te) => r(7, v = te)), k(n, O, (te) => r(8, C = te)), k(n, D, (te) => r(26, c = te)), k(n, Y, (te) => r(24, a = te));
  let q, X, K, $ = [], de, He, me, De;
  function ze(te) {
    return te -= ni(q).top, {
      allDay: !1,
      date: nt(nt(Ue(T), a.min), o, pc(te / u)),
      resource: E,
      dayEl: q
    };
  }
  function Q(te) {
    return te.pointer ? (Le) => te.pointer.enterTimeGrid(T, q, Le, E) : void 0;
  }
  function oe(te) {
    en[te ? "unshift" : "push"](() => {
      q = te, r(1, q);
    });
  }
  return n.$$set = (te) => {
    "date" in te && r(0, T = te.date), "resource" in te && r(21, E = te.resource);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*date, $_slotTimeLimits*/
    16777217 && (r(22, me = nt(Ue(T), a.min)), r(23, De = nt(Ue(T), a.max))), n.$$.dirty[0] & /*$_events, start, end, resource, bgChunks, chunks*/
    283115532) {
      r(2, X = []), r(3, K = []);
      for (let te of g)
        if (!te.allDay && Is(te, me, De, E, !0)) {
          let Le = As(te, me, De);
          switch (te.display) {
            case "background":
              K.push(Le);
              break;
            default:
              X.push(Le);
          }
        }
      _v(X);
    }
    n.$$.dirty[0] & /*$_iEvents, start, end, resource*/
    148897792 && r(4, $ = _.map((te) => te && Is(te, me, De, E, !0) ? As(te, me, De) : null)), n.$$.dirty[0] & /*date, $_today*/
    67108865 && r(5, de = Yn(T, c)), n.$$.dirty[0] & /*$highlightedDates, date*/
    33554433 && r(6, He = l.some((te) => Yn(te, T))), n.$$.dirty[0] & /*el*/
    2 && q && yc(q, ze);
  }, [
    T,
    q,
    X,
    K,
    $,
    de,
    He,
    v,
    C,
    w,
    F,
    R,
    A,
    L,
    B,
    W,
    N,
    O,
    D,
    Y,
    Q,
    E,
    me,
    De,
    a,
    l,
    c,
    _,
    g,
    oe
  ];
}
let Rv = class extends it {
  constructor(i) {
    super(), rt(this, i, Iv, Av, Ze, { date: 0, resource: 21 }, null, [-1, -1]);
  }
};
function Lv(n) {
  let i, r, u, o, a, l, c, _, g;
  var v = (
    /*$_interaction*/
    n[10].resizer
  );
  function C(w, T) {
    return { props: { event: (
      /*event*/
      w[0]
    ) } };
  }
  return v && (l = or(v, C(n)), l.$on("pointerdown", function() {
    he(
      /*createDragHandler*/
      n[29](
        /*$_interaction*/
        n[10],
        !0
      )
    ) && n[29](
      /*$_interaction*/
      n[10],
      !0
    ).apply(this, arguments);
  })), {
    c() {
      i = se("div"), r = se("div"), a = Ne(), l && Oe(l.$$.fragment), z(r, "class", u = /*$theme*/
      n[1].eventBody), z(
        i,
        "class",
        /*classes*/
        n[3]
      ), z(
        i,
        "style",
        /*style*/
        n[4]
      );
    },
    m(w, T) {
      ue(w, i, T), le(i, r), le(i, a), l && Re(l, i, null), n[45](i), c = !0, _ || (g = [
        bo(o = So.call(
          null,
          r,
          /*content*/
          n[5]
        )),
        ye(i, "click", function() {
          he(
            /*createHandler*/
            n[28](
              /*$eventClick*/
              n[7],
              /*display*/
              n[6]
            )
          ) && n[28](
            /*$eventClick*/
            n[7],
            /*display*/
            n[6]
          ).apply(this, arguments);
        }),
        ye(i, "mouseenter", function() {
          he(
            /*createHandler*/
            n[28](
              /*$eventMouseEnter*/
              n[8],
              /*display*/
              n[6]
            )
          ) && n[28](
            /*$eventMouseEnter*/
            n[8],
            /*display*/
            n[6]
          ).apply(this, arguments);
        }),
        ye(i, "mouseleave", function() {
          he(
            /*createHandler*/
            n[28](
              /*$eventMouseLeave*/
              n[9],
              /*display*/
              n[6]
            )
          ) && n[28](
            /*$eventMouseLeave*/
            n[9],
            /*display*/
            n[6]
          ).apply(this, arguments);
        }),
        ye(i, "pointerdown", function() {
          he(!Kn(
            /*display*/
            n[6]
          ) && /*createDragHandler*/
          n[29](
            /*$_interaction*/
            n[10]
          )) && (!Kn(
            /*display*/
            n[6]
          ) && /*createDragHandler*/
          n[29](
            /*$_interaction*/
            n[10]
          )).apply(this, arguments);
        })
      ], _ = !0);
    },
    p(w, T) {
      if (n = w, (!c || T[0] & /*$theme*/
      2 && u !== (u = /*$theme*/
      n[1].eventBody)) && z(r, "class", u), o && he(o.update) && T[0] & /*content*/
      32 && o.update.call(
        null,
        /*content*/
        n[5]
      ), T[0] & /*$_interaction*/
      1024 && v !== (v = /*$_interaction*/
      n[10].resizer)) {
        if (l) {
          ft();
          const E = l;
          j(E.$$.fragment, 1, 0, () => {
            Ae(E, 1);
          }), at();
        }
        v ? (l = or(v, C(n)), l.$on("pointerdown", function() {
          he(
            /*createDragHandler*/
            n[29](
              /*$_interaction*/
              n[10],
              !0
            )
          ) && n[29](
            /*$_interaction*/
            n[10],
            !0
          ).apply(this, arguments);
        }), Oe(l.$$.fragment), x(l.$$.fragment, 1), Re(l, i, null)) : l = null;
      } else if (v) {
        const E = {};
        T[0] & /*event*/
        1 && (E.event = /*event*/
        n[0]), l.$set(E);
      }
      (!c || T[0] & /*classes*/
      8) && z(
        i,
        "class",
        /*classes*/
        n[3]
      ), (!c || T[0] & /*style*/
      16) && z(
        i,
        "style",
        /*style*/
        n[4]
      );
    },
    i(w) {
      c || (l && x(l.$$.fragment, w), c = !0);
    },
    o(w) {
      l && j(l.$$.fragment, w), c = !1;
    },
    d(w) {
      w && ie(i), l && Ae(l), n[45](null), _ = !1, It(g);
    }
  };
}
function Ov(n, i, r) {
  let u, o, a, l, c, _, g, v, C, w, T, E, F, R, A, L, B, { chunk: W } = i, { longChunks: N = {} } = i, { displayEventEnd: O, eventBackgroundColor: D, eventTextColor: Y, eventClick: q, eventColor: X, eventContent: K, eventClassNames: $, eventDidMount: de, eventMouseEnter: He, eventMouseLeave: me, theme: De, _view: ze, _intlEventTime: Q, _interaction: oe, _iClasses: te, _resBgColor: Le, _resTxtColor: bt } = wt("state");
  k(n, O, (ne) => r(37, _ = ne)), k(n, D, (ne) => r(43, E = ne)), k(n, Y, (ne) => r(40, C = ne)), k(n, q, (ne) => r(7, R = ne)), k(n, X, (ne) => r(42, T = ne)), k(n, K, (ne) => r(36, c = ne)), k(n, $, (ne) => r(38, g = ne)), k(n, de, (ne) => r(47, o = ne)), k(n, He, (ne) => r(8, A = ne)), k(n, me, (ne) => r(9, L = ne)), k(n, De, (ne) => r(1, l = ne)), k(n, ze, (ne) => r(34, u = ne)), k(n, Q, (ne) => r(35, a = ne)), k(n, oe, (ne) => r(10, B = ne)), k(n, te, (ne) => r(39, v = ne)), k(n, Le, (ne) => r(44, F = ne)), k(n, bt, (ne) => r(41, w = ne)), Co();
  let Je, Ke, ct, ht, _t, $e, V = 1, Ie;
  ic(() => {
    he(o) && o({
      event: $t(Ke),
      timeText: $e,
      el: Je,
      view: xt(u)
    });
  });
  function Qe(ne, Rt) {
    return !Kn(Rt) && he(ne) ? (gt) => ne({
      event: $t(Ke),
      el: Je,
      jsEvent: gt,
      view: xt(u)
    }) : void 0;
  }
  function et(ne, Rt) {
    return ne.action ? (gt) => ne.action.drag(Ke, gt, Rt) : void 0;
  }
  function Bt() {
    !Je || Ec(Ie) || r(33, V = Rm(W, N, Dm(Je)));
  }
  function dt(ne) {
    en[ne ? "unshift" : "push"](() => {
      Je = ne, r(2, Je);
    });
  }
  return n.$$set = (ne) => {
    "chunk" in ne && r(30, W = ne.chunk), "longChunks" in ne && r(31, N = ne.longChunks);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*chunk*/
    1073741824 && r(0, Ke = W.event), n.$$.dirty[0] & /*event, chunk, style, $theme*/
    1073741843 | n.$$.dirty[1] & /*$_resBgColor, $eventBackgroundColor, $eventColor, $_resTxtColor, $eventTextColor, margin, $_iClasses, $eventClassNames, $_view*/
    16268) {
      r(6, Ie = Ke.display);
      let ne = Ke.backgroundColor || F(Ke) || E || T, Rt = Ke.textColor || w(Ke) || C;
      r(4, ht = `width:calc(${W.days * 100}% + ${(W.days - 1) * 7}px);margin-top:${V}px;`), ne && r(4, ht += `background-color:${ne};`), Rt && r(4, ht += `color:${Rt};`), r(3, ct = [
        l.event,
        ...v([], Ke),
        ...Sc(g, Ke, u)
      ].join(" "));
    }
    n.$$.dirty[0] & /*chunk, $theme*/
    1073741826 | n.$$.dirty[1] & /*$displayEventEnd, $eventContent, $_intlEventTime, $_view*/
    120 && r(5, [$e, _t] = Tc(W, _, c, l, a, u), _t);
  }, [
    Ke,
    l,
    Je,
    ct,
    ht,
    _t,
    Ie,
    R,
    A,
    L,
    B,
    O,
    D,
    Y,
    q,
    X,
    K,
    $,
    de,
    He,
    me,
    De,
    ze,
    Q,
    oe,
    te,
    Le,
    bt,
    Qe,
    et,
    W,
    N,
    Bt,
    V,
    u,
    a,
    c,
    _,
    g,
    v,
    C,
    w,
    T,
    E,
    F,
    dt
  ];
}
class Rc extends it {
  constructor(i) {
    super(), rt(
      this,
      i,
      Ov,
      Lv,
      Ze,
      {
        chunk: 30,
        longChunks: 31,
        reposition: 32
      },
      null,
      [-1, -1]
    );
  }
  get reposition() {
    return this.$$.ctx[32];
  }
}
function Ra(n, i, r) {
  const u = n.slice();
  return u[20] = i[r], u[21] = i, u[22] = r, u;
}
function La(n) {
  let i, r, u, o;
  return r = new Rc({ props: { chunk: (
    /*iChunks*/
    n[2][0]
  ) } }), {
    c() {
      i = se("div"), Oe(r.$$.fragment), z(i, "class", u = /*$theme*/
      n[8].events + " " + /*$theme*/
      n[8].preview);
    },
    m(a, l) {
      ue(a, i, l), Re(r, i, null), o = !0;
    },
    p(a, l) {
      const c = {};
      l & /*iChunks*/
      4 && (c.chunk = /*iChunks*/
      a[2][0]), r.$set(c), (!o || l & /*$theme*/
      256 && u !== (u = /*$theme*/
      a[8].events + " " + /*$theme*/
      a[8].preview)) && z(i, "class", u);
    },
    i(a) {
      o || (x(r.$$.fragment, a), o = !0);
    },
    o(a) {
      j(r.$$.fragment, a), o = !1;
    },
    d(a) {
      a && ie(i), Ae(r);
    }
  };
}
function Oa(n, i) {
  let r, u, o = (
    /*i*/
    i[22]
  ), a;
  const l = () => (
    /*event_binding*/
    i[17](u, o)
  ), c = () => (
    /*event_binding*/
    i[17](null, o)
  );
  let _ = {
    chunk: (
      /*chunk*/
      i[20]
    ),
    longChunks: (
      /*longChunks*/
      i[1]
    )
  };
  return u = new Rc({ props: _ }), l(), {
    key: n,
    first: null,
    c() {
      r = Ft(), Oe(u.$$.fragment), this.first = r;
    },
    m(g, v) {
      ue(g, r, v), Re(u, g, v), a = !0;
    },
    p(g, v) {
      i = g, o !== /*i*/
      i[22] && (c(), o = /*i*/
      i[22], l());
      const C = {};
      v & /*dayChunks*/
      16 && (C.chunk = /*chunk*/
      i[20]), v & /*longChunks*/
      2 && (C.longChunks = /*longChunks*/
      i[1]), u.$set(C);
    },
    i(g) {
      a || (x(u.$$.fragment, g), a = !0);
    },
    o(g) {
      j(u.$$.fragment, g), a = !1;
    },
    d(g) {
      g && ie(r), c(), Ae(u, g);
    }
  };
}
function Pv(n) {
  let i, r = (
    /*iChunks*/
    n[2][0] && Yn(
      /*iChunks*/
      n[2][0].date,
      /*date*/
      n[0]
    )
  ), u, o, a = [], l = /* @__PURE__ */ new Map(), c, _, g, v, C, w = r && La(n), T = Ge(
    /*dayChunks*/
    n[4]
  );
  const E = (F) => (
    /*chunk*/
    F[20].event
  );
  for (let F = 0; F < T.length; F += 1) {
    let R = Ra(n, T, F), A = E(R);
    l.set(A, a[F] = Oa(A, R));
  }
  return {
    c() {
      i = se("div"), w && w.c(), u = Ne(), o = se("div");
      for (let F = 0; F < a.length; F += 1)
        a[F].c();
      z(o, "class", c = /*$theme*/
      n[8].events), z(i, "class", _ = /*$theme*/
      n[8].day + /*isToday*/
      (n[5] ? " " + /*$theme*/
      n[8].today : "") + /*highlight*/
      (n[6] ? " " + /*$theme*/
      n[8].highlight : ""));
    },
    m(F, R) {
      ue(F, i, R), w && w.m(i, null), le(i, u), le(i, o);
      for (let A = 0; A < a.length; A += 1)
        a[A] && a[A].m(o, null);
      n[18](i), g = !0, v || (C = [
        ye(
          window,
          "resize",
          /*reposition*/
          n[13]
        ),
        ye(i, "pointerdown", function() {
          var A, L;
          he(
            /*$_interaction*/
            (A = n[9].action) == null ? void 0 : A.select
          ) && ((L = n[9].action) == null || L.select.apply(this, arguments));
        })
      ], v = !0);
    },
    p(F, [R]) {
      n = F, R & /*iChunks, date*/
      5 && (r = /*iChunks*/
      n[2][0] && Yn(
        /*iChunks*/
        n[2][0].date,
        /*date*/
        n[0]
      )), r ? w ? (w.p(n, R), R & /*iChunks, date*/
      5 && x(w, 1)) : (w = La(n), w.c(), x(w, 1), w.m(i, u)) : w && (ft(), j(w, 1, 1, () => {
        w = null;
      }), at()), R & /*dayChunks, longChunks, refs*/
      146 && (T = Ge(
        /*dayChunks*/
        n[4]
      ), ft(), a = po(a, R, E, 1, n, T, l, o, go, Oa, null, Ra), at()), (!g || R & /*$theme*/
      256 && c !== (c = /*$theme*/
      n[8].events)) && z(o, "class", c), (!g || R & /*$theme, isToday, highlight*/
      352 && _ !== (_ = /*$theme*/
      n[8].day + /*isToday*/
      (n[5] ? " " + /*$theme*/
      n[8].today : "") + /*highlight*/
      (n[6] ? " " + /*$theme*/
      n[8].highlight : ""))) && z(i, "class", _);
    },
    i(F) {
      if (!g) {
        x(w);
        for (let R = 0; R < T.length; R += 1)
          x(a[R]);
        g = !0;
      }
    },
    o(F) {
      j(w);
      for (let R = 0; R < a.length; R += 1)
        j(a[R]);
      g = !1;
    },
    d(F) {
      F && ie(i), w && w.d();
      for (let R = 0; R < a.length; R += 1)
        a[R].d();
      n[18](null), v = !1, It(C);
    }
  };
}
function Mv(n, i, r) {
  let u, o, a, { date: l } = i, { chunks: c } = i, { longChunks: _ } = i, { iChunks: g = [] } = i, { resource: v = void 0 } = i, { highlightedDates: C, theme: w, _interaction: T } = wt("state");
  k(n, C, (D) => r(16, u = D)), k(n, w, (D) => r(8, o = D)), k(n, T, (D) => r(9, a = D));
  let E, F, R = xn(qn()), A, L, B = [];
  function W() {
    r(7, B.length = F.length, B);
    for (let D of B)
      D && D.reposition && D.reposition();
  }
  Y0(W);
  function N(D, Y) {
    en[D ? "unshift" : "push"](() => {
      B[Y] = D, r(7, B);
    });
  }
  function O(D) {
    en[D ? "unshift" : "push"](() => {
      E = D, r(3, E);
    });
  }
  return n.$$set = (D) => {
    "date" in D && r(0, l = D.date), "chunks" in D && r(14, c = D.chunks), "longChunks" in D && r(1, _ = D.longChunks), "iChunks" in D && r(2, g = D.iChunks), "resource" in D && r(15, v = D.resource);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*chunks, date, dayChunks*/
    16401) {
      r(4, F = []);
      for (let D of c)
        Yn(D.date, l) && F.push(D);
    }
    n.$$.dirty & /*date, $highlightedDates*/
    65537 && (r(5, A = Yn(l, R)), r(6, L = u.some((D) => Yn(D, l)))), n.$$.dirty & /*el, date, resource*/
    32777 && E && yc(E, () => ({ allDay: !0, date: l, resource: v, dayEl: E }));
  }, [
    l,
    _,
    g,
    E,
    F,
    A,
    L,
    B,
    o,
    a,
    C,
    w,
    T,
    W,
    c,
    v,
    u,
    N,
    O
  ];
}
class Uv extends it {
  constructor(i) {
    super(), rt(this, i, Mv, Pv, Ze, {
      date: 0,
      chunks: 14,
      longChunks: 1,
      iChunks: 2,
      resource: 15
    });
  }
}
function Pa(n, i, r) {
  const u = n.slice();
  return u[14] = i[r], u;
}
function Ma(n) {
  let i, r;
  return i = new Uv({
    props: {
      date: (
        /*date*/
        n[14]
      ),
      chunks: (
        /*chunks*/
        n[2]
      ),
      longChunks: (
        /*longChunks*/
        n[3]
      ),
      iChunks: (
        /*iChunks*/
        n[4]
      ),
      resource: (
        /*resource*/
        n[1]
      )
    }
  }), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    p(u, o) {
      const a = {};
      o & /*dates*/
      1 && (a.date = /*date*/
      u[14]), o & /*chunks*/
      4 && (a.chunks = /*chunks*/
      u[2]), o & /*longChunks*/
      8 && (a.longChunks = /*longChunks*/
      u[3]), o & /*iChunks*/
      16 && (a.iChunks = /*iChunks*/
      u[4]), o & /*resource*/
      2 && (a.resource = /*resource*/
      u[1]), i.$set(a);
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function Fv(n) {
  let i, r, u = Ge(
    /*dates*/
    n[0]
  ), o = [];
  for (let l = 0; l < u.length; l += 1)
    o[l] = Ma(Pa(n, u, l));
  const a = (l) => j(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      i = Ft();
    },
    m(l, c) {
      for (let _ = 0; _ < o.length; _ += 1)
        o[_] && o[_].m(l, c);
      ue(l, i, c), r = !0;
    },
    p(l, [c]) {
      if (c & /*dates, chunks, longChunks, iChunks, resource*/
      31) {
        u = Ge(
          /*dates*/
          l[0]
        );
        let _;
        for (_ = 0; _ < u.length; _ += 1) {
          const g = Pa(l, u, _);
          o[_] ? (o[_].p(g, c), x(o[_], 1)) : (o[_] = Ma(g), o[_].c(), x(o[_], 1), o[_].m(i.parentNode, i));
        }
        for (ft(), _ = u.length; _ < o.length; _ += 1)
          a(_);
        at();
      }
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < u.length; c += 1)
          x(o[c]);
        r = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        j(o[c]);
      r = !1;
    },
    d(l) {
      l && ie(i), vn(o, l);
    }
  };
}
function Bv(n, i, r) {
  let u, o, a, { dates: l } = i, { resource: c = void 0 } = i, { _events: _, _iEvents: g, hiddenDays: v, theme: C } = wt("state");
  k(n, _, (A) => r(12, a = A)), k(n, g, (A) => r(11, o = A)), k(n, v, (A) => r(10, u = A));
  let w, T, E = [], F, R;
  return n.$$set = (A) => {
    "dates" in A && r(0, l = A.dates), "resource" in A && r(1, c = A.resource);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*dates*/
    1 && (r(8, F = l[0]), r(9, R = ti(Ue(l[l.length - 1])))), n.$$.dirty & /*$_events, start, end, resource, chunks, $hiddenDays*/
    5894) {
      r(2, w = []);
      for (let A of a)
        if (A.allDay && A.display !== "background" && Is(A, F, R, c)) {
          let L = As(A, F, R);
          w.push(L);
        }
      r(3, T = oa(w, u));
    }
    n.$$.dirty & /*$_iEvents, start, end, resource, $hiddenDays*/
    3842 && r(4, E = o.map((A) => {
      let L;
      return A && A.allDay && Is(A, F, R, c) ? (L = As(A, F, R), oa([L], u)) : L = null, L;
    }));
  }, [
    l,
    c,
    w,
    T,
    E,
    _,
    g,
    v,
    F,
    R,
    u,
    o,
    a
  ];
}
class Wv extends it {
  constructor(i) {
    super(), rt(this, i, Bv, Fv, Ze, { dates: 0, resource: 1 });
  }
}
function Ua(n, i, r) {
  const u = n.slice();
  return u[11] = i[r], u;
}
function Fa(n, i, r) {
  const u = n.slice();
  return u[11] = i[r], u;
}
function Ba(n) {
  let i, r = (
    /*$_intlDayHeader*/
    n[2].format(
      /*date*/
      n[11]
    ) + ""
  ), u, o;
  return {
    c() {
      i = se("div"), u = kn(r), z(i, "class", o = /*$theme*/
      n[0].day);
    },
    m(a, l) {
      ue(a, i, l), le(i, u);
    },
    p(a, l) {
      l & /*$_intlDayHeader, $_viewDates*/
      6 && r !== (r = /*$_intlDayHeader*/
      a[2].format(
        /*date*/
        a[11]
      ) + "") && kr(u, r), l & /*$theme*/
      1 && o !== (o = /*$theme*/
      a[0].day) && z(i, "class", o);
    },
    d(a) {
      a && ie(i);
    }
  };
}
function Nv(n) {
  let i, r = Ge(
    /*$_viewDates*/
    n[1]
  ), u = [];
  for (let o = 0; o < r.length; o += 1)
    u[o] = Ba(Fa(n, r, o));
  return {
    c() {
      for (let o = 0; o < u.length; o += 1)
        u[o].c();
      i = Ft();
    },
    m(o, a) {
      for (let l = 0; l < u.length; l += 1)
        u[l] && u[l].m(o, a);
      ue(o, i, a);
    },
    p(o, a) {
      if (a & /*$theme, $_intlDayHeader, $_viewDates*/
      7) {
        r = Ge(
          /*$_viewDates*/
          o[1]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = Fa(o, r, l);
          u[l] ? u[l].p(c, a) : (u[l] = Ba(c), u[l].c(), u[l].m(i.parentNode, i));
        }
        for (; l < u.length; l += 1)
          u[l].d(1);
        u.length = r.length;
      }
    },
    d(o) {
      o && ie(i), vn(u, o);
    }
  };
}
function Wa(n) {
  let i, r, u, o, a, l, c, _, g;
  return u = new Eo({
    props: {
      $$slots: { default: [Hv] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      i = se("div"), r = se("div"), Oe(u.$$.fragment), o = Ne(), a = se("div"), z(a, "class", l = /*$theme*/
      n[0].hiddenScroll), z(r, "class", c = /*$theme*/
      n[0].content), z(i, "class", _ = /*$theme*/
      n[0].allDay);
    },
    m(v, C) {
      ue(v, i, C), le(i, r), Re(u, r, null), le(r, o), le(r, a), g = !0;
    },
    p(v, C) {
      const w = {};
      C & /*$$scope, $_viewDates*/
      65538 && (w.$$scope = { dirty: C, ctx: v }), u.$set(w), (!g || C & /*$theme*/
      1 && l !== (l = /*$theme*/
      v[0].hiddenScroll)) && z(a, "class", l), (!g || C & /*$theme*/
      1 && c !== (c = /*$theme*/
      v[0].content)) && z(r, "class", c), (!g || C & /*$theme*/
      1 && _ !== (_ = /*$theme*/
      v[0].allDay)) && z(i, "class", _);
    },
    i(v) {
      g || (x(u.$$.fragment, v), g = !0);
    },
    o(v) {
      j(u.$$.fragment, v), g = !1;
    },
    d(v) {
      v && ie(i), Ae(u);
    }
  };
}
function Hv(n) {
  let i, r;
  return i = new Wv({ props: { dates: (
    /*$_viewDates*/
    n[1]
  ) } }), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    p(u, o) {
      const a = {};
      o & /*$_viewDates*/
      2 && (a.dates = /*$_viewDates*/
      u[1]), i.$set(a);
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function Na(n) {
  let i, r;
  return i = new Rv({ props: { date: (
    /*date*/
    n[11]
  ) } }), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    p(u, o) {
      const a = {};
      o & /*$_viewDates*/
      2 && (a.date = /*date*/
      u[11]), i.$set(a);
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function Gv(n) {
  let i, r, u = Ge(
    /*$_viewDates*/
    n[1]
  ), o = [];
  for (let l = 0; l < u.length; l += 1)
    o[l] = Na(Ua(n, u, l));
  const a = (l) => j(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      i = Ft();
    },
    m(l, c) {
      for (let _ = 0; _ < o.length; _ += 1)
        o[_] && o[_].m(l, c);
      ue(l, i, c), r = !0;
    },
    p(l, c) {
      if (c & /*$_viewDates*/
      2) {
        u = Ge(
          /*$_viewDates*/
          l[1]
        );
        let _;
        for (_ = 0; _ < u.length; _ += 1) {
          const g = Ua(l, u, _);
          o[_] ? (o[_].p(g, c), x(o[_], 1)) : (o[_] = Na(g), o[_].c(), x(o[_], 1), o[_].m(i.parentNode, i));
        }
        for (ft(), _ = u.length; _ < o.length; _ += 1)
          a(_);
        at();
      }
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < u.length; c += 1)
          x(o[c]);
        r = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        j(o[c]);
      r = !1;
    },
    d(l) {
      l && ie(i), vn(o, l);
    }
  };
}
function zv(n) {
  let i, r, u, o, a, l, c, _, g, v;
  r = new Eo({
    props: {
      $$slots: { default: [Nv] },
      $$scope: { ctx: n }
    }
  });
  let C = (
    /*$allDaySlot*/
    n[3] && Wa(n)
  );
  return g = new Cv({
    props: {
      $$slots: { default: [Gv] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      i = se("div"), Oe(r.$$.fragment), u = Ne(), o = se("div"), c = Ne(), C && C.c(), _ = Ne(), Oe(g.$$.fragment), z(o, "class", a = /*$theme*/
      n[0].hiddenScroll), z(i, "class", l = /*$theme*/
      n[0].header);
    },
    m(w, T) {
      ue(w, i, T), Re(r, i, null), le(i, u), le(i, o), ue(w, c, T), C && C.m(w, T), ue(w, _, T), Re(g, w, T), v = !0;
    },
    p(w, [T]) {
      const E = {};
      T & /*$$scope, $_viewDates, $theme, $_intlDayHeader*/
      65543 && (E.$$scope = { dirty: T, ctx: w }), r.$set(E), (!v || T & /*$theme*/
      1 && a !== (a = /*$theme*/
      w[0].hiddenScroll)) && z(o, "class", a), (!v || T & /*$theme*/
      1 && l !== (l = /*$theme*/
      w[0].header)) && z(i, "class", l), /*$allDaySlot*/
      w[3] ? C ? (C.p(w, T), T & /*$allDaySlot*/
      8 && x(C, 1)) : (C = Wa(w), C.c(), x(C, 1), C.m(_.parentNode, _)) : C && (ft(), j(C, 1, 1, () => {
        C = null;
      }), at());
      const F = {};
      T & /*$$scope, $_viewDates*/
      65538 && (F.$$scope = { dirty: T, ctx: w }), g.$set(F);
    },
    i(w) {
      v || (x(r.$$.fragment, w), x(C), x(g.$$.fragment, w), v = !0);
    },
    o(w) {
      j(r.$$.fragment, w), j(C), j(g.$$.fragment, w), v = !1;
    },
    d(w) {
      w && (ie(i), ie(c), ie(_)), Ae(r), C && C.d(w), Ae(g, w);
    }
  };
}
function xv(n, i, r) {
  let u, o, a, l, c, { _viewDates: _, _intlDayHeader: g, _viewClass: v, _scrollable: C, allDaySlot: w, theme: T } = wt("state");
  return k(n, _, (E) => r(1, a = E)), k(n, g, (E) => r(2, l = E)), k(n, v, (E) => r(9, u = E)), k(n, w, (E) => r(3, c = E)), k(n, T, (E) => r(0, o = E)), We(v, u = "week", u), [
    o,
    a,
    l,
    c,
    _,
    g,
    v,
    w,
    T
  ];
}
class Ha extends it {
  constructor(i) {
    super(), rt(this, i, xv, zv, Ze, {});
  }
}
const Yv = {
  createOptions(n) {
    n.buttonText.timeGridDay = "day", n.buttonText.timeGridWeek = "week", n.view = "timeGridWeek", n.views.timeGridDay = {
      buttonText: gm,
      component: Ha,
      dayHeaderFormat: { weekday: "long" },
      duration: { days: 1 },
      titleFormat: { year: "numeric", month: "long", day: "numeric" }
    }, n.views.timeGridWeek = {
      buttonText: pm,
      component: Ha,
      duration: { weeks: 1 }
    };
  },
  createStores(n) {
    n._slotTimeLimits = hv(n), n._times = cv(n);
  }
};
let lo = !1;
function qv(n) {
  lo || (lo = !0, window.requestAnimationFrame(() => {
    n(), lo = !1;
  }));
}
function Ga(n, i, r) {
  return ur(i, Dr(r, n));
}
const { window: sr } = rc;
function Kv(n) {
  let i, r;
  return {
    c: Me,
    m(u, o) {
      i || (r = [
        ye(
          sr,
          "pointermove",
          /*handlePointerMove*/
          n[31]
        ),
        ye(
          sr,
          "pointerup",
          /*handlePointerUp*/
          n[32]
        ),
        ye(
          sr,
          "pointercancel",
          /*handlePointerUp*/
          n[32]
        ),
        ye(
          sr,
          "scroll",
          /*handleScroll*/
          n[0]
        ),
        ye(sr, "selectstart", Ts(
          /*complexAction*/
          n[33]
        )),
        ye(sr, "contextmenu", function() {
          he(Ts(
            /*contextmenu_handler*/
            n[40]
          )) && Ts(
            /*contextmenu_handler*/
            n[40]
          ).apply(this, arguments);
        }),
        ye(
          sr,
          "touchstart",
          /*handleTouchStart*/
          n[34]
        ),
        ye(
          sr,
          "touchmove",
          /*touchmove_handler*/
          n[39],
          { passive: !1 }
        )
      ], i = !0);
    },
    p(u, o) {
      n = u;
    },
    i: Me,
    o: Me,
    d(u) {
      i = !1, It(r);
    }
  };
}
const za = 1, xa = 2, Ya = 3, fo = 4, ao = 5;
function qa(n) {
  return n.isPrimary && (n.pointerType !== "mouse" || n.buttons & 1);
}
function Ts(n) {
  return (i) => {
    n() && i.preventDefault();
  };
}
function Xv(n, i, r) {
  let u, o, a, l, c, _, g, v, C, w, T, E, F, R, A, L, B, W, N, O, D, Y, q, X, K, $, de, He, me, { _iEvents: De, _iClass: ze, _events: Q, _view: oe, _monthMode: te, _draggable: Le, _viewClass: bt, dragScroll: Je, datesAboveResources: Ke, eventDragMinDistance: ct, eventDragStart: ht, eventDragStop: _t, eventDrop: $e, eventLongPressDelay: V, eventResizeStart: Ie, eventResizeStop: Qe, eventResize: et, longPressDelay: Bt, selectable: dt, select: ne, selectBackgroundColor: Rt, selectLongPressDelay: gt, selectMinDistance: lr, slotDuration: Ir, slotHeight: wn, unselect: J, unselectAuto: Wt, unselectCancel: Lt, dateClick: Rr } = wt("state");
  k(n, De, (H) => r(68, l = H)), k(n, ze, (H) => r(71, g = H)), k(n, Q, (H) => r(67, a = H)), k(n, oe, (H) => r(65, u = H)), k(n, te, (H) => r(70, _ = H)), k(n, Le, (H) => r(93, me = H)), k(n, bt, (H) => r(91, de = H)), k(n, Je, (H) => r(81, B = H)), k(n, Ke, (H) => r(89, K = H)), k(n, ct, (H) => r(84, O = H)), k(n, ht, (H) => r(82, W = H)), k(n, _t, (H) => r(75, T = H)), k(n, $e, (H) => r(73, C = H)), k(n, V, (H) => r(87, q = H)), k(n, Ie, (H) => r(83, N = H)), k(n, Qe, (H) => r(76, E = H)), k(n, et, (H) => r(74, w = H)), k(n, Bt, (H) => r(86, Y = H)), k(n, dt, (H) => r(92, He = H)), k(n, ne, (H) => r(77, F = H)), k(n, Rt, (H) => r(69, c = H)), k(n, gt, (H) => r(88, X = H)), k(n, lr, (H) => r(85, D = H)), k(n, Ir, (H) => r(90, $ = H)), k(n, wn, (H) => r(80, L = H)), k(n, J, (H) => r(66, o = H)), k(n, Wt, (H) => r(79, A = H)), k(n, Lt, (H) => r(78, R = H)), k(n, Rr, (H) => r(72, v = H));
  let st, cn, Te, qt, Kt, fr, St, yn, ar, cr, tn, Ve, bn, Cn, ri, Lr, An, hn, ii, Tn, Or, Pr, Mr, Xn, hr;
  function Ms(H, _e, ut, Ot) {
    st || (st = qa(_e) ? ut ? xa : me(H) ? za : ao : ao, Jn() && (Te = H, Li(_e), Ot && (Kt = Ot), ii = ut ? hn ? "resizingX" : "resizingY" : "dragging", ut && (Tn = Ue(Te.start), hn ? (Tn.setUTCHours(Te.end.getUTCHours(), Te.end.getUTCMinutes(), Te.end.getUTCSeconds(), 0), Tn < Te.start && ti(Tn)) : nt(Tn, $)), In(_e)));
  }
  function si(H) {
    st || (st = qa(H) ? He && de !== "list" ? Ya : fo : ao, Jn() && (Li(H), ii = "selecting", Or = hn ? mn({ day: 1 }) : $, Te = {
      allDay: hn,
      start: Kt,
      end: nt(Ue(Kt), Or),
      resourceIds: St ? [St.id] : []
    }, In(H)));
  }
  function Li(H) {
    window.getSelection().removeAllRanges(), ar = tn = H.clientX, cr = Ve = H.clientY;
    let _e = Si(tn, Ve);
    ({ allDay: hn, date: Kt, resource: St } = Cs(_e)(Ve)), bn = ua(_e, St ? 4 : 3), ri = ua(_e, St && (zs() || K) ? 2 : 1), Oi(), H.pointerType !== "mouse" && r(1, Xn = setTimeout(
      () => {
        st && (cn = !0, In(H));
      },
      (Zn() ? X : q) ?? Y
    ));
  }
  function In(H) {
    if (cn || H && H.pointerType === "mouse" && Gs() >= (Zn() ? D : O)) {
      cn = !0, Rn(H), We(ze, g = ii, g), l[0] || (Zn() ? Hs() : Ns(H, _r() ? N : W));
      let _e = Ws();
      if (_e) {
        let ut;
        ({ allDay: ut, date: fr, resource: yn } = Cs(_e)(Ve)), ut === hn && (An = mn((fr - Kt) / 1e3), We(De, l[0].end = nt(Ue(Te.end), An), l), _r() ? l[0].end < Tn && We(De, l[0].end = Tn, l) : Zn() ? l[0].end < Te.end ? (We(De, l[0].start = mc(l[0].end, Or), l), We(De, l[0].end = Te.end, l)) : We(De, l[0].start = Te.start, l) : (We(De, l[0].start = nt(Ue(Te.start), An), l), St && (We(De, l[0].resourceIds = Te.resourceIds.filter((Ot) => Ot !== St.id), l), l[0].resourceIds.push(yn.id))));
      }
    }
    if (B) {
      let _e = L * 2;
      qv(() => {
        bn && (Ve < _e && window.scrollBy(0, ur(-10, (Ve - _e) / 3)), Ve < Cn.top + _e && (bn.scrollTop += ur(-10, (Ve - Cn.top - _e) / 3)), Ve > window.innerHeight - _e && window.scrollBy(0, Dr(10, (Ve - window.innerHeight + _e) / 3)), Ve > Cn.bottom - _e && (bn.scrollTop += Dr(10, (Ve - Cn.bottom + _e) / 3)));
      });
    }
  }
  function Us() {
    Jn() && (Oi(), In());
  }
  function Fs(H) {
    Jn() && H.isPrimary && (tn = H.clientX, Ve = H.clientY, In(H));
  }
  function Bs(H) {
    if (Pr && A && !(R && H.target.closest(R)) && Rn(H), st && H.isPrimary) {
      if (cn)
        if (Zn()) {
          if (Pr = !0, he(F)) {
            let { start: _e, end: ut } = $t(l[0]);
            F({
              start: _e,
              end: ut,
              startStr: Er(l[0].start),
              endStr: Er(l[0].end),
              allDay: hn,
              jsEvent: H,
              view: xt(u),
              resource: St
            });
          }
        } else {
          Te.display = qt;
          let _e = _r() ? E : T;
          he(_e) && _e({
            event: $t(Te),
            jsEvent: H,
            view: xt(u)
          });
          let ut = la(Te);
          if (ui(Te, l[0]), Pi(), _e = _r() ? w : C, he(_e)) {
            let Ot = Te, dr;
            _r() ? dr = { endDelta: An } : dr = {
              delta: An,
              oldResource: St !== yn ? St : void 0,
              newResource: St !== yn ? yn : void 0
            }, _e(zn(dr, {
              event: $t(Te),
              oldEvent: $t(ut),
              jsEvent: H,
              view: xt(u),
              revert() {
                ui(Ot, ut);
              }
            }));
          }
        }
      else if ((xs() || Zn()) && he(v) && !Mr) {
        tn = H.clientX, Ve = H.clientY;
        let _e = Si(tn, Ve);
        if (_e) {
          let { allDay: ut, date: Ot, resource: dr } = Cs(_e)(Ve);
          v({
            allDay: ut,
            date: At(Ot),
            dateStr: Er(Ot),
            dayEl: _e,
            jsEvent: H,
            view: xt(u),
            resource: dr
          });
        }
      }
      cn = !1, st = ar = cr = tn = Ve = Te = qt = Kt = fr = St = yn = An = hn = We(ze, g = Tn = Or = void 0, g), bn = ri = Cn = Lr = void 0, Xn && (clearTimeout(Xn), r(1, Xn = void 0));
    }
    Mr = !1;
  }
  function Ws() {
    return Si(Ga(tn, hr[0], hr[1]), Ga(Ve, hr[2], hr[3]));
  }
  function Oi() {
    Cn = ni(bn), Lr = ni(ri), hr = [
      ur(0, Lr.left + (_ ? 0 : 8)),
      Dr(
        document.documentElement.clientWidth,
        Lr.right
      ) - 2,
      ur(
        0,
        Cn.top
        // top
      ),
      Dr(document.documentElement.clientHeight, Cn.bottom) - 2
    ];
  }
  function Ns(H, _e) {
    he(_e) && _e({
      event: $t(Te),
      jsEvent: H,
      view: xt(u)
    }), qt = Te.display, Te.display = "preview", We(De, l[0] = la(Te), l), Te.display = "ghost", Q.set(a);
  }
  function Hs() {
    We(
      De,
      l[0] = {
        id: "{select}",
        allDay: Te.allDay,
        start: Te.start,
        title: "",
        display: "preview",
        extendedProps: {},
        backgroundColor: c,
        resourceIds: Te.resourceIds
      },
      l
    );
  }
  function Pi() {
    We(De, l[0] = null, l);
  }
  function ui(H, _e) {
    H.start = _e.start, H.end = _e.end, H.resourceIds = _e.resourceIds, Q.set(a);
  }
  function Gs() {
    return Math.sqrt(Math.pow(tn - ar, 2) + Math.pow(Ve - cr, 2));
  }
  function zs() {
    return st === za;
  }
  function _r() {
    return st === xa;
  }
  function xs() {
    return st === fo;
  }
  function Zn() {
    return st === Ya;
  }
  function Jn() {
    return st && st < fo;
  }
  function Rn(H) {
    Pr && (Pr = !1, Pi(), he(o) && o({
      jsEvent: H,
      view: xt(u)
    }));
  }
  function Ys() {
    Mr = !0;
  }
  oe.subscribe(Rn);
  function Ur(H) {
    if (Jn()) {
      let _e = H.target, ut = [], Ot = () => It(ut);
      ut.push(ye(_e, "touchmove", Ts(() => cn))), ut.push(ye(_e, "touchend", Ot)), ut.push(ye(_e, "touchcancel", Ot));
    }
  }
  function qs(H) {
    sc.call(this, n, H);
  }
  return [
    Us,
    Xn,
    De,
    ze,
    Q,
    oe,
    te,
    Le,
    bt,
    Je,
    Ke,
    ct,
    ht,
    _t,
    $e,
    V,
    Ie,
    Qe,
    et,
    Bt,
    dt,
    ne,
    Rt,
    gt,
    lr,
    Ir,
    wn,
    J,
    Wt,
    Lt,
    Rr,
    Fs,
    Bs,
    Jn,
    Ur,
    Ms,
    si,
    Rn,
    Ys,
    qs,
    () => Xn
  ];
}
class Zv extends it {
  constructor(i) {
    super(), rt(
      this,
      i,
      Xv,
      Kv,
      Ze,
      {
        drag: 35,
        select: 36,
        handleScroll: 0,
        unselect: 37,
        noClick: 38
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get drag() {
    return this.$$.ctx[35];
  }
  get select() {
    return this.$$.ctx[36];
  }
  get handleScroll() {
    return this.$$.ctx[0];
  }
  get unselect() {
    return this.$$.ctx[37];
  }
  get noClick() {
    return this.$$.ctx[38];
  }
}
function Jv(n) {
  let i, r;
  return {
    c: Me,
    m(u, o) {
      i || (r = [
        ye(
          window,
          "pointermove",
          /*handlePointerMove*/
          n[5]
        ),
        ye(
          window,
          "scroll",
          /*handleScroll*/
          n[0]
        )
      ], i = !0);
    },
    p: Me,
    i: Me,
    o: Me,
    d(u) {
      i = !1, It(r);
    }
  };
}
function ys(n) {
  return n.isPrimary && n.pointerType === "mouse";
}
function Qv(n, i, r) {
  let u, o, a, l, { _iEvents: c, _events: _, _viewDates: g, _slotTimeLimits: v, slotDuration: C, slotHeight: w, hiddenDays: T, _view: E, datesAboveResources: F, theme: R } = wt("state");
  k(n, c, (me) => r(9, u = me)), k(n, v, (me) => r(18, l = me)), k(n, C, (me) => r(16, o = me)), k(n, w, (me) => r(17, a = me));
  let A, L, B, W, N, O;
  function D(me, De, ze, Q) {
    ys(ze) && (L = me, B = De, W = ni(B), A = ze.clientY, N = Q);
  }
  function Y(me, De) {
    ys(De) && (L = me, B = null, A = N = void 0);
  }
  function q(me) {
    ys(me) && He();
  }
  function X() {
    if (L) {
      if (B) {
        let me = A - W.top;
        O = nt(nt(Ue(L), l.min), o, pc(me / a));
      } else
        O = L;
      u[1] || de(), We(c, u[1].start = O, u), We(c, u[1].end = nt(Ue(O), o), u), We(c, u[1].resourceIds = N ? [N.id] : [], u);
    }
  }
  function K() {
    B && (W = ni(B), X());
  }
  function $(me) {
    ys(me) && (A = me.clientY, X());
  }
  function de() {
    We(
      c,
      u[1] = {
        id: "{pointer}",
        title: "",
        display: "pointer",
        extendedProps: {},
        backgroundColor: "transparent"
      },
      u
    );
  }
  function He() {
    L = B = We(c, u[1] = null, u);
  }
  return n.$$.update = () => {
    n.$$.dirty & /*$_iEvents*/
    512 && u[0] && He();
  }, [
    K,
    c,
    v,
    C,
    w,
    $,
    D,
    Y,
    q,
    u
  ];
}
class Vv extends it {
  constructor(i) {
    super(), rt(this, i, Qv, Jv, Ze, {
      enterTimeGrid: 6,
      enterDayGrid: 7,
      leave: 8,
      handleScroll: 0
    });
  }
  get enterTimeGrid() {
    return this.$$.ctx[6];
  }
  get enterDayGrid() {
    return this.$$.ctx[7];
  }
  get leave() {
    return this.$$.ctx[8];
  }
  get handleScroll() {
    return this.$$.ctx[0];
  }
}
function Ka(n) {
  let i, r, u, o;
  return {
    c() {
      i = se("div"), z(i, "class", r = /*$theme*/
      n[1].resizer);
    },
    m(a, l) {
      ue(a, i, l), u || (o = ye(
        i,
        "pointerdown",
        /*pointerdown_handler*/
        n[8]
      ), u = !0);
    },
    p(a, l) {
      l & /*$theme*/
      2 && r !== (r = /*$theme*/
      a[1].resizer) && z(i, "class", r);
    },
    d(a) {
      a && ie(i), u = !1, o();
    }
  };
}
function jv(n) {
  let i, r = (
    /*resizable*/
    n[0] && Ka(n)
  );
  return {
    c() {
      r && r.c(), i = Ft();
    },
    m(u, o) {
      r && r.m(u, o), ue(u, i, o);
    },
    p(u, [o]) {
      /*resizable*/
      u[0] ? r ? r.p(u, o) : (r = Ka(u), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    i: Me,
    o: Me,
    d(u) {
      u && ie(i), r && r.d(u);
    }
  };
}
function $v(n, i, r) {
  let u, o, a, { event: l } = i, { theme: c, eventDurationEditable: _, editable: g } = wt("state");
  k(n, c, (w) => r(1, a = w)), k(n, _, (w) => r(7, o = w)), k(n, g, (w) => r(6, u = w));
  let v;
  function C(w) {
    sc.call(this, n, w);
  }
  return n.$$set = (w) => {
    "event" in w && r(5, l = w.event);
  }, n.$$.update = () => {
    n.$$.dirty & /*event, $eventDurationEditable, $editable*/
    224 && r(0, v = !Hn(l.display) && !Kn(l.display) && ((l.durationEditable ?? o) || (l.editable ?? u)));
  }, [
    v,
    a,
    c,
    _,
    g,
    l,
    u,
    o,
    C
  ];
}
class ew extends it {
  constructor(i) {
    super(), rt(this, i, $v, jv, Ze, { event: 5 });
  }
}
function Xa(n) {
  let i, r, u = {};
  return i = new Vv({ props: u }), n[16](i), {
    c() {
      Oe(i.$$.fragment);
    },
    m(o, a) {
      Re(i, o, a), r = !0;
    },
    p(o, a) {
      const l = {};
      i.$set(l);
    },
    i(o) {
      r || (x(i.$$.fragment, o), r = !0);
    },
    o(o) {
      j(i.$$.fragment, o), r = !1;
    },
    d(o) {
      n[16](null), Ae(i, o);
    }
  };
}
function tw(n) {
  let i, r, u, o, a = {};
  i = new Zv({ props: a }), n[15](i);
  let l = (
    /*$pointer*/
    n[1] && Xa(n)
  );
  return {
    c() {
      Oe(i.$$.fragment), r = Ne(), l && l.c(), u = Ft();
    },
    m(c, _) {
      Re(i, c, _), ue(c, r, _), l && l.m(c, _), ue(c, u, _), o = !0;
    },
    p(c, [_]) {
      const g = {};
      i.$set(g), /*$pointer*/
      c[1] ? l ? (l.p(c, _), _ & /*$pointer*/
      2 && x(l, 1)) : (l = Xa(c), l.c(), x(l, 1), l.m(u.parentNode, u)) : l && (ft(), j(l, 1, 1, () => {
        l = null;
      }), at());
    },
    i(c) {
      o || (x(i.$$.fragment, c), x(l), o = !0);
    },
    o(c) {
      j(i.$$.fragment, c), j(l), o = !1;
    },
    d(c) {
      c && (ie(r), ie(u)), n[15](null), Ae(i, c), l && l.d(c);
    }
  };
}
function nw(n, i, r) {
  let u, o, a, l, c, _, g, v, { theme: C, editable: w, eventStartEditable: T, eventDurationEditable: E, pointer: F, _bodyEl: R, _interaction: A, _iClasses: L, _draggable: B } = wt("state");
  k(n, C, (D) => r(11, a = D)), k(n, w, (D) => r(13, _ = D)), k(n, T, (D) => r(14, g = D)), k(n, F, (D) => r(1, v = D)), k(n, R, (D) => r(10, o = D)), k(n, A, (D) => r(0, u = D)), k(n, L, (D) => r(17, c = D)), k(n, B, (D) => r(12, l = D)), We(A, u.resizer = ew, u);
  function W() {
    var D;
    for (let Y of Object.values(u))
      (D = Y == null ? void 0 : Y.handleScroll) == null || D.call(Y);
  }
  function N(D) {
    en[D ? "unshift" : "push"](() => {
      u.action = D, A.set(u);
    });
  }
  function O(D) {
    en[D ? "unshift" : "push"](() => {
      u.pointer = D, A.set(u);
    });
  }
  return n.$$.update = () => {
    n.$$.dirty & /*$eventStartEditable, $editable*/
    24576 && We(B, l = (D) => (D.startEditable ?? g) || (D.editable ?? _), l), n.$$.dirty & /*$theme, $_draggable*/
    6144 && We(
      L,
      c = (D, Y) => {
        let { display: q } = Y;
        return Kn(q) ? [a[q]] : !Hn(q) && l(Y) ? [a.draggable] : [];
      },
      c
    ), n.$$.dirty & /*$_bodyEl*/
    1024 && o && ye(o, "scroll", W);
  }, [
    u,
    v,
    C,
    w,
    T,
    F,
    R,
    A,
    L,
    B,
    o,
    a,
    l,
    _,
    g,
    N,
    O
  ];
}
class rw extends it {
  constructor(i) {
    super(), rt(this, i, nw, tw, Ze, {});
  }
}
const iw = {
  createOptions(n) {
    n.dateClick = void 0, n.dragScroll = !0, n.editable = !1, n.eventDragMinDistance = 5, n.eventDragStart = void 0, n.eventDragStop = void 0, n.eventDrop = void 0, n.eventDurationEditable = !0, n.eventLongPressDelay = void 0, n.eventResizeStart = void 0, n.eventResizeStop = void 0, n.eventResize = void 0, n.eventStartEditable = !0, n.longPressDelay = 1e3, n.pointer = !1, n.select = void 0, n.selectBackgroundColor = void 0, n.selectLongPressDelay = void 0, n.selectMinDistance = 5, n.unselect = void 0, n.unselectAuto = !0, n.unselectCancel = "", n.theme.draggable = "ec-draggable", n.theme.ghost = "ec-ghost", n.theme.preview = "ec-preview", n.theme.pointer = "ec-pointer", n.theme.resizer = "ec-resizer", n.theme.dragging = "ec-dragging", n.theme.resizingY = "ec-resizing-y", n.theme.resizingX = "ec-resizing-x", n.theme.selecting = "ec-selecting";
  },
  createStores(n) {
    n._draggable = vt(Me), n._auxiliary.update((i) => [...i, rw]);
  }
}, sw = "#f2f2f2";
function uw(n) {
  if (n === "")
    return sw;
  let i = 0;
  for (let _ = 0; _ < n.length; _++)
    i = n.charCodeAt(_) + ((i << 5) - i);
  let r = "";
  for (let _ = 0; _ < 3; _++) {
    const g = i >> _ * 8 & 255;
    let v = g.toString(16)[1];
    !v === void 0 && (v = g.toString(16)[0]);
    const C = v.repeat(2);
    r += ("00" + C).substr(-2);
  }
  const u = aw(r), o = lw(u.r, u.g, u.b);
  o.h += 0.05, o.s = 0.7, o.v = 0.7;
  const a = ow(o.h, o.s, o.v);
  return "#" + fw(a.r, a.g, a.b);
}
function ow(n, i, r) {
  let u = 0, o = 0, a = 0;
  const l = Math.floor(n * 6), c = n * 6 - l, _ = r * (1 - i), g = r * (1 - c * i), v = r * (1 - (1 - c) * i);
  switch (l % 6) {
    case 0:
      u = r, o = v, a = _;
      break;
    case 1:
      u = g, o = r, a = _;
      break;
    case 2:
      u = _, o = r, a = v;
      break;
    case 3:
      u = _, o = g, a = r;
      break;
    case 4:
      u = v, o = _, a = r;
      break;
    case 5:
      u = r, o = _, a = g;
      break;
  }
  return {
    r: Math.round(u * 255),
    g: Math.round(o * 255),
    b: Math.round(a * 255)
  };
}
function lw(n, i, r) {
  const u = Math.max(n, i, r), o = Math.min(n, i, r), a = u - o;
  let l = -1;
  const c = u === 0 ? 0 : a / u, _ = u / 255;
  switch (u) {
    case o:
      l = 0;
      break;
    case n:
      l = i - r + a * (i < r ? 6 : 0), l /= 6 * a;
      break;
    case i:
      l = r - n + a * 2, l /= 6 * a;
      break;
    case r:
      l = n - i + a * 4, l /= 6 * a;
      break;
  }
  return {
    h: l,
    s: c,
    v: _
  };
}
function fw(n, i, r) {
  return ((1 << 24) + (n << 16) + (i << 8) + r).toString(16).slice(1);
}
function aw(n) {
  const i = parseInt(n.substring(0, 2), 16), r = parseInt(n.substring(2, 4), 16), u = parseInt(n.substring(4, 6), 16);
  return { r: i, g: r, b: u };
}
const { document: cw } = rc;
function hw(n) {
  let i, r, u, o, a, l, c;
  const _ = (
    /*#slots*/
    n[10].default
  ), g = Di(
    _,
    n,
    /*$$scope*/
    n[9],
    null
  );
  return {
    c() {
      i = Ne(), r = se("popup"), u = se("div"), g && g.c(), z(u, "class", "popup svelte-d4cui3"), z(u, "style", o = `--pos-x:${/*pos_x*/
      n[3]}; --pos-y:${/*pos_y*/
      n[2]};`), $f(
        u,
        "show",
        /*is_open*/
        n[0]
      ), z(r, "class", "svelte-d4cui3");
    },
    m(v, C) {
      ue(v, i, C), ue(v, r, C), le(r, u), g && g.m(u, null), n[11](u), a = !0, l || (c = ye(
        cw.body,
        "click",
        /*handle_body_click*/
        n[4],
        !0
      ), l = !0);
    },
    p(v, [C]) {
      g && g.p && (!a || C & /*$$scope*/
      512) && ki(
        g,
        _,
        v,
        /*$$scope*/
        v[9],
        a ? Ei(
          _,
          /*$$scope*/
          v[9],
          C,
          null
        ) : Ai(
          /*$$scope*/
          v[9]
        ),
        null
      ), (!a || C & /*pos_x, pos_y*/
      12 && o !== (o = `--pos-x:${/*pos_x*/
      v[3]}; --pos-y:${/*pos_y*/
      v[2]};`)) && z(u, "style", o), (!a || C & /*is_open*/
      1) && $f(
        u,
        "show",
        /*is_open*/
        v[0]
      );
    },
    i(v) {
      a || (x(g, v), a = !0);
    },
    o(v) {
      j(g, v), a = !1;
    },
    d(v) {
      v && (ie(i), ie(r)), g && g.d(v), n[11](null), l = !1, c();
    }
  };
}
const co = 16;
function wo(n) {
  if (!n)
    return document.body;
  const r = n.getClientRects()[0].height;
  return n.scrollHeight > n.clientHeight && r > 0 ? n : (n.parentElement || console.warn({
    level: "warn",
    msg: "finding scrolling element, node does not have parent",
    node: n
  }), wo(n.parentNode));
}
function _w(n, i, r) {
  let u, o, { $$slots: a = {}, $$scope: l } = i, { is_open: c = !1 } = i, { anchor_el: _ } = i, { track_scrolling: g = !1 } = i, v;
  function C(L) {
    if (!c)
      return;
    const B = L.target;
    if (!_)
      return;
    const W = v.contains(B), N = _.contains(B);
  }
  async function w(L) {
    if (await lc(), !L)
      return;
    const B = L.getBoundingClientRect(), W = v.firstElementChild.getBoundingClientRect(), N = window.innerWidth, O = wo(L), D = B.top + B.height / 2 - W.height / 2, Y = O.getClientRects()[0].top, X = O.getClientRects()[0].bottom - W.height;
    r(8, E = Math.max(Y, Math.min(D, X))), r(7, T = B.left - W.width - co);
    const K = B.left + B.width + co;
    if (r(7, T = K), !(K + W.width < N)) {
      const de = B.left - W.width - co;
      r(7, T = de);
    }
  }
  let T = 0, E = 0;
  function F(L, B, W) {
    if (!B || !W || !L)
      return;
    const N = wo(L);
    N.removeEventListener("scroll", R), N.addEventListener("scroll", R);
  }
  function R(L) {
    w(_);
  }
  function A(L) {
    en[L ? "unshift" : "push"](() => {
      v = L, r(1, v);
    });
  }
  return n.$$set = (L) => {
    "is_open" in L && r(0, c = L.is_open), "anchor_el" in L && r(5, _ = L.anchor_el), "track_scrolling" in L && r(6, g = L.track_scrolling), "$$scope" in L && r(9, l = L.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*is_open, anchor_el*/
    33 && c && w(_), n.$$.dirty & /*anchor_el*/
    32 && console.log({ anchor_el: _ }), n.$$.dirty & /*x*/
    128 && r(3, u = `${T}px`), n.$$.dirty & /*y*/
    256 && r(2, o = `${E}px`), n.$$.dirty & /*anchor_el, is_open, track_scrolling*/
    97 && F(_, c, g);
  }, [
    c,
    v,
    o,
    u,
    C,
    _,
    g,
    T,
    E,
    l,
    a,
    A
  ];
}
class dw extends it {
  constructor(i) {
    super(), rt(this, i, _w, hw, Ze, {
      is_open: 0,
      anchor_el: 5,
      track_scrolling: 6
    });
  }
}
function Za(n, i, r) {
  const u = n.slice();
  return u[15] = i[r], u;
}
function Ja(n, i, r) {
  const u = n.slice();
  return u[18] = i[r], u;
}
function Qa(n) {
  let i, r = (
    /*task*/
    n[18].id + ""
  ), u, o, a = (
    /*task*/
    n[18].name + ""
  ), l, c, _, g;
  return {
    c() {
      var v;
      i = se("option"), u = kn(r), o = kn(` | 
							`), l = kn(a), c = Ne(), i.selected = _ = /*selected_task*/
      ((v = n[0]) == null ? void 0 : v.id) === /*task*/
      n[18].id, i.__value = g = /*task*/
      n[18].id, Ss(i, i.__value);
    },
    m(v, C) {
      ue(v, i, C), le(i, u), le(i, o), le(i, l), le(i, c);
    },
    p(v, C) {
      var w;
      C & /*projects*/
      2 && r !== (r = /*task*/
      v[18].id + "") && kr(u, r), C & /*projects*/
      2 && a !== (a = /*task*/
      v[18].name + "") && kr(l, a), C & /*selected_task, projects*/
      3 && _ !== (_ = /*selected_task*/
      ((w = v[0]) == null ? void 0 : w.id) === /*task*/
      v[18].id) && (i.selected = _), C & /*projects*/
      2 && g !== (g = /*task*/
      v[18].id) && (i.__value = g, Ss(i, i.__value));
    },
    d(v) {
      v && ie(i);
    }
  };
}
function Va(n) {
  let i, r, u = Ge(
    /*project*/
    n[15].tasks
  ), o = [];
  for (let a = 0; a < u.length; a += 1)
    o[a] = Qa(Ja(n, u, a));
  return {
    c() {
      i = se("optgroup");
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      z(i, "label", r = /*project*/
      n[15].name);
    },
    m(a, l) {
      ue(a, i, l);
      for (let c = 0; c < o.length; c += 1)
        o[c] && o[c].m(i, null);
    },
    p(a, l) {
      if (l & /*selected_task, projects*/
      3) {
        u = Ge(
          /*project*/
          a[15].tasks
        );
        let c;
        for (c = 0; c < u.length; c += 1) {
          const _ = Ja(a, u, c);
          o[c] ? o[c].p(_, l) : (o[c] = Qa(_), o[c].c(), o[c].m(i, null));
        }
        for (; c < o.length; c += 1)
          o[c].d(1);
        o.length = u.length;
      }
      l & /*projects*/
      2 && r !== (r = /*project*/
      a[15].name) && z(i, "label", r);
    },
    d(a) {
      a && ie(i), vn(o, a);
    }
  };
}
function gw(n) {
  let i, r, u, o, a, l, c, _, g, v, C, w, T, E, F, R, A, L, B = Ge(
    /*projects*/
    n[1]
  ), W = [];
  for (let N = 0; N < B.length; N += 1)
    W[N] = Va(Za(n, B, N));
  return {
    c() {
      i = Ne(), r = se("event-form"), u = se("form"), o = se("label"), a = se("span"), a.textContent = "Task", l = Ne(), c = se("select");
      for (let N = 0; N < W.length; N += 1)
        W[N].c();
      _ = Ne(), g = se("label"), v = se("span"), v.textContent = "Description", C = Ne(), w = se("textarea"), T = Ne(), E = se("button"), E.textContent = "save", F = Ne(), R = se("button"), R.textContent = "delete", z(c, "class", "svelte-1ju71ug"), z(o, "class", "svelte-1ju71ug"), z(w, "rows", "5"), z(w, "class", "svelte-1ju71ug"), z(g, "class", "svelte-1ju71ug"), z(E, "type", "submit"), z(u, "class", "svelte-1ju71ug");
    },
    m(N, O) {
      ue(N, i, O), ue(N, r, O), le(r, u), le(u, o), le(o, a), le(o, l), le(o, c);
      for (let D = 0; D < W.length; D += 1)
        W[D] && W[D].m(c, null);
      le(u, _), le(u, g), le(g, v), le(g, C), le(g, w), Ss(
        w,
        /*new_description*/
        n[3]
      ), le(u, T), le(u, E), le(u, F), le(u, R), n[12](r), A || (L = [
        ye(
          document.body,
          "keydown",
          /*handle_cmd_enter*/
          n[7]
        ),
        ye(
          document.body,
          "keydown",
          /*handle_escape*/
          n[8]
        ),
        ye(
          c,
          "change",
          /*handle_task_change*/
          n[4]
        ),
        ye(
          w,
          "input",
          /*textarea_input_handler*/
          n[11]
        ),
        ye(R, "click", jf(
          /*handle_delete*/
          n[6]
        )),
        ye(u, "submit", jf(
          /*handle_submit*/
          n[5]
        ))
      ], A = !0);
    },
    p(N, [O]) {
      if (O & /*projects, selected_task*/
      3) {
        B = Ge(
          /*projects*/
          N[1]
        );
        let D;
        for (D = 0; D < B.length; D += 1) {
          const Y = Za(N, B, D);
          W[D] ? W[D].p(Y, O) : (W[D] = Va(Y), W[D].c(), W[D].m(c, null));
        }
        for (; D < W.length; D += 1)
          W[D].d(1);
        W.length = B.length;
      }
      O & /*new_description*/
      8 && Ss(
        w,
        /*new_description*/
        N[3]
      );
    },
    i: Me,
    o: Me,
    d(N) {
      N && (ie(i), ie(r)), vn(W, N), n[12](null), A = !1, It(L);
    }
  };
}
function pw(n, i, r) {
  let { selected_task: u } = i, { is_open: o = !1 } = i, { description: a = void 0 } = i, { projects: l } = i;
  const c = Co();
  let _, g = u || l[0].tasks[0], v = a;
  function C(L) {
    const W = L.target.value;
    for (const N of l) {
      const O = N.tasks.find((D) => String(D.id) === W);
      if (O) {
        g = O;
        break;
      }
    }
  }
  function w() {
    const L = {
      task: g,
      description: v ?? ""
    };
    console.log({ level: "dev", msg: "submitting", detail: L }), c("save", L);
  }
  function T() {
    c("delete");
  }
  function E(L) {
    L.code === "Enter" && (L.metaKey || L.ctrlKey) && o && w();
  }
  function F(L) {
    L.code === "Escape" && o && c("close");
  }
  function R() {
    v = this.value, r(3, v);
  }
  function A(L) {
    en[L ? "unshift" : "push"](() => {
      _ = L, r(2, _);
    });
  }
  return n.$$set = (L) => {
    "selected_task" in L && r(0, u = L.selected_task), "is_open" in L && r(9, o = L.is_open), "description" in L && r(10, a = L.description), "projects" in L && r(1, l = L.projects);
  }, [
    u,
    l,
    _,
    v,
    C,
    w,
    T,
    E,
    F,
    o,
    a,
    R,
    A
  ];
}
class mw extends it {
  constructor(i) {
    super(), rt(this, i, pw, gw, Ze, {
      selected_task: 0,
      is_open: 9,
      description: 10,
      projects: 1
    });
  }
}
class vw {
  constructor() {
    ke(this, "_entries$", vt([]));
    ke(this, "entries$", Yt(this._entries$, (i) => i));
    ke(this, "entries_to_save$", ja(this._entries$, kt.ToSave));
    ke(this, "entries_to_delete$", ja(this._entries$, kt.ToDelete));
  }
  create_time_entry(...i) {
    const r = i.map((u) => new ei(u));
    this._entries$.update((u) => [...u, ...r]);
  }
  clear() {
    this._entries$.set([]);
  }
  /**
   * Selects a single time entry
   * and deselects any previously selected ones
   */
  select_time_entry(i) {
    this._entries$.update((r) => r.map((u) => u.id === i ? { ...u, is_selected: !0 } : { ...u, is_selected: !1 }));
  }
  /**
   * Selects additional time entries
   * wihout deselecting any previously selected ones
   */
  select_additional_time_entry(i) {
    this._entries$.update((r) => r.map((u) => u.id === i ? { ...u, is_selected: !0 } : u));
  }
  reset_selected_time_entry() {
    this._entries$.update((i) => i.map((r) => ({ ...r, is_selected: !1 })));
  }
  set_state(i, r) {
    this._entries$.update((u) => u.map((o) => o.id === i ? { ...o, state: r } : o));
  }
  flag_to_delete(i) {
    this.set_state(i, kt.ToDelete);
  }
  flag_to_save(i) {
    this._entries$.update((r) => r.map((u) => u.id === i ? {
      ...u,
      state: kt.ToSave
    } : u));
  }
  delete(i) {
    this._entries$.update((r) => r.filter((u) => u.id !== i));
  }
  delete_batch(i) {
    this._entries$.update((r) => r.filter((u) => !i.includes(u.id)));
  }
  set_time_range(i, r, u) {
    this.update_by_id(i, { start: r, end: u }), this.flag_to_save(i);
  }
  update_by_id(i, r) {
    this._entries$.update((u) => u.map((o) => o.id === i ? {
      ...o,
      ...r
    } : o));
  }
  update_by_batch(i) {
    this._entries$.update((r) => r.map((u) => {
      const o = i.find((a) => a.id === u.id);
      return o != null ? {
        ...u,
        ...o.time_entry
        // state: Time_Entry_State.Stable,
      } : u;
    }));
  }
  replace_time_entries_by_id(i) {
    const r = yo(this.entries$), u = [];
    for (const { id: o, time_entry: a } of i) {
      const l = r.findIndex((c) => c.id === o);
      u.push({
        index: l,
        time_entry: a
      });
    }
    this.replace_time_entries_by_index(u);
  }
  replace_time_entries_by_index(i) {
    this._entries$.update((r) => {
      const u = [...r];
      for (const { index: o, time_entry: a } of i)
        a.start > a.end && ([a.end, a.start] = [a.start, a.end]), u[o] = a;
      return u;
    });
  }
  replace_time_entries_by_time_range(i) {
    this._entries$.update((r) => {
      const u = [...r];
      for (const o of i) {
        const a = r.findIndex((l) => ei.Is_Same_Range(l, o));
        u[a] = o;
      }
      return u;
    });
  }
}
function ja(n, i) {
  return Yt(n, (r) => r.filter((u) => u.state === i));
}
const Lc = {};
function ww() {
  Os(Lc, new vw());
}
function Oc() {
  const n = wt(Lc);
  return n || console.warn({ level: "warn", msg: "time entry context has not been initalized" }), n;
}
function $a(n) {
  let i = (
    /*cur_time_entry*/
    n[0] && /*anchor*/
    n[3]
  ), r, u, o = ec(n);
  return {
    c() {
      o.c(), r = Ft();
    },
    m(a, l) {
      o.m(a, l), ue(a, r, l), u = !0;
    },
    p(a, l) {
      l & /*cur_time_entry, anchor*/
      9 && Ze(i, i = /*cur_time_entry*/
      a[0] && /*anchor*/
      a[3]) ? (ft(), j(o, 1, 1, Me), at(), o = ec(a), o.c(), x(o, 1), o.m(r.parentNode, r)) : o.p(a, l);
    },
    i(a) {
      u || (x(o), u = !0);
    },
    o(a) {
      j(o), u = !1;
    },
    d(a) {
      a && ie(r), o.d(a);
    }
  };
}
function yw(n) {
  let i, r;
  return i = new mw({
    props: {
      projects: (
        /*projects*/
        n[5]
      ),
      selected_task: (
        /*cur_time_entry*/
        n[0].task
      ),
      description: (
        /*cur_time_entry*/
        n[0].description
      ),
      is_open: (
        /*is_form_open*/
        n[2]
      )
    }
  }), i.$on(
    "save",
    /*handle_save*/
    n[9]
  ), i.$on(
    "delete",
    /*handle_delete*/
    n[10]
  ), i.$on(
    "close",
    /*handle_close*/
    n[11]
  ), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    p(u, o) {
      const a = {};
      o & /*projects*/
      32 && (a.projects = /*projects*/
      u[5]), o & /*cur_time_entry*/
      1 && (a.selected_task = /*cur_time_entry*/
      u[0].task), o & /*cur_time_entry*/
      1 && (a.description = /*cur_time_entry*/
      u[0].description), o & /*is_form_open*/
      4 && (a.is_open = /*is_form_open*/
      u[2]), i.$set(a);
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function ec(n) {
  let i, r;
  return i = new dw({
    props: {
      is_open: (
        /*is_form_open*/
        n[2]
      ),
      anchor_el: (
        /*anchor*/
        n[3]
      ),
      track_scrolling: !0,
      $$slots: { default: [yw] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Oe(i.$$.fragment);
    },
    m(u, o) {
      Re(i, u, o), r = !0;
    },
    p(u, o) {
      const a = {};
      o & /*is_form_open*/
      4 && (a.is_open = /*is_form_open*/
      u[2]), o & /*anchor*/
      8 && (a.anchor_el = /*anchor*/
      u[3]), o & /*$$scope, projects, cur_time_entry, is_form_open*/
      1073741861 && (a.$$scope = { dirty: o, ctx: u }), i.$set(a);
    },
    i(u) {
      r || (x(i.$$.fragment, u), r = !0);
    },
    o(u) {
      j(i.$$.fragment, u), r = !1;
    },
    d(u) {
      Ae(i, u);
    }
  };
}
function bw(n) {
  let i, r, u, o, a = {
    plugins: (
      /*plugins*/
      n[7]
    ),
    options: (
      /*options*/
      n[1]
    )
  };
  r = new av({ props: a }), n[14](r);
  let l = (
    /*cur_time_entry*/
    n[0] && /*anchor*/
    n[3] && $a(n)
  );
  return {
    c() {
      i = se("div"), Oe(r.$$.fragment), u = Ne(), l && l.c(), z(i, "class", "calendar-root svelte-oa8jgk");
    },
    m(c, _) {
      ue(c, i, _), Re(r, i, null), le(i, u), l && l.m(i, null), o = !0;
    },
    p(c, [_]) {
      const g = {};
      _ & /*options*/
      2 && (g.options = /*options*/
      c[1]), r.$set(g), /*cur_time_entry*/
      c[0] && /*anchor*/
      c[3] ? l ? (l.p(c, _), _ & /*cur_time_entry, anchor*/
      9 && x(l, 1)) : (l = $a(c), l.c(), x(l, 1), l.m(i, null)) : l && (ft(), j(l, 1, 1, () => {
        l = null;
      }), at());
    },
    i(c) {
      o || (x(r.$$.fragment, c), x(l), o = !0);
    },
    o(c) {
      j(r.$$.fragment, c), j(l), o = !1;
    },
    d(c) {
      c && ie(i), n[14](null), Ae(r), l && l.d();
    }
  };
}
function Cw(n, i, r) {
  let u, o, a, l, c = Me, _ = () => (c(), c = Ls(u, (Q) => r(13, l = Q)), u);
  n.$$.on_destroy.push(() => c());
  const g = Co(), v = Oc(), C = hc();
  let w = [Yv, iw], T = {};
  function E() {
    return function(oe) {
      const te = /* @__PURE__ */ new Date("1970-01-01"), bt = R.filter((_t) => Gn(oe) === Gn(_t.start ?? te)).reduce(
        (_t, $e) => {
          let V = 0;
          return $e.start && $e.end && (V = nm($e.start, $e.end)), _t + V;
        },
        0
      ), Je = rm(bt), Ke = oe.toLocaleDateString("de", { weekday: "short" }), ct = oe.toLocaleDateString("de", { day: "numeric" }), ht = oe.toLocaleDateString("de", { month: "numeric" });
      return `${Ke} ${ct}.${ht} (${Je})`;
    };
  }
  function F(Q) {
    var Le, bt;
    if (Q.event.id === "{pointer}")
      return Q.timeText;
    const oe = Q.event.extendedProps;
    return {
      html: `
            <div class="ec-custom-event ${[
        {
          class: "stable",
          condition: oe.state === kt.Stable
        },
        {
          class: "in-progress",
          condition: oe.state === kt.In_Progress
        },
        {
          class: "saving",
          condition: oe.state === kt.ToSave
        },
        {
          class: "error",
          condition: oe.state === kt.Error
        },
        {
          class: "deleting",
          condition: oe.state === kt.ToDelete
        },
        {
          class: "selected",
          condition: oe.is_selected
        }
      ].filter((Je) => Je.condition).map((Je) => Je.class).join(" ")}">
                <div>${Q.timeText}</div>
                ${oe.project ? `<div>${(Le = oe.project) == null ? void 0 : Le.name}</div>` : ""}
                ${oe.task ? `<div>${(bt = oe.task) == null ? void 0 : bt.name}</div>` : ""}
                ${oe.description ? `<div>${oe.description}</div>` : ""}
            </div>
        `
    };
  }
  let R = [];
  const A = v.entries$;
  k(n, A, (Q) => r(12, a = Q));
  function L(Q) {
    const oe = Q.map(B);
    D && (D.setOption("events", oe), D.setOption("dayHeaderFormat", E()), R = oe);
  }
  function B(Q) {
    var Le;
    const oe = `${((Le = Q.project) == null ? void 0 : Le.name) ?? ""}`;
    let te = uw(oe);
    return oe === "" && (te = "var(--color-grey-2)"), {
      id: String(Q.id),
      allDay: !1,
      start: Q.start,
      end: Q.end,
      // editable: true,
      editable: Q.state === kt.Stable,
      durationEditable: Q.state === kt.Stable,
      startEditable: Q.state === kt.Stable,
      backgroundColor: te,
      extendedProps: Q
    };
  }
  let W = !1, N, O, D;
  function Y(Q) {
    const { detail: oe } = Q;
    v.reset_selected_time_entry(), v.update_by_id(O.id, oe), v.flag_to_save(O.id), r(2, W = !1);
  }
  function q() {
    v.reset_selected_time_entry(), v.flag_to_delete(O.id), r(2, W = !1);
  }
  function X() {
    r(2, W = !1);
  }
  function K(Q) {
    const oe = { start: Q.start, end: Q.end };
    g("datechanged", oe);
  }
  function $(Q) {
    v.reset_selected_time_entry(), v.create_time_entry({
      start: Q.start,
      end: Q.end,
      state: kt.In_Progress
    }), D.unselect();
  }
  function de(Q) {
    const oe = Q.event.extendedProps;
    v.set_time_range(oe.id, Q.event.start, Q.event.end);
  }
  function He(Q) {
    const oe = Q.event.extendedProps;
    v.set_time_range(oe.id, Q.event.start, Q.event.end);
  }
  function me(Q) {
    const oe = Q.event.extendedProps;
    (oe.is_selected || oe.state === kt.In_Progress) && (r(2, W = !0), r(0, O = oe), r(3, N = Q.el));
  }
  function De(Q) {
    const oe = Q.event.extendedProps;
    v.select_time_entry(oe.id);
  }
  function ze(Q) {
    en[Q ? "unshift" : "push"](() => {
      D = Q, r(4, D);
    });
  }
  return n.$$.update = () => {
    n.$$.dirty & /*$project_sets, cur_time_entry*/
    8193 && r(5, o = l.get(Gn((O == null ? void 0 : O.start) ?? /* @__PURE__ */ new Date())) ?? []), n.$$.dirty & /*$store*/
    4096 && L(a);
  }, _(r(6, u = C.store)), r(1, T = {
    view: "timeGridWeek",
    height: "100%",
    slotDuration: "00:15",
    editable: !0,
    eventClick: De,
    slotMinTime: "06:00:00",
    slotMaxTime: "22:00:00",
    datesSet: K,
    eventDrop: de,
    eventTimeFormat: {
      hour: "numeric",
      minute: "2-digit",
      meridiem: !1,
      hour12: !1
    },
    eventResize: He,
    selectable: !0,
    select: $,
    pointer: !0,
    dayMaxEvents: !0,
    nowIndicator: !0,
    eventDidMount: me,
    eventContent: F,
    locale: "de",
    firstDay: 1,
    dayHeaderFormat: E(),
    hiddenDays: [0, 6]
  }), [
    O,
    T,
    W,
    N,
    D,
    o,
    u,
    w,
    A,
    Y,
    q,
    X,
    a,
    l,
    ze
  ];
}
class Tw extends it {
  constructor(i) {
    super(), rt(this, i, Cw, bw, Ze, {});
  }
}
function Sw(n, i) {
  i.entries_to_save$.subscribe(Dw.bind(void 0, n, i)), i.entries_to_delete$.subscribe(Ew.bind(void 0, n, i));
}
async function Dw(n, i, r) {
  if (!(r.length > 0))
    return;
  const o = r.map(async (g) => {
    g.id < 0 ? await n.save_time_entry(g) : await n.update_time_entry(g);
  });
  await Promise.allSettled(o);
  const { start: a, end: l } = kw(r[0].start), c = await n.fetch_time_entires(a, l), _ = [];
  r.forEach((g) => {
    const v = c.find((C) => ei.Is_Same_Range(g, C));
    v && _.push({
      id: g.id,
      time_entry: v
    });
  }), i.replace_time_entries_by_id(_);
}
async function Ew(n, i, r) {
  if (r.length === 0)
    return;
  const u = [], o = r.map(async (c) => {
    c.id > 0 && await n.delete_time_entry(c);
  }), a = [];
  (await Promise.allSettled(o)).forEach((c, _) => {
    const g = r[_];
    if (c.status === "rejected") {
      console.log({ level: "error", msg: "could not delete time entry", te: g, err: c });
      const v = um(g, _c.Save_Error);
      u.push({
        id: g.id,
        time_entry: v
      });
    } else
      a.push(g.id);
  }), i.delete_batch(a);
}
function kw(n) {
  const i = tm(n, 1), r = new Date(i);
  return r.setDate(r.getDate() + 6), {
    start: i,
    end: r
  };
}
function Aw(n) {
  let i, r;
  const u = (
    /*#slots*/
    n[1].default
  ), o = Di(
    u,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      i = se("theme"), o && o.c();
    },
    m(a, l) {
      ue(a, i, l), o && o.m(i, null), r = !0;
    },
    p(a, [l]) {
      o && o.p && (!r || l & /*$$scope*/
      1) && ki(
        o,
        u,
        a,
        /*$$scope*/
        a[0],
        r ? Ei(
          u,
          /*$$scope*/
          a[0],
          l,
          null
        ) : Ai(
          /*$$scope*/
          a[0]
        ),
        null
      );
    },
    i(a) {
      r || (x(o, a), r = !0);
    },
    o(a) {
      j(o, a), r = !1;
    },
    d(a) {
      a && ie(i), o && o.d(a);
    }
  };
}
function Iw(n, i, r) {
  let { $$slots: u = {}, $$scope: o } = i;
  return n.$$set = (a) => {
    "$$scope" in a && r(0, o = a.$$scope);
  }, [o, u];
}
class Rw extends it {
  constructor(i) {
    super(), rt(this, i, Iw, Aw, Ze, {});
  }
}
function Lw(n) {
  let i, r, u, o;
  return u = new Tw({}), u.$on(
    "datechanged",
    /*handle_datechanged*/
    n[1]
  ), {
    c() {
      i = se("h1"), i.textContent = "Heimtime", r = Ne(), Oe(u.$$.fragment);
    },
    m(a, l) {
      ue(a, i, l), ue(a, r, l), Re(u, a, l), o = !0;
    },
    p: Me,
    i(a) {
      o || (x(u.$$.fragment, a), o = !0);
    },
    o(a) {
      j(u.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (ie(i), ie(r)), Ae(u, a);
    }
  };
}
function Ow(n) {
  let i, r, u, o, a;
  return o = new Rw({
    props: {
      $$slots: { default: [Lw] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      i = se("link"), r = Ne(), u = se("calendar"), Oe(o.$$.fragment), z(i, "rel", "stylesheet"), z(
        i,
        "href",
        /*styleURL*/
        n[0]
      ), z(u, "class", "svelte-1jmpun7");
    },
    m(l, c) {
      le(document.head, i), ue(l, r, c), ue(l, u, c), Re(o, u, null), a = !0;
    },
    p(l, [c]) {
      const _ = {};
      c & /*$$scope*/
      8192 && (_.$$scope = { dirty: c, ctx: l }), o.$set(_);
    },
    i(l) {
      a || (x(o.$$.fragment, l), a = !0);
    },
    o(l) {
      j(o.$$.fragment, l), a = !1;
    },
    d(l) {
      l && (ie(r), ie(u)), ie(i), Ae(o);
    }
  };
}
const Pw = "https://heimat.sprinteins.com/api/v1/";
function Mw(n, i, r) {
  let u;
  u = new mo();
  const o = u.jwt_get();
  _m();
  let a = dm();
  a.set_base_url(Pw), o && o !== "" && a.jwt_set(o);
  const l = new URL(import.meta.url), _ = new URL("style.css", l).toString();
  ww();
  const g = Oc();
  j0();
  const v = hc();
  let C = /* @__PURE__ */ new Date(), w = /* @__PURE__ */ new Date();
  Sw(a, g);
  async function T(R, A) {
    const L = await a.fetch_time_entires(R, A);
    g.clear();
    for (const B of L)
      g.create_time_entry(B);
  }
  async function E(R, A) {
    let L = [];
    for (let W = 0; W < 7; W++) {
      const N = ta(R, W), O = a.fetch_projects(N);
      L.push(O);
    }
    const B = await Promise.all(L);
    for (let W = 0, N = B.length; W < N; W++) {
      const O = ta(R, W), D = B[W];
      v.set_projects(Gn(O), D);
    }
  }
  function F(R) {
    const { start: A, end: L } = R.detail;
    r(2, C = A), r(3, w = L);
  }
  return n.$$.update = () => {
    n.$$.dirty & /*date_start, date_end*/
    12 && E(C), n.$$.dirty & /*date_start, date_end*/
    12 && T(C, w);
  }, [_, F, C, w];
}
class Uw extends it {
  constructor(i) {
    super(), rt(this, i, Mw, Ow, Ze, {});
  }
}
function Hw() {
  new Uw({
    target: document.getElementById("view-root"),
    props: {}
  });
}
export {
  Hw as default
};