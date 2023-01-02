<script setup>
import Op from "./Fragments/Op.vue";
import Action from "./Fragments/Action.vue";

const props = defineProps({
  action: {
    type: String,
    default: "add",
  },
});
</script>

<template>
  <div class="card">
    <div
      class="operator"
      :class="{
        'bg-add': props.action === 'add',
        'bg-multiply': props.action === 'multiply',
      }"
    >
      <Op :operator="action" />
    </div>
    <div
      class="action"
      :class="{
        'bg-add/70': props.action === 'add',
        'bg-multiply/70': props.action === 'multiply',
      }"
    >
      <Action>
        <slot />
      </Action>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply text-white w-full h-28 md:h-32 rounded-2xl flex shadow-2xl overflow-hidden;
}

.operator {
  @apply w-1/3 md:w-1/5 flex justify-center items-center;
}

.action {
  @apply mx-auto w-full;
}
</style>
