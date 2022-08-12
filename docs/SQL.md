<!-- 写一个推送队列

优先级队列

收到 sdk 传来的数据就存入 sql 然后直接压入推送队列

因为并不需要精确到个人操作

因此不关心传过去的数据是否来自同一次访问 -->

# index

| id    |
| ----- |
| 12345 |
|       |
|       |

# device_info

| id  | uid   | time  | os_type   | os_version | browser_type | browser_version | language |
| --- | ----- | ----- | --------- | ---------- | ------------ | --------------- | -------- |
| 1   | 12345 | 12121 | "Windows" | ""         | "Chrome"     | "103.0.0.0"     | "zh-CN"  |
|     |       |       |           |            |              |                 |          |
|     |       |       |           |            |              |                 |          |

# page_info

| id  | uid   | time   | origin                  | url                             | title             | referer                  |
| --- | ----- | ------ | ----------------------- | ------------------------------- | ----------------- | ------------------------ |
| 1   | 12345 | 323223 | "http://localhost:3000" | "http://localhost:3000/#/page2" | "Vite + Vue + TS" | "http://localhost:3000/" |
|     |       |        |                         |                                 |                   |                          |
|     |       |        |                         |                                 |                   |                          |

# performance_timing

| id  | uid   | fp   | fcp  | cls   | lcp    | fid |
| --- | ----- | ---- | ---- | ----- | ------ | --- |
| 1   | 12345 | 99.6 | 98.2 | 0.604 | 99.599 | 3.1 |
|     |       |      |      |       |        |     |
|     |       |      |      |       |        |     |

# navigation_timing

| id  | uid   | redirect | dns | tcp | ssl | ttfb | transmit | dom_parse | defer_execute_duration | dom_content_loaded_callback | resource_load | dom_ready | l   |
| --- | ----- | -------- | --- | --- | --- | ---- | -------- | --------- | ---------------------- | --------------------------- | ------------- | --------- | --- |
| 1   | 12345 | 0        | 0   | 0   | 0   | 17.8 | 11.9     | 50.1      | 94.9                   | 0.2                         | 38.7          | 178.3     | 0   |
|     |       |          |     |     |     |      |          |           |                        |                             |               |           |     |
|     |       |          |     |     |     |      |          |           |                        |                             |               |           |     |

# resource_flow

| id  | uid   | name                                                                                                               | transfer_size | initiator_type | start_time | response_end | dns | initial_content | ssl  | request | ttfb | transmit | content_download |
| --- | ----- | ------------------------------------------------------------------------------------------------------------------ | ------------- | -------------- | ---------- | ------------ | --- | --------------- | ---- | ------- | ---- | -------- | ---------------- |
| 1   | 12345 | "http://localhost:3000/@vite/client"                                                                               | 300           | "script"       | 28.9       | 38.1         | 0   | 0               | 28.9 | 0.9     | 0.9  | 0.3      | 0.9              |
| 2   | 12345 | "https://img1.baidu.com/it/u=3217543765,3223180824&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=750"                    | 0             | "img"          | 29         | 35.5         | 0   | 0               | 0    | 2.5     | 2.5  | 2        | 2.5              |
| 3   | 12345 | "http://localhost:3000/node_modules/.pnpm/registry.npmmirror.com+vite@3.0.4/node_modules/vite/dist/client/env.mjs" | 300           | "other"        | 97.2       | 99.1         | 0   | 0               | 97.2 | 0.6     | 0.6  | 0.2      | 0.6              |

# behavior

> 这里 time 改成 timestamp

## router_change

| id  | uid   | page                            | time   | method    | href                            | hash      | pathname |
| --- | ----- | ------------------------------- | ------ | --------- | ------------------------------- | --------- | -------- |
| 1   | 12345 | "http://localhost:3000/#/page2" | 1611.5 | "Hash"    | "http://localhost:3000/#/page2" | "#/page2" | ""       |
| 2   | 12345 | "http://localhost:3000/page1"   | 1310.7 | "History" | "http://localhost:3000/page1"   | ""        | "/page1" |
|     |       |                                 |        |           |                                 |           |          |

## http

