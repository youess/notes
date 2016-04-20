## MySQL同步数据库


现在比较好做的是整张表的同步

```bash
mysqldump --host <host_name> \
    --port <port_num> \
    -u<username> \
    -p<passwd> \
    --skip-lock-tables \         # 跳过备份的时候锁住表，不能进行插入操作，尤其当没有这个权限的时候加入这个是比较有用的
    --add-drop-table \           # 添加drop table，每次保存的时候会先删除这个表
    | mysql -u<local_user_name> -p<local_passwd> -D <local_database_name>

```
也可以用`--where` 做一些subset, 用`mysqldump`进行比较实时的同步还是比较难，现在还没有找到解决的方案（尤其自己不能创建replicate数据集的时候）
