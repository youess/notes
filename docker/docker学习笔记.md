
# Docker学习笔记

## 安装相关

查看[官方文档][1]

## 命令相关

> ### 如何修改默认的image目录

- modify `/etc/default/docker`文件中`DOCKER_OPTS`变量，添加`-g <path_to_store_image>`
- 具体的可以查看`docker daemon -h`详细内容，或者官网的一些[示例][2]

> ### 常用命令

- `docker ps -aq`，查看所有容器
- `docker rm <container_id>`，删除id为`<container_id>`的容器
- `docker rmi <image>`, 删除镜像
- `docker run -it image:<tag>`, 交互运行镜像
- `docker build -t <tagname> .`, 以当前目录寻找`Dockerfile`构建镜像

> ### 数据科学方便的dockerfile

- `docker pull jupyter/all-spark-notebook`
- [主页][3]，简直是python数据挖掘前人之高作，能省好大一份力气去搭建这个环境

> ### 保存镜像

免得换个机器还得重新再下载一次，网速太慢就得这样子干了

- `docker save jupyter/all-spark-notebook:latest | gzip -c > ./all-spark-notebook.tgz`
- `gunzip -c ./all-spark-notebook.tgz | docker load`

[1]: https://docs.docker.com/engine/installation/linux/ubuntulinux/
[2]: https://docs.docker.com/engine/reference/commandline/dockerd/
[3]: https://github.com/jupyter/docker-stacks
