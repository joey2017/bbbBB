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


//require_once(__DIR__ . "/src/MysqliDb.php");
//require_once(__DIR__ . "/src/db.php");
require_once(__DIR__ . "/src/Mysql.class.php");

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

$pdo = array("mysql:host=127.0.0.1;dbname=wx;charset=utf8", "wx", "s8GAhAEiTHktTNPD");
//开始连接数据库
$db = Mysql::newClass();
$db->pdoConnect($pdo);


//$updateRow = array(
//    "user_id"  => "2",
//    "meta_key" => "username"
//);

//$db->select("wp_usermeta"); //发送sql
//$result=$db->selectOne(); //获取一条数据
//$db->selectCount(); //获取全部

//$db->update("wp_usermeta",$updateRow,"umeta_id=1"); //更新信息
//$db->insert("wp_usermeta",$updateRow); //插入数据
//echo $db->lastinsertid(); //获取插入后的id
//$db->delete("wp_usermeta","umeta_id>18"); //删除数据*/
if (!$appinfo = $redis->get('bind_domain')) {
    //$db = new Mysqlidb('127.0.0.1', 'root', 'root', 'admin_v3');
    //$db->setPrefix('system_');
    $db->select('system_app', '*', ['status' => 1, 'is_deleted' => 0]);
    $result = $db->selectOne(); //获取一条数据
    foreach ($result as $app) {
        $appinfo[$app->bind_domain_ld] = [$app->bind_domain_qun, $app->bind_domain_quan, $app->appid, $app->appsecret];
    }
    $redis->set('bind_domain', json_encode($appinfo));
    $redis->setTimeout('bind_domain',60);

} else {
    $appinfo = json_decode($appinfo, true);  //'bar0'
}

// db instance
$appinfo || $appinfo = [
    //服务器  配置顺序：0、落地 1、群跳板 2、圈跳板 3、公众号ID 4、公众号秘钥
    'igskia.cn' => ['service-70xub2wa-1253137388.gz.apigw.tencentcs.com/release', 'rxhtdd.cn', 'wxc8e8b05f28234e8a', 'bd167fa2d6795961d2f6384977cdab5f'],
];

echo '<pre>';
print_r($appinfo);

return $appinfo;

