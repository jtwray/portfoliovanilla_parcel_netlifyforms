// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/images/jtwray-headshot.webp":[function(require,module,exports) {
module.exports = "/jtwray-headshot.3f0fe1fe.webp";
},{}],"assets/images/artificialartist-preview.webp":[function(require,module,exports) {
module.exports = "/artificialartist-preview.b1de9bf7.webp";
},{}],"assets/images/kanyes8ball-preview.webp":[function(require,module,exports) {
module.exports = "/kanyes8ball-preview.2e14a639.webp";
},{}],"assets/images/rventure-preview.webp":[function(require,module,exports) {
module.exports = "/rventure-preview.794d6141.webp";
},{}],"assets/images/twittercardapi-preview.webp":[function(require,module,exports) {
module.exports = "/twittercardapi-preview.7c7d5c5f.webp";
},{}],"assets/images/tuckerwray-metwittercard-preview.webp":[function(require,module,exports) {
module.exports = "/tuckerwray-metwittercard-preview.080bd576.webp";
},{}],"assets/images/wonderwomen.webp":[function(require,module,exports) {
module.exports = "/wonderwomen.11bba937.webp";
},{}],"assets/images/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twittercardapi_preview = exports.tuckerwraymetwittercard_preview = exports.jtwray = exports.artificialartist_preview = exports.rventure_preview = exports.kanyes8ball_preview = exports.wonderwomen_preview = void 0;

var jtwray = require("./jtwray-headshot.webp");

exports.jtwray = jtwray;

var artificialartist_preview = require("./artificialartist-preview.webp");

exports.artificialartist_preview = artificialartist_preview;

var kanyes8ball_preview = require("./kanyes8ball-preview.webp");

exports.kanyes8ball_preview = kanyes8ball_preview;

var rventure_preview = require("./rventure-preview.webp");

exports.rventure_preview = rventure_preview;

var twittercardapi_preview = require("./twittercardapi-preview.webp");

exports.twittercardapi_preview = twittercardapi_preview;

var tuckerwraymetwittercard_preview = require("./tuckerwray-metwittercard-preview.webp");

exports.tuckerwraymetwittercard_preview = tuckerwraymetwittercard_preview;

var wonderwomen_preview = require("./wonderwomen.webp");

exports.wonderwomen_preview = wonderwomen_preview;
},{"./jtwray-headshot.webp":"assets/images/jtwray-headshot.webp","./artificialartist-preview.webp":"assets/images/artificialartist-preview.webp","./kanyes8ball-preview.webp":"assets/images/kanyes8ball-preview.webp","./rventure-preview.webp":"assets/images/rventure-preview.webp","./twittercardapi-preview.webp":"assets/images/twittercardapi-preview.webp","./tuckerwray-metwittercard-preview.webp":"assets/images/tuckerwray-metwittercard-preview.webp","./wonderwomen.webp":"assets/images/wonderwomen.webp"}],"src/projects.js":[function(require,module,exports) {
"use strict";

var images = _interopRequireWildcard(require("../assets/images/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var wonderwomen_preview = images.wonderwomen_preview,
    kanyes8ball_preview = images.kanyes8ball_preview,
    rventure_preview = images.rventure_preview,
    artificialartist_preview = images.artificialartist_preview,
    twittercardapi_preview = images.twittercardapi_preview;
console.log({
  rventure_preview: rventure_preview
});
var projectsDiv = document.querySelector("section#projects");
var projects = [{
  name: "WonderWomen of the World Cup -- GoogleTrends",
  imgUrl: wonderwomen_preview || "https://mibvv.sse.codesandbox.io/wonderwomen.11bba937.webp",
  deployedAt: "https://womens-world-cup-google-trends.now.sh/",
  deployedIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-netlify",
    "data-inline": "false"
  },
  repoIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-github-octocat",
    "data-inline": "false"
  },
  githubRepo: "https://github.com/jtwray/womensWorldCupGoogleTrends"
}, {
  name: "Kanyes Quotes",
  imgUrl: kanyes8ball_preview || "https://mibvv.sse.codesandbox.io/kanyes8ball-preview.2e14a639.webp",
  deployedAt: "https://kanyes-magic-8ball.netlify.app/",
  deployedIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-netlify",
    "data-inline": "false"
  },
  repoIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-github-octocat",
    "data-inline": "false"
  },
  githubRepo: "https://github.com/jtwray/ReactReduxThunk"
}, {
  name: "TheArtificialArtist",
  imgUrl: artificialartist_preview || "https://mibvv.sse.codesandbox.io/artificialartist-preview.b1de9bf7.webp",
  deployedAt: "https://theArtificialArtist.com/",
  deployedIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-netlify",
    "data-inline": "false"
  },
  repoIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-github-octocat",
    "data-inline": "false"
  },
  githubRepo: "https://github.com/jtwray/artificial-artist-fe"
}, {
  name: "rVenture",
  imgUrl: rventure_preview || "https://mibvv.sse.codesandbox.io/rventure-preview.794d6141.webp",
  deployedAt: "https://rventuren.herokuapp.com/api",
  deployedIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos:netlify",
    "data-inline": "false"
  },
  repoIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-github-octocat",
    "data-inline": "false"
  },
  githubRepo: "https://github.com/Build-Week-RVAirBnB/Backend"
}, {
  name: "twittercardPreviews",
  imgUrl: twittercardapi_preview || "https://mibvv.sse.codesandbox.io/twittercardapi-preview.7c7d5c5f.webp",
  deployedAt: "https://twittercardpreview.netlify.app/",
  deployedIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos:netlify",
    "data-inline": "false"
  },
  repoIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-github-octocat",
    "data-inline": "false"
  },
  githubRepo: "https://github.com/jtwray/firebase-serverless-function--socialCards-api"
}];

