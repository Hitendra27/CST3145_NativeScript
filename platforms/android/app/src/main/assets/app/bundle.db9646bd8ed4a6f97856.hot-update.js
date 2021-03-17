webpackHotUpdate("bundle",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9DaGVja291dC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQSxpQkFEQTs7QUFFQTtBQUNBO0FBQ0EsR0FKQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQSxHQUxBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSw2QkFGQTtBQUdBLCtCQUhBO0FBSUE7QUFKQTtBQU1BO0FBQ0Esc0JBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxTQUZBO0FBTUE7QUFOQSxTQVFBLElBUkEsQ0FRQSwyQkFSQSxFQVNBLElBVEEsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBQ0E7QUFDQTtBQUNBLDZEQURBLENBQ0E7O0FBREEsV0FGQTtBQUtBO0FBQUE7QUFBQSxZQUxBLENBS0E7O0FBTEEsVUFIQSxDQVVBOztBQUNBLGNBQ0Esd0RBREEsRUFFQSxTQUZBLEVBSUEsSUFKQSxDQUlBLDJCQUpBLEVBS0EsSUFMQSxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FUQSxFQVVBLElBVkEsQ0FVQTtBQUNBO0FBQ0EsU0FaQSxFQVlBO0FBWkEsU0FhQSxLQWJBLENBYUEsdUJBYkE7QUFjQSxPQWxDQSxFQW1DQSxLQW5DQSxDQW1DQTtBQUNBO0FBRUE7QUFDQSxPQXZDQTtBQXdDQSxLQS9DQTtBQWdEQTs7QUE3REEsRyIsImZpbGUiOiJidW5kbGUuZGI5NjQ2YmQ4ZWQ0YTZmOTc4NTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8TGFiZWwgY2xhc3M9XCJoMiB0ZXh0LWNlbnRlclwiIHRleHQ9XCJTaG9wcGluZyBDYXJ0XCIgLz5cbiAgICAgIDxMYWJlbCBjbGFzcz1cImgyIHRleHQtY2VudGVyXCIgdGV4dD1cIihUYXAgYSBwcm9kdWN0IHRvIHJlbW92ZSBpdClcIiAvPlxuICAgICAgPFRleHRGaWVsZCBoaW50PSdOYW1lJyB2LW1vZGVsPSduYW1lJy8+IFxuICAgICAgPFRleHRGaWVsZCBoaW50PSdQaG9uZScgdi1tb2RlbD0nUGhvbmUnLz4gXG4gICAgICA8QnV0dG9uIEB0YXA9J3N1Ym1pdE9yZGVyJyB0ZXh0PSdTdWJtaXQgT3JkZXInLz5cbiAgICAgIDxMaXN0VmlldyBmb3I9XCJwcm9kdWN0IGluIGNhcnRcIiBAaXRlbVRhcD0nb25JdGVtVGFwJz5cbiAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PSdwcm9kdWN0LnN1YmplY3QnLz5cbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD0ncHJvZHVjdC5sb2NhdGlvbicvPlxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiYFByaWNlOiDCoyR7cHJvZHVjdC5wcmljZX1gXCIvPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgIDwvTGlzdFZpZXc+XG4gICA8L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydjYXJ0J10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSXRlbVRhcChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcInJlbW92ZVByb2R1Y3RcIiwgZXZlbnQuaXRlbSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgICAgICBzdWJtaXRPcmRlcigpIHtcbiAgICAgICAgICAgIC8vZnVuY3Rpb24gZm9yIG9yZGVyIHBsYWNlIEJ1dHRvbi5cbiAgICAgICAgICAgIHRoaXMuY2FydC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICBsZXNzb246IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMub3JkZXIuTmFtZSxcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5vcmRlci5QaG9uZSxcbiAgICAgICAgICAgICAgICBzcGFjZTogMSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL2NzdDMxNDVleHByZXNzLmhlcm9rdWFwcC5jb20vY29sbGVjdGlvbi9vcmRlclwiLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gb3IgJ1BVVCdcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlci5OYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXIuUGhvbmUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgY29uc3QgcHV0TWV0aG9kID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsIC8vIE1ldGhvZCBpdHNlbGZcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLCAvLyBJbmRpY2F0ZXMgdGhlIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsZXNzb246IG9iai5sZXNzb24gfSksIC8vIFdlIHNlbmQgZGF0YSBpbiBKU09OIGZvcm1hdFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhlIEhUVFAgcHV0IHJlcXVlc3QgdXNpbmcgZmV0Y2ggYXBpXG4gICAgICAgICAgICAgICAgICBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2NzdDMxNDVleHByZXNzLmhlcm9rdWFwcC5jb20vY29sbGVjdGlvbi9sZXNzb25cIixcbiAgICAgICAgICAgICAgICAgICAgcHV0TWV0aG9kXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwieW91ciBvcmRlciBpcyBjb25maXJtZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pIC8vIE1hbmlwdWxhdGUgdGhlIGRhdGEgcmV0cmlldmVkIGJhY2ssIGlmIHdlIHdhbnQgdG8gZG8gc29tZXRoaW5nIHdpdGggaXRcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG5cbiAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBvcmRlciBDYW5ub3QgYmUgc3VibWl0dGVkIVwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG59O1xuPC9zY3JpcHQ+Il0sInNvdXJjZVJvb3QiOiIifQ==