# 打包React组件库并上传npm

## 1. 修改项目框架
为了避免从0搭建项目框架，建议直接改造一个可运行的react项目框架即可，注意修改一下几点：  
1. 修改build的入口entry为输出组件的目录，修改打包输出目录，打包方式为commonjs2
```js
let config = require('./base.js')

config.entry = './src/components/index.js'
config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../lib'),
    libraryTarget: 'commonjs2'
}
```
2. 安装webpack-node-externals，去除打包的第三方依赖
```js
const nodeExternals = require('webpack-node-externals')

let config = require('./base.js')
config.externals = [nodeExternals()]
```
3. 修改package.json,main指示使用组件时的入口，files为publish时上传的文件目录
```json
"files": [
    "lib",
    "src"
  ],
"main": "lib/bundle.js",
```


## 2.编写组件并发布到本地测试
1. 将需要打包的组件放入src下指定文件夹
2. 执行`npm run build`打包生成
3. 执行`npm link`将组件库发布到本地
4. 执行`npm link [name]` [name]替换成你的组件库的名字，将组件库引入本项目中
5. 在项目的App.jsx中使用组件库提供的组件，进行功能测试

## 4.编写声明文件
在上面的测试中，可以发现import组件时，没有智能提示，需要编写.d.ts文件，为了便于和管理，在组件打包的lib目录下，新建bundle.d.ts文件，并使用以下语法编写类型声明：
1. 输出组件及其属性的声明
```js
//假设组件名为ChatPanel,则声明其属性为ChatPanelProps
interface ChatData {
    data: Blob | string
    type: msgTypeEnum
    from: msgFromEnum
}
interface ChatPanelProps {
    /** ChatData数据结构在上面定义了 */
    chatData: ChatData[]
    jsonText: string
    onSend: (msg: string, type: msgTypeEnum, isAddon: boolean) => void
}
export class ChatPanel extends React.Component<ChatPanelProps> {
    constructor(props: ChatPanelProps);
}
```

2. 输出helper命名空间下的函数
```js
export declare namespace helper {
    function formatJson(json: string): string
    function getParam(url: string, name: string): string
    function getSignature(params: signatureParam): signatureParam
    function guid(): string
}
```

3. 输出enums命名空间下的枚举
```js
export declare namespace enums {
    enum msgTypeEnum {
        Text = 'T',
        BroadCast = 'BROADCAST-DEFAULT',
    }
    //...其他枚举
}
```


## 5.发布npm
1. 执行`npm login`,输入用户名、密码和邮箱，如果失败，则可能是因为npm使用的淘宝镜像，需要执行`npm config set registry http://registry.npmjs.org`恢复至默认registry
2. 执行`npm publish`


 