<template>
    <div class="col-md-4 col-lg-4 product-skeleton " >
        <div class="product-skeleton__image p-2 img-fluid" ></div>
        <div class="product-skeleton__content p-2">
        <div class="product-skeleton__title p-2"></div>
        <div class="product-skeleton__price p-2"></div>
        <div class="product-skeleton__description p-3"></div>
        </div>
    </div>
</template>
<style scoped>
/* Skeleton loader css */
.product-skeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
}
.product-skeleton__image {
    width: 700px;
    height: 400px;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    animation: skeleton-loader 1s infinite;
}
.product-skeleton__content {
    width: 100%;
    margin-top: 1rem;
}
.product-skeleton__title {
    width: 100%;
    height: 1.5rem;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    animation: skeleton-loader 1s infinite;
}
.product-skeleton__price {
    width: 100%;
    height: 1.5rem;
    margin-top: 1rem;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    animation: skeleton-loader 1s infinite;
}
.product-skeleton__description {
    width: 100%;
    height: 1.5rem;
    margin-top: 1rem;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    animation: skeleton-loader 1s infinite;
}
@keyframes skeleton-loader {
    0% {
        background-color: #f0f0f0;
    }
    50% {
        background-color: #e0e0e0;
    }
    100% {
        background-color: #f0f0f0;
    }
}
</style>
