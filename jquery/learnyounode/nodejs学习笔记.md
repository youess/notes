

## NodeJS学习笔记

Nodejs是一种基于V8的服务器后端的javascript语言。不同的版本支持的标准也有不一样，但是较之于客户端来说，兼容性问题就不是问题了。虽然坑还是比较多，但还是学习看看吧，就当熟悉javascript了。

可以参考官方版本的稳定版的[API](https://nodejs.org/dist/latest-v4.x/docs/api/)

#### 1. Hello World

`console.log("Hello World!")`


#### 2. 脚本参数

`process.argv` 数组包含`["node", "脚本绝对路径", **kwargs]`

```
console.log(process.argv);
```

#### 3. 同步I/O

`fs`模块中的`readFileSync`，默认读入的是nodejs特有的Buffer类型，如果需要转换成字符串的形式可以使用`toString`方法

#### 4. 异步I/O

`fs`模块也有异步读取文件`readFile`，异步产生的数据是需要一个回调方法去收集数据。异步就像是一个循环的过程，而同步是等数据产生完成后一次返回数据。

**读取文件的两个方法，如果设置编码方式，则返回的就是字符串，而不是buffer**

#### 5. 了解回调方法

熟悉`fs`和`path`模块，了解常用的文件操作

```
function callback(err, data) {  }
```

#### 6. 模块化功能

```
# 模块对象"mymodule.js"
module.exports = function() {};

# 调用模块方法
var mymodule = require("./mymodule.js");
```

#### 7. HTTP客户端

具体可以参照文档中的`http`模块

`http.get`直接就可以发起一个request请求。

#### 8. HTTP收集器

将`bl`模块置于`res.pipe`的管道中间。

#### 9. 不同服务器中异步中处理的顺序

关键是对回调进行技术是处理`Node`中异步的基础。 可以使用模块`async`

#### 10. 授时TCP服务器

`net`模块, `net.createServer`, `socket`

时间和日期

```
var d = new Date();
d.getFullYear();
d.getMonth() + 1;      // 从0开始
d.getDate();           // 当月日期
d.getHours();
d.getMinutes();
d.getSeconds();
```

#### 11. HTTP文件服务器

将创建一个文件流并将其放置在响应管道中。

`fs.createReadStream().pipe(res)`


#### 12. 处理数据块中的并返回

模块`through2-map`, `request`和`response`类似算作输入和输出流

```
var map = require("through2-map");
inStream.pipe(map(function(chunk) {
  return chunk.toString().split("").reverse().join("");
})).pipe(outStream)
```

#### 13. JSON api服务

模块`url`处理URL和查询参数，`JSON.stringify(string)`返回json字符串

`res.writeHead(200, {})`设置头信息

`node -pe "require('url').parse('/test?q=1', true);"`
