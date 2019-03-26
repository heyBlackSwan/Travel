<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of this.recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title" v-text="item.title"></p>
                    <p class="item-desc" v-text="item.desc"></p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: ['recommendList'],
    data () {
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background-color #eee
        text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            min-width 0
            padding .1rem
            .item-title
                line-height .54rem
                font-size .32rem
            .item-desc
                line-height .4rem
                color #CCC
                ellipsis ()
            .item-button
                line-height .44rem
                margin-top .16rem
                background-color #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff

</style>
