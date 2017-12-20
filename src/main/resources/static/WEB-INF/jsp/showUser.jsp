<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>${user.uid}的信息</title>

</head>
<body>
<script type="text/javascript" color="0,0,255" opacity='100' zIndex="-100" count="200" src="//cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js"></script>
<p>uid:${user.uid}</p>
<p>名字: ${user.name}</p>
<p>创建时间: ${user.createTime}</p>
</body>
</html>