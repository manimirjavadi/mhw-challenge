<script setup>
import { useCards } from "../../store/cards";
import Icon from "../Icon/Icon.vue";

const cardsHandler = useCards();
</script>

<template>
  <main class="container">
    <h2 class="text-center">Filter by:</h2>
    <div class="buttonsContainer">
      <div class="buttonsGroup">
        <button
          class="bg-add hover:bg-add/90 transition duration-150"
          @click="cardsHandler.fetchNumbers('add')"
        >
          <Icon op="add" size="24" />
        </button>
        <button
          class="bg-all hover:bg-all/90 transition duration-150 active"
          @click="cardsHandler.fetchNumbers('all')"
        >
          <Icon op="all" size="24" />
        </button>
        <button
          class="bg-multiply hover:bg-multiply/60 transition duration-150"
          @click="cardsHandler.fetchNumbers('multiply')"
        >
          <Icon op="multiply" size="24" />
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  @apply pt-4 font-roboto mx-auto;
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
