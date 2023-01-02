<script setup>
import { computed } from "vue";

const props = defineProps({
  op: {
    type: String,
    default: "add",
  },
  size: {
    type: Number,
    default: 48,
  },
});

const addSvg = computed(
  () => `
    <svg style="width:${props.size}px;height:${props.size}px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
    `
);

const multiplySvg = computed(
  () => `
    <svg style="width:${props.size}px;height:${props.size}px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
`
);

const allSvg = computed(
  () => `
    <svg style="width:${props.size}px;height:${props.size}px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
    </svg>
  `
);
</script>

<template>
  <div v-html="addSvg" v-if="op === 'add'"></div>
  <div v-html="multiplySvg" v-if="op === 'multiply'"></div>
  <div v-html="allSvg" v-if="op === 'all'"></div>
</template>

<style></style>
