<template>
    <div class="container-fluid">
        <div class="product-list row" ref="scrollComponent">
            <single-product v-for="product in products" :key="product" :product="product"  />
        </div>
        <div class="spinner-border text-primary" role="status" v-show="loadingIcon">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<script>
import { ref,onMounted, onUnmounted } from "vue";
import SingleProduct from "../single-product/SingleProduct.vue";
import getProducts from "../../../store/products";
const products = ref(null);
let isLoading = false;
let loadingIcon = ref(false);
export default {
    name: "ProductList",
    components:{
        SingleProduct
    },
        setup(){
            const products = ref(getProducts(12))
            const scrollComponent = ref(null)
            onMounted(() => {
                window.addEventListener("scroll", handleScroll)
            })
            onUnmounted(() => {
                window.removeEventListener("scroll", handleScroll)
            })
            const loadMoreProducts = () => {
                loadingIcon.value = true;
                setTimeout(()=>{
                    let newProducts = getProducts(12)
                    products.value.push(...newProducts)
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