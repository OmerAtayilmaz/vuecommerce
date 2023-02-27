<template>
<div class="col-md-4 col-lg-4 product ">
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
export default{
    name:"SingleProduct",
    props:{
        product:Object
    }
}
</script>