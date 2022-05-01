# Baidu-Img-Extensions
百度搜索引擎更换logo扩展程序

## 打包构建

执行以下命令：

```
npm run dist
```

如遇到卡住的情况，请多次执行 npm run dist 命令（现 parcel 配置有bug,待修复）

打包构建结束后，程序会自动生成dist文件夹，在chrome扩展程序中(chrome://extensions/) 可直接引用此dist文件夹加载插件