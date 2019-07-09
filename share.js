var intoAppBackGroundTime = 0;

$(function () {
    if (tip == 'ok') {
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                intoAppBackGroundTime = new Date().getTime();
            }
        });
        wxconfig();
        setTimeout('jssdk()', 200);
    } else {
        hideShare();
    }

    $('#fenxiang').on('click', function() {
        show_tip();
    });
});

function jssdk() {
    $("#fenxiang").show();
    show_tip();
}

function hideShare() {
    // 隐藏分享按钮
    function hide () {
        try {
            wx.hideOptionMenu();
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
}
