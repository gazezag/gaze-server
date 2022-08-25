import { b as ref, Z as watch, m as reactive, av as onBeforeMount, P as onBeforeUnmount, b5 as readonly, d as defineComponent, j as h, aa as createInjectionKey, Q as inject, c as computed, a1 as provide, N as useMemo, T as Transition, O as mergeProps, R as render, ay as warn, ar as Fragment, e as cB, V as c, W as cNotM, U as cM, f as cE, X as toRef, u as useConfig, g as useTheme, b6 as dropdownLight, a0 as createKey, h as useThemeClass, S as NBaseIcon, a5 as NFadeInExpandTransition, b7 as fadeInHeightExpandTransition, b8 as menuLight, w as watchEffect, A as openBlock, D as createElementBlock, E as createBaseVNode, b9 as createStaticVNode, ba as RouterLink, _ as _export_sfc, y as createBlock, z as withCtx, B as createVNode, ag as resolveComponent } from "./main-8183f0bd.js";
import { j as hasInstance, b as off, o as on, p as popoverBodyInjectionKey, N as NIcon, m as modalBodyInjectionKey, d as drawerBodyInjectionKey, X as XScrollbar, k as keep, f as formatLength, u as useReactivated, a as NScrollbar } from "./Icon-6c59cc46.js";
import { h as happensIn, a as createTreeMate, b as createRefSetter, l as layoutInjectionKey, d as layoutSiderInjectionKey, e as layoutLight, p as positionProp, H as HeaderMenu, _ as __unplugin_components_2 } from "./MainHeader-f8cbd45b.js";
import { V as VBinder, e as VTarget, f as VFollower, r as renderArrow, N as NPopover, p as popoverBaseProps, u as useCompitable } from "./WarningOutline-09a89e98.js";
import { C as ChevronRightIcon } from "./ChevronRight-3423c6fb.js";
import { f as fadeInScaleUpTransition } from "./fade-in-width-expand.cssr-985ca46b.js";
import { a as useMergedState } from "./use-merged-state-12c965db.js";
import { c as call, k as keysOf } from "./Space-2ff10da0.js";
import { _ as __unplugin_components_1$1 } from "./Tooltip-d8500f9b.js";
function useDeferredTrue(valueRef, delay, shouldDelayRef) {
  if (!delay)
    return valueRef;
  const delayedRef = ref(valueRef.value);
  let timerId = null;
  watch(valueRef, (value) => {
    if (timerId !== null)
      window.clearTimeout(timerId);
    if (value === true) {
      if (shouldDelayRef && !shouldDelayRef.value) {
        delayedRef.value = true;
      } else {
        timerId = window.setTimeout(() => {
          delayedRef.value = true;
        }, delay);
      }
    } else {
      delayedRef.value = false;
    }
  });
  return delayedRef;
}
function useKeyboard(options = {}, enabledRef) {
  const state = reactive({
    ctrl: false,
    command: false,
    win: false,
    shift: false,
    tab: false
  });
  const { keydown, keyup } = options;
  const keydownHandler = (e) => {
    switch (e.key) {
      case "Control":
        state.ctrl = true;
        break;
      case "Meta":
        state.command = true;
        state.win = true;
        break;
      case "Shift":
        state.shift = true;
        break;
      case "Tab":
        state.tab = true;
        break;
    }
    if (keydown !== void 0) {
      Object.keys(keydown).forEach((key) => {
        if (key !== e.key)
          return;
        const handler = keydown[key];
        if (typeof handler === "function") {
          handler(e);
        } else {
          const { stop = false, prevent = false } = handler;
          if (stop)
            e.stopPropagation();
          if (prevent)
            e.preventDefault();
          handler.handler(e);
        }
      });
    }
  };
  const keyupHandler = (e) => {
    switch (e.key) {
      case "Control":
        state.ctrl = false;
        break;
      case "Meta":
        state.command = false;
        state.win = false;
        break;
      case "Shift":
        state.shift = false;
        break;
      case "Tab":
        state.tab = false;
        break;
    }
    if (keyup !== void 0) {
      Object.keys(keyup).forEach((key) => {
        if (key !== e.key)
          return;
        const handler = keyup[key];
        if (typeof handler === "function") {
          handler(e);
        } else {
          const { stop = false, prevent = false } = handler;
          if (stop)
            e.stopPropagation();
          if (prevent)
            e.preventDefault();
          handler.handler(e);
        }
      });
    }
  };
  const setup = () => {
    if (enabledRef === void 0 || enabledRef.value) {
      on("keydown", document, keydownHandler);
      on("keyup", document, keyupHandler);
    }
    if (enabledRef !== void 0) {
      watch(enabledRef, (value) => {
        if (value) {
          on("keydown", document, keydownHandler);
          on("keyup", document, keyupHandler);
        } else {
          off("keydown", document, keydownHandler);
          off("keyup", document, keyupHandler);
        }
      });
    }
  };
  if (hasInstance()) {
    onBeforeMount(setup);
    onBeforeUnmount(() => {
      if (enabledRef === void 0 || enabledRef.value) {
        off("keydown", document, keydownHandler);
        off("keyup", document, keyupHandler);
      }
    });
  } else {
    setup();
  }
  return readonly(state);
}
const ChevronDownFilledIcon = defineComponent({
  name: "ChevronDownFilled",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z", fill: "currentColor" })
    );
  }
});
const NDropdownDivider = defineComponent({
  name: "DropdownDivider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  render() {
    return h("div", { class: `${this.clsPrefix}-dropdown-divider` });
  }
});
const dropdownMenuInjectionKey = createInjectionKey("n-dropdown-menu");
const dropdownInjectionKey = createInjectionKey("n-dropdown");
const dropdownOptionInjectionKey = createInjectionKey("n-dropdown-option");
function isSubmenuNode(rawNode, childrenField) {
  return rawNode.type === "submenu" || rawNode.type === void 0 && rawNode[childrenField] !== void 0;
}
function isGroupNode(rawNode) {
  return rawNode.type === "group";
}
function isDividerNode$1(rawNode) {
  return rawNode.type === "divider";
}
function isRenderNode(rawNode) {
  return rawNode.type === "render";
}
const NDropdownOption = defineComponent({
  name: "DropdownOption",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    },
    parentKey: {
      type: [String, Number],
      default: null
    },
    placement: {
      type: String,
      default: "right-start"
    },
    props: Object,
    scrollable: Boolean
  },
  setup(props) {
    const NDropdown2 = inject(dropdownInjectionKey);
    const { hoverKeyRef, keyboardKeyRef, lastToggledSubmenuKeyRef, pendingKeyPathRef, activeKeyPathRef, animatedRef, mergedShowRef, renderLabelRef, renderIconRef, labelFieldRef, childrenFieldRef, renderOptionRef, nodePropsRef, menuPropsRef } = NDropdown2;
    const NDropdownOption2 = inject(dropdownOptionInjectionKey, null);
    const NDropdownMenu2 = inject(dropdownMenuInjectionKey);
    const NPopoverBody = inject(popoverBodyInjectionKey);
    const rawNodeRef = computed(() => props.tmNode.rawNode);
    const hasSubmenuRef = computed(() => {
      const { value: childrenField } = childrenFieldRef;
      return isSubmenuNode(props.tmNode.rawNode, childrenField);
    });
    const mergedDisabledRef = computed(() => {
      const { disabled } = props.tmNode;
      return disabled;
    });
    const showSubmenuRef = computed(() => {
      if (!hasSubmenuRef.value)
        return false;
      const { key, disabled } = props.tmNode;
      if (disabled)
        return false;
      const { value: hoverKey } = hoverKeyRef;
      const { value: keyboardKey } = keyboardKeyRef;
      const { value: lastToggledSubmenuKey } = lastToggledSubmenuKeyRef;
      const { value: pendingKeyPath } = pendingKeyPathRef;
      if (hoverKey !== null)
        return pendingKeyPath.includes(key);
      if (keyboardKey !== null) {
        return pendingKeyPath.includes(key) && pendingKeyPath[pendingKeyPath.length - 1] !== key;
      }
      if (lastToggledSubmenuKey !== null)
        return pendingKeyPath.includes(key);
      return false;
    });
    const shouldDelayRef = computed(() => {
      return keyboardKeyRef.value === null && !animatedRef.value;
    });
    const deferredShowSubmenuRef = useDeferredTrue(showSubmenuRef, 300, shouldDelayRef);
    const parentEnteringSubmenuRef = computed(() => {
      return !!(NDropdownOption2 === null || NDropdownOption2 === void 0 ? void 0 : NDropdownOption2.enteringSubmenuRef.value);
    });
    const enteringSubmenuRef = ref(false);
    provide(dropdownOptionInjectionKey, {
      enteringSubmenuRef
    });
    function handleSubmenuBeforeEnter() {
      enteringSubmenuRef.value = true;
    }
    function handleSubmenuAfterEnter() {
      enteringSubmenuRef.value = false;
    }
    function handleMouseEnter() {
      const { parentKey, tmNode } = props;
      if (tmNode.disabled)
        return;
      if (!mergedShowRef.value)
        return;
      lastToggledSubmenuKeyRef.value = parentKey;
      keyboardKeyRef.value = null;
      hoverKeyRef.value = tmNode.key;
    }
    function handleMouseMove() {
      const { tmNode } = props;
      if (tmNode.disabled)
        return;
      if (!mergedShowRef.value)
        return;
      if (hoverKeyRef.value === tmNode.key)
        return;
      handleMouseEnter();
    }
    function handleMouseLeave(e) {
      if (props.tmNode.disabled)
        return;
      if (!mergedShowRef.value)
        return;
      const { relatedTarget } = e;
      if (relatedTarget && !happensIn({ target: relatedTarget }, "dropdownOption") && !happensIn({ target: relatedTarget }, "scrollbarRail")) {
        hoverKeyRef.value = null;
      }
    }
    function handleClick() {
      const { value: hasSubmenu } = hasSubmenuRef;
      const { tmNode } = props;
      if (!mergedShowRef.value)
        return;
      if (!hasSubmenu && !tmNode.disabled) {
        NDropdown2.doSelect(tmNode.key, tmNode.rawNode);
        NDropdown2.doUpdateShow(false);
      }
    }
    return {
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderIcon: renderIconRef,
      siblingHasIcon: NDropdownMenu2.showIconRef,
      siblingHasSubmenu: NDropdownMenu2.hasSubmenuRef,
      menuProps: menuPropsRef,
      popoverBody: NPopoverBody,
      animated: animatedRef,
      mergedShowSubmenu: computed(() => {
        return deferredShowSubmenuRef.value && !parentEnteringSubmenuRef.value;
      }),
      rawNode: rawNodeRef,
      hasSubmenu: hasSubmenuRef,
      pending: useMemo(() => {
        const { value: pendingKeyPath } = pendingKeyPathRef;
        const { key } = props.tmNode;
        return pendingKeyPath.includes(key);
      }),
      childActive: useMemo(() => {
        const { value: activeKeyPath } = activeKeyPathRef;
        const { key } = props.tmNode;
        const index2 = activeKeyPath.findIndex((k) => key === k);
        if (index2 === -1)
          return false;
        return index2 < activeKeyPath.length - 1;
      }),
      active: useMemo(() => {
        const { value: activeKeyPath } = activeKeyPathRef;
        const { key } = props.tmNode;
        const index2 = activeKeyPath.findIndex((k) => key === k);
        if (index2 === -1)
          return false;
        return index2 === activeKeyPath.length - 1;
      }),
      mergedDisabled: mergedDisabledRef,
      renderOption: renderOptionRef,
      nodeProps: nodePropsRef,
      handleClick,
      handleMouseMove,
      handleMouseEnter,
      handleMouseLeave,
      handleSubmenuBeforeEnter,
      handleSubmenuAfterEnter
    };
  },
  render() {
    var _a, _b;
    const { animated, rawNode, mergedShowSubmenu, clsPrefix, siblingHasIcon, siblingHasSubmenu, renderLabel: renderLabel2, renderIcon: renderIcon2, renderOption, nodeProps, props, scrollable } = this;
    let submenuVNode = null;
    if (mergedShowSubmenu) {
      const submenuNodeProps = (_a = this.menuProps) === null || _a === void 0 ? void 0 : _a.call(
        this,
        rawNode,
        rawNode.children
      );
      submenuVNode = h(NDropdownMenu, Object.assign({}, submenuNodeProps, { clsPrefix, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
    }
    const builtinProps = {
      class: [
        `${clsPrefix}-dropdown-option-body`,
        this.pending && `${clsPrefix}-dropdown-option-body--pending`,
        this.active && `${clsPrefix}-dropdown-option-body--active`,
        this.childActive && `${clsPrefix}-dropdown-option-body--child-active`,
        this.mergedDisabled && `${clsPrefix}-dropdown-option-body--disabled`
      ],
      onMousemove: this.handleMouseMove,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onClick: this.handleClick
    };
    const optionNodeProps = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const node = h(
      "div",
      Object.assign({ class: [`${clsPrefix}-dropdown-option`, optionNodeProps === null || optionNodeProps === void 0 ? void 0 : optionNodeProps.class], "data-dropdown-option": true }, optionNodeProps),
      h("div", mergeProps(builtinProps, props), [
        h("div", { class: [
          `${clsPrefix}-dropdown-option-body__prefix`,
          siblingHasIcon && `${clsPrefix}-dropdown-option-body__prefix--show-icon`
        ] }, [renderIcon2 ? renderIcon2(rawNode) : render(rawNode.icon)]),
        h("div", { "data-dropdown-option": true, class: `${clsPrefix}-dropdown-option-body__label` }, renderLabel2 ? renderLabel2(rawNode) : render((_b = rawNode[this.labelField]) !== null && _b !== void 0 ? _b : rawNode.title)),
        h("div", { "data-dropdown-option": true, class: [
          `${clsPrefix}-dropdown-option-body__suffix`,
          siblingHasSubmenu && `${clsPrefix}-dropdown-option-body__suffix--has-submenu`
        ] }, this.hasSubmenu ? h(NIcon, null, {
          default: () => h(ChevronRightIcon, null)
        }) : null)
      ]),
      this.hasSubmenu ? h(VBinder, null, {
        default: () => [
          h(VTarget, null, {
            default: () => h(
              "div",
              { class: `${clsPrefix}-dropdown-offset-container` },
              h(VFollower, { show: this.mergedShowSubmenu, placement: this.placement, to: scrollable ? this.popoverBody || void 0 : void 0, teleportDisabled: !scrollable }, {
                default: () => {
                  return h("div", { class: `${clsPrefix}-dropdown-menu-wrapper` }, animated ? h(Transition, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, {
                    default: () => submenuVNode
                  }) : submenuVNode);
                }
              })
            )
          })
        ]
      }) : null
    );
    if (renderOption) {
      return renderOption({ node, option: rawNode });
    }
    return node;
  }
});
const NDropdownGroupHeader = defineComponent({
  name: "DropdownGroupHeader",
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
      showIconRef,
      hasSubmenuRef
    } = inject(dropdownMenuInjectionKey);
    const { renderLabelRef, labelFieldRef, nodePropsRef, renderOptionRef } = inject(dropdownInjectionKey);
    return {
      labelField: labelFieldRef,
      showIcon: showIconRef,
      hasSubmenu: hasSubmenuRef,
      renderLabel: renderLabelRef,
      nodeProps: nodePropsRef,
      renderOption: renderOptionRef
    };
  },
  render() {
    var _a;
    const { clsPrefix, hasSubmenu, showIcon, nodeProps, renderLabel: renderLabel2, renderOption } = this;
    const { rawNode } = this.tmNode;
    const node = h(
      "div",
      Object.assign({ class: `${clsPrefix}-dropdown-option` }, nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode)),
      h(
        "div",
        { class: `${clsPrefix}-dropdown-option-body ${clsPrefix}-dropdown-option-body--group` },
        h("div", { "data-dropdown-option": true, class: [
          `${clsPrefix}-dropdown-option-body__prefix`,
          showIcon && `${clsPrefix}-dropdown-option-body__prefix--show-icon`
        ] }, render(rawNode.icon)),
        h("div", { class: `${clsPrefix}-dropdown-option-body__label`, "data-dropdown-option": true }, renderLabel2 ? renderLabel2(rawNode) : render((_a = rawNode.title) !== null && _a !== void 0 ? _a : rawNode[this.labelField])),
        h("div", { class: [
          `${clsPrefix}-dropdown-option-body__suffix`,
          hasSubmenu && `${clsPrefix}-dropdown-option-body__suffix--has-submenu`
        ], "data-dropdown-option": true })
      )
    );
    if (renderOption) {
      return renderOption({ node, option: rawNode });
    }
    return node;
  }
});
const NDropdownGroup = defineComponent({
  name: "NDropdownGroup",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    },
    parentKey: {
      type: [String, Number],
      default: null
    }
  },
  render() {
    const { tmNode, parentKey, clsPrefix } = this;
    const { children } = tmNode;
    return h(
      Fragment,
      null,
      h(NDropdownGroupHeader, { clsPrefix, tmNode, key: tmNode.key }),
      children === null || children === void 0 ? void 0 : children.map((child) => {
        if (isDividerNode$1(child.rawNode)) {
          return h(NDropdownDivider, {
            clsPrefix,
            key: child.key
          });
        }
        if (child.isGroup) {
          warn("dropdown", "`group` node is not allowed to be put in `group` node.");
          return null;
        }
        return h(NDropdownOption, { clsPrefix, tmNode: child, parentKey, key: child.key });
      })
    );
  }
});
const NDropdownRenderOption = defineComponent({
  name: "DropdownRenderOption",
  props: {
    tmNode: {
      type: Object,
      required: true
    }
  },
  render() {
    const { rawNode: { render: render8, props } } = this.tmNode;
    return h("div", props, [render8 === null || render8 === void 0 ? void 0 : render8()]);
  }
});
const NDropdownMenu = defineComponent({
  name: "DropdownMenu",
  props: {
    scrollable: Boolean,
    showArrow: Boolean,
    arrowStyle: [String, Object],
    clsPrefix: {
      type: String,
      required: true
    },
    tmNodes: {
      type: Array,
      default: () => []
    },
    parentKey: {
      type: [String, Number],
      default: null
    }
  },
  setup(props) {
    const { renderIconRef, childrenFieldRef } = inject(dropdownInjectionKey);
    provide(dropdownMenuInjectionKey, {
      showIconRef: computed(() => {
        const renderIcon2 = renderIconRef.value;
        return props.tmNodes.some((tmNode) => {
          var _a;
          if (tmNode.isGroup) {
            return (_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some(({ rawNode: rawChild }) => renderIcon2 ? renderIcon2(rawChild) : rawChild.icon);
          }
          const { rawNode } = tmNode;
          return renderIcon2 ? renderIcon2(rawNode) : rawNode.icon;
        });
      }),
      hasSubmenuRef: computed(() => {
        const { value: childrenField } = childrenFieldRef;
        return props.tmNodes.some((tmNode) => {
          var _a;
          if (tmNode.isGroup) {
            return (_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some(({ rawNode: rawChild }) => isSubmenuNode(rawChild, childrenField));
          }
          const { rawNode } = tmNode;
          return isSubmenuNode(rawNode, childrenField);
        });
      })
    });
    const bodyRef = ref(null);
    provide(modalBodyInjectionKey, null);
    provide(drawerBodyInjectionKey, null);
    provide(popoverBodyInjectionKey, bodyRef);
    return {
      bodyRef
    };
  },
  render() {
    const { parentKey, clsPrefix, scrollable } = this;
    const menuOptionsNode = this.tmNodes.map((tmNode) => {
      const { rawNode } = tmNode;
      if (isRenderNode(rawNode)) {
        return h(NDropdownRenderOption, { tmNode, key: tmNode.key });
      }
      if (isDividerNode$1(rawNode)) {
        return h(NDropdownDivider, { clsPrefix, key: tmNode.key });
      }
      if (isGroupNode(rawNode)) {
        return h(NDropdownGroup, { clsPrefix, tmNode, parentKey, key: tmNode.key });
      }
      return h(NDropdownOption, { clsPrefix, tmNode, parentKey, key: tmNode.key, props: rawNode.props, scrollable });
    });
    return h(
      "div",
      { class: [
        `${clsPrefix}-dropdown-menu`,
        scrollable && `${clsPrefix}-dropdown-menu--scrollable`
      ], ref: "bodyRef" },
      scrollable ? h(XScrollbar, { contentClass: `${clsPrefix}-dropdown-menu__content` }, {
        default: () => menuOptionsNode
      }) : menuOptionsNode,
      this.showArrow ? renderArrow({
        clsPrefix,
        arrowStyle: this.arrowStyle
      }) : null
    );
  }
});
const style$2 = cB("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [fadeInScaleUpTransition(), cB("dropdown-option", `
 position: relative;
 `, [c("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [c("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [c("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), cNotM("disabled", [cM("pending", {
  color: "var(--n-option-text-color-hover)"
}, [cE("prefix, suffix", {
  color: "var(--n-option-text-color-hover)"
}), c("&::before", "background-color: var(--n-option-color-hover);")]), cM("active", {
  color: "var(--n-option-text-color-active)"
}, [cE("prefix, suffix", {
  color: "var(--n-option-text-color-active)"
}), c("&::before", "background-color: var(--n-option-color-active);")]), cM("child-active", {
  color: "var(--n-option-text-color-child-active)"
}, [cE("prefix, suffix", {
  color: "var(--n-option-text-color-child-active)"
})])]), cM("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-option-opacity-disabled)"
}), cM("group", {
  fontSize: "calc(var(--n-font-size) - 1px)",
  color: "var(--n-group-header-text-color)"
}, [cE("prefix", {
  width: "calc(var(--n-option-prefix-width) / 2)"
}, [cM("show-icon", {
  width: "calc(var(--n-option-icon-prefix-width) / 2)"
})])]), cE("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 `, [cM("show-icon", {
  width: "var(--n-option-icon-prefix-width)"
}), cB("icon", {
  fontSize: "var(--n-option-icon-size)"
})]), cE("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), cE("suffix", `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 `, [cM("has-submenu", {
  width: "var(--n-option-icon-suffix-width)"
}), cB("icon", {
  fontSize: "var(--n-option-icon-size)"
})]), cB("dropdown-menu", "pointer-events: all;")]), cB("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), cB("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), cB("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), c(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), cNotM("scrollable", `
 padding: var(--n-padding);
 `), cM("scrollable", [cE("content", `
 padding: var(--n-padding);
 `)])]);
const dropdownBaseProps = {
  animated: {
    type: Boolean,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: "medium"
  },
  inverted: Boolean,
  placement: {
    type: String,
    default: "bottom"
  },
  onSelect: [Function, Array],
  options: {
    type: Array,
    default: () => []
  },
  menuProps: Function,
  showArrow: Boolean,
  renderLabel: Function,
  renderIcon: Function,
  renderOption: Function,
  nodeProps: Function,
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  value: [String, Number]
};
const popoverPropKeys = Object.keys(popoverBaseProps);
const dropdownProps = Object.assign(Object.assign(Object.assign({}, popoverBaseProps), dropdownBaseProps), useTheme.props);
const NDropdown = defineComponent({
  name: "Dropdown",
  inheritAttrs: false,
  props: dropdownProps,
  setup(props) {
    const uncontrolledShowRef = ref(false);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    const treemateRef = computed(() => {
      const { keyField, childrenField } = props;
      return createTreeMate(props.options, {
        getKey(node) {
          return node[keyField];
        },
        getDisabled(node) {
          return node.disabled === true;
        },
        getIgnored(node) {
          return node.type === "divider" || node.type === "render";
        },
        getChildren(node) {
          return node[childrenField];
        }
      });
    });
    const tmNodesRef = computed(() => {
      return treemateRef.value.treeNodes;
    });
    const hoverKeyRef = ref(null);
    const keyboardKeyRef = ref(null);
    const lastToggledSubmenuKeyRef = ref(null);
    const pendingKeyRef = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = hoverKeyRef.value) !== null && _a !== void 0 ? _a : keyboardKeyRef.value) !== null && _b !== void 0 ? _b : lastToggledSubmenuKeyRef.value) !== null && _c !== void 0 ? _c : null;
    });
    const pendingKeyPathRef = computed(() => treemateRef.value.getPath(pendingKeyRef.value).keyPath);
    const activeKeyPathRef = computed(() => treemateRef.value.getPath(props.value).keyPath);
    const keyboardEnabledRef = useMemo(() => {
      return props.keyboard && mergedShowRef.value;
    });
    useKeyboard({
      keydown: {
        ArrowUp: {
          prevent: true,
          handler: handleKeyDownUp
        },
        ArrowRight: {
          prevent: true,
          handler: handleKeyDownRight
        },
        ArrowDown: {
          prevent: true,
          handler: handleKeyDownDown
        },
        ArrowLeft: {
          prevent: true,
          handler: handleKeyDownLeft
        },
        Escape: handleKeyDownEsc
      },
      keyup: {
        Enter: handleKeyUpEnter
      }
    }, keyboardEnabledRef);
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Dropdown", "-dropdown", style$2, dropdownLight, props, mergedClsPrefixRef);
    provide(dropdownInjectionKey, {
      labelFieldRef: toRef(props, "labelField"),
      childrenFieldRef: toRef(props, "childrenField"),
      renderLabelRef: toRef(props, "renderLabel"),
      renderIconRef: toRef(props, "renderIcon"),
      hoverKeyRef,
      keyboardKeyRef,
      lastToggledSubmenuKeyRef,
      pendingKeyPathRef,
      activeKeyPathRef,
      animatedRef: toRef(props, "animated"),
      mergedShowRef,
      nodePropsRef: toRef(props, "nodeProps"),
      renderOptionRef: toRef(props, "renderOption"),
      menuPropsRef: toRef(props, "menuProps"),
      doSelect,
      doUpdateShow
    });
    watch(mergedShowRef, (value) => {
      if (!props.animated && !value) {
        clearPendingState();
      }
    });
    function doSelect(key, node) {
      const { onSelect } = props;
      if (onSelect)
        call(onSelect, key, node);
    }
    function doUpdateShow(value) {
      const { "onUpdate:show": _onUpdateShow, onUpdateShow } = props;
      if (_onUpdateShow)
        call(_onUpdateShow, value);
      if (onUpdateShow)
        call(onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    function clearPendingState() {
      hoverKeyRef.value = null;
      keyboardKeyRef.value = null;
      lastToggledSubmenuKeyRef.value = null;
    }
    function handleKeyDownEsc() {
      doUpdateShow(false);
    }
    function handleKeyDownLeft() {
      handleKeyDown("left");
    }
    function handleKeyDownRight() {
      handleKeyDown("right");
    }
    function handleKeyDownUp() {
      handleKeyDown("up");
    }
    function handleKeyDownDown() {
      handleKeyDown("down");
    }
    function handleKeyUpEnter() {
      const pendingNode = getPendingNode();
      if (pendingNode === null || pendingNode === void 0 ? void 0 : pendingNode.isLeaf) {
        doSelect(pendingNode.key, pendingNode.rawNode);
        doUpdateShow(false);
      }
    }
    function getPendingNode() {
      var _a;
      const { value: treeMate } = treemateRef;
      const { value: pendingKey } = pendingKeyRef;
      if (!treeMate || pendingKey === null)
        return null;
      return (_a = treeMate.getNode(pendingKey)) !== null && _a !== void 0 ? _a : null;
    }
    function handleKeyDown(direction) {
      const { value: pendingKey } = pendingKeyRef;
      const { value: { getFirstAvailableNode } } = treemateRef;
      let nextKeyboardKey = null;
      if (pendingKey === null) {
        const firstNode = getFirstAvailableNode();
        if (firstNode !== null) {
          nextKeyboardKey = firstNode.key;
        }
      } else {
        const currentNode = getPendingNode();
        if (currentNode) {
          let nextNode;
          switch (direction) {
            case "down":
              nextNode = currentNode.getNext();
              break;
            case "up":
              nextNode = currentNode.getPrev();
              break;
            case "right":
              nextNode = currentNode.getChild();
              break;
            case "left":
              nextNode = currentNode.getParent();
              break;
          }
          if (nextNode)
            nextKeyboardKey = nextNode.key;
        }
      }
      if (nextKeyboardKey !== null) {
        hoverKeyRef.value = null;
        keyboardKeyRef.value = nextKeyboardKey;
      }
    }
    const cssVarsRef = computed(() => {
      const { size, inverted } = props;
      const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
      const { padding, dividerColor, borderRadius, optionOpacityDisabled, [createKey("optionIconSuffixWidth", size)]: optionIconSuffixWidth, [createKey("optionSuffixWidth", size)]: optionSuffixWidth, [createKey("optionIconPrefixWidth", size)]: optionIconPrefixWidth, [createKey("optionPrefixWidth", size)]: optionPrefixWidth, [createKey("fontSize", size)]: fontSize, [createKey("optionHeight", size)]: optionHeight, [createKey("optionIconSize", size)]: optionIconSize } = self;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-padding": padding,
        "--n-border-radius": borderRadius,
        "--n-option-height": optionHeight,
        "--n-option-prefix-width": optionPrefixWidth,
        "--n-option-icon-prefix-width": optionIconPrefixWidth,
        "--n-option-suffix-width": optionSuffixWidth,
        "--n-option-icon-suffix-width": optionIconSuffixWidth,
        "--n-option-icon-size": optionIconSize,
        "--n-divider-color": dividerColor,
        "--n-option-opacity-disabled": optionOpacityDisabled
      };
      if (inverted) {
        vars["--n-color"] = self.colorInverted;
        vars["--n-option-color-hover"] = self.optionColorHoverInverted;
        vars["--n-option-color-active"] = self.optionColorActiveInverted;
        vars["--n-option-text-color"] = self.optionTextColorInverted;
        vars["--n-option-text-color-hover"] = self.optionTextColorHoverInverted;
        vars["--n-option-text-color-active"] = self.optionTextColorActiveInverted;
        vars["--n-option-text-color-child-active"] = self.optionTextColorChildActiveInverted;
        vars["--n-prefix-color"] = self.prefixColorInverted;
        vars["--n-suffix-color"] = self.suffixColorInverted;
        vars["--n-group-header-text-color"] = self.groupHeaderTextColorInverted;
      } else {
        vars["--n-color"] = self.color;
        vars["--n-option-color-hover"] = self.optionColorHover;
        vars["--n-option-color-active"] = self.optionColorActive;
        vars["--n-option-text-color"] = self.optionTextColor;
        vars["--n-option-text-color-hover"] = self.optionTextColorHover;
        vars["--n-option-text-color-active"] = self.optionTextColorActive;
        vars["--n-option-text-color-child-active"] = self.optionTextColorChildActive;
        vars["--n-prefix-color"] = self.prefixColor;
        vars["--n-suffix-color"] = self.suffixColor;
        vars["--n-group-header-text-color"] = self.groupHeaderTextColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("dropdown", computed(() => `${props.size[0]}${props.inverted ? "i" : ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      tmNodes: tmNodesRef,
      mergedShow: mergedShowRef,
      handleAfterLeave: () => {
        if (!props.animated)
          return;
        clearPendingState();
      },
      doUpdateShow,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const renderPopoverBody = (className, ref2, style2, onMouseenter, onMouseleave) => {
      var _a;
      const { mergedClsPrefix, menuProps: menuProps2 } = this;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      const menuNodeProps = (menuProps2 === null || menuProps2 === void 0 ? void 0 : menuProps2(void 0, this.tmNodes.map((v) => v.rawNode))) || {};
      const dropdownProps2 = {
        ref: createRefSetter(ref2),
        class: [className, `${mergedClsPrefix}-dropdown`, this.themeClass],
        clsPrefix: mergedClsPrefix,
        tmNodes: this.tmNodes,
        style: [style2, this.cssVars],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        scrollable: this.scrollable,
        onMouseenter,
        onMouseleave
      };
      return h(NDropdownMenu, mergeProps(this.$attrs, dropdownProps2, menuNodeProps));
    };
    const { mergedTheme } = this;
    const popoverProps = {
      show: this.mergedShow,
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      internalOnAfterLeave: this.handleAfterLeave,
      internalRenderBody: renderPopoverBody,
      onUpdateShow: this.doUpdateShow,
      "onUpdate:show": void 0
    };
    return h(NPopover, Object.assign({}, keep(this.$props, popoverPropKeys), popoverProps), {
      trigger: () => {
        var _a, _b;
        return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
  }
});
const style$1 = cB("layout-sider", `
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`, [cM("bordered", [cE("border", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]), cE("left-placement", [cM("bordered", [cE("border", `
 right: 0;
 `)])]), cM("right-placement", `
 justify-content: flex-start;
 `, [cM("bordered", [cE("border", `
 left: 0;
 `)]), cM("collapsed", [cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", [c("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])])]), cB("layout-toggle-button", `
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `, [cB("base-icon", `
 transform: rotate(0);
 `)]), cB("layout-toggle-bar", `
 left: -28px;
 transform: rotate(180deg);
 `, [c("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})])])]), cM("collapsed", [cB("layout-toggle-bar", [c("&:hover", [cE("top", {
  transform: "rotate(-12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(12deg) scale(1.15) translateY(2px)"
})])]), cB("layout-toggle-button", [cB("base-icon", `
 transform: rotate(0);
 `)])]), cB("layout-toggle-button", `
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `, [cB("base-icon", `
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]), cB("layout-toggle-bar", `
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `, [cE("top, bottom", `
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), cE("bottom", `
 position: absolute;
 top: 34px;
 `), c("&:hover", [cE("top", {
  transform: "rotate(12deg) scale(1.15) translateY(-2px)"
}), cE("bottom", {
  transform: "rotate(-12deg) scale(1.15) translateY(2px)"
})]), cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color)"
}), c("&:hover", [cE("top, bottom", {
  backgroundColor: "var(--n-toggle-bar-color-hover)"
})])]), cE("border", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `), cB("layout-sider-scroll-container", `
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `), cM("show-content", [cB("layout-sider-scroll-container", {
  opacity: 1
})]), cM("absolute-positioned", `
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]);
const ToggleButton = defineComponent({
  name: "LayoutToggleButton",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const { clsPrefix } = this;
    return h(
      "div",
      { class: `${clsPrefix}-layout-toggle-button`, onClick: this.onClick },
      h(NBaseIcon, { clsPrefix }, {
        default: () => h(ChevronRightIcon, null)
      })
    );
  }
});
const ToggleBar = defineComponent({
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function
  },
  render() {
    const { clsPrefix } = this;
    return h(
      "div",
      { onClick: this.onClick, class: `${clsPrefix}-layout-toggle-bar` },
      h("div", { class: `${clsPrefix}-layout-toggle-bar__top` }),
      h("div", { class: `${clsPrefix}-layout-toggle-bar__bottom` })
    );
  }
});
const layoutSiderProps = {
  position: positionProp,
  bordered: Boolean,
  collapsedWidth: {
    type: Number,
    default: 48
  },
  width: {
    type: [Number, String],
    default: 272
  },
  contentStyle: {
    type: [String, Object],
    default: ""
  },
  collapseMode: {
    type: String,
    default: "transform"
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  defaultCollapsed: Boolean,
  showCollapsedContent: {
    type: Boolean,
    default: true
  },
  showTrigger: {
    type: [Boolean, String],
    default: false
  },
  nativeScrollbar: {
    type: Boolean,
    default: true
  },
  inverted: Boolean,
  scrollbarProps: Object,
  triggerStyle: [String, Object],
  collapsedTriggerStyle: [String, Object],
  "onUpdate:collapsed": [Function, Array],
  onUpdateCollapsed: [Function, Array],
  onAfterEnter: Function,
  onAfterLeave: Function,
  onExpand: [Function, Array],
  onCollapse: [Function, Array],
  onScroll: Function
};
const __unplugin_components_1 = defineComponent({
  name: "LayoutSider",
  props: Object.assign(Object.assign({}, useTheme.props), layoutSiderProps),
  setup(props) {
    const layoutProps = inject(layoutInjectionKey);
    const scrollableElRef = ref(null);
    const scrollbarInstRef = ref(null);
    const styleMaxWidthRef = computed(() => {
      return formatLength(mergedCollapsedRef.value ? props.collapsedWidth : props.width);
    });
    const scrollContainerStyleRef = computed(() => {
      if (props.collapseMode !== "transform")
        return {};
      return {
        minWidth: formatLength(props.width)
      };
    });
    const siderPlacementRef = computed(() => {
      return layoutProps ? layoutProps.siderPlacement : "left";
    });
    const uncontrolledCollapsedRef = ref(props.defaultCollapsed);
    const mergedCollapsedRef = useMergedState(toRef(props, "collapsed"), uncontrolledCollapsedRef);
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
    function handleTriggerClick() {
      const {
        "onUpdate:collapsed": _onUpdateCollapsed,
        onUpdateCollapsed,
        onExpand,
        onCollapse
      } = props;
      const { value: collapsed } = mergedCollapsedRef;
      if (onUpdateCollapsed) {
        call(onUpdateCollapsed, !collapsed);
      }
      if (_onUpdateCollapsed) {
        call(_onUpdateCollapsed, !collapsed);
      }
      uncontrolledCollapsedRef.value = !collapsed;
      if (collapsed) {
        if (onExpand)
          call(onExpand);
      } else {
        if (onCollapse)
          call(onCollapse);
      }
    }
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
    provide(layoutSiderInjectionKey, {
      collapsedRef: mergedCollapsedRef,
      collapseModeRef: toRef(props, "collapseMode")
    });
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Layout", "-layout-sider", style$1, layoutLight, props, mergedClsPrefixRef);
    function handleTransitionend(e) {
      var _a, _b;
      if (e.propertyName === "max-width") {
        if (mergedCollapsedRef.value) {
          (_a = props.onAfterLeave) === null || _a === void 0 ? void 0 : _a.call(props);
        } else {
          (_b = props.onAfterEnter) === null || _b === void 0 ? void 0 : _b.call(props);
        }
      }
    }
    const exposedMethods = {
      scrollTo
    };
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
      const { siderToggleButtonColor, siderToggleButtonBorder, siderToggleBarColor, siderToggleBarColorHover } = self;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-toggle-button-color": siderToggleButtonColor,
        "--n-toggle-button-border": siderToggleButtonBorder,
        "--n-toggle-bar-color": siderToggleBarColor,
        "--n-toggle-bar-color-hover": siderToggleBarColorHover
      };
      if (props.inverted) {
        vars["--n-color"] = self.siderColorInverted;
        vars["--n-text-color"] = self.textColorInverted;
        vars["--n-border-color"] = self.siderBorderColorInverted;
        vars["--n-toggle-button-icon-color"] = self.siderToggleButtonIconColorInverted;
        vars.__invertScrollbar = self.__invertScrollbar;
      } else {
        vars["--n-color"] = self.siderColor;
        vars["--n-text-color"] = self.textColor;
        vars["--n-border-color"] = self.siderBorderColor;
        vars["--n-toggle-button-icon-color"] = self.siderToggleButtonIconColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("layout-sider", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return Object.assign({
      scrollableElRef,
      scrollbarInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      styleMaxWidth: styleMaxWidthRef,
      mergedCollapsed: mergedCollapsedRef,
      scrollContainerStyle: scrollContainerStyleRef,
      siderPlacement: siderPlacementRef,
      handleNativeElScroll,
      handleTransitionend,
      handleTriggerClick,
      inlineThemeDisabled,
      cssVars: cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    var _a;
    const { mergedClsPrefix, mergedCollapsed, showTrigger } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(
      "aside",
      { class: [
        `${mergedClsPrefix}-layout-sider`,
        this.themeClass,
        `${mergedClsPrefix}-layout-sider--${this.position}-positioned`,
        `${mergedClsPrefix}-layout-sider--${this.siderPlacement}-placement`,
        this.bordered && `${mergedClsPrefix}-layout-sider--bordered`,
        mergedCollapsed && `${mergedClsPrefix}-layout-sider--collapsed`,
        (!mergedCollapsed || this.showCollapsedContent) && `${mergedClsPrefix}-layout-sider--show-content`
      ], onTransitionend: this.handleTransitionend, style: [
        this.inlineThemeDisabled ? void 0 : this.cssVars,
        {
          maxWidth: this.styleMaxWidth,
          width: formatLength(this.width)
        }
      ] },
      !this.nativeScrollbar ? h(NScrollbar, Object.assign({}, this.scrollbarProps, {
        onScroll: this.onScroll,
        ref: "scrollbarInstRef",
        style: this.scrollContainerStyle,
        contentStyle: this.contentStyle,
        theme: this.mergedTheme.peers.Scrollbar,
        themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
        builtinThemeOverrides: this.inverted && this.cssVars.__invertScrollbar === "true" ? {
          colorHover: "rgba(255, 255, 255, .4)",
          color: "rgba(255, 255, 255, .3)"
        } : void 0
      }), this.$slots) : h("div", { class: `${mergedClsPrefix}-layout-sider-scroll-container`, onScroll: this.handleNativeElScroll, style: [
        this.scrollContainerStyle,
        {
          overflow: "auto"
        },
        this.contentStyle
      ], ref: "scrollableElRef" }, this.$slots),
      showTrigger ? showTrigger === "bar" ? h(ToggleBar, { clsPrefix: mergedClsPrefix, style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle, onClick: this.handleTriggerClick }) : h(ToggleButton, { clsPrefix: mergedClsPrefix, style: mergedCollapsed ? this.collapsedTriggerStyle : this.triggerStyle, onClick: this.handleTriggerClick }) : null,
      this.bordered ? h("div", { class: `${mergedClsPrefix}-layout-sider__border` }) : null
    );
  }
});
const menuInjectionKey = createInjectionKey("n-menu");
const submenuInjectionKey = createInjectionKey("n-submenu");
const menuItemGroupInjectionKey = createInjectionKey("n-menu-item-group");
const ICON_MARGIN_RIGHT = 8;
function useMenuChild(props) {
  const NMenu = inject(menuInjectionKey);
  const { props: menuProps2, mergedCollapsedRef } = NMenu;
  const NSubmenu2 = inject(submenuInjectionKey, null);
  const NMenuOptionGroup2 = inject(menuItemGroupInjectionKey, null);
  const horizontalRef = computed(() => {
    return menuProps2.mode === "horizontal";
  });
  const dropdownPlacementRef = computed(() => {
    if (horizontalRef.value) {
      return menuProps2.dropdownPlacement;
    }
    if ("tmNodes" in props)
      return "right-start";
    return "right";
  });
  const maxIconSizeRef = computed(() => {
    var _a;
    return Math.max((_a = menuProps2.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps2.iconSize, menuProps2.iconSize);
  });
  const activeIconSizeRef = computed(() => {
    var _a;
    if (!horizontalRef.value && props.root && mergedCollapsedRef.value) {
      return (_a = menuProps2.collapsedIconSize) !== null && _a !== void 0 ? _a : menuProps2.iconSize;
    } else {
      return menuProps2.iconSize;
    }
  });
  const paddingLeftRef = computed(() => {
    if (horizontalRef.value)
      return void 0;
    const { collapsedWidth, indent, rootIndent } = menuProps2;
    const { root, isGroup } = props;
    const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
    if (root) {
      if (mergedCollapsedRef.value) {
        return collapsedWidth / 2 - maxIconSizeRef.value / 2;
      }
      return mergedRootIndent;
    }
    if (NMenuOptionGroup2) {
      return indent / 2 + NMenuOptionGroup2.paddingLeftRef.value;
    }
    if (NSubmenu2) {
      return (isGroup ? indent / 2 : indent) + NSubmenu2.paddingLeftRef.value;
    }
    return void 0;
  });
  const iconMarginRightRef = computed(() => {
    const { collapsedWidth, indent, rootIndent } = menuProps2;
    const { value: maxIconSize } = maxIconSizeRef;
    const { root } = props;
    if (horizontalRef.value)
      return ICON_MARGIN_RIGHT;
    if (!root)
      return ICON_MARGIN_RIGHT;
    if (!mergedCollapsedRef.value)
      return ICON_MARGIN_RIGHT;
    const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
    return mergedRootIndent + maxIconSize + ICON_MARGIN_RIGHT - (collapsedWidth + maxIconSize) / 2;
  });
  return {
    dropdownPlacement: dropdownPlacementRef,
    activeIconSize: activeIconSizeRef,
    maxIconSize: maxIconSizeRef,
    paddingLeft: paddingLeftRef,
    iconMarginRight: iconMarginRightRef,
    NMenu,
    NSubmenu: NSubmenu2
  };
}
const useMenuChildProps = {
  internalKey: {
    type: [String, Number],
    required: true
  },
  root: Boolean,
  isGroup: Boolean,
  level: {
    type: Number,
    required: true
  },
  title: [String, Function],
  extra: [String, Function]
};
const menuItemGroupProps = Object.assign(Object.assign({}, useMenuChildProps), { tmNode: {
  type: Object,
  required: true
}, tmNodes: {
  type: Array,
  required: true
} });
const NMenuOptionGroup = defineComponent({
  name: "MenuOptionGroup",
  props: menuItemGroupProps,
  setup(props) {
    provide(submenuInjectionKey, null);
    const MenuChild = useMenuChild(props);
    provide(menuItemGroupInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft
    });
    const { mergedClsPrefixRef, props: menuProps2 } = inject(menuInjectionKey);
    return function() {
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      const paddingLeft = MenuChild.paddingLeft.value;
      const { nodeProps } = menuProps2;
      const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(props.tmNode.rawNode);
      return h(
        "div",
        { class: `${mergedClsPrefix}-menu-item-group`, role: "group" },
        h(
          "div",
          Object.assign({}, attrs, { class: [`${mergedClsPrefix}-menu-item-group-title`, attrs === null || attrs === void 0 ? void 0 : attrs.class], style: [
            (attrs === null || attrs === void 0 ? void 0 : attrs.style) || "",
            paddingLeft !== void 0 ? `padding-left: ${paddingLeft}px;` : ""
          ] }),
          render(props.title),
          props.extra ? h(
            Fragment,
            null,
            " ",
            render(props.extra)
          ) : null
        ),
        h("div", null, props.tmNodes.map((tmNode) => itemRenderer(tmNode, menuProps2)))
      );
    };
  }
});
const NMenuOptionContent = defineComponent({
  name: "MenuOptionContent",
  props: {
    collapsed: Boolean,
    disabled: Boolean,
    title: [String, Function],
    icon: Function,
    extra: [String, Function],
    showArrow: Boolean,
    childActive: Boolean,
    hover: Boolean,
    paddingLeft: Number,
    selected: Boolean,
    maxIconSize: {
      type: Number,
      required: true
    },
    activeIconSize: {
      type: Number,
      required: true
    },
    iconMarginRight: {
      type: Number,
      required: true
    },
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function,
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { props: menuProps2 } = inject(menuInjectionKey);
    return {
      menuProps: menuProps2,
      style: computed(() => {
        const { paddingLeft } = props;
        return { paddingLeft: paddingLeft && `${paddingLeft}px` };
      }),
      iconStyle: computed(() => {
        const { maxIconSize, activeIconSize, iconMarginRight } = props;
        return {
          width: `${maxIconSize}px`,
          height: `${maxIconSize}px`,
          fontSize: `${activeIconSize}px`,
          marginRight: `${iconMarginRight}px`
        };
      })
    };
  },
  render() {
    const { clsPrefix, tmNode, menuProps: { renderIcon: renderIcon2, renderLabel: renderLabel2, renderExtra, expandIcon } } = this;
    const icon = renderIcon2 ? renderIcon2(tmNode.rawNode) : render(this.icon);
    return h(
      "div",
      { onClick: (e) => {
        var _a;
        (_a = this.onClick) === null || _a === void 0 ? void 0 : _a.call(this, e);
      }, role: "none", class: [
        `${clsPrefix}-menu-item-content`,
        {
          [`${clsPrefix}-menu-item-content--selected`]: this.selected,
          [`${clsPrefix}-menu-item-content--collapsed`]: this.collapsed,
          [`${clsPrefix}-menu-item-content--child-active`]: this.childActive,
          [`${clsPrefix}-menu-item-content--disabled`]: this.disabled,
          [`${clsPrefix}-menu-item-content--hover`]: this.hover
        }
      ], style: this.style },
      icon && h("div", { class: `${clsPrefix}-menu-item-content__icon`, style: this.iconStyle, role: "none" }, [icon]),
      h(
        "div",
        { class: `${clsPrefix}-menu-item-content-header`, role: "none" },
        renderLabel2 ? renderLabel2(tmNode.rawNode) : render(this.title),
        this.extra || renderExtra ? h(
          "span",
          { class: `${clsPrefix}-menu-item-content-header__extra` },
          " ",
          renderExtra ? renderExtra(tmNode.rawNode) : render(this.extra)
        ) : null
      ),
      this.showArrow ? h(NBaseIcon, { ariaHidden: true, class: `${clsPrefix}-menu-item-content__arrow`, clsPrefix }, {
        default: () => expandIcon ? expandIcon(tmNode.rawNode) : h(ChevronDownFilledIcon, null)
      }) : null
    );
  }
});
const submenuProps = Object.assign(Object.assign({}, useMenuChildProps), { rawNodes: {
  type: Array,
  default: () => []
}, tmNodes: {
  type: Array,
  default: () => []
}, tmNode: {
  type: Object,
  required: true
}, disabled: {
  type: Boolean,
  default: false
}, icon: Function, onClick: Function });
const NSubmenu = defineComponent({
  name: "Submenu",
  props: submenuProps,
  setup(props) {
    const MenuChild = useMenuChild(props);
    const { NMenu, NSubmenu: NSubmenu2 } = MenuChild;
    const { props: menuProps2, mergedCollapsedRef, mergedThemeRef } = NMenu;
    const mergedDisabledRef = computed(() => {
      const { disabled } = props;
      if (NSubmenu2 === null || NSubmenu2 === void 0 ? void 0 : NSubmenu2.mergedDisabledRef.value)
        return true;
      if (menuProps2.disabled)
        return true;
      return disabled;
    });
    const dropdownShowRef = ref(false);
    provide(submenuInjectionKey, {
      paddingLeftRef: MenuChild.paddingLeft,
      mergedDisabledRef
    });
    provide(menuItemGroupInjectionKey, null);
    function doClick() {
      const { onClick } = props;
      if (onClick)
        onClick();
    }
    function handleClick() {
      if (!mergedDisabledRef.value) {
        if (!mergedCollapsedRef.value) {
          NMenu.toggleExpand(props.internalKey);
        }
        doClick();
      }
    }
    function handlePopoverShowChange(value) {
      dropdownShowRef.value = value;
    }
    return {
      menuProps: menuProps2,
      mergedTheme: mergedThemeRef,
      doSelect: NMenu.doSelect,
      inverted: NMenu.invertedRef,
      isHorizontal: NMenu.isHorizontalRef,
      mergedClsPrefix: NMenu.mergedClsPrefixRef,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      iconMarginRight: MenuChild.iconMarginRight,
      dropdownPlacement: MenuChild.dropdownPlacement,
      dropdownShow: dropdownShowRef,
      paddingLeft: MenuChild.paddingLeft,
      mergedDisabled: mergedDisabledRef,
      mergedValue: NMenu.mergedValueRef,
      childActive: useMemo(() => {
        return NMenu.activePathRef.value.includes(props.internalKey);
      }),
      collapsed: computed(() => {
        if (menuProps2.mode === "horizontal")
          return false;
        if (mergedCollapsedRef.value) {
          return true;
        }
        return !NMenu.mergedExpandedKeysRef.value.includes(props.internalKey);
      }),
      dropdownEnabled: computed(() => {
        return !mergedDisabledRef.value && (menuProps2.mode === "horizontal" || mergedCollapsedRef.value);
      }),
      handlePopoverShowChange,
      handleClick
    };
  },
  render() {
    var _a;
    const { mergedClsPrefix, menuProps: { renderIcon: renderIcon2, renderLabel: renderLabel2 } } = this;
    const createSubmenuItem = () => {
      const { isHorizontal, paddingLeft, collapsed, mergedDisabled, maxIconSize, activeIconSize, title, childActive, icon, handleClick, menuProps: { nodeProps }, dropdownShow, iconMarginRight, tmNode, mergedClsPrefix: mergedClsPrefix2 } = this;
      const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(tmNode.rawNode);
      return h(
        "div",
        Object.assign({}, attrs, { class: [`${mergedClsPrefix2}-menu-item`, attrs === null || attrs === void 0 ? void 0 : attrs.class], role: "menuitem" }),
        h(NMenuOptionContent, { tmNode, paddingLeft, collapsed, disabled: mergedDisabled, iconMarginRight, maxIconSize, activeIconSize, title, showArrow: !isHorizontal, childActive, clsPrefix: mergedClsPrefix2, icon, hover: dropdownShow, onClick: handleClick })
      );
    };
    const createSubmenuChildren = () => {
      return h(NFadeInExpandTransition, null, {
        default: () => {
          const { tmNodes, collapsed } = this;
          return !collapsed ? h("div", { class: `${mergedClsPrefix}-submenu-children`, role: "menu" }, tmNodes.map((item) => itemRenderer(item, this.menuProps))) : null;
        }
      });
    };
    return this.root ? h(NDropdown, Object.assign({ size: "large" }, (_a = this.menuProps) === null || _a === void 0 ? void 0 : _a.dropdownProps, { themeOverrides: this.mergedTheme.peerOverrides.Dropdown, theme: this.mergedTheme.peers.Dropdown, builtinThemeOverrides: {
      fontSizeLarge: "14px",
      optionIconSizeLarge: "18px"
    }, value: this.mergedValue, trigger: "hover", disabled: !this.dropdownEnabled, placement: this.dropdownPlacement, keyField: this.menuProps.keyField, labelField: this.menuProps.labelField, childrenField: this.menuProps.childrenField, onUpdateShow: this.handlePopoverShowChange, options: this.rawNodes, onSelect: this.doSelect, inverted: this.inverted, renderIcon: renderIcon2, renderLabel: renderLabel2 }), {
      default: () => h(
        "div",
        { class: `${mergedClsPrefix}-submenu`, role: "menuitem", "aria-expanded": !this.collapsed },
        createSubmenuItem(),
        this.isHorizontal ? null : createSubmenuChildren()
      )
    }) : h(
      "div",
      { class: `${mergedClsPrefix}-submenu`, role: "menuitem", "aria-expanded": !this.collapsed },
      createSubmenuItem(),
      createSubmenuChildren()
    );
  }
});
const menuItemProps = Object.assign(Object.assign({}, useMenuChildProps), { tmNode: {
  type: Object,
  required: true
}, disabled: Boolean, icon: Function, onClick: Function });
const NMenuOption = defineComponent({
  name: "MenuOption",
  props: menuItemProps,
  setup(props) {
    const MenuChild = useMenuChild(props);
    const { NSubmenu: NSubmenu2, NMenu } = MenuChild;
    const { props: menuProps2, mergedClsPrefixRef, mergedCollapsedRef } = NMenu;
    const submenuDisabledRef = NSubmenu2 ? NSubmenu2.mergedDisabledRef : { value: false };
    const mergedDisabledRef = computed(() => {
      return submenuDisabledRef.value || props.disabled;
    });
    function doClick(e) {
      const { onClick } = props;
      if (onClick)
        onClick(e);
    }
    function handleClick(e) {
      if (!mergedDisabledRef.value) {
        NMenu.doSelect(props.internalKey, props.tmNode.rawNode);
        doClick(e);
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      dropdownPlacement: MenuChild.dropdownPlacement,
      paddingLeft: MenuChild.paddingLeft,
      iconMarginRight: MenuChild.iconMarginRight,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      mergedTheme: NMenu.mergedThemeRef,
      menuProps: menuProps2,
      dropdownEnabled: useMemo(() => {
        return props.root && mergedCollapsedRef.value && menuProps2.mode !== "horizontal" && !mergedDisabledRef.value;
      }),
      selected: computed(() => {
        if (NMenu.mergedValueRef.value === props.internalKey)
          return true;
        return false;
      }),
      mergedDisabled: mergedDisabledRef,
      handleClick
    };
  },
  render() {
    const { mergedClsPrefix, mergedTheme, tmNode, menuProps: { renderLabel: renderLabel2, nodeProps } } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(tmNode.rawNode);
    return h(
      "div",
      Object.assign({}, attrs, { role: "menuitem", class: [`${mergedClsPrefix}-menu-item`, attrs === null || attrs === void 0 ? void 0 : attrs.class] }),
      h(__unplugin_components_1$1, { theme: mergedTheme.peers.Tooltip, themeOverrides: mergedTheme.peerOverrides.Tooltip, trigger: "hover", placement: this.dropdownPlacement, disabled: !this.dropdownEnabled || this.title === void 0, internalExtraClass: ["menu-tooltip"] }, {
        default: () => renderLabel2 ? renderLabel2(tmNode.rawNode) : render(this.title),
        trigger: () => h(NMenuOptionContent, { tmNode, clsPrefix: mergedClsPrefix, paddingLeft: this.paddingLeft, iconMarginRight: this.iconMarginRight, maxIconSize: this.maxIconSize, activeIconSize: this.activeIconSize, selected: this.selected, title: this.title, extra: this.extra, disabled: this.mergedDisabled, icon: this.icon, onClick: this.handleClick })
      })
    );
  }
});
const NMenuDivider = defineComponent({
  name: "MenuDivider",
  setup() {
    const NMenu = inject(menuInjectionKey);
    const { mergedClsPrefixRef, isHorizontalRef } = NMenu;
    return () => isHorizontalRef.value ? null : h("div", { class: `${mergedClsPrefixRef.value}-menu-divider` });
  }
});
const groupPropKeys = keysOf(menuItemGroupProps);
const itemPropKeys = keysOf(menuItemProps);
const submenuPropKeys = keysOf(submenuProps);
function isIgnoredNode(rawNode) {
  return rawNode.type === "divider" || rawNode.type === "render";
}
function isDividerNode(rawNode) {
  return rawNode.type === "divider";
}
function itemRenderer(tmNode, menuProps2) {
  const { rawNode } = tmNode;
  if (isIgnoredNode(rawNode)) {
    if (isDividerNode(rawNode)) {
      return h(NMenuDivider, Object.assign({ key: tmNode.key }, rawNode.props));
    }
    return void 0;
  }
  const { labelField } = menuProps2;
  const { key, level, isGroup } = tmNode;
  const props = Object.assign(Object.assign({}, rawNode), {
    title: rawNode.title || rawNode[labelField],
    extra: rawNode.titleExtra || rawNode.extra,
    key,
    internalKey: key,
    level,
    root: level === 0,
    isGroup
  });
  if (tmNode.children) {
    if (tmNode.isGroup) {
      return h(NMenuOptionGroup, keep(props, groupPropKeys, { tmNode, tmNodes: tmNode.children, key }));
    }
    return h(NSubmenu, keep(props, submenuPropKeys, {
      key,
      rawNodes: rawNode[menuProps2.childrenField],
      tmNodes: tmNode.children,
      tmNode
    }));
  } else {
    return h(NMenuOption, keep(props, itemPropKeys, {
      key,
      tmNode
    }));
  }
}
const hoverStyleChildren = [c("&::before", "background-color: var(--n-item-color-hover);"), cE("arrow", `
 color: var(--n-arrow-color-hover);
 `), cE("icon", `
 color: var(--n-item-icon-color-hover);
 `), cB("menu-item-content-header", `
 color: var(--n-item-text-color-hover);
 `, [c("a", `
 color: var(--n-item-text-color-hover);
 `), cE("extra", `
 color: var(--n-item-text-color-hover);
 `)])];
const horizontalHoverStyleChildren = [cE("icon", `
 color: var(--n-item-icon-color-hover-horizontal);
 `), cB("menu-item-content-header", `
 color: var(--n-item-text-color-hover-horizontal);
 `, [c("a", `
 color: var(--n-item-text-color-hover-horizontal);
 `), cE("extra", `
 color: var(--n-item-text-color-hover-horizontal);
 `)])];
const style = c([cB("menu", `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `, [cM("horizontal", `
 display: inline-flex;
 padding-bottom: 0;
 `, [cB("submenu", "margin: 0;"), cB("menu-item", "margin: 0;"), cB("menu-item-content", `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `, [c("&::before", "display: none;"), cM("selected", "border-bottom: 2px solid var(--n-border-color-horizontal)")]), cB("menu-item-content", [cM("selected", [cE("icon", "color: var(--n-item-icon-color-active-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-horizontal);
 `, [c("a", "color: var(--n-item-text-color-active-horizontal);"), cE("extra", "color: var(--n-item-text-color-active-horizontal);")])]), cM("child-active", `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `, [cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-horizontal);
 `, [c("a", `
 color: var(--n-item-text-color-child-active-horizontal);
 `), cE("extra", `
 color: var(--n-item-text-color-child-active-horizontal);
 `)]), cE("icon", `
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]), cNotM("disabled", [cNotM("selected, child-active", [c("&:focus-within", horizontalHoverStyleChildren)]), cM("selected", [hoverStyle(null, [cE("icon", "color: var(--n-item-icon-color-active-hover-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover-horizontal);
 `, [c("a", "color: var(--n-item-text-color-active-hover-horizontal);"), cE("extra", "color: var(--n-item-text-color-active-hover-horizontal);")])])]), cM("child-active", [hoverStyle(null, [cE("icon", "color: var(--n-item-icon-color-child-active-hover-horizontal);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `, [c("a", "color: var(--n-item-text-color-child-active-hover-horizontal);"), cE("extra", "color: var(--n-item-text-color-child-active-hover-horizontal);")])])]), hoverStyle("border-bottom: 2px solid var(--n-border-color-horizontal);", horizontalHoverStyleChildren)]), cB("menu-item-content-header", [c("a", "color: var(--n-item-text-color-horizontal);")])])]), cM("collapsed", [cB("menu-item-content", [cM("selected", [c("&::before", `
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]), cB("menu-item-content-header", "opacity: 0;"), cE("arrow", "opacity: 0;"), cE("icon", "color: var(--n-item-icon-color-collapsed);")])]), cB("menu-item", `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `), cB("menu-item-content", `
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [c("> *", "z-index: 1;"), c("&::before", `
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), cM("disabled", `
 opacity: .45;
 cursor: not-allowed;
 `), cM("collapsed", [cE("arrow", "transform: rotate(0);")]), cM("selected", [c("&::before", "background-color: var(--n-item-color-active);"), cE("arrow", "color: var(--n-arrow-color-active);"), cE("icon", "color: var(--n-item-icon-color-active);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active);
 `, [c("a", "color: var(--n-item-text-color-active);"), cE("extra", "color: var(--n-item-text-color-active);")])]), cM("child-active", [cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active);
 `, [c("a", `
 color: var(--n-item-text-color-child-active);
 `), cE("extra", `
 color: var(--n-item-text-color-child-active);
 `)]), cE("arrow", `
 color: var(--n-arrow-color-child-active);
 `), cE("icon", `
 color: var(--n-item-icon-color-child-active);
 `)]), cNotM("disabled", [cNotM("selected, child-active", [c("&:focus-within", hoverStyleChildren)]), cM("selected", [hoverStyle(null, [cE("arrow", "color: var(--n-arrow-color-active-hover);"), cE("icon", "color: var(--n-item-icon-color-active-hover);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-active-hover);
 `, [c("a", "color: var(--n-item-text-color-active-hover);"), cE("extra", "color: var(--n-item-text-color-active-hover);")])])]), cM("child-active", [hoverStyle(null, [cE("arrow", "color: var(--n-arrow-color-child-active-hover);"), cE("icon", "color: var(--n-item-icon-color-child-active-hover);"), cB("menu-item-content-header", `
 color: var(--n-item-text-color-child-active-hover);
 `, [c("a", "color: var(--n-item-text-color-child-active-hover);"), cE("extra", "color: var(--n-item-text-color-child-active-hover);")])])]), cM("selected", [hoverStyle(null, [c("&::before", "background-color: var(--n-item-color-active-hover);")])]), hoverStyle(null, hoverStyleChildren)]), cE("icon", `
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `), cE("arrow", `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `), cB("menu-item-content-header", `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `, [c("a", `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `, [c("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cE("extra", `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]), cB("submenu", `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `, [cB("menu-item-content", `
 height: var(--n-item-height);
 `), cB("submenu-children", `
 overflow: hidden;
 padding: 0;
 `, [fadeInHeightExpandTransition({
  duration: ".2s"
})])]), cB("menu-item-group", [cB("menu-item-group-title", `
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]), cB("menu-tooltip", [c("a", `
 color: inherit;
 text-decoration: none;
 `)]), cB("menu-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);
function hoverStyle(props, children) {
  return [cM("hover", props, children), c("&:hover", props, children)];
}
const menuProps = Object.assign(Object.assign({}, useTheme.props), {
  options: {
    type: Array,
    default: () => []
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  collapsedWidth: {
    type: Number,
    default: 48
  },
  iconSize: {
    type: Number,
    default: 20
  },
  collapsedIconSize: {
    type: Number,
    default: 24
  },
  rootIndent: Number,
  indent: {
    type: Number,
    default: 32
  },
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  defaultExpandAll: Boolean,
  defaultExpandedKeys: Array,
  expandedKeys: Array,
  value: [String, Number],
  defaultValue: {
    type: [String, Number],
    default: null
  },
  mode: {
    type: String,
    default: "vertical"
  },
  watchProps: {
    type: Array,
    default: void 0
  },
  disabled: Boolean,
  inverted: Boolean,
  "onUpdate:expandedKeys": [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:value": [Function, Array],
  expandIcon: Function,
  renderIcon: Function,
  renderLabel: Function,
  renderExtra: Function,
  dropdownProps: Object,
  accordion: Boolean,
  nodeProps: Function,
  items: Array,
  onOpenNamesChange: [Function, Array],
  onSelect: [Function, Array],
  onExpandedNamesChange: [Function, Array],
  expandedNames: Array,
  defaultExpandedNames: Array,
  dropdownPlacement: {
    type: String,
    default: "bottom"
  }
});
const __unplugin_components_0 = defineComponent({
  name: "Menu",
  props: menuProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Menu", "-menu", style, menuLight, props, mergedClsPrefixRef);
    const layoutSider = inject(layoutSiderInjectionKey, null);
    const mergedCollapsedRef = computed(() => {
      var _a;
      const { collapsed } = props;
      if (collapsed !== void 0)
        return collapsed;
      if (layoutSider) {
        const { collapseModeRef, collapsedRef } = layoutSider;
        if (collapseModeRef.value === "width") {
          return (_a = collapsedRef.value) !== null && _a !== void 0 ? _a : false;
        }
      }
      return false;
    });
    const treeMateRef = computed(() => {
      const { keyField, childrenField } = props;
      return createTreeMate(props.items || props.options, {
        getChildren(node) {
          return node[childrenField];
        },
        getKey(node) {
          var _a;
          return (_a = node[keyField]) !== null && _a !== void 0 ? _a : node.name;
        }
      });
    });
    const treeKeysLevelOneRef = computed(() => new Set(treeMateRef.value.treeNodes.map((e) => e.key)));
    const { watchProps } = props;
    const uncontrolledValueRef = ref(null);
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultValue")) {
      watchEffect(() => {
        uncontrolledValueRef.value = props.defaultValue;
      });
    } else {
      uncontrolledValueRef.value = props.defaultValue;
    }
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const uncontrolledExpandedKeysRef = ref([]);
    const initUncontrolledExpandedKeys = () => {
      uncontrolledExpandedKeysRef.value = props.defaultExpandAll ? treeMateRef.value.getNonLeafKeys() : props.defaultExpandedNames || props.defaultExpandedKeys || treeMateRef.value.getPath(mergedValueRef.value, {
        includeSelf: false
      }).keyPath;
    };
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultExpandedKeys")) {
      watchEffect(initUncontrolledExpandedKeys);
    } else {
      initUncontrolledExpandedKeys();
    }
    const controlledExpandedKeysRef = useCompitable(props, [
      "expandedNames",
      "expandedKeys"
    ]);
    const mergedExpandedKeysRef = useMergedState(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
    const tmNodesRef = computed(() => treeMateRef.value.treeNodes);
    const activePathRef = computed(() => {
      return treeMateRef.value.getPath(mergedValueRef.value).keyPath;
    });
    provide(menuInjectionKey, {
      props,
      mergedCollapsedRef,
      mergedThemeRef: themeRef,
      mergedValueRef,
      mergedExpandedKeysRef,
      activePathRef,
      mergedClsPrefixRef,
      isHorizontalRef: computed(() => props.mode === "horizontal"),
      invertedRef: toRef(props, "inverted"),
      doSelect,
      toggleExpand
    });
    function doSelect(value, item) {
      const { "onUpdate:value": _onUpdateValue, onUpdateValue, onSelect } = props;
      if (onUpdateValue) {
        call(onUpdateValue, value, item);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, item);
      }
      if (onSelect) {
        call(onSelect, value, item);
      }
      uncontrolledValueRef.value = value;
    }
    function doUpdateExpandedKeys(value) {
      const { "onUpdate:expandedKeys": _onUpdateExpandedKeys, onUpdateExpandedKeys, onExpandedNamesChange, onOpenNamesChange } = props;
      if (_onUpdateExpandedKeys) {
        call(_onUpdateExpandedKeys, value);
      }
      if (onUpdateExpandedKeys) {
        call(onUpdateExpandedKeys, value);
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, value);
      }
      if (onOpenNamesChange) {
        call(onOpenNamesChange, value);
      }
      uncontrolledExpandedKeysRef.value = value;
    }
    function toggleExpand(key) {
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
      const index2 = currentExpandedKeys.findIndex((expanededKey) => expanededKey === key);
      if (~index2) {
        currentExpandedKeys.splice(index2, 1);
      } else {
        if (props.accordion) {
          if (treeKeysLevelOneRef.value.has(key)) {
            const closeKeyIndex = currentExpandedKeys.findIndex((e) => treeKeysLevelOneRef.value.has(e));
            if (closeKeyIndex > -1) {
              currentExpandedKeys.splice(closeKeyIndex, 1);
            }
          }
        }
        currentExpandedKeys.push(key);
      }
      doUpdateExpandedKeys(currentExpandedKeys);
    }
    const showOption = (key) => {
      const selectedKeyPath = treeMateRef.value.getPath(key !== null && key !== void 0 ? key : mergedValueRef.value, {
        includeSelf: false
      }).keyPath;
      if (!selectedKeyPath.length)
        return;
      const currentExpandedKeys = Array.from(mergedExpandedKeysRef.value);
      const nextExpandedKeys = /* @__PURE__ */ new Set([
        ...currentExpandedKeys,
        ...selectedKeyPath
      ]);
      if (props.accordion) {
        treeKeysLevelOneRef.value.forEach((firstLevelKey) => {
          if (nextExpandedKeys.has(firstLevelKey) && !selectedKeyPath.includes(firstLevelKey)) {
            nextExpandedKeys.delete(firstLevelKey);
          }
        });
      }
      doUpdateExpandedKeys(Array.from(nextExpandedKeys));
    };
    const cssVarsRef = computed(() => {
      const { inverted } = props;
      const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
      const { borderRadius, borderColorHorizontal, fontSize, itemHeight, dividerColor } = self;
      const vars = {
        "--n-divider-color": dividerColor,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-border-color-horizontal": borderColorHorizontal,
        "--n-border-radius": borderRadius,
        "--n-item-height": itemHeight
      };
      if (inverted) {
        vars["--n-group-text-color"] = self.groupTextColorInverted;
        vars["--n-color"] = self.colorInverted;
        vars["--n-item-text-color"] = self.itemTextColorInverted;
        vars["--n-item-text-color-hover"] = self.itemTextColorHoverInverted;
        vars["--n-item-text-color-active"] = self.itemTextColorActiveInverted;
        vars["--n-item-text-color-child-active"] = self.itemTextColorChildActiveInverted;
        vars["--n-item-text-color-child-active-hover"] = self.itemTextColorChildActiveInverted;
        vars["--n-item-text-color-active-hover"] = self.itemTextColorActiveHoverInverted;
        vars["--n-item-icon-color"] = self.itemIconColorInverted;
        vars["--n-item-icon-color-hover"] = self.itemIconColorHoverInverted;
        vars["--n-item-icon-color-active"] = self.itemIconColorActiveInverted;
        vars["--n-item-icon-color-active-hover"] = self.itemIconColorActiveHoverInverted;
        vars["--n-item-icon-color-child-active"] = self.itemIconColorChildActiveInverted;
        vars["--n-item-icon-color-child-active-hover"] = self.itemIconColorChildActiveHoverInverted;
        vars["--n-item-icon-color-collapsed"] = self.itemIconColorCollapsedInverted;
        vars["--n-item-text-color-horizontal"] = self.itemTextColorHorizontalInverted;
        vars["--n-item-text-color-hover-horizontal"] = self.itemTextColorHoverHorizontalInverted;
        vars["--n-item-text-color-active-horizontal"] = self.itemTextColorActiveHorizontalInverted;
        vars["--n-item-text-color-child-active-horizontal"] = self.itemTextColorChildActiveHorizontalInverted;
        vars["--n-item-text-color-child-active-hover-horizontal"] = self.itemTextColorChildActiveHoverHorizontalInverted;
        vars["--n-item-text-color-active-hover-horizontal"] = self.itemTextColorActiveHoverHorizontalInverted;
        vars["--n-item-icon-color-horizontal"] = self.itemIconColorHorizontalInverted;
        vars["--n-item-icon-color-hover-horizontal"] = self.itemIconColorHoverHorizontalInverted;
        vars["--n-item-icon-color-active-horizontal"] = self.itemIconColorActiveHorizontalInverted;
        vars["--n-item-icon-color-active-hover-horizontal"] = self.itemIconColorActiveHoverHorizontalInverted;
        vars["--n-item-icon-color-child-active-horizontal"] = self.itemIconColorChildActiveHorizontalInverted;
        vars["--n-item-icon-color-child-active-hover-horizontal"] = self.itemIconColorChildActiveHoverHorizontalInverted;
        vars["--n-arrow-color"] = self.arrowColorInverted;
        vars["--n-arrow-color-hover"] = self.arrowColorHoverInverted;
        vars["--n-arrow-color-active"] = self.arrowColorActiveInverted;
        vars["--n-arrow-color-active-hover"] = self.arrowColorActiveHoverInverted;
        vars["--n-arrow-color-child-active"] = self.arrowColorChildActiveInverted;
        vars["--n-arrow-color-child-active-hover"] = self.arrowColorChildActiveHoverInverted;
        vars["--n-item-color-hover"] = self.itemColorHoverInverted;
        vars["--n-item-color-active"] = self.itemColorActiveInverted;
        vars["--n-item-color-active-hover"] = self.itemColorActiveHoverInverted;
        vars["--n-item-color-active-collapsed"] = self.itemColorActiveCollapsedInverted;
      } else {
        vars["--n-group-text-color"] = self.groupTextColor;
        vars["--n-color"] = self.color;
        vars["--n-item-text-color"] = self.itemTextColor;
        vars["--n-item-text-color-hover"] = self.itemTextColorHover;
        vars["--n-item-text-color-active"] = self.itemTextColorActive;
        vars["--n-item-text-color-child-active"] = self.itemTextColorChildActive;
        vars["--n-item-text-color-child-active-hover"] = self.itemTextColorChildActiveHover;
        vars["--n-item-text-color-active-hover"] = self.itemTextColorActiveHover;
        vars["--n-item-icon-color"] = self.itemIconColor;
        vars["--n-item-icon-color-hover"] = self.itemIconColorHover;
        vars["--n-item-icon-color-active"] = self.itemIconColorActive;
        vars["--n-item-icon-color-active-hover"] = self.itemIconColorActiveHover;
        vars["--n-item-icon-color-child-active"] = self.itemIconColorChildActive;
        vars["--n-item-icon-color-child-active-hover"] = self.itemIconColorChildActiveHover;
        vars["--n-item-icon-color-collapsed"] = self.itemIconColorCollapsed;
        vars["--n-item-text-color-horizontal"] = self.itemTextColorHorizontal;
        vars["--n-item-text-color-hover-horizontal"] = self.itemTextColorHoverHorizontal;
        vars["--n-item-text-color-active-horizontal"] = self.itemTextColorActiveHorizontal;
        vars["--n-item-text-color-child-active-horizontal"] = self.itemTextColorChildActiveHorizontal;
        vars["--n-item-text-color-child-active-hover-horizontal"] = self.itemTextColorChildActiveHoverHorizontal;
        vars["--n-item-text-color-active-hover-horizontal"] = self.itemTextColorActiveHoverHorizontal;
        vars["--n-item-icon-color-horizontal"] = self.itemIconColorHorizontal;
        vars["--n-item-icon-color-hover-horizontal"] = self.itemIconColorHoverHorizontal;
        vars["--n-item-icon-color-active-horizontal"] = self.itemIconColorActiveHorizontal;
        vars["--n-item-icon-color-active-hover-horizontal"] = self.itemIconColorActiveHoverHorizontal;
        vars["--n-item-icon-color-child-active-horizontal"] = self.itemIconColorChildActiveHorizontal;
        vars["--n-item-icon-color-child-active-hover-horizontal"] = self.itemIconColorChildActiveHoverHorizontal;
        vars["--n-arrow-color"] = self.arrowColor;
        vars["--n-arrow-color-hover"] = self.arrowColorHover;
        vars["--n-arrow-color-active"] = self.arrowColorActive;
        vars["--n-arrow-color-active-hover"] = self.arrowColorActiveHover;
        vars["--n-arrow-color-child-active"] = self.arrowColorChildActive;
        vars["--n-arrow-color-child-active-hover"] = self.arrowColorChildActiveHover;
        vars["--n-item-color-hover"] = self.itemColorHover;
        vars["--n-item-color-active"] = self.itemColorActive;
        vars["--n-item-color-active-hover"] = self.itemColorActiveHover;
        vars["--n-item-color-active-collapsed"] = self.itemColorActiveCollapsed;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("menu", computed(() => props.inverted ? "a" : "b"), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      controlledExpandedKeys: controlledExpandedKeysRef,
      uncontrolledExpanededKeys: uncontrolledExpandedKeysRef,
      mergedExpandedKeys: mergedExpandedKeysRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      activePath: activePathRef,
      tmNodes: tmNodesRef,
      mergedTheme: themeRef,
      mergedCollapsed: mergedCollapsedRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      showOption
    };
  },
  render() {
    const { mergedClsPrefix, mode, themeClass, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", { role: mode === "horizontal" ? "menubar" : "menu", class: [
      `${mergedClsPrefix}-menu`,
      themeClass,
      `${mergedClsPrefix}-menu--${mode}`,
      this.mergedCollapsed && `${mergedClsPrefix}-menu--collapsed`
    ], style: this.cssVars }, this.tmNodes.map((tmNode) => itemRenderer(tmNode, this.$props)));
  }
});
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M32 32v432a16 16 0 0 0 16 16h432",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode(
  "rect",
  {
    x: "96",
    y: "224",
    width: "80",
    height: "192",
    rx: "20",
    ry: "20",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode(
  "rect",
  {
    x: "240",
    y: "176",
    width: "80",
    height: "240",
    rx: "20",
    ry: "20",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode(
  "rect",
  {
    x: "383.64",
    y: "112",
    width: "80",
    height: "304",
    rx: "20",
    ry: "20",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_6$1 = [_hoisted_2$5, _hoisted_3$3, _hoisted_4$3, _hoisted_5$1];
const BarChartOutline = defineComponent({
  name: "BarChartOutline",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_6$1);
  }
});
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M256 160v288"
  },
  null,
  -1
);
const _hoisted_4$2 = [_hoisted_2$4, _hoisted_3$2];
const BookOutline = defineComponent({
  name: "BookOutline",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$2);
  }
});
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81z",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M48 256h112l48-96l48 160l48-96l32 64h128"
  },
  null,
  -1
);
const _hoisted_4$1 = [_hoisted_2$3, _hoisted_3$1];
const FitnessOutline = defineComponent({
  name: "FitnessOutline",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$1);
  }
});
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<circle cx="129" cy="96" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="129" cy="416" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M129 144v224"></path><circle cx="385" cy="288" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M129 144c0 96 112 144 208 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>', 5);
const _hoisted_7 = [_hoisted_2$2];
const GitMergeOutline = defineComponent({
  name: "GitMergeOutline",
  render: function render5(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_7);
  }
});
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<rect x="32" y="96" width="64" height="368" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 224h128"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 400h128"></path><rect x="112" y="160" width="128" height="304" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><rect x="256" y="48" width="96" height="416" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><path d="M422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path>', 6);
const _hoisted_8 = [_hoisted_2$1];
const LibraryOutline = defineComponent({
  name: "LibraryOutline",
  render: function render6(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_8);
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
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M160 336V48l32 16l32-16l31.94 16l32.37-16L320 64l31.79-16l31.93 16L416 48l32.01 16L480 48v224"
  },
  null,
  -1
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M480 272v112a80 80 0 0 1-80 80h0a80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M224 144h192"
  },
  null,
  -1
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M288 224h128"
  },
  null,
  -1
);
const _hoisted_6 = [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5];
const ReceiptOutline = defineComponent({
  name: "ReceiptOutline",
  render: function render7(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_6);
  }
});
const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
const renderLabel = (path, icon) => {
  const upperFirstLatter = (str) => {
    const strArr = str.split("");
    strArr.splice(0, 1, strArr[0].toUpperCase());
    return strArr.join("");
  };
  const path2Key = (str) => {
    return upperFirstLatter(
      str.replace(/-(\w{1})/g, (match) => {
        return match[1].toUpperCase();
      })
    );
  };
  const path2Label = (str) => {
    return upperFirstLatter(
      str.replace(/-(\w{1})/g, (match) => {
        return ` ${match[1].toUpperCase()}`;
      })
    );
  };
  return {
    label: () => h(
      RouterLink,
      { to: { path: `/${path}` } },
      { default: () => path2Label(path) }
    ),
    key: path2Key(path),
    icon: renderIcon(icon)
  };
};
const menuOptions = [
  renderLabel("overview", BookOutline),
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        margin: "0 32px"
      }
    }
  },
  renderLabel("performance-timing", LibraryOutline),
  renderLabel("navigation-timing", GitMergeOutline),
  renderLabel("resource-flow", BarChartOutline),
  renderLabel("user-behavior", ReceiptOutline),
  renderLabel("error-info", FitnessOutline)
];
const _sfc_main = defineComponent({
  name: "layout",
  components: {
    HeaderMenu
  },
  setup() {
    return {
      activeKey: ref(null),
      collapsed: ref(false),
      menuOptions
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_ba4f516a_lang = "";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HeaderMenu = resolveComponent("HeaderMenu");
  const _component_n_menu = __unplugin_components_0;
  const _component_n_layout_sider = __unplugin_components_1;
  const _component_router_view = resolveComponent("router-view");
  const _component_n_layout = __unplugin_components_2;
  return openBlock(), createBlock(_component_n_layout, { style: { "height": "100vh" } }, {
    default: withCtx(() => [
      createVNode(_component_HeaderMenu),
      createVNode(_component_n_layout, {
        position: "absolute",
        style: { "top": "60px" },
        "has-sider": ""
      }, {
        default: withCtx(() => [
          createVNode(_component_n_layout_sider, {
            "collapse-mode": "width",
            "collapsed-width": 64,
            width: 240,
            "native-scrollbar": false,
            "show-trigger": "",
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_n_menu, {
                "collapsed-width": 64,
                "collapsed-icon-size": 22,
                options: _ctx.menuOptions
              }, null, 8, ["options"])
            ]),
            _: 1
          }),
          createVNode(_component_n_layout, { "native-scrollbar": false }, {
            default: withCtx(() => [
              createVNode(_component_router_view)
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ba4f516a"]]);
export {
  index as default
};
