<template>
    <StackLayout>
      <Label class="h2 text-center" text="Shopping Cart" />
      <Label class="h2 text-center" text="(Tap a product to remove it)" />
      <TextField hint='Name' v-model='Name'/> 
      <TextField hint='Phone' v-model='Phone'/> 
      <Button @tap='submitOrder' text='Submit Order'/>
      <ListView for="product in cart" @itemTap='onItemTap'>
         <v-template>
            <StackLayout>
            <Label :text='product.subject'/>
            <Label :text='product.location'/>
            <Label :text="`Price: £${product.price}`"/>
            </StackLayout>
         </v-template>
      </ListView>
   </StackLayout>
</template>

<script>
export default {
    props: ['cart'],
    data() {
        return {};
    },
    methods: {
        onItemTap(event) {
            this.$emit("removeProduct", event.item);
        },
  

        submitOrder() {
            //function for order place Button.
            this.cart.map((item) => {
              let obj = {
                lesson: item._id,
                name: this.Name,
                phone: this.Phone,
                space: 1,
              };
              fetch("https://cst3145express.herokuapp.com/collection/order", {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },

                body: JSON.stringify(obj),
              })
                .then((response) => response.json())
                .then((data) => {
                  this.Name = "";
                  this.Phone = "";
                  const putMethod = {
                    method: "PUT", // Method itself
                    headers: {
                      "Content-type": "application/json; charset=UTF-8", // Indicates the content
                    },
                    body: JSON.stringify({ lesson: obj.lesson }), // We send data in JSON format
                  };
                  // make the HTTP put request using fetch api
                  fetch(
                    "https://cst3145express.herokuapp.com/collection/lesson",
                    putMethod
                  )
                    .then((response) => response.json())
                    .then((data) => {
                      this.cart = [];
                    })
                    .then(() => {
                      alert("your order is confirmed");
                    }) // Manipulate the data retrieved back, if we want to do something with it
                    .catch((err) => console.log(err));
                })
                .catch((error) => {
                  console.error("Error:", error);

                  alert("Your order Cannot be submitted!");
                });
            });
          },
    },
};
</script>

<style scoped>

</style>