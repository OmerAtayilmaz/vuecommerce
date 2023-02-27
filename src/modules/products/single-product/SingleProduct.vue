<template>
<product-skeleton v-if="!isActive" />
<div v-else  class="col-md-4 col-lg-4 product ">
    <div class="product--image">
        <img src="../../../../public/shoe.jpg" alt="product image" width="400" height="400" style="object-fit: cover;">
    </div>
    <div class="product--info">
        <h6>{{product.name}}</h6>
        <p>{{product.description}}</p>
        <p>{{product.price}}</p>
    </div>
</div>
</template>
<script>
import ProductSkeleton from "../product-skeleton/ProductSkeleton.vue";
import {ref} from "vue";

let isActive = ref(false); 
export default{
    
    name:"SingleProduct",
    props:{
        product:Object
    },
    components:{
        ProductSkeleton
    },
    created(){
        setTimeout(()=>{
            isActive.value = ref(true);
        }, 2000);
    },
    setup(){
        return{
            isActive
        }
    }
}
</script>