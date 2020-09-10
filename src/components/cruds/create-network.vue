<template>
  <div class="form-group col-7">
    <label for="create-network-from-json-form"
      >Enter the network model description (JSON)</label
    >
    <textarea class="form-control" :rows="rows" v-model="jsonData"></textarea>
    <button class="btn btn-secondary" id="create-btn" @click="createNetwork">
      Create
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import createNetworkModel from "../../utils/create-network-model";

@Component({})
export default class CreateNetwork extends Vue {
  rows = 25;
  jsonData = "";

  async createNetwork() {
    // Checks JSON syntax
    JSON.parse(this.jsonData);

    await createNetworkModel(this.jsonData);

    this.$router.push({ name: "userHome" });
  }
}
</script>

<style scoped>
#create-btn {
  margin-top: 20px;
}
</style>
