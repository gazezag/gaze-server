import { a as cB, c, i as useStyle } from "./use-rtl-7162cae1.js";
import { d as defineComponent, t as toRef, j as h } from "./main-3c05bb2c.js";
const style = cB("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [c("svg", `
 height: 1em;
 width: 1em;
 `)]);
const NBaseIcon = defineComponent({
  name: "BaseIcon",
  props: {
    role: String,
    ariaLabel: String,
    ariaDisabled: {
      type: Boolean,
      default: void 0
    },
    ariaHidden: {
      type: Boolean,
      default: void 0
    },
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function,
    onMousedown: Function,
    onMouseup: Function
  },
  setup(props) {
    useStyle("-base-icon", style, toRef(props, "clsPrefix"));
  },
  render() {
    return h("i", { class: `${this.clsPrefix}-base-icon`, onClick: this.onClick, onMousedown: this.onMousedown, onMouseup: this.onMouseup, role: this.role, "aria-label": this.ariaLabel, "aria-hidden": this.ariaHidden, "aria-disabled": this.ariaDisabled }, this.$slots);
  }
});
export {
  NBaseIcon as N
};
