

## R常用数据框操作方法


1. 查看数据概览

  + `dplyr::glimpse`, 总结查看
  + `%>%`, 管道操作

2. 改变数据结构

  + `tidyr::gather`，宽 --> 长
  + `tidyr::spread`, 长 --> 宽
  + `tidyr::separate`, col_paste -> col1, col2, col3, ...
  + `tidyr::unite`，col1, col2, col3, ... --> col_paste

3. 按行subset

  + `dplyr::filter`，筛选
  + `dplyr::distinct`, 去重
  + `dplyr::sample_frac`, 随机按比例取样
  + `dplyr::sample_n`，随机取n行
  + `dplyr::slice`, 取其中的几行
  + `dplyr::top_n`, 前几行

4. 按列subset

  + `dplyr::select`, 按列取变量

5. 总结数据

  + `dplyr::summarise`，总结至一行
  + `dplyr::summarise_each`，按列总结

6. 生成新列

  + `dplyr::mutate`，生成一列或多列
  + `dplyr::mutate_each`， 对每一列用window function操作，常见的window function如`cumsum`, `dplyr::lead`, `pmin`等

7. 数据分组

  + `dplyr::group_by`。常和其他方法结合，如 `iris %>% group_by(...) %>% summarise(...)`或者 `iris %>% group_by(...) %>% mutate(...)`

8. 数据融合， data combine

  + `dplyr::left_join` 左联接
  + `dplyr::right_join`
  + `dplyr::full_join`
  + `dplyr::inner_join`
  + `dplyr::semi_join`
  + `dplyr::anti_join`

9. 数据集合操作, set operation

  + `dplyr::intersect`
  + `dplyr::union`
  + `dplyr::setdiff`

10. 数据结合, data bindding

  + `dplyr::bind_row`
  + `dplyr::bind_col`



## pandas对应的操作方法



```python
import pandas as pd
import numpy as np
from sklearn import datasets

iris = datasets.load_iris()
# print(iris.keys())
dat = pd.DataFrame(iris.data, columns=iris.feature_names)
```


```python
dat.head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sepal length (cm)</th>
      <th>sepal width (cm)</th>
      <th>petal length (cm)</th>
      <th>petal width (cm)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
  </tbody>
</table>
</div>




```python
# rename column
dat.columns = ["sepal_len", "sepal_width", "petal_len", "petal_width"]
dat.head()
# rename row
# dat.index
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sepal_len</th>
      <th>sepal_width</th>
      <th>petal_len</th>
      <th>petal_width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
  </tbody>
</table>
</div>




```python
# summary --> glimpse
dat.describe()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sepal_len</th>
      <th>sepal_width</th>
      <th>petal_len</th>
      <th>petal_width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>5.843333</td>
      <td>3.054000</td>
      <td>3.758667</td>
      <td>1.198667</td>
    </tr>
    <tr>
      <th>std</th>
      <td>0.828066</td>
      <td>0.433594</td>
      <td>1.764420</td>
      <td>0.763161</td>
    </tr>
    <tr>
      <th>min</th>
      <td>4.300000</td>
      <td>2.000000</td>
      <td>1.000000</td>
      <td>0.100000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>5.100000</td>
      <td>2.800000</td>
      <td>1.600000</td>
      <td>0.300000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>5.800000</td>
      <td>3.000000</td>
      <td>4.350000</td>
      <td>1.300000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>6.400000</td>
      <td>3.300000</td>
      <td>5.100000</td>
      <td>1.800000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>7.900000</td>
      <td>4.400000</td>
      <td>6.900000</td>
      <td>2.500000</td>
    </tr>
  </tbody>
</table>
</div>




```python
dat.dtypes
```




    sepal_len      float64
    sepal_width    float64
    petal_len      float64
    petal_width    float64
    dtype: object




```python
# add one column
dat["class"] = pd.Series(iris.target)
dat.head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sepal_len</th>
      <th>sepal_width</th>
      <th>petal_len</th>
      <th>petal_width</th>
      <th>class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
      <td>0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# subset row
dat[(dat["class"] == 0) | (dat["class"] == 1)].shape
```




    (100, 5)




```python
# view one row
# 关于用.ix, .loc, iloc等的解释： http://pandas.pydata.org/pandas-docs/stable/indexing.html#different-choices-for-indexing
dat.ix[0, ]
```




    sepal_len      5.1
    sepal_width    3.5
    petal_len      1.4
    petal_width    0.2
    class          0.0
    Name: 0, dtype: float64




```python
# drop duplicated row
print(dat.shape)
print(dat.duplicated().head())

