
### 事件流

当一个动作产生时，对所有元素来说都触发了事件，比如页面中的一个按钮产生了一个点击，整个页面应该也算是产生了点击事件

对于这个问题，有两种理解方式

+ IE事件冒泡. 最开始由最具体的元素接受事件，然后逐级向上传播到最不具体的元素
+ 事件捕获. 与事件冒泡相反.

### 事件处理程序

1. HTML事件，直接方式，基本没人用

```
<input type="button" value="按钮" id="btn" onclick="alert('hello')">
```

2. DOM0级事件，比较传统方式，所有浏览器都支持

```
<input type="button" value="按钮" id="btn">
<script type="text/javascript">
	var btn = document.getElementById("btn");
	btn.onclick = function() {             // 通过添加属性处理事件
		alert("DOM 0级事件");
	}
	btn.onclick = null;                    // 删除
</script>
```

3. DOM2级事件处理

  对每个事件定义了两个方法： `addEeventListener()`和`removeEventListener()`, 
  接受三个参数，要处理的事件名，处理函数，布尔值(false表示在冒泡阶段调用, 否则是俘获方式)

```
<input type="button" value="按钮" id="btn">
<script>
	var btn = document.getElementById("btn");
	function showMessage() {
		alert("DOM2级事件发生")
	}
	btn.addEeventListener("click", showMessage, false);               // 最大限度兼容各种浏览器
	btn.removeEventListener("click", showMessage, false);
</script>
```

4. IE事件处理程序

  定义了两个方法： `attachEvent()`和`detachEvent()`
  接受两个参数，除了DOM2级里面的布尔值， 因为IE9之前都支持支冒泡法。 
  现在的浏览器如IE/Opera就是支持这种方式。

```
<input type="button" value="按钮" id="btn">
<script>
	var btn = document.getElementById("btn");
	btn.attachEvent("onclick", showMessage);       // 添加
	btn.detachEvent("onclick", showMessage);       // 删除
</script>
```

### 事件对象

在触发DOM上的事件时都会产生一个对象。

DOM中的事件对象(event)：

1. type属性，事件类型
2. target属性， 事件的目标
3. `stopPropagation()`方法，阻止事件冒泡
4. `preventDefault()`方法，阻止事件的默认行为，比如组织跳转页面

IE中的事件对象(window.event), 都为属性

1. type
2. srcElement
3. cancerBubble
4. returnValue

### 事件类型

+ 鼠标事件 

访问html元素的方法
1. `document.getElementById`, 返回带有id的元素
2. `document.getElementsByTagName`，通常跟上面合用，表示找到id元素中后代tag为什么的元素
3. `document.getElementsByClassName`[在IE9以前的浏览器中不支持][1]

```
<script>
/*
 * get element by class name
 */
function getByClass(className, parent) {
	var oParent = parent ? document.getElementById(parent): document,
		eles = [],
		elements = oParent.getElementByTagName("*");
	for (var i = elements.length - 1; i >= 0; i--) {
		if (elements[i].className == className) {
			eles.push(elements[i]);
		}
	}
	return eles;
}

/*
 * define drag event:
 *   1. select region
 *   2. drag
 *   3. stop  
 */	

window.onload = drag;

function drag() {
	var oTitle = getByClass("login-title", "login-panel")[0];

	// 鼠标摁下，左键右键，光标
	oTitle.onmousedown = fnDown;
	// 关闭
	var oClose = document.getElementById("");
	oClose.onclick = function() {
		document.getElementById("login-pannel").style.display="none";
	};
}

function fnDown(event) {

	event = event || window.envent;
	// 获取面板
	var oPanel = document.getElementById("login-pannel"),
		// 光标按下时光标和面板之间的距离
		disX = event.clientX - oPanel.offsetLeft,    // 面板和浏览器左边的距离
		disY = event.clientY - oPanel.offsetTop,    // 面板和浏览器上面的距离;
	// 鼠标移动时
	document.onmousemove = function(event) {
		// 获取光标位置
		event = event || window.envent;
		// 重新计算左边距离和上边距离
		var l = event.clientX - disX,
			t = event.clientY - disY,
			winW = document.documentElement.clientWidth || document.body.clientWidth,
			minH = document.documentElement.clientHeight || document.body.clientHeight,
			maxW = winW - oPanel.offsetWidth,               // 这个和面板的css密切相关
			maxH = winH - oPanel.offsetHeight;
		if (l < 0) {l = 0;} else if (l > maxW) { l = maxW; }
		if (t < 0) {t = 0;} else if (t > maxH) { t = maxH; }
		oPanel.style.left = l;
		oPanel.style.top = t;
	};
	// 释放鼠标
	document.onmouseup = function() {
		document.onmousemove = null;   // 释放鼠标移动
		document.onmouseup = null;     // 释放自己
	};
}

</script>

```

总体来感觉就是通过利用浏览器的组件的属性不断的控制相应的css属性。

常见的事件名称有`onload`, `onunload`, `onchange`, `onmouseover`, `onmouseout`
`onmouseup`, `onmousedown`, `onclick`
可以参考[w3school DOM事件][2]以及更加详细的[javascript中的事件类型][3].

+ 键盘事件

常用的键盘事件有

1. keyDown, 按下键盘**任意键**
2. keyPress, 按下**字符键**
3. keyUp, 用户释放键盘上的键

### 使用兼容的方法

能力检测法，支持便用， 跨浏览器处理程序

```
<script>
	var eventUtil = {
		// 绑定事件
		addEvent: function(elem, type, handler) {
			if (elem.addEeventListener) {
				elem.addEeventListener(type, handler, false);
			} else if (elem.attachEvent) {
				elem.attachEvent('on' + type, handler);
			} else {
				elem["on" + type] = handler;
			}
		},
		// 取消绑定的事件
		removeEvent: function(elem, type, handler) {
			if (elem.removeEeventListener) {
				elem.removeEeventListener(type, handler, false);
			} else if (elem.detachEvent) {
				elem.detachEvent(type, handler);
			} else {
				elem["on" + type] = null;
			}
		},
		// 标准化浏览器的event对象
		standardizeEvent: function(ev) {
			return ev || window.event;
		},
		// 获取event的类型
		getEventInfo: function(ev) {
			return {
				type: ev.type,
				target: ev.target.nodeName || ev.srcElement.nodeName
			};
		},
		// 阻止浏览器的默认行为
		preventDefault: function(ev) {
			ev = this.standardizeEvent(ev);
			if (ev.preventDefault) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
		},
		// 阻止冒泡产生
		stopPropagation: function(ev) {
			ev = this.standardizeEvent(ev);
			if (ev.stopPropagation) {
				ev.stopPropagation();
			} else {
				ev.cancerBubble = true;
			}
		},
	};

	var btn = document.getElementById("btn");
	eventUtil.addEvent(btn, "click", showMessage);
</script>

```

## 更多资料

1. [MDN开发者文档中DOM的介绍][4]
2. [W3school文档][1]

[1]: http://www.w3school.com.cn/htmldom/dom_using.asp
[2]: http://www.w3school.com.cn/htmldom/dom_events.asp
[3]: http://www.w3school.com.cn/jsref/index.asp
[4]: https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction