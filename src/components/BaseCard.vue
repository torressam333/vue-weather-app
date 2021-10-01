<template>
  <div class="base-card">
    <header>
      <slot name="title"></slot>
    </header>
    <main>
      <slot name="content"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
.base-card {
  border: 1px solid #eee;
  border-radius: 0.5em;
  display: block;
}
</style>