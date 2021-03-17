require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ProductList.vue");
/* harmony import */ var _Checkout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Checkout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import the ProductList component.

 // import the Checkout component.

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      cart: []
    };
  },

  components: {
    ProductList: _ProductList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Checkout: _Checkout_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  // register the components.
  methods: {
    addToCart(product) {
      this.cart.push(product);
      alert("Added to cart:" + product.item);
    },

    removeFromCart(product) {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] == product) this.cart.splice(i, 1);
      }
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Checkout.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['cart'],

  data() {
    return {};
  },

  methods: {
    onItemTap(event) {
      this.$emit("removeProduct", event.item);
    }

  },

  submitOrder() {
    //function for order place Button.
    this.cart.map(item => {
      var obj = {
        lesson: item._id,
        name: this.order.Name,
        phone: this.order.Phone,
        space: 1
      };
      fetch("https://cst3145express.herokuapp.com/collection/order", {
        method: "POST",
        // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(response => response.json()).then(data => {
        this.order.Name = "";
        this.order.Phone = "";
        var putMethod = {
          method: "PUT",
          // Method itself
          headers: {
            "Content-type": "application/json; charset=UTF-8" // Indicates the content

          },
          body: JSON.stringify({
            lesson: obj.lesson
          }) // We send data in JSON format

        }; // make the HTTP put request using fetch api

        fetch("https://cst3145express.herokuapp.com/collection/lesson", putMethod).then(response => response.json()).then(data => {
          this.showProduct = true;
          this.showCart = false;
          this.cart = [];
        }).then(() => {
          alert("your order is confirmed");
        }) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err));
      }).catch(error => {
        console.error("Error:", error);
        alert("Your order Cannot be submitted!");
      });
    });
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ProductList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      products: [] // Product Array.

    };
  },

  methods: {
    onItemTap(event) {
      this.$emit('addProduct', event.item);
    }

  },
  created: function created() {
    // this function will be run automatically
    // when creating the Vue instance.
    fetch("https://cst3145express.herokuapp.com/collection/lesson").then(response => {
      response.json().then(json => {
        // save the returned JSON object to 'product'
        // note that we used 'webstore.product' instead of this.product'
        this.products = json;
      });
    });
  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-45ba5ed4] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-45ba5ed4] {\n    margin-bottom: 15;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/App.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticStyle: { backgroundColor: "azure" } },
    [
      _c("ActionBar", { attrs: { title: "Web Shop" } }),
      _c("Label", {
        staticClass: "h2",
        attrs: { text: "Welcome to the Web Shop!" }
      }),
      _c(
        "TabView",
        { attrs: { androidTabsPosition: "bottom" } },
        [
          _c(
            "TabViewItem",
            {
              staticClass: "h2 text-capitalize",
              attrs: { title: "Product List" }
            },
            [_c("ProductList", { on: { addProduct: _vm.addToCart } })],
            1
          ),
          _c(
            "TabViewItem",
            {
              staticClass: "h2 text-capitalize",
              attrs: { title: "Check out" }
            },
            [
              _c("Checkout", {
                attrs: { cart: _vm.cart },
                on: { removeProduct: _vm.removeFromCart }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Checkout.vue?vue&type=template&id=010b82a1&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    [
      _c("Label", {
        staticClass: "h2 text-center",
        attrs: { text: "Shopping Cart" }
      }),
      _c("Label", {
        staticClass: "h2 text-center",
        attrs: { text: "(Tap a product to remove it)" }
      }),
      _c("TextField", {
        attrs: { hint: "Name" },
        model: {
          value: _vm.name,
          callback: function($event) {
            _vm.name = $event.object["text"]
          },
          expression: "name"
        }
      }),
      _c("TextField", {
        attrs: { hint: "Phone" },
        model: {
          value: _vm.Phone,
          callback: function($event) {
            _vm.Phone = $event.object["text"]
          },
          expression: "Phone"
        }
      }),
      _c("Button", {
        attrs: { text: "Submit Order" },
        on: { tap: _vm.submitOrder }
      }),
      _c(
        "ListView",
        {
          attrs: { items: _vm.cart, "+alias": "product" },
          on: { itemTap: _vm.onItemTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var product = ref.product
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "StackLayout",
                    [
                      _c("Label", { attrs: { text: product.subject } }),
                      _c("Label", { attrs: { text: product.location } }),
                      _c("Label", {
                        attrs: { text: "Price: £" + product.price }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ProductList.vue?vue&type=template&id=0feaa5a2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    [
      _c("Label", {
        staticClass: "h2 p-10",
        attrs: { textWrap: "true", text: "Tap a product to add it to cart" }
      }),
      _c(
        "ListView",
        {
          attrs: { items: _vm.products, "+alias": "product" },
          on: { itemTap: _vm.onItemTap }
        },
        [
          _c("v-template", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var product = ref.product
                  var $index = ref.$index
                  var $even = ref.$even
                  var $odd = ref.$odd
                  return _c(
                    "StackLayout",
                    [
                      _c("Label", { attrs: { text: product.subject } }),
                      _c("Label", { attrs: { text: product.location } }),
                      _c("Label", {
                        attrs: { text: "Price: £" + product.price }
                      }),
                      _c("Label", {
                        attrs: { text: "Space: " + product.availableInventory }
                      })
                    ],
                    1
                  )
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/aqua.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/aqua.css"));
global.registerModule("@nativescript/theme/css/aqua.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/aqua.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/aqua.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <WebShop />\n        </Frame>",
  components: {
    WebShop: _components_App__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/App.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45ba5ed4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('45ba5ed4')) {
      api.createRecord('45ba5ed4', component.options)
    } else {
      api.reload('45ba5ed4', component.options)
    }
    module.hot.accept("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
(function () {
      api.rerender('45ba5ed4', {
        render: _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Checkout.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Checkout.vue?vue&type=template&id=010b82a1&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('010b82a1')) {
      api.createRecord('010b82a1', component.options)
    } else {
      api.reload('010b82a1', component.options)
    }
    module.hot.accept("./components/Checkout.vue?vue&type=template&id=010b82a1&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Checkout.vue?vue&type=template&id=010b82a1&");
(function () {
      api.rerender('010b82a1', {
        render: _Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Checkout.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Checkout.vue?vue&type=template&id=010b82a1&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Checkout.vue?vue&type=template&id=010b82a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_010b82a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ProductList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ProductList.vue?vue&type=template&id=0feaa5a2&");
/* harmony import */ var _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ProductList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0feaa5a2')) {
      api.createRecord('0feaa5a2', component.options)
    } else {
      api.reload('0feaa5a2', component.options)
    }
    module.hot.accept("./components/ProductList.vue?vue&type=template&id=0feaa5a2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ProductList.vue?vue&type=template&id=0feaa5a2&");
(function () {
      api.rerender('0feaa5a2', {
        render: _ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/ProductList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ProductList.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ProductList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ProductList.vue?vue&type=template&id=0feaa5a2&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ProductList.vue?vue&type=template&id=0feaa5a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_0feaa5a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "@nativescript/core/application":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/application");

/***/ }),

/***/ "@nativescript/core/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/data/observable-array");

/***/ }),

/***/ "@nativescript/core/platform":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/platform");

/***/ }),

/***/ "@nativescript/core/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/formatted-string");

/***/ }),

/***/ "@nativescript/core/text/span":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/span");

/***/ }),

/***/ "@nativescript/core/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/action-bar");

/***/ }),

/***/ "@nativescript/core/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/activity-indicator");

/***/ }),

/***/ "@nativescript/core/ui/border":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/border");

/***/ }),

/***/ "@nativescript/core/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/bottom-navigation");

/***/ }),

/***/ "@nativescript/core/ui/button":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/button");

/***/ }),

/***/ "@nativescript/core/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/content-view");

/***/ }),

/***/ "@nativescript/core/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/core/view");

/***/ }),

