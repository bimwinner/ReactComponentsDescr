# 目录结构
BOS应用框架基本的目录结构如下所示

```
+ app/： 源代码根目录；
   + com/:  iconTree依赖文件包，不需要去理解；
   + common/:  iconTree依赖文件包，不需要去理解；
   + Components/:功能性模块，无法通过url单独导航到，简称组件集；
       + AntdTree/：
	       。 index.js：组件的结构内容；
	       。 styles.css: 组件的样式；
   + DbUrl/:  所有的服务地址；
       。 DbUrl.js：  服务地址文件
   + Pages/: 页面子模块，可通过url单独导航到；
       + BasePage/:
           。 index.js：项目的最基本的结构布局和逻辑内容；
           。 styles.css：默认样式；
           。 actionTypes.js: 所有的actionType定义（Redux），动作的口令的声明者，其他成员就可以根据口令的不同就知道要执行什么动作；
		   。 actions.js: 所有的action函数（Redux），把执行动作需要用到的参数以及口令打包在一起，并提交给动作的执行者；
           。 reducer.js：所有store变动函数（Redux），动作的执行者，根据口令的不同就知道调用哪个函数执行不同的操作；
           。 selectors.js：所有从store中获取内容的函数；
       + LoginPage/:
           。 index.js：登录页面的布局和功能实现；
           。 styles.css：默认样式；
           。 ajax.js： 登录所调用的服务api;
           。 actionTypes.js: 所有的actionType定义（Redux），动作的口令的声明者，其他成员就可以根据口令的不同就知道要执行什么动作；
		   。 actions.js: 所有的action函数（Redux），把执行动作需要用到的参数以及口令打包在一起，并提交给动作的执行者；
           。 reducer.js：所有store变动函数（Redux），动作的执行者，根据口令的不同就知道调用哪个函数执行不同的操作；
           。 selectors.js：所有从store中获取内容的函数；
           。 bg.jpg： 登录界面的背景图；
           。 loginbox_bg.png： 登录界面的logo;
       + ModelManaPage/:
           。 index.js：登录页面的布局和功能实现；
           。 styles.css：默认样式；
           。 ajax.js： 模型加载数据时调用的部分服务api;
           。 actionTypes.js: 所有的actionType定义（Redux），动作的口令的声明者，其他成员就可以根据口令的不同就知道要执行什么动作；
		   。 actions.js: 所有的action函数（Redux），把执行动作需要用到的参数以及口令打包在一起，并提交给动作的执行者；
           。 reducer.js：所有store变动函数（Redux），动作的执行者，根据口令的不同就知道调用哪个函数执行不同的操作；
           。 routes.js: 组件的路由，主要是浏览器上不同的路径渲染不同的组件的定义集合；
           。 sagas.js: 所有saga函数，主要是和fetch进行配合，动作的执行者，根据口令的不同就知道调用哪个函数执行不同的操作；
           。 consts.js: 一些常用的常量声明;
           + components/:
               。 AssoConfirmModal.js： 关联关系的确认模态框组件；
               。 AttrDocTabs.js：模型构件的属性信息栏组件；
               。 BuildTabs.js： 建筑信息组件，空间树结构第一层节点驱动;
               。 LayerTabs.js： 楼层信息组件，空间树结构第二层节点驱动；
               。 RoomTabs.js： 房间信息组件,空间树结构第三层节点驱动; 
               。 DeviceTabs.js： 模型构件(设备)信息组件，点击模型构件即可触发；
               。 DesignModel.js: 模型页面的详细布局以及逻辑功能组件；
               。 LeftTab.js: 模型页面的左边树组件；
               。 Model.js: 三维显示和操作组件的入口文件；
               。 SlideModal.js: 侧边栏组件;
               。 SysTabs.js： 系统树结构节点信息组件，可通过点击系统树节点触发；
               。 CommonAssociateTab.js: 空间结构树的关联信息组件；
               。 SysAssociateTab.js： 系统结构树的关联信息组件；
          + containers/: 该文件夹内部的文件是components相应组件文件的包装壳，主要是用以配全redux来封装属性和方法；
   + Utils/: 工具模块；
       。 request.js：异步请求工具；
       。 asyncInjectors：异步注入saga和reducer工具；
    。 app.js：项目总入口；
    。 index.html：项目主页面模板；
    。 routes.js：项目所有路由，配置url；
    。 reducers.js：项目基础reducer以及所有其他reducer的集合；
    。 store.js：项目构建store，加入所有的依赖；
    2. + docs/：存放开发过程中产生的开发文档；
       。***.md：描述信息的markdown文件；
    3. + node_modules/: 依赖包文件；
    4. + server/：Node服务器配置信息，用于本地研发；
    5. 。package.json：控制npm依赖包；
    6. 。README.md：项目基础描述信息；
    7. 。webpack.base.config.js：webpack基础配置信息；
    8. 。webpack.dev.config.js：webpack开发配置信息；
    9. 。webpack.prod.config.js：webpack产品配置信息；
```
