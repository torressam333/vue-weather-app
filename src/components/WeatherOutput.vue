<template>
  <div class="weather-output" v-if="extractedData">
  <base-card>
    <template v-slot:title>
      <h2 class="weather-title">Weather Information</h2>
    </template>
    <template v-slot:content>
      <div class="form-control" v-if="extractedData">
      </div>
    </template>
    <template v-slot:footer></template>
  </base-card>
  </div>
</template>
<script>
import BaseCard from "./BaseCard";
import { ref, watchEffect } from "vue";

export default {
  name: 'WeatherOutput',
  components: {BaseCard},
  props: {
    weatherData: {
      type: Object
    }
  },
  setup (props) {
    const weatherDataProp = ref(props.weatherData.value);
    let extractedData = weatherDataProp;

    watchEffect(() => {
      //extractedData = JSON.parse(JSON.stringify(weatherDataProp.value.data[0]));
    })

    return {
      extractedData,
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