import { createApp } from "vue";
import App from "./App.vue";
import components from "@/shared";
import router from "@/core/router/router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

library.add(fas, fab);

app.component("fa", FontAwesomeIcon);

app.use(router).mount("#app");
