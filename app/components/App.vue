<template>
    <Page style="background-color: azure;">
        <ActionBar title="Web Shop"/>
       <Label text="Welcome to the Web Shop!" class="h2"/>
       <TabView androidTabsPosition='bottom'>
            <TabViewItem title='Product List' class="h2 text-capitalize">
                <ProductList :products="products" @addProduct="addToCart"/> <!-- Using the ProductList Component -->
            </TabViewItem>
            <TabViewItem title="Check out" class="h2 text-capitalize">
                <Checkout :cart='cart' @removeProduct='removeFromCart'/> <!-- the 'Checkout' component -->
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import ProductList from './ProductList.vue' // import the ProductList component.
import Checkout from './Checkout.vue' // import the Checkout component.

export default {
    data () {
        return {
            cart: [],
            products: []
        };
    },
    components: {ProductList, Checkout}, // register the components.
 
methods: {
    addToCart(product) {
        this.cart.push(product);
        alert("Added to cart:" + product.id);
    },
    removeFromCart(product) {
        for (let i=0; i<this.cart.length; i++) {
            this.products.find((prod)=>{
                if(prod.id===product.id){
                prod.availableInventory++
            }
        })
            if (this.cart[i].id == product.id) this.cart.splice(i,1)
        }
    },
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

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
