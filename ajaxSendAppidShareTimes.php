<?php

require_once __DIR__.'/src/Mysql.class.php';

$database = require_once __DIR__.'/src/config.php';

//开始连接数据库
$db = Mysql::newClass();
$db->pdoConnect([$database['dsn'], $database['username'], $database['password']]);

if(empty($_POST['name'])) {
    exit(0);
}

$where = htmlspecialchars($_POST['name'],ENT_QUOTES,'UTF-8');
$db->select('system_domain','real_share_times,id',['type' => 2,'is_deleted' => 0,'status' => 1,'name' => $where]);
$data = $db->selectOne();
if(empty($data)){
    exit(0);
}

echo $db->update('system_domain',['real_share_times' => $data['real_share_times'] + 1],'id = '.$data['id']);exit;