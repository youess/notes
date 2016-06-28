
scss和sass的区别

sass是一种精简的scss，使用缩进等去掉了scss的括号

1. 变量

使用`$`定义，如`$color`。

2. 嵌套

```
nav {
    ul {
        margin: 0;
    }
}
```

3. 导入外部scss文件

```
@import 'reset'        // 导入外部的reset.scss文件内容
```

4. Mixin函数

`@include` 引入mixin函数

```
@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
       -moz-border-radius: $radius;
        -ms-border-radius: $radius;
            border-radius: $radius;
}

.box { @include border-radius(10px); }
```

5. Mixin内容

`@content`保证内容出现

```
@mixin apply-to-ie6-only {
    html {
      @content
    }
}
@include apply-to-ie6-only {
    #logo {
        background-image: url(/logo.gif);
    }
}
```

6. 继承

用`@extend`表示继承

```
.message {
    border: 1px solid #ccc;
}

.success {
    @extend .message;
    border-color: green;
}
```

7. 操作符

支持`+`, `-`, `*`, `/`运算

8. 嵌套性质 --> `:`

`font-family`, `font-size`, `font-weight`嵌套写法

```
.funky {
    font: {                  // 注意与前面嵌套的区别在于这里有个冒号...
        family: fantasy;
        size: 30em;
        weight: bold;
    }
}
```

9. 父级选择器 --> `&`

```
#main {
    color: black;
    a { font-weight: bold;
        &:hover { color: red; } }
}
```

10. html标签混合 `#{$var}`

```
$i: 1;
h#{$i} {
    font: {
        size: 21px;
    }
}
```

11. 循环

  - each, 但是像下面这种会增加css的体积

      ```
      @each $animal in puma, sea-slug, egret {
        .#{$animal}-icon {
            background-image: url("/images/#{$animal}.png");
        }
      }
      ```

  - for

      注意`through`和`to`的区别

      ```
      // @for $i from 1 through 6
      @for $i from 1 to 7 {
        h#{$i} {
            font-size: 24px - 3px * $i;
        }
      }
      ```

  - while

      ```
      $i: 1;
      @while $i < 7 {
          h#{$i} {
              font-size: 24px - 3px * $i;
          }
          $i: $i + 1;
      }
      ```
