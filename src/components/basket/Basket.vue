<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-info">
          <div class="panel-heading">
            <div class="panel-title">
              <div class="row">
                <div class="col-md-6">
                  <h5>
                    <span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-body">
            <div class="row" v-for="item in basketItems" :key="item.id">
              <div class="col-md-2" style="max-heigh:100px">
                <img class="img-responsive image-container" :src="item.imageUrl" />
              </div>

              <div class="col-md-4">
                <h4 class="product-name">
                  <strong>{{item.productName}}</strong>
                </h4>
                <h4>
                  <small>{{item.description}}</small>
                </h4>
              </div>
              <div class="col-md-2">
                <input type="number" min="1" class="form-control input-sm" v-model="item.quantity" />
              </div>
              <div class="col-md-2">
                <h4>
                  <span class="text-muted">x</span>
                  £{{item.price}}
                </h4>
              </div>

              <div class="col-md-1 text-right">
                <button type="button" class="btn btn-danger">Remove</button>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-12">
                <h4 class="text-right">
                  Total
                  <strong>$50.00</strong>
                </h4>
              </div>
            </div>
          </div>
          <div class="panel-footer">
            <div class="row text-center">
              <div class="col-md-9"></div>
              <div class="col-md-3">
                <button type="button" class="btn btn-success btn-block">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      basketItems: []
    };
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    pageLoad() {
      debugger;
      this.$http
        .get(
          "basket/get",
          { params: { userId: this.getUser.id } },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          this.basketItems = response.body.Result;
        });
    }
  },

  created: function() {
    this.pageLoad();
  }
};
</script>


<style scoped>
.image-container {
  max-width: 100px;
  max-height: 70px;
}
</style>