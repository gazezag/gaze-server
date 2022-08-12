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

 Date: 12/08/2022 23:00:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cors_error
-- ----------------------------
DROP TABLE IF EXISTS `cors_error`;
CREATE TABLE `cors_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of cors_error
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for device_info
-- ----------------------------
DROP TABLE IF EXISTS `device_info`;
CREATE TABLE `device_info` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `os_type` varchar(255) NOT NULL,
  `os_version` varchar(255) DEFAULT NULL,
  `browser_type` varchar(255) NOT NULL,
  `browser_version` varchar(255) DEFAULT NULL,
  `language` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of device_info
-- ----------------------------
BEGIN;
INSERT INTO `device_info` (`id`, `uid`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (1, 12345, 1660284872826, 'MacOS', '', 'Chrome', '', 'zh-CN');
INSERT INTO `device_info` (`id`, `uid`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (2, 23456, 1660285321652, 'Window', '', 'Edge', '', 'zh-CN');
INSERT INTO `device_info` (`id`, `uid`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (3, 323232, 1660285363183, 'Window', '', 'Edge', '', 'zh-CN');
COMMIT;

-- ----------------------------
-- Table structure for http
-- ----------------------------
DROP TABLE IF EXISTS `http`;
CREATE TABLE `http` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of http
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for http_error
-- ----------------------------
DROP TABLE IF EXISTS `http_error`;
CREATE TABLE `http_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `response` varchar(255) DEFAULT NULL,
  `status_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of http_error
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for index
-- ----------------------------
DROP TABLE IF EXISTS `index`;
CREATE TABLE `index` (
  `id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of index
-- ----------------------------
BEGIN;
INSERT INTO `index` (`id`) VALUES (12345);
INSERT INTO `index` (`id`) VALUES (45678);
COMMIT;

-- ----------------------------
-- Table structure for js_error
-- ----------------------------
DROP TABLE IF EXISTS `js_error`;
CREATE TABLE `js_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `error_uid` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `error_type` varchar(255) DEFAULT NULL,
  `stack_trace_uid` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of js_error
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for navigation_timing
-- ----------------------------
DROP TABLE IF EXISTS `navigation_timing`;
CREATE TABLE `navigation_timing` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of navigation_timing
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for operation
-- ----------------------------
DROP TABLE IF EXISTS `operation`;
CREATE TABLE `operation` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `page` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `target` varchar(255) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `dom_id` varchar(255) DEFAULT NULL,
  `class_list` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  `inner_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of operation
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for page_info
-- ----------------------------
DROP TABLE IF EXISTS `page_info`;
CREATE TABLE `page_info` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `referer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of page_info
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for performance_timing
-- ----------------------------
DROP TABLE IF EXISTS `performance_timing`;
CREATE TABLE `performance_timing` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `fp` float DEFAULT NULL,
  `fcp` float DEFAULT NULL,
  `cls` float DEFAULT NULL,
  `lcp` int DEFAULT NULL,
  `fid` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of performance_timing
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for resource_error
-- ----------------------------
DROP TABLE IF EXISTS `resource_error`;
CREATE TABLE `resource_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `error_type` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `outer_html` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of resource_error
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for resource_flow
-- ----------------------------
DROP TABLE IF EXISTS `resource_flow`;
CREATE TABLE `resource_flow` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `transfer_size` int DEFAULT NULL,
  `initiator_type` varchar(255) DEFAULT NULL,
  `start_time` float DEFAULT NULL,
  `response_end` float DEFAULT NULL,
  `dns` float DEFAULT NULL,
  `initial_content` float DEFAULT NULL,
  `ssl` float DEFAULT NULL,
  `request` float DEFAULT NULL,
  `ttfb` float DEFAULT NULL,
  `transmit` float DEFAULT NULL,
  `content_download` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of resource_flow
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for router_change
-- ----------------------------
DROP TABLE IF EXISTS `router_change`;
CREATE TABLE `router_change` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `time` bigint NOT NULL,
  `page` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `method` varchar(255) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL,
  `pathname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of router_change
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for stack_trace
-- ----------------------------
DROP TABLE IF EXISTS `stack_trace`;
CREATE TABLE `stack_trace` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `function_name` varchar(255) DEFAULT NULL,
  `line` int DEFAULT NULL,
  `col` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of stack_trace
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;