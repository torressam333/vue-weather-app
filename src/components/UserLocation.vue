<template>
  <weather-input
      :zip="zip"
  ></weather-input>
</template>

<script>

import {getUserIp} from "../utilities/getUserIp";
import WeatherInput from "./WeatherInput";
import axios from 'axios';

export default {
  name: 'UserLocation',
  components: {WeatherInput},
  data () {
    return {
      ipAddress: null,
      ipStackKey: process.env.VUE_APP_IP_STACK_KEY,
      ipStackUrl: process.env.VUE_APP_IP_STACK_URL,
      zip: null
    }
  },
  methods: {
    extractIp () {
      let ipObj = getUserIp();

      ipObj.then(response => this.ipAddress = response.ip)

    },

    getZipFromIp () {
      axios.get(`${this.ipStackUrl}2600:8800:86ac:6400:12e7:c6ff:fe16:8c6e?access_key=${this.ipStackKey}`)
          .then(response => this.zip = response.data.zip)
    }
  },
  mounted () {
    this.extractIp();
    this.getZipFromIp();
  }
}
</script>