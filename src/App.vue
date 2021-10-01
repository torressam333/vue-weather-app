<template>
  <TheHeader :title="title"></TheHeader>
</template>

<script>

import { ref } from 'vue';
import TheHeader from "./components/TheHeader";

export default {
  name: 'App',
  components: {
    TheHeader
  },
  setup () {
    const title = ref('Weather Wizard');

    return {
      title
    }
  }
}
</script>

<style>
html {
  height: 100vh;
  width: 100vw;
}

body {
  font-family: Verdana, sans-serif;
  margin: 0 auto;
}
</style>
