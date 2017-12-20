function registAction() {
	$("#warning_1 span").html("");
	$("#warning_2 span").html("");
	$("#warning_3 span").html("");
	//获取参数
	var username = $("#regist_username").val().trim();
	var nickname = $("#nickname").val().trim();
	var finalpassword = $("#final_password").val().trim();
	var pwd = $("#regist_password").val().trim();
	var ok = true;
	if(username==""){  //检查用户名
		$("#warning_1 span").html("用户名为空");
		$("#warning_1").show();
		ok=false;
	}
	if(pwd==""){     //检查密码
		$("#warning_2 span").html("密码为空");
		$("#warning_2").show();
		ok = false;
	}else if(pwd.length<6){
		$("#warning_2 span").html("密码小于6位");
		$("#warning_2").show();
		ok=false;
	}
	if(finalpassword!=pwd){   //确认密码
		$("#warning_3 span").html("两次密码输入不一致");
		$("#warning_3").show();
		ok=false;
	}
	/*
	if(nickname==""){
		$("#nickspan").html("昵称不能为空");
		ok=false;
	}*/
	
	//校验通过
	if(ok){
		$.ajax({
			url:path+"/User/regist.do",
			type:"post",
			dataType:"json",
			data:{"username":username,"nickname":nickname,"pwd":pwd},
			success:function(result){
				if(result.state==0){
					var user = result.data;
					$("#back").click();  //返回登录界面  点击事件写好了 激活
					$("#count").val(user.name); //设置用户名输入域数据
					$("#password").focus();
					// addCookie("userName",user.name,2);
					// window.location.href="log_in.html";
				}else if(result.state==2){
					alert(result.message);
					$(".letter input").val("");
					$(".password input").val("");
				}
			},
			error:function(){
				alert("注册失败");
			}
		});
	}
}