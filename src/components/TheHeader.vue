<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
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