/***/ "@nativescript/core/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/date-picker");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "@nativescript/core/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/html-view");

/***/ }),

/***/ "@nativescript/core/ui/image":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/image");

/***/ }),

/***/ "@nativescript/core/ui/label":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/label");

/***/ }),

/***/ "@nativescript/core/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/absolute-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/dock-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/flexbox-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/grid-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/layout-base");

/***/ }),

/***/ "@nativescript/core/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/stack-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/wrap-layout");

/***/ }),

/***/ "@nativescript/core/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-picker");

/***/ }),

/***/ "@nativescript/core/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-view");

/***/ }),

/***/ "@nativescript/core/ui/page":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/page");

/***/ }),

/***/ "@nativescript/core/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/placeholder");

/***/ }),

/***/ "@nativescript/core/ui/progress":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/progress");

/***/ }),

/***/ "@nativescript/core/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/proxy-view-container");

/***/ }),

/***/ "@nativescript/core/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/scroll-view");

/***/ }),

/***/ "@nativescript/core/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/search-bar");

/***/ }),

/***/ "@nativescript/core/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/segmented-bar");

/***/ }),

/***/ "@nativescript/core/ui/slider":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/slider");

/***/ }),

/***/ "@nativescript/core/ui/switch":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/switch");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-view");

/***/ }),

