import { RouteConfig } from "vue-router";

import ModelsSummary from "./components/models-list/ModelsListSummary.vue";
import CreateNetwork from "./components/cruds/create-network.vue";

const userHomeRoute: RouteConfig = {
    path: "/",
    name: "userHome",
    component: ModelsSummary
}

const newModelRoute: RouteConfig = {
    path: "/create-model",
    name: "createModel",
    component: CreateNetwork
}

const routes = [
    // User Home
    userHomeRoute,
    newModelRoute,
    { path: "*", redirect: "/" }
];

export default routes;