<template>
  <TheHeader :title="title"></TheHeader>
  <main-view></main-view>
</template>

<script>

import { ref } from 'vue';
import TheHeader from "./components/TheHeader";
import MainView from "./components/MainView";

export default {
  name: 'App',
  components: {
    MainView,
    TheHeader
  },
  setup () {
    const title = ref('Weather Forecast');

    return {
      title
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*, *:before, *:after {
  box-sizing: border-box;
}

html {
  height: 100vh;
  width: 100vw;
}

body {
  font-family: Verdana, sans-serif;
  margin: 0 auto;
}
</style>