/***/ "@nativescript/core/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tabs");

/***/ }),

/***/ "@nativescript/core/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-field");

/***/ }),

/***/ "@nativescript/core/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-view");

/***/ }),

/***/ "@nativescript/core/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/time-picker");

/***/ }),

/***/ "@nativescript/core/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/web-view");

/***/ }),

/***/ "@nativescript/core/utils/types":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/utils/types");

/***/ }),

/***/ "@nativescript/core/xml":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/xml");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0NoZWNrb3V0LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzhhZDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzdjZjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dC52dWU/ZGI2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LnZ1ZT82YmZkIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzllMjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzc2MWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAudnVlPzE4MjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dC52dWU/YzRjOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0LnZ1ZT9mY2ExIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlP2RmNzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC52dWU/ZTIwYiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L3NwYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYWN0aW9uLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb250ZW50LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29yZS92aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RhdGUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2h0bWwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9pbWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGxhY2Vob2xkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJveHktdmlldy1jb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2Nyb2xsLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VhcmNoLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zZWdtZW50ZWQtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NsaWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LWZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RleHQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90aW1lLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS93ZWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91dGlscy90eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS94bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbIldlYlNob3AiLCJ0ZW1wbGF0ZSIsIiRzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdCQTs7Q0FDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTs7QUFNQTtBQUFBO0FBQUE7QUFBQSxHQU5BO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQVJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBLGlCQURBOztBQUVBO0FBQ0E7QUFDQSxHQUpBOztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUhBLEdBTEE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLDZCQUZBO0FBR0EsK0JBSEE7QUFJQTtBQUpBO0FBTUE7QUFDQSxzQkFEQTtBQUNBO0FBQ0E7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Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSwrRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLDBFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSx5RTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSx1RTs7Ozs7OztBQ0FBLHNFOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLHVFOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLGdFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHVGOzs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7QUNBQSxxRjs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2Ugc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcIj5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIldlYiBTaG9wXCIvPlxuICAgICAgIDxMYWJlbCB0ZXh0PVwiV2VsY29tZSB0byB0aGUgV2ViIFNob3AhXCIgY2xhc3M9XCJoMlwiLz5cbiAgICAgICA8VGFiVmlldyBhbmRyb2lkVGFic1Bvc2l0aW9uPSdib3R0b20nPlxuICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPSdQcm9kdWN0IExpc3QnIGNsYXNzPVwiaDIgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0IEBhZGRQcm9kdWN0PVwiYWRkVG9DYXJ0XCIvPiA8IS0tIFVzaW5nIHRoZSBQcm9kdWN0TGlzdCBDb21wb25lbnQgLS0+XG4gICAgICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwiQ2hlY2sgb3V0XCIgY2xhc3M9XCJoMiB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tvdXQgOmNhcnQ9J2NhcnQnIEByZW1vdmVQcm9kdWN0PSdyZW1vdmVGcm9tQ2FydCcvPiA8IS0tIHRoZSAnQ2hlY2tvdXQnIGNvbXBvbmVudCAtLT5cbiAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICAgIDwvVGFiVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QudnVlJyAvLyBpbXBvcnQgdGhlIFByb2R1Y3RMaXN0IGNvbXBvbmVudC5cbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0LnZ1ZScgLy8gaW1wb3J0IHRoZSBDaGVja291dCBjb21wb25lbnQuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnQ6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50czoge1Byb2R1Y3RMaXN0LCBDaGVja291dH0sIC8vIHJlZ2lzdGVyIHRoZSBjb21wb25lbnRzLlxuIFxubWV0aG9kczoge1xuICAgIGFkZFRvQ2FydChwcm9kdWN0KSB7XG4gICAgICAgIHRoaXMuY2FydC5wdXNoKHByb2R1Y3QpO1xuICAgICAgICBhbGVydChcIkFkZGVkIHRvIGNhcnQ6XCIgKyBwcm9kdWN0Lml0ZW0pO1xuICAgIH0sXG4gICAgcmVtb3ZlRnJvbUNhcnQocHJvZHVjdCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5jYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJ0W2ldID09IHByb2R1Y3QpIHRoaXMuY2FydC5zcGxpY2UoaSwxKVxuICAgICAgICB9XG4gICAgfSxcbn1cblxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZS1wYW5lbCB7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwO1xuICAgIG1hcmdpbjogMTU7XG59XG5cbi5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxMYWJlbCBjbGFzcz1cImgyIHRleHQtY2VudGVyXCIgdGV4dD1cIlNob3BwaW5nIENhcnRcIiAvPlxuICAgICAgPExhYmVsIGNsYXNzPVwiaDIgdGV4dC1jZW50ZXJcIiB0ZXh0PVwiKFRhcCBhIHByb2R1Y3QgdG8gcmVtb3ZlIGl0KVwiIC8+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9J05hbWUnIHYtbW9kZWw9J25hbWUnLz4gXG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9J1Bob25lJyB2LW1vZGVsPSdQaG9uZScvPiBcbiAgICAgIDxCdXR0b24gQHRhcD0nc3VibWl0T3JkZXInIHRleHQ9J1N1Ym1pdCBPcmRlcicvPlxuICAgICAgPExpc3RWaWV3IGZvcj1cInByb2R1Y3QgaW4gY2FydFwiIEBpdGVtVGFwPSdvbkl0ZW1UYXAnPlxuICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9J3Byb2R1Y3Quc3ViamVjdCcvPlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PSdwcm9kdWN0LmxvY2F0aW9uJy8+XG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJgUHJpY2U6IMKjJHtwcm9kdWN0LnByaWNlfWBcIi8+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgPC9MaXN0Vmlldz5cbiAgIDwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ2NhcnQnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JdGVtVGFwKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwicmVtb3ZlUHJvZHVjdFwiLCBldmVudC5pdGVtKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgICAgIHN1Ym1pdE9yZGVyKCkge1xuICAgICAgICAgICAgLy9mdW5jdGlvbiBmb3Igb3JkZXIgcGxhY2UgQnV0dG9uLlxuICAgICAgICAgICAgdGhpcy5jYXJ0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIGxlc3NvbjogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5vcmRlci5OYW1lLFxuICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLm9yZGVyLlBob25lLFxuICAgICAgICAgICAgICAgIHNwYWNlOiAxLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vY3N0MzE0NWV4cHJlc3MuaGVyb2t1YXBwLmNvbS9jb2xsZWN0aW9uL29yZGVyXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyLk5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlci5QaG9uZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwdXRNZXRob2QgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIiwgLy8gTWV0aG9kIGl0c2VsZlxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCIsIC8vIEluZGljYXRlcyB0aGUgY29udGVudFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxlc3Nvbjogb2JqLmxlc3NvbiB9KSwgLy8gV2Ugc2VuZCBkYXRhIGluIEpTT04gZm9ybWF0XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgLy8gbWFrZSB0aGUgSFRUUCBwdXQgcmVxdWVzdCB1c2luZyBmZXRjaCBhcGlcbiAgICAgICAgICAgICAgICAgIGZldGNoKFxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY3N0MzE0NWV4cHJlc3MuaGVyb2t1YXBwLmNvbS9jb2xsZWN0aW9uL2xlc3NvblwiLFxuICAgICAgICAgICAgICAgICAgICBwdXRNZXRob2RcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FydCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJ5b3VyIG9yZGVyIGlzIGNvbmZpcm1lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgLy8gTWFuaXB1bGF0ZSB0aGUgZGF0YSByZXRyaWV2ZWQgYmFjaywgaWYgd2Ugd2FudCB0byBkbyBzb21ldGhpbmcgd2l0aCBpdFxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcblxuICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIG9yZGVyIENhbm5vdCBiZSBzdWJtaXR0ZWQhXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxTdGFja0xheW91dD5cbiAgICA8TGFiZWwgY2xhc3M9XCJoMiBwLTEwXCIgdGV4dFdyYXA9XCJ0cnVlXCJcbiAgICAgIHRleHQ9XCJUYXAgYSBwcm9kdWN0IHRvIGFkZCBpdCB0byBjYXJ0XCIgLz5cbiAgICA8TGlzdFZpZXcgZm9yPSdwcm9kdWN0IGluIHByb2R1Y3RzJyBAaXRlbVRhcD0nb25JdGVtVGFwJz5cbiAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9J3Byb2R1Y3Quc3ViamVjdCcvPlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PSdwcm9kdWN0LmxvY2F0aW9uJy8+XG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJgUHJpY2U6IMKjJHtwcm9kdWN0LnByaWNlfWBcIi8+XG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJgU3BhY2U6ICR7cHJvZHVjdC5hdmFpbGFibGVJbnZlbnRvcnl9YFwiLz5cbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgPC9MaXN0Vmlldz5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvZHVjdHM6IFtdLCAvLyBQcm9kdWN0IEFycmF5LlxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZFByb2R1Y3QnLCBldmVudC5pdGVtKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGJlIHJ1biBhdXRvbWF0aWNhbGx5XG4gICAgLy8gd2hlbiBjcmVhdGluZyB0aGUgVnVlIGluc3RhbmNlLlxuICAgIGZldGNoKFwiaHR0cHM6Ly9jc3QzMTQ1ZXhwcmVzcy5oZXJva3VhcHAuY29tL2NvbGxlY3Rpb24vbGVzc29uXCIpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAvLyBzYXZlIHRoZSByZXR1cm5lZCBKU09OIG9iamVjdCB0byAncHJvZHVjdCdcbiAgICAgICAgICAvLyBub3RlIHRoYXQgd2UgdXNlZCAnd2Vic3RvcmUucHJvZHVjdCcgaW5zdGVhZCBvZiB0aGlzLnByb2R1Y3QnXG4gICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGpzb247XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH0sXG5cbiAgICBcbn07XG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi00NWJhNWVkNF0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTQ1YmE1ZWQ0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQXBwLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJhenVyZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIldlYiBTaG9wXCIgfSB9KSxcbiAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJoMlwiLFxuICAgICAgICBhdHRyczogeyB0ZXh0OiBcIldlbGNvbWUgdG8gdGhlIFdlYiBTaG9wIVwiIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiVGFiVmlld1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGFuZHJvaWRUYWJzUG9zaXRpb246IFwiYm90dG9tXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdJdGVtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHRleHQtY2FwaXRhbGl6ZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJQcm9kdWN0IExpc3RcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiUHJvZHVjdExpc3RcIiwgeyBvbjogeyBhZGRQcm9kdWN0OiBfdm0uYWRkVG9DYXJ0IH0gfSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdJdGVtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHRleHQtY2FwaXRhbGl6ZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJDaGVjayBvdXRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkNoZWNrb3V0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBjYXJ0OiBfdm0uY2FydCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHJlbW92ZVByb2R1Y3Q6IF92bS5yZW1vdmVGcm9tQ2FydCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgW1xuICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHRleHQtY2VudGVyXCIsXG4gICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2hvcHBpbmcgQ2FydFwiIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHRleHQtY2VudGVyXCIsXG4gICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiKFRhcCBhIHByb2R1Y3QgdG8gcmVtb3ZlIGl0KVwiIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICBhdHRyczogeyBoaW50OiBcIk5hbWVcIiB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0ubmFtZSA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaGludDogXCJQaG9uZVwiIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5QaG9uZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uUGhvbmUgPSAkZXZlbnQub2JqZWN0W1widGV4dFwiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJQaG9uZVwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlN1Ym1pdCBPcmRlclwiIH0sXG4gICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdE9yZGVyIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uY2FydCwgXCIrYWxpYXNcIjogXCJwcm9kdWN0XCIgfSxcbiAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSByZWYucHJvZHVjdFxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogcHJvZHVjdC5zdWJqZWN0IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IHByb2R1Y3QubG9jYXRpb24gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUHJpY2U6IMKjXCIgKyBwcm9kdWN0LnByaWNlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIFtcbiAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJoMiBwLTEwXCIsXG4gICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogXCJUYXAgYSBwcm9kdWN0IHRvIGFkZCBpdCB0byBjYXJ0XCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5wcm9kdWN0cywgXCIrYWxpYXNcIjogXCJwcm9kdWN0XCIgfSxcbiAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSByZWYucHJvZHVjdFxuICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogcHJvZHVjdC5zdWJqZWN0IH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IHByb2R1Y3QubG9jYXRpb24gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUHJpY2U6IMKjXCIgKyBwcm9kdWN0LnByaWNlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU3BhY2U6IFwiICsgcHJvZHVjdC5hdmFpbGFibGVJbnZlbnRvcnkgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3xrdHwoPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYXF1YS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYXF1YS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYXF1YS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYXF1YS5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzJ1wifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9hcXVhLmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0blwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5cbmltcG9ydCBXZWJTaG9wIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG4vLyBVbmNvbW1tZW50IHRoZSBmb2xsb3dpbmcgdG8gc2VlIE5hdGl2ZVNjcmlwdC1WdWUgb3V0cHV0IGxvZ3Ncbi8vIFZ1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5cbm5ldyBWdWUoe1xuXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPEZyYW1lPlxuICAgICAgICAgICAgPFdlYlNob3AgLz5cbiAgICAgICAgPC9GcmFtZT5gLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBXZWJTaG9wXG4gICAgfVxufSkuJHN0YXJ0KCk7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NWJhNWVkNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zYW5qL0Rlc2t0b3AvTlNQbGF5Z3JvdW5kL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ1YmE1ZWQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ1YmE1ZWQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YmE1ZWQ0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1YmE1ZWQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViYTVlZDQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWJhNWVkNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2hlY2tvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxMGI4MmExJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NoZWNrb3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2hlY2tvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2Fuai9EZXNrdG9wL05TUGxheWdyb3VuZC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMTBiODJhMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMTBiODJhMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMTBiODJhMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2hlY2tvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxMGI4MmExJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAxMGI4MmExJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0NoZWNrb3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGVja291dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGVja291dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxMGI4MmExJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9kdWN0TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZlYWE1YTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZHVjdExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9kdWN0TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zYW5qL0Rlc2t0b3AvTlNQbGF5Z3JvdW5kL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBmZWFhNWEyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBmZWFhNWEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBmZWFhNWEyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9kdWN0TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZlYWE1YTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGZlYWE1YTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvUHJvZHVjdExpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2R1Y3RMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2R1Y3RMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9kdWN0TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZlYWE1YTImXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvZm9ybWF0dGVkLXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9zcGFuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpb24tYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2JvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm90dG9tLW5hdmlnYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb3JlL3ZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2RhdGUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaHRtbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9pbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2ZsZXhib3gtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xpc3Qtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGxhY2Vob2xkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2Nyb2xsLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlYXJjaC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC1maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvd2ViLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3V0aWxzL3R5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS94bWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZ1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==