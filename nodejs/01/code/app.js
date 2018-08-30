// 引入系统模块
var http = require("http");  // 因为是系统模块，所以无需npm install http
var url = require("url");	// 格式化url字符串的模块

// 创建一个网站服务，监听8080端口
http.createServer(function(request, response){
	//request请求, response响应
	
	// 中文乱码
	// 200 指http状态码中的ok
	response.writeHead(200, {"content-type":"text/html;charset=utf-8"});
	
	console.log("有用户来访问了：", request.connection.remoteAddress); // IP地址
	
	// 获取用户访问的页面地址
	var router = url.parse( request.url, true ); // true表示以对象形式显示，false表示以字符串形式显示
	console.log(router.query);

	// 路由
	/**/
	if( router.pathname == "/1.html" ){
		response.write("你访问的是1.html页面");
	}else if( router.pathname == "/2.html" ){
		response.write("你访问的是2.html页面");	
	}else{
		response.write("其他:"+router.pathname);	
	}
	
	
	response.end("<hr>中文 <br>hello 123");
	// 修改文件后，一定要记得重启启动服务
	// 命令行中执行 ctrl+c ，表示终止当前服务
	
}).listen(8080);

// 代码写好后，在命令行中，执行  node app.js  ，执行了代码后，就表示创建了一个网站服务
// 别人就可以直接访问了


/*
9:00 - 10:30

10:45 - 12:15  

14:00 - 15:50

16:10 - 18:00

*/