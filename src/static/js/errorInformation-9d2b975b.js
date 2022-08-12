import { r as ref, X as readonly, a3 as watch, a as computed, d as defineComponent, j as h, i as commonVariables, u as useConfig, p as provide, k as createInjectionKey, a4 as collapseLight, t as toRef, a5 as withDirectives, v as vShow, n as useMemo, l as inject, O as throwError, _ as _export_sfc, E as createElementBlock, D as createVNode, A as withCtx, F as Fragment, B as openBlock, H as createBaseVNode } from "./main-3c05bb2c.js";
import { c, a as cB, d as cE, b as cM, u as useTheme, e as useRtl, f as useThemeClass, m as call } from "./use-rtl-7162cae1.js";
import { N as NFadeInExpandTransition } from "./FadeInExpandTransition-83cb2a3e.js";
import { N as NBaseIcon } from "./Icon-2f1d5a38.js";
function createId(length = 8) {
  return Math.random().toString(16).slice(2, 2 + length);
}
function useFalseUntilTruthy(originalRef) {
  const currentRef = ref(!!originalRef.value);
  if (currentRef.value)
    return readonly(currentRef);
  const stop = watch(originalRef, (value) => {
    if (value) {
      currentRef.value = true;
      stop();
    }
  });
  return readonly(currentRef);
}
function useMergedState(controlledStateRef, uncontrolledStateRef) {
  watch(controlledStateRef, (value) => {
    if (value !== void 0) {
      uncontrolledStateRef.value = value;
    }
  });
  return computed(() => {
    if (controlledStateRef.value === void 0) {
      return uncontrolledStateRef.value;
    }
    return controlledStateRef.value;
  });
}
const ChevronLeftIcon = defineComponent({
  name: "ChevronLeft",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z", fill: "currentColor" })
    );
  }
});
const ChevronRightIcon = defineComponent({
  name: "ChevronRight",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z", fill: "currentColor" })
    );
  }
});
const {
  cubicBezierEaseInOut,
  cubicBezierEaseOut,
  cubicBezierEaseIn
} = commonVariables;
function fadeInHeightExpandTransition({
  overflow = "hidden",
  duration = ".3s",
  originalTransition = "",
  leavingDelay = "0s",
  foldPadding = false,
  enterToProps = void 0,
  leaveToProps = void 0,
  reverse = false
} = {}) {
  const enterClass = reverse ? "leave" : "enter";
  const leaveClass = reverse ? "enter" : "leave";
  return [c(`&.fade-in-height-expand-transition-${leaveClass}-from,
 &.fade-in-height-expand-transition-${enterClass}-to`, Object.assign(Object.assign({}, enterToProps), {
    opacity: 1
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-to,
 &.fade-in-height-expand-transition-${enterClass}-from`, Object.assign(Object.assign({}, leaveToProps), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: foldPadding ? "0 !important" : void 0,
    paddingBottom: foldPadding ? "0 !important" : void 0
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 opacity ${duration} ${cubicBezierEaseOut} ${leavingDelay},
 margin-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 margin-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay}
 ${originalTransition ? "," + originalTransition : ""}
 `), c(`&.fade-in-height-expand-transition-${enterClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut},
 opacity ${duration} ${cubicBezierEaseIn},
 margin-top ${duration} ${cubicBezierEaseInOut},
 margin-bottom ${duration} ${cubicBezierEaseInOut},
 padding-top ${duration} ${cubicBezierEaseInOut},
 padding-bottom ${duration} ${cubicBezierEaseInOut}
 ${originalTransition ? "," + originalTransition : ""}
 `)];
}
const style = cB("collapse", {
  width: "100%"
}, [cB("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: 16px 0 0 0;
 `, [cB("collapse-item", "margin-left: 32px;"), c("&:first-child", {
  marginTop: 0
}), c("&:first-child >", [cE("header", {
  paddingTop: 0
})]), cM("left-arrow-placement", [cE("header", [cB("collapse-item-arrow", {
  marginRight: "4px"
})])]), cM("right-arrow-placement", [cE("header", [cB("collapse-item-arrow", {
  marginLeft: "4px"
})])]), cE("content-wrapper", [cE("content-inner", {
  paddingTop: "16px"
}), fadeInHeightExpandTransition({
  duration: "0.15s"
})]), cM("active", [cE("header", [cM("active", [cB("collapse-item-arrow", {
  transform: "rotate(90deg)"
})])])]), c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-divider-color)"
}), cE("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 `, [cE("header-main", `
 cursor: pointer;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), cE("header-extra", `
 cursor: pointer;
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cB("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);
const collapseProps = Object.assign(Object.assign({}, useTheme.props), {
  defaultExpandedNames: {
    type: [Array, String],
    default: null
  },
  expandedNames: [Array, String],
  arrowPlacement: {
    type: String,
    default: "left"
  },
  accordion: {
    type: Boolean,
    default: false
  },
  displayDirective: {
    type: String,
    default: "if"
  },
  onItemHeaderClick: [Function, Array],
  "onUpdate:expandedNames": [Function, Array],
  onUpdateExpandedNames: [Function, Array],
  onExpandedNamesChange: {
    type: [Function, Array],
    validator: () => {
      return true;
    },
    default: void 0
  }
});
const collapseInjectionKey = createInjectionKey("n-collapse");
const __unplugin_components_1 = defineComponent({
  name: "Collapse",
  props: collapseProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const uncontrolledExpandedNamesRef = ref(props.defaultExpandedNames);
    const controlledExpandedNamesRef = computed(() => props.expandedNames);
    const mergedExpandedNamesRef = useMergedState(controlledExpandedNamesRef, uncontrolledExpandedNamesRef);
    const themeRef = useTheme("Collapse", "-collapse", style, collapseLight, props, mergedClsPrefixRef);
    function doUpdateExpandedNames(names) {
      const { "onUpdate:expandedNames": _onUpdateExpandedNames, onUpdateExpandedNames, onExpandedNamesChange } = props;
      if (onUpdateExpandedNames) {
        call(onUpdateExpandedNames, names);
      }
      if (_onUpdateExpandedNames) {
        call(_onUpdateExpandedNames, names);
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, names);
      }
      uncontrolledExpandedNamesRef.value = names;
    }
    function doItemHeaderClick(info) {
      const { onItemHeaderClick } = props;
      if (onItemHeaderClick) {
        call(onItemHeaderClick, info);
      }
    }
    function toggleItem(collapse, name, event) {
      const { accordion } = props;
      const { value: expandedNames } = mergedExpandedNamesRef;
      if (accordion) {
        if (collapse) {
          doUpdateExpandedNames([name]);
          doItemHeaderClick({ name, expanded: true, event });
        } else {
          doUpdateExpandedNames([]);
          doItemHeaderClick({ name, expanded: false, event });
        }
      } else {
        if (!Array.isArray(expandedNames)) {
          doUpdateExpandedNames([name]);
          doItemHeaderClick({ name, expanded: true, event });
        } else {
          const activeNames = expandedNames.slice();
          const index = activeNames.findIndex((activeName) => name === activeName);
          if (~index) {
            activeNames.splice(index, 1);
            doUpdateExpandedNames(activeNames);
            doItemHeaderClick({ name, expanded: false, event });
          } else {
            activeNames.push(name);
            doUpdateExpandedNames(activeNames);
            doItemHeaderClick({ name, expanded: true, event });
          }
        }
      }
    }
    provide(collapseInjectionKey, {
      props,
      mergedClsPrefixRef,
      expandedNamesRef: mergedExpandedNamesRef,
      slots,
      toggleItem
    });
    const rtlEnabledRef = useRtl("Collapse", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { titleFontWeight, dividerColor, titleTextColor, textColor, arrowColor, fontSize, titleFontSize } } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-text-color": textColor,
        "--n-divider-color": dividerColor,
        "--n-title-font-size": titleFontSize,
        "--n-title-text-color": titleTextColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-arrow-color": arrowColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("collapse", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedTheme: themeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", { class: [
      `${this.mergedClsPrefix}-collapse`,
      this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`,
      this.themeClass
    ], style: this.cssVars }, this.$slots);
  }
});
const NCollapseItemContent = defineComponent({
  name: "CollapseItemContent",
  props: {
    displayDirective: {
      type: String,
      required: true
    },
    show: Boolean,
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const onceTrueRef = useFalseUntilTruthy(toRef(props, "show"));
    return {
      onceTrue: onceTrueRef
    };
  },
  render() {
    return h(NFadeInExpandTransition, null, {
      default: () => {
        const { show, displayDirective, onceTrue, clsPrefix } = this;
        const useVShow = displayDirective === "show" && onceTrue;
        const contentNode = h(
          "div",
          { class: `${clsPrefix}-collapse-item__content-wrapper` },
          h("div", { class: `${clsPrefix}-collapse-item__content-inner` }, this.$slots)
        );
        return useVShow ? withDirectives(contentNode, [[vShow, show]]) : show ? contentNode : null;
      }
    });
  }
});
const collapseItemProps = {
  title: String,
  name: [String, Number],
  displayDirective: String
};
const __unplugin_components_0 = defineComponent({
  name: "CollapseItem",
  props: collapseItemProps,
  setup(props) {
    const { mergedRtlRef } = useConfig(props);
    const randomName = createId();
    const mergedNameRef = useMemo(() => {
      var _a;
      return (_a = props.name) !== null && _a !== void 0 ? _a : randomName;
    });
    const NCollapse = inject(collapseInjectionKey);
    if (!NCollapse) {
      throwError("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    }
    const { expandedNamesRef, props: collapseProps2, mergedClsPrefixRef, slots: collapseSlots } = NCollapse;
    const collapsedRef = computed(() => {
      const { value: expandedNames } = expandedNamesRef;
      if (Array.isArray(expandedNames)) {
        const { value: name } = mergedNameRef;
        return !~expandedNames.findIndex((expandedName) => expandedName === name);
      } else if (expandedNames) {
        const { value: name } = mergedNameRef;
        return name !== expandedNames;
      }
      return true;
    });
    const rtlEnabledRef = useRtl("Collapse", mergedRtlRef, mergedClsPrefixRef);
    return {
      rtlEnabled: rtlEnabledRef,
      collapseSlots,
      randomName,
      mergedClsPrefix: mergedClsPrefixRef,
      collapsed: collapsedRef,
      mergedDisplayDirective: computed(() => {
        const { displayDirective } = props;
        if (displayDirective) {
          return displayDirective;
        } else {
          return collapseProps2.displayDirective;
        }
      }),
      arrowPlacement: computed(() => {
        return collapseProps2.arrowPlacement;
      }),
      handleClick(e) {
        if (NCollapse) {
          NCollapse.toggleItem(collapsedRef.value, mergedNameRef.value, e);
        }
      }
    };
  },
  render() {
    var _a;
    const { collapseSlots, $slots, arrowPlacement, collapsed, mergedDisplayDirective, mergedClsPrefix } = this;
    const headerNode = $slots.header ? $slots.header() : this.title;
    const headerExtraSlot = $slots["header-extra"] || collapseSlots["header-extra"];
    const arrowSlot = $slots.arrow || collapseSlots.arrow;
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-collapse-item`,
        `${mergedClsPrefix}-collapse-item--${arrowPlacement}-arrow-placement`,
        !collapsed && `${mergedClsPrefix}-collapse-item--active`
      ] },
      h(
        "div",
        { class: [
          `${mergedClsPrefix}-collapse-item__header`,
          !collapsed && `${mergedClsPrefix}-collapse-item__header--active`
        ] },
        h(
          "div",
          { class: `${mergedClsPrefix}-collapse-item__header-main`, onClick: this.handleClick },
          arrowPlacement === "right" && headerNode,
          h("div", { class: `${mergedClsPrefix}-collapse-item-arrow`, key: this.rtlEnabled ? 0 : 1 }, arrowSlot ? arrowSlot({ collapsed }) : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
            default: (_a = collapseSlots.expandIcon) !== null && _a !== void 0 ? _a : () => this.rtlEnabled ? h(ChevronLeftIcon, null) : h(ChevronRightIcon, null)
          })),
          arrowPlacement === "left" && headerNode
        ),
        headerExtraSlot && h("div", { class: `${mergedClsPrefix}-collapse-item__header-extra`, onClick: this.handleClick }, { default: headerExtraSlot })
      ),
      h(NCollapseItemContent, { clsPrefix: mergedClsPrefix, displayDirective: mergedDisplayDirective, show: !collapsed }, $slots)
    );
  }
});
const _sfc_main = defineComponent({
  name: "ErrorInformation"
});
const errorInformation_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", null, "resource", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", null, "123456", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", null, "12:00", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", null, "string", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", null, "\u5F85\u5B9A", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", null, "\u5F85\u5B9A", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", null, "resource", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", null, "123456", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", null, "12:00", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", null, "string", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", null, "\u5F85\u5B9A", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", null, "\u5F85\u5B9A", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_collapse_item = __unplugin_components_0;
  const _component_n_collapse = __unplugin_components_1;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_n_collapse, null, {
      default: withCtx(() => [
        createVNode(_component_n_collapse_item, {
          title: "ERROR 1",
          name: "1"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_collapse, null, {
              default: withCtx(() => [
                createVNode(_component_n_collapse_item, {
                  title: "type",
                  name: "1"
                }, {
                  default: withCtx(() => [
                    _hoisted_1
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "errorid",
                  name: "2"
                }, {
                  default: withCtx(() => [
                    _hoisted_2
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "time",
                  name: "3"
                }, {
                  default: withCtx(() => [
                    _hoisted_3
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "message",
                  name: "4"
                }, {
                  default: withCtx(() => [
                    _hoisted_4
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "detail",
                  name: "5"
                }, {
                  default: withCtx(() => [
                    _hoisted_5
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "breadcrumbs",
                  name: "6"
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_n_collapse, null, {
      default: withCtx(() => [
        createVNode(_component_n_collapse_item, {
          title: "ERROR 2",
          name: "1"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_collapse, null, {
              default: withCtx(() => [
                createVNode(_component_n_collapse_item, {
                  title: "type",
                  name: "1"
                }, {
                  default: withCtx(() => [
                    _hoisted_7
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "errorid",
                  name: "2"
                }, {
                  default: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "time",
                  name: "3"
                }, {
                  default: withCtx(() => [
                    _hoisted_9
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "message",
                  name: "4"
                }, {
                  default: withCtx(() => [
                    _hoisted_10
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "detail",
                  name: "5"
                }, {
                  default: withCtx(() => [
                    _hoisted_11
                  ]),
                  _: 1
                }),
                createVNode(_component_n_collapse_item, {
                  title: "breadcrumbs",
                  name: "6"
                }, {
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
const errorInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  errorInformation as default
};
