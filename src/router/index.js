// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import product from '../components/product.vue';
import Products from '../components/Products.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: product },
        { path: '/add-product', component: Products },
    ],
});
