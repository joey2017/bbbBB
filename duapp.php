<?php

$fuhao     = array('🈲️', '🐂', '🐲', '🦁️', '🐼', '🐮');
$diqu      = getCity(getIP())['city'];
$diqu      = str_replace('省', '', $diqu);
$daixian   = 0;//1表示带线
$pointline = 'yiukeo.cn';//带线域名
$help      = 'xiche';//带线的视频

if ($daixian === 0) {
    $slink  = 'cash=nk'; //shareclick
    $stitle = $diqu . '男人！学会一次坚持50分以上,真有用！别不好意思...';
    //$qimgurl= 'http://qqpublic.qpic.cn/qq_public/0/0-3102621442-9CF9F9361B8471CEFE86CA0F67B33968/0';
    $qimgurl = 'http://' . $_SERVER['HTTP_HOST'] . '/templates/gg.jpg';
    $desc    = '不再担心自己不行更不怕满足不了娇妻！';//描述
} else {
    $slink   = "cash=nk&host=" . $pointline . "&help=" . $help;
    $stitle  = $diqu . '少年逛自家商场竟被保安打,生气之下连自己商场都砸...' . $fuhao[array_rand($fuhao)];//带线视频的标题
    $qimgurl = 'http://wx4.sinaimg.cn/small/00669utAgy1fpeutnzoevj30cf0bk14u.jpg';//带线视频的图片
    $desc    = '阿达瓦大无大无多';//带线描述
}

