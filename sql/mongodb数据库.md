
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



[1]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
[2]: https://docs.mongodb.com/manual/tutorial/transparent-huge-pages/
