import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App).use(i18n);
app.use(router);
app.use(store);
app.use(vuetify);

app.mount("#app");
