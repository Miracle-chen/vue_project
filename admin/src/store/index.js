import Vue from 'vue';
import Vuex from 'vuex';

// 挂载插件
Vue.use(Vuex);

// 创建store Vuex对象

/*
    vuex成员列表

    state  数据
    mutations  state成员操作，如增删改等等操作
    getter  处理state数据
    actions  异步操作
    modules  模块化状态管理
*/ 


// store的初始值
const state = {
    name: 'initial name',
    age: 20,
}
// mutations 改变   dispatch 派发

// mutations方法都有默认的传参，
const mutations = {
    // state 是当前store的数据     payload 调用方法时候传递的参数
    edit(state, payload){
        state.name = 'new Name';

    },
    growUp(state, payload){
        state.age += payload;
    }
}
// 获取state中的数据
    // getters 方法默认接收两个参数， state 当前的数据  getters 当前的getters对象，可以使用当前对象下的其他方法
const getters = {
    nameInfo(state) {
        return state.name;
    },
    fullInfo(state,getters){
        return getters.nameInfo+' 年龄:'+state.age
    }  
}
// 由于直接在mutation方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交mutation方法。
const actions = {
    // context  当前上下文，获取this的指向问题  payload 传递的参数
    aEdit(context,payload){
        return new Promise(resolve => {
            setTimeout(()=>{
                // 异步响应之后触发回调函数，执行mutations中的方法，更改state
                context.commit('growUp',payload);
                resolve();
            },2000)
        })
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});

export default store;