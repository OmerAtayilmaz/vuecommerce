import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore",{
    state: () => ({
        products: [],
        name: "Product Store",
        loading: false,
    }),
    actions:{
        async getProducts(){
            this.loading = true;
            const res = await fetch("http://localhost:3000/products");
            const data =await res.json();
            this.products = data;
            this.loading = false;
        }
    }
});
