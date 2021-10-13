/*Returns lat and long of current users location
*
* *Requires user approval to use location
* */
import {onUnmounted, ref, onBeforeMount} from "vue";

export function userGeolocation () {
    const coords = ref({latitude: 0, longitude: 0});
    //Geolocation api (check it's supported before accessing)
    const isSupported = 'navigator' in window && 'geolocation' in navigator;

    let watcher = null;

    onBeforeMount(() => {
        if (isSupported) {
            //Called whenever a users position changes
            watcher = navigator.geolocation.watchPosition(
                position => (coords.value = position.coords)
            );
        }
    });

    onUnmounted(() => {
        if(watcher) navigator.geolocation.clearWatch(watcher);
    });

    return { coords, isSupported}
}