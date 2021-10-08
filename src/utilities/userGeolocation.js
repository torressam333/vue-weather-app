import { onUnmounted, onMounted, ref } from "vue";

export function userGeolocation () {
    const coords = ref({latitude: 0, longitude: 0});
    //Geolocation api (check it's supported before accessing)
    const isSupported = 'navigator' in window && 'geolocation' in navigator;

    let watcher = null;

    //Watch when a users position changes
    onMounted(() => {
        if (isSupported) {
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