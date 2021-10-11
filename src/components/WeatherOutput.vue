<template>
  <div class="weather-output">
  <base-card>
    <template v-slot:title>
      <h2 class="weather-title">Weather Information</h2>
    </template>
    <template v-slot:content>
      <div class="form-control" v-if="currentData">
      </div>
    </template>
    <template v-slot:footer></template>
  </base-card>
  </div>
</template>
<script>
import BaseCard from "./BaseCard";
import { inject, ref, watchEffect } from "vue";

export default {
  name: 'WeatherOutput',
  components: {BaseCard},
  setup () {
    const weatherData = inject('weatherData');
    let currentData = ref();

    watchEffect(() => {
        currentData = weatherData.data;


    })

    return {
      currentData,
      weatherData,
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