return [
    /*
    // 群标题
    'title'           => $diqu . '上市集团董事长扮穷回乡看望未婚妻被一家人嘲讽还要讹八十万，结果...' . $fuhao[array_rand($fuhao)],
    // 群图片
    // 'imgurl'          => 'http://wx1.sinaimg.cn/mw690/006fxKVJgy1fx6xlz5yf9j30ca0fi7jw.jpg',
    'imgurl'          => 'http://' . $_SERVER['HTTP_HOST'] . '/templates/xiche.jpg',
    // 群描述
    'desc'            => '最新热点！你有' . mt_rand(6, 20) . '位好友正在观看！',
    // 圈标题
    'qtitle'          => $diqu . '上市集团董事长扮穷回乡看望未婚妻被一家人嘲讽还要讹八十万，结果...' . $fuhao[array_rand($fuhao)],//修车厂美女被搞
    // 圈图片
    // 'qimgurl'         => 'http://wx1.sinaimg.cn/mw690/006fxKVJgy1fx6xlz5yf9j30ca0fi7jw.jpg',
    'qimgurl'         => 'http://' . $_SERVER['HTTP_HOST'] . '/templates/xiche.jpg',

    // 广告或带线链接
    'slink'           => $slink,// 广告或带线链接
    'stitle'          => $stitle,// 广告或带线标题
    'simgurl'         => $qimgurl,// 广告或带线图片
    'sdesc'           => $desc,//广告或带线描述
    */

    'video'   => [
        [
             // 群标题
             'title'           => $diqu . '市内扫黄，被山庄老板多事叫嚣叫来社会人，结果出人意料！' . $fuhao[array_rand($fuhao)],
             // 群图片
             'imgurl'          => 'http://cdn.xunfengkj.com/templates/20190520115949.jpg',
             // 群描述
             'desc'            => '最新热点！你有' . mt_rand(6, 20) . '位好友正在观看！',
             // 圈标题
             'qtitle'          => $diqu . '市内扫黄，被山庄老板多事叫嚣叫来社会人，结果出人意料！' . $fuhao[array_rand($fuhao)],//修车厂美女被搞
             // 圈图片
             'qimgurl'         => 'http://cdn.xunfengkj.com/templates/20190520115949.jpg',

             // 广告或带线链接
             'slink'           => $slink,// 广告或带线链接
             'stitle'          => $stitle,// 广告或带线标题
             'simgurl'         => $qimgurl,// 广告或带线图片
             'sdesc'           => $desc,//广告或带线描述]
        ],
        [
            // 群标题
            'title'           => '穷就该被看不起？进城打拼穷小子回乡看望未婚妻被胯下羞辱，结果...' . $fuhao[array_rand($fuhao)],
            // 群图片
            'imgurl'          => 'http://cdn.xunfengkj.com/templates/20190520115942.jpg',
            // 群描述
            'desc'            => '最新热点！你有' . mt_rand(6, 20) . '位好友正在观看！',
            // 圈标题
            'qtitle'          => '穷就该被看不起？进城打拼穷小子回乡看望未婚妻被胯下羞辱，结果...' . $fuhao[array_rand($fuhao)],//修车厂美女被搞
            // 圈图片
            'qimgurl'         => 'http://cdn.xunfengkj.com/templates/20190520115942.jpg',

            // 广告或带线链接
            'slink'           => $slink,// 广告或带线链接
            'stitle'          => $stitle,// 广告或带线标题
            'simgurl'         => $qimgurl,// 广告或带线图片
            'sdesc'           => $desc,//广告或带线描述]
        ],
        [
            // 群标题
            'title'           => '父亲带女儿去吃饭，被嚣张执法人员暴打，速看，十分钟删视频' . $fuhao[array_rand($fuhao)],
            // 群图片
            'imgurl'          => 'http://cdn.xunfengkj.com/templates/20190521145623.jpg',
            // 群描述
            'desc'            => '最新热点！你有' . mt_rand(6, 20) . '位好友正在观看！',
            // 圈标题
            'qtitle'          => '父亲带女儿去吃饭，被嚣张执法人员暴打，速看，十分钟删视频' . $fuhao[array_rand($fuhao)],//修车厂美女被搞
            // 圈图片
            'qimgurl'         => 'http://cdn.xunfengkj.com/templates/20190521145623.jpg',

            // 广告或带线链接
            'slink'           => $slink,// 广告或带线链接
            'stitle'          => $stitle,// 广告或带线标题
            'simgurl'         => $qimgurl,// 广告或带线图片
            'sdesc'           => $desc,//广告或带线描述]
        ],
        [
            // 群标题
            'title'           => $diqu . '董事长开破车回乡看望父母，却被弟妹赶出家门，一怒之下...' . $fuhao[array_rand($fuhao)],
            // 群图片
            'imgurl'          => 'http://cdn.xunfengkj.com/templates/20190521145702.jpg',
            // 群描述
            'desc'            => '最新热点！你有' . mt_rand(6, 20) . '位好友正在观看！',
            // 圈标题
            'qtitle'          => $diqu . '董事长开破车回乡看望父母，却被弟妹赶出家门，一怒之下...' . $fuhao[array_rand($fuhao)],//修车厂美女被搞
            // 圈图片
            'qimgurl'         => 'http://cdn.xunfengkj.com/templates/20190521145702.jpg',

            // 广告或带线链接
            'slink'           => $slink,// 广告或带线链接
            'stitle'          => $stitle,// 广告或带线标题
            'simgurl'         => $qimgurl,// 广告或带线图片
            'sdesc'           => $desc,//广告或带线描述]
        ],
        [
            // 群标题
            'title'           => $diqu . '退伍军人骑自行车不小心刮到豪车被打，视频偷拍流出，结果让人大吃一惊' . $fuhao[array_rand($fuhao)],
            // 群图片
            'imgurl'          => 'http://cdn.xunfengkj.com/templates/20190521145720.jpg',
            // 群描述
            'desc'            => '最新热点！你有' . mt_rand(6, 20) . '位好友正在观看！',
            // 圈标题
            'qtitle'          => $diqu . '退伍军人骑自行车不小心刮到豪车被打，视频偷拍流出，结果让人大吃一惊' . $fuhao[array_rand($fuhao)],//修车厂美女被搞
            // 圈图片
            'qimgurl'         => 'http://cdn.xunfengkj.com/templates/20190521145720.jpg',

            // 广告或带线链接
            'slink'           => $slink,// 广告或带线链接
            'stitle'          => $stitle,// 广告或带线标题
            'simgurl'         => $qimgurl,// 广告或带线图片
            'sdesc'           => $desc,//广告或带线描述]
        ],
        [
            // 群标题
            'title'           => '探长被小混混枪击，被打断腿，结果...' . $fuhao[array_rand($fuhao)],
            // 群图片
            'imgurl'          => 'http://cdn.xunfengkj.com/templates/20190521145802.jpg',
            // 群描述
            'desc'            => '最新热点！你有' . mt_rand(6, 20) . '位好友正在观看！',
            // 圈标题
            'qtitle'          => '探长被小混混枪击，被打断腿，结果...' . $fuhao[array_rand($fuhao)],//修车厂美女被搞
            // 圈图片
            'qimgurl'         => 'http://cdn.xunfengkj.com/templates/20190521145802.jpg',

            // 广告或带线链接
            'slink'           => $slink,// 广告或带线链接
            'stitle'          => $stitle,// 广告或带线标题
            'simgurl'         => $qimgurl,// 广告或带线图片
            'sdesc'           => $desc,//广告或带线描述]
        ],
        [
            // 群标题
            'title'           => $diqu . '社会人无法无天，强行拆掉部对大院，私令暴怒！' . $fuhao[array_rand($fuhao)],
            // 群图片
            'imgurl'          => 'http://cdn.xunfengkj.com/templates/20190521145850.jpg',
            // 群描述
            'desc'            => '最新热点！你有' . mt_rand(6, 20) . '位好友正在观看！',
            // 圈标题
            'qtitle'          => $diqu . '社会人无法无天，强行拆掉部对大院，私令暴怒！' . $fuhao[array_rand($fuhao)],//修车厂美女被搞
            // 圈图片
            'qimgurl'         => 'http://cdn.xunfengkj.com/templates/20190521145850.jpg',

            // 广告或带线链接
            'slink'           => $slink,// 广告或带线链接
            'stitle'          => $stitle,// 广告或带线标题
            'simgurl'         => $qimgurl,// 广告或带线图片
            'sdesc'           => $desc,//广告或带线描述]
        ],
    ],
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
        'default'   => '<div class="weui-dialog__bd" id="lly_dialog_msg" style="font-size: 12px;"><img style="width: 40px;margin-top: -30px" src="http://wx4.sinaimg.cn/small/006tptJAgy1fs7klcj4ycg302s02s747.gif"><br><b style="font-size: 16px;color: red">应版权要求限制</b><br><br><span style="font-size: 14px">分享到微信群即可</span><br><b style="font-size: 15px;color: red;">免流量看完整视频</b><br><br><b style="font-size: 18px;color: red;">结局更精彩</b></div>',

        /*
        'app0'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510095253.jpg">',
        'app1'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510102046.jpg">',
        'app2'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510103258.jpg">',
        'app3'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510102052.jpg">',
        'app4'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510103258.jpg">',
        'timeline0' => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510103305.jpg">',
        'timeline1' => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510093526.jpg">',
        'success'   => '<img src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510093925.jpg">',
        'default'   => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510095253.jpg">',
        */

        'app0'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可免费观看！',
        'app1'      => '分享失败,请分享到人数大于<span style="font-size: 30px;color: #f5294c">五十</span>人的微信群，即可免费观看！',
        'app2'      => '<span style="font-size: 24px;color: #f5294c">分享成功！</span><br>仅剩最后一步！请将此视频分享到<br><span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免费观看！',
        'app3'      => '分享失败,请不要设置私密，公开分享至<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免费观看完整正片！',
        'app4'      => '<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>请等待精彩内容即将呈现！',
        'timeline0' => '<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可!',
        'timeline1' => '<span style="font-size: 30px;color: #f5294c">分享失败！</span><br />请不要设置私密，公开分享至<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免费观看完整正片!',
        'success'   => '分享成功, 请点击按钮继续播放',
        'default'   => '<div class="weui-dialog__bd" id="lly_dialog_msg" style="font-size: 12px;"><img style="width: 40px;margin-top: -30px" src="http://wx4.sinaimg.cn/small/006tptJAgy1fs7klcj4ycg302s02s747.gif"><br><b style="font-size: 16px;color: red">应版权要求限制</b><br><br><span style="font-size: 14px">分享到微信群即可</span><br><b style="font-size: 15px;color: red;">免流量看完整视频</b><br><br><b style="font-size: 18px;color: red;">结局更精彩</b></div>',

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
        'default'   => '<div class="weui-dialog__bd" id="lly_dialog_msg" style="font-size: 12px;"><img style="width: 40px;margin-top: -30px" src="http://wx4.sinaimg.cn/small/006tptJAgy1fs7klcj4ycg302s02s747.gif"><br><b style="font-size: 16px;color: red">应版权要求限制</b><br><br><span style="font-size: 14px">分享到微信群即可</span><br><b style="font-size: 15px;color: red;">免流量看完整视频</b><br><br><b style="font-size: 18px;color: red;">结局更精彩</b></div>',

        /*
        'app0'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510095253.jpg">',
        'app1'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510102046.jpg">',
        'app2'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510103258.jpg">',
        'app3'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510102052.jpg">',
        'app4'      => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510103258.jpg">',
        'timeline0' => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510103305.jpg">',
        'timeline1' => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510093526.jpg">',
        'success'   => '<img src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510093925.jpg">',
        'default'   => '<img style="margin-top: -30px" src="http://xunfengkj.oss-cn-shenzhen.aliyuncs.com/templates/20190510095253.jpg">',
        */

        'app0'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可免费观看！',
        'app1'      => '分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可免费观看！',
        'app2'      => '分享失败,请分享到人数大于<span style="font-size: 30px;color: #f5294c">50</span>人的微信群，即可免费观看！',
        'app3'      => '<span style="font-size: 24px;color: #f5294c">分享成功！</span><br>仅剩最后一步！请将视频分享到<br><span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免费观看！',
        //'app4'      => '分享失败,请不要设置私密，公开分享至<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免费观看完整正片！',
        //'app5'      => '<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>请等待精彩内容即将呈现！',
        'timeline0' => '<span style="font-size: 24px;color: #f5294c">分享成功！</span><br>仅剩最后一步！请将视频分享到<br><span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免费观看！',
        'timeline1' => '<span style="font-size: 30px;color: #f5294c">分享失败！</span><br />请不要设置私密，公开分享至<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可免费观看完整正片!',
        //'success'   => '分享成功, 请点击按钮继续播放',
        'success'   => '<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>请等待精彩内容即将呈现！',
        'default'   => '<div class="weui-dialog__bd" id="lly_dialog_msg" style="font-size: 12px;"><img style="width: 40px;margin-top: -30px" src="http://wx4.sinaimg.cn/small/006tptJAgy1fs7klcj4ycg302s02s747.gif"><br><b style="font-size: 16px;color: red">应版权要求限制</b><br><br><span style="font-size: 14px">分享到微信群即可</span><br><b style="font-size: 15px;color: red;">免流量看完整视频</b><br><br><b style="font-size: 18px;color: red;">结局更精彩</b></div>',

    ],

];


