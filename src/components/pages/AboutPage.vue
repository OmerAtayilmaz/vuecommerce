<template>
  <div class="about-page">
    <h1 v-if="productStore.loading">Loading...</h1>
    <div v-for="product in productStore.products" :key="product.index">
      <h2>{{product.name}}</h2>
      <p>{{product.description}}</p>
    </div>
  </div>
</template>
<script>
import { useProductStore } from '../../store/productStore';
export default {
  name: 'AboutPage',
   setup(){
    const productStore = useProductStore();
    productStore.getProducts();
		return { productStore};
  }
}
</script>
