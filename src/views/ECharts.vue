<template>
  <div class="container">
    <h1>Demo examples of Chart.js</h1>
    <grid-layout
      :layout.sync="layout"
      :col-num="6"
      :rowHeight="360"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x.sync="item.x"
        :y.sync="item.y"
        :w.sync="item.w"
        :h.sync="item.h"
        :i="item.i"
        :key="item.i"
        class="chart-item"
      >
        <div>
          <a href="javascript:void(0)" @click="() => download(item.i)"
            >Download</a
          >
          <echarts
            :ref="'chart-' + item.i"
            :autoresize="true"
            :options="item.option"
          />
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";

import ECharts from "vue-echarts"; // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";
import "echarts-gl";
import cards from "../cards.json";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  name: "App",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    echarts: ECharts,
  },
  data() {
    return {
      layout: cards,
    };
  },
  updated() {
    // console.log(this.option);
    Object.keys(this.$refs).map((item, key) => {
      // console.log(item);
      if (this.$refs[item]) {
        let { lastW, lastH } = this.$refs[item][0]["_data"];
        if (lastW) {
          this.layout[key]["width"] = lastW - 32;
        }
        if (lastH) {
          this.layout[key]["height"] = lastH - 32;
        }
      }
    });
    // console.log(this.$refs);
  },
  methods: {
    download(i) {
      // console.log(i);
      if (this.$refs["chart-" + i] && this.$refs["chart-" + i][0]) {
        let canvas =
          this.$refs["chart-" + i][0].$el.childNodes[0].childNodes[0];

        var d = canvas.toDataURL("image/jpeg", 1.0);
        var anchar = document.createElement("a");
        anchar.href = d;
        anchar.setAttribute("download", "Chart");
        // document.body.appendChild(anchar);
        anchar.click();
      }
    },
  },
};
</script>
<style scoped>
body {
  background-color: #fafbfc;
}

.echarts {
  width: 100%;
  height: 320px; /* or e.g. 400px */
}
.container {
  max-width: 1170px;
  margin: auto;
}

.vue-grid-layout {
  background: #eee;
}

.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
}

.eventsJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
  height: 100px;
  overflow-y: scroll;
}

.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  /* background: #ccc; */
  /* border: 1px solid black; */
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 40px hsla(0, 0%, 88.6%, 0.5);
}
.vue-grid-item.vue-grid-placeholder {
  background-color: #cccccc;
  border-radius: 5px;
}
.vue-grid-item.resizing {
  opacity: 0.9;
}

.vue-grid-item.static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item.vue-draggable-dragging {
  box-shadow: 0 0 20px hsla(0, 0%, 0%, 0.5);
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}
</style>
