import { i as init } from "./index-e3c49adb.js";
import { d as defineComponent, b as onMounted, _ as _export_sfc, E as createElementBlock, B as openBlock } from "./main-3c05bb2c.js";
var startTime_data = [40, 40, 35, 39, 40, 46, 43, 45, 39, 45];
var responseEnd_data = [20, 38, 35, 40, 39, 14, 27, 45, 28, 28];
var DNS_data = [40, 40, 35, 11, 39, 22, 35, 9, 28, 56];
var initialConnect_data = [38, 40, 33, 39, 37, 26, 23, 56, 28, 28];
var SSL_data = [38, 0, 35, 9, 3, 45, 43, 43, 27, 28];
var request_data = [0, 0, 3, 37, 39, 34, 45, 43, 28, 27];
var TTFB_data = [0, 0, 33, 0, 0, 45, 0, 0, 28, 27];
var transmit_data = [0, 0, 0, 0, 0, 0, 0, 0, 27, 0];
var contentDownload_data = [0, 0, 0, 0, 0, 0, 0, 0, 27, 0];
var yAxis_name = [
  "resource1",
  "resource2",
  "resource3",
  "resource4",
  "resource5",
  "resource6",
  "resource7",
  "resource8",
  "resource9",
  "resource10"
];
const _sfc_main = defineComponent({
  name: "ResourceFlow",
  setup() {
    const getEchart = () => {
      const charts = init(document.getElementById("chart"));
      charts.setOption({
        title: {
          text: "ResourceFlow\u8D44\u6E90\u5404\u9636\u6BB5\u83B7\u53D6\u7684\u8017\u65F6(ms)",
          padding: 20,
          textStyle: {
            fontSize: 17,
            fontWeight: "bolder",
            color: "#333"
          },
          subtextStyle: {
            fontSize: 13,
            fontWeight: "bolder"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["\u76F4\u63A5\u8BBF\u95EE", "\u90AE\u4EF6\u8425\u9500", "\u8054\u76DF\u5E7F\u544A", "\u89C6\u9891\u5E7F\u544A", "\u641C\u7D22\u5F15\u64CE"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          data: yAxis_name
        },
        series: [
          {
            name: "startTime",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: startTime_data
          },
          {
            name: "responseEnd",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: responseEnd_data
          },
          {
            name: "DNS",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: DNS_data
          },
          {
            name: "initialConnect",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: initialConnect_data
          },
          {
            name: "SSL",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: SSL_data
          },
          {
            name: "request",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: request_data
          },
          {
            name: "TTFB",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: TTFB_data
          },
          {
            name: "transmit",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: transmit_data
          },
          {
            name: "contentDownload",
            type: "bar",
            stack: "\u603B\u91CF",
            label: {
              normal: {
                show: false,
                position: "insideRight"
              }
            },
            data: contentDownload_data
          }
        ]
      });
    };
    onMounted(() => {
      getEchart();
    });
  }
});
const _hoisted_1 = {
  id: "chart",
  style: { width: "1000px", height: "550px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1);
}
const resourceFlow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  resourceFlow as default
};
