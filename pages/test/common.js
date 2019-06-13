$(function(){
    $('#mainVideoTitle').text(pageGlobal.videoTitle[videoIndex]);
});

loadingMore();

function vuxalert(n, i, b) {
    var r, u;
    r = '<div class="weui_dialog_alert" style="position: fixed; z-index: 2000; display: none;margin-left:15%;margin-right:15%">';
    r += '<div class="weui_mask"><\/div>';
    r += '<div class="weui_dialog">';
    r += '<i class="weui_close"><svg t="1540783423798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="s="http://www.w3.org/2000/svg" p-" p-id="1931" xmlns:xlink="k="http://www.w3.org/1999/xlink" wi" width="25" height="25"><path style="fill:#666;" d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881ZM795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z" p-id="1932"></path></svg></i>';
    r += '<div class="weui_dialog_hd"><strong class="weui_dialog_title"><\/strong><\/div>';
    r += '<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"><\/div>';
    r += '<div class="weui_dialog_ft">';
    r += '<a href="javascript:;" class="weui_btn_dialog primary">好<\/a>';
    r += "<\/div>";
    r += "<\/div>";
    r += "<\/div>";
    $(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(r));
    u = $(".weui_dialog_alert");
    u.show();
    u.find(".weui_dialog_bd").html(n);
    u.find(".weui_btn_dialog").html(b ? b : "好的");
    u.find(".weui_btn_dialog").off("click").on("click", function() { u.hide();
        i && i() });
    u.find(".weui_close").off("click").on("click", function() { u.hide(); }); 
}

// 公告滚动js
function _gggd(){
    if(!document.getElementById("moocBox")) return false;
    var area = document.getElementById('moocBox');  
    var iliHeight = 20;
    var speed = 10;
    var time;  
    var delay= 1500;
    area.scrollTop=0;  
    area.innerHTML+=area.innerHTML;
    function startScroll(){  
        time=setInterval(function(){  
            if(area.scrollTop % iliHeight==0){
                clearInterval(time);  
                setTimeout(startScroll,delay);  
            }else{  
                area.scrollTop++;  
                if(area.scrollTop >= area.scrollHeight/2){  
                    area.scrollTop =0;  
                }  
            }  
        },speed);  
        area.scrollTop++;  
    }    
    setTimeout(startScroll,delay);
}

function inToAd(){
    jump(pageGlobal.adLink);
}

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
					'<button class="sure" onclick="go_share(1)">去分享参与抽奖</button>'+
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
    if(pageGlobal.JumpUrl != ""){
        jump(pageGlobal.JumpUrl);
    }
}

//点击加载更多视频
function loadingMore(){

    $('#video_list .more').hide();

    var eachPageCount = datasJson.Data.VideoList.ShowCount;
    var videoCount = datasJson.Data.VideoList.Videos.length;

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
        newV.setAttribute("href", datasJson.Data.VideoList.Videos[i].JumpUrl);
        newV.setAttribute("class", "list_con");
        newV.setAttribute("rel", "noreferrer");

        var listV = '<div class="list_img"><img src='+datasJson.Data.VideoList.Videos[i].PicUrl+' alt="">' +
            '<div style="position:absolute;top:0;left:0;width:100%;height:100%;display: flex;align-items: center;justify-content: center">'+
            '<img style="width:24px;height:24px;" src="http://cdn2.gerenwang.net/web/videocase/luodi/luodi1_files/playIcon.png">'+
            '</div>'+
            '<div class="core">'+ (Math.random()*(7-10) + 10).toFixed(1) +'</div></div>'+
            '<div style="flex: 1;">'+
            '<div class="title">'+datasJson.Data.VideoList.Videos[i].Title+'</div>'+
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



