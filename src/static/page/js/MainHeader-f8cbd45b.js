import { d as defineComponent, K as useSsrAdapter, o as onMounted, L as onActivated, M as onDeactivated, c as computed, b as ref, N as useMemo, j as h, O as mergeProps, P as onBeforeUnmount, Q as inject, R as render, S as NBaseIcon, T as Transition, e as cB, f as cE, U as cM, V as c$1, W as cNotM, g as useTheme, X as toRef, Y as internalSelectMenuLight, Z as watch, $ as nextTick, a0 as createKey, a1 as provide, h as useThemeClass, a2 as NBaseLoading, a3 as commonVariables, a4 as useStyle, a5 as NFadeInExpandTransition, a6 as TransitionGroup, a7 as commonLight, u as useConfig, a8 as createTheme, a9 as popoverLight, aa as createInjectionKey, ab as omit, ac as scrollbarLight, ad as composite, D as createElementBlock, E as createBaseVNode, A as openBlock, k as storeToRefs, I as useErrorInfoStore, ae as has, af as timeFormatter, _ as _export_sfc, y as createBlock, z as withCtx, B as createVNode, C as createTextVNode, ag as resolveComponent, ah as pushScopeId, ai as popScopeId } from "./main-8183f0bd.js";
import { V as VResizeObserver, r as resizeObserverManager, a as NScrollbar, k as keep, u as useReactivated, N as NIcon } from "./Icon-6c59cc46.js";
import { c as cssrAnchorMetaName, a as c, b as beforeNextFrameOnce, i as internalSelectionMenuInjectionKey, d as internalSelectionMenuBodyInjectionKey, N as NPopover, p as popoverBaseProps, W as WarningOutline, _ as __unplugin_components_2$2 } from "./WarningOutline-09a89e98.js";
import { d as depx, p as pxfy, g as getMargin, r as resolveWrappedSlot, a as resolveSlot, i as isSlotEmpty, u as useRtl, k as keysOf, c as call, _ as __unplugin_components_7 } from "./Space-2ff10da0.js";
import { f as fadeInScaleUpTransition, _ as __unplugin_components_9, a as fadeInWidthExpandTransition, c as color2Class, N as NBaseWave } from "./fade-in-width-expand.cssr-985ca46b.js";
function happensIn(e, dataSetPropName) {
  let { target } = e;
  while (target) {
    if (target.dataset) {
      if (target.dataset[dataSetPropName] !== void 0)
        return true;
    }
    target = target.parentElement;
  }
  return false;
}
function getTitleAttribute(value) {
  switch (typeof value) {
    case "string":
      return value || void 0;
    case "number":
      return String(value);
    default:
      return void 0;
  }
}
function createRefSetter(ref2) {
  return (inst) => {
    if (inst) {
      ref2.value = inst.$el;
    } else {
      ref2.value = null;
    }
  };
}
function mergeEventHandlers(handlers) {
  const filteredHandlers = handlers.filter((handler) => handler !== void 0);
  if (filteredHandlers.length === 0)
    return void 0;
  if (filteredHandlers.length === 1)
    return filteredHandlers[0];
  return (e) => {
    handlers.forEach((handler) => {
      if (handler) {
        handler(e);
      }
    });
  };
}
function lowBit(n) {
  return n & -n;
}
class FinweckTree {
  constructor(l, min) {
    this.l = l;
    this.min = min;
    const ft = new Array(l + 1);
    for (let i = 0; i < l + 1; ++i) {
      ft[i] = 0;
    }
    this.ft = ft;
  }
  add(i, n) {
    if (n === 0)
      return;
    const { l, ft } = this;
    i += 1;
    while (i <= l) {
      ft[i] += n;
      i += lowBit(i);
    }
  }
  get(i) {
    return this.sum(i + 1) - this.sum(i);
  }
  sum(i) {
    if (i === void 0)
      i = this.l;
    if (i <= 0)
      return 0;
    const { ft, min, l } = this;
    if (i > l)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let ret = i * min;
    while (i > 0) {
      ret += ft[i];
      i -= lowBit(i);
    }
    return ret;
  }
  getBound(threshold) {
    let l = 0;
    let r = this.l;
    while (r > l) {
      const m = Math.floor((l + r) / 2);
      const sumM = this.sum(m);
      if (sumM > threshold) {
        r = m;
        continue;
      } else if (sumM < threshold) {
        if (l === m) {
          if (this.sum(l + 1) <= threshold)
            return l + 1;
          return m;
        }
        l = m;
      } else {
        return m;
      }
    }
    return l;
  }
}
let maybeTouch;
function ensureMaybeTouch() {
  if (maybeTouch === void 0) {
    if ("matchMedia" in window) {
      maybeTouch = window.matchMedia("(pointer:coarse)").matches;
    } else {
      maybeTouch = false;
    }
  }
  return maybeTouch;
}
let wheelScale;
function ensureWheelScale() {
  if (wheelScale === void 0) {
    wheelScale = "chrome" in window ? window.devicePixelRatio : 1;
  }
  return wheelScale;
}
const styles = c(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
}, [
  c("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]);
const VVirtualList = defineComponent({
  name: "VirtualList",
  inheritAttrs: false,
  props: {
    showScrollbar: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: () => []
    },
    itemSize: {
      type: Number,
      required: true
    },
    itemResizable: Boolean,
    itemsStyle: [String, Object],
    visibleItemsTag: {
      type: [String, Object],
      default: "div"
    },
    visibleItemsProps: Object,
    ignoreItemResize: Boolean,
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    defaultScrollKey: [Number, String],
    defaultScrollIndex: Number,
    keyField: {
      type: String,
      default: "key"
    },
    paddingTop: {
      type: [Number, String],
      default: 0
    },
    paddingBottom: {
      type: [Number, String],
      default: 0
    }
  },
  setup(props) {
    const ssrAdapter = useSsrAdapter();
    styles.mount({
      id: "vueuc/virtual-list",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onMounted(() => {
      const { defaultScrollIndex, defaultScrollKey } = props;
      if (defaultScrollIndex !== void 0 && defaultScrollIndex !== null) {
        scrollTo({ index: defaultScrollIndex });
      } else if (defaultScrollKey !== void 0 && defaultScrollKey !== null) {
        scrollTo({ key: defaultScrollKey });
      }
    });
    let isDeactivated = false;
    let activateStateInitialized = false;
    onActivated(() => {
      isDeactivated = false;
      if (!activateStateInitialized) {
        activateStateInitialized = true;
        return;
      }
      scrollTo({ top: scrollTopRef.value, left: scrollLeft });
    });
    onDeactivated(() => {
      isDeactivated = true;
      if (!activateStateInitialized) {
        activateStateInitialized = true;
      }
    });
    const keyIndexMapRef = computed(() => {
      const map = /* @__PURE__ */ new Map();
      const { keyField } = props;
      props.items.forEach((item, index) => {
        map.set(item[keyField], index);
      });
      return map;
    });
    const listElRef = ref(null);
    const listHeightRef = ref(void 0);
    const keyToHeightOffset = /* @__PURE__ */ new Map();
    const finweckTreeRef = computed(() => {
      const { items, itemSize, keyField } = props;
      const ft = new FinweckTree(items.length, itemSize);
      items.forEach((item, index) => {
        const key = item[keyField];
        const heightOffset = keyToHeightOffset.get(key);
        if (heightOffset !== void 0) {
          ft.add(index, heightOffset);
        }
      });
      return ft;
    });
    const finweckTreeUpdateTrigger = ref(0);
    let scrollLeft = 0;
    const scrollTopRef = ref(0);
    const startIndexRef = useMemo(() => {
      return Math.max(finweckTreeRef.value.getBound(scrollTopRef.value - depx(props.paddingTop)) - 1, 0);
    });
    const viewportItemsRef = computed(() => {
      const { value: listHeight } = listHeightRef;
      if (listHeight === void 0)
        return [];
      const { items, itemSize } = props;
      const startIndex = startIndexRef.value;
      const endIndex = Math.min(startIndex + Math.ceil(listHeight / itemSize + 1), items.length - 1);
      const viewportItems = [];
      for (let i = startIndex; i <= endIndex; ++i) {
        viewportItems.push(items[i]);
      }
      return viewportItems;
    });
    const scrollTo = (options, y) => {
      if (typeof options === "number") {
        scrollToPosition(options, y, "auto");
        return;
      }
      const { left, top, index, key, position, behavior, debounce = true } = options;
      if (left !== void 0 || top !== void 0) {
        scrollToPosition(left, top, behavior);
      } else if (index !== void 0) {
        scrollToIndex(index, behavior, debounce);
      } else if (key !== void 0) {
        const toIndex = keyIndexMapRef.value.get(key);
        if (toIndex !== void 0)
          scrollToIndex(toIndex, behavior, debounce);
      } else if (position === "bottom") {
        scrollToPosition(0, Number.MAX_SAFE_INTEGER, behavior);
      } else if (position === "top") {
        scrollToPosition(0, 0, behavior);
      }
    };
    let anchorIndex;
    let anchorTimerId = null;
    function scrollToIndex(index, behavior, debounce) {
      const { value: ft } = finweckTreeRef;
      const targetTop = ft.sum(index) + depx(props.paddingTop);
      if (!debounce) {
        listElRef.value.scrollTo({
          left: 0,
          top: targetTop,
          behavior
        });
      } else {
        anchorIndex = index;
        if (anchorTimerId !== null) {
          window.clearTimeout(anchorTimerId);
        }
        anchorTimerId = window.setTimeout(() => {
          anchorIndex = void 0;
          anchorTimerId = null;
        }, 16);
        const { scrollTop, offsetHeight } = listElRef.value;
        if (targetTop > scrollTop) {
          const itemSize = ft.get(index);
          if (targetTop + itemSize <= scrollTop + offsetHeight)
            ;
          else {
            listElRef.value.scrollTo({
              left: 0,
              top: targetTop + itemSize - offsetHeight,
              behavior
            });
          }
        } else {
          listElRef.value.scrollTo({
            left: 0,
            top: targetTop,
            behavior
          });
        }
      }
    }
    function scrollToPosition(left, top, behavior) {
      listElRef.value.scrollTo({
        left,
        top,
        behavior
      });
    }
    function handleItemResize(key, entry) {
      var _a, _b, _c;
      if (isDeactivated)
        return;
      if (props.ignoreItemResize)
        return;
      if (isHideByVShow(entry.target))
        return;
      const { value: ft } = finweckTreeRef;
      const index = keyIndexMapRef.value.get(key);
      const previousHeight = ft.get(index);
      const height = (_c = (_b = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.blockSize) !== null && _c !== void 0 ? _c : entry.contentRect.height;
      if (height === previousHeight)
        return;
      const offset = height - props.itemSize;
      if (offset === 0) {
        keyToHeightOffset.delete(key);
      } else {
        keyToHeightOffset.set(key, height - props.itemSize);
      }
      const delta = height - previousHeight;
      if (delta === 0)
        return;
      ft.add(index, delta);
      const listEl = listElRef.value;
      if (listEl != null) {
        if (anchorIndex === void 0) {
          const previousHeightSum = ft.sum(index);
          if (listEl.scrollTop > previousHeightSum) {
            listEl.scrollBy(0, delta);
          }
        } else {
          if (index < anchorIndex) {
            listEl.scrollBy(0, delta);
          } else if (index === anchorIndex) {
            const previousHeightSum = ft.sum(index);
            if (height + previousHeightSum > listEl.scrollTop + listEl.offsetHeight) {
              listEl.scrollBy(0, delta);
            }
          }
        }
        syncViewport();
      }
      finweckTreeUpdateTrigger.value++;
    }
    const mayUseWheel = !ensureMaybeTouch();
    let wheelCatched = false;
    function handleListScroll(e) {
      var _a;
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (!mayUseWheel || !wheelCatched) {
        syncViewport();
      }
    }
    function handleListWheel(e) {
      var _a;
      (_a = props.onWheel) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (mayUseWheel) {
        const listEl = listElRef.value;
        if (listEl != null) {
          if (e.deltaX === 0) {
            if (listEl.scrollTop === 0 && e.deltaY <= 0) {
              return;
            }
            if (listEl.scrollTop + listEl.offsetHeight >= listEl.scrollHeight && e.deltaY >= 0) {
              return;
            }
          }
          e.preventDefault();
          listEl.scrollTop += e.deltaY / ensureWheelScale();
          listEl.scrollLeft += e.deltaX / ensureWheelScale();
          syncViewport();
          wheelCatched = true;
          beforeNextFrameOnce(() => {
            wheelCatched = false;
          });
        }
      }
    }
    function handleListResize(entry) {
      if (isDeactivated)
        return;
      if (isHideByVShow(entry.target))
        return;
      if (entry.contentRect.height === listHeightRef.value)
        return;
      listHeightRef.value = entry.contentRect.height;
      const { onResize } = props;
      if (onResize !== void 0)
        onResize(entry);
    }
    function syncViewport() {
      const { value: listEl } = listElRef;
      if (listEl == null)
        return;
      scrollTopRef.value = listEl.scrollTop;
      scrollLeft = listEl.scrollLeft;
    }
    function isHideByVShow(el) {
      let cursor = el;
      while (cursor !== null) {
        if (cursor.style.display === "none")
          return true;
        cursor = cursor.parentElement;
      }
      return false;
    }
    return {
      listHeight: listHeightRef,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: keyIndexMapRef,
      itemsStyle: computed(() => {
        const { itemResizable } = props;
        const height = pxfy(finweckTreeRef.value.sum());
        finweckTreeUpdateTrigger.value;
        return [
          props.itemsStyle,
          {
            boxSizing: "content-box",
            height: itemResizable ? "" : height,
            minHeight: itemResizable ? height : "",
            paddingTop: pxfy(props.paddingTop),
            paddingBottom: pxfy(props.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: computed(() => {
        finweckTreeUpdateTrigger.value;
        return {
          transform: `translateY(${pxfy(finweckTreeRef.value.sum(startIndexRef.value))})`
        };
      }),
      viewportItems: viewportItemsRef,
      listElRef,
      itemsElRef: ref(null),
      scrollTo,
      handleListResize,
      handleListScroll,
      handleListWheel,
      handleItemResize
    };
  },
  render() {
    const { itemResizable, keyField, keyToIndex, visibleItemsTag } = this;
    return h(VResizeObserver, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var _a, _b;
        return h("div", mergeProps(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? h("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            h(visibleItemsTag, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => this.viewportItems.map((item) => {
                const key = item[keyField];
                const index = keyToIndex.get(key);
                const itemVNode = this.$slots.default({
                  item,
                  index
                })[0];
                if (itemResizable) {
                  return h(VResizeObserver, {
                    key,
                    onResize: (entry) => this.handleItemResize(key, entry)
                  }, {
                    default: () => itemVNode
                  });
                }
                itemVNode.key = key;
                return itemVNode;
              })
            })
          ]) : (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a)
        ]);
      }
    });
  }
});
function useOnResize(elRef, onResize) {
  if (onResize) {
    onMounted(() => {
      const { value: el } = elRef;
      if (el) {
        resizeObserverManager.registerHandler(el, onResize);
      }
    });
    onBeforeUnmount(() => {
      const { value: el } = elRef;
      if (el) {
        resizeObserverManager.unregisterHandler(el);
      }
    });
  }
}
const FinishedIcon = defineComponent({
  name: "Checkmark",
  render() {
    return h(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
      h(
        "g",
        { fill: "none" },
        h("path", { d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z", fill: "currentColor" })
      )
    );
  }
});
const FocusDetector = defineComponent({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(props) {
    return () => h("div", { style: "width: 0; height: 0", tabindex: 0, onFocus: props.onFocus, onBlur: props.onBlur });
  }
});
function toArray(arg) {
  if (Array.isArray(arg))
    return arg;
  return [arg];
}
const TRAVERSE_COMMAND = {
  STOP: "STOP"
};
function traverseWithCb(treeNode, callback) {
  const command = callback(treeNode);
  if (treeNode.children !== void 0 && command !== TRAVERSE_COMMAND.STOP) {
    treeNode.children.forEach((childNode) => traverseWithCb(childNode, callback));
  }
}
function getNonLeafKeys(treeNodes, options = {}) {
  const { preserveGroup = false } = options;
  const keys = [];
  const cb = preserveGroup ? (node) => {
    if (!node.isLeaf) {
      keys.push(node.key);
      traverse(node.children);
    }
  } : (node) => {
    if (!node.isLeaf) {
      if (!node.isGroup)
        keys.push(node.key);
      traverse(node.children);
    }
  };
  function traverse(nodes) {
    nodes.forEach(cb);
  }
  traverse(treeNodes);
  return keys;
}
function isLeaf(rawNode, getChildren) {
  const { isLeaf: isLeaf2 } = rawNode;
  if (isLeaf2 !== void 0)
    return isLeaf2;
  else if (!getChildren(rawNode))
    return true;
  return false;
}
function defaultGetChildren(node) {
  return node.children;
}
function defaultGetKey(node) {
  return node.key;
}
function isIgnored() {
  return false;
}
function isShallowLoaded(rawNode, getChildren) {
  const { isLeaf: isLeaf2 } = rawNode;
  if (isLeaf2 === false && !Array.isArray(getChildren(rawNode)))
    return false;
  return true;
}
function isDisabled(rawNode) {
  return rawNode.disabled === true;
}
function isExpilicitlyNotLoaded(rawNode, getChildren) {
  return rawNode.isLeaf === false && !Array.isArray(getChildren(rawNode));
}
function unwrapCheckedKeys(result) {
  var _a;
  if (result === void 0 || result === null)
    return [];
  if (Array.isArray(result))
    return result;
  return (_a = result.checkedKeys) !== null && _a !== void 0 ? _a : [];
}
function unwrapIndeterminateKeys(result) {
  var _a;
  if (result === void 0 || result === null || Array.isArray(result)) {
    return [];
  }
  return (_a = result.indeterminateKeys) !== null && _a !== void 0 ? _a : [];
}
function merge(originalKeys, keysToAdd) {
  const set = new Set(originalKeys);
  keysToAdd.forEach((key) => {
    if (!set.has(key)) {
      set.add(key);
    }
  });
  return Array.from(set);
}
function minus(originalKeys, keysToRemove) {
  const set = new Set(originalKeys);
  keysToRemove.forEach((key) => {
    if (set.has(key)) {
      set.delete(key);
    }
  });
  return Array.from(set);
}
function isGroup(rawNode) {
  return (rawNode === null || rawNode === void 0 ? void 0 : rawNode.type) === "group";
}
function createIndexGetter(treeNodes) {
  const map = /* @__PURE__ */ new Map();
  treeNodes.forEach((treeNode, i) => {
    map.set(treeNode.key, i);
  });
  return (key) => {
    var _a;
    return (_a = map.get(key)) !== null && _a !== void 0 ? _a : null;
  };
}
class SubtreeNotLoadedError extends Error {
  constructor() {
    super();
    this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function getExtendedCheckedKeySetAfterCheck(checkKeys, currentCheckedKeys, treeMate, allowNotLoaded) {
  return getExtendedCheckedKeySet(currentCheckedKeys.concat(checkKeys), treeMate, allowNotLoaded, false);
}
function getAvailableAscendantNodeSet(uncheckedKeys, treeMate) {
  const visitedKeys = /* @__PURE__ */ new Set();
  uncheckedKeys.forEach((uncheckedKey) => {
    const uncheckedTreeNode = treeMate.treeNodeMap.get(uncheckedKey);
    if (uncheckedTreeNode !== void 0) {
      let nodeCursor = uncheckedTreeNode.parent;
      while (nodeCursor !== null) {
        if (nodeCursor.disabled)
          break;
        if (visitedKeys.has(nodeCursor.key))
          break;
        else {
          visitedKeys.add(nodeCursor.key);
        }
        nodeCursor = nodeCursor.parent;
      }
    }
  });
  return visitedKeys;
}
function getExtendedCheckedKeySetAfterUncheck(uncheckedKeys, currentCheckedKeys, treeMate, allowNotLoaded) {
  const extendedCheckedKeySet = getExtendedCheckedKeySet(currentCheckedKeys, treeMate, allowNotLoaded, false);
  const extendedKeySetToUncheck = getExtendedCheckedKeySet(uncheckedKeys, treeMate, allowNotLoaded, true);
  const ascendantKeySet = getAvailableAscendantNodeSet(uncheckedKeys, treeMate);
  const keysToRemove = [];
  extendedCheckedKeySet.forEach((key) => {
    if (extendedKeySetToUncheck.has(key) || ascendantKeySet.has(key)) {
      keysToRemove.push(key);
    }
  });
  keysToRemove.forEach((key) => extendedCheckedKeySet.delete(key));
  return extendedCheckedKeySet;
}
function getCheckedKeys(options, treeMate) {
  const { checkedKeys, keysToCheck, keysToUncheck, indeterminateKeys, cascade, leafOnly, checkStrategy, allowNotLoaded } = options;
  if (!cascade) {
    if (keysToCheck !== void 0) {
      return {
        checkedKeys: merge(checkedKeys, keysToCheck),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    } else if (keysToUncheck !== void 0) {
      return {
        checkedKeys: minus(checkedKeys, keysToUncheck),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    } else {
      return {
        checkedKeys: Array.from(checkedKeys),
        indeterminateKeys: Array.from(indeterminateKeys)
      };
    }
  }
  const { levelTreeNodeMap } = treeMate;
  let extendedCheckedKeySet;
  if (keysToUncheck !== void 0) {
    extendedCheckedKeySet = getExtendedCheckedKeySetAfterUncheck(keysToUncheck, checkedKeys, treeMate, allowNotLoaded);
  } else if (keysToCheck !== void 0) {
    extendedCheckedKeySet = getExtendedCheckedKeySetAfterCheck(keysToCheck, checkedKeys, treeMate, allowNotLoaded);
  } else {
    extendedCheckedKeySet = getExtendedCheckedKeySet(checkedKeys, treeMate, allowNotLoaded, false);
  }
  const checkStrategyIsParent = checkStrategy === "parent";
  const checkStrategyIsChild = checkStrategy === "child" || leafOnly;
  const syntheticCheckedKeySet = extendedCheckedKeySet;
  const syntheticIndeterminateKeySet = /* @__PURE__ */ new Set();
  const maxLevel = Math.max.apply(null, Array.from(levelTreeNodeMap.keys()));
  for (let level = maxLevel; level >= 0; level -= 1) {
    const levelIsZero = level === 0;
    const levelTreeNodes = levelTreeNodeMap.get(level);
    for (const levelTreeNode of levelTreeNodes) {
      if (levelTreeNode.isLeaf)
        continue;
      const { key: levelTreeNodeKey, shallowLoaded } = levelTreeNode;
      if (checkStrategyIsChild && shallowLoaded) {
        levelTreeNode.children.forEach((v) => {
          if (!v.disabled && !v.isLeaf && v.shallowLoaded && syntheticCheckedKeySet.has(v.key)) {
            syntheticCheckedKeySet.delete(v.key);
          }
        });
      }
      if (levelTreeNode.disabled || !shallowLoaded) {
        continue;
      }
      let fullyChecked = true;
      let partialChecked = false;
      let allDisabled = true;
      for (const childNode of levelTreeNode.children) {
        const childKey = childNode.key;
        if (childNode.disabled)
          continue;
        if (allDisabled)
          allDisabled = false;
        if (syntheticCheckedKeySet.has(childKey)) {
          partialChecked = true;
        } else if (syntheticIndeterminateKeySet.has(childKey)) {
          partialChecked = true;
          fullyChecked = false;
          break;
        } else {
          fullyChecked = false;
          if (partialChecked) {
            break;
          }
        }
      }
      if (fullyChecked && !allDisabled) {
        if (checkStrategyIsParent) {
          levelTreeNode.children.forEach((v) => {
            if (!v.disabled && syntheticCheckedKeySet.has(v.key)) {
              syntheticCheckedKeySet.delete(v.key);
            }
          });
        }
        syntheticCheckedKeySet.add(levelTreeNodeKey);
      } else if (partialChecked) {
        syntheticIndeterminateKeySet.add(levelTreeNodeKey);
      }
      if (levelIsZero && checkStrategyIsChild && syntheticCheckedKeySet.has(levelTreeNodeKey)) {
        syntheticCheckedKeySet.delete(levelTreeNodeKey);
      }
    }
  }
  return {
    checkedKeys: Array.from(syntheticCheckedKeySet),
    indeterminateKeys: Array.from(syntheticIndeterminateKeySet)
  };
}
function getExtendedCheckedKeySet(checkedKeys, treeMate, allowNotLoaded, isUnchecking) {
  const { treeNodeMap, getChildren } = treeMate;
  const visitedKeySet = /* @__PURE__ */ new Set();
  const extendedKeySet = new Set(checkedKeys);
  checkedKeys.forEach((checkedKey) => {
    const checkedTreeNode = treeNodeMap.get(checkedKey);
    if (checkedTreeNode !== void 0) {
      traverseWithCb(checkedTreeNode, (treeNode) => {
        if (treeNode.disabled) {
          return TRAVERSE_COMMAND.STOP;
        }
        const { key } = treeNode;
        if (visitedKeySet.has(key))
          return;
        visitedKeySet.add(key);
        extendedKeySet.add(key);
        if (isExpilicitlyNotLoaded(treeNode.rawNode, getChildren)) {
          if (isUnchecking) {
            return TRAVERSE_COMMAND.STOP;
          } else if (!allowNotLoaded) {
            throw new SubtreeNotLoadedError();
          }
        }
      });
    }
  });
  return extendedKeySet;
}
function getPath(key, { includeGroup = false, includeSelf = true }, treeMate) {
  var _a;
  const treeNodeMap = treeMate.treeNodeMap;
  let treeNode = key === null || key === void 0 ? null : (_a = treeNodeMap.get(key)) !== null && _a !== void 0 ? _a : null;
  const mergedPath = {
    keyPath: [],
    treeNodePath: [],
    treeNode
  };
  if (treeNode === null || treeNode === void 0 ? void 0 : treeNode.ignored) {
    mergedPath.treeNode = null;
    return mergedPath;
  }
  while (treeNode) {
    if (!treeNode.ignored && (includeGroup || !treeNode.isGroup)) {
      mergedPath.treeNodePath.push(treeNode);
    }
    treeNode = treeNode.parent;
  }
  mergedPath.treeNodePath.reverse();
  if (!includeSelf)
    mergedPath.treeNodePath.pop();
  mergedPath.keyPath = mergedPath.treeNodePath.map((treeNode2) => treeNode2.key);
  return mergedPath;
}
function getFirstAvailableNode(nodes) {
  if (nodes.length === 0)
    return null;
  const node = nodes[0];
  if (node.isGroup || node.ignored || node.disabled) {
    return node.getNext();
  }
  return node;
}
function rawGetNext(node, loop) {
  const sibs = node.siblings;
  const l = sibs.length;
  const { index } = node;
  if (loop) {
    return sibs[(index + 1) % l];
  } else {
    if (index === sibs.length - 1)
      return null;
    return sibs[index + 1];
  }
}
function move(fromNode, dir, { loop = false, includeDisabled = false } = {}) {
  const iterate = dir === "prev" ? rawGetPrev : rawGetNext;
  const getChildOptions = {
    reverse: dir === "prev"
  };
  let meet = false;
  let endNode = null;
  function traverse(node) {
    if (node === null)
      return;
    if (node === fromNode) {
      if (!meet) {
        meet = true;
      } else if (!fromNode.disabled && !fromNode.isGroup) {
        endNode = fromNode;
        return;
      }
    } else {
      if ((!node.disabled || includeDisabled) && !node.ignored && !node.isGroup) {
        endNode = node;
        return;
      }
    }
    if (node.isGroup) {
      const child = getChild(node, getChildOptions);
      if (child !== null) {
        endNode = child;
      } else {
        traverse(iterate(node, loop));
      }
    } else {
      const nextNode = iterate(node, false);
      if (nextNode !== null) {
        traverse(nextNode);
      } else {
        const parent = rawGetParent(node);
        if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
          traverse(iterate(parent, loop));
        } else if (loop) {
          traverse(iterate(node, true));
        }
      }
    }
  }
  traverse(fromNode);
  return endNode;
}
function rawGetPrev(node, loop) {
  const sibs = node.siblings;
  const l = sibs.length;
  const { index } = node;
  if (loop) {
    return sibs[(index - 1 + l) % l];
  } else {
    if (index === 0)
      return null;
    return sibs[index - 1];
  }
}
function rawGetParent(node) {
  return node.parent;
}
function getChild(node, options = {}) {
  const { reverse = false } = options;
  const { children } = node;
  if (children) {
    const { length } = children;
    const start = reverse ? length - 1 : 0;
    const end = reverse ? -1 : length;
    const delta = reverse ? -1 : 1;
    for (let i = start; i !== end; i += delta) {
      const child = children[i];
      if (!child.disabled && !child.ignored) {
        if (child.isGroup) {
          const childInGroup = getChild(child, options);
          if (childInGroup !== null)
            return childInGroup;
        } else {
          return child;
        }
      }
    }
  }
  return null;
}
const moveMethods = {
  getChild() {
    if (this.ignored)
      return null;
    return getChild(this);
  },
  getParent() {
    const { parent } = this;
    if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
      return parent.getParent();
    }
    return parent;
  },
  getNext(options = {}) {
    return move(this, "next", options);
  },
  getPrev(options = {}) {
    return move(this, "prev", options);
  }
};
function flatten(treeNodes, expandedKeys) {
  const expandedKeySet = expandedKeys ? new Set(expandedKeys) : void 0;
  const flattenedNodes = [];
  function traverse(treeNodes2) {
    treeNodes2.forEach((treeNode) => {
      flattenedNodes.push(treeNode);
      if (treeNode.isLeaf || !treeNode.children || treeNode.ignored)
        return;
      if (treeNode.isGroup) {
        traverse(treeNode.children);
      } else if (expandedKeySet === void 0 || expandedKeySet.has(treeNode.key)) {
        traverse(treeNode.children);
      }
    });
  }
  traverse(treeNodes);
  return flattenedNodes;
}
function contains(parent, child) {
  const parentKey = parent.key;
  while (child) {
    if (child.key === parentKey)
      return true;
    child = child.parent;
  }
  return false;
}
function createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, parent = null, level = 0) {
  const treeNodes = [];
  rawNodes.forEach((rawNode, index) => {
    var _a;
    const treeNode = Object.create(nodeProto);
    treeNode.rawNode = rawNode;
    treeNode.siblings = treeNodes;
    treeNode.level = level;
    treeNode.index = index;
    treeNode.isFirstChild = index === 0;
    treeNode.isLastChild = index + 1 === rawNodes.length;
    treeNode.parent = parent;
    if (!treeNode.ignored) {
      const rawChildren = getChildren(rawNode);
      if (Array.isArray(rawChildren)) {
        treeNode.children = createTreeNodes(rawChildren, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, treeNode, level + 1);
      }
    }
    treeNodes.push(treeNode);
    treeNodeMap.set(treeNode.key, treeNode);
    if (!levelTreeNodeMap.has(level))
      levelTreeNodeMap.set(level, []);
    (_a = levelTreeNodeMap.get(level)) === null || _a === void 0 ? void 0 : _a.push(treeNode);
  });
  return treeNodes;
}
function createTreeMate(rawNodes, options = {}) {
  var _a;
  const treeNodeMap = /* @__PURE__ */ new Map();
  const levelTreeNodeMap = /* @__PURE__ */ new Map();
  const { getDisabled = isDisabled, getIgnored: getIgnored2 = isIgnored, getIsGroup: getIsGroup2 = isGroup, getKey = defaultGetKey } = options;
  const _getChildren = (_a = options.getChildren) !== null && _a !== void 0 ? _a : defaultGetChildren;
  const getChildren = options.ignoreEmptyChildren ? (node) => {
    const children = _getChildren(node);
    if (Array.isArray(children)) {
      if (!children.length)
        return null;
      return children;
    }
    return children;
  } : _getChildren;
  const nodeProto = Object.assign({
    get key() {
      return getKey(this.rawNode);
    },
    get disabled() {
      return getDisabled(this.rawNode);
    },
    get isGroup() {
      return getIsGroup2(this.rawNode);
    },
    get isLeaf() {
      return isLeaf(this.rawNode, getChildren);
    },
    get shallowLoaded() {
      return isShallowLoaded(this.rawNode, getChildren);
    },
    get ignored() {
      return getIgnored2(this.rawNode);
    },
    contains(node) {
      return contains(this, node);
    }
  }, moveMethods);
  const treeNodes = createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren);
  function getNode(key) {
    if (key === null || key === void 0)
      return null;
    const tmNode = treeNodeMap.get(key);
    if (tmNode && !tmNode.isGroup && !tmNode.ignored) {
      return tmNode;
    }
    return null;
  }
  function _getNode(key) {
    if (key === null || key === void 0)
      return null;
    const tmNode = treeNodeMap.get(key);
    if (tmNode && !tmNode.ignored) {
      return tmNode;
    }
    return null;
  }
  function getPrev(key, options2) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getPrev(options2);
  }
  function getNext(key, options2) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getNext(options2);
  }
  function getParent(key) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getParent();
  }
  function getChild2(key) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getChild();
  }
  const treemate = {
    treeNodes,
    treeNodeMap,
    levelTreeNodeMap,
    maxLevel: Math.max(...levelTreeNodeMap.keys()),
    getChildren,
    getFlattenedNodes(expandedKeys) {
      return flatten(treeNodes, expandedKeys);
    },
    getNode,
    getPrev,
    getNext,
    getParent,
    getChild: getChild2,
    getFirstAvailableNode() {
      return getFirstAvailableNode(treeNodes);
    },
    getPath(key, options2 = {}) {
      return getPath(key, options2, treemate);
    },
    getCheckedKeys(checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    check(keysToCheck, checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        keysToCheck: keysToCheck === void 0 || keysToCheck === null ? [] : toArray(keysToCheck),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    uncheck(keysToUncheck, checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        keysToUncheck: keysToUncheck === null || keysToUncheck === void 0 ? [] : toArray(keysToUncheck),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    getNonLeafKeys(options2 = {}) {
      return getNonLeafKeys(treeNodes, options2);
    }
  };
  return treemate;
}
const checkMarkIcon = h(FinishedIcon);
function renderCheckMark(show, clsPrefix) {
  return h(Transition, { name: "fade-in-scale-up-transition" }, {
    default: () => show ? h(NBaseIcon, { clsPrefix, class: `${clsPrefix}-base-select-option__check` }, {
      default: () => checkMarkIcon
    }) : null
  });
}
const NSelectOption = defineComponent({
  name: "NBaseSelectOption",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      valueRef,
      pendingTmNodeRef,
      multipleRef,
      valueSetRef,
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      valueFieldRef,
      showCheckmarkRef,
      nodePropsRef,
      handleOptionClick,
      handleOptionMouseEnter
    } = inject(internalSelectionMenuInjectionKey);
    const isPendingRef = useMemo(() => {
      const { value: pendingTmNode } = pendingTmNodeRef;
      if (!pendingTmNode)
        return false;
      return props.tmNode.key === pendingTmNode.key;
    });
    function handleClick(e) {
      const { tmNode } = props;
      if (tmNode.disabled)
        return;
      handleOptionClick(e, tmNode);
    }
    function handleMouseEnter(e) {
      const { tmNode } = props;
      if (tmNode.disabled)
        return;
      handleOptionMouseEnter(e, tmNode);
    }
    function handleMouseMove(e) {
      const { tmNode } = props;
      const { value: isPending } = isPendingRef;
      if (tmNode.disabled || isPending)
        return;
      handleOptionMouseEnter(e, tmNode);
    }
    return {
      multiple: multipleRef,
      isGrouped: useMemo(() => {
        const { tmNode } = props;
        const { parent } = tmNode;
        return parent && parent.rawNode.type === "group";
      }),
      showCheckmark: showCheckmarkRef,
      nodeProps: nodePropsRef,
      isPending: isPendingRef,
      isSelected: useMemo(() => {
        const { value } = valueRef;
        const { value: multiple } = multipleRef;
        if (value === null)
          return false;
        const optionValue = props.tmNode.rawNode[valueFieldRef.value];
        if (multiple) {
          const { value: valueSet } = valueSetRef;
          return valueSet.has(optionValue);
        } else {
          return value === optionValue;
        }
      }),
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef,
      handleMouseMove,
      handleMouseEnter,
      handleClick
    };
  },
  render() {
    const { clsPrefix, tmNode: { rawNode }, isSelected, isPending, isGrouped, showCheckmark, nodeProps, renderOption, renderLabel, handleClick, handleMouseEnter, handleMouseMove } = this;
    const checkmark = renderCheckMark(isSelected, clsPrefix);
    const children = renderLabel ? [renderLabel(rawNode, isSelected), showCheckmark && checkmark] : [
      render(rawNode[this.labelField], rawNode, isSelected),
      showCheckmark && checkmark
    ];
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const node = h(
      "div",
      Object.assign({}, attrs, { class: [
        `${clsPrefix}-base-select-option`,
        rawNode.class,
        attrs === null || attrs === void 0 ? void 0 : attrs.class,
        {
          [`${clsPrefix}-base-select-option--disabled`]: rawNode.disabled,
          [`${clsPrefix}-base-select-option--selected`]: isSelected,
          [`${clsPrefix}-base-select-option--grouped`]: isGrouped,
          [`${clsPrefix}-base-select-option--pending`]: isPending,
          [`${clsPrefix}-base-select-option--show-checkmark`]: showCheckmark
        }
      ], style: [(attrs === null || attrs === void 0 ? void 0 : attrs.style) || "", rawNode.style || ""], onClick: mergeEventHandlers([handleClick, attrs === null || attrs === void 0 ? void 0 : attrs.onClick]), onMouseenter: mergeEventHandlers([
        handleMouseEnter,
        attrs === null || attrs === void 0 ? void 0 : attrs.onMouseenter
      ]), onMousemove: mergeEventHandlers([handleMouseMove, attrs === null || attrs === void 0 ? void 0 : attrs.onMousemove]) }),
      h("div", { class: `${clsPrefix}-base-select-option__content` }, children)
    );
    return rawNode.render ? rawNode.render({ node, option: rawNode, selected: isSelected }) : renderOption ? renderOption({ node, option: rawNode, selected: isSelected }) : node;
  }
});
const NSelectGroupHeader = defineComponent({
  name: "NBaseSelectGroupHeader",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup() {
    const {
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      nodePropsRef
    } = inject(internalSelectionMenuInjectionKey);
    return {
      labelField: labelFieldRef,
      nodeProps: nodePropsRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef
    };
  },
  render() {
    const { clsPrefix, renderLabel, renderOption, nodeProps, tmNode: { rawNode } } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const children = renderLabel ? renderLabel(rawNode, false) : render(rawNode[this.labelField], rawNode, false);
    const node = h("div", Object.assign({}, attrs, { class: [`${clsPrefix}-base-select-group-header`, attrs === null || attrs === void 0 ? void 0 : attrs.class] }), children);
    return rawNode.render ? rawNode.render({ node, option: rawNode }) : renderOption ? renderOption({ node, option: rawNode, selected: false }) : node;
  }
});
const style$5 = cB("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [cB("scrollbar", `
 max-height: var(--n-height);
 `), cB("virtual-list", `
 max-height: var(--n-height);
 `), cB("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [cE("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), cB("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), cB("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), cE("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), cE("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), cE("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cB("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), cB("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [cM("show-checkmark", `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), c$1("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), c$1("&:active", `
 color: var(--n-option-text-color-pressed);
 `), cM("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), cM("selected", `
 color: var(--n-option-text-color-active);
 `, [c$1("&::before", `
 background-color: var(--n-option-color-active);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `, [cNotM("selected", `
 color: var(--n-option-text-color-disabled);
 `), cM("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), cE("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [fadeInScaleUpTransition({
  enterScale: "0.5"
})])])]);
const NInternalSelectMenu = defineComponent({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    treeMate: {
      type: Object,
      required: true
    },
    multiple: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    autoPending: Boolean,
    virtualScroll: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    loading: Boolean,
    focusable: Boolean,
    renderLabel: Function,
    renderOption: Function,
    nodeProps: Function,
    showCheckmark: { type: Boolean, default: true },
    onMousedown: Function,
    onScroll: Function,
    onFocus: Function,
    onBlur: Function,
    onKeyup: Function,
    onKeydown: Function,
    onTabOut: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onResize: Function,
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: true
    },
    inlineThemeDisabled: Boolean,
    onToggle: Function
  }),
  setup(props) {
    const themeRef = useTheme("InternalSelectMenu", "-internal-select-menu", style$5, internalSelectMenuLight, props, toRef(props, "clsPrefix"));
    const selfRef = ref(null);
    const virtualListRef = ref(null);
    const scrollbarRef = ref(null);
    const flattenedNodesRef = computed(() => props.treeMate.getFlattenedNodes());
    const fIndexGetterRef = computed(() => createIndexGetter(flattenedNodesRef.value));
    const pendingNodeRef = ref(null);
    function initPendingNode() {
      const { treeMate } = props;
      let defaultPendingNode = null;
      const { value } = props;
      if (value === null) {
        defaultPendingNode = treeMate.getFirstAvailableNode();
      } else {
        if (props.multiple) {
          defaultPendingNode = treeMate.getNode((value || [])[(value || []).length - 1]);
        } else {
          defaultPendingNode = treeMate.getNode(value);
        }
        if (!defaultPendingNode || defaultPendingNode.disabled) {
          defaultPendingNode = treeMate.getFirstAvailableNode();
        }
      }
      if (defaultPendingNode) {
        setPendingTmNode(defaultPendingNode);
      } else {
        setPendingTmNode(null);
      }
    }
    function clearPendingNodeIfInvalid() {
      const { value: pendingNode } = pendingNodeRef;
      if (pendingNode && !props.treeMate.getNode(pendingNode.key)) {
        pendingNodeRef.value = null;
      }
    }
    let initPendingNodeWatchStopHandle;
    watch(() => props.show, (show) => {
      if (show) {
        initPendingNodeWatchStopHandle = watch(() => props.treeMate, () => {
          if (props.resetMenuOnOptionsChange) {
            if (props.autoPending) {
              initPendingNode();
            } else {
              clearPendingNodeIfInvalid();
            }
            void nextTick(scrollToPendingNode);
          } else {
            clearPendingNodeIfInvalid();
          }
        }, {
          immediate: true
        });
      } else {
        initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
      }
    }, {
      immediate: true
    });
    onBeforeUnmount(() => {
      initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
    });
    const itemSizeRef = computed(() => {
      return depx(themeRef.value.self[createKey("optionHeight", props.size)]);
    });
    const paddingRef = computed(() => {
      return getMargin(themeRef.value.self[createKey("padding", props.size)]);
    });
    const valueSetRef = computed(() => {
      if (props.multiple && Array.isArray(props.value)) {
        return new Set(props.value);
      }
      return /* @__PURE__ */ new Set();
    });
    const emptyRef = computed(() => {
      const tmNodes = flattenedNodesRef.value;
      return tmNodes && tmNodes.length === 0;
    });
    function doToggle(tmNode) {
      const { onToggle } = props;
      if (onToggle)
        onToggle(tmNode);
    }
    function doScroll(e) {
      const { onScroll } = props;
      if (onScroll)
        onScroll(e);
    }
    function handleVirtualListScroll(e) {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
      doScroll(e);
    }
    function handleVirtualListResize() {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    function getPendingTmNode() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode)
        return pendingTmNode;
      return null;
    }
    function handleOptionMouseEnter(e, tmNode) {
      if (tmNode.disabled)
        return;
      setPendingTmNode(tmNode, false);
    }
    function handleOptionClick(e, tmNode) {
      if (tmNode.disabled)
        return;
      doToggle(tmNode);
    }
    function handleKeyUp(e) {
      var _a;
      if (happensIn(e, "action"))
        return;
      (_a = props.onKeyup) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleKeyDown(e) {
      var _a;
      if (happensIn(e, "action"))
        return;
      (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleMouseDown(e) {
      var _a;
      (_a = props.onMousedown) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (props.focusable)
        return;
      e.preventDefault();
    }
    function next() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getNext({ loop: true }), true);
      }
    }
    function prev() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getPrev({ loop: true }), true);
      }
    }
    function setPendingTmNode(tmNode, doScroll2 = false) {
      pendingNodeRef.value = tmNode;
      if (doScroll2)
        scrollToPendingNode();
    }
    function scrollToPendingNode() {
      var _a, _b;
      const tmNode = pendingNodeRef.value;
      if (!tmNode)
        return;
      const fIndex = fIndexGetterRef.value(tmNode.key);
      if (fIndex === null)
        return;
      if (props.virtualScroll) {
        (_a = virtualListRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({ index: fIndex });
      } else {
        (_b = scrollbarRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo({
          index: fIndex,
          elSize: itemSizeRef.value
        });
      }
    }
    function handleFocusin(e) {
      var _a, _b;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        (_b = props.onFocus) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    function handleFocusout(e) {
      var _a, _b;
      if (!((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        (_b = props.onBlur) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    provide(internalSelectionMenuInjectionKey, {
      handleOptionMouseEnter,
      handleOptionClick,
      valueSetRef,
      pendingTmNodeRef: pendingNodeRef,
      nodePropsRef: toRef(props, "nodeProps"),
      showCheckmarkRef: toRef(props, "showCheckmark"),
      multipleRef: toRef(props, "multiple"),
      valueRef: toRef(props, "value"),
      renderLabelRef: toRef(props, "renderLabel"),
      renderOptionRef: toRef(props, "renderOption"),
      labelFieldRef: toRef(props, "labelField"),
      valueFieldRef: toRef(props, "valueField")
    });
    provide(internalSelectionMenuBodyInjectionKey, selfRef);
    onMounted(() => {
      const { value } = scrollbarRef;
      if (value)
        value.sync();
    });
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { common: { cubicBezierEaseInOut }, self: { height, borderRadius, color, groupHeaderTextColor, actionDividerColor, optionTextColorPressed, optionTextColor, optionTextColorDisabled, optionTextColorActive, optionOpacityDisabled, optionCheckColor, actionTextColor, optionColorPending, optionColorActive, loadingColor, loadingSize, optionColorActivePending, [createKey("optionFontSize", size)]: fontSize, [createKey("optionHeight", size)]: optionHeight, [createKey("optionPadding", size)]: optionPadding } } = themeRef.value;
      return {
        "--n-height": height,
        "--n-action-divider-color": actionDividerColor,
        "--n-action-text-color": actionTextColor,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-color": color,
        "--n-option-font-size": fontSize,
        "--n-group-header-text-color": groupHeaderTextColor,
        "--n-option-check-color": optionCheckColor,
        "--n-option-color-pending": optionColorPending,
        "--n-option-color-active": optionColorActive,
        "--n-option-color-active-pending": optionColorActivePending,
        "--n-option-height": optionHeight,
        "--n-option-opacity-disabled": optionOpacityDisabled,
        "--n-option-text-color": optionTextColor,
        "--n-option-text-color-active": optionTextColorActive,
        "--n-option-text-color-disabled": optionTextColorDisabled,
        "--n-option-text-color-pressed": optionTextColorPressed,
        "--n-option-padding": optionPadding,
        "--n-option-padding-left": getMargin(optionPadding, "left"),
        "--n-option-padding-right": getMargin(optionPadding, "right"),
        "--n-loading-color": loadingColor,
        "--n-loading-size": loadingSize
      };
    });
    const { inlineThemeDisabled } = props;
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("internal-select-menu", computed(() => props.size[0]), cssVarsRef, props) : void 0;
    const exposedProps = {
      selfRef,
      next,
      prev,
      getPendingTmNode
    };
    useOnResize(selfRef, props.onResize);
    return Object.assign({
      mergedTheme: themeRef,
      virtualListRef,
      scrollbarRef,
      itemSize: itemSizeRef,
      padding: paddingRef,
      flattenedNodes: flattenedNodesRef,
      empty: emptyRef,
      virtualListContainer() {
        const { value } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.listElRef;
      },
      virtualListContent() {
        const { value } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.itemsElRef;
      },
      doScroll,
      handleFocusin,
      handleFocusout,
      handleKeyUp,
      handleKeyDown,
      handleMouseDown,
      handleVirtualListResize,
      handleVirtualListScroll,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedProps);
  },
  render() {
    const { $slots, virtualScroll, clsPrefix, mergedTheme, themeClass, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { ref: "selfRef", tabindex: this.focusable ? 0 : -1, class: [
        `${clsPrefix}-base-select-menu`,
        themeClass,
        this.multiple && `${clsPrefix}-base-select-menu--multiple`
      ], style: this.cssVars, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onKeyup: this.handleKeyUp, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave },
      this.loading ? h(
        "div",
        { class: `${clsPrefix}-base-select-menu__loading` },
        h(NBaseLoading, { clsPrefix, strokeWidth: 20 })
      ) : !this.empty ? h(NScrollbar, { ref: "scrollbarRef", theme: mergedTheme.peers.Scrollbar, themeOverrides: mergedTheme.peerOverrides.Scrollbar, scrollable: this.scrollable, container: virtualScroll ? this.virtualListContainer : void 0, content: virtualScroll ? this.virtualListContent : void 0, onScroll: virtualScroll ? void 0 : this.doScroll }, {
        default: () => {
          return virtualScroll ? h(VVirtualList, { ref: "virtualListRef", class: `${clsPrefix}-virtual-list`, items: this.flattenedNodes, itemSize: this.itemSize, showScrollbar: false, paddingTop: this.padding.top, paddingBottom: this.padding.bottom, onResize: this.handleVirtualListResize, onScroll: this.handleVirtualListScroll, itemResizable: true }, {
            default: ({ item: tmNode }) => {
              return tmNode.isGroup ? h(NSelectGroupHeader, { key: tmNode.key, clsPrefix, tmNode }) : tmNode.ignored ? null : h(NSelectOption, { clsPrefix, key: tmNode.key, tmNode });
            }
          }) : h("div", { class: `${clsPrefix}-base-select-menu-option-wrapper`, style: {
            paddingTop: this.padding.top,
            paddingBottom: this.padding.bottom
          } }, this.flattenedNodes.map((tmNode) => tmNode.isGroup ? h(NSelectGroupHeader, { key: tmNode.key, clsPrefix, tmNode }) : h(NSelectOption, { clsPrefix, key: tmNode.key, tmNode })));
        }
      }) : h("div", { class: `${clsPrefix}-base-select-menu__empty`, "data-empty": true }, resolveSlot($slots.empty, () => [
        h(__unplugin_components_9, { theme: mergedTheme.peers.Empty, themeOverrides: mergedTheme.peerOverrides.Empty })
      ])),
      resolveWrappedSlot($slots.action, (children) => children && [
        h("div", { class: `${clsPrefix}-base-select-menu__action`, "data-action": true, key: "action" }, children),
        h(FocusDetector, { onFocus: this.onTabOut, key: "focus-detector" })
      ])
    );
  }
});
const SlotMachineNumber = defineComponent({
  name: "SlotMachineNumber",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    },
    oldOriginalNumber: {
      type: Number,
      default: void 0
    },
    newOriginalNumber: {
      type: Number,
      default: void 0
    }
  },
  setup(props) {
    const numberRef = ref(null);
    const oldNumberRef = ref(props.value);
    const newNumberRef = ref(props.value);
    const scrollAnimationDirectionRef = ref("up");
    const activeRef = ref(false);
    const newNumberScrollAnimationClassRef = computed(() => {
      return activeRef.value ? `${props.clsPrefix}-base-slot-machine-current-number--${scrollAnimationDirectionRef.value}-scroll` : null;
    });
    const oldNumberScrollAnimationClassRef = computed(() => {
      return activeRef.value ? `${props.clsPrefix}-base-slot-machine-old-number--${scrollAnimationDirectionRef.value}-scroll` : null;
    });
    watch(toRef(props, "value"), (value, oldValue) => {
      oldNumberRef.value = oldValue;
      newNumberRef.value = value;
      void nextTick(scroll);
    });
    function scroll() {
      const newOriginalNumber = props.newOriginalNumber;
      const oldOriginalNumber = props.oldOriginalNumber;
      if (oldOriginalNumber === void 0 || newOriginalNumber === void 0) {
        return;
      }
      if (newOriginalNumber > oldOriginalNumber) {
        scrollByDir("up");
      } else if (oldOriginalNumber > newOriginalNumber) {
        scrollByDir("down");
      }
    }
    function scrollByDir(dir) {
      scrollAnimationDirectionRef.value = dir;
      activeRef.value = false;
      void nextTick(() => {
        var _a;
        void ((_a = numberRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth);
        activeRef.value = true;
      });
    }
    return () => {
      const { clsPrefix } = props;
      return h(
        "span",
        { ref: numberRef, class: `${clsPrefix}-base-slot-machine-number` },
        oldNumberRef.value !== null ? h("span", { class: [
          `${clsPrefix}-base-slot-machine-old-number ${clsPrefix}-base-slot-machine-old-number--top`,
          oldNumberScrollAnimationClassRef.value
        ] }, oldNumberRef.value) : null,
        h(
          "span",
          { class: [
            `${clsPrefix}-base-slot-machine-current-number`,
            newNumberScrollAnimationClassRef.value
          ] },
          h("span", { ref: "numberWrapper", class: [
            `${clsPrefix}-base-slot-machine-current-number__inner`,
            typeof props.value !== "number" && `${clsPrefix}-base-slot-machine-current-number__inner--not-number`
          ] }, newNumberRef.value)
        ),
        oldNumberRef.value !== null ? h("span", { class: [
          `${clsPrefix}-base-slot-machine-old-number ${clsPrefix}-base-slot-machine-old-number--bottom`,
          oldNumberScrollAnimationClassRef.value
        ] }, oldNumberRef.value) : null
      );
    };
  }
});
const {
  cubicBezierEaseOut
} = commonVariables;
function fadeUpWidthExpandTransition({
  duration = ".2s"
} = {}) {
  return [c$1("&.fade-up-width-expand-transition-leave-active", {
    transition: `
 opacity ${duration} ${cubicBezierEaseOut},
 max-width ${duration} ${cubicBezierEaseOut},
 transform ${duration} ${cubicBezierEaseOut}
 `
  }), c$1("&.fade-up-width-expand-transition-enter-active", {
    transition: `
 opacity ${duration} ${cubicBezierEaseOut},
 max-width ${duration} ${cubicBezierEaseOut},
 transform ${duration} ${cubicBezierEaseOut}
 `
  }), c$1("&.fade-up-width-expand-transition-enter-to", {
    opacity: 1,
    transform: "translateX(0) translateY(0)"
  }), c$1("&.fade-up-width-expand-transition-enter-from", {
    maxWidth: "0 !important",
    opacity: 0,
    transform: "translateY(60%)"
  }), c$1("&.fade-up-width-expand-transition-leave-from", {
    opacity: 1,
    transform: "translateY(0)"
  }), c$1("&.fade-up-width-expand-transition-leave-to", {
    maxWidth: "0 !important",
    opacity: 0,
    transform: "translateY(60%)"
  })];
}
const style$4 = c$1([c$1("@keyframes n-base-slot-machine-fade-up-in", `
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `), c$1("@keyframes n-base-slot-machine-fade-down-in", `
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `), c$1("@keyframes n-base-slot-machine-fade-up-out", `
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `), c$1("@keyframes n-base-slot-machine-fade-down-out", `
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `), cB("base-slot-machine", `
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `, [cB("base-slot-machine-number", `
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `, [
  fadeUpWidthExpandTransition({
    duration: ".2s"
  }),
  fadeInWidthExpandTransition({
    duration: ".2s",
    delay: "0s"
  }),
  cB("base-slot-machine-old-number", `
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `, [cM("top", {
    transform: "translateY(-100%)"
  }), cM("bottom", {
    transform: "translateY(100%)"
  }), cM("down-scroll", {
    animation: "n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",
    animationIterationCount: 1
  }), cM("up-scroll", {
    animation: "n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",
    animationIterationCount: 1
  })]),
  cB("base-slot-machine-current-number", `
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `, [cM("down-scroll", {
    animation: "n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",
    animationIterationCount: 1
  }), cM("up-scroll", {
    animation: "n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",
    animationIterationCount: 1
  }), cE("inner", `
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `, [cM("not-number", `
 right: unset;
 left: 0;
 `)])])
])])]);
const NBaseSlotMachine = defineComponent({
  name: "BaseSlotMachine",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: Number,
      default: void 0
    },
    appeared: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    useStyle("-base-slot-machine", style$4, toRef(props, "clsPrefix"));
    const oldValueRef = ref();
    const newValueRef = ref();
    const numbersRef = computed(() => {
      if (typeof props.value === "string")
        return [];
      if (props.value < 1)
        return [0];
      const numbers = [];
      let value = props.value;
      if (props.max !== void 0) {
        value = Math.min(props.max, value);
      }
      while (value >= 1) {
        numbers.push(value % 10);
        value /= 10;
        value = Math.floor(value);
      }
      numbers.reverse();
      return numbers;
    });
    watch(toRef(props, "value"), (value, oldValue) => {
      if (typeof value === "string") {
        newValueRef.value = void 0;
        oldValueRef.value = void 0;
      } else {
        if (typeof oldValue === "string") {
          newValueRef.value = value;
          oldValueRef.value = void 0;
        } else {
          newValueRef.value = value;
          oldValueRef.value = oldValue;
        }
      }
    });
    return () => {
      const { value, clsPrefix } = props;
      return typeof value === "number" ? h(
        "span",
        { class: `${clsPrefix}-base-slot-machine` },
        h(TransitionGroup, { name: "fade-up-width-expand-transition", tag: "span" }, {
          default: () => numbersRef.value.map((number, i) => h(SlotMachineNumber, { clsPrefix, key: numbersRef.value.length - i - 1, oldOriginalNumber: oldValueRef.value, newOriginalNumber: newValueRef.value, value: number }))
        }),
        h(NFadeInExpandTransition, { key: "+", width: true }, {
          default: () => props.max !== void 0 && props.max < value ? h(SlotMachineNumber, { clsPrefix, value: "+" }) : null
        })
      ) : h("span", { class: `${clsPrefix}-base-slot-machine` }, value);
    };
  }
});
function getIsGroup(option) {
  return option.type === "group";
}
function getIgnored(option) {
  return option.type === "ignored";
}
function createTmOptions(valueField, childrenField) {
  const options = {
    getIsGroup,
    getIgnored,
    getKey(option) {
      if (getIsGroup(option)) {
        return option.name || option.key || "key-required";
      }
      return option[valueField];
    },
    getChildren(option) {
      return option[childrenField];
    }
  };
  return options;
}
const self$2 = (vars) => {
  const { errorColor, infoColor, successColor, warningColor, fontFamily } = vars;
  return {
    color: errorColor,
    colorInfo: infoColor,
    colorSuccess: successColor,
    colorError: errorColor,
    colorWarning: warningColor,
    fontSize: "12px",
    fontFamily
  };
};
const badgeLight = {
  name: "Badge",
  common: commonLight,
  self: self$2
};
const badgeLight$1 = badgeLight;
const style$3 = c$1([c$1("@keyframes badge-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0px var(--n-ripple-color)",
    opacity: 0.6
  },
  to: {
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)",
    opacity: 0
  }
}), cB("badge", `
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `, [cM("as-is", [cB("badge-sup", {
  position: "static",
  transform: "translateX(0)"
}, [fadeInScaleUpTransition({
  transformOrigin: "left bottom",
  originalTransform: "translateX(0)"
})])]), cM("dot", [cB("badge-sup", `
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `, [c$1("::before", "border-radius: 4px;")])]), cB("badge-sup", `
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `, [fadeInScaleUpTransition({
  transformOrigin: "left bottom",
  originalTransform: "translateX(-50%)"
}), cB("base-wave", {
  zIndex: 1,
  animationDuration: "2s",
  animationIterationCount: "infinite",
  animationDelay: "1s",
  animationTimingFunction: "var(--n-ripple-bezier)",
  animationName: "badge-wave-spread"
}), c$1("&::before", `
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]);
const badgeProps = Object.assign(Object.assign({}, useTheme.props), { value: [String, Number], max: Number, dot: Boolean, type: {
  type: String,
  default: "default"
}, show: {
  type: Boolean,
  default: true
}, showZero: Boolean, processing: Boolean, color: String });
const __unplugin_components_1 = defineComponent({
  name: "Badge",
  props: badgeProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Badge", "-badge", style$3, badgeLight$1, props, mergedClsPrefixRef);
    const appearedRef = ref(false);
    const handleAfterEnter = () => {
      appearedRef.value = true;
    };
    const handleAfterLeave = () => {
      appearedRef.value = false;
    };
    const showBadgeRef = computed(() => {
      return props.show && (props.dot || props.value !== void 0 && !(!props.showZero && props.value <= 0) || !isSlotEmpty(slots.value));
    });
    onMounted(() => {
      if (showBadgeRef.value)
        appearedRef.value = true;
    });
    const rtlEnabledRef = useRtl("Badge", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { type, color: propColor } = props;
      const { common: { cubicBezierEaseInOut, cubicBezierEaseOut: cubicBezierEaseOut2 }, self: { [createKey("color", type)]: color, fontFamily, fontSize } } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-font-family": fontFamily,
        "--n-color": propColor || color,
        "--n-ripple-color": propColor || color,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-ripple-bezier": cubicBezierEaseOut2
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("badge", computed(() => {
      let hash = "";
      const { type, color } = props;
      if (type) {
        hash += type[0];
      }
      if (color) {
        hash += color2Class(color);
      }
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      appeared: appearedRef,
      showBadge: showBadgeRef,
      handleAfterEnter,
      handleAfterLeave,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { mergedClsPrefix, onRender, themeClass, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const children = (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-badge`,
        this.rtlEnabled && `${mergedClsPrefix}-badge--rtl`,
        themeClass,
        {
          [`${mergedClsPrefix}-badge--dot`]: this.dot,
          [`${mergedClsPrefix}-badge--as-is`]: !children
        }
      ], style: this.cssVars },
      children,
      h(Transition, { name: "fade-in-scale-up-transition", onAfterEnter: this.handleAfterEnter, onAfterLeave: this.handleAfterLeave }, {
        default: () => this.showBadge ? h(
          "sup",
          { class: `${mergedClsPrefix}-badge-sup`, title: getTitleAttribute(this.value) },
          resolveSlot($slots.value, () => [
            !this.dot ? h(NBaseSlotMachine, { clsPrefix: mergedClsPrefix, appeared: this.appeared, max: this.max, value: this.value }) : null
          ]),
          this.processing ? h(NBaseWave, { clsPrefix: mergedClsPrefix }) : null
        ) : null
      })
    );
  }
});
function self$1(vars) {
  const { boxShadow2 } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const popselectLight = createTheme({
  name: "Popselect",
  common: commonLight,
  peers: {
    Popover: popoverLight,
    InternalSelectMenu: internalSelectMenuLight
  },
  self: self$1
});
const popselectLight$1 = popselectLight;
const popselectInjectionKey = createInjectionKey("n-popselect");
const style$2 = cB("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`);
const panelProps = {
  multiple: Boolean,
  value: {
    type: [String, Number, Array],
    default: null
  },
  cancelable: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: "medium"
  },
  scrollable: Boolean,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onMouseenter: Function,
  onMouseleave: Function,
  renderLabel: Function,
  internalShowCheckmark: {
    type: Boolean,
    default: void 0
  },
  nodeProps: Function,
  virtualScroll: Boolean,
  onChange: [Function, Array]
};
const panelPropKeys = keysOf(panelProps);
const NPopselectPanel = defineComponent({
  name: "PopselectPanel",
  props: panelProps,
  setup(props) {
    const NPopselect = inject(popselectInjectionKey);
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Popselect", "-pop-select", style$2, popselectLight$1, NPopselect.props, mergedClsPrefixRef);
    const treeMateRef = computed(() => {
      return createTreeMate(props.options, createTmOptions("value", "children"));
    });
    function doUpdateValue(value, option) {
      const { onUpdateValue, "onUpdate:value": _onUpdateValue, onChange } = props;
      if (onUpdateValue)
        call(onUpdateValue, value, option);
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option);
      }
      if (onChange)
        call(onChange, value, option);
    }
    function handleToggle(tmNode) {
      toggle(tmNode.key);
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action"))
        e.preventDefault();
    }
    function toggle(value) {
      const { value: { getNode } } = treeMateRef;
      if (props.multiple) {
        if (Array.isArray(props.value)) {
          const newValue = [];
          const newOptions = [];
          let shouldAddValue = true;
          props.value.forEach((v) => {
            if (v === value) {
              shouldAddValue = false;
              return;
            }
            const tmNode = getNode(v);
            if (tmNode) {
              newValue.push(tmNode.key);
              newOptions.push(tmNode.rawNode);
            }
          });
          if (shouldAddValue) {
            newValue.push(value);
            newOptions.push(getNode(value).rawNode);
          }
          doUpdateValue(newValue, newOptions);
        } else {
          const tmNode = getNode(value);
          if (tmNode) {
            doUpdateValue([value], [tmNode.rawNode]);
          }
        }
      } else {
        if (props.value === value && props.cancelable) {
          doUpdateValue(null, null);
        } else {
          const tmNode = getNode(value);
          if (tmNode) {
            doUpdateValue(value, tmNode.rawNode);
          }
          const { "onUpdate:show": _onUpdateShow, onUpdateShow } = NPopselect.props;
          if (_onUpdateShow)
            call(_onUpdateShow, false);
          if (onUpdateShow)
            call(onUpdateShow, false);
          NPopselect.setShow(false);
        }
      }
      void nextTick(() => {
        NPopselect.syncPosition();
      });
    }
    watch(toRef(props, "options"), () => {
      void nextTick(() => {
        NPopselect.syncPosition();
      });
    });
    const cssVarsRef = computed(() => {
      const { self: { menuBoxShadow } } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, NPopselect.props) : void 0;
    return {
      mergedTheme: NPopselect.mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      treeMate: treeMateRef,
      handleToggle,
      handleMenuMousedown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(NInternalSelectMenu, { clsPrefix: this.mergedClsPrefix, focusable: true, nodeProps: this.nodeProps, class: [`${this.mergedClsPrefix}-popselect-menu`, this.themeClass], style: this.cssVars, theme: this.mergedTheme.peers.InternalSelectMenu, themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu, multiple: this.multiple, treeMate: this.treeMate, size: this.size, value: this.value, virtualScroll: this.virtualScroll, scrollable: this.scrollable, renderLabel: this.renderLabel, onToggle: this.handleToggle, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseenter, onMousedown: this.handleMenuMousedown, showCheckmark: this.internalShowCheckmark }, {
      action: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      },
      empty: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      }
    });
  }
});
const popselectProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), omit(popoverBaseProps, ["showArrow", "arrow"])), { placement: Object.assign(Object.assign({}, popoverBaseProps.placement), { default: "bottom" }), trigger: {
  type: String,
  default: "hover"
} }), panelProps);
const __unplugin_components_2$1 = defineComponent({
  name: "Popselect",
  props: popselectProps,
  inheritAttrs: false,
  __popover__: true,
  setup(props) {
    const themeRef = useTheme("Popselect", "-popselect", void 0, popselectLight$1, props);
    const popoverInstRef = ref(null);
    function syncPosition() {
      var _a;
      (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function setShow(value) {
      var _a;
      (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(value);
    }
    provide(popselectInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      syncPosition,
      setShow
    });
    const exposedMethods = {
      syncPosition,
      setShow
    };
    return Object.assign(Object.assign({}, exposedMethods), { popoverInstRef, mergedTheme: themeRef });
  },
  render() {
    const { mergedTheme } = this;
    const popoverProps = {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: {
        padding: "0"
      },
      ref: "popoverInstRef",
      internalRenderBody: (className, ref2, style2, onMouseenter, onMouseleave) => {
        const { $attrs } = this;
        return h(NPopselectPanel, Object.assign({}, $attrs, { class: [$attrs.class, className], style: [$attrs.style, style2] }, keep(this.$props, panelPropKeys), { ref: createRefSetter(ref2), onMouseenter: mergeEventHandlers([
          onMouseenter,
          $attrs.onMouseenter
        ]), onMouseleave: mergeEventHandlers([
          onMouseleave,
          $attrs.onMouseleave
        ]) }), {
          action: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a);
          },
          empty: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a);
          }
        });
      }
    };
    return h(NPopover, Object.assign({}, omit(this.$props, panelPropKeys), popoverProps, { internalDeactivateImmediately: true }), {
      trigger: () => {
        var _a, _b;
        return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
  }
});
const self = (vars) => {
  const { baseColor, textColor2, bodyColor, cardColor, dividerColor, actionColor, scrollbarColor, scrollbarColorHover, invertedColor } = vars;
  return {
    textColor: textColor2,
    textColorInverted: "#FFF",
    color: bodyColor,
    colorEmbedded: actionColor,
    headerColor: cardColor,
    headerColorInverted: invertedColor,
    footerColor: actionColor,
    footerColorInverted: invertedColor,
    headerBorderColor: dividerColor,
    headerBorderColorInverted: invertedColor,
    footerBorderColor: dividerColor,
    footerBorderColorInverted: invertedColor,
    siderBorderColor: dividerColor,
    siderBorderColorInverted: invertedColor,
    siderColor: cardColor,
    siderColorInverted: invertedColor,
    siderToggleButtonBorder: `1px solid ${dividerColor}`,
    siderToggleButtonColor: baseColor,
    siderToggleButtonIconColor: textColor2,
    siderToggleButtonIconColorInverted: textColor2,
    siderToggleBarColor: composite(bodyColor, scrollbarColor),
    siderToggleBarColorHover: composite(bodyColor, scrollbarColorHover),
    __invertScrollbar: "true"
  };
};
const layoutLight = createTheme({
  name: "Layout",
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight
  },
  self
});
const layoutLight$1 = layoutLight;
const layoutSiderInjectionKey = createInjectionKey("n-layout-sider");
const positionProp = {
  type: String,
  default: "static"
};
const style$1 = cB("layout", `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [cB("layout-scroll-container", `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);
const layoutProps = {
  embedded: Boolean,
  position: positionProp,
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  scrollbarProps: Object,
  onScroll: Function,
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  hasSider: Boolean,
  siderPlacement: {
    type: String,
    default: "left"
  }
};
const layoutInjectionKey = createInjectionKey("n-layout");
function createLayoutComponent(isContent) {
  return defineComponent({
    name: isContent ? "LayoutContent" : "Layout",
    props: Object.assign(Object.assign({}, useTheme.props), layoutProps),
    setup(props) {
      const scrollableElRef = ref(null);
      const scrollbarInstRef = ref(null);
      const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
      const themeRef = useTheme("Layout", "-layout", style$1, layoutLight$1, props, mergedClsPrefixRef);
      function scrollTo(options, y) {
        if (props.nativeScrollbar) {
          const { value: scrollableEl } = scrollableElRef;
          if (scrollableEl) {
            if (y === void 0) {
              scrollableEl.scrollTo(options);
            } else {
              scrollableEl.scrollTo(options, y);
            }
          }
        } else {
          const { value: scrollbarInst } = scrollbarInstRef;
          if (scrollbarInst) {
            scrollbarInst.scrollTo(options, y);
          }
        }
      }
      provide(layoutInjectionKey, props);
      let scrollX = 0;
      let scrollY = 0;
      const handleNativeElScroll = (e) => {
        var _a;
        const target = e.target;
        scrollX = target.scrollLeft;
        scrollY = target.scrollTop;
        (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
      };
      useReactivated(() => {
        if (props.nativeScrollbar) {
          const el = scrollableElRef.value;
          if (el) {
            el.scrollTop = scrollY;
            el.scrollLeft = scrollX;
          }
        }
      });
      const hasSiderStyle = {
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
        flexDirection: "row"
      };
      const exposedMethods = {
        scrollTo
      };
      const cssVarsRef = computed(() => {
        const { common: { cubicBezierEaseInOut }, self: self2 } = themeRef.value;
        return {
          "--n-bezier": cubicBezierEaseInOut,
          "--n-color": props.embedded ? self2.colorEmbedded : self2.color,
          "--n-text-color": self2.textColor
        };
      });
      const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout", void 0, cssVarsRef, props) : void 0;
      return Object.assign({
        mergedClsPrefix: mergedClsPrefixRef,
        scrollableElRef,
        scrollbarInstRef,
        hasSiderStyle,
        mergedTheme: themeRef,
        handleNativeElScroll,
        cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
        themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
        onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
      }, exposedMethods);
    },
    render() {
      var _a;
      const { mergedClsPrefix, hasSider } = this;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      const hasSiderStyle = hasSider ? this.hasSiderStyle : void 0;
      const layoutClass = [
        this.themeClass,
        isContent && `${mergedClsPrefix}-layout-content`,
        `${mergedClsPrefix}-layout`,
        `${mergedClsPrefix}-layout--${this.position}-positioned`
      ];
      return h("div", { class: layoutClass, style: this.cssVars }, this.nativeScrollbar ? h("div", { ref: "scrollableElRef", class: `${mergedClsPrefix}-layout-scroll-container`, style: [this.contentStyle, hasSiderStyle], onScroll: this.handleNativeElScroll }, this.$slots) : h(NScrollbar, Object.assign({}, this.scrollbarProps, { onScroll: this.onScroll, ref: "scrollbarInstRef", theme: this.mergedTheme.peers.Scrollbar, themeOverrides: this.mergedTheme.peerOverrides.Scrollbar, contentStyle: [this.contentStyle, hasSiderStyle] }), this.$slots));
    }
  });
}
const __unplugin_components_2 = createLayoutComponent(false);
const style = cB("layout-header", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`, [cM("absolute-positioned", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `), cM("bordered", `
 border-bottom: solid 1px var(--n-border-color);
 `)]);
