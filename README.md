# 前言
使用 GitBook 开发 React 组件说明页面，目的是为了指引大家使用一些 React 组件来开发。当前使用的 GitBook 版本为 `3.2.2`。

## 运行
* 安装 GitBook
```bash
npm install gitbook-cli -g
```
* Clone 代码到本地并运行
```bash
git clone https://github.com/bimwinner/ReactComponentsDescr.git
cd ReactComponentsDescr
gitbook install   //安装gitbook的项目依赖
gitbook serve     //运行gitbook本地服务器
```
* 在浏览器中打开 `http://localhost:4000/` 进行访问

## 开发须知
* 从`github`上`clone`本项目并且`gitbook install`运行之后，会发现运行出来的界面的页尾版权会有`all right reserved，powered by Gitbook`这一段，并且导致`更新时间这一项`换行了。如果想去掉这样的效果，就需要改源码。
* 进入`node_modules`文件夹找到`gitbook-plugin-tbfed-pagefooter`文件夹，打开`index.js`文件。
* 在`index.js`第19行，替换这一行为：`_copy = _c ? _c  : + ' all right reserved，' + _copy;`。
* 保存并`gitbook serve`编译即可查看。

## GitBook 资源

* [GitBook主页](https://www.gitbook.com/)
* [Github地址](https://github.com/GitbookIO/)
* [GitBook编辑器](https://www.gitbook.com/editor/osx)
* [GitBook Toolchain Documentation](http://toolchain.gitbook.com/)
* [GitBook Documentation](http://help.gitbook.com/)
