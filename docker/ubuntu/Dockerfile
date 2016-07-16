
# build a customized ubuntu
FROM ubuntu:14.04

MAINTAINER denis deng <denis_lton@hotmail.com>

# change the apt repository to inner the wall
# sources.list
RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak
ADD sources.list /etc/apt/sources.list

# basic tools
RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		vim-tiny \
		locales \
		less \
		wget \
		ca-certificates \
	&& rm -rf /var/lib/apt/lists/*

# set default locale to en_US.UTF-8
RUN echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen \
	&& locale-gen en_US.utf8 \
	&& /usr/sbin/update-locale LANG=en_US.UTF-8
ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8

# add a new user denis
RUN useradd denis \
	&& mkdir /home/denis \
	&& chown denis:denis /home/denis \
	&& addgroup denis staff

# using this user instead of root
USER denis

# claim some variables
ENV HOME /home/denis
WORKDIR /home/denis

# store some files here
VOLUME ["/mnt/denis"]

# define default command.
CMD ["/bin/bash"]