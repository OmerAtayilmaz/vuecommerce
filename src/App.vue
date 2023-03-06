<template>
  <home-layout>
    <template #header>
      <navbar-component/>
    </template>
    <template #default>
      <router-view></router-view>
    </template>
    <template #footer>
      <footer-component/>
    </template>
  </home-layout>
</template>
<script>
import ProductList from "./modules/products/product-list/ProductList.vue";
import HomeLayout from "./components/layouts/HomeLayout.vue";
import FooterComponent from "./components/common/FooterComponent.vue";
import NavbarComponent from "./components/common/NavbarComponent.vue";
export default {
  name: "App",
  template: HomeLayout,
  components: {
    NavbarComponent,
    HomeLayout,
    ProductList,
    FooterComponent
  }
}
</script>


