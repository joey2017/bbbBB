<?php

use think\facade\Db;

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

//广告域名
if (!$gg_url = $redis->get('gg_url')) {
    $gg_url = Db::table('system_domain')
        ->field('name')
        ->where('status', 1)
        ->where('is_deleted', 0)
        ->where('type', 5)
        ->order(['sort' => 'asc', 'id' => 'desc'])
        ->find();
    $gg_url = trim($gg_url['name']);
    $redis->set('gg_url', $gg_url);
    $redis->setTimeout('gg_url', 30);
}

//服务器id
if (!$server_id = $redis->get('server_id')) {
    $ip_info = Db::table('system_server')
        ->field('id,ip')
        ->where('inner_ip', $_SERVER['SERVER_ADDR'])
        ->where('status', 1)
        ->where('is_deleted', 0)
        ->order('id', 'desc')
        ->find();
    $redis->set('server_id', $ip_info['id']);
}

//中间跳转
if (!$redirect_url = $redis->get('redirect_url')) {
    $redirect_url = Db::table('system_domain')
        ->field('name')
        ->where('status', 1)
        ->where('is_deleted', 0)
        ->where('type', 3)
        ->where('server_id', $server_id)
        ->order(['sort' => 'asc', 'id' => 'desc'])
        ->find();
    $redirect_url = trim($redirect_url['name']);
    $redis->set('redirect_url', $redirect_url);
    $redis->setTimeout('redirect_url', 30);
}
//视频、落地域名
if (!$sp_url = $redis->get('sp_url')) {
    $sp_urls = Db::table('system_domain')
        ->field('id,share_times,name')
        ->where('status', 1)
        ->where('is_deleted', 0)
        ->where('type', 2)
        ->where('server_id', $server_id)
        ->order(['real_share_times' => 'asc', 'sort' => 'asc', 'id' => 'desc'])
        ->find();
    $sp_url  = trim($sp_urls['name']);
    $redis->set('sp_url', $sp_url);
    $redis->setTimeout('sp_url', 20);

    Db::table('system_domain')->where('id', $sp_urls['id'])->update(['share_times' => $sp_urls['share_times'] + 1]);//更新信息
}

$redis->close();
return [
    // 广告域名
    'gg_url'  => $gg_url,//  2749n0.cn  85jjb6.cn  elpxh.cn  ii62pd.cn  m59i4l.cn  u232a.cn

    //落地域名（调用js接口）
    'sp_url'  => $sp_url, //    rasll.top    generators.top

    //视频播放域名
    'sp_play' => $sp_url, //    rasll.top    generators.top   smiga.top

    //中间跳转域名
    'sp_jump' => $redirect_url, //  zltest.top     conceptedu.top

    // 开启广告或者导量
    //'toopen'  => $gg_url ,//

    // 推广域名
    //'sp_tuig' => $gg_url ,

    // 秘钥
    'key'     => 'xiaoshen.miyao',
];