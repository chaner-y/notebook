var http = require("http");
var url = require("url");

http.createServer((request, response)=>{
	response.writeHead(200, {"content-type":"text/html;charset=utf-8"});
	
	var router = url.parse( request.url, true );
	
	switch( router.pathname ){
		case "/":
			response.write(`
				<form action='/chk'>
					<input type='text' value='' name='a' /><br>
					<input type='text' value='' name='b' /><br>
					<input type='submit' value='提交' />
				</form>
			`);
			response.end();
			break;
		case "/chk":	
			//console.log(router.query);
			response.write("a+b="+(Number(router.query.a)+Number(router.query.b)));
			response.end();
			break;
		default:
			response.end();
	}
	
}).listen(8080);
