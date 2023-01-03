<script setup>
import { useAlert } from "../../store/alert";

const alert = useAlert();

const getAlertColor = (type) => {
  switch (type) {
    case "error":
      return "bg-red-500";

    case "success":
      return "bg-green-600";

    default:
      return "bg-yellow-500";
  }
};
const color = getAlertColor(alert.type);
</script>

<template>
  <div :class="`alertContainer ${color}`">
    <div class="closeAlert">
      <button @click="alert.closeAlert">
        <svg style="width: 16px; height: 16px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
          />
        </svg>
      </button>
    </div>
    <span class="text-white text-sm">
      {{ alert.message }}
    </span>
  </div>
</template>

<style scoped>
.alertContainer {
  @apply w-96 rounded-2xl p-5 absolute left-0 right-0 bottom-[60px] mx-auto mt-10 z-50;
}

.closeAlert {
  @apply absolute right-2 top-2 text-white;
}
</style>