| id  | uid   | page | time | method | url                                  | headers | body | status | statusText | requestTime | responseTime | response |
| --- | ----- | ---- | ---- | ------ | ------------------------------------ | ------- | ---- | ------ | ---------- | ----------- | ------------ | -------- |
| 1   | 12345 | ""   | 76.3 | "GET"  | "http://localhost:8080/api/get-name" | (JSON)  | ""   | 0      | ""         | 72.2        | 76.4         | ""       |
|     |       |      |      |        |                                      |         |      |        |            |             |              |          |
|     |       |      |      |        |                                      |         |      |        |            |             |              |          |

## operation

| id  | uid   | page | time   | type      | target | count | dom_id | class_list                             | tag_name | inner_text                     |
| --- | ----- | ---- | ------ | --------- | ------ | ----- | ------ | -------------------------------------- | -------- | ------------------------------ |
| 1   | 12345 | ""   | 2118.8 | "click"   | "{}"   | 1     | "ipt"  | ""                                     | "input"  | ""                             |
| 2   | 12345 | ""   | 5905   | "keydown" | "{}"   | 13    | "ipt"  | ""                                     | "input"  | " [Shift] Hello [Shift] World" |
| 3   | 12345 | ""   | 84084  | "click"   | "{}"   | 7     | "btn"  | "hello, world, this, is, a, className" | "button" | " button click click"          |

# error_info

## js_err

| id  | uid   | type                 | error_uid                               | time   | message                           | error_type | stack_trace_uid |
| --- | ----- | -------------------- | --------------------------------------- | ------ | --------------------------------- | ---------- | --------------- |
| 1   | 12345 | "js"                 | "anMtVW5jYXVnaHQlMjBFcnJvci"            | 3127.7 | "Uncaught Error: this is a Error" | "Error"    | 6789            |
| 2   | 12345 | "unhandledrejection" | "W5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVG" | 3089   | ""                                | ""         | 2345            |
|     |       |                      |                                         |        |                                   |            |                 |

## stack_trace

| id  | uid  | filename                                            | function_name | line | col |
| --- | ---- | --------------------------------------------------- | ------------- | ---- | --- |
| 1   | 6789 | "http://localhost:3000/src/test.ts?t=1660205726302" | ""            | 3    | 12  |
| 2   | 2345 | "http://localhost:3000/src/test.ts?t=1660205726302" | ""            | 3    | 12  |
| 3   | 2345 | "<anonymous>"                                       | "new Promsie" | 0    | 0   |
| 4   | 2345 | "http://localhost:3000/src/test.ts?t=1660205726302" | "t"           | 2    | 3   |
| 5   | 2345 | "http://localhost:3000/src/main.ts?t=1660205726302" | ""            | 14   | 3   |

## resource_err

| id  | uid   | error_uid                            | time   | message | error_type | src                                   | outer_html                                                      | tag_name |
| --- | ----- | ------------------------------------ | ------ | ------- | ---------- | ------------------------------------- | --------------------------------------------------------------- | -------- |
| 1   | 12345 | "3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2F" | 6944.1 | ""      | "Unknown"  | "http://thisisaerrorimg.com/errorImg" | "<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">" | "IMG"    |
|     |       |                                      |        |         |            |                                       |                                                                 |          |
|     |       |                                      |        |         |            |                                       |                                                                 |          |

## http_error

| id  | uid   | error_uid                      | time   | message   | status | response | status_text |
| --- | ----- | ------------------------------ | ------ | --------- | ------ | -------- | ----------- |
| 1   | 12345 | "nMtVW5jYXVnaHQlMjBFcnJvciUzQ" | 3127.7 | "xxxxxxx" | 404    | ""       | "Not Found" |
|     |       |                                |        |           |        |          |             |
|     |       |                                |        |           |        |          |             |

## cors_error

| id  | uid   | error_uid                     | time   | message | tag_name |
| --- | ----- | ----------------------------- | ------ | ------- | -------- |
| 1   | 12345 | "tVW5jYXVnaHQlMjBFcnJvciUzQS" | 3127.7 | ""      | "script" |
|     |       |                               |        |         |          |
|     |       |                               |        |         |          |
