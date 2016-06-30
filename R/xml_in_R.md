---
title: "XML demo.Rmd"
author: "denis"
date: "2016/6/30"
output: html_document
---



# XML在R中的应用

关于XML的包的应用，可以参考[此篇PPT][1]

主要利用`xpath`对xml进行解析, `xpath`可以参考[w3school介绍][2]或者阮一峰的[xpath博客][3]或者[中文wiki][4]


```r
require("XML")
require("magrittr")
```



```r
doc <- xmlParse("./book.xml")

getNodeSet(doc, "/bookstore/book[1]")                        # / 表示从根节点开始
```

```
[[1]]
<book category="cooking">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book> 

attr(,"class")
[1] "XMLNodeSet"
```

```r
getNodeSet(doc, "/bookstore/book[last()]")                   # 最后一个，但是没有first()函数
```

```
[[1]]
<book category="web">
  <title lang="en">Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book> 

attr(,"class")
[1] "XMLNodeSet"
```

```r
getNodeSet(doc, "/bookstore/book[last() - 1]")
```

```
[[1]]
<book category="web">
  <title lang="en">XQuery Kick Start</title>
  <author>James McGovern</author>
  <author>Per Bothner</author>
  <author>Kurt Cagle</author>
  <author>James Linn</author>
  <author>Vaidyanathan Nagarajan</author>
  <year>2003</year>
  <price>49.99</price>
</book> 

attr(,"class")
[1] "XMLNodeSet"
```

```r
getNodeSet(doc, "/bookstore/book[position() < 3]")
```

```
[[1]]
<book category="cooking">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book> 

[[2]]
<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book> 

attr(,"class")
[1] "XMLNodeSet"
```

```r
getNodeSet(doc, "//book[price > 35]")                        # // 表示任意位置
```

```
[[1]]
<book category="web">
  <title lang="en">XQuery Kick Start</title>
  <author>James McGovern</author>
  <author>Per Bothner</author>
  <author>Kurt Cagle</author>
  <author>James Linn</author>
  <author>Vaidyanathan Nagarajan</author>
  <year>2003</year>
  <price>49.99</price>
</book> 

[[2]]
<book category="web">
  <title lang="en">Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book> 

attr(,"class")
[1] "XMLNodeSet"
```

```r
getNodeSet(doc, "//title[@lang='en']/text()")                # @表示选取属性，text()表示取其中的值
```

```
[[1]]
Everyday Italian 

[[2]]
Harry Potter 

[[3]]
XQuery Kick Start 

[[4]]
Learning XML 

attr(,"class")
[1] "XMLNodeSet"
```

```r
getNodeSet(doc, "/bookstore/book[1]/*")                      # 表示选取book节点下面所有的子节点, 注意和上面第一个的区别
```

```
[[1]]
<title lang="en">Everyday Italian</title> 

[[2]]
<author>Giada De Laurentiis</author> 

[[3]]
<year>2005</year> 

[[4]]
<price>30.00</price> 

attr(,"class")
[1] "XMLNodeSet"
```

```r
getNodeSet(doc, "/bookstore/book[1]/year | /bookstore/book[1]/author")        # 返回结果还是按照原来的顺序，多个选择器
```

```
[[1]]
<author>Giada De Laurentiis</author> 

[[2]]
<year>2005</year> 

attr(,"class")
[1] "XMLNodeSet"
```


```r
category = getNodeSet(doc, "/bookstore/book/@category") %>% unlist               # 获取属性值
language = getNodeSet(doc, "/bookstore/book/title/@lang") %>% unlist
# title = getNodeSet(doc, "/bookstore/book/title/text()") %>% unlist             # XML包比较不爽的是这样子不能够直接转换值，只能通过下面的方式转换

title = getNodeSet(doc, "/bookstore/book/title") %>% xmlSApply(xmlValue)
# title = xpathApply(doc, "/bookstore/book/title", xmlValue) %>% unlist()        # 一步封装
# author = getNodeSet(doc, "/bookstore/book")
author = xpathApply(doc, "/bookstore/book", function(x) { 
  getNodeSet(x, "./author") %>%                                                  # 注意这里用相对路径，用//符号的话，会获取全文的author
  xmlSApply(xmlValue) %>% 
  paste(collapse=",") }) %>% unlist
year = getNodeSet(doc, "/bookstore/book/year/text()") %>% xmlSApply(xmlValue)
price = getNodeSet(doc, "/bookstore/book/price/text()") %>% xmlSApply(xmlValue)

knitr::kable(data.frame(category, language, title, author, year, price))
```



|category |language |title             |author                                                                  |year |price |
|:--------|:--------|:-----------------|:-----------------------------------------------------------------------|:----|:-----|
|cooking  |en       |Everyday Italian  |Giada De Laurentiis                                                     |2005 |30.00 |
|children |en       |Harry Potter      |J K. Rowling                                                            |2005 |29.99 |
|web      |en       |XQuery Kick Start |James McGovern,Per Bothner,Kurt Cagle,James Linn,Vaidyanathan Nagarajan |2003 |49.99 |
|web      |en       |Learning XML      |Erik T. Ray                                                             |2003 |39.95 |


[1]: https://www.stat.berkeley.edu/~statcur/Workshop2/Presentations/XML.pdf
[2]: http://www.w3schools.com/xml/xml_xpath.asp
[3]: http://www.ruanyifeng.com/blog/2009/07/xpath_path_expressions.html
[4]: https://zh.wikipedia.org/wiki/XPath
