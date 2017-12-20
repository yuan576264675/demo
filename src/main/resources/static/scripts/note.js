function getnote(){  //不能直接在li上($("#BOOK li").on)绑定
					console.log($(this));               //ajax等待服务器响应时会加载这个绑定事件
					//设置记录选中效果
					$("#BOOK a").removeClass("checked");
					$(this).find("a").addClass("checked");
					//获取参数bookId
					var bookId=$(this).data("bookId");
				    $.ajax({
				    	url:path+"/note/list.do",
				    	type:"post",
				    	data:{"bookId":bookId},
				    	dataType:"json",
				    	success:function(result){
				    		if(result.state==0){
				    			var list = result.data;
				    			$("#NOTE li").remove();
				    			for(var i=0;i<list.length;i++){
				    				var noteid = list[i].id;
				    				var notetitle = list[i].title;
				    				createNoteLi(noteid,notetitle);
				    			}
				    		}else if(result.state==2){
				    			alert(result.message);
				    		}
				    		
				    	},
				    	error:function(){
				    		alert("加载笔记本失败");
				    	}
				    });
				}
function createNoteLi(noteId,noteTitle){
	var sli="";
	sli+='<li class="online">';
	sli+='<a>';
	sli+='<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom"></i>';
	sli+=noteTitle;
	sli+='<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down"><i class="fa fa-chevron-down"></i></button>';
	sli+='</a>';
	sli+='<div class="note_menu" tabindex="-1">';
	sli+='<dl>';
	sli+='<dt><button type="button" class="btn btn-default btn-xs btn_move" title="移动至..."><i class="fa fa-random"></i></button></dt>';
	sli+='<dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt>';
	sli+='<dt><button type="button" class="btn btn-default btn-xs btn_delete" title="删除"><i class="fa fa-times"></i></button></dt>';
	sli+='</dl>';
	sli+='</div>';
	sli+='</li>';
	//将sli转换成jQuery对象
	var $li=$(sli);
	//绑定noteId
	$li.data("noteid",noteid);
	$("#NOTE").append($li);
}

function addnote(){    //绑定笔记创建按钮
	var noteTitle = $("#input_note").val().trim();
	var userID = getCookie("userID");
	var bookId = $("#BOOK a.checked").parent().data("bookId");
	var ok = true;
	if(noteTitle==""){
		$("#note_span").html("笔记内容不能为空");
		ok = false;
	}
	if(userID==null){
		window.location.href="log_in.html";
		ok = false;
	}
	if(bookId==null){
		alert("请选择笔记本");
		ok = false;
	}
	if(ok){
		$.ajax({
			url:path+"/note/add.do",
			dataType:"json",
			type:"post",
			data:{"noteTitle":noteTitle,"userID":userID,"bookId":bookId},
			success:function(result){
				if(result.state==0){
					var resu = result.data;
					var id = resu.id;
					var title = resu.title;
					createNote(id,title);
					closeAlertWindow();
				}else if(result.state==2){
					alert(result.message);
				}
			},
			error:function(){
				alert("创建笔记失败");
			}
		});
	}
}