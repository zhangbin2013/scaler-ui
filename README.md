# scaler-ui
###ui 组件库搭建

### 搭建方式
 全局安装 create-vite-app
  ```
  yarn global add create-vite-app@1.18.0
  npm i -g create-vite-app@1.18.0
  ```
### 创建项目目录
 ```
cva xxx-name
crate-vite-app xxx-name
```

### 运行项目
```
cd xxx-name
npm install
npm run dev
```
##note

##### vue3 属性绑定
- 默认所有属性都绑定到根元素
- 使用inheritAttrs:false可以取消默认绑定
- 使用$attrs或者context.attrs获取所有属性
- 使用const{size, ...rest} = context.attrs将属性分开
