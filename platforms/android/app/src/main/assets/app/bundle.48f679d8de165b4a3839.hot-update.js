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
      this.cart.push(product);
      alert("Added to cart:" + " " + product.subject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9BcHAudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWdCQTs7Q0FDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUE7QUFGQTtBQUlBLEdBTkE7O0FBT0E7QUFBQTtBQUFBO0FBQUEsR0FQQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkE7QUFLQTtBQUNBO0FBQ0E7O0FBZEEsR0FUQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQSx5RUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBUEE7QUFTQTtBQXJDQSxHIiwiZmlsZSI6ImJ1bmRsZS40OGY2NzlkOGRlMTY1YjRhMzgzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XCI+XG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJXZWIgU2hvcFwiLz5cbiAgICAgICA8TGFiZWwgdGV4dD1cIldlbGNvbWUgdG8gdGhlIFdlYiBTaG9wIVwiIGNsYXNzPVwiaDJcIi8+XG4gICAgICAgPFRhYlZpZXcgYW5kcm9pZFRhYnNQb3NpdGlvbj0nYm90dG9tJz5cbiAgICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT0nUHJvZHVjdCBMaXN0JyBjbGFzcz1cImgyIHRleHQtY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0TGlzdCA6cHJvZHVjdHM9XCJwcm9kdWN0c1wiIEBhZGRQcm9kdWN0PVwiYWRkVG9DYXJ0XCIvPiA8IS0tIFVzaW5nIHRoZSBQcm9kdWN0TGlzdCBDb21wb25lbnQgLS0+XG4gICAgICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwiQ2hlY2sgb3V0XCIgY2xhc3M9XCJoMiB0ZXh0LWNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tvdXQgOmNhcnQ9J2NhcnQnIEByZW1vdmVQcm9kdWN0PSdyZW1vdmVGcm9tQ2FydCcvPiA8IS0tIHRoZSAnQ2hlY2tvdXQnIGNvbXBvbmVudCAtLT5cbiAgICAgICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICAgIDwvVGFiVmlldz5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QudnVlJyAvLyBpbXBvcnQgdGhlIFByb2R1Y3RMaXN0IGNvbXBvbmVudC5cbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0LnZ1ZScgLy8gaW1wb3J0IHRoZSBDaGVja291dCBjb21wb25lbnQuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnQ6IFtdLFxuICAgICAgICAgICAgcHJvZHVjdHM6IFtdXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7UHJvZHVjdExpc3QsIENoZWNrb3V0fSwgLy8gcmVnaXN0ZXIgdGhlIGNvbXBvbmVudHMuXG4gXG5tZXRob2RzOiB7XG4gICAgYWRkVG9DYXJ0KHByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5jYXJ0LnB1c2gocHJvZHVjdCk7XG4gICAgICAgIGFsZXJ0KFwiQWRkZWQgdG8gY2FydDpcIiArICBcIiBcIiArIHByb2R1Y3Quc3ViamVjdCk7XG4gICAgfSxcbiAgICByZW1vdmVGcm9tQ2FydChwcm9kdWN0KSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLmNhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuZmluZCgocHJvZCk9PntcbiAgICAgICAgICAgICAgICBpZihwcm9kLmlkPT09cHJvZHVjdC5pZCl7XG4gICAgICAgICAgICAgICAgcHJvZC5hdmFpbGFibGVJbnZlbnRvcnkrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHRoaXMuY2FydFtpXS5pZCA9PSBwcm9kdWN0LmlkKSB0aGlzLmNhcnQuc3BsaWNlKGksMSlcbiAgICAgICAgfVxuICAgIH0sXG59LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgcnVuIGF1dG9tYXRpY2FsbHlcbiAgICAvLyB3aGVuIGNyZWF0aW5nIHRoZSBWdWUgaW5zdGFuY2UuXG4gICAgZmV0Y2goXCJodHRwczovL2NzdDMxNDVleHByZXNzLmhlcm9rdWFwcC5jb20vY29sbGVjdGlvbi9sZXNzb25cIikudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgIC8vIHNhdmUgdGhlIHJldHVybmVkIEpTT04gb2JqZWN0IHRvICdwcm9kdWN0J1xuICAgICAgICAgIC8vIG5vdGUgdGhhdCB3ZSB1c2VkICd3ZWJzdG9yZS5wcm9kdWN0JyBpbnN0ZWFkIG9mIHRoaXMucHJvZHVjdCdcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzID0ganNvbjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSxcblxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uaG9tZS1wYW5lbCB7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwO1xuICAgIG1hcmdpbjogMTU7XG59XG5cbi5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTU7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==