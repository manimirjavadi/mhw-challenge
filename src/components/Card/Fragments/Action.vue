<script setup></script>

<template>
  <div class="equation">
    <slot></slot>
  </div>
</template>

<style scoped>
.equation {
  @apply h-full text-2xl md:text-4xl text-white font-bold font-roboto flex justify-center items-center;
}
</style>
