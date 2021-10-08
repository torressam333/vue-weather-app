<template>
  <div class="container">
    <weather-input>
      <weather-output></weather-output>
    </weather-input>
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