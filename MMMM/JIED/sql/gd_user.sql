
--
-- Database: `gd`
--

-- --------------------------------------------------------

--
-- 表的结构 `gd_user`
--

CREATE TABLE `gd_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `avatar` varchar(128) DEFAULT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `gd_user`
--

INSERT INTO `gd_user` (`uid`, `uname`, `upwd`, `email`, `phone`, `avatar`, `user_name`, `gender`) VALUES
(1, 'dingding', '123456', 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', 0),
(2, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', 1),
(4, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', 0),
(6, 'ABCDefd', '123456', '123@qq.com', '13538894495', NULL, 'ewewrwe', 0),
(7, 'mohk', '123456', '11@qq.com', '13512312312', NULL, 'kkkk', 0),
(8, '121123', 'w13945128995', '491000888@qq.com', '13213389258', NULL, 'lll', 0),
(10, 'xuyong', '123456', '123456789@qq.com', '15525623622', NULL, 'RRR', 0),
(11, 'admin', 'cxy930123', 'mail@xingyu1993.cn', '13580510164', NULL, 'ppp', 0),
(12, 'siyongbo', '900427', '616188545@qq.com', '18447103998', NULL, NULL, NULL),
(13, 'qwerty', '123456', '1091256014@qq.com', '15617152367', NULL, NULL, NULL),
(14, 'dingziqiang', '456456', '996534706@qq.com', '15567502520', NULL, NULL, NULL),
(15, 'hdb2264068', 'huang123', '471062503@qq.com', '18898405759', NULL, '', 0),
(16, 'wenhua', '654321', 'liwenhua@tedu.cn', '15012345678', NULL, NULL, NULL),
(19, '47545', 'cxy930123', 'mail@xingyu1993.cn.3', '33333333333', NULL, NULL, NULL),
(20, '气航航', 'wyh961130', '1419591926@qq.com', '15927204115', NULL, NULL, NULL),
(21, 'Jessy', 'ac210921', '123456@qq.com', '13523456789', NULL, NULL, NULL),
(22, 'yuanxf', '123456', 'yuanxf@tedu.cn', '13537763301', NULL, NULL, NULL),
(23, '查安军', '025520', '27514172112@qq.com', '18158899905', NULL, NULL, NULL),
(24, '123456', '123456', '123456@1.com', '13815668132', NULL, NULL, NULL),
(25, '1234', '111111', '734713428@qq.com', '18061920422', NULL, NULL, NULL),
(26, 'qwe12345', '123123', '1191769510@qq.com', '15234010643', NULL, '6565', 0),
(27, '海贼王', '5124457', 'hxxcrocky@qq.com', '18826450879', NULL, NULL, NULL),
(28, 'hanrufuyun00', 'hanrufuyun11', '458205630@qq.com', '13853114827', NULL, NULL, NULL),
(31, 'tom', '123456', 'tom@tedu.cn', '13801234568', NULL, NULL, NULL),
(32, 'zhouzhi', '123456', '2206344145@qq.com', '17600587478', NULL, NULL, NULL),
(33, 'juleck', '123456', 'wuhaofushan@sina.com', '12345678901', NULL, NULL, NULL),
(34, 'yangtao', '123456', '250737026@qq.com', '18256953222', NULL, NULL, NULL),
(35, 'tarena', '123456', '783664829@qq.com', '17711625897', NULL, NULL, NULL),
(36, 'xiaobai', 'xx527603', '1196465493@qq.com', '13980312111', NULL, 'lulu', 0),
(37, '璐璐lu', '546521ll', '1273447080@qq.com', '15892761793', NULL, NULL, NULL),
(38, '胖王二二', 'woaidoubi1.', '1179524522@qq.com', '13269195181', NULL, '', 0),
(39, 'Yeye ', '123456', '1610608370@qq.com', '15062394551', NULL, NULL, NULL),
(41, 'lsj', '123456', '11324564879@qq.com', '13156467891', NULL, NULL, NULL),
(43, 'lsj', '123456', '11324564879@qq.com', '13156467891', NULL, NULL, NULL),
(44, 'lsj', '123456', '11324564879@qq.com', '13156467891', NULL, NULL, NULL),
(45, 'hjh', '958030', 'hjh@126.com', '17812344567', NULL, NULL, NULL),
(46, 'ewq', '123456', '1234567890@qq.com', '12345678909', NULL, NULL, NULL),
(47, 'pipi', '123456', '78@qq.com', '12367889993', NULL, NULL, NULL),
(48, 'Lovica', '309418727', '1684707021@qq.com', '18435130456', NULL, NULL, NULL),
(49, 'htt0908', '19920908', '418720482@qq.com', '15244691033', NULL, NULL, NULL),
(50, 'SUXUEMEI', '123456', 'SUXUEMEI@qq.com', '15817338974', NULL, NULL, NULL),
(51, 'zhong', '123456', '123456789@126.com', '13120211111', NULL, NULL, NULL),
(52, '金豆豆', '123456789', '1170363143@qq.com', '15738619097', NULL, NULL, NULL),
(53, 'wangjunfei', '123456', '396225880@qq.com', '13205935797', NULL, NULL, NULL),
(54, 'gijhglkhglkh', '123456', 'sjksfj@fjdh.com', '15698765423', NULL, NULL, NULL),
(55, 'zuiyd1314', 'zuiyh1994', '528396697@qq.com', '15927843908', NULL, NULL, NULL),
(56, 'xiaoming123', '123456', '54646@qq.com', '13553688534', NULL, NULL, NULL),
(57, 'yuanzhi', '123456', '270096123@qq.com', '15962573639', NULL, NULL, NULL),
(58, 'fengkuang11', 'fengkuang113', '1135779768@qq.com', '18559132247', NULL, NULL, NULL),
(59, 'fengkuang', '123456', '113577976@qq.com', '18559132248', NULL, NULL, NULL),
(60, 'yxzaaa', '123456', '2280517552@qq.com', '13716225357', NULL, NULL, NULL),
(61, 'linlei0001', '58874439', '876056078@qq.com', '13390922939', NULL, NULL, NULL),
(62, 'aaabbb', '123456', '904202099@qq.com', '12345678910', NULL, NULL, NULL),
(63, 'tom222', '123456', '1@163.com', '13456789012', NULL, NULL, NULL),
(64, 'tom1234', '123456', '2@163.com', '13423456789', NULL, NULL, NULL),
(65, 'Liyu123', 'asd8520', '812544715@qq.com', '18911743412', NULL, '左天', 1),
(66, 'Liyu123', 'asd8520', '812544715@qq.com', '18911743412', NULL, NULL, NULL),
(68, 'dingdong', '123456', '15194898156@qq.com', '15112316516', NULL, NULL, NULL),
(69, 'wenjinhua', '236239', '461677613@qq.com', '13516574786', NULL, NULL, NULL),
(70, 'thebigleg', '1a4b2c8d5e7f', '1352951609@qq.com', '13572508752', NULL, NULL, NULL),
(71, 'zhangsan', 'add123456', 'add@qq.com', '12234324223', NULL, NULL, NULL),
(72, '高渐离', '123456', '935263676@qq.com', '18352501250', NULL, NULL, NULL),
(73, 'lifan', '123456', '18092034652@163.com', '18092933456', NULL, NULL, NULL),
(74, 'zhangsan99', '123456zs', '876987366@qq.com', '13934721892', NULL, NULL, NULL),
(75, 'tingDING', '123456', '12345678@qq.com', '13548525468', NULL, NULL, NULL),
(76, 'dongdong', '123456', 'wenhua@taqobao.com', '13946585968', NULL, NULL, NULL),
(77, 'weiyiwei', '123456', '598475405@qq.com', '15923741956', NULL, '韦祎伟', 1),
(78, '落英缤纷赋酒诗', 'sAberTime050', '857464657@qq.com', '17727420979', NULL, NULL, NULL),
(79, 'xiaoming1234', '123456', '4564564564@qq.com', '15269188535', NULL, NULL, NULL),
(80, 'loonchao', '123456', '850248873@qq.com', '13548729051', NULL, NULL, NULL),
(81, 'hushuang', '123456', '850248813@qq.com', '15802507525', NULL, NULL, NULL),
(82, 'test713', '2017713', '12458148@qq.com', '13596542654', NULL, NULL, NULL),
(83, 'fhr9588', '000009588', '111111111@qq.com', '12345666666', NULL, NULL, NULL),
(84, 'baibaidexue', '13809024377', '408130701@qq.com', '18301973827', NULL, NULL, NULL),
(85, 'tom10', '123456', '123@163.com', '12323456', NULL, NULL, NULL),
(86, '12121', '121212', '516898@qq.com', '15163222922', NULL, NULL, NULL),
(87, 'qwer', 'qwer123', '519808982@qq.com', '15163222923', NULL, NULL, NULL),
(88, '芳芳。。', '111111', '627265@qq.com', '17704622223', NULL, NULL, NULL),
(89, 'smm123456', '963852741', '974255093@qq.com', '15098807312', NULL, NULL, NULL),
(90, 'Wenhua.Li', 'libenka', 'wenhua.li@tedu.cn', '13912345678', NULL, NULL, NULL),
(91, '25454545', '12345678', '11@qq.com', '15649879', NULL, NULL, 0),
(92, 'dangdang', '12345678', '12@qq.com', '136456874', NULL, 'll', 1),
(93, 'dangdang', '123456', 'do4545454u@qq.com', '52415', NULL, '454', 1),
(94, 'dingding', '', '', '', NULL, '', 1),
(95, '854542111111', '123456', '121578@qq.com', NULL, NULL, NULL, NULL),
(96, '5e49879', '123456', '8754@qq.com', NULL, NULL, NULL, NULL),
(97, 'dfd', '123456', '1215708470@qq.com', NULL, NULL, NULL, NULL),
(98, 'dfd', '123456', '1215708470@qq.com', NULL, NULL, NULL, NULL),
(99, 'dfd', '123456', '1215708470@qq.com', NULL, NULL, NULL, NULL),
(100, 'lan', '123456', '1215708470@qq.com', NULL, NULL, NULL, NULL),
(101, 'lann', '123456', '1215708470@qq.com', NULL, NULL, NULL, NULL),
(102, 'lann', '123456', '121570870@qq.com', NULL, NULL, NULL, NULL),
(103, 'lann', '123456', '121570870@qq.com', NULL, NULL, NULL, NULL),
(104, 'lann', '123456', '121870@qq.com', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gd_user`
--
ALTER TABLE `gd_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `gd_user`
--
ALTER TABLE `gd_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;
