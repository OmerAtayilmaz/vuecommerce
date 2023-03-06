import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";

const routes = [
    {
        name:"HomePage",
        path:"/",
        component:HomePage
    },
    {
        name:"AboutPage",
        path:"/about",
        component:AboutPage,
    },
    {
        name: "ProductsPage",
        path:"/products",
        component: () => import("./components/pages/ProductsPage.vue")
    },
    {
        name: "ProductDetail",
        path:"/products/:id",
        component: () => import("./components/pages/ProductDetail.vue")
    },
    {
        name:"CategoryListPage",
        path:"/categories",
        component: () => import("./modules/categories/CategoriesPage.vue")
    },
    {
        name:"CategoryDetailPage",
        path:"/categories/:id",
        component: () => import("./modules/categories/category-detail/CategoryDetail.vue")
    },
    {
    path: "/:pathMatch(.*)*",
        component: () => import("./components/pages/Not404Found.vue")
    }


]
const router =  createRouter( {
    routes,
    // normal routingtir, serverda konfigurasyon yapılmazsa F5 atıldığında 404 hatası atar çünkü o routenin server karşılığı yoktur.
    //configurasyonla düzeltilir.
    history: createWebHistory()

    // bassın # koyar ve NGineX onun SPA olduğunu anlar, herhangi bir routede
    //f5 atıldığında 404 atmaz.
    //history: createWebHashHistory()
});

export default router;
