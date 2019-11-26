<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 class="text-center">Log in</h2>
          <div class="form-group">
            <input
              type="text"
              placeholder="Username"
              required="required"
              v-model="userName"
              @blur="$v.userName.$touch()"
              :class="[{'form-control' : true}, {'is-invalid' : $v.userName.$error}]"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              required="required"
              v-model="password"
              @blur="$v.password.$touch()"
              :class="[{'form-control' :true}, {'is-invalid': $v.password.$error}]"
            />
          </div>
          <div class="form-group">
            <button @click.prevent="submit()" type="submit" class="btn btn-primary btn-block">Log in</button>
          </div>
          <div class="clearfix">
            <label class="pull-left checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
          </div>
        </form>
        <p class="text-center">
          <a href="javascript:void(0)" @click="redirectToAccountCreate()">Create an Account</a>
        </p>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      userName: null,
      password: null
    };
  },

  methods: {
    ...mapMutations(["login", "logOut"]),
    ...mapActions(["getBasketItemCount"]),

    submit() {
      var userCredential = {
        userName: this.userName,
        password: this.password
      };

      this.$http
        .post("account/login", userCredential, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          var userDetails = response.body.Result;

          if (userDetails != undefined && userDetails.id > 0) {
            this.login(userDetails);
            this.getBasketItemCount({ userId: userDetails.id });

            this.$router.push({ path: "/" });
          }
        });
    },
    redirectToAccountCreate() {
      this.$router.push({ path: "/account/create" });
    }
  },

  validations: {
    userName: {
      required
    },
    password: {
      required
    }
  }
};
</script>