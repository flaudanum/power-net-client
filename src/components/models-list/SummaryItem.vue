<template>
  <li class="list-group-item bg-light">
    <div class="row">
      <p class="col-3"><strong>Model name</strong>:</p>
      <p>{{ model.name }}</p>
    </div>
    <div class="row">
      <p class="col-3"><strong>Description</strong>:</p>
      <p>{{ model.description }}</p>
    </div>
    <p><strong>Statistics</strong>:</p>
    <div class="row">
      <p class="col-3">buses: {{ getBusNumber() }}</p>
      <p class="col-3">generators: {{ getGenNumber() }}</p>
      <p class="col-3">loads: {{ getLoadNumber() }}</p>
      <p class="col-3">links: {{ getLinkNumber() }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Network } from "../../models/network";

@Component({})
export default class SummaryItem extends Vue {
  @Prop({ required: true }) readonly model!: Network;

  getBusNumber(): number {
    return this.model.buses.length;
  }

  getGenNumber(): number {
    return this.model.generators.length;
  }

  getLoadNumber(): number {
    return this.model.loads.length;
  }

  getLinkNumber(): number {
    return this.model.links.length;
  }
}
</script>

<style scoped>
li {
  margin-top: 20px;
}
li:hover {
  border: 2px solid blue;
  cursor: pointer;
}
</style>
