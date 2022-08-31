import { _ as __unplugin_components_4 } from "./Panel-52de3899.js";
import { _ as __unplugin_components_0$1 } from "./index-8bd7339b.js";
import { i as isSymbol, a as isObject, r as root, t as toString, d as defineComponent, b as ref, c as computed, o as onMounted, w as watchEffect, e as cB, f as cE, u as useConfig, g as useTheme, h as useThemeClass, j as h, s as statisticLight, k as storeToRefs, l as useVisitInfoStore, m as useGlobal, n as getWeekDaysLabel, p as getCurrentIntervalIdx, q as getWeekDays, v as router, _ as _export_sfc, x as createBlock, y as withCtx, z as openBlock, A as createVNode, B as createTextVNode, C as createElementBlock, D as createBaseVNode, E as withDirectives, F as vShow, G as usePerformanceTimingStore, H as useErrorInfoStore, I as normalizeStyle } from "./main-e99d7435.js";
import { u as useRtl, r as resolveWrappedSlot, _ as __unplugin_components_7 } from "./Space-a825831f.js";
import { N as NIcon } from "./Icon-20c98a7b.js";
import { u as useLocale } from "./fade-in-width-expand.cssr-829053eb.js";
import { c as createLayoutComponent, H as HeaderMenu, _ as __unplugin_components_2$2 } from "./MainHeader-70dab35c.js";
import "./use-merged-state-83482f5b.js";
import "./WarningOutline-aedac44f.js";
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var nativeIsFinite = root.isFinite, nativeMin = Math.min;
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    number = toNumber(number);
    precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
    if (precision && nativeIsFinite(number)) {
      var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
      pair = (toString(value) + "e").split("e");
      return +(pair[0] + "e" + (+pair[1] - precision));
    }
    return func(number);
  };
}
var round = createRound("round");
const round$1 = round;
const easeOut = (t) => 1 - Math.pow(1 - t, 5);
function tween(props) {
  const { from, to, duration, onUpdate, onFinish } = props;
  const tick = () => {
    const current = performance.now();
    const elapsedTime = Math.min(current - startTime, duration);
    const currentValue = from + (to - from) * easeOut(elapsedTime / duration);
    if (elapsedTime === duration) {
      onFinish();
      return;
    }
    onUpdate(currentValue);
    requestAnimationFrame(tick);
  };
  const startTime = performance.now();
  tick();
}
const numberAnimationProps = {
  to: {
    type: Number,
    default: 0
  },
  precision: {
    type: Number,
    default: 0
  },
  showSeparator: Boolean,
  locale: String,
  from: { type: Number, default: 0 },
  active: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 2e3
  },
  onFinish: Function
};
const __unplugin_components_1$1 = defineComponent({
  name: "NumberAnimation",
  props: numberAnimationProps,
  setup(props) {
    const { localeRef } = useLocale("name");
    const { duration } = props;
    const displayedValueRef = ref(props.from);
    const mergedLocaleRef = computed(() => {
      const { locale } = props;
      if (locale !== void 0)
        return locale;
      return localeRef.value;
    });
    let animating = false;
    const onUpdate = (currentValue) => {
      displayedValueRef.value = currentValue;
    };
    const onFinish = () => {
      var _a;
      displayedValueRef.value = props.to;
      animating = false;
      (_a = props.onFinish) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    const animate = (from = props.from, to = props.to) => {
      animating = true;
      displayedValueRef.value = props.from;
      if (from !== to) {
        tween({
          from,
          to,
          duration,
          onUpdate,
          onFinish
        });
      }
    };
    const formattedValueRef = computed(() => {
      var _a;
      const formatted = round$1(displayedValueRef.value, props.precision).toFixed(props.precision);
      const splitValue = formatted.split(".");
      const numberFormatter = new Intl.NumberFormat(mergedLocaleRef.value);
      const decimalSeparator = (_a = numberFormatter.formatToParts(0.5).find((part) => part.type === "decimal")) === null || _a === void 0 ? void 0 : _a.value;
      const integer = props.showSeparator ? numberFormatter.format(Number(splitValue[0])) : splitValue[0];
      const decimal = splitValue[1];
      return {
        integer,
        decimal,
        decimalSeparator
      };
    });
    function play() {
      if (animating)
        return;
      animate();
    }
    onMounted(() => {
      watchEffect(() => {
        if (props.active)
          animate();
      });
    });
    const exposedMethods = { play };
    return Object.assign({ formattedValue: formattedValueRef }, exposedMethods);
  },
  render() {
    const { formattedValue: { integer, decimal, decimalSeparator } } = this;
    return [integer, decimal ? decimalSeparator : null, decimal];
  }
});
const __unplugin_components_3 = createLayoutComponent(true);
const style = cB("statistic", [cE("label", `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `), cB("statistic-value", `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [cE("prefix", `
 margin: 0 4px 0 0;
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [cB("icon", {
  verticalAlign: "-0.125em"
})]), cE("content", `
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `), cE("suffix", `
 margin: 0 0 0 4px;
 font-size: 24px;
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [cB("icon", {
  verticalAlign: "-0.125em"
})])])]);
const statisticProps = Object.assign(Object.assign({}, useTheme.props), { tabularNums: Boolean, label: String, value: [String, Number] });
const __unplugin_components_2$1 = defineComponent({
  name: "Statistic",
  props: statisticProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Statistic", "-statistic", style, statisticLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Statistic", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { self: { labelFontWeight, valueFontWeight, valuePrefixTextColor, labelTextColor, valueSuffixTextColor, valueTextColor, labelFontSize }, common: { cubicBezierEaseInOut } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-label-font-size": labelFontSize,
        "--n-label-font-weight": labelFontWeight,
        "--n-label-text-color": labelTextColor,
        "--n-value-font-weight": valueFontWeight,
        "--n-value-prefix-text-color": valuePrefixTextColor,
        "--n-value-suffix-text-color": valueSuffixTextColor,
        "--n-value-text-color": valueTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("statistic", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { mergedClsPrefix, $slots: { default: defaultSlot, label: labelSlot, prefix: prefixSlot, suffix: suffixSlot } } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-statistic`,
        this.themeClass,
        this.rtlEnabled && `${mergedClsPrefix}-statistic--rtl`
      ], style: this.cssVars },
      resolveWrappedSlot(labelSlot, (children) => h("div", { class: `${mergedClsPrefix}-statistic__label` }, this.label || children)),
      h(
        "div",
        { class: `${mergedClsPrefix}-statistic-value`, style: {
          fontVariantNumeric: this.tabularNums ? "tabular-nums" : ""
        } },
        resolveWrappedSlot(prefixSlot, (children) => children && h("span", { class: `${mergedClsPrefix}-statistic-value__prefix` }, children)),
        this.value !== void 0 ? h("span", { class: `${mergedClsPrefix}-statistic-value__content` }, this.value) : resolveWrappedSlot(defaultSlot, (children) => children && h("span", { class: `${mergedClsPrefix}-statistic-value__content` }, children)),
        resolveWrappedSlot(suffixSlot, (children) => children && h("span", { class: `${mergedClsPrefix}-statistic-value__suffix` }, children))
      )
    );
  }
});
const visitChartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
      crossStyle: {
        color: "#999"
      }
    },
    formatter: (params) => {
      const x = params[0].axisValueLabel;
      const y = params[0].value;
      return `${x}<br />PV: ${y}`;
    }
  },
  xAxis: {
    name: "weekday",
    type: "category",
    data: getWeekDaysLabel(),
    axisPointer: {
      type: "shadow"
    }
  },
  yAxis: {
    type: "value",
    minInterval: 1
  }
};
const refererChartOption = {
  tooltip: {
    show: true,
    trigger: "item"
  }
};
const _sfc_main$3 = defineComponent({
  name: "MainPanel",
  components: { Panel: __unplugin_components_4, Chart: __unplugin_components_0$1 },
  setup() {
    const { pv, pvTotal, originRatio } = storeToRefs(useVisitInfoStore());
    const visitSeries = computed(() => {
      return {
        name: "PV",
        type: "line",
        smooth: true,
        data: pv.value
      };
    });
    const refererConfig = computed(() => {
      return {
        title: {
          text: `Total PV: ${pvTotal.value}`,
          left: "center",
          top: "center"
        },
        series: {
          type: "pie",
          data: originRatio.value,
          label: {
            show: false
          },
          radius: ["40%", "70%"]
        }
      };
    });
    const { setBegin, setEnd, setWeekDay } = useGlobal();
    const clickHandler = (param) => {
      const idx = typeof param === "number" ? param : param.dataIndex;
      if (idx <= getCurrentIntervalIdx()) {
        const weekDays = getWeekDays();
        setBegin(weekDays[idx]);
        setEnd(weekDays[idx + 1]);
        setWeekDay(idx);
        router.push("/layout");
      }
    };
    return {
      visitChartOption,
      visitSeries,
      refererChartOption,
      refererConfig,
      clickHandler
    };
  }
});
const MainPanel_vue_vue_type_style_index_0_scoped_391c47b7_lang = "";
const _hoisted_1$6 = /* @__PURE__ */ createTextVNode(" PAGE VIEW ");
const _hoisted_2$6 = /* @__PURE__ */ createTextVNode(" REFERER ");
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Chart = __unplugin_components_0$1;
  const _component_Panel = __unplugin_components_4;
  const _component_n_space = __unplugin_components_7;
  return openBlock(), createBlock(_component_n_space, {
    justify: "space-around",
    size: "large"
  }, {
    default: withCtx(() => [
      createVNode(_component_Panel, { floatShadow: true }, {
        header: withCtx(() => [
          _hoisted_1$6
        ]),
        default: withCtx(() => [
          createVNode(_component_Chart, {
            chartId: "visit",
            width: "850px",
            height: "400px",
            tooltip: _ctx.visitChartOption.tooltip,
            xAxis: _ctx.visitChartOption.xAxis,
            yAxis: _ctx.visitChartOption.yAxis,
            series: _ctx.visitSeries,
            "click-handler": _ctx.clickHandler
          }, null, 8, ["tooltip", "xAxis", "yAxis", "series", "click-handler"])
        ]),
        _: 1
      }),
      createVNode(_component_Panel, { floatShadow: true }, {
        header: withCtx(() => [
          _hoisted_2$6
        ]),
        default: withCtx(() => [
          createVNode(_component_Chart, {
            chartId: "referer",
            width: "360px",
            height: "400px",
            tooltip: _ctx.refererChartOption.tooltip,
            title: _ctx.refererConfig.title,
            series: _ctx.refererConfig.series
          }, null, 8, ["tooltip", "title", "series"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-391c47b7"]]);
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z",
    fill: "none",
    stroke: "currentColor",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_6 = [_hoisted_2$5, _hoisted_3$5, _hoisted_4$4, _hoisted_5$1];
const PeopleOutline = defineComponent({
  name: "PeopleOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_6);
  }
});
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M32 160v296a8 8 0 0 0 8 8h136V160a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M320 48H192a16 16 0 0 0-16 16v400h160V64a16 16 0 0 0-16-16z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M464 208H352a16 16 0 0 0-16 16v240h136a8 8 0 0 0 8-8V224a16 16 0 0 0-16-16z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_5 = [_hoisted_2$4, _hoisted_3$4, _hoisted_4$3];
const PodiumOutline = defineComponent({
  name: "PodiumOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_5);
  }
});
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M48 320h64l64-256l64 384l64-224l32 96h64"
  },
  null,
  -1
);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode(
  "circle",
  {
    cx: "432",
    cy: "320",
    r: "32",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_4$2 = [_hoisted_2$3, _hoisted_3$3];
const PulseOutline = defineComponent({
  name: "PulseOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$2);
  }
});
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
    d: "M352 368h112V256"
  },
  null,
  -1
);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M48 144l121.37 121.37a32 32 0 0 0 45.26 0l50.74-50.74a32 32 0 0 1 45.26 0L448 352",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_4$1 = [_hoisted_2$2, _hoisted_3$2];
const TrendingDownOutline = defineComponent({
  name: "TrendingDownOutline",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M352 144h112v112"
  },
  null,
  -1
);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M48 368l121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_4 = [_hoisted_2$1, _hoisted_3$1];
const TrendingUpOutline = defineComponent({
  name: "TrendingUpOutline",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
  }
});
const _sfc_main$2 = defineComponent({
  name: "AnimationNumber",
  props: ["from", "to", "finishHandler", "icon", "color"],
  setup(props) {
    const trendIcon = computed(() => {
      return props.to >= props.from ? TrendingUpOutline : TrendingDownOutline;
    });
    return {
      trendIcon
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_icon = NIcon;
  const _component_n_number_animation = __unplugin_components_1$1;
  const _component_n_statistic = __unplugin_components_2$1;
  return openBlock(), createBlock(_component_n_statistic, { "tabular-nums": "" }, {
    prefix: withCtx(() => [
      createVNode(_component_n_icon, {
        color: _ctx.color,
        component: _ctx.icon
      }, null, 8, ["color", "component"])
    ]),
    suffix: withCtx(() => [
      withDirectives(createVNode(_component_n_icon, {
        color: _ctx.color,
        component: _ctx.trendIcon
      }, null, 8, ["color", "component"]), [
        [vShow, _ctx.to]
      ])
    ]),
    default: withCtx(() => [
      createVNode(_component_n_number_animation, {
        from: _ctx.from,
        to: _ctx.to,
        "on-finish": _ctx.finishHandler
      }, null, 8, ["from", "to", "on-finish"])
    ]),
    _: 1
  });
}
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const contentStyle = {
  width: "400px"
};
const _sfc_main$1 = defineComponent({
  name: "MainPanel",
  components: {
    Panel: __unplugin_components_4,
    AnimationNumber: __unplugin_components_0
  },
  setup() {
    const { currentPv } = storeToRefs(useVisitInfoStore());
    const { currentFP, currentLCP } = storeToRefs(usePerformanceTimingStore());
    const pvStart = ref(0);
    const pvHandler = () => {
      pvStart.value = currentPv.value;
    };
    const fpStart = ref(0);
    const fpHandler = () => {
      fpStart.value = currentFP.value;
    };
    const lcpStart = ref(0);
    const lcpHandler = () => {
      lcpStart.value = currentLCP.value;
    };
    return {
      contentStyle,
      currentPv,
      currentFP,
      currentLCP,
      pvStart,
      pvHandler,
      fpStart,
      fpHandler,
      lcpStart,
      lcpHandler,
      PeopleOutline,
      PodiumOutline,
      PulseOutline
    };
  }
});
const SubPanel_vue_vue_type_style_index_0_scoped_19d3de9c_lang = "";
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" CURRENT ONLINE ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" FP ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" LCP ");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AnimationNumber = __unplugin_components_0;
  const _component_Panel = __unplugin_components_4;
  const _component_n_space = __unplugin_components_7;
  return openBlock(), createBlock(_component_n_space, {
    justify: "space-around",
    size: "large"
  }, {
    default: withCtx(() => [
      createVNode(_component_Panel, {
        "content-style": _ctx.contentStyle,
        floatShadow: true
      }, {
        header: withCtx(() => [
          _hoisted_1
        ]),
        default: withCtx(() => [
          createVNode(_component_AnimationNumber, {
            from: _ctx.pvStart,
            to: _ctx.currentPv,
            icon: _ctx.PeopleOutline,
            finishHandler: _ctx.pvHandler,
            color: "#4b3f97"
          }, null, 8, ["from", "to", "icon", "finishHandler"])
        ]),
        _: 1
      }, 8, ["content-style"]),
      createVNode(_component_Panel, {
        "content-style": _ctx.contentStyle,
        floatShadow: true
      }, {
        header: withCtx(() => [
          _hoisted_2
        ]),
        default: withCtx(() => [
          createVNode(_component_AnimationNumber, {
            from: _ctx.fpStart,
            to: _ctx.currentFP,
            icon: _ctx.PodiumOutline,
            finishHandler: _ctx.fpHandler,
            color: "#4b3f97"
          }, null, 8, ["from", "to", "icon", "finishHandler"])
        ]),
        _: 1
      }, 8, ["content-style"]),
      createVNode(_component_Panel, {
        "content-style": _ctx.contentStyle,
        floatShadow: true
      }, {
        header: withCtx(() => [
          _hoisted_3
        ]),
        default: withCtx(() => [
          createVNode(_component_AnimationNumber, {
            from: _ctx.lcpStart,
            to: _ctx.currentLCP,
            icon: _ctx.PulseOutline,
            finishHandler: _ctx.lcpHandler,
            color: "#4b3f97"
          }, null, 8, ["from", "to", "icon", "finishHandler"])
        ]),
        _: 1
      }, 8, ["content-style"])
    ]),
    _: 1
  });
}
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-19d3de9c"]]);
const mainWavyIcon = "" + new URL("../svg/wavy-913b90dc.svg", import.meta.url).href;
const redWavyIcon = "" + new URL("../svg/errorWavy-f7aae764.svg", import.meta.url).href;
const _sfc_main = defineComponent({
  name: "Overview",
  components: { MainHeader: HeaderMenu, SubPanel: __unplugin_components_1, MainPanel: __unplugin_components_2 },
  setup() {
    const { isErrorOccur } = storeToRefs(useErrorInfoStore());
    const wavyIcon = computed(() => {
      return isErrorOccur.value ? redWavyIcon : mainWavyIcon;
    });
    return {
      wavyIcon
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_8a674472_lang = "";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MainHeader = HeaderMenu;
  const _component_SubPanel = __unplugin_components_1;
  const _component_MainPanel = __unplugin_components_2;
  const _component_n_layout_content = __unplugin_components_3;
  const _component_n_layout = __unplugin_components_2$2;
  return openBlock(), createBlock(_component_n_layout, null, {
    default: withCtx(() => [
      createVNode(_component_MainHeader),
      createVNode(_component_n_layout_content, {
        style: normalizeStyle({ backgroundImage: `url(${_ctx.wavyIcon})` }),
        embedded: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_SubPanel),
          createVNode(_component_MainPanel)
        ]),
        _: 1
      }, 8, ["style"])
    ]),
    _: 1
  });
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8a674472"]]);
export {
  index as default
};
