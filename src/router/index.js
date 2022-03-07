import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import ChartJS from "@/views/ChartJS";
import VueChartJS from "@/views/VueChartJS";
// import VueChartKick from "@/views/VueChartKick";
// import VueCharts from "@/views/VueCharts";
import GoogleCharts from "@/views/GoogleCharts";
import ECharts from "@/views/ECharts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/chartjs",
      name: "ChartJS",
      component: ChartJS,
    },
    {
      path: "/vuechartjs",
      name: "VueChartJS",
      component: VueChartJS,
    },
    // {
    //   path: "/charts",
    //   name: "VueCharts",
    //   component: VueCharts,
    // },
    // // {
    // //   path: "/chartkick",
    // //   name: "VueChartKick",
    // //   component: VueChartKick,
    // // },
    {
      path: "/googlecharts",
      name: "GoogleCharts",
      component: GoogleCharts,
    },
    {
      path: "/echarts",
      name: "ECharts",
      component: ECharts,
    },
  ],
});
