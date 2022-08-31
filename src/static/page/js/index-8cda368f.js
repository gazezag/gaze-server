import { _ as __unplugin_components_4 } from "./Panel-2ae0748d.js";
import { d as defineComponent, k as storeToRefs, bh as useUserBehaviorStore, ae as timeFormatter, bi as getKeys, bj as getValueList, _ as _export_sfc, x as createBlock, y as withCtx, z as openBlock, A as createVNode, B as createTextVNode, bc as toDisplayString, C as createElementBlock, be as renderList, aq as Fragment, D as createBaseVNode } from "./main-b154a3fa.js";
import { _ as __unplugin_components_2, a as __unplugin_components_3, b as __unplugin_components_1 } from "./Table-26eb2b43.js";
import { _ as __unplugin_components_7 } from "./Space-025b428f.js";
import "./use-merged-state-d9ecddb6.js";
import "./ChevronRight-c12bf639.js";
const _sfc_main = defineComponent({
  name: "UserBehavior",
  components: { Panel: __unplugin_components_4 },
  setup() {
    const {
      routerChangeSelected,
      routerChangeSelectedCount,
      httpSelected,
      httpSelectedCount,
      operationSelected,
      operationSelectedCount
    } = storeToRefs(useUserBehaviorStore());
    return {
      timeFormatter,
      getKeys,
      getValueList,
      routerChangeSelected,
      routerChangeSelectedCount,
      httpSelected,
      httpSelectedCount,
      operationSelected,
      operationSelectedCount
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_b53aea4b_lang = "";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("ROUTER CHANGE");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("HTTP");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("OPERATION");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_table = __unplugin_components_1;
  const _component_n_collapse_item = __unplugin_components_2;
  const _component_n_collapse = __unplugin_components_3;
  const _component_Panel = __unplugin_components_4;
  const _component_n_space = __unplugin_components_7;
  return openBlock(), createBlock(_component_n_space, { vertical: "" }, {
    default: withCtx(() => [
      createVNode(_component_Panel, null, {
        header: withCtx(() => [
          _hoisted_1
        ]),
        "header-extra": withCtx(() => [
          createTextVNode(toDisplayString(_ctx.routerChangeSelectedCount), 1)
        ]),
        default: withCtx(() => [
          createVNode(_component_n_collapse, null, {
            default: withCtx(() => [
              createVNode(_component_n_collapse_item, null, {
                default: withCtx(() => [
                  createVNode(_component_n_collapse, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.routerChangeSelected, (info, idx) => {
                        return openBlock(), createBlock(_component_n_collapse_item, { key: idx }, {
                          "header-extra": withCtx(() => [
                            createTextVNode(toDisplayString(`${_ctx.timeFormatter(info.time)}`), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_n_table, { "single-line": "" }, {
                              default: withCtx(() => [
                                createBaseVNode("thead", null, [
                                  createBaseVNode("tr", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getKeys(info).slice(1), (item, i) => {
                                      return openBlock(), createElementBlock("th", { key: i }, toDisplayString(item), 1);
                                    }), 128))
                                  ])
                                ]),
                                createBaseVNode("tbody", null, [
                                  createBaseVNode("tr", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getValueList(info).slice(1), (item, i) => {
                                      return openBlock(), createElementBlock("td", { key: i }, toDisplayString(item), 1);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
      }),
      createVNode(_component_Panel, null, {
        header: withCtx(() => [
          _hoisted_2
        ]),
        "header-extra": withCtx(() => [
          createTextVNode(toDisplayString(_ctx.httpSelectedCount), 1)
        ]),
        default: withCtx(() => [
          createVNode(_component_n_collapse, null, {
            default: withCtx(() => [
              createVNode(_component_n_collapse_item, null, {
                default: withCtx(() => [
                  createVNode(_component_n_collapse, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.httpSelected, (info, idx) => {
                        return openBlock(), createBlock(_component_n_collapse_item, { key: idx }, {
                          "header-extra": withCtx(() => [
                            createTextVNode(toDisplayString(`${_ctx.timeFormatter(info.time)}`), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_n_table, { "single-line": "" }, {
                              default: withCtx(() => [
                                createBaseVNode("thead", null, [
                                  createBaseVNode("tr", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getKeys(info).slice(1), (item, i) => {
                                      return openBlock(), createElementBlock("th", { key: i }, toDisplayString(item), 1);
                                    }), 128))
                                  ])
                                ]),
                                createBaseVNode("tbody", null, [
                                  createBaseVNode("tr", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getValueList(info).slice(1), (item, i) => {
                                      return openBlock(), createElementBlock("td", { key: i }, toDisplayString(item), 1);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
      }),
      createVNode(_component_Panel, null, {
        header: withCtx(() => [
          _hoisted_3
        ]),
        "header-extra": withCtx(() => [
          createTextVNode(toDisplayString(_ctx.operationSelectedCount), 1)
        ]),
        default: withCtx(() => [
          createVNode(_component_n_collapse, null, {
            default: withCtx(() => [
              createVNode(_component_n_collapse_item, null, {
                default: withCtx(() => [
                  createVNode(_component_n_collapse, null, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.operationSelected, (info, idx) => {
                        return openBlock(), createBlock(_component_n_collapse_item, { key: idx }, {
                          "header-extra": withCtx(() => [
                            createTextVNode(toDisplayString(`${_ctx.timeFormatter(info.time)}`), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_n_table, { "single-line": "" }, {
                              default: withCtx(() => [
                                createBaseVNode("thead", null, [
                                  createBaseVNode("tr", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getKeys(info).slice(1), (item, i) => {
                                      return openBlock(), createElementBlock("th", { key: i }, toDisplayString(item), 1);
                                    }), 128))
                                  ])
                                ]),
                                createBaseVNode("tbody", null, [
                                  createBaseVNode("tr", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getValueList(info).slice(1), (item, i) => {
                                      return openBlock(), createElementBlock("td", { key: i }, toDisplayString(item), 1);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
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
      })
    ]),
    _: 1
  });
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b53aea4b"]]);
export {
  index as default
};
