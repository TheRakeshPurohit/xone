/**!
 * @preserve Xone Javascript Framework
 * Copyright (c) 2017 NextApps, All rights reserved.
 */
(function(){/** @const */ var e = function() {
  function m(d, b, c, f) {
    var q;
    A = b;
    g(f, "undefined") && (f = !0);
    if (g(d, "string")) {
      if ("!" === d[0]) {
        for (d = d.substring(1), C[d] = !0, q = d; -1 < q.indexOf(".");) {
          C[q = q.substring(0, q.lastIndexOf("."))] = !0;
        }
      }
      "*" === d[0] && (d = d.substring(1));
      if (g(t[d], "undefined")) {
        f && (a[a.length] = ["", d, b, c]);
        return;
      }
      d = [d];
    }
    for (var v = [], h = 0, n = d.length; h < n;) {
      if (g(d[h], "string")) {
        if (33 === d[h].charCodeAt(0)) {
          for (d[h] = d[h].substring(1), C[d[h]] = !0, q = d[h]; -1 < q.indexOf(".");) {
            C[q = q.substring(0, q.lastIndexOf("."))] = !0;
          }
        }
        42 === d[h].charCodeAt(0) && (d[h] = d[h].substring(1));
        l[d[h]] ? l[d[h]]++ : l[d[h]] = 1;
        var m = t[d[h]];
        if (g(k[d[h]], "undefined")) {
          console.log("Build Missing: " + d[h]);
          return;
        }
        if ((g(k[d[h]][0], "string") || r(k[d[h]][0], "Array")) && !1 === g(k[d[h]][1], "undefined")) {
          var y = [];
          if (g(k[d[h]][0], "string")) {
            y[y.length] = k[d[h]][0];
          } else {
            for (q = 0; q < k[d[h]][0].length; q++) {
              g(k[d[h]][0][q], "string") && (y[y.length] = k[d[h]][0][q]);
            }
          }
          for (; y.length;) {
            var B = y.pop();
            if ((g(k[B][0], "string") || r(k[B][0], "Array")) && !1 === g(k[B][1], "undefined")) {
              if (g(k[B][0], "string")) {
                y[y.length] = k[B][0];
              } else {
                for (q = 0; q < k[B][0].length; q++) {
                  g(k[B][0][q], "string") && (y[y.length] = k[B][0][q]);
                }
              }
            }
            l[B] ? l[B]++ : l[B] = 1;
          }
        }
      } else {
        m = d[h];
      }
      if (g(m, "undefined")) {
        f && (a[a.length] = ["", d, b, c]);
        return;
      }
      v[h] = m;
      h += 1;
    }
    if (g(b, "undefined")) {
      if (1 === d.length) {
        return w[w.length] = d[0], l[d[0]] ? l[d[0]]++ : l[d[0]] = 1, t[d[0]];
      }
      b = {};
      for (q = 0; q < d.length; q++) {
        w[w.length] = d[q], l[d[q]] ? l[d[q]]++ : l[d[q]] = 1, b[d[q]] = t[d[q]];
      }
      return b;
    }
    g(c, "undefined") ? (f = "$$require$$" + F++, k[f] = [d, b, c], l[f] = 1, w[w.length] = f, d = b.apply(this, v)) : g(c, "string") ? (f = "$$require$$" + F++, k[f] = [d, b, c], l[f] = 1, w[w.length] = f, d = b.apply(t[c], v)) : (f = "$$require$$" + F++, k[f] = [d, b, c], l[f] = 1, w[w.length] = f, d = b.apply(c, v));
    return d;
  }
  function p(d, l, b, c, f) {
    var q;
    A = d;
    g(f, "undefined") && (f = !0);
    var v = !1;
    if (g(d, "string") && ("!" === d[0] && (d = d.substring(1), v = !0), "*" === d[0] && (d = d.substring(1)), !g(k[d], "undefined"))) {
      for (var n in k) {
        if (g(G[n], "undefined") && k.hasOwnProperty(n)) {
          if (g(k[n][0], "string")) {
            d === k[n][0] && (console.log("update addon 1: " + n), a[a.length] = [n, k[n][0], k[n][1], k[n][2]], G[n] = !0, f = !1);
          } else {
            if (!g(k[n][0], "undefined")) {
              var m = k[n][0].length;
              for (q = 0; q < m; q++) {
                if (g(k[n][0][q], "string") && d === k[n][0][q]) {
                  console.log("update addon 2: " + n);
                  a[a.length] = [n, k[n][0], k[n][1], k[n][2]];
                  G[n] = !0;
                  f = !1;
                  break;
                }
              }
            }
          }
        }
      }
    }
    if ("function" === typeof l) {
      g(b, "undefined") ? (k[(v ? "!" : "") + d] = [l, b, c], w[w.length] = d, l = l()) : (k[(v ? "!" : "") + d] = [l, b, c], w[w.length] = d, l = l.call(b));
    } else {
      if (g(b, "undefined")) {
        k[(v ? "!" : "") + d] = [l, b, c], w[w.length] = d, g(l, "undefined") && (l = null);
      } else {
        g(l, "string") && (l = [l]);
        n = [];
        q = 0;
        for (m = l.length; q < m;) {
          var r = g(l[q], "string") ? t[l[q]] : l[q];
          if (g(r, "undefined")) {
            return console.log("Missing: " + d + " => " + l[q]), f && (a[a.length] = [d, l, b, c]), !1;
          }
          n[n.length] = r;
          q += 1;
        }
        k[(v ? "!" : "") + d] = [l, b, c];
        w[w.length] = d;
        l = b.apply(g(c, "undefined") ? this : t[c], n);
      }
    }
    t[d] = l;
    if (f && a.length) {
      for (; h();) {
      }
    }
    return this;
  }
  function x(a, d, l, b, c) {
    if (a) {
      g(a, "string") && (a = [a]);
      for (var w = 0, q = a.length; w < q;) {
        A = "";
        var k = a[w], v = k.split("."), h = 1, n = v.length - (c ? 2 : 1);
        if (b) {
          var m = d;
          if (!c) {
            for (h = 0; h < n;) {
              m = m[v[h]] || (m[v[h]] = {}), h++;
            }
            h < n + 1 && (m = m[v[h]] = t[l]);
          }
        } else {
          if (d) {
            if (g(d, "string")) {
              if ("window" === d && 0 < n) {
                d = l || v[n], m = f[d] || (f[d] = t[k]);
              } else {
                for (m = f[d] || (f[d] = t[k]); h < n;) {
                  m = m[v[h]] || (m[v[h]] = {}), h++;
                }
              }
            } else {
              d === f && 0 < n ? (d = l || v[n], m = f[d] || (f[d] = t[k])) : (m = d, c || (d = l || v[n], m = m[d] || (m[d] = t[k])));
            }
          } else {
            if (m = f, !c) {
              for (h = 0; h < n;) {
                m = m[v[h]] || (m[v[h]] = {}), h++;
              }
              h < n + 1 && (m = m[v[h]] = t[k]);
            }
          }
        }
        if (!b) {
          for (v = Object.keys(t || {}), h = 0, n = v.length; h < n;) {
            -1 < v[h].indexOf(k) && v[h] !== k && x(v[h].replace(k + ".", ""), m, v[h], !0), h++;
          }
        }
        w++;
      }
    } else {
      if (A) {
        return x(A, "");
      }
    }
  }
  function h() {
    for (var d = 0, l = !1; d < a.length;) {
      var b = a[d][0], c = a[d][1], w = a[d][2], k = a[d][3];
      if ("" === b ? m(c, w, k, !1) : p(b, c, w, k, !1)) {
        console.log("UPDATE: " + b), a[d] = null, a.splice(d, 1), l = !0;
      }
      d += 1;
    }
    return l;
  }
  function u(a, b) {
    var c = {};
    q[q.length] = "(function(){";
    for (var f = 0; f < w.length; f++) {
      var t = w[f];
      if (k.hasOwnProperty(t) || -1 < t.indexOf("$$require$$")) {
        var h = k[t];
        var v = !1;
        "!" === t[0] && (t = t.substring(1), v = !0);
        "*" === t[0] && (t = t.substring(1));
        C[t] && (v = !0);
        if (!(d[t] || g(l[t], "undefined") && !b || a && -1 === t.indexOf("$$require$$") && -1 === t.indexOf(a + "."))) {
          var n = h[0], m = h[1], r = h[2], u = t.split("."), y = 0, B = u.length - 1, p = "";
          for (h = ""; y < B;) {
            p += (p ? "." : "") + u[y];
            if (g(d[p], "undefined")) {
              var x = C[p];
              h = !y && x ? "var " + u[y] + ' = window["' + u[y] + '"]' : 0 < y && x ? "var " + u[y - 1] + "_" + u[y] + " = " + u[y - 1] + '["' + u[y] + '"]' : p;
              g(c[p], "undefined") && (q[q.length] = (-1 < p.indexOf(".") || x ? "" : "var ") + h + " = {};", c[p] = !0);
              d[p] = !0;
              0 < y && x && (h = u[y - 1] + "_" + u[y]);
            } else {
              h = p;
            }
            y += 1;
          }
          c[p + (p ? "." : "") + u[y]] = !0;
          d[p + (p ? "." : "") + u[y]] = !0;
          v && 1 < y && x && (h = u[y - 2] + "_" + u[y - 1]);
          if (g(m, "undefined")) {
            if (g(n, "number") || g(n, "boolean")) {
              q[q.length] = (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + " = " + h + '["' + u[y] + '"]' : t) + " = " + n + ";";
            } else {
              if (g(n, "string")) {
                q[q.length] = (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + " = " + h + '["' + u[y] + '"]' : t) + ' = "' + n + '";';
              } else {
                if (z(n)) {
                  q[q.length] = (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + " = " + h + '["' + u[y] + '"]' : t) + " = " + JSON.stringify(n).replace(/\"([^(\")"]+)\":/g, "$1:") + ";";
                } else {
                  if (g(n, "function")) {
                    var G;
                    q[q.length] = -1 < t.indexOf("$$require$$") ? "(" + n.toString() + "());" : (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + " = " + h + '["' + u[y] + '"]' : t) + " = " + (g(G = n(), "function") && (-1 === (G = G.toString()).indexOf("[native code]") || 20 < G.substring(G.indexOf("{"), G.lastIndexOf("}")).length) ? G : "(" + n.toString() + "())") + ";";
                  }
                }
              }
            }
          } else {
            if (g(n, "function")) {
              q[q.length] = (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + " = " + h + '["' + u[y] + '"]' : t) + " = (function(){" + n.toString() + "; }).call(" + m.toString() + ");";
            } else {
              g(n, "string") && (n = [n]);
              for (/**
 @suppress {duplicate}
 */
var B = [], p = 0, F = n.length; p < F;) {
                if (g(n[p], "string")) {
                  if (g(k["!" + n[p]], "undefined")) {
                    B[B.length] = C[n[p]] ? -1 < n[p].indexOf(".") ? n[p].substring(0, n[p].lastIndexOf(".")) + "['" + n[p].substring(n[p].lastIndexOf(".") + 1) + "']" : "window['" + n[p] + "']" : n[p];
                  } else {
                    var A = n[p].split("."), J = 0, na = A.length - 1, P = "";
                    for (h = ""; J < na;) {
                      P += (P ? "." : "") + A[J], x = C[P], h = !y && x ? "var " + A[J] + ' = window["' + A[J] + '"]' : 0 < y && x ? h + ('["' + A[J] + '"]') : P, d[P] = !0, J += 1;
                    }
                    B[B.length] = 0 < J ? P + '["' + A[J] + '"]' : A[J];
                  }
                } else {
                  A = m, "string" === typeof A ? A = A.split(".") : "function" === typeof A && (A = A.toString(), A = A.substring(A.indexOf("(", A.indexOf("function")) + 1), A = A.substring(0, A.indexOf(")")), A = A.match(/([\w_\$\d]+)/g)), B[B.length] = A[p];
                }
                p += 1;
              }
              g(r, "undefined") ? z(m) ? q[q.length] = (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + " = " + h + '["' + u[y] + '"]' : -1 === t.indexOf(".") && C[t] ? "var " + t + ' = window["' + t + '"]' : t) + " = " + JSON.stringify(m) + ";" : q[q.length] = -1 < t.indexOf("$$require$$") ? "(" + m.toString() + "(" + B.join(", ") + "));" : (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + 
              " = " + h + '["' + u[y] + '"]' : -1 === t.indexOf(".") && C[t] ? "var " + t + ' = window["' + t + '"]' : t) + " = (" + m.toString() + "(" + B.join(", ").replace(/\./g, "_") + "));" : z(m) ? q[q.length] = (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + " = " + h + '["' + u[y] + '"]' : t) + " = " + JSON.stringify(m) + ";" : q[q.length] = -1 < t.indexOf("$$require$$") ? "(function(){" + m.toString() + "(" + B.join(", ") + ");}).call(" + 
              r.toString() + ");" : (-1 < t.indexOf(".") || v ? "" : "var ") + (v && 0 < y ? "var " + h.replace(/\./g, "_") + "_" + u[y] + " = " + h + '["' + u[y] + '"]' : t) + "  = (function(){" + m.toString() + "(" + B.join(", ").replace(/\./g, "_") + ");}).call(" + r.toString() + ");";
            }
          }
        }
      }
    }
    q[q.length] = "}());";
    return q;
  }
  function z(a) {
    return r(a, "Array") || r(a, "Object");
  }
  function r(a, d) {
    return Object.prototype.toString.call(a) === "[object " + d + "]";
  }
  function g(a, d) {
    return typeof a === (d || "undefined");
  }
  var n = this.Fb || !1, f = this, b = f.document || {}, c = b.body || {}, k = {}, t = {}, a = [], d = {}, l = {}, w = [], q = [], v = f.Lb = {}, G = {}, A, F = 0, C = {};
  n && (f.asap_imported = d, f.asap_module_tree = v, f.asap_sources = k, f.asap_modules = t, f.asap_cache = a, f.asap_moduleCounts = l, f.require_order = w, f.asap_js = q);
  /** @const */ return {/** @type {Function} */ define:p, /** @type {Function} */ require:m, /** @type {Function} */ tb:function(a, d) {
    m(a)();
    d && d();
  }, /** @type {Function} */ install:x, /** @type {Function} */ Pa:function(a, d, l, b) {
    x(a, d, "", b, !0);
  }, /** @type {Function} */ build:u, /** @type {Function} */ Nb:function(a) {
    w = Object.keys(k);
    return u(a, !0);
  }, /** @type {Function} */ ac:function(a) {
    p(a, void 0);
  }, /** @type {Function} */ release:function() {
    for (var b in k) {
      if (k.hasOwnProperty(b)) {
        for (var c = 0; c < k[b].length; c++) {
          delete k[b][c];
        }
        delete k[b];
      }
    }
    for (b in t) {
      t.hasOwnProperty(b) && (g(d[b], "undefined") && !g(l[b], "undefined") || delete t[b]);
    }
    for (; a.length;) {
      a.pop();
    }
  }, /** @type {Function} */ Mb:function(a) {
    l = {};
    if (a) {
      g(a, "string") && (a = [a]);
      for (var d = Object.keys(k || {}), b = 0; b < a.length; b++) {
        var c = a[b], w = !1;
        if (".*" === c.substr(c.length - 2) && (33 === c.charCodeAt(0) && (c = c.substr(1), w = !0), a[b] = c = c.substr(0, c.length - 2), w)) {
          for (w = 0; w < d.length; w++) {
            -1 < d[w].indexOf(c + ".") && (C[d[w]] = !0, l[d[w]] = 1);
          }
        }
        for (/**
 @suppress {duplicate}
 */
var c = c.split("."), q = "", w = 0; w < c.length; w++) {
          q += (q ? "." : "") + c[w], C[q] = !0;
        }
      }
      m(a);
      console.log(C);
    }
  }, /** @type {Function} */ debug:function() {
    d = {};
    v = {};
    l = {};
    w = [];
    q = [];
  }, /** @type {Function} */ lb:function(a, d) {
    if ("window" === d || g(d, "undefined")) {
      f.open("data:text/plain;charset=utf-8," + encodeURIComponent(a.join("\n")), "ASAP Build", "width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
    } else {
      if ("text" === d) {
        return a.join("\n");
      }
      if ("console" === d) {
        console.log(a.join("\n"));
      } else {
        if ("file" === d) {
          d = b.createElement("a"), d.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(a.join("\n"))), d.setAttribute("download", "build.js"), d.style.display = "none", c.appendChild(d), d.click(), c.removeChild(d);
        } else {
          if ("popup" === d) {
            d = b.createElement("pre");
            var l = b.createAttribute("style");
            l.value = "position:absolute;z-index:999999;background-color:#fff;color:#000;width:100%;height:100%;overflow:auto;text-align:left;font:monospace;";
            l.id = "asap-debug";
            d.setAttributeNode(l);
            d.innerHTML = a.join("\n");
            c.appendChild(d);
          }
        }
      }
    }
  }, /** @type {Function} */ register:function(a, d) {
    this[a] = d;
  }};
}.call(this);
window.requestFileSystem || (window.requestFileSystem = window.webkitRequestFileSystem);
navigator.persistentStorage || (navigator.persistentStorage = navigator.webkitPersistentStorage);
navigator.temporaryStorage || (navigator.temporaryStorage = navigator.webkitTemporaryStorage);
JSON || (window.JSON = {/**
 @const
 @param {string} sJSON
 @return {(Array|boolean|null|number|string)}
 */
parse:function(m) {
  return eval("(" + m + ")");
}, stringify:function() {
  function m(m) {
    return h[m] || "\\u" + (m.charCodeAt(0) + 65536).toString(16).substr(1);
  }
  var p = Object.prototype.toString, x = Array.isArray || function(h) {
    return "[object Array]" === p.call(h);
  }, h = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, u = /[\\"\u0000-\u001F\u2028\u2029]/g;
  return /**
 @const
 @param {(Array|boolean|null|number|string)} value
 @return {string}
 */
function r(g) {
    if (null == g) {
      return "null";
    }
    if ("number" === typeof g) {
      return isFinite(g) ? g.toString() : "null";
    }
    if ("boolean" === typeof g) {
      return g.toString();
    }
    if ("object" === typeof g) {
      if ("function" === typeof g.toJSON) {
        return r(g.toJSON());
      }
      if (x(g)) {
        for (var h = "[", f = 0; f < g.length; f++) {
          h += (f ? ", " : "") + r(g[f]);
        }
        return h + "]";
      }
      if ("[object Object]" === p.call(g)) {
        h = [];
        for (f in g) {
          g.hasOwnProperty(f) && h.push(r(f) + ": " + r(g[parseInt(f, 10)]));
        }
        return "{" + h.join(", ") + "}";
      }
    }
    return '"' + g.toString().replace(u, m) + '"';
  };
}()});
Array.prototype.filter || (Array.prototype.filter = function(m) {
  if (!this || null === this) {
    throw new TypeError;
  }
  var p = Object(this), x = p.length >>> 0;
  if ("function" !== typeof m) {
    throw new TypeError;
  }
  for (var h = [], u = 2 <= arguments.length ? arguments[1] : void 0, z = 0; z < x; z++) {
    if (z in p) {
      var r = p[z];
      m.call(u, r, z, p) && h.push(r);
    }
  }
  return h;
});
Array.prototype.map || (Array.prototype.map = function(m, p) {
  var x, h;
  if (!this) {
    throw new TypeError(" this is null or not defined");
  }
  var u = Object(this), z = u.length >>> 0;
  if ("function" !== typeof m) {
    throw new TypeError(m + " is not a function");
  }
  1 < arguments.length && (x = p);
  var r = Array(z);
  for (h = 0; h < z;) {
    if (h in u) {
      var g = u[h];
      g = m.call(x, g, h, u);
      r[h] = g;
    }
    h++;
  }
  return r;
});
Object.keys || (Object.keys = function() {
  var m = Object.prototype.hasOwnProperty, p = !{toString:null}.propertyIsEnumerable("toString"), x = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "), h = x.length;
  return function(u) {
    if ("object" !== typeof u && ("function" !== typeof u || null === u)) {
      throw new TypeError("Object.keys called on non-object");
    }
    var z = [], r;
    for (r in u) {
      m.call(u, r) && z.push(r);
    }
    if (p) {
      for (r = 0; r < h; r++) {
        m.call(u, x[r]) && z.push(x[r]);
      }
    }
    return z;
  };
}());
(function() {
  var m = Array.prototype.slice;
  try {
    m.call(document.documentElement);
  } catch (p) {
    /**
 @this {(IArrayLike<T>|string)}
 @param {*=} begin
 @param {*=} end
 @return {!Array<T>}
 */
Array.prototype.slice = function(p, h) {
      h = "undefined" !== typeof h ? h : this.length;
      if ("[object Array]" === Object.prototype.toString.call(this)) {
        return m.call(this, p, h);
      }
      var u = [];
      var z = this.length;
      p = p || 0;
      p = 0 <= p ? p : Math.max(0, z + p);
      var r = "number" == typeof h ? Math.min(h, z) : z;
      0 > h && (r = z + h);
      z = r - p;
      if (0 < z) {
        if (u = Array(z), this.charAt) {
          for (h = 0; h < z; h++) {
            u[h] = this.charAt(p + h);
          }
        } else {
          for (h = 0; h < z; h++) {
            u[h] = this[p + h];
          }
        }
      }
      return u;
    };
  }
})();
Array.prototype.indexOf || (Array.prototype.indexOf = function(m, p) {
  if (!this) {
    throw new TypeError('"this" is null or not defined');
  }
  var x = Object(this), h = x.length >>> 0;
  if (!h) {
    return -1;
  }
  p = +p || 0;
  Infinity === Math.abs(p) && (p = 0);
  if (p >= h) {
    return -1;
  }
  for (p = Math.max(0 <= p ? p : h - Math.abs(p), 0); p < h;) {
    if (p in x && x[p] === m) {
      return p;
    }
    p++;
  }
  return -1;
});
/** @const */ var D = {};
(function() {
  function m(a) {
    var d = a.toString();
    a = d.substring(d.indexOf("(") + 1, d.indexOf(")"));
    -1 !== a.indexOf(",") && (a = a.substring(0, a.indexOf(",")));
    /**
 @suppress {duplicate}
 */
var l = d.substring(d.indexOf("{") + 1, d.length - 1), d = l.substring(0, l.indexOf("return ")), l = l.substring(l.indexOf("return ") + 7, l.length).replace(";", "");
    return [a, d, l];
  }
  function p(a, d) {
    return null === d ? -1 : null === a ? 1 : isNaN(d) ? -1 : isNaN(a) ? 1 : d - a;
  }
  function x(a, d) {
    return null === a ? 1 : null === d ? -1 : isNaN(a) ? 1 : isNaN(d) ? -1 : a - d;
  }
  function h(a, d) {
    return ("" + d).localeCompare(a);
  }
  function u(a, d) {
    return ("" + a).localeCompare(d);
  }
  function z(a, d, l, b, c, k, f, t, g) {
    a = a.toUpperCase();
    k = k || {Accept:"application/json", "Content-Type":"application/json"};
    var w = "POST" !== a && "PATCH" !== a && "DELETE" !== a || "application/json" !== k.Accept ? "" : JSON.stringify(l), q = w.replace(/ /g, "").replace(/"/g, "").replace(/{/g, "/").replace(/}/g, "").replace(/:/g, "/");
    "GET" === a && (d += "?" + D.Aa(l));
    t && n && "undefined" !== typeof n.abort && n.abort();
    if (g && "GET" === a && (l = /** @lends {CORE.CACHE} */ D.F.get(d + q))) {
      b(l);
      return;
    }
    "undefined" !== typeof XMLHttpRequest && (n = new XMLHttpRequest);
    if (!n) {
      try {
        n = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (ea) {
        try {
          n = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (pa) {
        }
      }
    }
    if (n) {
      n.open(a, d, "undefined" === typeof f ? !0 : f);
      for (var h in k) {
        k.hasOwnProperty(h) && n.setRequestHeader(h, k[h]);
      }
      (function(a, d, l, b, c, w, k, f) {
        d.Authorization && (a.withCredentials = !0);
        a.onreadystatechange = function() {
          if (4 == a.readyState) {
            var d = null;
            if (200 == a.status || 201 == a.status) {
              try {
                d = a.responseText ? JSON.parse(a.responseText) : [];
              } catch (ma) {
              }
              l && "GET" === b && /** @lends {CORE.CACHE} */ D.F.set(c + q, d);
              k && (null === d && (d = []), k(d));
            } else {
              if (f) {
                try {
                  d = a.responseText ? JSON.parse(a.responseText) : [];
                } catch (ma) {
                }
                d && d.error && E.vb(d.error.constructor === Object ? JSON.stringify(d.error) : d.error);
                return f(a.status, d);
              }
            }
          }
        };
      })(n, k, g, a, d, w, b, c);
      n.send(w.length ? w : null);
    } else {
      "GET" === a && (document.location.href = d + (w.length ? "?" : "") + w);
    }
  }
  function r() {
    k.splice(0, 1)[0]();
    k.length ? D.async(r) : t = !1;
  }
  /**
 @param {!string} type
 @return {boolean}
 */
function g(a) {
    return this["is" + a[0].toUpperCase() + a.substring(1)];
  }
  var n = null, f = function() {
    var a = window.getComputedStyle(document.documentElement, "");
    return (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
  }();
  /**
 @const
 @param {!*} value
 @param {string=} type
 @return {boolean}
 */
D.b = function(a, d) {
    return d ? typeof a === d : "undefined" !== typeof a;
  };
  /**
 @const
 @param {!*} value
 @return {boolean}
 */
D.ab = function(a) {
    return D.b(a);
  };
  /**
 @const
 @param {!*} value
 @return {boolean}
 */
D.qa = function(a) {
    return a || 0 === a || !1 === a || "" === a ? !0 : !1;
  };
  /**
 @const
 @param {!*} value
 @return {boolean}
 */
D.isArray = function(a) {
    return a && a.constructor === Array ? !0 : !1;
  };
  /**
 @const
 @param {!*} value
 @return {boolean}
 */
D.gb = function(a) {
    return a && a.constructor === Object ? !0 : !1;
  };
  /**
 @const
 @param {(!Object|null)} value
 @return {boolean}
 */
D.Rb = function(a) {
    return HTMLCollection.prototype.isPrototypeOf(a);
  };
  /**
 @const
 @param {!Array<*>} value
 @return {boolean}
 */
D.Wa = function(a) {
    if (a && a.length) {
      for (var d = 0; d < a.length; d++) {
        if (D.qa(a[d])) {
          return !0;
        }
      }
    }
    return !1;
  };
  /**
 @const
 @param {!Object} value
 @return {boolean}
 */
D.Va = function(a) {
    return Object.keys(a).length ? !0 : !1;
  };
  /**
 @const
 @param {!Array<*>} value
 @return {boolean}
 */
D.bb = function(a) {
    return a && !a.length ? !0 : !1;
  };
  /**
 @const
 @param {*} value
 @return {boolean}
 */
D.Za = function(a) {
    return "" === a;
  };
  /**
 @const
 @param {(Node|Element|HTMLDocument|Window|null|string)} element
 @return {(Node|HTMLElement|HTMLDocument|Window|Element|null)}
 */
var b = D.X = function(a) {
    return D.b(a, "string") ? D.Y[a] || D.o(a) : a;
  };
  /** @final */ D.console = {/**
 @param {(string|number)=} text
 @param {*=} obj
 @param {string=} color
 */
log:function() {
  }, /**
 @param {(string|number)=} param
 @param {*=} obj
 */
warn:function() {
  }, /**
 @param {(string|number)=} param
 @param {*=} obj
 */
Oa:function() {
  }, /**
 @param {(string|number)=} param
 @param {*=} obj
 */
info:function() {
  }};
  var c = function() {
    for (var a, d = [], l = 0; 256 > l; l++) {
      a = l;
      for (var b = 0; 8 > b; b++) {
        a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
      }
      d[l] = a;
    }
    return d;
  }(), k = [], t = !1;
  /**
 @const
 @param {!string} query
 @return {(Array<(Node|null)>|NodeList|Node|null)}
 */
D.query = function(a) {
    if (-1 === a.indexOf(" ")) {
      var d = a.charAt(0);
      if ("." === d) {
        return D.w(a.substring(1));
      }
      var l = a.indexOf(".");
      if (0 < l) {
        var b = a.substring(l + 1);
        if ("#" === d) {
          return D.w(b, a.substring(1, l));
        }
        d = [];
        l = D.l(a.substring(0, l));
        for (var c = 0; c < l.length; c++) {
          d = d.concat(D.w(b, a.substring(1, l[c])));
        }
        return d;
      }
      return "#" === d ? D.o(a.substring(1)) : D.l(a);
    }
    b = a.split(" ");
    if (2 === b.length) {
      if (l = b[0], b = b[1], d = l.charAt(0), c = b.charAt(0), "#" === d) {
        if ("." === c) {
          return D.w(b.substring(1), l.substring(1));
        }
        if ("#" !== c) {
          return D.l(b, l.substring(1));
        }
      } else {
        if ("." === d) {
          if ("#" === c) {
            return D.w(l.substring(1), b.substring(1));
          }
        } else {
          if ("." === c) {
            d = [];
            b = b.substring(1);
            if ("document" === l || "body" === l) {
              return D.w(b);
            }
            l = D.l(l);
            for (c = 0; c < l.length; c++) {
              D.w(b, l[c]);
            }
            return d;
          }
          if ("#" === c) {
            return D.l(l, b.substring(1));
          }
        }
      }
    }
    return document.querySelectorAll(a);
  };
  /**
 @const
 @param {string} id
 @return {(Node|Element|HTMLElement|null)}
 */
D.o = function(a) {
    return D.Y[a] || (D.Y[a] = document.getElementById(a));
  };
  /**
 @const
 @param {string} classname
 @param {(Node|HTMLElement|Element|Window|string)=} context
 @return {NodeList}
 */
D.w = function(a, d) {
    return (d ? b(d) : document).getElementsByClassName(a);
  };
  /**
 @const
 @param {string} tag
 @param {(Node|HTMLElement|Element|Window|string)=} context
 @return {NodeList}
 */
D.l = function(a, d) {
    return (d ? b(d) : document).getElementsByTagName(a);
  };
  /**
 @const
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @return {string}
 */
D.Ua = function(a) {
    "string" === typeof a && (a = D.query(a));
    0 <= a.length && (a = a[0]);
    return a.value;
  };
  /**
 @const
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @param {string} value
 */
D.ub = function(a, d) {
    "string" === typeof a && (a = D.query(a));
    if (0 <= a.length) {
      for (var l = 0; l < a.length; l++) {
        a[l].value = d;
      }
    } else {
      a.value = d;
    }
  };
  /**
 @const
 @param {_pattern_struct} pattern
 @param {Object<?,(number|string)>=} data
 @return {Element}
 */
D.O = function(a, d) {
    var l = document.createElement(a.tag || "div"), b = a.attr;
    if (b) {
      for (var c in b) {
        if (b.hasOwnProperty(c)) {
          var k = b[c], f = "string" === typeof k;
          if ("className" === c && !1 === f) {
            l.className = k.join(" ");
          } else {
            if ("style" === c && !1 === f) {
              /**
 @suppress {duplicate}
 */
var f = "", t;
              for (t in b[c]) {
                k.hasOwnProperty(t) && (f += t + "=" + k[t] + ";");
              }
              l.setAttribute(c, f);
            } else {
              if (d && "data" === c && !1 === f) {
                for (var h in k) {
                  if (k.hasOwnProperty(h)) {
                    -1 !== h.indexOf(".") ? (k = h.split("."), l.appendChild(document.createTextNode(d[k[0]][k[1]]))) : l.appendChild(document.createTextNode(d[h]));
                    break;
                  }
                }
              } else {
                l.setAttribute(c, k);
              }
            }
          }
        }
      }
    }
    a.text && l.appendChild(document.createTextNode(a.text));
    return l;
  };
  /**
 @const
 @param {Array<_pattern_struct>} pattern
 @param {(Node|Element|DocumentFragment)} parent
 @param {Array<string,*>=} data
 @param {boolean=} recursive
 @return {(Node|Element|DocumentFragment)}
 */
D.R = function(a, d, l) {
    d || (d = document.createDocumentFragment());
    if (a) {
      "undefined" === typeof a.length && (a = [a]);
      for (var b = 0; b < a.length; b++) {
        var c = D.O(a[b], l);
        a[b].child && D.R(a[b].child, c, l, !0);
        d.appendChild(c);
      }
    }
    return d;
  };
  D.Ja = function(a, d, l) {
    for (var b = 0; b < l.length; b++) {
      D.R(a, d, l[b]);
    }
  };
  D.Ba = function(a) {
    for (var d; d = a.lastChild;) {
      a.removeChild(d);
    }
  };
  /** @type {_cache_struct} */ D.F = new function() {
    var a = {}, d = {};
    /**
 @param {string} key
 @param {*} val
 @param {boolean=} force
 */
this.set = function(l, b, c) {
      a[l] = b;
      !c && d[l] || (d[l] = (new Date).getTime());
    };
    /**
 @param {string} key
 @param {boolean=} force
 @return {*}
 */
this.get = function(l, b) {
      return d[l] && (b || 300000 > (new Date).getTime() - d[l]) ? a[l] : null;
    };
    /**
 @return {Object<string,*>}
 */
this.all = function() {
      return a;
    };
    /**
 @param {string} key
 @return {*}
 */
this.remove = function(l) {
      var b = a[l];
      a[l] = null;
      d[l] = null;
      return b;
    };
    /** @type {function()} */ this.clear = function() {
      a = {};
      d = {};
    };
  };
  /** @type {Object<string,Element>} */ D.Y = {};
  /**
 @public
 @param {_ajax_struct} params
 */
D.fa = function(a) {
    z(a.type || "GET", a.url || "/", a.params || "", a.success, a.error, a.header, a.async, a.clear, a.cache);
  };
  D.Aa = function(a) {
    var d = "", l;
    for (l in a) {
      a.hasOwnProperty(l) && (d += (d ? "&" : "") + l + "=" + encodeURIComponent(a[l]));
    }
    return d;
  };
  /**
 @param {!number} length
 @param {string=} charset
 @return {string}
 */
D.Tb = function(a, d) {
    d || (d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
    for (var l = "", b = d.length + 0.4999999, c = 0; c < a; c++) {
      l += d.charAt(Math.random() * b - 0.5 | 0);
    }
    return l;
  };
  /**
 @param {Array<(string|number)>} array
 @param {string} field
 @return {Array<(string|number)>}
 */
D.unique = function(a, d) {
    for (var l = {}, b = [], c = 0, k = a.length; c < k; c++) {
      var f = d ? a[c][d] : a[c];
      l[f] || (l[f] = !0, b[b.length] = f);
    }
    return b;
  };
  /**
 @param {Array<*>} array_1
 @param {Array<*>} array_2
 @return {Array<*>}
 */
D.kb = function(a, d) {
    for (var l = arguments || [a, d], b, c = 1; c < l.length; c++) {
      if (b = l[c]) {
        a = (a || []).concat(b);
      }
    }
    return a;
  };
  /**
 @param {Array<*>} array
 @return {Array<*>}
 */
D.reverse = function(a) {
    for (var d = a.length, b = Array(d), c = 0; c < d; c++) {
      b[c] = a[d - c - 1];
    }
    return b;
  };
  /**
 @param {!Array<*>} array
 @param {Function=} cmp
 @return {Array<*>}
 */
D.sort = function(a, d) {
    return a.sort(d || u);
  };
  /**
 @param {!Array<*>} array
 @return {Array<*>}
 */
D.wb = function(a) {
    return a.sort(u);
  };
  /**
 @param {!Array<*>} array
 @return {Array<*>}
 */
D.xb = function(a) {
    return a.sort(h);
  };
  /**
 @param {!Array<*>} array
 @param {Function=} cmp
 @return {Array<*>}
 */
D.yb = function(a, d) {
    return a.sort(d || x);
  };
  /**
 @param {!Array<*>} array
 @return {Array<*>}
 */
D.zb = function(a) {
    return a.sort(x);
  };
  /**
 @param {!Array<*>} array
 @return {Array<*>}
 */
D.Ab = function(a) {
    return a.sort(p);
  };
  /**
 @param {!Array<*>} array
 @param {number=} times
 @return {Array<*>}
 */
D.Ea = function(a, d) {
    for (var b = a.length, c, k, f = 0; f < b; f++) {
      k = Math.random() * b | 0, c = a[f], a[f] = a[k], a[k] = c;
    }
    return d && --d ? D.Ea(a, d) : a;
  };
  /**
 @param {Date} date
 @return {string}
 */
D.Ra = function(a) {
    var d = new Date(a);
    a = "" + (d.getMonth() + 1);
    /**
 @suppress {duplicate}
 */
var b = "" + d.getDate(), d = d.getFullYear();
    2 > a.length && (a = "0" + a);
    2 > b.length && (b = "0" + b);
    return [d, a, b].join("-");
  };
  D.Sa = function(a, d, b, c) {
    d = "number" === typeof d ? d : 2;
    b = b || ".";
    c = c || ",";
    /**
 @suppress {duplicate}
 */
var l = parseInt(a = D.Math.abs(+a || 0).toFixed(d), 10) + "", k = l.length, k = 3 < k ? k % 3 : 0;
    return (0 > a ? "-" : "") + (k ? l.substr(0, k) + c : "") + l.substr(k).replace(/(\d{3})(?=\d)/g, "$1" + c) + (d ? b + D.Math.abs(a - l).toFixed(d).slice(2) : "");
  };
  /**
 @param {Array<string>} images
 */
D.nb = function(a) {
    var d;
    (d = D.o("image-preload")) || (d = D.O({tag:"div", id:"image-preload", attr:{style:"display:none;position:absolute;height:0px;width:0px;overflow:hidden;pointer-events:none"}}), document.body.appendChild(d));
    for (var b, c = 0; c < a.length; c++) {
      b = new Image, b.setAttribute("lazyload", "true"), b.src = a[c], D.a(b, {display:"none", height:"0px", width:"0px"}), d.appendChild(b);
    }
  };
  /**
 @param {Function} fn
 @param {number=} delay
 @return {(number|null)}
 */
D.async = function(a, d) {
    return window.setTimeout(a, d);
  };
  /**
 @param {(Array<Function>|Function)} fn
 @param {number=} delay
 */
D.stack = function(a, d) {
    var b = k.length;
    if (a.constructor === Array) {
      for (var c = 0; c < a.length; c++) {
        k[b++] = a[c];
      }
    } else {
      k[b] = a;
    }
    t || (t = !0, D.async(r, d));
  };
  D.Ta = function() {
    return k.length;
  };
  D.ib = function(a, d) {
    var b = !1, c = d ? function() {
      b || this.readyState && "complete" !== this.readyState || (b = !0, d && d());
    } : void 0;
    document.body.appendChild(D.O({tag:"script", attr:{type:"text/javascript", async:!0, src:a, onload:c, onreadystatechange:c}}));
  };
  D.jb = function(a, d) {
    document.body.appendChild(D.O({tag:"link", attr:{rel:"stylesheet", type:"text/css", href:a, media:d || "all"}}));
  };
  D.time = function() {
    var a = window.performance || window[f + "Performance"] || {};
    a.now || (a.now = a.now || a[f + "Now"] || Date.now || function() {
      return (new Date).getTime();
    });
    return a;
  }();
  D.ha = function(a) {
    return a[0].toUpperCase() + a.slice(1);
  };
  D.prefix = f;
  /**
 @param {string} str
 @return {number}
 */
D.Ka = function(a) {
    for (var d = -1, b = 0; b < a.length; b++) {
      d = d >>> 8 ^ c[(d ^ a.charCodeAt(b)) & 255];
    }
    return (d ^ -1) >>> 0;
  };
  /**
 @param {(Array<(number|string|boolean)>|string)} source
 @param {(number|string|boolean|null|undefined)} find
 @return {number}
 */
D.count = function(a, d) {
    var b, c = 0;
    if ("string" === typeof a) {
      var k = 0;
      for (b = d.length; -1 !== (k = a.indexOf("" + d, k));) {
        c++, k += b;
      }
    } else {
      if (D.isArray(a)) {
        for (b = 0; b < a.length; b++) {
          a[b] === d && c++;
        }
      }
    }
    return c;
  };
  /**
 @param {(string|Array<*>)} source
 @param {*} find
 @param {*} replace
 @return {(string|Array<*>)}
 */
D.replace = function(a, d, b) {
    if ("string" === typeof a) {
      for (var c = 0, l = d.length, k = b.length; -1 !== (c = a.indexOf("" + d, c));) {
        a = a.substring(0, c) + b + a.substring(c + l), c += k;
      }
    } else {
      if (a.length) {
        for (c = 0; c < a.length; c++) {
          a[c] === d && (a[c] = b);
        }
      }
    }
    return a;
  };
  /**
 @param {Function} fn
 @return {Function}
 */
D.qb = function(a) {
    a = m(a);
    var d = a[0];
    return Function(d, "(function(){var $length = this.length, " + d + ";for(var $i = 0; $i < $length; $i++){" + d + " = this[$i];" + a[2] + "}return this;}).call(" + d + ");");
  };
  /**
 @param {Function} fn
 @return {Function}
 */
D.sb = function(a) {
    a = m(a);
    var d = a[0];
    return Function(d, "return (function(){var $length = this.length, $copy = new Array($length), " + d + ";for(var $i = 0; $i < $length; $i++){" + d + " = this[$i];" + a[1] + "$copy[$i] = " + a[2] + ";}return $copy;}).call(" + d + ");");
  };
  /**
 @param {Function} fn
 @return {Function}
 */
D.rb = function(a) {
    a = m(a);
    var d = a[0];
    return Function(d, "return (function(){var $length = this.length, $copy = [], $count = 0, " + d + ";for(var $i = 0; $i < $length; $i++){" + d + " = this[$i];" + a[1] + "if(" + a[2] + ") $copy[$count++] = " + d + ";}return $copy;}).call(" + d + ");");
  };
  /**
 @param {Array} array
 @param {*} item
 @return {boolean}
 */
D.contains = function(a, d) {
    for (var b = a.length; b--;) {
      if (a[b] === d) {
        return !0;
      }
    }
    return !1;
  };
  /**
 @param {!Array} array
 @param {*} content
 @param {number=} start
 @param {number=} count
 @return {!Array}
 */
D.fill = function(a, d, b, c) {
    c = 0 <= c ? Math.min(b + c, a.length) : a.length;
    for (b = b || 0; b < c; b++) {
      a[b] = d;
    }
    return a;
  };
  /**
 @const
 @param {Object<string,*>} data
 @return {Array<string>}
 */
D.na = function(a) {
    if (a) {
      if (Object.keys) {
        return Object.keys(a);
      }
      var d = [], b = 0, c;
      for (c in a) {
        a.hasOwnProperty(c) && (d[b++] = c);
      }
      return d;
    }
    return [];
  };
  D.assign = function(a, d) {
    if (!d || "object" !== typeof d) {
      return a;
    }
    for (var b = Object.keys(d), c, k = b.length, f = 0; f < k; f++) {
      c = b[f], a[c] = d[c];
    }
  };
  /**
 @param {!string} src
 @param {!Function} callback
 @param {string=} format
 @param {number=} quality
 */
D.Ya = function(a, d, b, c) {
    var l = new Image;
    /**
 @this {Image}
 */
l.crossOrigin = "anonymous";
    l.onload = function() {
      var a = document.createElement("canvas");
      a.height = this.height;
      a.width = this.width;
      a.getContext("2d").drawImage(this, 0, 0);
      d(a.toDataURL(b || "image/jpeg", c || 1.0));
    };
    l.src = a;
  };
  /** @const @struct */ D.Math = {/**
 @param {(!Array<number>|number)} a
 @param {!number=} b
 @return {!number}
 */
min:function(a, d) {
    if (a.constructor === Array) {
      d = a[0];
      for (var b = 0; b < a.length; b++) {
        b ? a[b] < d && (d = a[b]) : d = a[0];
      }
      return d;
    }
    return d < a ? d : a;
  }, /**
 @param {(!Array<number>|number)} a
 @param {!number=} b
 @return {!number}
 */
max:function(a, d) {
    if (a.constructor === Array) {
      d = a[0];
      for (var b = 0; b < a.length; b++) {
        b ? a[b] > d && (d = a[b]) : d = a[0];
      }
      return d;
    }
    return a < d ? d : a;
  }, ob:Math.PI / 180, cos:Math.cos, sin:Math.sin, round:function(a) {
    return 0 <= a ? a + 0.5 | 0 : a - 0.5 | 0;
  }, pb:Math.random, abs:function(a) {
    return 0 > a ? -a : a;
  }};
  /** @const @struct */ D.C = {/** @type {boolean} */ za:!!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"), /** @type {boolean} */ cb:"undefined" !== typeof window.InstallTrigger, /** @type {boolean} */ hb:0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor"), /** @type {boolean} */ eb:!!document.documentMode};
  /** @type {boolean} */ D.C.$a = !!window.chrome && !D.C.za;
  /** @type {function(string):boolean} */ D.C.is = g;
  /** @const @struct */ D.i = {/** @type {boolean} */ xa:!!navigator.userAgent.match(/iPhone/i), /** @type {boolean} */ ya:!!navigator.userAgent.match(/iPod/i), /** @type {boolean} */ wa:!!navigator.userAgent.match(/iPad/i), /** @type {boolean} */ ta:!!navigator.userAgent.match(/Android/i), /** @type {boolean} */ ua:!!window.cordova};
  /** @type {boolean} */ D.i.va = D.i.xa || D.i.ya || D.i.wa;
  /** @type {boolean} */ D.i.fb = D.i.va || D.i.ta;
  /** @type {function(string):boolean} */ D.i.is = g;
})();
var H = {}, I = {}, K = {}, L = {}, M = {}, N = {}, O = {}, aa = {}, Q = {P:{}, F:{}, Ib:{}, $:{}, /**
 @param {string} val
 @return {string}
 */
ja:function(m) {
  return m;
}, /**
 @param {string} val
 @return {string}
 */
ka:function(m) {
  return m;
}}, R = {}, E = {}, S = {}, T = {}, U = "en", V = !1, ba = {Z:[]}, W = {}, ca = Math.max(1, Math.min(3, Math.round(window.devicePixelRatio || 1))), X, da = {}, Y = {}, fa = {}, ga = {}, ha = {}, ia = {}, ja = {};
function ka() {
}
function la() {
  oa();
}
function oa() {
}
/**
 @suppress {duplicate}
 */
var Z = {/** @type {Object<string,Array<_template_struct>>} */ u:{}}, N = {}, O = {}, aa = {}, R = {}, M = {}, L = {}, ga = {}, ia = {}, fa = {}, T = {}, ha = {};
/** @const */ D.Hb = {};
(function() {
  function m(b) {
    h = n(m);
    var c, k;
    if (c = g.length) {
      for (k = 0; k < c; k++) {
        var t = g[k];
        !1 !== t._html_new && (t._html_new !== t._html && (t.innerHTML = t._html = t._html_new), t._html_new = !1);
      }
      g = [];
    }
    if (c = z.length) {
      for (k = 0; k < c; k++) {
        t = z[k];
        var a = t._style;
        var d = t._style_new;
        var l = t._style_keys;
        for (var w = null, q = 0; q < l.length; q++) {
          var v = l[q];
          var p = d[v];
          !1 !== p && (p !== a[v] && ((w || (w = t.style))[v] = a[v] = p), d[v] = !1);
        }
        t._style_keys = [];
      }
      z = [];
    }
    if (c = r.length) {
      for (k = 0; k < c; k++) {
        t = r[k];
        a = t._class;
        d = t._class_new;
        l = t._class_keys;
        w = [];
        p = [];
        for (q = 0; q < l.length; q++) {
          v = l[q], !1 !== d[v] && (a[v] !== d[v] && (1 === d[v] ? (w[w.length] = v, a[v] = 1) : (p[p.length] = v, a[v] = 0)), d[v] = !1);
        }
        p.length && t.classList.remove.apply(t.classList, p);
        w.length && t.classList.add.apply(t.classList, w);
        t._class_keys = [];
      }
      r = [];
    }
    if (c = u.length) {
      for (k = 0; k < c; k++) {
        u[k](b);
      }
      u.splice(0, c);
    }
    u.length || z.length || g.length || r.length || (f(h), h = null);
  }
  var p = D.prefix, x = D.ha(p), h = null, u = [], z = [], r = [], g = [], n = window.requestAnimationFrame || window[p + "RequestAnimationFrame"] || function(b) {
    return D.async(function() {
      b(D.time.now());
    }, 16.667);
  }, f = window.cancelAnimationFrame || window[p + "CancelAnimationFrame"] || function() {
    return null;
  };
  /**
 @const
 @param {(Node|NodeList|Array<Node>|string|null)} node
 @param {string} class_name
 @param {boolean=} search_and_remove
 @return {boolean}
 */
D.s = function(b, c) {
    "string" === typeof b && (b = D.query(b));
    0 <= b.length && (b = b[0]);
    var k;
    if (k = b._class_new) {
      if (!1 !== k[c] && D.b(k[c])) {
        return k[c] ? !0 : !1;
      }
    } else {
      b._class_new = {};
    }
    if (k = b._class) {
      if (D.b(k[c])) {
        return k[c] ? !0 : !1;
      }
    } else {
      k = b._class = {};
    }
    return (k[c] = b.classList.contains(c) ? 1 : 0) ? !0 : !1;
  };
  /**
 @const
 @param {(Node|NodeList|Array<Node>|string|null)} node
 @param {(Array<string>|string)} class_name
 @param {Function=} callback
 */
D.B = function(b, c, k) {
    var f;
    "string" === typeof b && (b = D.query(b));
    if (0 <= b.length) {
      for (f = 0; f < b.length;) {
        D.B(b[f++], c, k && f === b.length - 1 ? k : void 0);
      }
    } else {
      D.b(c, "string") && (c = [c]);
      var a = b._class || (b._class = {}), d = b._class_new || (b._class_new = {}), l = b._class_keys || (b._class_keys = []), g = r.length, q = l.length;
      for (f = 0; f < c.length; f++) {
        var v = c[f];
        1 !== a[v] ? 1 !== d[v] && (q || (r[g++] = b), d[v] = 1, D.contains(l, v) || (l[q++] = v)) : d[v] = !1;
      }
      k && D.c(function() {
        k.call(b);
      });
      if (g || k) {
        h || (h = n(m));
      }
    }
  };
  /**
 @const
 @param {(Node|NodeList|Array<Node>|string|null)} node
 @param {(Array<string>|string)} class_name
 @param {Function=} callback
 */
D.A = function(b, c, k) {
    var f;
    "string" === typeof b && (b = D.query(b));
    if (0 <= b.length) {
      for (f = 0; f < b.length;) {
        D.A(b[f++], c, k && f === b.length - 1 ? k : void 0);
      }
    } else {
      D.b(c, "string") && (c = [c]);
      var a = b._class || (b._class = {}), d = b._class_new || (b._class_new = {}), l = b._class_keys || (b._class_keys = []), g = r.length, q = l.length;
      for (f = 0; f < c.length; f++) {
        var v = c[f];
        0 !== a[v] ? 0 !== d[v] && (q || (r[g++] = b), d[v] = 0, D.contains(l, v) || (l[q++] = v)) : d[v] = !1;
      }
      k && D.c(function() {
        k.call(b);
      });
      if (g || k) {
        h || (h = n(m));
      }
    }
  };
  /**
 @const
 @param {(Node|NodeList|Array<Node>|string|null)} node
 @param {string} class_name
 @param {Function=} callback
 @param {boolean=} toggle_state
 */
D.Fa = function(b, c, k, f) {
    if (D.b(f)) {
      f ? D.B(b, c, k) : D.A(b, c, k);
    } else {
      if ("string" === typeof b && (b = D.query(b)), 0 <= b.length) {
        for (f = 0; f < b.length;) {
          D.Fa(b[f++], c, k && f === b.length - 1 ? k : void 0);
        }
      } else {
        f = b._class || (b._class = {});
        var a = b._class_new || (b._class_new = {}), d = b._class_keys || (b._class_keys = []), l = r.length, g = d.length;
        D.b(a[c]) ? !1 !== a[c] && (0 === f[c] && 1 === a[c] || 1 === f[c] && 0 === a[c]) ? a[c] = !1 : (g || (r[l++] = b), D.contains(d, c) || (d[g] = c), a[c] = (!1 === a[c] ? f : a)[c] ? 0 : 1) : (g || (r[l++] = b), D.b(f[c]) || (f[c] = b.classList.contains(c) ? 1 : 0), D.contains(d, c) || (d[g] = c), a[c] = f[c] ? 0 : 1);
        k && D.c(function() {
          k.call(b);
        });
        if (l || k) {
          h || (h = n(m));
        }
      }
    }
  };
  /**
 @const
 @param {(Node|NodeList|Array<Node>|string|null)} _obj
 @param {string=} style
 @return {(CSSStyleDeclaration|CSSValue|string|undefined)}
 */
D.J = function(b, c) {
    b = "string" === typeof b ? D.query(b) : b;
    0 <= b.length && (b = b[0]);
    if (b) {
      if (c) {
        var f, g = b._style;
        if (f = b._style_new) {
          if (f = f[c], !1 !== f && D.b(f)) {
            return f;
          }
        } else {
          b._style_new = {}, b._style_keys = [];
        }
        if (g) {
          if (f = g[c], D.b(f)) {
            return f;
          }
        } else {
          g = b._style = {};
        }
        f = b.style;
        for (var a = 0; a < f.length; a++) {
          if (f[a] === c) {
            return g[c] = f[c];
          }
        }
        return g[c] = window.getComputedStyle(b, null)[c];
      }
      return b.style;
    }
  };
  /**
 @const
 @param {(Node|NodeList|Array<Node>|string|null)} _obj
 @param {(Object<string,(string|number)>|string|number)} css
 @param {(string|number)=} val
 */
D.a = function(b, c, f) {
    if (b = "string" === typeof b ? D.query(b) : b) {
      var k = b.length;
      if (0 <= k) {
        for (var a = 0; a < k; a++) {
          D.a(b[a], c, f);
        }
      } else {
        /**
 @suppress {duplicate}
 */
var k = b._style || (b._style = {}), d = b._style_new || (b._style_new = {}), l = b._style_keys || (b._style_keys = []), g = z.length, q = l.length;
        if (D.b(f)) {
          if (k[c] !== f) {
            if (!1 === d[c] || d[c] !== f) {
              q || (z[g++] = b), d[c] = f, D.contains(l, c) || (l[q] = c);
            }
          } else {
            d[c] = !1;
          }
        } else {
          for (a in c) {
            if (f = c[a], k[a] !== f) {
              if (!1 === d[a] || d[a] !== f) {
                q || (z[g++] = b), d[a] = f, D.contains(l, a) || (l[q++] = a);
              }
            } else {
              d[a] = !1;
            }
          }
        }
        g && (h || (h = n(m)));
      }
    }
  };
  /**
 @const
 @param {(Node|NodeList|Array<Node>|string|null)} obj
 @param {string} css
 @param {Array<(string|number)>} val
 */
D.Bb = function(b, c, f) {
    D.J(b, c) === f[0] ? D.a(b, c, f[1]) : D.a(b, c, f[0]);
  };
  /**
 @const
 @param {(Node|NodeList|Array<Node>|string|null)} obj
 @param {(Object<string,(string|number)>|string|number)} style
 @param {(string|number)=} val
 */
D.S = function(b, c, f) {
    if ("undefined" !== typeof f || c && "string" !== typeof c) {
      D.a(b, c, f);
    } else {
      return D.J(b, c);
    }
  };
  /**
 @param {string} selector
 @param {(Object<string,(string|number)>|string)} rules
 @param {(string|number)=} value
 */
D.Ga = function(b, c, f) {
    var k = document.styleSheets[document.styleSheets.length - 1], a = "";
    if (f) {
      a = c + ":" + f + ";";
    } else {
      if (c) {
        f = Object.keys(c || {});
        for (var d = f.length, l = "", g = 0; g < d; g++) {
          a += (l = f[g]) + ":" + c[l] + ";";
        }
      }
    }
    a && (k.insertRule ? k.insertRule(b + "{" + a + "}", k.cssRules ? k.cssRules.length : 0) : k.addRule && k.addRule(b, a, k.cssRules ? k.cssRules.length : 0));
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @param {string} val
 */
D.ca = function(b, c) {
    "string" === typeof b && (b = D.query(b));
    if (0 <= b.length) {
      for (var f = 0; f < b.length; f++) {
        D.ca(b[f], c);
      }
    } else {
      (f = b.firstChild) && D.b(f.nodeValue) ? f.nodeValue = c : D.b(b.textContent) ? b.textContent = c : D.b(b.innerText) ? b.innerText = c : D.h(b, c);
    }
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} _node
 @param {string} _html
 @param {(boolean|Function)=} _async
 */
D.h = function(b, c, f) {
    var k = b;
    b = D.b(f, "function");
    "string" === typeof k && (k = D.query(k));
    var a = k.length;
    if (0 <= a) {
      for (var d = 0; d < a; d++) {
        D.h(k[d], c, b ? d === a - 1 ? f : !0 : f);
      }
    } else {
      a = k._html_new;
      if (k._html !== c) {
        if (f) {
          a !== c && (!1 !== a && D.b(a) || (g[g.length] = k), k._html_new = c);
          b && D.c(function() {
            f.call(k);
          });
          if (g.length || b) {
            h || (h = n(m));
          }
          return;
        }
        k.innerHTML = k._html = c;
      } else {
        k._html_new = a = !1;
      }
      a && (k._html_new = c);
      b && f.call(k);
    }
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 */
D.W = function(b) {
    "string" === typeof b && (b = D.query(b));
    0 <= b.length && (b = b[0]);
    var c;
    return !1 !== (c = b._html_new) && D.b(c) ? c : D.b(c = b._html) ? c : b._html = b.innerHTML;
  };
  /**
 @param {function(number)} fn
 @param {number=} delay
 @return {(number|null)}
 */
D.c = function(b, c) {
    var f = this;
    if (c) {
      return function(b) {
        return D.async(function() {
          D.c.call(f, b);
        }, c);
      }(b);
    }
    u[u.length] = f !== D ? function(c) {
      b.call(f, c);
    } : b;
    return h || (h = n(m));
  };
  /**
 @param {(number|null)} id
 @return {(number|null)}
 */
D.clear = function(b) {
    b && (window.clearTimeout(b), f.call(window, b));
    return null;
  };
  /**
 @param {(Array<(Node|null)>|Node|NodeList|string|null)} obj
 @param {(string|Object)} params
 @param {(string|number)=} arg3
 @param {(number|string|Function)=} arg4
 @param {(string|Function)=} arg5
 @param {Function=} arg6
 @param {Function=} arg7
 */
D.transition = function(b, c) {
    c.T && function(a, d) {
      return D.async(function() {
        d.T = 0;
        D.transition(a, d);
      }, d.T);
    }(b, c);
    "string" === typeof b && (b = D.query(b));
    var f = b.length;
    if (f) {
      for (var g = 0; g < f; g++) {
        D.transition(b[g], c);
      }
    } else {
      c.from && D.a(b, c.style, c.from), f = {transitionProperty:c.style, transitionDuration:c.duration || 400, transitionDelay:c.T || 0, transitionTimingFunction:c.U || "ease-in"}, g = {}, g[x + "TransitionProperty"] = c.style, g[x + "TransitionDuration"] = c.duration || 400, g[x + "TransitionDelay"] = c.T || 0, g[x + "TransitionTimingFunction"] = c.U || "ease-in", D.a(b, g), D.a(b, f), function(a, d, b) {
        D.async(function() {
          D.a(a, d, b);
        }, 0);
      }(b, c.style, c.to), c.callback && function(a, d) {
        return D.async(function() {
          d.call(a);
        }, c.duration || 400);
      }(b, c.callback);
    }
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @param {(number|null)=} from
 @param {number=} to
 @param {number=} duration
 @param {number=} start
 */
D.scrollTo = function(b, c, f, g, a) {
    "string" === typeof b && (b = D.query(b));
    0 <= b.length && (b = b[0]);
    c || (c = b.scrollTop);
    f || (f = 0);
    g || (g = 5000 > D.Math.abs(f - c) ? 400 : 0);
    c !== f && D.c(function(d) {
      d -= a || (a = d);
      if (d >= g) {
        return b.scrollTop = f;
      }
      0 >= c && (c = 0);
      0 >= f && (f = 0);
      D.scrollTo(b, c, f, g, a);
      b.scrollTop = c + (f - c) * Math.sin(d / g * Math.PI / 2);
    });
  };
  D.Da = function(b) {
    D.scrollTo(b);
  };
})();
/** @const */ D.Eb = {};
(function() {
  function m(a) {
    return D.b(a, "string");
  }
  /**
 @constructor
 @implements {_fatjob_interface}
 @this {FATJOB}
 */
function p(a, b, c, f, k, g, h, n, t, m, u, r) {
    this.L = a;
    this.style = b;
    this.S = c;
    this.from = f;
    this.to = k;
    this.j = f;
    this.oa = g;
    this.Xa = 0 === g.length ? 0 : "%" === g ? 1 : 2;
    this.duration = h;
    this.ma = n;
    this.U = t;
    this.start = 0;
    this.callback = u;
    this.step = r;
    this.la = "anim_" + b;
    this.ga = (k - f) / 100;
    this.I = m / h;
    this.dir = !0;
    this.pause = !1;
  }
  function x(d) {
    var c;
    r.G = D.c(x);
    r.ba = !0;
    d || (d = D.time.now());
    var k;
    if (k = t.length) {
      for (c = 0; c < k;) {
        t[c++].set();
      }
      for (; 0 < c;) {
        t[--c] = void 0;
      }
      t.length = 0;
    }
    if (k = b.length) {
      for (; k--;) {
        c = b.shift(), "function" === typeof c && c(d);
      }
    }
    if (f.length) {
      k = d;
      if (c = f.length) {
        for (var g = 0; g < c;) {
          f[g].animate(k) ? (f[g] = void 0, c--, f.splice(g, 1)) : g++;
        }
      }
      if (k = a.length) {
        for (c = 0; c < k; c++) {
          a[c].render(d);
        }
      }
    }
    f.length || t.length || b.length || (r.G = D.clear(r.G));
    r.ba = !1;
  }
  /**
 @param {(Array<Node>|Node|NodeList|null)} obj
 @param {string} style
 @param {(string|number)} to
 @param {(number|string|Function)=} duration
 @param {(string|Function)=} easeStr
 @param {Function=} callback
 @param {Function=} step
 @return {?}
 */
function h(a, b, c, k, g, h, t) {
    var d, l = r.I, q = "anim_" + b, w = a[q];
    if (w) {
      (d = a.Qa) && "undefined" !== typeof d[b] && (w.j = parseFloat(d[b]), d[b] = ""), w.from = d = w.j, w.to = c = m(c) ? parseFloat(c) : c, w.duration = k || (k = 400), w.start = 0, w.ma !== g && (w.ma = g, w.U = n.sa(g)), w.ga = (c - d) / 100, w.I = l / k, w.callback = h || !1, w.step = t || !1;
    } else {
      /**
 @suppress {duplicate}
 */
var /** @type {CSSStyleDeclaration} */ w = a.style || {left:0, top:0, width:0, height:0};
      if ((d = a.Qa) && "undefined" !== typeof d[b]) {
        var v = "" + d[b];
        d[b] = "";
      } else {
        v = "" + D.J(a, b);
      }
      "auto" === v && (v = "0");
      d = m(v) ? parseFloat(v) : v;
      var u = v.substring(("" + d).length);
      v = "" + c;
      c = m(c) ? parseFloat(c) : c;
      "" === u && (u = v.substring(("" + c).length));
      !a.aa && r.aa && (a.aa = !0, a !== document.body && a !== document.documentElement && ("undefined" !== typeof w.transform ? (v = D.J(a, "transform"), "none" !== v && "" !== v || "fixed" === w.backgroundPosition || "fixed" === w.backgroundAttachment || (w.transform = "translateZ(0)", w.perspective = "1000")) : "undefined" !== typeof w.webkitTransform && (v = D.J(a, "webkitTransform"), "none" !== v && "" !== v || "fixed" === w.backgroundPosition || "fixed" === w.backgroundAttachment || (w.webkitTransform = 
      "translateZ(0)", w.webkitPerspective = "1000"))));
      f[f.length] = a[q] = new p(a, b, w, d, c, u, k || 400, g, n.sa(g), l, h || !1, t || !1);
    }
  }
  /**
 @constructor
 @param {(Array<Node>|Node|NodeList|null)} arg1
 @param {string} arg2
 @param {(string|number)} arg3
 @param {(number|string|Function)=} arg4
 @param {(string|Function)=} arg5
 @param {Function=} arg6
 @param {Function=} arg7
 */
function u(a, b, c, f, k, g, n) {
    if (m(b)) {
      "fast" === f ? f = 200 : "slow" === f && (f = 800), k && m(k) ? h(a, b, c, f, k, g, n) : h(a, b, c, f, "easeOutQuad", k, g);
    } else {
      if ("fast" === c ? c = 200 : "slow" === c && (c = 800), f && m(f)) {
        for (var d in b) {
          h(a, d, b[d], c, f, k, g), g = k = null;
        }
      } else {
        for (d in b) {
          h(a, d, b[d], c, "easeOutQuad", f, k), k = f = null;
        }
      }
    }
    r.G || (r.G = D.c(x));
  }
  /**
 @param {Function} fn
 @param {number} delay
 @param {(HTMLElement|string|null)=} element
 @param {number=} pos
 @return {number}
 */
function z(a, f, g, h) {
    var d = c.length;
    g && m(g) ? (h = k[g] || (k[g] = d + 1), g = "") : h = h || (g ? g.mb || (g.mb = d + 1) : d + 1);
    1 === h && (c[0] = 0);
    h < d && c[h] && (window.clearTimeout(c[h]), c[h] = 0);
    0 < f ? c[h] = window.setTimeout(function() {
      z(a, -1, g, h);
    }, 1 === f ? 0 : f) : g ? c[h] = window.setTimeout(function() {
      z(a, f, g, h);
    }, 1000) : -1 === f && r.ba ? a(D.time.now()) : (b[b.length] = a, r.G || (r.G = D.c(x)));
    return h;
  }
  var r = {G:0, I:Math.max(screen.width, screen.height), Sb:window.requestAnimationFrame ? !0 : !1, aa:!1, ba:!1}, g = {/** @type {function(number,number,number,number):number} */ easeLinear:function(a, b, c, f) {
    return a / f * c + b;
  }, /** @type {function(number,number,number,number):number} */ easeOutQuad:function(a, b, c, f) {
    return -c * (a /= f) * (a - 2) + b;
  }}, n = function() {
    return new /**
 @const
 @constructor
 @param {number} RES
 */
function(a) {
      this.I = a;
      /**
 @lends {EASE}
 @const
 @param {string} ease
 @return {(Array<number>|Int16Array<number>)}
 */
this.j = function(a) {
        var d = this.I, b = "undefined" === typeof Int16Array ? Array(d) : new Int16Array(d);
        a = g[a] || g.easeOutQuad;
        for (var c = 0; c < d;) {
          b[c] = 10 * a(c, 0, 100, d) | 0, c++;
        }
        return b;
      };
      /**
 @lends {EASE}
 @const
 @param {string} ease
 @return {Array<number>}
 */
this.sa = function(a) {
        return this[a] || (this[a] = this.j(a));
      };
    }(Math.max(screen.width, screen.height));
  }();
  p.prototype.animate = /**
 @this {_fatjob_interface}
 @param {number} time
 @return {boolean}
 @override
 */
function(a) {
    var d = this.duration, b = this.style, c = this.Xa;
    a = Math.max(a - (this.start || (this.start = a)), 0);
    if (a < d) {
      if (!this.color) {
        var f = this.ga * this.U[this.I * a | 0] / 10 + this.from;
        f = 0 === c ? (100 * f + 0.5 | 0) / 100 : 1 === c ? (10 * f + 0.5 | 0) / 10 : f + 0.5 | 0;
        this.j !== f && ("scrollTop" === b ? this.L.scrollTop = this.j = f : this.S[b] = (this.j = f) + this.oa);
      }
      this.step && this.step(f);
    } else {
      this.step && this.step(this.to);
      if (this.callback) {
        f = this.start;
        d = this.j;
        this.callback.call(this.L);
        if (this.start !== f) {
          return !1;
        }
        if (this.j !== d) {
          return this.L[this.la] = "", !0;
        }
      }
      this.color || this.j === this.to || ("scrollTop" === b ? this.L.scrollTop = this.to : this.S[b] = this.to + this.oa);
      this.L[this.la] = "";
      return !0;
    }
    return !1;
  };
  /**
 @this {_fatjob_interface}
 @override
 */
p.prototype.colorHandler = function(a, b) {
    var d = !1;
    35 === a.charCodeAt(0) ? (d = !0, 4 !== a.length && console.log(a)) : D.count(a, "rgb") && (d = !0);
    d && (35 !== b.charCodeAt(0) && D.count(b, "rgb"), this.color = !0);
  };
  var f = [], b = [], c = [], k = {}, t = [], a = [];
  D.animate = /**
 @param {(Array<(Node|null)>|Node|NodeList|string|null)} arg1
 @param {(string|Object)} arg2
 @param {(string|number)} arg3
 @param {(number|string|Function)=} arg4
 @param {(string|Function)=} arg5
 @param {Function=} arg6
 @param {Function=} arg7
 @return {number}
 */
function(a, b, c, f, k, g, h) {
    var d = -1, l = m(b) ? f : c;
    "[object Object]" === Object.prototype.toString.call(l) && (l.duration && (f = l.duration), l.ease && (k = l.ease), l.complete && (g = l.complete), l.step && (h = l.step), l.delay && (d = l.delay));
    return z(function() {
      "string" === typeof a && (a = D.query(a));
      a.length || (a = [a]);
      for (var d = 0; d < a.length; d++) {
        new u(a[d], b, c, f, k, g, h);
      }
    }, d);
  };
})();
/** @const */ D.Gb = {};
(function() {
  function m(f) {
    var b = f.type;
    if ("touchmove" === b) {
      if (h && !X) {
        return;
      }
      X || (u = h = !0);
    }
    var c = f.target || f.srcElement;
    if ("touchend" === b) {
      h = !1;
      r = null;
      if (u && !X) {
        u = !1;
        return;
      }
      X = !1;
    }
    for (var k = [], g = !1; !g && c;) {
      c !== document || X || "touchmove" !== b || (u = h = !0);
      var a = !1;
      k[k.length] = c;
      if (c.v && c.v[b]) {
        for (var d = 0; d < c.v[b].length; d++) {
          var l = c.v[b][d];
          c.f && c.f[b] && c.f[b][l.view] && (c = c.f[b][l.view], l = c.v[b][d]);
          var n = null;
          if (l.tag || l.M) {
            for (var q = 0; q < k.length; q++) {
              var m = k[q], p = m.tagName;
              if (p) {
                l.tag && l.M ? p.toLowerCase() === l.tag && D.s(m, l.M) && (n = m) : l.tag ? p.toLowerCase() === l.tag && (n = m) : l.M && D.s(m, l.M) && (n = m);
                if (n) {
                  n.f || (n.f = {});
                  n.f[b] || (n.f[b] = {});
                  n.f[b][l.view] || (n.f[b][l.view] = c);
                  if (!l.V) {
                    D.m(f, a, g);
                    return;
                  }
                  l.V.call(n, f);
                  g || (g = l.stopBubble);
                  a || (a = l.preventDefault);
                  n = null;
                }
                a && (d = c.v[b].length);
                if (g) {
                  break;
                }
              }
              q !== k.length - 1 || n || (m.f || (m.f = {}), m.f[b] || (m.f[b] = {}), m.f[b][l.view] || (m.f[b][l.view] = c));
            }
          } else {
            k[0].f || (k[0].f = {});
            k[0].f[b] || (k[0].f[b] = {});
            k[0].f[b][l.view] || (k[0].f[b][l.view] = c);
            if (!l.V) {
              D.m(f, a, g);
              return;
            }
            l.V.call(c, f);
            g || (g = l.stopBubble);
            a || (a = l.preventDefault);
          }
          if (a || g) {
            break;
          }
        }
      }
      if (c === document) {
        null !== r || X || "touchstart" !== b || (u = h = !0);
        break;
      }
      c = c.parentNode;
    }
    (a || g) && D.m(f, a, g);
  }
  function p(f) {
    z[f] || (z[f] = !0, document.body.addEventListener(f, m, "touchmove" === f ? V : !1));
  }
  /**
 @this {Node}
 @param {Event} event
 */
function x(f) {
    u = n = h = !0;
    this.removeEventListener("touchmove", x);
    D.m(f, !1, !0);
  }
  var h = !1, u = !1;
  /**
 @const
 @param {Event} event
 @param {boolean=} prevent
 @param {boolean=} stop
 @return {boolean}
 */
D.m = function(f, b, c) {
    c && (f.stopImmediatePropagation && f.stopImmediatePropagation(), f.stopPropagation(), f.cancelBubble = !0);
    b && (f.preventDefault(), f.returnValue = !1);
    return !b;
  };
  D.handleEvent = function(f, b, c, g, h) {
    f || (f = window.event);
    c.call(b, f);
    D.m(f, g, h);
  };
  var z = {}, r = null, g;
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} elem
 @param {string} query
 @param {string} event
 @param {Function} _fn
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 @param {string=} key
 @return {Function}
 */
D.on = function(f, b, c, k, n, a, d) {
    "string" === typeof f && (f = D.query(f));
    if (0 <= f.length) {
      for (var l = 0; l < f.length;) {
        D.on(f[l++], b, c, k, n, a, d);
      }
      return k;
    }
    if ("touchstart" === c || "touchend" === c || "touchmove" === c) {
      if ("undefined" === typeof g) {
        try {
          document.createEvent("TouchEvent"), g = !0;
        } catch (q) {
          g = !1;
        }
      }
      g || ("touchstart" === c && (c = "mousedown"), "touchend" === c && (c = "mouseup"), "touchmove" === c && (c = "mousemove"));
    }
    if ("click" === c) {
      return D.on(f, b, "touchstart", function(a) {
        r || (r = this);
        u = h = !0;
        X = !1;
        k.call(this, a);
      }, n, a, d), f !== window && f !== window.document && D.a(f, "touchAction", "manipulation"), k;
    }
    if ("clickmove" === c) {
      return f !== window && f !== window.document && D.a(f, "touchAction", "manipulation"), D.ea(f, k, n, a, b, d);
    }
    if ("wheelscroll" === c) {
      return D.da(f, k);
    }
    var m = l = "";
    b && ("." === b.charAt(0) ? l = b.substring(1) : 0 < b.indexOf(".") ? (m = b.split(".")[0], l = b.split(".")[1]) : m = b);
    f.v || (f.v = {});
    f.v[c] || p(c);
    f.v[c] || (f.v[c] = []);
    f.v[c].push({tag:m, M:l, V:k, preventDefault:n, stopBubble:a, view:d});
    return k;
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} elem
 @param {string} event
 @param {Function} fn
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 @return {Function}
 */
D.D = function(f, b, c, g, h) {
    return D.on(f, "", b, c, g, h);
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @param {Function} fn
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 @return {Function}
 */
D.Ia = function(f, b, c, g) {
    D.D(f, "touchstart", b, c, g);
    return b;
  };
  var n = !1;
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @param {Function} fn
 @return {Function}
 */
D.ea = function(f, b, c, g, m, a) {
    D.on(f, m, "touchstart", function() {
      n = !1;
      r || (r = this);
      this.addEventListener("touchmove", x, !1);
    }, !1, !1, a);
    D.on(f, m, "touchend", function(a) {
      n ? D.async(function() {
        h = n = !1;
      }, 1) : (this.removeEventListener("touchmove", x), b.call(this, a));
      r = null;
    }, c, g, a);
    return b;
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @param {Function} fn
 @param {boolean=} preventDefault
 @return {Function}
 */
D.Ha = function(f, b) {
    "string" === typeof f && (f = D.query(f));
    D.D(f, "input", D.D(f, "change", b));
    return b;
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @param {Function} fn
 @return {Function}
 */
D.da = function(f, b) {
    (function(b) {
      var c = 0;
      D.D(f, "mousewheel", function(f) {
        this.doScroll ? this.doScroll(0 < f.wheelDelta ? "left" : "right") : 0 < (f.wheelDelta || f.detail) ? this.scrollLeft = c -= this.offsetWidth / 35 : this.scrollLeft = c += this.offsetWidth / 35;
        D.handleEvent(f, this, b, !1, !0);
      });
    })(b);
    return b;
  };
  /**
 @param {(Node|HTMLDocument|Window|NodeList|Array<Node>|string|null)} node
 @param {string} eventType
 */
D.Cb = function(f, b) {
    var c = document.createEvent("MouseEvents");
    c ? (c.initEvent(b, !0, !0), f.dispatchEvent(c)) : (c = f[b] || f["on" + b]) && c();
  };
  /**
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 */
D.La = function(f, b, c, g, h, a) {
    f = D.X(f);
    (function(a, b, g, k) {
      D.D(f, c, function(d) {
        for (var c = d.target || d.srcElement; c && c !== this;) {
          if (D.s(c, a)) {
            b.call(c, d);
            D.m(d, g, k);
            break;
          }
          c = c.parentNode;
        }
      });
    })(b, g, h, a);
    return g;
  };
  /**
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 */
D.Ma = function(f, b, c, g, h, a) {
    f = D.X(f);
    (function(a, b, g, k) {
      D.D(f, c, function(d) {
        for (var c = d.target || d.srcElement; c && c != this;) {
          c.tagName.toLowerCase() === a && (b.call(c, d), D.m(d, g, k)), c = c.parentNode;
        }
      }, !1, !1);
    })(b, g, h, a);
    return g;
  };
  /**
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 */
D.Na = function(f, b, c, g, h, a, d) {
    f = D.X(f);
    (function(a, d, b, c, k) {
      D.D(f, g, function(f) {
        for (var g = f.target || f.srcElement; g && g != this;) {
          g.tagName.toLowerCase() === a && D.s(g, d) && (f.stopImmediatePropagation && f.stopImmediatePropagation(), b.call(g, f), D.m(f, c, k)), g = g.parentNode;
        }
      }, !1, !1);
    })(b, c, h, a, d);
    return h;
  };
})();
/** @const */ D.Jb = {};
/** @const @struct */ D.Storage = function() {
  /**
 @const
 @constructor
 @implements {_storage_interface}
 @this {StorageAdapter}
 @param {!string} store_id
 */
function m(m) {
    /** @type {!string} */ this.j = m;
    /** @type {(Array<string>|null)} */ this.index = this.cache = null;
  }
  /**
 @param {!string=} index
 */
m.prototype.get = function(m) {
    if (this.cache) {
      var p = this.cache;
    } else {
      if (p = window.localStorage.getItem(this.j)) {
        this.cache = p = JSON.parse(p);
      }
    }
    p && m && (p = p[m]);
    return p;
  };
  /**
 @param {(!string|Object<string,*>)} index
 @param {*=} value
 */
m.prototype.set = function(m, x) {
    var h = this.j;
    if ("string" === typeof m) {
      var u = this.get() || {};
      u[m] = x;
    } else {
      u = m || {};
    }
    this.cache = u;
    this.index = null;
    D.stack(function() {
      window.localStorage.setItem(h, JSON.stringify(u));
    });
  };
  /**
 @param {(!string|Object<string,*>)} index
 @param {!*} value
 */
m.prototype.update = function(m, x) {
    var h = this.get() || {};
    if ("string" === typeof m) {
      h[m] = x;
    } else {
      for (var u in m) {
        m.hasOwnProperty(u) && (h[u] = m[u]);
      }
    }
    this.set(h);
  };
  /**
 @param {!string} index
 */
m.prototype.del = function(m) {
    if (m) {
      var p = this.get() || {};
      p[m] = null;
      delete p[m];
      this.set(p);
    }
  };
  m.prototype.clear = function() {
    this.index = this.cache = null;
    window.localStorage.removeItem(this.j);
  };
  m.prototype.keys = function() {
    return this.index || (this.index = D.na(this.get() || {}));
  };
  return m;
}();
/** @const @type {_active_model} */ H = function(m, p) {
  /**
 @constructor
 @implements {_active_model}
 */
function x() {
  }
  /**
 @constructor
 @implements {_model_helper}
 @param {string} key
 */
function h(g, h) {
    /** @type {function(new:_model_class,Object<string,*>)} */ this.H = h;
    this.H.prototype = new z(g, h);
    this.H.constructor = h;
    this.data = p.P[g];
    this.cache = p.F[g];
    this.keys = this.data.keys();
  }
  /**
 @param {Object<string,*>} data
 @param {boolean=} force
 */
function u(g, h) {
    g._id && (g = H[g._type].parse("" + g._id, h));
    for (var f in g) {
      if (g.hasOwnProperty(f)) {
        var b = g[f];
        if (null !== b) {
          if (b.constructor === Object) {
            g[f] = u(b, h);
          } else {
            if (b.constructor === Array) {
              for (var c = 0; c < b.length; c++) {
                b[c]._id && (b[c] = u(b[c], h));
              }
            } else {
              g[f] = b;
            }
          }
        }
      }
    }
    return g;
  }
  /**
 @constructor
 @implements {_model_class}
 @param {string} key
 @param {_model_class} model
 */
function z(g, h) {
    this.modelName = g;
    this.data = p.P[g];
    this.cache = p.F[g];
    g = h.prototype;
    for (var f in g) {
      g.hasOwnProperty(f) && (this[f] = g[f]);
    }
  }
  function r(g, h) {
    var f = {}, b = !1, c;
    for (c in g) {
      if ("mapToViewCache" !== c && g.hasOwnProperty(c) && "_" !== c.charAt(0)) {
        var k = g[c];
        if (k || 0 === k && "id" === c) {
          var n = k.constructor;
          n !== Array && (k = [k]);
          var a = k.length;
          if (a) {
            f[c] = Array(a);
            for (var d = 0; d < a; d++) {
              var l = k[d];
              l.constructor.prototype instanceof z ? (l.save(h), f[c][d] = {_id:"" + l.id, _type:l.constructor.prototype.modelName}, b = !0) : (l.constructor === Object && (l = r(l, h)), l && (f[c][d] = l, b = !0));
            }
          }
          n !== Array && (f[c] = f[c][0]);
        }
      }
    }
    return b ? f : null;
  }
  /**
 @param {string} key
 @param {Function} model
 @return {_model_helper}
 */
x.prototype.register = function(g, n) {
    p.P[g] || (p.P[g] = new D.Storage(g));
    p.F[g] || (p.F[g] = {});
    this[g] = new h(g, n);
    this[g].H.prototype.mapToView = m[g] ? m[g].mapToView : !1;
    return this[g];
  };
  /**
 @param {string} model
 @param {Object<string,*>} data
 @param {boolean=} persistent
 @return {_model_class}
 */
x.prototype.new = function(g, h, f) {
    return this[g].new(h, f);
  };
  /**
 @param {string} model
 @param {Object<string,*>} data
 @return {_model_class}
 */
x.prototype.create = function(g, h) {
    return this[g].create(h);
  };
  /**
 @param {(_model_class|Array<_model_class>|Object<string,*>|Array<Object<string,*>>)} data
 @param {boolean=} persistent
 @param {boolean=} batch
 @return {(_model_class|Array<_model_class>)}
 */
h.prototype.new = function(g, h) {
    g || (g = {});
    if (g.constructor === Array) {
      return this.newFromList(g, h);
    }
    if (g.constructor.prototype instanceof z) {
      return g;
    }
    var f = g.id ? this.parse("" + g.id) : null;
    if (f) {
      f.beforeUpdate && f.beforeUpdate(g);
      g = new this.H(g);
      if (!g) {
        return null;
      }
      g.id = null;
      f.update(g, h);
      if (f.onUpdate) {
        f.onUpdate();
      }
    } else {
      f = new this.H(g);
      if (!f) {
        return null;
      }
      f.beforeCreate && f.beforeCreate();
      f.beforeUpdate && f.beforeUpdate();
      f.beforeSave && f.beforeSave();
      f.save(h);
      if (f.onCreate) {
        f.onCreate();
      }
      if (f.onUpdate) {
        f.onUpdate();
      }
      if (f.onSave) {
        f.onSave();
      }
      this.keys = this.data.keys();
    }
    return f;
  };
  /**
 @param {Object<string,*>} data
 @return {(Array<_model_class>|_model_class)}
 */
h.prototype.create = function(g) {
    return this.new(g, !0);
  };
  /**
 @param {Array<Object<string,*>>} data
 @param {boolean=} persistent
 @return {Array<(_model_class|null)>}
 */
h.prototype.newFromList = function(g, h) {
    if (!g) {
      return [];
    }
    for (var f = g.length, b = Array(f), c = 0, k = 0; k < f; k++) {
      var n = this.new(g[k], h, k < f - 1);
      n && Object.keys(n).length && (b[c++] = n);
    }
    return c === f ? b : b.splice(0, c);
  };
  /**
 @param {Array<Object<string,*>>} data
 @return {Array<(_model_class|null)>}
 */
h.prototype.createFromList = function(g) {
    return this.newFromList(g, !0);
  };
  /**
 @this {(_model_class|_model_helper)}
 @param {string} index
 @param {boolean=} force
 @param {boolean=} recursive
 @return {_model_class}
 */
h.prototype.parse = function(g, h) {
    var f;
    g = "" + g;
    return !h && this.cache[g] || !(f = this.data.get(g)) ? this.cache[g] || null : this.cache[g] = new this.H(u(f, h));
  };
  /**
 @param {string} id
 @return {(_model_class|null)}
 */
h.prototype.find = function(g) {
    return this.parse("" + g);
  };
  /**
 @param {number=} from
 @param {number=} to
 @return {Array<_model_class>}
 */
h.prototype.range = function(g, h) {
    this.keys.length || (this.keys = this.data.keys());
    var f = this.keys, b = f.length, c = h ? g || 0 : 0;
    g = h || g || b;
    g > b && (g = b);
    h = Array(g - c);
    for (b = 0; c < g;) {
      h[b++] = this.parse("" + f[c++]);
    }
    return h;
  };
  /**
 @return {Array<_model_class>}
 */
h.prototype.all = function() {
    return this.range();
  };
  /**
 @return {number}
 */
h.prototype.count = function() {
    return this.keys.length || (this.keys = this.data.keys()).length;
  };
  /**
 @param {string} field
 @param {*} value
 */
h.prototype.findBy = function(g, h) {
    this.keys.length || (this.keys = this.data.keys());
    for (var f = this.keys, b = 0; b < f.length; b++) {
      var c = this.parse("" + f[b]);
      if (c[g] === h) {
        return c;
      }
    }
  };
  /**
 @param {(Function|Array<string,*>)} where
 @param {Function=} fn_compare
 */
h.prototype.each = function(g, h) {
    this.keys.length || (this.keys = this.data.keys());
    for (var f = this.keys, b = [], c = 0, k, m = 0; m < f.length; m++) {
      var a = this.parse("" + f[m]), d;
      k = !0;
      if (h) {
        for (d in g) {
          if (g.hasOwnProperty(d) && (k = h(a[d], g[d]), !k)) {
            break;
          }
        }
      } else {
        k = g.call(a);
      }
      k && (b[c++] = a);
    }
    return b;
  };
  /**
 @param {Array<string,*>} where
 @param {Function=} filter
 */
h.prototype.where = function(g, h) {
    return this.each(g, h || function(f, b) {
      return f === b;
    });
  };
  /**
 @param {Array<string,*>} where
 @param {Function=} filter
 */
h.prototype.like = function(g, h) {
    return this.each(g, h || function(f, b) {
      return ("" + f).replace(/ /g, "").toLowerCase() === ("" + b).replace(/ /g, "").toLowerCase();
    });
  };
  /**
 @param {Array<_model_class>} items
 */
h.prototype.saveAll = function(g, h) {
    var f;
    if (g && (f = g.length)) {
      for (var b = 0; b < f; b++) {
        g[b].save(h);
      }
    }
  };
  /**
 @param {Array<_model_class>=} items
 */
h.prototype.deleteAll = function(g) {
    g || (g = this.all());
    for (var h = 0, f = g.length; h < f; h++) {
      g[h].delete(h < f - 1);
    }
  };
  /**
 @param {Array<_model_class>} items
 @param {Array<string,*>} params
 @param {boolean=} persistent
 */
h.prototype.updateAll = function(g, h, f) {
    var b;
    if (g && (b = g.length)) {
      for (var c = 0; c < b; c++) {
        g[c].update(h, f);
      }
    }
  };
  /**
 @this {_model_class}
 @param {boolean=} persistent
 */
z.prototype.save = function(g) {
    var h = this.id;
    if (!D.b(h)) {
      return this;
    }
    g && function(f) {
      D.stack(function() {
        var b = r(f, g);
        try {
          f.data.set("" + f.id, b), H[f.modelName].keys = f.data.keys();
        } catch (c) {
        }
      });
    }(this);
    h = "" + h;
    return this.cache[h] || (this.cache[h] = this);
  };
  /**
 @this {_model_class}
 @param {Object<string,*>} params
 @param {boolean=} persistent
 */
z.prototype.update = function(g, h) {
    var f = !1, b;
    for (b in g) {
      if (g.hasOwnProperty(b)) {
        var c = g[b];
        D.b(this[b]) ? this[b] === c || !c && 0 !== c && !1 !== c && "" !== c || c.constructor === Array && !c.length || c.constructor === Object && !Object.keys(c || {}).length || (this[b] = c, f = !0) : (this[b] = c, f = !0);
      }
    }
    f && (this.mapToViewCache = void 0, h && this.save(h));
    return this;
  };
  /**
 @this {_model_class}
 */
z.prototype.restore = function() {
    return this.prototype.parse.call(this, "" + this.id, !0);
  };
  /**
 @this {_model_class}
 @param {boolean=} batch
 */
z.prototype.delete = function(g) {
    H[this.modelName].data.del("" + this.id);
    delete H[this.modelName].cache["" + this.id];
    g || (H[this.modelName].keys = this.data.keys());
  };
  return new x;
}(R, Q);
/** @const */ K = {};
(function(m, p) {
  /**
 @param {string} _view
 @param {Array<_model_class>=} data
 @return {string}
 */
function x(h, m) {
    m || (m = [{}]);
    m.constructor !== Array && (m = [m]);
    h = I[h];
    for (var u = "", r, g = 0; g < m.length; g++) {
      if (r = m[g]) {
        for (var n = r.mapToView, f = r.mapToViewCache || (r.mapToViewCache = {}), b, c, k, t = 0; t < h.length; t++) {
          c = h[t];
          var a = c.data, d = c.map, l;
          if (null === r || c.if && !1 === c.if(r)) {
            if (c.else) {
              a = [c.else];
            } else {
              continue;
            }
          }
          var w = 0, q = 0, p = 1, x = c.loop;
          if (x) {
            if (-1 !== x.indexOf(",")) {
              var A = x.split(",");
              3 === A.length ? (w = parseInt(A[1], 10), q = parseInt(A[2], 10)) : q = parseInt(A[1], 10);
              x = A[0];
            }
            -1 !== x.indexOf(".") ? (b = x.split("."), c = b[0], k = b[1], b = b[2] || !1, A = r[c] ? r[c][k] ? r[c][k][b] ? r[c][k][b] : r[c][k] : r[c] : r) : A = r[x];
            p = A ? q && q <= A.length ? q : A.length : 0;
          }
          q = r;
          for (w = w || 0; w < p; w++) {
            var F = "";
            x && (q = A[w]);
            if (q) {
              q.mapToView ? (n = q.mapToView, f = q.mapToViewCache || (q.mapToViewCache = {})) : D.b(q.mapToView) && (f = q.mapToViewCache || (q.mapToViewCache = {}));
              q.index || (q.index = x ? w : g);
              d.length && (F += a[0]);
              for (var C = 1; C < d.length; C += 2) {
                var B = a[C], y = d[C];
                if (D.b(f[y])) {
                  F += f[y];
                } else {
                  if (-1 !== y.indexOf(".")) {
                    if (b = y.split("."), c = b[0], k = b[1], b = b[2] || !1, -1 !== (l = c.indexOf("["))) {
                      var ea = parseInt(c.substring(l + 1, c.indexOf("]")), 10);
                      c = c.substring(0, l);
                      if (l = q[c][ea]) {
                        n && n[c] && n[c][k] ? (B = b && n[c][k][b] ? n[c][k][b](l[k][b], l) : n[c][k](l[k], l), f[y] = B) : B = l[k];
                      }
                    } else {
                      if (l = q[c]) {
                        n && n[c] && n[c][k] ? b ? (B = D.b(l[k]) ? D.b(l[k][b]) ? l[k][b] : l[k] : l || q, n[c][k][b] && (B = n[c][k][b](B, l || q), f[y] = B)) : (B = n[c][k](l[k], l || q), f[y] = B) : B = l[k] && l[k][b] ? l[k][b] : D.b(l[k]) ? l[k] : l || q;
                      }
                    }
                  } else {
                    n && n[y] ? (B = n[y](q[y], q), f[y] = B) : "item" === y ? B = q : B = q[y];
                  }
                  F += B;
                }
                C + 1 < a.length && (F += a[C + 1]);
              }
            }
            if (!x || q) {
              u += F;
            }
          }
        }
      }
    }
    return u;
  }
  /**
 @const
 @param {(Array<*>|string)} route
 @param {(Function|Object<string,*>)=} params
 @param {Function=} callback
 @param {Function=} error
 @param {Function=} update_cache
 */
m.request = function(h, u, z, r, g) {
    if (h.constructor === Array) {
      return m.requestBatch(h, u);
    }
    D.b(u, "function") && (g = r, r = z, z = u, u = null);
    D.b(p[h]) || (p[h] = {});
    u || (u = M[h] ? M[h]() : p[h].params || null);
    (function(g, f, b, c) {
      var h = f.action;
      E.g = h || E.g || "";
      if (!c && h) {
        E.pa(h, function(a) {
          m.request(g, u, b, r, a);
        });
      } else {
        f.header || (f.header = {});
        f.header.Accept || (f.header.Accept = "application/json");
        f.header["Content-Type"] || (f.header["Content-Type"] = "application/json");
        for (var n in W) {
          W.hasOwnProperty(n) && (f.header[n] = W[n]);
        }
        -1 !== (h = g.indexOf("/:")) && (h = g.substring(h + 2, g.indexOf("/", h + 2)), g = g.replace("/:" + h, "/" + u[h]));
        h = "GET";
        -1 !== g.indexOf("GET:") ? g = g.substring(4) : -1 !== g.indexOf("POST:") ? (h = "POST", g = g.substring(5)) : -1 !== g.indexOf("DELETE:") ? (h = "DELETE", g = g.substring(7)) : -1 !== g.indexOf("PATCH:") && (h = "PATCH", g = g.substring(6));
        var a = function(a) {
          f.field && (a = a[f.field] || []);
          f.filter && (a = a.filter(f.filter));
          f.arrayfilter && (a = f.arrayfilter(a, u));
          f.sort && (a = a.sort(f.sort));
          f.limit && a.length > f.limit && a.splice(0, a.length - f.limit);
          f.last && a.length > f.last && a.splice(0, f.last);
          f.map && a.map(f.map);
          f.arraymap && f.arraymap(a, u);
          c && c();
          b || (b = f.do ? f.do.charAt ? O[f.do] : f.do : f.to ? m[f.to] : null);
          b && b(a, u);
        };
        D.fa({url:"localhost" + (f.url || g), params:u, type:f.type || h, header:f.header, cache:f.cache, clear:f.clear, success:a, error:function(d, b) {
          f.default && a(f.default());
          r ? r(d, b) : f.error && f.error(d, b);
        }});
      }
    })(h, p[h], z, g);
  };
  /**
 @const
 @param {Array<*>} requests
 @param {Function=} callback
 */
m.requestBatch = function(h, u) {
    for (var z = 0; z < h.length; z++) {
      (function(h, g) {
        D.b(h, "string") && (h = [h, null, m[p[h].to]]);
        m.request(h[0], h[1], function(m) {
          if (h[2]) {
            h[2](m);
          }
          g && g();
        });
      })(h[z], z === h.length - 1 ? u : null);
    }
  };
  /**
 @const
 @param {Array<*>} _requests
 @param {Function=} _callback
 @param {number=} i
 */
m.requestSync = function(h, u, z) {
    var r = h[z || (z = 0)];
    D.b(r, "string") && (r = [r, null, m[p[r].to]]);
    m.request(r[0], r[1], function(g) {
      if (r[2]) {
        r[2](g);
      }
      ++z < h.length ? m.requestSync(h, u, z) : u && u();
    });
  };
  /**
 @param view
 @param data
 */
m.build = function(h, m) {
    return x(h, m);
  };
  /**
 @const
 @param {(_view_model|string)} _target
 @param {Array<_pattern_struct>=} _data
 */
m.render = function(h, m) {
    E.Ca(h);
    if (m) {
      var p = D.o(h);
      D.Ba(p);
      D.R(m, p);
    } else {
      h.data && (p = "string" === typeof h.target ? D.o(h.target) : h.target) && (m = (m = h.data.constructor === Array) && h.data.length || !m && h.data ? x(h.view, h.data) : h.default ? h.default.view ? x(h.default.view, h.default.data) : x(h.default) : "", D.h(p, m, function() {
        h.callback && (D.b(h.callback, "string") ? O[h.callback].call(p, h.data) : h.callback.call(p, h.data));
      }));
    }
  };
  /**
 @param {string=} lang
 */
m.ia = function(h) {
    for (var m = D.w("i18n"), p = 0; p < m.length; p++) {
      var r = m[p];
      D.ca(r, (T[h || "en"] || T.en)[r.classList ? r.classList[1] : r.className.split(" ")[1]]);
    }
  };
})(K, L);
/** @const */ E = {};
(function(m, p, x, h) {
  function u(a) {
    if (!c && b) {
      a.N && (a = a.N);
      t = (a.touches || a.changedTouches)[0].pageY;
      var d = D.Math.min(t - k, 50);
      t > k ? (X = !0, D.m(a, !0, !0), D.a(this.firstElementChild, {opacity:D.Math.max(4E-4 * d * d, 0), transform:"translateY(" + d + "px)"}), 50 < t - k ? D.a(this.firstElementChild.nextElementSibling, "transform", "translateY(" + (50 + Math.sqrt(15 * (t - k - 50)) | 0) + "px)") : D.a(this.firstElementChild.nextElementSibling, "transform", "translateY(" + (t - k) + "px)")) : b = X = !1;
    } else {
      c || 0 !== this.scrollTop || 0 !== this.firstElementChild.nextElementSibling.scrollTop ? X = !1 : (a.N && (a = a.N), k = (a.touches || a.changedTouches)[0].pageY, b = !0);
    }
  }
  /**
 @param {string} _target
 */
m.Db = function(a) {
    m.g = a || "";
    -1 !== a.indexOf("-") && (a = a.split("-")[0]);
    if (D.o("btn-view-" + a)) {
      var d = D.l("td", "toolbar");
      for (var b = 0; b < d.length; b++) {
        d[b].id !== "btn-view-" + a && D.A(d[b], "active");
      }
      D.B("#btn-view-" + a, "active");
    }
    D.a("#view-" + a, {zIndex:1, visibility:"visible"});
    d = D.w("view");
    for (b = 0; b < d.length; b++) {
      d[b].id !== "view-" + a && D.a(d[b], {zIndex:-1, visibility:"hidden"});
    }
  };
  var z = {};
  m.g = "";
  /**
 @param {string=} color
 */
m.K = function(a) {
    a = a.target || a;
    a = D.o(a);
    D.h(a, "", function() {
    });
  };
  m.Ca = function(a) {
    a = a.target || a;
    z[a] && (z[a].stop(), z[a] = !1);
  };
  var r = !1;
  m.Zb = function(a, d, b) {
    var c = "content-" + a + "-layer", f = "content-" + d + "-layer";
    D.s(c, "slider-left") ? D.s(f, "slider-left") && (r = !r, D.A(f, "slider-left")) : (r = !r, D.B(c, "slider-left"));
    (r = !r) ? (D.a("#nav-" + a, "display", "none"), D.a("#nav-" + d, "display", "block"), D.B(c, "active"), D.B(f, "active"), b && ("" === D.W("content-" + d) && m.K("content-" + d), b())) : (D.a("#nav-" + d, "display", "none"), D.a("#nav-" + a, "display", "block"), D.A(c, "active"), D.A(f, "active"));
  };
  var g = "", n = "", f = {};
  /**
 @param _wrapper
 @param {(Element|string)=} preloader_target
 @param {boolean=} hideStatusbar
 */
m.Vb = function(a, d, b) {
    d && (D.h(d, ""), m.K(d), f[a] = d);
    D.a(a, {transition:"none", opacity:0, transform:"scale(0.8)", zIndex:3, display:"block"});
    D.c(function() {
      n && n !== g && D.a(n, "zIndex", 1);
      g && D.a(g, "zIndex", 2);
      D.a(a, {transition:"transform 0.2s ease-out, opacity 0.2s ease-out", opacity:1, transform:"scale(1)", zIndex:3});
      n = g;
      g = a;
    });
    D.b(b) || (b = !D.s(D.l("header", a)[0] || a, "status-bar"));
  };
  m.Pb = function(a, b) {
    var d = b;
    D.a(a, {transform:"scale(0.8)", opacity:0});
    D.c(function() {
      D.a(a, {display:"none", zIndex:2});
      f[a] && (D.h(f[a], "", !0), f[a] = !1);
      n = g;
      g = "";
      D.b(d) || (d = !D.s(D.l("header", a)[0] || a, "status-bar"));
    }, 200);
  };
  /**
 @param _wrapper
 @param {(Element|string)=} preloader_target
 @param {boolean=} hideStatusbar
 */
m.Wb = function(a, b, c) {
    b && D.h(b, "", function() {
      m.K(b);
      f[a] = b;
    });
    D.a(a, {transition:"none", transform:"translateY(100%)", zIndex:3, display:"block"});
    D.c(function() {
      n && n !== g && D.a(n, "zIndex", 1);
      g && D.a(g, "zIndex", 2);
      D.a(a, {transition:"transform 0.3s ease-out", transform:"translateY(0%)", zIndex:3});
      n = g;
      g = a;
    });
    D.b(c) || (c = !D.s(D.l("header", a)[0] || a, "status-bar"));
  };
  m.Xb = function(a, b) {
    var d = b;
    D.a(a, {transform:"translateY(100%)"});
    D.c(function() {
      D.a(a, {display:"none", zIndex:0});
      f[a] && (D.h(f[a], "", !0), f[a] = !1);
      n = g;
      g = "";
      D.b(d) || (d = !D.s(D.l("header", a)[0] || a, "status-bar"));
    }, 200);
  };
  /**
 @param _wrapper
 @param {(Element|string)=} preloader_target
 @param {boolean=} hideStatusbar
 */
m.Yb = function(a, b, c) {
    b && D.h(b, "", function() {
      m.K(b);
      f[a] = b;
    });
    D.a(a, {transition:"none", transform:"translateX(100%)", zIndex:3, display:"block"});
    D.c(function() {
      n && n !== g && D.a(n, "zIndex", 1);
      g && D.a(g, "zIndex", 2);
      D.B("view-" + m.g, "active");
      D.a(a, {transition:"transform 0.25s ease-out", transform:"translateX(0%)", zIndex:3});
      n = g;
      g = a;
    });
    D.b(c) || (c = !D.s(D.l("header", a)[0] || a, "status-bar"));
  };
  m.$b = function(a, b) {
    var d = b;
    D.A("#view-" + m.g, "active");
    D.a("#view-" + m.g, "transform", "");
    D.a(a, {transform:"translateX(100%)"});
    D.c(function() {
      D.a(a, {display:"none", zIndex:2});
      f[a] && (D.h(f[a], "", !0), f[a] = !1);
      n = g;
      g = "";
      D.b(d) || (d = !D.s(D.l("header", a)[0] || a, "status-bar"));
    }, 200);
  };
  /**
 @param {!string} message
 */
m.vb = function(a) {
    D.h("#message-content", a, function() {
      D.a("#message-wrapper", "display", "block");
      D.c(function() {
        D.a("#message-wrapper", "opacity", 1);
        D.a("#message-inner", {opacity:1, transform:"scale(1)"});
      });
    });
  };
  m.Ob = function() {
    D.a("#message-inner", {transform:"scale(0.8)", opacity:0});
    D.a("#message-wrapper", "opacity", 0);
    D.c(function() {
      D.a("#message-wrapper", "display", "none");
      D.h("#message-content", "", !0);
    }, 200);
  };
  /**
 @param {!string} message
 @param {!Function} fn_confirm
 */
m.Ub = function(a, b) {
    D.h("#confirmation-content", a, function() {
      D.a("#confirmation-wrapper", "display", "block");
      D.c(function() {
        D.a("#confirmation-wrapper", "opacity", 1);
        D.a("#confirmation-inner", "transform", "scale(1)");
      });
    });
    D.o("confirmation-yes").ontouchstart = b;
  };
  m.ra = function() {
    D.a("#confirmation-wrapper", "opacity", 0);
    D.a("#confirmation-inner", "transform", "scale(0.9)");
    D.c(function() {
      D.a("#confirmation-wrapper", "display", "none");
      D.h("#confirmation-content", "", !0);
    }, 200);
  };
  /** @const */ h["confirmation-yes"] = {on:"click", do:function(a) {
    !1 === (this.firstElementChild && this.firstElementChild.href) ? D.m(a, !0, !0) : D.async(function() {
      D.h("#confirmation-yes", "Ja");
    }, 200);
    this.ontouchstart.call(this, a);
    m.ra();
  }, stopBubble:!1, preventDefault:!1};
  /** @const */ h["confirmation-no"] = {on:"click", do:function() {
    D.h("#confirmation-yes", "Ja");
    m.ra();
  }, stopBubble:!0, preventDefault:!0};
  /**
 @param {string} _key
 @param {Function=} _callback
 @param {boolean=} force
 */
m.pa = function(a, b) {
    var d = a;
    -1 !== a.indexOf("-") && (d = a.split("-")[0]);
    if (m.g === a) {
      m.g === a && m.Db(d);
      var c = D.o("content-" + a);
      if ("" === D.W(c)) {
        var f = x.$.get(m.g = a);
        f && Y["content-" + a] !== f.crc ? (Y["content-" + a] = f.crc, D.h(c, x.ka(f.cache), !0)) : b && m.K("content-" + a);
      } else {
        if (m.g === a) {
          for (/**
 @suppress {duplicate}
 */
var f = D.l("main", D.o("content-" + a).parentNode.parentNode.parentNode), g = 0; g < f.length; g++) {
            D.Da(f[g]);
          }
        }
      }
      f = function() {
        m.Ca("content-" + a);
        var b = D.W(c);
        b && D.async(function() {
          x.$.set(d, {cache:x.ja(b), crc:Y["content-" + a] || 1});
        });
      };
      b ? b(f) : f();
    }
  };
  /**
 @param {(HTMLElement|Element|string)} el
 @param {Object<string,(Function|string|number|boolean)>=} config
 */
m.Kb = function(a, b) {
    function d(a) {
      X = !0;
      f = a.changedTouches[0].pageX - c;
      k ? k.call(this, f) : 0 <= f && (!g || f < screen.width / 100 * g) && D.a(this.parentNode, "transform", "translateX(" + f + "px)");
      this.parentNode.id && D.o("view-" + m.g) !== this.parentNode && D.a("view-" + m.g, "transform", "translateX(-" + (25 - f / screen.width * 25) + "%)");
      D.m(a, !0, !0);
    }
    var c, f, g = b ? b.limit : !1, h = b ? b.start : !1, k = b ? b.move : !1, n = b ? b.end : !1, t = b ? b.finish : !1;
    D.on(a, "", "touchstart", function(a) {
      X = !0;
      a = a.changedTouches[0];
      f = 0;
      c = a.pageX;
      D.B([this.parentNode, "#view-" + m.g], "no-transition");
      D.A("#view-" + m.g, "active");
      h && h.call(this, f);
      this.addEventListener("touchmove", d, !1);
    }, !0, !0);
    D.on(a, "", "touchend", function(a) {
      X = !1;
      f = a.changedTouches[0].pageX - c;
      if (n) {
        n.call(this, f);
      } else {
        if (f < screen.width / 3.1416) {
          D.a(this.parentNode, "transform", "translateX(0px)"), D.a("#view-" + m.g, "transform", "translateX(-25%)"), D.c(function() {
            D.a("#view-" + m.g, "transform", "");
          }, 200);
        } else {
          g ? D.a(this.parentNode, {transform:"translateX(" + g + "%)"}) : D.a(this.parentNode, {transform:"translateX(100%)"});
          var b = this;
          D.c(function() {
            D.a(b.parentNode, "display", "none");
          }, 200);
          D.a("#view-" + m.g, "transform", "");
          t && t.call(this, f);
        }
      }
      D.A([this.parentNode, "#view-" + m.g], "no-transition");
      this.removeEventListener("touchmove", d);
    }, !0, !0);
  };
  var b = !1, c = !1, k = 0, t = 0;
  /**
 @param {(HTMLElement|Element|string)} el
 */
m.Qb = function(a, d) {
    D.on(a, "", "touchstart", function(a) {
      c || 0 !== this.scrollTop || 0 !== this.firstElementChild.nextElementSibling.scrollTop || (X = !0, a.N && (a = a.N), k = t = (a.touches || a.changedTouches)[0].pageY, b = !0);
      this.addEventListener("touchmove", u, !1);
    }, !1, !1);
    D.on(a, "", "touchend", function(f) {
      X = !1;
      !c && b && (t > k ? (D.m(f, !0, !0), 50 <= D.Math.min(t - k, 50) ? (D.a(a.firstElementChild.nextElementSibling, "transform", "translateY(50px)"), c = !0, K.request(d, {}, function(f) {
        if (L[d].to) {
          K[L[d].to](f);
        } else {
          if (L[d].do) {
            if (D.b(L[d].do, "string")) {
              O[L[d].do](f);
            } else {
              L[d].do(f);
            }
          }
        }
        D.a(a.firstElementChild.nextElementSibling, "transform", "translateY(0px)");
        D.a(a.firstElementChild, {opacity:0, transform:"translateY(0px)"});
        c = b = !1;
      })) : (D.a(a.firstElementChild.nextElementSibling, "transform", "translateY(0px)"), D.a(a.firstElementChild, {opacity:0, transform:"translateY(0px)"}), b = !1)) : c = b = !1);
      this.removeEventListener("touchmove", u);
    }, !1, !1);
  };
})(E, K, Q, N);
S = {/**
 @param {!string} name
 @param {!Function} worker
 @param {!Function} callback
 */
register:function(m, p, x) {
  p = URL.createObjectURL ? URL.createObjectURL(new Blob(["(" + p.toString() + ")()"], {type:"text/javascript"})) : "worker/" + m + ".js";
  S[m] = new Worker(p);
  S[m].onmessage = x;
}};
(function(m) {
  /**
 @const
 @this {HTMLElement}
 */
function p(h) {
    if (this.dataset && "integer" === this.dataset.validateType) {
      var m = this.value, p = !1;
      if (m) {
        for (var r = 0; r < m.length; r++) {
          -1 === (this.dataset.validateCharset || "0123456789").indexOf(m[r]) && (m = m.replace(m[r], ""), p = !0);
        }
      } else {
        this.value = "";
      }
      p && (this.value = m);
      if ("keypress" === h.type) {
        x = !0;
      } else {
        if (x) {
          return;
        }
      }
      /**
 @suppress {duplicate}
 */
var p = !0;
      if (x) {
        r = h.charCode;
        var g = String.fromCharCode(r);
      } else {
        g = h.keyCode || h.which, r = String(g).charCodeAt(0);
      }
      48 > r || 57 < r ? p = !1 : (r = parseInt(m + (x ? g : ""), 10), this.dataset.validateMin && r < parseInt(this.dataset.validateMin, 10) ? p = !1 : this.dataset.validateMax && r > parseInt(this.dataset.validateMax, 10) && (p = !1));
      if (!1 === p) {
        return x || (this.value = m.substring(0, m.length - 1)), D.m(h, !0, !1);
      }
    }
  }
  m._document || (m._document = []);
  /** @const */ m._document = m._document.concat([{on:"keypress", if:".form-validate", do:p, stopBubble:!1, preventDefault:!1}, {on:"keyup", if:".form-validate", do:p, stopBubble:!1, preventDefault:!1}]);
  var x = !1;
})(N);
/** @const */ ja = {};
/** @export @dict */ window.AMD = {define:e.define, require:e.require, install:e.install, "export":e.Pa, build:e.build, out:e.lb, run:e.tb};
/** @export */ window.define = e.define;
/** @export */ window.require = e.require;
/** @export @dict */ window.APP = {MODEL:H, VIEW:I, CONTROLLER:{build:K.build, render:K.render, changeLanguage:K.ia}, ROUTE:L, PAYLOAD:M, EVENT:N, HANDLER:O, HELPER:aa, STORAGE:{compress:Q.ja, decompress:Q.ka}, MAPPER:R, LAYOUT:{}, WORKER:{register:S.register}, DEVICE:{}, LANG:T, CONFIG:{LANG:U, PROC:0, GZIP:!1, PASSIVE_EVENTS:!1, EVENT_OPTIONS:V, SHOW_DEBUG:!1, SHOW_GRAPH:!1, SHOW_STATS:!1}, VARS:{CURRENT_USER:{}, HEADER:W, AUTH:null, ZOOM:1, WIDTH:0, HEIGHT:0, DPR:ca}, STATS:{}, SETTINGS:da, CACHE:{}, 
CRC32:Y, PLUGIN:fa, INTERFACE:ga, ADAPTER:ha, SERVICE:ia, REQUIRE:ja, CHANGELOG:{}, MIGRATE:{}};
I = {};
Z.u = {};
ka = function() {
};
la = oa = function() {
};
ba.Z = [];
/** @export @dict */ window.CORE = {isType:D.b, isDefined:D.ab, hasValue:D.qa, isArray:D.isArray, isObject:D.gb, hasValues:D.Wa, isEmpty:D.bb, isBlank:D.Za, getNode:D.X, console:{log:D.console.log, warn:D.console.warn, err:D.console.Oa, info:D.console.info}, query:D.query, getById:D.o, getByClass:D.w, getByTag:D.l, getValue:D.Ua, setValue:D.ub, parseNode:D.O, buildPattern:D.R, buildData:D.Ja, removeNodes:D.Ba, ajax:D.fa, paramsToString:D.Aa, unique:D.unique, reverse:D.reverse, merge:D.kb, shuffle:D.Ea, 
fill:D.fill, sort:D.sort, sortAsc:D.wb, sortDesc:D.xb, sortNum:D.yb, sortNumAsc:D.zb, sortNumDesc:D.Ab, replace:D.replace, count:D.count, formatDate:D.Ra, formatNumber:D.Sa, preloadImages:D.nb, async:D.async, stack:D.stack, getStackLength:D.Ta, loadScript:D.ib, loadStyle:D.jb, time:D.time, capitalize:D.ha, prefix:D.prefix, crc32:D.Ka, registerEach:D.qb, registerMap:D.sb, registerFilter:D.rb, contains:D.contains, hasKeys:D.Va, getKeys:D.na, imageToDataUrl:D.Ya, Math:{min:D.Math.min, max:D.Math.max, 
rad:D.Math.ob, cos:D.Math.cos, sin:D.Math.sin, round:D.Math.round, rand:D.Math.pb, abs:D.Math.abs}, Browser:{isOpera:D.C.za, isFirefox:D.C.cb, isSafari:D.C.hb, isMSIE:D.C.eb, isChrome:D.C.$a}, System:{isIphone:D.i.xa, isIpod:D.i.ya, isIpad:D.i.wa, isAndroid:D.i.ta, isIOS:D.i.va, isMobile:D.i.fb}, hasClass:D.s, addClass:D.B, removeClass:D.A, toggleClass:D.Fa, getStyle:D.J, setStyle:D.a, toggleStyle:D.Bb, css:D.S, addCssRule:D.Ga, setTextContent:D.ca, setHTML:D.h, getHTML:D.W, paint:D.c, clear:D.clear, 
animate:D.animate, transition:D.transition, scrollTo:D.scrollTo, scrollToTop:D.Da, preventEvent:D.m, handleEvent:D.handleEvent, on:D.on, addEvent:D.D, addTouchEvent:D.Ia, addTouchMoveEvent:D.ea, addInputEvent:D.Ha, addMouseWheelScroll:D.da, triggerMouseEvent:D.Cb, delegateByClass:D.La, delegateByTag:D.Ma, delegateByTagClass:D.Na, Storage:D.Storage};
(function() {
  function m() {
  }
  function p() {
  }
  function x() {
    K.ia(U);
  }
  function h() {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {get:function() {
        V = {passive:!0};
      }}));
    } catch (v) {
    }
    for (var b in N) {
      if (N.hasOwnProperty(b)) {
        var a = N[b];
        if (a) {
          var d = "document" === b || "_document" === b ? document : "body" === b ? document.body : D.o(b);
          if (d && a) {
            a.length || (a = [a]);
            for (var c = 0; c < a.length; c++) {
              var f = a[c], g = f.to ? function(a) {
                return function(b) {
                  K.request(a.to, M[a.to] ? M[a.to].call(this, b) : L[a.to].params);
                };
              }(f) : D.b(f.do, "string") ? O[f.do] : f.do || (f.go ? function(a) {
                return function() {
                  E.pa(E.g = a.go);
                };
              }(f) : void 0);
              if (f.if) {
                D.on(d, f.if, f.on, g, f.preventDefault, f.stopBubble, b);
              } else {
                D.on(d, "", f.on, g, f.preventDefault, f.stopBubble, b);
              }
            }
          }
        }
      }
    }
  }
  function u() {
    var b = I, a;
    for (a in b) {
      if (b.hasOwnProperty(a)) {
        for (var d = b[a], c = 0; c < d.length; c++) {
          /** @type {_template_struct} */ var f = d[c];
          if (f.include) {
            for (var g = 0; g < b[f.include].length; g++) {
              g ? d.splice(c + g, 0, b[f.include][g]) : d[c] = b[f.include][g];
            }
            f = d[c];
          }
          f.if && D.b(f.if, "string") && (f.if = Function("val", "return (" + f.if + ") ? true : false;"));
        }
      }
    }
  }
  function z() {
    var b = ba.Z;
    if (b) {
      for (var a = "", d = 0; d < b.length; d++) {
        for (var c = 0; c < Z.u[b[d]].length; c++) {
          var f = Z.u[b[d]][c], g = f.include;
          if (g) {
            if (Z.u[g]) {
              for (var h = 0; h < Z.u[g].length; h++) {
                h ? Z.u[b[d]].splice(c + h, 0, Z.u[g][h]) : Z.u[b[d]][c] = f = Z.u[g][h];
              }
            } else {
              if (I[g]) {
                for (h = 0; h < I[g].length; h++) {
                  h ? Z.u[b[d]].splice(c + h, 0, I[g][h]) : Z.u[b[d]][c] = f = I[g][h];
                }
              }
            }
          }
          a += f.data[0];
        }
      }
      delete Z.u;
      delete ba.Z;
      b = document.createElement("div");
      D.h(b, a, !1);
      for (d = b.childNodes.length - 1; 0 <= d; d--) {
        document.body.insertBefore(b.childNodes[d], document.body.childNodes[0]);
      }
    }
  }
  function r() {
  }
  function g() {
    U = (navigator.language || navigator.userLanguage || "en").substring(0, 2);
  }
  function n() {
  }
  function f() {
    da = new D.Storage("app_settings");
    Q.$ = new D.Storage("app_view");
  }
  function b() {
    la();
    D.i.ua ? document.removeEventListener("deviceready", c) : (document.removeEventListener("ready", c), window.removeEventListener("load", c));
    c = m = h = u = x = z = r = g = n = p = f = oa = la = ka = null;
  }
  function c() {
    k || (k = !0, ka(), D.stack([f, p, n, g, r, z, x, u, h, m, b, function() {
      b = null;
    }]));
  }
  var k = !1;
  D.i.ua ? document.addEventListener("deviceready", c, !1) : (window.addEventListener("load", c, !1), document.addEventListener("ready", c, !1));
})();
}).call(this);
