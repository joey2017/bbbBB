<?php

require dirname(__FILE__)."/vendor/autoload.php";

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\JsonFormatter;

// 实例化一个日志实例, 参数是 channel name
$logger = new Logger('sharelog');

// StreamHandler_1
$streamHander1 = new StreamHandler(__DIR__.'/logs/'.date('Ymd').'/sharelog.log', Logger::INFO);
// 设置日志格式为json
//$streamHander1->setFormatter(new JsonFormatter());
// 入栈, 往 handler stack 里压入 StreamHandler 的实例
$logger->pushHandler($streamHander1);

$logger->info('Welcome to QiuYu Blog.', ['username' => 'QiuYu']);
$logger->warning('Foo');
$logger->error('Bar');