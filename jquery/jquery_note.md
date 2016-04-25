## Jquery 基础用法

4/22/2016 12:04:23 AM

### 1. 选择器

> #### 基础

  + `$("#id_name").html().css()`
  + `$("element_name").css()`, 会找到页面中所有`element_name`并修改其css
  + `$(".class_name")`
  + `$("*")`, 选取页面所有元素，别用
  + `$(".cn, #idn, p")`, 多个选择器并用
  + `$("ance desc")`, 定位祖先元素位置，并选中子孙`desc`所有元素
  + `$("parent>child")`, 父子层级，不涉及更深的层次元素
  + `$("prev+next")`, 选择同级`prev`的下**一**个元素`next`
  + `$("prev ~ siblings")`, 选择同级的后续所有元素

> #### 过滤性

  + `$("li:first/last")`, 第一个/倒数第一个
  + `$("li:eq(2/-2)")`, 正数第二个/倒数第二个
  + `$("li:contains('text')")`, 页面内容包含，区分大小写
  + `$("li:has('element_name')")`, 包含元素名称
  + `$("sel:hidden")`, 选择包含隐藏的内容元素
  + `$("sel:visible")`, 可见的元素
  + `$("li[attribute=value]")`， 可以选择attrbute为value的元素，value可以用引号，也可以不用
  + `$("li[attribute!=value]")`， 与上述相反
  + `$("li[attribute*=value]")`, 相似的，类似contains的一种包含关系
  + `$("li:first/last-child")`, 当有多个li标签的时候，选择所有li标签的第一个/最后一个元素

> #### 表单

  + `$("#id_name :input").addClass()`, 为id_name的表单添加一个css类, `:input`不仅会选择`input`标签，还有`textarea`, `select`和`button`等
  + `$("#id_name :text")`, 选择单行的文本输入框元素，它并不会选择`textarea`以及`button`元素
  + `$("#id_name :password")`, 选择密码区域
  + `$("#id_name :radio").attr()`, 选择单选框
  + `$("#id_name :checkbox").attr()`, 选择复选框
  + `$("#id_name input:submit").attr()`, 选择input标签提交
  + `$("#id_name :image").attr()`, 只能选择input标签中的image标签
  + `$("#id_name :button").attr()`, 选择button标签以及input的type为button的标签
  + `$("#id_name :checked")`, 选择含有`checked`属性的标签
  + `$("#id_name :selected")`, 选择含有`selected`属性的select中的option元素

### 2. 操作DOM元素

  + `$().attr(属性名， 属性值)`, 用于改变选择元素的属性值，如果只有属性名，则返回对应的属性值
  + `$().html(value)/.text(value)`, 前面会将value中是html标签的进行转换，后者不进行任何处理
  + `$().addClass()/.css(), css({"background-color": "red", "color": "white"}), addClass("red white")`
  + 移除属性和样式，`removeAttr(name)`/`removeClass(class)`
  + 向元素内添加内容。 `$("element_name").append(content)`
  + `$(content).appendTo(selector)` 有点像上面方向理解一样
  + `$(selector).before(content)`和`$(selector).after(content)`，插入前后没有空格隔开
  + 复制选择元素 `$(selector).clone()`
  + 替换内容 `$(selector).replaceWith(content)`和`$(content).replaceAll(selector)`
  + 添加额外的标签。`$(selector).wrap(wrapper)`和`$(selector).wrapInner(wrapper)`, 前者用于包裹元素本身，后者则用于包裹元素中的内容
  + `$(selector).each(function(index))` 遍历选择元素集中的各个标签(index 0->n-1), 函数里面用`this`表示。还可以如此用`$.each(dataSet, function(index, data))`
  + `remove()`方法删除所选元素本身和子元素，该方法可以通过添加过滤参数指定需要删除的某些元素，而`empty()`方法则只删除所选元素的子元素

