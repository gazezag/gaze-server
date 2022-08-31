import { _ as __unplugin_components_4 } from "./Panel-52de3899.js";
import { d as defineComponent, z as openBlock, C as createElementBlock, D as createBaseVNode, W as toRef, c as computed, _ as _export_sfc, x as createBlock, y as withCtx, A as createVNode, bc as toDisplayString, I as normalizeStyle, E as withDirectives, F as vShow, k as storeToRefs, G as usePerformanceTimingStore, bd as get, be as renderList, aq as Fragment, af as resolveComponent, B as createTextVNode } from "./main-e99d7435.js";
import { W as WarningOutline, _ as __unplugin_components_2$1 } from "./WarningOutline-aedac44f.js";
import { N as NIcon } from "./Icon-20c98a7b.js";
import { _ as __unplugin_components_7 } from "./Space-a825831f.js";
import { _ as __unplugin_components_1 } from "./Tooltip-5fb9556b.js";
import "./use-merged-state-83482f5b.js";
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M464 128L240 384l-96-96"
  },
  null,
  -1
);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M144 384l-96-96"
  },
  null,
  -1
);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M368 128L232 284"
  },
  null,
  -1
);
const _hoisted_5$1 = [_hoisted_2$2, _hoisted_3$2, _hoisted_4$1];
const CheckmarkDoneOutline = defineComponent({
  name: "CheckmarkDoneOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5$1);
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "28"
  },
  null,
  -1
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "circle",
  {
    cx: "250",
    cy: "348",
    r: "20",
    fill: "currentColor"
  },
  null,
  -1
);
const _hoisted_5 = [_hoisted_2$1, _hoisted_3$1, _hoisted_4];
const HelpCircleOutline = defineComponent({
  name: "HelpCircleOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_5);
  }
});
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M400 256H112"
  },
  null,
  -1
);
const _hoisted_3 = [_hoisted_2];
const RemoveOutline = defineComponent({
  name: "RemoveOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
  }
});
const _sfc_main$1 = defineComponent({
  name: "ThreshouldNumber",
  props: {
    data: {
      type: Number,
      required: true
    },
    threshould: {
      type: Array,
      required: true
    },
    unit: {
      type: String
    },
    textStyle: {
      type: Object
    }
  },
  setup(props) {
    const { threshould } = props;
    const dataRef = toRef(props, "data");
    const type = computed(() => {
      const typeList = threshould.length === 1 ? ["success", "error"] : ["success", "warning", "error"];
      return typeList.at(
        threshould.findIndex((v) => dataRef.value <= v)
      );
    });
    const icon = computed(() => {
      const iconList = threshould.length === 1 ? [CheckmarkDoneOutline, WarningOutline] : [CheckmarkDoneOutline, RemoveOutline, WarningOutline];
      return iconList.at(
        threshould.findIndex((v) => dataRef.value <= v)
      );
    });
    return {
      dataRef,
      type,
      icon
    };
  }
});
const ThreshouldNumber_vue_vue_type_style_index_0_scoped_8239286b_lang = "";
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_icon = NIcon;
  const _component_n_space = __unplugin_components_7;
  const _component_n_text = __unplugin_components_2$1;
  return openBlock(), createBlock(_component_n_text, {
    type: _ctx.type,
    strong: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_n_space, {
        align: "center",
        justify: "center",
        inline: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            style: normalizeStyle(_ctx.textStyle)
          }, toDisplayString(_ctx.dataRef) + " " + toDisplayString(_ctx.unit), 5),
          withDirectives(createVNode(_component_n_icon, {
            component: _ctx.icon,
            size: 30
          }, null, 8, ["component"]), [
            [vShow, _ctx.dataRef]
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["type"]);
}
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8239286b"]]);
const getThreshould = (type) => {
  return get(
    {
      "first-paint": [2e3, 4e3],
      "first-contentful-paint": [2e3, 4e3],
      "largest-contentful-paint": [2500, 4e3],
      "cumulative-layout-shift": [0.1, 0.25],
      "first-input-delay": [100, 300]
    },
    type
  );
};
const getTip = (type) => {
  return get(
    {
      "first-paint": "\u7528\u4E8E\u8BB0\u5F55\u9875\u9762\u7B2C\u4E00\u6B21\u7ED8\u5236\u50CF\u7D20\u7684\u65F6\u95F4",
      "first-contentful-paint": "\u7528\u4E8E\u8BB0\u5F55\u9875\u9762\u9996\u6B21\u7ED8\u5236\u6587\u672C\u3001\u56FE\u7247\u3001\u975E\u7A7A\u767D Canvas \u6216 SVG \u7684\u65F6\u95F4",
      "largest-contentful-paint": "\u7528\u4E8E\u8BB0\u5F55\u89C6\u7A97\u5185\u6700\u5927\u7684\u5143\u7D20\u7ED8\u5236\u7684\u65F6\u95F4\uFF0C\u8BE5\u65F6\u95F4\u4F1A\u968F\u7740\u9875\u9762\u6E32\u67D3\u53D8\u5316\u800C\u53D8\u5316\uFF0C\u56E0\u4E3A\u9875\u9762\u4E2D\u7684\u6700\u5927\u5143\u7D20\u5728\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u53E6\u5916\u8BE5\u6307\u6807\u4F1A\u5728\u7528\u6237\u7B2C\u4E00\u6B21\u4EA4\u4E92\u540E\u505C\u6B62\u8BB0\u5F55",
      "cumulative-layout-shift": "\u8BB0\u5F55\u4E86\u9875\u9762\u4E0A\u975E\u9884\u671F\u7684\u4F4D\u79FB\u6CE2\u52A8",
      "first-input-delay": "\u7528\u6237\u9996\u6B21\u4E0E\u9875\u9762\u4EA4\u4E92\u65F6\u54CD\u5E94\u7684\u5EF6\u8FDF"
    },
    type
  );
};
const type2Label = (str) => {
  return str.replace(/-(\w{1})/g, (match) => {
    return ` ${match[1]}`;
  }).toUpperCase();
};
const _sfc_main = defineComponent({
  name: "PerformanceTiming",
  components: { Panel: __unplugin_components_4, ThreshouldNumber: __unplugin_components_2, HelpCircleOutline },
  setup() {
    const { dayAverage } = storeToRefs(usePerformanceTimingStore());
    return {
      dayAverage,
      type2Label,
      getThreshould,
      getTip
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f12664d9_lang = "";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HelpCircleOutline = resolveComponent("HelpCircleOutline");
  const _component_n_icon = NIcon;
  const _component_n_tooltip = __unplugin_components_1;
  const _component_ThreshouldNumber = __unplugin_components_2;
  const _component_Panel = __unplugin_components_4;
  const _component_n_space = __unplugin_components_7;
  return openBlock(), createBlock(_component_n_space, {
    size: "large",
    vertical: ""
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dayAverage, (item, i) => {
        return openBlock(), createElementBlock("div", {
          class: "panel",
          key: i
        }, [
          createVNode(_component_Panel, null, {
            header: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.type2Label(item.type)), 1)
            ]),
            "header-extra": withCtx(() => [
              createVNode(_component_n_tooltip, { trigger: "hover" }, {
                trigger: withCtx(() => [
                  createVNode(_component_n_icon, { size: 30 }, {
                    default: withCtx(() => [
                      createVNode(_component_HelpCircleOutline)
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.getTip(item.type)), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            default: withCtx(() => [
              createVNode(_component_ThreshouldNumber, {
                data: item.value,
                unit: "ms",
                threshould: _ctx.getThreshould(item.type)
              }, null, 8, ["data", "threshould"])
            ]),
            _: 2
          }, 1024)
        ]);
      }), 128))
    ]),
    _: 1
  });
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f12664d9"]]);
export {
  index as default
};
