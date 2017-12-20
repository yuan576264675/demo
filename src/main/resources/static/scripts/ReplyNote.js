function huifunote(){	   //绑定恢复笔记确定事件
					var bookId = $("#replaySelect option:selected").data("bookId");//获得笔记本ID
					var $noteid = $("#HS .checked").parent();
					var noteid = $noteid.data("noteid");
					alert(bookId);
					alert(noteid);
					var ok = true;
					if(bookId==null || bookId==""){
						alert("笔记本不存在");
						ok = false;
					}
					if(noteid==null || noteid==""){
						alert("该笔记不存在");
						ok = false;
					}
					if(ok){
						$.ajax({
							url:path+"/note/replaynote.do",
							dataType:"json",
							data:{"bookId":bookId,"noteid":noteid},
							type:"post",
							success:function(result){
								if(result.state==0){
									$noteid.remove();
									alert(result.message);
									closeAlertWindow();
								}
							},
							error:function(){
								alert("恢复笔记失败");
							}
						});
					}
					
}

function yidongnote(){	   //绑定移动笔记确定事件
	var bookId = $("#moveSelect option:selected").data("bookId");//获得笔记本ID
	var $noteid = $("#NOTE .checked").parent();
	var noteid = $noteid.data("noteid");
	alert(bookId);
	alert(noteid);
	var ok = true;
	if(bookId==null || bookId==""){
		alert("笔记本不存在");
		ok = false;
	}
	if(noteid==null || noteid==""){
		alert("该笔记不存在");
		ok = false;
	}
	if(ok){
		$.ajax({
			url:path+"/note/replaynote.do",
			dataType:"json",
			data:{"bookId":bookId,"noteid":noteid},
			type:"post",
			success:function(result){
				if(result.state==0){
					$noteid.remove();
					alert(result.message);
					closeAlertWindow();
				}
			},
			error:function(){
				alert("移动笔记失败");
			}
		});
	}
	
}