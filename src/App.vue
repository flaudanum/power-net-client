<template>
  <main class="container-fluid vh-100">
    <!-- Navigation bar -->
    <app-navigation-bar />

    <div class="row align-items-start h-100">
      <!-- Left sidebar -->
      <app-side-bar />

      <!-- Display area -->
      <div class="d-flex col w-100 justify-content-center" id="display-area">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "./components/Sidebar.vue";
import NavigationBar from "./components/NavigationBar.vue";

@Component({
  components: {
    "app-side-bar": SideBar,
    "app-navigation-bar": NavigationBar
  }
})
export default class App extends Vue {}
</script>

<style>
#display-area {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
