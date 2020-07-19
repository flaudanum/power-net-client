<template>
  <nav class="row navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="collapse navbar-collapse d-flex justify-content-between">
      <span class="navbar-text">{{ displayText }}</span>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { activityEventBus } from "../main";

@Component({})
export default class ModelsSummary extends Vue {
  displayText = "";
  created() {
    // Subscribes to events emitted by the activity event bus
    activityEventBus.$on("incomingMessage", (message: string) => {
      this.displayText = message;
    });
  }
}
</script>

<style scoped>
nav {
  position: sticky;
}
</style>
