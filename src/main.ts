import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";
import "primeicons/primeicons.css";
import { definePreset } from "@primeuix/themes";

const WeddingPalette = definePreset(Lara, {
  semantic: {
    primary: {
      50: "var(--palette-primary-50)",
      100: "var(--palette-primary-100)",
      200: "var(--palette-primary-200)",
      300: "var(--palette-primary-300)",
      400: "var(--palette-primary-400)",
      500: "var(--palette-primary-500)",
      600: "var(--palette-primary-600)",
      700: "var(--palette-primary-700)",
      800: "var(--palette-primary-800)",
      900: "var(--palette-primary-900)",
    },
    secondary: {
      50: "var(--palette-secondary-50)",
      100: "var(--palette-secondary-100)",
      200: "var(--palette-secondary-200)",
      300: "var(--palette-secondary-300)",
      400: "var(--palette-secondary-400)",
      500: "var(--palette-secondary-500)",
      600: "var(--palette-secondary-600)",
      700: "var(--palette-secondary-700)",
      800: "var(--palette-secondary-800)",
      900: "var(--palette-secondary-900)",
    },
    accent: {
      50: "var(--palette-accent-50)",
      100: "var(--palette-accent-100)",
      200: "var(--palette-accent-200)",
      300: "var(--palette-accent-300)",
      400: "var(--palette-accent-400)",
      500: "var(--palette-accent-500)",
      600: "var(--palette-accent-600)",
      700: "var(--palette-accent-700)",
      800: "var(--palette-accent-800)",
      900: "var(--palette-accent-900)",
    },
    neutral: {
      50: "var(--palette-neutral-50)",
      100: "var(--palette-neutral-100)",
      200: "var(--palette-neutral-200)",
      300: "var(--palette-neutral-300)",
      400: "var(--palette-neutral-400)",
      500: "var(--palette-neutral-500)",
      600: "var(--palette-neutral-600)",
      700: "var(--palette-neutral-700)",
      800: "var(--palette-neutral-800)",
      900: "var(--palette-neutral-900)",
    },
  },
});

const app = createApp(App);
app
  .use(PrimeVue, {
    theme: {
      preset: WeddingPalette,
    },
  })
  .mount("#app");
