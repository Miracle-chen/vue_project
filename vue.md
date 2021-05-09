# js

## 数组方法

### filter

1. filter的回调函数必须返回一个boolean，返回为true时，该项会被添加到新数组中，为fallse，则新数组会过滤掉该数组。

### reducer

1. 对数组进行汇总处理。

## 类

## 作用域

1. es5之前，if和for都没有块状作用域的概念，只有function才有局部作用域，所以在很多时候，我们必须借助function的作用域来结局应用外部变量的影响。

# vue

## vue实例有哪些属性

1. el
2. data
3. 生命周期函数
4. methods
5. watch
6. computed
7. filters
8. component
9. 

## 指令

### 常用指令

1. v-on

2. v-bind

3. v-model

   表单数据的双向绑定。v-bind:value + v-on:input

4. v-if

5. v-else-if

6. v-else

7. v-once

8. v-pre

9. v-clock

10. v-html

11. v-show

12. v-for

### v-bind绑定style和class

####  绑定到class上

```html
// 对象方式
<div :class="{ active: isActive, redBg: isRed }"></div>
// 绑定为一个数据 ， 也可以绑定为计算属性
<div :class="divClass"></div>
// 绑定为一个数组
<div v-bind:class="[activeClass, errorClass]"></div>
// 动态切换列表中的class， 如 三目
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
new Vue({
    data: {
		isActive: false,
        isRed: true,
		activeClass: 'active',
  		errorClass: 'text-danger',
		divClass:{
			active: true,
			redBg: false
		}
    }
})
```

#### 绑定到style上

```javascript
// 绑定到对象上
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<div v-bind:style="styleObject"></div>
// 绑定到数组上, 数组每一项都是一个样式对象
// 同样，也可以绑定到计算属性上。
<div v-bind:style="[styleObject, bgObject]"></div>
data: {
  activeColor: 'red',
  fontSize: 30,
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

1. 如果在一个组件上绑定class， 那么该class则会添加到组件根元素上，根元素上已经存在的class不会被覆盖。

### 自定义指令

## 修饰符

### 事件修饰符

1. stop  => 阻止事件继续传播
2. prevent  => 阻止标签默认行为
3. once  =>  事件将只会触发一次
4. self  => 只当在 event.target 是当前元素自身时触发处理函数
5. passive  => 告诉浏览器你不想阻止事件的默认行为
6. capture => 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理

### v-model修饰符

1. lazy
2. number
3. trim

### 键盘事件修饰符

1. keyup.13   => enter事件监听
2. keyup.enter / .tab / .delete / .space / .up / .down / .left / .right / .esc

### element修饰符

对于elementUI的input，我们需要在后面加上.native, 因为elementUI对input进行了封装，原生的事件不起作用。

```javascript
<input v-model="form.name" placeholder="昵称" @keyup.enter="submit">
<el-input v-model="form.name" placeholder="昵称" @keyup.enter.native="submit"></el-input>
```

## `v-if` vs `-show`

+ v-show => display: none;
+ v-if  => 销毁DOM
+ 推荐：切换频率比较高时候，使用v-show；只有一次切换收，使用 v-if

## 计算属性 computed

### 计算属性的本质 --- 属性操作符get和set

```javascript
computed: {
    fullName: function(){
        return this.firstName + ' ' + this.lastName
    }
}

/*
    fullName 是一个属性，而不是方法。只是因为其省略了属性操作符get 和 set。 也可以自定义计算属性的set方法, 然后给fullName进行赋值，就可以更改firstName和lastName的值了。
*/ 
fullName:{
	get: function(){
		return this.firstName + ' ' + this.lastName
	},
    set: function(value){
		const [ first, last ] = value.split('-');
		this.firstName = first;
		this.lastName = last;
    }
}
```

### `computd` vs `methods`

+ computed 有缓存，多次使用的时候只会调用一次。
+ methods 没有缓存。

## 数据监听 watch



## 数组中哪些方法是响应式的

+ push / pop / shift / unshift  => push和unshift可以接收多个元素。
+ splice(start, length, value1, value2, ... )   => 可以实现数组的删除添加以及修改。length为要删除的个数，为空，则默认删除start之后所有的。value1之后为要插入的元素。
+ sort / reverse
+ 注意：如果通过索引值来修改数组，不是响应式的，不会重新渲染DOM。
+ 若是要改变数组某一项的值： 如第一项改为 aaa ：
  1. this.arr.splice(0, 1, 'aaa');
  2. Vue.set(this.arr, 0, 'aaa')

## 过滤器 filter

```javascript
<body>
    <div id="app">
        // 过滤器 符号  |  ，过滤器可以添加多个。
        // 如 {{ price | showPrice | finalPrice }}
        {{ price | showPrice }}
    </div>

