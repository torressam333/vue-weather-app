<template>
  <weather-input
      :zip="zip"
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
      zip: null
    }
  },
  methods: {
    async getZipFromIp () {
      let ipResponse = await fetch('https://api64.ipify.org?format=json');
      let ipInfo = await ipResponse.json();
      this.ipAddress = ipInfo.ip;

      await axios.get(`${this.ipStackUrl}${this.ipAddress}?access_key=${this.ipStackKey}`)
          .then(response => {
            this.zip = response.data.zip;
          });
    }
  },
  async created () {
    await this.getZipFromIp();
  },
}
</script>