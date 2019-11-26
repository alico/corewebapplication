<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link tag="div" to="/" exact>
      <a class="navbar-brand">Product Store</a>
    </router-link>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link tag="li" class="nav-item" to="/" active-class="active" exact>
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/product/create" active-class="active">
          <a class="nav-link">Create</a>
        </router-link>
        <router-link class="nav-item" to="/product/list" active-class="active">
          <a class="nav-link">List</a>
        </router-link>
        <router-link class="nav-item" to="/basket" active-class="active" v-if="getIslogged">
          <a class="nav-link">Cart({{getBasketItemCount}})</a>
        </router-link>
      </ul>
    </div>

     <router-link tag="div" class="nav-item dropdown" v-if="getIslogged" to="">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >{{getUserNameDisplay}}</a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" @click="logOutClick()" href="javascript:void(0);">Log out</a>
      </div>
    </router-link>
    <router-link tag="div" to="/account/login" active-class="active" v-if="!getIslogged">
      <a class="nav-link">
        <p>Login </p>
      </a>
    </router-link>
   
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["logOut"]),
    logOutClick() {
      this.logOut(null);
      this.$router.push("/");
    }
  },

  computed: {
    ...mapGetters(["getIslogged", "getUserNameDisplay", "getBasketItemCount"])
  }
};
</script>