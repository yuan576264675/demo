//关闭对话框
function closeAlertWindow() {
	//清空对话框
	$("#can").html("");
	//隐藏背景色
	$(".opacity_bg").hide();
}
//新建笔记本对话框
function addBookAlertWindow(){
	//弹出对话框
	$("#can").load("alert/alert_notebook.html");
	//显示背景色
	$(".opacity_bg").show();
}

//新建笔记对话框
function addNoteAlertWindow() {
	//弹出对话框
	$("#can").load("alert/alert_note.html");
	//显示背景色
	$(".opacity_bg").show();
}

//彻底删除对话框
function cddelete() {
	//弹出对话框
	$("#can").load("alert/alert_delete_rollback.html");
	//显示背景色
	$(".opacity_bg").show();
}

//绑定笔记删除到回收站事件
function showdelet(){ 
	//弹出对话框
	$("#can").load("alert/alert_delete_note.html");
	//显示背景色
	$(".opacity_bg").show();
}
//回收站笔记选中效果
function HSXZ(){       	  		
	$("#HS a").removeClass("checked");
	$(this).find("a").addClass("checked");
}

//搜索框笔记选中效果
function SouSuo(){       	  		
	$("#SSN a").removeClass("checked");
	$(this).find("a").addClass("checked");
}

//恢复笔记框
function huifu(){
	//弹出对话框
	$("#can").load("alert/alert_replay.html");
	//显示背景色
	$(".opacity_bg").show();
	var userID = getCookie("userID");
	var ok = true;
	if(userID==""){
		ok = false;
		window.location.href="log_in.html";
	}
	if(ok){
		$.ajax({
			url:path+"/book/loadBooks.do",
			type:"post",
			dataType:"json",
			data:{"userID":userID},
			success:function(result){
				if(result.state==0){
					var list = result.data;
					for(var i=0;i<list.length;i++){
						var bookId = list[i].id;
						var bookname = list[i].name;
						var li = "";
						li+='<option>';
						li+=bookname;
						li+='</option>';
						$li=$(li);
						$li.data("bookId",bookId);
						console.log(bookId);
						$("#replaySelect").append($li);
					}
				}
			},
			error:function(){
				alert("失败");
			}
		});
	}
}

//移动笔记框
function yidong(){
	//弹出对话框
	$("#can").load("alert/alert_move.html");
	//显示背景色
	$(".opacity_bg").show();
	var userID = getCookie("userID");
	var ok = true;
	if(userID==""){
		ok = false;
		window.location.href="log_in.html";
	}
	if(ok){
		$.ajax({
			url:path+"/book/loadBooks.do",
			type:"post",
			dataType:"json",
			data:{"userID":userID},
			success:function(result){
				if(result.state==0){
					var list = result.data;
					for(var i=0;i<list.length;i++){
						var bookId = list[i].id;
						var bookname = list[i].name;
						var li = "";
						li+='<option>';
						li+=bookname;
						li+='</option>';
						$li=$(li);
						$li.data("bookId",bookId);
						console.log(bookId);
						$("#moveSelect").append($li);
					}
				}
			},
			error:function(){
				alert("失败");
			}
		});
	}
}

