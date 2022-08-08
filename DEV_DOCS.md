# 1) 设备信息

> 气死, 暂时没想到什么办法获取操作系统版本

```json
{
  "type": "device-info",
  "value": {
    "origin": "http://localhost:3000",
    "url": "http://localhost:3000/#/page2",
    "title": "Vite + Vue + TS",
    "referer": "http://localhost:3000/",
    "os": {
      "type": "MacOs",
      "version": ""
    },
    "browser": {
      "type": "Chrome",
      "version": "103.0.0.0"
    },
    "language": "zh-CN"
  }
}
```

# 2) 页面性能

## FP

First Paint, 页面首次渲染

```json
{
  "type": "first-paint",
  "value": 99.6
}
```

## FCP

First Contentful Paint, 页面首次有内容的渲染

```json
{
  "type": "first-contentful-paint",
  "value": 98.2
}
```

## CLS

测量在页面整个生命周期中发生的每个元素布局变化的分数总和

> 这个我没搞懂是什么东西

```json
{
  "type": "cumulative-layout-shift",
  "value": 0.604
}
```

## LCP

Largest Contentful Paint, 最大内容渲染，表示可视区“内容”最大的可见元素开始出现在屏幕上的时间点

```json
{
  "type": "largest-contentful-paint",
  "value": 99.599
}
```

## FID

Fist Input Delay, 首次输入延迟，用户首次和页面交互（单击链接、点击按钮等）到页面响应交互的时间

> FID 只在用户初次进行操作时触发, 如 click keydown 等
>
> 这里的 value.target 暂时有点小问题无法正常获取

```json
{
  "type": "first-input-delay",
  "value": {
    "eventName": "keydown",
    "target": {},
    "startTime": 1731.7,
    "delay": 3.1,
    "eventHandleTime": 0.8
  }
}
```

## NavigationTiming

描述页面导航的各阶段耗时

> 其中部分字段我没搞明白是啥.....

