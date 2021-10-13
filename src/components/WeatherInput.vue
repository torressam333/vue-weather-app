<template>
  <base-card>
    <template v-slot:title>
      <h5>Search weather by entering a location</h5>
    </template>
    <template v-slot:content>
      <form class="weather-form">
        <a @click="getCurrentWeather" class="search-icon">
          <!-- explicit style -->
          <font-awesome-icon :icon="['fas', 'search']"/>
        </a>
          <input
              class="weather-search"
              v-model="userInput"
              id="weather-search"
              placeholder="Get weather by entering a location..."
              type="text">
      </form>
    </template>
  </base-card>
  <!--Weather api results  -->
  <weather-output
      :weather-data="weatherData"
  ></weather-output>
</template>

<script>
import BaseCard from './BaseCard';
import WeatherOutput from "./WeatherOutput";
import {inject, ref, onMounted} from "vue";

export default {
  components: {
    BaseCard,
    WeatherOutput
  },
  setup () {
    let userCoordinates = inject('userCoordinates');
    const baseWeatherApiUrl = process.env.VUE_APP_WEATHER_STACK_BASE_URL;
    const mapBoxBaseUrl = process.env.VUE_APP_MAPBOX_BASE_URL;
    const mapboxApiKey = process.env.VUE_APP_MAPBOX_API_KEY;
    const userInput = ref(null);
    const weatherApiKey = process.env.VUE_APP_WEATHER_STACK_API_KEY;
    const weatherData = {};
    let currentUserCoords = ref(userCoordinates.value);

    async function getCurrentWeather () {
      let response = {};

      try {
        response = await fetch(`${baseWeatherApiUrl}?key=${weatherApiKey}&city=${userInput.value}&units=I`);

        //Empty input field
        userInput.value = null;

        return (weatherData.value = await response.json());

      } catch (error) {
        console.log(error);
      }
    }

    //Get location data based on users coordinates
    async function convertCoordsToLocation () {
      let response = {};

      try {
        if (currentUserCoords.value) {
          let lat = userCoordinates.value.lat;
          let lng = userCoordinates.value.lng;

          response = await fetch(`${mapBoxBaseUrl}/${lng},${lat}.json?access_token=${mapboxApiKey}`);
        }

        return (currentUserCoords.value = await response.json());

      } catch (error) {
        console.log(error)
      }
    }

    async function getWeatherBasedOnCoordinate () {
      try {
        const zip = await getZip();
        console.log('here1')
        if (zip) {
          console.log('here')
          const response = await fetch(`${baseWeatherApiUrl}?key=${weatherApiKey}&postal_code=${zip}&units=I`);

          return await response.json();
        }

      } catch (error) {
        console.log(error)
      }
    }

    async function getZip () {
      try {
        let allDataReturned = await convertCoordsToLocation();
        let featureData = allDataReturned.features;
        let specificLocation = '';

        featureData.forEach((locData, index) => {
          if (index === 0) {
            specificLocation = locData.context[0].text;
          }
        });

        return specificLocation;
      } catch (error) {
        console.log(error)
      }

    }

    onMounted(() => {
      //Provide default location before page loads based on users geo code
      getWeatherBasedOnCoordinate();
    });

    return {
      getCurrentWeather,
      userInput,
      weatherData
    }
  }
}
</script>

<style scoped>
a.search-icon{
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
  text-align:center;
  display:inline-block;
  position:relative;
  width:100%; /*Add this*/
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