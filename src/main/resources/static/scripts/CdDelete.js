function CDD(){   //绑定彻底删除确定按钮事件
					closeAlertWindow();
					var noteid = $("#HS a.checked").parent().data("noteid");
					var ok = true;
					if(noteid==""){
						ok = false;
						alert("笔记ID为空");
					}
					if(ok){
						$.ajax({
							url:path+"/note/cddelete.do",
							dataType:"json",
							data:{"noteid":noteid},
							type:"post",
							success:function(result){
								if(result.state==0){
									$("#HS a.checked").parent().empty();
								}
							},
							error:function(){
								alert("彻底删除笔记失败");
							}
						});
					}
				}