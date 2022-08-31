import { _ as __unplugin_components_4 } from "./Panel-2ae0748d.js";
import { _ as __unplugin_components_0 } from "./index-b09f8e69.js";
import { d as defineComponent, k as storeToRefs, bf as useNavigationTimingStore, c as computed, _ as _export_sfc, x as createBlock, y as withCtx, z as openBlock, A as createVNode, B as createTextVNode } from "./main-b154a3fa.js";
import { _ as __unplugin_components_7 } from "./Space-025b428f.js";
const formatter = (param) => {
  return "{icon|\u25CF}{name|" + param.name + "}\n{value|" + param.value + "}";
};
const navigationTimingChartLegend = {
  orient: "vertical",
  left: "left"
};
const _sfc_main = defineComponent({
  name: "NavigationTiming",
  components: { Chart: __unplugin_components_0, Panel: __unplugin_components_4 },
  setup() {
    const { dayAverage, totalAverageNavigationTiming } = storeToRefs(
      useNavigationTimingStore()
    );
    const navigationTimingChartTitle = computed(() => {
      return {
        text: `Total
${totalAverageNavigationTiming.value}`,
        top: "center",
        left: "center"
      };
    });
    const navigationTimingChartSeries = computed(() => {
      return {
        type: "pie",
        radius: ["25%", "60%"],
        center: ["50%", "50%"],
        labelLine: {
          length: 20,
          length2: 120
        },
        label: {
          formatter,
          rich: {
            icon: {
              fontSize: 16,
              color: "inherit"
            },
            name: {
              fontSize: 18,
              padding: [0, 0, 0, 10],
              color: "#000"
            },
            value: {
              fontSize: 14,
              fontWeight: "bolder",
              padding: [10, 0, 0, 20],
              color: "inherit"
            }
          }
        },
        data: dayAverage.value.filter((item) => item.value && ["time"].indexOf(item.type) === -1).map((item) => {
          return {
            name: item.type,
            value: item.value
          };
        })
      };
    });
    return {
      navigationTimingChartTitle,
      navigationTimingChartLegend,
      navigationTimingChartSeries
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_39db0673_lang = "";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("NAVIGATION TIMING");
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
            chartId: "navigation-timing",
            width: "1200px",
            height: "600px",
            title: _ctx.navigationTimingChartTitle,
            legend: _ctx.navigationTimingChartLegend,
            series: _ctx.navigationTimingChartSeries
          }, null, 8, ["title", "legend", "series"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39db0673"]]);
export {
  index as default
};
