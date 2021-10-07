<template>
  <div class="container">
    <weather-input></weather-input>
    <weather-output></weather-output>
  </div>
</template>
<script>
import WeatherInput from "./WeatherInput";
import WeatherOutput from "./WeatherOutput";
export default {
  name: 'MainView',
  components: {WeatherInput, WeatherOutput}
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
}
</style>