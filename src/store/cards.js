import { defineStore } from "pinia";

class ImportError extends Error {}

const loadNumberModule = async (modulePath) => {
  try {
    return await import(/* @vite-ignore */ modulePath);
  } catch (e) {
    throw new ImportError(`Server Error!`);
  }
};

const loadModule = async (modulePath) => {
  try {
    return await import(/* @vite-ignore */ modulePath);
  } catch (e) {
    throw new ImportError(`Missing Data!`);
  }
};

export const useCards = defineStore("cards", {
  state: () => {
    return {
      numbers: [],
      add: {},
      multiply: {},
      cards: [],
    };
  },

  actions: {
    async fetchNumbers(filter = "all") {
      switch (filter) {
        case "multiply":
          loadNumberModule("../assets/Numbers.json").then((res) => {
            let data = res.default;
            this.numbers = data.filter((n) => n.action === "multiply");
          });
          break;
        case "add":
          loadNumberModule("../assets/Numbers.json").then((res) => {
            let data = res.default;
            this.numbers = data.filter((n) => n.action === "add");
          });
          break;

        default:
          loadNumberModule("../assets/Numbers.json").then((res) => {
            this.numbers = res.default;
          });
          break;
      }

      this.add = await loadModule("../assets/Add.json");
      this.multiply = await loadModule("../assets/Multiply.json");
    },
  },
});