![img](https://img2018.cnblogs.com/blog/561794/201906/561794-20190605220936223-238526639.png)

```json
{
  "type": "navigation-timing",
  "value": {
    "redirect": 0,
    "DNS": 0,
    "TCP": 0,
    "SSL": 0,
    "TTFB": 17.8,
    "transmit": 11.9,
    "domParse": 50.1,
    "deferExecuteDuration": 94.9,
    "domContentLoadedCallback": 0.2,
    "resourceLoad": 38.7,
    "domReady": 178.3,
    "L": 0
  }
}
```

> 这里可能因为访问的基本都是本地资源, 很多字段都是 0
>
> 清了浏览器缓存也是 0

## ResourceFlow

描述资源获取的各阶段耗时

```json
{
  "type": "resource-flow",
  "value": [
    {
      "name": "http://localhost:3000/@vite/client",
      "transferSize": 300,
      "initiatorType": "script",
      "startTime": 28.9,
      "responseEnd": 38.1,
      "DNS": 0,
      "initialConnect": 0,
      "SSL": 28.9,
      "request": 0.9,
      "TTFB": 0.9,
      "transmit": 0.3,
      "contentDownload": 0.9
    },
    {
      "name": "https://img1.baidu.com/it/u=3217543765,3223180824&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=750",
      "transferSize": 0,
      "initiatorType": "img",
      "startTime": 29,
      "responseEnd": 35.5,
      "DNS": 0,
      "initialConnect": 0,
      "SSL": 0,
      "request": 2.5,
      "TTFB": 2.5,
      "transmit": 2,
      "contentDownload": 2.5
    },
    {
      "name": "https://img0.baidu.com/it/u=2518378277,1696634197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=773",
      "transferSize": 0,
      "initiatorType": "img",
      "startTime": 29.2,
      "responseEnd": 97.7,
      "DNS": 0,
      "initialConnect": 0,
      "SSL": 0,
      "request": 0.3,
      "TTFB": 0.3,
      "transmit": 0.4,
      "contentDownload": 0.3
    },
    {
      "name": "http://localhost:3000/src/main.ts?t=1659594691863",
      "transferSize": 1148,
      "initiatorType": "script",
      "startTime": 29.3,
      "responseEnd": 100.9,
      "DNS": 0,
      "initialConnect": 0,
      "SSL": 29.3,
      "request": 4.5,
      "TTFB": 4.5,
      "transmit": 0.3,
      "contentDownload": 4.5
    },
    {
      "name": "http://localhost:3000/node_modules/.pnpm/registry.npmmirror.com+vite@3.0.4/node_modules/vite/dist/client/env.mjs",
      "transferSize": 300,
      "initiatorType": "other",
      "startTime": 97.2,
      "responseEnd": 99.1,
      "DNS": 0,
      "initialConnect": 0,
      "SSL": 97.2,
      "request": 0.6,
      "TTFB": 0.6,
      "transmit": 0.2,
      "contentDownload": 0.6
    }
  ]
}
```

# 3) 用户操作

> 其中 http 数据不够详细, 需要进一步测试

```json
{
  "router-change": [
    {
      "type": "router-change",
      "page": "http://localhost:3000/#/page2",
      "time": 1611.5,
      "detail": {
        "method": "Hash",
        "href": "http://localhost:3000/#/page2",
        "hash": "#/page2"
      }
    },
    {
      "type": "router-change",
      "page": "http://localhost:3000/#/page1",
      "time": 2331.6999999284744,
      "detail": {
        "method": "Hash",
        "href": "http://localhost:3000/#/page1",
        "hash": "#/page1"
      }
    },
    {
      "type": "router-change",
      "page": "http://localhost:3000/page1",
      "time": 1310.6999999284744,
      "detail": {
        "method": "History",
        "href": "http://localhost:3000/page1",
        "pathname": "/page1"
      }
    },
    {
      "type": "router-change",
      "page": "http://localhost:3000/page2",
      "time": 1937.7999999523163,
      "detail": {
        "method": "History",
        "href": "http://localhost:3000/page2",
        "pathname": "/page2"
      }
    }
  ],
  "http": [
    {
      "type": "request",
      "page": "",
      "time": 76.39999997615814,
      "detail": {
        "method": "GET",
        "url": "http://localhost:8080/api/get-name",
        "headers": {
          "Accept": "application/json, text/plain, */*"
        },
        "body": "",
        "status": 0,
        "statusText": "",
        "requestTime": 72.19999992847443,
        "responseTime": 76.39999997615814,
        "response": ""
      }
    },
    {
      "type": "request",
      "page": "",
      "time": 78.39999997615814,
      "detail": {
        "method": "GET",
        "url": "http://localhost:8080/api/fetch-get",
        "headers": {},
        "body": "",
        "status": 0,
        "statusText": "",
        "requestTime": 72.60000002384186,
        "responseTime": 0,
        "response": ""
      }
    }
  ],
  "operation": [
    {
      "type": "operation",
      "page": "",
      "time": 2118.8000000715256,
      "detail": {
        "type": "click",
        "target": {},
        "count": 1,
        "id": "ipt",
        "classList": [],
        "tagName": "input",
        "innerText": ""
      }
    },
    {
      "type": "operation",
      "page": "",
      "time": 5905.800000071526,
      "detail": {
        "type": "keydown",
        "target": {},
        "count": 13,
        "id": "ipt",
        "classList": [],
        "tagName": "input",
        "innerText": " [Shift] Hello  [Shift] World"
      }
    },
    {
      "type": "operation",
      "page": "",
      "time": 84084,
      "detail": {
        "type": "click",
        "target": {},
        "count": 7,
        "id": "btn",
        "classList": ["hello", "world", "this", "is", "a", "className"],
        "tagName": "button",
        "innerText": " button click click"
      }
    }
  ]
}
```

# 4) 错误信息

> 该 parts 暂未定版, 因此可能会有数据改动
>
> 以下是类型接口

```typescript
export interface ExceptionMetrics {
  mechanism: {
    type: 'js' | 'resource' | 'unhandledrejection' | 'http' | 'cors' | 'vue';
  };
  value?: string;
  type: string;
  stackTrace?: {
    frames: Array<{
      filename: string;
      functionName: string;
      lineno: number;
      colno: number;
    }>;
  };
  pageInformation?: Object;
  breadcrumbs?: Array<{
    name:
      | 'page-information'
      | 'origin-information'
      | 'router-change-record'
      | 'click-behavior-record'
      | 'custom-define-record'
      | 'http-record';
    page: string;
    timestamp: number | string;
    value: Object;
  }>;
  errorUid: string;
  meta?: {
    file: number;
    // col 错误列号
    col: number;
    // row 错误行号
    row: number;
  };
}
```

# Git 多人协作的基本使用

git 主要用来进行项目的版本管理以及多人协作开发

以下是一些常用命令

```sh
# 从远程仓库拉取最新的代码到本地
git pull

# 查看当前工作区中的git状态
git status

# 查看提交历史
git log
git log --pretty=oneline # 简洁展示

# 查看修改历史
git reflog

# 删除分支
git branch -d xxxx # xxxx为分支名
```

以下是主要流程(以下以开发 uploader 模块为例)

1. fork 项目到自己的 github: [传送门](https://github.com/tim101010101/gaze-anchor)
2. clone 到本地
   ```sh
   git clone 'xxxxx'
   ```
3. 创建新分支

   ```sh
   # uploader为分支名, 实际开发过程中为个人负责的模块名
   git checkout -b uploader
   ```

4. 编写代码
5. 提交代码到暂存区

   ```sh
   # 此处 . 意为将所有的修改提交到暂存区, 也可通过输入路径名指定范围
   git add .
   ```

6. 将暂存区的代码提交到本地仓库

   ```sh
   # 此处 "xxxx" 为提交信息, 用来说明自己本次提交完成了哪些内容
   # 注意要加双引号
   git commit -m "xxxx"
   ```

7. 将新分支合并到主分支

   1. 切换到主分支

      ```sh
      git checkout main
      ```

   2. 合并

      ```sh
      git merge uploader
      ```

      注意此处会需要解决分支冲突, 一定要仔细查看

8. 切换到本地分支

   ```sh
   git checkout uploader
   ```

9. 将分支提交到远程仓库

   ```sh
   # 第一次提交需要加上 -u 参数
   # 之后都不用
   git push -u origin uploader
   git push origin uploader
   ```

10. 等待合并 pr

    完成以上步骤之后, 项目持有者的 github 页面会出现 pr 提示, 可以进行合并, 合并之后就算是正式完成了一次远程开发
