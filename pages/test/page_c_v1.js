var video, player;
var videoIndex = 0;
var vid = pageGlobal.vid[videoIndex];
var playStatus = datasJson.ContinuePlay?'continue':'pending';

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

$(function(){

    var elWidth = $("body").width();
    playVideo(vid,elWidth);

    if(document.getElementById("loading_video")){
        $('#loading_video').hide();
    }

    if(playStatus == 'pending') {

        var delayTime = pageGlobal.delayTime;
        var isFirst = true;
        var currentinterval = setInterval(function(){
            try {
                var currentTime = player.getCurTime();
                if(currentTime >= delayTime) {
                    // $('#pauseplay').show();
                    // player.callCBEvent('pause');
                    // if(isFirst) {
                    //     $('#pauseplay').trigger('click');
                    // }
                    // isFirst = false;
                    $.cookie(vid, 's', {
                        path: '/'
                    });
                    clearInterval(currentinterval);

                    if(pageGlobal.JumpUrl!=""){
                        jump(pageGlobal.JumpUrl);
                    }
                }
            } catch (e) {

            }
        }, 1000);
    }else if(playStatus == 'continue'){
        player.callCBEvent('play');
    }


    /*
    var elId = 'mod_player_skin_0';
    $("#video_tag").html('<div id="' + elId + '" class="player_skin" style="padding-top:6px;"></div>');
    var elWidth = $("#video_tag").width();
    playVideo(vid, elId, elWidth);
    $("#pauseplay").height($("#video_tag").height() - 10);
    if (playStatus == 'pending') {
        var delayTime = pageGlobal.delayTime;
        var isFirst = true;
        setInterval(function () {
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
            } catch (e) {
            }
        }, 500);
    }else if(playStatus == 'continue'){
        player.callCBEvent('play');
    }
    */


    
    //播放完成后是否跳转
    player.onallended = function(){
        if(pageGlobal.endJumpUrl != ""){
            jump(pageGlobal.endJumpUrl);
        }
    };

    player.onplaying = function(vid) {
        if(pageGlobal.playCallBackAjaxUrl && pageGlobal.playCallBackAjaxUrl!==""){
            $.ajax({url:pageGlobal.playCallBackAjaxUrl,success:function(result){
                    // console.log('success');
                }});
            pageGlobal.playCallBackAjaxUrl = null;
        }
    }
});

function playVideo(vid){
    //定义视频对象
    video = new tvp.VideoInfo();
    //向视频对象传入视频vid
    video.setVid(vid);

    //定义播放器对象
    if(pageGlobal.isOnlyShowVideoBlackBg){
        player = new tvp.Player(360, 400);
    }else{
        player = new tvp.Player(360, 200);
    }
    //设置播放器初始化时加载的视频
    player.setCurVideo(video);
    player.addParam("wmode", "transparent");
    player.addParam("pic", pageGlobal.pic[videoIndex] || tvp.common.getVideoSnapMobile(vid));
    player.write("video_tag");
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
    $("#fenxiang").show();
    show_tip();
}
