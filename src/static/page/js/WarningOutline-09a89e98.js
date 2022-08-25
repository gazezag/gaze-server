import { o as onMounted, P as onBeforeUnmount, c as computed, aa as createInjectionKey, Q as inject, b as ref, N as useMemo, d as defineComponent, a1 as provide, az as getCurrentInstance, F as withDirectives, aD as CssRender, K as useSsrAdapter, Z as watch, $ as nextTick, X as toRef, aE as isMounted, j as h, aF as getNative, r as root, aG as overArg, aH as isPrototype, aI as isArrayLike, aJ as arrayLikeKeys, aK as isArray, i as isSymbol, aL as MapCache, t as toString, aM as toSource, aN as baseGetTag, aO as Map, aP as Symbol$1, aQ as eq, aR as Uint8Array, aS as isBuffer, aT as Stack, aU as isTypedArray, aV as isObjectLike, a as isObject, aW as isLength, aX as isIndex, aY as isArguments, aZ as identity, a_ as baseFor, a$ as arrayMap, V as c$1, e as cB, W as cNotM, f as cE, U as cM, b0 as cCB, u as useConfig, g as useTheme, a9 as popoverLight, w as watchEffect, G as vShow, h as useThemeClass, T as Transition, O as mergeProps, ar as Fragment, b1 as cloneVNode, C as createTextVNode, b2 as typographyLight, a0 as createKey, D as createElementBlock, A as openBlock, E as createBaseVNode } from "./main-8183f0bd.js";
import { i as isBrowser, m as modalBodyInjectionKey, d as drawerBodyInjectionKey, p as popoverBodyInjectionKey, o as on, b as off, g as getSlot, c as getFirstVNode, z as zindexable, L as LazyTeleport, e as clickoutside, f as formatLength, F as FocusTrap, X as XScrollbar, h as getFirstSlotVNode, k as keep } from "./Icon-6c59cc46.js";
import { i as isSlotEmpty, r as resolveWrappedSlot, c as call } from "./Space-2ff10da0.js";
import { a as useMergedState } from "./use-merged-state-12c965db.js";
let onceCbs = [];
const paramsMap = /* @__PURE__ */ new WeakMap();
function flushOnceCallbacks() {
  onceCbs.forEach((cb) => cb(...paramsMap.get(cb)));
  onceCbs = [];
}
function beforeNextFrameOnce(cb, ...params) {
  paramsMap.set(cb, params);
  if (onceCbs.includes(cb))
    return;
  onceCbs.push(cb) === 1 && requestAnimationFrame(flushOnceCallbacks);
}
let _isJsdom;
function isJsdom() {
  if (_isJsdom === void 0) {
    _isJsdom = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  return _isJsdom;
}
let fontsReady;
let isFontReady;
const init = () => {
  var _a, _b;
  fontsReady = isBrowser ? (_b = (_a = document) === null || _a === void 0 ? void 0 : _a.fonts) === null || _b === void 0 ? void 0 : _b.ready : void 0;
  isFontReady = false;
  if (fontsReady !== void 0) {
    void fontsReady.then(() => {
      isFontReady = true;
    });
  } else {
    isFontReady = true;
  }
};
init();
function onFontsReady(cb) {
  if (isFontReady)
    return;
  let deactivated = false;
  onMounted(() => {
    if (!isFontReady) {
      fontsReady === null || fontsReady === void 0 ? void 0 : fontsReady.then(() => {
        if (deactivated)
          return;
        cb();
      });
    }
  });
  onBeforeUnmount(() => {
    deactivated = true;
  });
}
function useCompitable(reactive, keys2) {
  return computed(() => {
    for (const key of keys2) {
      if (reactive[key] !== void 0)
        return reactive[key];
    }
    return reactive[keys2[keys2.length - 1]];
  });
}
const internalSelectionMenuInjectionKey = createInjectionKey("n-internal-select-menu");
const internalSelectionMenuBodyInjectionKey = createInjectionKey("n-internal-select-menu-body");
const teleportDisabled = "__disabled__";
function useAdjustedTo(props) {
  const modal = inject(modalBodyInjectionKey, null);
  const drawer = inject(drawerBodyInjectionKey, null);
  const popover = inject(popoverBodyInjectionKey, null);
  const selectMenu = inject(internalSelectionMenuBodyInjectionKey, null);
  const fullscreenElementRef = ref();
  if (typeof document !== "undefined") {
    fullscreenElementRef.value = document.fullscreenElement;
    const handleFullscreenChange = () => {
      fullscreenElementRef.value = document.fullscreenElement;
    };
    onMounted(() => {
      on("fullscreenchange", document, handleFullscreenChange);
    });
    onBeforeUnmount(() => {
      off("fullscreenchange", document, handleFullscreenChange);
    });
  }
  return useMemo(() => {
    var _a;
    const { to } = props;
    if (to !== void 0) {
      if (to === false)
        return teleportDisabled;
      if (to === true)
        return fullscreenElementRef.value || "body";
      return to;
    }
    if (modal === null || modal === void 0 ? void 0 : modal.value) {
      return (_a = modal.value.$el) !== null && _a !== void 0 ? _a : modal.value;
    }
    if (drawer === null || drawer === void 0 ? void 0 : drawer.value)
      return drawer.value;
    if (popover === null || popover === void 0 ? void 0 : popover.value)
      return popover.value;
    if (selectMenu === null || selectMenu === void 0 ? void 0 : selectMenu.value)
      return selectMenu.value;
    return to !== null && to !== void 0 ? to : fullscreenElementRef.value || "body";
  });
}
useAdjustedTo.tdkey = teleportDisabled;
useAdjustedTo.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
let viewMeasurer = null;
function ensureViewBoundingRect() {
  if (viewMeasurer === null) {
    viewMeasurer = document.getElementById("v-binder-view-measurer");
    if (viewMeasurer === null) {
      viewMeasurer = document.createElement("div");
      viewMeasurer.id = "v-binder-view-measurer";
      const { style: style2 } = viewMeasurer;
      style2.position = "fixed";
      style2.left = "0";
      style2.right = "0";
      style2.top = "0";
      style2.bottom = "0";
      style2.pointerEvents = "none";
      style2.visibility = "hidden";
      document.body.appendChild(viewMeasurer);
    }
  }
  return viewMeasurer.getBoundingClientRect();
}
function getPointRect(x, y) {
  const viewRect = ensureViewBoundingRect();
  return {
    top: y,
    left: x,
    height: 0,
    width: 0,
    right: viewRect.width - x,
    bottom: viewRect.height - y
  };
}
function getRect(el) {
  const elRect = el.getBoundingClientRect();
  const viewRect = ensureViewBoundingRect();
  return {
    left: elRect.left - viewRect.left,
    top: elRect.top - viewRect.top,
    bottom: viewRect.height + viewRect.top - elRect.bottom,
    right: viewRect.width + viewRect.left - elRect.right,
    width: elRect.width,
    height: elRect.height
  };
}
function getParentNode(node) {
  if (node.nodeType === 9) {
    return null;
  }
  return node.parentNode;
}
function getScrollParent(node) {
  if (node === null)
    return null;
  const parentNode = getParentNode(node);
  if (parentNode === null) {
    return null;
  }
  if (parentNode.nodeType === 9) {
    return document;
  }
  if (parentNode.nodeType === 1) {
    const { overflow, overflowX, overflowY } = getComputedStyle(parentNode);
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return parentNode;
    }
  }
  return getScrollParent(parentNode);
}
const Binder = defineComponent({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    var _a;
    provide("VBinder", (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
    const VBinder2 = inject("VBinder", null);
    const targetRef = ref(null);
    const setTargetRef = (el) => {
      targetRef.value = el;
      if (VBinder2 && props.syncTargetWithParent) {
        VBinder2.setTargetRef(el);
      }
    };
    let scrollableNodes = [];
    const ensureScrollListener = () => {
      let cursor = targetRef.value;
      while (true) {
        cursor = getScrollParent(cursor);
        if (cursor === null)
          break;
        scrollableNodes.push(cursor);
      }
      for (const el of scrollableNodes) {
        on("scroll", el, onScroll, true);
      }
    };
    const removeScrollListeners = () => {
      for (const el of scrollableNodes) {
        off("scroll", el, onScroll, true);
      }
      scrollableNodes = [];
    };
    const followerScrollListeners = /* @__PURE__ */ new Set();
    const addScrollListener = (listener) => {
      if (followerScrollListeners.size === 0) {
        ensureScrollListener();
      }
      if (!followerScrollListeners.has(listener)) {
        followerScrollListeners.add(listener);
      }
    };
    const removeScrollListener = (listener) => {
      if (followerScrollListeners.has(listener)) {
        followerScrollListeners.delete(listener);
      }
      if (followerScrollListeners.size === 0) {
        removeScrollListeners();
      }
    };
    const onScroll = () => {
      beforeNextFrameOnce(onScrollRaf);
    };
    const onScrollRaf = () => {
      followerScrollListeners.forEach((listener) => listener());
    };
    const followerResizeListeners = /* @__PURE__ */ new Set();
    const addResizeListener = (listener) => {
      if (followerResizeListeners.size === 0) {
        on("resize", window, onResize);
      }
      if (!followerResizeListeners.has(listener)) {
        followerResizeListeners.add(listener);
      }
    };
    const removeResizeListener = (listener) => {
      if (followerResizeListeners.has(listener)) {
        followerResizeListeners.delete(listener);
      }
      if (followerResizeListeners.size === 0) {
        off("resize", window, onResize);
      }
    };
    const onResize = () => {
      followerResizeListeners.forEach((listener) => listener());
    };
    onBeforeUnmount(() => {
      off("resize", window, onResize);
      removeScrollListeners();
    });
    return {
      targetRef,
      setTargetRef,
      addScrollListener,
      removeScrollListener,
      addResizeListener,
      removeResizeListener
    };
  },
  render() {
    return getSlot("binder", this.$slots);
  }
});
const VBinder = Binder;
const VTarget = defineComponent({
  name: "Target",
  setup() {
    const { setTargetRef, syncTarget } = inject("VBinder");
    const setTargetDirective = {
      mounted: setTargetRef,
      updated: setTargetRef
    };
    return {
      syncTarget,
      setTargetDirective
    };
  },
  render() {
    const { syncTarget, setTargetDirective } = this;
    if (syncTarget) {
      return withDirectives(getFirstVNode("follower", this.$slots), [
        [setTargetDirective]
      ]);
    }
    return getFirstVNode("follower", this.$slots);
  }
});
const ctxKey = "@@mmoContext";
const mousemoveoutside = {
  mounted(el, { value }) {
    el[ctxKey] = {
      handler: void 0
    };
    if (typeof value === "function") {
      el[ctxKey].handler = value;
      on("mousemoveoutside", el, value);
    }
  },
  updated(el, { value }) {
    const ctx = el[ctxKey];
    if (typeof value === "function") {
      if (ctx.handler) {
        if (ctx.handler !== value) {
          off("mousemoveoutside", el, ctx.handler);
          ctx.handler = value;
          on("mousemoveoutside", el, value);
        }
      } else {
        el[ctxKey].handler = value;
        on("mousemoveoutside", el, value);
      }
    } else {
      if (ctx.handler) {
        off("mousemoveoutside", el, ctx.handler);
        ctx.handler = void 0;
      }
    }
  },
  unmounted(el) {
    const { handler } = el[ctxKey];
    if (handler) {
      off("mousemoveoutside", el, handler);
    }
    el[ctxKey].handler = void 0;
  }
};
const mousemoveoutside$1 = mousemoveoutside;
const { c } = CssRender();
const cssrAnchorMetaName = "vueuc-style";
const oppositionPositions = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const oppositeAligns = {
  start: "end",
  center: "center",
  end: "start"
};
const propToCompare = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
};
const transformOrigins = {
  "bottom-start": "top left",
  bottom: "top center",
  "bottom-end": "top right",
  "top-start": "bottom left",
  top: "bottom center",
  "top-end": "bottom right",
  "right-start": "top left",
  right: "center left",
  "right-end": "bottom left",
  "left-start": "top right",
  left: "center right",
  "left-end": "bottom right"
};
const overlapTransformOrigin = {
  "bottom-start": "bottom left",
  bottom: "bottom center",
  "bottom-end": "bottom right",
  "top-start": "top left",
  top: "top center",
  "top-end": "top right",
  "right-start": "top right",
  right: "center right",
  "right-end": "bottom right",
  "left-start": "top left",
  left: "center left",
  "left-end": "bottom left"
};
const oppositeAlignCssPositionProps = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
};
const keepOffsetDirection = {
  top: true,
  bottom: false,
  left: true,
  right: false
};
const cssPositionToOppositeAlign = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, shift, flip, overlap) {
  if (!flip || overlap) {
    return { placement, top: 0, left: 0 };
  }
  const [position, align] = placement.split("-");
  let properAlign = align !== null && align !== void 0 ? align : "center";
  let properOffset = {
    top: 0,
    left: 0
  };
  const deriveOffset = (oppositeAlignCssSizeProp, alignCssPositionProp, offsetVertically2) => {
    let left = 0;
    let top = 0;
    const diff = followerRect[oppositeAlignCssSizeProp] - targetRect[alignCssPositionProp] - targetRect[oppositeAlignCssSizeProp];
    if (diff > 0 && shift) {
      if (offsetVertically2) {
        top = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
      } else {
        left = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
      }
    }
    return {
      left,
      top
    };
  };
  const offsetVertically = position === "left" || position === "right";
  if (properAlign !== "center") {
    const oppositeAlignCssPositionProp = oppositeAlignCssPositionProps[placement];
    const currentAlignCssPositionProp = oppositionPositions[oppositeAlignCssPositionProp];
    const oppositeAlignCssSizeProp = propToCompare[oppositeAlignCssPositionProp];
    if (followerRect[oppositeAlignCssSizeProp] > targetRect[oppositeAlignCssSizeProp]) {
      if (targetRect[oppositeAlignCssPositionProp] + targetRect[oppositeAlignCssSizeProp] < followerRect[oppositeAlignCssSizeProp]) {
        const followerOverTargetSize = (followerRect[oppositeAlignCssSizeProp] - targetRect[oppositeAlignCssSizeProp]) / 2;
        if (targetRect[oppositeAlignCssPositionProp] < followerOverTargetSize || targetRect[currentAlignCssPositionProp] < followerOverTargetSize) {
          if (targetRect[oppositeAlignCssPositionProp] < targetRect[currentAlignCssPositionProp]) {
            properAlign = oppositeAligns[align];
            properOffset = deriveOffset(oppositeAlignCssSizeProp, currentAlignCssPositionProp, offsetVertically);
          } else {
            properOffset = deriveOffset(oppositeAlignCssSizeProp, oppositeAlignCssPositionProp, offsetVertically);
          }
        } else {
          properAlign = "center";
        }
      }
    } else if (followerRect[oppositeAlignCssSizeProp] < targetRect[oppositeAlignCssSizeProp]) {
      if (targetRect[currentAlignCssPositionProp] < 0 && targetRect[oppositeAlignCssPositionProp] > targetRect[currentAlignCssPositionProp]) {
        properAlign = oppositeAligns[align];
      }
    }
  } else {
    const possibleAlternativeAlignCssPositionProp1 = position === "bottom" || position === "top" ? "left" : "top";
    const possibleAlternativeAlignCssPositionProp2 = oppositionPositions[possibleAlternativeAlignCssPositionProp1];
    const alternativeAlignCssSizeProp = propToCompare[possibleAlternativeAlignCssPositionProp1];
    const followerOverTargetSize = (followerRect[alternativeAlignCssSizeProp] - targetRect[alternativeAlignCssSizeProp]) / 2;
    if (targetRect[possibleAlternativeAlignCssPositionProp1] < followerOverTargetSize || targetRect[possibleAlternativeAlignCssPositionProp2] < followerOverTargetSize) {
      if (targetRect[possibleAlternativeAlignCssPositionProp1] > targetRect[possibleAlternativeAlignCssPositionProp2]) {
        properAlign = cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp1];
        properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp1, offsetVertically);
      } else {
        properAlign = cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp2];
        properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp2, offsetVertically);
      }
    }
  }
  let properPosition = position;
  if (targetRect[position] < followerRect[propToCompare[position]] && targetRect[position] < targetRect[oppositionPositions[position]]) {
    properPosition = oppositionPositions[position];
  }
  return {
    placement: properAlign !== "center" ? `${properPosition}-${properAlign}` : properPosition,
    left: properOffset.left,
    top: properOffset.top
  };
}
function getProperTransformOrigin(placement, overlap) {
  if (overlap)
    return overlapTransformOrigin[placement];
  return transformOrigins[placement];
}
function getOffset(placement, offsetRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap) {
  if (overlap) {
    switch (placement) {
      case "bottom-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  }
  switch (placement) {
    case "bottom-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2 + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2 + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2 + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2 + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const style$2 = c([
  c(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  c(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    c("> *", {
      pointerEvents: "all"
    })
  ])
]);
const VFollower = defineComponent({
  name: "Follower",
  inheritAttrs: false,
  props: {
    show: Boolean,
    enabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom"
    },
    syncTrigger: {
      type: Array,
      default: ["resize", "scroll"]
    },
    to: [String, Object],
    flip: {
      type: Boolean,
      default: true
    },
    internalShift: Boolean,
    x: Number,
    y: Number,
    width: String,
    minWidth: String,
    containerClass: String,
    teleportDisabled: Boolean,
    zindexable: {
      type: Boolean,
      default: true
    },
    zIndex: Number,
    overlap: Boolean
  },
  setup(props) {
    const VBinder2 = inject("VBinder");
    const mergedEnabledRef = useMemo(() => {
      return props.enabled !== void 0 ? props.enabled : props.show;
    });
    const followerRef = ref(null);
    const offsetContainerRef = ref(null);
    const ensureListeners = () => {
      const { syncTrigger } = props;
      if (syncTrigger.includes("scroll")) {
        VBinder2.addScrollListener(syncPosition);
      }
      if (syncTrigger.includes("resize")) {
        VBinder2.addResizeListener(syncPosition);
      }
    };
    const removeListeners = () => {
      VBinder2.removeScrollListener(syncPosition);
      VBinder2.removeResizeListener(syncPosition);
    };
    onMounted(() => {
      if (mergedEnabledRef.value) {
        syncPosition();
        ensureListeners();
      }
    });
    const ssrAdapter = useSsrAdapter();
    style$2.mount({
      id: "vueuc/binder",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onBeforeUnmount(() => {
      removeListeners();
    });
    onFontsReady(() => {
      if (mergedEnabledRef.value) {
        syncPosition();
      }
    });
    const syncPosition = () => {
      if (!mergedEnabledRef.value) {
        return;
      }
      const follower = followerRef.value;
      if (follower === null)
        return;
      const target = VBinder2.targetRef;
      const { x, y, overlap } = props;
      const targetRect = x !== void 0 && y !== void 0 ? getPointRect(x, y) : getRect(target);
      follower.style.setProperty("--v-target-width", `${Math.round(targetRect.width)}px`);
      follower.style.setProperty("--v-target-height", `${Math.round(targetRect.height)}px`);
      const { width, minWidth, placement, internalShift, flip } = props;
      follower.setAttribute("v-placement", placement);
      if (overlap) {
        follower.setAttribute("v-overlap", "");
      } else {
        follower.removeAttribute("v-overlap");
      }
      const { style: style2 } = follower;
      if (width === "target") {
        style2.width = `${targetRect.width}px`;
      } else if (width !== void 0) {
        style2.width = width;
      } else {
        style2.width = "";
      }
      if (minWidth === "target") {
        style2.minWidth = `${targetRect.width}px`;
      } else if (minWidth !== void 0) {
        style2.minWidth = minWidth;
      } else {
        style2.minWidth = "";
      }
      const followerRect = getRect(follower);
      const offsetContainerRect = getRect(offsetContainerRef.value);
      const { left: offsetLeftToStandardPlacement, top: offsetTopToStandardPlacement, placement: properPlacement } = getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, internalShift, flip, overlap);
      const properTransformOrigin = getProperTransformOrigin(properPlacement, overlap);
      const { left, top, transform } = getOffset(properPlacement, offsetContainerRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap);
      follower.setAttribute("v-placement", properPlacement);
      follower.style.setProperty("--v-offset-left", `${Math.round(offsetLeftToStandardPlacement)}px`);
      follower.style.setProperty("--v-offset-top", `${Math.round(offsetTopToStandardPlacement)}px`);
      follower.style.transform = `translateX(${left}) translateY(${top}) ${transform}`;
      follower.style.setProperty("--v-transform-origin", properTransformOrigin);
      follower.style.transformOrigin = properTransformOrigin;
    };
    watch(mergedEnabledRef, (value) => {
      if (value) {
        ensureListeners();
        syncOnNextTick();
      } else {
        removeListeners();
      }
    });
    const syncOnNextTick = () => {
      nextTick().then(syncPosition).catch((e) => console.error(e));
    };
    [
      "placement",
      "x",
      "y",
      "internalShift",
      "flip",
      "width",
      "overlap",
      "minWidth"
    ].forEach((prop) => {
      watch(toRef(props, prop), syncPosition);
    });
    ["teleportDisabled"].forEach((prop) => {
      watch(toRef(props, prop), syncOnNextTick);
    });
    watch(toRef(props, "syncTrigger"), (value) => {
      if (!value.includes("resize")) {
        VBinder2.removeResizeListener(syncPosition);
      } else {
        VBinder2.addResizeListener(syncPosition);
      }
      if (!value.includes("scroll")) {
        VBinder2.removeScrollListener(syncPosition);
      } else {
        VBinder2.addScrollListener(syncPosition);
      }
    });
    const isMountedRef = isMounted();
    const mergedToRef = useMemo(() => {
      const { to } = props;
      if (to !== void 0)
        return to;
      if (isMountedRef.value) {
        return void 0;
      }
      return void 0;
    });
    return {
      VBinder: VBinder2,
      mergedEnabled: mergedEnabledRef,
      offsetContainerRef,
      followerRef,
      mergedTo: mergedToRef,
      syncPosition
    };
  },
  render() {
    return h(LazyTeleport, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var _a, _b;
        const vNode = h("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          h("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a))
        ]);
        if (this.zindexable) {
          return withDirectives(vNode, [
            [
              zindexable,
              {
                enabled: this.mergedEnabled,
                zIndex: this.zIndex
              }
            ]
          ]);
        }
        return vNode;
      }
    });
  }
});
var WeakMap$1 = getNative(root, "WeakMap");
const WeakMap$2 = WeakMap$1;
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
const stringToPath$1 = stringToPath;
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
const getSymbols$1 = getSymbols;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var DataView = getNative(root, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root, "Set");
const Set$2 = Set$1;
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map && getTag(new Map()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$1 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
const baseEach$1 = baseEach;
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
const oppositePlacement = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const arrowSize = "var(--n-arrow-height) * 1.414";
const style$1 = c$1([cB("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `, [c$1(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), cNotM("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [cNotM("scrollable", [cNotM("show-header-or-footer", "padding: var(--n-padding);")])]), cE("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cE("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cM("scrollable, show-header-or-footer", [cE("content", `
 padding: var(--n-padding);
 `)])]), cB("popover-shared", `
 transform-origin: inherit;
 `, [
  cB("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [cB("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${arrowSize});
 height: calc(${arrowSize});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  c$1("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  c$1("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  c$1("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  c$1("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), placementStyle("top-start", `
 top: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("top-start")} - var(--v-offset-left));
 `), placementStyle("top", `
 top: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle("top-end", `
 top: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("top-end")} + var(--v-offset-left));
 `), placementStyle("bottom-start", `
 bottom: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("bottom-start")} - var(--v-offset-left));
 `), placementStyle("bottom", `
 bottom: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle("bottom-end", `
 bottom: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("bottom-end")} + var(--v-offset-left));
 `), placementStyle("left-start", `
 left: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("left-start")} - var(--v-offset-top));
 `), placementStyle("left", `
 left: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle("left-end", `
 left: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("left-end")} + var(--v-offset-top));
 `), placementStyle("right-start", `
 right: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("right-start")} - var(--v-offset-top));
 `), placementStyle("right", `
 right: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle("right-end", `
 right: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("right-end")} + var(--v-offset-top));
 `), ...map({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (placements, direction) => {
  const isVertical = ["right", "left"].includes(direction);
  const sizeType = isVertical ? "width" : "height";
  return placements.map((placement) => {
    const isReverse = placement.split("-")[1] === "end";
    const targetSize = `var(--v-target-${sizeType}, 0px)`;
    const centerOffset = `calc((${targetSize} - ${arrowSize}) / 2)`;
    const offset = getArrowOffset(placement);
    return c$1(`[v-placement="${placement}"] >`, [cB("popover-shared", [cM("center-arrow", [cB("popover-arrow", `${direction}: calc(max(${centerOffset}, ${offset}) ${isReverse ? "+" : "-"} var(--v-offset-${isVertical ? "left" : "top"}));`)])])]);
  });
})]);
function getArrowOffset(placement) {
  return ["top", "bottom"].includes(placement.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function placementStyle(placement, arrowStyleLiteral) {
  const position = placement.split("-")[0];
  const sizeStyle = ["top", "bottom"].includes(position) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return c$1(`[v-placement="${placement}"] >`, [cB("popover-shared", `
 margin-${oppositePlacement[position]}: var(--n-space);
 `, [cM("show-arrow", `
 margin-${oppositePlacement[position]}: var(--n-space-arrow);
 `), cM("overlap", `
 margin: 0;
 `), cCB("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${position}: 100%;
 ${oppositePlacement[position]}: auto;
 ${sizeStyle}
 `, [cB("popover-arrow", arrowStyleLiteral)])])]);
}
const popoverBodyProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  show: Boolean,
  trigger: String,
  showArrow: Boolean,
  delay: Number,
  duration: Number,
  raw: Boolean,
  arrowPointToCenter: Boolean,
  arrowStyle: [String, Object],
  displayDirective: String,
  x: Number,
  y: Number,
  flip: Boolean,
  overlap: Boolean,
  placement: String,
  width: [Number, String],
  keepAliveOnHover: Boolean,
  scrollable: Boolean,
  contentStyle: [Object, String],
  headerStyle: [Object, String],
  footerStyle: [Object, String],
  internalDeactivateImmediately: Boolean,
  animated: Boolean,
  onClickoutside: Function,
  internalTrapFocus: Boolean,
  internalOnAfterLeave: Function,
  minWidth: Number,
  maxWidth: Number
});
const renderArrow = ({ arrowStyle, clsPrefix }) => {
  return h(
    "div",
    { key: "__popover-arrow__", class: `${clsPrefix}-popover-arrow-wrapper` },
    h("div", { class: `${clsPrefix}-popover-arrow`, style: arrowStyle })
  );
};
const NPopoverBody = defineComponent({
  name: "PopoverBody",
  inheritAttrs: false,
  props: popoverBodyProps,
  setup(props, { slots, attrs }) {
    const { namespaceRef, mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Popover", "-popover", style$1, popoverLight, props, mergedClsPrefixRef);
    const followerRef = ref(null);
    const NPopover2 = inject("NPopover");
    const bodyRef = ref(null);
    const followerEnabledRef = ref(props.show);
    const displayedRef = ref(false);
    watchEffect(() => {
      const { show } = props;
      if (show && !isJsdom() && !props.internalDeactivateImmediately) {
        displayedRef.value = true;
      }
    });
    const directivesRef = computed(() => {
      const { trigger, onClickoutside } = props;
      const directives = [];
      const { positionManuallyRef: { value: positionManually } } = NPopover2;
      if (!positionManually) {
        if (trigger === "click" && !onClickoutside) {
          directives.push([
            clickoutside,
            handleClickOutside,
            void 0,
            { capture: true }
          ]);
        }
        if (trigger === "hover") {
          directives.push([mousemoveoutside$1, handleMouseMoveOutside]);
        }
      }
      if (onClickoutside) {
        directives.push([
          clickoutside,
          handleClickOutside,
          void 0,
          { capture: true }
        ]);
      }
      if (props.displayDirective === "show" || props.animated && displayedRef.value) {
        directives.push([vShow, props.show]);
      }
      return directives;
    });
    const styleRef = computed(() => {
      const width = props.width === "trigger" ? void 0 : formatLength(props.width);
      const style2 = [];
      if (width) {
        style2.push({ width });
      }
      const { maxWidth, minWidth } = props;
      if (maxWidth) {
        style2.push({ maxWidth: formatLength(maxWidth) });
      }
      if (minWidth) {
        style2.push({ maxWidth: formatLength(minWidth) });
      }
      if (!inlineThemeDisabled) {
        style2.push(cssVarsRef.value);
      }
      return style2;
    });
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut, cubicBezierEaseIn, cubicBezierEaseOut }, self: { space, spaceArrow, padding, fontSize, textColor, dividerColor, color, boxShadow, borderRadius, arrowHeight, arrowOffset, arrowOffsetVertical } } = themeRef.value;
      return {
        "--n-box-shadow": boxShadow,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-bezier-ease-in": cubicBezierEaseIn,
        "--n-bezier-ease-out": cubicBezierEaseOut,
        "--n-font-size": fontSize,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-divider-color": dividerColor,
        "--n-border-radius": borderRadius,
        "--n-arrow-height": arrowHeight,
        "--n-arrow-offset": arrowOffset,
        "--n-arrow-offset-vertical": arrowOffsetVertical,
        "--n-padding": padding,
        "--n-space": space,
        "--n-space-arrow": spaceArrow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("popover", void 0, cssVarsRef, props) : void 0;
    NPopover2.setBodyInstance({
      syncPosition
    });
    onBeforeUnmount(() => {
      NPopover2.setBodyInstance(null);
    });
    watch(toRef(props, "show"), (value) => {
      if (props.animated)
        return;
      if (value) {
        followerEnabledRef.value = true;
      } else {
        followerEnabledRef.value = false;
      }
    });
    function syncPosition() {
      var _a;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function handleMouseEnter(e) {
      if (props.trigger === "hover" && props.keepAliveOnHover && props.show) {
        NPopover2.handleMouseEnter(e);
      }
    }
    function handleMouseLeave(e) {
      if (props.trigger === "hover" && props.keepAliveOnHover) {
        NPopover2.handleMouseLeave(e);
      }
    }
    function handleMouseMoveOutside(e) {
      if (props.trigger === "hover" && !getTriggerElement().contains(e.target)) {
        NPopover2.handleMouseMoveOutside(e);
      }
    }
    function handleClickOutside(e) {
      if (props.trigger === "click" && !getTriggerElement().contains(e.target) || props.onClickoutside) {
        NPopover2.handleClickOutside(e);
      }
    }
    function getTriggerElement() {
      return NPopover2.getTriggerElement();
    }
    provide(popoverBodyInjectionKey, bodyRef);
    provide(drawerBodyInjectionKey, null);
    provide(modalBodyInjectionKey, null);
    function renderContentNode() {
      themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender();
      const shouldRenderDom = props.displayDirective === "show" || props.show || props.animated && displayedRef.value;
      if (!shouldRenderDom) {
        return null;
      }
      let contentNode;
      const renderBody = NPopover2.internalRenderBodyRef.value;
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      if (!renderBody) {
        const { value: extraClass } = NPopover2.extraClassRef;
        const { internalTrapFocus } = props;
        const hasHeaderOrFooter = !isSlotEmpty(slots.header) || !isSlotEmpty(slots.footer);
        const renderContentInnerNode = () => {
          var _a;
          const body = hasHeaderOrFooter ? h(
            Fragment,
            null,
            resolveWrappedSlot(slots.header, (children) => {
              return children ? h("div", { class: `${mergedClsPrefix}-popover__header`, style: props.headerStyle }, children) : null;
            }),
            resolveWrappedSlot(slots.default, (children) => {
              return children ? h("div", { class: `${mergedClsPrefix}-popover__content`, style: props.contentStyle }, slots) : null;
            }),
            resolveWrappedSlot(slots.footer, (children) => {
              return children ? h("div", { class: `${mergedClsPrefix}-popover__footer`, style: props.footerStyle }, children) : null;
            })
          ) : props.scrollable ? (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots) : h("div", { class: `${mergedClsPrefix}-popover__content`, style: props.contentStyle }, slots);
          const maybeScrollableBody = props.scrollable ? h(XScrollbar, { contentClass: hasHeaderOrFooter ? void 0 : `${mergedClsPrefix}-popover__content`, contentStyle: hasHeaderOrFooter ? void 0 : props.contentStyle }, {
            default: () => body
          }) : body;
          const arrow = props.showArrow ? renderArrow({
            arrowStyle: props.arrowStyle,
            clsPrefix: mergedClsPrefix
          }) : null;
          return [maybeScrollableBody, arrow];
        };
        contentNode = h("div", mergeProps({
          class: [
            `${mergedClsPrefix}-popover`,
            `${mergedClsPrefix}-popover-shared`,
            themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value,
            extraClass.map((v) => `${mergedClsPrefix}-${v}`),
            {
              [`${mergedClsPrefix}-popover--scrollable`]: props.scrollable,
              [`${mergedClsPrefix}-popover--show-header-or-footer`]: hasHeaderOrFooter,
              [`${mergedClsPrefix}-popover--raw`]: props.raw,
              [`${mergedClsPrefix}-popover-shared--overlap`]: props.overlap,
              [`${mergedClsPrefix}-popover-shared--show-arrow`]: props.showArrow,
              [`${mergedClsPrefix}-popover-shared--center-arrow`]: props.arrowPointToCenter
            }
          ],
          ref: bodyRef,
          style: styleRef.value,
          onKeydown: NPopover2.handleKeydown,
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        }, attrs), internalTrapFocus ? h(FocusTrap, { active: props.show, autoFocus: true }, { default: renderContentInnerNode }) : renderContentInnerNode());
      } else {
        contentNode = renderBody(
          [
            `${mergedClsPrefix}-popover-shared`,
            themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value,
            props.overlap && `${mergedClsPrefix}-popover-shared--overlap`,
            props.showArrow && `${mergedClsPrefix}-popover-shared--show-arrow`,
            props.arrowPointToCenter && `${mergedClsPrefix}-popover-shared--center-arrow`
          ],
          bodyRef,
          styleRef.value,
          handleMouseEnter,
          handleMouseLeave
        );
      }
      return withDirectives(contentNode, directivesRef.value);
    }
    return {
      displayed: displayedRef,
      namespace: namespaceRef,
      isMounted: NPopover2.isMountedRef,
      zIndex: NPopover2.zIndexRef,
      followerRef,
      adjustedTo: useAdjustedTo(props),
      followerEnabled: followerEnabledRef,
      renderContentNode
    };
  },
  render() {
    return h(VFollower, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey }, {
      default: () => {
        return this.animated ? h(Transition, {
          name: "popover-transition",
          appear: this.isMounted,
          onEnter: () => {
            this.followerEnabled = true;
          },
          onAfterLeave: () => {
            var _a;
            (_a = this.internalOnAfterLeave) === null || _a === void 0 ? void 0 : _a.call(this);
            this.followerEnabled = false;
            this.displayed = false;
          }
        }, {
          default: this.renderContentNode
        }) : this.renderContentNode();
      }
    });
  }
});
const bodyPropKeys = Object.keys(popoverBodyProps);
const triggerEventMap = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function appendEvents(vNode, trigger, events) {
  triggerEventMap[trigger].forEach((eventName) => {
    if (!vNode.props)
      vNode.props = {};
    else {
      vNode.props = Object.assign({}, vNode.props);
    }
    const originalHandler = vNode.props[eventName];
    const handler = events[eventName];
    if (!originalHandler)
      vNode.props[eventName] = handler;
    else {
      vNode.props[eventName] = (...args) => {
        originalHandler(...args);
        handler(...args);
      };
    }
  });
}
const textVNodeType = createTextVNode("").type;
const popoverBaseProps = {
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String,
    default: "hover"
  },
  delay: {
    type: Number,
    default: 100
  },
  duration: {
    type: Number,
    default: 100
  },
  raw: Boolean,
  placement: {
    type: String,
    default: "top"
  },
  x: Number,
  y: Number,
  arrowPointToCenter: Boolean,
  disabled: Boolean,
  getDisabled: Function,
  displayDirective: {
    type: String,
    default: "if"
  },
  arrowStyle: [String, Object],
  flip: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: true
  },
  width: {
    type: [Number, String],
    default: void 0
  },
  overlap: Boolean,
  keepAliveOnHover: {
    type: Boolean,
    default: true
  },
  zIndex: Number,
  to: useAdjustedTo.propTo,
  scrollable: Boolean,
  contentStyle: [Object, String],
  headerStyle: [Object, String],
  footerStyle: [Object, String],
  onClickoutside: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  internalDeactivateImmediately: Boolean,
  internalSyncTargetWithParent: Boolean,
  internalInheritedEventHandlers: {
    type: Array,
    default: () => []
  },
  internalTrapFocus: Boolean,
  internalExtraClass: {
    type: Array,
    default: () => []
  },
  onShow: [Function, Array],
  onHide: [Function, Array],
  arrow: {
    type: Boolean,
    default: void 0
  },
  minWidth: Number,
  maxWidth: Number
};
const popoverProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), popoverBaseProps), { internalOnAfterLeave: Function, internalRenderBody: Function });
const NPopover = defineComponent({
  name: "Popover",
  inheritAttrs: false,
  props: popoverProps,
  __popover__: true,
  setup(props) {
    const isMountedRef = isMounted();
    const binderInstRef = ref(null);
    const controlledShowRef = computed(() => props.show);
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowWithoutDisabledRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const mergedShowConsideringDisabledPropRef = useMemo(() => {
      if (props.disabled)
        return false;
      return mergedShowWithoutDisabledRef.value;
    });
    const getMergedDisabled = () => {
      if (props.disabled)
        return true;
      const { getDisabled } = props;
      if (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled())
        return true;
      return false;
    };
    const getMergedShow = () => {
      if (getMergedDisabled())
        return false;
      return mergedShowWithoutDisabledRef.value;
    };
    const compatibleShowArrowRef = useCompitable(props, ["arrow", "showArrow"]);
    const mergedShowArrowRef = computed(() => {
      if (props.overlap)
        return false;
      return compatibleShowArrowRef.value;
    });
    let bodyInstance = null;
    const showTimerIdRef = ref(null);
    const hideTimerIdRef = ref(null);
    const positionManuallyRef = useMemo(() => {
      return props.x !== void 0 && props.y !== void 0;
    });
    function doUpdateShow(value) {
      const { "onUpdate:show": _onUpdateShow, onUpdateShow, onShow, onHide } = props;
      uncontrolledShowRef.value = value;
      if (_onUpdateShow) {
        call(_onUpdateShow, value);
      }
      if (onUpdateShow) {
        call(onUpdateShow, value);
      }
      if (value && onShow) {
        call(onShow, true);
      }
      if (value && onHide) {
        call(onHide, false);
      }
    }
    function syncPosition() {
      if (bodyInstance) {
        bodyInstance.syncPosition();
      }
    }
    function clearShowTimer() {
      const { value: showTimerId } = showTimerIdRef;
      if (showTimerId) {
        window.clearTimeout(showTimerId);
        showTimerIdRef.value = null;
      }
    }
    function clearHideTimer() {
      const { value: hideTimerId } = hideTimerIdRef;
      if (hideTimerId) {
        window.clearTimeout(hideTimerId);
        hideTimerIdRef.value = null;
      }
    }
    function handleFocus() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "focus" && !mergedDisabled) {
        if (getMergedShow())
          return;
        doUpdateShow(true);
      }
    }
    function handleBlur() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "focus" && !mergedDisabled) {
        if (!getMergedShow())
          return;
        doUpdateShow(false);
      }
    }
    function handleMouseEnter() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "hover" && !mergedDisabled) {
        clearHideTimer();
        if (showTimerIdRef.value !== null)
          return;
        if (getMergedShow())
          return;
        const delayCallback = () => {
          doUpdateShow(true);
          showTimerIdRef.value = null;
        };
        const { delay } = props;
        if (delay === 0) {
          delayCallback();
        } else {
          showTimerIdRef.value = window.setTimeout(delayCallback, delay);
        }
      }
    }
    function handleMouseLeave() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "hover" && !mergedDisabled) {
        clearShowTimer();
        if (hideTimerIdRef.value !== null)
          return;
        if (!getMergedShow())
          return;
        const delayedCallback = () => {
          doUpdateShow(false);
          hideTimerIdRef.value = null;
        };
        const { duration } = props;
        if (duration === 0) {
          delayedCallback();
        } else {
          hideTimerIdRef.value = window.setTimeout(delayedCallback, duration);
        }
      }
    }
    function handleMouseMoveOutside() {
      handleMouseLeave();
    }
    function handleClickOutside(e) {
      var _a;
      if (!getMergedShow())
        return;
      if (props.trigger === "click") {
        clearShowTimer();
        clearHideTimer();
        doUpdateShow(false);
      }
      (_a = props.onClickoutside) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleClick() {
      if (props.trigger === "click" && !getMergedDisabled()) {
        clearShowTimer();
        clearHideTimer();
        const nextShow = !getMergedShow();
        doUpdateShow(nextShow);
      }
    }
    function handleKeydown(e) {
      if (!props.internalTrapFocus)
        return;
      if (e.key === "Escape") {
        clearShowTimer();
        clearHideTimer();
        doUpdateShow(false);
      }
    }
    function setShow(value) {
      uncontrolledShowRef.value = value;
    }
    function getTriggerElement() {
      var _a;
      return (_a = binderInstRef.value) === null || _a === void 0 ? void 0 : _a.targetRef;
    }
    function setBodyInstance(value) {
      bodyInstance = value;
    }
    provide("NPopover", {
      getTriggerElement,
      handleKeydown,
      handleMouseEnter,
      handleMouseLeave,
      handleClickOutside,
      handleMouseMoveOutside,
      setBodyInstance,
      positionManuallyRef,
      isMountedRef,
      zIndexRef: toRef(props, "zIndex"),
      extraClassRef: toRef(props, "internalExtraClass"),
      internalRenderBodyRef: toRef(props, "internalRenderBody")
    });
    return {
      binderInstRef,
      positionManually: positionManuallyRef,
      mergedShowConsideringDisabledProp: mergedShowConsideringDisabledPropRef,
      uncontrolledShow: uncontrolledShowRef,
      mergedShowArrow: mergedShowArrowRef,
      getMergedShow,
      setShow,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      handleFocus,
      handleBlur,
      syncPosition
    };
  },
  render() {
    var _a;
    const { positionManually, $slots: slots } = this;
    let triggerVNode;
    let popoverInside = false;
    if (!positionManually) {
      if (slots.activator) {
        triggerVNode = getFirstSlotVNode(slots, "activator");
      } else {
        triggerVNode = getFirstSlotVNode(slots, "trigger");
      }
      if (triggerVNode) {
        triggerVNode = cloneVNode(triggerVNode);
        triggerVNode = triggerVNode.type === textVNodeType ? h("span", [triggerVNode]) : triggerVNode;
        const handlers = {
          onClick: this.handleClick,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        };
        if ((_a = triggerVNode.type) === null || _a === void 0 ? void 0 : _a.__popover__) {
          popoverInside = true;
          if (!triggerVNode.props) {
            triggerVNode.props = {
              internalSyncTargetWithParent: true,
              internalInheritedEventHandlers: []
            };
          }
          triggerVNode.props.internalSyncTargetWithParent = true;
          if (!triggerVNode.props.internalInheritedEventHandlers) {
            triggerVNode.props.internalInheritedEventHandlers = [handlers];
          } else {
            triggerVNode.props.internalInheritedEventHandlers = [
              handlers,
              ...triggerVNode.props.internalInheritedEventHandlers
            ];
          }
        } else {
          const { internalInheritedEventHandlers } = this;
          const ascendantAndCurrentHandlers = [
            handlers,
            ...internalInheritedEventHandlers
          ];
          const mergedHandlers = {
            onBlur: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onBlur(e);
              });
            },
            onFocus: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onFocus(e);
              });
            },
            onClick: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onClick(e);
              });
            },
            onMouseenter: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onMouseenter(e);
              });
            },
            onMouseleave: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onMouseleave(e);
              });
            }
          };
          appendEvents(triggerVNode, internalInheritedEventHandlers ? "nested" : positionManually ? "manual" : this.trigger, mergedHandlers);
        }
      }
    }
    return h(VBinder, { ref: "binderInstRef", syncTarget: !popoverInside, syncTargetWithParent: this.internalSyncTargetWithParent }, {
      default: () => {
        void this.mergedShowConsideringDisabledProp;
        const mergedShow = this.getMergedShow();
        return [
          this.internalTrapFocus && mergedShow ? withDirectives(h("div", { style: { position: "fixed", inset: 0 } }), [
            [
              zindexable,
              {
                enabled: mergedShow,
                zIndex: this.zIndex
              }
            ]
          ]) : null,
          positionManually ? null : h(VTarget, null, {
            default: () => triggerVNode
          }),
          h(NPopoverBody, keep(this.$props, bodyPropKeys, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: mergedShow })), {
            default: () => {
              var _a2, _b;
              return (_b = (_a2 = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a2);
            },
            header: () => {
              var _a2, _b;
              return (_b = (_a2 = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a2);
            },
            footer: () => {
              var _a2, _b;
              return (_b = (_a2 = this.$slots).footer) === null || _b === void 0 ? void 0 : _b.call(_a2);
            }
          })
        ];
      }
    });
  }
});
const style = cB("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cM("italic", {
  fontStyle: "italic"
}), cM("underline", {
  textDecoration: "underline"
}), cM("code", `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);
const textProps = Object.assign(Object.assign({}, useTheme.props), {
  code: Boolean,
  type: {
    type: String,
    default: "default"
  },
  delete: Boolean,
  strong: Boolean,
  italic: Boolean,
  underline: Boolean,
  depth: [String, Number],
  tag: String,
  as: {
    type: String,
    validator: () => {
      return true;
    },
    default: void 0
  }
});
const __unplugin_components_2 = defineComponent({
  name: "Text",
  props: textProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Typography", "-text", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { depth, type } = props;
      const textColorKey = type === "default" ? depth === void 0 ? "textColor" : `textColor${depth}Depth` : createKey("textColor", type);
      const { common: { fontWeightStrong, fontFamilyMono, cubicBezierEaseInOut }, self: { codeTextColor, codeBorderRadius, codeColor, codeBorder, [textColorKey]: textColor } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-font-weight-strong": fontWeightStrong,
        "--n-font-famliy-mono": fontFamilyMono,
        "--n-code-border-radius": codeBorderRadius,
        "--n-code-text-color": codeTextColor,
        "--n-code-color": codeColor,
        "--n-code-border": codeBorder
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("text", computed(() => `${props.type[0]}${props.depth || ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableTag: useCompitable(props, ["as", "tag"]),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b, _c;
    const { mergedClsPrefix } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const textClass = [
      `${mergedClsPrefix}-text`,
      this.themeClass,
      {
        [`${mergedClsPrefix}-text--code`]: this.code,
        [`${mergedClsPrefix}-text--delete`]: this.delete,
        [`${mergedClsPrefix}-text--strong`]: this.strong,
        [`${mergedClsPrefix}-text--italic`]: this.italic,
        [`${mergedClsPrefix}-text--underline`]: this.underline
      }
    ];
    const children = (_c = (_b = this.$slots).default) === null || _c === void 0 ? void 0 : _c.call(_b);
    return this.code ? h("code", { class: textClass, style: this.cssVars }, this.delete ? h("del", null, children) : children) : this.delete ? h("del", { class: textClass, style: this.cssVars }, children) : h(this.compitableTag || "span", { class: textClass, style: this.cssVars }, children);
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
    d: "M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M250.26 195.39l5.74 122l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M256 397.25a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",
    fill: "currentColor"
  },
  null,
  -1
);
const _hoisted_5 = [_hoisted_2, _hoisted_3, _hoisted_4];
const WarningOutline = defineComponent({
  name: "WarningOutline",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_5);
  }
});
export {
  NPopover as N,
  VBinder as V,
  WarningOutline as W,
  __unplugin_components_2 as _,
  c as a,
  beforeNextFrameOnce as b,
  cssrAnchorMetaName as c,
  internalSelectionMenuBodyInjectionKey as d,
  VTarget as e,
  VFollower as f,
  internalSelectionMenuInjectionKey as i,
  popoverBaseProps as p,
  renderArrow as r,
  useCompitable as u
};
