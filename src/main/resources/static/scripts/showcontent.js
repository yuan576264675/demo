function showcontent(){        //显示笔记内容在固定区域
					var noteid = $(this).parents("li").data("noteid");
					$("#input_note_title").val($(this).text());
					//选中效果
					$("#NOTE a").removeClass("checked");
					$(this).addClass("checked");
					var ok = true;
					if(noteid==null){
						ok = false;
						alert("noteid不能为空");
					}
					if(ok){
						$.ajax({
							url:path+"/note/getcontent.do",
							dataType:"json",
							data:{"noteid":noteid},
							type:"post",
							success:function(result){
								if(result.state==0){
									var resu = result.data;
									um.setContent(resu.body);
								}else if(result.state==2){
									alert(result.message);
								}
							},
							error:function(){
								alert("显示笔记本内容失败");
							}
						});
					}
}

function showcontent2(){        //显示笔记内容在固定区域
	var noteid = $(this).parents("li").data("noteid");
	$("#noput_note_title").val($(this).text());
	//选中效果
	$("#SSN a").removeClass("checked");
	$(this).addClass("checked");
	var ok = true;
	if(noteid==null){
		ok = false;
		alert("noteid不能为空");
	}
	if(ok){
		$.ajax({
			url:path+"/note/getcontent.do",
			dataType:"json",
			data:{"noteid":noteid},
			type:"post",
			success:function(result){
				if(result.state==0){
					var resu = result.data;
					$("#noput_note_title").html(resu.title);
					$("#shareNoteText").html(resu.body);
				}else if(result.state==2){
					alert(result.message);
				}
			},
			error:function(){
				alert("显示笔记本内容失败");
			}
		});
	}
}

function showcontent3(){        //显示笔记内容在固定区域
	var noteid = $(this).parents("li").data("noteid");
	$("#input_note_title").val($(this).text());
	//选中效果
	$("#NOTE a").removeClass("checked");
	$(this).addClass("checked");
	var ok = true;
	if(noteid==null){
		ok = false;
		alert("noteid不能为空");
	}
	if(ok){
		$.ajax({
			url:path+"/note/getcontent.do",
			dataType:"json",
			data:{"noteid":noteid},
			type:"post",
			success:function(result){
				if(result.state==0){
					var resu = result.data;
					um.setContent(resu.body);
				}else if(result.state==2){
					alert(result.message);
				}
			},
			error:function(){
				alert("显示笔记本内容失败");
			}
		});
	}
}