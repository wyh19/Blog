# 快速入门

## 介绍
本文档项目旨在通过编写文档本身来说明如何搭建一个文档中心，可以用来作为demo教学，也可以通过git获取后，快速开始自己的文档项目。

## git获取
依次执行如下命令，将得到本文档的项目源码
``` sh
# git获取
git clone http://gitlab-iot.yzs.io/frontEnd/doc-basic.git
# 进入目录
cd doc-basic
# 安装依赖，使用yarn
yarn
# 依赖安装完后，执行启动
yarn docs:dev
# 打包
yarn docs:build
```


## 目录介绍

```
.
├── docs(文档目录)   
│   ├── README.md（首页，本项目即快速入门页）
│   ├── assets(资源目录，主要用于放文档引用的图片)
│   │   └── 404.png
│   └── .vuepress(文档)
│   │   ├── config.js(配置文件，重要)
│   │   └── public（配置项涉及的资源文件都在此处）
│   │   │   ├── assets
│   │   │   │   └── logo.png
│   │   │   └── favicon.ico
│   └── guide（文档目录，该文件夹可以自定义名字和创建多个平级目录）
│       ├── basic-grammar.md（具体文档）
│       ├── config.md（具体文档）
│       └── high_grammar.md（具体文档）
├── node_modules（项目依赖）
├── .gitignore（git忽略项）
├── package.json（该文件就不多说了...）
└── yarn.lock（yarn安装后的文件，不用关心）
```

## 路由关系
| 导航名称      |                 对应路由                  | 对应文件  |
| -------------|:-------------:                          | -----:|
| 快速入门      | /                                       | /README.md |
| 基本语法      | /guide/basic-grammar.html                 |   /guide/basic-grammar.md |
| 补充语法      | /guide/high-grammar.html                   |   /guide/high-grammar.md |
| 常用配置项    | /guide/config.html                          |   /guide/config.md |
| 官方配置文档   | https://www.vuepress.cn/config/            |   - |
| 常用配置项    | http://gitlab-iot.yzs.io/frontEnd/doc-basic|  - |

 同时，在`.vuepress/config.js`里配置了`themeConfig`节点

 ```js
 nav: [
            { text: '快速入门', link: '/' },
            {
                text: '详细说明',
                items: [
                    {
                        text: 'MD语法',
                        items: [
                            { text: '基本语法', link: '/guide/basic-grammar.md' },
                            { text: '补充语法', link: '/guide/high_grammar.md' },
                        ]
                    },
                    {
                        text: '配置项', items: [
                            { text: '常用配置项', link: '/guide/config.md' },
                            { 
                                text: '官方配置文档', 
                                link: 'https://www.vuepress.cn/config', 
                                // target: '_blank' 
                                //当link是外链是，无需指明target: '_blank'，系统会自动生成打开新页面的超链接
                            }
                        ]
                    }
                ]
            },
            { text: 'Gitlab', link: 'http://gitlab-iot.yzs.io/frontEnd/doc-basic' },
        ],
 ``` 
如果要新增自己的页面，只需相应增加自己的导航item以及md文件即可，现在快速阅读[MD的基本语法](/guide/basic-grammar.html)，开始你自己的文档编写吧。

::: tip 说明
目录下的README.md文件可以省略为 `/目录/` 的写法 ,注意最后的`/`不能省略
:::

## 打包与部署
当写完文档后，执行`yarn docs:build`命令，在.vuepress目录下将生成`dist`文件夹，该文件夹发布至服务器即可访问。

::: warning 注意
dist目录下的静态html不可直接打开文件访问，需要部署至服务器。如果本地需要测试，可以使用nodejs的serve包。

```sh
# 全局安装serve包
yarn global add serve
# 进入dist文件夹
cd dist
# 执行serve命令
serve
```
:::

## Gitlab自动部署
需要gitlap做些设置和配合，可以后续研究下
