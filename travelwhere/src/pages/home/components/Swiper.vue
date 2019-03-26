<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of this.swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="门票">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: ['swiperList'],
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,     //是否能够循环
                autoplay: 3000,         // 自动切换
                speed: 1000,             // 切换速度
                autoplayDisableOnInteraction: false         // 用户操作后是否停下轮播
            }
        }
    },
    computed: {
        showSwiper () {
            return this.swiperList.length
        }
    },
    mounted() {

    },
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color #FFF !important
    .wrapper 
        width 100%
        overflow hidden
        height 0
        padding-bottom 31.25%
        background-color #eee
        .swiper-img
            width 100%
</style>
