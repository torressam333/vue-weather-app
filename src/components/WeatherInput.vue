<template>
  <base-card>
    <template v-slot:title>
      <h5>Search weather by entering a location</h5>
    </template>
    <template v-slot:content>
      <label for="weather-search">Enter Location:</label>
      <input id="weather-search" type="text">
    </template>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard';

export default {
  components: {
    BaseCard
  }
}
</script>