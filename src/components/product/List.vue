<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h4>Product List</h4>
      </div>
    </div>
    <div class="row">
      <ProductCard v-for="(val,index) in products" :key="index" :product="val"></ProductCard>
    </div>
  </div>
</template>
<script>
import ProductCard from "./ProductCard";

export default {
  components: {
    ProductCard
  },
  data: function() {
    return {
      products: []
    };
  },

  methods: {
    redirectToEdit(id) {
      this.$router.push({ path: "/product/edit/" + id });
    },
    pageLoad() {
      this.$http
        .get("product/all", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          this.products = response.body.Result;
        });
    }
  },
  created: function() {
    this.pageLoad();
  }
};
</script>