/*
 Navicat Premium Data Transfer

 Source Server         : gaze
 Source Server Type    : MySQL
 Source Server Version : 80028 (8.0.28)
 Source Host           : localhost:3306
 Source Schema         : gaze

 Target Server Type    : MySQL
 Target Server Version : 80028 (8.0.28)
 File Encoding         : 65001

 Date: 17/08/2022 22:05:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cors_error
-- ----------------------------
DROP TABLE IF EXISTS `cors_error`;
CREATE TABLE `cors_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of cors_error
-- ----------------------------
BEGIN;
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (1, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
COMMIT;

-- ----------------------------
-- Table structure for device_info
-- ----------------------------
DROP TABLE IF EXISTS `device_info`;
CREATE TABLE `device_info` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `os_type` varchar(255) NOT NULL,
  `os_version` varchar(255) DEFAULT NULL,
  `browser_type` varchar(255) NOT NULL,
  `browser_version` varchar(255) DEFAULT NULL,
  `language` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=196 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of device_info
-- ----------------------------
BEGIN;
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (1, 1660284872826, 'MacOS', '', 'Chrome', '', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (2, 1660285321652, 'Window', '', 'Edge', '', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (66, 1660541292753, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (67, 1660541339665, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (68, 1660541341757, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
COMMIT;

-- ----------------------------
-- Table structure for http
-- ----------------------------
DROP TABLE IF EXISTS `http`;
CREATE TABLE `http` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `group_id` bigint DEFAULT NULL,
  `page` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `method` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `headers` varchar(255) DEFAULT NULL,
  `body` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `status_text` varchar(255) DEFAULT NULL,
  `request_time` float DEFAULT NULL,
  `response_time` float DEFAULT NULL,
  `response` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of http
-- ----------------------------
BEGIN;
INSERT INTO `http` (`id`, `time`, `group_id`, `page`, `method`, `url`, `headers`, `body`, `status`, `status_text`, `request_time`, `response_time`, `response`) VALUES (1, 1660576096842, 1660576096842, '', 'GET', 'http://localhost:8080/api/get-name', '{\"Accept\":\"application/json, text/plain, */*\",\"Cache\":\"no-cache\"}', '', 0, '', 72.2, 76.4, '');
INSERT INTO `http` (`id`, `time`, `group_id`, `page`, `method`, `url`, `headers`, `body`, `status`, `status_text`, `request_time`, `response_time`, `response`) VALUES (2, 1660576096842, 1660576096842, '', 'GET', 'http://localhost:8080/api/fetch-get', '{}', '', 0, '', 72.6, 0, '');
COMMIT;

-- ----------------------------
-- Table structure for http_error
-- ----------------------------
DROP TABLE IF EXISTS `http_error`;
CREATE TABLE `http_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `status_text` varchar(255) DEFAULT NULL,
  `response` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of http_error
-- ----------------------------
BEGIN;
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (1, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
COMMIT;

-- ----------------------------
-- Table structure for js_error
-- ----------------------------
DROP TABLE IF EXISTS `js_error`;
CREATE TABLE `js_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `error_type` varchar(255) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `stack_trace_uid` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of js_error
-- ----------------------------
BEGIN;
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (1, 1660618030394, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660618030394);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (2, 1660618030394, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660618030394);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (3, 1660618211282, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660618211282);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (4, 1660618211281, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660618211281);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (5, 1660618224393, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660618224393);
COMMIT;

-- ----------------------------
-- Table structure for navigation_timing
-- ----------------------------
DROP TABLE IF EXISTS `navigation_timing`;
CREATE TABLE `navigation_timing` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `redirect` float DEFAULT NULL,
  `dns` float DEFAULT NULL,
  `tcp` float DEFAULT NULL,
  `ssl` float DEFAULT NULL,
  `ttfb` float DEFAULT NULL,
  `transmit` float DEFAULT NULL,
  `dom_parse` float DEFAULT NULL,
  `defer_execute_duration` float DEFAULT NULL,
  `dom_content_loaded_callback` float DEFAULT NULL,
  `resource_load` float DEFAULT NULL,
  `dom_ready` float DEFAULT NULL,
  `l` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of navigation_timing
-- ----------------------------
BEGIN;
INSERT INTO `navigation_timing` (`id`, `time`, `redirect`, `dns`, `tcp`, `ssl`, `ttfb`, `transmit`, `dom_parse`, `defer_execute_duration`, `dom_content_loaded_callback`, `resource_load`, `dom_ready`, `l`) VALUES (1, 1660555694025, 0, 0, 0, 0, 2, 3.2, 77.3, 26.6, 0.1, 12.8, 117.2, 130);
COMMIT;

