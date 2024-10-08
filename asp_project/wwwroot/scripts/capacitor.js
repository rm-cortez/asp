/*! Capacitor: https://capacitor.ionicframework.com/ - MIT License */
var capacitorExports = function(e) {
    "use strict";
    var t, r, n, i, o, s, a, u, c, l, d, p, h, f;
    (t = e.CameraSource || (e.CameraSource = {})).Prompt = "PROMPT", t.Camera = "CAMERA", t.Photos = "PHOTOS", (r = e.CameraDirection || (e.CameraDirection = {})).Rear = "REAR", r.Front = "FRONT", (n = e.CameraResultType || (e.CameraResultType = {})).Uri = "uri", n.Base64 = "base64", n.DataUrl = "dataUrl", (i = e.FilesystemDirectory || (e.FilesystemDirectory = {})).Documents = "DOCUMENTS", i.Data = "DATA", i.Cache = "CACHE", i.External = "EXTERNAL", i.ExternalStorage = "EXTERNAL_STORAGE", (o = e.FilesystemEncoding || (e.FilesystemEncoding = {})).UTF8 = "utf8", o.ASCII = "ascii", o.UTF16 = "utf16", (s = e.HapticsImpactStyle || (e.HapticsImpactStyle = {})).Heavy = "HEAVY", s.Medium = "MEDIUM", s.Light = "LIGHT", (a = e.HapticsNotificationType || (e.HapticsNotificationType = {})).SUCCESS = "SUCCESS", a.WARNING = "WARNING", a.ERROR = "ERROR", (u = e.KeyboardStyle || (e.KeyboardStyle = {})).Dark = "DARK", u.Light = "LIGHT", (c = e.KeyboardResize || (e.KeyboardResize = {})).Body = "body", c.Ionic = "ionic", c.Native = "native", c.None = "none", (l = e.ActionSheetOptionStyle || (e.ActionSheetOptionStyle = {})).Default = "DEFAULT", l.Destructive = "DESTRUCTIVE", l.Cancel = "CANCEL", (d = e.PermissionType || (e.PermissionType = {})).Camera = "camera", d.Photos = "photos", d.Geolocation = "geolocation", d.Notifications = "notifications", d.ClipboardRead = "clipboard-read", d.ClipboardWrite = "clipboard-write", d.Microphone = "microphone", (p = e.PhotosAlbumType || (e.PhotosAlbumType = {})).Smart = "smart", p.Shared = "shared", p.User = "user", (h = e.StatusBarStyle || (e.StatusBarStyle = {})).Dark = "DARK", h.Light = "LIGHT", (f = e.StatusBarAnimation || (e.StatusBarAnimation = {})).None = "NONE", f.Slide = "SLIDE", f.Fade = "FADE";
    var m, v = function() {
            function e() {
                var e = this;
                this.platform = "web", this.isNative = !1, this.Plugins = {}, "undefined" != typeof Proxy && (this.Plugins = new Proxy(this.Plugins, {
                    get: function(t, r) {
                        if (void 0 === t[r]) {
                            var n = e;
                            return new Proxy({}, {
                                get: function(e, t) {
                                    return void 0 === e[t] ? n.pluginMethodNoop.bind(n, e, t, r) : e[t]
                                }
                            })
                        }
                        return t[r]
                    }
                }))
            }
            return e.prototype.pluginMethodNoop = function(e, t, r) {
                return Promise.reject(r + " does not have web implementation.")
            }, e.prototype.getPlatform = function() {
                return this.platform
            }, e.prototype.isPluginAvailable = function(e) {
                return this.Plugins.hasOwnProperty(e)
            }, e.prototype.convertFileSrc = function(e) {
                return e
            }, e.prototype.handleError = function(e) {
                console.error(e)
            }, e
        }(),
        y = (m = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).Capacitor = m.Capacitor || new v,
        g = y.Plugins,
        w = function() {
            function e() {
                this.plugins = {}, this.loadedPlugins = {}
            }
            return e.prototype.addPlugin = function(e) {
                this.plugins[e.config.name] = e
            }, e.prototype.getPlugin = function(e) {
                return this.plugins[e]
            }, e.prototype.loadPlugin = function(e) {
                var t = this.getPlugin(e);
                t ? t.load() : console.error("Unable to load web plugin " + e + ", no such plugin found.")
            }, e.prototype.getPlugins = function() {
                var e = [];
                for (var t in this.plugins) e.push(this.plugins[t]);
                return e
            }, e
        }(),
        b = new w,
        P = function() {
            function e(e, t) {
                this.config = e, this.loaded = !1, this.listeners = {}, this.windowListeners = {}, t ? t.addPlugin(this) : b.addPlugin(this)
            }
            return e.prototype.addWindowListener = function(e) {
                window.addEventListener(e.windowEventName, e.handler), e.registered = !0
            }, e.prototype.removeWindowListener = function(e) {
                e && (window.removeEventListener(e.windowEventName, e.handler), e.registered = !1)
            }, e.prototype.addListener = function(e, t) {
                var r = this;
                this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
                var n = this.windowListeners[e];
                return n && !n.registered && this.addWindowListener(n), {
                    remove: function() {
                        r.removeListener(e, t)
                    }
                }
            }, e.prototype.removeListener = function(e, t) {
                var r = this.listeners[e];
                if (r) {
                    var n = r.indexOf(t);
                    this.listeners[e].splice(n, 1), this.listeners[e].length || this.removeWindowListener(this.windowListeners[e])
                }
            }, e.prototype.removeAllListeners = function() {
                for (var e in this.listeners = {}, this.windowListeners) this.removeWindowListener(this.windowListeners[e]);
                this.windowListeners = {}
            }, e.prototype.notifyListeners = function(e, t) {
                var r = this.listeners[e];
                r && r.forEach((function(e) {
                    return e(t)
                }))
            }, e.prototype.hasListeners = function(e) {
                return !!this.listeners[e].length
            }, e.prototype.registerWindowListener = function(e, t) {
                var r = this;
                this.windowListeners[t] = {
                    registered: !1,
                    windowEventName: e,
                    pluginEventName: t,
                    handler: function(e) {
                        r.notifyListeners(t, e)
                    }
                }
            }, e.prototype.requestPermissions = function() {
                return Capacitor.isNative ? Capacitor.nativePromise(this.config.name, "requestPermissions", {}) : Promise.resolve({
                    results: []
                })
            }, e.prototype.load = function() {
                this.loaded = !0
            }, e
        }(),
        S = function(e) {
            for (var t = 0, r = b.getPlugins(); t < r.length; t++) {
                var n = r[t];
                E(e, n)
            }
        },
        E = function(e, t) {
            e.hasOwnProperty(t.config.name) && ! function(e) {
                return e.config.platforms && e.config.platforms.indexOf(Capacitor.platform) >= 0
            }(t) || (e[t.config.name] = t)
        },
        x = function(e, t) {
            return (x = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
        };

    function R(e, t) {
        function r() {
            this.constructor = e
        }
        x(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    }

    function C(e, t, r, n) {
        return new(r || (r = Promise))((function(i, o) {
            function s(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                    e(t)
                }))).then(s, a)
            }
            u((n = n.apply(e, t || [])).next())
        }))
    }

    function T(e, t) {
        var r, n, i, o, s = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return s.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < i[1]) {
                                    s.label = i[1], i = o;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(o);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = t.call(e, s)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    }
    var A = function(e) {
            function t() {
                return e.call(this, {
                    name: "Accessibility",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.isScreenReaderEnabled = function() {
                throw new Error("Feature not available in the browser")
            }, t.prototype.speak = function(e) {
                if (!("speechSynthesis" in window)) return Promise.reject("Browser does not support the Speech Synthesis API");
                var t = new SpeechSynthesisUtterance(e.value);
                return e.language && (t.lang = e.language), window.speechSynthesis.speak(t), Promise.resolve()
            }, t
        }(P),
        L = new A,
        D = function(e) {
            function t() {
                var t = e.call(this, {
                    name: "App",
                    platforms: ["web"]
                }) || this;
                return "undefined" != typeof document && document.addEventListener("visibilitychange", t.handleVisibilityChange.bind(t), !1), t
            }
            return R(t, e), t.prototype.exitApp = function() {
                throw new Error("Method not implemented.")
            }, t.prototype.canOpenUrl = function(e) {
                return Promise.resolve({
                    value: !0
                })
            }, t.prototype.openUrl = function(e) {
                return Promise.resolve({
                    completed: !0
                })
            }, t.prototype.getLaunchUrl = function() {
                return Promise.resolve({
                    url: ""
                })
            }, t.prototype.getState = function() {
                return Promise.resolve({
                    isActive: !0 !== document.hidden
                })
            }, t.prototype.handleVisibilityChange = function() {
                var e = {
                    isActive: !0 !== document.hidden
                };
                this.notifyListeners("appStateChange", e)
            }, t
        }(P),
        F = new D,
        I = function(e) {
            function t() {
                return e.call(this, {
                    name: "Browser",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.open = function(e) {
                return C(this, void 0, void 0, (function() {
                    return T(this, (function(t) {
                        return this._lastWindow = window.open(e.url, e.windowName || "_blank"), [2, Promise.resolve()]
                    }))
                }))
            }, t.prototype.prefetch = function(e) {
                return C(this, void 0, void 0, (function() {
                    return T(this, (function(e) {
                        return [2, Promise.resolve()]
                    }))
                }))
            }, t.prototype.close = function() {
                return C(this, void 0, void 0, (function() {
                    return T(this, (function(e) {
                        return this._lastWindow && this._lastWindow.close(), [2, Promise.resolve()]
                    }))
                }))
            }, t
        }(P),
        N = new I,
        O = function(t) {
            function r() {
                return t.call(this, {
                    name: "Camera",
                    platforms: ["web"]
                }) || this
            }
            return R(r, t), r.prototype.getPhoto = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t = this;
                    return T(this, (function(r) {
                        return [2, new Promise((function(r, n) {
                            return C(t, void 0, void 0, (function() {
                                var t, i = this;
                                return T(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e.webUseInput ? (this.fileInputExperience(e, r), [3, 7]) : [3, 1];
                                        case 1:
                                            if (!customElements.get("pwa-camera-modal")) return [3, 6];
                                            t = document.createElement("pwa-camera-modal"), document.body.appendChild(t), o.label = 2;
                                        case 2:
                                            return o.trys.push([2, 4, , 5]), [4, t.componentOnReady()];
                                        case 3:
                                            return o.sent(), t.addEventListener("onPhoto", (function(o) {
                                                return C(i, void 0, void 0, (function() {
                                                    var i, s;
                                                    return T(this, (function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                return null !== (i = o.detail) ? [3, 1] : (n("User cancelled photos app"), [3, 4]);
                                                            case 1:
                                                                return i instanceof Error ? (n(i.message), [3, 4]) : [3, 2];
                                                            case 2:
                                                                return s = r, [4, this._getCameraPhoto(i, e)];
                                                            case 3:
                                                                s.apply(void 0, [a.sent()]), a.label = 4;
                                                            case 4:
                                                                return t.dismiss(), document.body.removeChild(t), [2]
                                                        }
                                                    }))
                                                }))
                                            })), t.present(), [3, 5];
                                        case 4:
                                            return o.sent(), this.fileInputExperience(e, r), [3, 5];
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."), this.fileInputExperience(e, r), o.label = 7;
                                        case 7:
                                            return [2]
                                    }
                                }))
                            }))
                        }))]
                    }))
                }))
            }, r.prototype.fileInputExperience = function(t, r) {
                var n = document.querySelector("#_capacitor-camera-input"),
                    i = function() {
                        n.parentNode && n.parentNode.removeChild(n)
                    };
                n || ((n = document.createElement("input")).id = "_capacitor-camera-input", n.type = "file", document.body.appendChild(n)), n.accept = "image/*", n.capture = !0, t.source === e.CameraSource.Photos || t.source === e.CameraSource.Prompt ? n.removeAttribute("capture") : t.direction === e.CameraDirection.Front ? n.capture = "user" : t.direction === e.CameraDirection.Rear && (n.capture = "environment"), n.addEventListener("change", (function(o) {
                    var s = n.files[0],
                        a = "jpeg";
                    if ("image/png" === s.type ? a = "png" : "image/gif" === s.type && (a = "gif"), t.resultType === e.CameraResultType.DataUrl || t.resultType === e.CameraResultType.Base64) {
                        var u = new FileReader;
                        u.addEventListener("load", (function() {
                            if (t.resultType === e.CameraResultType.DataUrl) r({
                                dataUrl: u.result,
                                format: a
                            });
                            else if (t.resultType === e.CameraResultType.Base64) {
                                var n = u.result.split(",")[1];
                                r({
                                    base64String: n,
                                    format: a
                                })
                            }
                            i()
                        })), u.readAsDataURL(s)
                    } else r({
                        webPath: URL.createObjectURL(s),
                        format: a
                    }), i()
                })), n.click()
            }, r.prototype._getCameraPhoto = function(t, r) {
                return new Promise((function(n, i) {
                    var o = new FileReader,
                        s = t.type.split("/")[1];
                    r.resultType === e.CameraResultType.Uri ? n({
                        webPath: URL.createObjectURL(t),
                        format: s
                    }) : (o.readAsDataURL(t), o.onloadend = function() {
                        var t = o.result;
                        r.resultType === e.CameraResultType.DataUrl ? n({
                            dataUrl: t,
                            format: s
                        }) : n({
                            base64String: t.split(",")[1],
                            format: s
                        })
                    }, o.onerror = function(e) {
                        i(e)
                    })
                }))
            }, r
        }(P),
        _ = new O,
        W = function(e) {
            function t() {
                return e.call(this, {
                    name: "Clipboard",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.write = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r, n;
                    return T(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return navigator.clipboard ? void 0 !== e.string || e.url ? navigator.clipboard.writeText ? [4, navigator.clipboard.writeText(void 0 !== e.string ? e.string : e.url)] : [2, Promise.reject("Writting to clipboard not supported in this browser")] : [3, 2] : [2, Promise.reject("Clipboard API not available in this browser")];
                            case 1:
                                return i.sent(), [3, 10];
                            case 2:
                                if (!e.image) return [3, 9];
                                if (!navigator.clipboard.write) return [2, Promise.reject("Setting images not supported in this browser")];
                                i.label = 3;
                            case 3:
                                return i.trys.push([3, 7, , 8]), [4, fetch(e.image)];
                            case 4:
                                return [4, i.sent().blob()];
                            case 5:
                                return t = i.sent(), r = new ClipboardItem(((n = {})[t.type] = t, n)), [4, navigator.clipboard.write([r])];
                            case 6:
                                return i.sent(), [3, 8];
                            case 7:
                                return i.sent(), [2, Promise.reject("Failed to write image")];
                            case 8:
                                return [3, 10];
                            case 9:
                                return [2, Promise.reject("Nothing to write")];
                            case 10:
                                return [2, Promise.resolve()]
                        }
                    }))
                }))
            }, t.prototype.read = function() {
                return C(this, void 0, void 0, (function() {
                    var e, t, r, n;
                    return T(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return navigator.clipboard ? navigator.clipboard.read ? [3, 1] : navigator.clipboard.readText ? [2, this.readText()] : [2, Promise.reject("Reading from clipboard not supported in this browser")] : [2, Promise.reject("Clipboard API not available in this browser")];
                            case 1:
                                return i.trys.push([1, 5, , 6]), [4, navigator.clipboard.read()];
                            case 2:
                                return e = i.sent(), t = e[0].types[0], [4, e[0].getType(t)];
                            case 3:
                                return r = i.sent(), [4, this._getBlobData(r, t)];
                            case 4:
                                return n = i.sent(), [2, Promise.resolve({
                                    value: n,
                                    type: t
                                })];
                            case 5:
                                return i.sent(), [2, this.readText()];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.readText = function() {
                return C(this, void 0, void 0, (function() {
                    var e;
                    return T(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, navigator.clipboard.readText()];
                            case 1:
                                return e = t.sent(), [2, Promise.resolve({
                                    value: e,
                                    type: "text/plain"
                                })]
                        }
                    }))
                }))
            }, t.prototype._getBlobData = function(e, t) {
                return new Promise((function(r, n) {
                    var i = new FileReader;
                    t.includes("image") ? i.readAsDataURL(e) : i.readAsText(e), i.onloadend = function() {
                        var e = i.result;
                        r(e)
                    }, i.onerror = function(e) {
                        n(e)
                    }
                }))
            }, t
        }(P),
        U = new W,
        k = function(t) {
            function r() {
                var r = t.call(this, {
                    name: "Filesystem",
                    platforms: ["web"]
                }) || this;
                return r.DEFAULT_DIRECTORY = e.FilesystemDirectory.Data, r.DB_VERSION = 1, r.DB_NAME = "Disc", r._writeCmds = ["add", "put", "delete"], r
            }
            return R(r, t), r.prototype.initDb = function() {
                return C(this, void 0, void 0, (function() {
                    var e = this;
                    return T(this, (function(t) {
                        if (void 0 !== this._db) return [2, this._db];
                        if (!("indexedDB" in window)) throw new Error("This browser doesn't support IndexedDB");
                        return [2, new Promise((function(t, n) {
                            var i = indexedDB.open(e.DB_NAME, e.DB_VERSION);
                            i.onupgradeneeded = r.doUpgrade, i.onsuccess = function() {
                                e._db = i.result, t(i.result)
                            }, i.onerror = function() {
                                return n(i.error)
                            }, i.onblocked = function() {
                                console.warn("db blocked")
                            }
                        }))]
                    }))
                }))
            }, r.doUpgrade = function(e) {
                var t = e.target.result;
                switch (e.oldVersion) {
                    case 0:
                    case 1:
                    default:
                        t.objectStoreNames.contains("FileStorage") && t.deleteObjectStore("FileStorage"), t.createObjectStore("FileStorage", {
                            keyPath: "path"
                        }).createIndex("by_folder", "folder")
                }
            }, r.prototype.dbRequest = function(e, t) {
                return C(this, void 0, void 0, (function() {
                    var r;
                    return T(this, (function(n) {
                        return r = -1 !== this._writeCmds.indexOf(e) ? "readwrite" : "readonly", [2, this.initDb().then((function(n) {
                            return new Promise((function(i, o) {
                                var s = n.transaction(["FileStorage"], r).objectStore("FileStorage"),
                                    a = s[e].apply(s, t);
                                a.onsuccess = function() {
                                    return i(a.result)
                                }, a.onerror = function() {
                                    return o(a.error)
                                }
                            }))
                        }))]
                    }))
                }))
            }, r.prototype.dbIndexRequest = function(e, t, r) {
                return C(this, void 0, void 0, (function() {
                    var n;
                    return T(this, (function(i) {
                        return n = -1 !== this._writeCmds.indexOf(t) ? "readwrite" : "readonly", [2, this.initDb().then((function(i) {
                            return new Promise((function(o, s) {
                                var a = i.transaction(["FileStorage"], n).objectStore("FileStorage").index(e),
                                    u = a[t].apply(a, r);
                                u.onsuccess = function() {
                                    return o(u.result)
                                }, u.onerror = function() {
                                    return s(u.error)
                                }
                            }))
                        }))]
                    }))
                }))
            }, r.prototype.getPath = function(e, t) {
                e = e || this.DEFAULT_DIRECTORY;
                var r = void 0 !== t ? t.replace(/^[/]+|[/]+$/g, "") : "",
                    n = "/" + e;
                return "" !== t && (n += "/" + r), n
            }, r.prototype.clear = function() {
                return C(this, void 0, void 0, (function() {
                    var e, t;
                    return T(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.initDb()];
                            case 1:
                                return e = r.sent(), t = e.transaction(["FileStorage"], "readwrite"), t.objectStore("FileStorage").clear(), [2, {}]
                        }
                    }))
                }))
            }, r.prototype.readFile = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r;
                    return T(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                            case 1:
                                if (void 0 === (r = n.sent())) throw Error("File does not exist.");
                                return [2, {
                                    data: r.content
                                }]
                        }
                    }))
                }))
            }, r.prototype.writeFile = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r, n, i, o, s, a, u, c, l;
                    return T(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                return t = this.getPath(e.directory, e.path), r = e.data, n = e.recursive, [4, this.dbRequest("get", [t])];
                            case 1:
                                if ((i = d.sent()) && "directory" === i.type) throw "The supplied path is a directory.";
                                return o = e.encoding, s = t.substr(0, t.lastIndexOf("/")), [4, this.dbRequest("get", [s])];
                            case 2:
                                return void 0 !== d.sent() || -1 === (a = s.indexOf("/", 1)) ? [3, 4] : (u = s.substr(a), [4, this.mkdir({
                                    path: u,
                                    directory: e.directory,
                                    recursive: n
                                })]);
                            case 3:
                                d.sent(), d.label = 4;
                            case 4:
                                return c = Date.now(), l = {
                                    path: t,
                                    folder: s,
                                    type: "file",
                                    size: r.length,
                                    ctime: c,
                                    mtime: c,
                                    content: !o && r.indexOf(",") >= 0 ? r.split(",")[1] : r
                                }, [4, this.dbRequest("put", [l])];
                            case 5:
                                return d.sent(), [2, {
                                    uri: l.path
                                }]
                        }
                    }))
                }))
            }, r.prototype.appendFile = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r, n, i, o, s, a, u, c;
                    return T(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return t = this.getPath(e.directory, e.path), r = e.data, n = t.substr(0, t.lastIndexOf("/")), i = Date.now(), o = i, [4, this.dbRequest("get", [t])];
                            case 1:
                                if ((s = l.sent()) && "directory" === s.type) throw "The supplied path is a directory.";
                                return [4, this.dbRequest("get", [n])];
                            case 2:
                                return void 0 !== l.sent() || -1 === (a = n.indexOf("/", 1)) ? [3, 4] : (u = n.substr(a), [4, this.mkdir({
                                    path: u,
                                    directory: e.directory,
                                    recursive: !0
                                })]);
                            case 3:
                                l.sent(), l.label = 4;
                            case 4:
                                return void 0 !== s && (r = s.content + r, o = s.ctime), c = {
                                    path: t,
                                    folder: n,
                                    type: "file",
                                    size: r.length,
                                    ctime: o,
                                    mtime: i,
                                    content: r
                                }, [4, this.dbRequest("put", [c])];
                            case 5:
                                return l.sent(), [2, {}]
                        }
                    }))
                }))
            }, r.prototype.deleteFile = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t;
                    return T(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                            case 1:
                                if (void 0 === r.sent()) throw Error("File does not exist.");
                                return [4, this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(t)])];
                            case 2:
                                if (0 !== r.sent().length) throw Error("Folder is not empty.");
                                return [4, this.dbRequest("delete", [t])];
                            case 3:
                                return r.sent(), [2, {}]
                        }
                    }))
                }))
            }, r.prototype.mkdir = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r, n, i, o, s, a, u, c;
                    return T(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return t = this.getPath(e.directory, e.path), r = e.recursive, n = t.substr(0, t.lastIndexOf("/")), i = (t.match(/\//g) || []).length, [4, this.dbRequest("get", [n])];
                            case 1:
                                return o = l.sent(), [4, this.dbRequest("get", [t])];
                            case 2:
                                if (s = l.sent(), 1 === i) throw Error("Cannot create Root directory");
                                if (void 0 !== s) throw Error("Current directory does already exist.");
                                if (!r && 2 !== i && void 0 === o) throw Error("Parent directory must exist");
                                return r && 2 !== i && void 0 === o ? (a = n.substr(n.indexOf("/", 1)), [4, this.mkdir({
                                    path: a,
                                    directory: e.directory,
                                    recursive: r
                                })]) : [3, 4];
                            case 3:
                                l.sent(), l.label = 4;
                            case 4:
                                return u = Date.now(), c = {
                                    path: t,
                                    folder: n,
                                    type: "directory",
                                    size: 0,
                                    ctime: u,
                                    mtime: u
                                }, [4, this.dbRequest("put", [c])];
                            case 5:
                                return l.sent(), [2, {}]
                        }
                    }))
                }))
            }, r.prototype.rmdir = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r, n, i, o, s, a, u, c, l;
                    return T(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                return t = e.path, r = e.directory, n = e.recursive, i = this.getPath(r, t), [4, this.dbRequest("get", [i])];
                            case 1:
                                if (void 0 === (o = d.sent())) throw Error("Folder does not exist.");
                                if ("directory" !== o.type) throw Error("Requested path is not a directory");
                                return [4, this.readdir({
                                    path: t,
                                    directory: r
                                })];
                            case 2:
                                if (0 !== (s = d.sent()).files.length && !n) throw Error("Folder is not empty");
                                a = 0, u = s.files, d.label = 3;
                            case 3:
                                return a < u.length ? (c = u[a], l = t + "/" + c, [4, this.stat({
                                    path: l,
                                    directory: r
                                })]) : [3, 9];
                            case 4:
                                return "file" !== d.sent().type ? [3, 6] : [4, this.deleteFile({
                                    path: l,
                                    directory: r
                                })];
                            case 5:
                                return d.sent(), [3, 8];
                            case 6:
                                return [4, this.rmdir({
                                    path: l,
                                    directory: r,
                                    recursive: n
                                })];
                            case 7:
                                d.sent(), d.label = 8;
                            case 8:
                                return a++, [3, 3];
                            case 9:
                                return [4, this.dbRequest("delete", [i])];
                            case 10:
                                return d.sent(), [2, {}]
                        }
                    }))
                }))
            }, r.prototype.readdir = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r, n;
                    return T(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                            case 1:
                                if (r = i.sent(), "" !== e.path && void 0 === r) throw Error("Folder does not exist.");
                                return [4, this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(t)])];
                            case 2:
                                return n = i.sent(), [2, {
                                    files: n.map((function(e) {
                                        return e.substring(t.length + 1)
                                    }))
                                }]
                        }
                    }))
                }))
            }, r.prototype.getUri = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r;
                    return T(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                            case 1:
                                return void 0 !== (r = n.sent()) ? [3, 3] : [4, this.dbRequest("get", [t + "/"])];
                            case 2:
                                r = n.sent(), n.label = 3;
                            case 3:
                                if (void 0 === r) throw Error("Entry does not exist.");
                                return [2, {
                                    uri: r.path
                                }]
                        }
                    }))
                }))
            }, r.prototype.stat = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r;
                    return T(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return t = this.getPath(e.directory, e.path), [4, this.dbRequest("get", [t])];
                            case 1:
                                return void 0 !== (r = n.sent()) ? [3, 3] : [4, this.dbRequest("get", [t + "/"])];
                            case 2:
                                r = n.sent(), n.label = 3;
                            case 3:
                                if (void 0 === r) throw Error("Entry does not exist.");
                                return [2, {
                                    type: r.type,
                                    size: r.size,
                                    ctime: r.ctime,
                                    mtime: r.mtime,
                                    uri: r.path
                                }]
                        }
                    }))
                }))
            }, r.prototype.rename = function(e) {
                return C(this, void 0, void 0, (function() {
                    return T(this, (function(t) {
                        return [2, this._copy(e, !0)]
                    }))
                }))
            }, r.prototype.copy = function(e) {
                return C(this, void 0, void 0, (function() {
                    return T(this, (function(t) {
                        return [2, this._copy(e, !1)]
                    }))
                }))
            }, r.prototype._copy = function(e, t) {
                return void 0 === t && (t = !1), C(this, void 0, void 0, (function() {
                    var r, n, i, o, s, a, u, c, l, d, p, h, f, m, v, y, g = this;
                    return T(this, (function(w) {
                        switch (w.label) {
                            case 0:
                                if (r = e.to, n = e.from, i = e.directory, o = e.toDirectory, !r || !n) throw Error("Both to and from must be provided");
                                if (o || (o = i), s = this.getPath(i, n), a = this.getPath(o, r), s === a) return [2, {}];
                                if (a.startsWith(s)) throw Error("To path cannot contain the from path");
                                w.label = 1;
                            case 1:
                                return w.trys.push([1, 3, , 6]), [4, this.stat({
                                    path: r,
                                    directory: o
                                })];
                            case 2:
                                return u = w.sent(), [3, 6];
                            case 3:
                                return w.sent(), (c = r.split("/")).pop(), l = c.join("/"), c.length > 0 ? [4, this.stat({
                                    path: l,
                                    directory: o
                                })] : [3, 5];
                            case 4:
                                if ("directory" !== w.sent().type) throw new Error("Parent directory of the to path is a file");
                                w.label = 5;
                            case 5:
                                return [3, 6];
                            case 6:
                                if (u && "directory" === u.type) throw new Error("Cannot overwrite a directory with a file");
                                return [4, this.stat({
                                    path: n,
                                    directory: i
                                })];
                            case 7:
                                switch (d = w.sent(), p = function(e, t, r) {
                                        return C(g, void 0, void 0, (function() {
                                            var n, i;
                                            return T(this, (function(s) {
                                                switch (s.label) {
                                                    case 0:
                                                        return n = this.getPath(o, e), [4, this.dbRequest("get", [n])];
                                                    case 1:
                                                        return (i = s.sent()).ctime = t, i.mtime = r, [4, this.dbRequest("put", [i])];
                                                    case 2:
                                                        return s.sent(), [2]
                                                }
                                            }))
                                        }))
                                    }, d.type) {
                                    case "file":
                                        return [3, 8];
                                    case "directory":
                                        return [3, 15]
                                }
                                return [3, 28];
                            case 8:
                                return [4, this.readFile({
                                    path: n,
                                    directory: i
                                })];
                            case 9:
                                return h = w.sent(), t ? [4, this.deleteFile({
                                    path: n,
                                    directory: i
                                })] : [3, 11];
                            case 10:
                                w.sent(), w.label = 11;
                            case 11:
                                return [4, this.writeFile({
                                    path: r,
                                    directory: o,
                                    data: h.data
                                })];
                            case 12:
                                return w.sent(), t ? [4, p(r, d.ctime, d.mtime)] : [3, 14];
                            case 13:
                                w.sent(), w.label = 14;
                            case 14:
                                return [2, {}];
                            case 15:
                                if (u) throw Error("Cannot move a directory over an existing object");
                                w.label = 16;
                            case 16:
                                return w.trys.push([16, 20, , 21]), [4, this.mkdir({
                                    path: r,
                                    directory: o,
                                    recursive: !1
                                })];
                            case 17:
                                return w.sent(), t ? [4, p(r, d.ctime, d.mtime)] : [3, 19];
                            case 18:
                                w.sent(), w.label = 19;
                            case 19:
                                return [3, 21];
                            case 20:
                                return w.sent(), [3, 21];
                            case 21:
                                return [4, this.readdir({
                                    path: n,
                                    directory: i
                                })];
                            case 22:
                                f = w.sent().files, m = 0, v = f, w.label = 23;
                            case 23:
                                return m < v.length ? (y = v[m], [4, this._copy({
                                    from: n + "/" + y,
                                    to: r + "/" + y,
                                    directory: i,
                                    toDirectory: o
                                }, t)]) : [3, 26];
                            case 24:
                                w.sent(), w.label = 25;
                            case 25:
                                return m++, [3, 23];
                            case 26:
                                return t ? [4, this.rmdir({
                                    path: n,
                                    directory: i
                                })] : [3, 28];
                            case 27:
                                w.sent(), w.label = 28;
                            case 28:
                                return [2, {}]
                        }
                    }))
                }))
            }, r._debug = !0, r
        }(P),
        q = new k,
        j = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            return t.forEach((function(t) {
                if (t && "object" == typeof t)
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            })), e
        },
        B = function(e) {
            function t() {
                return e.call(this, {
                    name: "Geolocation",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.getCurrentPosition = function(e) {
                var t = this;
                return new Promise((function(r, n) {
                    return t.requestPermissions().then((function(t) {
                        window.navigator.geolocation.getCurrentPosition((function(e) {
                            r(e)
                        }), (function(e) {
                            n(e)
                        }), j({
                            enableHighAccuracy: !0,
                            timeout: 1e4,
                            maximumAge: 0
                        }, e))
                    }))
                }))
            }, t.prototype.watchPosition = function(e, t) {
                return "" + window.navigator.geolocation.watchPosition((function(e) {
                    t(e)
                }), (function(e) {
                    t(null, e)
                }), j({
                    enableHighAccuracy: !0,
                    timeout: 1e4,
                    maximumAge: 0
                }, e))
            }, t.prototype.clearWatch = function(e) {
                return window.navigator.geolocation.clearWatch(parseInt(e.id, 10)), Promise.resolve()
            }, t
        }(P),
        K = new B,
        M = function(e) {
            function t() {
                return e.call(this, {
                    name: "Device",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.getInfo = function() {
                return C(this, void 0, void 0, (function() {
                    var e, t;
                    return T(this, (function(r) {
                        return e = navigator.userAgent, t = this.parseUa(e), [2, Promise.resolve({
                            model: t.model,
                            platform: "web",
                            appVersion: "",
                            appBuild: "",
                            appId: "",
                            appName: "",
                            operatingSystem: t.operatingSystem,
                            osVersion: t.osVersion,
                            manufacturer: navigator.vendor,
                            isVirtual: !1,
                            uuid: this.getUid()
                        })]
                    }))
                }))
            }, t.prototype.getBatteryInfo = function() {
                return C(this, void 0, void 0, (function() {
                    var e;
                    return T(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                e = {}, t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, navigator.getBattery()];
                            case 2:
                                return e = t.sent(), [3, 4];
                            case 3:
                                return t.sent(), [3, 4];
                            case 4:
                                return [2, Promise.resolve({
                                    batteryLevel: e.level,
                                    isCharging: e.charging
                                })]
                        }
                    }))
                }))
            }, t.prototype.getLanguageCode = function() {
                return C(this, void 0, void 0, (function() {
                    return T(this, (function(e) {
                        return [2, {
                            value: navigator.language
                        }]
                    }))
                }))
            }, t.prototype.parseUa = function(e) {
                var t = {},
                    r = e.indexOf("(") + 1,
                    n = e.indexOf(") AppleWebKit"); - 1 !== e.indexOf(") Gecko") && (n = e.indexOf(") Gecko"));
                var i = e.substring(r, n);
                if (-1 !== e.indexOf("Android")) t.model = i.replace("; wv", "").split("; ").pop().split(" Build")[0], t.osVersion = i.split("; ")[1];
                else if (t.model = i.split("; ")[0], navigator.oscpu) t.osVersion = navigator.oscpu;
                else if (-1 !== e.indexOf("Windows")) t.osVersion = i;
                else {
                    var o = i.split("; ").pop().replace(" like Mac OS X", "").split(" ");
                    t.osVersion = o[o.length - 1].replace(/_/g, ".")
                }
                return /android/i.test(e) ? t.operatingSystem = "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? t.operatingSystem = "ios" : /Win/.test(e) ? t.operatingSystem = "windows" : /Mac/i.test(e) ? t.operatingSystem = "mac" : t.operatingSystem = "unknown", t
            }, t.prototype.getUid = function() {
                var e = window.localStorage.getItem("_capuid");
                return e || (e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })), window.localStorage.setItem("_capuid", e), e)
            }, t
        }(P),
        V = new M,
        G = function(e) {
            function t() {
                var t = e.call(this, {
                    name: "LocalNotifications",
                    platforms: ["web"]
                }) || this;
                return t.pending = [], t
            }
            return R(t, e), t.prototype.createChannel = function(e) {
                throw new Error("Feature not available in the browser. " + e.id)
            }, t.prototype.deleteChannel = function(e) {
                throw new Error("Feature not available in the browser. " + e.id)
            }, t.prototype.listChannels = function() {
                throw new Error("Feature not available in the browser")
            }, t.prototype.sendPending = function() {
                var e = this,
                    t = [],
                    r = +new Date;
                this.pending.forEach((function(n) {
                    n.schedule && n.schedule.at && +n.schedule.at <= r && (e.buildNotification(n), t.push(n))
                })), console.log("Sent pending, removing", t), this.pending = this.pending.filter((function(e) {
                    return !t.find((function(t) {
                        return t === e
                    }))
                }))
            }, t.prototype.sendNotification = function(e) {
                var t = this,
                    r = e;
                if (e.schedule && e.schedule.at) {
                    var n = +e.schedule.at - +new Date;
                    return this.pending.push(r), void setTimeout((function() {
                        t.sendPending()
                    }), n)
                }
                this.buildNotification(e)
            }, t.prototype.buildNotification = function(e) {
                var t = e;
                return new Notification(t.title, {
                    body: t.body
                })
            }, t.prototype.schedule = function(e) {
                var t = this,
                    r = [];
                return e.notifications.forEach((function(e) {
                    r.push(t.sendNotification(e))
                })), Promise.resolve({
                    notifications: e.notifications.map((function(e) {
                        return {
                            id: "" + e.id
                        }
                    }))
                })
            }, t.prototype.getPending = function() {
                return Promise.resolve({
                    notifications: this.pending.map((function(e) {
                        return {
                            id: "" + e.id
                        }
                    }))
                })
            }, t.prototype.registerActionTypes = function(e) {
                throw new Error("Method not implemented.")
            }, t.prototype.cancel = function(e) {
                return console.log("Cancel these", e), this.pending = this.pending.filter((function(t) {
                    return !e.notifications.find((function(e) {
                        return e.id === "" + t.id
                    }))
                })), Promise.resolve()
            }, t.prototype.areEnabled = function() {
                return Promise.resolve({
                    value: "granted" === Notification.permission
                })
            }, t.prototype.requestPermission = function() {
                return new Promise((function(e) {
                    Notification.requestPermission((function(t) {
                        var r = !0;
                        "denied" !== t && "default" !== t || (r = !1), e({
                            granted: r
                        })
                    }))
                }))
            }, t.prototype.requestPermissions = function() {
                return new Promise((function(e, t) {
                    Notification.requestPermission((function(r) {
                        "denied" !== r && "default" !== r ? e({
                            results: [r]
                        }) : t(r)
                    }))
                }))
            }, t
        }(P),
        H = new G,
        z = function(e) {
            function t() {
                return e.call(this, {
                    name: "Share",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.share = function(e) {
                return navigator.share ? navigator.share({
                    title: e.title,
                    text: e.text,
                    url: e.url
                }) : Promise.reject("Web Share API not available")
            }, t
        }(P),
        X = new z,
        Y = function(e) {
            function t() {
                return e.call(this, {
                    name: "Modals",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.alert = function(e) {
                return C(this, void 0, void 0, (function() {
                    return T(this, (function(t) {
                        return window.alert(e.message), [2, Promise.resolve()]
                    }))
                }))
            }, t.prototype.prompt = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t;
                    return T(this, (function(r) {
                        return t = window.prompt(e.message, e.inputText || ""), [2, Promise.resolve({
                            value: t,
                            cancelled: null === t
                        })]
                    }))
                }))
            }, t.prototype.confirm = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t;
                    return T(this, (function(r) {
                        return t = window.confirm(e.message), [2, Promise.resolve({
                            value: t
                        })]
                    }))
                }))
            }, t.prototype.showActions = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t = this;
                    return T(this, (function(r) {
                        return [2, new Promise((function(r, n) {
                            return C(t, void 0, void 0, (function() {
                                var t, n = this;
                                return T(this, (function(i) {
                                    return (t = document.querySelector("pwa-action-sheet")) || (t = document.createElement("pwa-action-sheet"), document.body.appendChild(t)), t.header = e.title, t.cancelable = !1, t.options = e.options, t.addEventListener("onSelection", (function(e) {
                                        return C(n, void 0, void 0, (function() {
                                            var t;
                                            return T(this, (function(n) {
                                                return t = e.detail, r({
                                                    index: t
                                                }), [2]
                                            }))
                                        }))
                                    })), [2]
                                }))
                            }))
                        }))]
                    }))
                }))
            }, t
        }(P),
        $ = new Y,
        J = function(e) {
            function t() {
                var t = e.call(this, {
                    name: "Motion"
                }) || this;
                return t.registerWindowListener("devicemotion", "accel"), t.registerWindowListener("deviceorientation", "orientation"), t
            }
            return R(t, e), t
        }(P),
        Q = new J,
        Z = function(e) {
            function t() {
                var t = e.call(this, {
                    name: "Network",
                    platforms: ["web"]
                }) || this;
                return t.listenerFunction = null, t
            }
            return R(t, e), t.prototype.getStatus = function() {
                return new Promise((function(e, t) {
                    if (window.navigator) {
                        var r = window.navigator.onLine,
                            n = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection,
                            i = n ? n.type || n.effectiveType : "wifi";
                        e({
                            connected: r,
                            connectionType: r ? i : "none"
                        })
                    } else t("Network info not available")
                }))
            }, t.prototype.addListener = function(e, t) {
                var r = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection,
                    n = r ? r.type || r.effectiveType : "wifi",
                    i = t.bind(this, {
                        connected: !0,
                        connectionType: n
                    }),
                    o = t.bind(this, {
                        connected: !1,
                        connectionType: "none"
                    });
                if (0 === e.localeCompare("networkStatusChange")) return window.addEventListener("online", i), window.addEventListener("offline", o), {
                    remove: function() {
                        window.removeEventListener("online", i), window.removeEventListener("offline", o)
                    }
                }
            }, t
        }(P),
        ee = new Z,
        te = function(t) {
            function r() {
                return t.call(this, {
                    name: "Permissions"
                }) || this
            }
            return R(r, t), r.prototype.query = function(t) {
                return C(this, void 0, void 0, (function() {
                    var r, n;
                    return T(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return (r = window.navigator).permissions ? (n = t.name === e.PermissionType.Photos ? "camera" : t.name, [4, r.permissions.query({
                                    name: n
                                })]) : [2, Promise.reject("This browser does not support the Permissions API")];
                            case 1:
                                return [2, {
                                    state: i.sent().state
                                }]
                        }
                    }))
                }))
            }, r
        }(P),
        re = new te,
        ne = function(e) {
            function t() {
                return e.call(this, {
                    name: "SplashScreen",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.show = function(e, t) {
                return Promise.resolve()
            }, t.prototype.hide = function(e, t) {
                return Promise.resolve()
            }, t
        }(P),
        ie = new ne,
        oe = function(e) {
            function t() {
                var t = e.call(this, {
                    name: "Storage",
                    platforms: ["web"]
                }) || this;
                return t.KEY_PREFIX = "_cap_", t
            }
            return R(t, e), t.prototype.get = function(e) {
                var t = this;
                return new Promise((function(r, n) {
                    r({
                        value: window.localStorage.getItem(t.makeKey(e.key))
                    })
                }))
            }, t.prototype.set = function(e) {
                var t = this;
                return new Promise((function(r, n) {
                    window.localStorage.setItem(t.makeKey(e.key), e.value), r()
                }))
            }, t.prototype.remove = function(e) {
                var t = this;
                return new Promise((function(r, n) {
                    window.localStorage.removeItem(t.makeKey(e.key)), r()
                }))
            }, t.prototype.keys = function() {
                var e = this;
                return new Promise((function(t, r) {
                    t({
                        keys: Object.keys(localStorage).filter((function(t) {
                            return e.isKey(t)
                        })).map((function(t) {
                            return e.getKey(t)
                        }))
                    })
                }))
            }, t.prototype.clear = function() {
                var e = this;
                return new Promise((function(t, r) {
                    Object.keys(localStorage).filter((function(t) {
                        return e.isKey(t)
                    })).forEach((function(e) {
                        return window.localStorage.removeItem(e)
                    })), t()
                }))
            }, t.prototype.makeKey = function(e) {
                return this.KEY_PREFIX + e
            }, t.prototype.isKey = function(e) {
                return 0 === e.indexOf(this.KEY_PREFIX)
            }, t.prototype.getKey = function(e) {
                return e.substr(this.KEY_PREFIX.length)
            }, t
        }(P),
        se = new oe,
        ae = function(e) {
            function t() {
                return e.call(this, {
                    name: "Toast",
                    platforms: ["web"]
                }) || this
            }
            return R(t, e), t.prototype.show = function(e) {
                return C(this, void 0, void 0, (function() {
                    var t, r;
                    return T(this, (function(n) {
                        return t = 2e3, e.duration && (t = "long" === e.duration ? 3500 : 2e3), (r = document.createElement("pwa-toast")).duration = t, r.message = e.text, document.body.appendChild(r), [2]
                    }))
                }))
            }, t
        }(P),
        ue = new ae;
    S(g);
    return e.Accessibility = L, e.AccessibilityPluginWeb = A, e.App = F, e.AppPluginWeb = D, e.Browser = N, e.BrowserPluginWeb = I, e.Camera = _, e.CameraPluginWeb = O, e.Capacitor = y, e.Clipboard = U, e.ClipboardPluginWeb = W, e.Device = V, e.DevicePluginWeb = M, e.Filesystem = q, e.FilesystemPluginWeb = k, e.Geolocation = K, e.GeolocationPluginWeb = B, e.LocalNotifications = H, e.LocalNotificationsPluginWeb = G, e.Modals = $, e.ModalsPluginWeb = Y, e.Motion = Q, e.MotionPluginWeb = J, e.Network = ee, e.NetworkPluginWeb = Z, e.Permissions = re, e.PermissionsPluginWeb = te, e.Plugins = g, e.Share = X, e.SharePluginWeb = z, e.SplashScreen = ie, e.SplashScreenPluginWeb = ne, e.Storage = se, e.StoragePluginWeb = oe, e.Toast = ue, e.ToastPluginWeb = ae, e.WebPlugin = P, e.WebPluginRegistry = w, e.WebPlugins = b, e.mergeWebPlugin = E, e.mergeWebPlugins = S, e.registerWebPlugin = function(e) {
        E(g, e)
    }, e
}({});
//# sourceMappingURL=capacitor.js.map
