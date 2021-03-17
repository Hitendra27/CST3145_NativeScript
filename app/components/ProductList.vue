<template>
  <StackLayout>
    <Label class="h2 p-10" textWrap="true"
      text="Tap a product to add it to cart" />
    <ListView for='product in products' @itemTap='onItemTap'>
        <v-template>
          <StackLayout>
            <Image :src="`~/${product.image}`" width="300px" height="100%" stretch="aspectFill"/>
            <Label :text='product.subject'/>
            <Label :text='product.location'/>
            <Label :text="`Price: £${product.price}`"/>
            <Label :text="`Space: ${product.availableInventory}`"/>
          </StackLayout>
        </v-template>
    </ListView>
  </StackLayout>
</template>


<script>
export default {
   props:["products"],
    data() {
        return {
          
        };
    },
    methods: {
        onItemTap(event) {
            this.$emit('addProduct', event.item);
        }
    },

    

    
};
</script>