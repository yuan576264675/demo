function createshare(noteid,tit) {
	var sli="";
	sli+='<li class="online" ><a>';
	sli+='<i class="fa fa-file-text-o" title="online" rel="tooltip-bottom">';
	sli+='</i> '+tit+'<button type="button" class="btn btn-default btn-xs btn_position btn_slide_down">';
	sli+='<i class="fa fa-chevron-down"></i></button>';
	sli+='</a><div class="note_menu" tabindex="-1"><dl><dt>';
	sli+='<button type="button" class="btn btn-default btn-xs btn_move" title="移动至...">';
	sli+='<i class="fa fa-random"></i></button></dt>';
	sli+='<dt><button type="button" class="btn btn-default btn-xs btn_share" title="分享"><i class="fa fa-sitemap"></i></button></dt>';
	sli+='<dt><button type="button" class="btn btn-default btn-xs btn_delete" title="删除"><i class="fa fa-times"></i></button></dt>';
	sli+='</dl></div></li>';
	var $li = $(sli);
	$li.data("noteid",noteid);
	$("#SSN").append($li);
}