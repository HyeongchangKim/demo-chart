<template>
  <section class="container">
    <h1>Demo examples of Chart.js</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <canvas ref="lineChart" />
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <canvas ref="barChart" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Radar Chart</h3>
        <canvas ref="RadarChart" />
      </div>
      <div class="column">
        <h3>Polar Area Chart</h3>
        <canvas ref="PolorAreaChart" />
      </div>
    </div>
  </section>
</template>

<script>
import barData from "../chartjs/barchart";
import lineData from "../chartjs/linechart";
import polorareaData from "../chartjs/polarareachart";
import radarData from "../chartjs/radarchart";

export default {
  data: () => ({
    barData: barData,
    lineData: lineData,
    polorareaData: polorareaData,
    radarData: radarData,
  }),
  mounted() {
    this.createBarChart(),
      this.createLineChart(),
      this.createPolorAreaChart(),
      this.createRadarChart();
  },
  methods: {
    createBarChart() {
      new Chart(this.$refs.barChart, barData);
    },
    createLineChart() {
      new Chart(this.$refs.lineChart, lineData);
    },
    createPolorAreaChart() {
      new Chart(this.$refs.PolorAreaChart, polorareaData);
    },
    createRadarChart() {
      new Chart(this.$refs.RadarChart, radarData);
    },
  },
};
</script>
