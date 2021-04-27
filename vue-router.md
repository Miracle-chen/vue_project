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

### 全局守卫

1. 添加在router对象上

2. 全局前置守卫：beforeEach = (to, from, next) => { ... }

   + to  将要跳转到的路由地址
   + from 来自的路由地址
   + next 必须执行，否则跳转会被中断。
     + next(false)  会中断跳转
     + next()  正常跳转
     + next( url | { path: url })  重新定义跳转的路由地址

3. 全局后置钩子：afterEach = (to, from) => { ... }

   + to  将要跳转到的路由地址
   + from 来自的路由地址

   ```javascript
   const router = new Router({
   	routes: [{
   		path: '/',
   		component: login
   	},
   	{
   		path: '/home',
   		component: home,
   	}],
   	strict: process.env.NODE_ENV !== 'production',
   })
   // 全局前置守卫
   router.beforeEach = (to, from, next) => {
   	// doSomething
   	next();
   }
   // 全局后置钩子
   router.afterEach = ( to, from ) => {
   	// doSomething
   }
   ```

   

### 路由独享的守卫

1. 直接在配置路由的时候，定义beforeEnter方法。

2. 方法使用同全局守卫的 beforeEach方法。

   ```javascript
   const router = new Router({
   	routes: [{
   		path: '/',
   		component: login
   	},
   	{
   		path: '/home',
   		component: home,
   		beforeEnter: (to, from, next) => {
   			// ...
   		}
   	}],
   })
   ```

### 组件内守卫

1. beforeRouteEnter

2. beforeRouteUpdate

3. beforeRouteLeave

   ```javascript
   const Foo = {
     template: `...`,
     beforeRouteEnter(to, from, next) {
       // 在渲染该组件的对应路由被 confirm 前调用
       // 不！能！获取组件实例 `this`
       // 因为当守卫执行前，组件实例还没被创建
     },
     beforeRouteUpdate(to, from, next) {
       // 在当前路由改变，但是该组件被复用时调用
       // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
       // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
       // 可以访问组件实例 `this`
     },
     beforeRouteLeave(to, from, next) {
       // 导航离开该组件的对应路由时调用
       // 可以访问组件实例 `this`
     }
   }
   ```

   

## keep-alive

+ vue所提供的一个抽象组件，其作用是对组件进行缓存，进而提高性能。
+ 在渲染完毕后，keep-alive不会被渲染成一个DOM元素。

