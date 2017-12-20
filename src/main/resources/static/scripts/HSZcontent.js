function hsz(){  //绑定回收站事件
					$("#HS li").empty();
					var dis = $("#pc_part_4").css("display");
					if(dis=='none'){
						$("#pc_part_2").hide();
						$("#pc_part_4").show();
						$("#pc_part_3").show();
						$("#pc_part_5").hide();
						$("#pc_part_6").hide();
						var userID = getCookie("userID");
						var ok = true;
						if(userID==""){
							ok = false;
							alert("用户不存在");
						}
						if(ok){
							$.ajax({
								url:path+"/note/hsz.do",
								dataType:"json",
								data:{"userID":userID},
								type:"post",
								success:function(result){
									if(result.state==0){
										var resu = result.data;
										for(var i=0;i<resu.length;i++){
											var title = resu[i].title;
											var noteid = resu[i].id;
											console.log(noteid);
											createcontent(title,noteid);
										}
										
									}
								},
								error:function(){
									alert("显示回收站笔记失败");
								}
							});
						}
					}else{
						$("#pc_part_4").hide();
						$("#pc_part_2").show();
					}
}

function createcontent(title,noteid){
	var sli = "";
	sli+='<li class="disable"><a >';
	sli+='<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom">';
	sli+='</i>'+title+'<button type="button" class="btn btn-default btn-xs btn_position btn_delete">';
	sli+='<i class="fa fa-times"></i></button>';
	sli+='<button type="button" class="btn btn-default btn-xs btn_position_2 btn_replay">';
	sli+='<i class="fa fa-reply"></i></button></a></li>';
	var $sli = $(sli);
	$sli.data("noteid",noteid);
	$("#HS").append($sli);
	
}
