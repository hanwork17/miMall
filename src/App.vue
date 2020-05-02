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
      .then((res)=>{
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum')
      .then((res)=>{
        this.$store.dispatch('saveCortCount',res);
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