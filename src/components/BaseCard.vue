<template>
  <div class="base-card">
    <header class="header">
      <slot name="title"></slot>
    </header>
    <main class="content">
      <slot name="content"></slot>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.base-card {
  border: 1px solid #eee;
  border-radius: 0.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 13rem;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
}

.header, .content, .footer {
  padding: 10px 0 0 5px;
}

</style>