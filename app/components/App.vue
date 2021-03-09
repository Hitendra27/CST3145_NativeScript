<template>
    <Page style="background-color: azure;">
        <ActionBar title="Web Shop"/>
       <Label text="Welcome to the Pet Shop!" class="h2"/>
       <TabView androidTabsPosition='bottom'>
            <TabViewItem title='Product List' class="h2">
                <ProductList @addProduct="addToCart"/> <!-- Using the ProductList Component -->
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
        };
    },
    components: {ProductList, Checkout}, // register the component.
 



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
