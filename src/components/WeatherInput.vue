<template>
  <base-card>
    <template v-slot:title>
      <h5>Search weather by entering a location</h5>
    </template>
    <template v-slot:content>
      <form class="weather-form">
        <input
            class="weather-search"
            v-model="userInput"
            id="weather-search"
            placeholder="Get weather by entering a location..."
            type="text">
        <a @click="getCurrentWeather" class="search-icon">
          <!-- explicit style -->
          <font-awesome-icon :icon="['fas', 'search']"/>
        </a>
      </form>
    </template>
  </base-card>
  <!--Weather api results slot-->
  <weather-output
      :current-location-weather="currentLocationWeather"
      :current-weather="currentWeather"
  ></weather-output>
</template>

<script>
import BaseCard from './BaseCard';
import axios from 'axios';
import WeatherOutput from "./WeatherOutput";

export default {
  components: {
    WeatherOutput,
    BaseCard,
  },
  props: {
    zip: {
      type: String
    }
  },
  data () {
    return {
      baseWeatherApiUrl: process.env.VUE_APP_WEATHER_STACK_BASE_URL,
      currentLocationWeather:null,
      currentWeather: null,
      userInput: null,
      weatherApiKey: process.env.VUE_APP_WEATHER_STACK_API_KEY,
      zipcode: this.zip
    }
  },
  methods: {
    getCurrentLocationWeather (zip) {
      axios.get(`${ this.baseWeatherApiUrl }?key=${ this.weatherApiKey }&postal_code=${ zip }&units=I`)
          .then(response => {
            if (response.status === 200) {
              this.currentLocationWeather = response.data.data[0]
            }
          })
    },
    getCurrentWeather () {
      axios.get(`${ this.baseWeatherApiUrl }?key=${ this.weatherApiKey }&city=${ this.userInput }&units=I`)
          .then(response => {
            this.userInput = null;
            if (response.status === 200) {
              this.currentLocationWeather = null; //set back to null to display either or
              this.currentWeather = response.data.data[0];
            }
          });
    }
  },
  mounted () {
    //Set timeout is needed because the api call was happening shortly
    //BEFORE the template was being mounted...super frustrating to figure out
    //Order of execution is weired for parent/child...i.e.
    //Parent created then child created but child mounted before parent mounted
    setTimeout(() => {
      //Only make api call if no data exists (otherwise I might exceed my free tier limits :S)
      if (!this.currentLocationWeather) {
        this.zipcode = this.zip;
        this.getCurrentLocationWeather(this.zipcode);
      }
    }, 300);
  }
}
</script>

<style scoped>
a.search-icon {
  color: #347ab0;
  cursor: pointer;
  font-size: 1.2em;
  margin-right: 2px;
  padding: 5px 0;
}

a.search-icon:hover {
  color: #676767;
}

h5 {
  font-size: 1.3rem;
  color: #676767;
  text-align: center;
  display: inline-block;
  position: relative;
  width: 100%; /*Add this*/
}

.weather-form {
  border: 3px solid #347ab0;
  border-radius: 4em;
  display: flex;
  flex-direction: row;
  height: 2.5em;
  padding: 0 10px;
  width: 100%;
}

.weather-search {
  border: none;
  border-radius: 4em;
  color: #424242;
  font-size: 1.1em;
  height: 100%;
  padding: 0 5px;
  width: 100%;
}

.weather-search:focus {
  outline: none;
}


/*Remove chromes weird input outline on focus*/
input:focus, textarea:focus, select:focus {
  outline: none;
}

.weather-search {

}
</style>
