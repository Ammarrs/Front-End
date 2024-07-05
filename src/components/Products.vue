<!-- eslint-disable vue/multi-word-component-names -->
<!-- As addProduct -->
<template>
    <div class="allProd">
            <h1>Welcome to my store</h1>
                <!-- <td :v-for="product in products"></td> -->
                <product />
                <div>
                    <form class="frm" @submit.prevent="addProduct">
                        <!-- title -->
                        <label for="title" class="title">Title:</label>
                        <input type="text" class="ttl" name="title" required><br>
                        <!-- price -->
                        <label for="price" class="price">Price:</label>
                        <input type="text" class="prc" name="price" required><br>
                        <!-- submit -->
                        <button class="btn" type="submit">Add Product</button>
                    </form>
                </div>
    </div>
</template>

<script>
import axios from '../axios';

export default {
    data() {
        return {
            title: '',
            price: '',
            category: '',
        }
    },
    methods: {
        addProduct() {
            const newProduct = {
            title: this.title,
            price: this.price,
            category: this.category,
            };
            axios.post('/products', newProduct).then(() => {
            this.$router.push('/');
            });
        },
    },
}
</script>


<style scoped>
    .allProd {
        width: 100%;
        height: 100%;
        /* background: rgba(0, 0, 0, 0.3); */
        padding: 10px;
        margin: 0px;
        top: 0;
    }

    .frm {
        margin-top:20px ;
        
    }
    .title {
        padding-right: 3px;
    }
    .price {
        padding-right: 2px;
    }
    .ttl {
        margin-left: 3px;
        margin-bottom: 7px;
    }

    .prc {
        margin-bottom: 7px;
    }

    .ttl,.prc {
        border-radius: 15px;
        width: 300px;
        height: 25px;
        text-align: center;
    }

    .btn {
        width: 150px;
        height: 35px;
        border: 2px solid #2F3645;
        border-radius: 15px;
        background: #2F3645;
        color: #EEEDEB;
    }
</style>