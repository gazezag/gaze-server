import { d as defineComponent, j as h, e as cB, U as c, f as cE, S as cM, b7 as fadeInHeightExpandTransition, u as useConfig, b as ref, c as computed, g as useTheme, bk as collapseLight, a0 as provide, h as useThemeClass, a9 as createInjectionKey, W as toRef, E as withDirectives, F as vShow, a4 as NFadeInExpandTransition, aA as createId, M as useMemo, P as inject, bl as throwError, R as NBaseIcon, V as cNotM, ai as insideModal, aj as insidePopover, bm as tableLight, $ as createKey } from "./main-e99d7435.js";
import { u as useRtl, c as call } from "./Space-a825831f.js";
import { a as useMergedState, u as useFalseUntilTruthy } from "./use-merged-state-83482f5b.js";
import { C as ChevronRightIcon } from "./ChevronRight-a44d3503.js";
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
const style$1 = cB("collapse", {
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
const __unplugin_components_3 = defineComponent({
  name: "Collapse",
  props: collapseProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const uncontrolledExpandedNamesRef = ref(props.defaultExpandedNames);
    const controlledExpandedNamesRef = computed(() => props.expandedNames);
    const mergedExpandedNamesRef = useMergedState(controlledExpandedNamesRef, uncontrolledExpandedNamesRef);
    const themeRef = useTheme("Collapse", "-collapse", style$1, collapseLight, props, mergedClsPrefixRef);
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
      const { common: { cubicBezierEaseInOut }, self: { titleFontWeight, dividerColor, titleTextColor, textColor, arrowColor, fontSize, titleFontSize } } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
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
const __unplugin_components_2 = defineComponent({
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
const style = c([cB("table", `
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `, [c("th", `
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `, [c("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), c("td", `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `, [c("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [c("tr", [c("&:last-child", [c("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), cM("single-line", [c("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), c("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("single-column", [c("tr", [c("&:not(:last-child)", [c("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), cM("striped", [c("tr:nth-of-type(even)", [c("td", "background-color: var(--n-td-color-striped)")])]), cNotM("bottom-bordered", [c("tr", [c("&:last-child", [c("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), insideModal(cB("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [c("th", `
 background-color: var(--n-th-color-modal);
 `), c("td", `
 background-color: var(--n-td-color-modal);
 `)])), insidePopover(cB("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [c("th", `
 background-color: var(--n-th-color-popover);
 `), c("td", `
 background-color: var(--n-td-color-popover);
 `)]))]);
const tableProps = Object.assign(Object.assign({}, useTheme.props), { bordered: {
  type: Boolean,
  default: true
}, bottomBordered: {
  type: Boolean,
  default: true
}, singleLine: {
  type: Boolean,
  default: true
}, striped: Boolean, singleColumn: Boolean, size: {
  type: String,
  default: "medium"
} });
const __unplugin_components_1 = defineComponent({
  name: "Table",
  props: tableProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Table", "-table", style, tableLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Table", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { self: { borderColor, tdColor, tdColorModal, tdColorPopover, thColor, thColorModal, thColorPopover, thTextColor, tdTextColor, borderRadius, thFontWeight, lineHeight, borderColorModal, borderColorPopover, tdColorStriped, tdColorStripedModal, tdColorStripedPopover, [createKey("fontSize", size)]: fontSize, [createKey("tdPadding", size)]: tdPadding, [createKey("thPadding", size)]: thPadding }, common: { cubicBezierEaseInOut } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-td-color": tdColor,
        "--n-td-color-modal": tdColorModal,
        "--n-td-color-popover": tdColorPopover,
        "--n-td-text-color": tdTextColor,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-border-radius": borderRadius,
        "--n-font-size": fontSize,
        "--n-th-color": thColor,
        "--n-th-color-modal": thColorModal,
        "--n-th-color-popover": thColorPopover,
        "--n-th-font-weight": thFontWeight,
        "--n-th-text-color": thTextColor,
        "--n-line-height": lineHeight,
        "--n-td-padding": tdPadding,
        "--n-th-padding": thPadding,
        "--n-td-color-striped": tdColorStriped,
        "--n-td-color-striped-modal": tdColorStripedModal,
        "--n-td-color-striped-popover": tdColorStripedPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("table", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
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
    const { mergedClsPrefix } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("table", { class: [
      `${mergedClsPrefix}-table`,
      this.themeClass,
      {
        [`${mergedClsPrefix}-table--rtl`]: this.rtlEnabled,
        [`${mergedClsPrefix}-table--bottom-bordered`]: this.bottomBordered,
        [`${mergedClsPrefix}-table--bordered`]: this.bordered,
        [`${mergedClsPrefix}-table--single-line`]: this.singleLine,
        [`${mergedClsPrefix}-table--single-column`]: this.singleColumn,
        [`${mergedClsPrefix}-table--striped`]: this.striped
      }
    ], style: this.cssVars }, this.$slots);
  }
});
export {
  __unplugin_components_2 as _,
  __unplugin_components_3 as a,
  __unplugin_components_1 as b
};
