<template>
  <div class="weather-output" v-if="currentLocationWeather || currentWeather">
  <base-card>
    <template v-slot:title>
      <h2 class="weather-title">Weather Information</h2>
    </template>
    <template v-slot:content>
      <div class="form-control" v-if="currentLocationWeather">
       <p>The weather in {{ currentLocationWeather.city_name }}, {{currentLocationWeather.state_code}}
         is currently {{ currentLocationWeather.app_temp }} degrees fahrenheit</p>
      </div>
      <div v-else-if="currentWeather">
        <p>The weather in {{ currentWeather.city_name }}, {{currentWeather.state_code}}
          is currently {{ currentWeather.app_temp }} degrees fahrenheit</p>
      </div>
    </template>
    <template v-slot:footer></template>
  </base-card>
  </div>
</template>
<script>
import BaseCard from "./BaseCard";

export default {
  components: {BaseCard},
  props: {
    currentLocationWeather: {
      type: Object
    },
    currentWeather: {
      type: Object
    }
  },
}
</script>


<style scoped>
.weather-output {

}

.weather-title {
  color: #676767;
  font-size: 1.5rem;
  text-align: center;
}
</style>