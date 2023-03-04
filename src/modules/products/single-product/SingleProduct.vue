<template>
<product-skeleton v-if="!isActive" />
<div v-else  class="col-md-4 col-lg-4 product d-flex align-items-baseline flex-column justify-content-center mt-5">
    <div class="product--image">
        <img src="../../../../public/shoe.jpg" alt="product image" class="img-fluid" style="object-fit: cover;">
    </div>
    <div class="product--info text-center w-100 ">
        <h6>{{product.name}}</h6>
        <p>{{product.description.substring(0,100)}}</p>
        <p>${{product.price}}</p>
    </div>
  <div class="product--actions d-flex justify-content-center w-100">
    <router-link :to="getLink"><button class="btn bg-success text-white">DETAILS</button></router-link>
  </div>
</div>
</template>
<script>
import ProductSkeleton from "../product-skeleton/ProductSkeleton.vue";
import {ref} from "vue";

let isActive = ref(false);
export default{

    name:"SingleProduct",
    props:["product"],
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
    },
  computed:{
      getLink(){
        return "/products/"+this.product.guid;
      }
  }
}
</script>
