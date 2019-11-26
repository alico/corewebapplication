<template>
  <div class="col-md-4">
    <div class="card" style="width: 18rem;">
      <img :src="product.imageUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">{{product.description}}</p>
        <a
          href="javascript:void(0)"
          @click="redirectToEdit(product.id)"
          class="btn btn-primary"
        >Detail</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    redirectToEdit(id) {
      this.$router.push({ path: "/product/detail/" + id });
    }
  }
};
</script>