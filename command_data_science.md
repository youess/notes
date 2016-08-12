

在命令行中进行数据操作，听起来很酷，但是实际操作起来还是挺麻烦的。

可以参考[这篇博文][1]，查看全部推荐

只需要其中简单的命令即可，太多学习成本有点高，容易忘

1. 查看第一行所有列的名称

```
head -n 1 fejwo.csv | tr ',' '\n' | nl
```

2. 查看csv结构数据

`csvlook`, `csvcut`

3. `csvsql`这个有点屌

```
cat bfTrain.csv | csvsql --query "select Gender,avg(Purchase), min(Purchase), max(Purchase) from stdin group by 1" | csvlook
```

4. `csvstat`

不太有用，比较慢且统计出来的指标不整齐

[1]: https://www.analyticsvidhya.com/blog/2016/08/tutorial-data-science-command-line-scikit-learn/
[2]: https://github.com/jeroenjanssens/data-science-at-the-command-line
