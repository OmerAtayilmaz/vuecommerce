import { defineStore } from "pinia";


export const useCategoryStore = defineStore("categoryStore",{
    state:()=>({
        categories:[],
        loading:false,
    }),
    getters:{

    },
    actions:{
       async getCategories(){
            this.loading = true;
            const res = await fetch("http://localhost:3002/categories");
            const data = await res.json();
            this.categories = data;
            this.loading = false;
       }
    }
})
