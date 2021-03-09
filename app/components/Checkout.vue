<template>
    <StackLayout>
      <Label class="h2 text-center" text="Shopping Cart" />
      <Label class="h2 text-center" text="(Tap a product to remove it)" />
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
};
</script>