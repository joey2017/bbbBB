<?php
require_once(__DIR__ . "/src/Mysql.class.php");
$database = require_once(__DIR__ . "/src/config.php");

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

$db = Mysql::newClass();
$db->pdoConnect([$database['dns'], $database['username'], $database['password']]);

if (!$gg_url = $redis->get('gg_url')) {
    $db->select('system_domain', 'name', ['status' => 1, 'is_deleted' => 0,'type' => 5], 'sort asc,id desc');
    $gg_url = $db->selectOne(); //获取一条数据
    $gg_url = trim($gg_url['name']);
    $redis->set('gg_url', $gg_url);
    $redis->setTimeout('gg_url',5);
}

if (!$redirect_url = $redis->get('redirect_url')) {
    if (!$redis->get('server_id')) {
        $inner_ip = $_SERVER['SERVER_ADDR'];
        $db->select('system_server', 'id,ip', ['status' => 1, 'is_deleted' => 0, 'inner_ip' => "$inner_ip"]);
        $ip_info = $db->selectOne();
        $redis->set('server_id', $ip_info['id']);
    }
    $db->select('system_domain', 'name', ['status' => 1, 'is_deleted' => 0, 'type' => 3, 'server_id' => $redis->get('server_id')], 'sort asc,id desc');
    $redirect_url = $db->selectOne();
    $redirect_url = trim($redirect_url['name']);
    $redis->set('redirect_url', $redirect_url);
    $redis->setTimeout('redirect_url', 5);

}

//广告
if (!$toopen = $redis->get('toopen')) {
    $db->select('system_config', 'value', ['name' => 'dl_s' . $redis->get('server_id')]);
    $toopen = $db->selectOne();
    $toopen = $toopen['value'];
    if (empty($toopen)) {
        $db->select('system_config', 'value', ['name' => 'gg_s' . $redis->get('server_id')]);
        $toopen = $db->selectOne();
        $toopen = $toopen['value'];
    }
    $redis->set('toopen', $toopen);
    $redis->setTimeout('toopen', 5);
}

//落地、播放
if (!$sp_url = $redis->get('sp_url')) {
    $db->select('system_domain', 'name', ['status' => 1, 'is_deleted' => 0, 'type' => 2, 'server_id' => $redis->get('server_id')], 'sort asc,id desc');
    $sp_url = $db->selectOne(); //获取一条数据
    $sp_url = trim($sp_url['name']);
    $redis->set('sp_url', $sp_url);
    $redis->setTimeout('sp_url', 5000);
}
$redis->close();
$db->PDO = null;

return [
    // 广告域名
    'gg_url'  => 'http://'.getRandStr(4).'.'.$gg_url.'/',

    //落地域名（调用js接口）
    'sp_url'  => 'http://'. $sp_url .'/',  //    v8ro02.cn    jf8m12.cn    1d44u7.cn   ehe92.cn
  
   //视频播放域名
    'sp_play' => 'http://'. $sp_url .'/',  //   v8ro02.cn    jf8m12.cn      1d44u7.cn   ehe92.cn

    //中间跳转域名
    'sp_jump' => 'http://'.$redirect_url.'/',

    // 开启广告或者导量
    //'toopen'  => 'http://'.getRandStr(4).'.'.$gg_url.'/',

    // 推广域名
    //'sp_tuig' => 'http://'.getRandStr(4).'.'.$gg_url.'/',

    // 秘钥
    'key'     => 'xiaoshen.miyao',
];

function getRandStr($length)
{
    $str = array_merge(range(0, 9), range('a', 'z'), range('A', 'Z'));
    shuffle($str);
    $str = implode('', array_slice($str, 0, $length));
    return $str;
}