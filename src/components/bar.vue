<template>
    <div>
        <p>bar</p>
        <p>{{ message }}</p>

        <button :class="{'ict-item-disabled':
           disabled, 'ict-item-active': btnActive}" :disabled="disabled" v-on:click="on_tap">{{ title }}</button>
    </div>
</template>

<script>
    module.exports = {
        data: function (){
            return {
                message: "嘿 siri",
                title: "switch",
                disabled: false,
                btnActive: false
            }
        },
        methods:{
            on_tap(){
                this.btnActive = !this.btnActive
                console.log("tap")
            }
        }
    }
</script>

<style lang="less">
            .ict-item-questionnaire{    color: #666;    height: .8rem;    border-radius: .675rem;    border: 1px solid #eee;    padding: .2rem .3rem;    margin-right: .5rem;    display: inline-block;    line-height: .8rem;  }
            .ict-item-active{    color: white;    background: #00b0f0;  }
</style>