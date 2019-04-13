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

require_once(__DIR__ . "/src/Mysql.class.php");
$database = require_once(__DIR__ . "/src/config.php");

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

$db = Mysql::newClass();
$db->pdoConnect([$database['dns'], $database['username'], $database['password']]);

if (!$appinfo = $redis->get('bind_domain')) {
    $db->select('system_domain', 'name', ['status' => 1, 'is_deleted' => 0, 'type' => 2, 'server_id' => $redis->get('server_id')], 'sort asc,id desc');
    $sp_url = $db->selectOne(); //获取一条数据
    $sp_url = trim($sp_url['name']);

    $db->select('system_app', '*', ['status' => 1, 'is_deleted' => 0, 'bind_domain_ld' => "$sp_url"], 'sort asc,id desc');
    $result = $db->selectOne(); //获取一条数据

    $appinfo[$result['bind_domain_ld']] = [$result['bind_domain_qun'], $result['bind_domain_quan'], $result['appid'], $result['appsecret']];

    $redis->set('bind_domain', json_encode($appinfo));
    $redis->setTimeout('bind_domain', 60);

} else {
    $appinfo = json_decode($appinfo, true);
}

return $appinfo;

