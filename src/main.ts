import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import routes from "./routes";

// Backend URL --> should be moved to a config file
export const backUrl = "http://localhost:6910";

// Sets routing for the application
Vue.use(VueRouter);

// Creates a router
const router = new VueRouter({
  routes,
  mode: "history", // No leading hashtag in URLs
});

// Event bus for activity message display
export const activityEventBus = new Vue({
  methods: {
    display(message: string) {
      this.$emit("incomingMessage", message);
    },
    clear() {
      this.$emit("incomingMessage", "");
    }
  }
});


Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
