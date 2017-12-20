function loadBooks() {
//	alert(1);
	//获取参数userID
	var userID = getCookie("userID");
	console.log(userID);
	//判断userID是否有效
	if(userID==null){
		window.location.href="log_in.html";
	}else{
		$.ajax({
			url:path+"/book/loadBooks.do",
			type:"post",
			dataType:"json",
			data:{"userID":userID},
			success:function(result){
				if(result.state==0){
					var list = result.data;
					for(var i=0;i<list.length;i++){
						//获取笔记本ID
						var bookId = list[i].id;
						//获取笔记本名称
						var bookname = list[i].name;
						//创建笔记本li元素
						createBookLi(bookId,bookname);
						console.log(list[i].name);
						//$("#BOOK").append('<li class="online"><a  class="checked"><i class="fa fa-book" title="online" rel="tooltip-bottom"></i>'+bookname+'</a></li>');
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
}

function createBookLi(bookId,bookname) {
	var sli="";
	sli+='<li class="online">';
	sli+='<a>';
	sli+='<i class="fa fa-book" title="online" rel="tooltip-bottom">';
	sli+='</i>'+bookname+'</a></li>';
	//将字符串转换成jQuery对象
	var $li = $(sli);
	//将userId绑定到li对象上  data属性
	$li.data("bookId",bookId); 
	//将li对象添加到ul中
	$("#BOOK").append($li);
	
}