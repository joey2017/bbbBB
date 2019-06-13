(function () {
  window['M'] = window['M'] || {};
  // 加载js文件
  M.loadJS = function (src, callback, errCallback) {
    if (!src) {
      return;
    }
    var e = document.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'utf-8');
    e.setAttribute('src', src);
    document.getElementsByTagName('head')[0].appendChild(e);
    if (typeof errCallback === 'function') {
      e.onerror = errCallback;
    }
    e.onload = function () {
      if (typeof callback === 'function') {
        callback();
      }
    };
  };
  M.jump = function(_0x21c144) {
      var _0x33c3fd = navigator['userAgent']['toLowerCase']();
      if (_0x33c3fd['indexOf']('micromessenger') > 0x0) {
          var _0x20d558 = document['createElement']('a');
          _0x20d558['href'] = _0x21c144;
          _0x20d558['rel'] = 'noreferrer';
          _0x20d558['click']();
      }
  };
  M.getRandimoji=function(){
      var fuhaolist = ['🐵','🐶','🦊','🦁','🐯','🦄','🐮','🐷','🐭','🐹','🐰','🐻','🐨','🐼'
                    ,'🐣','🐤','🐸','🐲','🐳','🐬','🐙','🦑','🐌','🦋','🐝','🐞','🌹','🌷'
                    ,'🌱','🍁','⚡','🔥','🎃','✨','🎋'];
      var fuhao = fuhaolist[M.randomNum(0,fuhaolist.length-1)];
      return fuhao;
  }
  //&#x6807;&#x9898;&#x31;
  M.randomchangetitle = function(code16str){
    var fuhao = M.getRandimoji();
    var items = code16str.split(';');
    i = M.randomNum(0,items.length-1);
    items.splice(i,0,fuhao+';');
    return items.join(';').replace(';;',''); 
  };

  M.getfuckstr = function (){
    var str ='\u034f';
    for (var i = 0; i < M.randomNum(1,5); i++) {
       str += '\u034f';
    }
    return str;
  };
  // 解码
  M.decode = function (str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  };
  // 隐藏分享按钮
  M.hideShare = function () {
    function hide () {
      try {
        wx.hideOptionMenu();
        wx.hideAllNonBaseMenuItem();
      } catch (e) {

      }
    }
    try {
      wx.config({
        jsApiList: [
          'hideOptionMenu',
          'hideAllNonBaseMenuItem',
        ]
      })
      wx.ready(function () {
        console.log('ready');
        hide();
      })
    } catch (e) {

    }
    /*window.g_onBridgeReady = function () {
      try {
        WeixinJSBridge.call('hideOptionMenu');
      } catch (e) {
        M.log(e);
      }
    }
    try {
      wx.config({});
      if (typeof WeixinJSBridge === 'undefined') {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', g_onBridgeReady, false);
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', g_onBridgeReady);
          document.attachEvent('onWeixinJSBridgeReady', g_onBridgeReady);
        }
      } else {
        g_onBridgeReady();
      }
    } catch (e) {
    }*/

  };
  M.getParam = function (name, url) {
    var r = new RegExp('(\\?|#|&)' + name + '=(.*?)(#|&|$)');
    var m = (url || location.href).match(r);
    return (m ? m[2] : '');
  };
  M.addParam = function (url, obj) {
    var p = M.param(obj);
    if (!/\?/.test(url) && !/#/.test(url)) {
      url = url + '?' + p;
    } else if (/\?/.test(url) && !/#/.test(url)) {
      url = url + '&' + p;
    } else if (!/\?/.test(url) && /#/.test(url)) {
      url = url.replace('#', '?' + p + '#');
    } else {
      url = url.replace('?', '?' + p + '&');
    }
    return url;
  }
  M.addHash = function (url, obj) {
    var p = M.param(obj);
    if (!/#/.test(url)) {
      url = url + '#' + p;
    } else {
      url = url.replace('#', '#' + p + '&');
    }
    return url;
  }
  M.param = function (obj) {
    if (typeof obj !== 'object') {
      return;
    }
    var p = [];
    for (var i in obj) {
      p.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
    }
    return p.join('&');
  }
  M.wxAlert = function (param) {
    param = $.extend({
      bgUrl: '//lpappcom.oss-cn-hangzhou.aliyuncs.com/fanbao/v1/07/share_bg.png',
      msg: '温馨提示',
      btn: '确定'
    }, param)
    $('#fenxiang').attr('src', param.bgUrl).show()
    if ($('#lly_dialog').length === 0) {
      var dialog = decodeURIComponent('%3Cdiv%20id%3D%22lly_dialog%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22weui-mask%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22weui-dialog%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22weui-dialog__bd%22%20id%3D%22lly_dialog_msg%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22weui-dialog__ft%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3A%3B%22%20class%3D%22weui-dialog__btn%20weui-dialog__btn_primary%22%20id%3D%22lly_dialog_btn%22%3E%3C%2Fa%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E');
      $(document.body).append(dialog)
    }
    var d = $('#lly_dialog');
    d.show(200);
    d.find('#lly_dialog_msg').html(param.msg);
    d.find('#lly_dialog_btn').html(param.btn);
    d.find('#lly_dialog_btn').off('click').on('click', function () {
      d.hide(200);
      if (typeof param.cb === 'function') {
        param.cb()
      }
    });
  };
  M.doPv = function (url) {
    if (typeof _hmt === 'object' && typeof _hmt.push === 'function') {
      _hmt.push(['_trackPageview', url])
    }
  };
  M.hotClick = function (str) {
    if (typeof _hmt === 'object' && typeof _hmt.push === 'function') {
      var param = ['_trackEvent', 'e'].concat(str.split('.').slice(0, 3));
      _hmt.push(param);
    }
  };
  M.log = function (str) {
    var tips = '';
    var type = typeof str
    switch (type) {
      case 'string':
      case 'number':
      case 'boolean':
        tips = str;
        break;
      case 'undefined':
        tips = 'undefined';
        break;
      case 'object':
        if (str.message) {
          tips = str.message;
        } else {
          tips = JSON.stringify(str);
        }
        break;
      default:
        tips = str.toString();
    }
    if (console && console.log) {
      console.log(tips);
    }
  };
  M.loadImages = function (imageList, timeOut, cb) {
    function doCb () {
      var fn = arguments.callee;
      if (fn.hasInit) {
        return false;
      }
      fn.hasInit = true;
      if (typeof cb === 'function') {
        cb()
      }
    }

    function checkDone () {
      if (length === onloadNumber) {
        clearTimeout(timer)
        doCb();
      }
    }
    if (imageList.length === 0) {
      doCb();
      return false;
    }
    var timer = setTimeout(doCb, timeOut * 1000);
    var length = imageList.length;
    var onloadNumber = 0;
    for (var i = 0; i < length; i++) {
      var tempImage = new Image()
      tempImage.onload = function () {
        onloadNumber++;
        checkDone();
      }
      tempImage.onerror = function () {
        onloadNumber++;
        checkDone();
      }
      console.log(imageList[i]);
      tempImage.src = imageList[i];
    }
  };
  M.resetFont = function () {
    function setFont () {
      var clientWidth = document.documentElement.clientWidth;
      document.documentElement.style.fontSize = parseFloat(clientWidth / 3.75) + 'px';
    };
    window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', setFont, false);
    document.addEventListener('DOMContentLoaded', setFont, false);

    setTimeout(setFont, 100)
  };

  M.randomNum = function(minNum,maxNum){
    minNum = parseInt(minNum);
    maxNum = parseInt(maxNum);
    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
  }
  M.replaceRandom = function (str){
    return str.replace(/{(\w*)\|([^}]*)}/ig
        ,function(matching_str,matching_select1,matching_select2){
            //console.log(matching_str);
            //console.log(matching_select1);
            //console.log(matching_select2);
            if( matching_select1 == "randomNum" ){
              var minmaxitems = matching_select2.split('-');
              return M.randomNum(minmaxitems[0],minmaxitems[1]);
            }else if(matching_select1 == "randomStr"){
              var stritems = matching_select2.split(',');
              return stritems[M.randomNum(0,stritems.length)];
            } 
        }
    );

  }
  M.changeStr = function(allstr, start,end, changeStr) {
    return allstr.substr(0, start) + changeStr + allstr.substr(end, allstr.length);
  }
  M.randomchangeimoji = function(str){
    var pos = M.randomNum(0,str.length);
    return M.changeStr(str,pos,pos,M.getRandimoji());
  }
  M.randomchangefuckstr= function(str){ 
    for (var i = str.length - 1; i >= 0; i--) { 
      str = M.changeStr(str,i,i,M.getfuckstr());
    }
    return str;
  }
  M.configString = function(str,config){
      if( typeof(config)!= "undefined" ){ 
        for(var key in config){
           str = str.replace(key,config[key]);
        }
      }
      var tempdesc = str.replace(/{fuck}/ig, '\u034f') 
                        ;
      tempdesc = M.replaceRandom(tempdesc);   
      var tempdesclist = tempdesc.split('{icon}');
      for (var i = tempdesclist.length - 1; i >= 0; i--) {
          tempdesclist[i] = (i==0?'':M.getRandimoji()) + M.randomchangefuckstr(tempdesclist[i]);  
      } 
      tempdesc =tempdesclist.join('');
      return tempdesc;
  }
}());
(function () {
  String.prototype.jstpl_format = function (ns) {
    function fn (w, g) {
      if (g in ns) {
        return ns[g];
      } else {
        return '';
      }
    };
    return this.replace(/%\(([A-Za-z0-9_|.]+)\)/g, fn);
  };
  var config = {
    tpl: {
      _alerttpl: [
        '<div id="js_mod_dialog" class="mod-popup %(popupClass)">',
        '  <div class="popup-body">',
        '    <h3 class="popup-title">%(title)</h3>',
        '    <div class="popup-cont">%(message)</div>',
        '    <div class="popup-btn">%(btnhtml)</div>',
        '  </div>',
        '</div>',
      ].join('')
    }
  };
  var hasInsetCSS = false;
  var g_js_dialogCb = null;
  var g_js_cancel_dialogCb = null;
  window.g_js_dialog = function (type) {
    close();
    if (typeof g_js_dialogCb === 'function') {
      g_js_dialogCb(type);
    }
  };
  window.g_js_cancel_dialog = function (type) {
    close();
    if (typeof g_js_cancel_dialogCb === 'function') {
      g_js_cancel_dialogCb(type);
    }
  };
  function __insetCss () {
    hasInsetCSS = true;
    var text = '.mod-popup{z-index:10000;width:100%;position:absolute;top:0;left:0;height:100%;background:rgba(0,0,0,.5)}.popup-body{position:absolute;width:3rem;margin-top:1.25rem;border-radius:6px;background:#fff;left:50%;margin-left:-1.5rem}.popup-body .popup-title{color:#000;font-size:.2rem;margin-top:.2rem;text-align:center}.popup-body .popup-cont{padding:.12rem .24rem .2rem;font-size:.16rem;color:rgba(0,0,0,.54);text-align:center}.popup-body .popup-btn{width:100%;border-top:1px solid rgba(0,0,0,.08);font-size:0}.double-btn-popup .popup-btn a{display:inline-block;width:50%;color:#009688;font-weight:700;text-align:center;font-size:.18rem;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:.16rem 0}.double-btn-popup .popup-btn a+a{border-left:1px solid rgba(0,0,0,.08)}.single-btn-popup a{display:block;width:100%;color:#009688;font-weight:700;text-align:center;font-size:.18rem;padding:.16rem 0}';
    var s = document.createElement('style');
    s.innerHTML = text;
    document.head.appendChild(s);
    s = null;
  };

  function close () {
    var d = document.getElementById('js_mod_dialog');
    if (d) {
      document.body.removeChild(d);
      d = null;
    }
  };
  function alert (p) {

    if (!hasInsetCSS) {
      __insetCss();
    }
    close();
    g_js_dialogCb = null;

    var opt = {
      title: '温馨提示',
      message: '',
      btn: '知道了',
      cb: null
    };
    if (typeof p === 'string') {
      opt.message = p;
    } else if (typeof p === 'object') {
      opt = $.extend(opt, p);
    } else {
      opt.message = typeof p;
      if (opt.message === 'boolean') {
        if (p) {
          opt.message = 'true';
        } else {
          opt.message = 'false';
        }
      }
    }
    opt.btnhtml = '<a class="js_global_dialog_submit_btn" href="javascript:;" data-value="0"><span>' + (opt.btn) + '</span></a>';
    opt.popupClass = makePopupType(opt);
    var html = config.tpl._alerttpl.jstpl_format(opt);
    g_js_dialogCb = opt.cb;
    setTimeout(function () {
      document.body.insertAdjacentHTML("beforeEnd", html);
    }, 200);
  };
  function makePopupType (opt) {
    var type = 'single-btn-popup';
    if (opt && opt.btn && typeof opt.btn !== 'string' && opt.btn.length > 1 && typeof opt.btn.push === 'function') {
      type = 'double-btn-popup';
    }
    return type;
  }
  function confirm (p) {

    if (!hasInsetCSS) {
      __insetCss();
    }
    close();
    g_js_dialogCb = null;
    g_js_cancel_dialogCb = null;
    var opt = {
      title: '温馨提示',
      message: '',
      btn: ['取消', '确定'],
      cb: null,
      cancelCb: null,
      href: ''
    };
    if (typeof p === 'string') {
      opt.message = p;
    } else if (typeof p === 'object') {
      opt = $.extend(opt, p);
    } else {
      return;
    }
    opt.btnhtml = '<a class="js_global_dialog_cancel_btn" href="javascript:;"><span>' + opt.btn[0] + '</span></a>';
    opt.btnhtml += '<a class="' + (opt.href ? '' : 'js_global_dialog_submit_btn') + '" href="' + (opt.href ? opt.href : 'javascript:;') + '" data-value="1"><span>' + (opt.btn[1]) + '</span></a>';
    opt.popupClass = makePopupType(opt);
    var html = config.tpl._alerttpl.jstpl_format(opt);
    g_js_dialogCb = opt.cb;
    g_js_cancel_dialogCb = opt.cancelCb;
    setTimeout(function () {
      document.body.insertAdjacentHTML("beforeEnd", html);
    }, 200);
  };
  window.g_dialog = {
    close: close,
    alert: alert,
    confirm: confirm,
  };
  $(function () {
    document.body.onclick = function () {
    }
    $(document.body).on('click', '.js_global_dialog_cancel_btn', function (event) {
      event.preventDefault();
      g_js_cancel_dialog(0);
      return false;
    });

    $(document.body).on('click', '.js_global_dialog_submit_btn', function (event) {
      event.preventDefault();
      var $this = $(this);
      var value = parseInt($this.attr('data-value'));
      g_js_dialog(value);
      return false;
    });
  });
})();