</body>

<script>
    let app = new Vue({
        el: '#app',
        data: {
            price:100,
        },
        filters:{
            //过滤器自动接收过滤器之前的值，作为参数。
            showPrice(price){
                return '￥'+ price / 100 ;
            },
            finalPrice(price){
                return '最终价格：' + price;
            }
        }
    });
</script>
```

## 组件 component

### 全局组件

```javascript
Vue.component('component-a', {
    data: function(){
        return {
            
        }
    },
    template: '<div>component-a content<div>'
})
```

### 局部组件

1. 需要在vue实例中注册。

```javascript
new Vue({
    el: '#app',
    components: {
        componnet-a: 'component-a',
    }
})
```

### 组件模板抽离

```html
// 1.通过template标签定义一个模板
<template id='cpn'>
    <div> 我是标题 </div>
</template>
//2.使用script标签
<script type="text/x-template" id="cpn">
	<div>我是标题</div>
</script>

Vue.component('component-a', {
	template: '#cpn'
})
```

### 为什么组件的data必须是一个函数？

1. 让每一个组件都有自己的数据，每次调用的时候都会返回一个新的数据对象，各个组件之间的数据不会互相产生影响。

### 父子组件之间的传参

1. 通过props向子组件传递数据
2. 子组件通过事件和$emit来向父组件发送消息。

```html

<body>
    <div id="app">
        <!-- 向子组件传递一个数据movies，一个监听函数  additem。函数区分大小写，建议写成小写的模式 -->
        <component-a :movies="movies" @additem="addItem"></component-a>
    </div>
    // 模板与组件抽离
    <template id="cpn">
        <ol>
            <li v-for="item in movies">{{ item }}</li>
            <br />
            <input type="text" v-model="newMovie">
            <button @click="addNewMovie">添加</button>
        </ol>
    </template>

</body>

<script>
    // 子组件  定义局部组件
    const componentA = {
        data(){
            return {
                newMovie: '',
            }
        },
        props:['movies'],
        // 或者定义格式验证等
        props: {
          	movies: {
                type: Array,
                required: true,
                // 类型是对象或者数组时候，默认值必须时一个函数
                default(){
                    return []
                },
                validator: function(value){ ... }
            }  
        },
        // 如果不希望组件的根元素继承父组件的attribute
        inheritAttrs: false,
        template: '#cpn',
        methods: {
            addNewMovie: function(){
                this.$emit('additem', this.newMovie );
                this.newMovie = '';
            }
        }
    }
    // 父组件
    let app = new Vue({
        el: '#app',
        data: {
            movies:['大话西游','西游降魔篇'],
        },
        // 注册局部组件
        components: {
            'component-a': componentA,
        },
        methods:{
            addItem:function(value){
                this.movies.push( value );
            }
        }
    });
</script>
```

### 父子组件操纵

1. 父组件 => 子组件    $children 和 $refs

   ```html
   <component-a ref="comA"></component-a>
   
   new App({
   	methods: {
   		// this.$refs 是一个对象，键值对为  comA:vueComponent。
   		this.$refs['comA']
   	}
   })
   ```

   

2. 子组件 => 父组件     $parent

3. 子组件 => 根组件     $root   

### 插槽slot

1. 目的：  让组件具有更强的拓展性。

#### 插槽内容

1. 组件内的内容会被渲染到组件插槽所在的位置。如果组件的template内没有slot标签，那么该组件标签起始和结束位置之间的所有内容都会被抛弃。

#### 后备内容

1. 为插槽设置一些默认的内容，在组件没有传插槽内容的时候，默认内容会被渲染。

```html
// 定义一个submit-button组件
<button type="submit">
  <slot>我是插槽默认的内容</slot>
