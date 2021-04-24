# vue-router

## vue-router的基本使用

1. 安装  =>  npm install vue-router -S
2. 在main.js中导入vue-router   =>  import VueRouter from 'vue-router';
3. 使用插件   =>  Vue.use(VueRouter);
4. 创建路由对象并配置路由规则  =>  let router = new VueRouter({ routes: [ { path: 'home', component: Home }]})
5. 将路由对象传进Vue实例  => new Vue({ el:'#app', router: router })
6. 在app.vue中留一个页面插槽   => `router-view></router-view>`

```vue
// main.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Index from './pages/Index';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'homePage',
            component: Home,
        },
        {
            path: '/index',
            name: 'indexPage'
            component: Index,
            // 嵌套路由
            children: [
            	{
                    path: '/tab1',
                    component: Tab1,
                },
        		{
                    path: '/tab2',
                    component: Tab2,
                }
            ]
        }
    ]
});

new Vue({
    el: '#app',
    // 传入路由规则
    router: router
});


// App.vue
<template>
    {/* 路由占位 */}
    <router-view></router-view>
</template>

// Index.vue
<template>
	<div>
        IndexPage
    </div>
	// 嵌套路由的占位
	<router-view></router-view>
</template>
```

## vue-router嵌套路由

+ 路由配置 children
+ 对应vue页面，添加`<router-link></router-link>` 标签

## vue-router参数传递

### 路由跳转方式

+ `<router-link to="url"></router-link>`
+ `this.$router.push(url)`

### 传参

1. 使用query来传递

   + 传值页面：this.$router.push({ path: '/home', query: {  id: 100 } } )
   + 取值页面： this.$route.query.id    // 100
   + `注意： 传值的时候是$router,取值的时候是$route`

2. 写在router-link中的to属性上

   + 传值：通过path `<router-link to="{ path: '/home', query: { id: 100 }}" ></router-link>`

     ​			也可以通过name  `<router-link to="{ name: 'homePage', query: { id: 100 }}" ></router-link>`

   + 取值： this.$route.query.id

## vue-router导航守卫

## keep-alive



