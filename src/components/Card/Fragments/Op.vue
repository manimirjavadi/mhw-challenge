<script setup>
import Icon from "../../Icon/Icon.vue";

const props = defineProps({
  operator: {
    type: String,
    default: "add",
  },
});
</script>

<template>
  <div class="operator bg-plus">
    <Icon :op="operator" size="38" />
  </div>
</template>

<style scoped>
.operator {
  @apply mx-auto grid grid-cols-1 text-5xl;
}

.operator span {
  @apply mb-4;
}
</style>
