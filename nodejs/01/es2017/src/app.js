import sum from "./sum.js";

const http = require("http");
const url = require("url");

http.createServer((request, response)=>{
	response.writeHead(200, {"content-type":"text/html;charset=utf-8"});
	
	var router = url.parse(request.url, true);
	
	if( router.pathname == "/" ){
		response.end(`
			<form action='/chk' method='get'>
				<input type='text' name='a' />
				<input type='text' name='b' />
				<input type='submit' value='提交' />
			</form>
		`);
	}else{		
		var r = sum(router.query.a, router.query.b);
		response.end( r.toString() );
	}
	
	
}).listen(8080);



// babel src -d dist
// 通过babel这款工具，将src目录下的所有js文件编译成es5的代码，放到dist目录下
// src 开发环境
// dist 生产环境
