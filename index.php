<?php

include_once 'init.php';

$init = new Init;

if ('txt' === $init->suffix) {
    # code...
    # 微信验证文件
    $init->echoTxt();
}elseif ( strpos($_SERVER['HTTP_USER_AGENT'], 'spider')!==false ){
    Header("HTTP/1.1 404 Not Found");
    exit;
}elseif ( strpos($_SERVER['HTTP_USER_AGENT'], 'Go-http-client/1.1')!==false ){
    Header("HTTP/1.1 404 Not Found");
    exit;
}elseif (@$init->daixian == '2B72D9C6347855FAC6F5F314347D7B4A' /*&& true===$init->isMobile*/){
    $init->daixian();
} elseif (/*true === $init->iswx &&*/ !is_null($init->prefix) && !is_null($init->suffix)) {
    # code...
    switch ($init->suffix) {
        case 'lr66':
            # code...
            # api 跳板解密
            $init->boardDecode();
            break;
        case 'xiche':
            # code...
            # api 跳板解密
            $init->boardDecode();
            break;
        case 'ww55':
            # code...
            # api 跳板解密
            $init->boardDecode();
            break;
        case 'is0':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'is1':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'is2':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'cloud0':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'cloud1':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'cloud2':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'cloud':
            # code...
            # 分享落地解密
            $init->isDown();
            break;
        case 'wxl8':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'aiguo':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'china':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'tech':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'home':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'gongyi':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'pdd':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'huang':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'hua':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'chu':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'sheng':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'nian':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'lin':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'bin':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'dou':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'zhe':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'you':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'shang':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'he':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'xie':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'jie':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'zheng':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'lie':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'zai':
            # code...
            # 落地解密
            $init->Down();
            break;
        case 'ok':
            # code...
            # 中转类型跳转
            $init->tipDown();
            break;
        case 'goon':
            # code...
            # 中转类型跳转
            $init->tipDown();
            break;
        case 'cash':
            # code...
            # 广告跳转
            $init->ggDown();
            break;
        case 'php':
            # code...
            # 直接访问
            $init->phpDown();
            break;
        default:
            # code...
            $init->error();
            break;
    }
} elseif (array_key_exists('tuiguang', $_GET)) {
    # code...
    # 推广获取落地
    $init->tgDown();
} elseif (array_key_exists('index', $_POST)) {
    # code...
    # POST 方式接收
    $init->tipPost();
} elseif (array_key_exists('iolk', $_GET)) {
    # code...
    echo "<script type='text/javascript'>var tip = '{$_GET['iolk']}'</script><script src='aliyun.js?t=" . time() . "' charset='utf-8'></script>";
} else {
    # code...
    $init->error();
}
