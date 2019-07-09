/*
Navicat MySQL Data Transfer

Source Server         : 39.108.212.98
Source Server Version : 50643
Source Host           : 39.108.212.98:3306
Source Database       : wx

Target Server Type    : MYSQL
Target Server Version : 50643
File Encoding         : 65001

Date: 2019-07-09 09:49:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for system_domain
-- ----------------------------
DROP TABLE IF EXISTS `system_domain`;
CREATE TABLE `system_domain` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT '' COMMENT '域名',
  `app_id` int(11) DEFAULT NULL COMMENT '公众号id',
  `type` tinyint(1) DEFAULT NULL COMMENT '类型：1=>入口域名，2=>落地域名，3=>跳转域名，4=>播放域名，5=>广告域名',
  `sort` int(11) unsigned DEFAULT '0' COMMENT '排序',
  `server_id` smallint(6) DEFAULT NULL COMMENT '绑定ip的id',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注信息',
  `share_times` int(11) NOT NULL DEFAULT '0' COMMENT '调用次数',
  `real_share_times` int(11) NOT NULL DEFAULT '0' COMMENT '实际分享次数',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '域名状态(1有效,0无效)',
  `is_deleted` tinyint(1) unsigned DEFAULT '0' COMMENT '删除状态(1删除,0未删除)',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `edit_time` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `sort` (`sort`),
  KEY `times` (`share_times`)
) ENGINE=InnoDB AUTO_INCREMENT=288 DEFAULT CHARSET=utf8 COMMENT='域名管理表';

-- ----------------------------
-- Records of system_domain
-- ----------------------------
INSERT INTO `system_domain` VALUES ('119', '6p60t9.cn', null, '3', '1', '118', '', '0', '0', '0', '0', '2019-04-04 22:32:30', '2019-04-14 15:28:04');
INSERT INTO `system_domain` VALUES ('120', '2749n0.cn', null, '3', '2', '118', '', '0', '0', '0', '0', '2019-04-04 22:32:42', '2019-05-05 14:27:51');
INSERT INTO `system_domain` VALUES ('121', '85jjb6.cn', null, '3', '3', '118', '', '0', '0', '0', '0', '2019-04-04 22:33:39', '2019-05-22 16:46:15');
INSERT INTO `system_domain` VALUES ('122', 'elpxh.cn', null, '3', '4', '118', '', '0', '0', '0', '0', '2019-04-08 13:29:00', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('123', 'ii62pd.cn', null, '5', '5', '116', '没备案', '0', '0', '0', '0', '2019-04-08 15:35:30', '2019-06-12 10:01:13');
INSERT INTO `system_domain` VALUES ('125', 'r87az.cn', null, '2', '11', '117', '', '0', '0', '0', '0', '2019-04-10 17:05:23', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('126', 'w3n32k.cn', null, '2', '13', '117', '', '0', '0', '0', '0', '2019-04-10 17:05:37', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('133', 'p20f1.cn', null, '3', '1', '112', null, '0', '0', '1', '0', '2019-04-11 09:26:15', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('134', '29mc7.cn', null, '3', '2', '112', null, '0', '0', '1', '0', '2019-04-11 09:26:30', '2019-06-12 10:00:38');
INSERT INTO `system_domain` VALUES ('135', '6vn4h5.cn', null, '3', '3', '112', null, '0', '0', '1', '0', '2019-04-11 09:26:45', '2019-06-12 10:00:49');
INSERT INTO `system_domain` VALUES ('138', 'm59i4l.cn', null, '5', '6', '116', '没备案', '0', '0', '0', '0', '2019-04-12 16:48:39', '2019-06-12 10:01:20');
INSERT INTO `system_domain` VALUES ('139', 'u232a.cn', null, '5', '7', '116', '没备案', '0', '0', '0', '0', '2019-04-12 16:49:03', '2019-06-12 10:01:27');
INSERT INTO `system_domain` VALUES ('140', 'yt0j2l.cn', null, '5', '8', '116', '没备案', '0', '0', '0', '0', '2019-04-12 16:49:22', '2019-06-12 10:01:31');
INSERT INTO `system_domain` VALUES ('141', '0219a9.cn', null, '5', '9', '116', '没备案', '0', '0', '0', '0', '2019-04-12 16:49:39', '2019-06-12 10:01:34');
INSERT INTO `system_domain` VALUES ('142', '38qr3j.cn', null, '5', '10', '116', '没备案', '0', '0', '0', '0', '2019-04-12 16:49:55', '2019-06-12 10:01:36');
INSERT INTO `system_domain` VALUES ('143', '2al3n.cn', null, '2', '1', '118', '入口域名被封', '0', '0', '0', '0', '2019-04-13 15:03:01', '2019-05-15 16:10:46');
INSERT INTO `system_domain` VALUES ('144', 'v73xd2.cn', null, '2', '7', '112', null, '0', '0', '0', '0', '2019-04-16 09:34:32', '2019-04-16 13:55:01');
INSERT INTO `system_domain` VALUES ('145', 'bm61pj.cn', null, '3', '2', '118', '', '0', '0', '1', '0', '2019-04-16 09:34:43', '2019-06-12 10:00:36');
INSERT INTO `system_domain` VALUES ('146', 'oqso8.cn', null, '3', '3', '118', '', '0', '0', '1', '0', '2019-04-16 09:34:55', '2019-06-12 10:00:47');
INSERT INTO `system_domain` VALUES ('147', 's6v0r.cn', null, '3', '4', '118', '', '0', '0', '1', '0', '2019-04-16 09:35:07', '2019-06-12 10:00:59');
INSERT INTO `system_domain` VALUES ('148', '6ui1r7.cn', null, '3', '5', '118', '', '0', '0', '1', '0', '2019-04-16 09:35:18', '2019-06-12 10:01:10');
INSERT INTO `system_domain` VALUES ('149', '1wh76.cn', null, '2', '13', '118', '', '0', '0', '0', '0', '2019-04-16 09:35:34', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('152', 'y6p6yt.cn', null, '3', '2', '114', null, '0', '0', '0', '0', '2019-04-16 16:51:51', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('153', 'h113k.cn', null, '5', '12', '116', '没备案', '0', '0', '0', '0', '2019-04-16 17:40:42', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('154', '3pos58.cn', null, '3', '3', '114', null, '0', '0', '0', '0', '2019-04-16 17:41:21', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('155', 'sjl402.cn', null, '3', '4', '114', null, '0', '0', '0', '0', '2019-04-16 17:41:47', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('157', 'nnqht.com', null, '1', '1', '112', null, '0', '0', '0', '0', '2019-04-18 10:30:43', '2019-04-18 10:36:12');
INSERT INTO `system_domain` VALUES ('158', 'gxssnn.com', null, '1', '1', '114', null, '0', '0', '0', '0', '2019-04-18 10:30:58', '2019-04-18 10:36:09');
INSERT INTO `system_domain` VALUES ('159', 'nnjzyhb.com', null, '1', '1', '113', '', '0', '0', '0', '0', '2019-04-18 10:31:20', '2019-04-28 17:25:11');
INSERT INTO `system_domain` VALUES ('160', 'cgsensor.com', null, '1', '1', '108', null, '0', '0', '0', '0', '2019-04-22 15:38:15', '2019-04-25 23:40:10');
INSERT INTO `system_domain` VALUES ('161', 'rxhtdd.cn', null, '2', '3', '118', '', '0', '9', '1', '0', '2019-04-22 17:48:35', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('162', 'igskia.cn', null, '2', '10', '118', '', '0', '25', '1', '0', '2019-04-22 17:48:53', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('163', 'ehe92.cn', null, '2', '3', '109', null, '0', '0', '0', '0', '2019-04-22 17:49:07', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('164', 't48v53.cn', null, '2', '4', '109', null, '0', '0', '0', '0', '2019-04-22 17:49:30', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('168', 'l04mk9.cn', null, '3', '3', '109', '', '0', '0', '0', '0', '2019-04-23 18:23:09', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('169', 'b70x4.cn', null, '5', '8', '116', '', '0', '0', '0', '0', '2019-04-23 18:24:41', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('170', 'aiiqtest.com', null, '1', '1', '113', '', '0', '0', '0', '0', '2019-04-29 09:08:48', '2019-04-30 06:50:13');
INSERT INTO `system_domain` VALUES ('171', 'tdann.com', null, '1', '1', '111', '', '0', '0', '0', '1', '2019-04-29 09:09:16', '2019-05-04 20:25:10');
INSERT INTO `system_domain` VALUES ('172', 'meihaokonggu.com', null, '1', '2', '111', '', '0', '0', '0', '1', '2019-04-29 19:11:20', '2019-05-07 23:16:26');
INSERT INTO `system_domain` VALUES ('173', 'ma.sxzssw.com', null, '1', '2', '108', '', '0', '0', '0', '0', '2019-04-29 19:11:48', '2019-05-08 18:47:39');
INSERT INTO `system_domain` VALUES ('174', 'dd.qipeisc.com', null, '1', '1', '108', '', '0', '0', '0', '0', '2019-04-29 19:12:11', '2019-05-06 12:50:17');
INSERT INTO `system_domain` VALUES ('175', 'ps.bigjan.com', null, '1', '2', '108', '', '0', '0', '0', '0', '2019-04-29 19:12:27', '2019-05-06 20:58:29');
INSERT INTO `system_domain` VALUES ('176', 'wp.jm2014228.com', null, '1', '2', '113', '', '0', '0', '0', '0', '2019-04-29 19:12:44', '2019-05-06 14:35:30');
INSERT INTO `system_domain` VALUES ('177', 'ad.djcdn.com', null, '1', '0', '109', '', '0', '0', '0', '0', '2019-05-06 09:33:22', '2019-05-12 07:56:11');
INSERT INTO `system_domain` VALUES ('178', 'vgkzy.com', null, '1', '0', '113', '', '0', '0', '0', '0', '2019-05-06 09:33:47', '2019-05-07 00:38:08');
INSERT INTO `system_domain` VALUES ('179', 'hudoop.com', null, '1', '0', '114', '', '0', '0', '0', '0', '2019-05-06 09:34:08', '2019-05-07 02:07:04');
INSERT INTO `system_domain` VALUES ('180', 'hzjnyph.com', null, '5', '9', '116', '', '0', '0', '1', '0', '2019-05-08 10:06:20', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('181', 'xqjqiao.com', null, '1', '0', '113', '', '0', '0', '0', '0', '2019-05-08 10:06:35', '2019-05-08 17:19:08');
INSERT INTO `system_domain` VALUES ('182', 'alittel.com', null, '1', '0', '111', '', '0', '0', '0', '1', '2019-05-08 10:06:48', '2019-05-08 18:37:04');
INSERT INTO `system_domain` VALUES ('183', '52uv0d.cn', null, '2', '2', '118', '入口域名被封', '0', '0', '0', '0', '2019-05-08 16:58:00', '2019-05-15 16:09:07');
INSERT INTO `system_domain` VALUES ('188', '87vvpf.cn', null, '2', '1', '117', '', '0', '1', '1', '0', '2019-05-08 20:30:45', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('189', 'ttwlp.top', null, '3', '0', '111', '', '0', '0', '1', '0', '2019-05-09 18:56:23', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('190', 'lqjce.top', null, '3', '1', '111', '', '0', '0', '1', '0', '2019-05-09 19:22:13', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('191', 'xiaozouzou.top', null, '2', '0', '111', '', '0', '5', '1', '0', '2019-05-09 19:23:10', '2019-06-12 10:00:33');
INSERT INTO `system_domain` VALUES ('192', '188r1z.cn', null, '2', '7', '117', '入口域名被封', '0', '0', '0', '0', '2019-05-14 15:30:44', '2019-06-12 10:01:24');
INSERT INTO `system_domain` VALUES ('193', 'vfgq4.cn', null, '2', '8', '117', '香港阿里云', '0', '0', '0', '0', '2019-05-14 15:31:27', '2019-05-16 18:23:03');
INSERT INTO `system_domain` VALUES ('194', 'd72vel.cn', null, '3', '19', '117', '香港阿里云', '0', '0', '0', '0', '2019-05-14 15:32:03', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('195', 'oj6o9b.cn', null, '3', '6', '111', '', '0', '0', '0', '0', '2019-05-15 16:00:56', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('196', 'jb9g9.cn', null, '3', '2', '113', '', '0', '0', '0', '0', '2019-05-15 16:01:12', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('197', 'generators.top', null, '2', '1', '116', '', '0', '0', '0', '1', '2019-05-15 16:11:12', '2019-05-17 10:17:15');
INSERT INTO `system_domain` VALUES ('198', '0050h9.cn', null, '3', '1', '118', '', '0', '0', '1', '0', '2019-05-17 16:56:42', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('200', 'q1r1h.cn', null, '3', '2', '118', '', '0', '0', '1', '0', '2019-05-17 16:57:44', '2019-06-12 10:00:31');
INSERT INTO `system_domain` VALUES ('201', 'i89l24.cn', null, '3', '4', '118', '', '0', '0', '1', '0', '2019-05-17 16:58:04', '2019-06-12 10:00:56');
INSERT INTO `system_domain` VALUES ('202', 'rL40h.cn', null, '2', '1', '117', '', '0', '0', '0', '0', '2019-05-18 17:47:53', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('203', 'eh274s.cn', null, '2', '7', '117', '', '0', '0', '0', '0', '2019-05-18 17:48:08', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('204', '96qd4.cn', null, '2', '16', '117', '', '0', '0', '0', '0', '2019-05-18 17:48:27', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('205', '76eb5e.cn', null, '2', '22', '117', '', '0', '0', '0', '0', '2019-05-18 17:48:46', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('206', 'd89p4.cn', null, '2', '25', '117', '', '0', '0', '0', '0', '2019-05-18 17:49:02', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('207', 'w9zkoy.cn', null, '2', '28', '117', '', '0', '0', '0', '0', '2019-05-18 17:49:19', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('208', '17i91j.cn', null, '2', '31', '117', '', '0', '0', '0', '0', '2019-05-18 17:49:41', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('209', '9n2t87.cn', null, '2', '32', '117', '', '0', '0', '0', '0', '2019-05-18 17:49:53', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('210', '5ja18.cn', null, '2', '33', '117', '', '0', '0', '0', '0', '2019-05-18 17:50:11', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('211', '0w9na.cn', null, '2', '34', '117', '', '0', '0', '0', '0', '2019-05-18 17:50:26', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('214', 'pinxuexiapp.net', null, '2', '8', '117', '', '0', '0', '0', '0', '2019-05-18 17:51:15', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('215', 'wxcdjs.net', null, '2', '11', '117', '', '0', '0', '0', '0', '2019-05-18 17:51:27', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('216', 'dswr.net', null, '2', '14', '117', '', '0', '0', '0', '0', '2019-05-18 17:51:40', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('217', 'feiliaoquan.net', null, '2', '17', '117', '', '0', '0', '0', '0', '2019-05-18 17:52:31', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('218', 'snqr.net', null, '2', '20', '117', '', '0', '0', '0', '0', '2019-05-18 17:53:53', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('221', 'gupingwang.net', null, '2', '29', '117', '', '0', '0', '0', '0', '2019-05-18 17:54:35', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('224', 'spcpl.fun', null, '2', '9', '117', '', '0', '0', '0', '0', '2019-05-18 17:55:09', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('225', 'mpfpt.fun', null, '2', '12', '117', '', '0', '0', '0', '0', '2019-05-18 17:55:24', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('226', 'qpwpb.fun', null, '2', '15', '117', '', '0', '0', '0', '0', '2019-05-18 17:55:37', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('227', 'ppbpb.fun', null, '2', '18', '117', '', '0', '0', '0', '0', '2019-05-18 17:55:53', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('228', 'ypxpz.fun', null, '2', '21', '117', '', '0', '0', '0', '0', '2019-05-18 17:56:08', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('229', 'mpypn.fun', null, '2', '24', '117', '', '0', '0', '0', '0', '2019-05-18 17:56:21', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('230', 'qpfpj.fun', null, '2', '27', '117', '', '0', '0', '0', '0', '2019-05-18 17:56:42', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('231', 'hptpp.fun', null, '2', '30', '117', '', '0', '0', '0', '0', '2019-05-18 17:56:57', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('234', 'kkamvv.cn', null, '2', '3', '117', '', '0', '0', '0', '0', '2019-05-18 19:21:54', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('235', '24b29.cn', null, '2', '4', '117', '', '0', '7', '1', '0', '2019-05-18 19:22:06', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('236', '167wl.cn', null, '2', '5', '117', '', '0', '0', '0', '0', '2019-05-18 19:22:17', '2019-06-12 10:01:08');
INSERT INTO `system_domain` VALUES ('237', '373t2.cn', null, '2', '6', '117', '', '0', '0', '0', '0', '2019-05-18 19:22:30', '2019-06-12 10:01:17');
INSERT INTO `system_domain` VALUES ('238', 'v8ro02.cn', null, '2', '4', '118', '', '0', '16', '1', '0', '2019-05-18 19:27:54', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('239', 'jf8m12.cn', null, '2', '5', '118', '', '0', '26', '1', '0', '2019-05-18 19:28:13', '2019-06-12 10:01:06');
INSERT INTO `system_domain` VALUES ('242', 'fa712t.cn', null, '2', '14', '118', '', '0', '0', '0', '0', '2019-05-18 19:33:10', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('243', '1d44u7.cn', null, '2', '6', '118', '', '0', '68', '0', '0', '2019-05-18 20:13:02', '2019-06-12 10:01:15');
INSERT INTO `system_domain` VALUES ('244', '55gq4.cn', null, '2', '3', '117', '', '0', '9', '1', '0', '2019-05-18 20:22:02', '2019-06-12 10:00:45');
INSERT INTO `system_domain` VALUES ('245', 'shenjingxiongdi.net', null, '3', '1', '117', '', '0', '0', '1', '0', '2019-05-18 20:26:54', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('246', 'gpqpq.fun', null, '3', '2', '117', '', '0', '0', '0', '0', '2019-05-18 20:27:06', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('247', 'oakridgefurniture.net', null, '3', '3', '117', '', '0', '0', '1', '0', '2019-05-18 20:27:24', '2019-06-12 10:00:42');
INSERT INTO `system_domain` VALUES ('250', 'k90y7t.cn', null, '2', '9', '117', '', '0', '1', '1', '0', '2019-05-18 21:33:56', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('251', '4p4xo7.cn', null, '2', '10', '117', '', '0', '1', '1', '0', '2019-05-18 21:36:17', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('252', 'e7g7y.cn', null, '2', '14', '117', '入口域名被封', '0', '0', '0', '0', '2019-05-18 21:38:47', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('253', '23kic.cn', null, '2', '16', '117', '', '0', '0', '1', '0', '2019-05-18 21:39:50', '2019-06-12 10:01:38');
INSERT INTO `system_domain` VALUES ('254', 'kg43jq.cn', null, '2', '17', '117', '', '0', '1', '1', '0', '2019-05-18 21:42:45', '2019-07-05 18:28:36');
INSERT INTO `system_domain` VALUES ('255', 'health3.m.cn.lotpu.com', null, '1', '1', '118', '', '0', '0', '0', '0', '2019-05-18 21:43:26', '2019-07-05 18:30:15');
INSERT INTO `system_domain` VALUES ('256', 'login2.m.cn.qizhou.com.cn', null, '1', '2', '118', '', '0', '0', '0', '0', '2019-05-18 21:43:38', '2019-06-23 11:43:38');
INSERT INTO `system_domain` VALUES ('257', 'login4.m.cn.lotpu.com', null, '1', '3', '118', '', '0', '0', '0', '0', '2019-05-18 21:44:01', '2019-07-05 18:28:36');
INSERT INTO `system_domain` VALUES ('258', '449696.cn', null, '2', '7', '118', '', '0', '9', '1', '0', '2019-05-18 21:46:35', '2019-06-23 11:43:38');
INSERT INTO `system_domain` VALUES ('259', '44lgq5.cn', null, '2', '8', '118', '', '0', '9', '1', '0', '2019-05-20 08:39:34', '2019-06-23 11:43:38');
INSERT INTO `system_domain` VALUES ('260', 'mpxg.net', null, '3', '4', '117', '', '0', '0', '1', '0', '2019-05-22 18:21:49', '2019-06-12 10:00:54');
INSERT INTO `system_domain` VALUES ('261', 'kbpq.net', null, '3', '5', '117', '', '0', '0', '1', '0', '2019-05-22 18:23:03', '2019-06-12 10:01:03');
INSERT INTO `system_domain` VALUES ('262', '615o2.cn', null, '2', '9', '118', '', '0', '8', '1', '0', '2019-05-22 19:23:42', '2019-07-05 17:26:03');
INSERT INTO `system_domain` VALUES ('263', 'cg4j76.cn', null, '2', '10', '118', '', '0', '0', '0', '0', '2019-05-22 19:24:23', '2019-07-05 17:26:03');
INSERT INTO `system_domain` VALUES ('265', '1657x8.cn', null, '2', '12', '118', '', '0', '17', '0', '0', '2019-05-22 19:25:00', '2019-07-05 17:26:03');
INSERT INTO `system_domain` VALUES ('266', '067v9.cn', null, '2', '17', '117', '', '0', '20', '1', '0', '2019-05-22 19:29:55', '2019-07-05 18:28:36');
INSERT INTO `system_domain` VALUES ('267', 'zltest.top', null, '5', '1', '116', '', '0', '0', '1', '0', '2019-06-01 11:07:18', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('268', 'conceptedu.top', null, '5', '2', '116', '', '0', '0', '1', '0', '2019-06-01 11:08:44', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('269', 'mebarleylife.top', null, '5', '3', '116', '', '0', '0', '0', '0', '2019-06-01 11:09:11', '2019-06-01 11:12:46');
INSERT INTO `system_domain` VALUES ('270', 'smiga.top', null, '5', '4', '116', '', '0', '0', '1', '0', '2019-06-01 11:09:22', '2019-06-12 10:00:52');
INSERT INTO `system_domain` VALUES ('271', 'meimailife.top', null, '5', '5', '116', '', '0', '0', '1', '0', '2019-06-01 11:09:34', '2019-06-12 10:01:01');
INSERT INTO `system_domain` VALUES ('272', 'health7.m.cn.zhongzhijingji.com', null, '1', '0', '118', '', '0', '0', '0', '0', '2019-06-06 15:15:23', '2019-07-05 17:26:03');
INSERT INTO `system_domain` VALUES ('273', 'health5.m.cn.chinayet.com', null, '1', '0', '118', '', '0', '0', '0', '0', '2019-06-06 15:15:35', '2019-06-16 18:22:06');
INSERT INTO `system_domain` VALUES ('274', 'health6.m.cn.chinayet.com', null, '1', '0', '118', '', '0', '0', '0', '0', '2019-06-06 15:15:50', '2019-06-16 18:22:03');
INSERT INTO `system_domain` VALUES ('275', '7028e6.cn', null, '2', '9', '118', '', '0', '27', '0', '0', '2019-06-12 11:18:33', '2019-07-05 17:26:03');
INSERT INTO `system_domain` VALUES ('276', 'zyw998.top', null, '2', '1', '111', '', '0', '0', '1', '0', '2019-06-12 11:21:43', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('282', '20wchao.top', null, '2', '0', '111', '', '0', '0', '1', '0', '2019-07-08 16:59:46', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('286', 'service-b6vrn4dk-1258860302.ap-hongkong.apigateway.myqcloud.com/release', null, '1', '1', '111', '腾讯api网关', '0', '0', '1', '0', '2019-07-08 17:40:22', '0000-00-00 00:00:00');
INSERT INTO `system_domain` VALUES ('287', '5j7ww.cn', null, '2', '0', '118', '', '0', '1', '1', '0', '2019-07-08 18:16:10', '0000-00-00 00:00:00');
