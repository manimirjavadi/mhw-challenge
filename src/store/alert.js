import { defineStore } from "pinia";

export const useAlert = defineStore("alert", {
  state: () => {
    return {
      type: "info", // error, success
      message: "",
      showAlert: false,
    };
  },

  actions: {
    throwAlert(type, message) {
      this.type = type;
      this.message = message;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 1000);
    },

    closeAlert() {
      this.showAlert = false;
    },
  },
});
