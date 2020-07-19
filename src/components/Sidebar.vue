<template>
  <!-- The sidebar must stick to the top baseline once the page scrolls the bar out -->
  <div class="bg-light border-right h-100" id="sidebar">
    <ul class="nav flex-column nav-pills">
      <li class="nav-item">
        <h4 class="text-center">PowerNet</h4>
      </li>
      <li class="nav-item">
        <div class="nav-link">
          Logged as:<br />
          <span>{{ loggedInUser }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ModelsSummary extends Vue {
  loggedInUser = "Default user";
}
</script>

<style scoped>
#sidebar {
  position: sticky;
  width: 175px;
}
</style>
