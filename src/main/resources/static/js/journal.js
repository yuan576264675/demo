function journalClick() {
	alert("事件成功" + path);
	$.ajax({
		url : path + "/journal/loadJournal.do",
		type : "post",
		dataType : "json",
		data : {

		},
		success : function(result) {
			alert(result.data.name);
			alert(result.data.msg);
		},
		error : function() {
			alert("加载日志失败");
		}
	});
}