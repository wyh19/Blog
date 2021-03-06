# MD语法

这里介绍md的基本语法，以及vuepress特有的语法。

## 标题
md使用#来实现各级标题。在本框架中，会自动处理一级、二级、三级标题为侧边栏的文档目录，因此建议使用一个#表示本文的标题，使用##表示各段落以及使用###表示段落的各小节。
```
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```


## 字体
```
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```
效果如下：  

**这是加粗的文字**  
*这是倾斜的文字*  
***这是斜体加粗的文字***  
~~这是加删除线的文字~~   

## 引用

```
>引用的内容
```
效果如下：
>引用的内容

```
>引用的内容
>>引用嵌套的内容
```
效果如下：
>引用的内容
>>引用嵌套的内容

## 分割线
三个或者三个以上的 - 或者 * 都可以。
```
---
***
*****
```
---
***
*****

## 图片
```
完整语法：
![图片alt](图片地址 '图片title')
一般省略title：
![图片alt](图片地址)
```
图片地址可以是外网的图片，也可以是本地文件的图片，使用相对路径找到该图片，建议将图片放置在`与guide平级的assets`目录下。
示例：
![111](../assets/404.png '图片title')


## 超链接
```
语法：
[超链接名](超链接地址 "超链接title")
说明：
title可以省略，当链接是外链时，会自动识别处理。
```


## 列表
### 无序列表
```
语法：无序列表用 - + * 任何一种都可以
- 列表内容
+ 列表内容
* 列表内容
```
示例：
- 列表内容
+ 列表内容
* 列表内容

### 有序列表
```
语法：数字加点
1. 列表内容
2. 列表内容
```
示例：
1. 列表内容
2. 列表内容

### 列表嵌套
```
语法：上一级和下一级之间敲三个空格即可
* 一级
   * 二级
      * 三级
```
* 一级
   * 二级
      * 三级

::: warning 注意
序号标点与内容中间有个空格
:::

## 表格
```
语法：

表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
```
示例：
```
姓名|职业|年龄
--|:--:|--:
张三|快递员|20
李四|滴滴司机|35
王五|码农|27
```
效果如下：
姓名|职业|年龄
--|:--:|--:
张三|快递员|20
李四|滴滴司机|35
王五|码农|27

## 代码
```
行内代码使用`代码`，也可起到文字高亮效果
多行代码，使用两组3个`包裹，并且可在头部3个`后面指定语言类型
```
示例：  
行内代码，并起到高亮效果，比如`code`

```js
//多行代码演示
var a = 1;
var b = 2;
var c = a + b ;
console.log(c)
```
::: warning 注意
有些md引擎实现了 ==高亮== 和 ++下划线++等方言，本框架暂不支持，如果需要高亮，请使用行内代码的语法代替。
:::



---
# 下面是vuepress提供的专有语法

## 提示类容器
```
::: tip 提示标题
这是一个提示
:::

::: warning 警告标题
这是一个警告
:::

::: danger 危险警告标题
这是一个危险警告
:::

::: details 详情快标题
这是一个详情块，在 IE / Edge 中不生效
:::
```
::: tip 提示标题
这是一个提示
:::

::: warning 警告标题
这是一个警告
:::

::: danger 危险警告标题
这是一个危险警告
:::

::: details 详情块标题
这是一个详情块，在 IE / Edge 中不生效
:::

## html
vuepress允许你直接写html标签来补充md的不足。
```html
<span style='color:#ce03d0'>我想显示一段有颜色的文字</span>
```
效果：  
<span style='color:#ce03d0'>我想显示一段有颜色的文字</span>













