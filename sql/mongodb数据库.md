
## Mongodb常用操作

### 1. [ubuntu安装][1]

```
# 添加mongodb key
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
# 加入源地址,3.2版本
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

sudo apt-get update
sudo apt-get install -y mongodb-org
```

**配置mongodb**

修改默认的数据库位置, 编辑`/etc/mongodb.conf`将`dbpath`的值修改为自己需要存放的位置，以及修改`port`

如果有`errno 111`错误的话，先删除`sudo rm /var/lib/mongodb/mongod.lock`然后重启`sudo service mongod restart`
如果有不能启动数据库的情况下，请把`dbpath`的用户和组名修改为mongodb, `sudo chown -R mongodb:mongodb dbpath`

打开mongodb的时候会有`Transparent huge pages`的警告出现, 参考[这个网址][2]进行配置


## 删除表

```
# assume the collection name is "sbl"
db.sbl.drop()
# if collection name is same as binding function, will get an TypeError, say collection name is "group"
db.getCollection("group").drop()
```

## 关于rmongodb导入数据时，日期引起的问题

`mongoose`默认的日期格式导入到`mongodb`中是ISO格式的，但是用R来做的时候如果日期只是`Date`格式，则导入到`mongodb`中是`String`的，所以做筛选的时候总是不对, 需要将R中的日期格式用`as.POSIXct`进行转换才行

同时需要更新某一个字段的值时，我们可以使用下面[这种方法][3]，
在mongo的shell中查询并更替记录中的`field`，再保存到数据库当中,
有200多万条记录的时候，发现还是比较慢来着

```
db.collection_name.find().forEach(function(e) {
    e.date = ISODate(e.date);
    db.collection_name.save(e);
});
```


## mongo查询

> 1. 有效的查询数据库中某一属性是array时候，长度大于1的记录

```
# 语句用来查找oid段是否第二个元素存在来进行索引，比用$gt更加有效率
db.hotels.find( { "oid.1": { $exists: true } } )
```

mongo的去重查询

只看到用`distinct`去查看单个field的元素

在mongo shell中，利用`group`可以执行相关的group by的操作，具体例子查看mongo的文档api

```
db.cc.group({
  key: {},
  cond: {},
  reduce: function() {},
  initial: {}
})
```

mongoose当中还只封装了`aggregate`的功能, `group`还没有

```
ModelName.aggregate([
 {$match: {}},
 {$group: {}}
])
```


[1]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
[2]: https://docs.mongodb.com/manual/tutorial/transparent-huge-pages/
[3]: http://stackoverflow.com/questions/15473772/how-to-convert-from-string-to-date-data-type