### 3. 事件与应用

  + 页面加载时触发`ready`事件. `$(document).ready(function(){})`等价于`$(function(){})`
  + 绑定元素的事件。`$(selector).bind(event,[data] function)`, 多个`event`需要用空格隔开(或)
  + 页面切换事件方法。`$(selector).hover(over，out)`, over, out表示鼠标停留和离开两个事件函数
  + `toggle`, 1.8后的版本api发生了变化，注意查看api, 最新[toggle api][jquery-toggle]
  + 手动触发指定事件. `$(selector).trigger(event)`
  + focus事件在元素获取焦点时触发，如点击文本框时，触发该事件；而blur事件则在元素丢失焦点时触发，如点击除文本框的任何元素，都会触发该事件。`$(selector).bind("focus/blur", function())`
  + 当一个元素的值发生变化时，将会触发change事件，例如在选择下拉列表框中的选项时，就会触change事件。`$(selector).bind("change", function())`
  + 与bind()方法相同，live()方法与可以绑定元素的可执行事件，除此相同功能之外，live()方法还可以绑定动态元素，即使用代码添加的元素事件(绑定事件之后添加的代码也可以操作)。 `$(selector).live(event,[data],fun)`

### 4. 动画特效

  + `show()`和`hide()`方法用于显示或隐藏页面中的元素。`$(selector).hide/show(speed, [callback])`, `speed`可以为`slow`, `fast`或者毫秒数值。`callback`表示动作完成之后执行的函数
  + `toggle`可以很好的展示显示和隐藏两种方式。 具体方法和之前的一样，`$(selector).toggle(speed, [callback])`.
  + 页面滑动元素`slideUp()`和`slideDown()`, 用法和之前一致，前者仅适用**被隐藏的元素**，后者则**相反**。
  + 同样的还有`slideToggle`方法可以实现滑动效果，可以用两张图片实现不同的变化。
  + 淡入淡出的效果，`fadeIn`和`fadeOut`。
  + 淡入淡出的不透明度，`fadeTo`，用法：`$(selector).fadeTo(speed, opacity, [callback])`
  + 简单的自定义动画效果。`$(sel).animate({css_params}, speed, [callback])`，逐渐变大和位置的移动(`position`需为`absolute`或者`relative`)。
  + 停止以上的动画效果。`$(selector).stop([clearQueue], [goToEnd])`, 参数都为布尔类型，前者表示是否停止正在执行的动画，后者表示是否完成正在执行的动画，默认都为`false`
  + 延时跟停止差不多，不过停止一些时间后，动画为继续完成未完成的动作。`$(selecor).delay(time_duration)`，毫秒级别。


