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
              <input
                @blur="$v.product.name.$touch()"
                type="text"
                :class="[{'form-control':true},{'is-invalid': $v.product.name.$error} ]"
                v-model="product.name"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-2">Description</label>
            <div class="col-md-10">
              <textarea
                @blur="$v.product.description.$touch()"
                :class="[{'form-control':true},{'is-invalid': $v.product.description.$error} ]"
                v-model="product.description"
              />
              <small
                v-if="!$v.product.description.minLength"
                class="form-text text-danger"
              >Minimum 5 characters</small>
            </div>
          </div>

          <div class="form-group row">
            <label for="image" class="control-label col-md-2">Image</label>
            <div class="col-md-10">
              <input type="file" class="form-control-file" id="image" />
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-2">Quantity</label>
            <div class="col-md-10">
              <input
                type="text"
                @blur="$v.product.quantity.$touch()"
                :class="[{'form-control':true},{'is-invalid': $v.product.quantity.$error} ]"
                v-model="product.quantity"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-2">Price</label>
            <div class="col-md-10">
              <input
                type="text"
                @blur="$v.product.price.$touch()"
                :class="[{'form-control':true},{'is-invalid': $v.product.price.$error} ]"
                v-model="product.price"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="control-label col-md-2">Status</label>
            <div class="col-md-10">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="product.status"
                  name="product.status"
                  id="active"
                  value="true"
                />
                <label class="form-check-label" for="active">Active</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="product.status"
                  name="product.status"
                  id="passive"
                  value="false"
                />
                <label class="form-check-label" for="passive">Passive</label>
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label for="category" class="control-label col-md-2">Category</label>
            <div class="col-md-10">
              <select
                name="product.categoryId"
                id="category"
                class="form-control"
                v-model="product.categoryId"
              >
                <option v-for="(category,key) in categories" :key="key" :value="key">{{category}}</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-offset-2 col-md-10">
              <input
                :disabled="$v.$invalid"
                type="submit"
                value="Create"
                @click.prevent="submit()"
                class="btn btn-success"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {
  required,
  minLength,
  between,
  numeric
} from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      product: {
        id: parseFloat(this.$route.params.id),
        name: null,
        price: null,
        quantity: null,
        categoryId: null,
        description: null,
        status: false,
        file: null
      },

      categories: ["Computer", "Phone", "TV", "Book"]
    };
  },
  methods: {
    submit: function() {
      this.product.price = parseFloat(this.product.price);
      this.product.quantity = parseInt(this.product.quantity);
      this.product.categoryId = parseInt(this.product.categoryId);
      this.product.status = Boolean(this.product.status);
      this.product.file = document.getElementById("image").files[0];

      let formData = new FormData();

      for (var key in this.product) {
        formData.append(key, this.product[key]);
      }

      this.$http
        .post("product/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.$router.push("/product/list");
        });
    }
  },
  validations: {
    product: {
      name: {
        required
      },
      description: {
        required,
        minLength: minLength(5)
      },
      price: {
        required,
        numeric
      },
      quantity: {
        required,
        numeric
      }
    }
  },

  created: function() {
    this.$http
      .get("product/get", { params: { id: this.$route.params.id } })
      .then(response => {
        this.product = response.body.Result;
      });
  }
};
</script>