
今日本来打算帮别人做一下饿了么的网站数据抓取的，本来以为是静态页面，直接了当的写一个程序慢慢抓取就好了，然而，他喵的居然是异步的加载javascript做的数据区域。没搞懂，灰溜溜的败下阵来。尝试用`python + phantomjs + selinium`做，结果没试出来，功夫不到家。

后来得知，居然有现成的工具可以直接做，比如`gooseeker`，其他还有八爪鱼什么的，但是个人感觉`gooseeker`依赖于firefox，应该和`phantomjs`用来模拟浏览器差不多，不过就是不太懂饿了么这种采用的方式是如何在页面中将数据隐藏起来了。用`gooseeker`来做还要账号注册，不知道会收集什么样的数据到他自己的产品当中去。
