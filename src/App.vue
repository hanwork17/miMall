<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      res: []
    };
  },
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser() {
      this.axios.get('/user')
      .then(()=>{
        //保存到Vuex
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum')
      .then(()=>{
        //保存到Vuex
      })
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>