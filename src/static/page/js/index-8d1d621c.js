import { _ as __unplugin_components_4 } from "./Panel-fa01c47f.js";
import { _ as __unplugin_components_0 } from "./index-998b0633.js";
import { d as defineComponent, k as storeToRefs, bg as useResourceFlowStore, c as computed, _ as _export_sfc, y as createBlock, z as withCtx, A as openBlock, B as createVNode, C as createTextVNode } from "./main-8183f0bd.js";
import { _ as __unplugin_components_7 } from "./Space-2ff10da0.js";
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
const _sfc_main = defineComponent({
  name: "ResourceFlow",
  components: { Chart: __unplugin_components_0 },
  setup() {
    const { averageList, typeList } = storeToRefs(useResourceFlowStore());
    const resourceFlowChartXAxis = computed(() => {
      return {
        type: "category",
        data: typeList.value
      };
    });
    const resourceFlowChartSeries = computed(() => {
      return averageList.value.filter(
        (item) => ["groupId", "time", "transferSize"].indexOf(item.name) === -1
      ).map((item) => {
        return {
          name: item.name,
          data: item.data,
          type: "bar",
          stack: "flow",
          color: item.name === "startTime" && "rgba(255,255,255,0)"
        };
      });
    });
    return {
      resourceFlowChartOption,
      resourceFlowChartXAxis,
      resourceFlowChartSeries
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f1c40c57_lang = "";
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
            series: _ctx.resourceFlowChartSeries
          }, null, 8, ["title", "tooltip", "legend", "grid", "yAxis", "xAxis", "series"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f1c40c57"]]);
export {
  index as default
};