function createProjectCards(projectsArr) {
  var card, cardImage, cardTitle, projectDeployedLink, projectDeployedIcon, projectRepo, projectRepoIcon, projectInfoBlock;
  projectsArr.map(function (project) {
    card = document.createElement("div"), card.classList.add("card"), cardImage = document.createElement("img"), cardImage.src = project.imgUrl, card.appendChild(cardImage), cardTitle = document.createElement("h3"), cardTitle.classList.add("cardTitle"), cardTitle.style.fontSize = "2rem", cardTitle.textContent = project.name, card.appendChild(cardTitle), projectDeployedLink = document.createElement("a"), projectDeployedIcon = document.createElement(project.deployedIcon.type), projectDeployedIcon.classList.add([project.deployedIcon.class]), projectDeployedIcon.setAttribute("data-icon", "".concat(project.deployedIcon["data-icon"])), projectDeployedIcon.setAttribute("data-inline", "".concat(project.deployedIcon["data-inline"])), projectRepoIcon = document.createElement(project.repoIcon.type), projectRepoIcon.classList.add([project.repoIcon.class]), projectRepoIcon.setAttribute("data-icon", "".concat(project.repoIcon["data-icon"])), projectRepoIcon.setAttribute("data-inline", "".concat(project.deployedIcon["data-inline"])), projectDeployedLink.textContent = "Demo ", projectDeployedLink.href = project.deployedAt, projectDeployedLink.setAttribute("target", "_blank"), projectRepo = document.createElement("a"), projectRepo.textContent = "Github ", projectRepo.setAttribute("target", "_blank"), projectRepo.href = project.githubRepo, projectInfoBlock = document.createElement("div"), projectInfoBlock.appendChild(projectDeployedLink), projectDeployedLink.appendChild(projectDeployedIcon), projectInfoBlock.appendChild(projectRepo), projectRepo.appendChild(projectRepoIcon), projectInfoBlock.classList.add("projectInfoBlock"), card.appendChild(projectInfoBlock), projectsDiv.appendChild(card);
  });
}

createProjectCards(projects);
var tuckersProjectsItemDiv = document.querySelectorAll(".projects"); // import $ from "jquery";
// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//       // Store hash
//       var hash = this.hash;
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });
},{"../assets/images/index.js":"assets/images/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38107" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/projects.js"], null)
//# sourceMappingURL=/projects.7847dd7d.js.map