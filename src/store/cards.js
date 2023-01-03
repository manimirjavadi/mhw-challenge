import { defineStore } from "pinia";
import { useAlert } from "./alert";

class ImportError extends Error {}

const NUMBERS_PATH = "../assets/Numbers.json";
const ADD_PATH = "../assets/Add.json";
const MULTIPLY_PATH = "../assets/Multiply.json";

const loadModule = async (modulePath) => {
  const alert = useAlert();

  try {
    alert.throwAlert("success", "Loaded Successfully.");
    return await import(/* @vite-ignore */ modulePath);
  } catch (e) {
    switch (modulePath) {
      case NUMBERS_PATH:
        alert.throwAlert("error", "Server Error");
        throw new ImportError("Server Error");

      case ADD_PATH || MULTIPLY_PATH:
        alert.throwAlert("error", "<MISSING DATA>");
        throw new ImportError("<MISSING DATA>");

      default:
        alert.throwAlert("error", "Unknown Error occured!");
        throw new ImportError("Unknown Error occured!");
    }
  }
};

export const useCards = defineStore("cards", {
  state: () => {
    return {
      numbers: [],
      add: {},
      multiply: {},
    };
  },

  actions: {
    async fetchNumbers(filter = "all") {
      switch (filter) {
        case "multiply":
          loadModule(NUMBERS_PATH).then((res) => {
            let data = res.default;
            this.numbers = data.filter((n) => n.action === "multiply");
          });
          break;
        case "add":
          loadModule(NUMBERS_PATH).then((res) => {
            let data = res.default;
            this.numbers = data.filter((n) => n.action === "add");
          });
          break;

        default:
          loadModule(NUMBERS_PATH).then((res) => {
            this.numbers = res.default;
          });
          break;
      }

      this.add = await loadModule(ADD_PATH);
      this.multiply = await loadModule(MULTIPLY_PATH);
    },
  },
});
