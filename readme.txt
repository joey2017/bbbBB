���л���php7.1+
��չphp_redis

1.��װ���ݿ�������
composer require topthink/think-orm
2.��װmonolog��־����
composer require monolog/monolog
3.��ʱ����crontab��������ű����С����ʳ�ʱ����200��

4.laravelα��̬
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
