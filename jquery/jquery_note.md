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
  + `$(selector).each(function(index))` 遍历选择元素集中的各个标签(index 0->n-1), 函数里面用`this`表示
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

### 5. Ajax应用

### 6. 常用插件

### 7. UI插件

### 8. 工具类函数

### 9. 其他

### 10. 参考资料

  + [imooc jquery基础][1]


[1]: http://www.imooc.com/learn/11
[jquery-toggle]: http://api.jquery.com/toggle/
