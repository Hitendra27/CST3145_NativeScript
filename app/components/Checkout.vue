<template>
    <StackLayout>
      <Label class="h2 text-center" text="Shopping Cart" />
      <Label class="h2 text-center" text="(Tap a product to remove it)" />
      <TextField hint='Name' v-model='name'/> 
      <TextField hint='Phone' v-model='Phone'/> 
      <Button @tap='submitOrder' text='Submit Order'/>
      <ListView for="product in cart" @itemTap='onItemTap'>
         <v-template>
            <StackLayout>
               <Label :text="product.name" />
               <Label :text="`price: ${product.price}`" />
               <Label :text="`inventory: ${product.inventory}`" />
            </StackLayout>
         </v-template>
      </ListView>
   </StackLayout>
</template>

<script>
export default {
    props: ['cart'],
    methods: {
        onItemTap(event) {
            this.$emit("removeProduct", event.item);
        },
    },
};
</script>