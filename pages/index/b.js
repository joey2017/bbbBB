!function (global, factory) {
    global.NewTxplayer = factory();
}(window, function () {
    return function (obj2) {
        var _this = this;
        var start = 0;
        var video = new tvp.VideoInfo();
        video.setVid(obj2.vid);
        var player = new tvp.Player();
        var pic = video.getVideoSnap();
        var pict = pic[2];
        if (obj.p != "0") {
            pict = obj.p;
        }
        ;
        player.create({
            width: '100%',
            height: 200,
            video: video,
            modId: obj2.modId,
            pic: pict,
            onplaying: function () {
                if (start == 0) {
                    start = 1;
                    _this.Playtime();
                }
            },
            onplay: function () {
                if (obj2.story == 'no') {
                    video.setHistoryStart(3);
                } else {
                    video.setHistoryStart(obj2.currtime);
                }
            },
            onended: function () {
                window.location.href = obj.end;
            }
        });
        _this.Playtime = function () {
            var currtime = setInterval(function () {
                var pt = parseInt(player.getPlaytime());
                // console.log(pt,obj2.currtime);
                if (pt >= obj2.currtime && obj2.story == 'no') {
                    clearInterval(currtime);
                    _this.PlayStart();
                }
            }, 1000);
        };
        _this.PlayStart = function () {
        };
        if (obj.chun == '1') {
            if (obj.dump == '120000') {
                setTimeout(function () {
                    wxalert('<img style="width: 40px;margin-top: -40px" src="https://img30.360buyimg.com/jdsurvey/jfs/t1/8021/39/1048/10987/5bcc7926E2238cfd2/11eab6adefa4290d.gif"><br>\u2b50\u2b50\u2b50\u2b50\u2b50<br/><b style="color: red;font-size: 20px;">分享完成\ud83d\udc4c欢迎您回来</b><br/><b style="color:blue">' + $('.t').text() + '</b>', '继续收看', function () {
                        player.play();
                    });
                }, 500);
            } else {
                setTimeout(function () {
                    wxalert('<img style="width: 40px;margin-top: -40px" src="https://img30.360buyimg.com/jdsurvey/jfs/t1/8021/39/1048/10987/5bcc7926E2238cfd2/11eab6adefa4290d.gif"><br>\u2b50\u2b50\u2b50\u2b50\u2b50<br/><b style="color: red;font-size: 18px;">最新火爆视频\ud83d\udd25</b><b style="color:blue">【' + city + '拍摄】<br/>' + $('.t').text() + '</b>', '立即播放', function () {
                        player.play();
                    });
                }, 500);
            }
        }
    }
});

function rrjks() {
    var pardiv = document.getElementById("videoBotAd");
    pardiv.style.display = "none";
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function wxalert(n, b, i) {
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
    u.find(".weui_btn_dialog").off("click").on("click", function () {
        u.hide();
        i && i()
    });
    u.find(".weui_close").off("click").on("click", function () {
        u.hide();
    });
}