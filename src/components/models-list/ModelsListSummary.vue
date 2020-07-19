<template>
  <section class="col-6">
    <div class="d-flex justify-content-center">
      <router-link
        tag="button"
        to="/create-model"
        class="btn btn-secondary"
        id="create-btn"
      >
        Create a new network
      </router-link>
    </div>
    <ul class="list-group">
      <app-summary-item
        v-for="(model, index) in models"
        v-bind:key="'model' + index"
        :model="model"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import loadNetworkModels from "../../utils/load-network-models";

import SummaryItem from "./SummaryItem.vue";

import { Network } from "../../models/network";

@Component({
  components: {
    "app-summary-item": SummaryItem
  }
})
export default class ModelsSummary extends Vue {
  models: Network[] = [];

  async created() {
    try {
      await this.getModels();
    } catch (err) {
      console.error(err);
    }
  }

  @Watch("$route")
  routeChanged() {
    this.getModels()
      .then()
      .catch(err => console.error(err));
  }

  /**
   * Fetches the data of every avalaible network from the backend.<br />
   * TODO: cf. README.md: an upgrade is required, this method should fetch summaries instead of complete model data
   */
  async getModels() {
    try {
      this.models = await loadNetworkModels();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
</script>

<style scoped>
#create-btn {
  margin-top: 20px;
}
</style>
