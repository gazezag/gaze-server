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

 Date: 25/08/2022 18:23:42
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
  `message` varchar(2047) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=236 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for http_error
-- ----------------------------
DROP TABLE IF EXISTS `http_error`;
CREATE TABLE `http_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message` varchar(2047) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` int DEFAULT NULL,
  `status_text` varchar(255) DEFAULT NULL,
  `response` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for js_error
-- ----------------------------
DROP TABLE IF EXISTS `js_error`;
CREATE TABLE `js_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) DEFAULT NULL,
  `message` varchar(2048) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `error_type` varchar(255) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `stack_trace_uid` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=368 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for resource_error
-- ----------------------------
DROP TABLE IF EXISTS `resource_error`;
CREATE TABLE `resource_error` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `error_uid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `message` varchar(2047) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `error_type` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `outer_html` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for resource_flow
-- ----------------------------
DROP TABLE IF EXISTS `resource_flow`;
CREATE TABLE `resource_flow` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `time` bigint NOT NULL,
  `group_id` bigint DEFAULT NULL,
  `name` varchar(2048) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=764 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=277 DEFAULT CHARSET=utf8mb3;

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
) ENGINE=InnoDB AUTO_INCREMENT=666 DEFAULT CHARSET=utf8mb3;

SET FOREIGN_KEY_CHECKS = 1;
