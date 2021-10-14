import { createApp } from 'vue'
import App from './App.vue'

/*Font-awesome*/
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import axios from 'axios';

library.add(faSearch);

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.axios=axios

app.mount('#app')