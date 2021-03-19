webpackHotUpdate("bundle",{

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
      cart: [],
      products: []
    };
  },

  components: {
    ProductList: _ProductList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Checkout: _Checkout_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  // register the components.
  methods: {
    addToCart(product) {
      //this.cart.push(product);
      //alert("Added to cart:" +  " " + product.subject);
      var match = this.products.find(item => {
        if (item.id === product.id) {
          item.availableInventory--;
          this.cart.push(item);
          alert("Added to cart:" + " " + product.subject);
        }
      });
    },

    removeFromCart(product) {
      for (var i = 0; i < this.cart.length; i++) {
        this.products.find(prod => {
          if (prod.id === product.id) {
            prod.availableInventory++;
          }
        });
        if (this.cart[i].id == product.id) this.cart.splice(i, 1);
      }
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdCQTs7Q0FDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUE7QUFGQTtBQUlBLEdBTkE7O0FBT0E7QUFBQTtBQUFBO0FBQUEsR0FQQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBT0EsS0FYQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBO0FBS0E7QUFDQTtBQUNBOztBQXJCQSxHQVRBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBLHlFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0FQQTtBQVNBO0FBNUNBLEciLCJmaWxlIjoiYnVuZGxlLjVjYmY2ZDI4MTA0MmVjNzg1NDAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2Ugc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcIj5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIldlYiBTaG9wXCIvPlxuICAgICAgIDxMYWJlbCB0ZXh0PVwiV2VsY29tZSB0byB0aGUgV2ViIFNob3AhXCIgY2xhc3M9XCJoMlwiLz5cbiAgICAgICA8VGFiVmlldyBhbmRyb2lkVGFic1Bvc2l0aW9uPSdib3R0b20nPlxuICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPSdQcm9kdWN0IExpc3QnIGNsYXNzPVwiaDIgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0IDpwcm9kdWN0cz1cInByb2R1Y3RzXCIgQGFkZFByb2R1Y3Q9XCJhZGRUb0NhcnRcIi8+IDwhLS0gVXNpbmcgdGhlIFByb2R1Y3RMaXN0IENvbXBvbmVudCAtLT5cbiAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJDaGVjayBvdXRcIiBjbGFzcz1cImgyIHRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgIDxDaGVja291dCA6Y2FydD0nY2FydCcgQHJlbW92ZVByb2R1Y3Q9J3JlbW92ZUZyb21DYXJ0Jy8+IDwhLS0gdGhlICdDaGVja291dCcgY29tcG9uZW50IC0tPlxuICAgICAgICAgICAgPC9UYWJWaWV3SXRlbT5cbiAgICAgICAgPC9UYWJWaWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi9Qcm9kdWN0TGlzdC52dWUnIC8vIGltcG9ydCB0aGUgUHJvZHVjdExpc3QgY29tcG9uZW50LlxuaW1wb3J0IENoZWNrb3V0IGZyb20gJy4vQ2hlY2tvdXQudnVlJyAvLyBpbXBvcnQgdGhlIENoZWNrb3V0IGNvbXBvbmVudC5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FydDogW10sXG4gICAgICAgICAgICBwcm9kdWN0czogW11cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtQcm9kdWN0TGlzdCwgQ2hlY2tvdXR9LCAvLyByZWdpc3RlciB0aGUgY29tcG9uZW50cy5cbiBcbm1ldGhvZHM6IHtcbiAgICBhZGRUb0NhcnQocHJvZHVjdCkge1xuICAgICAgICAvL3RoaXMuY2FydC5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAvL2FsZXJ0KFwiQWRkZWQgdG8gY2FydDpcIiArICBcIiBcIiArIHByb2R1Y3Quc3ViamVjdCk7XG4gICAgICAgIGxldCBtYXRjaCA9IHRoaXMucHJvZHVjdHMuZmluZCgoaXRlbSk9PntcbiAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCl7XG4gICAgICAgICAgICAgICBpdGVtLmF2YWlsYWJsZUludmVudG9yeS0tO1xuICAgICAgICAgICAgICAgdGhpcy5jYXJ0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICBhbGVydChcIkFkZGVkIHRvIGNhcnQ6XCIgKyAgXCIgXCIgKyBwcm9kdWN0LnN1YmplY3QpO1xuICAgICAgICAgICB9XG4gICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUZyb21DYXJ0KHByb2R1Y3QpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMuY2FydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5maW5kKChwcm9kKT0+e1xuICAgICAgICAgICAgICAgIGlmKHByb2QuaWQgPT09IHByb2R1Y3QuaWQpe1xuICAgICAgICAgICAgICAgIHByb2QuYXZhaWxhYmxlSW52ZW50b3J5KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnRbaV0uaWQgPT0gcHJvZHVjdC5pZCkgdGhpcy5jYXJ0LnNwbGljZShpLDEpXG4gICAgICAgIH1cbiAgICB9LFxufSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGJlIHJ1biBhdXRvbWF0aWNhbGx5XG4gICAgLy8gd2hlbiBjcmVhdGluZyB0aGUgVnVlIGluc3RhbmNlLlxuICAgIGZldGNoKFwiaHR0cHM6Ly9jc3QzMTQ1ZXhwcmVzcy5oZXJva3VhcHAuY29tL2NvbGxlY3Rpb24vbGVzc29uXCIpLnRoZW4oXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAvLyBzYXZlIHRoZSByZXR1cm5lZCBKU09OIG9iamVjdCB0byAncHJvZHVjdCdcbiAgICAgICAgICAvLyBub3RlIHRoYXQgd2UgdXNlZCAnd2Vic3RvcmUucHJvZHVjdCcgaW5zdGVhZCBvZiB0aGlzLnByb2R1Y3QnXG4gICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGpzb247XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH0sXG5cblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmhvbWUtcGFuZWwge1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMDtcbiAgICBtYXJnaW46IDE1O1xufVxuXG4uZGVzY3JpcHRpb24tbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDE1O1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=