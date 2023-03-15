<script setup lang="ts">
export default {
    methods: {
            continueShopping() {
                this.$router.push({name: 'home'})
            }
    }
}
</script>

<template>
    <div>
        <h1>Your cart</h1>
        <p>Your cart is empty!</p>
        <button @click="continueShopping">Continue shopping</button>
    </div>
</template>