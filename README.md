# Baidu-Img-Extensions
百度搜索引擎更换logo扩展程序

## 安装依赖

执行以下命令：

```
npm install
```


## 打包构建

执行以下命令：

```
npm run dist
```

如遇到卡住的情况，请多次执行 npm run dist 命令（现 parcel 配置有bug,待修复）

打包构建结束后，程序会自动生成dist文件夹，在chrome扩展程序中(chrome://extensions/) 可直接引用此dist文件夹加载插件


## 参考文档

[创建和发布自定义 Chrome 应用和扩展程序](https://support.google.com/chrome/a/answer/2714278?hl=zh-Hans)

[Chrome扩展程序开发入门教程](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

[使用TypeScript与Parcel开发Chrome扩展程序示例](https://github.com/room-js/chrome-extension-ts-starter)

[Chrome开发者控制台](https://chrome.google.com/webstore/devconsole)
