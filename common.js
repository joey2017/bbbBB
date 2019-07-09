function goPlayVideo(){
    $('#iosDialog').hide();
    player.callCBEvent('play');
}

//点击
function goToShare(){
	var shareDiv = document.createElement("div");
	shareDiv.setAttribute("class", "layer_share_div");
	var sharecon = '<div class="divshare_con">'+
        			'<img  onclick="go_share(0)" style="width:100%;" src="http://cdn2.gerenwang.net/web/videocase/luodi/luodi1_files/shareTipBg.png">'+
					'<div class="divshare_btn">'+
        			'<img  style="opacity: 0.7;color:#000;background-color: #fce143;position: absolute;right:6px;top:8px;width:40px;"  onclick="clickCancel()"  src="http://cdn2.gerenwang.net/web/videocase/luodi/luodi1_files/shareTipsClose.png">'+
					'<button class="sure" onclick="go_share(1)">去领取红包大奖</button>'+
					'</div>'+
					'</div>';
	shareDiv.innerHTML = sharecon;
	document.body.appendChild(shareDiv);
}


function clickCancel(){
	var layer_share = document.querySelector(".layer_share_div");
	document.body.removeChild(layer_share);
}
function go_share(type){
    //type 0=分享有礼/转盘图片 1=分享有礼/分享文字
    //$('#pauseplay').trigger('click');
    if(pageGlobal.JumpUrl != ""){
        jump(pageGlobal.JumpUrl);
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

//点击加载更多视频
function loadingMore(){

    $('#video_list .more').hide();

    var eachPageCount = datasJson.VideoList.ShowCount;
    var videoCount = datasJson.VideoList.Videos.length;

    var startP = pageGlobal.showPageIndex*eachPageCount;
    var endP = 0;
    pageGlobal.showPageIndex += 1;
    var isAddMore = false;
    if(pageGlobal.showPageIndex*eachPageCount>=videoCount){
        endP = videoCount;
	}else{
        isAddMore = true;
        endP = pageGlobal.showPageIndex*eachPageCount;
	}

    for (var i = startP;i<endP;i++){

        var listC = document.getElementById("video_list");
        var newV = document.createElement("a");
        newV.setAttribute("href", datasJson.VideoList.Videos[i].JumpUrl);
        newV.setAttribute("class", "list_con");
        newV.setAttribute("rel", "noreferrer");
        newV.setAttribute("onclick", "_czc.push(['_trackEvent', '视频', '播放', '"+ datasJson.VideoList.Videos[i]['Title'] + "','','次数'])");

        var listV = '<div class="list_img"><img src='+datasJson.VideoList.Videos[i].PicUrl+' alt="">' +
            '<div style="position:absolute;top:0;left:0;width:100%;height:100%;display: flex;align-items: center;justify-content: center">'+
            '<img style="width:24px;height:24px;" src="http://cdn2.gerenwang.net/web/videocase/luodi/luodi1_files/playIcon.png">'+
            '</div>'+
            '<div class="core">'+ (Math.random()*(7-10) + 10).toFixed(1) +'</div></div>'+
            '<div style="flex: 1;">'+
            '<div class="title">'+datasJson.VideoList.Videos[i].Title+'</div>'+
            '<div class="list_tag">'+ (Math.random()*(20-200) + 200).toFixed(1) +'万次播放</div>'+
            '</div>';
        newV.innerHTML = listV;
        listC.appendChild(newV);
	}

	if(isAddMore){
        var moreView = '<div class="more" onclick="loadingMore()">&nbsp;&nbsp;&nbsp;&nbsp;查看更多<img src="http://cdn2.gerenwang.net/web/videocase/luodi/luodi1_files/more_icon.png" class="more_icon"></div>';
        $("#video_list").append(moreView);
	}
}