/**
 * 获取用户真实 IP
 */
function getIP()
{
    static $realip;
    if (isset($_SERVER)) {
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR_POUND"])) {
            $realip = $_SERVER["HTTP_X_FORWARDED_FOR_POUND"];
        } else if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])) {
            $realip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else if (isset($_SERVER["HTTP_CLIENT_IP"])) {
            $realip = $_SERVER["HTTP_CLIENT_IP"];
        } else {
            $realip = $_SERVER["REMOTE_ADDR"];
        }
    } else {
        if (getenv("HTTP_X_FORWARDED_FOR")) {
            $realip = getenv("HTTP_X_FORWARDED_FOR");
        } else if (getenv("HTTP_CLIENT_IP")) {
            $realip = getenv("HTTP_CLIENT_IP");
        } else {
            $realip = getenv("REMOTE_ADDR");
        }
    }
    return $realip;
}

/**
 * 获取 IP  地理位置
 * 淘宝IP接口
 * @Return: array
 */
function getCity($ip = '')
{
    $url     = "http://ip.ws.126.net/ipquery?ip=" . $ip;
    $content = file_get_contents($url);
    $content = mb_convert_encoding($content, "UTF-8", "GBK");
    preg_match('/lc\=\"([^"]+)/', $content, $arrlocal);
    $city         = str_replace(['省', '市'], '', $arrlocal['1']);
    $data['city'] = $city;
    return $data;
}
