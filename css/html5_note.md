

## History of HTML

浏览器发送一个请求，服务器端首先回应一个头部信息，其中包括了MIME TYPE

- Mime types

`Content-Type: text/html`

MIME TYPE不仅包括页面的渲染，还有css, js, img等类型都是MIME类型。

"draconian error handling"， html文档就算有一些标签的错误，都不太会影响浏览器渲染页面，可能会出错，但是也会渲染出一些内容。设置`Content-Type: application/xhtml+xml`会严格的对标签进行检查，从而减少出错。

## 查看HTML5特征

- Modernizr.min.js

查看浏览器是否具有HTML5的特征，比如canvas, video

它会自动生成一个全局变量值`Modernizr`

```
<script>
	if (Moderniz.canvas ) {
		// true, shape can be drawn
	} else {
		// false
	}
	if (Moderniz.canvastext) {
		// true, text can be drawn
	} else {}
	if (Moderniz.video) {
		if (Moderniz.video.webm) {

		} else if (Moderniz.video.ogg) {

		} else if (Moderniz.video.h264) {

		}
	} else {}

	Moderniz.localstorage        // 并没有什么太大卵用，只受同源策略影响，还是想cookie一样可以用来做邪恶的东西，只是可以不用将其发送会服务器端，如果数据比较大又不敏感可以考虑一下。

	Moderniz.webworkers         // 并行处理
	Moderniz.applicationcache   // 离线操作支持
	Modernizr.geolocation       // 获取用户ip，网络连接的地理位置
	<input type="text/password/search/number/range/color/tel/url/email/date/month/week/time/datetime/datetime-local/submit" name="" value="">
	Moderniz.inputtypes.date    // to check if input support date
	Moderniz.input.placeholder
	Moderniz.input.autofocus
	// others: microdata and history
</script>
```