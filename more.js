//  颜色
  var color_i = new Array();
  color_i[0] = '#000';
  color_i[1] = 'red';
  color_i[2] = '#000';
  color_i[3] = 'red';
  color_i[4] = '#000';

  color_i[5] = 'red';
  color_i[6] = '#000';
  color_i[7] = 'red';
  color_i[8] = 'red';
//  文字
    var name_i = new Array();
    name_i[0] = '首富儿子装逼相亲被偷拍，数名男女一起乱搞,结果3名女子竟然出现这种情况……';
    name_i[1] = '退伍兵办公室强干董事长妹妹,视频记录全过程,最后弄她一脸,他哥哥来了竟……';
    name_i[2] = '美女董事长洗车被两男子凌辱,场面极其火爆,从车上到酒店,持续4小时,令人发指……';
    name_i[3] = '同学会上把暗恋已久的校花 灌醉以后带到酒店尽情的蹂躏!最后一个上完竟……';
    name_i[4] = '美女董事长遭流氓调戏，被推倒污辱，不料美女董事长竟反过来和他……';
    name_i[5] = '首富穿保安服卖衣服被服务员羞辱看不起,一个电话后服务员当场下跪……';
    name_i[6] = '富2代和女明星当街互搞，场面被偷.拍,网友搜出富2代身份,父亲竟是...';
    name_i[7] = '情侣主题KTV实战被偷拍,场面极其不堪入目,全网疯传,即将删除,速度观看';

    name_i[8] = '男子亲诉如何一夜让5女同时到达顶峰的终极奥秘！都看看吧,让自己变得更强…...';
//  图片
    var img_i = new Array();
    img_i[0] = 'https://wx2.sinaimg.cn/mw690/9ca26846gy1fwmzeldol2j20ak08cq68.jpg';
    img_i[1] = 'https://qqpublic.qpic.cn/qq_public/0/0-2277629648-BDCBF57A5DE355595F639619AC3F11A8/0';
    img_i[2] = 'https://qqpublic.qpic.cn/qq_public/0/0-3062504925-D17A4815F8E8543BAD3F5C244F227331/0';
    img_i[3] = 'https://qqpublic.qpic.cn/qq_public/0/0-3083470799-701436E8C6F41A356133B32CA8ABEA75/0';
    img_i[4] = 'https://wx4.sinaimg.cn/mw690/9ca26846gy1fwke86698pj20ak08cdik.jpg';
    img_i[5] = 'https://wx2.sinaimg.cn/mw690/006V16jIgy1fwf1d3ny8hj30ak08cmxw.jpg';
    img_i[6] = 'https://qqpublic.qpic.cn/qq_public/0/0-2871314419-0CA941F92D30DF5E9B223B12F4702B31/0';
    img_i[7] = 'https://qqpublic.qpic.cn/qq_public/0/0-2834705907-E8F323AB32184A8A369A24A43F05ADD7/0';

    img_i[8] = 'https://wx4.sinaimg.cn/mw690/006V16jIgy1fwibc0id3wj30ak08cq3v.jpg';
//  id
    var id_ = new Array()
    id_[0] = 'id_0';
    id_[1] = 'id_1';
    id_[2] = 'id_2';
    id_[3] = 'id_3';
    id_[4] = 'id_4';

    id_[5] = 'id_5';
    id_[6] = 'id_6'
    id_[7] = 'id_7';
    id_[8] = 'id_8';
//  链接
    function http_0() {location.href = 'http://t.cn/EZlGAZx';}
    function http_1() {location.href = 'http://t.cn/EzR8eed';}
    function http_2() {location.href = 'http://t.cn/Ez3a2YS';}
    function http_3() {location.href = 'http://t.cn/EzjsW32';}
    function http_4() {location.href = 'http://t.cn/EZUuvb4';}
    function http_5() {location.href = 'http://t.cn/EzSp1LE';}
    function http_6() {location.href = 'http://t.cn/EzjCCZl';}
    function http_7() {location.href = 'http://t.cn/EzjCacm';}

    function http_8() {location.href = 'http://t.cn/EzSpl0P';}

     var add =  function fun(){
            //设置显示数量
            str = 7;
                for(var j=7;j<= str ;j++){
                        html1 = "<div onclick='http_"+j+"();' style='width: 100%;height: 75px;margin-top: 10px;'><div id='"+id_[j] +"' style='width:28% ;height:75px ;margin-left: 10px; float:left;'><img  src=''  style='width: 90%;max-height: 75px; min-height: 75px;'></div><div style='color:"+color_i[j] +"' class='text "+id_[j] +"'></div></div>";
                        document.getElementById('form').innerHTML += html1;
                        var div  = document.getElementsByClassName(id_[j]);
                        for(var i=0; i<= div.length - 1; i++) {
                                div[i].innerHTML=name_i[j];
                                $("#"+ id_[j]).find("img").attr("src", img_i[j]);
                        }
             }
        }  
