<!-- eslint-disable vue/multi-word-component-names -->
<!-- as ProductTable component -->
<template>
    <!-- <button @click="navigateToAddProduct">Add Product</button> -->
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Add to cart</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.price }}</td>
                <td><button @click="addToCart(product)">Add</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            products: []
        }
    },
    created() {
        this.fetchProducts()
    },
    methods: {
        fetchProducts() {
            axios.get(`/products`).then((response) => {
                this.products = response.data
            })
        },
        navigateToAddProduct() {
            this.$router.push('/add-product');
        },
        addToCart(product) {
            // Add to cart logic here
            console.log(`${product.title} added to cart`);
        }
    }
}
</script>

<style scoped>
.table , th{
    border: 2px solid;
    margin-left: 50px;
    margin-top: 10px;
    width: 1400px;
    border-collapse: collapse;
}

button {
    width: 300px;
    height: 30px;
    margin-bottom: 10px;
    background: #2F3645;
    color: #EEEDEB;
    border: 2px solid;
    border-radius: 15px;
    /* border-color: #EEEDEB; */
}

h1 {
    border-bottom: 2px solid;
    position: absolute;
}

</style>
