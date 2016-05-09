

Vagrant这个封装起来的虚拟机接口用起来十分的不错，不过我自己想比较久的用一个ubuntu的盒子，但是有时还是有点容易出现崩溃的现象

Anyway，不妨碍这个工具的巨大优势。

现在我比较固定的搭配是vagrant[1.7.4]，virtualbox[5.0.16]以及ubuntu14.04的一个虚拟盒子


# Vagrant是什么?

Vagrant是使用ruby开发的一种跨平台、可配置、轻量级的便携式虚拟开发环境工具。适合开发web应用，避免因为不同的开发环境造成的代码不可重复。在edx spark课程中所用的环境就是用这种工具搭建的。其实它的初衷就是砍掉GUI而已，不然用原来的虚拟机工具打开就完了。

# 搭建虚拟环境

## 自己从虚拟机镜像中创建


[具体参考这篇博文][make_vbox]

我自己下载了一个ubuntu 14.10的server版本，然后自己制作，说说其中特别注意的一点，名字和密码都设置成vagrant，不然启动虚拟机是会出问题，修改配置文件又比较麻烦。

主要步骤如下：

1. 安装ubuntu服务器

2. 创建admin组，`sudo groupadd admin`并将vagrant加入admin组中，`sudo usermod -G admin vagrant`
3. 修改sudoers文件，`sudo vi /etc/sudoers`，添加

	```
	Defaults env_keep="SSH_AUTH_SOCK"
	%admin ALL=(ALL) NOPASSWD: ALL
	```

4. 安装一些自己需要用的基本文件**

5. 设置ssh无密码登录**

	```
  	mkdir ~/.ssh
  	cd ~/.ssh
	wget -c http://github.com/mitchellh/vagrant/raw/master/keys/vagrant
	wget -c http://github.com/mitchellh/vagrant/raw/master/keys/vagrant.pub && mv vagrant.pub authorized_keys
	```

6. 关机

7. 打包盒子, 在主机中找到创建的虚拟机文件夹

    ```
	vagrant package --output vagrant_ubuntu64_server.box --base vagrant_ubuntu64
    ```

## 另外的方法是直接从网上下载镜像盒子。

1. 添加box

    ```
    vagrant box add box_file_path --name name_the_box
    ```

2. 初始化

    ```
    vagrant init name_the_box           # 如果有Vagrantfile配置文件，则可以跳过
    ```

3. 编辑Vagrantfile文件，比如填写如下的内容

    ```
    Vagrant.configure(2) do |config|
        config.vm.define "solar" do |solar|
            solar.vm.box = "solar"
            solar.vm.boot_timeout = 900
            solar.vm.network :forwarded_port, host: 3000, guest: 3000, auto_correct: true
            solar.vm.network :forwarded_port, host: 3001, guest: 3001, auto_correct: true
            solar.vm.network :forwarded_port, host: 8001, guest: 8001, auto_correct: true
            solar.vm.network :forwarded_port, host: 8002, guest: 8002, auto_correct: true
            solar.vm.network :forwarded_port, host: 8888, guest: 8888, auto_correct: true

            solar.vm.hostname = "solar"
            solar.vm.provider :virtualbox do |v|
                v.name = solar.vm.hostname.to_s
                v.memory = 2048
                v.cpus = 2
            end
        end
    end
    ```

4. 启动虚拟机

    ```
    vagrant up Vagrantfile_defined_box_name
    ```

5. 连接到虚拟机

    ```
    vagrant ssh Vagrantfile_defined_box_name
    ```

6. 重启虚拟机

    ```
    vagrant reload Vagrantfile_defined_box_name
    ```

7. 关闭虚拟机

    ```
    vagrant halt Vagrantfile_defined_box_name
    ```

# 问题篇

### Virtualbox的guestaddition缺失问题导致共享文件夹不能加载

1. 加载`GuestAddition`, 一般安装的virtualbox目录就有

```
sudo mount /dev/cdrom /media/cdrom             # 如果在/media/cdrom加载这句命令，需要切一切目录
```

2. 加载`GuestAddition`

```
sudo ./VBoxLinuxAdditions.run
```

### gem源替换

1. 查看源list

```
gem sources list
```

2. 删除源

```
gem sources -r http://...
```

3. 添加源

```
gem sources -a http://...
```

[vagrant doc]: https://docs.vagrantup.com/v2/
[vagrant download]: http://www.vagrantup.com/downloads
[vbox]: https://www.virtualbox.org/wiki/Downloads
[vbox_list]: http://www.vagrantbox.es/
[make_vbox]: http://xuclv.blog.51cto.com/5503169/1239351
[vagrant github]: https://github.com/astaxie/Go-in-Action/blob/master/ebook/zh/01.2.md
[hadoop]: http://www.cnblogs.com/shishanyuan/p/4147580.html
