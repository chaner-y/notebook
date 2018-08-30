"use strict";

var _sum = require("./sum.js");

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require("http");
var url = require("url");

http.createServer(function (request, response) {
	response.writeHead(200, { "content-type": "text/html;charset=utf-8" });

	var router = url.parse(request.url, true);

	if (router.pathname == "/") {
		response.end("\n\t\t\t<form action='/chk' method='get'>\n\t\t\t\t<input type='text' name='a' />\n\t\t\t\t<input type='text' name='b' />\n\t\t\t\t<input type='submit' value='\u63D0\u4EA4' />\n\t\t\t</form>\n\t\t");
	} else {
		var r = (0, _sum2.default)(router.query.a, router.query.b);
		response.end(r.toString());
	}
}).listen(8080);

// babel src -d dist
// 通过babel这款工具，将src目录下的所有js文件编译成es5的代码，放到dist目录下
// src 开发环境
// dist 生产环境