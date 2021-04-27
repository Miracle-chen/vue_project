# vuex

vue状态管理工具。

​    *1.基本使用*



​    *Vue.use(vuex);*

​    *let store = new Vuex.store({*

​      *store:{},*

​      *getters:{},*

​      *mutations: {},*

​      *actions: {},*

​      *modules:{},*

​    *});*

​    *顶层组件中引入store。*



​    *2.Vuex包含5个对象*



​    *store 一个全局仓库，存放全局共享的数据*

​      *store中的数据是响应式的，不能直接修改，需要使用commit mutations的方式进行数据更新。*



​    *getters state 的计算属性*



​    *mutations 同步操作，提交更改数据的方法（commit）*

​    *+ 内部的方法接收两个参数， state 和 传进的data*



​    *actions 异步操作，然后提交到mutations，进行数据更新（dispatch）*



​    *modules 将一个大的store拆分成一些小的模块，方便管理。*



​    *+ dispatch触发actions，commit触发mutations。commit('mutations方法', 数据)*



​    *3.语法糖辅助*

​    *mapState | mapActions | mapGetter | mapMutations*



​    *mapState和mapGetters 只能在 computed中使用。*

​    *mapMutations和mapActions 只能在 methods 中使用。*

