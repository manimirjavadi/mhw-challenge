<script setup>
import Card from "../Card/Card.vue";
import { useCards } from "../../store/cards";
import { onMounted } from "vue";

const cardsHandler = useCards();

onMounted(async () => {
  await cardsHandler.fetchNumbers();
});
</script>

<template>
  <div class="listContainer">
    <div v-for="number in cardsHandler.numbers">
      <Card :action="number.action">
        <span v-if="number.action === 'add'">
          {{ number.value }} + {{ cardsHandler.add.value }} =
          {{ +number.value + +cardsHandler.add.value }}
        </span>
        <span v-if="number.action === 'multiply'">
          {{ number.value }} x {{ cardsHandler.multiply.value }} =
          {{ +number.value * +cardsHandler.multiply.value }}
        </span>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.listContainer {
  @apply grid grid-cols-1 gap-4 pb-4;
}
</style>
