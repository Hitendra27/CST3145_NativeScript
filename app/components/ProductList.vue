<template>
  <StackLayout>
    <Label class="h2 p-10" textWrap="true"
      text="Tap a product to add it to cart" />
    <ListView for='product in products' @itemTap='onItemTap'>
        <v-template>
          <StackLayout>
            <Label :text='product.subject'/>
            <Label :text='product.location'/>
            <Label :text="`Price: £ ${product.price}`"/>
            <Label :text="`Space: ${product.availableInventory}`"/>
          </StackLayout>
        </v-template>
    </ListView>
  </StackLayout>
</template>


<script>
export default {
    data() {
        return {
            products: [], // Product Array.
        };
    },
    methods: {
        onItemTap(event) {
            this.$emit('addProduct', event.item);
        }
    },

    created: function () {
    // this function will be run automatically
    // when creating the Vue instance.
    fetch("https://cst3145express.herokuapp.com/collection/lesson").then(
      (response) => {
        response.json().then((json) => {
          // save the returned JSON object to 'product'
          // note that we used 'webstore.product' instead of this.product'
          this.products = json;
        });
      }
    );
  },

    
};
</script>