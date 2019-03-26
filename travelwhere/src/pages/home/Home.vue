<template>
    <div>
        <Home-header :city="city"></Home-header>  
        <Home-swiper :swiperList="swiperList"></Home-swiper>
        <Home-icons :iconList="iconList"></Home-icons>
        <Home-recommend :recommendList="recommendList"></Home-recommend>
        <Home-weekend :weekendList="weekendList"></Home-weekend>
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
    name: 'home',
    data () {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    mounted() {
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            console.log(res)
            let _this = this;
            if (res.data.ret && res.data) {
                const data = res.data.data;
                _this.city = data.city;
                _this.swiperList = data.swiperList;
                _this.iconList = data.iconList;
                _this.recommendList = data.recommendList;
                _this.weekendList = data.weekendList;
            }
        }
    }

}
</script>

<style>
    
</style>
