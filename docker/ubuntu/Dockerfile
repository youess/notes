
# build a customized ubuntu
FROM ubuntu:14.04

MAINTAINER denis deng <denis_lton@hotmail.com>

# change the apt repository if you're being inner wall
# backup sources.list
RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak
ADD sources.list /etc/apt/sources.list

# basic tools
RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		vim \
		locales \
		less \
		wget \
		curl \
		rsync \
		git \
		ca-certificates \
		python-pip \
		zsh \
	&& rm -rf /var/lib/apt/lists/*

# update the default shell
RUN sed -i "/^`whoami`/{ s/bash/zsh/g }" /etc/passwd

# cheat sheet
RUN pip install cheat

# set default locale to en_US.UTF-8
RUN echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen \
	&& locale-gen en_US.utf8 \
	&& /usr/sbin/update-locale LANG=en_US.UTF-8
ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8

# add a new user denis, also you could create a new group name and assign to the user
RUN useradd denis \
	&& mkdir /home/denis \
	&& chown denis:denis /home/denis \
	&& addgroup denis staff

# using this user instead of root
USER denis

# claim some variables
ENV HOME /home/denis
WORKDIR /home/denis

# oh-my-zsh
RUN git clone --depth=1 https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh \
	&& cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc

# my configuration
RUN git clone --depth=1 https://github.com/youess/dotfiles.git \
	&& cd dotfiles \
	&& chmod +x desync.sh \
	&& ./desync.sh \
	&& cd ~ \
	&& rm -rf ~/dotfiles

# configuration of vim
RUN git clone --depth=1 https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
RUN vim +PluginInstall +qall

# store shared files here
VOLUME ["/mnt/denis"]

# define default command.
CMD ["/bin/zsh"]