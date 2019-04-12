<?php

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

//查看服务是否运行
$redis->set('aaa','[{"name":"liming"},{"name":"joey"}]');
print_r(json_decode($redis->get('aaa'),true));