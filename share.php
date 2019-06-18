<?php

use think\facade\Db;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

try {
    $result = Db::table('system_app')
        ->where('bind_domain_ld', $_SERVER['HTTP_HOST'])
        ->where('status', 1)
        ->where('is_deleted', 0)
        ->find();
    return $result ? [$result['bind_domain_ld'] => [$result['bind_domain_qun'], $result['bind_domain_quan'], $result['appid'], $result['appsecret']]] : [];

} catch (\Exception $e) {
    $info = ['error' => $e->getMessage()];

    // 实例化一个日志实例, 参数是 channel name
    $logger = new Logger('error_log');

    $streamHander = new StreamHandler(__DIR__.'/logs/'.date('Ymd').'/error.log', Logger::INFO);
    // 设置日志格式为json
    //$streamHander->setFormatter(new JsonFormatter());
    // 入栈, 往 handler stack 里压入 StreamHandler 的实例
    $logger->pushHandler($streamHander);

    $logger->info('share', $info);
    //file_put_contents(__DIR__ . '/error.log', json_encode($info) . PHP_EOL, FILE_APPEND);
}




