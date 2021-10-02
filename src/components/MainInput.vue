<template>
  <div class="container">
    <weather-input></weather-input>
  </div>
</template>
<script>
import WeatherInput from "./WeatherInput";
export default {
  components: {WeatherInput}
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
}
</style>