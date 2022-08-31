import { B as createTextVNode, aq as Fragment, ar as Comment, as as isVNode, at as queryElement, J as useSsrAdapter, c as computed, au as onBeforeMount, w as watchEffect, av as cssrAnchorMetaName, aw as commonVars, d as defineComponent, u as useConfig, g as useTheme, j as h, $ as createKey } from "./main-b154a3fa.js";
function depx(value) {
  if (typeof value === "string") {
    if (value.endsWith("px")) {
      return Number(value.slice(0, value.length - 2));
    }
    return Number(value);
  }
  return value;
}
function pxfy(value) {
  if (value === void 0 || value === null)
    return void 0;
  if (typeof value === "number")
    return `${value}px`;
  if (value.endsWith("px"))
    return value;
  return `${value}px`;
}
function getMargin(value, position) {
  const parts = value.trim().split(/\s+/g);
  const margin = {
    top: parts[0]
  };
  switch (parts.length) {
    case 1:
      margin.right = parts[0];
      margin.bottom = parts[0];
      margin.left = parts[0];
      break;
    case 2:
      margin.right = parts[1];
      margin.left = parts[1];
      margin.bottom = parts[0];
      break;
    case 3:
      margin.right = parts[1];
      margin.bottom = parts[2];
      margin.left = parts[1];
      break;
    case 4:
      margin.right = parts[1];
      margin.bottom = parts[2];
      margin.left = parts[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + value + " is not a valid value.");
  }
  if (position === void 0)
    return margin;
  return margin[position];
}
function getGap(value, orient) {
  const [rowGap, colGap] = value.split(" ");
  if (!orient)
    return {
      row: rowGap,
      col: colGap || rowGap
    };
  return orient === "row" ? rowGap : colGap;
}
function getSlot(instance, slotName = "default", fallback = []) {
  const slots = instance.$slots;
  const slot = slots[slotName];
  if (slot === void 0)
    return fallback;
  return slot();
}
function flatten(vNodes, filterCommentNode = true, result = []) {
  vNodes.forEach((vNode) => {
    if (vNode === null)
      return;
    if (typeof vNode !== "object") {
      if (typeof vNode === "string" || typeof vNode === "number") {
        result.push(createTextVNode(String(vNode)));
      }
      return;
    }
    if (Array.isArray(vNode)) {
      flatten(vNode, filterCommentNode, result);
      return;
    }
    if (vNode.type === Fragment) {
      if (vNode.children === null)
        return;
      if (Array.isArray(vNode.children)) {
        flatten(vNode.children, filterCommentNode, result);
      }
    } else if (vNode.type !== Comment) {
      result.push(vNode);
    }
  });
  return result;
}
function call(funcs, ...args) {
  if (Array.isArray(funcs)) {
    funcs.forEach((func) => call(func, ...args));
  } else
    return funcs(...args);
}
function keysOf(obj) {
  return Object.keys(obj);
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) {
      return true;
    }
    if (child.type === Comment) {
      return false;
    }
    if (child.type === Fragment && !ensureValidVNode(child.children)) {
      return false;
    }
    return true;
  }) ? vnodes : null;
}
function resolveSlot(slot, fallback) {
  return slot && ensureValidVNode(slot()) || fallback();
}
function resolveWrappedSlot(slot, wrapper) {
  const children = slot && ensureValidVNode(slot());
  return wrapper(children || null);
}
function isSlotEmpty(slot) {
  return !(slot && ensureValidVNode(slot()));
}
function exists(id, ssr) {
  if (id === void 0)
    return false;
  if (ssr) {
    const { context: { ids } } = ssr;
    return ids.has(id);
  }
  return queryElement(id) !== null;
}
const isBrowser = typeof document !== "undefined" && typeof window !== "undefined";
function useRtl(mountId, rtlStateRef, clsPrefixRef) {
  if (!rtlStateRef)
    return void 0;
  const ssrAdapter = useSsrAdapter();
  const componentRtlStateRef = computed(() => {
    const { value: rtlState } = rtlStateRef;
    if (!rtlState) {
      return void 0;
    }
    const componentRtlState = rtlState[mountId];
    if (!componentRtlState) {
      return void 0;
    }
    return componentRtlState;
  });
  const mountStyle = () => {
    watchEffect(() => {
      const { value: clsPrefix } = clsPrefixRef;
      const id = `${clsPrefix}${mountId}Rtl`;
      if (exists(id, ssrAdapter))
        return;
      const { value: componentRtlState } = componentRtlStateRef;
      if (!componentRtlState)
        return;
      componentRtlState.style.mount({
        id,
        head: true,
        anchorMetaName: cssrAnchorMetaName,
        props: {
          bPrefix: clsPrefix ? `.${clsPrefix}-` : void 0
        },
        ssr: ssrAdapter
      });
    });
  };
  if (ssrAdapter) {
    mountStyle();
  } else {
    onBeforeMount(mountStyle);
  }
  return componentRtlStateRef;
}
const self = () => {
  return commonVars;
};
const spaceLight = {
  name: "Space",
  self
};
const spaceLight$1 = spaceLight;
let supportFlexGap;
const ensureSupportFlexGap = () => {
  if (!isBrowser)
    return true;
  if (supportFlexGap === void 0) {
    const flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight === 1;
    document.body.removeChild(flex);
    return supportFlexGap = isSupported;
  }
  return supportFlexGap;
};
const spaceProps = Object.assign(Object.assign({}, useTheme.props), {
  align: String,
  justify: {
    type: String,
    default: "start"
  },
  inline: Boolean,
  vertical: Boolean,
  size: {
    type: [String, Number, Array],
    default: "medium"
  },
  wrapItem: {
    type: Boolean,
    default: true
  },
  itemStyle: [String, Object],
  wrap: {
    type: Boolean,
    default: true
  },
  internalUseGap: {
    type: Boolean,
    default: void 0
  }
});
const __unplugin_components_7 = defineComponent({
  name: "Space",
  props: spaceProps,
  setup(props) {
    const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Space", "-space", void 0, spaceLight$1, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Space", mergedRtlRef, mergedClsPrefixRef);
    return {
      useGap: ensureSupportFlexGap(),
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      margin: computed(() => {
        const { size } = props;
        if (Array.isArray(size)) {
          return {
            horizontal: size[0],
            vertical: size[1]
          };
        }
        if (typeof size === "number") {
          return {
            horizontal: size,
            vertical: size
          };
        }
        const { self: { [createKey("gap", size)]: gap } } = themeRef.value;
        const { row, col } = getGap(gap);
        return {
          horizontal: depx(col),
          vertical: depx(row)
        };
      })
    };
  },
  render() {
    const { vertical, align, inline, justify, itemStyle, margin, wrap, mergedClsPrefix, rtlEnabled, useGap, wrapItem, internalUseGap } = this;
    const children = flatten(getSlot(this));
    if (!children.length)
      return null;
    const horizontalMargin = `${margin.horizontal}px`;
    const semiHorizontalMargin = `${margin.horizontal / 2}px`;
    const verticalMargin = `${margin.vertical}px`;
    const semiVerticalMargin = `${margin.vertical / 2}px`;
    const lastIndex = children.length - 1;
    const isJustifySpace = justify.startsWith("space-");
    return h("div", { role: "none", class: [
      `${mergedClsPrefix}-space`,
      rtlEnabled && `${mergedClsPrefix}-space--rtl`
    ], style: {
      display: inline ? "inline-flex" : "flex",
      flexDirection: vertical ? "column" : "row",
      justifyContent: ["start", "end"].includes(justify) ? "flex-" + justify : justify,
      flexWrap: !wrap || vertical ? "nowrap" : "wrap",
      marginTop: useGap || vertical ? "" : `-${semiVerticalMargin}`,
      marginBottom: useGap || vertical ? "" : `-${semiVerticalMargin}`,
      alignItems: align,
      gap: useGap ? `${margin.vertical}px ${margin.horizontal}px` : ""
    } }, !wrapItem && (useGap || internalUseGap) ? children : children.map((child, index) => h("div", { role: "none", style: [
      itemStyle,
      {
        maxWidth: "100%"
      },
      useGap ? "" : vertical ? {
        marginBottom: index !== lastIndex ? verticalMargin : ""
      } : rtlEnabled ? {
        marginLeft: isJustifySpace ? justify === "space-between" && index === lastIndex ? "" : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : "",
        marginRight: isJustifySpace ? justify === "space-between" && index === 0 ? "" : semiHorizontalMargin : "",
        paddingTop: semiVerticalMargin,
        paddingBottom: semiVerticalMargin
      } : {
        marginRight: isJustifySpace ? justify === "space-between" && index === lastIndex ? "" : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : "",
        marginLeft: isJustifySpace ? justify === "space-between" && index === 0 ? "" : semiHorizontalMargin : "",
        paddingTop: semiVerticalMargin,
        paddingBottom: semiVerticalMargin
      }
    ] }, child)));
  }
});
export {
  __unplugin_components_7 as _,
  resolveSlot as a,
  isBrowser as b,
  call as c,
  depx as d,
  flatten as f,
  getMargin as g,
  isSlotEmpty as i,
  keysOf as k,
  pxfy as p,
  resolveWrappedSlot as r,
  useRtl as u
};
