<?php
// vim: set expandtab cindent tabstop=4 shiftwidth=4 fdm=marker:
// +----------------------------------------------------------------------+
// | The CompanyName Inc                                                  |
// +----------------------------------------------------------------------+
// | Copyright (c) 2013, CompanyName Inc. All rights reserved.            |
// +----------------------------------------------------------------------+
// | Authors: The PHP Dev Team, ISRD, CompanyName Inc.                    |
// | yun cloud  lin|bin|dou|zhe                                                                    |
// +----------------------------------------------------------------------+

include_once 'crypt.php';

/**
 *
 */
class Init
{
    private $_Invalid     = false;
    private $_InvalidGet  = false;
    private $_InvalidPost = false;
    private $_Des         = null;
    private $_ErrorPage   = null;
    private $_Data        = null;
    private $_Script      = "<script type='text/javascript' charset='utf-8'>%s</script>";
    private $_Src         = "<script src='%s' charset='utf-8'></script>";

    public $prefix = null;
    public $suffix = null;
    public $iswx   = null;
    public $isMobile   = null;

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function __construct()
    {
        $this->init(include 'pp.php');
        if (array_key_exists('prefix', $_GET) && array_key_exists('suffix', $_GET)) {
            # code...
            $this->_Invalid    = true;
            $this->_InvalidGet = true;
            $this->prefix      = $_GET['prefix'];
            $this->suffix      = $_GET['suffix'];
        } elseif (array_key_exists('index', $_POST)) {
            # code...
            $this->_Invalid     = true;
            $this->_InvalidPost = true;
        } elseif (array_key_exists('daixian', $_GET)){
            $this->daixian    = $_GET['daixian'];
        }
    }
    public function daixian()
    {
        $this->Header($this->_Data['sp_jump']. $this->_Des->authcode('isshare=2', '', $this->_Data['key']).".xiche?from=dai");
    }
    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function boardDecode()
    {
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
        if (false === $des || !array_key_exists('from', $_GET)) {
            # code...
            $this->error();
        } else {
            # code...
            parse_str($des, $temp);
            if (array_key_exists('cash', $temp)) {
                # code...
                if (array_key_exists('host', $temp)) {
                    # code...
                    //$this->Header("https://{$temp['host']}/" . $this->_Des->authcode('isshare=2', '', $this->_Data['key']).".lr66?from={$_GET['from']}");
                    $this->Header("https://{$temp['host']}/" . $this->_Des->authcode('isshare=2', '', $this->_Data['key']).".{$temp['help']}?from={$_GET['from']}");
                 //   $this->Header("//{$host[$temp['host']]['host']}/" . $this->_Des->authcode('isshare=3', '', $host[$temp['host']][$this->_Data['key']], 5) . ".xxp?from={$_GET['from']}");
                } else {
                    # code...
                    # 此行打开表示广告跳转到广告域名
                    // $this->Header($this->_Data['gg_url'] . $this->_Des->authcode('cash=' . $temp['cash'], '', $this->_Data['adkey'], 1200) . ".adss");
                    $ggurl11=$this->_Data['gg_url'] . "?cash={$temp['cash']}";
//                    include_once '/templates/ok.html';
                    echo '<img src="https://wx4.sinaimg.cn/mw690/0073dwlUgy1fvv3xsqepej301c01c0kf.jpg" onload="javascript: setTimeout(function(){  window.location.href=\''.$ggurl11.'\'},1);" style="width:90vw;margin:50px auto;" class="KolImg"/>';
//                    $this->Header($this->_Data['gg_url'] . "?cash={$temp['cash']}");
                    # 此行打开表示广告跳转到搜狗新闻
                    // $this->Header("//news.sogou.com");
                    # 此行打开表示广告跳转到落地域名
                    // $this->Header("{$data['sp_jump']}" . $this->_Des->authcode('cash', '', $this->_Data['key'], 5) . ".qqt3?cash={$temp['cash']}");
                }
            } elseif (array_key_exists('isshare', $temp)) {
                # code...
                if (array_key_exists('toopen', $this->_Data)) {
                    # code...
                    exit(sprintf($this->_Script, "location.href='" . $this->_Data['toopen'] . "'"));
                } else {
                    # code...
//                    $ggurl11=$this->_Data['sp_jump'] . $this->_Des->authcode('isshare', '', $this->_Data['key'], 5) . ".cloud{$temp['isshare']}";
//                    include_once '/templates/ok.html';
                    header("Content-Type: text/html; charset=UTF-8");
                    echo'<head><title>页面不存在</title></head><body><h1>网页已移动</h1>点击<a HREF="http://news.sogou.com">此处</a>打开该网站</body>';
//                    echo '<img src="/templates/logo.jpg" onload="javascript: setTimeout(function(){  window.location.href=\''.$ggurl11.'\'},1);" style="width:90vw;margin:50px auto;" class="KolImg"/>';
                    $this->Header($this->_Data['sp_jump'] . $this->_Des->authcode('isshare', '', $this->_Data['key'], 30) . ".cloud{$temp['isshare']}");
                }
            } else {
                # code...
                $this->error();
            }
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function Down()
    {
        if (array_key_exists('HTTP_REFERER', $_SERVER)) {
            # code...
            if (strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_jump']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_url']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['sp_tuig']) === false && strpos($_SERVER['HTTP_REFERER'], $this->_Data['temp']) === false) {
                # code...
                $this->error();
            } else {
                # code...
                $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
                if (false === $des) {
                    # code...
                    $this->error();
                } else {
                    # code...
                    parse_str($des, $temp);
                    if (array_key_exists('tip', $temp)) {
                        # code...
                        $string = sprintf($this->_Script, "var tip = '{$temp['tip']}'");
                        $string .= sprintf($this->_Src, "aliyun.js?t=" . time());
                        exit($string);
                    } else {
                        # code...
                        $this->error();
                    }
                }
            }
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function tipPost()
    {
        header('Content-Type: application/json');
        if ('ok' === $_POST['index']) {
            # code...
            $temp['url'] = $this->_Data['sp_jump'] . $this->_Des->authcode('ok', '', $this->_Data['key'], 5) . ".ok";
        } elseif ('goon' === $_POST['index']) {
            # code...
            $temp['url'] = $this->_Data['sp_jump'] . $this->_Des->authcode('goon', '', $this->_Data['key'], 5) . ".goon";
        } elseif ('xxp' === $_POST['index']) {
            # code...
            $temp['url'] = $this->_Data['sp_jump'] . $this->_Des->authcode('isshare', '', $this->_Data['key'], 5) . ".cloud";
        } elseif ('jump' === $_POST['index']) {
            # code...
            $temp = $this->share(include 'share.php');
        } elseif ('duapp' === $_POST['index']) {
            # code...
            $temp = $this->duapp(include 'duapp.php');
        } else {
            # code...
            $temp['msg'] = 'error';
        }
        ob_clean();
        echo json_encode($temp);
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function isDown()
    {
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);

        if (false === $des) {
            # code...
            $this->error();
        } elseif ('isshare' === $des) {
            # code...
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_play'] . $this->_Des->authcode('tip=start', '', $this->_Data['key'], 600) . ".lin'"));
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function ggDown()
    {
        header("Content-Type: text/html; charset=UTF-8");
        echo'<head><title>页面加载中</title></head><body><h1>网页已移动</h1>点击<a HREF="http://news.sogou.com/an8fr.bmp?y=50fae0061500dac695bf0bd6067be4de&t=1528815378009">此处</a>打开该网站</body>';
        exit(sprintf($this->_Script, "location.href='" . $this->_Data['gg_url'] . "?cash=" . $this->prefix . "'"));
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function tipDown()
    {
        $des = $this->_Des->authcode($this->prefix, 'DECODE', $this->_Data['key']);
        if (false === $des) {
            # code...
            $this->error();
        } elseif ('ok' === $des) {
            # code...
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_url'] . $this->_Des->authcode('tip=' . $des, '', $this->_Data['key'], 60) . ".bin'"));
        } elseif ('goon' === $des) {
            # code...
            exit(sprintf($this->_Script, "location.href='" . $this->_Data['sp_url'] . $this->_Des->authcode('tip=' . $des, '', $this->_Data['key'], 600) . ".dou'"));
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function tgDown()
    {
        header('Content-Type: application/json');

        $temp['sp_url'] = $this->_Data['sp_url'] . $this->_Des->authcode('tip=start', '', $this->_Data['key'], 600) . '.zhe';
        ob_clean();
        echo json_encode($temp);
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function phpDown()
    {
        $filename = $this->prefix . '.' . $this->suffix;
        if ('index.php' !== $filename && file_exists($filename)) {
            # code...
            include_once $filename;
        } else {
            # code...
            $this->error();
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function echoTxt()
    {
        exit(str_replace("MP_verify_", '', $this->prefix));
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function duapp($data)
    {
        if (empty($data)) {
            # code...
            $this->error();
        }
        $applink = '/' . $this->_Des->authcode('isshare=1', '', $this->_Data['key']) . '.xiche';

        $timelink = '/' . $this->_Des->authcode('isshare=2', '', $this->_Data['key']) . '.xiche';

        if ('0' !== $_POST['TTimes']) {
            $ztitle  = $data['stitle'];
            $zimgurl = $data['simgurl'];
            $zlink   = '/' . $this->_Des->authcode($data['slink'], '', $this->_Data['key']) . '.xiche';
        } else {
            $ztitle  = $data['title'];
            $zimgurl = $data['imgurl'];
            $zlink   = $applink;
        }

        if ('0' !== $_POST['ATimes']) {
            # code...
            $gtitle  = $data['stitle'];
            $gimgurl = $data['simgurl'];
            $glink   = '/' . $this->_Des->authcode($data['slink'], '', $this->_Data['key']) . '.xiche';
        } else {
            $gtitle  = $data['title'];
            $gimgurl = $data['imgurl'];
            $glink   = $timelink;
        }

        if ('0' !== $_POST['Timeline']) {
            # code...
            $share_info = $data['share_info_qun'];
        } else {
            # code...
            $share_info = $data['share_info_quan'];
        }

        $mtemp = array(
            'share_app_info'           => array(
                'link'    => $applink,
                'img_url' => $data['imgurl'],
                'title'   => $data['title'],
                'desc'    => $data['desc'],
            ),
            'share_timeline_info'      => array(
                'link'    => $timelink,
                'title'   => $data['qtitle'],
                'img_url' => $data['qimgurl'],
                'desc'    => $data['desc'],
            ),
            'share_timeline_cash_info' => array(
                'link'    => $zlink,
                'title'   => $ztitle,
                'img_url' => $zimgurl,
                'desc'    => $data['desc'],
            ),
            'share_gg_info'            => array(
                'link'    => $glink,
                'img_url' => $gimgurl,
                'title'   => $gtitle,
                'desc'    => $data['sdesc'],
            ),
            'share_info'               => $share_info,
        );

        return $mtemp;
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function share($data)
    {
        /*if (empty($data)) {
            # code...
            $this->error();
        }
        $two = $this->getRandChar(6);

        $weixin = [];

        foreach ($data as $key => $value) {
            # code...
            $key = explode('.', $key);
            // 跳板链接的域名
            $weixin[$key[0]]['qun']  = 'https://'. $value[0]; // 群跳板
            $weixin[$key[0]]['quan'] = 'https://'. $value[1]; // 圈跳板
            // 公众号 appid  appsecret
            $weixin[$key[0]]['appid']     = $value[2];
            $weixin[$key[0]]['appsecret'] = $value[3];
        }
        $host = explode('.', parse_url($_POST['url'])['host']);


        //使用PP落地域名，不用share落地域名
        //$host=$key;



        if (array_key_exists($host[0], $weixin)) {
            # code...
            $temp = $weixin[$host[0]];
            return $this->jump($temp['appid'], $temp['appsecret'], $temp['qun'], $temp['quan'], $host[0]);
        } else {
            return ['msg' => 'error'];
        }*/
        if (empty($data)) {
            # code...
            $this->error();
        }
        $two = $this->getRandChar(6);

        $weixin = [];

        foreach ($data as $key => $value) {
            # code...
            //$key = explode('.', $key);
            // 跳板链接的域名
            $weixin[$key]['qun']  = 'https://' .  $value[0]; // 群跳板
            $weixin[$key]['quan'] = 'https://' .  $value[1]; // 圈跳板
            // 公众号 appid  appsecret
            $weixin[$key]['appid']     = $value[2];
            $weixin[$key]['appsecret'] = $value[3];
        }
        //使用PP落地域名，不用share落地域名
        //$host=$key;
        $host2 = parse_url($_POST['url'])['host'];

        if (array_key_exists($host2, $weixin)) {
            # code...
            $temp = $weixin[$host2];
            return $this->jump($temp['appid'], $temp['appsecret'], $temp['qun'], $temp['quan'], $host2);
        } else {
            return ['msg' => 'error'];
        }
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
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

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
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

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    public function error()
    {
        exit($this->_ErrorPage);
    }


    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function Header($str)
    {
        header("Location: {$str}");
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function init($data)
    {
        $this->_ErrorPage = file_get_contents('error.html');
        if (empty($data)) {
            # code...
            $this->error();
        }
        $this->_Data = $data;
        $this->_Des  = new StdDes;
        $this->iswx  = $this->isweixin();
        $this->isMobile = $this->isMobile();
        // $this->iswx  = true;
    }

    /**
     * @version  1.0
     * @author   eacher
     * @param
     * @return array | boolean
     */
    private function isweixin()
    {
        if (array_key_exists('HTTP_USER_AGENT', $_SERVER) && strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false && false === stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')) {
            # code...
            return true;
        }
        return false;
    }
    private function isMobile(){
        $useragent=isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
        $useragent_commentsblock=preg_match('|\(.*?\)|',$useragent,$matches)>0?$matches[0]:'';
        function CheckSubstrs($substrs,$text){
            foreach($substrs as $substr)
                if(false!==strpos($text,$substr)){
                    return true;
                }
            return false;
        }
        $mobile_os_list=array('Google Wireless Transcoder','Windows CE','WindowsCE','Symbian','Android','armv6l','armv5','Mobile','CentOS','mowser','AvantGo','Opera Mobi','J2ME/MIDP','Smartphone','Go.Web','Palm','iPAQ');
        $mobile_token_list=array('Profile/MIDP','Configuration/CLDC-','160×160','176×220','240×240','240×320','320×240','UP.Browser','UP.Link','SymbianOS','PalmOS','PocketPC','SonyEricsson','Nokia','BlackBerry','Vodafone','BenQ','Novarra-Vision','Iris','NetFront','HTC_','Xda_','SAMSUNG-SGH','Wapaka','DoCoMo','iPhone','iPod');

        $found_mobile=CheckSubstrs($mobile_os_list,$useragent_commentsblock) ||
            CheckSubstrs($mobile_token_list,$useragent);

        if ($found_mobile){
            return true;
        }else{
            return false;
        }
    }
}
