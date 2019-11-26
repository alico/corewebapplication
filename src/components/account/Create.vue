<template>
  <div class="form">
    <h4>Create Account</h4>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <div class="col-md-12 row">
            <label for class="control-label col-md-2">Name</label>
            <div class="col-md-10">
              <input
                type="text"
                :class="[{'form-control' : true}, {'is-invalid' : $v.user.name.$error} ]"
                id="name"
                name="name"
                v-model="user.name"
                @blur="$v.user.name.$touch()"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-12 row">
            <label for class="control-label col-md-2">Surname</label>
            <div class="col-md-10">
              <input
                type="text"
                :class="[{'form-control' : true}, {'is-invalid' : $v.user.surname.$error}]"
                id="surname"
                name="surname"
                v-model="user.surname"
                @blur="$v.user.surname.$touch()"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-12 row">
            <label for="userName" class="control-label col-md-2">UserName</label>
            <div class="col-md-10">
              <input
                type="text"
                :class="[{'form-control' : true}, {'is-invalid' : $v.user.userName.$error}]"
                id="userName"
                name="userName"
                v-model="user.userName"
                @blur="$v.user.userName.$touch()"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-12 row">
            <label for class="control-label col-md-2">Password</label>
            <div class="col-md-10">
              <input
                type="password"
                :class="[{'form-control' : true}, {'is-invalid' : $v.user.password.$error}]"
                id="password"
                name="password"
                v-model="user.password"
                @blur="$v.user.password.$touch()"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-12 row">
            <label for class="control-label col-md-2">Confirm</label>
            <div class="col-md-10">
              <input
                type="password"
                :class="[{'form-control' : true}, {'is-invalid' : $v.user.passwordConfirm.$error}]"
                id="passwordConfirm"
                name="passwordConfirm"
                v-model="user.passwordConfirm"
                @blur="$v.user.passwordConfirm.$touch()"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-12 row">
            <label for class="control-label col-md-2">Email</label>
            <div class="col-md-10">
              <input
                type="email"
                :class="[{'form-control' : true}, {'is-invalid' : $v.user.email.$error}]"
                s="form-control"
                id="email"
                name="email"
                v-model="user.email"
                @blur="$v.user.email.$touch()"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="col-md-10">
            <input
              type="button"
              @click.prevent="submit()"
              class="btn btn-success"
              value="Create"
              :disabled="$v.$invalid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      user: {
        name: null,
        surname: null,
        userName: null,
        email: null,
        password: null,
        passwordConfirm: null
      }
    };
  },

  methods: {
    submit() {
      this.$http
        .post("account/create", this.user, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          var result = response.body.Result;
          if (result != undefined && result.id > 0)
            this.$router.push("/account/login");
        });
    }
  },

  validations: {
    user: {
      name: {
        required
      },
      surname: { required },
      userName: { required },
      email: { required, email },
      password: { required, minLength: minLength("5") },
      passwordConfirm: {
        required,
        minLength: minLength("5"),
        sameAsPassword: sameAs("password")
      }
    }
  }
};
</script>