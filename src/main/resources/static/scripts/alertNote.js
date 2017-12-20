function alertNotes(){
					//获取参数
					var userId = getCookie("userID");
					var bookName = $("#input_notebook").val().trim();
					//参数校验
					var ok = true;
					if(userId==null){
						window.location.href="log_in.html";
						ok = false;
					}
					if(bookName==""){
						$("#name_span").html("笔记本名不能为空");
						ok = false;
					}
					//发送ajax请求
					if(ok){
						$.ajax({
							url:path+"/book/addbooks.do",
							type:"post",
							data:{"userId":userId,"bookName":bookName},
							dataType:"json",
							success:function(result){
								if(result.state==0){
									var book = result.data;
									var bookName = book.name;
									var bookId = book.id;
									closeAlertWindow();
									createBookLi(bookId,bookName);
								}else if(result.state==2){
									alert(result.message);
								}
							},
							error:function(){
								alert("笔记本创建失败");
							}
						});
					}
					
				}