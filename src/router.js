import {createRouter, createWebHistory} from "vue-router";
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
    path: "/:pathMatch(.*)*",
        component: () => import("./components/pages/Not404Found.vue")
    }


]
const router =  createRouter( {
    routes,
    history: createWebHistory()
});

export default router;
