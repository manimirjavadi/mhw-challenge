<script setup></script>

<template>
  <div class="equation">
    <slot></slot>
  </div>
</template>

<style scoped>
.equation {
  @apply h-full text-3xl text-white font-bold font-roboto flex justify-center items-center;
}
</style>
