import { N as NPopover, p as popoverBaseProps } from "./WarningOutline-09a89e98.js";
import { d as defineComponent, g as useTheme, bb as tooltipLight, b as ref, c as computed, j as h } from "./main-8183f0bd.js";
const tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
const __unplugin_components_1 = defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  __popover__: true,
  setup(props) {
    const themeRef = useTheme("Tooltip", "-tooltip", void 0, tooltipLight, props);
    const popoverRef = ref(null);
    const tooltipExposedMethod = {
      syncPosition() {
        popoverRef.value.syncPosition();
      },
      setShow(show) {
        popoverRef.value.setShow(show);
      }
    };
    return Object.assign(Object.assign({}, tooltipExposedMethod), { popoverRef, mergedTheme: themeRef, popoverThemeOverrides: computed(() => {
      return themeRef.value.self;
    }) });
  },
  render() {
    const { mergedTheme, internalExtraClass } = this;
    return h(NPopover, Object.assign(Object.assign({}, this.$props), { theme: mergedTheme.peers.Popover, themeOverrides: mergedTheme.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: internalExtraClass.concat("tooltip"), ref: "popoverRef" }), this.$slots);
  }
});
export {
  __unplugin_components_1 as _
};
