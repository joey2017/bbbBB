运行环境php7.1+
扩展php_redis

1.安装数据库操作类库
composer require topthink/think-orm
2.安装monolog日志服务
composer require monolog/monolog
3.定时任务crontab检测域名脚本运行、访问超时限制200秒

4.laravel伪静态
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
