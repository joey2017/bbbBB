<?php
// vim: set expandtab cindent tabstop=4 shiftwidth=4 fdm=marker:
// +----------------------------------------------------------------------+
// | The CompanyName Inc                                                  |
// +----------------------------------------------------------------------+
// | Copyright (c) 2013, CompanyName Inc. All rights reserved.            |
// +----------------------------------------------------------------------+
// | Authors: The PHP Dev Team, ISRD, CompanyName Inc.                    |
// |                                                                      |
// +----------------------------------------------------------------------+
return [
    // 广告域名
    'gg_url'  => 'http://hwlxqj.cn/',
    $two1 = getRandStr(mt_rand(3,10)),
   //落地域名（调用js接口）
   'sp_url'  => 'https://qdtyh0.cn/',
   //中间跳转域名
   'sp_jump' => 'https://insrvy05908.cn/', 
   //视频播放域名
   'sp_play' => 'https://lrcygr.cn/',

    // 开启广告或者导量
    // 'toopen'  => 'http://k3v0k5.cn',
    // 推广域名
    'sp_tuig' => 'https://j2384.cn/',
    // 秘钥
    'key'     => 'xiaoshen.miyao',
];

function getRandStr($length){
    $str = array_merge(range(0, 9), range('a', 'z'), range('A', 'Z'));
    shuffle($str);
    $str = implode('', array_slice($str, 0, $length));
    return $str;
}
