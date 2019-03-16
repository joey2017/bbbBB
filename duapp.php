<?php
// vim: set expandtab cindent tabstop=4 shiftwidth=4 fdm=marker:
// +----------------------------------------------------------------------+
// | The CompanyName Inc                                                  |
// +----------------------------------------------------------------------+
// | Copyright (c) 2013, CompanyName Inc. All rights reserved.            |
// +----------------------------------------------------------------------+
// | Authors: The PHP Dev Team, ISRD, CompanyName Inc.                    |
// |                                                                      |
// +----------------------------------------------------------------------+
$fuhao = array('🈲️', '🐂', '🐲', '🦁️', '🐼', '🐮');
$diqu = getCity(getIP())['city'];
$diqu = str_replace('省', '', $diqu);
$daixian=0;//1表示带线
$pointline = 'yiukeo.cn';//带线域名
$help = 'xiche';//带线的视频

if($daixian===0){
    $slink='cash=nk'; //shareclick
    $stitle=$diqu.'男人！学会一次坚持50分以上,真有用！别不好意思...';
    //$qimgurl= 'http://qqpublic.qpic.cn/qq_public/0/0-3102621442-9CF9F9361B8471CEFE86CA0F67B33968/0';
    $qimgurl= 'http://'.$_SERVER['HTTP_HOST'].'/templates/gg.jpg';
}else{
    $slink = "cash=nk&host=".$pointline."&help=".$help;
    $stitle=$diqu.'少年逛自家商场竟被保安打,生气之下连自己商场都砸...'.$fuhao[array_rand($fuhao)];//带线视频的标题
    $qimgurl= 'http://wx4.sinaimg.cn/small/00669utAgy1fpeutnzoevj30cf0bk14u.jpg';//带线视频的图片
	$desc = '阿达瓦大无大无多';//带线描述
}

return [
    // 群标题
    'title'           => $diqu.'上市集团董事长扮穷回乡看望未婚妻被一家人嘲讽还要讹八十万，结果...'.$fuhao[array_rand($fuhao)],
    // 群图片
   // 'imgurl'          => 'http://wx1.sinaimg.cn/mw690/006fxKVJgy1fx6xlz5yf9j30ca0fi7jw.jpg',
    'imgurl'          => 'http://'.$_SERVER['HTTP_HOST'].'/templates/xiche.jpg',
    // 群描述
    'desc'            => '最新热点！你有'.mt_rand(6,20).'位好友正在观看！',
    // 圈标题
      'qtitle'          => $diqu.'上市集团董事长扮穷回乡看望未婚妻被一家人嘲讽还要讹八十万，结果...'.$fuhao[array_rand($fuhao)],//修车厂美女被搞
    // 圈图片
  // 'qimgurl'         => 'http://wx1.sinaimg.cn/mw690/006fxKVJgy1fx6xlz5yf9j30ca0fi7jw.jpg',
     'qimgurl'         => 'http://'.$_SERVER['HTTP_HOST'].'/templates/xiche.jpg',

    // 开启就随机广告
    // 'rand' => [
    //     [
    //         'link'  => 'cash=nk',
    //         'title' => '男人一招硬起来...',
    //         'img'   => 'http://wx4.sinaimg.cn/sq612/00669utAgy1fqdj0bfbz6j30a209amxu.jpg',
    //     ],
    //     [
    //         'link'  => 'cash=pointline&host=1xian',
    //         'title' => '女子找男子玩，结果玩大了...',
    //         'img'   => 'http://wx3.sinaimg.cn/small/00669utAgy1fpbf9ctnnaj306t06e0wb.jpg',
    //     ],
    // ],

     // 广告或带线链接
	'slink' => $slink,// 广告或带线链接
    'stitle'   => $stitle,// 广告或带线标题
    'simgurl'  => $qimgurl,// 广告或带线图片
    'sdesc' => $desc,//广告或带线描述

    // 分享提示语
    'share_info_qun'  => [
        'app0'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个群即可观看！',
        'app1'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群即可观看！',
        'app2'      => '<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>注意：分享到相同的群会失败<br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群！',
        'app3'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可观看！',
        'app4'      => '<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">1个微信群</span>即可!',
        'timeline0' => '<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可!',
        'timeline1' => '<span style="font-size: 30px;color: #f5294c">分享失败！</span><br />再分享一次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可观看!',
        'success'   => '分享成功, 请点击按钮继续播放',
        'default' => '<div class="weui-dialog__bd" id="lly_dialog_msg" style="font-size: 12px;"><img style="width: 40px;margin-top: -30px" src="http://wx4.sinaimg.cn/small/006tptJAgy1fs7klcj4ycg302s02s747.gif"><br><b style="font-size: 16px;color: red">应版权要求限制</b><br><br><span style="font-size: 14px">分享到微信群即可</span><br><b style="font-size: 15px;color: red;">免流量看完整视频</b><br><br><b style="font-size: 18px;color: red;">结局更精彩</b></div>',
        
    ],

    // 分享提示语
    'share_info_quan' => [
        'app0'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个群即可观看！',
        'app1'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群即可观看！',
        'app2'      => '<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>注意：分享到相同的群会失败<br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群！',
        'app3'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可观看！',
        'app4'      => '<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可!',
        'timeline0' => '<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可!',
        'timeline1' => '<span style="font-size: 30px;color: #f5294c">分享失败！</span><br />再分享一次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可观看!',
        'success'   => '分享成功, 请点击按钮继续播放',
        'default' => '<div class="weui-dialog__bd" id="lly_dialog_msg" style="font-size: 12px;"><img style="width: 40px;margin-top: -30px" src="http://wx4.sinaimg.cn/small/006tptJAgy1fs7klcj4ycg302s02s747.gif"><br><b style="font-size: 16px;color: red">应版权要求限制</b><br><br><span style="font-size: 14px">分享到微信群即可</span><br><b style="font-size: 15px;color: red;">免流量看完整视频</b><br><br><b style="font-size: 18px;color: red;">结局更精彩</b></div>',
        
    ],

];



/**
 * 获取用户真实 IP
 */
function getIP()
{
    static $realip;
    if (isset($_SERVER)){
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR_POUND"])){
            $realip = $_SERVER["HTTP_X_FORWARDED_FOR_POUND"];
        } else if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){
            $realip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else if (isset($_SERVER["HTTP_CLIENT_IP"])) {
            $realip = $_SERVER["HTTP_CLIENT_IP"];
        } else {
            $realip = $_SERVER["REMOTE_ADDR"];
        }
    } else {
        if (getenv("HTTP_X_FORWARDED_FOR")){
            $realip = getenv("HTTP_X_FORWARDED_FOR");
        } else if (getenv("HTTP_CLIENT_IP")) {
            $realip = getenv("HTTP_CLIENT_IP");
        } else {
            $realip = getenv("REMOTE_ADDR");
        }
    }
    return $realip;
};
/**
 * 获取 IP  地理位置
 * 淘宝IP接口
 * @Return: array
 */
function getCity($ip = '')
{    
   /* $url="http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;
    $ip=json_decode(file_get_contents($url));
    if((string)$ip->code=='1'){
        return false;
    }
    $data = (array)$ip->data;
    return $data;*/
  
    $url="http://ip.ws.126.net/ipquery?ip=".$ip;
    $content =file_get_contents($url);
    $content=mb_convert_encoding($content,  "UTF-8","GBK");
    preg_match('/lc\=\"([^"]+)/', $content,$arrlocal);
    $city=str_replace(['省','市'], '', $arrlocal['1']);
    $data['city']=$city;
    return $data;
};
