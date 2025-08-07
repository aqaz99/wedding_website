import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";
import "primeicons/primeicons.css";

const app = createApp(App);
app
  .use(PrimeVue, {
    theme: {
      preset: Lara,
      options: {
        darkModeSelector: ".dark-mode",
      },
    },
  })
  .mount("#app");
