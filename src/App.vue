<script setup>
import ButtonsGroup from "./components/Buttons/ButtonsGroup.vue";
import Card from "./components/Card/Card.vue";
</script>

<template>
  <div class="max-w-3xl w-full mx-auto">
    <ButtonsGroup />
    <Card action="add" />
    <Card action="multiply" />
  </div>
</template>

<style scoped></style>
