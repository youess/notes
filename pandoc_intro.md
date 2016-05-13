
1. convert markdown to a single html with css

```
pandoc -f markdown_github \
        -t html \
        -s --toc \
        --self-contained  \
        -c node_modules/github-markdown-css/github-markdown.css \
        r-environment.md \
        -o ~/tmp/tmp/environment.html
```