### 5. Ajax应用

  + 使用`load()`方法通过Ajax请求加载服务器中的数据，并把返回的数据放置到指定的元素中, `load(url,[data],[callback])`, Ajax不能跨域，所以url应该用绝对的URL, 直接加载html页面
  + 使用`getJSON()`方法可以通过Ajax异步请求的方式，获取服务器中的数据，并对获取的数据进行解析，显示在页面中。 `$.getJSON(url, [data], [callback])`, 加载json并解析
  + 使用`getScript()`方法异步请求并执行服务器中的JavaScript格式的文件。`$.getScript(url, [callback])`
  + `get()`方法，采用GET方式向服务器请求数据，并通过方法中回调函数的参数返回请求的数据。`$.get(url,[callback],dataType)`, 可以[参考文档](https://api.jquery.com/jquery.get/)
  + `post()`方法，`$.post(url,[data],[callback])` 发送数据到服务器，然后server将处理结果返回页面
  + 使用`serialize()`方法可以将表单中有name属性的元素值进行序列化，生成标准URL编码文本字符串，直接可用于ajax请求。例如`$("form").serialize()`
  + `$.ajax([setting])`方法，`setting`是一个字典，包括了url, data, dataType, success等属性。具体还是查看[API](http://api.jquery.com/jquery.ajax/)为准
  + 使用`ajaxSetup([setting_options])`方法可以设置Ajax请求的一些全局性选项值，设置完成后，后面的Ajax请求将不需要再添加这些选项值
  + `ajaxStart()`和`ajaxStop()`方法是绑定Ajax事件。`ajaxStart()`方法用于在Ajax请求发出前触发函数，`ajaxStop()`方法用于在Ajax请求完成后触发函数。`$(selector).ajaxStart/Stop(function())`

### 6. 常用插件

  + 表单验证插件, `jquery.validate.js`和支持中文的提示信息`jquery.validate.message_cn.js`。 可以参考[这篇博文](http://www.cnblogs.com/hejunrex/archive/2011/11/17/2252193.html)了解更多
  + 无缝将html表单升级为ajax方式的插件`jquery.form.js`。 `$(form).ajaxForm ({options})`等, 关于其中的一些误解，可以参考[这个回答](http://stackoverflow.com/questions/1960240/jquery-ajax-submit-form)
  + 图片灯箱插件`lightBox`。mooc上面介绍的是`jquery.notesforlightbox.js`插件，现在在github上比较高人气的有`lightbox2`，[点我](https://github.com/lokesh/lightbox2)
  + 图片放大器`jquery-jqzoom.js`，比如淘宝图片的放大镜查看功能
  + cookie插件`jquery-cookie.js`，方便管理浏览器cookie
  + 自动补全插件`jquery.autocomplete.js`，在用户输入表单有比较多的重复时，很有用
  + 右键菜单插件`jquery.contextmenu.js`, 右键菜单插件可以绑定页面中的任意元素，绑定后，选中元素，点击右键，便通过该插件弹出一个快捷菜单，点击菜单各项名称执行相应操作
  + 自定义的`lifocuscolor`插件可以在`<ul>`元素中，鼠标在表项`<li>`元素移动时，自定义其获取焦点时的背景色，即定义`<li>`元素选中时的背景色，[源码](http://www.imooc.com/data/jquery.lifocuscolor.js), [IBM教程](http://www.ibm.com/developerworks/cn/web/wa-jqplugin/)


### 7. UI插件

  + 拖曳插件, `draggable`, [api文档](https://jqueryui.com/draggable/)
  + 放置插件, `droppable`, [api文档](https://jqueryui.com/droppable/)
  + 拖曳排序插件, `sortable`, [api文档](https://jqueryui.com/sortable/)
  + 面板折叠插件, `accordion`, [api文档](https://jqueryui.com/accordion/)
  + 选项卡插件, `tabs`，[api文档](https://jqueryui.com/tabs/)
  + 对话框插件, `dialog`, [api文档](https://jqueryui.com/dialog/)
  + 菜单工具插件, `menu`, [api文档](https://jqueryui.com/menu/)
  + 微调按钮插件, `spinner`, [api文档](https://jqueryui.com/spinner/)
  + 工具提示插件, `tooltip`, [api文档](https://jqueryui.com/tooltip/)

### 8. 工具类函数

  + 获取浏览器的名称与版本信息。 `$.browser` 与其属性 `.chrome`, `.firefox`, `.version`
  + 检测浏览器是否属于W3C盒子模型。 `$.support.boxModel`
  + 检测对象是否为空。`$.isEmptyObject(obj);`
  + 检测对象是否为原始对象。`$.isPlainObject (obj);`, 能检测对象是否为通过`{}`或`new Object()`关键字创建的原始对象
  + 检测两个节点的包含关系。 `$.contains (container, contained);`
  + 删除字符串前后空白。`$.trim(str);`
  + 调用名为`$.param`的工具函数，能使对象或数组按照key/value格式进行序列化编码，该编码后的值常用于向服务端发送URL请求
  + 使用`$.extend({options})`扩展工具函数。
  + 使用`$.extend(obj1, obj2, ..., objN)`扩展Object对象

### 9. 其他

  + 编程题1
      初始时:`<ul>`元素中仅显示5个`<li>`元素,其中包含还包括最后一个`<li>`元素,`<a>`元素中的显示"更多"字符.
      当点击"更多"链接时,自身内容变为"简化",同时,`<ul>`元素中显示全部的`<li>`元素.
      当点击"简化"链接时,自身内容变为"更多",同时,`<ul>`元素中仅显示包含最后一个`<li>`元素在内的5个元素.
  + 编程题2
      在页面中，创建两个按钮。
      点击第一个“左移”按钮后，将页面中的`<div>`元素在当前的位置上，以动画的效果向左移动50个像素；
      点击第二个“右移”按钮后，页面中的`<div>`元素在当前的位置上，以动画的效果向右移动50个像素。
  + 编程题3
      在列表`<ul>`元素中，鼠标在表项`<li>`元素移动时，可以自定义其获取焦点(focus)时的背景颜色，即设置表项`<li>`元素选中时的背景色.
  + 编程题4
      通过ajax异步请求的方式,实现在页面中发送留言和显示留言的功能,并在请求过程中，显示ajax发送和停止的状态信息。

### 10. 参考资料

  + [imooc jquery基础][1]


[1]: http://www.imooc.com/learn/11
[jquery-toggle]: http://api.jquery.com/toggle/
