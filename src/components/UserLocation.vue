<template>
  <div>
    <div>
      <h4>Position</h4>
      Latitude: {{ currentPosition.lat.toFixed(2) }}, Longitude:
      {{ currentPosition.lng.toFixed(2) }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { userGeolocation } from "../utilities/userGeolocation";

export default {
  name: 'UserLocation',
  setup () {
    const { coords } = userGeolocation();
    const currentPosition = computed(() => ({
      //Follow naming conventions from Google Maps API
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    return { currentPosition }
  }
}
</script>