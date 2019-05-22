<?php

include_once 'init.php';

$init = new Init;

if ('txt' === $init->suffix) {
    # code...
    # 微信验证文件
    $init->echoTxt();
} elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'spider') !== false) {
    Header("HTTP/1.1 404 Not Found");
    exit;
} elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'Go-http-client/1.1') !== false) {
    Header("HTTP/1.1 404 Not Found");
    exit;
} elseif (@$init->daixian == '2B72D9C6347855FAC6F5F314347D7B4A' && true === $init->isMobile) {
    $init->daixian();
} elseif (true === $init->iswx && !is_null($init->prefix) && !is_null($init->suffix)) {

    switch ($init->suffix) {
        case 'xiche':
            # api 跳板解密
            $init->boardDecode();
            break;
        case 'cloud1':
            # 分享落地解密
            $init->isDown();
            break;
        case 'cloud2':
            # 分享落地解密
            $init->isDown();
            break;
        case 'lin':
            # 落地解密
            $init->Down();
            break;
        case 'bin':
            # 落地解密
            $init->Down();
            break;
        case 'dou':
            # 落地解密
            $init->Down();
            break;
        case 'zhe':
            # 落地解密
            $init->Down();
            break;
        case 'ok':
            # 中转类型跳转
            $init->tipDown();
            break;
        case 'goon':
            # 中转类型跳转
            $init->tipDown();
            break;
        case 'cash':
            # 广告跳转
            $init->ggDown();
            break;
        case 'php':
            # 直接访问
            $init->phpDown();
            break;
        default:
            $init->error();
            break;
    }
} elseif (array_key_exists('tuiguang', $_GET)) {
    # 推广获取落地
    $init->tgDown();
} elseif (array_key_exists('index', $_POST)) {
    # POST 方式接收
    $init->tipPost();
} elseif (array_key_exists('iolk', $_GET)) {
    $_GET['audkey'] = $_GET['audkey'] ??  0;
    echo "<script type='text/javascript'>var tip = '{$_GET['iolk']}',videoIndex = {$_GET['audkey']};</script><script src='aliyun.js?t=" . time() . "' charset='utf-8'></script>";
} else {
    $init->error();
}
