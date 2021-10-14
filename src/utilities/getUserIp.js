/*Makes an api call to ipify.org to return ip address*/

import { ref } from "vue";

export async function getUserIp () {
    const ipAddress = ref();
    let response = await fetch('https://api64.ipify.org?format=json');

    return ipAddress.value = await response.json();
}
