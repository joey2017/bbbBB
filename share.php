<?php

use think\facade\Db;

try {
    $result = Db::table('system_app')
        ->where('bind_domain_ld', $_SERVER['HTTP_HOST'])
        ->where('status', 1)
        ->where('is_deleted', 0)
        ->find();
    return $result ? [$result['bind_domain_ld'] => [$result['bind_domain_qun'], $result['bind_domain_quan'], $result['appid'], $result['appsecret']]] : [];

} catch (\Exception $e) {
    $info = ['error' => $e->getMessage()];
    file_put_contents(__DIR__ . '/error.log', json_encode($info) . PHP_EOL, FILE_APPEND);
}




