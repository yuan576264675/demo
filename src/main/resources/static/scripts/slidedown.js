function slidedown(){  //展开下拉菜单
					//隐藏笔记菜单
					$("#NOTE div").hide();
					//获取菜单对象
					var note_menu = $(this).parents("li").find("div");
					//显示菜单
					note_menu.show();
					//选中效果
					$("#NOTE a").removeClass("checked");
					$(this).parent().addClass("checked");
					//阻止冒泡
					return false;
				}
				
				