## Git Introduction

1. 简介
  + 背景
  + 安装
2. 基本操作
  + `git clone`, 加一个git仓库地址就能将项目copy到本地目录中
  + `git init`，用于新建项目用git管理时的初始化
  + `git add`, 将文件添加到git暂存区
  + `git commit`, 将文件添加到本地git仓库中
  + `git pull`, 获取远程git仓库项目更新内容
  + `git push`, 将本地项目中修改的内容推送到远程服务器
3. 回退
  + `git log`, 查看历史修改的版本号。`git log --graph --pretty=oneline --abbrev-commit` 查看分支合并图
  + `git reset`, 用来回退到以前的版本。例如 `git reset --hard HEAD^` 回到最初的版本了。。
4. 分支
  + `git checkout -b dev`, 创建分支`dev`
5. 冲突
  + `git merge dev`, 假设我们现在在`master`分支，需要合并`dev`分支，如果两个分支中均有修改的东西，那么就需要手工修改
6. 如何clone不同的分支到本地文件
7. 当有`submodule`的时候，需要注意些什么?
8. 参考资料
  + [廖云峰博客git][1]
  + [git官方文档][2]


[1]: http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
[2]: https://git-scm.com/documentation
