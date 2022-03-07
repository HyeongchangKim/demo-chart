<template>
  <section class="container">
    <h1>Demo examples of Google Charts</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <GChart type="LineChart" :data="chartData" :options="chartOptions" />
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
        <GChart type="BubbleChart" :data="chartData" :options="chartOptions" />
      </div>
      <div class="column">
        <h3>Area Chart</h3>
        <GChart type="AreaChart" :data="chartData" :options="chartOptions" />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Stack Bar Chart</h3>
        <GChart
          :settings="{ packages: ['bar'] }"
          :data="chartDataStage"
          :options="chartOptionsStage"
          :createChart="(el, google) => new google.charts.Bar(el)"
          @ready="onChartReady"
        />
      </div>
      <div class="column">
        <h3>Pie Chart</h3>
        <GChart
          type="PieChart"
          :data="chartDataPie"
          :options="chartOptionsPie"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      chartsLib: null,
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
        ["2018", 1200, 600, 350],
        ["2019", 1030, 770, 300],
        ["2020", 1570, 460, 400],
        ["2021", 1430, 520, 400],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
      chartDataStage: [
        ["Agency", "RFI", "Chemistry", "Briefing", "Presentation"],
        ["Chiat\\LA", 1000, 400, 200, 100],
        ["Chiat\\NY", 1170, 460, 250, 300],
        ["Agency X", 660, 1120, 300, 550],
        ["Agency Y", 1030, 540, 350, 190],
        ["Agency Z", 1030, 540, 350, 190],
      ],
      chartDataPie: [
        ["Stage", "Percentage"],
        ["RFI", 11],
        ["Briefing", 5],
        ["Chemistry", 9],
        ["Presentation", 2],
      ],
      chartOptionsPie: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
        colors: ["#fecc00", "#d95f02", "#7570b3", "#B388FF"],
      },
    };
  },
  computed: {
    chartOptionsStage() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          // title: "Active Opportunities by Stage",
          // subtitle: "-",
        },
        bars: "horizontal", // Required for Material Bar Charts.
        hAxis: { format: "decimal" },

        //colors: ['#1b9e77', '#d95f02', '#7570b3'],
        isStacked: "percent",
        isStacked: true,
        hAxis: {
          minValue: 0,
          ticks: [0, 0.3, 0.6, 0.9, 1],
        },
        //set colors for
        series: {
          0: { color: "#C8E6C9" },
          1: { color: "#81C784" },
          2: { color: "#388E3C" },
          3: { color: "#1B5E20" },
          4: { color: "#1B5E20" },
        },
      });
    },
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google;
    },
  },
};
</script>
