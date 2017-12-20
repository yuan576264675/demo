function loginAction() {
	//alert("成功");
	//清空提示信息
	$("#count_span").html("");
	$("#password_span").html("");
	//获取参数
	var name = $("#count").val().trim();
	var pwd  = $("#password").val().trim();
	//alert(name+":"+pwd);
	//参数数据格式校验
	var ok = true;
	if(name==""){
		$("#count_span").html("用户名为空");
		of=false;
	}
	if(pwd==""){
		$("#password_span").html("密码为空");
		ok = false;
	}
	if(ok){ //通过格式校验 发送ajax请求
		$.ajax({
			url:path+"/User/login.do",  //
			type:"post",
			dataType:"json",    //服务器返回给浏览器数据的类型
			data:{"name":name,"password":pwd},  //属性名"name" 不是属性值 
			success:function(result){           //需要与处理器Controller 中对应login.do的参数名一致
				if(result.state==0){  //成功
					var user = result.data;
					addCookie("userID",user.id,2);   //添加Cookie
					addCookie("userName",user.name,1);
					window.location.href="edit.html";
				}else if(result.state==2){ //用户名错误
					$("#count_span").html(result.message);
				}else if(result.state==3){ //密码错误
					$("#password_span").html(result.message);
				}
			},
			error:function(){
				alert("登录失败");
			}
		});
	}
}



	
