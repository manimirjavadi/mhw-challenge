<script setup>
import Icon from "../Icon/Icon.vue";
</script>

<template>
  <main class="container">
    <h2 class="text-center">Filter by:</h2>
    <div class="buttonsContainer">
      <div class="buttonsGroup">
        <button class="bg-add hover:bg-add/90 transition duration-150">
          <Icon op="add" size="24" />
        </button>
        <button class="bg-all hover:bg-all/90 transition duration-150 active">
          <Icon op="all" size="24" />
        </button>
        <button
          class="bg-multiply hover:bg-multiply/60 transition duration-150"
        >
          <Icon op="multiply" size="24" />
        </button>
      </div>
    </div>
  </main>
</template>

<style>
.container {
  @apply pt-4 font-roboto;
}

.buttonsContainer {
  @apply flex justify-center pb-4 rounded-lg;
}

.buttonsGroup {
  @apply rounded-xl overflow-hidden shadow-2xl;
}

button {
  @apply px-8 py-2 text-white;
}

.active {
  @apply bg-slate-500;
}

.active:hover {
  @apply bg-slate-500;
}
</style>
