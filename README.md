## 打包部署一体化

### 打包配置项

- build.sh中配置要打包的工程, 需要注意配置规则
- config.js中配置服务器信息

<br/>

### 工程配置规则

<span style="color:red">工程名：bundle包名</span>。之所以有这个配置是因为有些工程名和bundle名不一致。

> 工程名字用来查找目录，进行打包 </br>
> bundle包名用来拷贝文件到bundles目录下
  

<br/>

### 使用

1、将该工程克隆到需要打包工程同级目录

2、在build.sh中配置打包的工程，在config中配置服务器信息

3、执行打包命令 `npm run build:dev`，注意 script命令中的参数如`develop`为打包的分支

4、执行部署命令 `npm run deploy`
 
<br/>

## 注意
现在只支持pnpm打包

<br/>

 ## 后面完善内容
 
 1、判断打包工具是否可用和版本号

 2、自动读打包的项目，减少配置

 3、减少build.sh中工程配置规则