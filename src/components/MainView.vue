<template>
  <div class="container">
    <user-location></user-location>
  </div>
</template>

<script>
import UserLocation from "./UserLocation";
export default {
  name: 'MainView',
  components: {UserLocation}
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
}
</style>