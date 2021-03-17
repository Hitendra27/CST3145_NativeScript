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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdCQTs7Q0FDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTs7QUFNQTtBQUFBO0FBQUE7QUFBQSxHQU5BO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTtBQVJBLEciLCJmaWxlIjoiYnVuZGxlLjg5MjMxNTk0ZWJiYmIyYTRlNGQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2Ugc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcIj5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIldlYiBTaG9wXCIvPlxuICAgICAgIDxMYWJlbCB0ZXh0PVwiV2VsY29tZSB0byB0aGUgV2ViIFNob3AhXCIgY2xhc3M9XCJoMlwiLz5cbiAgICAgICA8VGFiVmlldyBhbmRyb2lkVGFic1Bvc2l0aW9uPSdib3R0b20nPlxuICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPSdQcm9kdWN0IExpc3QnIGNsYXNzPVwiaDIgdGV4dC1jYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0IEBhZGRQcm9kdWN0PVwiYWRkVG9DYXJ0XCIvPiA8IS0tIFVzaW5nIHRoZSBQcm9kdWN0TGlzdCBDb21wb25lbnQgLS0+XG4gICAgICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwiQ2hlY2sgb3V0XCIgY2xhc3M9XCJoMiB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tvdXQgOmNhcnQ9J2NhcnQnIEByZW1vdmVQcm9kdWN0PSdyZW1vdmVGcm9tQ2FydCcvPiA8IS0tIHRoZSAnQ2hlY2tvdXQnIGNvbXBvbmVudCAtLT5cbiAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICAgIDwvVGFiVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QudnVlJyAvLyBpbXBvcnQgdGhlIFByb2R1Y3RMaXN0IGNvbXBvbmVudC5cbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0LnZ1ZScgLy8gaW1wb3J0IHRoZSBDaGVja291dCBjb21wb25lbnQuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnQ6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50czoge1Byb2R1Y3RMaXN0LCBDaGVja291dH0sIC8vIHJlZ2lzdGVyIHRoZSBjb21wb25lbnRzLlxuIFxubWV0aG9kczoge1xuICAgIGFkZFRvQ2FydChwcm9kdWN0KSB7XG4gICAgICAgIHRoaXMuY2FydC5wdXNoKHByb2R1Y3QpO1xuICAgICAgICBhbGVydChcIkFkZGVkIHRvIGNhcnQ6XCIgKyBwcm9kdWN0Lml0ZW0pO1xuICAgIH0sXG4gICAgcmVtb3ZlRnJvbUNhcnQocHJvZHVjdCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5jYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJ0W2ldID09IHByb2R1Y3QpIHRoaXMuY2FydC5zcGxpY2UoaSwxKVxuICAgICAgICB9XG4gICAgfSxcbn1cblxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZS1wYW5lbCB7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwO1xuICAgIG1hcmdpbjogMTU7XG59XG5cbi5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==