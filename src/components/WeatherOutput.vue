<template>
  <div class="weather-output" v-if="userLocationWeather || currentWeather">
  <base-card>
    <template v-slot:title>
      <h2 class="weather-title">Weather Information</h2>
    </template>
    <template v-slot:content>
      <div class="form-control">
       <p>The weather in {{ userLocationWeather.city_name }} is currently {{ userLocationWeather.app_temp }} degrees farenheit</p>
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
  data () {
    return {
      userLocationWeather: null

    }
  },
  watch: {
    currentLocationWeather (prev) {
      this.userLocationWeather = prev;
    },
    userLocationWeather () {
      if (this.currentWeather) {
        this.userLocationWeather = null;
      }
    }
  }
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