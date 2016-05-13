
有`gitlab`这种工具，我还特么之前自己还建`git`服务器做什么，哎。

首先，我们到官方网站上找到安装的[文档][1]

但是，别急，下面非常小的一段文字表示国内用户还是用国内的镜像，速度才会快啊--，坑爹。

[清华的镜像文档][2]可以替换原来的第二步。

其次，别急着做第三步，先对其进行配置。编辑`/etc/gitlab/gitlab.rb`

由于自己只是将`gitlab`作为公司局域网的代码管理，所以目标只是这个咯

其一，修改`external_url`为 "本机的IP地址:port"，port如果没有冲突可以默认就好了

其二，修改其中的邮件通知功能，因为本机并没有mail的服务功能，自己对mail服务的安装又不是很熟悉, `postfix`试了也不成功，
还是用公司内部或者第三方的邮件服务。

`gitlab_email_from`, `gitlab_email_display_name`

SMTP服务器配置变量

其中看`gitlab`项目中的[文档][3]就有比较详细的配置。

自己修改了`smtp_enable`, `smtp_address`, `smtp_port`, `smtp_user_name`, `smtp_password`, `smtp_domain`, `smtp_authentication`, `smtp_enable_starttls_auto`, 其实大部分只是打开注释而已，很简单。

其三，将git仓库存储到另外的位置。修改 `git_data_dir`为自己想要的目录路径

[1]: https://about.gitlab.com/downloads/#ubuntu1404
[2]: https://mirror.tuna.tsinghua.edu.cn/help/gitlab-ce/
[3]: https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/settings/smtp.md#smtp-settings
