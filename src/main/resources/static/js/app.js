/*! For license information please see app.js.LICENSE.txt */
!function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var s = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var s in t) n.d(i, s, function (e) {
            return t[e]
        }.bind(null, s));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 0)
}({
    0: function (t, e, n) {
        n(1), n(11), t.exports = n(16)
    }, 1: function (t, e, n) {
        n(7)
    }, 11: function (t, e) {
    }, 16: function (t, e) {
    }, 7: function (t, e, n) {
        "use strict";
        n.r(e), n.d(e, "Alert", (function () {
            return he
        })), n.d(e, "Button", (function () {
            return ue
        })), n.d(e, "Carousel", (function () {
            return Le
        })), n.d(e, "Collapse", (function () {
            return xe
        })), n.d(e, "Dropdown", (function () {
            return Be
        })), n.d(e, "Modal", (function () {
            return Ge
        })), n.d(e, "Offcanvas", (function () {
            return sn
        })), n.d(e, "Popover", (function () {
            return En
        })), n.d(e, "ScrollSpy", (function () {
            return On
        })), n.d(e, "Tab", (function () {
            return Ln
        })), n.d(e, "Toast", (function () {
            return xn
        })), n.d(e, "Tooltip", (function () {
            return _n
        }));
        var i = {};
        n.r(i), n.d(i, "top", (function () {
            return s
        })), n.d(i, "bottom", (function () {
            return o
        })), n.d(i, "right", (function () {
            return r
        })), n.d(i, "left", (function () {
            return a
        })), n.d(i, "auto", (function () {
            return l
        })), n.d(i, "basePlacements", (function () {
            return c
        })), n.d(i, "start", (function () {
            return d
        })), n.d(i, "end", (function () {
            return h
        })), n.d(i, "clippingParents", (function () {
            return u
        })), n.d(i, "viewport", (function () {
            return fc
        })), n.d(i, "popper", (function () {
            return p
        })), n.d(i, "reference", (function () {
            return g
        })), n.d(i, "variationPlacements", (function () {
            return m
        })), n.d(i, "placements", (function () {
            return _
        })), n.d(i, "beforeRead", (function () {
            return b
        })), n.d(i, "read", (function () {
            return v
        })), n.d(i, "afterRead", (function () {
            return y
        })), n.d(i, "beforeMain", (function () {
            return w
        })), n.d(i, "main", (function () {
            return E
        })), n.d(i, "afterMain", (function () {
            return T
        })), n.d(i, "beforeWrite", (function () {
            return A
        })), n.d(i, "write", (function () {
            return O
        })), n.d(i, "afterWrite", (function () {
            return L
        })), n.d(i, "modifierPhases", (function () {
            return k
        })), n.d(i, "applyStyles", (function () {
            return j
        })), n.d(i, "arrow", (function () {
            return Y
        })), n.d(i, "computeStyles", (function () {
            return X
        })), n.d(i, "eventListeners", (function () {
            return G
        })), n.d(i, "flip", (function () {
            return ft
        })), n.d(i, "hide", (function () {
            return mt
        })), n.d(i, "offset", (function () {
            return _t
        })), n.d(i, "popperOffsets", (function () {
            return bt
        })), n.d(i, "preventOverflow", (function () {
            return vt
        })), n.d(i, "popperGenerator", (function () {
            return At
        })), n.d(i, "detectOverflow", (function () {
            return ut
        })), n.d(i, "createPopperBase", (function () {
            return Ot
        })), n.d(i, "createPopper", (function () {
            return Lt
        })), n.d(i, "createPopperLite", (function () {
            return kt
        }));
        var s = "top", o = "bottom", r = "right", a = "left", l = "auto", c = [s, o, r, a], d = "start", h = "end",
            u = "clippingParents", f = "viewport", p = "popper", g = "reference", m = c.reduce((function (t, e) {
                return t.concat([e + "-" + d, e + "-" + h])
            }), []), _ = [].concat(c, [l]).reduce((function (t, e) {
                return t.concat([e, e + "-" + d, e + "-" + h])
            }), []), b = "beforeRead", v = "read", y = "afterRead", w = "beforeMain", E = "main", T = "afterMain",
            A = "beforeWrite", O = "write", L = "afterWrite", k = [b, v, y, w, E, T, A, O, L];

        function D(t) {
            return t ? (t.nodeName || "").toLowerCase() : null
        }

        function x(t) {
            if ("[object Window]" !== t.toString()) {
                var e = t.ownerDocument;
                return e && e.defaultView || window
            }
            return t
        }

        function C(t) {
            return t instanceof x(t).Element || t instanceof Element
        }

        function S(t) {
            return t instanceof x(t).HTMLElement || t instanceof HTMLElement
        }

        var j = {
            name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
                var e = t.state;
                Object.keys(e.elements).forEach((function (t) {
                    var n = e.styles[t] || {}, i = e.attributes[t] || {}, s = e.elements[t];
                    S(s) && D(s) && (Object.assign(s.style, n), Object.keys(i).forEach((function (t) {
                        var e = i[t];
                        !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                    })))
                }))
            }, effect: function (t) {
                var e = t.state, n = {
                    popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
                    arrow: {position: "absolute"},
                    reference: {}
                };
                return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
                    Object.keys(e.elements).forEach((function (t) {
                        var i = e.elements[t], s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function (t, e) {
                                return t[e] = "", t
                            }), {});
                        S(i) && D(i) && (Object.assign(i.style, o), Object.keys(s).forEach((function (t) {
                            i.removeAttribute(t)
                        })))
                    }))
                }
            }, requires: ["computeStyles"]
        };

        function N(t) {
            return t.split("-")[0]
        }

        function P(t) {
            return {x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight}
        }

        function I(t, e) {
            var n, i = e.getRootNode && e.getRootNode();
            if (t.contains(e)) return !0;
            if (i && ((n = i) instanceof x(n).ShadowRoot || n instanceof ShadowRoot)) {
                var s = e;
                do {
                    if (s && t.isSameNode(s)) return !0;
                    s = s.parentNode || s.host
                } while (s)
            }
            return !1
        }

        function M(t) {
            return x(t).getComputedStyle(t)
        }

        function H(t) {
            return ["table", "td", "th"].indexOf(D(t)) >= 0
        }

        function R(t) {
            return ((C(t) ? t.ownerDocument : t.document) || window.document).documentElement
        }

        function B(t) {
            return "html" === D(t) ? t : t.assignedSlot || t.parentNode || t.host || R(t)
        }

        function W(t) {
            if (!S(t) || "fixed" === M(t).position) return null;
            var e = t.offsetParent;
            if (e) {
                var n = R(e);
                if ("body" === D(e) && "static" === M(e).position && "static" !== M(n).position) return n
            }
            return e
        }

        function $(t) {
            for (var e = x(t), n = W(t); n && H(n) && "static" === M(n).position;) n = W(n);
            return n && "body" === D(n) && "static" === M(n).position ? e : n || function (t) {
                for (var e = B(t); S(e) && ["html", "body"].indexOf(D(e)) < 0;) {
                    var n = M(e);
                    if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return e;
                    e = e.parentNode
                }
                return null
            }(t) || e
        }

        function U(t) {
            return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
        }

        function z(t, e, n) {
            return Math.max(t, Math.min(e, n))
        }

        function F(t) {
            return Object.assign(Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}), t)
        }

        function K(t, e) {
            return e.reduce((function (e, n) {
                return e[n] = t, e
            }), {})
        }

        var Y = {
            name: "arrow", enabled: !0, phase: "main", fn: function (t) {
                var e, n = t.state, i = t.name, l = n.elements.arrow, c = n.modifiersData.popperOffsets,
                    d = N(n.placement), h = U(d), u = [a, r].indexOf(d) >= 0 ? "height" : "width";
                if (l && c) {
                    var f = n.modifiersData[i + "#persistent"].padding, p = P(l), g = "y" === h ? s : a,
                        m = "y" === h ? o : r,
                        _ = n.rects.reference[u] + n.rects.reference[h] - c[h] - n.rects.popper[u],
                        b = c[h] - n.rects.reference[h], v = $(l),
                        y = v ? "y" === h ? v.clientHeight || 0 : v.clientWidth || 0 : 0, w = _ / 2 - b / 2, E = f[g],
                        T = y - p[u] - f[m], A = y / 2 - p[u] / 2 + w, O = z(E, A, T), L = h;
                    n.modifiersData[i] = ((e = {})[L] = O, e.centerOffset = O - A, e)
                }
            }, effect: function (t) {
                var e = t.state, n = t.options, i = t.name, s = n.element, o = void 0 === s ? "[data-popper-arrow]" : s,
                    r = n.padding, a = void 0 === r ? 0 : r;
                null != o && ("string" != typeof o || (o = e.elements.popper.querySelector(o))) && I(e.elements.popper, o) && (e.elements.arrow = o, e.modifiersData[i + "#persistent"] = {padding: F("number" != typeof a ? a : K(a, c))})
            }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
        }, q = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

        function V(t) {
            var e, n = t.popper, i = t.popperRect, l = t.placement, c = t.offsets, d = t.position,
                h = t.gpuAcceleration, u = t.adaptive, f = t.roundOffsets ? function (t) {
                    var e = t.x, n = t.y, i = window.devicePixelRatio || 1;
                    return {x: Math.round(e * i) / i || 0, y: Math.round(n * i) / i || 0}
                }(c) : c, p = f.x, g = void 0 === p ? 0 : p, m = f.y, _ = void 0 === m ? 0 : m, b = c.hasOwnProperty("x"),
                v = c.hasOwnProperty("y"), y = a, w = s, E = window;
            if (u) {
                var T = $(n);
                T === x(n) && (T = R(n)), l === s && (w = o, _ -= T.clientHeight - i.height, _ *= h ? 1 : -1), l === a && (y = r, g -= T.clientWidth - i.width, g *= h ? 1 : -1)
            }
            var A, O = Object.assign({position: d}, u && q);
            return h ? Object.assign(Object.assign({}, O), {}, ((A = {})[w] = v ? "0" : "", A[y] = b ? "0" : "", A.transform = (E.devicePixelRatio || 1) < 2 ? "translate(" + g + "px, " + _ + "px)" : "translate3d(" + g + "px, " + _ + "px, 0)", A)) : Object.assign(Object.assign({}, O), {}, ((e = {})[w] = v ? _ + "px" : "", e[y] = b ? g + "px" : "", e.transform = "", e))
        }

        var X = {
            name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
                var e = t.state, n = t.options, i = n.gpuAcceleration, s = void 0 === i || i, o = n.adaptive,
                    r = void 0 === o || o, a = n.roundOffsets, l = void 0 === a || a, c = {
                        placement: N(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: s
                    };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), V(Object.assign(Object.assign({}, c), {}, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: r,
                    roundOffsets: l
                })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), V(Object.assign(Object.assign({}, c), {}, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {"data-popper-placement": e.placement})
            }, data: {}
        }, Q = {passive: !0};
        var G = {
            name: "eventListeners", enabled: !0, phase: "write", fn: function () {
            }, effect: function (t) {
                var e = t.state, n = t.instance, i = t.options, s = i.scroll, o = void 0 === s || s, r = i.resize,
                    a = void 0 === r || r, l = x(e.elements.popper),
                    c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                return o && c.forEach((function (t) {
                    t.addEventListener("scroll", n.update, Q)
                })), a && l.addEventListener("resize", n.update, Q), function () {
                    o && c.forEach((function (t) {
                        t.removeEventListener("scroll", n.update, Q)
                    })), a && l.removeEventListener("resize", n.update, Q)
                }
            }, data: {}
        }, Z = {left: "right", right: "left", bottom: "top", top: "bottom"};

        function J(t) {
            return t.replace(/left|right|bottom|top/g, (function (t) {
                return Z[t]
            }))
        }

        var tt = {start: "end", end: "start"};

        function et(t) {
            return t.replace(/start|end/g, (function (t) {
                return tt[t]
            }))
        }

        function nt(t) {
            var e = t.getBoundingClientRect();
            return {
                width: e.width,
                height: e.height,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                y: e.top
            }
        }

        function it(t) {
            var e = x(t);
            return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
        }

        function st(t) {
            return nt(R(t)).left + it(t).scrollLeft
        }

        function ot(t) {
            var e = M(t), n = e.overflow, i = e.overflowX, s = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + s + i)
        }

        function rt(t, e) {
            void 0 === e && (e = []);
            var n = function t(e) {
                    return ["html", "body", "#document"].indexOf(D(e)) >= 0 ? e.ownerDocument.body : S(e) && ot(e) ? e : t(B(e))
                }(t), i = "body" === D(n), s = x(n), o = i ? [s].concat(s.visualViewport || [], ot(n) ? n : []) : n,
                r = e.concat(o);
            return i ? r : r.concat(rt(B(o)))
        }

        function at(t) {
            return Object.assign(Object.assign({}, t), {}, {
                left: t.x,
                top: t.y,
                right: t.x + t.width,
                bottom: t.y + t.height
            })
        }

        function lt(t, e) {
            return e === f ? at(function (t) {
                var e = x(t), n = R(t), i = e.visualViewport, s = n.clientWidth, o = n.clientHeight, r = 0, a = 0;
                return i && (s = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = i.offsetLeft, a = i.offsetTop)), {
                    width: s,
                    height: o,
                    x: r + st(t),
                    y: a
                }
            }(t)) : S(e) ? function (t) {
                var e = nt(t);
                return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
            }(e) : at(function (t) {
                var e = R(t), n = it(t), i = t.ownerDocument.body,
                    s = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                    o = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                    r = -n.scrollLeft + st(t), a = -n.scrollTop;
                return "rtl" === M(i || e).direction && (r += Math.max(e.clientWidth, i ? i.clientWidth : 0) - s), {
                    width: s,
                    height: o,
                    x: r,
                    y: a
                }
            }(R(t)))
        }

        function ct(t, e, n) {
            var i = "clippingParents" === e ? function (t) {
                var e = rt(B(t)), n = ["absolute", "fixed"].indexOf(M(t).position) >= 0 && S(t) ? $(t) : t;
                return C(n) ? e.filter((function (t) {
                    return C(t) && I(t, n) && "body" !== D(t)
                })) : []
            }(t) : [].concat(e), s = [].concat(i, [n]), o = s[0], r = s.reduce((function (e, n) {
                var i = lt(t, n);
                return e.top = Math.max(i.top, e.top), e.right = Math.min(i.right, e.right), e.bottom = Math.min(i.bottom, e.bottom), e.left = Math.max(i.left, e.left), e
            }), lt(t, o));
            return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
        }

        function dt(t) {
            return t.split("-")[1]
        }

        function ht(t) {
            var e, n = t.reference, i = t.element, l = t.placement, c = l ? N(l) : null, u = l ? dt(l) : null,
                f = n.x + n.width / 2 - i.width / 2, p = n.y + n.height / 2 - i.height / 2;
            switch (c) {
                case s:
                    e = {x: f, y: n.y - i.height};
                    break;
                case o:
                    e = {x: f, y: n.y + n.height};
                    break;
                case r:
                    e = {x: n.x + n.width, y: p};
                    break;
                case a:
                    e = {x: n.x - i.width, y: p};
                    break;
                default:
                    e = {x: n.x, y: n.y}
            }
            var g = c ? U(c) : null;
            if (null != g) {
                var m = "y" === g ? "height" : "width";
                switch (u) {
                    case d:
                        e[g] = e[g] - (n[m] / 2 - i[m] / 2);
                        break;
                    case h:
                        e[g] = e[g] + (n[m] / 2 - i[m] / 2)
                }
            }
            return e
        }

        function ut(t, e) {
            void 0 === e && (e = {});
            var n = e, i = n.placement, a = void 0 === i ? t.placement : i, l = n.boundary, d = void 0 === l ? u : l,
                h = n.rootBoundary, m = void 0 === h ? f : h, _ = n.elementContext, b = void 0 === _ ? p : _,
                v = n.altBoundary, y = void 0 !== v && v, w = n.padding, E = void 0 === w ? 0 : w,
                T = F("number" != typeof E ? E : K(E, c)), A = b === p ? g : p, O = t.elements.reference,
                L = t.rects.popper, k = t.elements[y ? A : b],
                D = ct(C(k) ? k : k.contextElement || R(t.elements.popper), d, m), x = nt(O),
                S = ht({reference: x, element: L, strategy: "absolute", placement: a}),
                j = at(Object.assign(Object.assign({}, L), S)), N = b === p ? j : x, P = {
                    top: D.top - N.top + T.top,
                    bottom: N.bottom - D.bottom + T.bottom,
                    left: D.left - N.left + T.left,
                    right: N.right - D.right + T.right
                }, I = t.modifiersData.offset;
            if (b === p && I) {
                var M = I[a];
                Object.keys(P).forEach((function (t) {
                    var e = [r, o].indexOf(t) >= 0 ? 1 : -1, n = [s, o].indexOf(t) >= 0 ? "y" : "x";
                    P[t] += M[n] * e
                }))
            }
            return P
        }

        var ft = {
            name: "flip", enabled: !0, phase: "main", fn: function (t) {
                var e = t.state, n = t.options, i = t.name;
                if (!e.modifiersData[i]._skip) {
                    for (var h = n.mainAxis, u = void 0 === h || h, f = n.altAxis, p = void 0 === f || f, g = n.fallbackPlacements, b = n.padding, v = n.boundary, y = n.rootBoundary, w = n.altBoundary, E = n.flipVariations, T = void 0 === E || E, A = n.allowedAutoPlacements, O = e.options.placement, L = N(O), k = g || (L === O || !T ? [J(O)] : function (t) {
                        if (N(t) === l) return [];
                        var e = J(t);
                        return [et(t), e, et(e)]
                    }(O)), D = [O].concat(k).reduce((function (t, n) {
                        return t.concat(N(n) === l ? function (t, e) {
                            void 0 === e && (e = {});
                            var n = e, i = n.placement, s = n.boundary, o = n.rootBoundary, r = n.padding,
                                a = n.flipVariations, l = n.allowedAutoPlacements, d = void 0 === l ? _ : l, h = dt(i),
                                u = h ? a ? m : m.filter((function (t) {
                                    return dt(t) === h
                                })) : c, f = u.filter((function (t) {
                                    return d.indexOf(t) >= 0
                                }));
                            0 === f.length && (f = u);
                            var p = f.reduce((function (e, n) {
                                return e[n] = ut(t, {placement: n, boundary: s, rootBoundary: o, padding: r})[N(n)], e
                            }), {});
                            return Object.keys(p).sort((function (t, e) {
                                return p[t] - p[e]
                            }))
                        }(e, {
                            placement: n,
                            boundary: v,
                            rootBoundary: y,
                            padding: b,
                            flipVariations: T,
                            allowedAutoPlacements: A
                        }) : n)
                    }), []), x = e.rects.reference, C = e.rects.popper, S = new Map, j = !0, P = D[0], I = 0; I < D.length; I++) {
                        var M = D[I], H = N(M), R = dt(M) === d, B = [s, o].indexOf(H) >= 0, W = B ? "width" : "height",
                            $ = ut(e, {placement: M, boundary: v, rootBoundary: y, altBoundary: w, padding: b}),
                            U = B ? R ? r : a : R ? o : s;
                        x[W] > C[W] && (U = J(U));
                        var z = J(U), F = [];
                        if (u && F.push($[H] <= 0), p && F.push($[U] <= 0, $[z] <= 0), F.every((function (t) {
                            return t
                        }))) {
                            P = M, j = !1;
                            break
                        }
                        S.set(M, F)
                    }
                    if (j) for (var K = function (t) {
                        var e = D.find((function (e) {
                            var n = S.get(e);
                            if (n) return n.slice(0, t).every((function (t) {
                                return t
                            }))
                        }));
                        if (e) return P = e, "break"
                    }, Y = T ? 3 : 1; Y > 0; Y--) {
                        if ("break" === K(Y)) break
                    }
                    e.placement !== P && (e.modifiersData[i]._skip = !0, e.placement = P, e.reset = !0)
                }
            }, requiresIfExists: ["offset"], data: {_skip: !1}
        };

        function pt(t, e, n) {
            return void 0 === n && (n = {x: 0, y: 0}), {
                top: t.top - e.height - n.y,
                right: t.right - e.width + n.x,
                bottom: t.bottom - e.height + n.y,
                left: t.left - e.width - n.x
            }
        }

        function gt(t) {
            return [s, r, o, a].some((function (e) {
                return t[e] >= 0
            }))
        }

        var mt = {
            name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
                var e = t.state, n = t.name, i = e.rects.reference, s = e.rects.popper,
                    o = e.modifiersData.preventOverflow, r = ut(e, {elementContext: "reference"}),
                    a = ut(e, {altBoundary: !0}), l = pt(r, i), c = pt(a, s, o), d = gt(l), h = gt(c);
                e.modifiersData[n] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: d,
                    hasPopperEscaped: h
                }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                    "data-popper-reference-hidden": d,
                    "data-popper-escaped": h
                })
            }
        };
        var _t = {
            name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
                var e = t.state, n = t.options, i = t.name, o = n.offset, l = void 0 === o ? [0, 0] : o,
                    c = _.reduce((function (t, n) {
                        return t[n] = function (t, e, n) {
                            var i = N(t), o = [a, s].indexOf(i) >= 0 ? -1 : 1,
                                l = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {placement: t})) : n,
                                c = l[0], d = l[1];
                            return c = c || 0, d = (d || 0) * o, [a, r].indexOf(i) >= 0 ? {x: d, y: c} : {x: c, y: d}
                        }(n, e.rects, l), t
                    }), {}), d = c[e.placement], h = d.x, u = d.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += h, e.modifiersData.popperOffsets.y += u), e.modifiersData[i] = c
            }
        };
        var bt = {
            name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
                var e = t.state, n = t.name;
                e.modifiersData[n] = ht({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                })
            }, data: {}
        };
        var vt = {
            name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
                var e = t.state, n = t.options, i = t.name, l = n.mainAxis, c = void 0 === l || l, h = n.altAxis,
                    u = void 0 !== h && h, f = n.boundary, p = n.rootBoundary, g = n.altBoundary, m = n.padding,
                    _ = n.tether, b = void 0 === _ || _, v = n.tetherOffset, y = void 0 === v ? 0 : v,
                    w = ut(e, {boundary: f, rootBoundary: p, padding: m, altBoundary: g}), E = N(e.placement),
                    T = dt(e.placement), A = !T, O = U(E), L = "x" === O ? "y" : "x", k = e.modifiersData.popperOffsets,
                    D = e.rects.reference, x = e.rects.popper,
                    C = "function" == typeof y ? y(Object.assign(Object.assign({}, e.rects), {}, {placement: e.placement})) : y,
                    S = {x: 0, y: 0};
                if (k) {
                    if (c) {
                        var j = "y" === O ? s : a, I = "y" === O ? o : r, M = "y" === O ? "height" : "width", H = k[O],
                            R = k[O] + w[j], B = k[O] - w[I], W = b ? -x[M] / 2 : 0, F = T === d ? D[M] : x[M],
                            K = T === d ? -x[M] : -D[M], Y = e.elements.arrow,
                            q = b && Y ? P(Y) : {width: 0, height: 0},
                            V = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, X = V[j], Q = V[I], G = z(0, D[M], q[M]),
                            Z = A ? D[M] / 2 - W - G - X - C : F - G - X - C,
                            J = A ? -D[M] / 2 + W + G + Q + C : K + G + Q + C,
                            tt = e.elements.arrow && $(e.elements.arrow),
                            et = tt ? "y" === O ? tt.clientTop || 0 : tt.clientLeft || 0 : 0,
                            nt = e.modifiersData.offset ? e.modifiersData.offset[e.placement][O] : 0,
                            it = k[O] + Z - nt - et, st = k[O] + J - nt,
                            ot = z(b ? Math.min(R, it) : R, H, b ? Math.max(B, st) : B);
                        k[O] = ot, S[O] = ot - H
                    }
                    if (u) {
                        var rt = "x" === O ? s : a, at = "x" === O ? o : r, lt = k[L],
                            ct = z(lt + w[rt], lt, lt - w[at]);
                        k[L] = ct, S[L] = ct - lt
                    }
                    e.modifiersData[i] = S
                }
            }, requiresIfExists: ["offset"]
        };

        function yt(t, e, n) {
            void 0 === n && (n = !1);
            var i, s, o = R(e), r = nt(t), a = S(e), l = {scrollLeft: 0, scrollTop: 0}, c = {x: 0, y: 0};
            return (a || !a && !n) && (("body" !== D(e) || ot(o)) && (l = (i = e) !== x(i) && S(i) ? {
                scrollLeft: (s = i).scrollLeft,
                scrollTop: s.scrollTop
            } : it(i)), S(e) ? ((c = nt(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = st(o))), {
                x: r.left + l.scrollLeft - c.x,
                y: r.top + l.scrollTop - c.y,
                width: r.width,
                height: r.height
            }
        }

        function wt(t) {
            var e = new Map, n = new Set, i = [];
            return t.forEach((function (t) {
                e.set(t.name, t)
            })), t.forEach((function (t) {
                n.has(t.name) || function t(s) {
                    n.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function (i) {
                        if (!n.has(i)) {
                            var s = e.get(i);
                            s && t(s)
                        }
                    })), i.push(s)
                }(t)
            })), i
        }

        var Et = {placement: "bottom", modifiers: [], strategy: "absolute"};

        function Tt() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return !e.some((function (t) {
                return !(t && "function" == typeof t.getBoundingClientRect)
            }))
        }

        function At(t) {
            void 0 === t && (t = {});
            var e = t, n = e.defaultModifiers, i = void 0 === n ? [] : n, s = e.defaultOptions,
                o = void 0 === s ? Et : s;
            return function (t, e, n) {
                void 0 === n && (n = o);
                var s, r, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign(Object.assign({}, Et), o),
                    modifiersData: {},
                    elements: {reference: t, popper: e},
                    attributes: {},
                    styles: {}
                }, l = [], c = !1, d = {
                    state: a, setOptions: function (n) {
                        h(), a.options = Object.assign(Object.assign(Object.assign({}, o), a.options), n), a.scrollParents = {
                            reference: C(t) ? rt(t) : t.contextElement ? rt(t.contextElement) : [],
                            popper: rt(e)
                        };
                        var s = function (t) {
                            var e = wt(t);
                            return k.reduce((function (t, n) {
                                return t.concat(e.filter((function (t) {
                                    return t.phase === n
                                })))
                            }), [])
                        }(function (t) {
                            var e = t.reduce((function (t, e) {
                                var n = t[e.name];
                                return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
                                    options: Object.assign(Object.assign({}, n.options), e.options),
                                    data: Object.assign(Object.assign({}, n.data), e.data)
                                }) : e, t
                            }), {});
                            return Object.keys(e).map((function (t) {
                                return e[t]
                            }))
                        }([].concat(i, a.options.modifiers)));
                        return a.orderedModifiers = s.filter((function (t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function (t) {
                            var e = t.name, n = t.options, i = void 0 === n ? {} : n, s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({state: a, name: e, instance: d, options: i});
                                l.push(o || function () {
                                })
                            }
                        })), d.update()
                    }, forceUpdate: function () {
                        if (!c) {
                            var t = a.elements, e = t.reference, n = t.popper;
                            if (Tt(e, n)) {
                                a.rects = {
                                    reference: yt(e, $(n), "fixed" === a.options.strategy),
                                    popper: P(n)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var i = 0; i < a.orderedModifiers.length; i++) if (!0 !== a.reset) {
                                    var s = a.orderedModifiers[i], o = s.fn, r = s.options, l = void 0 === r ? {} : r,
                                        h = s.name;
                                    "function" == typeof o && (a = o({state: a, options: l, name: h, instance: d}) || a)
                                } else a.reset = !1, i = -1
                            }
                        }
                    }, update: (s = function () {
                        return new Promise((function (t) {
                            d.forceUpdate(), t(a)
                        }))
                    }, function () {
                        return r || (r = new Promise((function (t) {
                            Promise.resolve().then((function () {
                                r = void 0, t(s())
                            }))
                        }))), r
                    }), destroy: function () {
                        h(), c = !0
                    }
                };
                if (!Tt(t, e)) return d;

                function h() {
                    l.forEach((function (t) {
                        return t()
                    })), l = []
                }

                return d.setOptions(n).then((function (t) {
                    !c && n.onFirstUpdate && n.onFirstUpdate(t)
                })), d
            }
        }

        var Ot = At(), Lt = At({defaultModifiers: [G, bt, X, j, _t, ft, vt, Y, mt]}),
            kt = At({defaultModifiers: [G, bt, X, j]});
        const Dt = t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, xt = t => {
                let e = t.getAttribute("data-bs-target");
                if (!e || "#" === e) {
                    let n = t.getAttribute("href");
                    if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                    n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), e = n && "#" !== n ? n.trim() : null
                }
                return e
            }, Ct = t => {
                const e = xt(t);
                return e && document.querySelector(e) ? e : null
            }, St = t => {
                const e = xt(t);
                return e ? document.querySelector(e) : null
            }, jt = t => {
                if (!t) return 0;
                let {transitionDuration: e, transitionDelay: n} = window.getComputedStyle(t);
                const i = Number.parseFloat(e), s = Number.parseFloat(n);
                return i || s ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
            }, Nt = t => {
                t.dispatchEvent(new Event("transitionend"))
            }, Pt = t => (t[0] || t).nodeType, It = (t, e) => {
                let n = !1;
                const i = e + 5;
                t.addEventListener("transitionend", (function e() {
                    n = !0, t.removeEventListener("transitionend", e)
                })), setTimeout(() => {
                    n || Nt(t)
                }, i)
            }, Mt = (t, e, n) => {
                Object.keys(n).forEach(i => {
                    const s = n[i], o = e[i],
                        r = o && Pt(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                    var a;
                    if (!new RegExp(s).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)
                })
            }, Ht = t => {
                if (!t) return !1;
                if (t.style && t.parentNode && t.parentNode.style) {
                    const e = getComputedStyle(t), n = getComputedStyle(t.parentNode);
                    return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
                }
                return !1
            },
            Rt = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
            Bt = t => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    const e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? Bt(t.parentNode) : null
            }, Wt = () => {
            }, $t = t => t.offsetHeight, Ut = () => {
                const {jQuery: t} = window;
                return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
            }, zt = () => "rtl" === document.documentElement.dir, Ft = (t, e) => {
                var n;
                n = () => {
                    const n = Ut();
                    if (n) {
                        const i = n.fn[t];
                        n.fn[t] = e.jQueryInterface, n.fn[t].Constructor = e, n.fn[t].noConflict = () => (n.fn[t] = i, e.jQueryInterface)
                    }
                }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n()
            }, Kt = t => {
                "function" == typeof t && t()
            }, Yt = new Map;
        var qt = {
            set(t, e, n) {
                Yt.has(t) || Yt.set(t, new Map);
                const i = Yt.get(t);
                i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
            }, get: (t, e) => Yt.has(t) && Yt.get(t).get(e) || null, remove(t, e) {
                if (!Yt.has(t)) return;
                const n = Yt.get(t);
                n.delete(e), 0 === n.size && Yt.delete(t)
            }
        };
        const Vt = /[^.]*(?=\..*)\.|.*/, Xt = /\..*/, Qt = /::\d+$/, Gt = {};
        let Zt = 1;
        const Jt = {mouseenter: "mouseover", mouseleave: "mouseout"}, te = /^(mouseenter|mouseleave)/i,
            ee = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function ne(t, e) {
            return e && `${e}::${Zt++}` || t.uidEvent || Zt++
        }

        function ie(t) {
            const e = ne(t);
            return t.uidEvent = e, Gt[e] = Gt[e] || {}, Gt[e]
        }

        function se(t, e, n = null) {
            const i = Object.keys(t);
            for (let s = 0, o = i.length; s < o; s++) {
                const o = t[i[s]];
                if (o.originalHandler === e && o.delegationSelector === n) return o
            }
            return null
        }

        function oe(t, e, n) {
            const i = "string" == typeof e, s = i ? n : e;
            let o = le(t);
            return ee.has(o) || (o = t), [i, s, o]
        }

        function re(t, e, n, i, s) {
            if ("string" != typeof e || !t) return;
            if (n || (n = i, i = null), te.test(e)) {
                const t = t => function (e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
                };
                i ? i = t(i) : n = t(n)
            }
            const [o, r, a] = oe(e, n, i), l = ie(t), c = l[a] || (l[a] = {}), d = se(c, r, o ? n : null);
            if (d) return void (d.oneOff = d.oneOff && s);
            const h = ne(r, e.replace(Vt, "")), u = o ? function (t, e, n) {
                return function i(s) {
                    const o = t.querySelectorAll(e);
                    for (let {target: r} = s; r && r !== this; r = r.parentNode) for (let a = o.length; a--;) if (o[a] === r) return s.delegateTarget = r, i.oneOff && ce.off(t, s.type, e, n), n.apply(r, [s]);
                    return null
                }
            }(t, n, i) : function (t, e) {
                return function n(i) {
                    return i.delegateTarget = t, n.oneOff && ce.off(t, i.type, e), e.apply(t, [i])
                }
            }(t, n);
            u.delegationSelector = o ? n : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = h, c[h] = u, t.addEventListener(a, u, o)
        }

        function ae(t, e, n, i, s) {
            const o = se(e[n], i, s);
            o && (t.removeEventListener(n, o, Boolean(s)), delete e[n][o.uidEvent])
        }

        function le(t) {
            return t = t.replace(Xt, ""), Jt[t] || t
        }

        const ce = {
            on(t, e, n, i) {
                re(t, e, n, i, !1)
            }, one(t, e, n, i) {
                re(t, e, n, i, !0)
            }, off(t, e, n, i) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = oe(e, n, i), a = r !== e, l = ie(t), c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void ae(t, l, r, o, s ? n : null)
                }
                c && Object.keys(l).forEach(n => {
                    !function (t, e, n, i) {
                        const s = e[n] || {};
                        Object.keys(s).forEach(o => {
                            if (o.includes(i)) {
                                const i = s[o];
                                ae(t, e, n, i.originalHandler, i.delegationSelector)
                            }
                        })
                    }(t, l, n, e.slice(1))
                });
                const d = l[r] || {};
                Object.keys(d).forEach(n => {
                    const i = n.replace(Qt, "");
                    if (!a || e.includes(i)) {
                        const e = d[n];
                        ae(t, l, r, e.originalHandler, e.delegationSelector)
                    }
                })
            }, trigger(t, e, n) {
                if ("string" != typeof e || !t) return null;
                const i = Ut(), s = le(e), o = e !== s, r = ee.has(s);
                let a, l = !0, c = !0, d = !1, h = null;
                return o && i && (a = i.Event(e, n), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(s, l, !0)) : h = new CustomEvent(e, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== n && Object.keys(n).forEach(t => {
                    Object.defineProperty(h, t, {get: () => n[t]})
                }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
            }
        };

        class de {
            constructor(t) {
                (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, qt.set(this._element, this.constructor.DATA_KEY, this))
            }

            dispose() {
                qt.remove(this._element, this.constructor.DATA_KEY), ce.off(this._element, "." + this.constructor.DATA_KEY), this._element = null
            }

            static getInstance(t) {
                return qt.get(t, this.DATA_KEY)
            }

            static get VERSION() {
                return "5.0.0"
            }
        }

        class he extends de {
            static get DATA_KEY() {
                return "bs.alert"
            }

            close(t) {
                const e = t ? this._getRootElement(t) : this._element, n = this._triggerCloseEvent(e);
                null === n || n.defaultPrevented || this._removeElement(e)
            }

            _getRootElement(t) {
                return St(t) || t.closest(".alert")
            }

            _triggerCloseEvent(t) {
                return ce.trigger(t, "close.bs.alert")
            }

            _removeElement(t) {
                if (t.classList.remove("show"), !t.classList.contains("fade")) return void this._destroyElement(t);
                const e = jt(t);
                ce.one(t, "transitionend", () => this._destroyElement(t)), It(t, e)
            }

            _destroyElement(t) {
                t.parentNode && t.parentNode.removeChild(t), ce.trigger(t, "closed.bs.alert")
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    let e = qt.get(this, "bs.alert");
                    e || (e = new he(this)), "close" === t && e[t](this)
                }))
            }

            static handleDismiss(t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }
        }

        ce.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', he.handleDismiss(new he)), Ft("alert", he);

        class ue extends de {
            static get DATA_KEY() {
                return "bs.button"
            }

            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    let e = qt.get(this, "bs.button");
                    e || (e = new ue(this)), "toggle" === t && e[t]()
                }))
            }
        }

        function fe(t) {
            return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
        }

        function pe(t) {
            return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
        }

        ce.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
            t.preventDefault();
            const e = t.target.closest('[data-bs-toggle="button"]');
            let n = qt.get(e, "bs.button");
            n || (n = new ue(e)), n.toggle()
        }), Ft("button", ue);
        const ge = {
                setDataAttribute(t, e, n) {
                    t.setAttribute("data-bs-" + pe(e), n)
                }, removeDataAttribute(t, e) {
                    t.removeAttribute("data-bs-" + pe(e))
                }, getDataAttributes(t) {
                    if (!t) return {};
                    const e = {};
                    return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(n => {
                        let i = n.replace(/^bs/, "");
                        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = fe(t.dataset[n])
                    }), e
                }, getDataAttribute: (t, e) => fe(t.getAttribute("data-bs-" + pe(e))), offset(t) {
                    const e = t.getBoundingClientRect();
                    return {top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft}
                }, position: t => ({top: t.offsetTop, left: t.offsetLeft})
            }, me = {
                find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
                parents(t, e) {
                    const n = [];
                    let i = t.parentNode;
                    for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode;
                    return n
                },
                prev(t, e) {
                    let n = t.previousElementSibling;
                    for (; n;) {
                        if (n.matches(e)) return [n];
                        n = n.previousElementSibling
                    }
                    return []
                },
                next(t, e) {
                    let n = t.nextElementSibling;
                    for (; n;) {
                        if (n.matches(e)) return [n];
                        n = n.nextElementSibling
                    }
                    return []
                }
            }, _e = ".bs.carousel", be = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0},
            ve = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            }, ye = "next", we = "prev", Ee = "left", Te = "right", Ae = `load${_e}.data-api`,
            Oe = `click${_e}.data-api`;

        class Le extends de {
            constructor(t, e) {
                super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = me.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
            }

            static get Default() {
                return be
            }

            static get DATA_KEY() {
                return "bs.carousel"
            }

            next() {
                this._isSliding || this._slide(ye)
            }

            nextWhenVisible() {
                !document.hidden && Ht(this._element) && this.next()
            }

            prev() {
                this._isSliding || this._slide(we)
            }

            pause(t) {
                t || (this._isPaused = !0), me.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (Nt(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }

            cycle(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }

            to(t) {
                this._activeElement = me.findOne(".active.carousel-item", this._element);
                const e = this._getItemIndex(this._activeElement);
                if (t > this._items.length - 1 || t < 0) return;
                if (this._isSliding) return void ce.one(this._element, "slid.bs.carousel", () => this.to(t));
                if (e === t) return this.pause(), void this.cycle();
                const n = t > e ? ye : we;
                this._slide(n, this._items[t])
            }

            dispose() {
                this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, super.dispose()
            }

            _getConfig(t) {
                return t = {...be, ...t}, Mt("carousel", t, ve), t
            }

            _handleSwipe() {
                const t = Math.abs(this.touchDeltaX);
                if (t <= 40) return;
                const e = t / this.touchDeltaX;
                this.touchDeltaX = 0, e && this._slide(e > 0 ? Te : Ee)
            }

            _addEventListeners() {
                this._config.keyboard && ce.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (ce.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), ce.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
            }

            _addTouchEventListeners() {
                const t = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
                }, e = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                }, n = t => {
                    !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
                };
                me.find(".carousel-item img", this._element).forEach(t => {
                    ce.on(t, "dragstart.bs.carousel", t => t.preventDefault())
                }), this._pointerEvent ? (ce.on(this._element, "pointerdown.bs.carousel", e => t(e)), ce.on(this._element, "pointerup.bs.carousel", t => n(t)), this._element.classList.add("pointer-event")) : (ce.on(this._element, "touchstart.bs.carousel", e => t(e)), ce.on(this._element, "touchmove.bs.carousel", t => e(t)), ce.on(this._element, "touchend.bs.carousel", t => n(t)))
            }

            _keydown(t) {
                /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(Te)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(Ee)))
            }

            _getItemIndex(t) {
                return this._items = t && t.parentNode ? me.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
            }

            _getItemByOrder(t, e) {
                const n = t === ye, i = t === we, s = this._getItemIndex(e), o = this._items.length - 1;
                if ((i && 0 === s || n && s === o) && !this._config.wrap) return e;
                const r = (s + (i ? -1 : 1)) % this._items.length;
                return -1 === r ? this._items[this._items.length - 1] : this._items[r]
            }

            _triggerSlideEvent(t, e) {
                const n = this._getItemIndex(t),
                    i = this._getItemIndex(me.findOne(".active.carousel-item", this._element));
                return ce.trigger(this._element, "slide.bs.carousel", {relatedTarget: t, direction: e, from: i, to: n})
            }

            _setActiveIndicatorElement(t) {
                if (this._indicatorsElement) {
                    const e = me.findOne(".active", this._indicatorsElement);
                    e.classList.remove("active"), e.removeAttribute("aria-current");
                    const n = me.find("[data-bs-target]", this._indicatorsElement);
                    for (let e = 0; e < n.length; e++) if (Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        n[e].classList.add("active"), n[e].setAttribute("aria-current", "true");
                        break
                    }
                }
            }

            _updateInterval() {
                const t = this._activeElement || me.findOne(".active.carousel-item", this._element);
                if (!t) return;
                const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
            }

            _slide(t, e) {
                const n = this._directionToOrder(t), i = me.findOne(".active.carousel-item", this._element),
                    s = this._getItemIndex(i), o = e || this._getItemByOrder(n, i), r = this._getItemIndex(o),
                    a = Boolean(this._interval), l = n === ye, c = l ? "carousel-item-start" : "carousel-item-end",
                    d = l ? "carousel-item-next" : "carousel-item-prev", h = this._orderToDirection(n);
                if (o && o.classList.contains("active")) return void (this._isSliding = !1);
                if (!this._triggerSlideEvent(o, h).defaultPrevented && i && o) {
                    if (this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o, this._element.classList.contains("slide")) {
                        o.classList.add(d), $t(o), i.classList.add(c), o.classList.add(c);
                        const t = jt(i);
                        ce.one(i, "transitionend", () => {
                            o.classList.remove(c, d), o.classList.add("active"), i.classList.remove("active", d, c), this._isSliding = !1, setTimeout(() => {
                                ce.trigger(this._element, "slid.bs.carousel", {
                                    relatedTarget: o,
                                    direction: h,
                                    from: s,
                                    to: r
                                })
                            }, 0)
                        }), It(i, t)
                    } else i.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, ce.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: o,
                        direction: h,
                        from: s,
                        to: r
                    });
                    a && this.cycle()
                }
            }

            _directionToOrder(t) {
                return [Te, Ee].includes(t) ? zt() ? t === Ee ? we : ye : t === Ee ? ye : we : t
            }

            _orderToDirection(t) {
                return [ye, we].includes(t) ? zt() ? t === we ? Ee : Te : t === we ? Te : Ee : t
            }

            static carouselInterface(t, e) {
                let n = qt.get(t, "bs.carousel"), i = {...be, ...ge.getDataAttributes(t)};
                "object" == typeof e && (i = {...i, ...e});
                const s = "string" == typeof e ? e : i.slide;
                if (n || (n = new Le(t, i)), "number" == typeof e) n.to(e); else if ("string" == typeof s) {
                    if (void 0 === n[s]) throw new TypeError(`No method named "${s}"`);
                    n[s]()
                } else i.interval && i.ride && (n.pause(), n.cycle())
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    Le.carouselInterface(this, t)
                }))
            }

            static dataApiClickHandler(t) {
                const e = St(this);
                if (!e || !e.classList.contains("carousel")) return;
                const n = {...ge.getDataAttributes(e), ...ge.getDataAttributes(this)},
                    i = this.getAttribute("data-bs-slide-to");
                i && (n.interval = !1), Le.carouselInterface(e, n), i && qt.get(e, "bs.carousel").to(i), t.preventDefault()
            }
        }

        ce.on(document, Oe, "[data-bs-slide], [data-bs-slide-to]", Le.dataApiClickHandler), ce.on(window, Ae, () => {
            const t = me.find('[data-bs-ride="carousel"]');
            for (let e = 0, n = t.length; e < n; e++) Le.carouselInterface(t[e], qt.get(t[e], "bs.carousel"))
        }), Ft("carousel", Le);
        const ke = {toggle: !0, parent: ""}, De = {toggle: "boolean", parent: "(string|element)"};

        class xe extends de {
            constructor(t, e) {
                super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = me.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
                const n = me.find('[data-bs-toggle="collapse"]');
                for (let t = 0, e = n.length; t < e; t++) {
                    const e = n[t], i = Ct(e), s = me.find(i).filter(t => t === this._element);
                    null !== i && s.length && (this._selector = i, this._triggerArray.push(e))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            static get Default() {
                return ke
            }

            static get DATA_KEY() {
                return "bs.collapse"
            }

            toggle() {
                this._element.classList.contains("show") ? this.hide() : this.show()
            }

            show() {
                if (this._isTransitioning || this._element.classList.contains("show")) return;
                let t, e;
                this._parent && (t = me.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === t.length && (t = null));
                const n = me.findOne(this._selector);
                if (t) {
                    const i = t.find(t => n !== t);
                    if (e = i ? qt.get(i, "bs.collapse") : null, e && e._isTransitioning) return
                }
                if (ce.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                t && t.forEach(t => {
                    n !== t && xe.collapseInterface(t, "hide"), e || qt.set(t, "bs.collapse", null)
                });
                const i = this._getDimension();
                this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[i] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
                    t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
                }), this.setTransitioning(!0);
                const s = "scroll" + (i[0].toUpperCase() + i.slice(1)), o = jt(this._element);
                ce.one(this._element, "transitionend", () => {
                    this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[i] = "", this.setTransitioning(!1), ce.trigger(this._element, "shown.bs.collapse")
                }), It(this._element, o), this._element.style[i] = this._element[s] + "px"
            }

            hide() {
                if (this._isTransitioning || !this._element.classList.contains("show")) return;
                if (ce.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                const t = this._getDimension();
                this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", $t(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                const e = this._triggerArray.length;
                if (e > 0) for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t], n = St(e);
                    n && !n.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
                }
                this.setTransitioning(!0);
                this._element.style[t] = "";
                const n = jt(this._element);
                ce.one(this._element, "transitionend", () => {
                    this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), ce.trigger(this._element, "hidden.bs.collapse")
                }), It(this._element, n)
            }

            setTransitioning(t) {
                this._isTransitioning = t
            }

            dispose() {
                super.dispose(), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
            }

            _getConfig(t) {
                return (t = {...ke, ...t}).toggle = Boolean(t.toggle), Mt("collapse", t, De), t
            }

            _getDimension() {
                return this._element.classList.contains("width") ? "width" : "height"
            }

            _getParent() {
                let {parent: t} = this._config;
                Pt(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = me.findOne(t);
                const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
                return me.find(e, t).forEach(t => {
                    const e = St(t);
                    this._addAriaAndCollapsedClass(e, [t])
                }), t
            }

            _addAriaAndCollapsedClass(t, e) {
                if (!t || !e.length) return;
                const n = t.classList.contains("show");
                e.forEach(t => {
                    n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n)
                })
            }

            static collapseInterface(t, e) {
                let n = qt.get(t, "bs.collapse");
                const i = {...ke, ...ge.getDataAttributes(t), ..."object" == typeof e && e ? e : {}};
                if (!n && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), n || (n = new xe(t, i)), "string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                    n[e]()
                }
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    xe.collapseInterface(this, t)
                }))
            }
        }

        ce.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
            ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
            const e = ge.getDataAttributes(this), n = Ct(this);
            me.find(n).forEach(t => {
                const n = qt.get(t, "bs.collapse");
                let i;
                n ? (null === n._parent && "string" == typeof e.parent && (n._config.parent = e.parent, n._parent = n._getParent()), i = "toggle") : i = e, xe.collapseInterface(t, i)
            })
        })), Ft("collapse", xe);
        const Ce = new RegExp("ArrowUp|ArrowDown|Escape"), Se = zt() ? "top-end" : "top-start",
            je = zt() ? "top-start" : "top-end", Ne = zt() ? "bottom-end" : "bottom-start",
            Pe = zt() ? "bottom-start" : "bottom-end", Ie = zt() ? "left-start" : "right-start",
            Me = zt() ? "right-start" : "left-start", He = {
                offset: [0, 2],
                boundary: "clippingParents",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null,
                autoClose: !0
            }, Re = {
                offset: "(array|string|function)",
                boundary: "(string|element)",
                reference: "(string|element|object)",
                display: "string",
                popperConfig: "(null|object|function)",
                autoClose: "(boolean|string)"
            };

        class Be extends de {
            constructor(t, e) {
                super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            static get Default() {
                return He
            }

            static get DefaultType() {
                return Re
            }

            static get DATA_KEY() {
                return "bs.dropdown"
            }

            toggle() {
                if (Rt(this._element)) return;
                this._element.classList.contains("show") ? this.hide() : this.show()
            }

            show() {
                if (Rt(this._element) || this._menu.classList.contains("show")) return;
                const t = Be.getParentFromElement(this._element), e = {relatedTarget: this._element};
                if (!ce.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                    if (this._inNavbar) ge.setDataAttribute(this._menu, "popper", "none"); else {
                        if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        let e = this._element;
                        "parent" === this._config.reference ? e = t : Pt(this._config.reference) ? (e = this._config.reference, void 0 !== this._config.reference.jquery && (e = this._config.reference[0])) : "object" == typeof this._config.reference && (e = this._config.reference);
                        const n = this._getPopperConfig(),
                            s = n.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
                        this._popper = Lt(e, this._menu, n), s && ge.setDataAttribute(this._menu, "popper", "static")
                    }
                    "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => ce.on(t, "mouseover", Wt)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), ce.trigger(this._element, "shown.bs.dropdown", e)
                }
            }

            hide() {
                if (Rt(this._element) || !this._menu.classList.contains("show")) return;
                const t = {relatedTarget: this._element};
                this._completeHide(t)
            }

            dispose() {
                this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), super.dispose()
            }

            update() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }

            _addEventListeners() {
                ce.on(this._element, "click.bs.dropdown", t => {
                    t.preventDefault(), this.toggle()
                })
            }

            _completeHide(t) {
                ce.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => ce.off(t, "mouseover", Wt)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), ge.removeDataAttribute(this._menu, "popper"), ce.trigger(this._element, "hidden.bs.dropdown", t))
            }

            _getConfig(t) {
                if (t = {...this.constructor.Default, ...ge.getDataAttributes(this._element), ...t}, Mt("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !Pt(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
                return t
            }

            _getMenuElement() {
                return me.next(this._element, ".dropdown-menu")[0]
            }

            _getPlacement() {
                const t = this._element.parentNode;
                if (t.classList.contains("dropend")) return Ie;
                if (t.classList.contains("dropstart")) return Me;
                const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return t.classList.contains("dropup") ? e ? je : Se : e ? Pe : Ne
            }

            _detectNavbar() {
                return null !== this._element.closest(".navbar")
            }

            _getOffset() {
                const {offset: t} = this._config;
                return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
            }

            _getPopperConfig() {
                const t = {
                    placement: this._getPlacement(),
                    modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                        name: "offset",
                        options: {offset: this._getOffset()}
                    }]
                };
                return "static" === this._config.display && (t.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
            }

            _selectMenuItem(t) {
                const e = me.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(Ht);
                if (!e.length) return;
                let n = e.indexOf(t.target);
                "ArrowUp" === t.key && n > 0 && n--, "ArrowDown" === t.key && n < e.length - 1 && n++, n = -1 === n ? 0 : n, e[n].focus()
            }

            static dropdownInterface(t, e) {
                let n = qt.get(t, "bs.dropdown");
                if (n || (n = new Be(t, "object" == typeof e ? e : null)), "string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                    n[e]()
                }
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    Be.dropdownInterface(this, t)
                }))
            }

            static clearMenus(t) {
                if (t) {
                    if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
                    if (/input|select|option|textarea|form/i.test(t.target.tagName)) return
                }
                const e = me.find('[data-bs-toggle="dropdown"]');
                for (let n = 0, i = e.length; n < i; n++) {
                    const i = qt.get(e[n], "bs.dropdown");
                    if (!i || !1 === i._config.autoClose) continue;
                    if (!i._element.classList.contains("show")) continue;
                    const s = {relatedTarget: i._element};
                    if (t) {
                        const e = t.composedPath(), n = e.includes(i._menu);
                        if (e.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n) continue;
                        if ("keyup" === t.type && "Tab" === t.key && i._menu.contains(t.target)) continue;
                        "click" === t.type && (s.clickEvent = t)
                    }
                    i._completeHide(s)
                }
            }

            static getParentFromElement(t) {
                return St(t) || t.parentNode
            }

            static dataApiKeydownHandler(t) {
                if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !Ce.test(t.key)) return;
                const e = this.classList.contains("show");
                if (!e && "Escape" === t.key) return;
                if (t.preventDefault(), t.stopPropagation(), Rt(this)) return;
                const n = () => this.matches('[data-bs-toggle="dropdown"]') ? this : me.prev(this, '[data-bs-toggle="dropdown"]')[0];
                if ("Escape" === t.key) return n().focus(), void Be.clearMenus();
                e || "ArrowUp" !== t.key && "ArrowDown" !== t.key ? e && "Space" !== t.key ? Be.getInstance(n())._selectMenuItem(t) : Be.clearMenus() : n().click()
            }
        }

        ce.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Be.dataApiKeydownHandler), ce.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Be.dataApiKeydownHandler), ce.on(document, "click.bs.dropdown.data-api", Be.clearMenus), ce.on(document, "keyup.bs.dropdown.data-api", Be.clearMenus), ce.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
            t.preventDefault(), Be.dropdownInterface(this)
        })), Ft("dropdown", Be);
        const We = () => {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }, $e = (t = We()) => {
            Ue(), ze("body", "paddingRight", e => e + t), ze(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), ze(".sticky-top", "marginRight", e => e - t)
        }, Ue = () => {
            const t = document.body.style.overflow;
            t && ge.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden"
        }, ze = (t, e, n) => {
            const i = We();
            me.find(t).forEach(t => {
                if (t !== document.body && window.innerWidth > t.clientWidth + i) return;
                const s = t.style[e], o = window.getComputedStyle(t)[e];
                ge.setDataAttribute(t, e, s), t.style[e] = n(Number.parseFloat(o)) + "px"
            })
        }, Fe = () => {
            Ke("body", "overflow"), Ke("body", "paddingRight"), Ke(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), Ke(".sticky-top", "marginRight")
        }, Ke = (t, e) => {
            me.find(t).forEach(t => {
                const n = ge.getDataAttribute(t, e);
                void 0 === n ? t.style.removeProperty(e) : (ge.removeDataAttribute(t, e), t.style[e] = n)
            })
        }, Ye = {isVisible: !0, isAnimated: !1, rootElement: document.body, clickCallback: null}, qe = {
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "element",
            clickCallback: "(function|null)"
        };

        class Ve {
            constructor(t) {
                this._config = this._getConfig(t), this._isAppended = !1, this._element = null
            }

            show(t) {
                this._config.isVisible ? (this._append(), this._config.isAnimated && $t(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                    Kt(t)
                })) : Kt(t)
            }

            hide(t) {
                this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                    this.dispose(), Kt(t)
                })) : Kt(t)
            }

            _getElement() {
                if (!this._element) {
                    const t = document.createElement("div");
                    t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t
                }
                return this._element
            }

            _getConfig(t) {
                return t = {...Ye, ..."object" == typeof t ? t : {}}, Mt("backdrop", t, qe), t
            }

            _append() {
                this._isAppended || (this._config.rootElement.appendChild(this._getElement()), ce.on(this._getElement(), "mousedown.bs.backdrop", () => {
                    Kt(this._config.clickCallback)
                }), this._isAppended = !0)
            }

            dispose() {
                this._isAppended && (ce.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1)
            }

            _emulateAnimation(t) {
                if (!this._config.isAnimated) return void Kt(t);
                const e = jt(this._getElement());
                ce.one(this._getElement(), "transitionend", () => Kt(t)), It(this._getElement(), e)
            }
        }

        const Xe = {backdrop: !0, keyboard: !0, focus: !0},
            Qe = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean"};

        class Ge extends de {
            constructor(t, e) {
                super(t), this._config = this._getConfig(e), this._dialog = me.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1
            }

            static get Default() {
                return Xe
            }

            static get DATA_KEY() {
                return "bs.modal"
            }

            toggle(t) {
                return this._isShown ? this.hide() : this.show(t)
            }

            show(t) {
                if (this._isShown || this._isTransitioning) return;
                this._isAnimated() && (this._isTransitioning = !0);
                const e = ce.trigger(this._element, "show.bs.modal", {relatedTarget: t});
                this._isShown || e.defaultPrevented || (this._isShown = !0, $e(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), ce.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), ce.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                    ce.one(this._element, "mouseup.dismiss.bs.modal", t => {
                        t.target === this._element && (this._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(() => this._showElement(t)))
            }

            hide(t) {
                if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
                if (ce.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                this._isShown = !1;
                const e = this._isAnimated();
                if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), ce.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), ce.off(this._element, "click.dismiss.bs.modal"), ce.off(this._dialog, "mousedown.dismiss.bs.modal"), e) {
                    const t = jt(this._element);
                    ce.one(this._element, "transitionend", t => this._hideModal(t)), It(this._element, t)
                } else this._hideModal()
            }

            dispose() {
                [window, this._dialog].forEach(t => ce.off(t, ".bs.modal")), super.dispose(), ce.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop.dispose(), this._backdrop = null, this._isShown = null, this._ignoreBackdropClick = null, this._isTransitioning = null
            }

            handleUpdate() {
                this._adjustDialog()
            }

            _initializeBackDrop() {
                return new Ve({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
            }

            _getConfig(t) {
                return t = {...Xe, ...ge.getDataAttributes(this._element), ...t}, Mt("modal", t, Qe), t
            }

            _showElement(t) {
                const e = this._isAnimated(), n = me.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), e && $t(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
                const i = () => {
                    this._config.focus && this._element.focus(), this._isTransitioning = !1, ce.trigger(this._element, "shown.bs.modal", {relatedTarget: t})
                };
                if (e) {
                    const t = jt(this._dialog);
                    ce.one(this._dialog, "transitionend", i), It(this._dialog, t)
                } else i()
            }

            _enforceFocus() {
                ce.off(document, "focusin.bs.modal"), ce.on(document, "focusin.bs.modal", t => {
                    document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
                })
            }

            _setEscapeEvent() {
                this._isShown ? ce.on(this._element, "keydown.dismiss.bs.modal", t => {
                    this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
                }) : ce.off(this._element, "keydown.dismiss.bs.modal")
            }

            _setResizeEvent() {
                this._isShown ? ce.on(window, "resize.bs.modal", () => this._adjustDialog()) : ce.off(window, "resize.bs.modal")
            }

            _hideModal() {
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                    document.body.classList.remove("modal-open"), this._resetAdjustments(), Fe(), ce.trigger(this._element, "hidden.bs.modal")
                })
            }

            _showBackdrop(t) {
                ce.on(this._element, "click.dismiss.bs.modal", t => {
                    this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                }), this._backdrop.show(t)
            }

            _isAnimated() {
                return this._element.classList.contains("fade")
            }

            _triggerBackdropTransition() {
                if (ce.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                const t = this._element.scrollHeight > document.documentElement.clientHeight;
                t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                const e = jt(this._dialog);
                ce.off(this._element, "transitionend"), ce.one(this._element, "transitionend", () => {
                    this._element.classList.remove("modal-static"), t || (ce.one(this._element, "transitionend", () => {
                        this._element.style.overflowY = ""
                    }), It(this._element, e))
                }), It(this._element, e), this._element.focus()
            }

            _adjustDialog() {
                const t = this._element.scrollHeight > document.documentElement.clientHeight, e = We(), n = e > 0;
                (!n && t && !zt() || n && !t && zt()) && (this._element.style.paddingLeft = e + "px"), (n && !t && !zt() || !n && t && zt()) && (this._element.style.paddingRight = e + "px")
            }

            _resetAdjustments() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }

            static jQueryInterface(t, e) {
                return this.each((function () {
                    const n = Ge.getInstance(this) || new Ge(this, "object" == typeof t ? t : {});
                    if ("string" == typeof t) {
                        if (void 0 === n[t]) throw new TypeError(`No method named "${t}"`);
                        n[t](e)
                    }
                }))
            }
        }

        ce.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
            const e = St(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(), ce.one(e, "show.bs.modal", t => {
                t.defaultPrevented || ce.one(e, "hidden.bs.modal", () => {
                    Ht(this) && this.focus()
                })
            });
            (Ge.getInstance(e) || new Ge(e)).toggle(this)
        })), Ft("modal", Ge);
        const Ze = ".bs.offcanvas", Je = `load${Ze}.data-api`, tn = {backdrop: !0, keyboard: !0, scroll: !1},
            en = {backdrop: "boolean", keyboard: "boolean", scroll: "boolean"}, nn = `click${Ze}.data-api`;

        class sn extends de {
            constructor(t, e) {
                super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
            }

            static get Default() {
                return tn
            }

            static get DATA_KEY() {
                return "bs.offcanvas"
            }

            toggle(t) {
                return this._isShown ? this.hide() : this.show(t)
            }

            show(t) {
                if (this._isShown) return;
                if (ce.trigger(this._element, "show.bs.offcanvas", {relatedTarget: t}).defaultPrevented) return;
                this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ($e(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show");
                const e = jt(this._element);
                ce.one(this._element, "transitionend", () => {
                    ce.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: t})
                }), It(this._element, e)
            }

            hide() {
                if (!this._isShown) return;
                if (ce.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
                ce.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide();
                const t = jt(this._element);
                ce.one(this._element, "transitionend", () => {
                    this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || Fe(), ce.trigger(this._element, "hidden.bs.offcanvas")
                }), It(this._element, t)
            }

            dispose() {
                this._backdrop.dispose(), super.dispose(), ce.off(document, "focusin.bs.offcanvas"), this._config = null, this._backdrop = null
            }

            _getConfig(t) {
                return t = {...tn, ...ge.getDataAttributes(this._element), ..."object" == typeof t ? t : {}}, Mt("offcanvas", t, en), t
            }

            _initializeBackDrop() {
                return new Ve({
                    isVisible: this._config.backdrop,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: () => this.hide()
                })
            }

            _enforceFocusOnElement(t) {
                ce.off(document, "focusin.bs.offcanvas"), ce.on(document, "focusin.bs.offcanvas", e => {
                    document === e.target || t === e.target || t.contains(e.target) || t.focus()
                }), t.focus()
            }

            _addEventListeners() {
                ce.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), ce.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                    this._config.keyboard && "Escape" === t.key && this.hide()
                })
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    const e = qt.get(this, "bs.offcanvas") || new sn(this, "object" == typeof t ? t : {});
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t](this)
                    }
                }))
            }
        }

        ce.on(document, nn, '[data-bs-toggle="offcanvas"]', (function (t) {
            const e = St(this);
            if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Rt(this)) return;
            ce.one(e, "hidden.bs.offcanvas", () => {
                Ht(this) && this.focus()
            });
            const n = me.findOne(".offcanvas.show");
            n && n !== e && sn.getInstance(n).hide();
            (qt.get(e, "bs.offcanvas") || new sn(e)).toggle(this)
        })), ce.on(window, Je, () => {
            me.find(".offcanvas.show").forEach(t => (qt.get(t, "bs.offcanvas") || new sn(t)).show())
        }), Ft("offcanvas", sn);
        const on = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            rn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
            an = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            ln = (t, e) => {
                const n = t.nodeName.toLowerCase();
                if (e.includes(n)) return !on.has(n) || Boolean(rn.test(t.nodeValue) || an.test(t.nodeValue));
                const i = e.filter(t => t instanceof RegExp);
                for (let t = 0, e = i.length; t < e; t++) if (i[t].test(n)) return !0;
                return !1
            }, cn = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            };

        function dn(t, e, n) {
            if (!t.length) return t;
            if (n && "function" == typeof n) return n(t);
            const i = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e),
                o = [].concat(...i.body.querySelectorAll("*"));
            for (let t = 0, n = o.length; t < n; t++) {
                const n = o[t], i = n.nodeName.toLowerCase();
                if (!s.includes(i)) {
                    n.parentNode.removeChild(n);
                    continue
                }
                const r = [].concat(...n.attributes), a = [].concat(e["*"] || [], e[i] || []);
                r.forEach(t => {
                    ln(t, a) || n.removeAttribute(t.nodeName)
                })
            }
            return i.body.innerHTML
        }

        const hn = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), un = new Set(["sanitize", "allowList", "sanitizeFn"]),
            fn = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(array|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacements: "array",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                allowList: "object",
                popperConfig: "(null|object|function)"
            }, pn = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: zt() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: zt() ? "right" : "left"
            }, gn = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: [0, 0],
                container: !1,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                boundary: "clippingParents",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                allowList: cn,
                popperConfig: null
            }, mn = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            };

        class _n extends de {
            constructor(t, e) {
                if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }

            static get Default() {
                return gn
            }

            static get NAME() {
                return "tooltip"
            }

            static get DATA_KEY() {
                return "bs.tooltip"
            }

            static get Event() {
                return mn
            }

            static get EVENT_KEY() {
                return ".bs.tooltip"
            }

            static get DefaultType() {
                return fn
            }

            enable() {
                this._isEnabled = !0
            }

            disable() {
                this._isEnabled = !1
            }

            toggleEnabled() {
                this._isEnabled = !this._isEnabled
            }

            toggle(t) {
                if (this._isEnabled) if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }

            dispose() {
                clearTimeout(this._timeout), ce.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, super.dispose()
            }

            show() {
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (!this.isWithContent() || !this._isEnabled) return;
                const t = ce.trigger(this._element, this.constructor.Event.SHOW), e = Bt(this._element),
                    n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
                if (t.defaultPrevented || !n) return;
                const i = this.getTipElement(), s = Dt(this.constructor.NAME);
                i.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && i.classList.add("fade");
                const o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this._element) : this.config.placement,
                    r = this._getAttachment(o);
                this._addAttachmentClass(r);
                const a = this._getContainer();
                qt.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.appendChild(i), ce.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Lt(this._element, i, this._getPopperConfig(r)), i.classList.add("show");
                const l = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
                l && i.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
                    ce.on(t, "mouseover", Wt)
                });
                const c = () => {
                    const t = this._hoverState;
                    this._hoverState = null, ce.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
                };
                if (this.tip.classList.contains("fade")) {
                    const t = jt(this.tip);
                    ce.one(this.tip, "transitionend", c), It(this.tip, t)
                } else c()
            }

            hide() {
                if (!this._popper) return;
                const t = this.getTipElement(), e = () => {
                    this._isWithActiveTrigger() || ("show" !== this._hoverState && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), ce.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
                };
                if (!ce.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                    if (t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => ce.off(t, "mouseover", Wt)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                        const n = jt(t);
                        ce.one(t, "transitionend", e), It(t, n)
                    } else e();
                    this._hoverState = ""
                }
            }

            update() {
                null !== this._popper && this._popper.update()
            }

            isWithContent() {
                return Boolean(this.getTitle())
            }

            getTipElement() {
                if (this.tip) return this.tip;
                const t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }

            setContent() {
                const t = this.getTipElement();
                this.setElementContent(me.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
            }

            setElementContent(t, e) {
                if (null !== t) return "object" == typeof e && Pt(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = dn(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
            }

            getTitle() {
                let t = this._element.getAttribute("data-bs-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
            }

            updateAttachment(t) {
                return "right" === t ? "end" : "left" === t ? "start" : t
            }

            _initializeOnDelegatedTarget(t, e) {
                const n = this.constructor.DATA_KEY;
                return (e = e || qt.get(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), qt.set(t.delegateTarget, n, e)), e
            }

            _getOffset() {
                const {offset: t} = this.config;
                return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
            }

            _getPopperConfig(t) {
                const e = {
                    placement: t,
                    modifiers: [{
                        name: "flip",
                        options: {fallbackPlacements: this.config.fallbackPlacements}
                    }, {name: "offset", options: {offset: this._getOffset()}}, {
                        name: "preventOverflow",
                        options: {boundary: this.config.boundary}
                    }, {name: "arrow", options: {element: `.${this.constructor.NAME}-arrow`}}, {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: t => this._handlePopperPlacementChange(t)
                    }],
                    onFirstUpdate: t => {
                        t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                    }
                };
                return {...e, ..."function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig}
            }

            _addAttachmentClass(t) {
                this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
            }

            _getContainer() {
                return !1 === this.config.container ? document.body : Pt(this.config.container) ? this.config.container : me.findOne(this.config.container)
            }

            _getAttachment(t) {
                return pn[t.toUpperCase()]
            }

            _setListeners() {
                this.config.trigger.split(" ").forEach(t => {
                    if ("click" === t) ce.on(this._element, this.constructor.Event.CLICK, this.config.selector, t => this.toggle(t)); else if ("manual" !== t) {
                        const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                            n = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                        ce.on(this._element, e, this.config.selector, t => this._enter(t)), ce.on(this._element, n, this.config.selector, t => this._leave(t))
                    }
                }), this._hideModalHandler = () => {
                    this._element && this.hide()
                }, ce.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = {
                    ...this.config,
                    trigger: "manual",
                    selector: ""
                } : this._fixTitle()
            }

            _fixTitle() {
                const t = this._element.getAttribute("title"),
                    e = typeof this._element.getAttribute("data-bs-original-title");
                (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
            }

            _enter(t, e) {
                e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(() => {
                    "show" === e._hoverState && e.show()
                }, e.config.delay.show) : e.show())
            }

            _leave(t, e) {
                e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(() => {
                    "out" === e._hoverState && e.hide()
                }, e.config.delay.hide) : e.hide())
            }

            _isWithActiveTrigger() {
                for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1
            }

            _getConfig(t) {
                const e = ge.getDataAttributes(this._element);
                return Object.keys(e).forEach(t => {
                    un.has(t) && delete e[t]
                }), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = {...this.constructor.Default, ...e, ..."object" == typeof t && t ? t : {}}).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Mt("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = dn(t.template, t.allowList, t.sanitizeFn)), t
            }

            _getDelegateConfig() {
                const t = {};
                if (this.config) for (const e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }

            _cleanTipClass() {
                const t = this.getTipElement(), e = t.getAttribute("class").match(hn);
                null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
            }

            _handlePopperPlacementChange(t) {
                const {state: e} = t;
                e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    let e = qt.get(this, "bs.tooltip");
                    const n = "object" == typeof t && t;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new _n(this, n)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }))
            }
        }

        Ft("tooltip", _n);
        const bn = new RegExp("(^|\\s)bs-popover\\S+", "g"), vn = {
            ..._n.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }, yn = {..._n.DefaultType, content: "(string|element|function)"}, wn = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };

        class En extends _n {
            static get Default() {
                return vn
            }

            static get NAME() {
                return "popover"
            }

            static get DATA_KEY() {
                return "bs.popover"
            }

            static get Event() {
                return wn
            }

            static get EVENT_KEY() {
                return ".bs.popover"
            }

            static get DefaultType() {
                return yn
            }

            isWithContent() {
                return this.getTitle() || this._getContent()
            }

            setContent() {
                const t = this.getTipElement();
                this.setElementContent(me.findOne(".popover-header", t), this.getTitle());
                let e = this._getContent();
                "function" == typeof e && (e = e.call(this._element)), this.setElementContent(me.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
            }

            _addAttachmentClass(t) {
                this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
            }

            _getContent() {
                return this._element.getAttribute("data-bs-content") || this.config.content
            }

            _cleanTipClass() {
                const t = this.getTipElement(), e = t.getAttribute("class").match(bn);
                null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    let e = qt.get(this, "bs.popover");
                    const n = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new En(this, n), qt.set(this, "bs.popover", e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }))
            }
        }

        Ft("popover", En);
        const Tn = {offset: 10, method: "auto", target: ""},
            An = {offset: "number", method: "string", target: "(string|element)"};

        class On extends de {
            constructor(t, e) {
                super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ce.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
            }

            static get Default() {
                return Tn
            }

            static get DATA_KEY() {
                return "bs.scrollspy"
            }

            refresh() {
                const t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    e = "auto" === this._config.method ? t : this._config.method,
                    n = "position" === e ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                me.find(this._selector).map(t => {
                    const i = Ct(t), s = i ? me.findOne(i) : null;
                    if (s) {
                        const t = s.getBoundingClientRect();
                        if (t.width || t.height) return [ge[e](s).top + n, i]
                    }
                    return null
                }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
                    this._offsets.push(t[0]), this._targets.push(t[1])
                })
            }

            dispose() {
                super.dispose(), ce.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }

            _getConfig(t) {
                if ("string" != typeof (t = {...Tn, ...ge.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {}}).target && Pt(t.target)) {
                    let {id: e} = t.target;
                    e || (e = Dt("scrollspy"), t.target.id = e), t.target = "#" + e
                }
                return Mt("scrollspy", t, An), t
            }

            _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }

            _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }

            _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }

            _process() {
                const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    const t = this._targets[this._targets.length - 1];
                    this._activeTarget !== t && this._activate(t)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (let e = this._offsets.length; e--;) {
                        this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                    }
                }
            }

            _activate(t) {
                this._activeTarget = t, this._clear();
                const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
                    n = me.findOne(e.join(","));
                n.classList.contains("dropdown-item") ? (me.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), me.parents(n, ".nav, .list-group").forEach(t => {
                    me.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), me.prev(t, ".nav-item").forEach(t => {
                        me.children(t, ".nav-link").forEach(t => t.classList.add("active"))
                    })
                })), ce.trigger(this._scrollElement, "activate.bs.scrollspy", {relatedTarget: t})
            }

            _clear() {
                me.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    const e = On.getInstance(this) || new On(this, "object" == typeof t ? t : {});
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }))
            }
        }

        ce.on(window, "load.bs.scrollspy.data-api", () => {
            me.find('[data-bs-spy="scroll"]').forEach(t => new On(t))
        }), Ft("scrollspy", On);

        class Ln extends de {
            static get DATA_KEY() {
                return "bs.tab"
            }

            show() {
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
                let t;
                const e = St(this._element), n = this._element.closest(".nav, .list-group");
                if (n) {
                    const e = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
                    t = me.find(e, n), t = t[t.length - 1]
                }
                const i = t ? ce.trigger(t, "hide.bs.tab", {relatedTarget: this._element}) : null;
                if (ce.trigger(this._element, "show.bs.tab", {relatedTarget: t}).defaultPrevented || null !== i && i.defaultPrevented) return;
                this._activate(this._element, n);
                const s = () => {
                    ce.trigger(t, "hidden.bs.tab", {relatedTarget: this._element}), ce.trigger(this._element, "shown.bs.tab", {relatedTarget: t})
                };
                e ? this._activate(e, e.parentNode, s) : s()
            }

            _activate(t, e, n) {
                const i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? me.children(e, ".active") : me.find(":scope > li > .active", e))[0],
                    s = n && i && i.classList.contains("fade"), o = () => this._transitionComplete(t, i, n);
                if (i && s) {
                    const t = jt(i);
                    i.classList.remove("show"), ce.one(i, "transitionend", o), It(i, t)
                } else o()
            }

            _transitionComplete(t, e, n) {
                if (e) {
                    e.classList.remove("active");
                    const t = me.findOne(":scope > .dropdown-menu .active", e.parentNode);
                    t && t.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), $t(t), t.classList.contains("fade") && t.classList.add("show");
                let i = t.parentNode;
                if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
                    const e = t.closest(".dropdown");
                    e && me.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")), t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    const e = qt.get(this, "bs.tab") || new Ln(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }))
            }
        }

        ce.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
            if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Rt(this)) return;
            (qt.get(this, "bs.tab") || new Ln(this)).show()
        })), Ft("tab", Ln);
        const kn = {animation: "boolean", autohide: "boolean", delay: "number"},
            Dn = {animation: !0, autohide: !0, delay: 5e3};

        class xn extends de {
            constructor(t, e) {
                super(t), this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }

            static get DefaultType() {
                return kn
            }

            static get Default() {
                return Dn
            }

            static get DATA_KEY() {
                return "bs.toast"
            }

            show() {
                if (ce.trigger(this._element, "show.bs.toast").defaultPrevented) return;
                this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                const t = () => {
                    this._element.classList.remove("showing"), this._element.classList.add("show"), ce.trigger(this._element, "shown.bs.toast"), this._config.autohide && (this._timeout = setTimeout(() => {
                        this.hide()
                    }, this._config.delay))
                };
                if (this._element.classList.remove("hide"), $t(this._element), this._element.classList.add("showing"), this._config.animation) {
                    const e = jt(this._element);
                    ce.one(this._element, "transitionend", t), It(this._element, e)
                } else t()
            }

            hide() {
                if (!this._element.classList.contains("show")) return;
                if (ce.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
                const t = () => {
                    this._element.classList.add("hide"), ce.trigger(this._element, "hidden.bs.toast")
                };
                if (this._element.classList.remove("show"), this._config.animation) {
                    const e = jt(this._element);
                    ce.one(this._element, "transitionend", t), It(this._element, e)
                } else t()
            }

            dispose() {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose(), this._config = null
            }

            _getConfig(t) {
                return t = {...Dn, ...ge.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {}}, Mt("toast", t, this.constructor.DefaultType), t
            }

            _setListeners() {
                ce.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide())
            }

            _clearTimeout() {
                clearTimeout(this._timeout), this._timeout = null
            }

            static jQueryInterface(t) {
                return this.each((function () {
                    let e = qt.get(this, "bs.toast");
                    if (e || (e = new xn(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                        e[t](this)
                    }
                }))
            }
        }

        Ft("toast", xn)
    }
});
