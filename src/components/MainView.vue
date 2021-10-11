<template>
  <div class="container">
    <user-location>
      <weather-input></weather-input>
    </user-location>
  </div>
</template>
<script>
import WeatherInput from "./WeatherInput";
import UserLocation from "./UserLocation";
export default {
  name: 'MainView',
  components: {UserLocation, WeatherInput}
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
}
</style>