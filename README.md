## 去html空格插件

html-webpack-plugin依赖html-minifier对模版文件压缩支持不好，此插件简单的把多空格替换为单空格。

### usage

```javascript
plugins: [new HtmlRemoveWhitespacePlugin()]
```

```javascript
plugins: [new HtmlRemoveWhitespacePlugin({
  exclude: /test1/,
  //include: /test2/,
})]
```
