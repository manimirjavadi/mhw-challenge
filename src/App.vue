<script setup>
import Alert from "./components/Alert/Alert.vue";
import ButtonsGroup from "./components/Buttons/ButtonsGroup.vue";
import CardsList from "./components/CardsList/CardsList.vue";
import { useAlert } from "./store/alert";

const alertHandler = useAlert();
</script>

<template>
  <main class="max-w-4xl w-full mx-auto">
    <transition name="slide-fade">
      <Alert v-if="alertHandler.showAlert" />
    </transition>
    <h1 class="mainTitle">Front-end Coding Challenge</h1>
    <ButtonsGroup />
    <CardsList v-if="alertHandler.type !== 'error'" />
  </main>
</template>

<style scoped>
.mainTitle {
  @apply text-center text-white font-roboto font-bold text-3xl py-4;
}
</style>
