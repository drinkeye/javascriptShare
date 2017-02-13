##Babel
> ES6虽然强大,但是很多环境是不支持的，例如IE低版本浏览器不支持ES6语法

> 对于新的产品诞生，总会伴随着不支持的问题，也会伴随一些相关的技术产品，用来处理兼容性问题
> - ES6：Babel把ES6的语法转换为ES5的语法
> - H5：html5.min.js 可以处理H5标签在IE低版本浏览器下不兼容的问题
> - ...

> 我们开发的时候依然使用ES6语法编写，只是运行或者产品部署的时候使用Babel把其编译为正常的ES3/ES5语法即可


###工程化
- 技术框架：React、Vue、Angular
- 自动化部署平台：gulp、webpack
- 团队协作：svn、git(gitHub)

> 上面的大部分内容都离不开NODE环境，npm：NODE中进行包或者模块管理的工具

1、我们需要在NODE命令行中执行
> npm init -y
会在当前的项目目录下创建一个文件：'package.json'

2、安装babel
> npm install babel-cli --save-dev

> node_modules文件中存放了我们安装在当前项目目录下的所有的模块

> --save-dev 需要在本地的项目目录下的package.json文件中的devDependencies里面追加对模块的依赖
> 这样我们在本地项目中相当于建立了一个依赖模块的清单，后期我们把项目文件发给别人的时候，并不需要把node_modules给别人(文件太大)，只需要别人拿到后执行 'npm install' 就可以按照清单上的依赖项全部的进行下载 =>"跑环境"

###3、全局安装和本地安装
> npm install babel-cli -g 全局安装
> npm install babel-cli --save-dev 本地安装

在默认情况下，安装在全局的可以在命令行中直接的使用babel命令；而安装在本地的不能直接的使用命令行操作；

安装到全局也存在一个问题：babel的版本号问题,安装在全局容易出现版本冲突的问题

###4、在本地配置命令行操作
> babel -help 查看所有的操作命令

```
 //->package.json
 {
   "name": "2017share",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "scripts": {
     "build":"babel a.js -o tempES5.js"  //->在本地项目中配置了一个命令，以后执行 npm run build 就相当于在NODE中执行了 babel a.js -o tempES5.js
   }
   ...
 }

```

###5、使用Babel编译ES6
> 需要安装语言预处理解析的插件
> npm install  babel-preset-es2015 babel-preset-es2016 babel-preset-react --save-dev

> 需要创建一个 .babelrc
```
{
  "presets": [
    "es2015",
    "es20160",
    "react"
  ],
  "plugins": []
}
```













