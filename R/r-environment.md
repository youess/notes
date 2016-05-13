
##1. Machine

**Ubuntu**

- Version: Ubuntu 14.04 LTS \n \l
- Kernel: 3.13.0-24-generic
- Reference Download Site:

  1. [ubuntu official site](http://www.ubuntu.org.cn/download/alternative-downloads)
  2. [tw mirror](http://tw.archive.ubuntu.com/ubuntu-cd/14.04/ubuntu-14.04.4-server-amd64.iso)


## 2. Software

**R**

- Version: R version 3.2.3 (2015-12-10) -- "Wooden Christmas-Tree"
- Reference Download Site:
  - [r project site](https://mirrors.tuna.tsinghua.edu.cn/CRAN/index.html), and the [R linux source package](https://cran.r-project.org/src/base/R-3/R-3.2.3.tar.gz)
  - [Tsinghua mirror](https://mirrors.tuna.tsinghua.edu.cn/CRAN/). Click "Download R for Linux" -> "ubuntu" -> "README.html" For a reference install guide. This would be install latested version by default. To installed the exact version of R, you might find a clue to install specified R version by type in shell. `apt-cache showpkg r-base` and install R with `sudo apt-get install r-base=3.2.3-6trusty0`, the `3.2.3-6trusty0` may be different within different mirrors
- Package. One might install one single package by typing in R console: `install.package("package_name")`
  1. RJDBC
  2. dplyr
  3. tidyr
  4. magrittr
  5. mailR
  6. sendmailR
  7. jsonlite
  8. Rdonlp2
  9. lpSolve
  10. sqldf
  11. timeDate
  12. data.table
  13. Hmisc
  14. car
  15. e1071
  16. gam

Most packages could be installed in R console by typing:

```
install.packages(c("RJDBC", "dplyr", "tidyr", "magrittr", "mailR", "sendmailR",
                    "jsonlite", "sqldf", "timeDate", "data.table", "Hmisc", "car", "e1071",
                    "gam", "caret", "lpSolve"), dependencies = c("Depends", "Suggests"))
install.packages("Rdonlp2", repos="http://R-Forge.R-project.org")
```

This may be occured many errors when installed first time, Please refer to the error hint message
to install some linux library that needed for that package( by typing in shell: `sudo apt-get install ...` ), then reinstalled that package
