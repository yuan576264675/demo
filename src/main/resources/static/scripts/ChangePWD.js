function CPWD(){   //绑定修改密码确定按钮
	var lastpwd = $("#last_password").val();
	var newpwd = $("#new_password").val();
	var finapwd = $("#final_password").val();
	var userName = getCookie("userName");
	var ok = true;
	if(userName==""){
		ok = false;
		window.location.href="log_in.html";
	}
	if(lastpwd==""){
		ok=false;
		$("#last_password_span").html("原密码不能为空");
	}
	if(newpwd==""){
		ok = false;
		$("#new_password_span").html("新密码不能为空");
	}
	if(finapwd!=newpwd){
		ok = false;
		$("#final_password_span").html("密码输入不一致");
	}
	if(ok){
		$.ajax({
			url:path+"/User/changepwd.do",
			dataType:"json",
			type:"post",
			data:{"lastpwd":lastpwd,"newpwd":newpwd,"userName":userName},
			success:function(result){
				if(result.state==0){
					alert(result.message);
					window.location.href="log_in.html";
				}else{
					alert(result.message);
				}
			},
			error:function(){
				alert("修改密码失败");
			}
		});
	}
	}