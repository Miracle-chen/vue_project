<template>
    <div class="hello">
        <div>home</div>
        {{  this.$store.state.age + ' ' + this.$store.state.name }}
        <button @click="handleBtnClick">button</button>
        <button @click="handleGrowUp">plus</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    methods: {
        handleBtnClick: function() {
            this.$router.push("/index");
        },
        handleGrowUp: function(){
            this.$store.dispatch('aEdit', 2 )
        }
    }
};
</script>

<style scoped>

</style>
