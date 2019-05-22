function submit() {
    var args = {d:1};
    $.ajax({
        url: 'http://splb.admin.xunfengkj.com/api/manage/addcom',
        type: 'POST',
        data: args,
        dataType: 'json',
        success:function(res){
            console.log(res);
            location.href = 'yitijiao.html';
        }
    });
}