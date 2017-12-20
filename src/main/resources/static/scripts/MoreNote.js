function JZmore(){
					page+=1;
					$("#SSN li").remove();   //删除的话就是切换,不是整行往下加
					var tit = $("#search_note").val();
					var ok = true;
					if(tit==""){
						ok=false;
						alert("搜索内容不能为空");
					}
					if(ok){
						$.ajax({
							url:path+"/share/sousuo.do",
							dataType:"json",
							data:{"tit":tit,"page":page},
							type:"post",
							success:function(result){
								if(result.state==0){
									$("#pc_part_4").hide();
									$("#pc_part_2").hide();
									$("#pc_part_6").show();
									$("#pc_part_3").hide();
									$("#pc_part_5").show();
									var resu = result.data;
									if(resu==""){
										$("#more_note").html("回到第一页");
										page=1;
									}
									
									for(var i=0;i<resu.length;i++){
										var title = resu[i].cn_share_title;
										var noteid = resu[i].cn_note_id;
										createshare(noteid,title);
									}
								}
								
							},
							error:function(){
								alert("搜索失败");
							}
						});
					}
				
				}