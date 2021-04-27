<template>
    <div class="hello">
        <div>index</div>
        <div>store name的值为： {{ $store.state.name }}</div>
        <button @click="handleBtnClick">button</button>
        <button @click="handleChangeName">changeName</button>
    </div>
</template>

<script>
import Vue from 'vue';


export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    created: function(){
        console.log( this.$store.state.name );  
        console.log( this.$store.getters.fullInfo );

        console.log( this.$store );
    },
    methods: {
        handleBtnClick: function() {
            this.$router.push("/");
        },
        handleChangeName(){
            this.$store.commit('edit', 123);
        }
    }
};
</script>

<style scoped>
</style>