-- ----------------------------
-- Table structure for operation
-- ----------------------------
DROP TABLE IF EXISTS `operation`;
CREATE TABLE `operation` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `group_id` bigint DEFAULT NULL,
  `page` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `target` varchar(255) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `dom_id` varchar(255) DEFAULT NULL,
  `class_list` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  `inner_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of operation
-- ----------------------------
BEGIN;
INSERT INTO `operation` (`id`, `time`, `group_id`, `page`, `type`, `target`, `count`, `dom_id`, `class_list`, `tag_name`, `inner_text`) VALUES (1, 1660576096848, 1660576096848, '', 'click', '[object Object]', 1, 'ipt', '[]', 'input', '');
INSERT INTO `operation` (`id`, `time`, `group_id`, `page`, `type`, `target`, `count`, `dom_id`, `class_list`, `tag_name`, `inner_text`) VALUES (2, 1660576096848, 1660576096848, '', 'keydown', '[object Object]', 13, 'ipt', '[]', 'input', ' [Shift] Hello  [Shift] World');
INSERT INTO `operation` (`id`, `time`, `group_id`, `page`, `type`, `target`, `count`, `dom_id`, `class_list`, `tag_name`, `inner_text`) VALUES (3, 1660576096848, 1660576096848, '', 'click', '[object Object]', 7, 'btn', '[\"hello\",\"world\",\"this\",\"is\",\"a\",\"className\"]', 'button', ' button click click');
COMMIT;

-- ----------------------------
-- Table structure for page_info
-- ----------------------------
DROP TABLE IF EXISTS `page_info`;
CREATE TABLE `page_info` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `referer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of page_info
-- ----------------------------
BEGIN;
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (1, 1660529165756, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (2, 1660529825519, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (3, 1660529903427, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (4, 1660529903930, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
COMMIT;

-- ----------------------------
-- Table structure for performance_timing
-- ----------------------------
DROP TABLE IF EXISTS `performance_timing`;
CREATE TABLE `performance_timing` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `value` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of performance_timing
-- ----------------------------
BEGIN;
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (1, 1660541165371, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (2, 1660541165371, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (3, 1660541228172, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (4, 1660541228172, 'first-paint', 98.4);
COMMIT;

-- ----------------------------
-- Table structure for resource_error
-- ----------------------------
DROP TABLE IF EXISTS `resource_error`;
CREATE TABLE `resource_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `error_type` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `outer_html` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of resource_error
-- ----------------------------
BEGIN;
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (1, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (2, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (3, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
COMMIT;

-- ----------------------------
-- Table structure for resource_flow
-- ----------------------------
DROP TABLE IF EXISTS `resource_flow`;
CREATE TABLE `resource_flow` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `group_id` bigint DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `transfer_size` int DEFAULT NULL,
  `initiator_type` varchar(255) DEFAULT NULL,
  `start_time` float DEFAULT NULL,
  `response_end` float DEFAULT NULL,
  `dns` float DEFAULT NULL,
  `initial_connect` float DEFAULT NULL,
  `ssl` float DEFAULT NULL,
  `request` float DEFAULT NULL,
  `ttfb` float DEFAULT NULL,
  `transmit` float DEFAULT NULL,
  `content_download` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of resource_flow
-- ----------------------------
BEGIN;
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (1, 1660565070727, 1660565070727, 'http://localhost:3000/@vite/client', 300, 'script', 28.9, 38.1, 0, 0, 28.9, 0.9, 0.9, 0.3, 0.9);
COMMIT;

-- ----------------------------
-- Table structure for router_change
-- ----------------------------
DROP TABLE IF EXISTS `router_change`;
CREATE TABLE `router_change` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `group_id` bigint DEFAULT NULL,
  `page` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `method` varchar(255) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL,
  `pathname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of router_change
-- ----------------------------
BEGIN;
INSERT INTO `router_change` (`id`, `time`, `group_id`, `page`, `method`, `href`, `hash`, `pathname`) VALUES (1, 1660576096795, 1660576096795, 'http://localhost:3000/#/page1', 'Hash', 'http://localhost:3000/#/page1', '#/page1', '');
INSERT INTO `router_change` (`id`, `time`, `group_id`, `page`, `method`, `href`, `hash`, `pathname`) VALUES (2, 1660576096795, 1660576096795, 'http://localhost:3000/#/page2', 'Hash', 'http://localhost:3000/#/page2', '#/page2', '');
INSERT INTO `router_change` (`id`, `time`, `group_id`, `page`, `method`, `href`, `hash`, `pathname`) VALUES (3, 1660576096795, 1660576096795, 'http://localhost:3000/page1', 'History', 'http://localhost:3000/page1', '', '/page1');
INSERT INTO `router_change` (`id`, `time`, `group_id`, `page`, `method`, `href`, `hash`, `pathname`) VALUES (4, 1660576096795, 1660576096795, 'http://localhost:3000/page2', 'History', 'http://localhost:3000/page2', '', '/page2');
COMMIT;

-- ----------------------------
-- Table structure for stack_trace
-- ----------------------------
DROP TABLE IF EXISTS `stack_trace`;
CREATE TABLE `stack_trace` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `group_id` bigint NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `function_name` varchar(255) DEFAULT NULL,
  `line` int DEFAULT NULL,
  `col` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of stack_trace
-- ----------------------------
BEGIN;
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (1, 1660618030394, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (2, 1660618030394, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (3, 1660618030394, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
COMMIT;

-- ----------------------------
-- Table structure for visit_info
-- ----------------------------
DROP TABLE IF EXISTS `visit_info`;
CREATE TABLE `visit_info` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of visit_info
-- ----------------------------
BEGIN;
INSERT INTO `visit_info` (`id`, `time`, `origin`, `type`) VALUES (1, 1660629054693, 'http://baidu.com', 'normal');
INSERT INTO `visit_info` (`id`, `time`, `origin`, `type`) VALUES (2, 1660629078735, 'http://baidu.com', 'normal');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
