## Git Introduction

### 1. 简介

#### 背景

  + **版本控制**

    + 本地
    + 集中式，一个服务器
    + 分布式

  + 创始者，**Linus Torvalds**

#### 特点

  + 高速
  + 设计简单
  + 有向无环图设计
  + 完全分布式
  + 保存各个提交的版本，可回退到任何历史版本
  + 管理大项目(eg: linux源码)

#### 安装

  + Linux. `apt-get install git`
  + Mac. `brew install git`
  + Windows. 下载地址: `https://git-scm.com/download/win` 或者直接[64bit下载][git_exe_link], 另外图形界面工具[TortoiseGit][tortoisegit]

### 2. 基本操作

  + `git clone`, 加一个git仓库地址就能将项目copy到本地目录中
  + `git init`，用于新建项目用git管理时的初始化
  + `git add`, 将文件添加到git暂存区
  + `git commit`, 将文件添加到本地git仓库中
  + `git pull`, 获取远程git仓库项目更新内容
  + `git push`, 将本地项目中修改的内容推送到远程服务器

### 3. 回退

  + `git log`, 查看历史修改的版本号。`git log --graph --pretty=oneline --abbrev-commit` 查看分支合并图
  + `git reset`, 用来回退到以前的版本。例如 `git reset --hard HEAD^` 回到最初的版本了。

### 4. 分支

  + `git checkout -b dev`, 创建分支`dev`

### 5. 冲突

  + `git merge dev`, 假设我们现在在`master`分支，需要合并`dev`分支，如果两个分支中均有修改的东西，那么就需要手工修改
  + `git merge --no-ff -m "comments" dev`. 可以保留分支的历史，即使将分支删除，也不会遗失分支信息

### 6. 如何`clone`不同的分支到本地文件

  + 在`clone`完整个项目的时候，发现本地并没有远程仓库中的分支，或者两者文件并不同步。采用`git checkout -b <branch_name> origin/<branch_name>`

### 7. 当有`submodule`的时候，需要注意些什么?

  + `clone`的时候，如果项目中有其他git子项目，加上`--recursive`选项
  + 自己更新`submodule`提交更改的时候需要切换到`submodule`所在的目录，并且同步到自己的主项目的时候需要`git submodule update`

### 8. 配置

  + 查看配置信息 `git config --list`
  + linux所有用户配置文件`/etc/gitconfig`( `git config --system` ), 当前用户配置文件`~/.gitconfig` (`git config --global`)，本地仓库类配置文件`./.git/config` (`git config --local`)，优先级别从低到高
  + 免密码同步项目。添加文件`~/.git-credentials`, `github`为例 `https://<username>:<password>@github.com` 同时配置`git config --global credential.helper=store`, 存储密码一段时间可以设置`git config --global credential.helper cache` 默认会保存15分钟的密码, 或者延长保存密码时间为一个小时`git config --global credential.helper "cache --timeout=3600"`
  + 常见有用的配置

      ```
      git config --global user.name denis
      git config --global user.email denis_lton@hotmail.com
      git config --global push.default simple
      git config --global credential.helper store
      git config --global color.ui true
      git config --global core.editor vim
      git config --global core.autocrlf false               # 保证是\n为结尾，保证不同系统同时开发
      git config --global core.safecrlf true                # 若有windows换行符则拒绝提交
      git config --global merge.tool vimdiff
      git config --global alias.st status
      git config --global alias.cm commit
      git config --global alias.br branch
      git config --global alias.co checkout
      git config --global alias.last log -1
      git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
      # better diff visual tools
      git config --global diff.tool icdiff
      git config --global alias.df icdiff
      ```

### 9. 合并另外的分支中的文件或文件夹，


  + 例如在`master`分支中，合并另外一个分支`dev`中一个目录`babala/xiaomoxian`, 那么你需要切换到`master`分支。 执行`git checkout dev -- babala/xiaomoxian`就可以了, 之后愉快的`git commit -m "merge message"`就大功告成了

### 10. 暂时保存修改的文件，而不至于需要每次都commit到暂存区

总觉得还是保存一个暂存的就可以了，多了反而不知所措了

```
git stash            # 将工作杂乱的工作区暂时收留
git stash pop        # 将最近一个暂时收留的工作区抛出来
git stash list       # 列出收留的工作区
```

### 11. 删除远程分支和标签

```
# local branch and tag, 同时可以使用`-D`强行删除，而不能恢复内容
git branch -d branch_name
git tag -d tag_name

# remote branch and tag
git push origin --delete branch_name/tag_name
```

### 12. 添加多个远程仓库

```
git remote add alt <alt-machine-git-address>
# git remote update
git push alt --all
```

### 参考资料

  + [廖云峰博客git][1]
  + [git官方文档][2]
  + [合并分支文件][3]


[1]: http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
[2]: https://git-scm.com/documentation
[3]: https://ar.al/2891/
[git_exe_link]: https://github.com/git-for-windows/git/releases/download/v2.8.1.windows.1/Git-2.8.1-64-bit.exe
[tortoisegit]: https://tortoisegit.org/
