<template>
  <div class="weather-output">
  <base-card>
    <template v-slot:title>
      <h6>Weather Information</h6>
    </template>
    <template v-slot:content>

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
    weatherData : {
      type: Object,
      required: true
    }
  },
  setup (props) {
    console.log(props)
  }
}
</script>

<style scoped>
.weather-output {

}
</style>