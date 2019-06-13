<?php

require_once __DIR__.'/vendor/autoload.php';

use think\facade\Db;

$_POST['name'] = 'splb.xunfengkj.com';
if(empty($_POST['name'])) {
    exit('参数错误');
}

echo Db::table('system_domain')
    ->where('type',2)
    ->where('is_deleted',0)
    ->where('status',1)
    ->where('name',$_POST['name'])
    ->inc('real_share_times')
    ->save();
exit;