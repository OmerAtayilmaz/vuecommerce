<template>
  <div class="container-fluid p-5">
    <div class="row">
      <div class="col-md-4 offset-1">
        <img :src="product.image" height="700"/>
      </div>
      <div class="col-md-6 offset-1 d-flex flex-column justify-content-center align-items-end">
        <div class="product-detail">
          <h3 class="">{{product.name}}</h3>
          <p>
            {{product.description}}
          </p>
        </div>
        <strong>{{ product.price }}</strong>
        <button class="btn btn-success rounded-2 px-4 py-2">Add To Cart</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"ProductDetail",
  data: () => ({
    product:    {
      name: "Rse and shine Doğal Kabak Lifli Aloe Vera Sabunu ",
      description: "Doğal el yapımı olan aloe vera özlü kabak lifli sabun kuru ciltlerde nemlendirici etkiye sahiptir. Nemlendirme ile birlikte Aloe Veranın etkileri arasında yer alan İltihap sökücü özelliği de ön plana çıkar. Ciltte meydana gelen doku bozukluğu, kızarıklara, şişliğe de Aloe Veralı sabun ile uygulama yaparsanız çok kısa sürede iyileşme görülür. Güneş ışınlarına karşı koruyucu etkisi de vardır. Doğal kabak lifi peeling etkisi oluşturarak ciltteki ölü derileri ciltten uzaklaştırır. Kullanım şekli: Öncelikle sabunun daha etkili ve faydalı olması için kullanım sonrası makyaj yapılmamalıdır.( Gözenekler temizlendiği için makyaj yapılan ürün gözenekleri doldurur). Kabak lifini sıcak su ile yumuşatıp dairesel hareketlerle yüzünüze veya vücudunuza masaj yaparak uygulayınız. ",
      price: "$25.99",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
  }),
  created(){
    console.log(this.$route);
  }
}
</script>