</button>
//使用该组件
//如果该组件标签内没有值，则会默认展示 slot 内定义的内容。
<submit-button></submit-button>
// 有只的话，组件标签内的值则会替代插槽内的值。
<submit-button>我是插槽的值</submit-button>
```

#### 具名插槽 name + v-slot

如果想要在一个模板里指定多个插槽，则可以借助具名插槽的写法，来将template所有的内容都被传送到对应的插槽上。

```html
<div id="app">
    <base-layout>
        <!-- v-slot 指定插槽的名称， v-slot只能在template标签上使用，并以v-slot的参数的形式提供其名称。只有一种例外的情况 -->
        <!-- 注意  v-slot  的写法格式 v-slot:插槽名称  -->
        <template v-slot:header>
            我是header的内容
        </template>
        <!-- 
            在此处也可以指定插槽的名称为  default  
            等同于
            <template v-slot:default>
            <div>我是主题内容</div>
            </template>
        -->

        <div>我是主题内容</div>  
        <template v-slot:footer>
            我是脚步内容
        </template>
    </base-layout>
</div>
<template id="bl">
    <div class="container">
        <slot name="header"></slot>
        <!-- 不带name的slot，其含有一个隐藏的name，为 default  -->
        <slot></slot>  <!----  等同于  <slot name="default"></slot>-->
        <slot name="footer"></slot>
    </div>
</template>
```

#### 具名插槽的缩写  #

```html
<base-layout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

该缩写只在其有参数的时候才可用

```html
<!-- 这样会触发一个警告 -->
<current-user #="{ user }">
  {{ user.firstName }}
</current-user>
<!-- 下边的写法是正确的，需要有参数 -->
<current-user #default="{ user }">
  {{ user.firstName }}
</current-user>
```

#### 动态插槽名

````html
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>
</base-layout>
````

#### 编译作用域

父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

#### <u>**作用域插槽**</u>

```html
<!-- 
	例如在父组件中使用子组件中的数据，由于作用域的存在，获取不到，所以就要使用作用域插槽的方式，
	来将子作用域中的数据绑定到slot上，然后在父组件中通过v-slot来使用
-->
<body>
    <div id="app">
        <current-user>
            <!-- 
                当组件中只有一个默认的插槽的时候，default可以省略 
                默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确
                只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法
            -->
            <!-- 
				2. 现在在父级作用域中，我们可以使用带值的 v-slot:插槽名 来定义我们接收插槽 prop 的名字，例如 slotProps
			-->
            <template v-slot:default="slotProps">
                {{ slotProps.user.firstName }}
            </template>
            <!-- 
                对于命名插槽，则需要写上插槽名字 v-slot:name="dataName" 
                dataName 就是在子组件中绑定到对于插槽上的数据别名。
                解构插槽props， 同时也可以给props进行重命名
            -->
            <template v-slot:list="{ list: cList }">
                <ul>
                    <li v-for="item in cList">{{ item }}</li>
                </ul>
            </template>
        </current-user>
    </div>
    <template id="bl">
        <span>
            <!-- 
                具名插槽，默认携带的name是default
            -->
            <!-- 
				1. 为了让 user 在父级的插槽内容中可用，我们可以将 user 作为 <slot> 元素的一个 attribute 绑定上去 
				绑定在 <slot> 元素上的 attribute 被称为插槽 prop。
			-->
            <slot name="default" v-bind:user="user">{{ user.lastName }}</slot>
            <slot name='list' v-bind:list="list">{{ list[0] }}</slot>
        </span>
    </template>
</body>

<script>
    const currentUser = {
        template: '#bl',
        data: function(){
            return {
                user:{
                    firstName:'jerry',
                    lastName: 'tom',
                },
                list: [ 1, 2, 3, 4 ]

            }
        }
    }
    // 父组件
    let app = new Vue({
        el: '#app',
        data: {},
        components: {
            'current-user': currentUser,
        },
    });
</script>
```





 ## 方法 methods

# 组件化

# webpack

