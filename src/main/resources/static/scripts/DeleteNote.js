function deletenote(){    //删除笔记事件
					//获取请求参数
					var $li=$("#NOTE a.checked").parent();
					var noteid=$li.data("noteid");
					var title = $li.text();
					$.ajax({
						url:path+"/note/delete.do",
						dataType:"json",
						data:{"noteid":noteid},
						type:"post",
						success:function(result){
							if(result.state==0){
								closeAlertWindow();
								$li.empty();
								createcontent(title,noteid);
							}
						},
						error:function(){
							alert("删除失败");
						}
					});
					
				}

