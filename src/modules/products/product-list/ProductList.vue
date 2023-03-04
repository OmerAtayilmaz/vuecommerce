<template>
    <div class="container-fluid ">
        <div class="product-list row  " ref="scrollComponent">
            <single-product v-for="product in products" :key="product.index" :product="product"  />
        </div>
      <div class="spinner-container d-flex justify-content-center mt-3">
        <div class="spinner-border text-success  " role="status" v-show="loadingIcon">
            <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
</template>
<script>
import { ref,onMounted, onUnmounted } from "vue";
import SingleProduct from "../single-product/SingleProduct.vue";
import { useProductStore } from "../../../store/productStore";
const products = ref(null);
let isLoading = false;
let loadingIcon = ref(false);

export default {
    name: "ProductList",
    components:{
        SingleProduct
    },
        setup(){
            const productStore = useProductStore();
            productStore.getProducts();
            const products = ref(productStore.products);
            const scrollComponent = ref(null);


            onMounted(() => {
                window.addEventListener("scroll", handleScroll)
            })
            onUnmounted(() => {
                window.removeEventListener("scroll", handleScroll)
            })
            const loadMoreProducts = () => {
                loadingIcon.value = true;
                setTimeout(()=>{
                    products.value.push(...productStore.products)
                    isLoading = false;
                    loadingIcon.value = false;
                }, 2000);

            }
            const handleScroll = (e) => {
                let element = scrollComponent.value;
                if (element.getBoundingClientRect().bottom < window.innerHeight) {
                    loadingIcon.value = true;
                    if(!isLoading) {
                        loadMoreProducts()
                    }
                    isLoading = true;
                }
            }
            return {
                loadingIcon,
                products,
                scrollComponent,
            }
        }
    }
</script>
