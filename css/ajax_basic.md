

## AJAX基础

#### 1. 同步和异步的概念

AJAX解决同步的表单问题，比如填写信息表单，同步的话，需要填写完成之后提交服务器，然后服务器给响应。异步的话，实时的给出响应

#### 2. 创建`XMLHttpRequest`

对象与web服务器之间的数据异步交换。

```
var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();   // IE7+, Firefox, chrome, opera, safari...
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP"); // IE5,6
}
```

#### 3. HTTP

http是计算机通过网络进行通信的无状态（不持久建立，随建随忘）协议

7个步骤：

- 建立TCP连接
- web向服务器发送请求命令
- 发送请求头信息
- 服务器应答
- 发送应答头信息
- 发送数据
- 关闭TCP连接

> HTTP请求

1. 方法或动作，get，post
2. url
3. 请求头，客户端环境信息，身份验证信息等，与正文有一行空格
4. 请求正文，查询字符串，表单等

GET和POST区别

1. GET信息**获取**，有长度限制，使用URL传递参数，可见。 幂等【无论查多少次都是相同的】
2. POST**修改**服务器上的资源，对数量无限制，不可见，一般通过表单。

> HTTP响应

1. 状态码，数字和字母构成的
2. 响应头，包含服务器类型，日期时间等
3. 响应体

状态码

1XX：信息类，表示收到web请求，正在进一步处理
2XX：成功，接受，理解和处理
3XX：重定向，请求没成功，须采取进一步动作
4XX：客户端错误
5XX：服务器错误


> XMLHttpRequest发送请求

1. open(method(GET/POST), url, async[true/false]) 一般true异步打开
2. send(string)

```
<script>
request.open("POST", "create.php", true);
request.setRequestHeader("Content-type": "application/x-www-form-urlencoded");
request.send("name=blb&sex=male");
</script>
```


#### XMLHttpRequest取得相应

```
<script>
	// responseText
	// responseXML
	// status
	// statusText
	// getAllResponseHeaders()
	// getResponseHeader("header")
	// **readyState**
	// 0, 未初始化
	// 1, open已调用
	// 2，头信息
	// 3，接收到响应主体
	// 4，响应完成
	request.onreadystatechange = function() {
		if (request.readyState === 4 && request.status === 200) {
			// do something, request.responseText
		}
	}
</script>
```

XAMMP --> php + mysql + apach


#### 处理跨域的方式

域名地址

http[协议]://www[子域名].abc.com[主域名]:8080[端口号]/js/a.html[请求资源地址]

其中任意一个不相同(除了地址外)都算作不同的域名地址，不同的域名地址之间就算作跨域。

- 代理

  通过在不同地方的后台做代理，可以解决这个问题

- jsonp

```
<script>
  $.ajax(
  	type: "GET",
  	url: "",
  	dataType: "jsonp",
  	jsonp: "callbackFun",
  	success: function() {},
  	error: function() {}
  )
</script>
```

jsonp只能用于GET请求

- xhr2

HTML5中XMLHttpRequest level2已实现这个功能，IE10以下就可以用

在请求中添加header,
