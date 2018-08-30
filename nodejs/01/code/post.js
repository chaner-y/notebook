var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");

http.createServer((request, response)=>{
	response.writeHead(200, {"content-type":"text/html;charset=utf-8"});
	
	var router = url.parse( request.url, true );
	
	switch( router.pathname ){
		case "/":
			var str = fs.readFileSync("./form.html");
			response.end(str);
			break;
		case "/chk":	
			// request 请求
			// request.on("data", fn)  如果请求中得到了一些数据的话，则触发回调函数
			// 发起请求时，有些情况下会带过去很多的数据，下面的程序表示，得到请求中的部分数据时，就执行回调函数..
			var chunks = "";
			request.on("data", function(chunk){
				//console.log(chunk.toString());
				chunks += chunk;
			});
			// 请求结束，所有的数据都得到了
			request.on("end", function(){
				//console.log(chunks);
				// 将url参数字符串，转为url参数对象
				// "a=1&b=2" -> {"a":"1", "b":"2"}
				var query = querystring.parse(chunks);
				// querystring.stringify({"a":"1", "b":"2"}) -> "a=1&b=2"
				// 因为a和b都是字符串，做加法运算时，应先变为数字
				var r = query.a*1 + query.b*1;
				// 响应时，只能是字符串，所以toString
				response.end(r.toString());
			});
			break;
		default:
			response.end();
	}
	
}).listen(8080);
