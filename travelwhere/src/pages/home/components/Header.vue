<template>
    <div class="header"> 
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            请输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{ this.city }}
                <span class="iconfont arrow-icon">&#xe607;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        props: ['city']
    }
</script>

<style lang="stylus" scoped>
// 样式中引入styl文件，CSS loader 会把非根路径解释为相对路径，加~前缀才会解释成模块路径
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background-color: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left 
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            background-color: #fff
            border-radius: .1rem
            color: #CCC
            padding-left: .2rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            color #fff
            .arrow-icon
                font-size: .24rem
                margin-left: -.04rem
</style>
