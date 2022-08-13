import { i as init } from "./index-e3c49adb.js";
import { d as defineComponent, b as onMounted, _ as _export_sfc, E as createElementBlock, B as openBlock } from "./main-3c05bb2c.js";
const _sfc_main = defineComponent({
  name: "NavigationTiming",
  setup() {
    const getEchart = () => {
      init(document.getElementById("chart2"));
    };
    onMounted(() => {
      getEchart();
    });
  }
});
const _hoisted_1 = {
  id: "chart2",
  style: { width: "1000px", height: "550px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1);
}
const navigationTiming = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  navigationTiming as default
};
