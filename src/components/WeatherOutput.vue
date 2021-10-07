<template>
  <div class="weather-output">
  <base-card>
    <template v-slot:title>
      <h2 class="weather-title">Weather Information</h2>
    </template>
    <template v-slot:content>
      <div class="form-control" v-if="weatherData">
        <ul>
          <li v-for="data in weatherData" :key="data.name">{{ data }}</li>
        </ul>
      </div>
    </template>
    <template v-slot:footer></template>
  </base-card>
  </div>
</template>
<script>
import BaseCard from "./BaseCard";
import { inject, watchEffect } from "vue";

export default {
  components: {BaseCard},
  setup () {
    //Provide default of empty object in case no results exist
    const weatherData = inject('weatherData', '');

    watchEffect(() => {
        console.log('new weatherData', weatherData.value);
    })

    return {
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