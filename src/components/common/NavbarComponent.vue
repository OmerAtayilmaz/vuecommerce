<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
    <a class="navbar-brand" href="#">Vue Commerce</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
         <router-link class="nav-link" active-class="active" to="/">Home</router-link></li>
        <li class="nav-item">
         <router-link class="nav-link" active-class="active" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/products" >Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/categories" >Categories</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
 export default {
   created() {
     console.log(this.$route);
     console.log(this.$router);
   }
 }
</script>
<style>
ul {
  display: flex;
  justify-content: start;
  align-items: center;
  list-style-type: none;
}
ul li{
  margin-right: 15px;
  border:1px solid black;
}
ul li .nav-link{
  font-weight: 600;
}
</style>