# duplicated terms, should not be remove in this case for sample actual exists
print(dat[dat.duplicated()])
print(dat.drop_duplicates().shape)                # ?dat.drop_duplicates to look more
```

    (150, 5)
    0    False
    1    False
    2    False
    3    False
    4    False
    dtype: bool
         sepal_len  sepal_width  petal_len  petal_width  class
    34         4.9          3.1        1.5          0.1      0
    37         4.9          3.1        1.5          0.1      0
    142        5.8          2.7        5.1          1.9      2
    (147, 5)
    


```python
# sample row
# http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.sample.html

dat.sample(frac=.5, replace=False).shape        # ?dat.sample for more explanation
```




    (75, 5)




```python
# 取列变量

dat[[1, 2, 3]].head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sepal_width</th>
      <th>petal_len</th>
      <th>petal_width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3.2</td>
      <td>1.3</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3.1</td>
      <td>1.5</td>
      <td>0.2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>3.6</td>
      <td>1.4</td>
      <td>0.2</td>
    </tr>
  </tbody>
</table>
</div>




```python
dat[["sepal_len", "sepal_width"]].head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sepal_len</th>
      <th>sepal_width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>3.5</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>3.2</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>3.1</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>3.6</td>
    </tr>
  </tbody>
</table>
</div>




```python
dat.select(lambda col: col.endswith("_len"), axis=1).head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sepal_len</th>
      <th>petal_len</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>1.4</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>1.4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4.7</td>
      <td>1.3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4.6</td>
      <td>1.5</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5.0</td>
      <td>1.4</td>
    </tr>
  </tbody>
</table>
</div>




```python
## group by分组处理数据

gdat = dat.groupby(["class"]) 

# 不能同时用两个匿名函数
quantile_1 = lambda x: x.quantile(.25)
quantile_2 = lambda x: x.quantile(.75)

aggregation = {
    "sepal_len": ["max", "sum"],
    "sepal_width": ["median", "mean"],
    "petal_len": [lambda x: (x.quantile(.25), x.quantile(.75))],
    "petal_width": ["std"]
}
gdat.agg(aggregation)
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th>petal_width</th>
      <th colspan="2" halign="left">sepal_width</th>
      <th>petal_len</th>
      <th colspan="2" halign="left">sepal_len</th>
    </tr>
    <tr>
      <th></th>
      <th>std</th>
      <th>median</th>
      <th>mean</th>
      <th>&lt;lambda&gt;</th>
      <th>max</th>
      <th>sum</th>
    </tr>
    <tr>
      <th>class</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0.107210</td>
      <td>3.4</td>
      <td>3.418</td>
      <td>(1.4, 1.575)</td>
      <td>5.8</td>
      <td>250.3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0.197753</td>
      <td>2.8</td>
      <td>2.770</td>
      <td>(4.0, 4.6)</td>
      <td>7.0</td>
      <td>296.8</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.274650</td>
      <td>3.0</td>
      <td>2.974</td>
      <td>(5.1, 5.875)</td>
      <td>7.9</td>
      <td>329.4</td>
    </tr>
  </tbody>
</table>
</div>




```python
gdat.describe().T
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th>class</th>
      <th colspan="8" halign="left">0</th>
      <th colspan="5" halign="left">1</th>
      <th colspan="8" halign="left">2</th>
    </tr>
    <tr>
      <th></th>
      <th>count</th>
      <th>mean</th>
      <th>std</th>
      <th>min</th>
      <th>25%</th>
      <th>50%</th>
      <th>75%</th>
      <th>max</th>
      <th>count</th>
      <th>mean</th>
      <th>...</th>
      <th>75%</th>
      <th>max</th>
      <th>count</th>
      <th>mean</th>
      <th>std</th>
      <th>min</th>
      <th>25%</th>
      <th>50%</th>
      <th>75%</th>
      <th>max</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>sepal_len</th>
      <td>50.0</td>
      <td>5.006</td>
      <td>0.352490</td>
      <td>4.3</td>
      <td>4.800</td>
      <td>5.0</td>
      <td>5.200</td>
      <td>5.8</td>
      <td>50.0</td>
      <td>5.936</td>
      <td>...</td>
      <td>6.3</td>
      <td>7.0</td>
      <td>50.0</td>
      <td>6.588</td>
      <td>0.635880</td>
      <td>4.9</td>
      <td>6.225</td>
      <td>6.50</td>
      <td>6.900</td>
      <td>7.9</td>
    </tr>
    <tr>
      <th>sepal_width</th>
      <td>50.0</td>
      <td>3.418</td>
      <td>0.381024</td>
      <td>2.3</td>
      <td>3.125</td>
      <td>3.4</td>
      <td>3.675</td>
      <td>4.4</td>
      <td>50.0</td>
      <td>2.770</td>
      <td>...</td>
      <td>3.0</td>
      <td>3.4</td>
      <td>50.0</td>
      <td>2.974</td>
      <td>0.322497</td>
      <td>2.2</td>
      <td>2.800</td>
      <td>3.00</td>
      <td>3.175</td>
      <td>3.8</td>
    </tr>
    <tr>
      <th>petal_len</th>
      <td>50.0</td>
      <td>1.464</td>
      <td>0.173511</td>
      <td>1.0</td>
      <td>1.400</td>
      <td>1.5</td>
      <td>1.575</td>
      <td>1.9</td>
      <td>50.0</td>
      <td>4.260</td>
      <td>...</td>
      <td>4.6</td>
      <td>5.1</td>
      <td>50.0</td>
      <td>5.552</td>
      <td>0.551895</td>
      <td>4.5</td>
      <td>5.100</td>
      <td>5.55</td>
      <td>5.875</td>
      <td>6.9</td>
    </tr>
    <tr>
      <th>petal_width</th>
      <td>50.0</td>
      <td>0.244</td>
      <td>0.107210</td>
      <td>0.1</td>
      <td>0.200</td>
      <td>0.2</td>
      <td>0.300</td>
      <td>0.6</td>
      <td>50.0</td>
      <td>1.326</td>
      <td>...</td>
      <td>1.5</td>
      <td>1.8</td>
      <td>50.0</td>
      <td>2.026</td>
      <td>0.274650</td>
      <td>1.4</td>
      <td>1.800</td>
      <td>2.00</td>
      <td>2.300</td>
      <td>2.5</td>
    </tr>
    <tr>
      <th>class</th>
      <td>50.0</td>
      <td>0.000</td>
      <td>0.000000</td>
      <td>0.0</td>
      <td>0.000</td>
      <td>0.0</td>
      <td>0.000</td>
      <td>0.0</td>
      <td>50.0</td>
      <td>1.000</td>
      <td>...</td>
      <td>1.0</td>
      <td>1.0</td>
      <td>50.0</td>
      <td>2.000</td>
      <td>0.000000</td>
      <td>2.0</td>
      <td>2.000</td>
      <td>2.00</td>
      <td>2.000</td>
      <td>2.0</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 24 columns</p>
