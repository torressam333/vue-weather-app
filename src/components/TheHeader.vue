<template>
  <header>
    <h1>{{ passedTitle }}</h1>
  </header>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const passedTitle = computed(() => {
      return props.title;
    });

    return {
      passedTitle
    }
  },
}
</script>
<style scoped>
header {
  align-items: center;
  background: linear-gradient(173deg, #fff, #347ab0, #689fc9);
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 100%;
}

header h1 {
  color: white;
  margin: 0;
}
</style>