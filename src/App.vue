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
  mounted() {}
};
</script>

<style>
@import "./assets/scss/reset.scss";
</style>
