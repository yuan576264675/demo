function fenxiang(){   //绑定分享按钮单击事件
					//获取参数
					var $li = $(this).parents("li");
					var noteId = $li.data("noteid");
					alert(noteId);
					//发送请求
					$.ajax({
						url:path+"/share/add.do",
						type:"post",
						dataType:"json",
						data:{"noteId":noteId},
						success:function(result){
							if(result.state==0){
								alert(result.message);
							}
						},
						error:function(){
							alert("分享失败");
						}
					});
				}