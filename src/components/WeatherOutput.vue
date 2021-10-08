<template>
  <div class="weather-output">
  <base-card>
    <template v-slot:title>
      <h2 class="weather-title">Weather Information</h2>
    </template>
    <template v-slot:content>
      <div class="form-control" v-if="weatherData">
        <ul>
          <li v-for="data in currentData" :key="data.name">{{ data }}</li>
        </ul>
      </div>
    </template>
    <template v-slot:footer></template>
  </base-card>
  </div>
</template>
<script>
import BaseCard from "./BaseCard";
import { inject, reactive, watchEffect } from "vue";

export default {
  components: {BaseCard},
  setup () {
    const weatherData = inject('weatherData');
    let currentData = reactive({});

    if (weatherData) {
      currentData = reactive(weatherData.value.current);
    }


    //let locationData = reactive(weatherData.value.location)

    watchEffect(() => {
        console.log('new weatherData', weatherData.value);
    })

    return {
      currentData,
      //locationData,
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