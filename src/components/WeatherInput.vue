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
          <a @click.prevent="getCurrentWeather" class="search-icon">
            <!-- explicit style -->
            <font-awesome-icon :icon="['fas', 'search']"/>
          </a>
      </form>
    </template>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard';
import {reactive, ref} from "vue";

export default {
  components: {
    BaseCard
  },
  setup () {
    const userInput = ref(null);
    const baseWeatherApiUrl = process.env.VUE_APP_BASE_API_URL;
    let weatherData = reactive({});

    async function getCurrentWeather () {
      const response = await fetch(`${baseWeatherApiUrl}q=${userInput.value}`);

      return weatherData.value = await response.json();
    }

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
  font-size: 1.4em;
  padding: 3px;
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