const headerProps = {
  position: positionProp,
  inverted: Boolean,
  bordered: {
    type: Boolean,
    default: false
  }
};
const __unplugin_components_4 = defineComponent({
  name: "LayoutHeader",
  props: Object.assign(Object.assign({}, useTheme.props), headerProps),
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-header", style, layoutLight$1, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut }, self: self2 } = themeRef.value;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut
      };
      if (props.inverted) {
        vars["--n-color"] = self2.headerColorInverted;
        vars["--n-text-color"] = self2.textColorInverted;
        vars["--n-border-color"] = self2.headerBorderColorInverted;
      } else {
        vars["--n-color"] = self2.headerColor;
        vars["--n-text-color"] = self2.textColor;
        vars["--n-border-color"] = self2.headerBorderColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-header", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return {
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
    return h("div", { class: [
      `${mergedClsPrefix}-layout-header`,
      this.themeClass,
      this.position && `${mergedClsPrefix}-layout-header--${this.position}-positioned`,
      this.bordered && `${mergedClsPrefix}-layout-header--bordered`
    ], style: this.cssVars }, this.$slots);
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 28 28"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    fill: "none"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M14 3a8.501 8.501 0 0 1 8.497 8.246l.004.255v4.612l1.414 3.644c.038.098.064.201.077.305l.01.158a1.28 1.28 0 0 1-1.15 1.273l-.13.007l-5.22.001a3.502 3.502 0 0 1-6.998.192l-.006-.194l-5.223.001a1.28 1.28 0 0 1-1.235-1.62l.042-.124l1.416-3.644v-4.61A8.501 8.501 0 0 1 14 3zm1.996 18.65L16 21.5l-4.002.002a2.001 2.001 0 0 0 3.998.15zM14 4.5a7.001 7.001 0 0 0-6.997 6.76l-.004.241v4.752a.75.75 0 0 1-.023.184l-.028.088L5.596 20H22.4l-1.348-3.474a.748.748 0 0 1-.045-.18L21 16.254v-4.752A7.001 7.001 0 0 0 14 4.5z",
      fill: "currentColor"
    })
  ],
  -1
);
const _hoisted_3$2 = [_hoisted_2$2];
const Alert28Regular = defineComponent({
  name: "Alert28Regular",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode(
  "g",
  {
    fill: "none"
  },
  [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M6 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm2.5 5h-5A1.5 1.5 0 0 0 2 7.5c0 1.116.459 2.01 1.212 2.615C3.953 10.71 4.947 11 6 11c1.053 0 2.047-.29 2.788-.885C9.54 9.51 10 8.616 10 7.5A1.5 1.5 0 0 0 8.5 6z",
      fill: "currentColor"
    })
  ],
  -1
);
const _hoisted_3$1 = [_hoisted_2$1];
const Person12Filled = defineComponent({
  name: "Person12Filled",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
  }
});
const renderLabelHandler = (option) => {
  return h(
    __unplugin_components_7,
    { justify: "space-around", style: { "border-bottom": "1px solid #ccc" } },
    [
      h(NIcon, { size: 30, component: WarningOutline, color: "#c03f53" }),
      h(__unplugin_components_2$2, { strong: true }, option.label)
    ]
  );
};
const _sfc_main = defineComponent({
  name: "MainHeader",
  components: { Alert28Regular, Person12Filled },
  setup() {
    const { flatedList, total } = storeToRefs(useErrorInfoStore());
    const alertInfoList = computed(() => {
      return flatedList.value.map((errorInfo) => {
        const time = has(errorInfo, "info") ? errorInfo.info.time : errorInfo.time;
        return {
          label: `${timeFormatter(time)}`,
          value: time
        };
      });
    });
    return {
      renderLabelHandler,
      alertInfoList,
      total
    };
  }
});
const MainHeader_vue_vue_type_style_index_0_scoped_efa662cc_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-efa662cc"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "logo" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, "GAZE"),
  /* @__PURE__ */ createBaseVNode("span", null, "Front-end monitor")
], -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/gazezag" }, "GitHub", -1));
const _hoisted_3 = /* @__PURE__ */ createTextVNode("DOCS");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("HELP");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Alert28Regular = resolveComponent("Alert28Regular");
  const _component_n_icon = NIcon;
  const _component_n_badge = __unplugin_components_1;
  const _component_n_popselect = __unplugin_components_2$1;
  const _component_Person12Filled = resolveComponent("Person12Filled");
  const _component_n_space = __unplugin_components_7;
  const _component_n_layout_header = __unplugin_components_4;
  return openBlock(), createBlock(_component_n_layout_header, { bordered: "" }, {
    default: withCtx(() => [
      createVNode(_component_router_link, { to: "/overview" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createVNode(_component_n_space, null, {
        default: withCtx(() => [
          createVNode(_component_n_popselect, {
            options: _ctx.alertInfoList,
            "render-label": _ctx.renderLabelHandler,
            size: "large",
            scrollable: "",
            "virtual-scroll": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_n_badge, { value: _ctx.total }, {
                default: withCtx(() => [
                  createVNode(_component_n_icon, { size: 20 }, {
                    default: withCtx(() => [
                      createVNode(_component_Alert28Regular)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }, 8, ["options", "render-label"]),
          _hoisted_2,
          createVNode(_component_router_link, { to: "/" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }),
          createVNode(_component_router_link, { to: "/" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createVNode(_component_router_link, { to: "/" }, {
            default: withCtx(() => [
              createVNode(_component_n_icon, {
                size: 20,
                class: "person"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Person12Filled)
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
  });
}
const HeaderMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-efa662cc"]]);
export {
  HeaderMenu as H,
  __unplugin_components_2 as _,
  createTreeMate as a,
  createRefSetter as b,
  createLayoutComponent as c,
  layoutSiderInjectionKey as d,
  layoutLight$1 as e,
  happensIn as h,
  layoutInjectionKey as l,
  positionProp as p
};
