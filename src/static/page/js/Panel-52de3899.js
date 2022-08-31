import { U as c, e as cB, S as cM, f as cE, ai as insideModal, aj as insidePopover, ak as asModal, d as defineComponent, u as useConfig, g as useTheme, c as computed, h as useThemeClass, j as h, al as cardLight, $ as createKey, am as NBaseClose, b as ref, o as onMounted, _ as _export_sfc, C as createElementBlock, A as createVNode, y as withCtx, an as normalizeClass, z as openBlock, D as createBaseVNode, ao as renderSlot, I as normalizeStyle } from "./main-e99d7435.js";
import { u as useRtl, r as resolveWrappedSlot, c as call, g as getMargin, k as keysOf } from "./Space-a825831f.js";
const style = c([cB("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cM("hoverable", [c("&:hover", "box-shadow: var(--n-box-shadow);")]), cM("content-segmented", [c(">", [cE("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), cM("content-soft-segmented", [c(">", [cE("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), cM("footer-segmented", [c(">", [cE("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), cM("footer-soft-segmented", [c(">", [cE("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), c(">", [cB("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [cE("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), cE("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), cE("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), cE("content", "flex: 1;"), cE("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [c("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), cE("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), cB("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [c("img", `
 display: block;
 width: 100%;
 `)]), cM("bordered", `
 border: 1px solid var(--n-border-color);
 `, [c("&:target", "border-color: var(--n-color-target);")]), cM("action-segmented", [c(">", [cE("action", [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("content-segmented, content-soft-segmented", [c(">", [cE("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("footer-segmented, footer-soft-segmented", [c(">", [cE("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])])]), insideModal(cB("card", {
  background: "var(--n-color-modal)"
})), insidePopover(cB("card", {
  background: "var(--n-color-popover)"
})), cB("card", [asModal({
  background: "var(--n-color-modal)"
})])]);
const cardBaseProps = {
  title: String,
  contentStyle: [Object, String],
  headerStyle: [Object, String],
  headerExtraStyle: [Object, String],
  footerStyle: [Object, String],
  embedded: Boolean,
  segmented: {
    type: [Boolean, Object],
    default: false
  },
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: false
  },
  hoverable: Boolean,
  role: String,
  onClose: [Function, Array]
};
const cardBasePropKeys = keysOf(cardBaseProps);
const cardProps = Object.assign(Object.assign({}, useTheme.props), cardBaseProps);
const __unplugin_components_0 = defineComponent({
  name: "Card",
  props: cardProps,
  setup(props) {
    const handleCloseClick = () => {
      const { onClose } = props;
      if (onClose)
        call(onClose);
    };
    const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Card", "-card", style, cardLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Card", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { self: { color, colorModal, colorTarget, textColor, titleTextColor, titleFontWeight, borderColor, actionColor, borderRadius, lineHeight, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, closeBorderRadius, closeIconSize, closeSize, boxShadow, colorPopover, colorEmbedded, [createKey("padding", size)]: padding, [createKey("fontSize", size)]: fontSize, [createKey("titleFontSize", size)]: titleFontSize }, common: { cubicBezierEaseInOut } } = themeRef.value;
      const { top: paddingTop, left: paddingLeft, bottom: paddingBottom } = getMargin(padding);
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-color": props.embedded ? colorEmbedded : color,
        "--n-color-modal": colorModal,
        "--n-color-popover": colorPopover,
        "--n-color-target": colorTarget,
        "--n-text-color": textColor,
        "--n-line-height": lineHeight,
        "--n-action-color": actionColor,
        "--n-title-text-color": titleTextColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-border-color": borderColor,
        "--n-box-shadow": boxShadow,
        "--n-padding-top": paddingTop,
        "--n-padding-bottom": paddingBottom,
        "--n-padding-left": paddingLeft,
        "--n-font-size": fontSize,
        "--n-title-font-size": titleFontSize,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("card", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { segmented: segmented2, bordered, hoverable, mergedClsPrefix, rtlEnabled, onRender, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-card`,
        this.themeClass,
        {
          [`${mergedClsPrefix}-card--rtl`]: rtlEnabled,
          [`${mergedClsPrefix}-card--content${typeof segmented2 !== "boolean" && segmented2.content === "soft" ? "-soft" : ""}-segmented`]: segmented2 === true || segmented2 !== false && segmented2.content,
          [`${mergedClsPrefix}-card--footer${typeof segmented2 !== "boolean" && segmented2.footer === "soft" ? "-soft" : ""}-segmented`]: segmented2 === true || segmented2 !== false && segmented2.footer,
          [`${mergedClsPrefix}-card--action-segmented`]: segmented2 === true || segmented2 !== false && segmented2.action,
          [`${mergedClsPrefix}-card--bordered`]: bordered,
          [`${mergedClsPrefix}-card--hoverable`]: hoverable
        }
      ], style: this.cssVars, role: this.role },
      resolveWrappedSlot($slots.cover, (children) => children && h("div", { class: `${mergedClsPrefix}-card-cover`, role: "none" }, children)),
      resolveWrappedSlot($slots.header, (children) => {
        return children || this.title || this.closable ? h(
          "div",
          { class: `${mergedClsPrefix}-card-header`, style: this.headerStyle },
          h("div", { class: `${mergedClsPrefix}-card-header__main`, role: "heading" }, children || [this.title]),
          resolveWrappedSlot($slots["header-extra"], (children2) => children2 && h("div", { class: `${mergedClsPrefix}-card-header__extra`, style: this.headerExtraStyle }, children2)),
          this.closable ? h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-card-header__close`, onClick: this.handleCloseClick, absolute: true }) : null
        ) : null;
      }),
      resolveWrappedSlot($slots.default, (children) => children && h("div", { class: `${mergedClsPrefix}-card__content`, style: this.contentStyle, role: "none" }, children)),
      resolveWrappedSlot($slots.footer, (children) => children && [
        h("div", { class: `${mergedClsPrefix}-card__footer`, style: this.footerStyle, role: "none" }, children)
      ]),
      resolveWrappedSlot($slots.action, (children) => children && h("div", { class: `${mergedClsPrefix}-card__action`, role: "none" }, children))
    );
  }
});
const debounce = (fn, t = 100) => {
  let timer;
  return function(...rest) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, rest);
    }, t);
  };
};
const segmented = {
  content: true
};
const _sfc_main = defineComponent({
  name: "Panel",
  props: ["floatShadow", "contentStyle"],
  setup() {
    const domId = `Panel-${Date.now()}`;
    const isHover = ref(false);
    onMounted(() => {
      const panelDOM = document.querySelector(`#${domId}`);
      panelDOM == null ? void 0 : panelDOM.addEventListener(
        "mouseenter",
        debounce(() => {
          if (!isHover.value)
            isHover.value = true;
        }),
        false
      );
      panelDOM == null ? void 0 : panelDOM.addEventListener(
        "mouseleave",
        debounce(() => {
          if (isHover.value)
            isHover.value = false;
        }),
        false
      );
    });
    return {
      domId,
      segmented,
      isHover
    };
  }
});
const Panel_vue_vue_type_style_index_0_scoped_f843c949_lang = "";
const _hoisted_1 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_card = __unplugin_components_0;
  return openBlock(), createElementBlock("div", { id: _ctx.domId }, [
    createVNode(_component_n_card, {
      segmented: _ctx.segmented,
      "content-style": _ctx.contentStyle,
      hoverable: !_ctx.floatShadow,
      class: normalizeClass(_ctx.floatShadow && "hoverable-shadow"),
      bordered: ""
    }, {
      header: withCtx(() => [
        createBaseVNode("div", {
          style: normalizeStyle(_ctx.isHover ? { color: "#4b3f97" } : {})
        }, [
          renderSlot(_ctx.$slots, "header", {}, void 0, true)
        ], 4)
      ]),
      "header-extra": withCtx(() => [
        renderSlot(_ctx.$slots, "header-extra", {}, void 0, true)
      ]),
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["segmented", "content-style", "hoverable", "class"])
  ], 8, _hoisted_1);
}
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f843c949"]]);
export {
  __unplugin_components_4 as _,
  __unplugin_components_0 as a,
  cardBasePropKeys as b,
  cardBaseProps as c,
  debounce as d
};
