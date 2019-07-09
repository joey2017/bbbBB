var video, player;
var vid = pageGlobal.vid[videoIndex];
var sp_time = pageGlobal.delayTime[videoIndex];
var playStatus = 'pending';

if (getCookie(vid + '_delaytime') == null) {
    setCookie(vid + '_delaytime', sp_time);
}

if (tip == 'goon') {
    setCookie(vid + '_delaytime', '9999');
    playStatus = 'continue';
}

$(function(){

    $('#mainVideoTitle').text(datasJson.VideoList.Videos[videoIndex]['Title']);
    document.title = datasJson.VideoList.Videos[videoIndex]['Title'];

    loadingMore();

    $('#pauseplay').on('click', function() {
        setCookie('xxxooo', '1');
        $.post(apidomain, {
            index: 'ok',
            audkey: videoIndex
        }, function(res) {
            console.log(res);
            location.href = res.url;
        }, 'JSON');
    });

    var elWidth = $("body").width();
    playVideo(vid,elWidth);

    if(document.getElementById("loading_video")){
        $('#loading_video').hide();
    }

    if(playStatus == 'pending') {
        var delayTime = parseInt(getCookie(vid + '_delaytime'));
        var isFirst = true;
        setInterval(function(){
            try {
                var currentTime = player.getCurTime();
                if(currentTime >= delayTime) {
                    $('#pauseplay').show();
                    player.callCBEvent('pause');
                    if(isFirst) {
                        $('#pauseplay').trigger('click');
                    }
                    isFirst = false;
                }
            } catch (e) {

            }
        }, 500);
    }else if(playStatus == 'continue'){
        window.onload = function (ev) {
            var timer = setTimeout(function(){
                try {
                    player.callCBEvent('setPlaytime',pageGlobal.delayTime[videoIndex]);
                } catch (e) {
                    console.log(e)
                }
            }, 100);
        }

    }

    setTimeout(function() {
        history.pushState(history.length + 1, "message", "#" + new Date().getTime());
    }, 200);
    
    //播放完成后是否跳转
    player.onallended = function(){
        setTimeout(function(){
            ggcash('fanhui')
        }, 1000);
    };

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
    player.addParam("pic", datasJson.VideoList.Videos[videoIndex]['PicUrl'] || tvp.common.getVideoSnapMobile(vid));
    player.write("video_tag");
}