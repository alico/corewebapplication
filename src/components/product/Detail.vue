<template>
  <form>
    <div class="form">
      <h4>{{product.name}} - £{{product.price}}</h4>
      <hr />
      <div class="col-md-12 form-group row">
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img :src="product.imageUrl" class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
            <label class="control-label col-md-2">Name</label>
            <div class="col-md-10">
              <label class="label-control">{{product.name}}</label>
              <hr />
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-2">Description</label>
            <div class="col-md-10">
              <label class="label-control">{{product.description}}</label>
              <hr />
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-2">Quantity</label>
            <div class="col-md-3">
              <input
                type="number"
                value="1"
                v-model="product.quantity"
                @blur="$v.product.quantity.$touch()"
                :class="[{'form-control' : true}]"
                name="product.quantity"
                id="quantity"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-2">Price</label>
            <div class="col-md-10">
              <h4>£{{product.price}}</h4>
              <hr />
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-offset-2 col-md-10">
              <input
                type="submit"
                value="Add"
                @click.prevent="submit()"
                class="btn btn-success"
                :disabled="$v.$invalid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";

export default {
  data: function() {
    return {
      product: {
        id: parseFloat(this.$route.params.id),
        name: null,
        price: null,
        quantity: 1,
        categoryId: null,
        description: null,
        status: false,
        file: null
      },

      categories: ["Computer", "Phone", "TV", "Book"]
    };
  },
  methods: {
    ...mapActions(["getBasketItemCount"]),
    submit: function() {
      debugger;

      var basketItem = {
        productId: parseInt(this.product.id),
        userId: parseInt(this.getUser.id),
        quantity: parseInt(this.product.quantity)
      };

      var vue = this;

      this.$http
        .post("basket/add", basketItem, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          this.getBasketItemCount({ userId: this.getUser.id });
          this.$router.push("/basket");
        });
    }
  },
  computed: {
    ...mapGetters(["getUser"])
  },
  validations: {
    product: {
      quantity: {
        required,
        numeric
      }
    }
  },

  created: function() {
    debugger;
    this.$http
      .get("product/get", { params: { id: this.$route.params.id } })
      .then(response => {
        this.product = response.body.Result;
      });
  }
};
</script>