import { _ as __unplugin_components_4 } from "./Panel-52de3899.js";
import { _ as __unplugin_components_0 } from "./index-8bd7339b.js";
import { d as defineComponent, k as storeToRefs, bg as useResourceFlowStore, c as computed, _ as _export_sfc, x as createBlock, y as withCtx, z as openBlock, A as createVNode, B as createTextVNode } from "./main-e99d7435.js";
import { _ as __unplugin_components_7 } from "./Space-a825831f.js";
const resourceFlowChartOption = {
  title: {},
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    }
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  yAxis: {
    type: "value"
  }
};
const keyList = [
  "startTime",
  "responseEnd",
  "dns",
  "initialConnect",
  "ssl",
  "request",
  "ttfb",
  "transmit",
  "contentDownload"
];
const _sfc_main = defineComponent({
  name: "ResourceFlow",
  components: { Chart: __unplugin_components_0 },
  setup() {
    const { averageList, typeList } = storeToRefs(useResourceFlowStore());
    console.log(typeList.value);
    const resourceFlowChartXAxis = computed(() => {
      return {
        type: "category",
        data: typeList.value
      };
    });
    const dataset = computed(() => {
      return {
        dimensions: ["initiatorType", ...keyList],
        source: averageList.value
      };
    });
    const series = computed(() => {
      return keyList.map((item) => {
        return {
          type: "bar",
          stack: "flow",
          color: item === "startTime" && "rgba(255,255,255,0)"
        };
      });
    });
    return {
      resourceFlowChartOption,
      resourceFlowChartXAxis,
      dataset,
      series
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_1b6702e7_lang = "";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("RESOURCE FLOW");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Chart = __unplugin_components_0;
  const _component_Panel = __unplugin_components_4;
  const _component_n_space = __unplugin_components_7;
  return openBlock(), createBlock(_component_n_space, { justify: "center" }, {
    default: withCtx(() => [
      createVNode(_component_Panel, null, {
        header: withCtx(() => [
          _hoisted_1
        ]),
        default: withCtx(() => [
          createVNode(_component_Chart, {
            chartId: "resource-flow",
            width: "1200px",
            height: "600px",
            title: _ctx.resourceFlowChartOption.title,
            tooltip: _ctx.resourceFlowChartOption.tooltip,
            legend: _ctx.resourceFlowChartOption.legend,
            grid: _ctx.resourceFlowChartOption.grid,
            yAxis: _ctx.resourceFlowChartOption.yAxis,
            xAxis: _ctx.resourceFlowChartXAxis,
            series: _ctx.series,
            dataset: _ctx.dataset
          }, null, 8, ["title", "tooltip", "legend", "grid", "yAxis", "xAxis", "series", "dataset"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1b6702e7"]]);
export {
  index as default
};
