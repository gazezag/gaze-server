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

 Date: 16/08/2022 13:11:40
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
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (2, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (3, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (4, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (5, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (6, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (7, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (8, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (9, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (10, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (11, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (12, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (13, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (14, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (15, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (16, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (17, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (18, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (19, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (20, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
INSERT INTO `cors_error` (`id`, `time`, `error_uid`, `message`, `tag_name`) VALUES (21, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', '', '');
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
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of device_info
-- ----------------------------
BEGIN;
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (1, 1660284872826, 'MacOS', '', 'Chrome', '', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (2, 1660285321652, 'Window', '', 'Edge', '', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (66, 1660541292753, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (67, 1660541339665, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (68, 1660541341757, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (69, 1660541345640, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (70, 1660541345839, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (71, 1660541346020, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (72, 1660541346183, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (73, 1660541346344, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
INSERT INTO `device_info` (`id`, `time`, `os_type`, `os_version`, `browser_type`, `browser_version`, `language`) VALUES (74, 1660553554745, 'xxxxxxxxMacOs', '', 'Chrome', '103.0.0.0', 'zh-CN');
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
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (2, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (3, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (4, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (5, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (6, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (7, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (8, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (9, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (10, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (11, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (12, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (13, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (14, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (15, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (16, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (17, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (18, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (19, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (20, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
INSERT INTO `http_error` (`id`, `time`, `error_uid`, `message`, `status`, `status_text`, `response`) VALUES (21, 3128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'xxxxxxx', 404, 'Not Found', '');
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
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (6, 1660618224393, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660618224393);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (7, 1660621681446, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660621681446);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (8, 1660621681447, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660621681447);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (9, 1660621807986, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660621807986);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (10, 1660621807986, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660621807986);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (11, 1660621852243, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660621852243);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (12, 1660621852243, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660621852243);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (13, 1660621869075, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660621869075);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (14, 1660621869075, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660621869075);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (15, 1660621910712, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660621910712);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (16, 1660621910712, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660621910712);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (17, 1660624698442, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660624698442);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (18, 1660624698442, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660624698442);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (19, 1660624879912, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660624879912);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (20, 1660624879913, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660624879913);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (21, 1660624963665, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660624963665);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (22, 1660624963665, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660624963665);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (23, 1660625034920, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625034920);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (24, 1660625034921, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625034921);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (25, 1660625048711, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625048711);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (26, 1660625048711, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625048711);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (27, 1660625147128, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625147128);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (28, 1660625147129, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625147129);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (29, 1660625205124, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625205124);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (30, 1660625205124, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625205124);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (31, 1660625242168, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625242168);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (32, 1660625242169, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625242169);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (33, 1660625249758, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625249758);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (34, 1660625249758, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625249758);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (35, 1660625361863, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625361863);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (36, 1660625361863, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625361863);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (37, 1660625711738, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625711738);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (38, 1660625711739, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625711739);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (39, 1660625734814, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660625734814);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (40, 1660625734815, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660625734815);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (41, 1660626354994, 'anMtVW5jYXVnaHQlMjBFcnJvciUzQSUyMHRoaXMlMjBpcyUyMGElMjBFcnJvci1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCUyRnNyYyUyRnRlc3QudHM=', 'Uncaught Error: this is a Error', 'Error', '', 1660626354994);
INSERT INTO `js_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `reason`, `stack_trace_uid`) VALUES (42, 1660626354994, 'dW5oYW5kbGVkcmVqZWN0aW9uLUVycm9yJTNBJTIwVGhpcyUyMGlzJTIwYSUyMHByb21pc2UlMjByZWplY3Rpb24tRXJyb3I=', '[object Object]', '[object Object]', '', 1660626354994);
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
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of page_info
-- ----------------------------
BEGIN;
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (1, 1660529165756, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (2, 1660529825519, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (3, 1660529903427, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (4, 1660529903930, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (5, 1660529904123, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (6, 1660529904296, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (7, 1660529904740, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (8, 1660529904913, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (9, 1660529905094, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (10, 1660529937135, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (11, 1660529937967, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (12, 1660529938145, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (13, 1660529938323, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (14, 1660529938827, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (15, 1660529939001, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (16, 1660529939203, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (17, 1660529939587, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (18, 1660529939812, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (19, 1660529939956, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (20, 1660529940173, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (21, 1660529940339, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (22, 1660529940554, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (23, 1660529940722, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (24, 1660529940901, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (25, 1660530027893, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (26, 1660530028812, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (27, 1660530048971, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (28, 1660530049303, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (29, 1660530049901, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (30, 1660530050126, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (31, 1660530050335, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (32, 1660530050477, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (33, 1660530059494, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (34, 1660530059932, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (35, 1660530060143, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (36, 1660530060322, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (37, 1660530233082, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (38, 1660530289785, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (39, 1660530339086, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (40, 1660530677130, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (41, 1660530849401, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (42, 1660530850001, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (43, 1660530850197, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (44, 1660530850350, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (45, 1660531507798, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (46, 1660531523602, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (47, 1660531623609, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (48, 1660531643208, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (49, 1660531838421, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (50, 1660531874746, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (51, 1660531920312, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (52, 1660532005641, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (53, 1660532069701, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (54, 1660532240540, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (55, 1660532277818, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (56, 1660532292608, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (57, 1660532431866, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (58, 1660532453292, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (59, 1660534058516, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (60, 1660534132111, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (61, 1660534194434, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (62, 1660534219522, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (63, 1660541292753, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (64, 1660541339665, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (65, 1660541341757, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (66, 1660541345640, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (67, 1660541345839, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (68, 1660541346020, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (69, 1660541346183, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (70, 1660541346344, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
INSERT INTO `page_info` (`id`, `time`, `origin`, `url`, `title`, `referer`) VALUES (71, 1660553554745, 'http://localhost:3000', 'http://localhost:3000/#/page2', 'Vite + Vue + TS', 'http://localhost:3000/');
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
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (5, 1660541230485, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (6, 1660541230485, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (7, 1660541236740, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (8, 1660541236740, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (9, 1660541237724, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (10, 1660541237724, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (11, 1660541238702, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (12, 1660541238702, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (13, 1660541239705, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (14, 1660541239705, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (15, 1660541365415, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (16, 1660541365414, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (17, 1660541375884, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (18, 1660541375884, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (19, 1660541427979, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (20, 1660541427979, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (21, 1660541441619, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (22, 1660541441619, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (23, 1660541447552, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (24, 1660541447552, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (25, 1660541447923, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (26, 1660541447923, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (27, 1660541456200, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (28, 1660541456200, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (29, 1660541462977, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (30, 1660541462977, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (31, 1660541489874, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (32, 1660541489874, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (33, 1660541533108, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (34, 1660541533108, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (35, 1660541620284, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (36, 1660541620284, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (37, 1660541705526, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (38, 1660541705526, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (39, 1660541714676, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (40, 1660541714677, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (41, 1660541717612, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (42, 1660541717612, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (43, 1660541717812, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (44, 1660541717811, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (45, 1660541717988, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (46, 1660541717987, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (47, 1660541718145, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (48, 1660541718145, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (49, 1660541736242, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (50, 1660541736242, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (51, 1660541772351, 'first-paint', 98.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (52, 1660541772351, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (53, 1660553554748, 'first-input-delay', 4.4);
INSERT INTO `performance_timing` (`id`, `time`, `type`, `value`) VALUES (54, 1660553554748, 'first-paint', 98.4);
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
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (4, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (5, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (6, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (7, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (8, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (9, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (10, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (11, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (12, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (13, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (14, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (15, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (16, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (17, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (18, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (19, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (20, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
INSERT INTO `resource_error` (`id`, `time`, `error_uid`, `message`, `error_type`, `src`, `outer_html`, `tag_name`) VALUES (21, 6944, 'cmVzb3VyY2UtaHR0cCUzQSUyRiUyRnRoaXNpc2FlcnJvcmltZy5jb20lMkZlcnJvckltZy1JTUc=', '', 'Unknwon', 'http://thisisaerrorimg.com/errorImg', '<img src=\"http://thisisaerrorimg.com/errorImg\" alt=\"img\">', 'IMG');
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
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (2, 1660565070727, 1660565070727, 'https://img0.baidu.com/it/u=2518378277,1696634197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=773', 0, 'img', 29.2, 97.7, 0, 0, 0, 0.3, 0.3, 0.4, 0.3);
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (3, 1660565070727, 1660565070727, 'https://img1.baidu.com/it/u=3217543765,3223180824&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=750', 0, 'img', 29, 35.5, 0, 0, 0, 2.5, 2.5, 2, 2.5);
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (4, 1660565070727, 1660565070727, 'http://localhost:3000/src/main.ts?t=1659594691863', 1148, 'script', 29.3, 100.9, 0, 0, 29.3, 4.5, 4.5, 0.3, 4.5);
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (5, 1660565070727, 1660565070727, 'http://localhost:3000/node_modules/.pnpm/registry.npmmirror.com+vite@3.0.4/node_modules/vite/dist/client/env.mjs', 300, 'other', 97.2, 99.1, 0, 0, 97.2, 0.6, 0.6, 0.2, 0.6);
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (6, 1660565086540, 1660565086540, 'https://img0.baidu.com/it/u=2518378277,1696634197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=773', 0, 'img', 29.2, 97.7, 0, 0, 0, 0.3, 0.3, 0.4, 0.3);
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (7, 1660565086540, 1660565086540, 'http://localhost:3000/@vite/client', 300, 'script', 28.9, 38.1, 0, 0, 28.9, 0.9, 0.9, 0.3, 0.9);
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (8, 1660565086540, 1660565086540, 'https://img1.baidu.com/it/u=3217543765,3223180824&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=750', 0, 'img', 29, 35.5, 0, 0, 0, 2.5, 2.5, 2, 2.5);
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (9, 1660565086540, 1660565086540, 'http://localhost:3000/src/main.ts?t=1659594691863', 1148, 'script', 29.3, 100.9, 0, 0, 29.3, 4.5, 4.5, 0.3, 4.5);
INSERT INTO `resource_flow` (`id`, `time`, `group_id`, `name`, `transfer_size`, `initiator_type`, `start_time`, `response_end`, `dns`, `initial_connect`, `ssl`, `request`, `ttfb`, `transmit`, `content_download`) VALUES (10, 1660565086540, 1660565086540, 'http://localhost:3000/node_modules/.pnpm/registry.npmmirror.com+vite@3.0.4/node_modules/vite/dist/client/env.mjs', 300, 'other', 97.2, 99.1, 0, 0, 97.2, 0.6, 0.6, 0.2, 0.6);
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
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (4, 1660618030394, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (5, 1660618030394, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (6, 1660618211282, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (7, 1660618211282, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (8, 1660618211282, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (9, 1660618211282, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (10, 1660618211281, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (11, 1660618211281, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (12, 1660618224393, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (13, 1660618224393, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (14, 1660618224393, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (15, 1660618224393, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (16, 1660618224393, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (17, 1660618224393, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (18, 1660621681446, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (19, 1660621681446, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (20, 1660621681447, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (21, 1660621681447, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (22, 1660621681447, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (23, 1660621681447, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (24, 1660621807986, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (25, 1660621807986, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (26, 1660621807986, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (27, 1660621807986, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (28, 1660621807986, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (29, 1660621807986, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (30, 1660621852243, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (31, 1660621852243, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (32, 1660621852243, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (33, 1660621852243, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (34, 1660621852243, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (35, 1660621852243, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (36, 1660621869075, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (37, 1660621869075, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (38, 1660621869075, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (39, 1660621869075, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (40, 1660621869075, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (41, 1660621869075, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (42, 1660621910712, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (43, 1660621910712, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (44, 1660621910712, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (45, 1660621910712, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (46, 1660621910712, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (47, 1660621910712, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (48, 1660624698442, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (49, 1660624698442, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (50, 1660624698442, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (51, 1660624698442, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (52, 1660624698442, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (53, 1660624698442, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (54, 1660624879912, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (55, 1660624879912, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (56, 1660624879913, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (57, 1660624879913, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (58, 1660624879913, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (59, 1660624879913, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (60, 1660624963665, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (61, 1660624963665, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (62, 1660624963665, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (63, 1660624963665, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (64, 1660624963665, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (65, 1660624963665, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (66, 1660625034920, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (67, 1660625034921, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (68, 1660625034921, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (69, 1660625034921, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (70, 1660625034920, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (71, 1660625034921, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (72, 1660625048711, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (73, 1660625048711, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (74, 1660625048711, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (75, 1660625048711, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (76, 1660625048711, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (77, 1660625048711, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (78, 1660625147128, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (79, 1660625147128, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (80, 1660625147129, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (81, 1660625147129, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (82, 1660625147129, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (83, 1660625147129, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (84, 1660625205124, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (85, 1660625205124, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (86, 1660625205124, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (87, 1660625205124, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (88, 1660625205124, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (89, 1660625205124, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (90, 1660625242168, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (91, 1660625242168, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (92, 1660625242169, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (93, 1660625242169, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (94, 1660625242169, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (95, 1660625242169, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (96, 1660625249758, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (97, 1660625249758, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (98, 1660625249758, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (99, 1660625249758, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (100, 1660625249758, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (101, 1660625249758, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (102, 1660625361863, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (103, 1660625361863, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (104, 1660625361863, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (105, 1660625361863, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (106, 1660625361863, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (107, 1660625361863, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (108, 1660625711738, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (109, 1660625711738, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (110, 1660625711739, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (111, 1660625711739, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (112, 1660625711739, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (113, 1660625711739, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (114, 1660625734814, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (115, 1660625734814, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (116, 1660625734815, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (117, 1660625734815, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (118, 1660625734815, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (119, 1660625734815, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (120, 1660626354994, 'http://localhost:3000/src/test.ts', 't', 2, 9);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (121, 1660626354994, 'http://localhost:3000/src/main.ts?t=1660205635051', '', 14, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (122, 1660626354994, 'http://localhost:3000/src/test.ts?t=1660205726302', '', 3, 12);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (123, 1660626354994, '<anonymous>', 'new Promise', 0, 0);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (124, 1660626354994, 'http://localhost:3000/src/test.ts?t=1660205726302', 't', 2, 3);
INSERT INTO `stack_trace` (`id`, `group_id`, `filename`, `function_name`, `line`, `col`) VALUES (125, 1660626354994, 'http://localhost:3000/src/main.ts?t=1660205726302', '', 14, 3);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
