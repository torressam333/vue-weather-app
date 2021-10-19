<template>
  <weather-input
      :city="city"
      :state="state"
  ></weather-input>
</template>

<script>

import WeatherInput from "./WeatherInput";
import axios from 'axios';

export default {
  name: 'UserLocation',
  components: {WeatherInput},
  data () {
    return {
      ipStackKey: process.env.VUE_APP_IP_STACK_KEY,
      ipStackUrl: process.env.VUE_APP_IP_STACK_URL,
      ipAddress: null,
      city: null,
      state: null,
    }
  },
  methods: {
    async getLocationFromIp () {
      let ipResponse = await fetch('https://api64.ipify.org?format=json');
      let ipInfo = await ipResponse.json();
      console.log(ipInfo)
      this.ipAddress = ipInfo.ip;

      await axios.get(`${this.ipStackUrl}${this.ipAddress}?access_key=${this.ipStackKey}`)
          .then(response => {
            console.log(response.data)
            this.city = response.data.city;
            this.state = response.data.region_code;
          });
    }
  },
  async created () {
    await this.getLocationFromIp();
  },
}
</script>