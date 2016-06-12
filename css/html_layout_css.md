## HTML布局

W3C标准
  + 结构 HTML, XML
  + 表现 CSS
  + 行为 DOM, ECMAScript

尽可能使三种方式分离

定位方式
  + 文档标准流, normal flow, NF, 文档从上到下，从左到右排列
  + float
  + position

> 文档标准流

常见的块级元素，`p`, `div`, `ul`, `li`, `dl`, `dt`, ...

常见的行级元素，`img`, `input`, ...

这些又叫做盒子模型

包括了`border`, `margin`, `padding`, `content`, 盒子模型的3D层级，从外到内依次是

  `border`, `content` + `padding`, `background-image`, `background-color`, `margin`

+ 自动居中的一列布局

  自动居中，用`margin: 0px auto;`属性, `auto`定义的外边距 = (浏览器的宽度 - 外包含层的宽度) / 2

  这种方法与`float`和`position`为absolute和relative有冲突，不能同时设置这些属性

+ 横向的二列布局

  float: left/right/none; 

  设置浮动会移动到容器边，从而影响到紧邻的标准文档流。 所以设置float的时候还经常需要清除后面元素的浮动

  两种方法： 1. clear=both/left/right. 2. width: 100% + overflow: hidden. 对受影响的元素，可能是父级元素设置，从而清除浮动的影响。

  **Tips:** div的高度最好不要设置，因为设置overlow hidden的话，超出部分就会被隐藏。

+ 绝对定位的布局

  posiition: static(默认)/relative/absolute/fixed. 

  相对位置，会相对自身元素原有位置进行偏移，但仍在标准文档流中，随即拥有偏移属性和z-index属性。

  绝对定位，建立以包含块为基准的定位，在标准文档流之外，随即拥有偏移属性和z-index属性。

  绝对定位是会根据父级元素往上寻找祖先元素的定位，如果祖先元素都没有定位的话(比如设置position: relative/absolute/fixed)，就以`body`作为定位的起始点。

  同时最好指定元素的宽度，否则元素的内容会决定相应的宽度。

**使用绝对定位的优势**： 当一列固定宽度的高度大于另一列自适应的宽度的时候就比较容易进行排版。