</div>




```python
## data binding

pieces = [ pd.DataFrame(np.random.randn(2, 4)),          # 正太分布中取2行4列
           pd.DataFrame(np.random.randn(3, 4)),
           pd.DataFrame(np.random.randn(4, 4)) ]
df = pd.concat(pieces)
df
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>-0.403756</td>
      <td>1.855038</td>
      <td>-1.955124</td>
      <td>0.121965</td>
    </tr>
    <tr>
      <th>1</th>
      <td>-0.656438</td>
      <td>-1.967252</td>
      <td>0.625937</td>
      <td>0.037715</td>
    </tr>
    <tr>
      <th>0</th>
      <td>0.031247</td>
      <td>0.390982</td>
      <td>-0.915402</td>
      <td>0.564363</td>
    </tr>
    <tr>
      <th>1</th>
      <td>-1.394616</td>
      <td>-0.790102</td>
      <td>-0.859008</td>
      <td>0.109144</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.623893</td>
      <td>-0.279441</td>
      <td>-0.904959</td>
      <td>-1.481093</td>
    </tr>
    <tr>
      <th>0</th>
      <td>0.799100</td>
      <td>-0.713702</td>
      <td>0.795353</td>
      <td>-0.516800</td>
    </tr>
    <tr>
      <th>1</th>
      <td>-0.264604</td>
      <td>0.336398</td>
      <td>0.085506</td>
      <td>0.796623</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.527027</td>
      <td>-0.678549</td>
      <td>-0.190153</td>
      <td>0.157416</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1.245002</td>
      <td>-0.169931</td>
      <td>0.275480</td>
      <td>0.596539</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.append(pd.DataFrame(np.random.rand(1, 4)), ignore_index=True)
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>-0.403756</td>
      <td>1.855038</td>
      <td>-1.955124</td>
      <td>0.121965</td>
    </tr>
    <tr>
      <th>1</th>
      <td>-0.656438</td>
      <td>-1.967252</td>
      <td>0.625937</td>
      <td>0.037715</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.031247</td>
      <td>0.390982</td>
      <td>-0.915402</td>
      <td>0.564363</td>
    </tr>
    <tr>
      <th>3</th>
      <td>-1.394616</td>
      <td>-0.790102</td>
      <td>-0.859008</td>
      <td>0.109144</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.623893</td>
      <td>-0.279441</td>
      <td>-0.904959</td>
      <td>-1.481093</td>
    </tr>
    <tr>
      <th>5</th>
      <td>0.799100</td>
      <td>-0.713702</td>
      <td>0.795353</td>
      <td>-0.516800</td>
    </tr>
    <tr>
      <th>6</th>
      <td>-0.264604</td>
      <td>0.336398</td>
      <td>0.085506</td>
      <td>0.796623</td>
    </tr>
    <tr>
      <th>7</th>
      <td>0.527027</td>
      <td>-0.678549</td>
      <td>-0.190153</td>
      <td>0.157416</td>
    </tr>
    <tr>
      <th>8</th>
      <td>1.245002</td>
      <td>-0.169931</td>
      <td>0.275480</td>
      <td>0.596539</td>
    </tr>
    <tr>
      <th>9</th>
      <td>0.928021</td>
      <td>0.687768</td>
      <td>0.696906</td>
      <td>0.773003</td>
    </tr>
  </tbody>
</table>
</div>




```python
## data merge, combine

