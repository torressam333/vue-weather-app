<template>
  <the-header title="Vue Weather App"></the-header>

</template>

<script>

import TheHeader from "./components/TheHeader";
export default {
  name: 'App',
  components: {
    TheHeader
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
