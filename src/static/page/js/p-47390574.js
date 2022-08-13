import { a as cB, c, u as useTheme, f as useThemeClass } from "./use-rtl-7162cae1.js";
import { d as defineComponent, u as useConfig, a as computed, j as h, P as typographyLight } from "./main-3c05bb2c.js";
const isBrowser = typeof document !== "undefined" && typeof window !== "undefined";
const style = cB("p", `
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`, [c("&:first-child", "margin-top: 0;"), c("&:last-child", "margin-bottom: 0;")]);
const pProps = Object.assign(Object.assign({}, useTheme.props), { depth: [String, Number] });
const __unplugin_components_0 = defineComponent({
  name: "P",
  props: pProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Typography", "-p", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { depth } = props;
      const typeSafeDepth = depth || "1";
      const { common: { cubicBezierEaseInOut }, self: { pFontSize, pLineHeight, pMargin, pTextColor, [`pTextColor${typeSafeDepth}Depth`]: depthTextColor } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": pFontSize,
        "--n-line-height": pLineHeight,
        "--n-margin": pMargin,
        "--n-text-color": depth === void 0 ? pTextColor : depthTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("p", computed(() => `${props.depth || ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("p", { class: [`${this.mergedClsPrefix}-p`, this.themeClass], style: this.cssVars }, this.$slots);
  }
});
export {
  __unplugin_components_0 as _,
  isBrowser as i
};
