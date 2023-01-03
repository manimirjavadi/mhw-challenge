<script setup>
import Alert from "./components/Alert/Alert.vue";
import ButtonsGroup from "./components/Buttons/ButtonsGroup.vue";
import CardsList from "./components/CardsList/CardsList.vue";
import Intro from "./components/Intro/Intro.vue";
import { useAlert } from "./store/alert";

const alertHandler = useAlert();
</script>

<template>
  <main class="max-w-4xl w-full mx-auto">
    <transition name="slide-fade">
      <Alert v-if="alertHandler.showAlert" />
    </transition>
    <Intro />
    <ButtonsGroup />
    <CardsList v-if="alertHandler.type !== 'error'" />
  </main>
</template>

<style scoped></style>