dat1 = pd.DataFrame({
    "key": ["A", "A", "B", "C"],
    "val1": np.random.binomial(10, .2, 4)
})
dat2 = pd.DataFrame({
    "key": ["B", "C", "D"],
    "val2": np.random.binomial(100, .3, 3)
})
print(dat1)
print(dat2)
# left join
pd.merge(dat1, dat2, how="left")
```

      key  val1
    0   A     2
    1   A     1
    2   B     1
    3   C     3
      key  val2
    0   B    36
    1   C    24
    2   D    25
    




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>key</th>
      <th>val1</th>
      <th>val2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>2</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>A</td>
      <td>1</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>B</td>
      <td>1</td>
      <td>36.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>C</td>
      <td>3</td>
      <td>24.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# right join
pd.merge(dat1, dat2, how="right")
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>key</th>
      <th>val1</th>
      <th>val2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>B</td>
      <td>1.0</td>
      <td>36</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C</td>
      <td>3.0</td>
      <td>24</td>
    </tr>
    <tr>
      <th>2</th>
      <td>D</td>
      <td>NaN</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
</div>




```python
# inner join
pd.merge(dat1, dat2, how="inner")
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>key</th>
      <th>val1</th>
      <th>val2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>B</td>
      <td>1</td>
      <td>36</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C</td>
      <td>3</td>
      <td>24</td>
    </tr>
  </tbody>
</table>
</div>




```python
# full join
pd.merge(dat1, dat2, how="outer", on = "key")
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>key</th>
      <th>val1</th>
      <th>val2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>2.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>A</td>
      <td>1.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>B</td>
      <td>1.0</td>
      <td>36.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>C</td>
      <td>3.0</td>
      <td>24.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>D</td>
      <td>NaN</td>
      <td>25.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
# combine first

df1 = pd.DataFrame({'A' : [1., np.nan, 3., 5., np.nan],
                    'B' : [np.nan, 2., 3., np.nan, 6.]})


df2 = pd.DataFrame({"A" : [5., 2., 4., np.nan, 3., 7.],
                    "B" : [np.nan, np.nan, 3., 4., 6., 8.]})

print(df1)
print(df2)
```

         A    B
    0  1.0  NaN
    1  NaN  2.0
    2  3.0  3.0
    3  5.0  NaN
    4  NaN  6.0
         A    B
    0  5.0  NaN
    1  2.0  NaN
    2  4.0  3.0
    3  NaN  4.0
    4  3.0  6.0
    5  7.0  8.0
    


```python
combiner = lambda x, y: np.where(pd.isnull(x), y, x)
df1.combine(df2, combiner)                 # equal to combine_first()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2.0</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3.0</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>5.0</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>3.0</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>5</th>
      <td>7.0</td>
      <td>8.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
## tidyr spread, gather etc
df = pd.DataFrame({
        "index_name": ["A", "B", "A", "B"],
        "columns_name": ["foo", "foo", "bar", "bar"],
        "value": [1, 2, 3, 4]
    })
print(df)
```

      columns_name index_name  value
    0          foo          A      1
    1          foo          B      2
    2          bar          A      3
    3          bar          B      4
    


```python
df = df.pivot("index_name", "columns_name", "value")
df
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>columns_name</th>
      <th>bar</th>
      <th>foo</th>
    </tr>
    <tr>
      <th>index_name</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>A</th>
      <td>3</td>
      <td>1</td>
    </tr>
    <tr>
      <th>B</th>
      <td>4</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.melt(df)
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>columns_name</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>bar</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>bar</td>
      <td>4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>foo</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>foo</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>



### 参考文献

1. [pandas agg详解][1]
2. [数据融合][2]
3. [pandas 1.8.2 API][3]
4. [pandas数据reshap和pivot图解][4]

[1]: http://www.shanelynn.ie/summarising-aggregation-and-grouping-data-in-python-pandas/
[2]: http://pandas.pydata.org/pandas-docs/stable/merging.html
[3]: http://pandas.pydata.org/pandas-docs/stable/api.html
[4]: http://www.nikgrozev.org/2015/07/01/reshaping-in-pandas-pivot-pivot-table-stack-and-unstack-explained-with-pictures/
