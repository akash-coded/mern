<script setup lang="ts">
    export default {
    data() {
            return {
                product: {}
            }
    },
    mounted() {
        // fetched from API
        this.product = {
                id: this.$route.params.id,
            name: 'Product ' + this.$route.params.id,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus illo voluptate quasi enim consequatur modi? At eligendi deleniti iusto adipisci eius assumenda ipsa pariatur. Odio quisquam quidem dolorem unde!',
            price: 'Rs. 1050'
            }
    },
        methods: {
            addToCart() {
                this.$router.push({name: 'cart'})
            }
    }
</script>

<template>
    <div>
        <h1>{{product.name}}</h1>
        <p>{{product.description}}</p>
        <p>{{product.price}}</p>
        <button @click="addToCart">Add to cart</button>
    </div>
</template>

