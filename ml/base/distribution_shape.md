---
title: "distribution figure"
author: "dengl"
date: "2016�<b4>5�<88>29�<a5>"
output: html_document
---


```r
require("magrittr")
require("knitr")
opts_chunk$set(comment = NA, 
               message=FALSE,
               fig.path="./figures/" %>% normalizePath,
               animation.fun=hook_scianimator)
```

## 离散分布


```r
n <- 20
p <- .5
x <- seq(0, n, 1)
y <- dbinom(x, n, p)
barplot(y, col=colors()[10], main="Binomial Distribution")
```

![plot of chunk binomial-distribution](F:\hadoop\pdfs\notes\ml\base\figures\binomial-distribution-1.png)


```r
lambda <- c(seq(0.001, 1, length=5), seq(1, 100, length=10))
p <- 1e-10
x <- seq(0, 20, 1)
for (l in lambda) {
  y <- dpois(x, l)
  barplot(y, col=colors()[100], 
          main="Poisson Distribution with lambda = %s" %>% sprintf(l))
}
```

<video   controls loop><source src="F:\hadoop\pdfs\notes\ml\base\figures\Poisson-Distribution-.webm" /><p>video of chunk Poisson-Distribution</p></video>


```r
x <- rnorm(100)  # x 是iid的随机变�<U+383C><U+3E66>
Fn <- ecdf(x)    # ?ecdf, Fn(t) = #{xi <= t} / n
plot(Fn, col=colors()[200])
```

![plot of chunk empirical-dist](F:\hadoop\pdfs\notes\ml\base\figures\empirical-dist-1.png)


## 连续分布


```r
fu <- function(a, b) 1 / (a - b)
x <- c(seq(-10, -5, length=20), seq(-5, 5, length=20), seq(5, 10, length=20))
y <- c(rep(0, 20), rep(fu(1, 1/2), 20), rep(0, 20))
plot(x, y, type="l", col="tan2", main="Uniform Distribution")
```

![plot of chunk uniform-distribution](F:\hadoop\pdfs\notes\ml\base\figures\uniform-distribution-1.png)


```r
n <- 1000
x <- seq(-10, 10, length=n)
y <- dnorm(x, 1, 3)
plot(x, y, type="l", col=colors()[30], lwd=2, main="Gaussian Distribution")
```

![plot of chunk gaussian-dist](F:\hadoop\pdfs\notes\ml\base\figures\gaussian-dist-1.png)



```r
# require("RColorBrewer")
require("ggplot2")
require("magrittr")
require("dplyr")

n <- 100
x <- seq(0, 1, length=n) %>% rep(times=5)
a <- c(.1, .5, 1, 2, 5) %>% rep(each=n)
b <- a
y <- mapply(dbeta, x, a, b)
data.frame(x, y, param = sprintf("a=%s b=%s", a, b)) %>%
  ggplot(aes(x, y, col = param, fill=param)) + 
  geom_line(size=1.2)
```

![plot of chunk beta-distribution](F:\hadoop\pdfs\notes\ml\base\figures\beta-distribution-1.png)



```r
# X \in Uniform(-1, 1), y = x^2, 则y的分布式如何的呢

op <- par(mfrow=c(1, 3))
xs <- seq(-1, 1, .1)
a <- -1; b <- 1
px <- rep(1 / (b - a), length(xs))
plot(xs, px, type="l")

fn <- function(x) x^2
ys <- fn(xs)
# analysis
ppy <- 1 / ( 2 * sqrt(ys))
plot(ys, ppy, type="l")

# monte carlo
n <- 1000
rx <- runif(n, a, b)
st <- fn(rx) %>%
  hist(freq=FALSE)
```

![plot of chunk Monte-Carlo-Example](F:\hadoop\pdfs\notes\ml\base\figures\Monte-Carlo-Example-1.png)

```r
par(op)
```
