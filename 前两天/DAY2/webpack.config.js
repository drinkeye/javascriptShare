var path = require('path');//->require NODE的语法(webpack配置文件是基于NODE环境运行的一个模块)，执行webpack命令实现合并压缩等操作也是基于NODE的I/O操作完成的

var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');

module.exports = {
    //->入口:原始需要编译的文件
    entry: path.resolve('src/index.js'),
    //->出口:编译后的文件
    output: {
        path: path.resolve('build'),
        filename: 'build.js'
    },
    //->devServer
    devServer: {
        port: 9090,//->0~65535 设置端口
        contentBase: './build',//->设置项目部署的目录
        inline: true//->设置自动刷新
    },
    //->plugin
    plugins: [
        new openBrowserWebpackPlugin({url: 'http://localhost:9090/index.html'}),
        //->自动产出HTML的插件
        new HtmlWebpackPlugin({
            title: "珠峰培训-webpack",
            template: "./src/index.html",
            filename: "index.html"
        }),
        //->提取CSS
        new ExtractTextWebpackPlugin("build.css"),
        //->资源压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.MinChunkSizePlugin({
            compress: {
                warnings: false
            }
        }),
        //->查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        new webpack.optimize.DedupePlugin(),
        //->按引用频度来排序ID,以便达到减少文件大小的效果
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1.5,
            moveToParents: true
        })
    ],
    module: {
        //->配置当前webpack中所需要的加载器
        loaders: [
            {
                test: /\.js$/i,//->匹配的都是JS文件,也就是所有的JS文件在打包部署的时候都是用以下的加载器进行处理
                loader: "babel-loader"//->设置使用哪一个加载器进行处理 "babel" 我们可以把-loader省略
                /*
                 * 使用babel加载器处理ES6->ES5，这些模块 babel-cli babel-preset-xxx .... 还是需要安装到本地项目中的，也需要创建.babelrc文件列举babel的解析语言机制
                 */
            },
            {
                test: /\.less$/i,
                loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader!less-loader')
                //loader: "style!css!less" //->多个加载器之间使用!隔开,而且注意加载的顺序(从右向左加载)
            },
            {
                test: /\.css/i,
                loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader')
                //loader: "style!css"
            },
            {
                test: /\.(png|gif|jpg)$/i,
                loader: "url?limit=8192"//->当前资源图片的大小如果小于8KB的话,编译的时候会把它转换为base64编码,大于8KB的不进行转码而是常规的编译即可(把图片的名称进行重新编译) 这个值可以进行调整，自己把控即可
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/i,
                loader: "file?limit=8192"
            }
        ]
    }
};
/*
 webpack-dev-server 除了创建一个服务，打开浏览器以外，还会把我们执行的资源文件进行打包部署：
 -> 把打包的和编译完成的内容放在计算机内存中了
 -> 这样在开发过程中，我们随时修改源文件，dev-server都会把最新的文件进行重新的部署打包(放在内存中) =>webStorm中修改文件实现不了这个刷新的机制


 项目开发完成后，我们还是需要使用 webpack(npm run build) 把资源文件进行部署打包(会存放在具体的磁盘目录下)，产品上线的时候只需要把build中的打包文件上传服务器发布即可
 */