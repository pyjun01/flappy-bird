// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j1F46":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _backgroundPng = require("./img/background.png");
var _backgroundPngDefault = parcelHelpers.interopDefault(_backgroundPng);
var _birdPng = require("./img/bird.png");
var _birdPngDefault = parcelHelpers.interopDefault(_birdPng);
var _groundPng = require("./img/ground.png");
var _groundPngDefault = parcelHelpers.interopDefault(_groundPng);
var _pipePng = require("./img/pipe.png");
var _pipePngDefault = parcelHelpers.interopDefault(_pipePng);
var _util = require("./util");
var _app = require("./core/App");
var _appDefault = parcelHelpers.interopDefault(_app);
const init = async ()=>{
    const images = {
    };
    images.background = await _util.loadImage(_backgroundPngDefault.default);
    images.bird = await _util.loadImage(_birdPngDefault.default);
    images.ground = await _util.loadImage(_groundPngDefault.default);
    images.pipe = await _util.loadImage(_pipePngDefault.default);
    new _appDefault.default(images);
};
window.onload = init;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./img/background.png":"2KAUV","./img/bird.png":"jsJQE","./img/ground.png":"j3Cn8","./img/pipe.png":"9iCjD","./core/App":"lDa9c","./util":"99L5U"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2KAUV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "background.9dc90608.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jsJQE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "bird.3189b6ac.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"j3Cn8":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "ground.c11ebb49.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9iCjD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "pipe.e5725d1a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lDa9c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constant = require("./constant");
var _ground = require("./Ground");
var _groundDefault = parcelHelpers.interopDefault(_ground);
var _pipeFactory = require("./PipeFactory");
var _pipeFactoryDefault = parcelHelpers.interopDefault(_pipeFactory);
var _bird = require("./Bird");
var _birdDefault = parcelHelpers.interopDefault(_bird);
var _button = require("./Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
class App {
    FPS = 1000 / 144;
    constructor(images){
        this.iamges = images;
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ground = new _groundDefault.default(images.ground);
        this.pipes = new _pipeFactoryDefault.default(images.pipe);
        this.bird = new _birdDefault.default(images.bird, {
            x: _constant.width / 2 - 68,
            y: _constant.height / 2
        });
        this.restartButton = new _buttonDefault.default(this);
        this.reset();
    }
    reset() {
        this.score = 0;
        this.isStart = false;
        this.prevTime = 0;
        this.reqId = null;
        this.canvas.width = _constant.width;
        this.canvas.height = _constant.height;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.font = '48px sans-serif';
        this.reqId = window.requestAnimationFrame(this.animate);
        this.pipes.reset();
        this.bird.reset();
        this.eve();
    }
    eve() {
        this.canvas.addEventListener('click', this.gameStart);
        this.canvas.addEventListener('click', this.flyBird);
    }
    gameStart = ()=>{
        this.pipes.addPipe();
        this.isStart = true;
        this.canvas.removeEventListener('click', this.gameStart);
    };
    flyBird = ()=>{
        this.bird.updateGravity();
    };
    checkCollision() {
        if (this.bird.isDead) return false;
        if (this.ground.checkCollision(this.bird)) return true;
        return this.pipes.checkCollision(this.bird);
    }
    stop() {
        cancelAnimationFrame(this.reqId);
    }
    addScore = ()=>{
        this.score++;
    };
    animate = (t)=>{
        this.reqId = window.requestAnimationFrame(this.animate);
        if (t > this.prevTime + this.FPS) {
            this.prevTime = t;
            this.isStart && this.update();
            this.render();
            if (this.bird.y - this.bird.h >= _constant.height) {
                this.stop();
                this.renderGameResult();
                return;
            }
            if (this.checkCollision()) {
                this.bird.dead();
                this.canvas.removeEventListener('click', this.flyBird);
                this.renderCrash();
            }
        }
    };
    update() {
        this.bird.update();
        if (this.bird.isDead) return;
        this.ground.update();
        this.pipes.update(this.addScore, this.bird.x);
    }
    renderGameResult() {
        this.restartButton.show();
    }
    renderCrash() {
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(0, 0, _constant.width, _constant.height);
        this.stop();
        setTimeout(()=>{
            this.reqId = window.requestAnimationFrame(this.animate);
        }, 100);
    }
    render() {
        this.ctx.drawImage(this.iamges.background, 0, 0, _constant.width, _constant.height);
        this.pipes.render(this.ctx);
        this.ground.render(this.ctx);
        this.bird.render(this.ctx, {
            isStart: this.isStart
        });
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText(this.score, _constant.width / 2, _constant.height / 4);
    }
}
exports.default = App;

},{"./Bird":"eFEhK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./PipeFactory":"cq23L","./Ground":"5WhIs","./constant":"eZPKL","./Button":"ct2qc"}],"eFEhK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constant = require("./constant");
class Bird {
    w = 68;
    h = 52;
    velocity = 0.6;
    gravity = -6;
    maxGravity = 10;
    curvePoint = 7;
    isDead = false;
    constructor(image, { x , y , w , h  }){
        this.image = image;
        this.x = x;
        this.y = y;
        this.w = w || this.w;
        this.h = h || this.h;
    }
    reset() {
        this.x = _constant.width / 2 - 68;
        this.y = _constant.height / 2;
        this.isDead = false;
        this.velocity = 0.6;
        this.gravity = -6;
        this.curveCount = 0;
    }
    dead() {
        this.isDead = true;
    }
    updateGravity() {
        this.gravity = Math.min(this.gravity, -this.maxGravity + 1) - 3;
        this.curveCount = 0;
    }
    getDirection() {
        if (this.gravity >= this.curvePoint) {
            if (this.curveCount < 90) this.curveCount += 6;
            return this.curveCount;
        }
        return -20;
    }
    update() {
        if (this.isDead) {
            this.gravity = this.maxGravity + 2;
            this.y += this.gravity;
            return;
        }
        this.y += this.gravity;
        if (this.gravity > this.maxGravity) {
            this.gravity = this.maxGravity;
            return;
        }
        this.gravity += this.velocity;
    }
    render(ctx, { isStart  }) {
        const direction = isStart ? this.getDirection() : 0;
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        ctx.rotate(direction * Math.PI / 180);
        const idx = this.isDead ? 0 : Math.floor((Math.sin(window.performance.now() / 200) + 1) / (2 / 3));
        ctx.drawImage(this.image, idx * this.image.naturalWidth / 3, 0, this.image.naturalWidth / 3, this.image.naturalHeight, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}
exports.default = Bird;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./constant":"eZPKL"}],"eZPKL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "width", ()=>width
);
parcelHelpers.export(exports, "height", ()=>height
);
const width = 768;
const height = 1024;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cq23L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constant = require("./constant");
var _pipe = require("./Pipe");
var _pipeDefault = parcelHelpers.interopDefault(_pipe);
class PipeFactory {
    pipes = [];
    constructor(image){
        this.image = image;
    }
    reset() {
        this.pipes.length = 0;
    }
    addPipe() {
        this.pipes.push(new _pipeDefault.default({
            x: _constant.width,
            y: 130 + (Math.floor(Math.random() * 4) + 1) * (_constant.height / 10)
        }));
    }
    checkCollision(bird) {
        return this.pipes.some(({ x , y , w , h  })=>(x < bird.x + bird.w && bird.x + bird.w <= x + w || x < bird.x && bird.x <= x + w) && (bird.y < y || y + h < bird.y + bird.h)
        );
    }
    update(addScore, birdX) {
        this.pipes.forEach((pipe)=>{
            pipe.update();
            if (pipe.checkPass(birdX)) {
                pipe.pass = true;
                addScore();
                this.addPipe();
            }
        });
        if (this.pipes[0].x + this.pipes[0].w <= 0) this.pipes.shift();
    }
    render(ctx) {
        this.pipes.forEach((pipe)=>pipe.render(ctx, this.image)
        );
    }
}
exports.default = PipeFactory;

},{"./constant":"eZPKL","./Pipe":"d3gZ4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d3gZ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Pipe {
    w = 104;
    h = 260;
    velocity = 6;
    pass = false;
    constructor({ x , y  }){
        this.x = x;
        this.y = y;
    }
    checkPass(birdX) {
        return !this.pass && this.x < birdX;
    }
    update() {
        this.x = this.x - 6;
    }
    render(ctx, image) {
        ctx.rotate(180 * Math.PI / 180);
        ctx.drawImage(image, -this.x - this.w, -this.y, this.w, 597.6231884058);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(image, this.x, this.y + this.h, this.w, 597.6231884058);
    }
}
exports.default = Pipe;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5WhIs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constant = require("./constant");
class Ground {
    w = _constant.width / 30;
    h = 80;
    x = 0;
    y = _constant.height - this.h;
    renderCount = 0;
    constructor(image){
        this.image = image;
    }
    checkCollision(bird) {
        return bird.y + bird.h > this.y;
    }
    update() {
        this.x -= 6;
    }
    render(ctx) {
        ctx.translate(this.x % this.w, 0);
        for(let i = 0; i < 31; i++)ctx.drawImage(this.image, this.w * i, this.y, this.w, this.h);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.renderCount++;
    }
}
exports.default = Ground;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./constant":"eZPKL"}],"ct2qc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constant = require("./constant");
class Button {
    w = 150;
    h = 60;
    x = _constant.width / 2 - this.w / 2;
    y = _constant.height / 2 - this.h / 2 - 3;
    text = 'RESTART';
    visible = false;
    constructor(app){
        this.app = app;
    }
    toggle() {
        this.visible = !this.visible;
    }
    isEnter = (e)=>{
        const { canvas  } = this.app;
        const bound = canvas.getBoundingClientRect();
        const x = (e.pageX - bound.left) * canvas.width / canvas.clientWidth;
        const y = (e.pageY - bound.top) * canvas.height / canvas.clientHeight;
        return this.x < x && x < this.x + this.w && this.y < y && y < this.y + this.h;
    };
    onMousemove = (e)=>{
        this.app.canvas.style.cursor = this.isEnter(e) ? 'pointer' : 'auto';
    };
    onClick = (e)=>{
        if (this.isEnter(e)) {
            document.querySelector('canvas').style = '';
            this.app.canvas.removeEventListener('mousemove', this.onMousemove);
            this.app.ctx.canvas.removeEventListener('click', this.onClick);
            this.app.reset();
        }
    };
    show() {
        this.app.canvas.addEventListener('mousemove', this.onMousemove);
        this.app.canvas.addEventListener('click', this.onClick);
        this.render();
    }
    render() {
        this.app.ctx.fillStyle = '#e86102';
        this.app.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.app.ctx.fillStyle = '#fff';
        this.app.ctx.font = '32px sans-serif';
        this.app.ctx.fillText(this.text, _constant.width / 2, _constant.height / 2);
    }
}
exports.default = Button;

},{"./constant":"eZPKL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"99L5U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadImage", ()=>loadImage
);
const loadImage = (src)=>new Promise((res)=>{
        const img = new Image();
        img.onload = ()=>res(img)
        ;
        img.src = src;
    })
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["j1F46","hD4hw"], "hD4hw", "parcelRequiree05d")

//# sourceMappingURL=index.379dd93c.js.map
