<template>
  <div class="container">
    <div class="row p-5">
  <table class="table table-bordered">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Category Name</th>
      <th scope="col">Picture</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="category in categories">
      <th scope="row">{{category.index}}</th>
      <td>{{category.name.substring(0,55)}}...</td>
      <td><img :src="category.picture" width="80" height="80"/></td>
      <td>
        <button class="btn btn-success mx-1" @click="goDetails(category.guid)">Details</button>
        <button class="btn btn-warning mx-1">Update</button>
        <button class="btn btn-danger mx-1">Delete</button>
      </td>
    </tr>

    </tbody>
  </table>
    </div>
  </div>
</template>
<script>
import {useCategoryStore} from "../../store/categoryStore.js";

export default {
  setup(){
    const categoryStore = useCategoryStore();
    categoryStore.getCategories();
    return {categories: categoryStore.categories, loading:categoryStore.loading}
  },
  methods:{
    goDetails(index){
     //way1: this.$router.push("/");

      //way2:
      this.$router.push({
        name: "CategoryDetailPage",
        params: {
          id:index
        }
      });
    }
  }
}
</script>
