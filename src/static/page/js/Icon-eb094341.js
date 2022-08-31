import { f as flatten$1, u as useRtl } from "./Space-025b428f.js";
import { ax as warn$2, d as defineComponent, ay as getCurrentInstance, a9 as createInjectionKey, B as createTextVNode, aq as Fragment, ar as Comment, W as toRef, c as computed, j as h, az as Teleport, o as onMounted, O as onBeforeUnmount, ao as renderSlot, aA as createId, b as ref, Y as watch, K as onActivated, L as onDeactivated, U as c, a2 as commonVariables, e as cB, S as cM, f as cE, g as useTheme, u as useConfig, w as watchEffect, ab as scrollbarLight, h as useThemeClass, T as Transition, N as mergeProps, aB as iconLight } from "./main-b154a3fa.js";
import { u as useFalseUntilTruthy } from "./use-merged-state-d9ecddb6.js";
function getPreciseEventTarget(event) {
  return event.composedPath()[0] || null;
}
function keep(object, keys = [], rest) {
  const keepedObject = {};
  keys.forEach((key) => {
    keepedObject[key] = object[key];
  });
  return Object.assign(keepedObject, rest);
}
function getFirstSlotVNode(slots, slotName = "default", props = void 0) {
  const slot = slots[slotName];
  if (!slot) {
    warn$2("getFirstSlotVNode", `slot[${slotName}] is empty`);
    return null;
  }
  const slotContent = flatten$1(slot(props));
  if (slotContent.length === 1) {
    return slotContent[0];
  } else {
    warn$2("getFirstSlotVNode", `slot[${slotName}] should have exactly one child`);
    return null;
  }
}
const Wrapper = defineComponent({
  render() {
    var _a, _b;
    return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
});
const pureNumberRegex = /^(\d|\.)+$/;
const numberRegex = /(\d|\.)+/;
function formatLength(length, { c: c2 = 1, offset = 0, attachPx = true } = {}) {
  if (typeof length === "number") {
    const result = (length + offset) * c2;
    if (result === 0)
      return "0";
    return `${result}px`;
  } else if (typeof length === "string") {
    if (pureNumberRegex.test(length)) {
      const result = (Number(length) + offset) * c2;
      if (attachPx) {
        if (result === 0)
          return "0";
        return `${result}px`;
      } else {
        return `${result}`;
      }
    } else {
      const result = numberRegex.exec(length);
      if (!result)
        return length;
      return length.replace(numberRegex, String((Number(result[0]) + offset) * c2));
    }
  }
  return length;
}
function hasInstance() {
  return getCurrentInstance() !== null;
}
const isBrowser = typeof window !== "undefined";
function getEventTarget(e) {
  const path = e.composedPath();
  return path[0];
}
const traps = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function createTrapHandler(name, el, originalHandler) {
  if (name === "mousemoveoutside") {
    const moveHandler = (e) => {
      if (el.contains(getEventTarget(e)))
        return;
      originalHandler(e);
    };
    return {
      mousemove: moveHandler,
      touchstart: moveHandler
    };
  } else if (name === "clickoutside") {
    let mouseDownOutside = false;
    const downHandler = (e) => {
      mouseDownOutside = !el.contains(getEventTarget(e));
    };
    const upHanlder = (e) => {
      if (!mouseDownOutside)
        return;
      if (el.contains(getEventTarget(e)))
        return;
      originalHandler(e);
    };
    return {
      mousedown: downHandler,
      mouseup: upHanlder,
      touchstart: downHandler,
      touchend: upHanlder
    };
  }
  console.error(
    `[evtd/create-trap-handler]: name \`${name}\` is invalid. This could be a bug of evtd.`
  );
  return {};
}
function ensureTrapHandlers(name, el, handler) {
  const handlers = traps[name];
  let elHandlers = handlers.get(el);
  if (elHandlers === void 0) {
    handlers.set(el, elHandlers = /* @__PURE__ */ new WeakMap());
  }
  let trapHandler = elHandlers.get(handler);
  if (trapHandler === void 0) {
    elHandlers.set(handler, trapHandler = createTrapHandler(name, el, handler));
  }
  return trapHandler;
}
function trapOn(name, el, handler, options) {
  if (name === "mousemoveoutside" || name === "clickoutside") {
    const trapHandlers = ensureTrapHandlers(name, el, handler);
    Object.keys(trapHandlers).forEach((key) => {
      on(key, document, trapHandlers[key], options);
    });
    return true;
  }
  return false;
}
function trapOff(name, el, handler, options) {
  if (name === "mousemoveoutside" || name === "clickoutside") {
    const trapHandlers = ensureTrapHandlers(name, el, handler);
    Object.keys(trapHandlers).forEach((key) => {
      off(key, document, trapHandlers[key], options);
    });
    return true;
  }
  return false;
}
function createDelegate() {
  if (typeof window === "undefined") {
    return {
      on: () => {
      },
      off: () => {
      }
    };
  }
  const propagationStopped = /* @__PURE__ */ new WeakMap();
  const immediatePropagationStopped = /* @__PURE__ */ new WeakMap();
  function trackPropagation() {
    propagationStopped.set(this, true);
  }
  function trackImmediate() {
    propagationStopped.set(this, true);
    immediatePropagationStopped.set(this, true);
  }
  function spy(event, propName, fn) {
    const source = event[propName];
    event[propName] = function() {
      fn.apply(event, arguments);
      return source.apply(event, arguments);
    };
    return event;
  }
  function unspy(event, propName) {
    event[propName] = Event.prototype[propName];
  }
  const currentTargets = /* @__PURE__ */ new WeakMap();
  const currentTargetDescriptor = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function getCurrentTarget() {
    var _a;
    return (_a = currentTargets.get(this)) !== null && _a !== void 0 ? _a : null;
  }
  function defineCurrentTarget(event, getter) {
    if (currentTargetDescriptor === void 0)
      return;
    Object.defineProperty(event, "currentTarget", {
      configurable: true,
      enumerable: true,
      get: getter !== null && getter !== void 0 ? getter : currentTargetDescriptor.get
    });
  }
  const phaseToTypeToElToHandlers = {
    bubble: {},
    capture: {}
  };
  const typeToWindowEventHandlers = {};
  function createUnifiedHandler() {
    const delegeteHandler = function(e) {
      const { type, eventPhase, bubbles } = e;
      const target = getEventTarget(e);
      if (eventPhase === 2)
        return;
      const phase = eventPhase === 1 ? "capture" : "bubble";
      let cursor = target;
      const path = [];
      while (true) {
        if (cursor === null)
          cursor = window;
        path.push(cursor);
        if (cursor === window) {
          break;
        }
        cursor = cursor.parentNode || null;
      }
      const captureElToHandlers = phaseToTypeToElToHandlers.capture[type];
      const bubbleElToHandlers = phaseToTypeToElToHandlers.bubble[type];
      spy(e, "stopPropagation", trackPropagation);
      spy(e, "stopImmediatePropagation", trackImmediate);
      defineCurrentTarget(e, getCurrentTarget);
      if (phase === "capture") {
        if (captureElToHandlers === void 0)
          return;
        for (let i = path.length - 1; i >= 0; --i) {
          if (propagationStopped.has(e))
            break;
          const target2 = path[i];
          const handlers = captureElToHandlers.get(target2);
          if (handlers !== void 0) {
            currentTargets.set(e, target2);
            for (const handler of handlers) {
              if (immediatePropagationStopped.has(e))
                break;
              handler(e);
            }
          }
          if (i === 0 && !bubbles && bubbleElToHandlers !== void 0) {
            const bubbleHandlers = bubbleElToHandlers.get(target2);
            if (bubbleHandlers !== void 0) {
              for (const handler of bubbleHandlers) {
                if (immediatePropagationStopped.has(e))
                  break;
                handler(e);
              }
            }
          }
        }
      } else if (phase === "bubble") {
        if (bubbleElToHandlers === void 0)
          return;
        for (let i = 0; i < path.length; ++i) {
          if (propagationStopped.has(e))
            break;
          const target2 = path[i];
          const handlers = bubbleElToHandlers.get(target2);
          if (handlers !== void 0) {
            currentTargets.set(e, target2);
            for (const handler of handlers) {
              if (immediatePropagationStopped.has(e))
                break;
              handler(e);
            }
          }
        }
      }
      unspy(e, "stopPropagation");
      unspy(e, "stopImmediatePropagation");
      defineCurrentTarget(e);
    };
    delegeteHandler.displayName = "evtdUnifiedHandler";
    return delegeteHandler;
  }
  function createUnifiedWindowEventHandler() {
    const delegateHandler = function(e) {
      const { type, eventPhase } = e;
      if (eventPhase !== 2)
        return;
      const handlers = typeToWindowEventHandlers[type];
      if (handlers === void 0)
        return;
      handlers.forEach((handler) => handler(e));
    };
    delegateHandler.displayName = "evtdUnifiedWindowEventHandler";
    return delegateHandler;
  }
  const unifiedHandler = createUnifiedHandler();
  const unfiendWindowEventHandler = createUnifiedWindowEventHandler();
  function ensureElToHandlers(phase, type) {
    const phaseHandlers = phaseToTypeToElToHandlers[phase];
    if (phaseHandlers[type] === void 0) {
      phaseHandlers[type] = /* @__PURE__ */ new Map();
      window.addEventListener(type, unifiedHandler, phase === "capture");
    }
    return phaseHandlers[type];
  }
  function ensureWindowEventHandlers(type) {
    const windowEventHandlers = typeToWindowEventHandlers[type];
    if (windowEventHandlers === void 0) {
      typeToWindowEventHandlers[type] = /* @__PURE__ */ new Set();
      window.addEventListener(type, unfiendWindowEventHandler);
    }
    return typeToWindowEventHandlers[type];
  }
  function ensureHandlers(elToHandlers, el) {
    let elHandlers = elToHandlers.get(el);
    if (elHandlers === void 0) {
      elToHandlers.set(el, elHandlers = /* @__PURE__ */ new Set());
    }
    return elHandlers;
  }
  function handlerExist(el, phase, type, handler) {
    const elToHandlers = phaseToTypeToElToHandlers[phase][type];
    if (elToHandlers !== void 0) {
      const handlers = elToHandlers.get(el);
      if (handlers !== void 0) {
        if (handlers.has(handler))
          return true;
      }
    }
    return false;
  }
  function windowEventHandlerExist(type, handler) {
    const handlers = typeToWindowEventHandlers[type];
    if (handlers !== void 0) {
      if (handlers.has(handler)) {
        return true;
      }
    }
    return false;
  }
  function on2(type, el, handler, options) {
    let mergedHandler;
    if (typeof options === "object" && options.once === true) {
      mergedHandler = (e) => {
        off2(type, el, mergedHandler, options);
        handler(e);
      };
    } else {
      mergedHandler = handler;
    }
    const trapped = trapOn(type, el, mergedHandler, options);
    if (trapped)
      return;
    const phase = options === true || typeof options === "object" && options.capture === true ? "capture" : "bubble";
    const elToHandlers = ensureElToHandlers(phase, type);
    const handlers = ensureHandlers(elToHandlers, el);
    if (!handlers.has(mergedHandler))
      handlers.add(mergedHandler);
    if (el === window) {
      const windowEventHandlers = ensureWindowEventHandlers(type);
      if (!windowEventHandlers.has(mergedHandler)) {
        windowEventHandlers.add(mergedHandler);
      }
    }
  }
  function off2(type, el, handler, options) {
    const trapped = trapOff(type, el, handler, options);
    if (trapped)
      return;
    const capture = options === true || typeof options === "object" && options.capture === true;
    const phase = capture ? "capture" : "bubble";
    const elToHandlers = ensureElToHandlers(phase, type);
    const handlers = ensureHandlers(elToHandlers, el);
    if (el === window) {
      const mirrorPhase = capture ? "bubble" : "capture";
      if (!handlerExist(el, mirrorPhase, type, handler) && windowEventHandlerExist(type, handler)) {
        const windowEventHandlers = typeToWindowEventHandlers[type];
        windowEventHandlers.delete(handler);
        if (windowEventHandlers.size === 0) {
          window.removeEventListener(type, unfiendWindowEventHandler);
          typeToWindowEventHandlers[type] = void 0;
        }
      }
    }
    if (handlers.has(handler))
      handlers.delete(handler);
    if (handlers.size === 0) {
      elToHandlers.delete(el);
    }
    if (elToHandlers.size === 0) {
      window.removeEventListener(type, unifiedHandler, phase === "capture");
      phaseToTypeToElToHandlers[phase][type] = void 0;
    }
  }
  return {
    on: on2,
    off: off2
  };
}
const { on, off } = createDelegate();
const isIos = (typeof window === "undefined" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
function useIsIos() {
  return isIos;
}
const modalBodyInjectionKey = createInjectionKey("n-modal-body");
const modalInjectionKey = createInjectionKey("n-modal");
const drawerBodyInjectionKey = createInjectionKey("n-drawer-body");
const popoverBodyInjectionKey = createInjectionKey("n-popover-body");
function getSlot(scope, slots, slotName = "default") {
  const slot = slots[slotName];
  if (slot === void 0) {
    throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
  }
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
function getFirstVNode(scope, slots, slotName = "default") {
  const slot = slots[slotName];
  if (slot === void 0) {
    throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
  }
  const content = flatten(slot());
  if (content.length === 1) {
    return content[0];
  } else {
    throw new Error(`[vueuc/${scope}]: slot[${slotName}] should have exactly one child.`);
  }
}
const ctxKey = "@@coContext";
const clickoutside = {
  mounted(el, { value, modifiers }) {
    el[ctxKey] = {
      handler: void 0
    };
    if (typeof value === "function") {
      el[ctxKey].handler = value;
      on("clickoutside", el, value, {
        capture: modifiers.capture
      });
    }
  },
  updated(el, { value, modifiers }) {
    const ctx2 = el[ctxKey];
    if (typeof value === "function") {
      if (ctx2.handler) {
        if (ctx2.handler !== value) {
          off("clickoutside", el, ctx2.handler, {
            capture: modifiers.capture
          });
          ctx2.handler = value;
          on("clickoutside", el, value, {
            capture: modifiers.capture
          });
        }
      } else {
        el[ctxKey].handler = value;
        on("clickoutside", el, value, {
          capture: modifiers.capture
        });
      }
    } else {
      if (ctx2.handler) {
        off("clickoutside", el, ctx2.handler, {
          capture: modifiers.capture
        });
        ctx2.handler = void 0;
      }
    }
  },
  unmounted(el, { modifiers }) {
    const { handler } = el[ctxKey];
    if (handler) {
      off("clickoutside", el, handler, {
        capture: modifiers.capture
      });
    }
    el[ctxKey].handler = void 0;
  }
};
const clickoutside$1 = clickoutside;
function warn$1(location, message) {
  console.error(`[vdirs/${location}]: ${message}`);
}
class ZIndexManager {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map();
    this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(el, zIndex) {
    const { elementZIndex } = this;
    if (zIndex !== void 0) {
      el.style.zIndex = `${zIndex}`;
      elementZIndex.delete(el);
      return;
    }
    const { nextZIndex } = this;
    if (elementZIndex.has(el)) {
      const currentZIndex = elementZIndex.get(el);
      if (currentZIndex + 1 === this.nextZIndex)
        return;
    }
    el.style.zIndex = `${nextZIndex}`;
    elementZIndex.set(el, nextZIndex);
    this.nextZIndex = nextZIndex + 1;
    this.squashState();
  }
  unregister(el, zIndex) {
    const { elementZIndex } = this;
    if (elementZIndex.has(el)) {
      elementZIndex.delete(el);
    } else if (zIndex === void 0) {
      warn$1("z-index-manager/unregister-element", "Element not found when unregistering.");
    }
    this.squashState();
  }
  squashState() {
    const { elementCount } = this;
    if (!elementCount) {
      this.nextZIndex = 2e3;
    }
    if (this.nextZIndex - elementCount > 2500)
      this.rearrange();
  }
  rearrange() {
    const elementZIndexPair = Array.from(this.elementZIndex.entries());
    elementZIndexPair.sort((pair1, pair2) => {
      return pair1[1] - pair2[1];
    });
    this.nextZIndex = 2e3;
    elementZIndexPair.forEach((pair) => {
      const el = pair[0];
      const zIndex = this.nextZIndex++;
      if (`${zIndex}` !== el.style.zIndex)
        el.style.zIndex = `${zIndex}`;
    });
  }
}
const zIndexManager = new ZIndexManager();
const ctx = "@@ziContext";
const zindexable = {
  mounted(el, bindings) {
    const { value = {} } = bindings;
    const { zIndex, enabled } = value;
    el[ctx] = {
      enabled: !!enabled,
      initialized: false
    };
    if (enabled) {
      zIndexManager.ensureZIndex(el, zIndex);
      el[ctx].initialized = true;
    }
  },
  updated(el, bindings) {
    const { value = {} } = bindings;
    const { zIndex, enabled } = value;
    const cachedEnabled = el[ctx].enabled;
    if (enabled && !cachedEnabled) {
      zIndexManager.ensureZIndex(el, zIndex);
      el[ctx].initialized = true;
    }
    el[ctx].enabled = !!enabled;
  },
  unmounted(el, bindings) {
    if (!el[ctx].initialized)
      return;
    const { value = {} } = bindings;
    const { zIndex } = value;
    zIndexManager.unregister(el, zIndex);
  }
};
const zindexable$1 = zindexable;
function warn(location, message) {
  console.error(`[vueuc/${location}]: ${message}`);
}
function resolveTo(selector) {
  if (typeof selector === "string") {
    return document.querySelector(selector);
  }
  return selector();
}
const LazyTeleport = defineComponent({
  name: "LazyTeleport",
  props: {
    to: {
      type: [String, Object],
      default: void 0
    },
    disabled: Boolean,
    show: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    return {
      showTeleport: useFalseUntilTruthy(toRef(props, "show")),
      mergedTo: computed(() => {
        const { to } = props;
        return to !== null && to !== void 0 ? to : "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? getSlot("lazy-teleport", this.$slots) : h(Teleport, {
      disabled: this.disabled,
      to: this.mergedTo
    }, getSlot("lazy-teleport", this.$slots)) : null;
  }
});
var resizeObservers = [];
var hasActiveObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.activeTargets.length > 0;
  });
};
var hasSkippedObservations = function() {
  return resizeObservers.some(function(ro) {
    return ro.skippedTargets.length > 0;
  });
};
var msg = "ResizeObserver loop completed with undelivered notifications.";
var deliverResizeLoopError = function() {
  var event;
  if (typeof ErrorEvent === "function") {
    event = new ErrorEvent("error", {
      message: msg
    });
  } else {
    event = document.createEvent("Event");
    event.initEvent("error", false, false);
    event.message = msg;
  }
  window.dispatchEvent(event);
};
var ResizeObserverBoxOptions;
(function(ResizeObserverBoxOptions2) {
  ResizeObserverBoxOptions2["BORDER_BOX"] = "border-box";
  ResizeObserverBoxOptions2["CONTENT_BOX"] = "content-box";
  ResizeObserverBoxOptions2["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
var freeze = function(obj) {
  return Object.freeze(obj);
};
var ResizeObserverSize = function() {
  function ResizeObserverSize2(inlineSize, blockSize) {
    this.inlineSize = inlineSize;
    this.blockSize = blockSize;
    freeze(this);
  }
  return ResizeObserverSize2;
}();
var DOMRectReadOnly = function() {
  function DOMRectReadOnly2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = this.y;
    this.left = this.x;
    this.bottom = this.top + this.height;
    this.right = this.left + this.width;
    return freeze(this);
  }
  DOMRectReadOnly2.prototype.toJSON = function() {
    var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
    return { x, y, top, right, bottom, left, width, height };
  };
  DOMRectReadOnly2.fromRect = function(rectangle) {
    return new DOMRectReadOnly2(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  return DOMRectReadOnly2;
}();
var isSVG = function(target) {
  return target instanceof SVGElement && "getBBox" in target;
};
var isHidden = function(target) {
  if (isSVG(target)) {
    var _a = target.getBBox(), width = _a.width, height = _a.height;
    return !width && !height;
  }
  var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
  return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function(obj) {
  var _a, _b;
  if (obj instanceof Element) {
    return true;
  }
  var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
  return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function(target) {
  switch (target.tagName) {
    case "INPUT":
      if (target.type !== "image") {
        break;
      }
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var global = typeof window !== "undefined" ? window : {};
var cache = /* @__PURE__ */ new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent);
var parseDimension = function(pixel) {
  return parseFloat(pixel || "0");
};
var size = function(inlineSize, blockSize, switchSizes) {
  if (inlineSize === void 0) {
    inlineSize = 0;
  }
  if (blockSize === void 0) {
    blockSize = 0;
  }
  if (switchSizes === void 0) {
    switchSizes = false;
  }
  return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
  devicePixelContentBoxSize: size(),
  borderBoxSize: size(),
  contentBoxSize: size(),
  contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function(target, forceRecalculation) {
  if (forceRecalculation === void 0) {
    forceRecalculation = false;
  }
  if (cache.has(target) && !forceRecalculation) {
    return cache.get(target);
  }
  if (isHidden(target)) {
    cache.set(target, zeroBoxes);
    return zeroBoxes;
  }
  var cs = getComputedStyle(target);
  var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
  var removePadding = !IE && cs.boxSizing === "border-box";
  var switchSizes = verticalRegexp.test(cs.writingMode || "");
  var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
  var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
  var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
  var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
  var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
  var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
  var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
  var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
  var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
  var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
  var horizontalPadding = paddingLeft + paddingRight;
  var verticalPadding = paddingTop + paddingBottom;
  var horizontalBorderArea = borderLeft + borderRight;
  var verticalBorderArea = borderTop + borderBottom;
  var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
  var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
  var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
  var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
  var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
  var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
  var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
  var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
  var boxes = freeze({
    devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
    borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
    contentBoxSize: size(contentWidth, contentHeight, switchSizes),
    contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
  });
  cache.set(target, boxes);
  return boxes;
};
var calculateBoxSize = function(target, observedBox, forceRecalculation) {
  var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
  switch (observedBox) {
    case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
      return devicePixelContentBoxSize;
    case ResizeObserverBoxOptions.BORDER_BOX:
      return borderBoxSize;
    default:
      return contentBoxSize;
  }
};
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target) {
    var boxes = calculateBoxSizes(target);
    this.target = target;
    this.contentRect = boxes.contentRect;
    this.borderBoxSize = freeze([boxes.borderBoxSize]);
    this.contentBoxSize = freeze([boxes.contentBoxSize]);
    this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
  }
  return ResizeObserverEntry2;
}();
var calculateDepthForNode = function(node) {
  if (isHidden(node)) {
    return Infinity;
  }
  var depth = 0;
  var parent = node.parentNode;
  while (parent) {
    depth += 1;
    parent = parent.parentNode;
  }
  return depth;
};
var broadcastActiveObservations = function() {
  var shallowestDepth = Infinity;
  var callbacks2 = [];
  resizeObservers.forEach(function processObserver(ro) {
    if (ro.activeTargets.length === 0) {
      return;
    }
    var entries = [];
    ro.activeTargets.forEach(function processTarget(ot) {
      var entry = new ResizeObserverEntry(ot.target);
      var targetDepth = calculateDepthForNode(ot.target);
      entries.push(entry);
      ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
      if (targetDepth < shallowestDepth) {
        shallowestDepth = targetDepth;
      }
    });
    callbacks2.push(function resizeObserverCallback() {
      ro.callback.call(ro.observer, entries, ro.observer);
    });
    ro.activeTargets.splice(0, ro.activeTargets.length);
  });
  for (var _i = 0, callbacks_1 = callbacks2; _i < callbacks_1.length; _i++) {
    var callback = callbacks_1[_i];
    callback();
  }
  return shallowestDepth;
};
var gatherActiveObservationsAtDepth = function(depth) {
  resizeObservers.forEach(function processObserver(ro) {
    ro.activeTargets.splice(0, ro.activeTargets.length);
    ro.skippedTargets.splice(0, ro.skippedTargets.length);
    ro.observationTargets.forEach(function processTarget(ot) {
      if (ot.isActive()) {
        if (calculateDepthForNode(ot.target) > depth) {
          ro.activeTargets.push(ot);
        } else {
          ro.skippedTargets.push(ot);
        }
      }
    });
  });
};
var process = function() {
  var depth = 0;
  gatherActiveObservationsAtDepth(depth);
  while (hasActiveObservations()) {
    depth = broadcastActiveObservations();
    gatherActiveObservationsAtDepth(depth);
  }
  if (hasSkippedObservations()) {
    deliverResizeLoopError();
  }
  return depth > 0;
};
var trigger;
var callbacks = [];
var notify = function() {
  return callbacks.splice(0).forEach(function(cb) {
    return cb();
  });
};
var queueMicroTask = function(callback) {
  if (!trigger) {
    var toggle_1 = 0;
    var el_1 = document.createTextNode("");
    var config = { characterData: true };
    new MutationObserver(function() {
      return notify();
    }).observe(el_1, config);
    trigger = function() {
      el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++);
    };
  }
  callbacks.push(callback);
  trigger();
};
var queueResizeObserver = function(cb) {
  queueMicroTask(function ResizeObserver2() {
    requestAnimationFrame(cb);
  });
};
var watching = 0;
var isWatching = function() {
  return !!watching;
};
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var time = function(timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }
  return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = function() {
  function Scheduler2() {
    var _this = this;
    this.stopped = true;
    this.listener = function() {
      return _this.schedule();
    };
  }
  Scheduler2.prototype.run = function(timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = CATCH_PERIOD;
    }
    if (scheduled) {
      return;
    }
    scheduled = true;
    var until = time(timeout);
    queueResizeObserver(function() {
      var elementsHaveResized = false;
      try {
        elementsHaveResized = process();
      } finally {
        scheduled = false;
        timeout = until - time();
        if (!isWatching()) {
          return;
        }
        if (elementsHaveResized) {
          _this.run(1e3);
        } else if (timeout > 0) {
          _this.run(timeout);
        } else {
          _this.start();
        }
      }
    });
  };
  Scheduler2.prototype.schedule = function() {
    this.stop();
    this.run();
  };
  Scheduler2.prototype.observe = function() {
    var _this = this;
    var cb = function() {
      return _this.observer && _this.observer.observe(document.body, observerConfig);
    };
    document.body ? cb() : global.addEventListener("DOMContentLoaded", cb);
  };
  Scheduler2.prototype.start = function() {
    var _this = this;
    if (this.stopped) {
      this.stopped = false;
      this.observer = new MutationObserver(this.listener);
      this.observe();
      events.forEach(function(name) {
        return global.addEventListener(name, _this.listener, true);
      });
    }
  };
  Scheduler2.prototype.stop = function() {
    var _this = this;
    if (!this.stopped) {
      this.observer && this.observer.disconnect();
      events.forEach(function(name) {
        return global.removeEventListener(name, _this.listener, true);
      });
      this.stopped = true;
    }
  };
  return Scheduler2;
}();
var scheduler = new Scheduler();
var updateCount = function(n) {
  !watching && n > 0 && scheduler.start();
  watching += n;
  !watching && scheduler.stop();
};
var skipNotifyOnElement = function(target) {
  return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
};
var ResizeObservation = function() {
  function ResizeObservation2(target, observedBox) {
    this.target = target;
    this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
    this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  ResizeObservation2.prototype.isActive = function() {
    var size2 = calculateBoxSize(this.target, this.observedBox, true);
    if (skipNotifyOnElement(this.target)) {
      this.lastReportedSize = size2;
    }
    if (this.lastReportedSize.inlineSize !== size2.inlineSize || this.lastReportedSize.blockSize !== size2.blockSize) {
      return true;
    }
    return false;
  };
  return ResizeObservation2;
}();
var ResizeObserverDetail = function() {
  function ResizeObserverDetail2(resizeObserver, callback) {
    this.activeTargets = [];
    this.skippedTargets = [];
    this.observationTargets = [];
    this.observer = resizeObserver;
    this.callback = callback;
  }
  return ResizeObserverDetail2;
}();
var observerMap = /* @__PURE__ */ new WeakMap();
var getObservationIndex = function(observationTargets, target) {
  for (var i = 0; i < observationTargets.length; i += 1) {
    if (observationTargets[i].target === target) {
      return i;
    }
  }
  return -1;
};
var ResizeObserverController = function() {
  function ResizeObserverController2() {
  }
  ResizeObserverController2.connect = function(resizeObserver, callback) {
    var detail = new ResizeObserverDetail(resizeObserver, callback);
    observerMap.set(resizeObserver, detail);
  };
  ResizeObserverController2.observe = function(resizeObserver, target, options) {
    var detail = observerMap.get(resizeObserver);
    var firstObservation = detail.observationTargets.length === 0;
    if (getObservationIndex(detail.observationTargets, target) < 0) {
      firstObservation && resizeObservers.push(detail);
      detail.observationTargets.push(new ResizeObservation(target, options && options.box));
      updateCount(1);
      scheduler.schedule();
    }
  };
  ResizeObserverController2.unobserve = function(resizeObserver, target) {
    var detail = observerMap.get(resizeObserver);
    var index = getObservationIndex(detail.observationTargets, target);
    var lastObservation = detail.observationTargets.length === 1;
    if (index >= 0) {
      lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
      detail.observationTargets.splice(index, 1);
      updateCount(-1);
    }
  };
  ResizeObserverController2.disconnect = function(resizeObserver) {
    var _this = this;
    var detail = observerMap.get(resizeObserver);
    detail.observationTargets.slice().forEach(function(ot) {
      return _this.unobserve(resizeObserver, ot.target);
    });
    detail.activeTargets.splice(0, detail.activeTargets.length);
  };
  return ResizeObserverController2;
}();
var ResizeObserver = function() {
  function ResizeObserver2(callback) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    }
    ResizeObserverController.connect(this, callback);
  }
  ResizeObserver2.prototype.observe = function(target, options) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.observe(this, target, options);
  };
  ResizeObserver2.prototype.unobserve = function(target) {
    if (arguments.length === 0) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    }
    if (!isElement(target)) {
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    }
    ResizeObserverController.unobserve(this, target);
  };
  ResizeObserver2.prototype.disconnect = function() {
    ResizeObserverController.disconnect(this);
  };
  ResizeObserver2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  };
  return ResizeObserver2;
}();
class ResizeObserverDelegate {
  constructor() {
    this.handleResize = this.handleResize.bind(this);
    this.observer = new ResizeObserver(this.handleResize);
    this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(entries) {
    for (const entry of entries) {
      const handler = this.elHandlersMap.get(entry.target);
      if (handler !== void 0) {
        handler(entry);
      }
    }
  }
  registerHandler(el, handler) {
    this.elHandlersMap.set(el, handler);
    this.observer.observe(el);
  }
  unregisterHandler(el) {
    if (!this.elHandlersMap.has(el)) {
      return;
    }
    this.elHandlersMap.delete(el);
    this.observer.unobserve(el);
  }
}
const resizeObserverManager = new ResizeObserverDelegate();
const VResizeObserver = defineComponent({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(props) {
    let registered = false;
    const proxy = getCurrentInstance().proxy;
    function handleResize(entry) {
      const { onResize } = props;
      if (onResize !== void 0)
        onResize(entry);
    }
    onMounted(() => {
      const el = proxy.$el;
      if (el === void 0) {
        warn("resize-observer", "$el does not exist.");
        return;
      }
      if (el.nextElementSibling !== el.nextSibling) {
        if (el.nodeType === 3 && el.nodeValue !== "") {
          warn("resize-observer", "$el can not be observed (it may be a text node).");
          return;
        }
      }
      if (el.nextElementSibling !== null) {
        resizeObserverManager.registerHandler(el.nextElementSibling, handleResize);
        registered = true;
      }
    });
    onBeforeUnmount(() => {
      if (registered) {
        resizeObserverManager.unregisterHandler(proxy.$el.nextElementSibling);
      }
    });
  },
  render() {
    return renderSlot(this.$slots, "default");
  }
});
function isHTMLElement(node) {
  return node instanceof HTMLElement;
}
function focusFirstDescendant(node) {
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    if (isHTMLElement(child)) {
      if (attemptFocus(child) || focusFirstDescendant(child)) {
        return true;
      }
    }
  }
  return false;
}
function focusLastDescendant(element) {
  for (let i = element.childNodes.length - 1; i >= 0; i--) {
    const child = element.childNodes[i];
    if (isHTMLElement(child)) {
      if (attemptFocus(child) || focusLastDescendant(child)) {
        return true;
      }
    }
  }
  return false;
}
function attemptFocus(element) {
  if (!isFocusable(element)) {
    return false;
  }
  try {
    element.focus({ preventScroll: true });
  } catch (e) {
  }
  return document.activeElement === element;
}
function isFocusable(element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.getAttribute("disabled")) {
    return false;
  }
  switch (element.nodeName) {
    case "A":
      return !!element.href && element.rel !== "ignore";
    case "INPUT":
      return element.type !== "hidden" && element.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
}
let stack = [];
const FocusTrap = defineComponent({
  name: "FocusTrap",
  props: {
    disabled: Boolean,
    active: Boolean,
    autoFocus: {
      type: Boolean,
      default: true
    },
    onEsc: Function,
    initialFocusTo: String,
    finalFocusTo: String,
    returnFocusOnDeactivated: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const id = createId();
    const focusableStartRef = ref(null);
    const focusableEndRef = ref(null);
    let activated = false;
    let ignoreInternalFocusChange = false;
    const lastFocusedElement = document.activeElement;
    function isCurrentActive() {
      const currentActiveId = stack[stack.length - 1];
      return currentActiveId === id;
    }
    function handleDocumentKeydown(e) {
      var _a;
      if (e.code === "Escape") {
        if (isCurrentActive()) {
          (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }
      }
    }
    onMounted(() => {
      watch(() => props.active, (value) => {
        if (value) {
          activate();
          on("keydown", document, handleDocumentKeydown);
        } else {
          off("keydown", document, handleDocumentKeydown);
          if (activated) {
            deactivate();
          }
        }
      }, {
        immediate: true
      });
    });
    onBeforeUnmount(() => {
      off("keydown", document, handleDocumentKeydown);
      if (activated)
        deactivate();
    });
    function handleDocumentFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      if (isCurrentActive()) {
        const mainEl = getMainEl();
        if (mainEl === null)
          return;
        if (mainEl.contains(getPreciseEventTarget(e)))
          return;
        resetFocusTo("first");
      }
    }
    function getMainEl() {
      const focusableStartEl = focusableStartRef.value;
      if (focusableStartEl === null)
        return null;
      let mainEl = focusableStartEl;
      while (true) {
        mainEl = mainEl.nextSibling;
        if (mainEl === null)
          break;
        if (mainEl instanceof Element && mainEl.tagName === "DIV") {
          break;
        }
      }
      return mainEl;
    }
    function activate() {
      var _a;
      if (props.disabled)
        return;
      stack.push(id);
      if (props.autoFocus) {
        const { initialFocusTo } = props;
        if (initialFocusTo === void 0) {
          resetFocusTo("first");
        } else {
          (_a = resolveTo(initialFocusTo)) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
      }
      activated = true;
      document.addEventListener("focus", handleDocumentFocus, true);
    }
    function deactivate() {
      var _a;
      if (props.disabled)
        return;
      document.removeEventListener("focus", handleDocumentFocus, true);
      stack = stack.filter((idInStack) => idInStack !== id);
      if (isCurrentActive())
        return;
      const { finalFocusTo } = props;
      if (finalFocusTo !== void 0) {
        (_a = resolveTo(finalFocusTo)) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
      } else if (props.returnFocusOnDeactivated) {
        if (lastFocusedElement instanceof HTMLElement) {
          ignoreInternalFocusChange = true;
          lastFocusedElement.focus({ preventScroll: true });
          ignoreInternalFocusChange = false;
        }
      }
    }
    function resetFocusTo(target) {
      if (!isCurrentActive())
        return;
      if (props.active) {
        const focusableStartEl = focusableStartRef.value;
        const focusableEndEl = focusableEndRef.value;
        if (focusableStartEl !== null && focusableEndEl !== null) {
          const mainEl = getMainEl();
          if (mainEl == null || mainEl === focusableEndEl) {
            ignoreInternalFocusChange = true;
            focusableStartEl.focus({ preventScroll: true });
            ignoreInternalFocusChange = false;
            return;
          }
          ignoreInternalFocusChange = true;
          const focused = target === "first" ? focusFirstDescendant(mainEl) : focusLastDescendant(mainEl);
          ignoreInternalFocusChange = false;
          if (!focused) {
            ignoreInternalFocusChange = true;
            focusableStartEl.focus({ preventScroll: true });
            ignoreInternalFocusChange = false;
          }
        }
      }
    }
    function handleStartFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      const mainEl = getMainEl();
      if (mainEl === null)
        return;
      if (e.relatedTarget !== null && mainEl.contains(e.relatedTarget)) {
        resetFocusTo("last");
      } else {
        resetFocusTo("first");
      }
    }
    function handleEndFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      if (e.relatedTarget !== null && e.relatedTarget === focusableStartRef.value) {
        resetFocusTo("last");
      } else {
        resetFocusTo("first");
      }
    }
    return {
      focusableStartRef,
      focusableEndRef,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus,
      handleEndFocus
    };
  },
  render() {
    const { default: defaultSlot } = this.$slots;
    if (defaultSlot === void 0)
      return null;
    if (this.disabled)
      return defaultSlot();
    const { active, focusableStyle } = this;
    return h(Fragment, null, [
      h("div", {
        "aria-hidden": "true",
        tabindex: active ? "0" : "-1",
        ref: "focusableStartRef",
        style: focusableStyle,
        onFocus: this.handleStartFocus
      }),
      defaultSlot(),
      h("div", {
        "aria-hidden": "true",
        style: focusableStyle,
        ref: "focusableEndRef",
        tabindex: active ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
function useReactivated(callback) {
  const isDeactivatedRef = { isDeactivated: false };
  let activateStateInitialized = false;
  onActivated(() => {
    isDeactivatedRef.isDeactivated = false;
    if (!activateStateInitialized) {
      activateStateInitialized = true;
      return;
    }
    callback();
  });
  onDeactivated(() => {
    isDeactivatedRef.isDeactivated = true;
    if (!activateStateInitialized) {
      activateStateInitialized = true;
    }
  });
  return isDeactivatedRef;
}
const {
  cubicBezierEaseInOut
} = commonVariables;
function fadeInTransition({
  name = "fade-in",
  enterDuration = "0.2s",
  leaveDuration = "0.2s",
  enterCubicBezier = cubicBezierEaseInOut,
  leaveCubicBezier = cubicBezierEaseInOut
} = {}) {
  return [c(`&.${name}-transition-enter-active`, {
    transition: `all ${enterDuration} ${enterCubicBezier}!important`
  }), c(`&.${name}-transition-leave-active`, {
    transition: `all ${leaveDuration} ${leaveCubicBezier}!important`
  }), c(`&.${name}-transition-enter-from, &.${name}-transition-leave-to`, {
    opacity: 0
  }), c(`&.${name}-transition-leave-from, &.${name}-transition-enter-to`, {
    opacity: 1
  })];
}
const style$1 = cB("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [c(">", [cB("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `, [c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), c(">", [cB("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), c(">, +", [cB("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `, [cM("horizontal", `
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `, [c(">", [cE("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), cM("vertical", `
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `, [c(">", [cE("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), cM("disabled", [c(">", [cE("scrollbar", {
  pointerEvents: "none"
})])]), c(">", [cE("scrollbar", `
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [fadeInTransition(), c("&:hover", {
  backgroundColor: "var(--n-scrollbar-color-hover)"
})])])])])]);
const scrollbarProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: Number,
    default: 5
  },
  duration: {
    type: Number,
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: true
  },
  xScrollable: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  useUnifiedContainer: Boolean,
  triggerDisplayManually: Boolean,
  container: Function,
  content: Function,
  containerClass: String,
  containerStyle: [String, Object],
  contentClass: String,
  contentStyle: [String, Object],
  horizontalRailStyle: [String, Object],
  verticalRailStyle: [String, Object],
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  internalOnUpdateScrollLeft: Function,
  internalHoistYRail: Boolean
});
const Scrollbar = defineComponent({
  name: "Scrollbar",
  props: scrollbarProps,
  inheritAttrs: false,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const rtlEnabledRef = useRtl("Scrollbar", mergedRtlRef, mergedClsPrefixRef);
    const wrapperRef = ref(null);
    const containerRef = ref(null);
    const contentRef = ref(null);
    const yRailRef = ref(null);
    const xRailRef = ref(null);
    const contentHeightRef = ref(null);
    const contentWidthRef = ref(null);
    const containerHeightRef = ref(null);
    const containerWidthRef = ref(null);
    const yRailSizeRef = ref(null);
    const xRailSizeRef = ref(null);
    const containerScrollTopRef = ref(0);
    const containerScrollLeftRef = ref(0);
    const isShowXBarRef = ref(false);
    const isShowYBarRef = ref(false);
    let yBarPressed = false;
    let xBarPressed = false;
    let xBarVanishTimerId;
    let yBarVanishTimerId;
    let memoYTop = 0;
    let memoXLeft = 0;
    let memoMouseX = 0;
    let memoMouseY = 0;
    const isIos2 = useIsIos();
    const yBarSizeRef = computed(() => {
      const { value: containerHeight } = containerHeightRef;
      const { value: contentHeight } = contentHeightRef;
      const { value: yRailSize } = yRailSizeRef;
      if (containerHeight === null || contentHeight === null || yRailSize === null) {
        return 0;
      } else {
        return Math.min(containerHeight, yRailSize * containerHeight / contentHeight + props.size * 1.5);
      }
    });
    const yBarSizePxRef = computed(() => {
      return `${yBarSizeRef.value}px`;
    });
    const xBarSizeRef = computed(() => {
      const { value: containerWidth } = containerWidthRef;
      const { value: contentWidth } = contentWidthRef;
      const { value: xRailSize } = xRailSizeRef;
      if (containerWidth === null || contentWidth === null || xRailSize === null) {
        return 0;
      } else {
        return xRailSize * containerWidth / contentWidth + props.size * 1.5;
      }
    });
    const xBarSizePxRef = computed(() => {
      return `${xBarSizeRef.value}px`;
    });
    const yBarTopRef = computed(() => {
      const { value: containerHeight } = containerHeightRef;
      const { value: containerScrollTop } = containerScrollTopRef;
      const { value: contentHeight } = contentHeightRef;
      const { value: yRailSize } = yRailSizeRef;
      if (containerHeight === null || contentHeight === null || yRailSize === null) {
        return 0;
      } else {
        const heightDiff = contentHeight - containerHeight;
        if (!heightDiff)
          return 0;
        return containerScrollTop / heightDiff * (yRailSize - yBarSizeRef.value);
      }
    });
    const yBarTopPxRef = computed(() => {
      return `${yBarTopRef.value}px`;
    });
    const xBarLeftRef = computed(() => {
      const { value: containerWidth } = containerWidthRef;
      const { value: containerScrollLeft } = containerScrollLeftRef;
      const { value: contentWidth } = contentWidthRef;
      const { value: xRailSize } = xRailSizeRef;
      if (containerWidth === null || contentWidth === null || xRailSize === null) {
        return 0;
      } else {
        const widthDiff = contentWidth - containerWidth;
        if (!widthDiff)
          return 0;
        return containerScrollLeft / widthDiff * (xRailSize - xBarSizeRef.value);
      }
    });
    const xBarLeftPxRef = computed(() => {
      return `${xBarLeftRef.value}px`;
    });
    const needYBarRef = computed(() => {
      const { value: containerHeight } = containerHeightRef;
      const { value: contentHeight } = contentHeightRef;
      return containerHeight !== null && contentHeight !== null && contentHeight > containerHeight;
    });
    const needXBarRef = computed(() => {
      const { value: containerWidth } = containerWidthRef;
      const { value: contentWidth } = contentWidthRef;
      return containerWidth !== null && contentWidth !== null && contentWidth > containerWidth;
    });
    const mergedShowXBarRef = computed(() => {
      const { trigger: trigger2 } = props;
      return trigger2 === "none" || isShowXBarRef.value;
    });
    const mergedShowYBarRef = computed(() => {
      const { trigger: trigger2 } = props;
      return trigger2 === "none" || isShowYBarRef.value;
    });
    const mergedContainerRef = computed(() => {
      const { container } = props;
      if (container)
        return container();
      return containerRef.value;
    });
    const mergedContentRef = computed(() => {
      const { content } = props;
      if (content)
        return content();
      return contentRef.value;
    });
    const activateState = useReactivated(() => {
      if (!props.container) {
        scrollTo({
          top: containerScrollTopRef.value,
          left: containerScrollLeftRef.value
        });
      }
    });
    const handleContentResize = () => {
      if (activateState.isDeactivated)
        return;
      sync();
    };
    const handleContainerResize = (e) => {
      if (activateState.isDeactivated)
        return;
      const { onResize } = props;
      if (onResize)
        onResize(e);
      sync();
    };
    const scrollTo = (options, y) => {
      if (!props.scrollable)
        return;
      if (typeof options === "number") {
        scrollToPosition(y !== null && y !== void 0 ? y : 0, options, 0, false, "auto");
        return;
      }
      const { left, top, index, elSize, position, behavior, el, debounce = true } = options;
      if (left !== void 0 || top !== void 0) {
        scrollToPosition(left !== null && left !== void 0 ? left : 0, top !== null && top !== void 0 ? top : 0, 0, false, behavior);
      }
      if (el !== void 0) {
        scrollToPosition(0, el.offsetTop, el.offsetHeight, debounce, behavior);
      } else if (index !== void 0 && elSize !== void 0) {
        scrollToPosition(0, index * elSize, elSize, debounce, behavior);
      } else if (position === "bottom") {
        scrollToPosition(0, Number.MAX_SAFE_INTEGER, 0, false, behavior);
      } else if (position === "top") {
        scrollToPosition(0, 0, 0, false, behavior);
      }
    };
    const scrollBy = (options, y) => {
      if (!props.scrollable)
        return;
      const { value: container } = mergedContainerRef;
      if (!container)
        return;
      if (typeof options === "object") {
        container.scrollBy(options);
      } else {
        container.scrollBy(options, y || 0);
      }
    };
    function scrollToPosition(left, top, elSize, debounce, behavior) {
      const { value: container } = mergedContainerRef;
      if (!container)
        return;
      if (debounce) {
        const { scrollTop, offsetHeight } = container;
        if (top > scrollTop) {
          if (top + elSize <= scrollTop + offsetHeight)
            ;
          else {
            container.scrollTo({
              left,
              top: top + elSize - offsetHeight,
              behavior
            });
          }
          return;
        }
      }
      container.scrollTo({
        left,
        top,
        behavior
      });
    }
    function handleMouseEnterWrapper() {
      showXBar();
      showYBar();
      sync();
    }
    function handleMouseLeaveWrapper() {
      hideBar();
    }
    function hideBar() {
      hideYBar();
      hideXBar();
    }
    function hideYBar() {
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      yBarVanishTimerId = window.setTimeout(() => {
        isShowYBarRef.value = false;
      }, props.duration);
    }
    function hideXBar() {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      xBarVanishTimerId = window.setTimeout(() => {
        isShowXBarRef.value = false;
      }, props.duration);
    }
    function showXBar() {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      isShowXBarRef.value = true;
    }
    function showYBar() {
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      isShowYBarRef.value = true;
    }
    function handleScroll(e) {
      const { onScroll } = props;
      if (onScroll)
        onScroll(e);
      syncScrollState();
    }
    function syncScrollState() {
      const { value: container } = mergedContainerRef;
      if (container) {
        containerScrollTopRef.value = container.scrollTop;
        containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
      }
    }
    function syncPositionState() {
      const { value: content } = mergedContentRef;
      if (content) {
        contentHeightRef.value = content.offsetHeight;
        contentWidthRef.value = content.offsetWidth;
      }
      const { value: container } = mergedContainerRef;
      if (container) {
        containerHeightRef.value = container.offsetHeight;
        containerWidthRef.value = container.offsetWidth;
      }
      const { value: xRailEl } = xRailRef;
      const { value: yRailEl } = yRailRef;
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth;
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight;
      }
    }
    function syncUnifiedContainer() {
      const { value: container } = mergedContainerRef;
      if (container) {
        containerScrollTopRef.value = container.scrollTop;
        containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
        containerHeightRef.value = container.offsetHeight;
        containerWidthRef.value = container.offsetWidth;
        contentHeightRef.value = container.scrollHeight;
        contentWidthRef.value = container.scrollWidth;
      }
      const { value: xRailEl } = xRailRef;
      const { value: yRailEl } = yRailRef;
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth;
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight;
      }
    }
    function sync() {
      if (!props.scrollable)
        return;
      if (props.useUnifiedContainer) {
        syncUnifiedContainer();
      } else {
        syncPositionState();
        syncScrollState();
      }
    }
    function isMouseUpAway(e) {
      var _a;
      return !((_a = wrapperRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target));
    }
    function handleXScrollMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      xBarPressed = true;
      on("mousemove", window, handleXScrollMouseMove, true);
      on("mouseup", window, handleXScrollMouseUp, true);
      memoXLeft = containerScrollLeftRef.value;
      memoMouseX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX : e.clientX;
    }
    function handleXScrollMouseMove(e) {
      if (!xBarPressed)
        return;
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      const { value: containerWidth } = containerWidthRef;
      const { value: contentWidth } = contentWidthRef;
      const { value: xBarSize } = xBarSizeRef;
      if (containerWidth === null || contentWidth === null)
        return;
      const dX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX - memoMouseX : e.clientX - memoMouseX;
      const dScrollLeft = dX * (contentWidth - containerWidth) / (containerWidth - xBarSize);
      const toScrollLeftUpperBound = contentWidth - containerWidth;
      let toScrollLeft = memoXLeft + dScrollLeft;
      toScrollLeft = Math.min(toScrollLeftUpperBound, toScrollLeft);
      toScrollLeft = Math.max(toScrollLeft, 0);
      const { value: container } = mergedContainerRef;
      if (container) {
        container.scrollLeft = toScrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
        const { internalOnUpdateScrollLeft } = props;
        if (internalOnUpdateScrollLeft)
          internalOnUpdateScrollLeft(toScrollLeft);
      }
    }
    function handleXScrollMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      off("mousemove", window, handleXScrollMouseMove, true);
      off("mouseup", window, handleXScrollMouseUp, true);
      xBarPressed = false;
      sync();
      if (isMouseUpAway(e)) {
        hideBar();
      }
    }
    function handleYScrollMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      yBarPressed = true;
      on("mousemove", window, handleYScrollMouseMove, true);
      on("mouseup", window, handleYScrollMouseUp, true);
      memoYTop = containerScrollTopRef.value;
      memoMouseY = e.clientY;
    }
    function handleYScrollMouseMove(e) {
      if (!yBarPressed)
        return;
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      const { value: containerHeight } = containerHeightRef;
      const { value: contentHeight } = contentHeightRef;
      const { value: yBarSize } = yBarSizeRef;
      if (containerHeight === null || contentHeight === null)
        return;
      const dY = e.clientY - memoMouseY;
      const dScrollTop = dY * (contentHeight - containerHeight) / (containerHeight - yBarSize);
      const toScrollTopUpperBound = contentHeight - containerHeight;
      let toScrollTop = memoYTop + dScrollTop;
      toScrollTop = Math.min(toScrollTopUpperBound, toScrollTop);
      toScrollTop = Math.max(toScrollTop, 0);
      const { value: container } = mergedContainerRef;
      if (container) {
        container.scrollTop = toScrollTop;
      }
    }
    function handleYScrollMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      off("mousemove", window, handleYScrollMouseMove, true);
      off("mouseup", window, handleYScrollMouseUp, true);
      yBarPressed = false;
      sync();
      if (isMouseUpAway(e)) {
        hideBar();
      }
    }
    watchEffect(() => {
      const { value: needXBar } = needXBarRef;
      const { value: needYBar } = needYBarRef;
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      const { value: xRailEl } = xRailRef;
      const { value: yRailEl } = yRailRef;
      if (xRailEl) {
        if (!needXBar) {
          xRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        } else {
          xRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        }
      }
      if (yRailEl) {
        if (!needYBar) {
          yRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        } else {
          yRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        }
      }
    });
    onMounted(() => {
      if (props.container)
        return;
      sync();
    });
    onBeforeUnmount(() => {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      off("mousemove", window, handleYScrollMouseMove, true);
      off("mouseup", window, handleYScrollMouseUp, true);
    });
    const themeRef = useTheme("Scrollbar", "-scrollbar", style$1, scrollbarLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2, scrollbarBorderRadius, scrollbarHeight, scrollbarWidth }, self: { color, colorHover } } = themeRef.value;
      return {
        "--n-scrollbar-bezier": cubicBezierEaseInOut2,
        "--n-scrollbar-color": color,
        "--n-scrollbar-color-hover": colorHover,
        "--n-scrollbar-border-radius": scrollbarBorderRadius,
        "--n-scrollbar-width": scrollbarWidth,
        "--n-scrollbar-height": scrollbarHeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("scrollbar", void 0, cssVarsRef, props) : void 0;
    const exposedMethods = {
      scrollTo,
      scrollBy,
      sync,
      syncUnifiedContainer,
      handleMouseEnterWrapper,
      handleMouseLeaveWrapper
    };
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      containerScrollTop: containerScrollTopRef,
      wrapperRef,
      containerRef,
      contentRef,
      yRailRef,
      xRailRef,
      needYBar: needYBarRef,
      needXBar: needXBarRef,
      yBarSizePx: yBarSizePxRef,
      xBarSizePx: xBarSizePxRef,
      yBarTopPx: yBarTopPxRef,
      xBarLeftPx: xBarLeftPxRef,
      isShowXBar: mergedShowXBarRef,
      isShowYBar: mergedShowYBarRef,
      isIos: isIos2,
      handleScroll,
      handleContentResize,
      handleContainerResize,
      handleYScrollMouseDown,
      handleXScrollMouseDown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const { $slots, mergedClsPrefix, triggerDisplayManually, rtlEnabled, internalHoistYRail } = this;
    if (!this.scrollable)
      return (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
    const triggerIsNone = this.trigger === "none";
    const createYRail = () => {
      return h("div", { ref: "yRailRef", class: [
        `${mergedClsPrefix}-scrollbar-rail`,
        `${mergedClsPrefix}-scrollbar-rail--vertical`
      ], "data-scrollbar-rail": true, style: this.verticalRailStyle, "aria-hidden": true }, h(triggerIsNone ? Wrapper : Transition, triggerIsNone ? null : { name: "fade-in-transition" }, {
        default: () => this.needYBar && this.isShowYBar && !this.isIos ? h("div", { class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`, style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        }, onMousedown: this.handleYScrollMouseDown }) : null
      }));
    };
    const createChildren = () => {
      var _a2, _b;
      (_a2 = this.onRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
      return h("div", mergeProps(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [
          `${mergedClsPrefix}-scrollbar`,
          this.themeClass,
          rtlEnabled && `${mergedClsPrefix}-scrollbar--rtl`
        ],
        style: this.cssVars,
        onMouseenter: triggerDisplayManually ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: triggerDisplayManually ? void 0 : this.handleMouseLeaveWrapper
      }), [
        this.container ? (_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots) : h(
          "div",
          { role: "none", ref: "containerRef", class: [
            `${mergedClsPrefix}-scrollbar-container`,
            this.containerClass
          ], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel },
          h(VResizeObserver, { onResize: this.handleContentResize }, {
            default: () => h("div", { ref: "contentRef", role: "none", style: [
              {
                width: this.xScrollable ? "fit-content" : null
              },
              this.contentStyle
            ], class: [
              `${mergedClsPrefix}-scrollbar-content`,
              this.contentClass
            ] }, $slots)
          })
        ),
        internalHoistYRail ? null : createYRail(),
        this.xScrollable && h("div", { ref: "xRailRef", class: [
          `${mergedClsPrefix}-scrollbar-rail`,
          `${mergedClsPrefix}-scrollbar-rail--horizontal`
        ], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, h(triggerIsNone ? Wrapper : Transition, triggerIsNone ? null : { name: "fade-in-transition" }, {
          default: () => this.needXBar && this.isShowXBar && !this.isIos ? h("div", { class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`, style: {
            width: this.xBarSizePx,
            right: rtlEnabled ? this.xBarLeftPx : void 0,
            left: rtlEnabled ? void 0 : this.xBarLeftPx
          }, onMousedown: this.handleXScrollMouseDown }) : null
        }))
      ]);
    };
    const scrollbarNode = this.container ? createChildren() : h(VResizeObserver, { onResize: this.handleContainerResize }, {
      default: createChildren
    });
    if (internalHoistYRail) {
      return h(
        Fragment,
        null,
        scrollbarNode,
        createYRail()
      );
    } else {
      return scrollbarNode;
    }
  }
});
const NScrollbar = Scrollbar;
const XScrollbar = Scrollbar;
const style = cB("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [cM("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), cM("depth", {
  color: "var(--n-color)"
}, [c("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), c("svg", {
  height: "1em",
  width: "1em"
})]);
const iconProps = Object.assign(Object.assign({}, useTheme.props), { depth: [String, Number], size: [Number, String], color: String, component: Object });
const NIcon = defineComponent({
  _n_icon__: true,
  name: "Icon",
  inheritAttrs: false,
  props: iconProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Icon", "-icon", style, iconLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { depth } = props;
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self } = themeRef.value;
      if (depth !== void 0) {
        const { color, [`opacity${depth}Depth`]: opacity } = self;
        return {
          "--n-bezier": cubicBezierEaseInOut2,
          "--n-color": color,
          "--n-opacity": opacity
        };
      }
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-color": "",
        "--n-opacity": ""
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("icon", computed(() => `${props.depth || "d"}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedStyle: computed(() => {
        const { size: size2, color } = props;
        return {
          fontSize: formatLength(size2),
          color
        };
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { $parent, depth, mergedClsPrefix, component, onRender, themeClass } = this;
    if ((_a = $parent === null || $parent === void 0 ? void 0 : $parent.$options) === null || _a === void 0 ? void 0 : _a._n_icon__) {
      warn$2("icon", "don't wrap `n-icon` inside `n-icon`");
    }
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("i", mergeProps(this.$attrs, {
      role: "img",
      class: [
        `${mergedClsPrefix}-icon`,
        themeClass,
        {
          [`${mergedClsPrefix}-icon--depth`]: depth,
          [`${mergedClsPrefix}-icon--color-transition`]: depth !== void 0
        }
      ],
      style: [this.cssVars, this.mergedStyle]
    }), component ? h(component) : this.$slots);
  }
});
export {
  FocusTrap as F,
  LazyTeleport as L,
  NIcon as N,
  VResizeObserver as V,
  XScrollbar as X,
  NScrollbar as a,
  off as b,
  getFirstVNode as c,
  drawerBodyInjectionKey as d,
  clickoutside$1 as e,
  formatLength as f,
  getSlot as g,
  getFirstSlotVNode as h,
  isBrowser as i,
  hasInstance as j,
  keep as k,
  modalInjectionKey as l,
  modalBodyInjectionKey as m,
  fadeInTransition as n,
  on as o,
  popoverBodyInjectionKey as p,
  resizeObserverManager as r,
  useReactivated as u,
  zindexable$1 as z
};
